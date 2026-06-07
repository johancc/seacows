import Link from "next/link";
import { Eye, MessageCircle, PenLine, RotateCcw } from "lucide-react";

import { ThreadForm } from "@/components/forms";
import { ForumCategoryTable, ThreadList } from "@/components/forum-components";
import { Breadcrumbs, PageShell, SectionHeader } from "@/components/site-shell";
import { forumCategories, getLatestThreads } from "@/lib/data";

export const metadata = {
  title: "Forum",
};

export default function ForumPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Forum" }]} />
      <div className="space-y-6">
        <SectionHeader
          action={
            <div className="flex flex-wrap gap-2">
              <a className="button-secondary" href="#start-thread">
                <PenLine aria-hidden="true" size={16} />
                Start a Thread
              </a>
              <Link className="button-secondary" href="/forum">
                <Eye aria-hidden="true" size={16} />
                View New Posts
              </Link>
              <Link className="button-secondary" href="/forum">
                <MessageCircle aria-hidden="true" size={16} />
                View Unanswered Threads
              </Link>
              <Link className="button-secondary" href="/forum">
                <RotateCcw aria-hidden="true" size={16} />
                Mark All Forums Read
              </Link>
            </div>
          }
          kicker="Community Board"
          title="Forum Index"
        />
        <ForumCategoryTable categories={forumCategories} />

        <section className="space-y-3">
          <SectionHeader kicker="Current Activity" title="Latest Approved Threads" />
          <ThreadList showCategory threads={getLatestThreads(12)} />
        </section>

        <section className="space-y-3" id="start-thread">
          <SectionHeader
            kicker="Public Submission"
            title="Start a Thread"
          />
          <p className="max-w-3xl text-sm leading-6 text-[var(--charcoal)]">
            Pick a handle, post like a person, and do not turn a hunch into a
            case number. New threads wait in the mod queue because last time we
            opened posting, someone submitted a weather balloon as a pond cow.
          </p>
          <ThreadForm />
        </section>
      </div>
    </PageShell>
  );
}
