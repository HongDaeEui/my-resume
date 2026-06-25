import { StackTag } from "@/components/ui/StackTag";

export function MetaGrid({ period, team, role, stack }: { period: { start: string, end: string }, team: string, role: string, stack: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-8 sm:gap-y-6 py-8 border-b border-[var(--color-border)]">
      <div>
        <div className="text-[11px] text-[var(--color-text-faint)] uppercase tracking-[0.08em] mb-1.5 font-semibold">기간</div>
        <div className="text-[15px] text-[var(--color-text-primary)] font-medium tabular-nums">{period.start} — {period.end}</div>
      </div>
      <div>
        <div className="text-[11px] text-[var(--color-text-faint)] uppercase tracking-[0.08em] mb-1.5 font-semibold">팀 구성</div>
        <div className="text-[15px] text-[var(--color-text-primary)] font-medium">{team}</div>
      </div>
      <div>
        <div className="text-[11px] text-[var(--color-text-faint)] uppercase tracking-[0.08em] mb-1.5 font-semibold">역할</div>
        <div className="text-[15px] text-[var(--color-text-primary)] font-medium">{role}</div>
      </div>
      <div>
        <div className="text-[11px] text-[var(--color-text-faint)] uppercase tracking-[0.08em] mb-1.5 font-semibold">스택</div>
        <div className="flex flex-wrap gap-1.5 mt-1">
          {stack.map((tag, i) => (
            <StackTag key={i}>{tag}</StackTag>
          ))}
        </div>
      </div>
    </div>
  );
}
