export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-(--color-accent)">
      <span className="h-1.5 w-1.5 rounded-full bg-(--color-accent)" />
      {children}
    </span>
  );
}
