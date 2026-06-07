import Link from "next/link";
import Image from "next/image";
import {
  FileText,
  Folder,
  Mail,
  MessageSquare,
  Pin,
  Reply,
  Search,
  Users,
} from "lucide-react";

import {
  forumCategories,
  getLatestThreadForCategory,
  getRepliesForThread,
  getThreadsByCategory,
} from "@/lib/data";
import type { ForumCategory, ForumReply, ForumThread } from "@/lib/types";
import { ThreadBadges } from "@/components/status-badge";

const authorProfiles: Record<
  string,
  {
    avatar?: string;
    rank: string;
    joined: string;
    location: string;
    posts: string;
    thanks: string;
    signature: string;
  }
> = {
  Moderator: {
    avatar: "/images/forum-seacow-avatar.png",
    rank: "Registry Keeper",
    joined: "Mar 2004",
    location: "Admin shed",
    posts: "8,912",
    thanks: "1,104",
    signature: "drawer of drawers / cows use both margins",
  },
  EvidenceDesk: {
    avatar: "/images/avatars/default-blue.svg",
    rank: "Senior Field Note Keeper",
    joined: "Feb 2006",
    location: "lowland west",
    posts: "2,764",
    thanks: "432",
    signature: "wide shot first. zoom after.",
  },
  FieldMethods: {
    avatar: "/images/avatars/default-green.svg",
    rank: "Tape Measure Person",
    joined: "Aug 2005",
    location: "near the culvert",
    posts: "1,342",
    thanks: "201",
    signature: "measure twice, post once",
  },
  LakeWatcher: {
    avatar: "/images/avatars/default-red.svg",
    rank: "Original Case Holder",
    joined: "Jul 2021",
    location: "Lorida side, lake withheld",
    posts: "684",
    thanks: "119",
    signature: "I said calm. I meant calm.",
  },
  TaxonomyDesk: {
    avatar: "/images/avatars/taxonomy-desk.png",
    rank: "Terminology Tired",
    joined: "May 2007",
    location: "same cabinet",
    posts: "3,018",
    thanks: "621",
    signature: "one valid meaning does not eat the other one",
  },
  DitchReader: {
    avatar: "/images/avatars/default-teal.svg",
    rank: "Newly Damp",
    joined: "Jun 2026",
    location: "county ditch line",
    posts: "19",
    thanks: "5",
    signature: "wide shot attached, crop available",
  },
  ReservoirClerk: {
    avatar: "/images/avatars/default-slate.svg",
    rank: "Maintenance Path Witness",
    joined: "Nov 2024",
    location: "reservoir margin",
    posts: "312",
    thanks: "68",
    signature: "if the route changed, write it down",
  },
  TapeMold: {
    avatar: "/images/avatars/default-gray.svg",
    rank: "Archive Box Owner",
    joined: "Jun 2026",
    location: "basement tape shelf",
    posts: "31",
    thanks: "11",
    signature: "tracking error is not evidence, but it is history",
  },
  ThreadSweeper: {
    avatar: "/images/avatars/default-slate.svg",
    rank: "Front Page Custodian",
    joined: "Apr 2025",
    location: "new posts",
    posts: "884",
    thanks: "203",
    signature: "one thread would have been enough",
  },
  RouteClerk: {
    avatar: "/images/avatars/default-violet.svg",
    rank: "Return Path Person",
    joined: "Jan 2026",
    location: "map table",
    posts: "229",
    thanks: "74",
    signature: "where it went after matters",
  },
  DampDave: {
    avatar: "/images/avatars/default-green.svg",
    rank: "Puddle Cow Veteran",
    joined: "Sep 2019",
    location: "beside the wrong pond",
    posts: "1,004",
    thanks: "12",
    signature: "still not canon, apparently",
  },
  Kyle: {
    avatar: "/images/avatars/default-gray.svg",
    rank: "Forum Skeptic",
    joined: "Jun 2022",
    location: "reply #2",
    posts: "2,118",
    thanks: "33",
    signature: "asking questions is illegal now I guess",
  },
  xXHoofLogicXx: {
    avatar: "/images/avatars/default-red.svg",
    rank: "Quote Button Abuser",
    joined: "Apr 2008",
    location: "old theme forever",
    posts: "5,404",
    thanks: "404",
    signature: "bring back the blue buttons",
  },
  ModemMoo: {
    avatar: "/images/avatars/modem-moo.png",
    rank: "Dial-Up Archivist",
    joined: "Jan 2005",
    location: "basement server shelf",
    posts: "6,102",
    thanks: "818",
    signature: "I have the screenshot somewhere",
  },
  OldSalt: {
    avatar: "/images/avatars/default-amber.svg",
    rank: "Local Account Keeper",
    joined: "Oct 2004",
    location: "Lorida if you ask normal",
    posts: "2,447",
    thanks: "388",
    signature: "flat water carries too much",
  },
  BoundaryLayer: {
    avatar: "/images/avatars/default-violet.svg",
    rank: "Speculative Model Wrangler",
    joined: "May 2024",
    location: "between columns",
    posts: "1,086",
    thanks: "157",
    signature: "context supports. it does not drive.",
  },
  PastureArchivist: {
    avatar: "/images/avatars/default-teal.svg",
    rank: "Herd Behavior Reader",
    joined: "Jul 2023",
    location: "fence gap memory",
    posts: "913",
    thanks: "245",
    signature: "herd language survives bad categories",
  },
  ManateeDan: {
    avatar: "/images/avatars/default-blue.svg",
    rank: "Known Problem, Useful Anyway",
    joined: "Mar 2009",
    location: "same argument, different tab",
    posts: "7,230",
    thanks: "302",
    signature: "yes i know about manatees",
  },
};

