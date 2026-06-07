import Link from "next/link";
import { Eye, MessageCircle, PenLine, RotateCcw } from "lucide-react";

import { ThreadForm } from "@/components/forms";
import {
  ForumCategoryTable,
  ForumLegend,
  ForumPanel,
  ThreadList,
  WhosOnlineBox,
} from "@/components/forum-components";
import { Breadcrumbs, PageShell, SectionHeader } from "@/components/site-shell";
import {
  forumCategories,
  getLatestThreads,
  getRepliesForThread,
  getThread,
} from "@/lib/data";

export const metadata = {
  title: "Forum",
};

export default function ForumPage() {
  const startHereThread = getThread("start-here-before-posting-your-first-sea-cow-report");
  const startHereReplyCount = startHereThread
    ? getRepliesForThread(startHereThread.slug).length
    : 0;

  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Forum" }]} />
      <div className="space-y-6">
        <div className="forum-utility-strip">
          <span>Board Home</span>
          <nav aria-label="Forum utilities" className="flex flex-wrap gap-x-3 gap-y-1">
            <Link href="/forum">FAQ</Link>
            <Link href="/forum">Members List</Link>
            <Link href="/forum">Calendar</Link>
            <Link href="/forum">Search</Link>
            <Link href="/forum">Today&apos;s Posts</Link>
          </nav>
        </div>
        <div className="forum-board-tools">
          <div className="min-w-0">
            <h1>The Board</h1>
            <p>
              start with the sticky. then post like someone has to understand
              you next week.
            </p>
          </div>
          <nav aria-label="Board actions" className="forum-actions">
            <a className="forum-action-link" href="#start-thread">
              <PenLine aria-hidden="true" size={15} />
              New Topic
            </a>
            <Link className="forum-action-link" href="/forum">
              <Eye aria-hidden="true" size={15} />
              Recent
            </Link>
            <Link className="forum-action-link" href="/forum">
              <MessageCircle aria-hidden="true" size={15} />
              Mine
            </Link>
            <Link className="forum-action-link" href="/forum">
              <RotateCcw aria-hidden="true" size={15} />
              Mark Read
            </Link>
          </nav>
        </div>
        {startHereThread ? (
          <ForumPanel title="Sticky Threads">
            <div className="grid gap-3 p-3 sm:grid-cols-[minmax(0,1fr)_8rem_9rem] sm:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--burgundy)]">
                  Board sticky
                </p>
                <Link
                  className="mt-1 block max-w-[18rem] break-words font-serif text-base font-bold leading-tight text-[var(--navy)] hover:text-[var(--burgundy)] sm:max-w-none sm:text-xl"
                  href={`/thread/${startHereThread.slug}`}
                >
                  {startHereThread.title}
                </Link>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--charcoal)]">
                  the short version of Lorida, the land/water thing, what to
                  record, and why nobody here wants another manatee thread.
                </p>
              </div>
              <div className="text-sm sm:text-right">
                <p className="font-bold text-[var(--navy)]">{startHereReplyCount}</p>
                <p className="text-xs uppercase tracking-[0.08em] text-[var(--muted)]">
                  Replies
                </p>
              </div>
              <div className="text-sm sm:text-right">
                <p className="font-bold text-[var(--navy)]">{startHereThread.viewsCount.toLocaleString()}</p>
                <p className="text-xs uppercase tracking-[0.08em] text-[var(--muted)]">
                  Views
                </p>
              </div>
            </div>
          </ForumPanel>
        ) : null}
        <ForumCategoryTable
          categories={forumCategories}
          title="Forums"
        />

        <section className="space-y-3">
          <ThreadList
            showCategory
            threads={getLatestThreads(12)}
            title="Posts Since Last Visit"
          />
        </section>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <WhosOnlineBox />
          <ForumLegend />
        </div>

        <section className="space-y-3" id="start-thread">
          <SectionHeader
            kicker="Posting Form"
            title="New Topic"
          />
          <p className="max-w-3xl text-sm leading-6 text-[var(--charcoal)]">
            Use a title people can understand next week. Location type, water
            involvement, main question. Save the dramatic part for paragraph
            two, if you must.
          </p>
          <ThreadForm />
        </section>
      </div>
    </PageShell>
  );
}
