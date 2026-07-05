import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const accent = project.color;

  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className="card-glow group flex h-full flex-col overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-card)"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-(--color-surface)">
        {project.imagen ? (
          <Image
            src={project.imagen}
            alt={project.titulo}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#2c1f12] via-(--color-card) to-[#3a2917] font-mono text-5xl font-black text-(--color-accent) transition-transform duration-500 group-hover:scale-105"
            style={accent ? { background: `linear-gradient(135deg, ${accent}, #0b0b0b)` } : undefined}
          >
            {"</"}
            {project.titulo.charAt(0)}
            {">"}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-(--color-ink) transition-colors group-hover:text-(--color-accent-hover)">
          {project.titulo}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-(--color-muted)">
          {project.resumen}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tecnologias.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full border border-(--color-border) bg-(--color-surface) px-2.5 py-1 font-mono text-xs font-medium text-(--color-muted)"
              style={accent ? { borderColor: `${accent}55`, color: accent } : undefined}
            >
              {t}
            </span>
          ))}
        </div>

        <span
          className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-(--color-accent-hover)"
          style={accent ? { color: accent } : undefined}
        >
          Ver proyecto
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
