import { InfoPage } from "@/components/info-page";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <InfoPage
      kicker="Institutional Note"
      paragraphs={[
        "Sea Cows Are Real keeps the Lorida file, the public ledger, the argument threads, and the classification notes in one place.",
        "New readers should begin with the pinned forum post and the other-shore field note. The registry treats terminology as a recordkeeping problem, not a substitute for field detail.",
        "Working model: some cattle remain pasture animals, some enter water by accident, and a few reports describe subjects that move between both categories without belonging cleanly to either.",
      ]}
      sections={[
        {
          title: "Core Position",
          body: "The archive starts from field reports and works outward. Lorida stays central because the witnesses described cow-shaped subjects away from shore, not a tidy manatee correction.",
        },
        {
          title: "The Other Shore",
          body: "The phrase is treated as local field language, not a status label. It describes the disputed middle: no longer ordinary owned cattle, not ordinary wildlife either.",
        },
      ]}
      title="About Sea Cows Are Real"
    />
  );
}
