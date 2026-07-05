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
//
//  Los 5 proyectos de abajo están pendientes de detalle (resumen,
//  descripción, tecnologías, link de deploy). Se irán completando a medida
//  que lleguen los datos de cada uno.
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
    slug: "laboral-bcp",
    titulo: "Laboral BCP",
    resumen: "Detalles del proyecto próximamente.",
    descripcion: "Descripción pendiente.",
    tecnologias: [],
    imagen: null,
  },
  {
    slug: "amay",
    titulo: "AMAY",
    resumen: "Detalles del proyecto próximamente.",
    descripcion: "Descripción pendiente.",
    tecnologias: [],
    imagen: null,
  },
  {
    slug: "perfila-utp",
    titulo: "Perfila UTP",
    resumen: "Detalles del proyecto próximamente.",
    descripcion: "Descripción pendiente.",
    tecnologias: [],
    imagen: null,
  },
  {
    slug: "come-bien",
    titulo: "Come Bien",
    resumen: "Detalles del proyecto próximamente.",
    descripcion: "Descripción pendiente.",
    tecnologias: [],
    imagen: null,
  },
  {
    slug: "rukiur",
    titulo: "Rukiur",
    resumen: "Detalles del proyecto próximamente.",
    descripcion: "Descripción pendiente.",
    tecnologias: [],
    imagen: null,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
