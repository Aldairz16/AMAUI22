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
  skills: string[];
  foto: string | null;
  socials: Social;
};

export const team: Member[] = [
  {
    id: "aldair",
    nombre: "Aldair Alexander Pacherrez Nuñez",
    rol: "Project / Product Manager Jr. | UX/UI, Scrum, SQL y Automatización",
    bio:
      "Estudiante de Ingeniería de Sistemas e Informática en Chimbote, Áncash, Perú, con perfil orientado a gestión de proyectos y producto. Forma parte del equipo AMAUI (Innovation Team) y del Aspire Institute (Aspire Leaders Program), participando activamente en hackathons de innovación social e IA.",
    skills: ["Project Management", "Product Management", "UX/UI", "Scrum", "SQL", "Automatización"],
    foto: "/team/aldair.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/aldairpacherrez",
    },
  },
  {
    id: "anderson",
    nombre: "Jean Carlos Anderson Espinoza Sangay",
    rol: "Frontend Developer (Angular, React) | UI/UX Figma | Analista Jr - Desarrollo Logic",
    bio:
      "Estudiante de Ingeniería de Sistemas e Informática en Perú, actualmente en INCAD SERVICE y estudiando en la UTP. Se enfoca en desarrollo frontend y diseño de prototipos web, optimizando procesos con soluciones innovadoras.",
    skills: ["Angular", "React", "Figma / UI-UX", "PostgreSQL", "Spring", "Frontend Development"],
    foto: "/team/anderson.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/anderson-espinoza/",
    },
  },
  {
    id: "jose",
    nombre: "Jose Hurtado Rivas",
    rol: "Backend Developer | Spring Boot & Spring WebFlux | Microservices",
    bio:
      "Backend Developer en Perú, actualmente en SDC DATA LATAM y estudiante en la UTP. Especializado en microservicios, cloud y arquitectura backend, y activo en la comunidad tech (Cloud Native, GitHub Campus Expert, hackathons de IA).",
    skills: ["Spring Boot / WebFlux", "AWS", "Docker", "Angular", "Microservices", "GitOps"],
    foto: "/team/jose.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/jose-hurtado-rivas-8150b0231/",
      email: "hurtadorivasj123@gmail.com",
    },
  },
];
