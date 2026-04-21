import type { ProjectStatus } from "@/data/types";

const statusMap: Record<ProjectStatus, string> = {
  live: "Live",
  building: "Building",
  archived: "Archived"
};

export function StatusPill({ status }: { status: ProjectStatus }) {
  return (
    <span className="inline-flex rounded-full border border-line px-3 py-1 text-xs uppercase tracking-[0.24em] text-muted">
      {statusMap[status]}
    </span>
  );
}
