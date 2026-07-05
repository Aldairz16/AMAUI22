import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#equipo", label: "Equipo" },
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-(--color-border) bg-(--color-bg)/75 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-2.5">
          <Image
            src="/logo.jpeg"
            alt="Logo de AMAUI"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full ring-1 ring-(--color-border) transition-shadow group-hover:ring-(--color-accent)"
            priority
          />
          <span className="text-xl font-extrabold tracking-tight text-(--color-ink)">
            AM<span className="text-(--color-accent)">AUI</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 text-sm font-medium text-(--color-muted) md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="nav-link transition-colors hover:text-(--color-ink)"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/#contacto"
          className="rounded-full bg-(--color-accent) px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-(--color-accent-hover) hover:shadow-[0_0_22px_-6px_var(--color-accent)]"
        >
          Contáctanos
        </Link>
      </nav>
    </header>
  );
}
