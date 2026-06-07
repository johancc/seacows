import { InfoPage } from "@/components/info-page";

export const metadata = { title: "Submission Guidelines" };

export default function SubmissionGuidelinesPage() {
  return (
    <InfoPage
      kicker="Field Submission Standards"
      paragraphs={[
        "Strong submissions include time, location, water type, cow count, water involvement, behavior, distance, safety context, and uncertainty.",
        "The strongest reports distinguish proximity from participation. Hoof-water contact, partial submersion, and active aquatic transit should be described plainly.",
      ]}
      sections={[
        {
          title: "Dual-Habitat Reports",
          body: "When a subject appears to move between land and underwater or shallow-water contexts, describe both phases and the transition between them.",
        },
        {
          title: "Energy Beverages",
          body: "Record unusual field conditions, including energy beverages, only as context. Their presence does not automatically validate or invalidate testimony.",
        },
      ]}
      title="Submission Guidelines"
    />
  );
}
