import { InfoPage } from "@/components/info-page";

export const metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <InfoPage
      kicker="Privacy Notice"
      paragraphs={[
        "Public records display handles, case details, public summaries, and approved moderator notes. Moderator-only fields include private emails, private notes, and IP hashes.",
        "The MVP includes Supabase-ready schema documentation. Production deployments should configure storage policies and retention rules before accepting public uploads.",
      ]}
      sections={[
        {
          title: "Evidence",
          body: "Uploaded evidence should remain private until a moderator approves publication with the related case file.",
        },
        {
          title: "Anonymous Handles",
          body: "MVP submissions accept public handles without accounts. Choose a handle that keeps private information out of the record.",
        },
      ]}
      title="Privacy"
    />
  );
}
