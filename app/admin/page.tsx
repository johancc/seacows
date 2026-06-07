import { cookies } from "next/headers";

import { AdminLoginForm, AdminModerationForm } from "@/components/forms";
import { SightingStatusBadge } from "@/components/status-badge";
import { Breadcrumbs, Notice, PageShell, SectionHeader } from "@/components/site-shell";
import { getPublicSightings, pendingAdminItems } from "@/lib/data";

export const metadata = {
  title: "Admin Moderation",
};

type QueueItemType = "sighting" | "thread" | "reply";

type AdminQueueItem = {
  id: string;
  itemType: QueueItemType;
  type: "Sighting" | "Thread" | "Reply";
  title: string;
  submittedBy: string;
  submittedAt: string;
  status: string;
  summary: string;
};

type AdminQueueResult = {
  items: AdminQueueItem[];
  source: "rust" | "fallback";
  message: string;
};

type RustQueueResponse = {
  sightings: RustSighting[];
  threads: RustThread[];
  replies: RustReply[];
};

type RustSighting = {
  id: string;
  reporterHandle: string;
  title: string;
  locationText: string;
  waterType: string;
  waterInvolvement: string;
  confidenceLevel: string;
  description: string;
  status: string;
  createdAt: string;
};

type RustThread = {
  id: string;
  category: string;
  handle: string;
  title: string;
  body: string;
  status: string;
  createdAt: string;
};

type RustReply = {
  id: string;
  threadSlug: string;
  handle: string;
  body: string;
  status: string;
  createdAt: string;
};

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const cookieStore = await cookies();
  const authorized = cookieStore.get("scar_admin")?.value === "review-authorized";
  const { error } = await searchParams;

  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Admin" }]} />
      <div className="space-y-6">
        <SectionHeader kicker="Private Review" level={1} title="Admin Moderation Panel" />
        {!authorized ? (
          <>
            <Notice tone="slate">
              MVP admin access uses the <code>ADMIN_PASSWORD</code> environment
              variable. For local review, the fallback password is{" "}
              <code>seacow-review</code>.
            </Notice>
            <AdminLoginForm error={error === "1"} />
          </>
        ) : (
          <AdminDashboard />
        )}
      </div>
    </PageShell>
  );
}

