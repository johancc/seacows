import { InfoPage } from "@/components/info-page";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <InfoPage
      kicker="Institutional Note"
      paragraphs={[
        "Sea Cows Are Real is an independent community registry dedicated to documenting aquatic bovine sightings, preserving field reports, and supporting open discussion around disputed classification.",
        "The site recognizes conventional sirenian usage while maintaining that aquatic bovine sightings represent a separate and insufficiently documented category.",
        "The current working model allows for dual-habitat interpretation where a subject appears capable of ordinary terrestrial presence and meaningful aquatic occupancy.",
      ]}
      sections={[
        {
          title: "Core Position",
          body: "Sea cows are real. The mainstream definition has simply been incomplete.",
        },
        {
          title: "Registry Boundary",
          body: "Registry inclusion is not a claim of institutional recognition. It is a public archive decision.",
        },
      ]}
      title="About Sea Cows Are Real"
    />
  );
}
