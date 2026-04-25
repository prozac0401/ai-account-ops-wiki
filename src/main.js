import { marked } from "marked";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  BookOpen,
  Building2,
  ChevronDown,
  ChevronRight,
  CircleCheck,
  CreditCard,
  FileText,
  FolderTree,
  GraduationCap,
  Hash,
  Home,
  Info,
  LayoutGrid,
  Link,
  ListChecks,
  Menu,
  MessagesSquare,
  Moon,
  PanelTop,
  RotateCcw,
  Search,
  ShieldCheck,
  Sun,
  TriangleAlert,
  UserRound,
  createIcons,
} from "lucide";
import "./styles.css";

const lucideIcons = {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  BookOpen,
  Building2,
  ChevronDown,
  ChevronRight,
  CircleCheck,
  CreditCard,
  FileText,
  FolderTree,
  GraduationCap,
  Hash,
  Home,
  Info,
  LayoutGrid,
  Link,
  ListChecks,
  Menu,
  MessagesSquare,
  Moon,
  PanelTop,
  RotateCcw,
  Search,
  ShieldCheck,
  Sun,
  TriangleAlert,
  UserRound,
};

const docs = [
  {
    id: "Home",
    title: "AI 계정 운영",
    file: "Home.md",
    group: "운영 전체",
    summary: "생성형 AI 교육 계정의 도입, 운영, 회수, 증빙을 한 곳에서 관리하는 운영 위키입니다.",
  },
  {
    id: "00_운영_배경",
    title: "운영 배경",
    file: "00_운영_배경.md",
    group: "운영 전체",
    summary: "교육용 생성형 AI 계정을 받고, 열어 주고, 쓰게 하고, 회수하는 전체 배경입니다.",
  },
  {
    id: "01_운영_원칙",
    title: "운영 원칙",
    file: "01_운영_원칙.md",
    group: "운영 전체",
    summary: "최소 권한, 안내와 동의, 비용 통제, 회수 로그를 중심으로 한 기준입니다.",
  },
  {
    id: "02_서비스_전체_지도",
    title: "서비스 운영 개요",
    file: "02_서비스_전체_지도.md",
    group: "운영 전체",
    summary: "Google, ChatGPT, OpenAI API, Cursor, Claude 계정 운영의 전체 관계도입니다.",
  },
  {
    id: "03_역할과_책임",
    title: "역할과 책임",
    file: "03_역할과_책임.md",
    group: "운영 전체",
    summary: "운영자, 교육 담당자, 결제 담당자, 보안·법무 담당자의 책임 분담입니다.",
  },
  {
    id: "04_계정_생명주기",
    title: "계정 생명주기",
    file: "04_계정_생명주기.md",
    group: "운영 전체",
    summary: "요청부터 폐기까지 단계별 절차와 체크포인트를 정리합니다.",
  },
  {
    id: "services/Google_Workspace_및_Colab",
    title: "Google Workspace 및 Colab",
    file: "services/Google_Workspace_및_Colab.md",
    group: "서비스별",
    summary: "조직 계정, Cloud Identity, Business Starter, Colab 라이선스 할당을 다룹니다.",
  },
  {
    id: "services/ChatGPT_Business",
    title: "ChatGPT Business",
    file: "services/ChatGPT_Business.md",
    group: "서비스별",
    summary: "팀 워크스페이스, 좌석, 멤버 초대, 데이터 처리 관점을 정리합니다.",
  },
  {
    id: "services/OpenAI_API",
    title: "OpenAI API Platform",
    file: "services/OpenAI_API.md",
    group: "서비스별",
    summary: "조직, API 작업 단위, API 키, 서비스 계정, 사용량 예산 운영 기준입니다.",
  },
  {
    id: "services/Cursor",
    title: "Cursor",
    file: "services/Cursor.md",
    group: "서비스별",
    summary: "AI 코드 편집기 팀 결제와 Privacy Mode, 코드·프롬프트 취급을 안내합니다.",
  },
  {
    id: "services/Claude_Business",
    title: "Claude Business",
    file: "services/Claude_Business.md",
    group: "서비스별",
    summary: "Claude 팀 서비스의 데이터 보존, 소유자 권한, 운영상 유의점을 모읍니다.",
  },
  {
    id: "billing/과금_전체_지도",
    title: "과금 운영 개요",
    file: "billing/과금_전체_지도.md",
    group: "과금",
    summary: "구독, 선결제, API 사용량, 좌석 비용을 한눈에 비교합니다.",
  },
  {
    id: "billing/Google_Workspace_Colab_과금",
    title: "Google Workspace·Colab 과금",
    file: "billing/Google_Workspace_Colab_과금.md",
    group: "과금",
    summary: "Workspace와 Colab 라이선스 구매, 할당, 결제 이슈를 정리합니다.",
  },
  {
    id: "billing/ChatGPT_OpenAI_API_과금",
    title: "ChatGPT·OpenAI API 과금",
    file: "billing/ChatGPT_OpenAI_API_과금.md",
    group: "과금",
    summary: "ChatGPT Business 좌석과 OpenAI API 사용량 예산 운영 기준입니다.",
  },
  {
    id: "billing/Cursor_과금",
    title: "Cursor 과금",
    file: "billing/Cursor_과금.md",
    group: "과금",
    summary: "Cursor 팀 플랜의 결제, 좌석, 비용 회수 관점을 다룹니다.",
  },
  {
    id: "compliance/개인정보_고지_동의",
    title: "개인정보 고지와 동의",
    file: "compliance/개인정보_고지_동의.md",
    group: "컴플라이언스",
    summary: "수강생 계정 수집, 국외 이전, 제3자 제공 고지의 기본 틀입니다.",
  },
  {
    id: "compliance/정보보안_검토",
    title: "정보보안 검토",
    file: "compliance/정보보안_검토.md",
    group: "컴플라이언스",
    summary: "AI 서비스 사용 전 보안 검토 항목과 금지 데이터 기준을 정리합니다.",
  },
  {
    id: "compliance/데이터_리텐션_삭제",
    title: "데이터 리텐션과 삭제",
    file: "compliance/데이터_리텐션_삭제.md",
    group: "컴플라이언스",
    summary: "서비스별 보존, 삭제, 멤버 제거 이후의 데이터 처리 관점을 다룹니다.",
  },
  {
    id: "compliance/사고_대응",
    title: "사고 대응",
    file: "compliance/사고_대응.md",
    group: "컴플라이언스",
    summary: "계정 오남용, 데이터 입력, 결제 사고 대응 흐름을 정리합니다.",
  },
  {
    id: "education/교육담당자_운영_가이드",
    title: "교육 담당자 운영 가이드",
    file: "education/교육담당자_운영_가이드.md",
    group: "교육 운영",
    summary: "교육 전·중·후 운영 체크리스트와 안내 흐름입니다.",
  },
  {
    id: "education/수강생_주의사항",
    title: "수강생 주의사항",
    file: "education/수강생_주의사항.md",
    group: "교육 운영",
    summary: "수강생에게 반드시 고지해야 할 사용 주의사항입니다.",
  },
  {
    id: "templates/수강생_안내문",
    title: "수강생 안내문",
    file: "templates/수강생_안내문.md",
    group: "양식과 Q&A",
    summary: "바로 고쳐 쓸 수 있는 수강생 안내문 초안입니다.",
  },
  {
    id: "templates/개인정보_고지서_동의서",
    title: "개인정보 고지서·동의서",
    file: "templates/개인정보_고지서_동의서.md",
    group: "양식과 Q&A",
    summary: "교육 계정 운영에 맞춘 개인정보 고지서와 동의서 초안입니다.",
  },
  {
    id: "qna/현장_실제_QA",
    title: "현장 실제 Q&A",
    file: "qna/현장_실제_QA.md",
    group: "양식과 Q&A",
    summary: "현장에서 실제로 나온 질문과 답변을 모았습니다.",
  },
  {
    id: "glossary",
    title: "용어 사전",
    file: "glossary.md",
    group: "양식과 Q&A",
    summary: "AI 계정 운영에서 자주 쓰는 용어를 쉬운 말로 정리합니다.",
  },
  {
    id: "SOURCES",
    title: "출처 모음",
    file: "SOURCES.md",
    group: "양식과 Q&A",
    summary: "서비스별 공식 문서와 참고 출처를 모은 문서입니다.",
  },
];

