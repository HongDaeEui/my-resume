import { Suspense } from "react";
import { Nav } from "@/components/ui/Nav";
import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { AICasesSection } from "@/components/sections/AICasesSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ProjectModal } from "@/components/project-detail/ProjectModal";
import { AICaseModal } from "@/components/project-detail/AICaseModal";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="max-w-[720px] mx-auto px-5 sm:px-8">
        <Hero />
        <TechStack />
        <ExperienceSection />
        <ProjectsSection type="work" />
        <ProjectsSection type="personal" />
        <AICasesSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Suspense fallback={null}>
        <ProjectModal />
        <AICaseModal />
      </Suspense>
    </>
  );
}
