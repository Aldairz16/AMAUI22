"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#equipo", label: "Equipo" },
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-(--color-border) bg-(--color-bg)/75 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
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

        <div className="flex items-center gap-3">
          <Link
            href="/#contacto"
            className="hidden rounded-full bg-(--color-accent) px-4 py-2 text-sm font-semibold text-(--color-on-accent) transition-all hover:bg-(--color-accent-hover) hover:shadow-[0_0_22px_-6px_var(--color-accent)] sm:inline-flex"
          >
            Contáctanos
          </Link>

          {/* Botón hamburguesa (solo móvil) */}
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-(--color-border) bg-(--color-surface) md:hidden"
          >
            <span
              className={`h-0.5 w-4.5 rounded-full bg-(--color-ink) transition-transform duration-300 ${
                open ? "translate-y-1 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-4.5 rounded-full bg-(--color-ink) transition-transform duration-300 ${
                open ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Panel de menú móvil (overlay: no desplaza el contenido de la página) */}
      <div
        className={`absolute inset-x-0 top-16 grid overflow-hidden border-(--color-border) bg-(--color-bg)/95 backdrop-blur-md transition-all duration-300 ease-in-out md:hidden ${
          open ? "grid-rows-[1fr] border-b" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {links.map((l, i) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium text-(--color-muted) transition-colors hover:bg-(--color-surface) hover:text-(--color-ink) ${
                    open ? "animate-fade-in-up" : ""
                  }`}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 sm:hidden">
              <Link
                href="/#contacto"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-(--color-accent) px-4 py-3 text-center text-sm font-semibold text-(--color-on-accent) transition-colors hover:bg-(--color-accent-hover)"
              >
                Contáctanos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
