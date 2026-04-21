import { SurfaceCard } from "@/components/ui/surface-card";
import type { ExperienceItem } from "@/data/types";

export function ExperiencesSection({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <SurfaceCard key={item.id}>
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.28em] text-muted">{item.period}</p>
              <h3 className="text-lg font-semibold text-text">
                {item.role} - {item.organisation}
              </h3>
              <p className="text-sm text-muted">{item.location}</p>
            </div>
            <div className="max-w-2xl space-y-3">
              <p className="text-sm leading-7 text-muted">{item.summary}</p>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/6 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </SurfaceCard>
      ))}
    </div>
  );
}
