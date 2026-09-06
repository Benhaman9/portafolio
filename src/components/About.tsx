import { content } from "@/lib/content";

export function About() {
  return (
    <section
      id="sobre"
      className="border-t"
      style={{
        borderColor: "var(--line)",
        background: "color-mix(in srgb, var(--bg2) 65%, transparent)",
      }}
      aria-labelledby="sobre-title"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 id="sobre-title" className="section-heading">
          {content.sections.aboutTitle}
        </h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div
            className="space-y-5 text-base leading-relaxed sm:text-[1.05rem]"
            style={{ color: "var(--muted)" }}
          >
            <p>{content.shortBio}</p>
            <p
              className="rounded-xl border p-5"
              style={{
                borderColor: "var(--line)",
                background: "color-mix(in srgb, var(--card) 90%, transparent)",
                color: "var(--ink)",
              }}
            >
              {content.aiFraming}
            </p>
          </div>
          <aside
            className="rounded-xl border p-5"
            style={{
              borderColor: "var(--line)",
              background: "var(--card)",
            }}
          >
            <h3
              className="text-xs font-medium uppercase tracking-wider"
              style={{ color: "var(--muted)" }}
            >
              {content.sections.availabilityLabel}
            </h3>
            <p
              className="mt-2 text-sm leading-relaxed"
              style={{ color: "var(--ink)" }}
            >
              {content.availability}
            </p>
            <dl className="mt-6 space-y-3 text-sm">
              <div>
                <dt style={{ color: "var(--muted)" }}>Ubicación</dt>
                <dd style={{ color: "var(--ink)" }}>{content.location}</dd>
              </div>
              <div>
                <dt style={{ color: "var(--muted)" }}>Formación</dt>
                <dd className="mt-1 space-y-2">
                  {content.education.map((item) => (
                    <div key={item.org}>
                      <div style={{ color: "var(--ink)" }} className="font-medium">
                        {item.title}
                      </div>
                      <div style={{ color: "var(--teal)" }} className="text-sm">
                        {item.org}
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: "var(--muted)" }}
                      >
                        {item.when}
                      </div>
                    </div>
                  ))}
                </dd>
              </div>
            </dl>
          </aside>
        </div>

        <div className="mt-12">
          <h3
            className="text-lg font-semibold tracking-tight"
            style={{ color: "var(--ink)" }}
          >
            {content.sections.skillsTitle}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {content.skills.map((skill) => (
              <span key={skill} className="tech-chip">
                {skill}
              </span>
            ))}
          </div>
          <p
            className="mt-3 text-sm"
            style={{ color: "var(--muted)" }}
          >
            {content.skillsNote}
          </p>
        </div>
      </div>
    </section>
  );
}
