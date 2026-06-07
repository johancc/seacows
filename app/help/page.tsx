import { InfoPage } from "@/components/info-page";

export const metadata = { title: "Help" };

export default function HelpPage() {
  return (
    <InfoPage
      kicker="Archive Help"
      paragraphs={[
        "Start with the pinned forum post, use the registry for case files, and read the Lorida field note before starting another manatee-definition thread.",
        "Fresh submissions sit in intake first. Handles can become public; private contact details stay in the moderator drawer.",
      ]}
      sections={[
        {
          title: "Are these manatees?",
          body: "No. The archive acknowledges sirenian usage. Local Lorida usage means hoofed, cow-shaped subjects or reports close enough that cow is the only useful witness word.",
        },
        {
          title: "What is the other shore?",
          body: "Local shorthand for the in-between category: animals no longer behaving like ordinary owned cattle, but not cleanly documented as ordinary wildlife either.",
        },
        {
          title: "What if the water goes flat?",
          body: "Record it as sound and weather context: wind, insects, boat traffic, dock vibration, ordinary cattle reaction, and where the lowing seemed to come from.",
        },
        {
          title: "Why middle water?",
          body: "Lorida accounts treat middle-water distance as the pattern. Dock, canal, and clean close-up stories usually need ordinary explanations checked first.",
        },
        {
          title: "Should I call back?",
          body: "No. Do not imitate animal calls or draw anything toward a dock, boat, fence, or witness. Write down what happened and keep yourself out of the report.",
        },
        {
          title: "Can I count them?",
          body: "Silently record an estimate later. Do not narrate inventory at the waterline; if you are focused on counting, you are probably missing field conditions.",
        },
        {
          title: "Do lights help?",
          body: "Usually no. Bright lights tend to end the observation. Record natural light, moon, dawn, lightning, or artificial light without trying to force a reveal.",
        },
      ]}
      title="Help"
    />
  );
}
