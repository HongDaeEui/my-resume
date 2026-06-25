import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllProjectSlugs, getProjectBySlug, getProjectNavigation } from "@/lib/projects";
import { DetailHero } from "@/components/project-detail/DetailHero";
import { MetaGrid } from "@/components/project-detail/MetaGrid";
import { HighlightBox } from "@/components/project-detail/HighlightBox";
import { ResultsGrid } from "@/components/project-detail/ResultsGrid";
import { ProjectPagination } from "@/components/project-detail/ProjectPagination";
import { Metadata } from "next";

export function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.name} — 김민재`,
    description: project.oneLiner,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !project.detail) {
    notFound();
  }

  const { prev, next } = getProjectNavigation(slug);

  return (
    <div className="max-w-[720px] mx-auto px-5 sm:px-8 py-8">
      <Link href="/#projects" className="inline-flex items-center gap-1.5 text-[13px] text-[var(--color-text-muted)] pb-6 hover:text-[var(--color-text-primary)] transition-colors">
        ← 돌아가기
      </Link>

      <DetailHero type={project.type} title={project.name} subtitle={project.oneLiner} />
      
      <MetaGrid period={project.period} team={project.team} role={project.role} stack={project.stack} />

      <article className="py-14">
        <h2 className="text-[22px] font-semibold mt-0 mb-4 tracking-[-0.015em]">배경</h2>
        <p className="text-[16px] text-[var(--color-text-secondary)] mb-4 leading-[1.85] whitespace-pre-line">{project.detail.background}</p>

        <h2 className="text-[22px] font-semibold mt-12 mb-4 tracking-[-0.015em]">접근</h2>
        <ul className="list-none space-y-1 mb-4">
          {project.detail.approach.map((item, i) => (
            <li key={i} className="text-[16px] text-[var(--color-text-secondary)] pl-[18px] relative leading-[1.7] before:content-[''] before:absolute before:left-0 before:top-[16px] before:w-1.5 before:h-[1px] before:bg-[var(--color-text-faint)]">
              {item}
            </li>
          ))}
        </ul>

        {project.detail.highlight && (
          <HighlightBox label={project.detail.highlight.label} text={project.detail.highlight.text} />
        )}

        <h2 className="text-[22px] font-semibold mt-12 mb-4 tracking-[-0.015em]">결과</h2>
        <ResultsGrid metrics={project.detail.results.metrics} />
        
        <ul className="list-none space-y-1 mb-4">
          {project.detail.results.details.map((item, i) => (
            <li key={i} className="text-[16px] text-[var(--color-text-secondary)] pl-[18px] relative leading-[1.7] before:content-[''] before:absolute before:left-0 before:top-[16px] before:w-1.5 before:h-[1px] before:bg-[var(--color-text-faint)]">
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-[22px] font-semibold mt-12 mb-4 tracking-[-0.015em]">회고</h2>
        <p className="text-[16px] text-[var(--color-text-secondary)] mb-4 leading-[1.85] whitespace-pre-line">{project.detail.reflection}</p>

        {(project.links?.notion || project.links?.github || project.links?.live) && (
          <>
            <h2 className="text-[22px] font-semibold mt-12 mb-4 tracking-[-0.015em]">관련 자료</h2>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.links.notion && (
                <a href={project.links.notion} className="inline-flex items-center gap-1.5 px-[18px] py-3 bg-[var(--color-bg-card)] border border-[#E4E4E7] rounded-[10px] text-[14px] font-medium transition-colors hover:border-[var(--color-text-primary)] hover:bg-[var(--color-bg)]">📓 노션 회고 더 보기 →</a>
              )}
              {project.links.live && (
                <a href={project.links.live} className="inline-flex items-center gap-1.5 px-[18px] py-3 bg-[var(--color-bg-card)] border border-[#E4E4E7] rounded-[10px] text-[14px] font-medium transition-colors hover:border-[var(--color-text-primary)] hover:bg-[var(--color-bg)]">🌐 라이브 사이트 →</a>
              )}
              {project.links.github && (
                <a href={project.links.github} className="inline-flex items-center gap-1.5 px-[18px] py-3 bg-[var(--color-bg-card)] border border-[#E4E4E7] rounded-[10px] text-[14px] font-medium transition-colors hover:border-[var(--color-text-primary)] hover:bg-[var(--color-bg)]">💻 GitHub →</a>
              )}
            </div>
          </>
        )}
      </article>

      <ProjectPagination prev={prev} next={next} />
    </div>
  );
}
