"use client";

import { profile } from "@/data/profile";
import Link from "next/link";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <motion.section 
      id="contact" 
      className="text-center py-24 border-t border-[var(--color-border)] mt-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <p className="text-[18px] text-[var(--color-text-secondary)] mb-6 leading-[1.6]">
        함께 이야기 나누고 싶은 일이 있다면<br />편하게 연락 주세요.
      </p>
      <a href={`mailto:${profile.email}`} className="inline-block text-[22px] font-semibold text-[var(--color-text-primary)] border-b-2 border-[var(--color-text-primary)] pb-0.5 mb-7">
        {profile.email}
      </a>
      <div className="flex justify-center gap-6 text-[14px] text-[var(--color-text-muted)]">
        <Link href={profile.socials.github} className="transition-colors hover:text-[var(--color-text-primary)]">GitHub</Link>
        <Link href={profile.socials.linkedin} className="transition-colors hover:text-[var(--color-text-primary)]">LinkedIn</Link>
        <a href={profile.resumeUrl} className="transition-colors hover:text-[var(--color-text-primary)]" download>Resume (PDF)</a>
      </div>
    </motion.section>
  );
}
