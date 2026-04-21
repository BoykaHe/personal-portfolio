import { SurfaceCard } from "@/components/ui/surface-card";
import type { Project } from "@/data/types";

export function ProjectReadmeTab({ project }: { project: Project }) {
  return (
    <SurfaceCard className="space-y-4">
      <div>
        <p className="text-xs uppercase tracking-[0.28em] text-muted">Markdown placeholder</p>
        <p className="mt-3 text-sm leading-7 text-muted">
          The README renderer will be connected in a later phase. This tab already points to the
          future source.
        </p>
      </div>

      {project.readmeSource.kind === "inline" ? (
        <pre className="overflow-x-auto rounded-2xl border border-white/6 bg-black/20 p-4 text-sm leading-7 text-text/85">
          {project.readmeSource.content}
        </pre>
      ) : null}

      {project.readmeSource.kind === "local-file" ? (
        <div className="rounded-2xl border border-white/6 bg-white/[0.02] p-4 text-sm text-muted">
          Local markdown source: {project.readmeSource.path}
        </div>
      ) : null}

      {project.readmeSource.kind === "remote-url" ? (
        <div className="rounded-2xl border border-white/6 bg-white/[0.02] p-4 text-sm text-muted">
          Remote markdown source: {project.readmeSource.url}
        </div>
      ) : null}
    </SurfaceCard>
  );
}
