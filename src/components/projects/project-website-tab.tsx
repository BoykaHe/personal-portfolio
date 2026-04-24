import { SurfaceCard } from "@/components/ui/surface-card";
import type { Project } from "@/data/types";

export function ProjectWebsiteTab({ project }: { project: Project }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {project.links.map((link, index) => (
        <SurfaceCard key={`${link.href}-${link.label}-${index}`}>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            {link.label}
          </p>
          <a
            href={link.href}
            className="mt-3 block border-b border-line pb-1 font-mono text-xs leading-7 text-text hover:border-accent/60 hover:text-accent"
          >
            {link.href}
          </a>
        </SurfaceCard>
      ))}
    </div>
  );
}