async function AdminDashboard() {
  const publicSightings = getPublicSightings();
  const queue = await getAdminQueue();

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Notice tone="green">
          Public emails, private moderator notes, and IP hashes are intentionally
          absent from this MVP panel display.
        </Notice>
        <Notice tone={queue.source === "rust" ? "slate" : "amber"}>
          {queue.message}
        </Notice>
      </div>
      <section className="space-y-3">
        <SectionHeader kicker="Pending Queue" title="Sightings, Threads, and Replies" />
        <div className="overflow-hidden overflow-x-auto rounded-md border border-[var(--line)] bg-[var(--paper)] shadow-[0_8px_24px_rgba(16,35,63,0.04)]">
          <table className="forum-table">
            <caption className="sr-only">
              Admin moderation queue for sightings, forum threads, and replies
            </caption>
            <thead>
              <tr>
                <th scope="col">Type</th>
                <th scope="col">Submission</th>
                <th scope="col">Submitted By</th>
                <th scope="col">Status</th>
                <th scope="col">Summary</th>
                <th scope="col">Moderation</th>
              </tr>
            </thead>
            <tbody>
              {queue.items.map((item) => (
                <tr key={item.id}>
                  <td data-label="Type">{item.type}</td>
                  <td className="font-semibold text-[var(--navy)]" data-label="Submission">
                    {item.title}
                  </td>
                  <td data-label="Submitted By">
                    <span className="font-semibold text-[var(--navy)]">{item.submittedBy}</span>
                    <span className="block text-xs text-[var(--muted)]">{item.submittedAt}</span>
                  </td>
                  <td data-label="Status">
                    <QueueStatusBadge status={item.status} />
                  </td>
                  <td className="max-w-md text-sm" data-label="Summary">
                    {item.summary}
                  </td>
                  <td data-label="Moderation">
                    <AdminModerationForm
                      itemId={item.id}
                      itemTitle={item.title}
                      itemType={item.itemType}
                    />
                  </td>
                </tr>
              ))}
              {!queue.items.length ? (
                <tr>
                  <td className="text-sm text-[var(--muted)]" colSpan={6}>
                    No submissions are waiting in the current queue.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <SectionHeader kicker="Published Records" title="Published Sightings" />
        <div className="overflow-hidden overflow-x-auto rounded-md border border-[var(--line)] bg-[var(--paper)] shadow-[0_8px_24px_rgba(16,35,63,0.04)]">
          <table className="forum-table">
            <caption className="sr-only">Published public sighting records</caption>
            <thead>
              <tr>
                <th scope="col">Case</th>
                <th scope="col">Title</th>
                <th scope="col">Status</th>
                <th scope="col">Water Type</th>
                <th scope="col">Water Involvement</th>
                <th scope="col">Updated</th>
              </tr>
            </thead>
            <tbody>
              {publicSightings.map((sighting) => (
                <tr key={sighting.id}>
                  <td className="font-mono text-sm" data-label="Case">
                    {sighting.caseId}
                  </td>
                  <td className="font-semibold text-[var(--navy)]" data-label="Title">
                    {sighting.title}
                  </td>
                  <td data-label="Status">
                    <SightingStatusBadge status={sighting.status} />
                  </td>
                  <td data-label="Water Type">{sighting.waterType}</td>
                  <td data-label="Water Involvement">{sighting.waterInvolvement}</td>
                  <td data-label="Updated">{sighting.submittedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

async function getAdminQueue(): Promise<AdminQueueResult> {
  const fallback = (): AdminQueueResult => ({
    items: pendingAdminItems.map((item) => ({
      id: item.id,
      itemType: item.type.toLowerCase() as QueueItemType,
      type: item.type,
      title: item.title,
      submittedBy: item.submittedBy,
      submittedAt: item.submittedAt,
      status: item.status,
      summary: item.summary,
    })),
    message:
      "Live Rust moderation queue is not configured, so this panel is showing the seeded frontend review queue.",
    source: "fallback",
  });

  const baseUrl = process.env.RUST_API_URL;
  if (!baseUrl) {
    return fallback();
  }

  try {
    const response = await fetch(`${baseUrl.replace(/\/$/, "")}/api/admin/queue`, {
      headers: {
        "x-admin-password": process.env.ADMIN_PASSWORD || "seacow-review",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return {
        ...fallback(),
        message:
          "Live Rust moderation queue rejected the admin request, so this panel is showing the seeded frontend review queue.",
      };
    }

    const queue = (await response.json()) as RustQueueResponse;
    const items = [
      ...queue.sightings.map(mapSighting),
      ...queue.threads.map(mapThread),
      ...queue.replies.map(mapReply),
    ].sort((a, b) => Date.parse(b.submittedAt) - Date.parse(a.submittedAt));

    return {
      items,
      message:
        "This panel is reading the live Rust moderation queue. Applying a decision updates the backend item status immediately.",
      source: "rust",
    };
  } catch {
    return {
      ...fallback(),
      message:
        "Live Rust moderation queue could not be reached, so this panel is showing the seeded frontend review queue.",
    };
  }
}

function mapSighting(item: RustSighting): AdminQueueItem {
  return {
    id: item.id,
    itemType: "sighting",
    type: "Sighting",
    title: item.title,
    submittedBy: item.reporterHandle,
    submittedAt: formatTimestamp(item.createdAt),
    status: item.status,
    summary: [
      item.locationText,
      item.waterType,
      item.waterInvolvement,
      item.confidenceLevel,
      clip(item.description),
    ]
      .filter(Boolean)
      .join(" · "),
  };
}

function mapThread(item: RustThread): AdminQueueItem {
  return {
    id: item.id,
    itemType: "thread",
    type: "Thread",
    title: item.title,
    submittedBy: item.handle,
    submittedAt: formatTimestamp(item.createdAt),
    status: item.status,
    summary: `${item.category} · ${clip(item.body)}`,
  };
}

function mapReply(item: RustReply): AdminQueueItem {
  return {
    id: item.id,
    itemType: "reply",
    type: "Reply",
    title: `Reply to ${item.threadSlug}`,
    submittedBy: item.handle,
    submittedAt: formatTimestamp(item.createdAt),
    status: item.status,
    summary: clip(item.body),
  };
}

function QueueStatusBadge({ status }: { status: string }) {
  const label = status.replace(/_/g, " ");
  const tone =
    status === "approved"
      ? "border-[var(--green)] text-[var(--green)]"
      : status === "rejected" || status === "archived"
        ? "border-[var(--slate)] text-[var(--slate)]"
        : "border-[var(--amber)] text-[var(--amber)]";

  return (
    <span
      className={`inline-flex rounded-sm border bg-[var(--paper-strong)] px-2 py-0.5 text-xs font-bold uppercase ${tone}`}
    >
      {label}
    </span>
  );
}

function formatTimestamp(value: string) {
  const timestamp = Date.parse(value);
  if (Number.isNaN(timestamp)) {
    return value;
  }
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(timestamp);
}

function clip(value: string, length = 140) {
  const trimmed = value.trim();
  return trimmed.length > length ? `${trimmed.slice(0, length - 1)}...` : trimmed;
}
