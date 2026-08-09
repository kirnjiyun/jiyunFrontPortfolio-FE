export type TimelineEventType = "work" | "education" | "etc";

export interface TimelineEvent {
    id: string;
    /** 시작 시점 'YYYY-MM' */
    start: string;
    /** 종료 시점 'YYYY-MM'. 생략하면 기간이 없는 시점(점) 이벤트 */
    end?: string;
    title: string;
    subtitle: string;
    description: string;
    tags?: string[];
    icon: string;
    type: TimelineEventType;
}

export const TYPE_LABEL: Record<TimelineEventType, string> = {
    work: "경력",
    education: "교육",
    etc: "자격증 및 기타",
};

/** 'YYYY-MM' → 절대 개월 수 (정렬·위치 계산용) */
export function toMonths(ym: string): number {
    const [y, m] = ym.split("-").map(Number);
    return y * 12 + (m - 1);
}

/** 'YYYY-MM' → '2018.03' */
export function formatYm(ym: string): string {
    const [y, m] = ym.split("-");
    return `${y}.${m.padStart(2, "0")}`;
}

/** 현재 연월을 'YYYY-MM' 으로 */
export function currentYm(date: Date = new Date()): string {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
        2,
        "0",
    )}`;
}

/** 툴팁/목록에 표시할 기간 문자열 */
export function formatPeriod(event: TimelineEvent): string {
    if (!event.end) return formatYm(event.start);
    return `${formatYm(event.start)} ~ ${formatYm(event.end)}`;
}

/** 개월 수 차이를 'N년 N개월' 로 */
export function formatDuration(event: TimelineEvent): string | null {
    if (!event.end) return null;
    const months = toMonths(event.end) - toMonths(event.start) + 1;
    const years = Math.floor(months / 12);
    const rest = months % 12;
    if (years && rest) return `${years}년 ${rest}개월`;
    if (years) return `${years}년`;
    return `${rest}개월`;
}

export const TIMELINE_EVENTS: TimelineEvent[] = [
    {
        id: "univ",
        start: "2018-03",
        end: "2024-02",
        title: "중앙대학교",
        subtitle: "공공인재학부 · 서울",
        description: "공공인재학부 입학, 공공관리 연계전공",
        tags: ["대학교", "정책학사"],
        icon: "🎓",
        type: "education",
    },
    {
        id: "fastcampus-data",
        start: "2023-05",
        end: "2023-06",
        title: "한 번에 따라하는 데이터 분석 기초 완주반",
        subtitle: "패스트캠퍼스강남학원 (40시간)",
        description: "데이터 분석 기초 교육 수료",
        tags: ["Data Analysis"],
        icon: "📊",
        type: "education",
    },
    {
        id: "fastcampus-web",
        start: "2023-05",
        end: "2023-07",
        title: "웹퍼블리싱 완전 정복 : 모션 디자인으로 완성하는 반응형 웹 디자인",
        subtitle: "패스트캠퍼스강남학원 (80시간)",
        description: "반응형 웹 및 모션 디자인 웹 퍼블리싱 교육 수료",
        tags: ["웹 퍼블리싱", "반응형 웹", "모션 디자인"],
        icon: "🎨",
        type: "education",
    },
    {
        id: "likelion",
        start: "2023-07",
        end: "2023-11",
        title: "멋쟁이사자처럼 프론트엔드 스쿨",
        subtitle: "주식회사멋쟁이사자처럼 (640시간)",
        description:
            "웹 접근성·UI/UX 기반의 HTML/CSS/JavaScript 심화 학습, React를 활용한 팀 프로젝트를 수행",
        tags: ["React", "HTML/CSS", "JavaScript", "UI/UX", "웹 접근성"],
        icon: "🦁",
        type: "education",
    },
    {
        id: "cert-sqld",
        start: "2024-06",
        title: "SQLD (SQL 개발자)",
        subtitle: "한국데이터산업진흥원",
        description: "SQL 개발자 자격증 취득",
        tags: ["SQL", "Database"],
        icon: "📜",
        type: "etc",
    },
    {
        id: "cert-qnet",
        start: "2024-09",
        title: "정보처리기사",
        subtitle: "한국산업인력공단",
        description: "정보처리기사 자격증 취득",
        tags: ["IT", "CS"],
        icon: "📜",
        type: "etc",
    },
    {
        id: "typescript-ebook",
        start: "2024-01",
        end: "2024-04",
        title: "타입스크립트 e-book 공동 집필",
        subtitle: "「핵심만 담은 타입스크립트 찍어먹기」",
        description: "TypeScript 입문자를 위한 e-book을 공동 집필",
        tags: ["TypeScript"],
        icon: "📖",
        type: "etc",
    },
    {
        id: "codeit",
        start: "2025-01",
        end: "2025-03",
        title: "심화 프론트엔드 엔지니어 부트캠프",
        subtitle: "코드잇 평생교육원 (349시간)",
        description: "Tailwind CSS, 스토리지, 테스트, CI/CD를 집중적으로 학습",
        tags: ["Tailwind CSS", "CI/CD", "TDD", "Next.js", "SSR", "CSR"],
        icon: "💻",
        type: "education",
    },
    {
        id: "cert-toeic-speaking",
        start: "2025-06",
        title: "TOEIC Speaking",
        subtitle: "AL",
        description: "TOEIC Speaking AL 등급 취득",
        tags: ["English", "Speaking"],
        icon: "🗣️",
        type: "etc",
    },
    {
        id: "cert-toeic",
        start: "2026-05",
        title: "TOEIC",
        subtitle: "800",
        description: "TOEIC 800점 취득",
        tags: ["English"],
        icon: "📝",
        type: "etc",
    },
    {
        id: "bridge-intern",
        start: "2025-06",
        end: "2025-07",
        title: "리커버리브릿지 주식회사",
        subtitle: "프론트엔드 개발 인턴",
        description:
            "프롭테크 스타트업 MVP를 Next.js 기반 2주 내 구현. 해당 결과물이 은행 계약 및 투자 유치로 직접 연결되며 빠른 실행력과 제품 완성도를 인정받음",
        tags: ["Next.js", "TypeScript", "agile"],
        icon: "🏢",
        type: "work",
    },
    {
        id: "devworkshop",
        start: "2025-10",
        end: "2026-06",
        title: "주식회사 개발공작실",
        subtitle: "프론트엔드 개발자",
        description:
            "자체 서비스 환경시험 관리 플랫폼(ETPS)의 유지보수·고도화 풀스택 담당. 공공SI 프로젝트(KINU 북한총람 플랫폼, 광주 도로 포트홀 관리 시스템 등)에서 프론트엔드 설계·구현 및 반응형 대응을 맡고, 회사에서 진행중인 테스트 시나리오·기능명세서·QA 버그 리포트 등 개발 문서도 체계화.",
        tags: [
            "Vue2",
            "Vue3",
            "React",
            "Node.js",
            "JAVA",
            "SPRING",
            "MYSQL",
            "TypeScript",
            "LIMS",
            "SI",
        ],
        icon: "⭐",
        type: "work",
    },
    {
        id: "k-digital-ai",
        start: "2026-08",
        end: "2026-09",
        title: "[K-디지털] AI 과정",
        subtitle: "한국기술교육대학교 온라인평생교육원",
        description: "[K-디지털] 금융AI 트렌드한눈에이해하기",
        tags: ["AI"],
        icon: "🤖",
        type: "education",
    },
    {
        id: "cert-ai-fundamentals",
        start: "2026-08",
        title: "AI Fundamentals",
        subtitle: "Google · Coursera",
        description: "Google의 AI Fundamentals 수료증 취득",
        tags: ["AI", "Google", "Coursera"],
        icon: "📜",
        type: "education",
    },
];
