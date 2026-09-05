export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  tech: string[];
  status: string;
  links: ProjectLink[];
  privateNote?: string;
};

export type SiteContent = {
  name: string;
  location: string;
  role: string;
  availability: string;
  shortBio: string;
  aiFraming: string;
  aiSubtitle: string;
  projectRoleLine: string;
  email: string;
  social: {
    linkedin: string;
    github: string;
    instagram?: string;
  };
  projects: Project[];
  nav: { id: string; label: string }[];
  sections: {
    aboutTitle: string;
    projectsTitle: string;
    contactTitle: string;
    contactLead: string;
    availabilityLabel: string;
    techLabel: string;
    statusLabel: string;
    roleLabel: string;
    privateProject: string;
    emailCta: string;
    footerNote: string;
  };
};

export const content: SiteContent = {
  name: "Benjamín Alcalde",
  location: "Santiago, Chile",
  role:
    "Estudiante de Ingeniería Comercial (Universidad de los Andes, ingreso 2026) · tecnología, programación y escritura",
  availability:
    "Disponibilidad híbrida/presencial; medio tiempo en semestre, tiempo completo en vacaciones",
  shortBio:
    "Estudiante chileno interesado en tecnología, programación y escritura. Disfruta construir proyectos, automatizar tareas y explorar cómo las herramientas digitales resuelven problemas de forma práctica.",
  aiFraming:
    "Todavía no programa “de memoria” como un ingeniero de software tradicional: estudia Ingeniería Comercial y construye software dirigiendo ideas con asistencia de IA. El portafolio muestra productos reales —apps, APIs, pipelines— donde él define el problema, la experiencia y el criterio, y colabora con modelos para convertir eso en herramientas que usa de verdad.",
  aiSubtitle:
    "Aprendo construyendo: ideo, dirijo y valido; la IA me ayuda a implementar.",
  projectRoleLine: "Ideación, dirección y construcción con asistencia de IA",
  email: "balcaldegm@gmail.com",
  social: {
    linkedin:
      "https://www.linkedin.com/in/benjam%C3%ADn-alcalde-122880225/",
    github: "https://github.com/Benhaman9",
    instagram: "https://www.instagram.com/benja_alcalde/",
  },
  nav: [
    { id: "sobre", label: "Sobre mí" },
    { id: "proyectos", label: "Proyectos" },
    { id: "contacto", label: "Contacto" },
  ],
  sections: {
    aboutTitle: "Sobre mí",
    projectsTitle: "Proyectos",
    contactTitle: "Contacto",
    contactLead:
      "¿Quieres conversar sobre un proyecto, una colaboración o una oportunidad? Escríbeme.",
    availabilityLabel: "Disponibilidad",
    techLabel: "Stack",
    statusLabel: "Estado",
    roleLabel: "Rol",
    privateProject: "Proyecto privado",
    emailCta: "Enviar correo",
    footerNote: "Construido con Next.js · Santiago, Chile",
  },
  projects: [
    {
      id: "cotidie",
      name: "Cotidie",
      tagline: "Oración y Plan de Vida en el bolsillo, sin depender de internet.",
      description:
        "App católica de oración y Plan de Vida (oraciones, santoral, EPUB, audios, recordatorios y widgets) que funciona offline. Disponible como APK Android y PWA; ideada y dirigida por Benjamín con asistencia de IA. Incluye Cotidie Novum, un actualizador que descarga releases verificados desde GitHub.",
      role: "Ideación, dirección y construcción con asistencia de IA",
      tech: [
        "Next.js 15",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Capacitor 8",
        "epub.js",
        "PWA",
        "Android",
        "companion Novum",
        "GitHub Releases",
        "Vercel",
      ],
      status: "En desarrollo activo; uso real en Android y web",
      links: [
        { label: "PWA", href: "https://pwa-xi-jet.vercel.app" },
        {
          label: "APK",
          href: "https://github.com/CotidieApp/cotidie-web/releases/latest/download/cotidie-latest.apk",
        },
        { label: "Sitio", href: "https://github.com/CotidieApp/cotidie-web" },
        { label: "App", href: "https://github.com/CotidieApp/pwa" },
        { label: "Novum", href: "https://github.com/CotidieApp/cotidie-novum" },
      ],
    },
    {
      id: "inspirat",
      name: "inspíraT",
      tagline:
        "Escritura privada offline-first, con sync, comentarios y autoalojamiento.",
      description:
        "Plataforma para escribir en Android sin conexión, sincronizar capítulos, compartir con permisos (leer/comentar/sugerir/editar) y exportar TXT/Markdown/PDF. Cliente Flutter local-first (SQLite + cola) y API FastAPI con Postgres; MVP en producción. Ideado desde su práctica de escritura; implementación con asistencia de IA.",
      role: "Ideación, dirección y construcción con asistencia de IA",
      tech: [
        "Flutter",
        "Riverpod",
        "SQLite",
        "FastAPI",
        "SQLAlchemy",
        "Alembic",
        "Postgres",
        "Docker",
        "Resend",
        "Sentry",
      ],
      status: "MVP en producción; app Android 0.1.0",
      links: [
        { label: "Código", href: "https://github.com/CotidieApp/inspirat" },
        { label: "API", href: "https://inspirat-api.onrender.com" },
      ],
    },
    {
      id: "el-markot",
      name: "El Markot",
      tagline: "De manuscrito/EPUB a libro maquetado con Typst.",
      description:
        "Pipeline editorial para la novela El Markot: Typst (contenido separado de metadata/plantilla) y scripts Python para importar EPUB y compilar. Une worldbuilding con tooling; autoría de Benjamín, maquetación con asistencia de IA. Sin spoilers.",
      role: "Ideación, dirección y construcción con asistencia de IA",
      tech: ["Typst", "Python"],
      status: "Libro estructurado completo; builds locales",
      links: [],
      privateNote: "Proyecto privado",
    },
  ],
};
