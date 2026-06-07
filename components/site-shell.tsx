import Link from "next/link";
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
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="uppercase tracking-[0.12em]">
            Independent registry for aquatic bovine sightings and discussion
          </p>
          <div className="flex items-center gap-3">
            <Link className="utility-link" href="/guidelines">
              Guidelines
            </Link>
            <Link className="utility-link" href="/help">
              Help
            </Link>
            <Link className="utility-link" href="/contact">
              Contact
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
    <div className="grid gap-3 border-y border-[var(--line)] py-5 sm:grid-cols-[auto_1fr] sm:items-center">
      <Link
        href="/"
        aria-label="Sea Cows Are Real home"
        className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--navy)] bg-[var(--paper-strong)] text-[var(--navy)]"
      >
        <span className="relative h-10 w-10 rounded-full border border-current">
          <span className="absolute left-1 top-5 h-1 w-8 bg-current" />
          <span className="absolute left-3 top-3 h-4 w-5 rounded-[50%] border border-current bg-[var(--paper-strong)]" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full border border-current bg-[var(--paper-strong)]" />
        </span>
      </Link>
      <div>
        <p className="text-xs uppercase tracking-[0.24em] text-[var(--burgundy)]">
          seacowsarereal.com
        </p>
        <Link
          href="/"
          className="font-serif text-[2.4rem] font-bold leading-none tracking-normal text-[var(--navy)] sm:text-6xl"
        >
          SEA COWS ARE REAL
        </Link>
        <p className="mt-2 font-serif text-lg text-[var(--charcoal)]">
          Classification remains disputed.
        </p>
      </div>
    </div>
  );
}

export function NavBar() {
  return (
    <nav aria-label="Primary navigation" className="bg-[var(--navy)] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex flex-wrap gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                className="flex items-center gap-1.5 border border-transparent px-3 py-2 text-sm font-semibold hover:border-white/30 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
                href={item.href}
                key={item.href}
              >
                <Icon aria-hidden="true" size={15} />
                {item.label}
              </Link>
            );
          })}
        </div>
        <form className="flex min-w-0 max-w-md flex-1 items-center border border-white/25 bg-white/10 lg:max-w-xs">
          <label className="sr-only" htmlFor="site-search">
            Search the archive
          </label>
          <Search aria-hidden="true" className="ml-3 shrink-0" size={16} />
          <input
            id="site-search"
            name="q"
            placeholder="Search archive"
            className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/70 focus:outline-none"
          />
        </form>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-[var(--line)] bg-[var(--paper-strong)]">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 text-sm text-[var(--charcoal)] sm:px-6 md:grid-cols-[1.3fr_1fr] lg:px-8">
        <div>
          <p className="font-serif text-2xl font-bold text-[var(--navy)]">
            SEA COWS ARE REAL
          </p>
          <p className="mt-2 max-w-2xl">
            Sea Cows Are Real is an independent community registry.
            Classification remains disputed.
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
    <section className="border border-[var(--line)] bg-[var(--paper)]">
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
        <form className="flex border border-[var(--line)] bg-white">
          <label className="sr-only" htmlFor="sidebar-search">
            Search by case, location, or term
          </label>
          <input
            id="sidebar-search"
            name="q"
            placeholder="case, location, term"
            className="min-w-0 flex-1 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--burgundy)]"
          />
          <button className="border-l border-[var(--line)] px-3 text-[var(--navy)]" type="submit">
            <Search aria-hidden="true" size={16} />
            <span className="sr-only">Search</span>
          </button>
        </form>
      </SidebarBox>

      <SidebarBox title="Report a Sighting">
        <p>
          Saw one in water? Start with what you actually saw. Guesswork goes in
          the notes, not the title.
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
          We keep the reports people were told not to bother writing down:
          cows in ponds, lakes, canals, floodwater, reservoir edges, and the
          occasional case where the animal seems equally at home on land and
          below the surface.
        </p>
      </SidebarBox>

      <SidebarBox title="Recently Active Members">
        <ul className="space-y-1">
          {["PastureArchivist", "LakeWatcher", "TaxonomyDesk", "CanalDesk", "GrassFedFacts"].map(
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
          Manatees are already called sea cows. Fine. This board exists for the
          other reports, the ones where the animal has hooves and the water is
          not incidental.
        </p>
        <p className="mt-2 font-semibold text-[var(--burgundy)]">
          The category remains open.
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
}: {
  title: string;
  kicker?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3 border-b border-[var(--line)] pb-2">
      <div>
        {kicker ? (
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--burgundy)]">
            {kicker}
          </p>
        ) : null}
        <h1 className="font-serif text-3xl font-bold tracking-normal text-[var(--navy)]">
          {title}
        </h1>
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
      ? "border-[var(--green)] bg-[#edf4ee] text-[var(--green)]"
      : tone === "slate"
        ? "border-[var(--slate)] bg-[#eef1f2] text-[var(--navy)]"
        : "border-[var(--amber)] bg-[#f8efd9] text-[var(--navy)]";

  return <div className={`border-l-4 px-4 py-3 text-sm ${toneClass}`}>{children}</div>;
}
