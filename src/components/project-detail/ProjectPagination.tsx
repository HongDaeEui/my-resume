import Link from "next/link";
import { Project } from "@/lib/types";

export function ProjectPagination({ prev, next }: { prev: Project | null, next: Project | null }) {
  return (
    <nav className="flex justify-between gap-4 py-10 mt-6 border-t border-[var(--color-border)] text-sm">
      {prev ? (
        <Link href={`/projects/${prev.slug}`} className="flex-1 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors group">
          <div className="text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-faint)] mb-1 font-semibold group-hover:text-[var(--color-text-muted)] transition-colors">← 이전</div>
          <div className="text-[var(--color-text-primary)] font-medium group-hover:underline underline-offset-4">{prev.name}</div>
        </Link>
      ) : <div className="flex-1" />}
      
      {next ? (
        <Link href={`/projects/${next.slug}`} className="flex-1 text-right text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors group">
          <div className="text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-faint)] mb-1 font-semibold group-hover:text-[var(--color-text-muted)] transition-colors">다음 →</div>
          <div className="text-[var(--color-text-primary)] font-medium group-hover:underline underline-offset-4">{next.name}</div>
        </Link>
      ) : <div className="flex-1" />}
    </nav>
  );
}
