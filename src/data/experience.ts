import { Experience, StackCategory } from "@/lib/types";

export const stackCategories: StackCategory[] = [
  {
    category: "Core",
    items: ["React", "Next.js (App Router)", "TypeScript"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS Modules", "Framer Motion"],
  },
  {
    category: "State / Data",
    items: ["TanStack Query", "Zustand", "Zod"],
  },
  {
    category: "AI-Augmented Workflow",
    items: ["Claude Code", "Cursor", "GitHub Copilot"],
    highlight: true,
  },
  {
    category: "Testing & Tooling",
    items: ["Vitest", "Playwright", "Storybook"],
  },
];

export const experiences: Experience[] = [
  {
    company: "A사 (AI 기반 B2B SaaS)",
    companyDescription: "B2B SaaS, 시리즈 B",
    period: { start: "2023.03", end: "Present" },
    role: "Frontend Engineer · 웹 클라이언트팀 파트장",
    achievements: [
      "디자인 시스템 v2 마이그레이션 주도, 신규 페이지 개발 속도 <strong>40% 단축</strong>",
      "복잡한 데이터 대시보드 구조 개편 및 캐싱 처리로 Lighthouse 성능 <strong>62 → 91</strong>, LCP <strong>2.1초 단축</strong>",
      "팀 내 Cursor·CLAUDE.md 워크플로우 정착, 스프린트당 평균 <strong>2일 절감</strong>",
      "TanStack Query 기반의 API 상태 관리 계층화로 보일러플레이트 <strong>30% 감소</strong>",
    ],
  },
  {
    company: "B사 (글로벌 커머스 플랫폼)",
    companyDescription: "커머스 플랫폼",
    period: { start: "2021.01", end: "2023.02" },
    role: "Frontend Developer · 주문/결제 도메인 스쿼드",
    achievements: [
      "3단계 결제 흐름을 단일 페이지로 통합하는 주문서 페이지 리뉴얼 리드, 전환율 <strong>8.4% 개선</strong>",
      "레거시 JS 코드 TypeScript로 점진 마이그레이션 (<strong>~12만 줄</strong>) 완료 및 엄격한 타입 룰 적용",
      "Class → Function 컴포넌트 전환 자동화 스크립트 작성, 마이그레이션 작업 시간 <strong>3주 → 4일로 단축</strong>",
      "Sentry 및 Datadog 활용한 프론트엔드 에러 모니터링 체계 구축으로 주요 버그 탐지율 <strong>60% 향상</strong>",
    ],
  },
  {
    company: "C사 (스타트업)",
    companyDescription: "O2O 서비스",
    period: { start: "2019.06", end: "2020.12" },
    role: "Frontend Developer · 사내 어드민팀",
    achievements: [
      "React와 Redux를 활용한 사내 백오피스 어드민 SPA 개발",
      "복잡한 엑셀 다운로드 로직 웹 워커(Web Worker)로 분리해 메인 스레드 프리징 방지",
      "사내 UI 컴포넌트 라이브러리 초기 버전 구축",
    ],
  },
];
