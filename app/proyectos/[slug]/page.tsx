import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProject } from "@/data/projects";

// Pre-render estático de cada proyecto (rápido en Vercel)
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Proyecto no encontrado — AMAUI" };
  return {
    title: `${project.titulo} — AMAUI`,
    description: project.resumen,
    openGraph: { title: project.titulo, description: project.resumen },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/#proyectos"
        className="inline-flex items-center gap-1 text-sm font-medium text-(--color-muted) transition-colors hover:text-(--color-ink)"
      >
        <span>←</span> Volver a proyectos
      </Link>

      <header className="mt-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-(--color-ink) sm:text-5xl">
          {project.titulo}
        </h1>
        <p className="mt-4 text-lg text-(--color-muted)">{project.resumen}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tecnologias.map((t) => (
            <span
              key={t}
              className="rounded-full border border-(--color-border) bg-(--color-surface) px-3 py-1 text-xs font-medium text-(--color-muted)"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          {project.deployUrl && (
            <a
              href={project.deployUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-(--color-accent) px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-(--color-accent-hover)"
            >
              Ver proyecto desplegado ↗
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-(--color-border) bg-white px-6 py-3 text-sm font-semibold text-(--color-ink) transition-colors hover:bg-(--color-surface)"
            >
              Ver código ↗
            </a>
          )}
        </div>
      </header>

      <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-surface)">
        {project.imagen ? (
          <Image
            src={project.imagen}
            alt={project.titulo}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-(--color-accent) to-(--color-accent-hover) text-7xl font-black text-white/90">
            {project.titulo.charAt(0)}
          </div>
        )}
      </div>

      <div className="mt-12 max-w-2xl">
        <h2 className="text-xl font-bold text-(--color-ink)">Sobre el proyecto</h2>
        <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-(--color-muted)">
          {project.descripcion}
        </p>
      </div>
    </article>
  );
}