const sections = [
  {
    label: "운영 전체",
    icon: "home",
    docIds: ["Home", "00_운영_배경", "01_운영_원칙", "02_서비스_전체_지도", "03_역할과_책임", "04_계정_생명주기"],
  },
  {
    label: "서비스별",
    icon: "layout-grid",
    docIds: [
      "services/Google_Workspace_및_Colab",
      "services/ChatGPT_Business",
      "services/OpenAI_API",
      "services/Cursor",
      "services/Claude_Business",
    ],
  },
  {
    label: "과금",
    icon: "credit-card",
    docIds: [
      "billing/과금_전체_지도",
      "billing/Google_Workspace_Colab_과금",
      "billing/ChatGPT_OpenAI_API_과금",
      "billing/Cursor_과금",
    ],
  },
  {
    label: "컴플라이언스",
    icon: "shield-check",
    docIds: [
      "compliance/개인정보_고지_동의",
      "compliance/정보보안_검토",
      "compliance/데이터_리텐션_삭제",
      "compliance/사고_대응",
    ],
  },
  {
    label: "교육 운영",
    icon: "graduation-cap",
    docIds: ["education/교육담당자_운영_가이드", "education/수강생_주의사항"],
  },
  {
    label: "양식과 Q&A",
    icon: "messages-square",
    docIds: ["templates/수강생_안내문", "templates/개인정보_고지서_동의서", "qna/현장_실제_QA", "glossary", "SOURCES"],
  },
];

