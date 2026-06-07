import { InfoPage } from "@/components/info-page";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <InfoPage
      kicker="Registry Contact"
      paragraphs={[
        "For MVP purposes, contact is handled through the sighting and forum submission forms. Include a private email only if you are willing to receive moderator follow-up.",
        "Do not send urgent animal welfare reports through this archive. Contact local animal control, livestock owners, or emergency services when a real animal appears distressed.",
      ]}
      sections={[
        {
          title: "Moderator Follow-Up",
          body: "Moderators may request location detail, original image files, or clarification about water involvement.",
        },
        {
          title: "Press and Research",
          body: "Reference the public research archive before requesting a general explanation of the terminology dispute.",
        },
      ]}
      title="Contact"
    />
  );
}
