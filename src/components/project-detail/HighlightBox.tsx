export function HighlightBox({ label, text }: { label: string, text: string }) {
  return (
    <div className="bg-[var(--color-bg-card)] px-6 py-5 rounded-lg my-6 border-l-[3px] border-l-[var(--color-text-primary)] border-y border-r border-[var(--color-border)]">
      <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-[var(--color-text-primary)] mb-2">{label}</div>
      <div className="text-[15px] text-[var(--color-text-secondary)] leading-[1.7] whitespace-pre-line">{text}</div>
    </div>
  );
}
