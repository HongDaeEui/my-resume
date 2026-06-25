# 개인 이력서 사이트 기획서

> React/Next.js 5년차 프론트엔드 엔지니어의 이력서 / 포트폴리오 사이트
> 작성일: 2026-06-22

---

## 1. 프로젝트 개요

### 1.1 프로젝트명 (제안)
`{이름}.dev` — 개인 이력서 / 포트폴리오 사이트

### 1.2 목적
- React/Next.js 5년차 프론트엔드 엔지니어로서의 전문성을 명확하게 전달
- 다른 5년차 후보들과 차별화되는 **"AI 도구 활용 실업무 경험"** 어필
- 채용 담당자가 7~10초 내에 핵심 정보를 파악할 수 있는 가독성
- PDF 이력서와 동등한 정보를 담되, 라이브 링크·코드 데모 등 PDF가 제공할 수 없는 가치 추가

### 1.3 타겟 사용자
- **주 사용자**: 국내 IT 회사 채용 담당자 / 개발 리더 / 헤드헌터
- **보조 사용자**: LinkedIn·원티드·블로그 등에서 유입된 동료 개발자

### 1.4 핵심 차별점
1. AI 활용 실업무 사례를 케이스 스터디 형식으로 전면 배치 (다른 후보 대비 가장 강한 차별점)
2. 한국 채용 시장에 맞춘 정보 구조 (원티드 프로필 IA 차용)
3. 사이트 자체가 본인의 코드·디자인 역량 증명물

### 1.5 성공 지표 (정성)
- 채용 담당자가 PDF만 보지 않고 사이트까지 클릭
- 사이트 방문 후 면접 제안·컨택 증가
- 사이트의 기술 스택·AI 사례가 면접에서 자연스럽게 화제가 됨

---

## 2. 정보 구조 (IA)

### 2.1 페이지 구성

원페이지 스크롤형. 별도 라우팅 없이 앵커 네비게이션.

```
/                            메인 (한 페이지, 7개 섹션 스크롤)
├─ #profile                  Hero / Profile
├─ #stack                    Tech Stack
├─ #experience               경력 (Work Experience)
├─ #work-projects            프로젝트 — 회사
├─ #personal                 프로젝트 — 개인
├─ #ai-cases                 AI 활용 실업무 사례 ⭐
└─ #contact                  Contact

/projects/[slug]             프로젝트 상세 페이지 (동적 라우트)
/resume.pdf                  PDF 이력서 정적 파일
```

**라우팅 전략**
- 메인 페이지는 한 페이지 스크롤형 (앵커 네비게이션)
- 각 프로젝트(회사·개인 모두)는 `/projects/[slug]` 형태의 동적 라우트로 별도 페이지 제공
- 노션은 별도 라우트 없이 외부 링크로만 활용 (보조 자료실)

향후 확장 (선택):
- `/blog` — 블로그 (필요 시)
- `/ai-cases/[slug]` — AI 사례도 상세 페이지화 (반응이 좋다면)

### 2.2 네비게이션
- 상단 고정 네비게이션, 스크롤 시 살짝 축소 또는 그림자
- 모바일은 햄버거가 아닌 간단한 텍스트 링크
- 각 메뉴 클릭 시 해당 섹션으로 스무스 스크롤

### 2.3 정보 위계 (스크롤 우선순위)
1. **1순위**: 한 줄 포지셔닝 → 최근 경력 → AI 활용 사례
2. **2순위**: 기술 스택, 프로젝트 디테일
3. **3순위**: 개인 프로젝트, 학력

---

## 3. 섹션별 상세 기획

### 3.1 Hero / Profile

**콘텐츠**
- 이름 (h1)
- 한 줄 포지셔닝 (h2)
- 자기소개 2~3문장
- CTA 버튼: `이력서 PDF 다운로드`, `이메일 보내기`
- 소셜 링크: GitHub, LinkedIn, **Notion**, (선택) Blog

**데이터 구조**
```ts
type Profile = {
  name: string;
  headline: string;       // 한 줄 포지셔닝
  bio: string[];          // 2~3문장
  resumeUrl: string;      // /resume.pdf
  email: string;
  socials: {
    github: string;
    linkedin: string;
    notion?: string;      // 보조 포트폴리오 노션 공간
    blog?: string;
  };
};
```

