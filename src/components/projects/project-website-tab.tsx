import { SurfaceCard } from "@/components/ui/surface-card";
import type { Project } from "@/data/types";

export function ProjectWebsiteTab({ project }: { project: Project }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {project.links.map((link) => (
        <SurfaceCard key={link.href}>
          <p className="text-xs uppercase tracking-[0.28em] text-muted">{link.label}</p>
          <a href={link.href} className="mt-3 block text-sm leading-7 text-text hover:text-accent">
            {link.href}
          </a>
        </SurfaceCard>
      ))}
    </div>
  );
}
