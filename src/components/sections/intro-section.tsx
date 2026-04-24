import type { Project, SiteProfile } from "@/data/types";

const proofItems = [
  "MSc Vehicle Engineering",
  "Formula Student AI",
  "MPC tracking",
  "Vehicle dynamics",
  "CAV systems"
];

type IntroSectionProps = {
  profile: SiteProfile;
  featuredProject?: Project;
};

export function IntroSection({ profile, featuredProject }: IntroSectionProps) {
  const capabilityRows = [
    {
      label: "Autonomous systems",
      value: profile.focus[0] ?? "Autonomous vehicle systems"
    },
    {
      label: "Vehicle dynamics",
      value: "Vehicle dynamics, chassis, suspension, and steering design"
    },
    {
      label: "Path planning / control",
      value: profile.focus[1] ?? "Path planning and tracking control"
    }
  ];

  const statusRows = [
    {
      label: "Availability",
      value: profile.availability
    },
    {
      label: "Location",
      value: profile.location
    },
    {
      label: "Project evidence",
      value: proofItems.join(" / ")
    }
  ];

  return (
    <div className="grid gap-3 lg:min-h-[34rem] lg:grid-cols-[minmax(0,1.25fr)_minmax(19rem,0.75fr)] lg:grid-rows-[auto_1fr_auto]">
      <div className="flex flex-col justify-between border-y border-line py-7 lg:row-span-2 lg:pr-8">
        <div className="space-y-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
            Autonomous systems dossier / {profile.name}
          </p>

          <div className="space-y-5">
            <h1 className="max-w-5xl text-5xl font-medium leading-none text-text md:text-7xl lg:text-8xl">
              Boyka He
            </h1>
            <p className="max-w-3xl text-2xl font-medium leading-tight text-text md:text-4xl">
              Autonomous systems project engineer working across vehicle dynamics, path planning /
              control, and project evidence.
            </p>
          </div>
        </div>

        <div className="mt-10 max-w-3xl border-l border-accent/45 pl-5">
          <p className="text-lg leading-8 text-text md:text-xl">{profile.role}</p>
          <p className="mt-4 text-base leading-8 text-muted">{profile.intro}</p>
        </div>
      </div>

      <aside className="rounded-[5px] border border-line bg-[var(--color-panel-soft)] p-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
          What I can do
        </p>
        <div className="mt-5 divide-y divide-line">
          {capabilityRows.map((item) => (
            <div key={item.label} className="py-4 first:pt-0 last:pb-0">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                {item.label}
              </p>
              <p className="mt-2 text-sm leading-6 text-text/90">{item.value}</p>
            </div>
          ))}
        </div>
      </aside>

      <article className="rounded-[5px] border border-line bg-[var(--color-panel-strong)] p-5 transition-colors hover:border-accent/45">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
          What I have built / project evidence
        </p>
        <h2 className="mt-4 text-xl font-medium leading-tight text-text">
          {featuredProject?.title ?? "Formula Student Autonomous Car"}
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted">
          {featuredProject?.highlights[0] ?? "Path planning, vehicle dynamics, and tracking control work."}
        </p>
        <a
          href="#projects"
          className="mt-6 inline-flex border-b border-line pb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-text transition-colors hover:border-accent/70 hover:text-[var(--color-accent-hover)] focus:outline-none focus:ring-2 focus:ring-accent/20"
        >
          Open featured dossier
        </a>
      </article>

      <div className="grid gap-4 border-y border-line py-4 lg:col-span-2 lg:grid-cols-[minmax(15rem,0.55fr)_minmax(0,1.45fr)] lg:items-center">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
            Next step
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex min-h-10 items-center rounded-[4px] border border-accent/70 px-4 font-mono text-[11px] uppercase tracking-[0.16em] text-text transition-colors hover:bg-[var(--color-accent-bg-soft)] hover:text-[var(--color-accent-hover)] focus:outline-none focus:ring-2 focus:ring-accent/20"
            >
              View project dossiers
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-10 items-center rounded-[4px] border border-line px-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted transition-colors hover:border-accent/55 hover:text-text focus:outline-none focus:ring-2 focus:ring-accent/20"
            >
              Resume / Contact
            </a>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {proofItems.map((item) => (
            <div key={item} className="border-t border-line pt-3 lg:border-l lg:border-t-0 lg:pl-4 lg:pt-0">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      <aside className="lg:col-span-2">
        <div className="grid gap-0 border-b border-line lg:grid-cols-3">
          {statusRows.map((item, index) => (
            <div
              key={item.label}
              className={[
                "border-t border-line py-4",
                index === 0 ? "" : "lg:border-l lg:pl-5",
                index === 0 ? "" : "lg:pr-0"
              ].join(" ")}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
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