const quickTiles = [
  {
    label: "서비스별",
    description: "주요 AI·업무 서비스의 계정 생성부터 설정, 보안, 운영 가이드",
    icon: "building-2",
    target: "services/Google_Workspace_및_Colab",
    tone: "teal",
  },
  {
    label: "과금",
    description: "구독·청구·결제 수단·비용 최적화 및 예산 관리 가이드",
    icon: "credit-card",
    target: "billing/과금_전체_지도",
    tone: "amber",
  },
  {
    label: "컴플라이언스",
    description: "보안·개인정보·규정 준수 및 감사 대응 기준",
    icon: "shield-check",
    target: "compliance/개인정보_고지_동의",
    tone: "teal",
  },
  {
    label: "교육 운영",
    description: "구성원 온보딩, 교육 프로그램과 운영 안내",
    icon: "graduation-cap",
    target: "education/교육담당자_운영_가이드",
    tone: "teal",
  },
  {
    label: "양식과 Q&A",
    description: "요청·신청·변경·폐기 등 운영 양식과 자주 묻는 질문",
    icon: "file-text",
    target: "templates/수강생_안내문",
    tone: "violet",
  },
  {
    label: "서비스별 빠른 탐색",
    description: "Google, ChatGPT, OpenAI API, Cursor, Claude 바로가기",
    icon: "panel-top",
    target: "02_서비스_전체_지도",
    tone: "blue",
  },
  {
    label: "계정 생명주기",
    description: "요청부터 폐기까지 단계별 절차와 체크리스트",
    icon: "list-checks",
    target: "04_계정_생명주기",
    tone: "teal",
  },
  {
    label: "출처 모음",
    description: "정책·공식 문서·내부 문서 참고 자료 모음",
    icon: "book-open",
    target: "SOURCES",
    tone: "teal",
  },
];

const serviceChips = [
  { label: "Google Workspace", id: "services/Google_Workspace_및_Colab", mark: "G", tone: "google" },
  { label: "Colab", id: "services/Google_Workspace_및_Colab", mark: "CO", tone: "colab" },
  { label: "ChatGPT Business", id: "services/ChatGPT_Business", mark: "◎", tone: "openai" },
  { label: "OpenAI API", id: "services/OpenAI_API", mark: "OA", tone: "openai" },
  { label: "Cursor", id: "services/Cursor", mark: "◆", tone: "cursor" },
  { label: "Claude", id: "services/Claude_Business", mark: "✳", tone: "claude" },
];

const lifecycleSteps = [
  {
    label: "요청",
    title: "사용 목적과 기간 확인",
    detail: "수강생 수, 서비스, 결제 방식, 관리자 권한을 먼저 정리합니다.",
    icon: "file-text",
    target: "00_운영_배경",
  },
  {
    label: "검토",
    title: "보안·개인정보 기준 확인",
    detail: "수집 항목, 국외 이전, 금지 데이터, 리텐션 조건을 점검합니다.",
    icon: "shield-check",
    target: "compliance/정보보안_검토",
  },
  {
    label: "초대",
    title: "계정 발급과 라이선스 할당",
    detail: "워크스페이스 초대, 좌석 부여, API 키 범위를 서비스별로 나눕니다.",
    icon: "user-round",
    target: "02_서비스_전체_지도",
  },
  {
    label: "운영",
    title: "교육 중 모니터링",
    detail: "사용 안내, 비용 확인, 사고 문의 창구를 한 흐름으로 관리합니다.",
    icon: "layout-grid",
    target: "education/교육담당자_운영_가이드",
  },
  {
    label: "회수",
    title: "멤버 제거와 접근 차단",
    detail: "교육 종료 후 좌석, 팀 멤버, API 키, Colab 권한을 회수합니다.",
    icon: "rotate-ccw",
    target: "04_계정_생명주기",
  },
  {
    label: "증빙",
    title: "로그와 출처 보관",
    detail: "초대·회수 기록, 결제 증빙, 공식 기준 링크를 남깁니다.",
    icon: "folder-tree",
    target: "SOURCES",
  },
];

