export function ResultsGrid({ metrics }: { metrics: { value: string, label: string }[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
      {metrics.map((metric, i) => (
        <div key={i} className="px-5 py-[22px] bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-[10px]">
          <div className="text-[28px] font-bold text-[var(--color-text-primary)] leading-[1.2] tabular-nums mb-1 tracking-[-0.02em]">{metric.value}</div>
          <div className="text-[13px] text-[var(--color-text-muted)] leading-[1.4] whitespace-pre-line">{metric.label}</div>
        </div>
      ))}
    </div>
  );
}
