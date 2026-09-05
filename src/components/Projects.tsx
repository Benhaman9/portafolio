import { content, type Project } from "@/lib/content";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:border-zinc-700">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-zinc-50">
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-sky-300/90">{project.tagline}</p>
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
