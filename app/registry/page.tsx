import Link from "next/link";
import { PenLine } from "lucide-react";

import { RegistryFilters, SightingCard } from "@/components/registry-components";
import { Breadcrumbs, PageShell, SectionHeader } from "@/components/site-shell";
import { getPublicSightings } from "@/lib/data";

export const metadata = {
  title: "Registry",
};

export default function RegistryPage() {
  const publicSightings = getPublicSightings();

  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Registry" }]} />
      <div className="space-y-6">
        <SectionHeader
          action={
            <Link className="button-primary" href="/report">
              <PenLine aria-hidden="true" size={16} />
              Report a Sighting
            </Link>
          }
          kicker="Public Registry"
          level={1}
          title="Aquatic Bovine Sightings"
        />
        <p className="max-w-4xl leading-7 text-[var(--charcoal)]">
          The public registry displays approved, under-review, unverified,
          misclassified, and archived case files. Rejected submissions and
          private reporter details are never shown publicly.
        </p>
        <RegistryFilters />
        <div className="grid gap-4">
          {publicSightings.map((sighting) => (
            <SightingCard key={sighting.id} sighting={sighting} />
          ))}
        </div>
      </div>
    </PageShell>
  );
}
