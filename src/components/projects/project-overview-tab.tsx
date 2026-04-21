import { SurfaceCard } from "@/components/ui/surface-card";
import type { Project } from "@/data/types";

export function ProjectOverviewTab({ project }: { project: Project }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
      <SurfaceCard className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-muted">Project goal</p>
          <p className="mt-3 text-sm leading-7 text-muted">{project.problemSolved}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-muted">Highlights</p>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-muted">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </SurfaceCard>

      <div className="grid gap-4">
        <SurfaceCard>
          <p className="text-xs uppercase tracking-[0.28em] text-muted">Stack</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="rounded-full border border-white/6 px-3 py-1 text-sm text-text/85">
                {item}
              </span>
            ))}
          </div>
        </SurfaceCard>

        <SurfaceCard>
          <p className="text-xs uppercase tracking-[0.28em] text-muted">Responsibilities</p>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
            {project.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SurfaceCard>
      </div>
    </div>
  );
}
