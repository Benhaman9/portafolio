import { content } from "@/lib/content";

export function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contacto"
      className="border-t border-zinc-800/80 bg-zinc-900/40"
      aria-labelledby="contacto-title"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <h2
          id="contacto-title"
          className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl"
        >
          {content.sections.contactTitle}
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
          {content.sections.contactLead}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${content.email}`}
            className="inline-flex items-center rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-medium text-zinc-950 hover:bg-sky-400"
          >
            {content.sections.emailCta}
          </a>
          <a
            href={content.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-zinc-700 bg-zinc-950/60 px-4 py-2.5 text-sm font-medium text-zinc-200 hover:border-zinc-500"
          >
            LinkedIn
          </a>
          <a
            href={content.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-zinc-700 bg-zinc-950/60 px-4 py-2.5 text-sm font-medium text-zinc-200 hover:border-zinc-500"
          >
            GitHub
          </a>
          {content.social.instagram ? (
            <a
              href={content.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-zinc-700 bg-zinc-950/60 px-4 py-2.5 text-sm font-medium text-zinc-200 hover:border-zinc-500"
            >
              Instagram
            </a>
          ) : null}
        </div>

        <p className="mt-4 text-sm text-zinc-500">
          <a
            href={`mailto:${content.email}`}
            className="text-zinc-400 hover:text-sky-300"
          >
            {content.email}
          </a>
        </p>

        <div className="mt-12 flex flex-col gap-2 border-t border-zinc-800 pt-6 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {content.name}
          </p>
          <p>{content.sections.footerNote}</p>
        </div>
      </div>
    </footer>
  );
}
