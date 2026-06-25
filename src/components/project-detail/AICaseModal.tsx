"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { aiCases } from "@/data/aiCases";

export function AICaseModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const slug = searchParams.get("ai-case");
  
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (slug) {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    } else {
      setIsOpen(false);
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [slug]);

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
    }, 300);
  };

  const caseItem = slug ? aiCases.find((c) => c.slug === slug) : undefined;

  return (
    <AnimatePresence>
      {isOpen && caseItem && (
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
            className="relative w-full max-w-[700px] max-h-[90vh] bg-[var(--color-bg)] rounded-2xl shadow-2xl overflow-y-auto border border-[var(--color-border)] m-4"
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
              <div className="mb-10 relative before:content-[''] before:absolute before:-left-6 sm:before:-left-10 before:top-2 before:bottom-2 before:w-[4px] before:bg-[var(--color-text-primary)]">
                <h2 className="text-[24px] sm:text-[28px] font-bold text-[var(--color-text-primary)] tracking-[-0.02em] leading-[1.3] mb-3">
                  {caseItem.title}
                </h2>
                <div className="text-[15px] sm:text-[17px] text-[var(--color-text-secondary)] leading-[1.6]">
                  {caseItem.summary}
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <div>
                  <div className="text-[12px] font-bold tracking-[0.08em] uppercase text-[var(--color-text-faint)] mb-2">Before</div>
                  <div className="text-[15px] text-[var(--color-text-secondary)] leading-[1.75] bg-[var(--color-surface-subtle)] p-5 rounded-xl border border-[var(--color-border)]">
                    {caseItem.before}
                  </div>
                </div>
                
                <div>
                  <div className="text-[12px] font-bold tracking-[0.08em] uppercase text-[var(--color-text-faint)] mb-2">Approach</div>
                  <div className="text-[15px] text-[var(--color-text-primary)] font-medium leading-[1.75] bg-[var(--color-bg-card)] p-5 rounded-xl border border-[#E4E4E7]">
                    {caseItem.approach}
                  </div>
                </div>
                
                <div>
                  <div className="text-[12px] font-bold tracking-[0.08em] uppercase text-[var(--color-text-primary)] mb-2">After</div>
                  <div className="text-[15px] text-[var(--color-text-primary)] font-semibold leading-[1.75] p-5 rounded-xl border-2 border-[var(--color-text-primary)] text-[var(--color-text-primary)]">
                    {caseItem.after}
                  </div>
                </div>
                
                {caseItem.spread && (
                  <div>
                    <div className="text-[12px] font-bold tracking-[0.08em] uppercase text-[var(--color-text-faint)] mb-2">Spread</div>
                    <div className="text-[15px] text-[var(--color-text-secondary)] leading-[1.75] pl-4 border-l-2 border-[var(--color-border)]">
                      {caseItem.spread}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-[var(--color-border)]">
                {caseItem.tools.map((tool, j) => (
                  <span key={j} className="text-[13px] px-3 py-1 bg-[var(--color-surface-subtle)] text-[var(--color-text-secondary)] rounded-md font-medium border border-[var(--color-border)]">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
