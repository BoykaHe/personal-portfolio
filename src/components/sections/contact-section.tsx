import type { SocialLink } from "@/data/types";

export function ContactSection({ socials }: { socials: SocialLink[] }) {
  const directContact = socials.find((social) => social.kind === "email");
  const proofLinks = socials.filter((social) => social.kind !== "email");

  return (
    <div className="grid border-y border-line lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
      <div className="py-5 lg:pr-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
          Resume / Contact
        </p>
        <h3 className="mt-3 max-w-md text-2xl font-medium leading-tight text-text">
          For roles, project evidence, and resume requests.
        </h3>
        <p className="mt-4 max-w-md text-sm leading-7 text-muted">
          Email is the most direct route for graduate and early-career engineering conversations.
          GitHub and LinkedIn provide the supporting public record.
        </p>
      </div>

      <div className="border-t border-line lg:border-l lg:border-t-0 lg:pl-6">
        {directContact ? (
          <a
            href={directContact.href}
            className="group block py-5 transition-colors hover:bg-[var(--color-accent-bg-soft)] focus:outline-none focus:ring-2 focus:ring-accent/20 lg:px-4"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
              Direct contact
            </p>
            <div className="mt-3 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <p className="text-xl font-medium text-text">{directContact.label}</p>
              <p className="break-words text-sm leading-6 text-muted transition-colors group-hover:text-text/85">
                {directContact.copyValue ?? directContact.href}
              </p>
            </div>
          </a>
        ) : null}

        <div className="grid border-t border-line md:grid-cols-2">
          {proofLinks.map((social, index) => (
            <a
              key={social.id}
              href={social.href}
              className={[
                "group block py-4 transition-colors hover:bg-[var(--color-accent-bg-soft)] focus:outline-none focus:ring-2 focus:ring-accent/20 lg:px-4",
                index === 0 ? "" : "border-t border-line md:border-l md:border-t-0"
              ].join(" ")}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                External proof
              </p>
              <p className="mt-3 text-base font-medium text-text">{social.label}</p>
              <p className="mt-2 break-words text-sm leading-6 text-muted transition-colors group-hover:text-text/85">
                {social.copyValue ?? social.href}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
