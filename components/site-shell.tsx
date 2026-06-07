import Link from "next/link";
import Image from "next/image";
import {
  Archive,
  BookOpen,
  ClipboardList,
  FileText,
  Home,
  MessageSquare,
  Search,
  ShieldCheck,
  Waves,
} from "lucide-react";

import { siteStats } from "@/lib/data";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/forum", label: "Forum", icon: MessageSquare },
  { href: "/registry", label: "Registry", icon: ClipboardList },
  { href: "/sightings", label: "Sightings", icon: Waves },
  { href: "/research", label: "Research", icon: BookOpen },
  { href: "/evidence", label: "Evidence", icon: Archive },
  { href: "/about", label: "About", icon: FileText },
];

export function SiteHeader() {
  return (
    <header className="border-b border-[var(--line)] bg-[var(--paper)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 text-xs text-[var(--muted)] sm:px-6 lg:px-8">
        <div className="grid gap-1 sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:gap-2">
          <p className="max-w-full break-words uppercase tracking-[0.12em]">
            Welcome back, ManateeDan.
            <span className="hidden sm:inline"> Last visit: Today, 09:17 AM</span>
          </p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <Link className="utility-link" href="/guidelines">
              User CP
            </Link>
            <Link className="utility-link" href="/help">
              Private Messages: 2
            </Link>
            <Link className="utility-link" href="/contact">
              Log out
            </Link>
          </div>
        </div>
        <Masthead />
      </div>
      <NavBar />
    </header>
  );
}

export function Masthead() {
  return (
    <div className="grid gap-2 border-y border-[var(--line)] py-3 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-3 sm:py-4">
      <Link
        href="/"
        aria-label="Sea Cows Are Real home"
        className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-[var(--line-strong)] bg-white shadow-[0_6px_18px_rgba(16,35,63,0.12)] sm:h-16 sm:w-16"
      >
        <Image
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          height={128}
          priority
          src="/images/seacow-emblem.png"
          width={128}
        />
      </Link>
      <div>
        <p className="text-xs uppercase tracking-[0.24em] text-[var(--burgundy)]">
          seacowsarereal.com
        </p>
        <Link
          href="/"
          className="font-serif text-[1.55rem] font-bold leading-none tracking-normal text-[var(--navy)] sm:text-4xl"
        >
          SEA COWS ARE REAL
        </Link>
      </div>
    </div>
  );
}

export function NavBar() {
  return (
    <nav aria-label="Primary navigation" className="bg-[var(--navy)] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 sm:px-6 sm:py-3 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex gap-1 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                className="flex shrink-0 items-center gap-1.5 border border-transparent px-2.5 py-1.5 text-sm font-semibold hover:border-white/30 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white sm:px-3 sm:py-2"
                href={item.href}
                key={item.href}
              >
                <Icon aria-hidden="true" size={15} />
                {item.label}
              </Link>
            );
          })}
        </div>
        <div
          aria-disabled="true"
          className="hidden min-w-0 max-w-md flex-1 items-center border border-white/25 bg-white/10 sm:flex lg:max-w-xs"
        >
          <label className="sr-only" htmlFor="site-search">
            Search index pending
          </label>
          <Search aria-hidden="true" className="ml-3 shrink-0" size={16} />
          <input
            disabled
            id="site-search"
            name="q"
            placeholder="Search index pending"
            className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/70 focus:outline-none disabled:cursor-not-allowed"
          />
        </div>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-[var(--line)] bg-[var(--paper-strong)]">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 text-sm text-[var(--charcoal)] sm:px-6 md:grid-cols-[1.3fr_1fr] lg:px-8">
        <div>
          <p className="font-serif text-xl font-bold text-[var(--navy)]">
            SEA COWS ARE REAL
          </p>
          <p className="mt-2 max-w-2xl">
            Sea Cows Are Real keeps the Lorida file, case notes, forum
            arguments, and old waterline reports in one place so nobody has to
            re-litigate the same flat-water story from memory.
          </p>
        </div>
        <div className="flex flex-wrap items-start gap-3 md:justify-end">
          <Link className="utility-link" href="/guidelines">
            Community Guidelines
          </Link>
          <Link className="utility-link" href="/privacy">
            Privacy
          </Link>
          <Link className="utility-link" href="/terms">
            Terms
          </Link>
          <Link className="utility-link" href="/submission-guidelines">
            Submission Guidelines
          </Link>
          <Link className="utility-link" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}

export function SidebarBox({
  title,
  children,
  action,
}: {
  title: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <section className="overflow-hidden rounded-md border border-[var(--line)] bg-[var(--paper)] shadow-[0_8px_24px_rgba(16,35,63,0.045)]">
      <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--paper-strong)] px-3 py-2">
        <h2 className="text-sm font-bold uppercase tracking-[0.08em] text-[var(--navy)]">
          {title}
        </h2>
        {action}
      </div>
      <div className="p-3 text-sm leading-6 text-[var(--charcoal)]">{children}</div>
    </section>
  );
}

