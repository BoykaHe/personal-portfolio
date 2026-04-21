import Link from "next/link";

import { StatusPill } from "@/components/ui/status-pill";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { Locale, Project } from "@/data/types";

type ProjectCardProps = {
  locale: Locale;
  project: Project;
  detailLabel: string;
};

export function ProjectCard({ locale, project, detailLabel }: ProjectCardProps) {
  return (
    <SurfaceCard className="flex h-full flex-col justify-between">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-muted">{project.timeframe}</p>
            <h3 className="mt-2 text-xl font-semibold text-text">{project.title}</h3>
          </div>
          <StatusPill status={project.status} />
        </div>
        <p className="text-sm leading-7 text-muted">{project.summary}</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/6 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <Link
          href={`/${locale}/projects/${project.slug}`}
          className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-text hover:bg-white/5"
        >
          {detailLabel}
        </Link>
      </div>
    </SurfaceCard>
  );
}
