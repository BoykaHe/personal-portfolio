import type { SocialLink } from "@/data/types";

export function ContactSection({ socials }: { socials: SocialLink[] }) {
  return (
    <div className="grid border-y border-line md:grid-cols-3">
      {socials.map((social, index) => (
        <a
          key={social.id}
          href={social.href}
          className={[
            "group block px-0 py-4 transition-colors hover:bg-[var(--color-accent-bg-soft)] focus:outline-none focus:ring-2 focus:ring-accent/20 md:px-4",
            index === 0 ? "" : "border-t border-line md:border-l md:border-t-0"
          ].join(" ")}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
            {social.kind === "email" ? "Direct contact" : "External proof"}
          </p>
          <p className="mt-3 text-lg font-medium text-text">{social.label}</p>
          <p className="mt-2 break-words text-sm leading-6 text-muted transition-colors group-hover:text-text/85">
            {social.copyValue ?? social.href}
          </p>
        </a>
      ))}
    </div>
  );
}
