use std::{
    env,
    net::SocketAddr,
    sync::{Arc, RwLock},
};

use axum::{
    Json, Router,
    extract::{Path, State},
    http::{HeaderMap, Method, StatusCode},
    response::{IntoResponse, Response},
    routing::{get, post},
};
use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use tower_http::{
    cors::{Any, CorsLayer},
    trace::TraceLayer,
};
use uuid::Uuid;

#[derive(Clone)]
struct AppState {
    store: Arc<RwLock<Store>>,
    admin_password: String,
}

#[derive(Default)]
struct Store {
    sightings: Vec<SightingSubmission>,
    threads: Vec<ThreadSubmission>,
    replies: Vec<ReplySubmission>,
    moderation_log: Vec<ModerationRecord>,
}

#[derive(Debug, Serialize)]
struct HealthResponse {
    ok: bool,
    service: &'static str,
    timestamp: DateTime<Utc>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
struct EvidenceMeta {
    name: String,
    content_type: String,
    size: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
struct SightingSubmission {
    id: Uuid,
    reporter_handle: String,
    reporter_email: Option<String>,
    title: String,
    location_text: String,
    water_type: String,
    observed_at: Option<String>,
    cow_count: u16,
    water_involvement: String,
    confidence_level: String,
    cow_behavior: String,
    energy_drink_present: Option<String>,
    description: String,
    evidence: Vec<EvidenceMeta>,
    status: ReviewStatus,
    created_at: DateTime<Utc>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
struct CreateSightingRequest {
    reporter_handle: String,
    reporter_email: Option<String>,
    title: String,
    location_text: String,
    water_type: String,
    observed_at: Option<String>,
    cow_count: u16,
    water_involvement: String,
    confidence_level: String,
    cow_behavior: String,
    energy_drink_present: Option<String>,
    description: String,
    evidence: Vec<EvidenceMeta>,
    honeypot: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
struct ThreadSubmission {
    id: Uuid,
    category: String,
    handle: String,
    email: Option<String>,
    title: String,
    body: String,
    status: ReviewStatus,
    created_at: DateTime<Utc>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
struct CreateThreadRequest {
    category: String,
    handle: String,
    email: Option<String>,
    title: String,
    body: String,
    honeypot: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
struct ReplySubmission {
    id: Uuid,
    thread_slug: String,
    handle: String,
    email: Option<String>,
    body: String,
    status: ReviewStatus,
    created_at: DateTime<Utc>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
struct CreateReplyRequest {
    thread_slug: String,
    handle: String,
    email: Option<String>,
    body: String,
    honeypot: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
struct ModerateRequest {
    action: ModerationAction,
    public_note: Option<String>,
    private_note: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
struct ModerationEventRequest {
    item: String,
    action: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
enum ReviewStatus {
    Pending,
    UnderReview,
    Approved,
    Rejected,
    Archived,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
enum ModerationAction {
    Approve,
    Reject,
    MarkUnderReview,
    Pin,
    Lock,
    Archive,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct ModerationRecord {
    id: Uuid,
    item_type: String,
    item_id: Uuid,
    action: ModerationAction,
    public_note: Option<String>,
    private_note: Option<String>,
    created_at: DateTime<Utc>,
}

#[derive(Debug, Serialize)]
#[serde(rename_all = "camelCase")]
struct AcceptedResponse {
    id: Uuid,
    status: ReviewStatus,
    message: &'static str,
}

#[derive(Debug, Serialize)]
#[serde(rename_all = "camelCase")]
struct QueueResponse {
    sightings: Vec<SightingSubmission>,
    threads: Vec<ThreadSubmission>,
    replies: Vec<ReplySubmission>,
    moderation_log: Vec<ModerationRecord>,
}

#[derive(Debug, Serialize)]
#[serde(rename_all = "camelCase")]
struct ErrorBody {
    message: String,
    issues: Vec<String>,
}

#[derive(Debug)]
struct ApiError {
    status: StatusCode,
    message: String,
    issues: Vec<String>,
}

impl ApiError {
    fn bad_request(message: impl Into<String>, issues: Vec<String>) -> Self {
        Self {
            status: StatusCode::BAD_REQUEST,
            message: message.into(),
            issues,
        }
    }

