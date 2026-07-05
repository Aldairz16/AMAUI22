// ============================================================================
//  PROYECTOS DEL PORTAFOLIO — EDITA ESTE ARCHIVO
// ----------------------------------------------------------------------------
//  Cada proyecto se muestra como una card en la página principal. Al hacer
//  clic se abre  /proyectos/[slug]  con el detalle completo.
//
//  - slug: identificador para la URL (sin espacios, en minúsculas).
//  - deployUrl: enlace al proyecto YA desplegado (botón "Ver proyecto").
//  - imagen: sube una captura a  public/  y pon la ruta, ej "/proyecto1.png".
//            Si dejas imagen: null se muestra un degradado con la inicial.
// ============================================================================

export type Project = {
  slug: string;
  titulo: string;
  resumen: string; // texto corto para la card
  descripcion: string; // texto largo para la página de detalle
  tecnologias: string[];
  imagen: string | null;
  deployUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "proyecto-ejemplo-uno",
    titulo: "Plataforma Web (Ejemplo)",
    resumen:
      "Aplicación web para gestión de datos con panel administrativo. Reemplaza con un proyecto real.",
    descripcion:
      "Descripción completa del proyecto. Explica el problema que resuelve, tu rol en el equipo, las decisiones técnicas más importantes y los resultados obtenidos. Este texto aparece en la página de detalle del proyecto.",
    tecnologias: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    imagen: null,
    deployUrl: "https://vercel.com",
    repoUrl: "https://github.com",
  },
  {
    slug: "proyecto-ejemplo-dos",
    titulo: "App Móvil (Ejemplo)",
    resumen:
      "Aplicación multiplataforma con sincronización en la nube. Reemplaza con un proyecto real.",
    descripcion:
      "Descripción completa del proyecto. Explica el problema que resuelve, tu rol en el equipo, las decisiones técnicas más importantes y los resultados obtenidos.",
    tecnologias: ["React Native", "Expo", "Firebase"],
    imagen: null,
    deployUrl: "https://vercel.com",
  },
  {
    slug: "proyecto-ejemplo-tres",
    titulo: "Landing / E-commerce (Ejemplo)",
    resumen:
      "Sitio de alto rendimiento orientado a conversión. Reemplaza con un proyecto real.",
    descripcion:
      "Descripción completa del proyecto. Explica el problema que resuelve, tu rol en el equipo, las decisiones técnicas más importantes y los resultados obtenidos.",
    tecnologias: ["Astro", "Tailwind CSS", "Stripe"],
    imagen: null,
    deployUrl: "https://vercel.com",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
