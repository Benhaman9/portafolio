import { content } from "@/lib/content";

export function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contacto"
      className="border-t"
      style={{
        borderColor: "var(--line)",
        background: "color-mix(in srgb, var(--bg2) 70%, transparent)",
      }}
      aria-labelledby="contacto-title"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 id="contacto-title" className="section-heading">
          {content.sections.contactTitle}
        </h2>
        <p
          className="mt-3 max-w-xl text-sm leading-relaxed sm:text-base"
          style={{ color: "var(--muted)" }}
        >
          {content.sections.contactLead}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${content.email}`} className="btn-primary">
            {content.sections.emailCta}
          </a>
          <a
            href={content.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            LinkedIn
          </a>
          <a
            href={content.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            GitHub
          </a>
          {content.social.instagram ? (
            <a
              href={content.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Instagram
            </a>
          ) : null}
        </div>

        <p className="mt-4 text-sm" style={{ color: "var(--muted)" }}>
          <a
            href={`mailto:${content.email}`}
            className="hover:text-[var(--teal)]"
            style={{ color: "var(--muted)" }}
          >
            {content.email}
          </a>
        </p>

        <div
          className="mt-12 flex flex-col gap-2 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "var(--line)", color: "var(--muted)" }}
        >
          <p>
            © {year} {content.name}
          </p>
          <p>{content.sections.footerNote}</p>
        </div>
      </div>
    </footer>
  );
}
