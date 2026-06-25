"use client";

import { Section } from "@/components/ui/Section";
import { profile } from "@/data/profile";

export function EducationSection() {
  if (!profile.education || profile.education.length === 0) return null;

  return (
    <Section id="education" label="Education & Activities" title="학력 및 교육">
      <div className="flex flex-col gap-8">
        {profile.education.map((edu, i) => (
          <div key={i} className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-[var(--color-text-faint)] before:rounded-full">
            <h3 className="text-[17px] font-semibold mb-1">{edu.title}</h3>
            <div className="text-[14px] text-[var(--color-text-tertiary)] mb-2">
              {edu.institution} <span className="mx-1.5 text-[var(--color-text-faint)]">|</span> {edu.period}
            </div>
            {edu.description && (
              <p className="text-[14px] text-[var(--color-text-secondary)] leading-[1.6]">
                {edu.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