const priorityDocs = [
  { label: "교육 전 체크", target: "education/교육담당자_운영_가이드" },
  { label: "수강생 안내", target: "templates/수강생_안내문" },
  { label: "동의서 초안", target: "templates/개인정보_고지서_동의서" },
  { label: "실제 Q&A", target: "qna/현장_실제_QA" },
];

const app = document.querySelector("#app");
const docById = new Map(docs.map((doc) => [doc.id, doc]));
const docByFileStem = new Map(docs.map((doc) => [doc.file.replace(/\.md$/, ""), doc]));
const docCache = new Map();
const state = {
  currentId: "Home",
  searchIndex: [],
  searchOpen: false,
  navOpen: false,
  theme: localStorage.getItem("wiki-theme") || "light",
  scrollTicking: false,
};

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

marked.setOptions({
  async: false,
  breaks: false,
  gfm: true,
});

document.documentElement.dataset.theme = state.theme;

renderShell();
bindGlobalEvents();
buildSearchIndex();
loadRoute({ resetScroll: true });

async function loadRoute({ resetScroll = false } = {}) {
  const id = decodeRoute(location.hash) || "Home";
  const nextDoc = docById.get(id) || docByFileStem.get(id) || docById.get("Home");
  const shouldResetScroll = resetScroll || nextDoc.id !== state.currentId;
  state.currentId = nextDoc.id;
  setActiveNav();
  closeNav();

  const page = document.querySelector("[data-page]");
  page.classList.add("is-loading");

  try {
    const markdown = await fetchDoc(nextDoc);
    renderPage(nextDoc, markdown);
    if (shouldResetScroll) {
      scrollToPageTop();
    }
  } catch (error) {
    renderError(nextDoc, error);
    if (shouldResetScroll) {
      scrollToPageTop();
    }
  } finally {
    page.classList.remove("is-loading");
    updateScrollUi();
  }
}

function renderShell() {
  app.innerHTML = `
    <div class="app-shell">
      <div class="mobile-scrim" data-close-nav></div>
      <aside class="sidebar" aria-label="문서 내비게이션">
        <a class="brand" href="${route("Home")}" data-route="Home">
          <span class="brand-mark"><i data-lucide="shield-check"></i></span>
          <span>AI 계정 운영</span>
        </a>
        <nav class="nav-groups">
          ${sections
            .map(
              (section) => `
                <section class="nav-section">
                  <button class="nav-section-button" type="button" data-section="${section.label}">
                    <i data-lucide="${section.icon}"></i>
                    <span>${section.label}</span>
                    <i class="section-chevron" data-lucide="chevron-down"></i>
                  </button>
                  <div class="nav-links">
                    ${section.docIds
                      .map((id) => {
                        const doc = docById.get(id);
                        return `<a href="${route(id)}" data-route="${id}" class="nav-link">${doc.title}</a>`;
                      })
                      .join("")}
                  </div>
                </section>
              `,
            )
            .join("")}
        </nav>
        <div class="quick-links" aria-label="빠른 링크">
          <p>빠른 링크</p>
          <a href="${route("04_계정_생명주기")}" data-route="04_계정_생명주기">
            <i data-lucide="rotate-ccw"></i>
            <span>계정 생명주기</span>
          </a>
          <a href="${route("SOURCES")}" data-route="SOURCES">
            <i data-lucide="book-open"></i>
            <span>출처 모음</span>
          </a>
        </div>
      </aside>
      <div class="workspace">
        <header class="topbar">
          <button class="icon-button mobile-menu" type="button" data-open-nav aria-label="문서 메뉴 열기">
            <i data-lucide="menu"></i>
          </button>
          <div class="search-wrap">
            <i data-lucide="search"></i>
            <input data-search type="search" placeholder="검색" autocomplete="off" aria-label="문서 검색" />
            <kbd>⌘ K</kbd>
            <div class="search-panel" data-search-panel></div>
          </div>
          <nav class="top-actions" aria-label="빠른 작업">
            <a href="${route("SOURCES")}" data-route="SOURCES">
              <i data-lucide="book-open"></i>
              <span>출처 모음</span>
            </a>
            <a href="${route("04_계정_생명주기")}" data-route="04_계정_생명주기">
              <i data-lucide="rotate-ccw"></i>
              <span>계정 생명주기</span>
            </a>
            <button class="icon-button" type="button" data-copy-link aria-label="현재 문서 링크 복사">
              <i data-lucide="link"></i>
            </button>
            <button class="icon-button" type="button" data-theme-toggle aria-label="테마 전환">
              <i data-lucide="${state.theme === "dark" ? "moon" : "sun"}"></i>
            </button>
          </nav>
        </header>
        <div class="content-grid">
          <main class="page" data-page tabindex="-1"></main>
          <aside class="toc" aria-label="이 페이지 목차">
            <div class="toc-inner">
              <h2>이 페이지 목차</h2>
              <nav data-toc></nav>
            </div>
          </aside>
        </div>
      </div>
      <div class="toast" data-toast role="status" aria-live="polite"></div>
      <button class="scroll-top-button" type="button" data-scroll-top aria-label="위로 가기" title="위로 가기">
        <i data-lucide="arrow-up"></i>
      </button>
    </div>
  `;
  createIcons({ icons: lucideIcons });
}

