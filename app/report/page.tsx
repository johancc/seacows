import { ReportSightingForm } from "@/components/forms";
import { Breadcrumbs, Notice, PageShell, SectionHeader } from "@/components/site-shell";

export const metadata = {
  title: "Report a Sea Cow Sighting",
};

export default function ReportPage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Report a Sighting" }]} />
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="space-y-5">
          <SectionHeader
            kicker="Field Observation Submission"
            level={1}
            title="Report a Sea Cow Sighting"
          />
          <p className="max-w-4xl leading-7 text-[var(--charcoal)]">
            If you saw a cow in water, open with the boring parts: where, when,
            water type, hoof position, duration, behavior, and confidence. A
            plain file with limits beats a dramatic file with no waterline.
          </p>
          <ReportSightingForm />
        </div>
        <aside className="space-y-4">
          <Notice>
            Handles may appear on the board. Emails stay in moderator intake.
            Rejected submissions can become standards examples when the lesson
            is useful.
          </Notice>
          <div className="note-panel">
            <h2 className="section-title">Classification Reminder</h2>
            <p>
              Shoreline, hoof-contact, partial submersion, active transit:
              pick the nearest tier and let review handle the argument.
            </p>
          </div>
          <div className="note-panel">
            <h2 className="section-title">Dual-Habitat Note</h2>
            <p>
              If the animal moved between land and water like both were normal,
              say that plainly. Underwater occupancy gets its own sentence.
            </p>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
