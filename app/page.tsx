import Image from "next/image";
import Link from "next/link";
import {
  Archive,
  ArrowRight,
  ClipboardList,
  FileText,
  MessageSquare,
  PenLine,
} from "lucide-react";

import { ArticleCard } from "@/components/article-components";
import { ForumCategoryTable, ForumPanel, ThreadList } from "@/components/forum-components";
import { FeaturedCaseFile, SightingCard } from "@/components/registry-components";
import { DefaultSidebar, PageShell, SectionHeader } from "@/components/site-shell";
import { articles, getLatestThreads, getRecentSightings, sightings } from "@/lib/data";

const referenceLinks = [
  {
    href: "/registry",
    label: "Sighting Registry",
    description: "The full case ledger: status, location, water type, and notes.",
  },
  {
    href: "/evidence",
    label: "Evidence Standards",
    description: "What counts as a useful photo, sound note, or witness detail.",
  },
  {
    href: "/research",
    label: "Research",
    description: "Lorida notes, field methods, and the old waterline arguments.",
  },
  {
    href: "/submission-guidelines",
    label: "Submission Guidelines",
    description: "The checklist before a post becomes a report.",
  },
];

const currentNotices = [
  "Do not post private lake names.",
  "If it used land and water, write both parts down.",
  "Sound reports need weather, wind, frogs, boats, and distance.",
];