function renderPage(doc, markdown) {
  const page = document.querySelector("[data-page]");
  const cleaned = removeFirstHeading(markdown);
  const converted = preprocessMarkdown(cleaned);
  const html = marked.parse(converted);
  const siblings = docs.filter((item) => item.group === doc.group && item.id !== doc.id).slice(0, 4);

  page.innerHTML = `
    <div class="breadcrumbs">
      <a href="${route("Home")}" data-route="Home" aria-label="홈">
        <i data-lucide="home"></i>
      </a>
      <i data-lucide="chevron-right"></i>
      <span>${doc.group}</span>
    </div>
    <header class="article-hero">
      <div>
        <p class="eyebrow">${doc.group}</p>
        <h1>${doc.title}</h1>
        <p>${doc.summary}</p>
      </div>
      <div class="meta-strip">
        <span><i data-lucide="user-round"></i><strong>소유자</strong> 운영팀</span>
        <span><i data-lucide="folder-tree"></i><strong>문서</strong> ${docs.length}개</span>
        <span><i data-lucide="file-text"></i><strong>원본</strong> Markdown</span>
        <span><i data-lucide="circle-check"></i><strong>상태</strong> 검토용</span>
      </div>
    </header>
    ${doc.id === "Home" ? renderHomeOverview() : renderSiblingRail(doc, siblings)}
    <article class="article-body">${html}</article>
    <footer class="article-footer">
      ${renderPrevNext(doc)}
    </footer>
  `;

  enhanceArticle();
  createIcons({ icons: lucideIcons });
  document.querySelector("[data-page]").focus({ preventScroll: true });
}

function renderHomeOverview() {
  const sectionMetrics = sections.map((section) => {
    const count = section.docIds.length;
    const firstDoc = section.docIds[0];
    return { ...section, count, firstDoc };
  });

  return `
    <section class="overview-block" aria-labelledby="overview-title">
      <div class="section-heading">
        <h2 id="overview-title">한눈에 보기</h2>
        <p>계정 운영에 필요한 핵심 영역과 주요 서비스를 빠르게 찾아보세요.</p>
      </div>
      <div class="quick-grid">
        ${quickTiles
          .map(
            (tile) => `
              <a class="quick-card tone-${tile.tone}" href="${route(tile.target)}" data-route="${tile.target}">
                <span class="quick-icon"><i data-lucide="${tile.icon}"></i></span>
                <strong>${tile.label}</strong>
                <span>${tile.description}</span>
                <i class="quick-arrow" data-lucide="arrow-right"></i>
              </a>
            `,
          )
          .join("")}
      </div>
      <div class="ops-cockpit" aria-label="운영 허브">
        <section class="lifecycle-panel" aria-labelledby="lifecycle-title">
          <div class="mini-heading">
            <span>Lifecycle</span>
            <h3 id="lifecycle-title">계정 생명주기</h3>
          </div>
          <div class="lifecycle-flow">
            ${lifecycleSteps
              .map(
                (step, index) => `
                  <a class="lifecycle-step" href="${route(step.target)}" data-route="${step.target}">
                    <span class="step-index">${String(index + 1).padStart(2, "0")}</span>
                    <span class="step-icon"><i data-lucide="${step.icon}"></i></span>
                    <span class="step-copy">
                      <strong>${step.label}</strong>
                      <em>${step.title}</em>
                      <small>${step.detail}</small>
                    </span>
                  </a>
                `,
              )
              .join("")}
          </div>
        </section>
        <aside class="status-panel" aria-label="문서 현황">
          <div class="mini-heading">
            <span>Index</span>
            <h3>문서 현황</h3>
          </div>
          <div class="metric-list">
            ${sectionMetrics
              .map(
                (section) => `
                  <a href="${route(section.firstDoc)}" data-route="${section.firstDoc}" class="metric-row">
                    <i data-lucide="${section.icon}"></i>
                    <span>${section.label}</span>
                    <strong>${section.count}</strong>
                  </a>
                `,
              )
              .join("")}
          </div>
          <div class="priority-links">
            <span>먼저 열어볼 문서</span>
            ${priorityDocs
              .map((doc) => {
                const targetDoc = docById.get(doc.target);
                return `<a href="${route(doc.target)}" data-route="${doc.target}">${doc.label}<small>${targetDoc.title}</small></a>`;
              })
              .join("")}
          </div>
        </aside>
      </div>
      <div class="service-strip" aria-label="주요 서비스">
        <h3>주요 서비스</h3>
        <div>
          ${serviceChips
            .map(
              (service) => `
                <a class="service-chip ${service.tone}" href="${route(service.id)}" data-route="${service.id}">
                  <span>${service.mark}</span>
                  ${service.label}
                </a>
              `,
            )
            .join("")}
        </div>
      </div>
      <a class="principle-callout" href="${route("01_운영_원칙")}" data-route="01_운영_원칙">
        <i data-lucide="info"></i>
        <strong>운영 원칙</strong>
        <span>필요 최소 권한 · 책임 있는 사용 · 데이터 보호 · 비용 효율 · 지속적 개선</span>
      </a>
    </section>
  `;
}

