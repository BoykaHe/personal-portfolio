import type { ReactNode } from "react";

type SectionContainerProps = {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
};

export function SectionContainer({
  id,
  title,
  eyebrow,
  children
}: SectionContainerProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-4">
        {eyebrow ? (
          <p className="mb-2 text-xs uppercase tracking-[0.32em] text-muted">{eyebrow}</p>
        ) : null}
        <h2 className="text-2xl font-semibold tracking-tight text-text">{title}</h2>
      </div>
      {children}
    </section>
  );
}
