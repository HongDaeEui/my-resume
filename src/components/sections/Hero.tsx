"use client";

import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { TextReveal } from "@/components/ui/TextReveal";
import { Magnetic } from "@/components/ui/Magnetic";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <motion.section 
      className="pt-8 sm:pt-12 pb-12 sm:pb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-[var(--color-surface-subtle)] border border-[var(--color-border)] shadow-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="text-[13px] font-medium text-[var(--color-text-secondary)]">{profile.status}</span>
      </div>

      <div className="text-[34px] sm:text-[44px] font-bold leading-[1.25] mb-4 tracking-[-0.025em] bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-text-primary)] to-[var(--color-text-muted)]">
        <TextReveal text={profile.name} as="h1" />
      </div>

      <div className="text-[17px] sm:text-[19px] text-[var(--color-text-secondary)] font-medium mb-7 leading-[1.6]">
        <TextReveal text={profile.headline} />
      </div>
      <div className="text-[16px] text-[var(--color-text-tertiary)] mb-9 leading-[1.7]">
        {profile.bio.map((line, i) => (
          <p key={i} className="mb-2">{line}</p>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 mb-7">
        <Magnetic>
          <Button href={profile.resumeUrl} variant="primary" icon="download">이력서 PDF 다운로드</Button>
        </Magnetic>
        <Magnetic>
          <Button href={`mailto:${profile.email}`} variant="secondary">이메일 보내기</Button>
        </Magnetic>
      </div>
      <div className="flex flex-wrap items-center gap-4 text-[15px] font-medium text-[var(--color-text-secondary)]">
        <Magnetic><Link href={profile.socials.github} className="block border-b border-[var(--color-border)] pb-[1px] hover:text-[var(--color-text-primary)] hover:border-[var(--color-text-primary)] transition-colors">GitHub</Link></Magnetic>
        <Magnetic><Link href={profile.socials.linkedin} className="block border-b border-[var(--color-border)] pb-[1px] hover:text-[var(--color-text-primary)] hover:border-[var(--color-text-primary)] transition-colors">LinkedIn</Link></Magnetic>
        {profile.socials.blog && <Magnetic><Link href={profile.socials.blog} className="block border-b border-[var(--color-border)] pb-[1px] hover:text-[var(--color-text-primary)] hover:border-[var(--color-text-primary)] transition-colors">Blog</Link></Magnetic>}
      </div>
    </motion.section>
  );
}
