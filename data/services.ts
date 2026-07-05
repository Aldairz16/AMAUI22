// ============================================================================
//  SERVICIOS / QUÉ HACEMOS — EDITA ESTE ARCHIVO
// ----------------------------------------------------------------------------
//  "icon" es un emoji para mantenerlo simple (sin dependencias de iconos).
//  Cámbialo por el que prefieras.
// ============================================================================

export type Service = {
  icon: string;
  titulo: string;
  descripcion: string;
};

export const services: Service[] = [
  {
    icon: "🌐",
    titulo: "Desarrollo Web",
    descripcion:
      "Sitios y aplicaciones web modernas, rápidas y responsivas, optimizadas para SEO y despliegue en la nube.",
  },
  {
    icon: "📱",
    titulo: "Aplicaciones Móviles",
    descripcion:
      "Apps multiplataforma con excelente experiencia de usuario para iOS y Android.",
  },
  {
    icon: "⚙️",
    titulo: "APIs y Backend",
    descripcion:
      "Arquitecturas escalables, APIs REST y bases de datos bien diseñadas para soportar tus productos.",
  },
  {
    icon: "🎨",
    titulo: "Diseño UI/UX",
    descripcion:
      "Interfaces limpias y centradas en el usuario que convierten y se disfrutan de usar.",
  },
];
