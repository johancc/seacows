import { InfoPage } from "@/components/info-page";

export const metadata = { title: "Community Guidelines" };

export default function GuidelinesPage() {
  return (
    <InfoPage
      kicker="Community Standards"
      paragraphs={[
        "Discussion should remain focused on sightings, terminology, field methods, evidence, and classification. Speculative topics are allowed when clearly labeled.",
        "Do not harass witnesses, property owners, moderators, livestock handlers, manatee advocates, or users asking difficult terminology questions.",
        "The category remains open, but the archive still has standards.",
      ]}
      sections={[
        {
          title: "No Overclaiming",
          body: "A public thread is not a confirmed case file. Treat uncertain material as uncertain.",
        },
        {
          title: "Field Safety",
          body: "Do not approach livestock, enter water, trespass, or compromise animal welfare for documentation.",
        },
      ]}
      title="Community Guidelines"
    />
  );
}
