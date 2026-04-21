import { SurfaceCard } from "@/components/ui/surface-card";
import type { SocialLink } from "@/data/types";

export function ContactSection({ socials }: { socials: SocialLink[] }) {
  return (
    <SurfaceCard>
      <div className="grid gap-4 md:grid-cols-3">
        {socials.map((social) => (
          <a
            key={social.id}
            href={social.href}
            className="rounded-2xl border border-white/6 bg-white/[0.02] p-4 transition-colors hover:border-white/15 hover:bg-white/[0.04]"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-muted">
              {social.kind === "email" ? "Contact" : "Social"}
            </p>
            <p className="mt-3 text-base font-medium text-text">{social.label}</p>
            <p className="mt-2 text-sm text-muted">{social.copyValue ?? social.href}</p>
          </a>
        ))}
      </div>
    </SurfaceCard>
  );
}
