import { team } from "@/data/team";
import MemberCard from "./MemberCard";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function TeamGrid() {
  return (
    <section id="equipo" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>Equipo</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-(--color-ink) sm:text-4xl">
              El equipo
            </h2>
            <p className="mt-4 text-lg text-(--color-muted)">
              Tres desarrolladores, un mismo objetivo: construir buen software.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.id} delay={i * 120} className="h-full">
              <MemberCard member={m} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
