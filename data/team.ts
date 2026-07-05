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
    nombre: "Aldair Pacherrez",
    rol: "Desarrollador Full Stack", // EDITAR
    bio:
      "Apasionado por construir productos web de principio a fin. (Reemplaza esta biografía con la descripción real).", // EDITAR
    skills: ["React", "Node.js", "TypeScript", "SQL"], // EDITAR
    foto: null, // -> "/team/aldair.jpg"
    socials: {
      linkedin: "https://www.linkedin.com/in/aldairpacherrez",
      // github: "",
      // email: "",
    },
  },
  {
    id: "anderson",
    nombre: "Anderson Espinoza",
    rol: "Desarrollador de Software", // EDITAR
    bio:
      "Enfocado en crear soluciones robustas y escalables. (Reemplaza esta biografía con la descripción real).", // EDITAR
    skills: ["JavaScript", "Python", "APIs", "Bases de datos"], // EDITAR
    foto: null, // -> "/team/anderson.jpg"
    socials: {
      linkedin: "https://www.linkedin.com/in/anderson-espinoza/",
    },
  },
  {
    id: "jose",
    nombre: "Jose Hurtado Rivas",
    rol: "Desarrollador de Software", // EDITAR
    bio:
      "Comprometido con la calidad del código y la experiencia de usuario. (Reemplaza esta biografía con la descripción real).", // EDITAR
    skills: ["Frontend", "UI/UX", "Git", "Cloud"], // EDITAR
    foto: null, // -> "/team/jose.jpg"
    socials: {
      linkedin: "https://www.linkedin.com/in/jose-hurtado-rivas-8150b0231/",
      email: "hurtadorivasj123@gmail.com",
    },
  },
];
