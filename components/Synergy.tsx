import { synergy } from "@/data/synergy";

export default function Synergy() {
  return (
    <section className="bg-[--color-surface] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-[--color-ink] sm:text-4xl">
            {synergy.titulo}
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-[--color-muted]">
            {synergy.parrafos.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="mt-12 overflow-x-auto rounded-2xl border border-[--color-border] bg-white">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-[--color-border] bg-[--color-surface]">
                <th className="px-6 py-4 font-semibold text-[--color-ink]">
                  Integrante
                </th>
                <th className="px-6 py-4 font-semibold text-[--color-ink]">
                  Rol en el equipo
                </th>
                <th className="px-6 py-4 font-semibold text-[--color-ink]">
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
                      ? "border-b border-[--color-border]"
                      : ""
                  }
                >
                  <td className="px-6 py-4 font-medium text-[--color-ink]">
                    {row.nombre}
                  </td>
                  <td className="px-6 py-4 font-medium text-[--color-accent]">
                    {row.rol}
                  </td>
                  <td className="px-6 py-4 text-[--color-muted]">
                    {row.enfoque}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <blockquote className="mt-12 max-w-3xl border-l-4 border-[--color-accent] pl-6 text-lg italic leading-relaxed text-[--color-ink]">
          {synergy.cierre}
        </blockquote>
      </div>
    </section>
  );
}