**작성 가이드**
- **한 줄 포지셔닝 공식**: `기술 + 연차 + 차별점`
  - 예: "AI 도구로 더 빠르게 만드는 React/Next.js 프론트엔드 엔지니어 · 5년차"
- **자기소개 3문장 구조**: `어떤 분야 서비스 + 무엇에 강함 + 지향점`

---

### 3.2 Tech Stack

**콘텐츠**
- 카테고리별 그룹화
- 각 기술은 텍스트 태그 (아이콘 없어도 무방, 단순함이 가독성)

**데이터 구조**
```ts
type StackCategory = {
  category: string;
  items: string[];
};
```

**권장 카테고리**
- **Core**: React, Next.js (App Router), TypeScript
- **Styling / Design System**: Tailwind, ...
- **State / Data**: TanStack Query, Zustand, ...
- **AI-Augmented Workflow** ⭐: Claude Code, Cursor, GitHub Copilot
- **Testing & Tooling**: Vitest, Playwright, ...
- **CI/CD & Infra**: Vercel, AWS, ...

**작성 가이드**
- 실무에서 능숙하게 다룬 기술만. 토이 프로젝트 1회 사용은 제외
- 카테고리당 4~7개가 적정. 너무 많으면 깊이 의심받음
- **"AI-Augmented Workflow"를 반드시 별도 카테고리로 분리** — 이게 보이는 순간 시그널이 박힘

---

### 3.3 경력 (Work Experience)

**콘텐츠 (회사별)**
- 회사명 + 한 줄 소개 (예: "B2B SaaS, 시리즈 B, 직원 50명")
- 재직 기간 (YYYY.MM ~ YYYY.MM)
- 직무 / 직책
- 주요 성과 3~5개

**데이터 구조**
```ts
type Experience = {
  company: string;
  companyDescription: string;
  period: { start: string; end: string | "Present" };
  role: string;
  achievements: string[];  // 각 1~2줄, 수치 중심
};
```

**성과 작성 공식**: `(상황/문제) → (한 일) → (수치 결과)`

| ✗ 나쁜 예 | ✓ 좋은 예 |
|---|---|
| 성능 개선 작업 수행 | 주문서 페이지 LCP 4.2초 → 1.6초 (이미지 최적화 + 코드 스플리팅) |
| 디자인 시스템 작업 | 디자인 시스템 v2 마이그레이션 주도, 신규 페이지 개발 속도 40% 단축 |
| 신입 교육 | 신규 입사자 온보딩 가이드 작성, 평균 온보딩 기간 2주 → 1주 |

수치가 없는 항목은 임팩트의 **범위**를 드러내는 단어로: "전사", "팀 단위", "주도", "도입"

---

### 3.4 프로젝트 — 회사 (Work Projects)

**콘텐츠 (프로젝트별 — 메인 카드)**
- 프로젝트명 + 한 줄 설명
- 기간 / 팀 구성 / 본인 역할
- 주요 기여 3~4개
- 기술 스택 태그
- **카드 전체가 `/projects/[slug]` 상세 페이지로 링크** (호버 시 "자세히 보기 →" 표시)

**데이터 구조**
```ts
type Project = {
  slug: string;          // URL 식별자, 예: "design-system-v2"
  name: string;
  oneLiner: string;
  period: { start: string; end: string };
  team: string;          // "PM 1, 디자이너 2, FE 3, BE 2"
  role: string;
  contributions: string[];
  stack: string[];
  links?: {
    live?: string;
    github?: string;
    notion?: string;     // 노션 회고/상세 자료
  };
  type: "work" | "personal";
  detail: ProjectDetail; // 상세 페이지 본문 (아래 3.6 참조)
};
```

**작성 가이드**
- NDA로 스크린샷 못 올리면 "어떤 문제 → 어떤 접근 → 어떤 결과"를 텍스트로
- 메인 페이지 카드에는 2~3개만. 가장 임팩트 컸던 것 위주
- 경력 섹션과 중복되지 않게 — 경력은 "전반적 성과", 프로젝트는 "구체적 케이스"

