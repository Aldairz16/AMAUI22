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
      "Aldair lidera la visión del equipo y se encarga de convertir ideas dispersas en proyectos claros, organizados y accionables. Su rol conecta la gestión del proyecto, la definición del problema, la documentación, la coordinación de reuniones y el uso estratégico de inteligencia artificial para acelerar el trabajo del equipo.\n\nDentro del equipo, asegura que cada solución mantenga foco en el usuario, responda a una problemática real y avance con orden hacia entregables concretos. Su aporte permite que el equipo trabaje con dirección, prioridades claras y una metodología que evita perder contexto durante hackathons, incubadoras y proyectos propios.",
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
      "Anderson transforma las ideas del equipo en experiencias visuales claras, funcionales y atractivas. Su rol se enfoca en la ideación, el diseño de interfaces, la experiencia de usuario y la construcción frontend de prototipos digitales.\n\nDentro del equipo, aporta creatividad, criterio visual y capacidad para aterrizar conceptos en pantallas, flujos y componentes que los usuarios puedan entender fácilmente. Su trabajo conecta la propuesta de valor con una experiencia digital usable, haciendo que las soluciones no solo funcionen, sino que también se vean profesionales y sean fáciles de presentar.",
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
      "José fortalece la base técnica del equipo, encargándose de que las soluciones tengan una arquitectura sólida, escalable y preparada para convertirse en productos reales. Su rol se enfoca en backend, microservicios, integración de sistemas, cloud y buenas prácticas de desarrollo.\n\nDentro del equipo, aporta experiencia técnica para evaluar la viabilidad de cada propuesta, construir servicios robustos y explicar soluciones complejas de forma clara. Su perfil permite que los proyectos no se queden solo en prototipos visuales, sino que tengan una estructura tecnológica capaz de sostener una implementación real.",
    aporta: ["Backend", "Arquitectura", "Microservicios", "APIs", "Cloud", "Docker", "Spring Boot", "AWS", "Exposición técnica"],
    foto: "/team/jose.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/jose-hurtado-rivas-8150b0231/",
      email: "hurtadorivasj123@gmail.com",
    },
  },
];
