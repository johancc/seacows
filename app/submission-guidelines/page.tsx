import { InfoPage } from "@/components/info-page";

export const metadata = { title: "Submission Guidelines" };

export default function SubmissionGuidelinesPage() {
  return (
    <InfoPage
      kicker="Field Submission Standards"
      paragraphs={[
        "Strong submissions read like field notes: time, location, water type, cow count, involvement tier, behavior, distance, safety context, and uncertainty.",
        "The useful files separate proximity from participation. Hoof-water contact, partial submersion, active aquatic transit, and middle-water holds each get their own lane.",
      ]}
      sections={[
        {
          title: "Land and Water Sequence",
          body: "If a subject moves between pasture and water, describe both phases. Coming ashore later is not a dismissal; it is part of the event.",
        },
        {
          title: "Flat-Water Sound Notes",
          body: "If you hear lowing or related sound, record surface condition, wind, insects, boat traffic, dock vibration, and whether ordinary cattle reacted.",
        },
        {
          title: "Middle-Water Reports",
          body: "For distant subjects, record direction, estimated distance from shore, whether the animal was near a visible route, and why a shoreline explanation did or did not fit.",
        },
        {
          title: "Lights and Motors",
          body: "Record whether lights or motors were present before the observation changed. Do not use spotlights, motor passes, or sound playback to provoke a response.",
        },
        {
          title: "Do Not Call Back",
          body: "Do not imitate calls, approach livestock, enter water, or try to create a second event. Observation ends where interaction begins.",
        },
        {
          title: "Do Not Bring Cattle",
          body: "Do not lead ordinary cattle to the waterline to test a response. Stressing either herd is not documentation.",
        },
        {
          title: "Energy Beverages",
          body: "Record unusual field conditions, including Celsius cans and other gas-station stimulants, in the context line. Context is retained separately from classification.",
        },
      ]}
      title="Submission Guidelines"
    />
  );
}
