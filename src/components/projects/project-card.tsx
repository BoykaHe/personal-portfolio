import Link from "next/link";

import { StatusPill } from "@/components/ui/status-pill";
import type { Locale, Project } from "@/data/types";

type ProjectCardProps = {
  locale: Locale;
  project: Project;
  detailLabel: string;
  variant?: "default" | "featured" | "compact";
  badgeLimit?: number;
};

export function ProjectCard({
  locale,
  project,
  detailLabel,
  variant = "default",
  badgeLimit = 4
}: ProjectCardProps) {
  const visibleStack = project.stack.slice(0, badgeLimit);
  const hiddenStackCount = Math.max(project.stack.length - visibleStack.length, 0);
  const isFeatured = variant === "featured";
  const isCompact = variant === "compact";
  const contribution = project.responsibilities[0];
  const evidence = project.highlights[0];
  const actionLabel = detailLabel.toLowerCase().includes("details")
    ? "Open dossier"
    : detailLabel;

  if (isFeatured) {
    return (
      <article className="group flex h-full flex-col border border-line bg-[var(--color-panel-soft)] p-5 transition duration-150 hover:-translate-y-px hover:border-accent/45 hover:bg-[var(--color-panel-strong)] focus-within:border-accent/60 focus-within:bg-[var(--color-panel-strong)] motion-reduce:transform-none md:p-7">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Dominant dossier / {project.timeframe}
            </p>
            <h3 className="max-w-4xl text-3xl font-medium leading-[1.06] text-text md:text-5xl">
              {project.title}
            </h3>
          </div>
          <StatusPill status={project.status} />
        </div>

        <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--color-body)]">
          {project.summary}
        </p>

        <div className="mt-7 grid gap-5 border-y border-line py-5 md:grid-cols-2">
          <DossierCue label="Contribution cue" value={contribution} />
          <DossierCue label="Evidence path" value={evidence} />
        </div>

        <div className="mt-7 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <StackTags stack={project.stack} limit={badgeLimit} />
          <Link
            href={`/${locale}/projects/${project.slug}`}
            className="inline-flex self-start border-b border-accent pb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-text transition-colors hover:border-[var(--color-accent-hover)] hover:text-[var(--color-accent-hover)] focus:outline-none focus:ring-2 focus:ring-accent/20 md:self-auto"
          >
            {actionLabel}
          </Link>
        </div>
      </article>
    );
  }

  if (isCompact) {
    return (
      <article className="group border-t border-line py-5 transition duration-150 hover:-translate-y-px hover:border-accent/45 hover:bg-[var(--color-accent-bg-soft)] focus-within:border-accent/60 focus-within:bg-[var(--color-accent-bg-soft)] motion-reduce:transform-none sm:px-4 lg:px-0">
        <div className="flex items-start justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            {project.timeframe}
          </p>
          <StatusPill status={project.status} />
        </div>

        <h3 className="mt-4 text-xl font-medium leading-tight text-text">{project.title}</h3>
        <p className="mt-4 text-sm leading-7 text-muted">{project.summary}</p>

        {contribution ? (
          <div className="mt-5 border-l border-line pl-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              Contribution
            </p>
            <p className="mt-2 text-sm leading-7 text-text/85">{contribution}</p>
          </div>
        ) : null}

        <div className="mt-6 flex flex-col gap-5">
          <StackTags stack={project.stack} limit={badgeLimit} />
          <Link
            href={`/${locale}/projects/${project.slug}`}
            className="inline-flex self-start border-b border-line pb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors group-hover:border-accent/60 group-hover:text-text focus:outline-none focus:ring-2 focus:ring-accent/20"
          >
            {actionLabel}
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article
      className={[
        "group flex h-full flex-col justify-between border-t border-line transition-colors hover:border-accent/60 hover:bg-[var(--color-accent-bg-soft)]",
        "focus-within:border-accent/70 focus-within:bg-[var(--color-accent-bg-soft)]",
        isFeatured
          ? "px-0 py-7 md:grid md:grid-cols-[1.1fr_0.9fr] md:gap-10"
          : isCompact
            ? "py-4"
            : "py-5"
      ].join(" ")}
    >
      <div className="space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              {isFeatured ? "Featured dossier" : project.timeframe}
            </p>
            <h3
              className={[
                "max-w-xl font-medium leading-tight text-text",
                isFeatured ? "text-3xl md:text-4xl" : isCompact ? "text-xl" : "text-2xl"
              ].join(" ")}
            >
              {project.title}
            </h3>
          </div>
          {isCompact ? null : <StatusPill status={project.status} />}
        </div>
        <p
          className={[
            "max-w-2xl leading-7 text-muted",
            isFeatured ? "text-base md:text-[15px]" : "text-sm"
          ].join(" ")}
        >
          {project.summary}
        </p>
      </div>

      <div className={isFeatured ? "mt-6 flex flex-col justify-between md:mt-0" : "mt-5"}>
        <div className="flex flex-wrap gap-1.5">
          {visibleStack.map((item) => (
            <span
              key={item}
              className="rounded-[3px] border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted transition-colors group-hover:border-accent/35 group-hover:text-text/85"
            >
              {item}
            </span>
          ))}
          {hiddenStackCount > 0 ? (
            <span className="rounded-[3px] border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
              +{hiddenStackCount}
            </span>
          ) : null}
        </div>

        <Link
          href={`/${locale}/projects/${project.slug}`}
          className={[
            "inline-flex border-b border-line pb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors",
            "hover:border-accent/70 hover:text-[var(--color-accent-hover)] focus:outline-none focus:ring-2 focus:ring-accent/20",
            isFeatured ? "mt-8 self-start text-text" : "mt-6 group-hover:border-accent/60 group-hover:text-text"
          ].join(" ")}
        >
          {actionLabel}
        </Link>
      </div>
    </article>
  );
}

function DossierCue({ label, value }: { label: string; value?: string }) {
  if (!value) {
    return null;
  }

  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{label}</p>
      <p className="mt-3 text-sm leading-7 text-text/85">{value}</p>
    </div>
  );
}

function StackTags({ stack, limit }: { stack: string[]; limit: number }) {
  const visibleStack = stack.slice(0, limit);
  const hiddenStackCount = Math.max(stack.length - visibleStack.length, 0);

  return (
    <div className="max-w-2xl">
      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
        Technical stack
      </p>
      <div className="flex flex-wrap gap-1.5">
        {visibleStack.map((item) => (
          <span
            key={item}
            className="rounded-[3px] border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted transition-colors group-hover:border-accent/35 group-hover:text-text/85"
          >
            {item}
          </span>
        ))}
        {hiddenStackCount > 0 ? (
          <span className="rounded-[3px] border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
            +{hiddenStackCount}
          </span>
        ) : null}
      </div>
    </div>
  );
}
