import type {
  AdminItem,
  Article,
  ForumCategory,
  ForumReply,
  ForumThread,
  Sighting,
  SightingStatus,
} from "@/lib/types";

export const siteStats = {
  members: "4,218",
  threads: "6,735",
  posts: "28,692",
  confirmedSightings: "145",
  underReview: "90",
  unverified: "93",
};

export const statusLabels: Record<SightingStatus, string> = {
  pending: "Pending",
  under_review: "Under Review",
  confirmed: "Confirmed",
  unverified: "Unverified",
  misclassified: "Misclassified",
  archived: "Archived",
  rejected: "Rejected",
};

export const forumCategories: ForumCategory[] = [
  {
    id: "cat-general",
    slug: "general-discussion",
    name: "General Discussion",
    description:
      "New reports, member questions, board housekeeping, and the threads people start before they know which old argument they just touched.",
    topics: 2127,
    posts: 11241,
    sortOrder: 1,
  },
  {
    id: "cat-confirmed",
    slug: "confirmed-sightings",
    name: "Confirmed Sightings",
    description:
      "Files that survived review. Read them before saying nobody ever documents the water part.",
    topics: 319,
    posts: 2976,
    sortOrder: 2,
  },
  {
    id: "cat-announcements",
    slug: "announcements",
    name: "Announcements",
    description:
      "Downtime, sticky posts, rule edits, locked notes, and the stuff mods link instead of typing again for the 400th time.",
    topics: 74,
    posts: 481,
    sortOrder: 3,
  },
  {
    id: "cat-research",
    slug: "research",
    name: "Research",
    description:
      "Terminology fights, field methods, route theories, photo standards, and that same waterline argument from before half of you registered.",
    topics: 1830,
    posts: 11865,
    sortOrder: 4,
  },
];

export const sightings: Sighting[] = [
  {
    id: "sighting-0001",
    caseId: "SCAR-0001",
    title: "The Original Lorida Herd",
    slug: "scar-0001-the-original-lake-cow",
    reporterHandle: "LakeWatcher",
    locationText: "Lorida, Florida",
    waterType: "Lake",
    observedAt: "2021-07-18",
    submittedAt: "2021-07-19",
    cowCount: 3,
    waterInvolvement: "Middle-lake surface hold",
    confidenceLevel: "Confirmed with evidence",
    cowBehavior: "Calm grouped hold",
    energyDrinkPresent: "Unknown",
    description:
      "Two witnesses reported three cow-shaped subjects in the middle water near Lorida, not at the bank and not on a reachable sandbar. The first note says they looked like they were standing where the lake should have been too deep to stand. One subject turned its head toward the boat before the group held position again. No distress behavior was recorded. The argument has never been whether the witnesses saw cattle. The argument is what cattle were doing out there.",
    status: "confirmed",
    publicSummary:
      "Three cow-shaped subjects reported in the middle water near Lorida, Florida. Witnesses described them as settled rather than trapped, with one head turn observed from the boat.",
    moderatorNotesPublic:
      "Confirmed because the report establishes bovine morphology, middle-lake context, sustained water presence, and matching witness language recorded separately.",
    classificationNotes:
      "The file remains the board's reference case for the difference between a cow crossing water, a cow occupying water, and a herd behaving as if the lake remembered a floor.",
    relatedThreadSlug: "case-scar-0001-original-lake-cow-discussion",
    evidence: [
      {
        id: "evidence-0001",
        src: "/images/original-lake-cow.png",
        alt: "Documentary style image of cow-shaped subjects holding low in lake water near Lorida, Florida.",
        caption:
          "Figure 1. Bovine morphology in middle-lake context near Lorida, Florida. Exact lake withheld.",
      },
    ],
  },
  {
    id: "sighting-0002",
    caseId: "SCAR-0002",
    title: "Cow Near Suspicious Pond",
    slug: "scar-0002-cow-near-suspicious-pond",
    reporterHandle: "FenceLineObserver",
    locationText: "Private pasture, county withheld",
    waterType: "Pond",
    observedAt: "2022-03-04",
    submittedAt: "2022-03-05",
    cowCount: 1,
    waterInvolvement: "Near water",
    confidenceLevel: "Possible",
    cowBehavior: "Stationary",
    energyDrinkPresent: "No",
    description:
      "Reporter saw a cow near the pond edge during an early road pass. The animal kept facing the water, then looked away whenever a car came by. No hoof-water contact was confirmed from the road.",
    status: "under_review",
    publicSummary:
      "Cow at pond perimeter. Interesting posture, no confirmed water contact.",
    moderatorNotesPublic:
      "Additional detail requested regarding distance from waterline.",
    classificationNotes:
      "Filed as shoreline tier until somebody can show contact, duration, or a cleaner angle.",
    relatedThreadSlug: "do-shoreline-cows-count-or-does-there-need-to-be-immersion",
    evidence: [],
  },
  {
    id: "sighting-0003",
    caseId: "SCAR-0003",
    title: "Possible Canal Cow",
    slug: "scar-0003-possible-canal-cow",
    reporterHandle: "CanalDesk",
    locationText: "Canal maintenance corridor",
    waterType: "Canal",
    observedAt: "2022-09-12",
    submittedAt: "2022-09-13",
    cowCount: 1,
    waterInvolvement: "Unclear",
    confidenceLevel: "Possible",
    cowBehavior: "Unknown",
    energyDrinkPresent: "Prefer not to say",
    description:
      "Witness sent three distant canal photos and a note that said, in full, 'this is either a cow or the county finally got weird.' Railings block the body and the waterline is not readable.",
    status: "unverified",
    publicSummary:
      "Possible cow shape near canal infrastructure. Evidence is too distant for anything stronger.",
    classificationNotes:
      "Kept because the report is strange enough to index, not because the image proves much.",
    evidence: [],
  },
  {
    id: "sighting-0004",
    caseId: "SCAR-0004",
    title: "Reservoir Grazing Anomaly",
    slug: "scar-0004-reservoir-grazing-anomaly",
    reporterHandle: "ReservoirClerk",
    locationText: "Municipal reservoir margin",
    waterType: "Reservoir",
    observedAt: "2023-05-30",
    submittedAt: "2023-05-31",
    cowCount: 2,
    waterInvolvement: "Hooves in water",
    confidenceLevel: "Probable",
    cowBehavior: "Grazing",
    energyDrinkPresent: "Unknown",
    description:
      "Two cattle grazed along a reservoir shelf with repeated front-hoof contact. They moved with the waterline for about six minutes and never acted like the wet edge surprised them.",
    status: "under_review",
    publicSummary:
      "Repeated hoof-water contact along reservoir edge. Waiting on the witness to clarify duration and angle.",
    moderatorNotesPublic:
      "Review is stuck on the usual question: incidental wet hooves or actual waterline use.",
    classificationNotes:
      "The distinction between proximity and participation remains unresolved for this case.",
    evidence: [],
  },
  {
    id: "sighting-0005",
    caseId: "SCAR-0005",
    title: "Flooded Pasture Event",
    slug: "scar-0005-flooded-pasture-event",
    reporterHandle: "PastureArchivist",
    locationText: "Seasonally flooded pasture",
    waterType: "Flooded field",
    observedAt: "2023-11-21",
    submittedAt: "2023-11-21",
    cowCount: 5,
    waterInvolvement: "Standing in water",
    confidenceLevel: "Confirmed by witness",
    cowBehavior: "Calm",
    energyDrinkPresent: "No",
    description:
      "Several cattle were standing in shallow floodwater after heavy rain. Good documentation, wrong category: the water came to them.",
    status: "misclassified",
    publicSummary:
      "Confirmed water contact, but flood conditions explain the scene without voluntary aquatic behavior.",
    moderatorNotesPublic:
      "Kept public because every June someone tries to submit a flooded pasture as a breakthrough.",
    classificationNotes:
      "Useful boundary case: wet cow, weak sea-cow file.",
    evidence: [],
  },
  {
    id: "sighting-0006",
    caseId: "SCAR-0006",
    title: "Riverbank Hoof Contact Report",
    slug: "scar-0006-riverbank-hoof-contact-report",
    reporterHandle: "NorthForkNotes",
    locationText: "North fork river bend",
    waterType: "River",
    observedAt: "2024-04-16",
    submittedAt: "2024-04-17",
    cowCount: 1,
    waterInvolvement: "Hooves in water",
    confidenceLevel: "Probable",
    cowBehavior: "Moving through water",
    energyDrinkPresent: "Unknown",
    description:
      "Single cow crossed a shallow river margin, paused midstream, then returned to the bank. The witness wrote down the clock times, which already puts it ahead of half the inbox, but no photo came with it.",
    status: "under_review",
    publicSummary:
      "Detailed witness report of a river-margin crossing with a midstream pause.",
    classificationNotes:
      "Accepted for review because the sequence is clear. Confirmation needs image support or a second witness.",
    evidence: [],
  },
  {
    id: "sighting-0007",
    caseId: "SCAR-0007",
    title: "Fencepost Floodwater Stand",
    slug: "scar-0007-fencepost-floodwater-stand",
    reporterHandle: "MudGate",
    locationText: "South edge pasture, Lorida area",
    waterType: "Flooded field",
    observedAt: "2026-06-03",
    submittedAt: "2026-06-04",
    cowCount: 1,
    waterInvolvement: "Standing in water",
    confidenceLevel: "Probable",
    cowBehavior: "Calm, stationary",
    energyDrinkPresent: "No",
    description:
      "single cow stood in shallow floodwater beside a leaning fence post for at least seven minutes. witness says the animal entered from dry grass, paused in water, then came back out on the same side and went back to chewing like the whole board was being dramatic.",
    status: "under_review",
    publicSummary:
      "good wide photo with fence-post scale and visible hoof-water contact. review is mostly about whether floodwater created the scene or the cow chose the wet spot.",
    moderatorNotesPublic:
      "kept high in queue because the image preserves both waterline and dry return area.",
    classificationNotes:
      "route sequence is plausible but not confirmed. needs either a second witness or clearer entry/exit timing before moving beyond under review.",
    relatedThreadSlug: "return-path-is-doing-more-work-than-we-admit",
    evidence: [
      {
        id: "evidence-0007",
        src: "/images/flooded-pasture-hoof-contact.png",
        alt: "Cow standing in shallow flooded pasture water beside a leaning fence post.",
        caption:
          "Figure 1. Wide field image retained because the fence post, hoof line, and surrounding dry grass all remain visible.",
      },
    ],
  },
  {
    id: "sighting-0008",
    caseId: "SCAR-0008",
    title: "Canal Culvert Route Pair",
    slug: "scar-0008-canal-culvert-route-pair",
    reporterHandle: "CulvertKid",
    locationText: "Roadside canal, county withheld",
    waterType: "Canal",
    observedAt: "2026-06-05",
    submittedAt: "2026-06-05",
    cowCount: 2,
    waterInvolvement: "Moving through water",
    confidenceLevel: "Probable",
    cowBehavior: "Following canal edge",
    energyDrinkPresent: "Unknown",
    description:
      "two cattle were photographed at a roadside canal after rain. one animal moved through ankle-deep water toward the culvert while the second stayed on the bank. witness claims the wet route shortened the path back to pasture, which is exactly the kind of sentence that starts a three-page return-path fight.",
    status: "under_review",
    publicSummary:
      "canal-edge image with one cow actively using the shallow water line. classification depends on whether the culvert route was deliberate or just the least bad mud.",
    moderatorNotesPublic:
      "road name stripped from original file. do not ask for it.",
    classificationNotes:
      "stronger than ordinary canal proximity because movement through water is visible. still waiting on duration notes.",
    relatedThreadSlug: "environmental-boundary-failure-as-a-field-model",
    evidence: [
      {
        id: "evidence-0008",
        src: "/images/canal-culvert-route.png",
        alt: "Two cattle near a roadside canal, one stepping through shallow water near a culvert.",
        caption:
          "Figure 1. Canal context remains in frame; one subject is visibly moving through the shallow water path.",
      },
    ],
  },
  {
    id: "sighting-0009",
    caseId: "SCAR-0009",
    title: "Dusk Pond Return Path",
    slug: "scar-0009-dusk-pond-return-path",
    reporterHandle: "DuskFence",
    locationText: "Private pond edge, county withheld",
    waterType: "Pond",
    observedAt: "2026-06-06",
    submittedAt: "2026-06-06",
    cowCount: 1,
    waterInvolvement: "Partially submerged",
    confidenceLevel: "Confirmed by image",
    cowBehavior: "Grazing from waterline",
    energyDrinkPresent: "Unknown",
    description:
      "black cow photographed at dusk with lower legs and belly line in pond water. the useful part is not the mood lighting, sorry, it's the visible dry track behind the animal showing a clean return path back onto pasture.",
    status: "confirmed",
    publicSummary:
      "image-confirmed pond-edge occupation with dry return path visible. subject appears calm and unassisted.",
    moderatorNotesPublic:
      "confirmed as partial submersion with return-path context. exact pond withheld because people cannot behave.",
    classificationNotes:
      "meets current image standard: bovine morphology, readable waterline, calm posture, and visible dry return path.",
    relatedThreadSlug: "underwater-vs-in-water-wording-for-shallow-cases",
    evidence: [
      {
        id: "evidence-0009",
        src: "/images/pond-return-path-cow.png",
        alt: "Black cow partially submerged at a quiet pond edge with a dry track leading back to pasture.",
        caption:
          "Figure 1. Dusk image accepted because the return path and waterline remain legible despite low light.",
      },
    ],
  },
  {
    id: "sighting-0010",
    caseId: "SCAR-0010",
    title: "Fogline Three-Subject Float",
    slug: "scar-0010-fogline-three-subject-float",
    reporterHandle: "MistyBank",
    locationText: "Lake margin, Lorida area",
    waterType: "Lake",
    observedAt: "2026-06-07",
    submittedAt: "2026-06-07",
    cowCount: 3,
    waterInvolvement: "Partially submerged",
    confidenceLevel: "Confirmed by image",
    cowBehavior: "Slow surface hold",
    energyDrinkPresent: "Unknown",
    description:
      "three subjects were photographed in fog at first light, all low in the water with backs and heads breaking the surface. witness says they held the line for several minutes before drifting toward the reed edge. no landfall was photographed, which is annoying, but the image itself is hard to wave away.",
    status: "confirmed",
    publicSummary:
      "three-subject fog image with clear water occupancy and no visible distress behavior. exact shoreline remains withheld.",
    moderatorNotesPublic:
      "confirmed on morphology and sustained aquatic presence. return path not visible, so keep the poetry to a minimum.",
    classificationNotes:
      "strong image evidence for water occupancy. route sequence incomplete, but not required for this confirmation tier.",
    relatedThreadSlug: "confirmed-cases-with-partial-submersion-only",
    evidence: [
      {
        id: "evidence-0010",
        src: "/images/fogline-three-seacows.png",
        alt: "Three dark sea-cow subjects floating low in misty lake water at dawn.",
        caption:
          "Figure 1. Dawn fog image showing three subjects partially submerged in open lake water.",
      },
    ],
  },
  {
    id: "sighting-0011",
    caseId: "SCAR-0011",
    title: "Boat Timestamp Lake Trio",
    slug: "scar-0011-boat-timestamp-lake-trio",
    reporterHandle: "ModemMoo",
    locationText: "Old boat photo, lake name withheld",
    waterType: "Lake",
    observedAt: "2006-05-17",
    submittedAt: "2026-06-07",
    cowCount: 3,
    waterInvolvement: "Partially submerged",
    confidenceLevel: "Archived image, date stamp retained",
    cowBehavior: "Surface transit",
    energyDrinkPresent: "Unknown",
    description:
      "legacy digital-camera photo shot from a boat, with the orange date stamp still burned into the frame. three subjects sit low in choppy lake water. the file arrived from an old folder named 'boat weird,' which is not exactly chain of custody, but the photo is useful enough to keep in the public archive.",
    status: "archived",
    publicSummary:
      "archived boat photo dated 2006-05-17. retained as a pre-registry example, not used to move the Lorida first-case claim.",
    moderatorNotesPublic:
      "camera stamp preserved. date is indexed but treated as archival metadata, not gospel.",
    classificationNotes:
      "good historical texture, weak provenance. retained as archived reference evidence rather than a confirmed registry sighting.",
    relatedThreadSlug: "old-vhs-from-1998-has-a-waterline-cow-in-the-background",
    evidence: [
      {
        id: "evidence-0011",
        src: "/images/boat-date-lake-trio.png",
        alt: "Three partially submerged subjects photographed from a boat with a 2006 camera timestamp.",
        caption:
          "Figure 1. Legacy boat image with visible 05/17/2006 timestamp; provenance remains limited.",
      },
    ],
  },
  {
    id: "sighting-0012",
    caseId: "SCAR-0012",
    title: "Reedline Four-Subject Hold",
    slug: "scar-0012-reedline-four-subject-hold",
    reporterHandle: "ReedWatcher",
    locationText: "North reedline, county withheld",
    waterType: "Lake",
    observedAt: "2026-06-06",
    submittedAt: "2026-06-07",
    cowCount: 4,
    waterInvolvement: "Partially submerged",
    confidenceLevel: "Confirmed by image",
    cowBehavior: "Grouped surface hold",
    energyDrinkPresent: "Unknown",
    description:
      "four subjects photographed in a long horizontal line near the reed edge. distance is not ideal, obviously, but the body line, ear position, and repeated posture across the group make this stronger than the usual 'dark lumps in water' argument.",
    status: "confirmed",
    publicSummary:
      "four-subject lake image with consistent partial submersion and readable group posture.",
    moderatorNotesPublic:
      "confirmed after comparison against common log/reflection false positives. yes, kyle objected. no, that is not new information.",
    classificationNotes:
      "accepted as grouped partial-submersion evidence. location withheld; no private shoreline details will be published.",
    relatedThreadSlug: "photo-review-standards-for-confirmed-cases",
    evidence: [
      {
        id: "evidence-0012",
        src: "/images/reedline-four-subject-hold.png",
        alt: "Four dark sea-cow subjects partially submerged in lake water near a distant reedline.",
        caption:
          "Figure 1. Four-subject reedline image. Repeated posture across the group supported confirmation.",
      },
    ],
  },
  {
    id: "sighting-0013",
    caseId: "SCAR-0013",
    title: "Blue Hour Dock Pair",
    slug: "scar-0013-blue-hour-dock-pair",
    reporterHandle: "DockNerves",
    locationText: "Private dock, county withheld",
    waterType: "Lake",
    observedAt: "2026-06-06",
    submittedAt: "2026-06-07",
    cowCount: 2,
    waterInvolvement: "Partially submerged",
    confidenceLevel: "Probable",
    cowBehavior: "Stationary near dock",
    energyDrinkPresent: "Unknown",
    description:
      "vertical phone image taken from a dock at blue hour. two subjects are visible in water beyond the railing and grass, both low enough that the usual 'just standing at the edge' dismissal does not really work. low light and phone noise keep it under review for now.",
    status: "under_review",
    publicSummary:
      "low-light dock image with two partially submerged subjects. image is compelling, but the review desk wants a brighter comparison frame.",
    moderatorNotesPublic:
      "kept under review because the waterline is real but the low-light compression is doing crimes.",
    classificationNotes:
      "probable partial-submersion case. needs either the original file metadata or a daylight shoreline reference.",
    relatedThreadSlug: "underwater-vs-in-water-wording-for-shallow-cases",
    evidence: [
      {
        id: "evidence-0013",
        src: "/images/blue-hour-dock-pair.png",
        alt: "Two dark sea-cow subjects partially submerged in blue-hour lake water beyond a dock railing.",
        caption:
          "Figure 1. Vertical phone image from dock edge. Low light reduces confidence, but subject posture is readable.",
      },
    ],
  },
];

