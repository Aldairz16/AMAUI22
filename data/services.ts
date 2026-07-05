// ============================================================================
//  SERVICIOS / QUÉ HACEMOS — EDITA ESTE ARCHIVO
// ----------------------------------------------------------------------------
//  - "icon" elige el ícono SVG dibujado en components/Services.tsx
//    (opciones: "web" | "mobile" | "api" | "design").
//  - "tag" es el chip de categoría que se muestra en la esquina de la card.
// ============================================================================

export type ServiceIcon = "web" | "mobile" | "api" | "design";

export type Service = {
  icon: ServiceIcon;
  tag: string;
  titulo: string;
  descripcion: string;
};

export const services: Service[] = [
  {
    icon: "web",
    tag: "Frontend",
    titulo: "Desarrollo Web",
    descripcion:
      "Sitios y aplicaciones web modernas, rápidas y responsivas, optimizadas para SEO y despliegue en la nube.",
  },
  {
    icon: "mobile",
    tag: "Multiplataforma",
    titulo: "Aplicaciones Móviles",
    descripcion:
      "Apps multiplataforma con excelente experiencia de usuario para iOS y Android.",
  },
  {
    icon: "api",
    tag: "Escalable",
    titulo: "APIs y Backend",
    descripcion:
      "Arquitecturas escalables, APIs REST y bases de datos bien diseñadas para soportar tus productos.",
  },
  {
    icon: "design",
    tag: "Diseño",
    titulo: "Diseño UI/UX",
    descripcion:
      "Interfaces limpias y centradas en el usuario que convierten y se disfrutan de usar.",
  },
];
