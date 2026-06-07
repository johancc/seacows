import { notFound } from "next/navigation";

import { CaseFilePanel } from "@/components/registry-components";
import { Breadcrumbs, PageShell } from "@/components/site-shell";
import { getPublicSightings, getSightingByCaseId } from "@/lib/data";

export function generateStaticParams() {
  return getPublicSightings().map((sighting) => ({
    caseId: sighting.caseId.toLowerCase(),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ caseId: string }>;
}) {
  const { caseId } = await params;
  const sighting = getSightingByCaseId(caseId);
  return {
    title: sighting ? `${sighting.caseId}: ${sighting.title}` : "Case File",
  };
}

export default async function CaseFilePage({
  params,
}: {
  params: Promise<{ caseId: string }>;
}) {
  const { caseId } = await params;
  const sighting = getSightingByCaseId(caseId);
  if (!sighting || sighting.status === "pending" || sighting.status === "rejected") {
    notFound();
  }

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { href: "/registry", label: "Registry" },
          { label: sighting.caseId },
        ]}
      />
      <CaseFilePanel sighting={sighting} />
    </PageShell>
  );
}