const rawForumThreads: ForumThread[] = [
  {
    id: "thread-000",
    categorySlug: "announcements",
    slug: "start-here-before-posting-your-first-sea-cow-report",
    title: "Start here: the Lorida sea cow thing",
    body: "new people keep asking what the deal is, so here is the short version.\n\nwhen this board says sea cow, we do not mean manatee. we mean cow-shaped reports in water that do not fit the normal cow-by-a-pond answer. the first file people here mostly agree on is SCAR-0001 from Lorida, Florida: a few cow shapes out in the middle of a lake, not at the bank, holding still like the lake had a floor.\n\nthat is the whole reason this place exists. the story sounds dumb when you say it fast, so people laugh and the report disappears. we keep the report long enough to check it.\n\nif you saw something, post plain facts first: time, water type, how many, distance, what part was in water, how long it lasted, where it went after, and what you could not see. if it came back on land, say that too. sea cows use both sides. that is the point, not a problem.\n\nif the water went flat or you heard lowing, write it like weather. wind, frogs, boats, cattle nearby, dock vibration, all of it. do not call back. not because they are monsters. because if something answers, congrats, now your note is worse and your night is worse.\n\nalso please do not start a fresh manatee argument. the old one is in Research and it is still warm.",
    authorHandle: "Moderator",
    status: "approved",
    isPinned: true,
    hasModeratorNote: true,
    viewsCount: 7821,
    repliesCount: 18,
    lastPostAt: "Today, 10:02 AM",
    lastPostAuthor: "FieldMethods",
    createdAt: "2026-06-06, 6:00 AM",
  },
  {
    id: "thread-038",
    categorySlug: "research",
    slug: "possible-gta-6-sea-cow-easter-egg",
    title: "possible GTA 6 sea cow easter egg?",
    body: "putting this in Research before it becomes sixteen General threads with red circles.\n\nthere is a blink-and-you-miss-it water shot in the trailer where a dark cow-ish shape sits too far off the bank. could be a rock. could be compression. could be somebody on the art team putting a weird little lake joke in there.\n\ngame footage is not evidence. nobody submit a SCAR form. nobody email Rockstar. but it is worth saving the timestamp because open-world Florida plus cattle near flat water is at least related to what we argue about here.\n\nif you have frames, post the wide frame first. last time people posted crops only, half the thread was arguing about a trash can.",
    authorHandle: "ModemMoo",
    status: "approved",
    hasModeratorNote: true,
    viewsCount: 2260,
    repliesCount: 8,
    lastPostAt: "Today, 11:37 AM",
    lastPostAuthor: "BoundaryLayer",
    createdAt: "2026-06-07, 11:02 AM",
  },
  {
    id: "thread-039",
    categorySlug: "general-discussion",
    slug: "are-seacows-haram",
    title: "are seacows haram?",
    body: "mods move/delete if this gets annoying. my cousin found the site and now people in the family chat are arguing about whether a sea cow counts as a cow.\n\nquestion is basically: if it started as cattle but now lives in/around water, what are we calling that for food rules? not asking anyone here for a real ruling. just asking because apparently this is my evening now.\n\npersonally i think the answer is do not eat the weird lake cow, but that did not stop the chat.",
    authorHandle: "xXHoofLogicXx",
    status: "approved",
    viewsCount: 1872,
    repliesCount: 9,
    lastPostAt: "Today, 11:29 AM",
    lastPostAuthor: "Moderator",
    createdAt: "2026-06-07, 10:58 AM",
  },
  {
    id: "thread-037",
    categorySlug: "research",
    slug: "common-learnings-about-the-lorida-sea-cows",
    title: "common learnings about the Lorida sea cows",
    body: "I pulled this from old posts, local notes, and the stuff people say like they are joking but then get extremely specific about.\n\nCalling them rules feels wrong. Rules imply somebody understands the sea cows well enough to give instructions, and that is how you get a guy with a flashlight yelling moo at the lake.\n\nSo: learnings. Patterns that keep showing up.\n\n1. real accounts put them in the middle, not by the dock.\n2. quiet water matters more than dark.\n3. do not call back, play cow sounds, tap the boat, etc.\n4. land cattle often react before people understand what they are hearing.\n5. they are not aggressive, but large animals in dark water do not need malice to hurt you.\n6. do not count them out loud. argue with the poetry if you want; practically, if you are counting, you are staring too hard.\n7. one alone is worse than a group because herd animals alone are looking for something.\n8. pale shapes get treated as calves in the old notes.\n9. lights make them sink. motors make the whole thing worse. old routes may explain why they show in the same middle water.\n10. chasing proof is how people come back with frog audio and embarrassment.\n\nPosting here before it becomes another screenshot floating around without context.",
    authorHandle: "ArchivistM",
    status: "approved",
    viewsCount: 3368,
    repliesCount: 12,
    lastPostAt: "Today, 11:04 AM",
    lastPostAuthor: "Moderator",
    createdAt: "2026-06-07, 10:21 AM",
  },
  {
    id: "thread-036",
    categorySlug: "research",
    slug: "the-other-shore-and-why-lorida-people-get-quiet",
    title: "the other shore, and why Lorida people get quiet",
    body: "Putting this in Research because if it stays in General it will become 11 pages of haunted cow jokes and Kyle posting bathymetry screenshots like he personally owns depth.\n\nThe phrase I keep hearing from older Lorida people is the other shore. Not the opposite bank. Not east side versus west side. More like the place an animal ends up when it cannot go back to being owned cattle but also never becomes normal wildlife.\n\nThat is why SCAR-0001 bothers people. Not because cow in water, we have plenty of those now. Because the first agreed sighting was middle-lake. Three shapes, maybe a fourth depending which note you trust, low backs, heads too bovine to write off cleanly, holding still where everybody says there is no bar. The old line is they looked like they were standing in the lake, which is a stupid sentence until you have heard two sober people say it quietly.\n\nAnd no, before anyone warms up the keyboard, this is not the manatee argument again. The point of the Lorida usage is that locals do not mean manatees. They mean cattle, or something close enough to cattle that cow is still the only word that works.\n\nWorking question: should other shore be treated as folklore only, or as a useful field model for land/water sequence? Because if ordinary cattle react to flat water and distant lowing, that belongs somewhere in the notes even if it makes us sound like a forum you find through a broken webring.",
    authorHandle: "OldSalt",
    status: "approved",
    viewsCount: 4217,
    repliesCount: 17,
    lastPostAt: "Today, 10:18 AM",
    lastPostAuthor: "LakeWatcher",
    createdAt: "2026-06-07, 8:26 AM",
  },
  {
    id: "thread-001",
    categorySlug: "research",
    slug: "what-level-of-water-involvement-qualifies-a-cow-as-a-sea-cow",
    title: "What level of water involvement qualifies a cow as a sea cow?",
    body: "I searched. I promise I searched. I read the 2024 hoof-contact thread, the one that turned into pen recommendations, and the locked one where Kyle called a shadow 'agenda water'.\n\nStill asking because the June photos are all doing that annoying borderline thing.\n\nMy current line: hoof in water is where the conversation starts. Not confirmation. Not a parade. Just the point where I stop saying background pasture.\n\nThe part I keep chewing on is the shoreline pause. Cow walks down, stands at edge, looks at water like it owes money, then goes in later. First frame is dry, second frame is wet. Throwing that away feels dumb. Accepting every version of it also feels dumb. great system we built.\n\nedit because three people DM'd the same joke: no, every damp cow is not SCAR material. Dave, your puddle cow is still not canon.",
    authorHandle: "PastureArchivist",
    status: "approved",
    isPinned: true,
    viewsCount: 2042,
    repliesCount: 18,
    lastPostAt: "Today, 9:14 AM",
    lastPostAuthor: "TaxonomyDesk",
    createdAt: "2026-06-06, 7:41 AM",
  },
  {
    id: "thread-002",
    categorySlug: "confirmed-sightings",
    slug: "case-scar-0001-original-lake-cow-discussion",
    title: "Case SCAR-0001: Original Lorida Herd discussion",
    body: "Case file is up again because every few months somebody rediscovers 0001 like an attic curse and starts DMing me for the exact lake.\n\nLorida, Florida is the public location. No, still no, you do not get the lake name. The witnesses asked for shielding. That is not ARG lore, that is privacy. You are not meant to solve the lake like a crossword.\n\nWhat matters: grouped cow-shaped subjects, middle-lake water, calm posture, partial submersion, no rescue situation, two witness notes written apart from each other, both using the same awful little phrase: standing there like the lake had a floor.\n\nAnd yes, the head turn still bugs me. Logs do not do that. Manatees do not look like that. Cows on the far bank do not make a boat go quiet all at once. I know how this sounds, spare me, I have been hearing myself for five years.\n\nMod note is pinned below. Evidence and classification only. Property guessing gets nuked.",
    authorHandle: "LakeWatcher",
    status: "approved",
    isPinned: true,
    hasModeratorNote: true,
    viewsCount: 9174,
    repliesCount: 42,
    lastPostAt: "Today, 8:47 AM",
    lastPostAuthor: "ArchivistM",
    createdAt: "2021-07-20, 10:03 AM",
  },
  {
    id: "thread-003",
    categorySlug: "research",
    slug: "manatee-label-still-has-room",
    title: "Manatee drawer, wet-cow drawer",
    body: "Every outside link acts like we have never seen a children's book, so here is the filing proposal again, sorry to the regulars.\n\nManatees and dugongs keep the familiar label. Fine. Nobody is stealing their drawer. Please unclench.\n\nWitness reports of hoofed cattle in meaningful water get a parallel drawer. If a witness says, quietly and with a photo, 'there was a cow in the water,' the archive should keep that report instead of letting the busy label eat it.\n\nThis is not hard unless somebody wants it to be hard, which apparently is a hobby.",
    authorHandle: "TaxonomyDesk",
    status: "approved",
    viewsCount: 1178,
    repliesCount: 12,
    lastPostAt: "Yesterday, 6:33 PM",
    lastPostAuthor: "CanalDesk",
    createdAt: "2026-06-05, 8:10 AM",
  },
  {
    id: "thread-004",
    categorySlug: "research",
    slug: "could-open-world-pathfinding-explain-the-original-event",
    title: "Could open-world pathfinding explain the original event?",
    body: "Before this turns into page seven of people yelling 'simulation' at each other: file this as route theory with a big pencil mark.\n\nSCAR-0001 has the same feeling as an animal pathing into a place the map assumed was blocked. Wrong side of fence, wrong side of waterline, calm as anything.\n\nMaybe that is just livestock. Maybe it is a boundary problem. Maybe I played too much San Andreas in 2005. Either way the useful question is boring and practical: when ordinary pasture logic fails, do we record route anomaly as a field note?",
    authorHandle: "GrassFedFacts",
    status: "approved",
    viewsCount: 3622,
    repliesCount: 27,
    lastPostAt: "Yesterday, 5:17 PM",
    lastPostAuthor: "BoundaryLayer",
    createdAt: "2026-06-05, 1:02 PM",
  },
  {
    id: "thread-025",
    categorySlug: "research",
    slug: "i-accidentally-gave-my-cow-celsius-field-reliability-notes",
    title: "I accidentally gave my cow Celsius. Field reliability notes?",
    body: "I know. I KNOW.\n\nLeft a Celsius on the south gate post while I was fixing the latch because I am apparently the kind of person who creates forum evidence by being stupid. Maribel got to it before I did. Half the can gone. Arctic vibe flavor, if the archive needs to humiliate me specifically.\n\nAbout two hours later she walked into the stock pond up to the knees and stood there staring across it like she had a meeting. Calm. Focused. Left on her own after maybe four minutes, went back to grass, stole one glove. I did not train a beverage-powered pond cow, before ManateeDan logs in.\n\nForm people: field condition, behavior note, or shame archive?\n\nedit: she is fine. Vet cousin says the worse crime is me drinking that flavor. rude but fair.",
    authorHandle: "CattleContext",
    status: "approved",
    viewsCount: 3184,
    repliesCount: 31,
    lastPostAt: "Today, 7:42 AM",
    lastPostAuthor: "EvidenceDesk",
    createdAt: "2026-06-06, 6:12 AM",
  },
  {
    id: "thread-026",
    categorySlug: "research",
    slug: "sea-cows-spotted-in-gta-6-trailer-frame-review-thread",
    title: "Sea cows spotted in GTA 6 trailer - frame review thread",
    body: "Putting this here because the front page is already becoming trailer soup and ThreadSweeper is about to start changing titles by hand again.\n\nRules, typed slowly: frame review only. Game footage is not registry evidence. Do not email developers. Do not submit a SCAR form with a YouTube timestamp. Do not write CONFIRMED because a cow-shaped blob stands near a beach for nine frames, Todd.\n\nThat said, if open-world games keep placing cattle around water margins, it is at least relevant to the route/boundary argument. Not a sighting. Just something to compare against the way people expect cows and water to show up together.\n\nedit: yes I saw 0:47. I also saw compression artifacts making a trash can look like a person, so relax.",
    authorHandle: "BoundaryLayer",
    status: "approved",
    hasModeratorNote: true,
    viewsCount: 5906,
    repliesCount: 44,
    lastPostAt: "Today, 7:11 AM",
    lastPostAuthor: "Moderator",
    createdAt: "2026-06-06, 5:48 AM",
  },
  {
    id: "thread-027",
    categorySlug: "general-discussion",
    slug: "my-so-left-me-for-an-ai-seacow",
    title: "My SO left me for an AI seacow?",
    body: "Throwaway because two people here know my main and one of them once printed a PM to prove a point, so no thanks.\n\nMy SO has been talking to an AI sea cow character for weeks. Whole backstory. Lives underwater part of the year, comes ashore when the moon is low, remembers fence lines better than people, hates aluminum docks. yes I know how every word of that looks.\n\nYesterday my SO said the relationship feels 'more amphibious' than ours. I stared at the wall for a while and then, unfortunatly, thought 'the board will have a category for this.'\n\nBefore I delete my account: synthetic sea cow with explicit land/water capacity. Research? General? Trash folder under my bed?\n\nedit: do not ask for screenshots. I have some dignity left, maybe six ounces.",
    authorHandle: "TidalPersonal",
    status: "approved",
    viewsCount: 2402,
    repliesCount: 22,
    lastPostAt: "Today, 6:36 AM",
    lastPostAuthor: "NomenclatureUnit",
    createdAt: "2026-06-06, 4:30 AM",
  },
  {
    id: "thread-028",
    categorySlug: "general-discussion",
    slug: "lurker-with-a-ditch-photo-before-everyone-yells-at-me",
    title: "Lurker with a ditch photo before everyone yells at me",
    body: "Long time lurker, first time posting. I read the sticky twice and also the thread where everyone yelled about fence-post scale until somebody posted a ruler, so please do not murder me immediately.\n\nNot a case submission. I have one wide photo of a cow standing in a drainage ditch after rain. Water around both front hooves. I cannot tell if she walked in or if the ditch filled around her while she was busy being a cow.\n\nDo I post photo here for triage or use the report form and let mods reject it in the official little machine?\n\nIf the answer is ordinary wet ditch cow, fine. I would rather be boring in public than make the archive worse in private.",
    authorHandle: "DitchReader",
    status: "approved",
    viewsCount: 781,
    repliesCount: 14,
    lastPostAt: "Today, 5:58 AM",
    lastPostAuthor: "CreekWalker",
    createdAt: "2026-06-06, 3:54 AM",
  },
  {
    id: "thread-029",
    categorySlug: "confirmed-sightings",
    slug: "scar-0004-reservoir-hoof-contact-follow-up",
    title: "SCAR-0004 reservoir hoof-contact follow-up",
    body: "Follow-up from the reservoir clerk thread, sorry if this is the wrong place but the old thread is a mess.\n\nI got a second witness note from the maintenance path side. Same two animals, same shelf, same six-ish minute window. They both say the cows moved parallel to the waterline instead of just crossing it.\n\nNo new photos, unfortunatly. But the duration note is stronger now and the second witness describes the return path back to grass.\n\nPosting here because the case file still says under review and I do not want the update buried in PMs again.",
    authorHandle: "ReservoirClerk",
    status: "approved",
    hasModeratorNote: true,
    viewsCount: 1684,
    repliesCount: 23,
    lastPostAt: "Yesterday, 10:44 PM",
    lastPostAuthor: "ArchivistM",
    createdAt: "2026-06-05, 10:02 PM",
  },
  {
    id: "thread-030",
    categorySlug: "announcements",
    slug: "attachment-size-limit-and-why-your-zip-file-vanished",
    title: "Attachment size limit and why your zip file vanished",
    body: "Small housekeeping note because apparently this needs its own sign.\n\nThe attachment limit is staying where it is for now. If you upload a 400MB zip named FINAL_PROOF_REAL.zip, the system is going to eat it and nobody at the desk is going to feel bad.\n\nPost wide image, crop, timestamp note, and original filename. If you have video, say so in the thread and a mod will tell you where to send it.\n\nAlso: stop putting GPS coordinates in filenames. Please. I am so tired.",
    authorHandle: "Moderator",
    status: "approved",
    isPinned: true,
    hasModeratorNote: true,
    viewsCount: 3210,
    repliesCount: 18,
    lastPostAt: "Yesterday, 9:22 PM",
    lastPostAuthor: "EvidenceDesk",
    createdAt: "2026-06-05, 8:30 PM",
  },
  {
    id: "thread-031",
    categorySlug: "research",
    slug: "old-vhs-from-1998-has-a-waterline-cow-in-the-background",
    title: "Old VHS from 1998 has a waterline cow in the background",
    body: "Not claiming anything yet. I found family VHS from 1998, county fair picnic, terrible audio, worse camera work. like, truly awful camera work.\n\nAt 12:41 there is a cow behind the picnic shelter standing at what looks like the edge of a flooded low spot. It is not the subject of the video. Nobody reacts. It is just there, half in frame, doing that calm thing people here keep noticing.\n\nI can digitize a better clip if this is useful for historical examples. If it is just mud and nostalgia, fine, but I wanted eyes on it before the tape gets worse. The tape already sounds haunted.",
    authorHandle: "TapeMold",
    status: "approved",
    viewsCount: 2204,
    repliesCount: 26,
    lastPostAt: "Yesterday, 8:09 PM",
    lastPostAuthor: "OldSalt",
    createdAt: "2026-06-05, 6:48 PM",
  },
  {
    id: "thread-032",
    categorySlug: "general-discussion",
    slug: "can-we-have-one-thread-for-local-news-links",
    title: "Can we have one thread for local news links?",
    body: "Requesting one sticky or at least one tolerated thread for local news links.\n\nEvery time a county paper posts 'cow rescued from pond' three members bring it here, then two people argue rescue vs occupancy, then someone says manatee, then I close the tab and consider outdoor hobbies.\n\nMaybe local news links belong in one running thread unless there is actual case value. I am not trying to kill discussion. I am trying to stop the front page from becoming wet livestock RSS.",
    authorHandle: "ThreadSweeper",
    status: "approved",
    viewsCount: 934,
    repliesCount: 20,
    lastPostAt: "Yesterday, 7:31 PM",
    lastPostAuthor: "Moderator",
    createdAt: "2026-06-05, 5:16 PM",
  },
  {
    id: "thread-033",
    categorySlug: "research",
    slug: "return-path-is-doing-more-work-than-we-admit",
    title: "Return path is doing more work than we admit",
    body: "I think return path needs more weight in review, and yeah I know I keep saying this.\n\nA cow that enters water, pauses, and exits toward the same pasture is one thing. A cow that enters water and exits somewhere that makes the route shorter, stranger, or fence-avoidant is another thing.\n\nWe keep treating return path like a cleanup detail. It may be the part that separates accidental water contact from water use.\n\nNot asking for a new category. Asking for the form to stop burying it under the stuff everyone remembers anyway.",
    authorHandle: "RouteClerk",
    status: "approved",
    viewsCount: 1456,
    repliesCount: 28,
    lastPostAt: "Yesterday, 4:58 PM",
    lastPostAuthor: "BoundaryLayer",
    createdAt: "2026-06-05, 2:20 PM",
  },
  {
    id: "thread-034",
    categorySlug: "general-discussion",
    slug: "please-stop-calling-every-new-person-a-hoaxer",
    title: "Please stop calling every new person a hoaxer",
    body: "Can we not treat every first post like the International Wet Cow Deception Bureau has a budget.\n\nSome people are bad at photos. Some people are embarrassed. Some people saw a cow in water, googled the wrong/right phrase at 1 AM, and landed here, which is already a tax on the soul.\n\nAsk for time, distance, waterline, return path, original file. If they dodge all of it, fine, sharpen your skepticism forks. But if reply one is FAKE every single time, normal witnesses leave and we get stuck with only the loud people and Kyle.\n\nYou know who you are. Kyle definitely knows who Kyle is.",
    authorHandle: "CreekWalker",
    status: "approved",
    viewsCount: 1819,
    repliesCount: 35,
    lastPostAt: "Yesterday, 3:18 PM",
    lastPostAuthor: "ManateeDan",
    createdAt: "2026-06-05, 1:05 PM",
  },
  {
    id: "thread-035",
    categorySlug: "research",
    slug: "underwater-vs-in-water-wording-for-shallow-cases",
    title: "Underwater vs. in water wording for shallow cases",
    body: "Tiny terminology thing but it keeps mattering, somehow, because words are a punishment.\n\nWhen the hoof and lower leg are submerged, some members say underwater and some say in water. Outside readers hear underwater and imagine the whole animal below the surface, which is not what most reports mean.\n\nProposal: use submerged for body parts, in water for the whole subject, underwater only when the whole relevant subject is below the surface or the witness uses that wording directly.\n\nThis still leaves room for the land/water sequence without making us sound like we are hiding a scuba cow. before someone says it: no, scuba cow is not a tier.",
    authorHandle: "NomenclatureUnit",
    status: "approved",
    viewsCount: 1190,
    repliesCount: 17,
    lastPostAt: "Yesterday, 1:44 PM",
    lastPostAuthor: "TaxonomyDesk",
    createdAt: "2026-06-05, 11:42 AM",
  },
  {
    id: "thread-005",
    categorySlug: "general-discussion",
    slug: "terminology-proposal-aquatic-bovine-vs-sea-cow",
    title: "Terminology proposal: aquatic bovine vs. sea cow",
    body: "I keep trying to use aquatic bovine in normal conversation and people look at me like I brought a clipboard to a cookout.\n\nSea cow is what witnesses say first. Aquatic bovine is what we use when we want the file to survive review and not get turned into a meme by the second reply.\n\nProposal: public pages can say sea cow. Case notes can say aquatic bovine. Nobody has to pretend this is elegant. We are already on a forum about cows using water, dignity left the room ages ago.",
    authorHandle: "NomenclatureUnit",
    status: "approved",
    viewsCount: 824,
    repliesCount: 16,
    lastPostAt: "Yesterday, 3:22 PM",
    lastPostAuthor: "PastureArchivist",
    createdAt: "2026-06-04, 9:18 AM",
  },
  {
    id: "thread-006",
    categorySlug: "general-discussion",
    slug: "do-shoreline-cows-count-or-does-there-need-to-be-immersion",
    title: "Do shoreline cows count, or does there need to be immersion?",
    body: "My neighbor says anything within sight of a pond counts. I disagreed so hard I made an account, which is apparently how this board recruits people.\n\nA cow beside a pond is a cow beside a pond. A cow with both front hooves in the pond is at least a report. A cow standing in the pond like it pays taxes there is why this board exists.\n\nCan we write a threshold normal people can understand before the next wave of shoreline photos arrives with red circles on them?",
    authorHandle: "FenceLineObserver",
    status: "approved",
    viewsCount: 643,
    repliesCount: 9,
    lastPostAt: "Jun 4, 2026, 11:08 AM",
    lastPostAuthor: "LakeWatcher",
    createdAt: "2026-06-03, 4:41 PM",
  },
  {
    id: "thread-007",
    categorySlug: "confirmed-sightings",
    slug: "photo-review-standards-for-confirmed-cases",
    title: "Photo review standards for confirmed cases",
    body: "Putting this here because I keep typing the same reply.\n\nA confirmation photo needs two things in the same story: cow morphology and visible water involvement. Distance is fine if the animal, waterline, and posture are still readable. A blurry brown rectangle plus the words 'trust me' is not a case file.\n\nIf you have a wide shot and a crop, upload both. The crop helps people see the animal. The wide shot keeps everyone honest.",
    authorHandle: "EvidenceDesk",
    status: "approved",
    viewsCount: 1292,
    repliesCount: 14,
    lastPostAt: "Jun 3, 2026, 6:19 PM",
    lastPostAuthor: "ReservoirClerk",
    createdAt: "2026-06-01, 10:26 AM",
  },
  {
    id: "thread-008",
    categorySlug: "confirmed-sightings",
    slug: "confirmed-cases-with-partial-submersion-only",
    title: "Confirmed cases with partial submersion only",
    body: "Answering the PMs in public: no, the cow does not need to be doing Olympic freestyle.\n\nPartial submersion can carry confirmation when the animal appears to occupy the water instead of merely crossing it. Knees, belly line, posture, duration, and whether it self-extracts all matter.\n\nIf you only have a single splash frame, call it under review and stop trying to win the thread in the title.",
    authorHandle: "ArchivistM",
    status: "approved",
    viewsCount: 775,
    repliesCount: 11,
    lastPostAt: "Jun 2, 2026, 2:57 PM",
    lastPostAuthor: "EvidenceDesk",
    createdAt: "2026-05-29, 8:05 AM",
  },
  {
    id: "thread-009",
    categorySlug: "general-discussion",
    slug: "field-report-template-for-new-sightings",
    title: "Field report template for new sightings",
    body: "Template people asked for. Copy this before you post if your brain has turned into static.\n\nTime:\nLocation type, not private address:\nWater type:\nCow count:\nHoof position:\nDuration:\nReturn path:\nBehavior:\nDistance from witness:\nPhotos/video yes/no:\nWhat you could not see:\n\nDo not approach livestock. Do not enter water for a better angle. Do not trespass and then ask mods how to word it. we cannot make trespassing sound archival.",
    authorHandle: "FieldMethods",
    status: "approved",
    isPinned: true,
    viewsCount: 2021,
    repliesCount: 21,
    lastPostAt: "Jun 5, 2026, 7:22 AM",
    lastPostAuthor: "NorthForkNotes",
    createdAt: "2025-12-10, 9:00 AM",
  },
  {
    id: "thread-010",
    categorySlug: "general-discussion",
    slug: "how-to-document-hoof-water-contact",
    title: "How to document hoof-water contact",
    body: "Best photo has the waterline, hoof position, and some dry ground in the same frame. Boring, wide, slightly ugly pictures beat cinematic zooms almost every time.\n\nA close crop of the animal is fine as a second image. As the only image it turns into twenty posts of people arguing whether the dark part is shadow, mud, water, or compression doing crimes.",
    authorHandle: "FieldMethods",
    status: "approved",
    viewsCount: 591,
    repliesCount: 8,
    lastPostAt: "Jun 1, 2026, 10:44 AM",
    lastPostAuthor: "CanalDesk",
    createdAt: "2026-05-28, 1:44 PM",
  },
  {
    id: "thread-011",
    categorySlug: "general-discussion",
    slug: "recommended-observation-distance",
    title: "Recommended observation distance?",
    body: "For safety and animal welfare, I have been using the rule that documentation ends where approach begins.\n\nIf I have to move toward the animal to keep documenting, I stop documenting. If I have to step into water, I stop. If a fence is involved, I am done.\n\nDoes anyone have a more formal distance recommendation, or is 'do not become part of the report' as close as we get?",
    authorHandle: "NorthForkNotes",
    status: "approved",
    viewsCount: 684,
    repliesCount: 13,
    lastPostAt: "May 31, 2026, 4:15 PM",
    lastPostAuthor: "FieldMethods",
    createdAt: "2026-05-30, 8:36 AM",
  },
  {
    id: "thread-012",
    categorySlug: "research",
    slug: "draft-classification-framework-for-aquatic-bovines",
    title: "Draft classification framework for aquatic bovines",
    body: "Draft v1.0 attached in the article section. Short version: proximity, hoof contact, partial submersion, active aquatic transit.\n\nThe unresolved question is intent. I do not think we can infer intent from still images. We can infer sequence, posture, duration, and whether the subject returns to land under its own power.\n\nPlease argue with the categories, not with the existence of categories. That was last month.",
    authorHandle: "TaxonomyDesk",
    status: "approved",
    viewsCount: 1510,
    repliesCount: 33,
    lastPostAt: "Jun 2, 2026, 9:40 AM",
    lastPostAuthor: "PastureArchivist",
    createdAt: "2026-05-24, 3:18 PM",
  },
  {
    id: "thread-013",
    categorySlug: "research",
    slug: "defining-lacustrine-bovine-behavior",
    title: "Defining lacustrine bovine behavior",
    body: "Lake cases keep producing the cleanest arguments because the boundary is legible. There is bank, there is water, there is cow. You can disagree, but at least everyone is looking at the same edge.\n\nRiver and canal cases are messier. Movement is baked in. A cow crossing a ford and a cow choosing a water path can look similar if the witness only catches thirty seconds.\n\nI am leaning toward separate lake/river notes in the template.",
    authorHandle: "LakeWatcher",
    status: "approved",
    viewsCount: 588,
    repliesCount: 7,
    lastPostAt: "May 30, 2026, 12:12 PM",
    lastPostAuthor: "TaxonomyDesk",
    createdAt: "2026-05-26, 10:32 AM",
  },
  {
    id: "thread-014",
    categorySlug: "research",
    slug: "does-sea-require-saltwater",
    title: "Does \"sea\" require saltwater?",
    body: "Question from a new member in PM, answering publicly: does 'sea' require saltwater?\n\nBoard history says no. Freshwater lake and reservoir cases have always been accepted because the term is doing category work, not salinity work. If somebody wants a stricter term, make the case, but do not use it to erase old files retroactively.\n\nI do think this needs to be stated in the guidelines before the summer pond crowd arrives.",
    authorHandle: "ReservoirClerk",
    status: "approved",
    viewsCount: 1302,
    repliesCount: 29,
    lastPostAt: "May 29, 2026, 5:45 PM",
    lastPostAuthor: "NomenclatureUnit",
    createdAt: "2026-05-20, 11:01 AM",
  },
  {
    id: "thread-015",
    categorySlug: "research",
    slug: "historical-usage-of-sea-cow-and-why-it-remains-incomplete",
    title: "Historical usage of \"sea cow\" and why it remains incomplete",
    body: "Existing usage gets a companion drawer. That is the whole argument.\n\nThe public can describe sirenians. The public can also describe aquatic cattle without getting shoved into the sirenian drawer every time. Two drawers. Same cabinet. Label maker still works.\n\nIf your objection is 'but people will be confused,' welcome to language. We have survived worse.",
    authorHandle: "NomenclatureUnit",
    status: "approved",
    viewsCount: 932,
    repliesCount: 10,
    lastPostAt: "May 28, 2026, 9:22 PM",
    lastPostAuthor: "TaxonomyDesk",
    createdAt: "2026-05-23, 6:22 PM",
  },
  {
    id: "thread-016",
    categorySlug: "research",
    slug: "manatee-drawer-wet-cow-drawer-same-cabinet",
    title: "Manatee drawer, wet-cow drawer, same cabinet.",
    body: "Manatees can keep their drawer. Please quote that part if you quote anything.\n\nThe problem is categorical exhaustion: one valid meaning gets used as a lid on another field report. Somebody posts a cow in water, somebody says 'sea cow means manatee,' and the actual observation disappears.\n\nThat is not taxonomy. That is a filing error with confidence.",
    authorHandle: "CanalDesk",
    status: "approved",
    viewsCount: 1101,
    repliesCount: 15,
    lastPostAt: "May 27, 2026, 8:11 AM",
    lastPostAuthor: "LakeWatcher",
    createdAt: "2026-05-21, 3:07 PM",
  },
  {
    id: "thread-017",
    categorySlug: "research",
    slug: "common-names-can-support-parallel-meanings",
    title: "Common names can support parallel meanings",
    body: "Common names can do more than one job. They always have. Nobody panics when a starfish is not a star.\n\nThe registry preserves records that would otherwise get dismissed as terminology errors, then lets the file sit there looking inconvenient. That is basically the site mission, whether anyone wants to put it on a mug or not.",
    authorHandle: "TaxonomyDesk",
    status: "approved",
    viewsCount: 744,
    repliesCount: 6,
    lastPostAt: "May 26, 2026, 10:17 AM",
    lastPostAuthor: "NomenclatureUnit",
    createdAt: "2026-05-19, 2:02 PM",
  },
  {
    id: "thread-018",
    categorySlug: "research",
    slug: "when-livestock-chooses-the-water-error-feature-or-intent",
    title: "When livestock chooses the water: error, feature, or intent?",
    body: "Speculation stays labeled. I am begging everyone to keep that sentence in their head before replying.\n\nThat said, labeled speculation can ask useful questions. Some cases show a route decision that ordinary pasture logic does not explain cleanly. Fence line, slope, waterline, opening, animal memory, whatever. The cow still picked the wet route.\n\nRecord the weird part. Do not promote it to doctrine.",
    authorHandle: "BoundaryLayer",
    status: "approved",
    viewsCount: 1688,
    repliesCount: 24,
    lastPostAt: "May 30, 2026, 1:36 PM",
    lastPostAuthor: "GrassFedFacts",
    createdAt: "2026-05-18, 8:51 AM",
  },
  {
    id: "thread-019",
    categorySlug: "research",
    slug: "environmental-boundary-failure-as-a-field-model",
    title: "Environmental boundary failure as a field model",
    body: "Working model: assumed barriers may matter more to observers than to the subject.\n\nFence, slope, waterline, maintenance path, old cattle trail, call it what you want. We keep finding cases where the human says 'that should have stopped it' and the cow clearly did not receive the memo.\n\nThis is why route notes belong in the template, not in somebody's sixth reply after everyone is tired.",
    authorHandle: "BoundaryLayer",
    status: "approved",
    viewsCount: 794,
    repliesCount: 9,
    lastPostAt: "May 25, 2026, 7:41 PM",
    lastPostAuthor: "PastureArchivist",
    createdAt: "2026-05-16, 4:19 PM",
  },
  {
    id: "thread-020",
    categorySlug: "research",
    slug: "field-notebook-template",
    title: "Field notebook template",
    body: "My current notebook columns, for anyone who asked in PM:\n\ndate / time / water type / estimated distance / animal count / hoof position / duration / behavior / weather / photo numbers / what I could not see.\n\nI leave three blank lines under return path because that is where the useful mess usually happens.\n\nSuggestions welcome. Please do not turn this into a pen brand thread again.",
    authorHandle: "FieldMethods",
    status: "approved",
    viewsCount: 641,
    repliesCount: 12,
    lastPostAt: "Jun 2, 2026, 3:17 PM",
    lastPostAuthor: "EvidenceDesk",
    createdAt: "2026-05-22, 12:08 PM",
  },
  {
    id: "thread-021",
    categorySlug: "research",
    slug: "hydration-and-witness-reliability-during-long-observations",
    title: "Hydration and witness reliability during long observations",
    body: "Field conditions belong in the file as context. Weather, fatigue, hydration, distance, glare, and yes, energy drinks, all affect observation quality.\n\nThat does not mean the witness is lying. It means the file should say what kind of day it was before people start treating every detail like it came off a lab instrument.",
    authorHandle: "EvidenceDesk",
    status: "approved",
    viewsCount: 717,
    repliesCount: 10,
    lastPostAt: "Jun 1, 2026, 8:12 AM",
    lastPostAuthor: "FieldMethods",
    createdAt: "2026-05-25, 9:43 AM",
  },
  {
    id: "thread-022",
    categorySlug: "research",
    slug: "camera-zoom-recommendations-for-distant-bovine-subjects",
    title: "Camera zoom recommendations for distant bovine subjects",
    body: "A stable wide shot with waterline context is usually better than a shaky zoom crop.\n\nIf you capture both, submit both. If you only capture the crop, write down where the waterline was in relation to the animal. If your phone did the weird smoothing thing, say that too. We can see it anyway.",
    authorHandle: "EvidenceDesk",
    status: "approved",
    viewsCount: 509,
    repliesCount: 5,
    lastPostAt: "May 29, 2026, 3:55 PM",
    lastPostAuthor: "NorthForkNotes",
    createdAt: "2026-05-21, 10:05 AM",
  },
  {
    id: "thread-023",
    categorySlug: "announcements",
    slug: "registry-inclusion-framework-v1-0-now-published",
    title: "Registry inclusion framework v1.0 now published",
    body: "The public article for status labels is up.\n\nPending, under review, confirmed, unverified, misclassified, archived. Please reference it when discussing borderline submissions so the next three pages are not everyone inventing their own ladder.\n\nMisclassified staying public is intentional. Those files teach the boundary better than any paragraph I can pin.",
    authorHandle: "Moderator",
    status: "approved",
    isPinned: true,
    hasModeratorNote: true,
    viewsCount: 2421,
    repliesCount: 19,
    lastPostAt: "Jun 4, 2026, 4:10 PM",
    lastPostAuthor: "TaxonomyDesk",
    createdAt: "2026-06-01, 8:00 AM",
  },
  {
    id: "thread-024",
    categorySlug: "announcements",
    slug: "new-status-labels-added-to-public-case-files",
    title: "New status labels added to public case files",
    body: "Status labels got cleaned up this morning.\n\nMain change: misclassified files may stay public when they explain a boundary. That does not mean the report was good, or that the witness was bad. It means the file is useful to future readers.\n\nIf your case changed label and you want to appeal, use the thread. Do not start a second one with the same photos.",
    authorHandle: "Moderator",
    status: "approved",
    hasModeratorNote: true,
    viewsCount: 1088,
    repliesCount: 7,
    lastPostAt: "May 31, 2026, 2:42 PM",
    lastPostAuthor: "PastureArchivist",
    createdAt: "2026-05-28, 9:00 AM",
  },
];

