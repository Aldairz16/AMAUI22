export default function Footer() {
  return (
    <footer className="border-t border-[--color-border] bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm font-semibold text-[--color-ink]">
          AM<span className="text-[--color-accent]">AUI</span>
        </p>
        <p className="text-sm text-[--color-muted]">
          © {new Date().getFullYear()} AMAUI. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
