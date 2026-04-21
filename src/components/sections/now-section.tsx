import { SurfaceCard } from "@/components/ui/surface-card";
import type { NowItem } from "@/data/types";

export function NowSection({ items }: { items: NowItem[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <SurfaceCard key={item.id}>
          <p className="text-sm font-medium text-text">{item.title}</p>
          <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
        </SurfaceCard>
      ))}
    </div>
  );
}
