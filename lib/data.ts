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
  threads: "6,731",
  posts: "28,642",
  confirmedSightings: "142",
  underReview: "87",
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
      "Open discussion about aquatic bovine phenomena and site matters.",
    topics: 1242,
    posts: 6218,
    sortOrder: 1,
  },
  {
    id: "cat-confirmed",
    slug: "confirmed-sightings",
    name: "Confirmed Sightings",
    description:
      "Reviewed sightings with sufficient evidence for registry confirmation.",
    topics: 319,
    posts: 2976,
    sortOrder: 2,
  },
  {
    id: "cat-field",
    slug: "field-reports",
    name: "Field Reports",
    description:
      "Witness accounts, observation notes, and on-site documentation.",
    topics: 884,
    posts: 5013,
    sortOrder: 3,
  },
  {
    id: "cat-research",
    slug: "research-taxonomy",
    name: "Research & Taxonomy",
    description:
      "Classification frameworks, terminology proposals, and article discussion.",
    topics: 621,
    posts: 3844,
    sortOrder: 4,
  },
  {
    id: "cat-manatee",
    slug: "manatee-terminology-disputes",
    name: "Manatee Terminology Disputes",
    description:
      "Discussion of historical usage, public confusion, and definitional boundaries.",
    topics: 457,
    posts: 2901,
    sortOrder: 5,
  },
  {
    id: "cat-simulation",
    slug: "simulation-pathfinding-theory",
    name: "Simulation / Pathfinding Theory",
    description:
      "Speculative discussion of anomalous bovine placement and environmental logic.",
    topics: 238,
    posts: 1974,
    sortOrder: 6,
  },
  {
    id: "cat-methods",
    slug: "field-methods-equipment",
    name: "Field Methods & Equipment",
    description:
      "Observation protocols, photography standards, hydration, notebooks, and distance guidance.",
    topics: 511,
    posts: 3106,
    sortOrder: 7,
  },
  {
    id: "cat-announcements",
    slug: "site-announcements",
    name: "Site Announcements",
    description:
      "Moderator notices, registry policy changes, and public archive updates.",
    topics: 74,
    posts: 481,
    sortOrder: 8,
  },
];

