import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[--color-border] bg-white transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-[--color-surface]">
        {project.imagen ? (
          <Image
            src={project.imagen}
            alt={project.titulo}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[--color-accent] to-[--color-accent-hover] text-5xl font-black text-white/90">
            {project.titulo.charAt(0)}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-[--color-ink]">
          {project.titulo}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[--color-muted]">
          {project.resumen}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tecnologias.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full bg-[--color-surface] px-2.5 py-1 text-xs font-medium text-[--color-muted]"
            >
              {t}
            </span>
          ))}
        </div>

        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[--color-accent]">
          Ver proyecto
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
