import Link from "next/link";
import { ClipboardList, PenLine, Waves } from "lucide-react";

import { FeaturedCaseFile, SightingCard } from "@/components/registry-components";
import { Breadcrumbs, Notice, PageShell, SectionHeader } from "@/components/site-shell";
import { getRecentSightings, sightings } from "@/lib/data";

export const metadata = {
  title: "Sightings",
};

export default function SightingsPage() {
  const featured = sightings[0];
  const recentSightings = getRecentSightings(5);

  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Sightings" }]} />
      <div className="space-y-6">
        <SectionHeader
          action={
            <Link className="button-primary" href="/report">
              <PenLine aria-hidden="true" size={16} />
              Report a Sighting
            </Link>
          }
          kicker="Recent Field Reports"
          level={1}
          title="Sightings"
        />
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="space-y-4">
            <Notice tone="slate">
              This page is the quick read: recent reports, the Lorida reference
              case, and what changed lately. The full searchable ledger lives in
              the registry.
            </Notice>
            <FeaturedCaseFile sighting={featured} />
          </div>
          <aside className="forum-panel p-4">
            <div className="flex items-center gap-2 text-[var(--navy)]">
              <Waves aria-hidden="true" size={18} />
              <h2 className="font-serif text-xl font-bold">read this first</h2>
            </div>
            <p className="mt-3 text-sm leading-6 text-[var(--charcoal)]">
              A sighting is not a confirmed case. It is a report with enough
              detail for the board to talk about it: water type, distance,
              count, duration, sound, return path, and what stayed unclear.
            </p>
            <Link className="button-secondary mt-4 w-full justify-center" href="/registry">
              <ClipboardList aria-hidden="true" size={16} />
              Full Registry
            </Link>
          </aside>
        </div>

        <section className="space-y-3">
          <SectionHeader
            action={
              <Link className="button-secondary" href="/registry">
                <ClipboardList aria-hidden="true" size={16} />
                Open Registry
              </Link>
            }
            kicker="Recent"
            title="Latest Public Reports"
          />
          <div className="grid gap-4">
            {recentSightings.map((sighting) => (
              <SightingCard key={sighting.id} sighting={sighting} />
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