---

### 3.5 프로젝트 — 개인 (Personal Projects)

3.4와 동일 구조, 단 다음 차이점:
- **GitHub + 라이브 데모 링크가 필수** (채용자가 실제 코드를 볼 수 있는 유일한 곳)
- 1~2개 권장. 너무 많으면 산만
- AI를 적극 활용해 만든 프로젝트가 1개 있으면 최고

---

### 3.6 프로젝트 상세 페이지 (`/projects/[slug]`)

**라우팅**
- Next.js App Router의 동적 라우트: `app/projects/[slug]/page.tsx`
- 회사·개인 프로젝트 모두 공통 라우트 사용
- `generateStaticParams`로 빌드 시 정적 생성 (SEO·성능)

**페이지 구성 (위에서 아래로)**

1. **상단 네비**: `← 돌아가기` 작은 링크
2. **타이틀 영역**
   - 라벨 (`Work Project` 또는 `Personal`)
   - 프로젝트명 (h1)
   - 한 줄 요약
3. **메타 그리드** (2×2): 기간 · 팀 구성 · 역할 · 스택
4. **본문 4단**
   - 배경 (Background)
   - 접근 (Approach)
   - 결과 (Results) — 큰 숫자 카드 3개 + 보조 리스트
   - 회고 (Reflection)
5. **하이라이트 박스** (선택): 핵심 의사결정 / 인사이트 강조
6. **관련 자료** (External Links)
   - 노션 회고 더 보기
   - 라이브 / GitHub / 발표 자료 등
7. **하단 페이지네이션**: `← 이전 프로젝트` / `다음 프로젝트 →`

**데이터 구조**
```ts
type ProjectDetail = {
  background: string;          // 배경 (2~3 문단)
  approach: string[];          // 접근 (불릿)
  highlight?: {                // 강조할 핵심 의사결정 (선택)
    label: string;             // 예: "핵심 의사결정"
    text: string;
  };
  results: {
    metrics: {                 // 결과 카드 3개
      value: string;           // 예: "40%", "120+"
      label: string;           // 예: "신규 페이지 개발 속도 단축"
    }[];
    details: string[];         // 보조 리스트
  };
  reflection: string;          // 회고 (1~3 문단)
};
```

**작성 가이드**
- **배경**: 문제를 명확히. 추상적인 "성능이 안 좋았다" 대신 "주문서 LCP 4.2초로 결제 이탈률 증가"
- **접근**: 의사결정의 트레이드오프를 보여주기. "왜 A 대신 B를 선택했나"
- **결과**: 메인 페이지보다 더 풍부한 수치. 보조 리스트로 정성적 영향까지
- **회고**: 솔직하게. 잘된 것뿐 아니라 다음에 다르게 할 점도 1~2개 포함하면 시니어 톤이 살아남
- **노션 링크 활용**: 사이트에 쓰기에 너무 긴 내용(실패 시도, 미팅 노트, 상세 트레이드오프)은 노션에 두고 링크

**필수 충족 조건**
- 최소 1개 프로젝트는 상세 페이지가 완성되어야 메인 페이지 카드가 의미가 있음
- 모든 프로젝트가 완성되지 않았다면, 미완성 프로젝트 카드는 메인에서 우선 숨김

---

### 3.7 AI 활용 실업무 사례 ⭐ (핵심 차별 섹션)

**구조**
케이스 스터디 형식, 2~3개. 메인 페이지에 인라인으로 노출 (상세 페이지 없음)

**콘텐츠 (케이스별)**
- 케이스 제목
- 한 줄 요약
- **Before**: 어떤 문제·비효율이 있었나
- **Approach**: AI 도구를 어떻게 활용했나 (워크플로우)
- **After**: 어떤 결과 (수치)
- **Spread**: 팀·조직에 어떻게 확산했나 (있는 경우만)

**데이터 구조**
```ts
type AICase = {
  title: string;
  summary: string;
  before: string;
  approach: string;
  after: string;
  spread?: string;       // 팀에 확산한 경험
  tools: string[];       // 사용한 AI 도구
};
```

