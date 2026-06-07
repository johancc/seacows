import Link from "next/link";
import Image from "next/image";

import { Breadcrumbs, PageShell, SectionHeader } from "@/components/site-shell";

export const metadata = {
  title: "Evidence Standards",
};

export default function EvidencePage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Evidence" }]} />
      <div className="space-y-5">
        <SectionHeader kicker="Photographic Review" title="Evidence Standards" />
        <div className="grid gap-4 lg:grid-cols-2">
          <figure className="border border-[var(--line)] bg-[var(--paper)] p-2">
            <div className="relative aspect-[16/10] overflow-hidden border border-[var(--line-strong)]">
              <Image
                alt="Distant cow standing with hooves in reservoir water."
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                src="/images/reservoir-hoof-contact.png"
              />
            </div>
            <figcaption className="mt-2 text-xs leading-5 text-[var(--muted)]">
              Example review image: visible bovine morphology, visible waterline,
              unresolved duration.
            </figcaption>
          </figure>
          <figure className="border border-[var(--line)] bg-[var(--paper)] p-2">
            <div className="relative aspect-[16/10] overflow-hidden border border-[var(--line-strong)]">
              <Image
                alt="Field notebook, binoculars, and camera lens beside a lake."
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                src="/images/field-methods-notebook.png"
              />
            </div>
            <figcaption className="mt-2 text-xs leading-5 text-[var(--muted)]">
              Field kit note: wide context beats a shaky zoom crop most of the
              time.
            </figcaption>
          </figure>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            ["Cow morphology", "Images should show enough of the subject to establish cattle rather than statue, sign, horse, log, or sirenian."],
            ["Water visibility", "The waterline, surface, or submersion boundary should be legible without excessive enlargement."],
            ["Context", "Wider frames are useful because they preserve shoreline, posture, water type, and possible route information."],
            ["Review status", "Evidence pending moderator review is not shown publicly until the related sighting is approved."],
          ].map(([title, body]) => (
            <section className="note-panel" key={title}>
              <h2 className="section-title">{title}</h2>
              <p>{body}</p>
            </section>
          ))}
        </div>
        <Link className="button-primary" href="/report">
          Submit Evidence With a Sighting
        </Link>
      </div>
    </PageShell>
  );
}
