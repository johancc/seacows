import { InfoPage } from "@/components/info-page";

export const metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <InfoPage
      kicker="Privacy Notice"
      paragraphs={[
        "Public records display handles, case details, public summaries, and approved moderator notes. Private emails, private moderator notes, and IP hashes are not displayed publicly.",
        "The MVP includes Supabase-ready schema documentation. Production deployments should configure storage policies and retention rules before accepting public uploads.",
      ]}
      sections={[
        {
          title: "Evidence",
          body: "Uploaded evidence should remain private until a moderator approves publication with the related case file.",
        },
        {
          title: "Anonymous Handles",
          body: "Public accounts are not required for MVP submissions. Choose a handle that does not reveal private information.",
        },
      ]}
      title="Privacy"
    />
  );
}