**케이스 후보**
- 컴포넌트 마이그레이션 자동화 (Class → Function, JS → TS 등)
- 테스트 코드 자동 생성 워크플로우 구축
- 디자인 시스템 / Storybook 문서화 자동화
- PR 리뷰 보조 / 코드 리뷰 체크리스트
- 레거시 리팩토링에 AI 활용
- 팀 내 Cursor rules / CLAUDE.md / 프롬프트 가이드 세팅·전파

**작성 가이드**
- 도구 자랑이 아닌 **"임팩트와 워크플로우"가 중심**
- 수치 필수: "스프린트당 2일 단축", "테스트 커버리지 47% → 78%"
- **Spread 항목**이 있으면 시니어다움이 강하게 드러남 — 개인이 AI 잘 쓰는 건 흔하지만, 팀에 정착시킨 사람은 드물기 때문

---

### 3.8 Contact

**콘텐츠**
- 이메일 (mailto 링크)
- GitHub, LinkedIn, 블로그
- PDF 이력서 다운로드 버튼 (재배치 — 페이지 끝에서도 다운로드 유도)

---

## 4. 디자인 가이드라인

### 4.1 톤 & 무드
- **레퍼런스**: Luis Cabantac (구조 미니멀리즘), 한국식 밝은 톤 적용
- 텍스트 중심, 화이트 베이스
- 군더더기 없는 정보 위계
- 인터랙션은 절제 (호버 효과 정도만)

### 4.2 컬러 팔레트
```
배경:         #FFFFFF  또는  #FAFAFA
본문:         #1A1A1A
보조 텍스트:   #6B7280
구분선:       #E5E7EB
포인트:       #2563EB  (블루 계열, 본인 취향에 따라 변경 가능)
```

### 4.3 타이포그래피
- **본문**: Pretendard Variable (또는 SUIT)
- **코드**: JetBrains Mono / D2Coding
- **위계**:
  - H1 (이름): 48~56px, font-bold
  - H2 (섹션 타이틀): 32~36px, font-semibold
  - H3 (회사명·프로젝트명): 20~24px, font-semibold
  - 본문: 16~17px, line-height 1.7~1.8
  - 보조: 14~15px, color: #6B7280

### 4.4 여백 / 그리드
- 최대 콘텐츠 너비: **720~768px** (텍스트 중심이라 좁게)
- 섹션 간 여백: 96~128px (md+)
- 본문 줄간격: 1.7~1.8 (한글 가독성)

### 4.5 반응형 기준점
- Mobile: ~640px
- Tablet: 641~1024px
- Desktop: 1025px+

---

## 5. 기술 스택 (사이트)

| 영역 | 선택 | 이유 |
|---|---|---|
| Framework | Next.js 14+ (App Router) | 본인 주력 스택, SEO·SSG 유리 |
| Language | TypeScript | 표준 |
| Styling | Tailwind CSS | 빠른 작업, 디자인 일관성 |
| Font | Pretendard (next/font) | 한글 가독성 |
| Content | TypeScript 객체 (또는 MDX) | 콘텐츠와 코드 분리 |
| Deploy | Vercel | Next.js 표준, 무료 |
| Analytics | Vercel Analytics 또는 Plausible | 방문자 추적 |
| Resume PDF | `/public/resume.pdf` | 정적 파일 다운로드 |

**콘텐츠 관리 방식**
- 초기: TypeScript 객체 (`/data/profile.ts`, `/data/experience.ts` 등)
- 향후 블로그 추가 시 MDX 도입 검토

**디렉토리 예시**
```
src/
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx                       메인 (한 페이지 스크롤)
│  ├─ globals.css
│  └─ projects/
│     └─ [slug]/
│        └─ page.tsx                 프로젝트 상세 (동적 라우트)
├─ components/
│  ├─ sections/                      메인 페이지 섹션들
│  │  ├─ Hero.tsx
│  │  ├─ TechStack.tsx
│  │  ├─ Experience.tsx
│  │  ├─ WorkProjects.tsx
│  │  ├─ PersonalProjects.tsx
│  │  ├─ AICases.tsx
│  │  └─ Contact.tsx
│  ├─ project-detail/                상세 페이지 컴포넌트
│  │  ├─ DetailHero.tsx
│  │  ├─ MetaGrid.tsx
│  │  ├─ HighlightBox.tsx
│  │  ├─ ResultsGrid.tsx
│  │  └─ ProjectPagination.tsx
│  └─ ui/
│     ├─ Nav.tsx
│     ├─ Section.tsx
│     └─ StackTag.tsx
├─ data/
│  ├─ profile.ts
│  ├─ experience.ts
│  ├─ projects.ts                    Project + ProjectDetail 통합
│  └─ aiCases.ts
└─ lib/
   ├─ types.ts
   └─ projects.ts                    getProjectBySlug, getAllSlugs, getPrevNext
public/
└─ resume.pdf
```

