import { content } from "@/lib/content";

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{
        borderColor: "var(--line)",
        background: "color-mix(in srgb, var(--bg) 88%, transparent)",
      }}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="#inicio"
          className="text-sm font-semibold tracking-tight text-[var(--ink)] hover:text-[var(--teal)]"
        >
          {content.name}
        </a>
        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Principal">
          {content.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-md px-2.5 py-1.5 text-xs text-[var(--muted)] hover:bg-[var(--chip)] hover:text-[var(--ink)] sm:text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