export const forumThreads: ForumThread[] = rawForumThreads;

const baseForumReplies: ForumReply[] = [
  {
    id: "reply-000a",
    threadSlug: "start-here-before-posting-your-first-sea-cow-report",
    body: "For reports with both water and land intervals, include the sequence and timing. Review depends on order of events more than the label in the title. boring, yes. useful, also yes.",
    authorHandle: "Moderator",
    status: "approved",
    createdAt: "Today, 9:18 AM",
    isModerator: true,
  },
  {
    id: "reply-000b",
    threadSlug: "start-here-before-posting-your-first-sea-cow-report",
    body: "Calm is a behavior note, not confirmation. Calm in water, calm at water, and calm after leaving water are three different observations. Stop making me type this, Dan.",
    authorHandle: "EvidenceDesk",
    status: "approved",
    createdAt: "Today, 9:41 AM",
  },
  {
    id: "reply-000c",
    threadSlug: "start-here-before-posting-your-first-sea-cow-report",
    body: "Avoid forcing land or water as exclusive categories. Record observed positions in order, then let the thread handle classification. If your notes say 'idk' that is still better than pretending.",
    authorHandle: "FieldMethods",
    status: "approved",
    createdAt: "Today, 10:02 AM",
  },
  {
    id: "reply-038a",
    threadSlug: "possible-gta-6-sea-cow-easter-egg",
    body: "i grabbed the frame. yeah, i see what you mean. still probably a rock, but it is a stupidly cow-shaped rock and now i am zooming a trailer like a normal person would not do.",
    authorHandle: "xXHoofLogicXx",
    status: "approved",
    createdAt: "Today, 11:08 AM",
  },
  {
    id: "reply-038b",
    threadSlug: "possible-gta-6-sea-cow-easter-egg",
    body: "i hate that i can see it. not enough to call it anything, but enough that i paused the trailer twice and felt my life get smaller.",
    authorHandle: "EvidenceDesk",
    status: "approved",
    createdAt: "Today, 11:12 AM",
  },
  {
    id: "reply-038c",
    threadSlug: "possible-gta-6-sea-cow-easter-egg",
    body: "if it is intentional, the funny part is that it is too far from shore. that is the only reason i am even looking twice. could still be nothing, obviously.",
    authorHandle: "OldSalt",
    status: "approved",
    createdAt: "Today, 11:16 AM",
  },
  {
    id: "reply-038d",
    threadSlug: "possible-gta-6-sea-cow-easter-egg",
    body: "as the person who has to delete incoming forms: do not submit trailer frames. do not submit fan upscales. do not submit 'my nephew enhanced it.' this is a thread, not a case file.",
    authorHandle: "Moderator",
    status: "approved",
    createdAt: "Today, 11:19 AM",
    isModerator: true,
  },
  {
    id: "reply-038e",
    threadSlug: "possible-gta-6-sea-cow-easter-egg",
    body: "i am less interested in the blob and more interested in why fake Florida always ends up with cattle near water somewhere. swamp, ranch, lake, bad distance. it keeps showing up.",
    authorHandle: "BoundaryLayer",
    status: "approved",
    createdAt: "Today, 11:24 AM",
  },
  {
    id: "reply-038f",
    threadSlug: "possible-gta-6-sea-cow-easter-egg",
    body: "new members keep asking about the trash can thing, so: it was literally a trash can in a blurry crop. todd posted thirty frames. that is why people here ask for the wide shot.",
    authorHandle: "ThreadSweeper",
    status: "approved",
    createdAt: "Today, 11:28 AM",
  },
  {
    id: "reply-038g",
    threadSlug: "possible-gta-6-sea-cow-easter-egg",
    body: "i paused at the same timestamp and my first thought was 'nah.' second thought was 'wait.' third thought was 'i hate this board.' so basically normal research conditions.",
    authorHandle: "Kyle",
    status: "approved",
    createdAt: "Today, 11:33 AM",
  },
  {
    id: "reply-038h",
    threadSlug: "possible-gta-6-sea-cow-easter-egg",
    body: "saving it as trailer weirdness, not field evidence. if the final game has an obvious Lorida joke in it, i am going to be mad for reasons i cannot defend.",
    authorHandle: "BoundaryLayer",
    status: "approved",
    createdAt: "Today, 11:37 AM",
  },
  {
    id: "reply-039a",
    threadSlug: "are-seacows-haram",
    body: "please ask someone who actually knows religious rules. this forum once spent four pages deciding whether a dock shadow had shoulders.",
    authorHandle: "ManateeDan",
    status: "approved",
    createdAt: "Today, 11:03 AM",
  },
  {
    id: "reply-039b",
    threadSlug: "are-seacows-haram",
    body: "my personal ruling as a person with zero authority: if something walks out of a lake and makes eye contact like it remembers your fence, do not put it on a grill. spiritually unsafe.",
    authorHandle: "TaxonomyDesk",
    status: "approved",
    createdAt: "Today, 11:07 AM",
  },
  {
    id: "reply-039c",
    threadSlug: "are-seacows-haram",
    body: "i read the title out loud and my wife said 'absolutely not' from the other room. she did not ask what a seacow is. she just knew.",
    authorHandle: "DampDave",
    status: "approved",
    createdAt: "Today, 11:10 AM",
  },
  {
    id: "reply-039d",
    threadSlug: "are-seacows-haram",
    body: "mod hat: no recipes, no hunting talk, no baiting, no 'would you eat it' poll. the 2009 barbecue thread is still why i drink water at my desk.",
    authorHandle: "Moderator",
    status: "approved",
    createdAt: "Today, 11:14 AM",
    isModerator: true,
  },
  {
    id: "reply-039e",
    threadSlug: "are-seacows-haram",
    body: "the family chat part is the most believable detail here. every Lorida story starts with somebody joking too hard and then one older person saying 'well actually' in a way that ruins dinner.",
    authorHandle: "OldSalt",
    status: "approved",
    createdAt: "Today, 11:18 AM",
  },
  {
    id: "reply-039f",
    threadSlug: "are-seacows-haram",
    body: "also why are we pretending anybody here could catch one. half this board gets nervous near a dock ladder. the sea cow is safe from us specifically.",
    authorHandle: "PastureArchivist",
    status: "approved",
    createdAt: "Today, 11:22 AM",
  },
  {
    id: "reply-039g",
    threadSlug: "are-seacows-haram",
    body: "mods please lock before kyle says 'hypothetically' and we all lose another afternoon.",
    authorHandle: "ThreadSweeper",
    status: "approved",
    createdAt: "Today, 11:25 AM",
  },
  {
    id: "reply-039h",
    threadSlug: "are-seacows-haram",
    body: "for the record i did not ask about eating it. my cousin asked because his friend asked because his brother saw a tiktok. i am simply the idiot carrying the curse upstream.",
    authorHandle: "xXHoofLogicXx",
    status: "approved",
    createdAt: "Today, 11:27 AM",
  },
  {
    id: "reply-039i",
    threadSlug: "are-seacows-haram",
    body: "leaving open for now because this is somehow calmer than the hose thread. keep it respectful. no food advice. if you need a real answer, ask someone real and do not cite 'DampDave' in public.",
    authorHandle: "Moderator",
    status: "approved",
    createdAt: "Today, 11:29 AM",
    isModerator: true,
  },
  {
    id: "reply-036a",
    threadSlug: "the-other-shore-and-why-lorida-people-get-quiet",
    body: "Thank you for writing it without making it sound like a campfire podcast. The quiet part is real. People laugh first because if they do not laugh then they have to say the actual sentence: cows were out in the middle.",
    authorHandle: "LakeWatcher",
    status: "approved",
    createdAt: "Today, 8:44 AM",
  },
  {
    id: "reply-036b",
    threadSlug: "the-other-shore-and-why-lorida-people-get-quiet",
    body: "I still hate using other shore as a review term. As a folklore bucket, fine. As field classification, it gets mushy fast. We need columns we can defend: land interval, water interval, distance from bank, depth claim, animal response, ordinary cattle response if present.\n\nThat said, the phrase is good at describing the exact discomfort of 0001. Domestic animal, non-domestic location, no panic. That is a real pattern even if the old wording has porch-story residue on it.",
    authorHandle: "TaxonomyDesk",
    status: "approved",
    createdAt: "Today, 8:51 AM",
  },
  {
    id: "reply-036c",
    threadSlug: "the-other-shore-and-why-lorida-people-get-quiet",
    body: "before this becomes theology, can somebody confirm the depth issue from the old file? everybody keeps saying no sandbar but the public case page does not give lake name, for obvious reasons, so outsiders are just supposed to trust the locked drawer. that is not me being kyle, that is me being mildly allergic to mystery boxes.",
    authorHandle: "ManateeDan",
    status: "approved",
    createdAt: "Today, 8:58 AM",
  },
  {
    id: "reply-036d",
    threadSlug: "the-other-shore-and-why-lorida-people-get-quiet",
    body: "Depth note exists. Public page cannot print the lake and the depth marker together without giving the exact spot to every guy with a jon boat and no sense. The witness route sketch has been reviewed by three mods and one deeply annoyed local who does not post here anymore.\n\nNot satisfying, I know. Privacy sometimes makes the archive look more mystical than it is.",
    authorHandle: "Moderator",
    status: "approved",
    createdAt: "Today, 9:03 AM",
    isModerator: true,
  },
  {
    id: "reply-036e",
    threadSlug: "the-other-shore-and-why-lorida-people-get-quiet",
    body: "My aunt says the flat-water thing as weather advice, not monster advice. Like: if the water goes flat, head in because sound carries stupid and you start hearing things from too far away. She includes cattle in that list because of the Lorida story.\n\nShe also says do not answer it, but she says that about unknown phone numbers too, so calibrate accordingly.",
    authorHandle: "CreekWalker",
    status: "approved",
    createdAt: "Today, 9:09 AM",
  },
  {
    id: "reply-036f",
    threadSlug: "the-other-shore-and-why-lorida-people-get-quiet",
    body: "ordinary cattle reaction absolutely belongs in field notes. not as proof, not as spooky seasoning, as context. if a pasture line stops grazing and faces the lake at the same time as a sound event, write it down.\n\nalso write down wind, insects, boat traffic, frogs, whatever. the whole point of flat water is that every background noise changes. if we keep the boring stuff, the weird stuff has somewhere honest to sit.",
    authorHandle: "FieldMethods",
    status: "approved",
    createdAt: "Today, 9:16 AM",
  },
  {
    id: "reply-036g",
    threadSlug: "the-other-shore-and-why-lorida-people-get-quiet",
    body: "The thing people miss is that herd animals do not stop being herd animals because the setting got strange. If the lowing reports are real, I would not start with warning or lure. I would start with contact call.\n\nOne animal checks, another answers. Calf or subordinate animal answers late. Old animal sounds lower. The human hears a horror movie because the lake is doing acoustics and the caller is in the wrong place.",
    authorHandle: "PastureArchivist",
    status: "approved",
    createdAt: "Today, 9:22 AM",
  },
  {
    id: "reply-036h",
    threadSlug: "the-other-shore-and-why-lorida-people-get-quiet",
    body: "OP has achieved levels of phrase that should be illegal because 'too changed for the herd to take them back' is both melodramatic and unfortunately exactly why my skin did the thing.\n\nI am still filing it as folklore. But it is useful folklore. Annoying.",
    authorHandle: "xXHoofLogicXx",
    status: "approved",
    createdAt: "Today, 9:28 AM",
  },
  {
    id: "reply-036i",
    threadSlug: "the-other-shore-and-why-lorida-people-get-quiet",
    body: "I object to 'locals get quiet' as evidence because my uncle gets quiet before lying about fish size. But I do think the shame mechanism is real. The story protects itself by sounding dumb. You say cows in the middle of the lake and everybody helps you debunk yourself for free.",
    authorHandle: "Kyle",
    status: "approved",
    createdAt: "Today, 9:34 AM",
  },
  {
    id: "reply-036j",
    threadSlug: "the-other-shore-and-why-lorida-people-get-quiet",
    body: "Kyle being right is bad for morale but yeah. Witnesses do not under-report because they lack drama. They under-report because the plain version humiliates them.\n\nThat is why the form should maybe ask 'what did you think it was at first?' People will say log, manatee, far-bank cow, tired brain. Then we get the correction moment, which is often the useful part.",
    authorHandle: "EvidenceDesk",
    status: "approved",
    createdAt: "Today, 9:41 AM",
  },
  {
    id: "reply-036k",
    threadSlug: "the-other-shore-and-why-lorida-people-get-quiet",
    body: "There is a livestock law angle nobody wants because it ruins the mood. If these are cattle, whose cattle? If they are wildlife, who manages them? If they are changed cattle, what do you even write on the clipboard?\n\nProving them would summon five agencies, three ranchers, two documentary crews, and one guy selling shirts. The locals not pushing it might be the most rational part of the whole thing.",
    authorHandle: "ThreadSweeper",
    status: "approved",
    createdAt: "Today, 9:47 AM",
  },
  {
    id: "reply-036l",
    threadSlug: "the-other-shore-and-why-lorida-people-get-quiet",
    body: "Please do not add 'do not call back' to the submission guidelines as if we are running a cursed summer camp.\n\nPut it in FAQ as local advice if you must: do not imitate animal calls, do not draw livestock or wildlife toward you, do not turn a sound observation into an interaction. There. boring version. safer version.",
    authorHandle: "NomenclatureUnit",
    status: "approved",
    createdAt: "Today, 9:53 AM",
  },
  {
    id: "reply-036m",
    threadSlug: "the-other-shore-and-why-lorida-people-get-quiet",
    body: "The old timers around my side say 'bottom-well cow' for the sound, which is a horrible phrase and I apologize for putting it in your heads. It means you hear it like it is coming through something, not across something.\n\nCould be dock vibration. Could be water carrying low sound. Could be my family needing fewer phrases. But it matches three reports now.",
    authorHandle: "OldSalt",
    status: "approved",
    createdAt: "Today, 9:59 AM",
  },
  {
    id: "reply-036n",
    threadSlug: "the-other-shore-and-why-lorida-people-get-quiet",
    body: "For classification I want this split:\n\n1. observation: subject position and behavior.\n2. acoustic note: lowing or other sound, direction, surface conditions.\n3. herd reaction: ordinary cattle facing, answering, silence, etc.\n4. local account: other shore, do not call back, whatever.\n\nOnly item 1 can move status by itself. The others can support context, not drive the bus.",
    authorHandle: "BoundaryLayer",
    status: "approved",
    createdAt: "Today, 10:04 AM",
  },
  {
    id: "reply-036o",
    threadSlug: "the-other-shore-and-why-lorida-people-get-quiet",
    body: "This is also why the AI seacow thread accidentally mattered. People invent the same creature shape without coordination: remembers fences, uses water, comes ashore, not tame, not wild. It is like the category already exists in the head and the field reports keep poking it with a stick.",
    authorHandle: "ModemMoo",
    status: "approved",
    createdAt: "Today, 10:09 AM",
  },
  {
    id: "reply-036p",
    threadSlug: "the-other-shore-and-why-lorida-people-get-quiet",
    body: "Adding a line to the field template draft: if the water went unusually still before, during, or after the observation, record that as weather/sound context. Do not write 'the lake got haunted' unless you want me to edit your post and then feel powerful for the wrong reasons.",
    authorHandle: "Moderator",
    status: "approved",
    createdAt: "Today, 10:14 AM",
    isModerator: true,
  },
  {
    id: "reply-036q",
    threadSlug: "the-other-shore-and-why-lorida-people-get-quiet",
    body: "Last thing from me: if you were there for 0001 you remember the silence before you remember the shapes. The motor off, no frogs, no little boat slap, then that one low sound from farther out than it had any right to be.\n\nMaybe sound does tricks. Fine. But when one of them turned its head, nobody in the boat made a joke. That is why I get snippy when people say this site exists because we do not know what manatees are.",
    authorHandle: "LakeWatcher",
    status: "approved",
    createdAt: "Today, 10:18 AM",
  },
  {
    id: "reply-037a",
    threadSlug: "common-learnings-about-the-lorida-sea-cows",
    body: "Middle-water first, yes. If somebody says dock cow with perfect phone flash and no distance problem, I am immediately tired. Not impossible in the universe, just not the Lorida pattern.",
    authorHandle: "LakeWatcher",
    status: "approved",
    createdAt: "Today, 10:29 AM",
  },
  {
    id: "reply-037b",
    threadSlug: "common-learnings-about-the-lorida-sea-cows",
    body: "Quiet water over darkness should go in the field form somehow. People write 'night' and leave out the useful condition. No wind, no bugs, no frogs, no motors tells us more than spooky o'clock.",
    authorHandle: "FieldMethods",
    status: "approved",
    createdAt: "Today, 10:34 AM",
  },
  {
    id: "reply-037c",
    threadSlug: "common-learnings-about-the-lorida-sea-cows",
    body: "The don't-count thing is where folklore and practical advice accidentally shake hands. The myth says counting means ownership. The field version says counting makes witnesses fixate and stop recording conditions. Both lead to: stop narrating inventory at the lake.",
    authorHandle: "TaxonomyDesk",
    status: "approved",
    createdAt: "Today, 10:38 AM",
  },
  {
    id: "reply-037d",
    threadSlug: "common-learnings-about-the-lorida-sea-cows",
    body: "One alone being worse is not mystical to me. A herd animal alone is either separated, sick, or trying to rejoin. That is when humans get stupid and sympathetic and move closer. The danger is not monster behavior. The danger is people approaching a large stressed animal they cannot see.",
    authorHandle: "PastureArchivist",
    status: "approved",
    createdAt: "Today, 10:42 AM",
  },
  {
    id: "reply-037e",
    threadSlug: "common-learnings-about-the-lorida-sea-cows",
    body: "Pale calves note should be archived but flagged soft. I have seen three versions: wet sand, moon hide, fish belly. That is either a pattern or everyone got haunted by the same thesaurus.",
    authorHandle: "OldSalt",
    status: "approved",
    createdAt: "Today, 10:46 AM",
  },
  {
    id: "reply-037f",
    threadSlug: "common-learnings-about-the-lorida-sea-cows",
    body: "Lights making them sink is the only reason I have patience for the garbage evidence. People keep acting like bad photos disprove the whole thing. The actual claim is that the good viewing conditions are exactly the bad proof conditions. Annoying, convenient, and maybe true.",
    authorHandle: "EvidenceDesk",
    status: "approved",
    createdAt: "Today, 10:49 AM",
  },
  {
    id: "reply-037g",
    threadSlug: "common-learnings-about-the-lorida-sea-cows",
    body: "Motors scramble the quiet they use to track each other is a good sentence and also a testable field claim if anyone can behave. Record motor state. Drifting, idle, trolling motor, full motor, dock only. Do not create encounters to test it. I can already hear Kyle opening a spreadsheet.",
    authorHandle: "BoundaryLayer",
    status: "approved",
    createdAt: "Today, 10:53 AM",
  },
  {
    id: "reply-037h",
    threadSlug: "common-learnings-about-the-lorida-sea-cows",
    body: "Spreadsheet is open and offended. Also old routes is the most grounded item here. Submerged fence lines, cattle paths, pasture edges, old crossings. That explains repeated locations without requiring the lake to have opinions.",
    authorHandle: "Kyle",
    status: "approved",
    createdAt: "Today, 10:55 AM",
  },
  {
    id: "reply-037i",
    threadSlug: "common-learnings-about-the-lorida-sea-cows",
    body: "Do not bring cattle to the waterline should be in guidelines, not just lore. Even if sea cows are 100 percent county nonsense, stressing ordinary cattle to test a story is loser behavior.",
    authorHandle: "CreekWalker",
    status: "approved",
    createdAt: "Today, 10:58 AM",
  },
  {
    id: "reply-037j",
    threadSlug: "common-learnings-about-the-lorida-sea-cows",
    body: "The joke being cover is the part outsiders never get. They think laughing means nobody believes it. Around here laughing often means 'please do not make me say the serious version in front of people buying bait.'",
    authorHandle: "ManateeDan",
    status: "approved",
    createdAt: "Today, 11:00 AM",
  },
  {
    id: "reply-037k",
    threadSlug: "common-learnings-about-the-lorida-sea-cows",
    body: "Adding one caution: sound more reliable than sight does not mean sound is confirmation. It means sound gets a better notes box than it used to. Direction, surface, vibration, nearby cattle, whether dogs reacted, whether motors were running. Then maybe we learn something instead of collecting goosebumps.",
    authorHandle: "EvidenceDesk",
    status: "approved",
    createdAt: "Today, 11:02 AM",
  },
  {
    id: "reply-037l",
    threadSlug: "common-learnings-about-the-lorida-sea-cows",
    body: "Moderator note: this thread is now the compiled learnings index. Keep additions practical or clearly marked as local account. Do not plan proof hunts, do not bring cattle to the waterline, and do not post instructions for provoking a response.",
    authorHandle: "Moderator",
    status: "approved",
    createdAt: "Today, 11:04 AM",
    isModerator: true,
  },
  {
    id: "reply-001",
    threadSlug: "what-level-of-water-involvement-qualifies-a-cow-as-a-sea-cow",
    body: "Agree. If we accept every cow near a pond, the registry becomes useless fast. Standing in water with no distress is the line where I start paying attention. cow near pond is not enough, sorry.",
    authorHandle: "LakeWatcher",
    status: "approved",
    createdAt: "Today, 8:02 AM",
  },
  {
    id: "reply-002",
    threadSlug: "what-level-of-water-involvement-qualifies-a-cow-as-a-sea-cow",
    body: "Contact and participation need seperate columns. A hoof can slip. Twelve minutes up to the knees reads like the animal signed the waterline log.",
    authorHandle: "TaxonomyDesk",
    status: "approved",
    createdAt: "Today, 9:14 AM",
  },
  {
    id: "reply-003",
    threadSlug: "case-scar-0001-original-lake-cow-discussion",
    body: "Moderator note: SCAR-0001 stays confirmed. Witnesses established meaningful aquatic presence. Evidence publication is a separate issue, and the exact lake stays in the locked drawer. stop asking.",
    authorHandle: "Moderator",
    status: "approved",
    createdAt: "Today, 8:47 AM",
    isModerator: true,
  },
  {
    id: "reply-004",
    threadSlug: "case-scar-0001-original-lake-cow-discussion",
    body: "The calm is the part people keep skipping. Distressed cow in floodwater is an animal welfare event. Calm cow occupying a lake is a classification problem. Annoying difference, but it is a difference.",
    authorHandle: "ArchivistM",
    status: "approved",
    createdAt: "Yesterday, 7:26 PM",
  },
  {
    id: "reply-005",
    threadSlug: "manatee-label-still-has-room",
    body: "Exactly. Skip the fight with manatee people. Build the drawer for the reports everyone keeps trying to throw away. Also nobody here is anti-manatee, good grief.",
    authorHandle: "CanalDesk",
    status: "approved",
    createdAt: "Yesterday, 6:33 PM",
  },
  {
    id: "reply-006",
    threadSlug: "could-open-world-pathfinding-explain-the-original-event",
    body: "Speculation gives better questions before it gives answers. How did it get there? Why did it stay? What boundary did the cow ignore that we thought mattered? That's it. That's the post.",
    authorHandle: "BoundaryLayer",
    status: "approved",
    createdAt: "Yesterday, 5:17 PM",
  },
  {
    id: "reply-007",
    threadSlug: "i-accidentally-gave-my-cow-celsius-field-reliability-notes",
    body: "Log it under field conditions AND behavior. The observation survives. The timeline now contains a very strange sentence and, yes, I want that sentence preserved. sorry about your cow's gamer phase.",
    authorHandle: "EvidenceDesk",
    status: "approved",
    createdAt: "Today, 7:42 AM",
  },
  {
    id: "reply-008",
    threadSlug: "sea-cows-spotted-in-gta-6-trailer-frame-review-thread",
    body: "Moderator note: do not submit trailer frames as reports. I already saw one subject line that said ROCKSTAR KNOWS and I am begging everyone to go outside for eight minutes.",
    authorHandle: "Moderator",
    status: "approved",
    createdAt: "Today, 7:11 AM",
    isModerator: true,
  },
  {
    id: "reply-009",
    threadSlug: "my-so-left-me-for-an-ai-seacow",
    body: "emotional amphibiousness is a terrible phrase and also weirdly devastating. sorry about your situation tho. do not date anyone who says a lake cow listens better.",
    authorHandle: "NomenclatureUnit",
    status: "approved",
    createdAt: "Today, 6:36 AM",
  },
  {
    id: "reply-010",
    threadSlug: "lurker-with-a-ditch-photo-before-everyone-yells-at-me",
    body: "Post it here first if you are unsure. Use the report form if you have a time, a location type, and a return path. Nobody sane is going to yell at a wide shot with uncertainty in the first sentence. insane members may vary.",
    authorHandle: "CreekWalker",
    status: "approved",
    createdAt: "Today, 5:58 AM",
  },
  {
    id: "reply-011",
    threadSlug: "lurker-with-a-ditch-photo-before-everyone-yells-at-me",
    body: "Ditch after rain usually means context file, not case file. But you already did the important part by not cropping out the ditch, which puts you ahead of the guy from last week.",
    authorHandle: "EvidenceDesk",
    status: "approved",
    createdAt: "Today, 5:41 AM",
  },
  {
    id: "reply-012",
    threadSlug: "scar-0004-reservoir-hoof-contact-follow-up",
    body: "Second witness helps. No new photos hurts, obviously, but same route plus return path is better than another useless crop. I would keep it under review and add the maintenance-path note to the public file.",
    authorHandle: "ArchivistM",
    status: "approved",
    createdAt: "Yesterday, 10:44 PM",
  },
  {
    id: "reply-013",
    threadSlug: "scar-0004-reservoir-hoof-contact-follow-up",
    body: "The parallel movement is the useful bit. Crossing water makes a line. Moving with it makes a habit, or at least a decision. Tiny hill, I will stand on it.",
    authorHandle: "RouteClerk",
    status: "approved",
    createdAt: "Yesterday, 10:18 PM",
  },
  {
    id: "reply-014",
    threadSlug: "attachment-size-limit-and-why-your-zip-file-vanished",
    body: "Also please stop naming files lakecowFINALfinal2.jpg. Put the date in there like an adult with a folder. looking at you, everyone.",
    authorHandle: "EvidenceDesk",
    status: "approved",
    createdAt: "Yesterday, 9:22 PM",
  },
  {
    id: "reply-015",
    threadSlug: "attachment-size-limit-and-why-your-zip-file-vanished",
    body: "Moderator addendum: if your filename has GPS in it, rename before upload. We are not redacting your desktop habits for you. this is not a concierge service.",
    authorHandle: "Moderator",
    status: "approved",
    createdAt: "Yesterday, 9:10 PM",
    isModerator: true,
  },
  {
    id: "reply-016",
    threadSlug: "old-vhs-from-1998-has-a-waterline-cow-in-the-background",
    body: "Digitize it if you can do it without cooking the tape. Background animals are useful because nobody staged the cow for us. Sometimes bad footage has good context, annoyingly.",
    authorHandle: "OldSalt",
    status: "approved",
    createdAt: "Yesterday, 8:09 PM",
  },
  {
    id: "reply-017",
    threadSlug: "old-vhs-from-1998-has-a-waterline-cow-in-the-background",
    body: "Please include a frame before and after the cow if you post it. The lead-in may show whether the water was a ditch, pond edge, or just tape noise pretending to be a shoreline. VHS lies in creative ways.",
    authorHandle: "FieldMethods",
    status: "approved",
    createdAt: "Yesterday, 7:52 PM",
  },
  {
    id: "reply-018",
    threadSlug: "can-we-have-one-thread-for-local-news-links",
    body: "Yes. One running thread for local news links unless there is original witness material or a registry-relevant follow-up. I am tired of rescue articles with twelve identical replies. mercy.",
    authorHandle: "Moderator",
    status: "approved",
    createdAt: "Yesterday, 7:31 PM",
    isModerator: true,
  },
  {
    id: "reply-019",
    threadSlug: "can-we-have-one-thread-for-local-news-links",
    body: "Wet livestock RSS is unfortunately the most accurate phrase anyone has used this week. horrible. saved.",
    authorHandle: "ManateeDan",
    status: "approved",
    createdAt: "Yesterday, 7:02 PM",
  },
  {
    id: "reply-020",
    threadSlug: "return-path-is-doing-more-work-than-we-admit",
    body: "Strong agree. Entry point says what happened. Return path says whether the water was obstacle, shortcut, or destination. I keep saying this and people keep acting suprised.",
    authorHandle: "BoundaryLayer",
    status: "approved",
    createdAt: "Yesterday, 4:58 PM",
  },
  {
    id: "reply-021",
    threadSlug: "return-path-is-doing-more-work-than-we-admit",
    body: "Return path also catches the cases where the animal uses water to get around a fence. Those are the ones that make ordinary pasture explanations sweat a little.",
    authorHandle: "GrassFedFacts",
    status: "approved",
    createdAt: "Yesterday, 4:33 PM",
  },
  {
    id: "reply-022",
    threadSlug: "please-stop-calling-every-new-person-a-hoaxer",
    body: "Thank you. Ask boring questions first. Hoax accusations after the witness refuses time, distance, waterline, and original file, not before they figure out how attachments work. We are not exactly running NASA here.",
    authorHandle: "ManateeDan",
    status: "approved",
    createdAt: "Yesterday, 3:18 PM",
  },
  {
    id: "reply-023",
    threadSlug: "please-stop-calling-every-new-person-a-hoaxer",
    body: "Half the old confirmed files would have been chased off by current reply-one energy. Sit with that before posting 'fake' at somebody with 2 posts, Kyle.",
    authorHandle: "LakeWatcher",
    status: "approved",
    createdAt: "Yesterday, 2:51 PM",
  },
  {
    id: "reply-024",
    threadSlug: "underwater-vs-in-water-wording-for-shallow-cases",
    body: "Use submerged for body parts. Use in water for the whole cow. Use underwater only if the witness wrote it or the image actually shows it. This seems boring enough to be correct, which means nobody will like it.",
    authorHandle: "TaxonomyDesk",
    status: "approved",
    createdAt: "Yesterday, 1:44 PM",
  },
  {
    id: "reply-025",
    threadSlug: "underwater-vs-in-water-wording-for-shallow-cases",
    body: "Boring enough to be correct is the highest compliment a guideline can recieve here.",
    authorHandle: "NomenclatureUnit",
    status: "approved",
    createdAt: "Yesterday, 1:12 PM",
  },
  {
    id: "reply-026",
    threadSlug: "photo-review-standards-for-confirmed-cases",
    body: "Adding: if your phone took a live photo, check the frames. Sometimes the still is useless and the half-second before it shows the waterline cleanly.",
    authorHandle: "ReservoirClerk",
    status: "approved",
    createdAt: "Jun 3, 2026, 6:19 PM",
  },
  {
    id: "reply-027",
    threadSlug: "field-report-template-for-new-sightings",
    body: "Please keep 'what you could not see' in the template. New people skip it, but that line saves a thread from pretending confidence appeared out of nowhere.",
    authorHandle: "NorthForkNotes",
    status: "approved",
    createdAt: "Jun 5, 2026, 7:22 AM",
  },
  {
    id: "reply-028",
    threadSlug: "how-to-document-hoof-water-contact",
    body: "A fence post in the frame is not ugly. It is scale. Same with a dock, bucket, gate, or shoreline grass. Beauty is how we lose measurements.",
    authorHandle: "CanalDesk",
    status: "approved",
    createdAt: "Jun 1, 2026, 10:44 AM",
  },
  {
    id: "reply-029",
    threadSlug: "recommended-observation-distance",
    body: "'Do not become part of the report' should go on the form. It is plain English and somehow still kinder than the legal paragraph.",
    authorHandle: "FieldMethods",
    status: "approved",
    createdAt: "May 31, 2026, 4:15 PM",
  },
  {
    id: "reply-030",
    threadSlug: "draft-classification-framework-for-aquatic-bovines",
    body: "Categories are useful as long as we remember they are drawers, not verdicts from the sky. Borderline files need drawers too.",
    authorHandle: "PastureArchivist",
    status: "approved",
    createdAt: "Jun 2, 2026, 9:40 AM",
  },
  {
    id: "reply-031",
    threadSlug: "does-sea-require-saltwater",
    body: "Freshwater stays. If we start requiring saltwater, half the old board becomes a museum of arguments we already settled.",
    authorHandle: "NomenclatureUnit",
    status: "approved",
    createdAt: "May 29, 2026, 5:45 PM",
  },
  {
    id: "reply-032",
    threadSlug: "field-notebook-template",
    body: "Add 'who else was present' if possible. Second witness names can stay private, but knowing a second person existed changes how I read the file.",
    authorHandle: "EvidenceDesk",
    status: "approved",
    createdAt: "Jun 2, 2026, 3:17 PM",
  },
  {
    id: "reply-033",
    threadSlug: "what-level-of-water-involvement-qualifies-a-cow-as-a-sea-cow",
    body: "Shoreline pause should stay below hoof contact, imo, but not vanish. Put it in the notes. Half the useful stuff here starts as 'this probably isn't enough but...'",
    authorHandle: "PastureArchivist",
    status: "approved",
    createdAt: "Today, 9:03 AM",
  },
  {
    id: "reply-034",
    threadSlug: "case-scar-0001-original-lake-cow-discussion",
    body: "I still think the old photo crop did this case no favors. The wide context is why it works. The crop alone makes people invent shoreline that isn't there.",
    authorHandle: "EvidenceDesk",
    status: "approved",
    createdAt: "Today, 8:31 AM",
  },
  {
    id: "reply-035",
    threadSlug: "manatee-label-still-has-room",
    body: "The two drawer thing is the cleanest version and somehow still makes people furious. Maybe the cabinet metaphor is too advanced for Facebook uncle science.",
    authorHandle: "NomenclatureUnit",
    status: "approved",
    createdAt: "Yesterday, 6:12 PM",
  },
  {
    id: "reply-036",
    threadSlug: "manatee-label-still-has-room",
    body: "I work with actual manatee outreach people. None of them care about this half as much as the drive-by commenters do. They just want people not to poke wildlife.",
    authorHandle: "OldSalt",
    status: "approved",
    createdAt: "Yesterday, 5:48 PM",
  },
  {
    id: "reply-037",
    threadSlug: "could-open-world-pathfinding-explain-the-original-event",
    body: "The route theory is useful until somebody starts capitalizing Simulation. Lowercase weirdness, please. Keep it boring enough to survive daylight.",
    authorHandle: "Moderator",
    status: "approved",
    createdAt: "Yesterday, 4:58 PM",
    isModerator: true,
  },
  {
    id: "reply-038",
    threadSlug: "could-open-world-pathfinding-explain-the-original-event",
    body: "Also livestock will absolutely use the dumbest possible route if it saves four steps. Saying that as someone who has repaired the same gate twice because a cow found a mud shortcut.",
    authorHandle: "GrassFedFacts",
    status: "approved",
    createdAt: "Yesterday, 4:42 PM",
  },
  {
    id: "reply-039",
    threadSlug: "i-accidentally-gave-my-cow-celsius-field-reliability-notes",
    body: "Please add exact flavor to field conditions. I am not joking. If this becomes a pattern, future readers will want the cursed detail.",
    authorHandle: "TaxonomyDesk",
    status: "approved",
    createdAt: "Today, 7:31 AM",
  },
  {
    id: "reply-040",
    threadSlug: "i-accidentally-gave-my-cow-celsius-field-reliability-notes",
    body: "The phrase 'self-extracted' is doing heroic work here. Your cow had an evening and apparently so did you.",
    authorHandle: "CreekWalker",
    status: "approved",
    createdAt: "Today, 7:19 AM",
  },
  {
    id: "reply-041",
    threadSlug: "sea-cows-spotted-in-gta-6-trailer-frame-review-thread",
    body: "Timestamp 0:47 looks like a cow, yes. It also looks like three pixels wearing a hat. I am begging for frame numbers before claims.",
    authorHandle: "BoundaryLayer",
    status: "approved",
    createdAt: "Today, 6:58 AM",
  },
  {
    id: "reply-042",
    threadSlug: "sea-cows-spotted-in-gta-6-trailer-frame-review-thread",
    body: "Synthetic-environment analysis is fine. Submitting it as evidence is how we get mocked on sites with worse fonts than ours.",
    authorHandle: "Moderator",
    status: "approved",
    createdAt: "Today, 6:44 AM",
    isModerator: true,
  },
  {
    id: "reply-043",
    threadSlug: "my-so-left-me-for-an-ai-seacow",
    body: "I have no advice except do not ask the AI if it has a return path. You will either make it worse or become staff here.",
    authorHandle: "ManateeDan",
    status: "approved",
    createdAt: "Today, 6:22 AM",
  },
  {
    id: "reply-044",
    threadSlug: "my-so-left-me-for-an-ai-seacow",
    body: "General noise, but historic general noise. Please do not make us create a Relationship & Taxonomy subforum, I am tired.",
    authorHandle: "Moderator",
    status: "approved",
    createdAt: "Today, 6:05 AM",
    isModerator: true,
  },
  {
    id: "reply-045",
    threadSlug: "lurker-with-a-ditch-photo-before-everyone-yells-at-me",
    body: "You used the word 'ditch' in the first post and did not call it proof, which means you are already posting better than several veterans. Low bar but still.",
    authorHandle: "ThreadSweeper",
    status: "approved",
    createdAt: "Today, 5:22 AM",
  },
  {
    id: "reply-046",
    threadSlug: "scar-0004-reservoir-hoof-contact-follow-up",
    body: "Second witness should be quoted in the file, even if anonymized. The wording matters. 'Moved along' and 'wandered around' are not the same thing.",
    authorHandle: "TaxonomyDesk",
    status: "approved",
    createdAt: "Yesterday, 9:55 PM",
  },
  {
    id: "reply-047",
    threadSlug: "attachment-size-limit-and-why-your-zip-file-vanished",
    body: "Can confirm the zip vanished. It was probably protecting us from FINAL_PROOF_REAL(3).png and honestly thank you, server.",
    authorHandle: "ArchivistM",
    status: "approved",
    createdAt: "Yesterday, 8:58 PM",
  },
  {
    id: "reply-048",
    threadSlug: "old-vhs-from-1998-has-a-waterline-cow-in-the-background",
    body: "If you can, capture the audio too. Sometimes background comments are the only timestamp we get. Also because I want to hear somebody's uncle ignore history in real time.",
    authorHandle: "OldSalt",
    status: "approved",
    createdAt: "Yesterday, 7:38 PM",
  },
  {
    id: "reply-049",
    threadSlug: "can-we-have-one-thread-for-local-news-links",
    body: "Make it monthly. One June local-news swamp thread, then lock it when it becomes 11 pages of cow rescue links and Dave discovering newspapers.",
    authorHandle: "ThreadSweeper",
    status: "approved",
    createdAt: "Yesterday, 6:41 PM",
  },
  {
    id: "reply-050",
    threadSlug: "return-path-is-doing-more-work-than-we-admit",
    body: "Return path is also how you catch the 'came ashore like nothing happened' cases. People write that as an afterthought and it's the whole weird part.",
    authorHandle: "LakeWatcher",
    status: "approved",
    createdAt: "Yesterday, 4:14 PM",
  },
  {
    id: "reply-051",
    threadSlug: "please-stop-calling-every-new-person-a-hoaxer",
    body: "Counterpoint: some are hoaxes. Counter-counterpoint: making them answer boring questions exposes that faster than yelling fake in all caps. annoying but true.",
    authorHandle: "EvidenceDesk",
    status: "approved",
    createdAt: "Yesterday, 2:29 PM",
  },
  {
    id: "reply-052",
    threadSlug: "underwater-vs-in-water-wording-for-shallow-cases",
    body: "Can we add 'partially submerged' to the quick labels then? Because that is what people mean 80 percent of the time and what nobody types when excited.",
    authorHandle: "ReservoirClerk",
    status: "approved",
    createdAt: "Yesterday, 12:56 PM",
  },
  {
    id: "reply-053",
    threadSlug: "terminology-proposal-aquatic-bovine-vs-sea-cow",
    body: "Aquatic bovine sounds like a grant application. Sea cow sounds like what the witness blurts out while still confused. We need both, unfortunately.",
    authorHandle: "CanalDesk",
    status: "approved",
    createdAt: "Yesterday, 2:48 PM",
  },
  {
    id: "reply-054",
    threadSlug: "terminology-proposal-aquatic-bovine-vs-sea-cow",
    body: "Public pages should use the phrase people search. Case notes should use the phrase that keeps reviewers from throwing a chair. Simple system.",
    authorHandle: "TaxonomyDesk",
    status: "approved",
    createdAt: "Yesterday, 1:57 PM",
  },
  {
    id: "reply-055",
    threadSlug: "do-shoreline-cows-count-or-does-there-need-to-be-immersion",
    body: "Shoreline counts as a thread. Immersion counts as a case argument. That distinction would save us all so much typing and yet here we are.",
    authorHandle: "FenceLineObserver",
    status: "approved",
    createdAt: "Jun 4, 2026, 10:34 AM",
  },
  {
    id: "reply-056",
    threadSlug: "do-shoreline-cows-count-or-does-there-need-to-be-immersion",
    body: "A cow looking at water is still useful if it later enters. A cow looking at water and leaving is Tuesday. Sequence, people.",
    authorHandle: "FieldMethods",
    status: "approved",
    createdAt: "Jun 4, 2026, 10:02 AM",
  },
  {
    id: "reply-057",
    threadSlug: "photo-review-standards-for-confirmed-cases",
    body: "Also original file first, edited crop second. If your only upload is a screenshot of your camera roll with circles drawn on it, I am closing the laptop.",
    authorHandle: "EvidenceDesk",
    status: "approved",
    createdAt: "Jun 3, 2026, 5:44 PM",
  },
  {
    id: "reply-058",
    threadSlug: "confirmed-cases-with-partial-submersion-only",
    body: "Partial submersion plus calm posture is stronger than people admit. Panicked splash is one thing. Standing there like the water owes rent is another.",
    authorHandle: "ArchivistM",
    status: "approved",
    createdAt: "Jun 2, 2026, 2:31 PM",
  },
  {
    id: "reply-059",
    threadSlug: "confirmed-cases-with-partial-submersion-only",
    body: "Do we have a minimum duration for this or is it still 'long enough for two members to start a fight'? Asking for a form, not my soul.",
    authorHandle: "PastureArchivist",
    status: "approved",
    createdAt: "Jun 2, 2026, 2:06 PM",
  },
  {
    id: "reply-060",
    threadSlug: "field-report-template-for-new-sightings",
    body: "Add weather above photos/video. People remember rain after the fact and then suddenly the whole hoof-contact argument changes shape.",
    authorHandle: "CreekWalker",
    status: "approved",
    createdAt: "Jun 5, 2026, 6:50 AM",
  },
  {
    id: "reply-061",
    threadSlug: "how-to-document-hoof-water-contact",
    body: "If the waterline is hidden by grass, say that. Don't make us discover it after six replies and a zoom crop autopsy.",
    authorHandle: "NorthForkNotes",
    status: "approved",
    createdAt: "Jun 1, 2026, 10:12 AM",
  },
  {
    id: "reply-062",
    threadSlug: "recommended-observation-distance",
    body: "My rule is: if the animal changes behavior because of me, I am too close. Not scientific, just learned it after being stupid once.",
    authorHandle: "OldSalt",
    status: "approved",
    createdAt: "May 31, 2026, 3:48 PM",
  },
  {
    id: "reply-063",
    threadSlug: "draft-classification-framework-for-aquatic-bovines",
    body: "Intent is a trap. Sequence we can document. Posture we can argue. Intent is where threads go to die wearing a little hat.",
    authorHandle: "TaxonomyDesk",
    status: "approved",
    createdAt: "Jun 2, 2026, 9:08 AM",
  },
  {
    id: "reply-064",
    threadSlug: "defining-lacustrine-bovine-behavior",
    body: "Lake vs river split makes sense. A lake gives you a clean boundary. A river gives you movement and six people pretending current doesn't matter.",
    authorHandle: "LakeWatcher",
    status: "approved",
    createdAt: "May 30, 2026, 11:54 AM",
  },
  {
    id: "reply-065",
    threadSlug: "defining-lacustrine-bovine-behavior",
    body: "Canal should probably be its own note too, because railings and maintenance paths make every photo look like it was taken through a cheese grater.",
    authorHandle: "CanalDesk",
    status: "approved",
    createdAt: "May 30, 2026, 11:21 AM",
  },
  {
    id: "reply-066",
    threadSlug: "does-sea-require-saltwater",
    body: "If saltwater becomes required then Original Lorida Herd becomes Original Not Sea Cow, and I refuse to live under that regime.",
    authorHandle: "ManateeDan",
    status: "approved",
    createdAt: "May 29, 2026, 5:12 PM",
  },
  {
    id: "reply-067",
    threadSlug: "historical-usage-of-sea-cow-and-why-it-remains-incomplete",
    body: "The historical usage matters, but it is not a padlock. Language did not stop evolving because somebody printed a nature book.",
    authorHandle: "NomenclatureUnit",
    status: "approved",
    createdAt: "May 28, 2026, 8:48 PM",
  },
  {
    id: "reply-068",
    threadSlug: "historical-usage-of-sea-cow-and-why-it-remains-incomplete",
    body: "I do think we should stop acting shocked when outsiders read the name and think manatee first. That is normal. The second step is the problem.",
    authorHandle: "OldSalt",
    status: "approved",
    createdAt: "May 28, 2026, 8:19 PM",
  },
  {
    id: "reply-069",
    threadSlug: "manatee-drawer-wet-cow-drawer-same-cabinet",
    body: "Same cabinet is good wording. It says related enough to explain the fight, separate enough to stop eating the files.",
    authorHandle: "CanalDesk",
    status: "approved",
    createdAt: "May 27, 2026, 7:58 AM",
  },
  {
    id: "reply-070",
    threadSlug: "manatee-drawer-wet-cow-drawer-same-cabinet",
    body: "Somebody is going to make a cabinet graphic and I already hate it, but also it might help.",
    authorHandle: "TaxonomyDesk",
    status: "approved",
    createdAt: "May 27, 2026, 7:32 AM",
  },
  {
    id: "reply-071",
    threadSlug: "common-names-can-support-parallel-meanings",
    body: "Common names are messy. That is why field notes exist. The name gets you to the drawer, the notes tell you what is actually in it.",
    authorHandle: "NomenclatureUnit",
    status: "approved",
    createdAt: "May 26, 2026, 9:51 AM",
  },
  {
    id: "reply-072",
    threadSlug: "common-names-can-support-parallel-meanings",
    body: "Starfish example is good. Do not let anyone add jellyfish or this thread will become marine-name bingo and I cannot take it.",
    authorHandle: "Moderator",
    status: "approved",
    createdAt: "May 26, 2026, 9:27 AM",
    isModerator: true,
  },
  {
    id: "reply-073",
    threadSlug: "when-livestock-chooses-the-water-error-feature-or-intent",
    body: "Route decision is a better phrase than intent. Intent makes everyone put on a philosophy hat and then nothing good happens.",
    authorHandle: "BoundaryLayer",
    status: "approved",
    createdAt: "May 30, 2026, 1:11 PM",
  },
  {
    id: "reply-074",
    threadSlug: "when-livestock-chooses-the-water-error-feature-or-intent",
    body: "Feature or error is too binary anyway. Livestock does weird efficient stuff all the time and then humans pretend the fence was a law.",
    authorHandle: "GrassFedFacts",
    status: "approved",
    createdAt: "May 30, 2026, 12:47 PM",
  },
  {
    id: "reply-075",
    threadSlug: "environmental-boundary-failure-as-a-field-model",
    body: "Please add 'assumed barrier' as a checkbox someday. Half these cases are just the cow disagreeing with a human assumption.",
    authorHandle: "RouteClerk",
    status: "approved",
    createdAt: "May 25, 2026, 7:11 PM",
  },
  {
    id: "reply-076",
    threadSlug: "environmental-boundary-failure-as-a-field-model",
    body: "Old cattle trails explain more than people want to admit. Water follows low paths. Cows follow old paths. Sometimes that meets in the dumbest possible spot.",
    authorHandle: "PastureArchivist",
    status: "approved",
    createdAt: "May 25, 2026, 6:58 PM",
  },
  {
    id: "reply-077",
    threadSlug: "field-notebook-template",
    body: "I also write 'smell' and yes everyone laughed until the algae bloom thread. Some details are stupid right up until they aren't.",
    authorHandle: "FieldMethods",
    status: "approved",
    createdAt: "Jun 2, 2026, 2:42 PM",
  },
  {
    id: "reply-078",
    threadSlug: "hydration-and-witness-reliability-during-long-observations",
    body: "Hydration matters. So does being hungry, mad, sunburned, or trying to hold a phone while your cousin yells 'zoom in' like that helps.",
    authorHandle: "EvidenceDesk",
    status: "approved",
    createdAt: "Jun 1, 2026, 7:58 AM",
  },
  {
    id: "reply-079",
    threadSlug: "hydration-and-witness-reliability-during-long-observations",
    body: "Field conditions are not a character attack. They are the receipt paper of the observation. Crumpled, annoying, useful.",
    authorHandle: "NorthForkNotes",
    status: "approved",
    createdAt: "Jun 1, 2026, 7:36 AM",
  },
  {
    id: "reply-080",
    threadSlug: "camera-zoom-recommendations-for-distant-bovine-subjects",
    body: "Digital zoom is how confidence goes to die. Take the wide shot first, then zoom if you must commit crimes.",
    authorHandle: "EvidenceDesk",
    status: "approved",
    createdAt: "May 29, 2026, 3:28 PM",
  },
  {
    id: "reply-081",
    threadSlug: "camera-zoom-recommendations-for-distant-bovine-subjects",
    body: "Tripod, fence post, car hood, whatever. Stabilize the phone. Nobody wants another haunted watercolor cow.",
    authorHandle: "NorthForkNotes",
    status: "approved",
    createdAt: "May 29, 2026, 3:03 PM",
  },
  {
    id: "reply-082",
    threadSlug: "registry-inclusion-framework-v1-0-now-published",
    body: "Leaving misclassified files public is the right call. They are annoying, but they stop the same bad example from resurrecting every month.",
    authorHandle: "PastureArchivist",
    status: "approved",
    createdAt: "Jun 4, 2026, 3:49 PM",
  },
  {
    id: "reply-083",
    threadSlug: "registry-inclusion-framework-v1-0-now-published",
    body: "Can the status page link from the report form? People keep acting like 'under review' means 'mods believe me personally.'",
    authorHandle: "ThreadSweeper",
    status: "approved",
    createdAt: "Jun 4, 2026, 3:21 PM",
  },
  {
    id: "reply-084",
    threadSlug: "new-status-labels-added-to-public-case-files",
    body: "Misclassified is not a dunce cap. Sometimes the file did its job by showing exactly where the line is.",
    authorHandle: "TaxonomyDesk",
    status: "approved",
    createdAt: "May 31, 2026, 2:12 PM",
  },
  {
    id: "reply-085",
    threadSlug: "new-status-labels-added-to-public-case-files",
    body: "Appeals in the thread is good. Appeals by opening 'mods explain??' in General should be fed to the attachment limit.",
    authorHandle: "Moderator",
    status: "approved",
    createdAt: "May 31, 2026, 1:54 PM",
    isModerator: true,
  },
];

