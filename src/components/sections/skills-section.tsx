import { SurfaceCard } from "@/components/ui/surface-card";
import type { SkillGroup } from "@/data/types";

export function SkillsSection({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {groups
        .slice()
        .sort((left, right) => left.order - right.order)
        .map((group) => (
          <SurfaceCard key={group.id}>
            <p className="text-xs uppercase tracking-[0.28em] text-muted">{group.title}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-[3px] border border-line px-3 py-1 text-sm text-text/85"
                >
                  {item}
                </span>
              ))}
            </div>
          </SurfaceCard>
        ))}
    </div>
  );
}
