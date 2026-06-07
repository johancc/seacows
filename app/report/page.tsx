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
            title="Report a Sea Cow Sighting"
          />
          <p className="max-w-4xl leading-7 text-[var(--charcoal)]">
            If you saw a cow in water, write down the boring parts first:
            where, when, how much water, what the animal did, and what you could
            not verify. A shaky report with honest limits is more useful than a
            confident story with no waterline.
          </p>
          <ReportSightingForm />
        </div>
        <aside className="space-y-4">
          <Notice>
            Handles are public. Emails are not. Rejected submissions stay off
            the board unless a moderator turns them into a standards example.
          </Notice>
          <div className="note-panel">
            <h2 className="section-title">Classification Reminder</h2>
            <p>
              A cow near water is not automatically a sea cow. A cow
              meaningfully in water requires review.
            </p>
          </div>
          <div className="note-panel">
            <h2 className="section-title">Dual-Habitat Note</h2>
            <p>
              If the animal moved between land and water like both were normal,
              say that plainly. If you actually saw underwater occupancy, do
              not summarize it as “near pond.”
            </p>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
