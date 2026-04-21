import { SurfaceCard } from "@/components/ui/surface-card";
import type { ResumeInfo } from "@/data/types";

export function ResumeSection({ resume }: { resume: ResumeInfo }) {
  return (
    <SurfaceCard className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.28em] text-muted">Resume handoff</p>
        <p className="text-base leading-7 text-muted">{resume.summary}</p>
      </div>
      <div className="space-y-4 rounded-2xl border border-white/6 bg-white/[0.02] p-5">
        <a
          href={resume.downloadUrl}
          className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-text transition-colors hover:bg-white/5"
        >
          Download placeholder
        </a>
        <div className="space-y-2 text-sm text-muted">
          <p>Updated: {resume.updatedAt}</p>
          <p>{resume.contactLabel}</p>
        </div>
      </div>
    </SurfaceCard>
  );
}
