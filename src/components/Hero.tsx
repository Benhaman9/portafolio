import Image from "next/image";
import { content } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="inicio"
      className="mx-auto max-w-5xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20"
    >
      <div className="flex items-start gap-4 sm:gap-6">
        {content.portrait ? (
          <div
            className="mt-1 h-20 w-20 shrink-0 overflow-hidden rounded-full sm:mt-2 sm:h-24 sm:w-24"
            style={{
              boxShadow: "0 0 0 1px color-mix(in srgb, var(--accent) 45%, transparent)",
            }}
          >
            <Image
              src={content.portrait}
              alt={content.name}
              width={160}
              height={160}
              className="h-full w-full object-cover object-[center_15%]"
              priority
            />
          </div>
        ) : (
          <div
            className="mt-1 flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-lg font-semibold tracking-[0.12em] sm:mt-2 sm:h-20 sm:w-20 sm:text-xl"
            style={{
              background: "var(--accent-soft, color-mix(in srgb, var(--accent) 18%, transparent))",
              color: "var(--teal)",
              boxShadow: "0 0 0 1px color-mix(in srgb, var(--accent) 40%, transparent)",
            }}
            aria-hidden
          >
            {content.initials}
          </div>
        )}
        <div className="min-w-0">
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm"
            style={{ color: "var(--teal)" }}
          >
            {content.location}
          </p>
          <h1
            className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
            style={{ color: "var(--ink)" }}
          >
            {content.name}
          </h1>
        </div>
      </div>
      <p
        className="mt-4 max-w-2xl text-base leading-relaxed sm:text-lg"
        style={{ color: "var(--muted)" }}
      >
        {content.role}
      </p>
      <p
        className="mt-6 max-w-2xl border-l-[3px] pl-4 text-base leading-relaxed sm:text-lg"
        style={{ borderColor: "var(--accent)", color: "var(--ink)" }}
      >
        {content.aiSubtitle}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#proyectos" className="btn-primary">
          Ver proyectos
        </a>
        <a href={`mailto:${content.email}`} className="btn-ghost">
          Contáctame
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
      </div>
    </section>
  );
}
