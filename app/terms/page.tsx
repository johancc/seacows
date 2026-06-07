import { InfoPage } from "@/components/info-page";

export const metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <InfoPage
      kicker="Use Terms"
      paragraphs={[
        "This site is an independent community archive. Registry inclusion means public preservation; institutional recognition, legal classification, veterinary assessment, and property access permission stay outside the file.",
        "Users are responsible for submitting lawful, safe, and non-invasive field observations.",
      ]}
      sections={[
        {
          title: "Moderation",
          body: "Moderators may approve, reject, archive, edit, pin, lock, or annotate submissions to preserve archive quality.",
        },
        {
          title: "Evidence",
          body: "Submit only evidence you have the right to share. Do not trespass or endanger animals to create evidence.",
        },
      ]}
      title="Terms"
    />
  );
}
