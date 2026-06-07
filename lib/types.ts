export type SightingStatus =
  | "pending"
  | "under_review"
  | "confirmed"
  | "unverified"
  | "misclassified"
  | "archived"
  | "rejected";

export type ForumStatus = "pending" | "approved" | "rejected" | "archived";

export type Sighting = {
  id: string;
  caseId: string;
  title: string;
  slug: string;
  reporterHandle: string;
  locationText: string;
  waterType: string;
  observedAt: string;
  submittedAt: string;
  cowCount: number;
  waterInvolvement: string;
  confidenceLevel: string;
  cowBehavior: string;
  energyDrinkPresent: string;
  description: string;
  status: SightingStatus;
  publicSummary: string;
  moderatorNotesPublic?: string;
  classificationNotes: string;
  relatedThreadSlug?: string;
  evidence: EvidenceItem[];
};

export type EvidenceItem = {
  id: string;
  src: string;
  alt: string;
  caption: string;
};

export type ForumCategory = {
  id: string;
  slug: string;
  name: string;
  description: string;
  topics: number;
  posts: number;
  sortOrder: number;
};

export type ForumThread = {
  id: string;
  categorySlug: string;
  slug: string;
  title: string;
  body: string;
  authorHandle: string;
  status: ForumStatus;
  isPinned?: boolean;
  isLocked?: boolean;
  hasModeratorNote?: boolean;
  viewsCount: number;
  repliesCount: number;
  lastPostAt: string;
  lastPostAuthor: string;
  createdAt: string;
};

export type ForumReply = {
  id: string;
  threadSlug: string;
  body: string;
  authorHandle: string;
  status: ForumStatus;
  createdAt: string;
  isModerator?: boolean;
};

export type Article = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  authorName: string;
  category: string;
  abstract: string;
  readingTime: string;
  publishedAt: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
  table?: {
    headers: string[];
    rows: string[][];
  };
  references?: string[];
};

export type AdminItem = {
  id: string;
  type: "Sighting" | "Thread" | "Reply";
  title: string;
  submittedBy: string;
  submittedAt: string;
  status: SightingStatus | ForumStatus;
  summary: string;
};
