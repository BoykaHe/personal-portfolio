import type { ProjectStatus } from "@/data/types";

const statusMap: Record<ProjectStatus, string> = {
  live: "Live",
  building: "Building",
  archived: "Archived"
};

export function StatusPill({ status }: { status: ProjectStatus }) {
  return (
    <span className="inline-flex rounded-[3px] border border-line bg-[var(--color-panel-soft)] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
      {statusMap[status]}
    </span>
  );
}
