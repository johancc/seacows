import { InfoPage } from "@/components/info-page";

export const metadata = { title: "Community Guidelines" };

export default function GuidelinesPage() {
  return (
    <InfoPage
      kicker="Community Standards"
      paragraphs={[
        "Keep threads anchored to sightings, terminology, field methods, evidence, and classification. Speculation must stay in clearly labeled threads.",
        "Do not harass witnesses, property owners, moderators, livestock handlers, manatee advocates, or users asking difficult terminology questions.",
        "Bring a scene the board can reconstruct. The naming argument already has enough furniture in it.",
      ]}
      sections={[
        {
          title: "No Overclaiming",
          body: "A public thread is a thread. A confirmed case file needs evidence, status, and moderator review.",
        },
        {
          title: "Field Safety",
          body: "Do not approach livestock, enter water, trespass, use lights or motors to force a reaction, bring cattle to the waterline, or compromise animal welfare for documentation.",
        },
        {
          title: "No Proof Hunts",
          body: "Planned attempts to provoke sightings, calls, bumps, or cattle response are not field work. The archive wants observations, not stunts.",
        },
      ]}
      title="Community Guidelines"
    />
  );
}
