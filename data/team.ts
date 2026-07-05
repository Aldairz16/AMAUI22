// ============================================================================
//  DATOS DEL EQUIPO — EDITA ESTE ARCHIVO
// ----------------------------------------------------------------------------
//  Cambia rol, bio, skills y redes de cada integrante libremente.
//  Para la foto: sube la imagen a  public/team/  y pon aquí la ruta,
//  por ejemplo  foto: "/team/aldair.jpg".  Si dejas foto: null se muestra
//  un avatar con las iniciales automáticamente.
// ============================================================================

export type Social = {
  linkedin?: string;
  github?: string;
  email?: string;
  website?: string;
};

export type Member = {
  id: string;
  nombre: string;
  rol: string;
  bio: string;
  aporta: string[];
  foto: string | null;
  socials: Social;
};

export const team: Member[] = [
  {
    id: "aldair",
    nombre: "Aldair Alexander Pacherrez Nuñez",
    rol: "Líder de Producto, Gestión e IA",
    bio:
      "Convierte ideas dispersas en proyectos claros y accionables: gestiona, documenta y usa IA para acelerar el trabajo del equipo, siempre con foco en el usuario.",
    aporta: ["Dirección", "Organización", "Estrategia de producto", "IA", "Automatización", "Documentación", "Gestión ágil"],
    foto: "/team/aldair.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/aldairpacherrez",
    },
  },
  {
    id: "anderson",
    nombre: "Jean Carlos Anderson Espinoza Sangay",
    rol: "Diseño UX/UI, Creatividad y Frontend",
    bio:
      "Transforma las ideas del equipo en interfaces claras y funcionales, aterrizando conceptos en pantallas y flujos que los usuarios entienden a primera vista.",
    aporta: ["Ideación", "UX/UI", "Prototipado", "Diseño visual", "Frontend", "Figma", "Angular", "React"],
    foto: "/team/anderson.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/anderson-espinoza/",
    },
  },
  {
    id: "jose",
    nombre: "Jose Hurtado Rivas",
    rol: "Backend, Arquitectura Técnica y Escalabilidad",
    bio:
      "Fortalece la base técnica del equipo con arquitecturas sólidas y escalables, validando la viabilidad de cada propuesta para llevarla más allá del prototipo.",
    aporta: ["Backend", "Arquitectura", "Microservicios", "APIs", "Cloud", "Docker", "Spring Boot", "AWS", "Exposición técnica"],
    foto: "/team/jose.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/jose-hurtado-rivas-8150b0231/",
      email: "hurtadorivasj123@gmail.com",
    },
  },
];
