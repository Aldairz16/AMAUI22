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
  color?: string; // color de marca del proyecto (hex). Tiñe badges y acentos en su card/detalle.
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
    resumen:
      "App de salud para adultos mayores y sus cuidadores: recordatorios de medicinas, botón SOS y acompañamiento por voz. \"Tecnología con calidez humana\".",
    descripcion:
      "AMAY es un asistente de salud pensado para adultos mayores y las personas que los cuidan. Diseñado originalmente en Figma y llevado a web app, ofrece dos experiencias: para el adulto mayor, recordatorio de medicinas con confirmación por voz, botón SOS con alerta inmediata al cuidador, registro de signos vitales y estado de ánimo, y citas médicas; para el cuidador, un panel de supervisión con inventario de medicamentos, ubicación GPS con rutas del día, agenda médica y notificaciones.\n\nSe apoya en la Web Speech API para un narrador por voz que facilita la accesibilidad de personas mayores, y toda la interfaz usa componentes grandes, textos claros y colores cálidos bajo el lema \"Tecnología con calidez humana\".",
    tecnologias: ["React", "Vite", "TypeScript", "Tailwind CSS", "Radix UI", "Web Speech API"],
    imagen: "/projects/amay-icon.png",
    color: "#2B59FF",
    deployUrl: "/proyectos/amay/demo",
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
