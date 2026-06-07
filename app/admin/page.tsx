import { cookies } from "next/headers";

import { AdminLoginForm, AdminModerationForm } from "@/components/forms";
import { SightingStatusBadge } from "@/components/status-badge";
import { Breadcrumbs, Notice, PageShell, SectionHeader } from "@/components/site-shell";
import { getPublicSightings, pendingAdminItems } from "@/lib/data";
import type { SightingStatus } from "@/lib/types";

export const metadata = {
  title: "Admin Moderation",
};

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const cookieStore = await cookies();
  const authorized = cookieStore.get("scar_admin")?.value === "review-authorized";
  const { error } = await searchParams;

  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Admin" }]} />
      <div className="space-y-6">
        <SectionHeader kicker="Private Review" title="Admin Moderation Panel" />
        {!authorized ? (
          <>
            <Notice tone="slate">
              MVP admin access uses the <code>ADMIN_PASSWORD</code> environment
              variable. For local review, the fallback password is{" "}
              <code>seacow-review</code>.
            </Notice>
            <AdminLoginForm error={error === "1"} />
          </>
        ) : (
          <AdminDashboard />
        )}
      </div>
    </PageShell>
  );
}

function AdminDashboard() {
  const publicSightings = getPublicSightings();

  return (
    <div className="space-y-6">
      <Notice tone="green">
        Public emails, private moderator notes, and IP hashes are intentionally
        absent from this MVP panel display.
      </Notice>
      <section className="space-y-3">
        <SectionHeader kicker="Pending Queue" title="Sightings, Threads, and Replies" />
        <div className="overflow-x-auto border border-[var(--line)] bg-[var(--paper)]">
          <table className="forum-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Submission</th>
                <th>Submitted By</th>
                <th>Status</th>
                <th>Summary</th>
                <th>Moderation</th>
              </tr>
            </thead>
            <tbody>
              {pendingAdminItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.type}</td>
                  <td className="font-semibold text-[var(--navy)]">{item.title}</td>
                  <td>{item.submittedBy}</td>
                  <td>
                    {item.type === "Sighting" ? (
                      <SightingStatusBadge status={item.status as SightingStatus} />
                    ) : (
                      <span className="border border-[var(--line)] bg-[var(--paper-strong)] px-2 py-0.5 text-xs font-bold uppercase text-[var(--muted)]">
                        {item.status}
                      </span>
                    )}
                  </td>
                  <td className="max-w-md text-sm">{item.summary}</td>
                  <td>
                    <AdminModerationForm item={item.title} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <SectionHeader kicker="Published Records" title="Published Sightings" />
        <div className="overflow-x-auto border border-[var(--line)] bg-[var(--paper)]">
          <table className="forum-table">
            <thead>
              <tr>
                <th>Case</th>
                <th>Title</th>
                <th>Status</th>
                <th>Water Type</th>
                <th>Water Involvement</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>
              {publicSightings.map((sighting) => (
                <tr key={sighting.id}>
                  <td className="font-mono text-sm">{sighting.caseId}</td>
                  <td className="font-semibold text-[var(--navy)]">{sighting.title}</td>
                  <td>
                    <SightingStatusBadge status={sighting.status} />
                  </td>
                  <td>{sighting.waterType}</td>
                  <td>{sighting.waterInvolvement}</td>
                  <td>{sighting.submittedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
