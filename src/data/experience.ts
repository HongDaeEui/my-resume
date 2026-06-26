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
    company: "두비두팝",
    companyDescription: "보컬 커스터마이징 스튜디오",
    period: { start: "2026.06", end: "2026.06" },
    role: "Frontend Developer · React Native + Expo",
    achievements: [
      "Figma-first 기반으로 Home→제작→프리뷰→발행→로딩 핵심 플로우를 mock 기반으로 빠르게 구축, 이후 실 API 연동 가능한 구조 마련",
      "stemSlots 모델링, 드래그&드롭, 선택/라인 배정 모드, Undo/Redo 2단계 히스토리로 제작 단계 스템 조작 UX를 안정적 인터랙션 모델로 구현",
      "idle→error→verified 상태 모델, 재생/원곡 동시 재생 방지, 재생 중 UI disable로 오작동·중복 실행 방지하여 프리뷰 검증·재생 안정화",
      "replaceAll typecheck·React key·누락 import 크래시 제거, Android 가로/Safe Area 대응, Vercel·EAS OTA 파이프라인 구성",
    ],
  },
  {
    company: "마이보이스",
    companyDescription: "더빙 체험 서비스 (User App + 덥라이트)",
    period: { start: "2026.05", end: "2026.06" },
    role: "Frontend Developer · React + Next.js",
    achievements: [
      "<strong>제작(덥라이트) → 노출(관리자) → 이용(이용자 앱) 전체 파이프라인 구축</strong>: 검수 페이지에서 생성한 씬/좌표 데이터가 content-hub → 관리자 → 이용자 앱으로 이어지는 단일 흐름 설계·구현",
      "연출/대사 타임라인 어긋남을 <strong>마커(시간)+픽셀(이미지) 이중 기준</strong>으로 해소, spoint 한계를 시간 기준 대사 수집과 픽셀 기준 이미지 크롭으로 분리해 정합성 확보",
      "줌 뷰어에서 대사 순서대로 말풍선을 페어링하고 절대 px + 비율(%) 이중 저장으로 관리자↔이용자 렌더 스케일 차이에서도 위치 안정화",
      "스트리밍 더빙 체험 기술 리스크를 PoC 기준으로 선제 정의, 웹/모바일 녹음 플로우·독립 플레이어 구조 개편으로 이후 확장 시 결합도 감소",
    ],
  },
  {
    company: "보고팡 (B2G 고도화)",
    companyDescription: "B2G 전자도서관 서비스",
    period: { start: "2026.05", end: "2026.06" },
    role: "Frontend Developer · React + Next.js",
    achievements: [
      "시범 → 정식 전환 구간 권한 판정·배너/로고 리소스·플레이어 로딩·모바일 배너 등 사용자 영향도 높은 영역 선제 점검·수정, 시범모드 권한 판정 로직 단일화",
      "인앱 알림(ADMIN/CLIENT/USER 수신자·이벤트·목록/카운트/읽음 API·테넌트 분리), 라이선스 회수(비활성화→강제 반납/취소→알림→이력), 문의 고도화(접수→답변 2단계·첨부 제한·다중 답변) 정책을 구현 단위로 구조화",
    ],
  },
  {
    company: "보고팡 (B2G 실서비스)",
    companyDescription: "B2G 전자도서관 서비스",
    period: { start: "2026.02", end: "2026.04" },
    role: "Frontend Developer · React + Next.js",
    achievements: [
      "<strong>시범(Trial) ↔ 운영(Operational) 듀얼 모드 아키텍처 도입</strong>: 서브도메인 기반 모드 판별 + 공개 조회 API + AppAuthGate 무로그인 통과 + 라우트 이동 시 재조회를 결합한 아키텍처 설계·구현, 새로고침 시 모드 확정 전 렌더 차단(flicker 제거)으로 신뢰도 확보",
      "번호표 기반 예약 + 반납 시 자동 대출, 실시간 대출/예약 상태 노출·한도/예외 케이스까지 UX 확정 문서 기준으로 구현 범위 고정",
      "체험하기 수동 매칭 시스템 도입으로 썸네일/마커 정합성 이슈 해소: 이미지-대사 직접 페어링(HoleDrawNew)으로 전환, 관리자→이용자→미리보기 3 surface 직접 매핑 우선 + 추정 fallback 이중 안전 구조",
      "<strong>Umami 기반 자체 애널리틱스 구축</strong>: EC2 + Docker Umami 서버 구축, B2B 영업 지표 4종 자동 계측 + 운영팀 셀프 리포팅 가이드 패키지 제공",
    ],
  },
  {
    company: "픽미툰",
    companyDescription: "웹툰 스트리밍 서비스",
    period: { start: "2026.03", end: "2026.03" },
    role: "Frontend Developer · Vue 3 + Quasar",
    achievements: [
      "Umami 기반 자체 웹 애널리틱스 도입: 조회(크리에이터/작품/웹툰컷) → 감상(플레이어 진입/회차 이동) → 결제(충전/결제 성공) → 커뮤니티 상호작용까지 퍼널 단위 계측 구성",
      "테스트 시나리오(TEST 1~11)로 트래킹 품질을 검증 가능한 상태로 고정: Network(api/send) 기반 이벤트명/파라미터 정확도, 비로그인 식별/전환 포인트까지 검증 범위 확장",
    ],
  },
  {
    company: "푸딩툰 (2차 개발)",
    companyDescription: "보이스툰 스트리밍 서비스",
    period: { start: "2026.01", end: "2026.02" },
    role: "Frontend Developer · React + Next.js",
    achievements: [
      "Flutter 병렬 다운로드(Dio) + 중복 다운로드 스킵 + preload/blob 처리 통일로 <strong>플레이어 로딩 60초 → 3~5초(약 92% 단축)</strong> 및 초기 화면 표시 시간 10~12초 단축",
      "뮤직(OST) 재생/미니플레이어/상세/리스트 편집/스트리밍 구현 및 iOS/Android 스토어 심사 이슈 소명·재심사 대응으로 출시 안정화",
      "GA4/GTM 이벤트 설계·구현: 하이브리드(WebView) 환경 트래킹 품질 복구, 웹/앱 스트림 분리·Firebase 연동·User-ID 트래킹 보완·이벤트 네이밍 컨벤션 표준화",
    ],
  },
  {
    company: "보고팡 (영업용)",
    companyDescription: "B2G 전자도서관 서비스",
    period: { start: "2026.02", end: "2026.02" },
    role: "Frontend Developer · React + Next.js",
    achievements: [
      "Host 기반 멀티도메인(4개) 브로셔 아키텍처 구축: 단일 레포에서 아이/학습/도서관/시니어 타겟별 도메인 라우팅 및 디자인·페이지 분기를 구현해 운영/확장 가능한 멀티테넌시 구조 확립",
      "도메인별 메인·전체목록·체험하기와 시범 신청 플로우 구축 및 배포, 자체 애널리틱스(Umami) 기반 이벤트 수집 체계 구축",
    ],
  },
  {
    company: "푸딩툰 (리뉴얼)",
    companyDescription: "보이스툰 스트리밍 서비스",
    period: { start: "2025.11", end: "2025.12" },
    role: "Frontend Engineer · React + Next.js",
    achievements: [
      "Vue 기반 기존 서비스를 <strong>React + Next.js(App Router)로 마이그레이션</strong>, 플레이어 기능을 제외한 사이트 전반 대폭 개편 후 리뉴얼 런칭",
      "합류 직후 프론트엔드 전반 오너십을 맡아 프로젝트 구조 설계부터 퍼블리싱·개발·QA 대응까지 E2E 주도, 3인 팀에서 후임 1명 온보딩/관리",
    ],
  },
  {
    company: "RWA NOVA",
    companyDescription: "실물 자산 토큰화 RWA 플랫폼",
    period: { start: "2025.01", end: "2025.06" },
    role: "Frontend Developer · React + Next.js",
    achievements: [
      "실물 자산 토큰화·거래·스테이킹·P2P 거래를 지원하는 사용자 중심 RWA 플랫폼 개발 및 배포",
      "reown 기반 지갑 연결 및 서명 절차 개발, 회원가입/로그인 복잡한 예외 케이스를 모달 컴포넌트 분리 및 자체 로직으로 안정적 처리",
      "GSAP·Framer Motion 스크롤 애니메이션·카운팅 효과 구현, 동적 페이지 콘텐츠에 Schema Markup 적용으로 검색 엔진 노출도 향상",
    ],
  },
  {
    company: "세일즈포스",
    companyDescription: "영업 관리 어드민 시스템",
    period: { start: "2025.03", end: "2025.04" },
    role: "Frontend Developer · React + Next.js",
    achievements: [
      "vuexy 템플릿 활용으로 판매·매입·출고 등 다수 관리자 페이지를 빠르고 일관성 있게 구축, 개발 효율 극대화",
      "기존 서버 세션과 next-auth 간 충돌 문제를 독자적인 방식으로 해결, Apexcharts로 매출·주문량·순마진 핵심 지표 시각화",
    ],
  },
  {
    company: "LGE-COE 2024 #2 Home Energy",
    companyDescription: "LG ThinQ 연동 홈 에너지 NFT 인증 플랫폼",
    period: { start: "2024.07", end: "2024.12" },
    role: "Frontend Developer · React + Next.js",
    achievements: [
      "LG ThinQ 앱 에너지 데이터 활용, Wallypto 지갑 연동 NFT 인증서 발급 시스템 개발 및 배포",
      "DID 기반 홈 에너지 인증 플랫폼 구축: 에너지 등급 승인 절차, NFT 증서 상세 정보·히스토리 관리 시스템, 블록체인 탐색기 개발",
      "안드로이드/iOS/PC 환경에서 WalletConnect 기반 Wallypto 지갑 연결, 관리자용 대시보드와 사용자용 모바일 웹 모두 개발",
    ],
  },
  {
    company: "엔터블록 홈페이지 리뉴얼",
    companyDescription: "블록체인 기업 브랜드 사이트",
    period: { start: "2024.11", end: "2024.11" },
    role: "Frontend Developer · React",
    achievements: [
      "Three.js·ShaderMaterial 활용 홀로그래픽 큐브 및 물리 기반 충돌 시뮬레이션 구현, 마우스 커서에 반응하는 동적 인터랙션 개발",
      "홀로그래픽 효과·빛의 굴절 표현을 위한 커스텀 셰이더 코드 작성, 큐브 간 충돌 감지·속도 제어 물리 엔진 로직 직접 구현",
    ],
  },
  {
    company: "Hedera Community",
    companyDescription: "Hedera 블록체인 생태계 커뮤니티 플랫폼",
    period: { start: "2024.04", end: "2024.06" },
    role: "Frontend Developer · React + Next.js",
    achievements: [
      "Hedera 블록체인 생태계 사용자를 위한 커뮤니티 플랫폼 설계·개발, AI 챗봇(Hash Chat) UI/UX 개발 및 퀘스트 기반 온보딩 시스템 구현",
      "Sass 기반 반응형 디자인, 에디터 게시판 삽입, 다양한 게시판(기술 Q&A·커리어 Q&A) 및 마이페이지 기능 개발",
    ],
  },
  {
    company: "LG CoE 과제 NO.5 Home Energy",
    companyDescription: "LG ESG 경영 실현 블록체인 플랫폼",
    period: { start: "2023.09", end: "2024.02" },
    role: "Frontend Developer · React + Next.js",
    achievements: [
      "Green Plant 핵심 시스템 구축: JWT 인증·Recoil 상태 관리 기반 로그인 상태 유지·회원 등급별 라우팅 제어 구현",
      "실시간 매수/매도 주문 데이터를 커스텀 Progress Bar 컴포넌트로 시각화, Wallypto 지갑 연동(PC QR코드/모바일 딥링크) 구현",
      "발전소 유형에 따른 동적 등록 폼·임시 저장 기능, 다단계 프로세스 데이터 목록·상태 관리, 어드민 마켓 관리 기능 개발",
    ],
  },
  {
    company: "Riskly",
    companyDescription: "데이터 분석 리포트 서비스",
    period: { start: "2023.06", end: "2023.08" },
    role: "Frontend Developer · Vue 2 + Nuxt",
    achievements: [
      "highcharts 라이브러리 활용 다양한 차트·보고서 구현, 스크린샷·CSV 다운로드 기능을 공용 컴포넌트로 개발해 재사용성 확보",
      "스크롤에 따라 사이드바를 고정시키고 데이터 양이 많은 테이블·차트 가독성을 높이는 반응형 디자인 구현",
    ],
  },
  {
    company: "BY BEATS",
    companyDescription: "뮤지션 멘토링·음원 플랫폼",
    period: { start: "2023.02", end: "2023.05" },
    role: "Frontend Developer · React + Next.js",
    achievements: [
      "회원 등급(작곡가·멘토·프리미엄)에 따른 복합적인 인증·권한 관리 로직 구현, 멘토링 예약·채팅방 기반 코칭 진행 기능 개발",
      "토스 페이먼츠 연동으로 요금제·음원·코칭 이용권 결제 기능 개발, 쿠폰·포인트 할인 로직·정산 내역 페이지 구현",
    ],
  },
  {
    company: "Megavote",
    companyDescription: "글로벌 투표 플랫폼",
    period: { start: "2022.10", end: "2022.12" },
    role: "Frontend Developer · Vue 2 + Nuxt",
    achievements: [
      "한국어·중국어 다국어(i18n) 환경 구축, 언어팩을 JSON 파일로 분리·동적 관리로 글로벌 서비스 확장성 확보",
      "투표권 구매·광고 시청 보상·선물하기 등 투표권 관리 기능 구현, localStorage 기반 사용자 데이터 영속성 확보",
    ],
  },
  {
    company: "Higherhash",
    companyDescription: "음악 NFT 마켓플레이스",
    period: { start: "2022.08", end: "2023.01" },
    role: "Frontend Developer · Vue 2 + Nuxt",
    achievements: [
      "Wallypto 지갑 연동 포함 Web3 기술 적용으로 음악 NFT 마켓플레이스 핵심 기능 구현 및 운영",
      "외부 라이브러리 한계 극복을 위한 커스텀 로직 설계 및 비동기 타이밍 문제 해결로 플레이리스트·랜덤 재생 기능 구현",
    ],
  },
  {
    company: "엔터블록 공식 홈페이지 리뉴얼",
    companyDescription: "블록체인 기업 브랜드 사이트",
    period: { start: "2022.08", end: "2022.08" },
    role: "Frontend Developer · Vue 2 + Nuxt",
    achievements: [
      "three.js 쉐이더(vertex.glsl·fragment.glsl) 직접 튜닝을 통한 메인 히어로 섹션 3D 파도 효과 구현",
      "SVG 드로잉 효과·커스텀 스크롤·캐러셀 로직 적용, Nuxt.js SSR 환경 제약 극복 및 모바일·데스크톱 동적 렌더링 최적화",
    ],
  },
  {
    company: "NE1",
    companyDescription: "음악 NFT 서비스",
    period: { start: "2022.03", end: "2022.07" },
    role: "Frontend Developer · Vue 2",
    achievements: [
      "서비스 전체 페이지 UI 퍼블리싱·반응형 대응(PC/모바일/태블릿), 커스텀 오디오 플레이어 구현(싱크·재생 컨트롤·파형 표시·재생 목록)",
      "ethers.js 기반 이더리움 로그인·NFT 민팅·거래(Buy/Sell) 기능 구현, 랜딩페이지 스크롤 연동 네비게이션·컬러 전환·마우스휠 제어 구현",
    ],
  },
  {
    company: "Lai",
    companyDescription: "디파이 대출 서비스 MVP",
    period: { start: "2021.12", end: "2022.01" },
    role: "Frontend Developer · React",
    achievements: [
      "React 기반 구조 설계부터 AWS EC2 배포까지 프론트 단독 수행",
      "ETH 담보 기반 LUSD 대출 페이지 퍼블리싱, 사무라이 지갑 연동·유저 잔고 확인 기능 개발",
    ],
  },
];
