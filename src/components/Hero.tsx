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
          <div className="mt-1 h-20 w-20 shrink-0 overflow-hidden rounded-full ring-1 ring-sky-400/40 sm:mt-2 sm:h-24 sm:w-24">
            <Image
              src={content.portrait}
              alt={content.name}
              width={160}
              height={160}
              className="h-full w-full object-contain object-center bg-zinc-800"
              priority
            />
          </div>
        ) : (
          <div
            className="mt-1 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-sky-500/15 text-lg font-semibold tracking-[0.12em] text-sky-300 ring-1 ring-sky-400/40 sm:mt-2 sm:h-20 sm:w-20 sm:text-xl"
            aria-hidden
          >
            {content.initials}
          </div>
        )}
        <div className="min-w-0">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-sky-400/90 sm:text-sm">
            {content.location}
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl">
            {content.name}
          </h1>
        </div>
      </div>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
        {content.role}
      </p>
      <p className="mt-6 max-w-2xl border-l-2 border-sky-500/60 pl-4 text-base leading-relaxed text-zinc-200 sm:text-lg">
        {content.aiSubtitle}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#proyectos"
          className="inline-flex items-center rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-medium text-zinc-950 hover:bg-sky-400"
        >
          Ver proyectos
        </a>
        <a
          href="#contacto"
          className="inline-flex items-center rounded-lg border border-zinc-700 bg-zinc-900/60 px-4 py-2.5 text-sm font-medium text-zinc-200 hover:border-zinc-500 hover:bg-zinc-900"
        >
          Contacto
        </a>
      </div>
    </section>
  );
}