**프로젝트 상세 페이지 구현 포인트**
- `app/projects/[slug]/page.tsx`에서 `generateStaticParams`로 모든 slug 정적 생성
- `getProjectBySlug(slug)` 헬퍼로 데이터 조회
- 같은 페이지에서 prev/next 프로젝트 정보도 함께 가져옴
- `notFound()` 호출로 잘못된 slug 처리

---

## 6. SEO / 메타데이터

- `<title>`: `{이름} - React/Next.js Frontend Engineer`
- `<meta description>`: 한 줄 포지셔닝
- **OG 이미지**: 본인 사진 또는 텍스트 기반 OG 이미지 (1200×630)
- `robots`: index, follow
- canonical URL 설정
- `sitemap.xml`, `robots.txt` 자동 생성 (Next.js App Router 기본 기능)

---

## 7. 개발 마일스톤

### Phase 1 — 콘텐츠 정리 (3~5일)
- 경력 정보, 프로젝트, AI 케이스 텍스트 초안 작성
- 한 줄 포지셔닝, 자기소개 카피 픽스
- PDF 이력서 초안 동시 작성 (콘텐츠 공유)

### Phase 2 — 디자인 / 와이어프레임 (1~2일)
- Figma 또는 손그림으로 와이어프레임
- 컬러·타이포그래피 픽스
- 레퍼런스 사이트 1~2개 자세히 분석

### Phase 3 — 개발 (3~5일)
- Next.js 프로젝트 셋업
- 섹션별 컴포넌트 구현
- 반응형 작업
- PDF 다운로드·메일 링크 연결

### Phase 4 — 배포 / 마무리 (1일)
- Vercel 배포
- 커스텀 도메인 연결 (선택)
- SEO·OG 이미지·메타데이터
- Lighthouse 점수 90+ 확인

**총 예상 기간**: 주말 작업 기준 약 2~3주

---

## 8. 향후 확장 계획 (선택)

- 블로그 섹션 추가 (MDX 기반)
- 다크모드 토글
- i18n (영문 버전) — 외국계·글로벌 채용 대응
- Resume Builder (PDF 동적 생성)
- 방문자 분석 기반 콘텐츠 개선

---

## 9. 오픈 전 체크리스트

**콘텐츠**
- [ ] 한 줄 포지셔닝이 5초 안에 읽힘
- [ ] PDF 이력서 링크가 두 군데 이상 노출 (Hero + Contact)
- [ ] AI 활용 사례에 수치가 있음
- [ ] 모든 외부 링크(GitHub, LinkedIn) 동작 확인

**기술 / 품질**
- [ ] 모바일에서 가독성 OK
- [ ] Lighthouse 성능 90+, 접근성 95+
- [ ] OG 이미지가 SNS 공유 시 잘 보임 (Slack·카톡 미리보기 테스트)
- [ ] favicon 설정
- [ ] 404 페이지 처리
- [ ] dark mode 또는 light mode 일관성

**SEO**
- [ ] sitemap.xml, robots.txt 생성
- [ ] Google Search Console 등록
- [ ] 본인 이름 검색 시 사이트가 상위 노출

---

## 부록 A — 한 줄 포지셔닝 예시 모음

본인 상황에 맞게 변형해서 사용:

- "AI 도구로 더 빠르게 만드는 React/Next.js 프론트엔드 엔지니어 · 5년차"
- "프로덕트 임팩트로 증명하는 5년차 프론트엔드, AI를 일상 도구로 다루는 사람"
- "복잡한 도메인을 단순한 인터페이스로 — 5년차 React 엔지니어"
- "디자인 시스템과 성능, 그리고 AI 워크플로우 — 5년차 프론트엔드"