function renderSiblingRail(doc, siblings) {
  if (!siblings.length) return "";
  return `
    <section class="sibling-rail" aria-label="${doc.group} 관련 문서">
      <span>${doc.group}에서 함께 보기</span>
      ${siblings
        .map(
          (item) => `<a href="${route(item.id)}" data-route="${item.id}">${item.title}<i data-lucide="arrow-right"></i></a>`,
        )
        .join("")}
    </section>
  `;
}

function renderPrevNext(doc) {
  const index = docs.findIndex((item) => item.id === doc.id);
  const previous = docs[index - 1];
  const next = docs[index + 1];

  return `
    <div>
      ${
        previous
          ? `<a class="pager" href="${route(previous.id)}" data-route="${previous.id}">
              <i data-lucide="arrow-left"></i>
              <span><small>이전 문서</small>${previous.title}</span>
            </a>`
          : ""
      }
    </div>
    <div>
      ${
        next
          ? `<a class="pager next" href="${route(next.id)}" data-route="${next.id}">
              <span><small>다음 문서</small>${next.title}</span>
              <i data-lucide="arrow-right"></i>
            </a>`
          : ""
      }
    </div>
  `;
}

function renderError(doc, error) {
  document.querySelector("[data-page]").innerHTML = `
    <section class="error-state">
      <i data-lucide="triangle-alert"></i>
      <h1>${doc.title}</h1>
      <p>문서를 불러오지 못했습니다.</p>
      <pre>${escapeHtml(error.message)}</pre>
    </section>
  `;
  createIcons({ icons: lucideIcons });
}

function enhanceArticle() {
  const article = document.querySelector(".article-body");
  const tocTarget = document.querySelector("[data-toc]");
  const headings = [...article.querySelectorAll("h2, h3")];
  const used = new Set();
  const outline = [];
  let h2Count = 0;
  let h3Count = 0;

  headings.forEach((heading) => {
    const title = stripManualHeadingNumber(heading.textContent.trim());
    const level = heading.tagName.toLowerCase();
    heading.textContent = title;

    if (level === "h2") {
      h2Count += 1;
      h3Count = 0;
    } else {
      if (!h2Count) h2Count = 1;
      h3Count += 1;
    }

    const number = level === "h2" ? `${h2Count}.` : `${h2Count}.${h3Count}.`;
    const id = uniqueSlug(title, used);
    heading.id = id;

    const numberLabel = document.createElement("span");
    numberLabel.className = "heading-number";
    numberLabel.textContent = number;
    heading.prepend(numberLabel, document.createTextNode(" "));

    const anchor = document.createElement("a");
    anchor.href = `#${id}`;
    anchor.className = "heading-anchor";
    anchor.setAttribute("aria-label", `${number} ${title} 바로가기`);
    anchor.innerHTML = '<i data-lucide="hash"></i>';
    heading.append(anchor);

    outline.push({ id, level, number, title });
  });

  tocTarget.innerHTML = outline.length
    ? outline
        .map(
          (heading) => `
            <a href="#${heading.id}" class="toc-link depth-${heading.level}" data-toc-link="${heading.id}">
              <span class="toc-number">${escapeHtml(heading.number)}</span>
              <span class="toc-title">${escapeHtml(heading.title)}</span>
            </a>
          `,
        )
        .join("")
    : '<p class="toc-empty">목차가 없습니다.</p>';

  updateTocActive();

  article.querySelectorAll("table").forEach((table) => {
    const wrap = document.createElement("div");
    wrap.className = "table-wrap";
    table.replaceWith(wrap);
    wrap.append(table);
  });

  article.querySelectorAll("a").forEach((anchor) => {
    const href = anchor.getAttribute("href") || "";
    if (/^https?:\/\//.test(href)) {
      anchor.target = "_blank";
      anchor.rel = "noreferrer";
    }
  });
}