    fn unauthorized() -> Self {
        Self {
            status: StatusCode::UNAUTHORIZED,
            message: "Admin password not recognized.".to_string(),
            issues: vec![],
        }
    }

    fn not_found(item: &str) -> Self {
        Self {
            status: StatusCode::NOT_FOUND,
            message: format!("{item} was not found."),
            issues: vec![],
        }
    }

    fn internal(message: impl Into<String>) -> Self {
        Self {
            status: StatusCode::INTERNAL_SERVER_ERROR,
            message: message.into(),
            issues: vec![],
        }
    }
}

impl IntoResponse for ApiError {
    fn into_response(self) -> Response {
        (
            self.status,
            Json(ErrorBody {
                message: self.message,
                issues: self.issues,
            }),
        )
            .into_response()
    }
}

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    tracing_subscriber::fmt()
        .with_env_filter(
            tracing_subscriber::EnvFilter::try_from_default_env()
                .unwrap_or_else(|_| "seacows_backend=info,tower_http=info".into()),
        )
        .init();

    let port = env::var("PORT")
        .ok()
        .and_then(|value| value.parse::<u16>().ok())
        .unwrap_or(8787);
    let admin_password = env::var("ADMIN_PASSWORD").unwrap_or_else(|_| "seacow-review".to_string());

    let state = AppState {
        store: Arc::new(RwLock::new(Store::seeded())),
        admin_password,
    };

    let app = Router::new()
        .route("/health", get(health))
        .route("/api/sightings", post(create_sighting))
        .route("/api/forum/threads", post(create_thread))
        .route(
            "/api/forum/threads/{thread_slug}/replies",
            post(create_reply),
        )
        .route("/api/admin/queue", get(admin_queue))
        .route(
            "/api/admin/{item_type}/{item_id}/moderate",
            post(moderate_item),
        )
        .route(
            "/api/admin/moderation-events",
            post(record_moderation_event),
        )
        .layer(
            CorsLayer::new()
                .allow_methods([Method::GET, Method::POST, Method::OPTIONS])
                .allow_origin(Any)
                .allow_headers(Any),
        )
        .layer(TraceLayer::new_for_http())
        .with_state(state);

