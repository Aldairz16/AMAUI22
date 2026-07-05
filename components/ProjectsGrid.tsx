import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  return (
    <section id="proyectos" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-[--color-ink] sm:text-4xl">
            Proyectos
          </h2>
          <p className="mt-4 text-lg text-[--color-muted]">
            Una selección de lo que hemos construido. Haz clic en cualquiera para
            ver el detalle.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
