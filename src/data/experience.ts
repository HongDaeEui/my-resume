import { Experience, StackCategory } from "@/lib/types";

export const stackCategories: StackCategory[] = [
  {
    category: "Core",
    items: ["React 19+", "Next.js (App Router)", "TypeScript", "Vue 2/3", "Nuxt"],
  },
  {
    category: "Visualization",
    items: ["Highcharts", "Apexcharts", "Three.js / GLSL", "GA4 / GTM", "Umami"],
    highlight: true,
  },
  {
    category: "State / Network",
    items: ["TanStack Query", "Zustand", "Recoil", "WebSocket", "Axios"],
  },
  {
    category: "Auth / Web3",
    items: ["JWT", "next-auth", "WalletConnect", "지갑 서명", "회원 등급 라우팅"],
  },
  {
    category: "Infra / Tooling",
    items: ["AWS S3 · CloudFront · EC2", "Docker", "GitHub Actions", "Vite", "Webpack"],
  },
];

export const experiences: Experience[] = [
  {
    company: "(주)두비덥",
    companyDescription: "플랫폼본부 · 매니저",
    period: { start: "2025.11", end: "Present" },
    role: "Frontend Engineer · 프론트엔드 개발 및 관리",
    achievements: [
      "WebView 플레이어 Flutter 병렬 다운로드 + preload/blob 표준화로 <strong>로딩 60초 → 3~5초 (약 92% 단축)</strong>",
      "B2G 시범/운영 듀얼 모드 아키텍처 설계·구현: 서브도메인 판별 + AppAuthGate + React Query 키 분리 + 안전 롤아웃 플래그로 단일 코드베이스에서 시범 ↔ 운영 안전 전환",
      "단일 Next.js에서 4개 서브도메인 멀티테넌시(kids/edu/senior/lib) 브로셔 아키텍처 구축 및 배포",
      "EC2 + Docker Umami 자체 분석 인프라 구축, B2B 영업 지표 4종 자동 계측 + 운영팀 셀프 리포팅 가이드 패키지화",
    ],
  },
  {
    company: "(주)엔터블록",
    companyDescription: "선임연구원",
    period: { start: "2021.12", end: "2025.05" },
    role: "Frontend Engineer · 프론트엔드 개발",
    achievements: [
      "LG CoE Home Energy 프로젝트: LG ThinQ 앱 에너지 데이터 기반 <strong>DID 인증 플랫폼 + NFT 인증서 발급 시스템</strong> 구축, Wallypto 지갑 연동(PC QR/모바일 딥링크)",
      "Three.js · GLSL Shader 직접 튜닝 기반 홀로그래픽 큐브·3D 파도 효과·물리 시뮬레이션 구현 (엔터블록 홈페이지 리뉴얼 2022·2024)",
      "Higherhash·RWA NOVA·NE1 등 다수 <strong>Web3 / NFT 마켓플레이스</strong> 개발, reown/WalletConnect 기반 지갑 인증 및 회원 권한 라우팅 구현",
      "Hedera Community 플랫폼 전체 프론트엔드 설계·개발: AI 챗봇(Hash Chat) UI/UX + 퀘스트 기반 온보딩 시스템",
    ],
  },
  {
    company: "(사)벤처기업협회",
    companyDescription: "인턴 · 사원",
    period: { start: "2018.09", end: "2018.11" },
    role: "서비스 개발",
    achievements: [
      "서비스 개발 업무 담당",
    ],
  },
];
