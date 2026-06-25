# 🚀 My Developer Portfolio & Resume

이 프로젝트는 개발자의 역량을 돋보이게 하는 **인터랙티브 웹 이력서(Web Resume)**입니다. Next.js App Router, Tailwind CSS, 그리고 Framer Motion을 활용하여 최적의 성능과 아름다운 UI/UX를 제공합니다.

## 📖 이력서 내용 업데이트 가이드

이력서의 내용(데이터)을 업데이트하는 방법은 크게 두 가지가 있습니다.

### 방법 1: 가장 추천하는 방법 (AI 자동 업데이트)

가장 쉽고 강력한 방법입니다. 사용 중인 에디터(VSCode 등)의 AI 에이전트(Cursor, Copilot 등)를 활용하세요.

1. 본인의 원본 이력서 파일(`.md`, `.pdf`, `.txt`)을 프로젝트 최상단의 `resume_source/` 폴더 안에 넣습니다.
2. AI 채팅창을 열고 다음과 같이 명령합니다:
   > 🗣️ *"내 이력서를 `resume_source/`에 올렸어. 이걸 읽고 내 정보로 싹 업데이트해 줘."*
3. AI가 자동으로 파일을 분석하고, 핵심 성과를 **볼드 처리(`<strong>`)**하며 아래 설명된 `src/data/` 내부 파일들을 완벽하게 교체해 줍니다.

---

### 방법 2: 수동으로 직접 코드 수정하기 (개발자 방식)

이력서의 모든 데이터는 데이터베이스 없이 `src/data/` 폴더 내의 TypeScript 객체로 관리됩니다. 아래 파일들을 열고 텍스트만 교체하시면 화면에 즉시 반영됩니다.

| 데이터 파일 | 담당 섹션 | 설명 |
|---|---|---|
| `profile.ts` | **Hero / Education** | 본인의 이름, 한 줄 소개(Headline), 연락처, 깃허브 링크 및 학력 정보 |
| `experience.ts` | **Tech Stack / Experience** | 기술 스택 태그와 주요 경력 리스트. 수치 데이터는 `<strong>40% 개선</strong>`처럼 HTML 태그로 묶으면 굵은 글씨로 예쁘게 표시됩니다. |
| `projects.ts` | **Projects** | 회사/개인 프로젝트 카드 및 상세 팝업(Modal) 내용 |
| `aiCases.ts` | **AI-Driven Workflow** | AI를 실무나 개발 환경에 어떻게 녹여냈는지 증명하는 사례 및 모달 내용 |

*(※ TypeScript로 타입 검증이 이루어지므로, 누락된 필수 항목이 있으면 에디터가 빨간 줄로 경고해 주어 안전하게 작성할 수 있습니다.)*

---

## 🛠 새로운 양식(구조) 추가하기

만약 프로젝트 모달이나 AI 사례 모달에 새로운 항목(예: '시행착오', '아키텍처' 등)을 추가하고 싶으신가요?

1. `src/lib/types.ts`에서 인터페이스(Interface) 구조를 수정합니다.
2. `src/data/*.ts`에서 실제 데이터를 채워 넣습니다.
3. `src/components/project-detail/*Modal.tsx` 컴포넌트에서 `{caseItem.newField}` 형태로 렌더링 해 줍니다.

*(이 과정 역시 AI 에이전트에게 "새로운 항목을 추가해 줘"라고 말하면 자동으로 처리됩니다.)*

---

## 💻 로컬에서 실행하기

의존성 설치 후 개발 서버를 띄워 실시간으로 변경 사항을 확인하세요.

```bash
# 의존성 설치
npm install

# 로컬 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 로 접속하시면 됩니다.

---

## 🚀 배포하기 (Deploy)

이 이력서는 [Vercel](https://vercel.com)에 최적화되어 있습니다.
GitHub 레포지토리에 코드를 푸시(Push)한 뒤, Vercel 대시보드에서 해당 레포지토리를 연결(Import)하기만 하면 자동으로 무료 도메인과 함께 전 세계에 배포됩니다.
