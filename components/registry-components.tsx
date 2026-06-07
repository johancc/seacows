import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin, Waves } from "lucide-react";

import { SightingStatusBadge } from "@/components/status-badge";
import type { Sighting } from "@/lib/types";

export function RegistryFilters() {
  const statuses = ["Any status", "Confirmed", "Under Review", "Unverified", "Misclassified", "Archived"];
  const waterTypes = ["Any water type", "Lake", "Pond", "River", "Canal", "Reservoir", "Coastal / ocean", "Flooded field"];
  const involvement = ["Any involvement", "Near water", "Hooves in water", "Standing in water", "Partially submerged", "Fully swimming", "Unclear"];

  return (
    <form className="rounded-md border border-[var(--line)] bg-[var(--paper-strong)] p-3 shadow-[0_8px_24px_rgba(16,35,63,0.04)]">
      <p className="mb-3 text-sm leading-6 text-[var(--charcoal)]">
        Indexed search is on the workbench. Until it is wired in, this page
        prints the public ledger straight through.
      </p>
      <fieldset
        aria-label="Registry filters pending indexed search"
        className="grid gap-3 md:grid-cols-5"
        disabled
      >
        <label className="form-label">
          <span>Status</span>
          <select className="form-field" name="status">
            {statuses.map((status) => (
              <option key={status}>{status}</option>
            ))}
          </select>
        </label>
        <label className="form-label">
          <span>Water type</span>
          <select className="form-field" name="waterType">
            {waterTypes.map((waterType) => (
              <option key={waterType}>{waterType}</option>
            ))}
          </select>
        </label>
        <label className="form-label">
          <span>Water involvement</span>
          <select className="form-field" name="waterInvolvement">
            {involvement.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="form-label">
          <span>Year</span>
          <select className="form-field" name="year">
            {["Any year", "2026", "2025", "2024", "2023", "2022", "2021"].map(
              (year) => (
                <option key={year}>{year}</option>
              ),
            )}
          </select>
        </label>
        <label className="form-label">
          <span>Search</span>
          <input
            className="form-field"
            name="search"
            placeholder="index pending"
            type="search"
          />
        </label>
      </fieldset>
    </form>
  );
}

export function SightingCard({ sighting }: { sighting: Sighting }) {
  const evidence = sighting.evidence[0];

  return (
    <article className="overflow-hidden rounded-md border border-[var(--line)] bg-[var(--paper)] shadow-[0_8px_24px_rgba(16,35,63,0.04)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--paper-strong)] px-4 py-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--burgundy)]">
            {sighting.caseId}
          </p>
          <h2 className="font-serif text-xl font-bold text-[var(--navy)]">
            {sighting.title}
          </h2>
        </div>
        <SightingStatusBadge status={sighting.status} />
      </div>
      <div className="grid gap-4 p-4 md:grid-cols-[1fr_10rem_auto] md:items-end">
        <div className="md:self-start">
          <dl className="grid gap-2 text-sm text-[var(--charcoal)] sm:grid-cols-2">
            <Meta icon={<MapPin size={15} />} label="Location" value={sighting.locationText} />
            <Meta icon={<Waves size={15} />} label="Water type" value={sighting.waterType} />
            <Meta
              icon={<CalendarDays size={15} />}
              label="Date observed"
              value={sighting.observedAt}
            />
            <Meta label="Water involvement" value={sighting.waterInvolvement} />
          </dl>
          <p className="mt-4 text-sm leading-6 text-[var(--charcoal)]">
            {sighting.publicSummary}
          </p>
        </div>
        {evidence ? (
          <figure className="md:self-stretch">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-[var(--line-strong)] bg-[var(--paper-strong)]">
              <Image
                alt={evidence.alt}
                className="object-cover"
                fill
                loading="eager"
                sizes="(min-width: 768px) 10rem, 100vw"
                src={evidence.src}
              />
            </div>
            <figcaption className="sr-only">{evidence.caption}</figcaption>
          </figure>
        ) : null}
        <Link
          className="button-secondary self-end justify-center md:w-40"
          href={`/sightings/${sighting.caseId.toLowerCase()}`}
        >
          View Case File
        </Link>
      </div>
    </article>
  );
}

export function FeaturedCaseFile({ sighting }: { sighting: Sighting }) {
  return (
    <article className="overflow-hidden rounded-md border border-[var(--line)] bg-[var(--paper)] shadow-[0_8px_24px_rgba(16,35,63,0.04)]">
      <div className="grid gap-0 lg:grid-cols-[1fr_0.95fr]">
        <div className="p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--burgundy)]">
              Case {sighting.caseId}
            </p>
            <SightingStatusBadge status={sighting.status} />
          </div>
          <h2 className="mt-2 font-serif text-2xl font-bold text-[var(--navy)]">
            {sighting.title}
          </h2>
          <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
            <CaseMeta label="Water type" value={sighting.waterType} />
            <CaseMeta label="Water involvement" value={sighting.waterInvolvement} />
            <CaseMeta label="Confidence" value={sighting.confidenceLevel} />
            <CaseMeta label="Behavior" value={sighting.cowBehavior} />
          </dl>
          <p className="mt-4 leading-7 text-[var(--charcoal)]">{sighting.publicSummary}</p>
          <p className="mt-3 border-l-4 border-[var(--burgundy)] pl-3 text-sm leading-6 text-[var(--charcoal)]">
            Registry note: land behavior and water behavior both go in the file.
            The strange cases are the ones where the subject moves between them
            like the boundary was drawn by someone else.
          </p>
          <Link className="button-primary mt-4" href={`/sightings/${sighting.caseId.toLowerCase()}`}>
            Read Full Case File
          </Link>
        </div>
        <EvidenceFrame sighting={sighting} />
      </div>
    </article>
  );
}

export function CaseFilePanel({ sighting }: { sighting: Sighting }) {
  return (
    <article className="overflow-hidden rounded-md border border-[var(--line)] bg-[var(--paper)] shadow-[0_8px_24px_rgba(16,35,63,0.04)]">
      <div className="border-b border-[var(--line)] bg-[var(--paper-strong)] p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--burgundy)]">
              Formal Registry Record
            </p>
            <h1 className="font-serif text-3xl font-bold text-[var(--navy)]">
              {sighting.caseId}: {sighting.title}
            </h1>
          </div>
          <SightingStatusBadge status={sighting.status} />
        </div>
      </div>
      <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
        <EvidenceFrame sighting={sighting} />
        <div className="p-4">
          <dl className="grid gap-3 sm:grid-cols-2">
            <CaseMeta label="Location" value={sighting.locationText} />
            <CaseMeta label="Water type" value={sighting.waterType} />
            <CaseMeta label="Date observed" value={sighting.observedAt} />
            <CaseMeta label="Date submitted" value={sighting.submittedAt} />
            <CaseMeta label="Reporter handle" value={sighting.reporterHandle} />
            <CaseMeta label="Cow count" value={String(sighting.cowCount)} />
            <CaseMeta label="Water involvement" value={sighting.waterInvolvement} />
            <CaseMeta label="Confidence level" value={sighting.confidenceLevel} />
            <CaseMeta label="Behavior" value={sighting.cowBehavior} />
            <CaseMeta label="Evidence items" value={String(sighting.evidence.length)} />
          </dl>
        </div>
      </div>
      <div className="grid gap-6 border-t border-[var(--line)] p-4 lg:grid-cols-[1.2fr_0.8fr]">
        <section>
          <h2 className="section-title">Description</h2>
          <p className="mt-2 leading-7 text-[var(--charcoal)]">{sighting.description}</p>
        </section>
        <aside className="space-y-4">
          {sighting.moderatorNotesPublic ? (
            <div className="note-panel">
              <h2 className="section-title">Public Moderator Notes</h2>
              <p>{sighting.moderatorNotesPublic}</p>
            </div>
          ) : null}
          <div className="note-panel">
            <h2 className="section-title">Classification Notes</h2>
            <p>{sighting.classificationNotes}</p>
          </div>
          {sighting.relatedThreadSlug ? (
            <Link className="button-secondary w-full justify-center" href={`/thread/${sighting.relatedThreadSlug}`}>
              Related Forum Thread
            </Link>
          ) : null}
        </aside>
      </div>
    </article>
  );
}

export function EvidenceFrame({ sighting }: { sighting: Sighting }) {
  const evidence = sighting.evidence[0];
  if (!evidence) {
    return (
      <figure className="flex min-h-72 flex-col justify-center border-t border-[var(--line)] bg-[#dce8e5] p-6 lg:border-l lg:border-t-0">
        <div className="rounded-md border border-dashed border-[var(--line-strong)] p-6 text-center">
          <p className="font-serif text-xl font-bold text-[var(--navy)]">Evidence Pending Review</p>
          <figcaption className="mt-3 text-sm leading-6 text-[var(--charcoal)]">
            Photograph held in moderator intake. Water involvement is still on
            the board.
          </figcaption>
        </div>
      </figure>
    );
  }

  return (
    <figure className="border-t border-[var(--line)] bg-[#dce8e5] p-3 lg:border-l lg:border-t-0">
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-[var(--line-strong)] bg-[var(--paper-strong)]">
        <Image
          alt={evidence.alt}
          className="object-cover"
          fill
          priority
          sizes="(min-width: 1024px) 42vw, 100vw"
          src={evidence.src}
        />
      </div>
      <figcaption className="mt-2 border-t border-[var(--line)] pt-2 text-xs leading-5 text-[var(--muted)]">
        {evidence.caption}
      </figcaption>
    </figure>
  );
}

function Meta({
  icon,
  label,
  value,
}: {
  icon?: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-2">
      {icon ? <span className="mt-0.5 text-[var(--burgundy)]">{icon}</span> : null}
      <div>
        <dt className="text-xs font-bold uppercase tracking-[0.08em] text-[var(--muted)]">
          {label}
        </dt>
        <dd className="font-semibold text-[var(--navy)]">{value}</dd>
      </div>
    </div>
  );
}

function CaseMeta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-sm border border-[var(--line)] bg-white px-3 py-2">
      <dt className="text-[0.68rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)]">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-semibold text-[var(--navy)]">{value}</dd>
    </div>
  );
}
