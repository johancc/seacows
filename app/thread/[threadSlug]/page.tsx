import { notFound } from "next/navigation";

import { ReplyForm } from "@/components/forms";
import { ReplyStack, ThreadPost } from "@/components/forum-components";
import { ThreadBadges } from "@/components/status-badge";
import { Breadcrumbs, Notice, PageShell, SectionHeader } from "@/components/site-shell";
import {
  forumThreads,
  getCategory,
  getRepliesForThread,
  getThread,
} from "@/lib/data";

export function generateStaticParams() {
  return forumThreads.map((thread) => ({ threadSlug: thread.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ threadSlug: string }>;
}) {
  const { threadSlug } = await params;
  const thread = getThread(threadSlug);
  return {
    title: thread ? thread.title : "Forum Thread",
  };
}

export default async function ThreadPage({
  params,
}: {
  params: Promise<{ threadSlug: string }>;
}) {
  const { threadSlug } = await params;
  const thread = getThread(threadSlug);
  if (!thread || thread.status !== "approved") {
    notFound();
  }

  const category = getCategory(thread.categorySlug);
  const replies = getRepliesForThread(thread.slug);

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { href: "/forum", label: "Forum" },
          ...(category
            ? [{ href: `/forum/${category.slug}`, label: category.name }]
            : []),
          { label: thread.title },
        ]}
      />
      <div className="space-y-6">
        <section className="rounded-md border border-[var(--line)] bg-[var(--paper)] p-4 shadow-[0_8px_24px_rgba(16,35,63,0.04)]">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--burgundy)]">
                {category?.name ?? "Forum Thread"}
              </p>
              <h1 className="mt-1 break-words font-serif text-2xl font-bold leading-tight text-[var(--navy)] sm:text-3xl">
                {thread.title}
              </h1>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Started by {thread.authorHandle} · {thread.createdAt} ·{" "}
                {thread.viewsCount.toLocaleString()} views
              </p>
            </div>
            <ThreadBadges thread={thread} />
          </div>
        </section>

        {thread.hasModeratorNote ? (
          <Notice tone="slate">
            Mod note: talk is fine, case numbers are separate. If you have new
            evidence, link the file or make a new report instead of burying it
            on page six.
          </Notice>
        ) : null}

        <ThreadPost
          author={thread.authorHandle}
          isOriginal
          postNumber={1}
          timestamp={thread.createdAt}
        >
          {thread.body.split("\n").map((paragraph, index) => (
            <p key={`${index}-${paragraph}`}>{paragraph}</p>
          ))}
        </ThreadPost>

        <section className="space-y-4">
          <SectionHeader kicker="Thread Replies" title={`${replies.length} Replies`} />
          <ReplyStack replies={replies} />
        </section>

        <section className="space-y-3">
          <SectionHeader kicker="Quick Reply" title="Reply to Thread" />
          <ReplyForm threadSlug={thread.slug} />
        </section>
      </div>
    </PageShell>
  );
}
