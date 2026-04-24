import type { SiteProfile } from "@/data/types";

const proofItems = [
  "Formula Student AI",
  "MPC tracking",
  "Vehicle dynamics",
  "CAV systems"
];

export function IntroSection({ profile }: { profile: SiteProfile }) {
  const metadata = [
    {
      label: "Availability",
      value: profile.availability
    },
    {
      label: "Focus",
      value: profile.focus.slice(0, 3).join(" / ")
    },
    {
      label: "Location",
      value: profile.location
    },
    {
      label: "Proof",
      value: proofItems.join(" / ")
    }
  ];

  return (
    <div className="grid gap-10 py-3 lg:grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.75fr)] lg:items-start">
      <div className="space-y-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
          Precision editorial dossier / {profile.name}
        </p>

        <div className="space-y-6">
          <h1 className="max-w-4xl text-5xl font-medium leading-[1.02] text-text md:text-7xl">
            Autonomous systems engineering with vehicle dynamics, planning, and control evidence.
          </h1>
          <div className="max-w-3xl space-y-4 border-l border-accent/45 pl-5">
            <p className="text-xl leading-8 text-text md:text-2xl">
              {profile.name} - {profile.role}
            </p>
            <p className="max-w-2xl text-base leading-8 text-muted">{profile.intro}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 border-y border-line py-3">
          {proofItems.map((item) => (
            <span
              key={item}
              className="rounded-[3px] border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-text/80"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-6">
          <a
            href="#projects"
            className="inline-flex border-b border-accent pb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-text transition-colors hover:border-[var(--color-accent-hover)] hover:text-[var(--color-accent-hover)] focus:outline-none focus:ring-2 focus:ring-accent/20"
          >
            Read project dossiers
          </a>
          <a
            href="#resume"
            className="inline-flex border-b border-line pb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:border-accent/60 hover:text-text focus:outline-none focus:ring-2 focus:ring-accent/20"
          >
            Resume handoff
          </a>
        </div>
      </div>

      <aside className="border-y border-line lg:mt-3 lg:border-l lg:border-y-0 lg:pl-5">
        <div className="divide-y divide-line">
          {metadata.map((item) => (
            <div key={item.label} className="py-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
                {item.label}
              </p>
              <p className="mt-2 text-sm leading-6 text-text/85">{item.value}</p>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
