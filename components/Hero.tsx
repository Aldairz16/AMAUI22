import Link from "next/link";

const stats = [
  { valor: "3", etiqueta: "Desarrolladores" },
  { valor: "Full Stack", etiqueta: "Producto + Diseño + Backend" },
  { valor: "Perú", etiqueta: "Basados en" },
];

const stack = [
  "React",
  "Next.js",
  "Angular",
  "TypeScript",
  "Spring Boot",
  "Node.js",
  "AWS",
  "Docker",
  "PostgreSQL",
  "Figma",
  "Tailwind CSS",
  "Microservicios",
];

// Líneas de la terminal del hero. `--d` controla el retardo de aparición.
const termLines: { text: React.ReactNode; d: string }[] = [
  {
    text: (
      <>
        <span className="text-emerald-400">➜</span>{" "}
        <span className="text-(--color-accent-hover)">~</span> amaui init
        --team=3 --stack=full
      </>
    ),
    d: "0.3s",
  },
  {
    text: <span className="text-(--color-muted)">✓ Producto & IA ......... listo</span>,
    d: "0.8s",
  },
  {
    text: <span className="text-(--color-muted)">✓ Diseño UX/UI .......... listo</span>,
    d: "1.2s",
  },
  {
    text: <span className="text-(--color-muted)">✓ Backend & Cloud ....... listo</span>,
    d: "1.6s",
  },
  {
    text: (
      <>
        <span className="text-emerald-400">✓</span>{" "}
        <span className="text-(--color-ink)">
          Equipo desplegado. Convertimos ideas en software.
        </span>
      </>
    ),
    d: "2.1s",
  },
  {
    text: (
      <>
        <span className="text-emerald-400">➜</span>{" "}
        <span className="text-(--color-accent-hover)">~</span>{" "}
        <span className="animate-blink inline-block h-4 w-2 translate-y-0.5 bg-(--color-accent)" />
      </>
    ),
    d: "2.6s",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Rejilla de fondo estilo blueprint */}
      <div aria-hidden className="bg-grid absolute inset-0" />

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-14 sm:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-(--color-border) bg-(--color-surface) px-3 py-1 font-mono text-xs font-medium text-(--color-muted)">
              <span className="animate-pulse-dot h-2 w-2 rounded-full bg-(--color-accent)" />
              equipo_de_desarrollo — disponible
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-(--color-ink) sm:text-5xl lg:text-6xl">
              Somos <span className="text-gradient">AMAUI</span>.
              <br />
              Convertimos ideas en software.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-(--color-muted) sm:text-lg">
              Un equipo de tres desarrolladores apasionados por crear
              aplicaciones web, móviles y APIs bien construidas, rápidas y
              fáciles de usar. Descubre lo que hacemos y nuestro portafolio de
              proyectos.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/#proyectos"
                className="group rounded-full bg-(--color-accent) px-6 py-3 text-sm font-semibold text-(--color-on-accent) transition-all hover:bg-(--color-accent-hover) hover:shadow-[0_0_28px_-6px_var(--color-accent)]"
              >
                Ver proyectos{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href="/#equipo"
                className="rounded-full border border-(--color-border) bg-(--color-surface) px-6 py-3 text-sm font-semibold text-(--color-ink) transition-all hover:border-(--color-accent) hover:bg-(--color-card)"
              >
                Conoce al equipo
              </Link>
            </div>
          </div>

          {/* Ventana de terminal animada */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="animate-float overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-card) shadow-[0_30px_80px_-30px_rgba(198,139,78,0.35)]">
              <div className="flex items-center gap-2 border-b border-(--color-border) bg-(--color-surface) px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-xs text-(--color-muted)">
                  amaui — zsh
                </span>
              </div>
              <div className="space-y-2.5 overflow-x-auto p-5 font-mono text-xs leading-relaxed sm:text-[13px]">
                {termLines.map((line, i) => (
                  <p
                    key={i}
                    className="term-line"
                    style={{ "--d": line.d } as React.CSSProperties}
                  >
                    {line.text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="animate-fade-in-up mt-12 grid max-w-3xl grid-cols-3 gap-4 border-t border-(--color-border) pt-8 sm:mt-16 sm:gap-6"
          style={{ animationDelay: "0.3s" }}
        >
          {stats.map((s) => (
            <div key={s.etiqueta}>
              <p className="text-xl font-extrabold text-(--color-ink) sm:text-3xl">
                {s.valor}
              </p>
              <p className="mt-1 text-xs text-(--color-muted) sm:text-sm">
                {s.etiqueta}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee infinito del stack */}
      <div className="marquee relative border-y border-(--color-border) bg-(--color-surface) py-4">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-(--color-bg) to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-(--color-bg) to-transparent"
        />
        <div className="marquee-track">
          {[...stack, ...stack].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="mx-6 flex items-center gap-2 font-mono text-sm text-(--color-muted)"
            >
              <span className="text-(--color-accent)">◆</span> {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Degradados decorativos */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-(--color-accent) opacity-[0.14] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-(--color-accent) opacity-[0.07] blur-3xl"
      />
    </section>
  );
}
