"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { projects } from "@/data/projects";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function ProjectsSection({ type }: { type: "work" | "personal" }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const INITIAL_COUNT = 6;
  
  const filteredProjects = projects.filter((p) => p.type === type);
  const hasMore = filteredProjects.length > INITIAL_COUNT;
  const displayedProjects = isExpanded ? filteredProjects : filteredProjects.slice(0, INITIAL_COUNT);
  const id = type === "work" ? "work-projects" : "personal-projects";
  const label = type === "work" ? "Work Projects" : "Personal";
  const title = type === "work" ? "회사 프로젝트" : "개인 프로젝트";

  return (
    <Section id={id} label={label} title={title}>
      <div className="flex flex-col gap-4">
        <AnimatePresence initial={false}>
        {displayedProjects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
          <SpotlightCard className="group h-full">
            <div className="block p-6 relative z-10">
              <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1.5">
                <span className="text-[17px] font-semibold">{project.name}</span>
                <Link href={`/?project=${project.slug}`} scroll={false} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-md text-[13px] text-[var(--color-text-secondary)] font-medium transition-colors hover:border-[var(--color-text-primary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-subtle)]">
                  자세히 보기 →
                </Link>
              </div>
              <div className="text-[14px] text-[var(--color-text-tertiary)] mb-4">{project.oneLiner}</div>
              <div className="text-[13px] text-[var(--color-text-muted)] mb-3.5">
                {project.period.start} — {project.period.end} · {project.team} · {project.role}
              </div>
              <ul className="list-none mb-5 space-y-2">
                {project.contributions.map((contrib, j) => (
                  <li 
                    key={j} 
                    className="text-[14px] text-[var(--color-text-secondary)] leading-[1.65] pl-4 relative before:content-['·'] before:absolute before:left-1 before:text-[var(--color-text-faint)]"
                    dangerouslySetInnerHTML={{ __html: contrib }}
                  />
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tag, j) => (
                  <span key={j} className="text-[12px] px-2 py-0.5 bg-[var(--color-surface-subtle)] text-[var(--color-text-secondary)] rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </SpotlightCard>
          </motion.div>
        ))}
        </AnimatePresence>
      </div>

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-surface-subtle)] hover:bg-[var(--color-border)] border border-[var(--color-border)] rounded-full text-[14px] font-medium text-[var(--color-text-secondary)] transition-colors"
          >
            {isExpanded ? "접기 ↑" : `+ 이전 프로젝트 ${filteredProjects.length - INITIAL_COUNT}개 더보기`}
          </button>
        </div>
      )}
    </Section>
  );
}
