import { services } from "@/data/services";
import Eyebrow from "./Eyebrow";

export default function Services() {
  return (
    <section id="servicios" className="bg-(--color-surface) py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Eyebrow>Servicios</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-(--color-ink) sm:text-4xl">
            Qué hacemos
          </h2>
          <p className="mt-4 text-lg text-(--color-muted)">
            Servicios de desarrollo end-to-end para llevar tu producto de la idea
            a producción.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.titulo}
              className="rounded-2xl border border-(--color-border) bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-(--color-surface) text-2xl">
                {s.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-(--color-ink)">
                {s.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-(--color-muted)">
                {s.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
