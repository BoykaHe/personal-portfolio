import { SurfaceCard } from "@/components/ui/surface-card";
import type { Project } from "@/data/types";

export function ProjectReadmeTab({ project }: { project: Project }) {
  return (
    <SurfaceCard className="space-y-5">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          Markdown placeholder
        </p>
        <p className="mt-3 text-sm leading-7 text-muted">
          The README renderer will be connected in a later phase. This tab already points to the
          future source.
        </p>
      </div>

      {project.readmeSource.kind === "inline" ? (
        <pre className="overflow-x-auto rounded-md border border-line bg-bg/70 p-4 font-mono text-xs leading-6 text-text/85">
          {project.readmeSource.content}
        </pre>
      ) : null}

      {project.readmeSource.kind === "local-file" ? (
        <div className="rounded-md border border-line bg-bg/50 p-4 font-mono text-xs text-muted">
          Local markdown source: {project.readmeSource.path}
        </div>
      ) : null}

      {project.readmeSource.kind === "remote-url" ? (
        <div className="rounded-md border border-line bg-bg/50 p-4 font-mono text-xs text-muted">
          Remote markdown source: {project.readmeSource.url}
        </div>
      ) : null}
    </SurfaceCard>
  );
}
