// ============================================================================
//  SINERGIA DEL EQUIPO — EDITA ESTE ARCHIVO
// ----------------------------------------------------------------------------
//  Contenido de la sección "Cómo trabajamos" (debajo del equipo).
//  Se mantiene breve a propósito: la tabla ya comunica los roles de forma
//  rápida de escanear, sin párrafos largos.
// ============================================================================

export type SynergyRow = {
  nombre: string;
  rol: string;
  enfoque: string;
};

export const synergy = {
  titulo: "Cómo trabajamos",
  subtitulo:
    "Tres roles complementarios que cubren todo el ciclo: de la idea al producto terminado.",
  tabla: [
    {
      nombre: "Aldair",
      rol: "Producto, Gestión e IA",
      enfoque:
        "Define dirección, organiza el trabajo y mantiene el foco del proyecto.",
    },
    {
      nombre: "Anderson",
      rol: "Diseño UX/UI y Frontend",
      enfoque:
        "Convierte ideas en interfaces y experiencias visuales claras.",
    },
    {
      nombre: "José",
      rol: "Backend y Arquitectura",
      enfoque:
        "Construye la base tecnológica y valida la viabilidad técnica.",
    },
  ] as SynergyRow[],
  cierre: "Estrategia, diseño y desarrollo — en un mismo equipo.",
};
