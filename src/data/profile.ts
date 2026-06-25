import { Profile } from "@/lib/types";

export const profile: Profile = {
  name: "김민재",
  headline: "AI 도구로 더 빠르게 만드는 React/Next.js 프론트엔드 엔지니어 · 5년차",
  status: "현재 새로운 B2B SaaS 기업의 시니어 포지션을 찾고 있습니다.",
  bio: [
    "스타트업부터 성장기 기업까지, B2B SaaS와 커머스 서비스를 주로 만들어왔습니다.",
    "디자인 시스템을 성공적으로 안착시켜 팀의 생산성을 40% 이상 높인 경험이 있으며, 프론트엔드 성능 최적화(LCP 개선, 렌더링 최적화)에 강점이 있습니다.",
    "특히 AI 도구(Claude Code, Cursor)를 일상 워크플로우에 적극 도입하여 개발 단축과 자동화를 이루는 등, 언제나 '더 나은 개발 방법'을 고민합니다."
  ],
  resumeUrl: "/resume.pdf",
  email: "hello@example.com",
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    blog: "https://velog.io/",
  },
  skills: [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand", "TanStack Query"] },
    { category: "AI & Tools", items: ["Claude Code", "Cursor", "GitHub Copilot", "Vitest", "Playwright", "Figma"] },
    { category: "Backend & Infra", items: ["Node.js", "Express", "Vercel", "GitHub Actions"] },
  ],
  education: [
    {
      title: "컴퓨터공학과 학사",
      institution: "한국대학교",
      period: "2015.03 - 2021.02",
      description: "웹 프로그래밍 동아리(WebDev) 회장 역임, 다수의 교내 프로젝트 리드",
    },
    {
      title: "우아한 테크 코스 0기 (가칭)",
      institution: "우아한 형제들",
      period: "2020.07 - 2020.12",
      description: "React 기반 SPA 아키텍처 설계 및 프론트엔드 성능 최적화 집중 과정 수료",
    }
  ]
};