function bindGlobalEvents() {
  window.addEventListener("hashchange", () => {
    const id = decodeRoute(location.hash);
    if (docById.has(id) || docByFileStem.has(id) || !id) {
      loadRoute({ resetScroll: true });
    }
  });

  window.addEventListener("scroll", scheduleScrollUiUpdate, { passive: true });
  window.addEventListener("resize", scheduleScrollUiUpdate);

  document.addEventListener("click", (event) => {
    const tocLink = event.target.closest("[data-toc-link]");
    if (tocLink) {
      event.preventDefault();
      scrollToHeading(tocLink.dataset.tocLink);
      return;
    }

    const routeLink = event.target.closest("[data-route]");
    if (routeLink) {
      const id = routeLink.dataset.route;
      if (docById.has(id)) {
        event.preventDefault();
        closeSearch();
        navigateTo(id);
      }
    }

    if (event.target.closest("[data-open-nav]")) openNav();
    if (event.target.closest("[data-close-nav]")) closeNav();
    if (event.target.closest("[data-theme-toggle]")) toggleTheme();
    if (event.target.closest("[data-copy-link]")) copyCurrentLink();
    if (event.target.closest("[data-scroll-top]")) scrollToPageTop({ smooth: true });
  });

  document.addEventListener("input", (event) => {
    if (event.target.matches("[data-search]")) {
      renderSearchResults(event.target.value);
    }
  });

  document.addEventListener("keydown", (event) => {
    const isSearchShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
    if (event.key === "/" && !isTypingTarget(event.target)) {
      event.preventDefault();
      focusSearch();
    }
    if (isSearchShortcut) {
      event.preventDefault();
      focusSearch();
    }
    if (event.key === "Escape") {
      closeSearch();
      closeNav();
    }
  });

  document.addEventListener("focusin", (event) => {
    if (event.target.matches("[data-search]")) {
      const value = event.target.value;
      if (value) renderSearchResults(value);
    }
  });
}

async function buildSearchIndex() {
  const entries = await Promise.all(
    docs.map(async (doc) => {
      const markdown = await fetchDoc(doc);
      return {
        ...doc,
        text: normalizeForSearch(markdown),
      };
    }),
  );
  state.searchIndex = entries;
}

function renderSearchResults(query) {
  const panel = document.querySelector("[data-search-panel]");
  const input = document.querySelector("[data-search]");
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    closeSearch();
    return;
  }

  const terms = normalized.split(/\s+/).filter(Boolean);
  const results = state.searchIndex
    .map((doc) => {
      const score = terms.reduce((sum, term) => {
        const inTitle = doc.title.toLowerCase().includes(term) ? 4 : 0;
        const inGroup = doc.group.toLowerCase().includes(term) ? 2 : 0;
        const inText = doc.text.includes(term) ? 1 : 0;
        return sum + inTitle + inGroup + inText;
      }, 0);
      return { ...doc, score };
    })
    .filter((doc) => doc.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);

  panel.innerHTML = results.length
    ? results
        .map(
          (doc) => `
            <a href="${route(doc.id)}" data-route="${doc.id}" class="search-result">
              <span>${doc.group}</span>
              <strong>${doc.title}</strong>
              <small>${snippet(doc.text, terms[0])}</small>
            </a>
          `,
        )
        .join("")
    : `<div class="search-empty">검색 결과가 없습니다.</div>`;

  panel.classList.add("is-open");
  input.setAttribute("aria-expanded", "true");
}

function closeSearch() {
  const panel = document.querySelector("[data-search-panel]");
  const input = document.querySelector("[data-search]");
  if (panel) {
    panel.classList.remove("is-open");
    panel.innerHTML = "";
  }
  if (input) input.setAttribute("aria-expanded", "false");
}

async function fetchDoc(doc) {
  if (docCache.has(doc.id)) return docCache.get(doc.id);
  const response = await fetch(`content/${encodeURI(doc.file)}`);
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  const markdown = await response.text();
  docCache.set(doc.id, markdown);
  return markdown;
}

