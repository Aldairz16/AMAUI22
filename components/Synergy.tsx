import { synergy } from "@/data/synergy";
import Eyebrow from "./Eyebrow";

export default function Synergy() {
  return (
    <section className="bg-(--color-surface) py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Eyebrow>Sinergia</Eyebrow>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-(--color-ink) sm:text-4xl">
          {synergy.titulo}
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-(--color-muted)">
          {synergy.subtitulo}
        </p>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-(--color-border) bg-white">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-b border-(--color-border) bg-(--color-surface)">
                <th className="px-6 py-4 font-semibold text-(--color-ink)">
                  Integrante
                </th>
                <th className="px-6 py-4 font-semibold text-(--color-ink)">
                  Rol
                </th>
                <th className="px-6 py-4 font-semibold text-(--color-ink)">
                  Enfoque
                </th>
              </tr>
            </thead>
            <tbody>
              {synergy.tabla.map((row, i) => (
                <tr
                  key={row.nombre}
                  className={
                    i !== synergy.tabla.length - 1
                      ? "border-b border-(--color-border)"
                      : ""
                  }
                >
                  <td className="px-6 py-4 font-medium text-(--color-ink)">
                    {row.nombre}
                  </td>
                  <td className="px-6 py-4 font-medium text-(--color-accent)">
                    {row.rol}
                  </td>
                  <td className="px-6 py-4 text-(--color-muted)">
                    {row.enfoque}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-sm font-semibold text-(--color-ink)">
          {synergy.cierre}
        </p>
      </div>
    </section>
  );
}
