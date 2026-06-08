import Link from "next/link";
import { ArrowRight, FileSearch, MessageSquareWarning } from "lucide-react";

import { Breadcrumbs, PageShell, SectionHeader } from "@/components/site-shell";

export const metadata = {
  title: "Evidence",
};

const notes = [
  {
    title: "the boring part matters",
    body: "date, water, distance, wind, whether the boat motor was on, and what the shore cattle did. yes it is homework. no we did not invent homework for fun.",
  },
  {
    title: "a manatee answer is not a magic eraser",
    body: "if the file says hooves, shoulder line, tail switch, or land return, you still have to deal with that. saying manatee louder is not analysis.",
  },
  {
    title: "bad photos are still data",
    body: "a blurry crop can be useless for identification and useful for route, timing, waterline, or witness panic. two things can be true. welcome to the forum.",
  },
];

export default function EvidencePage() {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Evidence" }]} />
      <article className="overflow-hidden rounded-md border border-[var(--line)] bg-[var(--paper)] shadow-[0_8px_24px_rgba(16,35,63,0.04)]">
        <header className="border-b border-[var(--line-strong)] bg-[var(--paper-strong)] px-4 py-4 sm:px-5">
          <SectionHeader
            kicker="evidence desk"
            level={1}
            title="why the cow thing keeps surviving"
          />
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--charcoal)]">
            not proof. not a manifesto. just the post we keep needing every
            time somebody wanders in, says &quot;lol cows cannot swim,&quot; and
            then acts like they discovered gravity.
          </p>
        </header>

        <div className="grid gap-5 p-4 sm:p-5 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="prose-archive max-w-none">
            <p>
              the case for sea cows is not that every weird lake photo is a sea
              cow. please stop making us argue against that. nobody here thinks
              every dark lump in water is part of the Lorida herd. sometimes it
              is a stump. sometimes it is a regular cow having the worst
              afternoon of its life. sometimes it is a manatee, and then fifteen
              people type &quot;manatee&quot; like a spell and go to bed proud.
            </p>

            <p>
              the reason the file stays open is that the same wrong detail keeps
              showing up. not &quot;animal near shore.&quot; middle water. not
              &quot;moo from a field.&quot; low sound over flat water. not
              &quot;cow fell in.&quot; subjects holding position, turning as a
              group, then returning by routes that do not make normal cow sense
              unless there is an old crossing under there, or unless the animal
              is using the lake differently than we want it to.
            </p>

            <h2>the annoying evidence is the useful evidence</h2>
            <p>
              clean proof would be easier. beautiful daylight video, full body,
              known location, witness with a normal username, no cousin, no old
              flip phone, no one in the replies saying &quot;this is my
              uncle&apos;s pond and you are all banned.&quot; we do not get that. we
              get five seconds of shaky zoom and a person saying they heard the
              dock answer back. that is not enough to crown a new species,
              obviously. it is enough to ask why the same kind of bad evidence
              keeps failing in the same direction.
            </p>

            <p>
              skeptics say this like an insult: &quot;your best evidence is bad
              photos and locals talking.&quot; correct. welcome to local
              phenomena. every weird board gets its bad terrain. ufo people get
              the sky. we get cattle, water, and the specific humiliation of
              typing &quot;hoof contact&quot; into a web form. every subject chooses
              its own stupid paperwork.
            </p>

            <h2>what would make it real enough?</h2>
            <p>
              if your standard is &quot;a government agency tags one and holds
              a press conference,&quot; fine, come back later. but most real
              things become real socially before they become official. people
              notice a pattern. they compare stories. they argue badly. somebody
              makes a spreadsheet and everybody hates the spreadsheet until they
              need it. then the boring notes become the thing that keeps the
              story from turning into pure campfire noise.
            </p>

            <p>
              the Lorida claim is simple enough to be embarrassing: cattle, or
              something close enough to cattle, crossed too far into water and
              did not come all the way back. they are not ghosts. they are not
              manatees with a branding issue. they are herd animals stuck
              between pasture and lake. that is the whole unsettling part. not a
              monster. not magic. just a cow where the cow category starts
              making ugly grinding sounds.
            </p>

            <h2>so what counts?</h2>
            <p>
              evidence counts when it helps reconstruct the sequence. where was
              the animal before the water? how deep was the water where it
              stopped? did it stand, float, swim, sink, walk, or do that awful
              half-step thing people keep describing and then apologizing for?
              did ordinary cattle react? did the sound come through air, water,
              dock boards, or your own bad nerves?
            </p>

            <p>
              if you only have a terrible picture, post the terrible picture.
              if you only have the sound and no picture, say that. if you are
              sure it was nothing, post why you are sure. if you are not sure,
              congratulations, you have arrived at the only honest place in this
              entire hobby.
            </p>

            <p>
              the archive exists because laughing at &quot;lake cows&quot; is easy and
              forgetting the details is easier. the details are the part that
              bothers people. keep those.
            </p>
          </div>

          <aside className="space-y-3">
            <section className="note-panel">
              <h2 className="section-title flex items-center gap-2">
                <MessageSquareWarning aria-hidden="true" size={16} />
                recurring fight
              </h2>
              <p>
                &quot;cows swim&quot; is true and also not the point. SCAR-0001
                is about middle-water position, group behavior, and return path.
                argue with that, please.
              </p>
            </section>

            {notes.map((note) => (
              <section className="note-panel" key={note.title}>
                <h2 className="section-title">{note.title}</h2>
                <p>{note.body}</p>
              </section>
            ))}
          </aside>
        </div>

        <footer className="flex flex-wrap gap-3 border-t border-[var(--line)] bg-[var(--paper-strong)] px-4 py-4 sm:px-5">
          <Link className="button-primary" href="/report">
            <FileSearch aria-hidden="true" size={16} />
            Submit Evidence
          </Link>
          <Link className="button-secondary" href="/registry">
            Read the Registry
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </footer>
      </article>
    </PageShell>
  );
}
