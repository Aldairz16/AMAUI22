import { team } from "@/data/team";
import Eyebrow from "./Eyebrow";

// Correo principal de contacto del equipo (EDITAR si prefieren otro).
const EMAIL = "hurtadorivasj123@gmail.com";

export default function Contact() {
  return (
    <section id="contacto" className="bg-(--color-surface) py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Eyebrow>Contacto</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-(--color-ink) sm:text-4xl">
          Trabajemos juntos
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-(--color-muted)">
          ¿Tienes un proyecto en mente? Escríbenos y conversemos cómo podemos
          ayudarte a construirlo.
        </p>

        <a
          href={`mailto:${EMAIL}`}
          className="mt-8 inline-flex rounded-full bg-(--color-accent) px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-(--color-accent-hover)"
        >
          {EMAIL}
        </a>

        <div className="mt-12 border-t border-(--color-border) pt-10">
          <p className="text-sm font-medium text-(--color-muted)">
            Conecta con el equipo
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
            {team.map((m) =>
              m.socials.linkedin ? (
                <a
                  key={m.id}
                  href={m.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-(--color-ink) transition-colors hover:text-(--color-accent)"
                >
                  {m.nombre} <span className="text-(--color-muted)">· LinkedIn</span>
                </a>
              ) : null
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
