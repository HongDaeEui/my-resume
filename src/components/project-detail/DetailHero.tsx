export function DetailHero({ type, title, subtitle }: { type: "work" | "personal", title: string, subtitle: string }) {
  return (
    <header className="py-4 pb-12 border-b border-[var(--color-border)]">
      <div className="text-[12px] font-semibold tracking-[0.08em] uppercase text-[var(--color-text-faint)] mb-4">
        {type === "work" ? "Work Project" : "Personal"}
      </div>
      <h1 className="text-[28px] sm:text-[36px] font-bold leading-[1.25] mb-3 tracking-[-0.025em]">{title}</h1>
      <p className="text-[17px] text-[var(--color-text-secondary)] leading-[1.55]">{subtitle}</p>
    </header>
  );
}
