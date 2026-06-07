# Sea Cows Are Real

Production-quality MVP for `seacowsarereal.com`: a sober registry, forum, research archive, and moderation surface for aquatic bovine sightings.

## Stack

- Next.js App Router, TypeScript, Tailwind CSS
- Rust backend API with Axum
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
```

Browser-level verification should cover homepage density, responsive layout, registry case detail, report form validation, thread reply submission, and admin login/moderation controls.

## Known Limitations

- Search and filters are styled but not connected to full-text querying.
- Rust API persistence is in-memory until the Postgres adapter is added.
- Evidence upload metadata is validated; binary upload storage should be connected to Supabase Storage in production.
- Admin moderation actions are functional as API flows but do not yet mutate the frontend's static seed data.
