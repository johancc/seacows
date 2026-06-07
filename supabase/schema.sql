create extension if not exists pgcrypto;

create table if not exists sightings (
  id uuid primary key default gen_random_uuid(),
  case_id text unique not null,
  title text not null,
  slug text unique not null,
  reporter_handle text not null,
  reporter_email text,
  location_text text not null,
  water_type text not null,
  observed_at date,
  cow_count integer default 1,
  water_involvement text not null,
  confidence_level text not null,
  cow_behavior text,
  energy_drink_present text,
  description text not null,
  status text not null default 'pending'
    check (status in ('pending', 'under_review', 'confirmed', 'unverified', 'misclassified', 'archived', 'rejected')),
  public_summary text,
  moderator_notes_private text,
  moderator_notes_public text,
  related_thread_id uuid,
  ip_hash text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists evidence_items (
  id uuid primary key default gen_random_uuid(),
  sighting_id uuid references sightings(id) on delete cascade,
  storage_path text not null,
  public_url text,
  caption text,
  media_type text default 'image',
  created_at timestamptz default now()
);

create table if not exists forum_categories (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  description text not null,
  sort_order integer default 0,
  created_at timestamptz default now()
);

create table if not exists forum_threads (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references forum_categories(id) on delete set null,
  slug text unique not null,
  title text not null,
  body text not null,
  author_handle text not null,
  author_email text,
  status text default 'pending'
    check (status in ('pending', 'approved', 'rejected', 'archived')),
  is_pinned boolean default false,
  is_locked boolean default false,
  views_count integer default 0,
  replies_count integer default 0,
  last_post_at timestamptz default now(),
  ip_hash text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table sightings
  add constraint sightings_related_thread_fk
  foreign key (related_thread_id) references forum_threads(id)
  deferrable initially deferred;

create table if not exists forum_posts (
  id uuid primary key default gen_random_uuid(),
  thread_id uuid references forum_threads(id) on delete cascade,
  body text not null,
  author_handle text not null,
  author_email text,
  status text default 'pending'
    check (status in ('pending', 'approved', 'rejected', 'archived')),
  ip_hash text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists articles (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  subtitle text,
  author_name text not null,
  category text not null,
  body_markdown text not null,
  status text default 'published',
  published_at timestamptz default now(),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index if not exists sightings_status_idx on sightings(status);
create index if not exists sightings_case_id_idx on sightings(case_id);
create index if not exists forum_threads_category_idx on forum_threads(category_id);
create index if not exists forum_threads_status_idx on forum_threads(status);
create index if not exists forum_posts_thread_idx on forum_posts(thread_id);
create index if not exists articles_status_idx on articles(status);

alter table sightings enable row level security;
alter table evidence_items enable row level security;
alter table forum_categories enable row level security;
alter table forum_threads enable row level security;
alter table forum_posts enable row level security;
alter table articles enable row level security;

create policy "public read approved sightings"
  on sightings for select
  using (status in ('under_review', 'confirmed', 'unverified', 'misclassified', 'archived'));

create policy "public insert pending sightings"
  on sightings for insert
  with check (status = 'pending');

create policy "public read evidence for public sightings"
  on evidence_items for select
  using (
    exists (
      select 1 from sightings
      where sightings.id = evidence_items.sighting_id
      and sightings.status in ('confirmed', 'unverified', 'misclassified', 'archived')
    )
  );

create policy "public read forum categories"
  on forum_categories for select
  using (true);

create policy "public read approved threads"
  on forum_threads for select
  using (status = 'approved');

create policy "public insert pending threads"
  on forum_threads for insert
  with check (status = 'pending');

create policy "public read approved posts"
  on forum_posts for select
  using (status = 'approved');

create policy "public insert pending posts"
  on forum_posts for insert
  with check (status = 'pending');

create policy "public read published articles"
  on articles for select
  using (status = 'published');
