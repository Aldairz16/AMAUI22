import { services, type ServiceIcon } from "@/data/services";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

// Íconos SVG de línea (estilo dev, sin dependencias externas)
const icons: Record<ServiceIcon, React.ReactNode> = {
  web: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <polyline points="8 8 4 12 8 16" />
      <polyline points="16 8 20 12 16 16" />
      <line x1="13.5" y1="6" x2="10.5" y2="18" />
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <line x1="10.5" y1="18.5" x2="13.5" y2="18.5" />
    </svg>
  ),
  api: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <ellipse cx="12" cy="5.5" rx="8" ry="3" />
      <path d="M4 5.5v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      <path d="M4 11.5v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </svg>
  ),
  design: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section id="servicios" className="bg-(--color-surface) py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>Servicios</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-(--color-ink) sm:text-4xl">
              Qué hacemos
            </h2>
            <p className="mt-4 text-lg text-(--color-muted)">
              Servicios de desarrollo end-to-end para llevar tu producto de la
              idea a producción.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.titulo} delay={i * 100} className="h-full">
              <div className="card-glow flex h-full flex-col rounded-2xl border border-(--color-border) bg-(--color-card) p-6">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-(--color-accent-soft) text-(--color-accent-hover)">
                    {icons[s.icon]}
                  </div>
                  <span className="rounded-full border border-(--color-border) bg-(--color-surface) px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-(--color-muted)">
                    {s.tag}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-(--color-ink)">
                  {s.titulo}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-(--color-muted)">
                  {s.descripcion}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
