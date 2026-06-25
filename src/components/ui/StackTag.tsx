export function StackTag({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span className={`text-[13px] px-2.5 py-[3px] rounded-md whitespace-nowrap ${
      accent 
        ? "bg-[var(--color-text-primary)] text-white" 
        : "bg-[var(--color-surface-subtle)] text-[var(--color-text-secondary)]"
    }`}>
      {children}
    </span>
  );
}
