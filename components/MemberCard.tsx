import Image from "next/image";
import type { Member } from "@/data/team";

function initials(nombre: string) {
  return nombre
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

// Iconos SVG inline para no depender de librerías externas
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

export default function MemberCard({ member }: { member: Member }) {
  return (
    <div className="card-glow group h-full rounded-2xl border border-(--color-border) bg-(--color-card) p-6 text-center">
      <div className="mx-auto h-28 w-28 overflow-hidden rounded-full ring-4 ring-(--color-surface) transition-all duration-300 group-hover:ring-(--color-accent-soft) group-hover:shadow-[0_0_30px_-8px_var(--color-accent)]">
        {member.foto ? (
          <Image
            src={member.foto}
            alt={member.nombre}
            width={112}
            height={112}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-(--color-accent) text-2xl font-bold text-white">
            {initials(member.nombre)}
          </div>
        )}
      </div>

      <h3 className="mt-5 text-lg font-semibold text-(--color-ink)">
        {member.nombre}
      </h3>
      <p className="text-sm font-medium text-(--color-accent)">{member.rol}</p>
      <p className="mt-3 whitespace-pre-line text-left text-sm leading-relaxed text-(--color-muted)">
        {member.bio}
      </p>

      {member.aporta.length > 0 && (
        <div className="mt-4 text-left">
          <p className="font-mono text-xs font-semibold uppercase tracking-wide text-(--color-accent-hover)">
            Aporta al equipo
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {member.aporta.map((s) => (
              <span
                key={s}
                className="rounded-full border border-(--color-border) bg-(--color-surface) px-3 py-1 text-xs font-medium text-(--color-muted) transition-colors hover:border-(--color-accent) hover:text-(--color-ink)"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-5 flex justify-center gap-3 text-(--color-muted)">
        {member.socials.linkedin && (
          <a
            href={member.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn de ${member.nombre}`}
            className="transition-colors hover:text-(--color-accent)"
          >
            <LinkedInIcon />
          </a>
        )}
        {member.socials.github && (
          <a
            href={member.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub de ${member.nombre}`}
            className="transition-colors hover:text-(--color-accent)"
          >
            <GithubIcon />
          </a>
        )}
        {member.socials.email && (
          <a
            href={`mailto:${member.socials.email}`}
            aria-label={`Email de ${member.nombre}`}
            className="transition-colors hover:text-(--color-accent)"
          >
            <MailIcon />
          </a>
        )}
      </div>
    </div>
  );
}
