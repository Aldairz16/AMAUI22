import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="max-w-3xl animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-[--color-border] bg-[--color-surface] px-3 py-1 text-xs font-medium text-[--color-muted]">
            <span className="h-2 w-2 rounded-full bg-[--color-accent]" />
            Equipo de desarrollo de software
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-[--color-ink] sm:text-6xl">
            Somos <span className="text-[--color-accent]">AMAUI</span>.
            <br />
            Convertimos ideas en software.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[--color-muted]">
            Un equipo de tres desarrolladores apasionados por crear aplicaciones
            web, móviles y APIs bien construidas, rápidas y fáciles de usar.
            Descubre lo que hacemos y nuestro portafolio de proyectos.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#proyectos"
              className="rounded-full bg-[--color-accent] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[--color-accent-hover]"
            >
              Ver proyectos
            </Link>
            <Link
              href="/#equipo"
              className="rounded-full border border-[--color-border] bg-white px-6 py-3 text-sm font-semibold text-[--color-ink] transition-colors hover:bg-[--color-surface]"
            >
              Conoce al equipo
            </Link>
          </div>
        </div>
      </div>

      {/* Degradado decorativo sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[--color-accent] opacity-[0.07] blur-3xl"
      />
    </section>
  );
}