    let addr = SocketAddr::from(([127, 0, 0, 1], port));
    tracing::info!("Sea Cows Are Real Rust API listening on http://{addr}");
    let listener = tokio::net::TcpListener::bind(addr).await?;
    axum::serve(listener, app)
        .with_graceful_shutdown(shutdown_signal())
        .await?;
    Ok(())
}

async fn shutdown_signal() {
    let ctrl_c = async {
        tokio::signal::ctrl_c()
            .await
            .expect("failed to install Ctrl+C handler");
    };

    #[cfg(unix)]
    let terminate = async {
        tokio::signal::unix::signal(tokio::signal::unix::SignalKind::terminate())
            .expect("failed to install signal handler")
            .recv()
            .await;
    };

    #[cfg(not(unix))]
    let terminate = std::future::pending::<()>();

    tokio::select! {
        _ = ctrl_c => {},
        _ = terminate => {},
    }
}

async fn health() -> Json<HealthResponse> {
    Json(HealthResponse {
        ok: true,
        service: "seacows-rust-api",
        timestamp: Utc::now(),
    })
}

async fn create_sighting(
    State(state): State<AppState>,
    Json(request): Json<CreateSightingRequest>,
) -> Result<(StatusCode, Json<AcceptedResponse>), ApiError> {
    if is_spam(&request.honeypot) {
        return Ok(accepted_without_storage());
    }

    let mut issues = vec![];
    require("Reporter handle", &request.reporter_handle, &mut issues);
    require("Sighting title", &request.title, &mut issues);
    require("Location text", &request.location_text, &mut issues);
    require("Water type", &request.water_type, &mut issues);
    require("Water involvement", &request.water_involvement, &mut issues);
    require("Confidence level", &request.confidence_level, &mut issues);
    require("Cow behavior", &request.cow_behavior, &mut issues);
    require("Description", &request.description, &mut issues);

    if request.description.trim().len() < 60 {
        issues
            .push("Description should include at least 60 characters of field detail.".to_string());
    }
    if request.description.len() > 4000 {
        issues.push("Description must be 4,000 characters or fewer.".to_string());
    }
    if request.cow_count == 0 {
        issues.push("Cow count must be at least 1.".to_string());
    }
    for evidence in &request.evidence {
        if !evidence.content_type.starts_with("image/") {
            issues.push(format!("{} is not an image.", evidence.name));
        }
        if evidence.size > 6 * 1024 * 1024 {
            issues.push(format!(
                "{} exceeds the 6 MB evidence limit.",
                evidence.name
            ));
        }
    }

    if !issues.is_empty() {
        return Err(ApiError::bad_request(
            "The report needs more information before it can be submitted.",
            issues,
        ));
    }

    let submission = SightingSubmission {
        id: Uuid::new_v4(),
        reporter_handle: request.reporter_handle.trim().to_string(),
        reporter_email: clean_optional(request.reporter_email),
        title: request.title.trim().to_string(),
        location_text: request.location_text.trim().to_string(),
        water_type: request.water_type.trim().to_string(),
        observed_at: clean_optional(request.observed_at),
        cow_count: request.cow_count,
        water_involvement: request.water_involvement.trim().to_string(),
        confidence_level: request.confidence_level.trim().to_string(),
        cow_behavior: request.cow_behavior.trim().to_string(),
        energy_drink_present: clean_optional(request.energy_drink_present),
        description: request.description.trim().to_string(),
        evidence: request.evidence,
        status: ReviewStatus::Pending,
        created_at: Utc::now(),
    };
    let id = submission.id;

    state
        .store
        .write()
        .map_err(|_| ApiError::internal("Store lock was poisoned."))?
        .sightings
        .push(submission);

    Ok((
        StatusCode::ACCEPTED,
        Json(AcceptedResponse {
            id,
            status: ReviewStatus::Pending,
            message: "Report received. Your sighting has been assigned preliminary review status.",
        }),
    ))
}

async fn create_thread(
    State(state): State<AppState>,
    Json(request): Json<CreateThreadRequest>,
) -> Result<(StatusCode, Json<AcceptedResponse>), ApiError> {
    if is_spam(&request.honeypot) {
        return Ok(accepted_without_storage());
    }

    let mut issues = vec![];
    require("Forum category", &request.category, &mut issues);
    require("Handle", &request.handle, &mut issues);
    require("Thread title", &request.title, &mut issues);
    require("Thread body", &request.body, &mut issues);

    if request.title.len() > 140 {
        issues.push("Thread title must be 140 characters or fewer.".to_string());
    }
    if request.body.trim().len() < 40 {
        issues.push("Thread body should include at least 40 characters.".to_string());
    }
    if request.body.len() > 3500 {
        issues.push("Thread body must be 3,500 characters or fewer.".to_string());
    }

    if !issues.is_empty() {
        return Err(ApiError::bad_request(
            "The thread needs more information before review.",
            issues,
        ));
    }

    let submission = ThreadSubmission {
        id: Uuid::new_v4(),
        category: request.category.trim().to_string(),
        handle: request.handle.trim().to_string(),
        email: clean_optional(request.email),
        title: request.title.trim().to_string(),
        body: request.body.trim().to_string(),
        status: ReviewStatus::Pending,
        created_at: Utc::now(),
    };
    let id = submission.id;

    state
        .store
        .write()
        .map_err(|_| ApiError::internal("Store lock was poisoned."))?
        .threads
        .push(submission);

    Ok((
        StatusCode::ACCEPTED,
        Json(AcceptedResponse {
            id,
            status: ReviewStatus::Pending,
            message: "Thread submitted for moderator review.",
        }),
    ))
}

async fn create_reply(
    State(state): State<AppState>,
    Path(thread_slug): Path<String>,
    Json(request): Json<CreateReplyRequest>,
) -> Result<(StatusCode, Json<AcceptedResponse>), ApiError> {
    if is_spam(&request.honeypot) {
        return Ok(accepted_without_storage());
    }

    let mut issues = vec![];
    require("Handle", &request.handle, &mut issues);
    require("Reply body", &request.body, &mut issues);
    if request.body.trim().len() < 20 {
        issues.push("Reply should include at least 20 characters.".to_string());
    }
    if request.body.len() > 2500 {
        issues.push("Reply must be 2,500 characters or fewer.".to_string());
    }

    if !issues.is_empty() {
        return Err(ApiError::bad_request(
            "The reply needs more information before review.",
            issues,
        ));
    }

    let submission = ReplySubmission {
        id: Uuid::new_v4(),
        thread_slug: if request.thread_slug.trim().is_empty() {
            thread_slug
        } else {
            request.thread_slug.trim().to_string()
        },
        handle: request.handle.trim().to_string(),
        email: clean_optional(request.email),
        body: request.body.trim().to_string(),
        status: ReviewStatus::Pending,
        created_at: Utc::now(),
    };
    let id = submission.id;

    state
        .store
        .write()
        .map_err(|_| ApiError::internal("Store lock was poisoned."))?
        .replies
        .push(submission);

    Ok((
        StatusCode::ACCEPTED,
        Json(AcceptedResponse {
            id,
            status: ReviewStatus::Pending,
            message: "Your reply has been submitted for moderator review.",
        }),
    ))
}

async fn admin_queue(
    State(state): State<AppState>,
    headers: HeaderMap,
) -> Result<Json<QueueResponse>, ApiError> {
    require_admin(&state, &headers)?;
    let store = state
        .store
        .read()
        .map_err(|_| ApiError::internal("Store lock was poisoned."))?;

    Ok(Json(QueueResponse {
        sightings: store.sightings.clone(),
        threads: store.threads.clone(),
        replies: store.replies.clone(),
        moderation_log: store.moderation_log.clone(),
    }))
}

async fn moderate_item(
    State(state): State<AppState>,
    headers: HeaderMap,
    Path((item_type, item_id)): Path<(String, Uuid)>,
    Json(request): Json<ModerateRequest>,
) -> Result<Json<ModerationRecord>, ApiError> {
    require_admin(&state, &headers)?;
    let mut store = state
        .store
        .write()
        .map_err(|_| ApiError::internal("Store lock was poisoned."))?;

    let found = match item_type.as_str() {
        "sighting" | "sightings" => update_status(
            store
                .sightings
                .iter_mut()
                .find(|item| item.id == item_id)
                .map(|item| &mut item.status),
            &request.action,
        ),
        "thread" | "threads" => update_status(
            store
                .threads
                .iter_mut()
                .find(|item| item.id == item_id)
                .map(|item| &mut item.status),
            &request.action,
        ),
        "reply" | "replies" => update_status(
            store
                .replies
                .iter_mut()
                .find(|item| item.id == item_id)
                .map(|item| &mut item.status),
            &request.action,
        ),
        _ => false,
    };

    if !found {
        return Err(ApiError::not_found("Moderation target"));
    }

    let record = ModerationRecord {
        id: Uuid::new_v4(),
        item_type,
        item_id,
        action: request.action,
        public_note: clean_optional(request.public_note),
        private_note: clean_optional(request.private_note),
        created_at: Utc::now(),
    };
    store.moderation_log.push(record.clone());

    Ok(Json(record))
}

async fn record_moderation_event(
    State(state): State<AppState>,
    headers: HeaderMap,
    Json(request): Json<ModerationEventRequest>,
) -> Result<Json<AcceptedResponse>, ApiError> {
    require_admin(&state, &headers)?;

    let mut issues = vec![];
    require("Moderation item", &request.item, &mut issues);
    require("Moderation action", &request.action, &mut issues);
    if !issues.is_empty() {
        return Err(ApiError::bad_request(
            "Select a moderation action before submitting.",
            issues,
        ));
    }

    state
        .store
        .write()
        .map_err(|_| ApiError::internal("Store lock was poisoned."))?
        .moderation_log
        .push(ModerationRecord {
            id: Uuid::new_v4(),
            item_type: format!("manual: {}", request.item.trim()),
            item_id: Uuid::new_v4(),
            action: action_from_form_value(&request.action),
            public_note: None,
            private_note: None,
            created_at: Utc::now(),
        });

    Ok(Json(AcceptedResponse {
        id: Uuid::new_v4(),
        status: ReviewStatus::Approved,
        message: "Moderation event recorded by the Rust backend.",
    }))
}

impl Store {
    fn seeded() -> Self {
        Self {
            sightings: vec![SightingSubmission {
                id: Uuid::new_v4(),
                reporter_handle: "CreekWitness".to_string(),
                reporter_email: None,
                title: "Creekside Stationary Cow".to_string(),
                location_text: "Creek bend, location withheld".to_string(),
                water_type: "Creek".to_string(),
                observed_at: Some("2026-06-06".to_string()),
                cow_count: 1,
                water_involvement: "Standing in water".to_string(),
                confidence_level: "Probable".to_string(),
                cow_behavior: "Stationary".to_string(),
                energy_drink_present: Some("Unknown".to_string()),
                description: "Possible standing-in-water event near creek bend. Evidence upload pending moderator review.".to_string(),
                evidence: vec![],
                status: ReviewStatus::Pending,
                created_at: Utc::now(),
            }],
            threads: vec![ThreadSubmission {
                id: Uuid::new_v4(),
                category: "Research & Taxonomy".to_string(),
                handle: "DamLineReader".to_string(),
                email: None,
                title: "Should a reservoir count as sea for registry purposes?".to_string(),
                body: "Requesting clarification on freshwater terminology and whether dual-habitat bovine behavior changes the saltwater question.".to_string(),
                status: ReviewStatus::Pending,
                created_at: Utc::now(),
            }],
            replies: vec![],
            moderation_log: vec![],
        }
    }
}

fn accepted_without_storage() -> (StatusCode, Json<AcceptedResponse>) {
    (
        StatusCode::ACCEPTED,
        Json(AcceptedResponse {
            id: Uuid::new_v4(),
            status: ReviewStatus::Pending,
            message: "Submission received for moderator review.",
        }),
    )
}

fn require(label: &str, value: &str, issues: &mut Vec<String>) {
    if value.trim().is_empty() {
        issues.push(format!("{label} is required."));
    }
}

fn clean_optional(value: Option<String>) -> Option<String> {
    value.and_then(|inner| {
        let trimmed = inner.trim().to_string();
        (!trimmed.is_empty()).then_some(trimmed)
    })
}

fn is_spam(value: &Option<String>) -> bool {
    value
        .as_deref()
        .is_some_and(|field| !field.trim().is_empty())
}

fn require_admin(state: &AppState, headers: &HeaderMap) -> Result<(), ApiError> {
    let password = headers
        .get("x-admin-password")
        .and_then(|value| value.to_str().ok());

    match password {
        Some(value) if value == state.admin_password => Ok(()),
        _ => Err(ApiError::unauthorized()),
    }
}

fn update_status(status: Option<&mut ReviewStatus>, action: &ModerationAction) -> bool {
    let Some(status) = status else {
        return false;
    };

    *status = match action {
        ModerationAction::Approve | ModerationAction::Pin | ModerationAction::Lock => {
            ReviewStatus::Approved
        }
        ModerationAction::Reject => ReviewStatus::Rejected,
        ModerationAction::MarkUnderReview => ReviewStatus::UnderReview,
        ModerationAction::Archive => ReviewStatus::Archived,
    };
    true
}

fn action_from_form_value(value: &str) -> ModerationAction {
    match value {
        "approved" | "approve" => ModerationAction::Approve,
        "rejected" | "reject" => ModerationAction::Reject,
        "under review" | "under_review" => ModerationAction::MarkUnderReview,
        "pinned" | "pin" => ModerationAction::Pin,
        "locked" | "lock" => ModerationAction::Lock,
        "archived" | "archive" => ModerationAction::Archive,
        _ => ModerationAction::MarkUnderReview,
    }
}