const defaultAvatars = [
  "/images/avatars/default-blue.svg",
  "/images/avatars/default-green.svg",
  "/images/avatars/default-red.svg",
  "/images/avatars/default-amber.svg",
  "/images/avatars/default-violet.svg",
  "/images/avatars/default-slate.svg",
  "/images/avatars/default-teal.svg",
  "/images/avatars/default-gray.svg",
  "/images/avatars/default.png",
  "/images/avatars/pixel-cow.png",
  "/images/avatars/modem-moo.png",
  "/images/avatars/taxonomy-desk.png",
];

function avatarForAuthor(author: string) {
  let hash = 0;
  for (let index = 0; index < author.length; index += 1) {
    hash = (hash * 31 + author.charCodeAt(index)) >>> 0;
  }
  return defaultAvatars[hash % defaultAvatars.length];
}

function getAuthorProfile(author: string) {
  const knownProfile = authorProfiles[author];

  if (knownProfile) {
    return {
      ...knownProfile,
      avatar: knownProfile.avatar ?? avatarForAuthor(author),
    };
  }

  return {
    avatar: avatarForAuthor(author),
    rank: "Registered User",
    joined: "Jun 2026",
    location: "shoreline",
    posts: "47",
    thanks: "3",
    signature: "water first. story second.",
  };
}

