import { SurfaceCard } from "@/components/ui/surface-card";
import type { GitHubActivitySnapshot } from "@/data/types";

export function GitHubActivitySection({
  snapshot,
  title
}: {
  snapshot: GitHubActivitySnapshot;
  title: string;
}) {
  return (
    <SurfaceCard className="space-y-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-muted">{title}</p>
          <h3 className="mt-2 text-2xl font-semibold text-text">{snapshot.username}</h3>
        </div>
        <div className="text-sm text-muted">
          <p>{snapshot.rangeLabel}</p>
          <p>{snapshot.totalContributions} contributions</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="inline-grid grid-flow-col gap-1">
          {snapshot.weeks.map((week) => (
            <div key={week.weekStart} className="grid grid-rows-7 gap-1">
              {week.days.map((day) => (
                <span
                  key={day.date}
                  title={`${day.date}: ${day.count} contributions`}
                  className="h-3 w-3 rounded-[4px] border border-black/10"
                  style={{ backgroundColor: snapshot.palette[day.level] }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {snapshot.repositories.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            className="rounded-[5px] border border-line bg-panel/35 p-4 transition-colors hover:border-accent/45 hover:bg-[var(--color-accent-bg-soft)]"
          >
            <p className="text-sm font-medium text-text">{repo.name}</p>
            <p className="mt-2 text-sm leading-6 text-muted">{repo.description}</p>
          </a>
        ))}
      </div>
    </SurfaceCard>
  );
}
