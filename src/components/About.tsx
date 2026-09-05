import { content } from "@/lib/content";

export function About() {
  return (
    <section
      id="sobre"
      className="border-t border-zinc-800/80 bg-zinc-900/30"
      aria-labelledby="sobre-title"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <h2
          id="sobre-title"
          className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl"
        >
          {content.sections.aboutTitle}
        </h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 text-base leading-relaxed text-zinc-300 sm:text-[1.05rem]">
            <p>{content.shortBio}</p>
            <p className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-5 text-zinc-200">
              {content.aiFraming}
            </p>
          </div>
          <aside className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-5">
            <h3 className="text-xs font-medium uppercase tracking-wider text-zinc-500">
              {content.sections.availabilityLabel}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">
              {content.availability}
            </p>
            <dl className="mt-6 space-y-3 text-sm">
              <div>
                <dt className="text-zinc-500">Ubicación</dt>
                <dd className="text-zinc-200">{content.location}</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Enfoque</dt>
                <dd className="text-zinc-200">
                  Tecnología · programación · escritura
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