function preprocessMarkdown(markdown) {
  return markdown
    .replace(/^\[목차\]\s*$/gm, "")
    .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, rawTarget, rawLabel) => {
      const target = rawTarget.trim().replace(/\.md$/, "");
      const doc = docById.get(target) || docByFileStem.get(target);
      const id = doc?.id || target;
      const label = rawLabel?.trim() || doc?.title || target;
      return `[${label}](${route(id)})`;
    });
}

function removeFirstHeading(markdown) {
  return markdown.replace(/^#\s+.+\r?\n+/, "");
}

function normalizeForSearch(markdown) {
  return preprocessMarkdown(markdown)
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/\|/g, " ")
    .replace(/[#>*_[\]()`.-]/g, " ")
    .replace(/\s+/g, " ")
    .toLowerCase();
}

function snippet(text, term) {
  const index = text.indexOf(term);
  if (index < 0) return text.slice(0, 80);
  const start = Math.max(0, index - 30);
  return `${start > 0 ? "..." : ""}${text.slice(start, start + 92)}...`;
}

function setActiveNav() {
  document.querySelectorAll("[data-route]").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.route === state.currentId);
  });
}

function navigateTo(id) {
  if (decodeRoute(location.hash) === id) {
    loadRoute();
    scrollToPageTop({ smooth: true });
    return;
  }
  location.hash = encodeURI(id);
}

function scrollToPageTop({ smooth = false } = {}) {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: smooth ? "smooth" : "auto",
  });
  updateScrollTopButton();
  updateTocActive();
}

function updateScrollTopButton() {
  const button = document.querySelector("[data-scroll-top]");
  if (!button) return;
  button.classList.toggle("is-visible", window.scrollY > 360);
}

function scheduleScrollUiUpdate() {
  if (state.scrollTicking) return;
  state.scrollTicking = true;
  window.requestAnimationFrame(() => {
    updateScrollUi();
    state.scrollTicking = false;
  });
}

function updateScrollUi() {
  updateScrollTopButton();
  updateTocActive();
}

function updateTocActive() {
  const links = [...document.querySelectorAll("[data-toc-link]")];
  if (!links.length) return;

  const headings = links
    .map((link) => document.getElementById(link.dataset.tocLink))
    .filter(Boolean);
  if (!headings.length) return;

  const readingLine = window.scrollY + 150;
  const activeHeading =
    [...headings].reverse().find((heading) => heading.offsetTop <= readingLine) || headings[0];

  links.forEach((link) => {
    const isActive = link.dataset.tocLink === activeHeading.id;
    link.classList.toggle("is-active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function scrollToHeading(id) {
  const heading = document.getElementById(id);
  if (!heading) return;
  const top = window.scrollY + heading.getBoundingClientRect().top - 92;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

function route(id) {
  return `#${encodeURI(id)}`;
}

function decodeRoute(hash) {
  const value = hash.replace(/^#\/?/, "");
  try {
    return decodeURI(value);
  } catch {
    return value;
  }
}

function uniqueSlug(text, used) {
  const base =
    text
      .trim()
      .toLowerCase()
      .replace(/[^\p{Letter}\p{Number}\s-]/gu, "")
      .replace(/\s+/g, "-")
      .slice(0, 64) || "section";
  let slug = base;
  let counter = 2;
  while (used.has(slug)) {
    slug = `${base}-${counter}`;
    counter += 1;
  }
  used.add(slug);
  return slug;
}

function stripManualHeadingNumber(text) {
  return text.replace(/^\d+(?:\.\d+)*\.\s+/, "");
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  localStorage.setItem("wiki-theme", state.theme);
  document.documentElement.dataset.theme = state.theme;
  const button = document.querySelector("[data-theme-toggle]");
  button.innerHTML = `<i data-lucide="${state.theme === "dark" ? "moon" : "sun"}"></i>`;
  createIcons({ icons: lucideIcons });
}

async function copyCurrentLink() {
  const url = `${location.origin}${location.pathname}${route(state.currentId)}`;
  await navigator.clipboard.writeText(url);
  showToast("현재 문서 링크를 복사했습니다.");
}

function showToast(message) {
  const toast = document.querySelector("[data-toast]");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

function focusSearch() {
  const input = document.querySelector("[data-search]");
  input.focus();
  input.select();
}

function openNav() {
  state.navOpen = true;
  document.body.classList.add("nav-open");
}

function closeNav() {
  state.navOpen = false;
  document.body.classList.remove("nav-open");
}

function isTypingTarget(target) {
  return target.matches("input, textarea, select, [contenteditable='true']");
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => {
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return map[char];
  });
}