export default function Home() {
  const featured = sightings[0];
  const recentSightings = getRecentSightings(3);
  const latestThreads = getLatestThreads(5);

  return (
    <PageShell>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="space-y-6">
          <section className="forum-panel">
            <div className="border-b border-[var(--line-strong)] bg-[var(--paper)] px-3 py-3 sm:px-4">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-xs">
                <p className="uppercase tracking-[0.12em] text-[var(--muted)]">
                  From Sea Cows Are Real
                </p>
                <nav aria-label="Page tools" className="flex flex-wrap gap-2">
                  {[
                    ["Main page", "/"],
                    ["Discussion", "/forum/general-discussion"],
                    ["View source", "/evidence"],
                    ["History", "/forum"],
                  ].map(([label, href]) => (
                    <Link className="utility-link" href={href} key={label}>
                      {label}
                    </Link>
                  ))}
                </nav>
              </div>
              <h1 className="font-serif text-2xl font-bold leading-tight text-[var(--navy)] sm:text-[2rem]">
                Main Page
              </h1>
            </div>

            <div className="grid gap-3 p-3 sm:p-4 lg:grid-cols-[minmax(0,1fr)_13rem] xl:grid-cols-[minmax(0,1fr)_14rem]">
              <div className="min-w-0 space-y-4">
                <div className="prose-archive max-w-none">
                  <p className="mt-0">
                    Short version: people near Lorida, Florida say they saw
                    cow-shaped animals out in the middle of a lake. Not
                    manatees. Not cows stuck at the bank. Something using the
                    water like it belonged there.
                  </p>
                  <p>
                    The first agreed file is SCAR-0001. A small group, flat
                    water, low heads, and a head turn that made every easy
                    answer feel bad. That is why this board keeps the reports
                    instead of letting the joke erase them.
                  </p>
                  <p>
                    New here? Read the sticky. Post what you saw, where the
                    animal went, what the water was doing, and what you could
                    not see. Sea cows can use land and water. The sequence is
                    the point.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {referenceLinks.map((item) => (
                    <Link
                      className="group border-b border-[var(--line)] pb-3 text-sm"
                      href={item.href}
                      key={item.href}
                    >
                      <span className="font-serif text-base font-bold text-[var(--navy)] group-hover:text-[var(--burgundy)]">
                        {item.label}
                      </span>
                      <span className="mt-1 block leading-5 text-[var(--muted)]">
                        {item.description}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <aside>
                <div className="border border-[var(--line)] bg-[var(--paper-strong)] text-xs leading-5 text-[var(--charcoal)]">
                  <div className="border-b border-[var(--line)] px-2.5 py-1.5">
                    <h2 className="font-bold uppercase tracking-[0.08em] text-[var(--navy)]">
                      Notices
                    </h2>
                  </div>
                  <ul className="space-y-1.5 p-2.5">
                    {currentNotices.map((notice) => (
                      <li className="border-b border-[var(--line)] pb-1.5 last:border-0 last:pb-0" key={notice}>
                        {notice}
                      </li>
                    ))}
                  </ul>
                  <Link
                    className="flex items-center gap-1.5 border-t border-[var(--line)] px-2.5 py-2 font-bold text-[var(--navy)] hover:text-[var(--burgundy)]"
                    href="/thread/start-here-before-posting-your-first-sea-cow-report"
                  >
                    <FileText aria-hidden="true" size={13} />
                    Start Here
                  </Link>
                </div>
              </aside>
            </div>
          </section>

          <section>
            <ForumPanel title="Navigation">
              <div className="grid gap-0 text-sm sm:grid-cols-2">
                {[
                  ["/forum/general-discussion", "General Discussion", "Questions, new-member posts, jokes, and reports not ready for a case number."],
                  ["/forum/confirmed-sightings", "Confirmed Sightings", "Reviewed files people keep linking in arguments."],
                  ["/forum/announcements", "Announcements", "Sticky posts, rule edits, downtime, and locked notes."],
                  ["/forum/research", "Research", "Lorida notes, field methods, route weirdness, and waterline fights."],
                ].map(([href, label, description]) => (
                  <Link
                    className="border-b border-[var(--line)] p-3 hover:bg-[rgba(64,95,134,0.055)]"
                    href={href}
                    key={href}
                  >
                    <span className="font-bold text-[var(--navy)]">{label}</span>
                    <span className="mt-1 block leading-5 text-[var(--muted)]">{description}</span>
                  </Link>
                ))}
              </div>
            </ForumPanel>
          </section>

          <section>
            <ThreadList showCategory threads={latestThreads} title="Posts Since Last Visit" />
          </section>

          <section className="space-y-3">
            <SectionHeader
              action={
                <Link className="button-secondary" href="/forum">
                  <MessageSquare aria-hidden="true" size={15} />
                  Open Board
                </Link>
              }
              kicker="Board Index"
              title="Forum Categories"
            />
            <ForumCategoryTable compact />
          </section>

          <section className="grid gap-4 md:grid-cols-3">
            <ForumPanel title="Required Reading">
              <div className="grid gap-3 p-3 text-sm leading-6">
                {[
                  [
                    "Common learnings",
                    "/research/common-learnings-about-the-lorida-sea-cows",
                    "Middle water, quiet conditions, cattle response, lights, motors, and why proof hunts go badly.",
                  ],
                  [
                    "The other shore field note",
                    "/research/the-other-shore-lorida-field-note",
                    "Lorida, flat water, lowing reports, and why the old story is not a manatee footnote.",
                  ],
                  [
                    "Start here",
                    "/thread/start-here-before-posting-your-first-sea-cow-report",
                    "The plain version: Lorida, not manatees, middle water, both land and water.",
                  ],
                  [
                    "Registry inclusion framework",
                    "/research/the-registry-inclusion-framework-version-1-0",
                    "Why some weird files stay public and some obvious-looking ones do not.",
                  ],
                  [
                    "Photo review standards",
                    "/research/photo-review-standards-for-aquatic-bovine-evidence",
                    "Waterline, scale, glare, fence posts, and the crop that ruins everything.",
                  ],
                ].map(([title, href, description]) => (
                  <div key={href}>
                    <Link className="font-bold text-[var(--navy)] hover:text-[var(--burgundy)]" href={href}>
                      {title}
                    </Link>
                    <p className="mt-0.5 text-[var(--muted)]">{description}</p>
                  </div>
                ))}
              </div>
            </ForumPanel>

            <ForumPanel title="Case Intake">
              <div className="grid gap-3 p-3 text-sm leading-6">
                <p>
                  Saw something yourself or have a follow-up to an existing
                  file? Put it in the form. A thread is not confirmation; it is
                  how the board stops losing details.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link className="button-primary" href="/report">
                    <PenLine aria-hidden="true" size={16} />
                    Report a Sighting
                  </Link>
                  <Link className="button-secondary" href="/registry">
                    <ClipboardList aria-hidden="true" size={16} />
                    Browse Registry
                  </Link>
                </div>
              </div>
            </ForumPanel>

            <ForumPanel title="Attachment Review">
              <div className="p-3 text-sm leading-6">
                <figure className="overflow-hidden border border-[var(--line)] bg-white p-2">
                  <div className="relative aspect-[4/3] overflow-hidden border border-[var(--line-strong)]">
                    <Image
                      alt="Archive desk with lake maps, field notes, and aquatic bovine evidence prints."
                      className="object-cover"
                      fill
                      sizes="(min-width: 1024px) 280px, 100vw"
                      src="/images/archive-desk.png"
                    />
                  </div>
                  <figcaption className="mt-2 text-xs leading-5 text-[var(--muted)]">
                  Typical review pile: one wide shot, two bad crops, and a map
                  thread nobody agrees on.
                  </figcaption>
                </figure>
              </div>
            </ForumPanel>
          </section>

          <section className="space-y-3">
            <SectionHeader
              action={
                <Link className="button-secondary" href="/registry">
                  <Archive aria-hidden="true" size={15} />
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
            <SectionHeader kicker="Featured Case File" title="Original Lorida Herd" />
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
              kicker="Reference Notes"
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