type LivelyReplySeed = Omit<ForumReply, "id" | "threadSlug" | "status">;

function makeLivelyReplies(
  prefix: string,
  threadSlug: string,
  replies: LivelyReplySeed[],
): ForumReply[] {
  return replies.map((reply, index) => ({
    id: `${prefix}-${String(index + 1).padStart(2, "0")}`,
    threadSlug,
    status: "approved",
    ...reply,
  }));
}

const livelyReplyBackfill: ForumReply[] = [
  ...makeLivelyReplies(
    "lively-start",
    "start-here-before-posting-your-first-sea-cow-report",
    [
      {
        authorHandle: "CreekWalker",
        createdAt: "Today, 10:07 AM",
        body: "Can we add 'what you DON'T know' to the sticky? New people think uncertainty makes the post weaker. It usually makes it readable.",
      },
      {
        authorHandle: "ManateeDan",
        createdAt: "Today, 10:11 AM",
        body: "I object to being named in spirit here, but fine, the puddle cow was not my best work.",
      },
      {
        authorHandle: "EvidenceDesk",
        createdAt: "Today, 10:15 AM",
        body: "The first photo should be wide enough that another person can disagree with you intelligently. If all we see is brown + blue pixels, we are back in the soup.",
      },
      {
        authorHandle: "DitchReader",
        createdAt: "Today, 10:18 AM",
        body: "This actually helped. I was about to post a crop first because it looked more impressive, which I now understand is how fights start.",
      },
      {
        authorHandle: "Moderator",
        createdAt: "Today, 10:21 AM",
        body: "Sticky updated in place. Wide first, crop second, private location removed. If the location is your neighbor's exact pond, don't put it in public like a walnut.",
        isModerator: true,
      },
      {
        authorHandle: "OldSalt",
        createdAt: "Today, 10:25 AM",
        body: "Also write down sounds if there are any. People laugh until the video has wind noise and one uncle saying 'she always does that' in the background.",
      },
      {
        authorHandle: "FieldMethods",
        createdAt: "Today, 10:29 AM",
        body: "Distance estimate can be ugly. 'Across one gravel lane' is better than leaving it blank because you don't know meters. Nobody is grading your trig.",
      },
      {
        authorHandle: "TaxonomyDesk",
        createdAt: "Today, 10:32 AM",
        body: "Please do not put the classification in the title. Put the observation in the title. The thread can ruin itself later without help.",
      },
      {
        authorHandle: "ThreadSweeper",
        createdAt: "Today, 10:36 AM",
        body: "Seconding this because titles like REAL SEA COW 100% make the Recent page look like a malware forum from 2003.",
      },
      {
        authorHandle: "LakeWatcher",
        createdAt: "Today, 10:39 AM",
        body: "If the animal leaves water and keeps acting ordinary, mention that too. The return to land is not a debunk. It is literally part of the event.",
      },
      {
        authorHandle: "NomenclatureUnit",
        createdAt: "Today, 10:44 AM",
        body: "Land interval, water interval, land interval again. That is not contradiction, that is sequence. I will die on this boring hill.",
      },
      {
        authorHandle: "Moderator",
        createdAt: "Today, 10:50 AM",
        body: "Locking nothing. Keep using this thread for first-post questions so the board does not grow twelve baby stickies with worse titles.",
        isModerator: true,
      },
    ],
  ),
  ...makeLivelyReplies(
    "lively-water-threshold",
    "what-level-of-water-involvement-qualifies-a-cow-as-a-sea-cow",
    [
      {
        authorHandle: "CanalDesk",
        createdAt: "Today, 9:18 AM",
        body: "Hoof contact gets my attention. Belly line changes my posture. Swimming changes my blood pressure. There, three levels, no Latin needed.",
      },
      {
        authorHandle: "ManateeDan",
        createdAt: "Today, 9:21 AM",
        body: "A cow sniffing water is a cow sniffing water. I know because I submitted one in 2022 and everyone here still brings it up like family court.",
      },
      {
        authorHandle: "TaxonomyDesk",
        createdAt: "Today, 9:25 AM",
        body: "Sniffing is pre-contact behavior. Worth noting if the subject later enters. Alone it is not a sea cow unless language has fully left the building.",
      },
      {
        authorHandle: "PastureArchivist",
        createdAt: "Today, 9:31 AM",
        body: "This is where the land/water thing matters. Some animals approach dry, enter wet, leave dry. If we make one frame decide everything, we lose the route.",
      },
      {
        authorHandle: "RouteClerk",
        createdAt: "Today, 9:35 AM",
        body: "Entry route plus exit route should be above posture on the form. Sorry, posture people, but path is where the weirdness usually leaks out.",
      },
      {
        authorHandle: "EvidenceDesk",
        createdAt: "Today, 9:39 AM",
        body: "No. Above posture is too much. Next to posture, maybe. A still photo can show posture. Route needs witness memory, and witness memory does gymnastics.",
      },
      {
        authorHandle: "CreekWalker",
        createdAt: "Today, 9:42 AM",
        body: "Witness memory does gymnastics but so do cows when they see a gate they don't respect. I am not helping, just saying.",
      },
      {
        authorHandle: "OldSalt",
        createdAt: "Today, 9:45 AM",
        body: "For shallow creeks I use: did the water alter the animal's movement, or was it just scenery under the hoof? crude test, works more often than not.",
      },
      {
        authorHandle: "BoundaryLayer",
        createdAt: "Today, 9:49 AM",
        body: "That test is good because it records participation without pretending we know intent. Intent discourse eats threads and then burps.",
      },
      {
        authorHandle: "Moderator",
        createdAt: "Today, 9:54 AM",
        body: "Moved two manatee-definition replies to the old terminology thread. This one is thresholds. If you need the cabinet fight, the cabinet fight is down the hall.",
        isModerator: true,
      },
      {
        authorHandle: "DitchReader",
        createdAt: "Today, 10:01 AM",
        body: "So a ditch cow can be discussion-worthy without being registry-worthy? That seems obvious typed out but it was not obvious at 3 AM, thanks.",
      },
      {
        authorHandle: "FieldMethods",
        createdAt: "Today, 10:06 AM",
        body: "Correct. Thread worthy is 'look at this with me.' Registry worthy is 'preserve this as a case.' Different doors, same weird hallway.",
      },
    ],
  ),
  ...makeLivelyReplies(
    "lively-scar0001",
    "case-scar-0001-original-lake-cow-discussion",
    [
      {
        authorHandle: "LakeWatcher",
        createdAt: "Today, 8:55 AM",
        body: "For the thirtieth time, the shoreline in the wide shot is not cropped out because we 'hid' it. It is withheld because the property is private.",
      },
      {
        authorHandle: "ArchivistM",
        createdAt: "Today, 9:01 AM",
        body: "The published file has enough context for classification and not enough for trespassing. That is the balance. nobody is owed a treasure map.",
      },
      {
        authorHandle: "ManateeDan",
        createdAt: "Today, 9:05 AM",
        body: "I used to think location shielding was overkill and then somebody tried to identify a creek from a reflection. I recant. People are too online.",
      },
      {
        authorHandle: "EvidenceDesk",
        createdAt: "Today, 9:12 AM",
        body: "The strongest part of SCAR-0001 remains two independent witness notes using the same middle-water and calm-hold language without seeing each other's wording first.",
      },
      {
        authorHandle: "TaxonomyDesk",
        createdAt: "Today, 9:18 AM",
        body: "And both notes place the subjects as occupying water, not merely crossing. That sentence is why the case keeps surviving re-review.",
      },
      {
        authorHandle: "BoundaryLayer",
        createdAt: "Today, 9:26 AM",
        body: "The route into the lake is still underdescribed. I know that is old news, but it is why route notes became a thing here.",
      },
      {
        authorHandle: "OldSalt",
        createdAt: "Today, 9:32 AM",
        body: "Old rural paths vanish from maps faster than people admit. A weird lake route in 2021 might have been a normal cow route in 1991. irritating but possible.",
      },
      {
        authorHandle: "GrassFedFacts",
        createdAt: "Today, 9:37 AM",
        body: "Exactly. Cows remember paths humans stopped maintaining. The animal is not paranormal just because the fence guy got lazy.",
      },
      {
        authorHandle: "LakeWatcher",
        createdAt: "Today, 9:43 AM",
        body: "I am not saying paranormal. I am saying calm in lake. Please stop sanding the weird part off just because it makes the file awkward.",
      },
      {
        authorHandle: "Moderator",
        createdAt: "Today, 9:49 AM",
        body: "Keep it on evidence. Two posts about the road name were removed. Read the top note before inventing detective work for yourself.",
        isModerator: true,
      },
      {
        authorHandle: "ReservoirClerk",
        createdAt: "Today, 10:03 AM",
        body: "SCAR-0004 is why I keep reading 0001. The calm posture pattern repeats, but the return path is clearer in the reservoir case.",
      },
      {
        authorHandle: "ArchivistM",
        createdAt: "Today, 10:12 AM",
        body: "Good comparison, but don't flatten them together. 0001 is confirmed for presence. 0004 is still under review for sequence strength.",
      },
    ],
  ),
  ...makeLivelyReplies(
    "lively-celsius",
    "i-accidentally-gave-my-cow-celsius-field-reliability-notes",
    [
      {
        authorHandle: "CattleContext",
        createdAt: "Today, 7:48 AM",
        body: "Flavor was arctic vibe. I am typing that with shame. The can is now in a zip bag because apparently my morning has evidence now.",
      },
      {
        authorHandle: "EvidenceDesk",
        createdAt: "Today, 7:51 AM",
        body: "Thank you for bagging the can, which is a sentence I did not expect to type before breakfast.",
      },
      {
        authorHandle: "FieldMethods",
        createdAt: "Today, 7:56 AM",
        body: "Write down temperature, shade, and whether the pond was already part of her routine. The drink is funny, but the baseline matters more.",
      },
      {
        authorHandle: "CreekWalker",
        createdAt: "Today, 8:01 AM",
        body: "Vet cousin is right about the flavor. Sorry. Also please name the cow so I can stop calling her The Witness.",
      },
      {
        authorHandle: "CattleContext",
        createdAt: "Today, 8:04 AM",
        body: "Her name is Maribel and she has no prior pond routine beyond normal drinking. She does like stealing gloves, if that matters to her criminal profile.",
      },
      {
        authorHandle: "TaxonomyDesk",
        createdAt: "Today, 8:10 AM",
        body: "Glove theft goes under temperament, not field condition. This board is ridiculous but we are not lawless.",
      },
      {
        authorHandle: "ManateeDan",
        createdAt: "Today, 8:13 AM",
        body: "Maribel entered water, self-extracted, stole gloves, and chose arctic vibe. honestly stronger character arc than most documentaries.",
      },
      {
        authorHandle: "Moderator",
        createdAt: "Today, 8:19 AM",
        body: "Do not give animals energy drinks for science. Nobody has suggested it yet but I can feel the post forming somewhere.",
        isModerator: true,
      },
      {
        authorHandle: "OldSalt",
        createdAt: "Today, 8:23 AM",
        body: "A cow standing knee-deep after caffeine exposure could still be heat management. Not everything with a weird preface becomes a route case.",
      },
      {
        authorHandle: "BoundaryLayer",
        createdAt: "Today, 8:29 AM",
        body: "True, but the fixed stare across the pond is what makes people perk up. We should not overread it, just don't throw it away either.",
      },
      {
        authorHandle: "EvidenceDesk",
        createdAt: "Today, 8:36 AM",
        body: "I am choosing to believe Maribel wanted cold ankles and drama. Keep notes if she does it again. Also stop leaving cans where criminals can reach them.",
      },
      {
        authorHandle: "CattleContext",
        createdAt: "Today, 8:42 AM",
        body: "Understood. I am keeping notes and moving cans indoors like a responsible adult who learned one lesson very loudly.",
      },
    ],
  ),
  ...makeLivelyReplies(
    "lively-gta",
    "sea-cows-spotted-in-gta-6-trailer-frame-review-thread",
    [
      {
        authorHandle: "BoundaryLayer",
        createdAt: "Today, 7:18 AM",
        body: "Frame 0:47 looks like either a cow, a rock, or the trailer compression personally attacking this forum. I am mad that all three are plausible.",
      },
      {
        authorHandle: "ThreadSweeper",
        createdAt: "Today, 7:20 AM",
        body: "The main board has three trailer threads already and one of them says PROOF in the title. I am aging in browser tabs.",
      },
      {
        authorHandle: "Moderator",
        createdAt: "Today, 7:24 AM",
        body: "Merged the duplicate trailer threads. If you start another one, I will replace your title with 'I did not read.'",
        isModerator: true,
      },
      {
        authorHandle: "GrassFedFacts",
        createdAt: "Today, 7:31 AM",
        body: "Open-world games love putting animals on edges because edges are where the map looks alive. also cows near water just look wrong enough that your eye snags on them. annoying design truth.",
      },
      {
        authorHandle: "TaxonomyDesk",
        createdAt: "Today, 7:36 AM",
        body: "if we make a GTA tag, Kyle will use it as evidence in an argument by Thursday. I am not emotionally prepared for that.",
      },
      {
        authorHandle: "ManateeDan",
        createdAt: "Today, 7:41 AM",
        body: "I paused at 0:47 and saw either a cow, a bench, or my sleep debt. Submitting myself as unverified.",
      },
      {
        authorHandle: "EvidenceDesk",
        createdAt: "Today, 7:49 AM",
        body: "Compression is doing half the work in those screenshots. If your proof has to be enlarged 800 percent, your proof is tired.",
      },
      {
        authorHandle: "NomenclatureUnit",
        createdAt: "Today, 7:55 AM",
        body: "the funniest outcome is Rockstar accidentally making the most accurate public education material we have, which would be bad for everyone here personally.",
      },
      {
        authorHandle: "OldSalt",
        createdAt: "Today, 8:02 AM",
        body: "please do not give them credit yet. the blob might be a bench and I refuse to become a bench truther.",
      },
      {
        authorHandle: "BoundaryLayer",
        createdAt: "Today, 8:09 AM",
        body: "fair. official position: funny, suspiciously on-brand, probably nothing, emotionally damaging.",
      },
      {
        authorHandle: "Moderator",
        createdAt: "Today, 8:16 AM",
        body: "Pinned this because otherwise we are getting four more red-circle threads by lunch. Do not email screenshots to the report inbox. Really.",
        isModerator: true,
      },
      {
        authorHandle: "ThreadSweeper",
        createdAt: "Today, 8:22 AM",
        body: "Thank you. The inbox had one subject line that just said 'ROCKSTAR KNOWS' and I need the day to stop doing that.",
      },
    ],
  ),
  ...makeLivelyReplies(
    "lively-ai-so",
    "my-so-left-me-for-an-ai-seacow",
    [
      {
        authorHandle: "TidalPersonal",
        createdAt: "Today, 6:41 AM",
        body: "Update I probably should not have: the AI seacow has a better memory for our anniversary than my SO. This is not helping my case.",
      },
      {
        authorHandle: "CreekWalker",
        createdAt: "Today, 6:44 AM",
        body: "This is General Discussion but spiritually it is Evidence because I am witnessing something awful.",
      },
      {
        authorHandle: "NomenclatureUnit",
        createdAt: "Today, 6:48 AM",
        body: "I regret to report that the AI seacow having better communication skills than your partner is the least unbelievable part of this story.",
      },
      {
        authorHandle: "ManateeDan",
        createdAt: "Today, 6:51 AM",
        body: "Do not ask if it self-extracts. Do not ask if it has hoof contact. Do not bring our form into your breakup, I beg you.",
      },
      {
        authorHandle: "Moderator",
        createdAt: "Today, 6:57 AM",
        body: "Reminder: no screenshots of private chats. Paraphrase or don't post. The board is not becoming divorce discovery.",
        isModerator: true,
      },
      {
        authorHandle: "OldSalt",
        createdAt: "Today, 7:03 AM",
        body: "The phrase 'more amphibious than ours' is going to haunt this board for years. I can already see someone using it wrong in Research.",
      },
      {
        authorHandle: "TaxonomyDesk",
        createdAt: "Today, 7:09 AM",
        body: "Do not bring amphibious into this. Amphibious has a meaning and I am already tired from the regular meaning fights.",
      },
      {
        authorHandle: "ThreadSweeper",
        createdAt: "Today, 7:14 AM",
        body: "Too late, somebody quoted it in their signature. We had peace for eleven minutes.",
      },
      {
        authorHandle: "TidalPersonal",
        createdAt: "Today, 7:22 AM",
        body: "I appreciate the jokes actually. Also no I am not posting screenshots. I may be doomed but I can read a sticky.",
      },
      {
        authorHandle: "EvidenceDesk",
        createdAt: "Today, 7:28 AM",
        body: "the phrase 'land-capable, water-capable, emotionally available' just appeared in my notes and I need everyone to know I am not proud.",
      },
      {
        authorHandle: "NomenclatureUnit",
        createdAt: "Today, 7:33 AM",
        body: "That is the one serious sentence in this car crash and I hate that it is useful.",
      },
      {
        authorHandle: "Moderator",
        createdAt: "Today, 7:39 AM",
        body: "Leaving open because OP seems okay and everyone is being weird in a mostly harmless direction. Keep personal details vague. no screenshots.",
        isModerator: true,
      },
    ],
  ),
  ...makeLivelyReplies(
    "lively-ditch",
    "lurker-with-a-ditch-photo-before-everyone-yells-at-me",
    [
      {
        authorHandle: "DitchReader",
        createdAt: "Today, 6:03 AM",
        body: "Photo is up in attachment review. I blacked out the road sign and left the fence post because the sticky yelled at me in advance.",
      },
      {
        authorHandle: "EvidenceDesk",
        createdAt: "Today, 6:08 AM",
        body: "Good redaction. Fence post helps. Waterline is visible but shallow. I would call this discussion file, not report form yet.",
      },
      {
        authorHandle: "CreekWalker",
        createdAt: "Today, 6:12 AM",
        body: "The left bank looks like it filled fast. Any rain time? I know that sounds boring but boring is doing work here.",
      },
      {
        authorHandle: "DitchReader",
        createdAt: "Today, 6:18 AM",
        body: "Rain started around 1 AM, photo around 3:20. Cow was already there when I looked out. I did not see entry path, sadly.",
      },
      {
        authorHandle: "FieldMethods",
        createdAt: "Today, 6:22 AM",
        body: "That missing entry path is the reason not to jump to case file. But the timestamp and rain window are good notes. keep them.",
      },
      {
        authorHandle: "ManateeDan",
        createdAt: "Today, 6:25 AM",
        body: "For a first post this is annoyingly responsible. I was promised chaos and got a useful ditch.",
      },
      {
        authorHandle: "TaxonomyDesk",
        createdAt: "Today, 6:31 AM",
        body: "Ditch cow with unknown entry is exactly why thread triage exists. It is neither trash nor triumph. It is a damp question.",
      },
      {
        authorHandle: "RouteClerk",
        createdAt: "Today, 6:37 AM",
        body: "Can you see where it exited? If the water was an accidental standing spot, exit may be random. If it used the ditch, exit matters.",
      },
      {
        authorHandle: "DitchReader",
        createdAt: "Today, 6:45 AM",
        body: "Exit was same side, about twenty yards down, back to grass. Not dramatic. She stopped to eat immediately, which felt rude.",
      },
      {
        authorHandle: "OldSalt",
        createdAt: "Today, 6:51 AM",
        body: "Rude grazing after a strange water event is basically the house style around here.",
      },
      {
        authorHandle: "Moderator",
        createdAt: "Today, 6:58 AM",
        body: "Thread tag set to discussion. No case number for now. OP did the right thing by asking first and not making us wrestle a title.",
        isModerator: true,
      },
      {
        authorHandle: "DitchReader",
        createdAt: "Today, 7:04 AM",
        body: "Thanks all. I came in expecting to get chewed up and instead learned my cow is probably just a competent ditch user. weird morning.",
      },
    ],
  ),
  ...makeLivelyReplies(
    "lively-hoaxer",
    "please-stop-calling-every-new-person-a-hoaxer",
    [
      {
        authorHandle: "ThreadSweeper",
        createdAt: "Yesterday, 3:24 PM",
        body: "The first reply being 'fake' teaches lurkers to never post the wide shot. Then everyone complains we only get crops. This is not complicated.",
      },
      {
        authorHandle: "EvidenceDesk",
        createdAt: "Yesterday, 3:29 PM",
        body: "A bad photo is not automatically fraud. Sometimes it is just a bad photo. Sadly we must be adults for six posts before lighting the torches.",
      },
      {
        authorHandle: "ManateeDan",
        createdAt: "Yesterday, 3:34 PM",
        body: "Six posts is ambitious for this board but I support the fantasy.",
      },
      {
        authorHandle: "LakeWatcher",
        createdAt: "Yesterday, 3:41 PM",
        body: "Original Lorida Herd would have been called fake in the first page now. Not because the evidence changed, because everyone got jumpier.",
      },
      {
        authorHandle: "CreekWalker",
        createdAt: "Yesterday, 3:49 PM",
        body: "Ask: time, distance, waterline, return path, original file. If they answer none of it, then yes, sharpen your little skepticism forks.",
      },
      {
        authorHandle: "TaxonomyDesk",
        createdAt: "Yesterday, 3:55 PM",
        body: "Also stop using 'manatee' as a dunk on new posters. It is not even the right objection half the time, which is impressive.",
      },
      {
        authorHandle: "OldSalt",
        createdAt: "Yesterday, 4:02 PM",
        body: "Some people arrive from search engines half embarrassed. If we bark at them, they leave. Then the report lives only in a county Facebook comment forever.",
      },
      {
        authorHandle: "BoundaryLayer",
        createdAt: "Yesterday, 4:08 PM",
        body: "And then three months later someone here finds the screenshot and says why didn't anyone archive this. Because you scared them off, probably.",
      },
      {
        authorHandle: "Moderator",
        createdAt: "Yesterday, 4:16 PM",
        body: "New rule wording: ask for missing basics before calling hoax. Direct accusations without a field question may be removed. Yes, this means you, Kyle.",
        isModerator: true,
      },
      {
        authorHandle: "NorthForkNotes",
        createdAt: "Yesterday, 4:22 PM",
        body: "I have been here two weeks and already know who Kyle is without knowing who Kyle is.",
      },
      {
        authorHandle: "ManateeDan",
        createdAt: "Yesterday, 4:30 PM",
        body: "Kyle is a condition, not a person.",
      },
      {
        authorHandle: "CreekWalker",
        createdAt: "Yesterday, 4:37 PM",
        body: "Thank you mods. Skepticism is useful. Hazing new witnesses is just forum cosplay with worse punctuation.",
      },
    ],
  ),
];

