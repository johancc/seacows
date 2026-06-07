import { cn } from "@/lib/utils";
import type { ForumThread, SightingStatus } from "@/lib/types";
import { statusLabels } from "@/lib/data";

const statusClasses: Record<SightingStatus, string> = {
  confirmed: "border-[#9bb69f] bg-[#e7efe8] text-[var(--green)]",
  under_review: "border-[#8da7c4] bg-[#e8edf5] text-[var(--amber)]",
  unverified: "border-[#b6bcc1] bg-[#eceff1] text-[var(--slate)]",
  misclassified: "border-[#c39aa2] bg-[#f2e3e6] text-[var(--burgundy)]",
  pending: "border-[#9baabb] bg-[#e8edf2] text-[#405168]",
  archived: "border-[#9fb1b1] bg-[#e2eceb] text-[var(--charcoal)]",
  rejected: "border-[#c98e8e] bg-[#f2dddd] text-[#8f1f1f]",
};

export function SightingStatusBadge({ status }: { status: SightingStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border px-2 py-0.5 text-[0.68rem] font-bold uppercase tracking-[0.08em]",
        statusClasses[status],
      )}
    >
      {statusLabels[status]}
    </span>
  );
}

export function ThreadBadges({ thread }: { thread: ForumThread }) {
  const badges = [
    thread.isPinned ? "Sticky" : null,
    thread.isLocked ? "Locked" : null,
    thread.hasModeratorNote ? "Mod Note" : null,
    thread.status === "pending" ? "Mod Queue" : null,
  ].filter(Boolean);

  if (!badges.length) {
    return null;
  }

  return (
    <span className="inline-flex flex-wrap gap-1">
      {badges.map((badge) => (
        <span
          className="rounded-sm border border-[var(--line)] bg-[var(--paper-strong)] px-1.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-[var(--muted)]"
          key={badge}
        >
          {badge}
        </span>
      ))}
    </span>
  );
}