export const sightings: Sighting[] = [
  {
    id: "sighting-0001",
    caseId: "SCAR-0001",
    title: "The Original Lake Cow",
    slug: "scar-0001-the-original-lake-cow",
    reporterHandle: "LakeWatcher",
    locationText: "Undisclosed lake",
    waterType: "Lake",
    observedAt: "2021-07-18",
    submittedAt: "2021-07-19",
    cowCount: 1,
    waterInvolvement: "Partially submerged",
    confidenceLevel: "Confirmed with evidence",
    cowBehavior: "Calm",
    energyDrinkPresent: "Unknown",
    description:
      "Subject was observed standing calmly within a lake environment. Witnesses reported no obvious distress, explanation, or conventional zoological framework sufficient to describe the event. The subject appeared neither distressed nor transitional. Witnesses described the animal as occupying the lake with unusual composure.",
    status: "confirmed",
    publicSummary:
      "Subject observed standing calmly within a lake environment. Witnesses reported no distress, explanation, or conventional zoological framework sufficient to describe the event.",
    moderatorNotesPublic:
      "Classification based on direct witness report and meaningful aquatic presence.",
    classificationNotes:
      "The subject displays bovine morphology and appears to occupy a meaningful aquatic context. Further review may consider duration of water contact, available photographic evidence, and witness consistency.",
    relatedThreadSlug: "case-scar-0001-original-lake-cow-discussion",
    evidence: [
      {
        id: "evidence-0001",
        src: "/images/original-lake-cow.png",
        alt: "Documentary style image of a cow standing in shallow lake water.",
        caption:
          "Figure 1. Subject displaying bovine morphology in a lacustrine context. Witnesses report the cow remained calm.",
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
      "Subject observed near pond perimeter during early morning field pass. No direct hoof-water contact was visible from the public road. Reporter noted repeated orientation toward water but could not confirm aquatic participation.",
    status: "under_review",
    publicSummary:
      "Subject observed near pond perimeter. Degree of water involvement remains unresolved.",
    moderatorNotesPublic:
      "Additional detail requested regarding distance from waterline.",
    classificationNotes:
      "A cow near water is not automatically a sea cow. This report remains under review because proximity may indicate a transitional aquatic event but does not establish registry inclusion on its own.",
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
      "Witness reports possible bovine presence near canal infrastructure. Photographic evidence is distant and partially obstructed by railings. Moderator review could not establish whether the subject was bovine, aquatic, or both.",
    status: "unverified",
    publicSummary:
      "Witness reports possible bovine presence near canal infrastructure. Evidence quality insufficient for confirmation.",
    classificationNotes:
      "Water involvement remains under evaluation. Available image detail does not meet the cow morphology and water visibility requirements currently used by the registry.",
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
      "Two cattle were observed grazing along a reservoir shelf with repeated hoof-water contact. The animals moved parallel to the waterline for approximately six minutes. No distress was reported.",
    status: "under_review",
    publicSummary:
      "Reported hoof-water contact along reservoir edge. Classification pending additional witness detail.",
    moderatorNotesPublic:
      "Review is focused on whether hoof-water contact was incidental or sustained.",
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
      "Multiple cattle stood in shallow floodwater after heavy rainfall. Moderator review determined that the presence of water was imposed by temporary pasture conditions rather than selected aquatic occupancy.",
    status: "misclassified",
    publicSummary:
      "Although water contact was confirmed, moderator review determined the event resulted from temporary pasture flooding rather than voluntary aquatic presence.",
    moderatorNotesPublic:
      "Retained as a public misclassification example for standards transparency.",
    classificationNotes:
      "Registry inclusion is not a claim of institutional recognition. In this instance, the cow-water relationship did not meet the meaningful aquatic context threshold.",
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
      "Single subject crossed a shallow river margin and paused midstream before returning to the bank. Witness report is detailed but lacks photographic evidence.",
    status: "under_review",
    publicSummary:
      "Witness described sustained hoof-water contact and brief midstream pause at a river bend.",
    classificationNotes:
      "This report has been accepted for preliminary review. Duration and intent remain open questions.",
    evidence: [],
  },
];

export const forumThreads: ForumThread[] = [
  {
    id: "thread-001",
    categorySlug: "research-taxonomy",
    slug: "what-level-of-water-involvement-qualifies-a-cow-as-a-sea-cow",
    title: "What level of water involvement qualifies a cow as a sea cow?",
    body: "We keep getting reports where the cow is close enough to make everyone nervous but not actually in the water. OP opinion: close to pond is not enough. Hoof in water is where the conversation starts.\n\nWhere I get stuck is the shoreline pause. If the animal walks down, stands at the edge, and keeps looking into the water for ten minutes, that feels different from ordinary grazing. Not confirmed, but not nothing either.\n\nEdit after coffee: I am not trying to reject borderline reports. I am trying to avoid every damp cow becoming SCAR material by lunch.",
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
    title: "Case SCAR-0001: Original Lake Cow discussion",
    body: "Case file is up. Please stop DMing me asking for the lake name. The witnesses asked us not to publish it and that is the end of that.\n\nWhat matters for the file: adult cow, lake water, calm posture, partial submersion, no obvious rescue situation. The thing that still bothers me is how settled it looks. Not crossing. Not panicking. Just there.\n\nModerator note is pinned below. Keep this thread on classification and evidence, not property guesses.",
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
    categorySlug: "manatee-terminology-disputes",
    slug: "manatee-usage-is-common-but-not-exhaustive",
    title: "Manatee usage is common, but not exhaustive",
    body: "Nobody here is confused about manatees. I am putting that in the first line because every outside link acts like we have never seen a children’s book.\n\nManatees and dugongs are commonly called sea cows. Accepted. The part I do not accept is the jump from common usage to closed category. If a witness says, quietly and with a photo, 'there was a cow in the water,' we need a term that does not make the report disappear.",
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
    categorySlug: "simulation-pathfinding-theory",
    slug: "could-open-world-pathfinding-explain-the-original-event",
    title: "Could open-world pathfinding explain the original event?",
    body: "Before this turns into a shouting thread: no, I am not saying reality is definitely a bad map.\n\nI am saying SCAR-0001 has the same feeling as an animal pathing into a place the designer thought it could not reach. Wrong side of fence, wrong side of waterline, calm as anything. Maybe that is just livestock. Maybe it is a boundary problem.\n\nUseful question: when ordinary pasture logic fails, do we record route anomaly as a field note?",
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
    categorySlug: "field-methods-equipment",
    slug: "i-accidentally-gave-my-cow-an-energy-beverage-field-reliability-notes",
    title: "I accidentally gave my cow an energy beverage. Field reliability notes?",
    body: "I know how this sounds. I left a canned energy drink on a fence post during repairs. Cow got to it before I did. Not the whole can, but enough that I am writing this instead of sleeping.\n\nAbout two hours later she walked into the stock pond up to the knees and stood there staring across it like she had an appointment. Calm, not distressed. Came out on her own.\n\nI am NOT saying the drink made a sea cow. I am asking where this belongs on the form. Field condition? Behavior note? Shame archive?",
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
    categorySlug: "simulation-pathfinding-theory",
    slug: "sea-cows-spotted-in-gta-6-trailer-frame-review-thread",
    title: "Sea cows spotted in GTA 6 trailer - frame review thread",
    body: "Thread for the trailer timestamps because my inbox is unusable.\n\nRules: frame review only. Do not submit game footage to the registry. Do not email the developers. Do not claim confirmation because a trailer cow is standing near coastal water for half a second.\n\nThat said, if large open-world sims are quietly allowing bovines to occupy water margins, that is interesting. It means dual-habitat behavior is becoming legible even in synthetic environments. Discuss without making it weird.",
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
    body: "Throwaway handle because two people here know my main.\n\nMy SO has been talking to an AI sea cow character for weeks. Not a joke account, not a meme bot. It has a whole backstory about living underwater part of the year and coming ashore when the moon is low. Yesterday my SO said the relationship feels 'more amphibious' than ours.\n\nI know this is barely a registry issue. I am asking the terminology side: if a synthetic sea cow has no field observation but is explicitly described as land/water capable, is it taxonomy-adjacent or just forum noise?",
    authorHandle: "TidalPersonal",
    status: "approved",
    viewsCount: 2402,
    repliesCount: 22,
    lastPostAt: "Today, 6:36 AM",
    lastPostAuthor: "NomenclatureUnit",
    createdAt: "2026-06-06, 4:30 AM",
  },
  {
    id: "thread-005",
    categorySlug: "general-discussion",
    slug: "terminology-proposal-aquatic-bovine-vs-sea-cow",
    title: "Terminology proposal: aquatic bovine vs. sea cow",
    body: "I keep trying to use aquatic bovine in conversation and people look at me like I brought paperwork to a cookout. Sea cow is what witnesses say first. Aquatic bovine is what we use when we want the report to survive review.\n\nProposal: public pages say sea cow. Case notes say aquatic bovine. Nobody has to pretend this is elegant.",
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
    body: "My neighbor says anything within sight of a pond counts. I disagree so strongly I made an account.\n\nA cow beside a pond is a cow beside a pond. A cow with both front hooves in the pond is at least a report. A cow standing in the pond like it pays taxes there is why this board exists.\n\nCan we write a threshold normal people can understand before the next wave of shoreline photos comes in?",
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
    body: "For a photograph to support confirmation, it should show both bovine morphology and visible water involvement. Distance is acceptable when the animal, waterline, and posture can be interpreted without excessive enlargement.",
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
    body: "Full swimming is not required for confirmation. Partial submersion can be sufficient when the subject appears to be occupying the water rather than merely crossing it.",
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
    categorySlug: "field-reports",
    slug: "field-report-template-for-new-sightings",
    title: "Field report template for new sightings",
    body: "Please include time, location, water type, cow count, water involvement, behavior, distance, and whether the observation was interrupted. Do not approach livestock or enter water to improve documentation.",
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
    categorySlug: "field-reports",
    slug: "how-to-document-hoof-water-contact",
    title: "How to document hoof-water contact",
    body: "When possible, document the waterline, the hoof position, and the surrounding dry ground in the same frame. A close crop of only the animal is usually less useful than a wider contextual image.",
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
    categorySlug: "field-reports",
    slug: "recommended-observation-distance",
    title: "Recommended observation distance?",
    body: "For safety and animal welfare, I have been using the rule that documentation ends where approach begins. Does anyone have a more formal distance recommendation for cattle in water?",
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
    categorySlug: "research-taxonomy",
    slug: "draft-classification-framework-for-aquatic-bovines",
    title: "Draft classification framework for aquatic bovines",
    body: "Version 1.0 separates proximity, hoof contact, partial submersion, and active aquatic transit. The unresolved question is whether intent can ever be inferred from still images.",
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
    categorySlug: "research-taxonomy",
    slug: "defining-lacustrine-bovine-behavior",
    title: "Defining lacustrine bovine behavior",
    body: "Lake cases appear to produce the strongest classification confidence because the water boundary is legible. River and canal cases introduce movement ambiguity.",
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
    categorySlug: "research-taxonomy",
    slug: "does-sea-require-saltwater",
    title: "Does \"sea\" require saltwater?",
    body: "The registry has historically accepted freshwater sightings because the common name refers to a disputed category, not a strict salinity condition. I think this should be stated more clearly in the guidelines.",
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
    categorySlug: "manatee-terminology-disputes",
    slug: "historical-usage-of-sea-cow-and-why-it-remains-incomplete",
    title: "Historical usage of \"sea cow\" and why it remains incomplete",
    body: "Existing usage is not being erased. It is being supplemented. The public should be able to describe sirenians and aquatic cattle without one category silencing the other.",
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
    categorySlug: "manatee-terminology-disputes",
    slug: "manatees-are-not-the-issue-the-issue-is-exclusion",
    title: "Manatees are not the issue. The issue is exclusion.",
    body: "No one here is anti-manatee. The problem is categorical exhaustion. A valid existing meaning does not prevent observers from documenting another meaningful use.",
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
    categorySlug: "manatee-terminology-disputes",
    slug: "common-names-can-support-parallel-meanings",
    title: "Common names can support parallel meanings",
    body: "Language has room for parallel common names. The registry's task is not to win a dictionary argument. It is to preserve records that would otherwise be dismissed as terminology errors.",
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
    categorySlug: "simulation-pathfinding-theory",
    slug: "when-livestock-chooses-the-water-error-feature-or-intent",
    title: "When livestock chooses the water: error, feature, or intent?",
    body: "Speculation should remain clearly labeled, but it may still be useful. Some cases seem to involve a route decision that the available environment does not fully explain.",
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
    categorySlug: "simulation-pathfinding-theory",
    slug: "environmental-boundary-failure-as-a-field-model",
    title: "Environmental boundary failure as a field model",
    body: "The model is not that reality is definitively simulated. The model is that barriers we assume to be behaviorally meaningful may not be meaningful to the subject.",
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
    categorySlug: "field-methods-equipment",
    slug: "field-notebook-template",
    title: "Field notebook template",
    body: "My current notebook columns are date, time, water type, estimated distance, animal count, water involvement, behavior, weather, and evidence status. Suggestions welcome.",
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
    categorySlug: "field-methods-equipment",
    slug: "hydration-and-witness-reliability-during-long-observations",
    title: "Hydration and witness reliability during long observations",
    body: "Field conditions should be recorded without implying that they invalidate testimony. Weather, fatigue, hydration, distance, and energy beverages all affect observation quality.",
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
    categorySlug: "field-methods-equipment",
    slug: "camera-zoom-recommendations-for-distant-bovine-subjects",
    title: "Camera zoom recommendations for distant bovine subjects",
    body: "A stable wide shot with waterline context is often better than a shaky zoom crop. If you capture both, submit both.",
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
    categorySlug: "site-announcements",
    slug: "registry-inclusion-framework-v1-0-now-published",
    title: "Registry inclusion framework v1.0 now published",
    body: "The public article now describes pending, under review, confirmed, unverified, misclassified, and archived statuses. Please reference it when discussing borderline submissions.",
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
    categorySlug: "site-announcements",
    slug: "new-status-labels-added-to-public-case-files",
    title: "New status labels added to public case files",
    body: "Status labels have been revised for clarity. Misclassified cases may remain public when they help explain registry boundaries.",
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

export const forumReplies: ForumReply[] = [
  {
    id: "reply-001",
    threadSlug: "what-level-of-water-involvement-qualifies-a-cow-as-a-sea-cow",
    body: "Agree. If we accept every pond-adjacent cow, the registry becomes useless by Tuesday. Standing in water with no distress is the line where I start paying attention.",
    authorHandle: "LakeWatcher",
    status: "approved",
    createdAt: "Today, 8:02 AM",
  },
  {
    id: "reply-002",
    threadSlug: "what-level-of-water-involvement-qualifies-a-cow-as-a-sea-cow",
    body: "Contact and participation need to be separate columns. A hoof can slip. A cow does not accidentally spend twelve minutes up to the knees unless something else is going on.",
    authorHandle: "TaxonomyDesk",
    status: "approved",
    createdAt: "Today, 9:14 AM",
  },
  {
    id: "reply-003",
    threadSlug: "case-scar-0001-original-lake-cow-discussion",
    body: "Moderator note: SCAR-0001 stays confirmed. The witnesses established meaningful aquatic presence. Evidence publication is a separate issue, and no, the lake name is not being posted.",
    authorHandle: "Moderator",
    status: "approved",
    createdAt: "Today, 8:47 AM",
    isModerator: true,
  },
  {
    id: "reply-004",
    threadSlug: "case-scar-0001-original-lake-cow-discussion",
    body: "The calm is the part people keep skipping. Distressed cow in floodwater is an animal welfare event. Calm cow occupying a lake is a classification problem.",
    authorHandle: "ArchivistM",
    status: "approved",
    createdAt: "Yesterday, 7:26 PM",
  },
  {
    id: "reply-005",
    threadSlug: "manatee-usage-is-common-but-not-exhaustive",
    body: "Exactly. We do not need a fight with manatee people. We need a drawer for the reports everyone keeps trying to throw away.",
    authorHandle: "CanalDesk",
    status: "approved",
    createdAt: "Yesterday, 6:33 PM",
  },
  {
    id: "reply-006",
    threadSlug: "could-open-world-pathfinding-explain-the-original-event",
    body: "Speculation cannot confirm a case, but it can give us better questions. How did it get there? Why did it stay? What boundary did the cow ignore that we thought mattered?",
    authorHandle: "BoundaryLayer",
    status: "approved",
    createdAt: "Yesterday, 5:17 PM",
  },
  {
    id: "reply-007",
    threadSlug: "i-accidentally-gave-my-cow-an-energy-beverage-field-reliability-notes",
    body: "Log it under field conditions AND behavior. It does not invalidate the observation. It does mean the timeline has a very strange sentence in it.",
    authorHandle: "EvidenceDesk",
    status: "approved",
    createdAt: "Today, 7:42 AM",
  },
  {
    id: "reply-008",
    threadSlug: "sea-cows-spotted-in-gta-6-trailer-frame-review-thread",
    body: "Moderator note: trailer frames are not registry evidence. Keep it in simulation/pathfinding. If you submit a screenshot from a game as SCAR evidence, it will be rejected and screenshotted internally for training.",
    authorHandle: "Moderator",
    status: "approved",
    createdAt: "Today, 7:11 AM",
    isModerator: true,
  },
  {
    id: "reply-009",
    threadSlug: "my-so-left-me-for-an-ai-seacow",
    body: "Synthetic sea cow can be a terminology thread. It cannot be a case file. Also, emotional amphibiousness is not a water involvement category, though I admit the phrase has ruined my afternoon.",
    authorHandle: "NomenclatureUnit",
    status: "approved",
    createdAt: "Today, 6:36 AM",
  },
];

export const articles: Article[] = [
  {
    id: "article-001",
    slug: "on-the-misclassification-of-aquatic-bovines",
    title: "On the Misclassification of Aquatic Bovines",
    subtitle:
      "A preliminary framework for distinguishing conventional sirenian usage from aquatic bovine field observations.",
    authorName: "Editorial Board",
    category: "Taxonomy",
    abstract:
      "The term sea cow has historically been applied to sirenians, including manatees and dugongs. This paper argues that such usage, while common, does not exhaust the category. We propose a parallel classification for terrestrial cattle observed in meaningful aquatic contexts and outline preliminary criteria for registry inclusion.",
    readingTime: "8 min",
    publishedAt: "June 1, 2026",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "The public record contains an unresolved terminology gap. Observers continue to report terrestrial cattle in aquatic environments, yet available common language frequently redirects those observations toward sirenians or dismisses them as error.",
          "This registry begins from a narrower claim: conventional terminology does not exhaust observed reality. A cow meaningfully in water requires review.",
        ],
      },
      {
        heading: "Conventional Usage",
        paragraphs: [
          "Manatees and dugongs are commonly called sea cows. This registry recognizes that usage. It does not seek to remove or diminish it.",
          "The question is whether an established common name can support an additional, field-observation use when the subject displays bovine morphology in an aquatic context.",
        ],
      },
      {
        heading: "The Aquatic Bovine Problem",
        paragraphs: [
          "Reports involving cattle at lakes, ponds, rivers, canals, reservoirs, and flooded fields cannot be evaluated by terminology alone. They require case-level assessment of water involvement, behavior, evidence quality, and witness detail.",
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
          "SCAR-0001 remains the registry's reference case because the subject was observed standing calmly within a lake environment. The animal appeared neither distressed nor transitional.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "The category remains open. Registry inclusion is not a claim of institutional recognition; it is a preservation standard for observations that deserve structured review.",
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
      "A cow merely near a pond should not automatically qualify for registry inclusion. This note defines near-water events, hoof-contact events, partial submersion events, and active aquatic transit.",
    readingTime: "6 min",
    publishedAt: "May 28, 2026",
    sections: [
      {
        heading: "The Proximity Problem",
        paragraphs: [
          "Many cattle occupy landscapes that include water. Proximity is therefore common and not independently remarkable. A near-water event should be recorded but normally held below confirmation.",
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
    subtitle: "Why common usage need not foreclose additional classification.",
    authorName: "Taxonomy Desk",
    category: "Terminology",
    abstract:
      "This registry does not dispute that manatees and dugongs are commonly called sea cows. It disputes the assumption that the term is therefore closed.",
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
          "The dispute begins when common usage is treated as exhaustive. A familiar meaning can be valid without preventing documentation of another observed category.",
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
          "The site uses sea cow because witnesses use it, because bovine morphology is central, and because the water involvement is not incidental to the report.",
        ],
      },
      {
        heading: "Recommendations for Future Discussion",
        paragraphs: [
          "Discussion should remain calm. Manatees are not the issue. The issue is exclusion.",
        ],
      },
    ],
  },
  {
    id: "article-004",
    slug: "case-scar-0001-the-original-lake-cow",
    title: "Case SCAR-0001: The Original Lake Cow",
    subtitle:
      "A review of the sighting that prompted formal registry development.",
    authorName: "Case File Unit",
    category: "Case Analysis",
    abstract:
      "A formal review of the original lake case, including water type, subject behavior, witness count, evidence status, and classification rationale.",
    readingTime: "7 min",
    publishedAt: "May 16, 2026",
    sections: [
      {
        heading: "Summary",
        paragraphs: [
          "SCAR-0001 concerns an adult bovine of unknown breed observed in an undisclosed lake. The water type was lake. The water involvement was standing in water, with partial submersion visible by witness report.",
        ],
      },
      {
        heading: "Field Record",
        paragraphs: [
          "Location: undisclosed lake. Subject: adult bovine, exact breed unknown. Witness count: 2. Duration: unknown. Subject behavior: calm. Evidence status: photographic evidence pending upload. Classification: confirmed.",
        ],
      },
      {
        heading: "Behavioral Notes",
        paragraphs: [
          "The subject appeared neither distressed nor transitional. Witnesses described the animal as occupying the lake with unusual composure.",
        ],
      },
      {
        heading: "Classification",
        paragraphs: [
          "The case is confirmed because it establishes bovine morphology, meaningful aquatic context, and credible witness detail. It remains the reference point for later partial-submersion review.",
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
      "Surprise, distance, weather, hydration, caffeine, and prior expectations can affect observation quality. These factors should be recorded without automatically invalidating testimony.",
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
          "Weather, glare, fatigue, and distance can alter interpretation. The presence of canned energy beverages should be recorded when relevant, not because it invalidates testimony, but because field conditions matter.",
        ],
      },
      {
        heading: "Prior Expectations",
        paragraphs: [
          "Observers familiar with manatee terminology may hesitate to describe a cow in water as a sea cow. This hesitation should be understood as linguistic pressure, not as evidence weakness.",
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
          "Some reports describe cattle appearing in locations that conventional pasture logic would not predict. The model begins by asking how a subject reached water and why it remained there.",
        ],
      },
      {
        heading: "Unintended Routes",
        paragraphs: [
          "Whether by intent, error, or route-selection anomaly, the subject reached a location that conventional pasture logic would not predict.",
        ],
      },
      {
        heading: "Water Boundaries",
        paragraphs: [
          "A boundary that appears meaningful to an observer may not be meaningful to the subject. This is a field problem before it is a metaphysical one.",
        ],
      },
      {
        heading: "Emergent Behavior",
        paragraphs: [
          "Speculative models should not determine case status, but they can help moderators ask consistent questions when the route into water is unexplained.",
        ],
      },
      {
        heading: "Reality as a Poorly Documented Simulation",
        paragraphs: [
          "This phrase is used descriptively, not doctrinally. The registry makes no claim that reality is simulated. It does claim that documentation is incomplete.",
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
          "The framework exists to make registry inclusion consistent. It allows the public archive to accept uncertainty without treating every report as confirmed.",
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
          "Misclassified cases may remain public when they clarify boundaries. Rejected submissions are not shown publicly.",
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
        ["Misclassified", "Water contact exists, but case does not meet registry criteria."],
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
          "Sea cow is widely used for manatees and dugongs. The registry acknowledges this and does not seek to erase those animals from common language.",
        ],
      },
      {
        heading: "Observed Gap",
        paragraphs: [
          "The site recognizes existing sirenian usage. It does not seek to erase manatees or dugongs from common language. It seeks to preserve records of aquatic bovine observations that current terminology fails to adequately describe.",
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
      "Thread submitted to Research & Taxonomy. Requests clarification on freshwater terminology.",
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
  return getPublicSightings().slice(0, count);
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