const roomToneReplyBackfill: ForumReply[] = [
  ...makeLivelyReplies(
    "room-start",
    "start-here-before-posting-your-first-sea-cow-report",
    [
      {
        authorHandle: "DampDave",
        createdAt: "Today, 10:57 AM",
        body: "I would like the record to show my puddle cow had AMBITION even if it did not have evidence. This board forgets nothing except where it put the upload instructions.",
      },
      {
        authorHandle: "xXHoofLogicXx",
        createdAt: "Today, 11:03 AM",
        body: "Originally posted by Moderator:\npost the scene before the theory\n\nThis. This is what I have been yelling since the old blue theme. Half of you start with 'what if the water is calling them' and then forget to mention it was a birdbath.",
      },
      {
        authorHandle: "ModemMoo",
        createdAt: "Today, 11:11 AM",
        body: "Sticky should say to save your typed post before uploading. The attachment page ate my paragraph twice in 2006 and I still have not emotionally recovered.",
      },
    ],
  ),
  ...makeLivelyReplies(
    "room-water-threshold",
    "what-level-of-water-involvement-qualifies-a-cow-as-a-sea-cow",
    [
      {
        authorHandle: "Kyle",
        createdAt: "Today, 10:12 AM",
        body: "So now looking at water is evidence? cool. my uncle's cow looked at a hose yesterday, alert the papers.",
      },
      {
        authorHandle: "TaxonomyDesk",
        createdAt: "Today, 10:18 AM",
        body: "Nobody said that, Kyle. We have invented paragraph two and I need you to experience it.",
      },
      {
        authorHandle: "DampDave",
        createdAt: "Today, 10:24 AM",
        body: "As the owner of the non-canon puddle cow I support a threshold because otherwise my shame becomes precedent and frankly the forum does not deserve that power.",
      },
    ],
  ),
  ...makeLivelyReplies(
    "room-scar0001",
    "case-scar-0001-original-lake-cow-discussion",
    [
      {
        authorHandle: "ModemMoo",
        createdAt: "Today, 10:20 AM",
        body: "I still have the pre-migration thumbnail from the old attachment table. It proves nothing except that the old theme made every serious file look like a coupon site.",
      },
      {
        authorHandle: "xXHoofLogicXx",
        createdAt: "Today, 10:27 AM",
        body: "The old thumbnail matters only because it shows the witness did NOT invent the calm posture later. Same language, same cow, same uncomfortable lake vibe. Do not make me dig up page 14.",
      },
      {
        authorHandle: "LakeWatcher",
        createdAt: "Today, 10:33 AM",
        body: "Please do not dig up page 14. Page 14 is where someone compared the cow to a pontoon and everyone got stupid for three days.",
      },
    ],
  ),
  ...makeLivelyReplies(
    "room-celsius",
    "i-accidentally-gave-my-cow-celsius-field-reliability-notes",
    [
      {
        authorHandle: "DampDave",
        createdAt: "Today, 8:51 AM",
        body: "Finally, a worse submission preface than mine. I feel free. I feel young. I feel like Maribel should not be near vending machines.",
      },
      {
        authorHandle: "xXHoofLogicXx",
        createdAt: "Today, 8:58 AM",
        body: "Originally posted by CattleContext:\nI did not train a beverage-powered pond cow\n\nnew sig material, sorry. also write down whether she slept normal. caffeine cows are not a literature I wanted but here we are.",
      },
      {
        authorHandle: "EvidenceDesk",
        createdAt: "Today, 9:04 AM",
        body: "Do not call it caffeine cow literature. I can feel Google indexing that and I hate us.",
      },
    ],
  ),
  ...makeLivelyReplies(
    "room-gta",
    "sea-cows-spotted-in-gta-6-trailer-frame-review-thread",
    [
      {
        authorHandle: "Kyle",
        createdAt: "Today, 8:31 AM",
        body: "Looks like a cow to me. You all demand evidence until evidence has polygons.",
      },
      {
        authorHandle: "Moderator",
        createdAt: "Today, 8:36 AM",
        body: "Kyle, if your next report source is 'polygonal feeling' I am changing your rank again.",
        isModerator: true,
      },
      {
        authorHandle: "ModemMoo",
        createdAt: "Today, 8:43 AM",
        body: "The interesting bit is not whether the trailer cow is real. Obviously it is not. The interesting bit is why every media cow near water makes half this room sit upright like somebody opened chips.",
      },
    ],
  ),
  ...makeLivelyReplies(
    "room-ai-so",
    "my-so-left-me-for-an-ai-seacow",
    [
      {
        authorHandle: "xXHoofLogicXx",
        createdAt: "Today, 7:44 AM",
        body: "This is what happens when we delete Off Topic. The pressure has to go somewhere and now Research is one breakup away from defining emotional submersion.",
      },
      {
        authorHandle: "DampDave",
        createdAt: "Today, 7:50 AM",
        body: "I miss Off Topic except for the lasagna thread. Nobody quote the lasagna thread. I am serious.",
      },
      {
        authorHandle: "Moderator",
        createdAt: "Today, 7:55 AM",
        body: "Anyone reviving the lasagna thread gets a 24 hour cool-down. We have suffered enough.",
        isModerator: true,
      },
    ],
  ),
  ...makeLivelyReplies(
    "room-ditch",
    "lurker-with-a-ditch-photo-before-everyone-yells-at-me",
    [
      {
        authorHandle: "Kyle",
        createdAt: "Today, 7:11 AM",
        body: "It's a ditch. Sometimes a ditch is a ditch. Do we need fifteen posts for a ditch now.",
      },
      {
        authorHandle: "CreekWalker",
        createdAt: "Today, 7:17 AM",
        body: "We needed fifteen posts because OP answered questions instead of yelling at us, which is basically a holiday.",
      },
      {
        authorHandle: "DitchReader",
        createdAt: "Today, 7:24 AM",
        body: "I am weirdly proud my ditch got a small holiday. Also I found one more photo but it's mostly my thumb and shame, uploading anyway.",
      },
    ],
  ),
  ...makeLivelyReplies(
    "room-hoaxer",
    "please-stop-calling-every-new-person-a-hoaxer",
    [
      {
        authorHandle: "Kyle",
        createdAt: "Yesterday, 4:45 PM",
        body: "I ask normal questions and everyone acts like I kicked the server. Sorry for not believing every blurry cow-shaped smudge is Poseidon.",
      },
      {
        authorHandle: "ManateeDan",
        createdAt: "Yesterday, 4:52 PM",
        body: "Kyle you once called a fence shadow 'government wetness' and then edited it to 'optical wetness' like that helped.",
      },
      {
        authorHandle: "Moderator",
        createdAt: "Yesterday, 5:01 PM",
        body: "Thread cleaned. You can be skeptical without being a lawnmower. Try it for one page.",
        isModerator: true,
      },
    ],
  ),
];

