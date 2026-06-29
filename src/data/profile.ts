import { Profile } from "@/lib/types";

export const profile: Profile = {
  name: "홍대의",
  headline: "데이터 시각화 · B2G 공공 도메인 · React/Next.js 프론트엔드 엔지니어",
  status: "새로운 포지션을 찾고 있습니다.",
  bio: [
    "물리학 전공 + 프론트엔드 4년+ 백그라운드. 데이터·디바이스·실시간 시스템처럼 사용자에게 보이지 않는 복잡도를 정리해 화면 위에 명확하게 풀어내는 일에 강점이 있습니다.",
    "운영형 대시보드·데이터 시각화 영역에서 Highcharts·Apexcharts·커스텀 Progress Bar·GA4/GTM/Umami 기반 KPI 대시보드를 다수 구축했습니다. 차트 라이브러리에 종속되지 않는 시각화 추상화 패턴을 보유하고 있습니다.",
    "요구사항을 정책·상태·예외로 분해하고, 아키텍처 설계부터 검증·운영까지 하나의 사이클로 완결하는 것이 제 개발 방식입니다.",
  ],
  resumeUrl: "/resume.pdf",
  email: "aviate8@naver.com",
  socials: {
    github: "https://github.com/HongDaeEui",
    linkedin: "https://linkedin.com/in/",
  },
  skills: [
    {
      category: "Frontend",
      items: ["React 19+", "Next.js (App Router)", "TypeScript", "Vue 2/3", "Nuxt", "Tailwind CSS", "Sass/SCSS"],
    },
    {
      category: "Visualization & Analytics",
      items: ["Highcharts", "Apexcharts", "Three.js", "GA4 / GTM", "Umami", "html2canvas"],
    },
    {
      category: "State / Data",
      items: ["TanStack Query", "Zustand", "Recoil", "Redux", "Vuex"],
    },
    {
      category: "Auth / Web3",
      items: ["JWT", "next-auth", "WalletConnect", "지갑 서명", "회원 등급 라우팅"],
    },
    {
      category: "Infra / AI Workflow",
      items: ["AWS S3 · CloudFront · EC2", "Docker", "GitHub Actions", "Cursor", "Claude Code"],
    },
  ],
  education: [
    {
      title: "물리학과 학사",
      institution: "광운대학교",
      period: "2012.03 — 2016.08",
      description: "학점 4.1 / 4.5 · 졸업",
    },
  ],
};
