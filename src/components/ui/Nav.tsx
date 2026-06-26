"use client";

import Link from "next/link";
import { profile } from "@/data/profile";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export function Nav() {
  const activeSection = useScrollSpy(["experience", "work-projects", "ai", "contact"], 200);

  return (
    <nav className="sticky top-0 z-50 bg-[rgba(250,250,250,0.85)] backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="max-w-[720px] mx-auto px-5 sm:px-8 py-4 flex justify-between items-center text-sm">
        <Link href="/" className="font-semibold text-[var(--color-text-primary)]">{profile.name}</Link>
        <div className="flex items-center gap-4 sm:gap-6 text-[var(--color-text-muted)]">
          <Link href="/#experience" className={`transition-colors duration-150 hover:text-[var(--color-text-primary)] ${activeSection === "experience" ? "text-[var(--color-text-primary)] font-semibold" : ""}`}>경력</Link>
          <Link href="/#work-projects" className={`transition-colors duration-150 hover:text-[var(--color-text-primary)] ${activeSection === "work-projects" ? "text-[var(--color-text-primary)] font-semibold" : ""}`}>프로젝트</Link>
          <Link href="/#ai" className={`transition-colors duration-150 hover:text-[var(--color-text-primary)] ${activeSection === "ai" ? "text-[var(--color-text-primary)] font-semibold" : ""}`}>AI 사례</Link>
          <Link href="/#contact" className={`transition-colors duration-150 hover:text-[var(--color-text-primary)] ${activeSection === "contact" ? "text-[var(--color-text-primary)] font-semibold" : ""}`}>연락하기</Link>
          <a href={profile.resumeUrl} download className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--color-text-primary)] text-[var(--color-bg)] rounded-md text-[13px] font-medium transition-opacity hover:opacity-90 ml-2">
            이력서 📄
          </a>
          <div className="hidden sm:flex items-center gap-1.5 ml-2 text-[12px] text-[var(--color-text-faint)] font-medium px-2 py-1 bg-[var(--color-surface-subtle)] rounded-md border border-[var(--color-border)] select-none">
            <span className="text-[10px]">⌘</span>K
          </div>
        </div>
      </div>
    </nav>
  );
}
