import type { ReactNode } from "react";

type SectionContainerProps = {
  id: string;
  title: string;
  eyebrow?: string;
  variant?: "default" | "hero";
  children: ReactNode;
};

export function SectionContainer({
  id,
  title,
  eyebrow,
  variant = "default",
  children
}: SectionContainerProps) {
  if (variant === "hero") {
    return (
      <section id={id} className="scroll-mt-24">
        <h2 className="sr-only">{title}</h2>
        {children}
      </section>
    );
  }

  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-5 border-t border-line pt-5">
        {eyebrow ? (
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-2xl font-medium leading-tight text-text">{title}</h2>
      </div>
      {children}
    </section>
  );
}
