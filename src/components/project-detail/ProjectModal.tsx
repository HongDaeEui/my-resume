"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { getProjectBySlug } from "@/lib/projects";
import { DetailHero } from "@/components/project-detail/DetailHero";
import { MetaGrid } from "@/components/project-detail/MetaGrid";
import { HighlightBox } from "@/components/project-detail/HighlightBox";
import { ResultsGrid } from "@/components/project-detail/ResultsGrid";

export function ProjectModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const slug = searchParams.get("project");
  
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (slug) {
      setIsOpen(true);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      setIsOpen(false);
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [slug]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      router.push("/", { scroll: false });
    }, 300); // match exit animation duration
  };

  const project = slug ? getProjectBySlug(slug) : undefined;

  return (
    <AnimatePresence>
      {isOpen && project && project.detail && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={closeModal}
          />
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[800px] max-h-[90vh] bg-[var(--color-bg)] rounded-2xl shadow-2xl overflow-y-auto border border-[var(--color-border)] m-4"
          >
            <div className="sticky top-0 right-0 z-10 flex justify-end p-4 pointer-events-none">
              <button
                onClick={closeModal}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--color-surface-subtle)] hover:bg-[var(--color-border)] border border-[var(--color-border)] text-[var(--color-text-secondary)] transition-colors pointer-events-auto"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            
            <div className="px-6 sm:px-10 pb-12 -mt-4">
              <DetailHero type={project.type} title={project.name} subtitle={project.oneLiner} />
              
              <MetaGrid period={project.period} team={project.team} role={project.role} stack={project.stack} />

              <article className="py-10">
                <h2 className="text-[20px] font-semibold mt-0 mb-4 tracking-[-0.015em]">배경</h2>
                <p className="text-[15px] text-[var(--color-text-secondary)] mb-4 leading-[1.85] whitespace-pre-line">{project.detail.background}</p>

                <h2 className="text-[20px] font-semibold mt-10 mb-4 tracking-[-0.015em]">접근</h2>
                <ul className="list-none space-y-1 mb-4">
                  {project.detail.approach.map((item, i) => (
                    <li key={i} className="text-[15px] text-[var(--color-text-secondary)] pl-[18px] relative leading-[1.7] before:content-[''] before:absolute before:left-0 before:top-[16px] before:w-1.5 before:h-[1px] before:bg-[var(--color-text-faint)]">
                      {item}
                    </li>
                  ))}
                </ul>

                {project.detail.highlight && (
                  <HighlightBox label={project.detail.highlight.label} text={project.detail.highlight.text} />
                )}

                <h2 className="text-[20px] font-semibold mt-10 mb-4 tracking-[-0.015em]">결과</h2>
                <ResultsGrid metrics={project.detail.results.metrics} />
                
                <ul className="list-none space-y-1 mb-4">
                  {project.detail.results.details.map((item, i) => (
                    <li key={i} className="text-[15px] text-[var(--color-text-secondary)] pl-[18px] relative leading-[1.7] before:content-[''] before:absolute before:left-0 before:top-[16px] before:w-1.5 before:h-[1px] before:bg-[var(--color-text-faint)]">
                      {item}
                    </li>
                  ))}
                </ul>

                <h2 className="text-[20px] font-semibold mt-10 mb-4 tracking-[-0.015em]">회고</h2>
                <p className="text-[15px] text-[var(--color-text-secondary)] mb-4 leading-[1.85] whitespace-pre-line">{project.detail.reflection}</p>

                {(project.links?.notion || project.links?.github || project.links?.live) && (
                  <>
                    <h2 className="text-[20px] font-semibold mt-10 mb-4 tracking-[-0.015em]">관련 자료</h2>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.links.notion && (
                        <a href={project.links.notion} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-[16px] py-2 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg text-[13px] font-medium transition-colors hover:border-[var(--color-text-primary)] hover:bg-[var(--color-surface-subtle)]">📓 노션 회고 더 보기 →</a>
                      )}
                      {project.links.live && (
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-[16px] py-2 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg text-[13px] font-medium transition-colors hover:border-[var(--color-text-primary)] hover:bg-[var(--color-surface-subtle)]">🌐 라이브 사이트 →</a>
                      )}
                      {project.links.github && (
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-[16px] py-2 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg text-[13px] font-medium transition-colors hover:border-[var(--color-text-primary)] hover:bg-[var(--color-surface-subtle)]">💻 GitHub →</a>
                      )}
                    </div>
                  </>
                )}
              </article>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
