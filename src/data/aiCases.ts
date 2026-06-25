import { AICase } from "@/lib/types";

export const aiCases: AICase[] = [
  {
    slug: "design-system-mdx",
    title: "디자인 시스템 문서화 자동화",
    summary: "Storybook MDX 작성을 AI 워크플로우로 전환해 문서화 시간을 80% 단축",
    before: "120개 컴포넌트의 사용 예시와 props 문서를 수작업으로 작성 중. 컴포넌트당 평균 1.5시간 소요되어 전체 진도가 매우 더딘 상황.",
    approach: "컴포넌트 소스 코드와 디자인 토큰을 컨텍스트로 넣고, Claude Code로 MDX 초안을 생성 → 디자이너 리뷰 → 코드 예시 검증의 3단계 파이프라인 구축.",
    after: "컴포넌트당 평균 1.5시간 → 18분. 전체 문서화 기간을 8주 → 2주로 단축. 일관된 톤과 구조 확보.",
    spread: "팀 내 가이드 문서로 정리, 다른 프로덕트팀 2곳에 워크플로우 전파.",
    tools: ["Claude Code", "Cursor", "Storybook MDX"],
  },
  {
    slug: "legacy-migration",
    title: "레거시 클래스 컴포넌트 마이그레이션",
    summary: "12만 줄 규모의 Class Component를 Function + Hooks로 점진 전환",
    before: "5년 묵은 코드베이스, Class 기반 컴포넌트 약 400개. 수작업 마이그레이션 예상 기간 3개월.",
    approach: "반복 패턴을 식별해 변환 규칙을 프롬프트로 정형화 → AST 분석 + AI 변환 스크립트 작성 → 변환 후 자동 테스트로 회귀 검증.",
    after: "총 작업 기간 3개월 → 4일. 변환 후 회귀 버그 0건. 사내 기술 발표 1회.",
    spread: "사내 주간 기술 공유회에서 'AI를 활용한 대규모 리팩토링 전략'으로 발표, 타 스쿼드 2곳에서 해당 스크립트 도입.",
    tools: ["Claude Code", "jscodeshift", "Vitest"],
  },
  {
    slug: "e2e-test-automation",
    title: "UI 테스트 코드 자동 생성 워크플로우 구축",
    summary: "스토리북과 Playwright를 연동한 E2E 테스트 코드 초안을 AI로 자동 생성",
    before: "QA 기간마다 수동 회귀 테스트에 3일 소요. 테스트 코드 작성 비용이 커서 E2E 커버리지가 10% 미만에 머무름.",
    approach: "Figma 시안과 화면의 DOM 구조를 AI에 전달하여 기본 테스트 시나리오와 Playwright 코드 초안을 생성하는 GitHub Action 스크립트 구축.",
    after: "테스트 커버리지 10% → 65% 달성. QA 기간이 3일에서 1.5일로 단축.",
    tools: ["GitHub Copilot", "Playwright", "GitHub Actions"],
  },
];