export function DefaultSidebar() {
  return (
    <aside className="space-y-4">
      <SidebarBox title="Search the Archive">
        <div className="flex overflow-hidden rounded-md border border-[var(--line)] bg-white" aria-disabled="true">
          <label className="sr-only" htmlFor="sidebar-search">
            Search index pending
          </label>
          <input
            disabled
            id="sidebar-search"
            name="q"
            placeholder="search index pending"
            className="min-w-0 flex-1 px-3 py-2 text-sm disabled:cursor-not-allowed"
          />
          <button
            aria-disabled="true"
            className="border-l border-[var(--line)] px-3 text-[var(--navy)] opacity-60"
            disabled
            type="button"
          >
            <Search aria-hidden="true" size={16} />
            <span className="sr-only">Search</span>
          </button>
        </div>
        <p className="mt-2 text-xs text-[var(--muted)]">
          Try case number, handle, water type, or the one weird phrase you
          remember from the thread title. Search is still half duct tape.
        </p>
      </SidebarBox>

      <SidebarBox title="Report a Sighting">
        <p>
          First-hand sighting or useful follow-up? Include waterline detail,
          duration, return path, sound conditions, and the part you are not
          sure about.
        </p>
        <Link className="button-primary mt-3 w-full justify-center" href="/report">
          Report a Sighting
        </Link>
      </SidebarBox>

      <SidebarBox title="Site Statistics">
        <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
          <dt>Members</dt>
          <dd className="text-right font-semibold text-[var(--navy)]">{siteStats.members}</dd>
          <dt>Threads</dt>
          <dd className="text-right font-semibold text-[var(--navy)]">{siteStats.threads}</dd>
          <dt>Posts</dt>
          <dd className="text-right font-semibold text-[var(--navy)]">{siteStats.posts}</dd>
          <dt>Confirmed</dt>
          <dd className="text-right font-semibold text-[var(--green)]">
            {siteStats.confirmedSightings}
          </dd>
          <dt>Under Review</dt>
          <dd className="text-right font-semibold text-[var(--amber)]">
            {siteStats.underReview}
          </dd>
          <dt>Unverified</dt>
          <dd className="text-right font-semibold text-[var(--slate)]">
            {siteStats.unverified}
          </dd>
        </dl>
      </SidebarBox>

      <SidebarBox title="Mission Statement">
        <p>
          Keep the Lorida file readable. Do not turn every report into
          &quot;just a cow&quot; or &quot;just a manatee.&quot; If the animal used
          both land and water, write both parts down.
        </p>
      </SidebarBox>

      <SidebarBox title="Who's Online">
        <p>38 members, 14 guests, 2 bots</p>
        <ul className="space-y-1">
          {["ManateeDan", "CreekWalker", "HoofandFloat", "OldSalt", "BoggyBottom"].map(
            (handle) => (
              <li className="flex items-center gap-2" key={handle}>
                <ShieldCheck aria-hidden="true" className="text-[var(--green)]" size={14} />
                {handle}
              </li>
            ),
          )}
        </ul>
      </SidebarBox>

      <SidebarBox title="Classification Note">
        <p>
          Yes, everyone here knows about manatees. This archive is for hoofed
          reports where the water behavior matters.
        </p>
        <p className="mt-2 font-semibold text-[var(--burgundy)]">
          Land movement is sequence evidence. Flat water is context.
        </p>
      </SidebarBox>
    </aside>
  );
}

export function Breadcrumbs({
  items,
}: {
  items: Array<{ href?: string; label: string }>;
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm text-[var(--muted)]">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link className="utility-link" href="/">
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li className="flex items-center gap-2" key={item.label}>
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link className="utility-link" href={item.href}>
                {item.label}
              </Link>
            ) : (
              <span className="text-[var(--charcoal)]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function SectionHeader({
  title,
  kicker,
  action,
  level = 2,
}: {
  title: string;
  kicker?: string;
  action?: React.ReactNode;
  level?: 1 | 2 | 3;
}) {
  const Heading = level === 1 ? "h1" : level === 3 ? "h3" : "h2";

  return (
    <div className="flex flex-wrap items-end justify-between gap-3 border-b border-[var(--line)] pb-2">
      <div>
        {kicker ? (
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--burgundy)]">
            {kicker}
          </p>
        ) : null}
        <Heading className="font-serif text-2xl font-bold leading-tight tracking-normal text-[var(--navy)] sm:text-[1.75rem]">
          {title}
        </Heading>
      </div>
      {action}
    </div>
  );
}

export function Notice({
  children,
  tone = "amber",
}: {
  children: React.ReactNode;
  tone?: "amber" | "green" | "slate";
}) {
  const toneClass =
    tone === "green"
      ? "border-[var(--green)] bg-[#e5f1ec] text-[var(--green)]"
      : tone === "slate"
        ? "border-[var(--slate)] bg-[#e8eff0] text-[var(--navy)]"
        : "border-[var(--amber)] bg-[#e8edf5] text-[var(--navy)]";

  return <div className={`rounded-md border-l-4 px-4 py-3 text-sm ${toneClass}`}>{children}</div>;
}
