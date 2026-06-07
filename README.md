# Sea Cows Are Real

Production-quality MVP for `seacowsarereal.com`: a sober registry, forum, research archive, and moderation surface for aquatic bovine sightings.

## Stack

- Next.js App Router, TypeScript, Tailwind CSS
- Rust backend API with Axum
- Render-ready Rust API deployment
- Supabase Postgres and Supabase Storage-ready schema
- Vercel-ready frontend deployment

The frontend ships with seeded local data so the site is reviewable immediately. Set `RUST_API_URL` to route public submissions and admin moderation actions through the Rust API.

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Run the Rust API separately:

```bash
npm run backend:dev
```

Run both services together:

```bash
npm run dev:full
```

## Environment Variables

Frontend:

```bash
RUST_API_URL=http://127.0.0.1:8787
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_STORAGE_BUCKET=sea-cow-evidence
ADMIN_PASSWORD=seacow-review
SESSION_SECRET=
```

Rust backend:

```bash
PORT=8787
ADMIN_PASSWORD=seacow-review
DATABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_STORAGE_BUCKET=sea-cow-evidence
```

`DATABASE_URL` is reserved for the Postgres persistence adapter. The current Rust MVP uses a seeded in-memory store.

## Supabase Setup

1. Create a Supabase project.
2. Run `supabase/schema.sql` in the SQL editor or through the Supabase CLI.
3. Run `supabase/seed.sql` for baseline categories, sightings, threads, and articles.
4. Create a private Storage bucket named by `SUPABASE_STORAGE_BUCKET`.
5. Keep `SUPABASE_SERVICE_ROLE_KEY` server-only.

Public forms should insert pending rows. Public reads are limited by RLS policies to approved/public records.

## Rust API

Health check:

```bash
curl http://127.0.0.1:8787/health
```

Main endpoints:

- `POST /api/sightings`
- `POST /api/forum/threads`
- `POST /api/forum/threads/:thread_slug/replies`
- `GET /api/admin/queue`
- `POST /api/admin/:item_type/:item_id/moderate`
- `POST /api/admin/moderation-events`

Admin endpoints require `x-admin-password`.

## Render API Deployment

This repo's backend is ready for a Render Rust web service. The Next frontend
currently uses Server Actions, cookies, redirects, and revalidation, so keep it
on a host that runs `next start` or a verified Next adapter. Point the frontend
at Render with `RUST_API_URL`.

The Render blueprint is in `render.yaml`. It deploys the Rust API from
`backend/`, runs `cargo build --release`, starts
`./target/release/seacows-backend`, and checks `/health`.

Render environment variables:

```bash
ADMIN_PASSWORD=<same value used by frontend ADMIN_PASSWORD>
RUST_LOG=seacows_backend=info,tower_http=info
```

The API reads Render's `PORT` and binds to `0.0.0.0:$PORT`. Locally it defaults
to `8787`, so this still works:

```bash
npm run backend:dev
curl http://127.0.0.1:8787/health
```

Set the frontend environment variable to the Render API origin:

```bash
RUST_API_URL=https://your-service.onrender.com
```

For Porkbun, keep the root domain on the frontend host unless the whole site is
served elsewhere. If using an API subdomain, add it in Render under Custom
Domains, then point DNS at the Render service:

```text
api  CNAME  your-service.onrender.com
```

Current production caveat: the Rust API still uses an in-memory store. Submitted
sightings, threads, replies, and moderation records will reset on restart or
redeploy until the Postgres adapter is added.

## Admin Login

Go to `/admin`. The local fallback password is:

```text
seacow-review
```

Set `ADMIN_PASSWORD` in production. Public emails, private notes, and IP hashes should never be rendered publicly.

## Moderation Model

- Sightings, threads, and replies default to pending.
- Approved sightings and approved forum content can appear publicly.
- Rejected submissions remain private.
- Misclassified sightings may appear publicly when they clarify registry standards.
- Evidence uploads stay private until the sighting is approved.

## Verification

```bash
npm run lint
npm run build
npm run backend:check
npm run backend:build:release
cargo fmt --manifest-path backend/Cargo.toml --check
```

Browser-level verification should cover homepage density, responsive layout, registry case detail, report form validation, thread reply submission, and admin login/moderation controls.

## Known Limitations

- Search and filters are styled but not connected to full-text querying.
- Rust API persistence is in-memory until the Postgres adapter is added.
- Evidence upload metadata is validated; binary upload storage should be connected to Supabase Storage in production.
- Admin moderation actions are functional as API flows but do not yet mutate the frontend's static seed data.