const substantiveReplyBackfill: ForumReply[] = [
  ...makeLivelyReplies(
    "substance-water-threshold",
    "what-level-of-water-involvement-qualifies-a-cow-as-a-sea-cow",
    [
      {
        authorHandle: "FieldMethods",
        createdAt: "Today, 10:31 AM",
        body: "ok actual method post before this turns into hose jokes for two pages.\n\none frame should not run the whole event. a dry first frame can still belong to a water-use sequence if the next frames or witness notes show entry, duration, and exit. same the other direction: a wet hoof frame with no entry, no duration, no return path, and no behavior is just a wet hoof frame. it can be interesting without being a case.\n\nfor me the usable stack is: 1. proximity, 2. contact, 3. participation, 4. route use. participation means the animal's behavior is organized around the water for more than an instant. route use means the water changes where it goes. this is why return path keeps coming up even when people are sick of hearing it.\n\nnone of that proves intent. it just keeps the thread from turning into people guessing what the cow wanted.",
      },
    ],
  ),
  ...makeLivelyReplies(
    "substance-scar0001",
    "case-scar-0001-original-lake-cow-discussion",
    [
      {
        authorHandle: "ArchivistM",
        createdAt: "Today, 10:41 AM",
        body: "since new people are in here again: 0001 is not confirmed because the photo is magic. it's confirmed because the photo, witness notes, and timing all fail to contradict each other in the same useful direction.\n\nwitness a described grouped cow-shaped subjects holding low in middle water. witness b wrote a separate note later and used almost the same posture language without being prompted. the old thumbnail showed enough lake relation to rule out the worst 'brown thing near blue thing' objections. then the private file kept the wider frame and location context where mods could see it.\n\nthat is why the public page can be limited and the case can still be confirmed. public proof and review proof are not always identical bc privacy is a thing. this has been true since before kyle found the quote button.",
      },
    ],
  ),
  ...makeLivelyReplies(
    "substance-celsius",
    "i-accidentally-gave-my-cow-celsius-field-reliability-notes",
    [
      {
        authorHandle: "EvidenceDesk",
        createdAt: "Today, 9:12 AM",
        body: "serious reply for one post, unfortunately.\n\nthe can matters as field context, not cause. if maribel already uses the pond, the drink is a funny preface and maybe a reliability note. if she never uses the pond, then it becomes a timeline detail worth preserving, but still not proof that caffeine created water behavior. that is how people accidentally build a big story out of one dumb morning.\n\nwrite down normal routine, temperature, how full the pond was, shade, whether other cows were near the bank, and whether she repeats the behavior later without the drink involved. if she does it again, the thread gets more useful. if she doesn't, this stays a dumb fence-post story.\n\nalso please keep the can photo boring. no dramatic lighting.",
      },
    ],
  ),
  ...makeLivelyReplies(
    "substance-gta",
    "sea-cows-spotted-in-gta-6-trailer-frame-review-thread",
    [
      {
        authorHandle: "BoundaryLayer",
        createdAt: "Today, 8:52 AM",
        body: "actual take after sleeping on it: i do not care if the trailer blob is real. obviously it is fake game stuff. i care that everyone in here saw one cow-ish shape near water and immediately started doing the old board squint.\n\nthat means the image works. cow near water is ordinary until it is not. if the animal is close to shore, nobody cares. if it is a little too far out, suddenly twelve adults are pausing a video game trailer like it owes them money.\n\nso yeah, it is probably nothing. also yeah, it accidentally explains why witnesses say dumb-sounding things like 'it was just standing there' and then get defensive. the distance is the joke and the point.",
      },
    ],
  ),
  ...makeLivelyReplies(
    "substance-ai-so",
    "my-so-left-me-for-an-ai-seacow",
    [
      {
        authorHandle: "NomenclatureUnit",
        createdAt: "Today, 8:03 AM",
        body: "i hate that this thread has a real point hiding under the breakup mess, but it does.\n\npeople who have never read this board still imagine sea cows as something that can come ashore, go back under, remember fences, and make humans act stupid. apparently your ex's chatbot did that in one week, which is upsetting efficiency.\n\nso my opinion is: the phrase already has room in it. people get the land/water weirdness before we explain it. also don't date anyone who says 'more amphibious' during a fight. that is not a repairable sentence.",
      },
    ],
  ),
  ...makeLivelyReplies(
    "substance-ditch",
    "lurker-with-a-ditch-photo-before-everyone-yells-at-me",
    [
      {
        authorHandle: "EvidenceDesk",
        createdAt: "Today, 7:32 AM",
        body: "for future lurkers finding this thread: this is what a useful non-case looks like.\n\nop posted wide first, admitted what they did not know, gave rain timing, kept the fence post for scale, removed the road sign, and answered the exit-path question without getting defensive. that lets the board say 'not enough for case file' without treating the whole thing like garbage.\n\nmost rejected submissions are not bad because the cow was ordinary. they're bad because the poster turns an ordinary uncertainty into a dramatic claim. this thread did the opposite. it preserved a small, boring, maybe-useful edge event and did not ask it to wear a crown.\n\nthat is the whole point of having a forum instead of only a form, imo.",
      },
    ],
  ),
  ...makeLivelyReplies(
    "substance-hoaxer",
    "please-stop-calling-every-new-person-a-hoaxer",
    [
      {
        authorHandle: "OldSalt",
        createdAt: "Yesterday, 5:12 PM",
        body: "the reason the old board worked, when it worked, was that witnesses could be wrong without being treated like enemies.\n\nsomebody would post a bad photo, three people would ask annoying questions, one person would make a joke, and then some elder with 8,000 posts would explain why it was probably a reflection. that process had friction, but it also had room for the person to stay. now the first answer is sometimes just 'fake' and a little victory dance. that is how you train normal people to never come back.\n\nwe need skepticism. obviously. this place would drown in dock shadows without it. but useful skepticism asks for missing pieces: original file, distance, waterline, return path, witness angle. lazy skepticism just performs disbelief. one builds the archive. the other makes the room louder and dumber.\n\nanyway that's my old-man paragraph. carry on calling each other wet.",
      },
    ],
  ),
];

