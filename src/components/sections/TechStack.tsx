import { Section } from "@/components/ui/Section";
import { StackTag } from "@/components/ui/StackTag";
import { profile } from "@/data/profile";

export function TechStack() {
  return (
    <Section id="tech-stack" label="Tech Stack" title="기술 스택">
      <div className="flex flex-col gap-6">
        {profile.skills.map((group, i) => (
          <div key={i}>
            <div className="text-[14px] font-medium text-[var(--color-text-secondary)] mb-2.5">
              {group.category}
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, j) => (
                <StackTag key={j}>{skill}</StackTag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
