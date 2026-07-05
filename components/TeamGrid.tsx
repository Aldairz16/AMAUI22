import { team } from "@/data/team";
import MemberCard from "./MemberCard";

export default function TeamGrid() {
  return (
    <section id="equipo" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-[--color-ink] sm:text-4xl">
            El equipo
          </h2>
          <p className="mt-4 text-lg text-[--color-muted]">
            Tres desarrolladores, un mismo objetivo: construir buen software.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <MemberCard key={m.id} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
