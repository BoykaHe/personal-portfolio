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
  const actionLabel = detailLabel.toLowerCase().includes("details")
    ? "Open dossier"
    : detailLabel;

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
