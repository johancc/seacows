import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ClipboardList, MessageSquare, PenLine } from "lucide-react";

import { ArticleCard } from "@/components/article-components";
import { ForumCategoryTable, ThreadList } from "@/components/forum-components";
import { FeaturedCaseFile, SightingCard } from "@/components/registry-components";
import { DefaultSidebar, PageShell, SectionHeader, SidebarBox } from "@/components/site-shell";
import { articles, getLatestThreads, getRecentSightings, sightings } from "@/lib/data";

export default function Home() {
  const featured = sightings[0];
  const recentSightings = getRecentSightings(4);
  const latestThreads = getLatestThreads(7);

  return (
    <PageShell>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="space-y-6">
          <section className="border border-[var(--line)] bg-[var(--paper)]">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--burgundy)]">
                  Board index · live case files · terminology dispute
                </p>
                <h1 className="mt-3 font-serif text-5xl font-bold leading-tight text-[var(--navy)]">
                  Sea cows are real.
                </h1>
                <p className="mt-2 font-serif text-2xl text-[var(--charcoal)]">
                  Not just manatees. Not metaphor. Cow.
                </p>
                <div className="mt-4 space-y-3 leading-7 text-[var(--charcoal)]">
                  <p>
                    You probably got here because someone used sea cow to mean
                    manatee, then someone else produced a cow standing in water
                    and the room went quiet. We keep the second kind of report.
                  </p>
                  <p>
                    Post the location, water type, what the hooves were doing,
                    and what you are not sure about. Moderators sort the rest.
                    Current working note: some subjects appear comfortable on
                    land and in water, including shallow underwater occupancy,
                    without ceasing to be cows.
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Link className="button-primary" href="/report">
                    <PenLine aria-hidden="true" size={16} />
                    Report a Sighting
                  </Link>
                  <Link className="button-secondary" href="/registry">
                    <ClipboardList aria-hidden="true" size={16} />
                    Browse Registry
                  </Link>
                  <Link className="button-secondary" href="/forum">
                    <MessageSquare aria-hidden="true" size={16} />
                    Join the Forum
                  </Link>
                </div>
              </div>
              <div className="border-t border-[var(--line)] bg-[var(--paper-strong)] p-5 lg:border-l lg:border-t-0">
                <figure className="mb-4 border border-[var(--line)] bg-[var(--paper)] p-2">
                  <div className="relative aspect-[4/3] overflow-hidden border border-[var(--line-strong)]">
                    <Image
                      alt="Archive desk with lake maps, field notes, and aquatic bovine evidence prints."
                      className="object-cover"
                      fill
                      sizes="(min-width: 1024px) 360px, 100vw"
                      src="/images/archive-desk.png"
                    />
                  </div>
                  <figcaption className="mt-2 text-xs leading-5 text-[var(--muted)]">
                    Intake desk, Saturday review. Three photos were rejected for
                    dry shoreline ambiguity.
                  </figcaption>
                </figure>
                <SidebarBox title="Classification Bulletin">
                  <p>
                    Conventional sirenian usage is acknowledged. That is not
                    the dispute. The dispute starts when a field report shows
                    bovine morphology plus meaningful water involvement and
                    everyone pretends there is no category for it.
                  </p>
                  <p className="mt-2">
                    If the cow is dry, say so. If the cow is underwater, say
                    exactly how much.
                  </p>
                  <p className="mt-3 font-serif text-xl font-bold text-[var(--burgundy)]">
                    The category remains open.
                  </p>
                </SidebarBox>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  {[
                    ["Confirmed", "142"],
                    ["Under Review", "87"],
                    ["Forum Posts", "28,642"],
                    ["Case Files", "322"],
                  ].map(([label, value]) => (
                    <div className="border border-[var(--line)] bg-white p-3" key={label}>
                      <p className="text-2xl font-bold text-[var(--navy)]">{value}</p>
                      <p className="text-xs uppercase tracking-[0.08em] text-[var(--muted)]">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <SectionHeader
              action={
                <Link className="button-secondary" href="/forum">
                  View Forum
                </Link>
              }
              kicker="Community Board"
              title="Forum Categories"
            />
            <ForumCategoryTable compact />
          </section>

          <section className="space-y-3">
            <SectionHeader
              action={
                <Link className="utility-link text-sm" href="/forum">
                  View new posts
                </Link>
              }
              kicker="Latest Activity"
              title="Threads Moving Today"
            />
            <ThreadList showCategory threads={latestThreads} />
          </section>

          <section className="space-y-3">
            <SectionHeader
              action={
                <Link className="button-secondary" href="/registry">
                  Browse Registry
                </Link>
              }
              kicker="Public Registry"
              title="Recent Case Movement"
            />
            <div className="grid gap-4">
              {recentSightings.map((sighting) => (
                <SightingCard key={sighting.id} sighting={sighting} />
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <SectionHeader kicker="Featured Case File" title="Original Lake Cow" />
            <FeaturedCaseFile sighting={featured} />
          </section>

          <section className="space-y-3">
            <SectionHeader
              action={
                <Link className="utility-link flex items-center gap-1 text-sm" href="/research">
                  Research archive
                  <ArrowRight aria-hidden="true" size={14} />
                </Link>
              }
              kicker="Research Notes"
              title="Recent Articles"
            />
            <div className="grid gap-4 md:grid-cols-2">
              {articles.slice(0, 2).map((article) => (
                <ArticleCard article={article} key={article.id} />
              ))}
            </div>
          </section>
        </div>

        <DefaultSidebar />
      </div>
    </PageShell>
  );
}
