import Link from "next/link";
import { FileText, MessageSquare, Pin, Reply, Users } from "lucide-react";

import {
  forumCategories,
  getLatestThreadForCategory,
  getThreadsByCategory,
} from "@/lib/data";
import type { ForumCategory, ForumReply, ForumThread } from "@/lib/types";
import { ThreadBadges } from "@/components/status-badge";

export function ForumCategoryTable({
  categories = forumCategories,
  compact = false,
}: {
  categories?: ForumCategory[];
  compact?: boolean;
}) {
  return (
    <div className="overflow-x-auto border border-[var(--line)] bg-[var(--paper)]">
      <table className="forum-table">
        <caption className="sr-only">Forum categories</caption>
        <thead>
          <tr>
            <th scope="col">Forum</th>
            <th scope="col" className="w-24 text-right">
              Topics
            </th>
            <th scope="col" className="w-24 text-right">
              Posts
            </th>
            <th scope="col" className="min-w-60">
              Latest Post
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => {
            const latest = getLatestThreadForCategory(category.slug);
            return (
              <tr key={category.id}>
                <td>
                  <div className="flex gap-3">
                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center border border-[var(--line)] bg-[var(--paper-strong)] text-[var(--burgundy)]">
                      <MessageSquare aria-hidden="true" size={16} />
                    </span>
                    <div>
                      <Link
                        className="font-serif text-lg font-bold text-[var(--navy)] hover:text-[var(--burgundy)]"
                        href={`/forum/${category.slug}`}
                      >
                        {category.name}
                      </Link>
                      <p className="mt-1 max-w-2xl text-sm leading-5 text-[var(--muted)]">
                        {category.description}
                      </p>
                      {!compact ? (
                        <p className="mt-1 text-xs uppercase tracking-[0.08em] text-[var(--muted)]">
                          The category remains open.
                        </p>
                      ) : null}
                    </div>
                  </div>
                </td>
                <td className="text-right font-semibold text-[var(--navy)]">
                  {category.topics.toLocaleString()}
                </td>
                <td className="text-right font-semibold text-[var(--navy)]">
                  {category.posts.toLocaleString()}
                </td>
                <td>
                  {latest ? (
                    <div>
                      <Link
                        className="font-semibold text-[var(--navy)] hover:text-[var(--burgundy)]"
                        href={`/thread/${latest.slug}`}
                      >
                        {latest.title}
                      </Link>
                      <p className="mt-1 text-xs text-[var(--muted)]">
                        by {latest.lastPostAuthor} · {latest.lastPostAt}
                      </p>
                    </div>
                  ) : (
                    <span className="text-sm text-[var(--muted)]">No approved posts</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function ThreadList({
  threads,
  showCategory = false,
}: {
  threads: ForumThread[];
  showCategory?: boolean;
}) {
  return (
    <div className="overflow-x-auto border border-[var(--line)] bg-[var(--paper)]">
      <table className="forum-table">
        <caption className="sr-only">Forum threads</caption>
        <thead>
          <tr>
            <th scope="col">Thread</th>
            {showCategory ? <th scope="col">Category</th> : null}
            <th scope="col" className="w-24 text-right">
              Replies
            </th>
            <th scope="col" className="w-24 text-right">
              Views
            </th>
            <th scope="col" className="min-w-48">
              Last Post
            </th>
          </tr>
        </thead>
        <tbody>
          {threads.map((thread) => {
            const category = forumCategories.find(
              (item) => item.slug === thread.categorySlug,
            );
            return (
              <tr key={thread.id}>
                <td>
                  <div className="flex gap-3">
                    <span className="mt-1 text-[var(--burgundy)]">
                      {thread.isPinned ? (
                        <Pin aria-hidden="true" size={16} />
                      ) : (
                        <FileText aria-hidden="true" size={16} />
                      )}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <Link
                          className="font-semibold text-[var(--navy)] hover:text-[var(--burgundy)]"
                          href={`/thread/${thread.slug}`}
                        >
                          {thread.title}
                        </Link>
                        <ThreadBadges thread={thread} />
                      </div>
                      <p className="mt-1 text-xs text-[var(--muted)]">
                        Started by {thread.authorHandle} · {thread.createdAt}
                      </p>
                    </div>
                  </div>
                </td>
                {showCategory ? (
                  <td className="text-sm">
                    {category ? (
                      <Link
                        className="utility-link"
                        href={`/forum/${category.slug}`}
                      >
                        {category.name}
                      </Link>
                    ) : (
                      "Unsorted"
                    )}
                  </td>
                ) : null}
                <td className="text-right font-semibold text-[var(--navy)]">
                  {thread.repliesCount}
                </td>
                <td className="text-right text-[var(--muted)]">
                  {thread.viewsCount.toLocaleString()}
                </td>
                <td className="text-sm">
                  <p className="font-semibold text-[var(--navy)]">
                    {thread.lastPostAuthor}
                  </p>
                  <p className="text-xs text-[var(--muted)]">{thread.lastPostAt}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function CategoryThreadList({ categorySlug }: { categorySlug: string }) {
  return <ThreadList threads={getThreadsByCategory(categorySlug)} />;
}

export function ThreadPost({
  author,
  timestamp,
  children,
  isModerator = false,
  isOriginal = false,
}: {
  author: string;
  timestamp: string;
  children: React.ReactNode;
  isModerator?: boolean;
  isOriginal?: boolean;
}) {
  return (
    <article className="grid border border-[var(--line)] bg-[var(--paper)] md:grid-cols-[13rem_1fr]">
      <aside className="border-b border-[var(--line)] bg-[var(--paper-strong)] p-4 md:border-b-0 md:border-r">
        <p className="font-serif text-lg font-bold text-[var(--navy)]">{author}</p>
        <div className="mt-2 flex flex-wrap gap-1">
          {isOriginal ? <RoleBadge label="Original Poster" /> : null}
          {isModerator ? <RoleBadge label="Moderator" /> : null}
        </div>
        <p className="mt-3 flex items-center gap-1 text-xs text-[var(--muted)]">
          <Users aria-hidden="true" size={13} />
          Registry member
        </p>
      </aside>
      <div className="p-4">
        <div className="mb-3 flex items-center justify-between gap-3 border-b border-[var(--line)] pb-2 text-xs text-[var(--muted)]">
          <span>{timestamp}</span>
          <span className="flex items-center gap-1">
            <Reply aria-hidden="true" size={13} />
            Submitted for public archive
          </span>
        </div>
        <div className="prose-archive">{children}</div>
      </div>
    </article>
  );
}

export function ReplyStack({ replies }: { replies: ForumReply[] }) {
  return (
    <div className="space-y-4">
      {replies.map((reply) => (
        <ThreadPost
          author={reply.authorHandle}
          isModerator={reply.isModerator}
          key={reply.id}
          timestamp={reply.createdAt}
        >
          {reply.body.split("\n").map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </ThreadPost>
      ))}
    </div>
  );
}

function RoleBadge({ label }: { label: string }) {
  return (
    <span className="border border-[var(--line)] bg-white px-1.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-[var(--burgundy)]">
      {label}
    </span>
  );
}
