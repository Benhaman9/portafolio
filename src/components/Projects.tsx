import Image from "next/image";
import { content, type Project } from "@/lib/content";

function PhoneMock({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mx-auto w-[168px] sm:w-[184px]">
      <div
        className="relative overflow-hidden rounded-[1.65rem] border-[5px] shadow-[0_18px_40px_-18px_rgba(0,0,0,0.85)]"
        style={{
          borderColor: "var(--line)",
          background: "var(--bg)",
          boxShadow:
            "0 18px 40px -18px rgba(0,0,0,0.85), 0 0 0 1px color-mix(in srgb, var(--line) 70%, transparent)",
        }}
      >
        <div
          className="absolute left-1/2 top-0 z-10 h-3.5 w-[4.25rem] -translate-x-1/2 rounded-b-xl"
          style={{ background: "var(--line)" }}
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
      <div
        className="overflow-hidden rounded-md shadow-[0_18px_40px_-18px_rgba(0,0,0,0.85)]"
        style={{
          boxShadow:
            "0 18px 40px -18px rgba(0,0,0,0.85), 0 0 0 1px color-mix(in srgb, var(--line) 70%, transparent)",
        }}
      >
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
    <div
      className="mx-auto flex aspect-square w-[180px] items-center justify-center rounded-2xl sm:w-[200px]"
      style={{
        background:
          "linear-gradient(135deg, var(--card), var(--bg2), var(--bg))",
        boxShadow: "0 0 0 1px var(--line)",
      }}
    >
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
    <article
      className="grid gap-6 rounded-2xl border p-6 transition md:grid-cols-[minmax(12rem,15rem)_1fr] md:items-start"
      style={{
        borderColor: "var(--line)",
        background: "color-mix(in srgb, var(--card) 85%, transparent)",
      }}
    >
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
                className="mt-0.5 h-10 w-10 rounded-lg object-cover"
                style={{
                  boxShadow: "0 0 0 1px var(--line)",
                }}
              />
            ) : null}
            <div>
              <h3
                className="text-xl font-semibold tracking-tight"
                style={{ color: "var(--ink)" }}
              >
                {project.name}
              </h3>
              <p className="mt-1 text-sm" style={{ color: "var(--teal)" }}>
                {project.tagline}
              </p>
            </div>
          </div>
          <span
            className="rounded-full border px-2.5 py-1 text-[11px] font-medium"
            style={{
              borderColor: "var(--line)",
              background: "var(--chip)",
              color: "var(--muted)",
            }}
          >
            {project.status}
          </span>
        </div>

        <p
          className="mt-4 text-sm leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          {project.description}
        </p>

        <dl className="mt-5 space-y-3 text-sm">
          <div>
            <dt
              className="text-xs uppercase tracking-wider"
              style={{ color: "var(--muted)" }}
            >
              {content.sections.roleLabel}
            </dt>
            <dd className="mt-1" style={{ color: "var(--ink)" }}>
              {project.role}
            </dd>
          </div>
          <div>
            <dt
              className="text-xs uppercase tracking-wider"
              style={{ color: "var(--muted)" }}
            >
              {content.sections.techLabel}
            </dt>
            <dd className="mt-2 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span key={t} className="tech-chip">
                  {t}
                </span>
              ))}
            </dd>
          </div>
        </dl>

        <div
          className="mt-6 flex flex-wrap gap-2 border-t pt-4"
          style={{ borderColor: "var(--line)" }}
        >
          {project.links.length > 0 ? (
            project.links.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg border px-3 py-1.5 text-xs font-medium hover:border-[var(--accent)] hover:text-[var(--teal)]"
                style={{
                  borderColor: "var(--line)",
                  background: "var(--chip)",
                  color: "var(--ink)",
                }}
              >
                {link.label}
                <span className="ml-1 opacity-50" aria-hidden>
                  ↗
                </span>
              </a>
            ))
          ) : (
            <span className="text-xs" style={{ color: "var(--muted)" }}>
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
      className="border-t"
      style={{ borderColor: "var(--line)" }}
      aria-labelledby="proyectos-title"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 id="proyectos-title" className="section-heading">
          {content.sections.projectsTitle}
        </h2>
        <p
          className="mt-3 max-w-2xl text-sm sm:text-base"
          style={{ color: "var(--muted)" }}
        >
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
