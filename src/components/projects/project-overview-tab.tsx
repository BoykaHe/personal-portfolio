import type { Project } from "@/data/types";

export function ProjectOverviewTab({ project }: { project: Project }) {
  const flow = [
    {
      label: "Problem",
      title: "What the project needed to clarify",
      body: project.problemSolved
    },
    {
      label: "Work",
      title: "Engineering responsibilities",
      items: project.responsibilities
    },
    {
      label: "Evidence",
      title: "Observable technical outcomes",
      items: project.highlights
    }
  ];

  return (
    <section className="border-y border-line">
      {flow.map((section, index) => (
        <div
          key={section.label}
          className="grid gap-5 border-b border-line py-6 last:border-b-0 md:grid-cols-[8rem_1fr]"
        >
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              {String(index + 1).padStart(2, "0")} / {section.label}
            </p>
          </div>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-medium leading-snug text-text">{section.title}</h2>
            {"body" in section ? (
              <p className="mt-3 text-base leading-8 text-muted">{section.body}</p>
            ) : null}
            {Array.isArray(section.items) && section.items.length > 0 ? (
              <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
                {section.items.map((item, i) => (
                  <li key={`${section.title}-${i}`} className="border-l border-line pl-3">
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      ))}

      <div className="grid gap-5 border-t border-line py-6 md:grid-cols-[8rem_1fr]">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          04 / Stack
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-[3px] border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
