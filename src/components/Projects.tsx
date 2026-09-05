import Image from "next/image";
import { content, type Project } from "@/lib/content";

function PhoneMock({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mx-auto w-[168px] sm:w-[184px]">
      <div className="relative overflow-hidden rounded-[1.65rem] border-[5px] border-zinc-800 bg-zinc-950 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.85)] ring-1 ring-zinc-700/80">
        <div
          className="absolute left-1/2 top-0 z-10 h-3.5 w-[4.25rem] -translate-x-1/2 rounded-b-xl bg-zinc-800"
          aria-hidden
        />
        <Image
          src={src}
          alt={alt}
          width={720}
          height={1612}
          className="h-auto w-full"
          sizes="184px"
        />
      </div>
    </div>
  );
}

function CoverMock({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mx-auto w-[150px] sm:w-[168px]">
      <div className="overflow-hidden rounded-md shadow-[0_18px_40px_-18px_rgba(0,0,0,0.85)] ring-1 ring-zinc-700/70">
        <Image
          src={src}
          alt={alt}
          width={825}
          height={1275}
          className="h-auto w-full"
          sizes="168px"
        />
      </div>
    </div>
  );
}

function LogoStage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mx-auto flex aspect-square w-[180px] items-center justify-center rounded-2xl bg-gradient-to-br from-zinc-800/80 via-zinc-900 to-zinc-950 ring-1 ring-zinc-700/70 sm:w-[200px]">
      <Image
        src={src}
        alt={alt}
        width={512}
        height={512}
        className="h-auto w-[78%] rounded-xl"
        sizes="160px"
      />
    </div>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  if (!project.image) return null;
  const alt = project.imageAlt ?? project.name;

  if (project.visualKind === "phone") {
    return <PhoneMock src={project.image} alt={alt} />;
  }
  if (project.visualKind === "cover") {
    return <CoverMock src={project.image} alt={alt} />;
  }
  return <LogoStage src={project.image} alt={alt} />;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="grid gap-6 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:border-zinc-700 md:grid-cols-[minmax(12rem,15rem)_1fr] md:items-start">
      {project.image ? (
        <div className="flex justify-center md:sticky md:top-24 md:justify-center">
          <ProjectVisual project={project} />
        </div>
      ) : null}

      <div className="min-w-0">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex min-w-0 items-start gap-3">
            {project.logo ? (
              <Image
                src={project.logo}
                alt=""
                width={40}
                height={40}
                className="mt-0.5 h-10 w-10 rounded-lg object-cover ring-1 ring-zinc-700/80"
              />
            ) : null}
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-zinc-50">
                {project.name}
              </h3>
              <p className="mt-1 text-sm text-sky-300/90">{project.tagline}</p>
            </div>
          </div>
          <span className="rounded-full border border-zinc-700 bg-zinc-900 px-2.5 py-1 text-[11px] font-medium text-zinc-400">
            {project.status}
          </span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>

        <dl className="mt-5 space-y-3 text-sm">
          <div>
            <dt className="text-xs uppercase tracking-wider text-zinc-500">
              {content.sections.roleLabel}
            </dt>
            <dd className="mt-1 text-zinc-300">{project.role}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-zinc-500">
              {content.sections.techLabel}
            </dt>
            <dd className="mt-2 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2 py-0.5 font-mono text-[11px] text-zinc-400"
                >
                  {t}
                </span>
              ))}
            </dd>
          </div>
        </dl>

        <div className="mt-6 flex flex-wrap gap-2 border-t border-zinc-800/80 pt-4">
          {project.links.length > 0 ? (
            project.links.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-200 hover:border-sky-500/50 hover:text-sky-300"
              >
                {link.label}
                <span className="ml-1 opacity-50" aria-hidden>
                  ↗
                </span>
              </a>
            ))
          ) : (
            <span className="text-xs text-zinc-500">
              {project.privateNote ?? content.sections.privateProject}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section
      id="proyectos"
      className="border-t border-zinc-800/80"
      aria-labelledby="proyectos-title"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <h2
          id="proyectos-title"
          className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl"
        >
          {content.sections.projectsTitle}
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-zinc-400 sm:text-base">
          Productos reales donde defino el problema, la experiencia y el
          criterio; la implementación avanza con asistencia de IA.
        </p>
        <div className="mt-10 grid gap-6">
          {content.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
