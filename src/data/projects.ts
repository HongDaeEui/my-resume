import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "design-system-v2",
    name: "디자인 시스템 v2",
    oneLiner: "전사 디자인 시스템 마이그레이션 및 컴포넌트 라이브러리 구축",
    period: { start: "2024.01", end: "2024.08" },
    team: "4명 (FE 3, 디자이너 1)",
    role: "테크리드",
    contributions: [
      "<strong>120여 개</strong> 컴포넌트 마이그레이션, 토큰 기반 테마 시스템 설계",
      "Storybook <strong>자동 문서화</strong> 워크플로우 구축 (AI 기반)",
      "전사 11개 프로덕트팀 점진 도입, 6개월 내 <strong>80% 채택</strong>",
    ],
    stack: ["React", "TypeScript", "Vanilla Extract", "Storybook"],
    links: {
      live: "#",
      notion: "#",
    },
    type: "work",
    detail: {
      background: "기존 디자인 시스템 v1은 4년 전에 구축된 이후, 빠르게 늘어난 프로덕트들의 요구사항을 따라가지 못하고 있었습니다. 토큰 체계가 일관되지 않아 디자이너와의 협업에 마찰이 잦았고, 컴포넌트 API가 통일되지 않아 신규 입사자의 학습 비용도 높은 상태였습니다.\n\n새로운 시스템은 세 가지를 목표로 설계했습니다: 토큰 기반의 일관된 디자인 언어, 프로덕트팀이 쉽게 채택할 수 있는 점진적 마이그레이션 경로, 그리고 AI 기반 자동 문서화.",
      approach: [
        "토큰 시스템을 재설계해 디자이너의 Figma Variable과 1:1 매핑되도록 구성",
        "11개 프로덕트팀의 사용 패턴을 분석해 우선순위 컴포넌트 30개 선정",
        "레거시 시스템과 v2를 같은 코드베이스에서 동시 운영, 팀별 마이그레이션 속도 조절 가능",
        "Storybook MDX 문서를 AI 워크플로우로 자동 생성 (별도 케이스 스터디 참조)",
      ],
      highlight: {
        label: "핵심 의사결정",
        text: "\"한 번에 다 갈아엎기\"가 아닌 \"공존하며 점진 이전\"을 선택. 11개 팀이 각자 일정에 맞춰 마이그레이션할 수 있도록 두 버전이 같이 동작하는 구조를 만들었고, 이게 채택률을 결정한 가장 중요한 의사결정이었습니다.",
      },
      results: {
        metrics: [
          { value: "40%", label: "신규 페이지\n개발 속도 단축" },
          { value: "80%", label: "6개월 내\n프로덕트팀 채택률" },
          { value: "120+", label: "마이그레이션한\n컴포넌트 수" },
        ],
        details: [
          "11개 프로덕트팀 중 9개팀이 6개월 내 v2로 전환 완료",
          "디자이너-개발자 간 토큰 관련 커뮤니케이션 80% 이상 감소 (자체 설문)",
          "신규 FE 입사자 평균 온보딩 시간 2주 → 1주 단축에 기여",
        ],
      },
      reflection: "가장 큰 학습은 \"기술적 정합성\"보다 \"채택 가능성\"이 더 중요하다는 거였습니다. 처음 설계 단계에서는 v1을 deprecated 처리하고 강제 마이그레이션하는 방향도 검토했는데, 각 프로덕트팀이 자기 일정이 있는 상태에서는 현실적이지 않다는 걸 사전 PR 리뷰 과정에서 깨달았습니다. 공존하는 구조로 바꾼 게 결과적으로 채택률을 좌우했습니다.\n\n또 하나는 문서화의 중요성. AI 자동화로 문서 작성 시간을 80% 줄였는데, 이게 없었다면 8주 안에 끝낼 수 없었을 거예요. 문서가 빨리 정리되니 팀들이 자연스럽게 따라왔습니다.",
    },
  },
  {
    slug: "order-page-renewal",
    name: "주문서 페이지 리뉴얼",
    oneLiner: "결제 전환율 개선을 위한 주문서 페이지 전면 개편",
    period: { start: "2022.06", end: "2022.11" },
    team: "6명",
    role: "FE 메인",
    contributions: [
      "3단계 결제 흐름을 단일 페이지로 통합, 이탈률 <strong>22% 감소</strong>",
      "이미지 최적화 + 코드 스플리팅으로 LCP <strong>4.2초 → 1.6초</strong>",
      "A/B 테스트 4회 운영, 최종 전환율 <strong>8.4% 개선</strong>",
    ],
    stack: ["Next.js", "TypeScript", "React Hook Form"],
    type: "work",
    detail: {
      background: "기존 주문서 페이지는 3단계로 분리되어 있어 유저 이탈률이 매우 높았습니다. 특히 모바일 환경에서 페이지 전환 시 로딩이 길어지는 문제가 있었습니다.",
      approach: [
        "React Hook Form을 도입해 3단계 입력을 하나의 폼으로 통합하고 상태 관리 단순화",
        "next/image와 Dynamic Import를 적용해 초기 로딩 속도 최적화",
        "A/B 테스트를 4회 진행하며 최적의 UI 컴포넌트 배치 탐색"
      ],
      results: {
        metrics: [
          { value: "22%", label: "결제 이탈률 감소" },
          { value: "1.6s", label: "LCP 속도 단축" },
          { value: "8.4%", label: "최종 전환율 개선" }
        ],
        details: [
          "주문 플로우 단축으로 일매출 15% 상승 효과 기여",
          "코드 스플리팅으로 번들 사이즈 40% 감소"
        ]
      },
      reflection: "복잡한 폼 상태 관리를 React Hook Form으로 일원화하면서 렌더링 성능이 크게 개선되었습니다. 기술적 최적화가 비즈니스 지표(전환율)로 직접 연결되는 경험을 통해 FE 개발의 임팩트를 체감할 수 있었습니다."
    }
  },
  {
    slug: "prompt-stash",
    name: "prompt-stash",
    oneLiner: "개인 프롬프트 라이브러리 관리 도구 (오픈소스)",
    period: { start: "2025.04", end: "진행 중" },
    team: "솔로",
    role: "FE 메인",
    contributions: [
      "Claude Code와 페어 코딩으로 <strong>4일 만에 MVP 완성</strong>",
      "GitHub <strong>Star 240+</strong>, 주간 활성 사용자 <strong>80여 명</strong>",
      "로컬 우선 데이터 모델 + 옵셔널 동기화 구조",
    ],
    stack: ["Next.js 15", "TypeScript", "SQLite"],
    links: {
      github: "#",
    },
    type: "personal",
    detail: {
      background: "ChatGPT, Claude 등 다양한 AI 툴을 사용하면서 자주 쓰는 프롬프트들이 흩어져 관리하기 어려웠습니다. 이를 한 곳에서 모아보고 복사할 수 있는 가벼운 개인 도구가 필요했습니다.",
      approach: [
        "오프라인에서도 빠르게 동작하도록 SQLite를 활용한 로컬 우선(Local-first) 아키텍처 설계",
        "Claude Code를 활용해 초기 MVP 모델을 4일 만에 빠르게 프로토타이핑",
        "Next.js 15의 최신 App Router 기능들을 적용해 빠른 인터랙션 구현"
      ],
      results: {
        metrics: [
          { value: "4일", label: "MVP 개발 기간" },
          { value: "240+", label: "GitHub Stars" },
          { value: "80명", label: "주간 활성 사용자" }
        ],
        details: [
          "오픈소스 공개 후 개발자 커뮤니티에서 좋은 반응을 얻음",
          "다양한 언어와 테마를 지원하는 확장성 있는 구조 마련"
        ]
      },
      reflection: "AI와 짝 프로그래밍을 할 때 얼마나 생산성이 올라가는지 체감한 프로젝트였습니다. 처음으로 로컬 우선 아키텍처를 도입해보며 데이터 동기화에 대한 깊은 고민을 할 수 있었습니다."
    }
  },
];
