import { InfoPage } from "@/components/info-page";

export const metadata = { title: "Help" };

export default function HelpPage() {
  return (
    <InfoPage
      kicker="Archive Help"
      paragraphs={[
        "Use the registry to browse public case files, the forum to discuss classification and field notes, and the report form to submit a possible sighting.",
        "Submissions do not appear publicly until moderator review. Private contact details are used only for follow-up and are not displayed on public records.",
      ]}
      sections={[
        {
          title: "Sighting Status",
          body: "Confirmed, under review, unverified, misclassified, and archived records can appear publicly. Pending and rejected records do not.",
        },
        {
          title: "Search",
          body: "The MVP search fields are styled for deployment but not yet connected to a full-text index.",
        },
      ]}
      title="Help"
    />
  );
}