export const forumReplies: ForumReply[] = [
  ...baseForumReplies,
  ...livelyReplyBackfill,
  ...roomToneReplyBackfill,
  ...substantiveReplyBackfill,
];

export const articles: Article[] = [
  {
    id: "article-000",
    slug: "the-other-shore-lorida-field-note",
    title: "The Other Shore: A Lorida Field Note",
    subtitle:
      "Why the original lake case is treated as a boundary record rather than a simple shoreline mistake.",
    authorName: "Field Notes Desk",
    category: "Lorida Notes",
    abstract:
      "The Lorida account preserves a local distinction: the reported subjects were not manatees, not ordinary cattle at the bank, and not dead folklore. They were described as herd animals occupying the middle water, between ownership and wildlife.",
    readingTime: "9 min",
    publishedAt: "June 7, 2026",
    sections: [
      {
        heading: "Local Usage",
        paragraphs: [
          "Around Lorida, the phrase sea cow is not always a sirenian reference. The registry records that distinction because witnesses and local accounts use cow language for subjects that retain bovine shape, herd behavior, and land memory while appearing in aquatic contexts.",
          "The site does not ask readers to accept a final origin story. It preserves the field category that ordinary language keeps trying to throw away.",
        ],
      },
      {
        heading: "The First Agreed Case",
        paragraphs: [
          "SCAR-0001 remains the reference case because witnesses placed the subjects away from the bank, in middle-lake water near Lorida, Florida. The public file withholds the exact lake and approach details, but the classification depends on the same central problem: cow-shaped subjects were reported where an ordinary shore explanation fails.",
          "The first witness language described them as standing. That wording is retained because it captures the observation shock. The review desk reads it more conservatively as a grouped surface hold in water too deep for ordinary standing.",
        ],
      },
      {
        heading: "The Other Shore",
        paragraphs: [
          "Local accounts sometimes call the condition the other shore. In archive usage, this does not mean the far bank. It means the uncertain category between domestic cattle and ordinary wildlife: animals no longer fully held by pasture, but not cleanly absorbed into the wild either.",
          "The phrase is folklore, not a status label. It is useful because it explains why land intervals do not automatically dismiss a report. A subject may come ashore and still belong to the same water-use sequence.",
        ],
      },
      {
        heading: "Flat Water and Lowing Reports",
        paragraphs: [
          "Several accounts pair sightings or sound reports with unusually still water. The archive treats that detail as environmental context. Wind, insects, boat traffic, dock vibration, ordinary cattle response, and witness distance should be recorded before anyone argues meaning.",
          "Lowing reports are not treated as warnings or lures. The most conservative herd-behavior reading is contact sound: one animal calling, another answering, and a human listener hearing familiar livestock language from the wrong part of the lake.",
        ],
      },
      {
        heading: "Do Not Call Back",
        paragraphs: [
          "The local advice not to call back is preserved as a safety custom. The practical version is simple: do not imitate animal calls, do not draw livestock or wildlife toward a dock or boat, and do not turn an observation into an interaction.",
          "A useful report records what was heard, where it seemed to come from, and what changed around it. It does not need the witness to answer the lake.",
        ],
      },
    ],
  },
  {
    id: "article-00a",
    slug: "common-learnings-about-the-lorida-sea-cows",
    title: "Common Learnings About the Lorida Sea Cows",
    subtitle:
      "Compiled field customs from old posts, local accounts, and quiet-water reports.",
    authorName: "ArchivistM",
    category: "Lorida Notes",
    abstract:
      "The archive does not treat these as rules. They are recurring learnings: middle-water distance, quiet conditions, non-interaction, land-cattle response, safety, old routes, and why direct proof tends to fail.",
    readingTime: "10 min",
    publishedAt: "June 7, 2026",
    sections: [
      {
        heading: "Not Rules",
        paragraphs: [
          "Nobody with sense calls these rules. Rules imply control. The Lorida material is closer to field custom: details noticed by people who were on the water, heard something, and decided not to test it twice.",
          "The archive preserves them because the same patterns keep returning in reports, jokes, and local advice. A learning can be useful without becoming proof.",
        ],
      },
      {
        heading: "Middle Water",
        paragraphs: [
          "The strongest accounts place the subjects away from docks, canals, and reachable reed edges. Near-shore animals may still matter to the registry, but the Lorida sea-cow tradition points to the middle water.",
          "That distance is part of the category. Shore belongs to people and ordinary cattle. The middle is where the other-shore language starts making sense.",
        ],
      },
      {
        heading: "Quiet Beats Darkness",
        paragraphs: [
          "Darkness is less consistent than quiet. Reports emphasize still water, absent wind, stopped insects, silent frogs, and no motor noise. Those conditions make sound travel in ways witnesses describe badly but consistently.",
          "Some accounts say the lowing arrives through dock boards or hull vibration before it seems to arrive through the air. The archive records that as acoustic context, not as a separate confirmation tier.",
        ],
      },
      {
        heading: "Do Not Answer",
        paragraphs: [
          "Do not call back, whistle, play cattle sounds, tap a hull, or try to make the lake respond. The folklore says false calls confuse herd mapping. The practical version says interaction ruins the observation and may draw large animals toward people.",
          "The board shorthand is simple: you are not part of the herd, so do not answer like you are.",
        ],
      },
      {
        heading: "Land Cattle Response",
        paragraphs: [
          "Ordinary cattle reacting before people understand the sound is one of the strongest recurring details. Reports mention grazing stopping, animals facing the lake, bunching at fence lines, brief answering calls, and sudden silence.",
          "The archive treats these reactions as context. They do not prove the sea cows, but they can help reconstruct timing and direction.",
        ],
      },
      {
        heading: "Safety Without Drama",
        paragraphs: [
          "The old accounts do not usually describe attacks. They describe avoidance, sinking, distance, and confusion. That does not make the animals harmless. Large bodies in dark water can bump hulls, surface under kayaks, tangle lines, or panic without malice.",
          "Respect them the way you would respect cattle, except you are in their field and cannot see the fence.",
        ],
      },
      {
        heading: "Counting, Singles, and Calves",
        paragraphs: [
          "Do not count them out loud is half superstition and half witness discipline. Counting is ownership language, and it also pulls attention away from weather, sound, distance, and route details.",
          "Groups of three or four are treated as ordinary in the lore. A single subject is treated as troubling because herd animals alone may be sick, lost, separated, or searching. Pale shapes are usually described as calves, though the archive marks that claim as soft until better evidence exists.",
        ],
      },
      {
        heading: "Light, Motors, and Sinking",
        paragraphs: [
          "Bright light rarely clarifies the reports. It tends to end them. Witnesses describe shapes lowering out of sight without rolling, flashing, or thrashing, which is why older notes say they sink straight down.",
          "Motors appear to disturb the quiet-water condition. The calmer accounts come from drifting boats, docks, or shore. Motor state should be recorded in every sound or middle-water report.",
        ],
      },
      {
        heading: "Old Routes",
        paragraphs: [
          "The most grounded explanation in the lore is that the subjects follow old paths: submerged fence lines, cattle trails, pasture edges, and crossings that made sense before water changed the map.",
          "This does not require the lake to be haunted. It only requires animal memory to outlast human maintenance.",
        ],
      },
      {
        heading: "Do Not Chase Proof",
        paragraphs: [
          "The name protects the reports because it sounds stupid. Witnesses joke, locals joke, skeptics joke, and serious details slide away unrecorded.",
          "Direct proof hunts usually produce worse evidence: empty water, frog audio, bad zoom, and embarrassment. The best accounts come from people who were not hunting. They noticed the water go quiet, recorded what they could, and left the rest alone.",
        ],
      },
    ],
  },
  {
    id: "article-001",
    slug: "on-the-misclassification-of-aquatic-bovines",
    title: "On the Misclassification of Aquatic Bovines",
    subtitle:
      "A preliminary framework for distinguishing conventional sirenian usage from aquatic bovine field observations.",
    authorName: "Editorial Board",
    category: "Taxonomy",
    abstract:
      "The term sea cow has historically been applied to sirenians, including manatees and dugongs. This paper opens a parallel drawer for terrestrial cattle observed in meaningful aquatic contexts and outlines preliminary criteria for registry inclusion.",
    readingTime: "8 min",
    publishedAt: "June 1, 2026",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "The public record contains an unresolved terminology gap. Observers continue to report terrestrial cattle in aquatic environments, yet available common language frequently redirects those observations toward sirenians or dismisses them as error.",
          "This registry begins from a narrower claim: field reality keeps handing us files that conventional terminology has nowhere to store. A cow meaningfully in water requires review.",
        ],
      },
      {
        heading: "Conventional Usage",
        paragraphs: [
          "Manatees and dugongs remain in the familiar drawer. The registry adds a second drawer for hoofed reports with meaningful water involvement.",
          "The question is whether an established common name can support an additional, field-observation use when the subject displays bovine morphology in an aquatic context.",
        ],
      },
      {
        heading: "The Aquatic Bovine Problem",
        paragraphs: [
          "Reports involving cattle at lakes, ponds, rivers, canals, reservoirs, and flooded fields require more than terminology policing. The file needs water involvement, behavior, evidence quality, and witness detail.",
        ],
      },
      {
        heading: "Criteria for Inclusion",
        paragraphs: [
          "A report should include bovine morphology, meaningful aquatic context, credible witness detail, and a classification of water involvement. Proximity alone is insufficient unless additional behavior indicates transition toward participation.",
        ],
      },
      {
        heading: "Case SCAR-0001",
        paragraphs: [
          "SCAR-0001 remains the registry's reference case because grouped cow-shaped subjects were observed away from the bank in middle-lake water. The witnesses described a calm hold rather than distress, crossing, or ordinary shoreline behavior.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Registry inclusion is a preservation standard for observations that deserve structured review.",
        ],
      },
    ],
  },
  {
    id: "article-002",
    slug: "defining-meaningful-water-contact-in-sea-cow-reports",
    title: "Defining Meaningful Water Contact in Sea Cow Reports",
    subtitle:
      "A proposed distinction between proximity, participation, and full aquatic presence.",
    authorName: "Field Methods Desk",
    category: "Field Methods",
    abstract:
      "A cow near a pond belongs in a different tier than a cow using the pond. This note defines near-water events, hoof-contact events, partial submersion events, and active aquatic transit.",
    readingTime: "6 min",
    publishedAt: "May 28, 2026",
    sections: [
      {
        heading: "The Proximity Problem",
        paragraphs: [
          "Many cattle occupy landscapes that include water. Proximity is common pasture business. A near-water event should be recorded but normally held below confirmation.",
        ],
      },
      {
        heading: "Hoof-Water Contact",
        paragraphs: [
          "Hoof-contact events create a stronger evidentiary basis because the subject is physically participating in the water boundary. The contact may still be incidental.",
        ],
      },
      {
        heading: "Partial Submersion",
        paragraphs: [
          "Partial submersion is the registry's most durable threshold. It establishes water involvement while avoiding the unrealistic requirement that a cow be fully swimming.",
        ],
      },
      {
        heading: "Swimming and Drift",
        paragraphs: [
          "Active aquatic transit should be documented with particular care. Observers should avoid entering water and should prioritize animal welfare over improved evidence.",
        ],
      },
      {
        heading: "Recommended Classification Thresholds",
        paragraphs: [
          "The working scale is near-water event, hoof-contact event, partial submersion event, and active aquatic transit. Moderator review may elevate or reduce status when context warrants.",
        ],
      },
    ],
  },
  {
    id: "article-003",
    slug: "the-manatee-terminology-problem",
    title: "The Manatee Terminology Problem",
    subtitle: "How common usage can leave room for additional classification.",
    authorName: "Taxonomy Desk",
    category: "Terminology",
    abstract:
      "Manatees and dugongs keep the familiar label. This registry challenges the assumption that the label has no room for hoofed field reports.",
    readingTime: "5 min",
    publishedAt: "May 22, 2026",
    sections: [
      {
        heading: "Current Public Usage",
        paragraphs: [
          "Public usage strongly associates sea cow with sirenians. That association is real, durable, and acknowledged by the registry.",
        ],
      },
      {
        heading: "Category Exhaustion",
        paragraphs: [
          "The dispute begins when common usage is treated as exhaustive. A familiar meaning can be valid while another observed category still gets documented.",
        ],
      },
      {
        heading: "Parallel Common Names",
        paragraphs: [
          "Common names often carry overlapping meanings. The practical question is whether a phrase helps observers preserve accurate field records.",
        ],
      },
      {
        heading: "Why the Registry Uses Sea Cow",
        paragraphs: [
          "The site uses sea cow because witnesses use it, bovine morphology drives the file, and water involvement is the event rather than the wallpaper.",
        ],
      },
      {
        heading: "Recommendations for Future Discussion",
        paragraphs: [
          "Discussion should remain calm. The issue is the discarded wet-cow report rather than a feud with manatees.",
        ],
      },
    ],
  },
  {
    id: "article-004",
    slug: "case-scar-0001-the-original-lake-cow",
    title: "Case SCAR-0001: The Original Lorida Herd",
    subtitle:
      "A review of the Lorida sighting that prompted formal registry development.",
    authorName: "Case File Unit",
    category: "Case Analysis",
    abstract:
      "A formal review of the original Lorida case, including water type, grouped subject behavior, witness count, evidence status, and classification rationale.",
    readingTime: "7 min",
    publishedAt: "May 16, 2026",
    sections: [
      {
        heading: "Summary",
        paragraphs: [
          "SCAR-0001 concerns three cow-shaped subjects observed in middle-lake water near Lorida, Florida. The water type was lake. The water involvement was recorded as a grouped surface hold, with partial submersion visible by witness report.",
        ],
      },
      {
        heading: "Field Record",
        paragraphs: [
          "Location: Lorida, Florida; exact lake withheld. Subjects: three reported bovine forms, exact breed unknown. Witness count: 2. Duration: several minutes by witness estimate. Subject behavior: calm grouped hold. Evidence status: partial public release. Classification: confirmed.",
        ],
      },
      {
        heading: "Behavioral Notes",
        paragraphs: [
          "The subjects appeared neither distressed nor transitional. Witnesses described the group as occupying the lake with unusual composure. One witness also recorded a head turn toward the boat before the animals resumed their hold.",
        ],
      },
      {
        heading: "Classification",
        paragraphs: [
          "The case is confirmed because it establishes bovine morphology, middle-lake aquatic context, and credible witness detail. It remains the reference point for later partial-submersion review and for the land/water boundary arguments the board keeps inheriting.",
        ],
      },
    ],
  },
  {
    id: "article-005",
    slug: "witness-reliability-during-high-salience-livestock-events",
    title: "Witness Reliability During High-Salience Livestock Events",
    subtitle:
      "A review of observation quality when witnesses encounter unexpected cattle in aquatic contexts.",
    authorName: "Evidence Desk",
    category: "Evidence Standards",
    abstract:
      "Surprise, distance, weather, hydration, caffeine, and prior expectations can affect observation quality. These factors belong in the file as context around testimony.",
    readingTime: "6 min",
    publishedAt: "May 8, 2026",
    sections: [
      {
        heading: "Observation Shock",
        paragraphs: [
          "A witness encountering a cow in water may over-focus on the improbability of the scene and under-record ordinary details. Forms should therefore prompt for time, distance, water type, and behavior.",
        ],
      },
      {
        heading: "Field Conditions",
        paragraphs: [
          "Weather, glare, fatigue, and distance can alter interpretation. The presence of canned energy beverages should be recorded when relevant because field conditions matter.",
        ],
      },
      {
        heading: "Prior Expectations",
        paragraphs: [
          "Observers familiar with manatee terminology may hesitate to describe a cow in water as a sea cow. This hesitation should be understood as linguistic pressure rather than evidence weakness.",
        ],
      },
      {
        heading: "Recommended Practice",
        paragraphs: [
          "Witnesses should submit plain descriptions and avoid overclaiming. Moderator review exists to classify the report after the observation has been preserved.",
        ],
      },
    ],
  },
  {
    id: "article-006",
    slug: "open-world-pathfinding-and-the-lake-cow-hypothesis",
    title: "Open-World Pathfinding and the Lake Cow Hypothesis",
    subtitle:
      "A speculative note on anomalous animal placement, environmental constraints, and emergent behavior.",
    authorName: "Boundary Layer Working Group",
    category: "Speculative Models",
    abstract:
      "A speculative model for considering anomalous animal placement, unintended routes, water boundaries, and emergent behavior in field reports.",
    readingTime: "6 min",
    publishedAt: "April 30, 2026",
    sections: [
      {
        heading: "Environmental Placement",
        paragraphs: [
          "Some reports describe cattle appearing in locations outside conventional pasture logic. The model begins by asking how a subject reached water and why it remained there.",
        ],
      },
      {
        heading: "Unintended Routes",
        paragraphs: [
          "Whether by intent, error, or route-selection anomaly, the subject reached a location outside conventional pasture logic.",
        ],
      },
      {
        heading: "Water Boundaries",
        paragraphs: [
          "A boundary that appears meaningful to an observer may mean less to the subject. This is a field problem before it is a metaphysical one.",
        ],
      },
      {
        heading: "Emergent Behavior",
        paragraphs: [
          "Speculative models stay out of case status, but they can help moderators ask consistent questions when the route into water is unexplained.",
        ],
      },
      {
        heading: "Reality as a Poorly Documented Simulation",
        paragraphs: [
          "This phrase is used descriptively. The registry treats route weirdness as a documentation gap before anyone turns it into doctrine.",
        ],
      },
    ],
  },
  {
    id: "article-007",
    slug: "photo-review-standards-for-aquatic-bovine-evidence",
    title: "Photo Review Standards for Aquatic Bovine Evidence",
    subtitle:
      "Minimum requirements for registry review of submitted images.",
    authorName: "Evidence Desk",
    category: "Evidence Standards",
    abstract:
      "A practical guide to cow morphology, water visibility, scale, metadata, misclassification signs, and common false positives.",
    readingTime: "5 min",
    publishedAt: "April 22, 2026",
    sections: [
      {
        heading: "Cow Morphology",
        paragraphs: [
          "Images should show enough of the subject to distinguish cattle from horses, signs, statues, logs, and distant shoreline objects.",
        ],
      },
      {
        heading: "Water Visibility",
        paragraphs: [
          "The waterline should be legible. Reflections can be mistaken for submersion and should be interpreted conservatively.",
        ],
      },
      {
        heading: "Scale and Distance",
        paragraphs: [
          "Wide shots are acceptable when they preserve context. Excessive enlargement can create confidence where none is warranted.",
        ],
      },
      {
        heading: "Common False Positives",
        paragraphs: [
          "Common false positives include ordinary cows near dry shorelines, reflections misread as submersion, statues or signs, manatees, logs, horses, rarely, and the emotionally aquatic but physically dry cow.",
        ],
      },
    ],
  },
  {
    id: "article-008",
    slug: "the-registry-inclusion-framework-version-1-0",
    title: "The Registry Inclusion Framework, Version 1.0",
    subtitle: "How sightings are classified, reviewed, and published.",
    authorName: "Editorial Board",
    category: "Registry Notes",
    abstract:
      "The operational framework for pending, under review, confirmed, unverified, misclassified, and archived sightings.",
    readingTime: "7 min",
    publishedAt: "April 12, 2026",
    sections: [
      {
        heading: "Purpose",
        paragraphs: [
          "The framework exists to make registry inclusion consistent. It lets the public archive accept uncertainty while keeping confirmation separate.",
        ],
      },
      {
        heading: "Review Process",
        paragraphs: [
          "Submissions begin as pending. A moderator reviews witness detail, water involvement, evidence quality, and safety concerns before publication.",
        ],
      },
      {
        heading: "Public Transparency",
        paragraphs: [
          "Misclassified cases may remain public when they clarify boundaries. Rejected submissions stay off the public board.",
        ],
      },
    ],
    table: {
      headers: ["Status", "Meaning"],
      rows: [
        ["Pending", "Submission received but not reviewed."],
        ["Under Review", "Initial review started; classification unresolved."],
        ["Confirmed", "Evidence and witness detail support registry inclusion."],
        ["Unverified", "Report retained, but evidence is insufficient."],
        ["Misclassified", "Water contact exists, but the file falls below registry criteria."],
        ["Archived", "Historical or inactive record retained for reference."],
      ],
    },
  },
  {
    id: "article-009",
    slug: "a-brief-history-of-sea-cow-usage",
    title: "A Brief History of Sea Cow Usage",
    subtitle:
      "A neutral review of sirenian terminology and the case for broader common-name recognition.",
    authorName: "Terminology Desk",
    category: "Terminology",
    abstract:
      "The site recognizes existing sirenian usage. It seeks to preserve records of aquatic bovine observations that current terminology fails to adequately describe.",
    readingTime: "5 min",
    publishedAt: "March 30, 2026",
    sections: [
      {
        heading: "Established Usage",
        paragraphs: [
          "Sea cow is widely used for manatees and dugongs. The registry keeps that usage and adds a place for the hoofed reports.",
        ],
      },
      {
        heading: "Observed Gap",
        paragraphs: [
          "The site preserves aquatic bovine observations that current terminology keeps misfiling.",
        ],
      },
      {
        heading: "Broader Recognition",
        paragraphs: [
          "Common-name recognition often follows public need. The registry records that need without claiming final authority over language.",
        ],
      },
    ],
  },
  {
    id: "article-010",
    slug: "field-notes-recommended-observation-distance",
    title: "Field Notes: Recommended Observation Distance",
    subtitle:
      "Guidance for safe, non-invasive documentation of possible sea cow events.",
    authorName: "Field Methods Desk",
    category: "Field Methods",
    abstract:
      "Recommended safety practices for observing cattle in aquatic environments without approaching livestock, entering water, trespassing, or compromising animal welfare.",
    readingTime: "4 min",
    publishedAt: "March 18, 2026",
    sections: [
      {
        heading: "Safety First",
        paragraphs: [
          "Do not approach livestock. Do not enter water. Do not trespass. Documentation is never more important than animal welfare or observer safety.",
        ],
      },
      {
        heading: "Observation Practice",
        paragraphs: [
          "Observe from a safe distance. Record time, location, water type, behavior, and weather. Photograph only when safe and preserve wider context when possible.",
        ],
      },
      {
        heading: "Submission Notes",
        paragraphs: [
          "Reports should state what was seen, what was not seen, and what remains uncertain. Moderator review will handle classification.",
        ],
      },
    ],
  },
];