export function ForumCategoryTable({
  categories = forumCategories,
  compact = false,
  title,
}: {
  categories?: ForumCategory[];
  compact?: boolean;
  title?: string;
}) {
  return (
    <ForumPanel title={title}>
      <div className="overflow-x-auto">
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
                Last Post
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => {
              const latest = getLatestThreadForCategory(category.slug);
              return (
                <tr key={category.id}>
                  <td data-label="Forum">
                    <div className="flex gap-3">
                      <span className="forum-status-icon mt-1">
                        {category.slug === "announcements" ? (
                          <Pin aria-hidden="true" size={16} />
                        ) : category.slug === "confirmed-sightings" ? (
                          <FileText aria-hidden="true" size={16} />
                        ) : category.slug === "research" ? (
                          <Folder aria-hidden="true" size={16} />
                        ) : (
                          <MessageSquare aria-hidden="true" size={16} />
                        )}
                      </span>
                      <div>
                        <Link
                          className="font-serif text-base font-bold text-[var(--navy)] hover:text-[var(--burgundy)] sm:text-lg"
                          href={`/forum/${category.slug}`}
                        >
                          {category.name}
                        </Link>
                        <p className="mt-1 max-w-2xl text-sm leading-5 text-[var(--muted)]">
                          {category.description}
                        </p>
                        {!compact ? (
                          <p className="mt-1 text-xs uppercase tracking-[0.08em] text-[var(--muted)]">
                            Subforums: old threads · photos · arguments saved for later
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </td>
                  <td className="text-right font-semibold text-[var(--navy)]" data-label="Topics">
                    {category.topics.toLocaleString()}
                  </td>
                  <td className="text-right font-semibold text-[var(--navy)]" data-label="Posts">
                    {category.posts.toLocaleString()}
                  </td>
                  <td data-label="Last Post">
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
                      <span className="text-sm text-[var(--muted)]">No posts yet</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </ForumPanel>
  );
}

export function ThreadList({
  threads,
  showCategory = false,
  title,
}: {
  threads: ForumThread[];
  showCategory?: boolean;
  title?: string;
}) {
  return (
    <ForumPanel title={title}>
      <div className="overflow-x-auto">
        <table className="forum-table">
          <caption className="sr-only">Forum threads</caption>
          <thead>
            <tr>
              <th scope="col">Thread</th>
              {showCategory ? <th scope="col">Forum</th> : null}
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
              const replyCount = getRepliesForThread(thread.slug).length;
              return (
                <tr key={thread.id}>
                  <td data-label="Thread">
                    <div className="flex gap-3">
                      <span className="forum-status-icon mt-1">
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
                    <td className="text-sm" data-label="Forum">
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
                  <td className="text-right font-semibold text-[var(--navy)]" data-label="Replies">
                    {replyCount}
                  </td>
                  <td className="text-right text-[var(--muted)]" data-label="Views">
                    {thread.viewsCount.toLocaleString()}
                  </td>
                  <td className="text-sm" data-label="Last Post">
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
    </ForumPanel>
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
  postNumber,
}: {
  author: string;
  timestamp: string;
  children: React.ReactNode;
  isModerator?: boolean;
  isOriginal?: boolean;
  postNumber?: number;
}) {
  const profile = getAuthorProfile(author);

  return (
    <article className="grid overflow-hidden rounded-md border border-[var(--line-strong)] bg-[var(--paper)] shadow-[0_8px_24px_rgba(16,35,63,0.04)] md:grid-cols-[13rem_1fr]">
      <aside className="border-b border-[var(--line)] bg-[var(--paper-strong)] p-3 text-sm md:border-b-0 md:border-r">
        <div className="flex gap-3 md:block">
          <div className="w-14 shrink-0 overflow-hidden border border-[var(--line-strong)] bg-white p-1 md:mt-3 md:w-20">
          <Image
            alt=""
            aria-hidden="true"
            className="aspect-square h-auto w-full object-cover"
            height={96}
            src={profile.avatar}
            width={96}
          />
          </div>
          <div className="min-w-0 flex-1">
            <p className="break-words font-serif text-base font-bold leading-tight text-[var(--navy)]">
              {author}
            </p>
            <p className="mt-0.5 text-xs font-bold leading-tight text-[var(--muted)]">
              {profile.rank}
            </p>
            <div className="mt-2 flex flex-wrap gap-1">
              {isOriginal ? <RoleBadge label="Original Poster" /> : null}
              {isModerator ? <RoleBadge label="Moderator" /> : null}
            </div>
            <p className="mt-2 flex items-center gap-1 text-xs text-[var(--muted)] md:mt-3">
              <Users aria-hidden="true" size={13} />
              Registry member
            </p>
            <dl className="mt-2 grid gap-x-3 gap-y-1 text-xs text-[var(--charcoal)] sm:grid-cols-2 md:grid-cols-1">
              <div>
                <dt className="inline font-bold">Joined:</dt>{" "}
                <dd className="inline">{profile.joined}</dd>
              </div>
              <div>
                <dt className="inline font-bold">Location:</dt>{" "}
                <dd className="inline">{profile.location}</dd>
              </div>
              <div>
                <dt className="inline font-bold">Posts:</dt>{" "}
                <dd className="inline">{profile.posts}</dd>
              </div>
              <div>
                <dt className="inline font-bold">Thanks:</dt>{" "}
                <dd className="inline">{profile.thanks}</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="mt-3 hidden gap-1 md:flex">
          <span className="forum-mini-button">
            <Mail aria-hidden="true" size={12} />
            PM
          </span>
          <span className="forum-mini-button">
            <Search aria-hidden="true" size={12} />
            Find
          </span>
        </div>
      </aside>
      <div className="p-4">
        <div className="mb-3 flex items-center justify-between gap-3 border-b border-[var(--line)] pb-2 text-xs text-[var(--muted)]">
          <span>Posted: {timestamp}</span>
          <span className="flex items-center gap-1">
            <Reply aria-hidden="true" size={13} />
            {postNumber ? `#${postNumber}` : "reply"}
          </span>
        </div>
        <div className="prose-archive">{children}</div>
        <div className="mt-5 border-t border-dashed border-[var(--line-strong)] pt-3 text-xs italic text-[var(--muted)]">
          {profile.signature}
        </div>
        <div className="mt-3 flex justify-end gap-2">
          <span className="forum-mini-button">Quote</span>
          <span className="forum-mini-button">Reply</span>
        </div>
      </div>
    </article>
  );
}

export function ReplyStack({ replies }: { replies: ForumReply[] }) {
  return (
    <div className="space-y-4">
      {replies.map((reply, index) => (
        <ThreadPost
          author={reply.authorHandle}
          isModerator={reply.isModerator}
          key={reply.id}
          postNumber={index + 2}
          timestamp={reply.createdAt}
        >
          {reply.body.split("\n").map((paragraph, index) => (
            <p key={`${reply.id}-${index}-${paragraph}`}>{paragraph}</p>
          ))}
        </ThreadPost>
      ))}
    </div>
  );
}

function RoleBadge({ label }: { label: string }) {
  return (
    <span className="rounded-sm border border-[var(--line)] bg-white px-1.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-[var(--burgundy)]">
      {label}
    </span>
  );
}

export function ForumPanel({
  title,
  children,
  action,
}: {
  title?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <section className="forum-panel">
      {title || action ? (
        <div className="forum-panel-title">
          <span>{title}</span>
          {action}
        </div>
      ) : null}
      {children}
    </section>
  );
}

export function ForumLegend() {
  return (
    <ForumPanel title="Forum Legend">
      <div className="grid gap-3 p-3 text-sm sm:grid-cols-2">
        {[
          ["New posts", MessageSquare],
          ["No new posts", Folder],
          ["Sticky thread", Pin],
          ["Locked thread", FileText],
        ].map(([label, Icon]) => (
          <div className="flex items-center gap-2" key={label as string}>
            <span className="forum-status-icon">
              <Icon aria-hidden="true" size={15} />
            </span>
            <span>{label as string}</span>
          </div>
        ))}
      </div>
    </ForumPanel>
  );
}

export function WhosOnlineBox() {
  return (
    <ForumPanel title="Who's Online">
      <div className="space-y-2 p-3 text-sm leading-6">
        <p>38 members, 14 guests, 2 bots</p>
        <p>
          ManateeDan, CreekWalker, HoofandFloat, RiverRanger, OldSalt,
          BoggyBottom, ShorelineStar, DriftwoodJones, SwampyQ, MapperMax,
          FieldScribe, IntakeBot, ModBot and 24 more.
        </p>
        <p className="text-xs text-[var(--muted)]">
          Most users ever online was 87 on 05-17-26 at 07:31 PM.
        </p>
      </div>
    </ForumPanel>
  );
}
