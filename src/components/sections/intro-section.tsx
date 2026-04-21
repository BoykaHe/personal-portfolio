import { SurfaceCard } from "@/components/ui/surface-card";
import type { SiteProfile } from "@/data/types";

export function IntroSection({ profile }: { profile: SiteProfile }) {
  return (
    <SurfaceCard className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
      <div className="space-y-5">
        <p className="text-xs uppercase tracking-[0.32em] text-muted">Personal introduction</p>
        <div className="space-y-3">
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-text md:text-5xl">
            {profile.name}
          </h1>
          <p className="text-lg text-text/85">{profile.role}</p>
          <p className="max-w-2xl text-base leading-7 text-muted">{profile.tagline}</p>
        </div>
      </div>

      <div className="space-y-4 rounded-2xl border border-white/6 bg-white/[0.02] p-5">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-muted">Focus</p>
          <ul className="mt-3 space-y-2 text-sm text-text/85">
            {profile.focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-2 text-sm text-muted">
          <p>{profile.location}</p>
          <p>{profile.availability}</p>
        </div>
        <p className="text-sm leading-7 text-muted">{profile.intro}</p>
      </div>
    </SurfaceCard>
  );
}
