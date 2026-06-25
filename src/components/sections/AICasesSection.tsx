import { Section } from "@/components/ui/Section";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { aiCases } from "@/data/aiCases";
import Link from "next/link";

export function AICasesSection() {
  return (
    <Section id="ai" label="⭐ AI in Practice" title="AI 활용 실업무 사례">
      <div className="flex flex-col gap-4">
        {aiCases.map((caseItem, i) => (
          <SpotlightCard key={i}>
            <div className="p-6 relative z-10 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-[var(--color-text-primary)]">
              <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1.5">
                <h3 className="text-[17px] font-semibold">{caseItem.title}</h3>
                <Link href={`/?ai-case=${caseItem.slug}`} scroll={false} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-md text-[13px] text-[var(--color-text-secondary)] font-medium transition-colors hover:border-[var(--color-text-primary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-subtle)]">
                  자세히 보기 →
                </Link>
              </div>
              <div className="text-[14px] text-[var(--color-text-tertiary)] mb-4">{caseItem.summary}</div>
              
              <div className="flex flex-wrap gap-1.5">
                {caseItem.tools.map((tool, j) => (
                  <span key={j} className="text-[12px] px-2 py-0.5 bg-[var(--color-surface-subtle)] text-[var(--color-text-secondary)] rounded-md">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </Section>
  );
}
