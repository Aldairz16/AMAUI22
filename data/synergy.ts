// ============================================================================
//  SINERGIA DEL EQUIPO — EDITA ESTE ARCHIVO
// ----------------------------------------------------------------------------
//  Contenido de la sección "Nuestra forma de trabajar" (debajo del equipo).
// ============================================================================

export type SynergyRow = {
  nombre: string;
  rol: string;
  enfoque: string;
};

export const synergy = {
  titulo: "Nuestra forma de trabajar",
  parrafos: [
    "Somos un equipo multidisciplinario que combina gestión, diseño, tecnología e innovación para construir soluciones digitales con impacto real. Cada integrante cumple un rol complementario dentro del proceso: Aldair lidera la visión, la organización y la estrategia del producto; Anderson convierte las ideas en experiencias visuales claras y funcionales; y José construye la base técnica que permite llevar las soluciones a una implementación real.",
    "Esta combinación nos permite cubrir todo el ciclo de creación de un proyecto: entendemos el problema, diseñamos la experiencia, desarrollamos la solución, documentamos el avance y preparamos la propuesta para presentarla ante jurados, mentores o usuarios. Nuestra fortaleza está en trabajar de forma ordenada, rápida y colaborativa, especialmente en contextos de hackathons, incubadoras y proyectos de innovación.",
  ],
  tabla: [
    {
      nombre: "Aldair",
      rol: "Líder de Producto, Gestión e IA",
      enfoque:
        "Define dirección, organiza el trabajo, documenta avances y mantiene el foco del proyecto.",
    },
    {
      nombre: "Anderson",
      rol: "Diseño UX/UI y Frontend",
      enfoque:
        "Convierte ideas en interfaces, prototipos y experiencias visuales claras para el usuario.",
    },
    {
      nombre: "José",
      rol: "Backend y Arquitectura Técnica",
      enfoque:
        "Construye la base tecnológica, valida la viabilidad técnica y prepara soluciones escalables.",
    },
  ] as SynergyRow[],
  cierre:
    "Juntos cubrimos las áreas clave para crear productos digitales competitivos: estrategia, diseño, desarrollo, documentación y presentación. Esta sinergia nos permite avanzar desde una idea inicial hasta una solución clara, viable y lista para ser presentada en entornos de innovación.",
};
