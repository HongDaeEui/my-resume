"use client";

import { motion } from "framer-motion";

export function Section({
  id,
  label,
  title,
  children,
  className = "",
}: {
  id?: string;
  label?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section 
      id={id} 
      className={`py-12 sm:py-16 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {label && <div className="text-[12px] font-semibold tracking-[0.08em] uppercase text-[var(--color-text-faint)] mb-4">{label}</div>}
      {title && <h2 className="text-[22px] font-semibold mb-7 tracking-[-0.015em]">{title}</h2>}
      {children}
    </motion.section>
  );
}
