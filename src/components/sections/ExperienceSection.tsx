"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { experiences } from "@/data/experience";
import { motion, AnimatePresence } from "framer-motion";

export function ExperienceSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const INITIAL_COUNT = 2;
  const hasMore = experiences.length > INITIAL_COUNT;
  
  const displayedExperiences = isExpanded ? experiences : experiences.slice(0, INITIAL_COUNT);

  return (
    <Section id="experience" label="Experience" title="경력">
      <div className="flex flex-col">
        <AnimatePresence initial={false}>
        {displayedExperiences.map((exp, i) => (
          <motion.div 
            key={exp.company + exp.period.start}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="py-8 border-t border-[var(--color-border)] last:border-b grid grid-cols-1 md:grid-cols-[160px_1fr] gap-3 md:gap-8 overflow-hidden"
          >
            <div className="md:mt-1">
              <div className="text-[13px] text-[var(--color-text-muted)] font-medium tabular-nums mb-1.5">{exp.period.start} — {exp.period.end}</div>
              <div className="text-[15px] font-semibold text-[var(--color-text-primary)]">{exp.company}</div>
              <div className="text-[13px] text-[var(--color-text-tertiary)] mt-0.5">{exp.companyDescription}</div>
            </div>
            <div>
              <div className="text-[16px] font-medium text-[var(--color-text-primary)] mb-4">
                {exp.role}
              </div>
              <ul className="list-none space-y-2.5">
                {exp.achievements.map((achieve, j) => (
                  <li 
                    key={j} 
                    className="text-[15px] text-[var(--color-text-secondary)] pl-[18px] relative leading-[1.7] before:content-[''] before:absolute before:left-0 before:top-[12px] before:w-1.5 before:h-[1px] before:bg-[var(--color-text-faint)]"
                    dangerouslySetInnerHTML={{ __html: achieve }}
                  />
                ))}
              </ul>
            </div>
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
            {isExpanded ? "접기 ↑" : `+ 이전 경력 ${experiences.length - INITIAL_COUNT}개 더보기`}
          </button>
        </div>
      )}
    </Section>
  );
}
