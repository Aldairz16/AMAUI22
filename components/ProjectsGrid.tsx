import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function ProjectsGrid() {
  return (
    <section id="proyectos" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>Portafolio</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-(--color-ink) sm:text-4xl">
              Proyectos
            </h2>
            <p className="mt-4 text-lg text-(--color-muted)">
              Una selección de lo que hemos construido. Haz clic en cualquiera
              para ver el detalle.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 100} className="h-full">
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
