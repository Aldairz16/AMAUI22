import { team } from "@/data/team";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

// Correo principal de contacto del equipo (EDITAR si prefieren otro).
const EMAIL = "hurtadorivasj123@gmail.com";

export default function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-(--color-surface) py-24">
      {/* Glow decorativo detrás del CTA */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--color-accent) opacity-[0.08] blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
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
            className="mt-8 inline-flex rounded-full bg-(--color-accent) px-8 py-3 font-mono text-sm font-semibold text-white transition-all hover:bg-(--color-accent-hover) hover:shadow-[0_0_32px_-6px_var(--color-accent)]"
          >
            {EMAIL}
          </a>
        </Reveal>

        <Reveal delay={150}>
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
                    className="font-medium text-(--color-ink) transition-colors hover:text-(--color-accent-hover)"
                  >
                    {m.nombre}{" "}
                    <span className="text-(--color-muted)">· LinkedIn</span>
                  </a>
                ) : null
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