## 부록 B — AI 케이스 작성 템플릿

```markdown
### {케이스 제목}

> {한 줄 요약}

**Before**
{문제 상황, 비효율, 시간 낭비 등을 구체적으로}

**Approach**
{사용한 AI 도구, 워크플로우, 프롬프트 전략 등}

**After**
- {수치 결과 1}
- {수치 결과 2}
- {정성적 변화}

**Spread** (선택)
{팀에 어떻게 공유·확산했는지, 그 결과}

**사용 도구**: Claude Code, Cursor, ...
```

## 부록 C — 노션 활용 전략

사이트와 노션의 역할 분리가 핵심.

| 구분 | 사이트 | 노션 |
|---|---|---|
| 톤 | 결과 중심, 간결 | 과정 중심, 솔직 |
| 길이 | 정제된 짧은 글 | 길어도 OK |
| 콘텐츠 | 최종 임팩트, 핵심 의사결정 | 실패 시도, 미팅 노트, 트레이드오프 |
| 업데이트 빈도 | 분기당 1~2회 | 수시로 |

**노션 페이지 권장 템플릿 (프로젝트별)**
```
🎯 프로젝트 개요 (한 줄 + 기간 + 팀)
📍 배경 / 문제 정의 (상세)
🛠 접근 / 의사결정 (모든 트레이드오프)
   ├─ 시도했지만 안 된 것
   └─ 최종 선택과 이유
📊 결과 (수치 + 회고)
💡 개인적 학습 / 다음에 다르게 할 것
📷 스크린샷 / 데모 / 영상
🔗 관련 링크 (GitHub, 글, 발표 자료, 동료 피드백)
```

이 템플릿을 만들어 두고 모든 프로젝트 노션 페이지를 같은 구조로 통일하면, 채용자가 어떤 프로젝트를 봐도 일관된 형식의 자료를 만나게 됨.

**노션 운영 팁**
- 모든 페이지를 "공개 보기" 권한으로 설정 (로그인 요구 시 채용자 이탈)
- 노션 URL은 짧은 슬러그로 커스터마이징 (`notion.so/yourname/design-system-v2`)
- 메인 사이트와 톤이 일관되도록 — 노션 커버 이미지·아이콘 사용 최소화

---

## 부록 D — 디자인 시안 참조

함께 작업한 디자인 시안 파일:

- **`resume-site-design.html`** — 메인 페이지 (한 페이지 스크롤형)
- **`resume-site-project-detail.html`** — 프로젝트 상세 페이지 예시 (`/projects/[slug]`)

두 파일을 브라우저에서 열어 보면서 개발 시 참조. 핵심 디자인 토큰:

```css
/* Colors */
--bg:               #FAFAFA;
--bg-card:          #FFFFFF;
--text-primary:     #18181B;
--text-secondary:   #3F3F46;
--text-tertiary:    #52525B;
--text-muted:       #71717A;
--text-faint:       #A1A1AA;
--border:           #EBEBEB;
--border-strong:    #D4D4D8;
--surface-subtle:   #F4F4F5;

/* Typography */
--font-sans:        'Pretendard Variable', Pretendard, system-ui, sans-serif;
--font-mono:        'JetBrains Mono', monospace;
--leading-base:     1.7;
--tracking-base:    -0.011em;

/* Layout */
--max-width:        720px;
--section-gap:      96px;
--section-gap-sm:   64px;  /* 모바일 */
```

**시각적 액센트 요소 (사이트 정체성)**
1. **AI-Augmented Workflow 카테고리 태그**: 검은 배경 + 흰 글씨 (`.stack-tag.accent`)
2. **AI 케이스 카드 좌측 검은 막대**: 다른 카드와 구분되는 차별 시그널
3. **수치 강조 `.metric` 클래스**: `font-weight: 600`, `tabular-nums`
4. **결과 카드 큰 숫자**: 28px / `font-weight: 700` / `tabular-nums`

이 4가지가 사이트의 시각적 핵심 시그니처이므로, 컴포넌트로 만들 때 일관되게 유지.