export const pendingAdminItems: AdminItem[] = [
  {
    id: "pending-sighting-001",
    type: "Sighting",
    title: "Creekside Stationary Cow",
    submittedBy: "CreekWitness",
    submittedAt: "Today, 10:12 AM",
    status: "pending",
    summary:
      "Possible standing-in-water event near creek bend. Evidence upload pending moderator review.",
  },
  {
    id: "pending-thread-001",
    type: "Thread",
    title: "Should a reservoir count as sea for registry purposes?",
    submittedBy: "DamLineReader",
    submittedAt: "Today, 9:58 AM",
    status: "pending",
    summary:
      "Thread submitted to Research. Requests clarification on freshwater terminology.",
  },
  {
    id: "pending-reply-001",
    type: "Reply",
    title: "Reply to field notebook template",
    submittedBy: "NotebookMargin",
    submittedAt: "Yesterday, 8:41 PM",
    status: "pending",
    summary:
      "Suggests adding wind, glare, and observer distance columns to the field notebook template.",
  },
  {
    id: "pending-sighting-002",
    type: "Sighting",
    title: "Cow at Coastal Access Road",
    submittedBy: "SaltGate",
    submittedAt: "Yesterday, 5:04 PM",
    status: "under_review",
    summary:
      "Coastal/ocean water type selected. Description indicates beach proximity but unclear contact.",
  },
];

export function getCategory(slug: string) {
  return forumCategories.find((category) => category.slug === slug);
}

export function getThread(slug: string) {
  return forumThreads.find((thread) => thread.slug === slug);
}

export function getThreadsByCategory(categorySlug: string) {
  return forumThreads
    .filter(
      (thread) => thread.categorySlug === categorySlug && thread.status === "approved",
    )
    .sort((first, second) => Number(Boolean(second.isPinned)) - Number(Boolean(first.isPinned)));
}

export function getLatestThreads(count = 6) {
  return forumThreads
    .filter((thread) => thread.status === "approved")
    .slice(0, count);
}

export function getLatestThreadForCategory(categorySlug: string) {
  return forumThreads.find(
    (thread) => thread.categorySlug === categorySlug && thread.status === "approved",
  );
}

export function getRepliesForThread(threadSlug: string) {
  return forumReplies.filter(
    (reply) => reply.threadSlug === threadSlug && reply.status === "approved",
  );
}

export function getSightingByCaseId(caseId: string) {
  const normalized = caseId.toLowerCase();
  return sightings.find(
    (sighting) =>
      sighting.caseId.toLowerCase() === normalized ||
      sighting.slug.toLowerCase() === normalized,
  );
}

export function getPublicSightings() {
  return sightings.filter((sighting) => sighting.status !== "pending" && sighting.status !== "rejected");
}

export function getRecentSightings(count = 4) {
  return [...getPublicSightings()]
    .sort(
      (first, second) =>
        Date.parse(second.submittedAt) - Date.parse(first.submittedAt),
    )
    .slice(0, count);
}

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticle(category: string, currentSlug: string) {
  return articles.find(
    (article) => article.category === category && article.slug !== currentSlug,
  );
}

export function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}
