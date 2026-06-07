export interface TimelineEvent {
  id: string;
  year: number;
  month?: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  position: number; // 0~100 (%), position on the track rail
  icon: string;
  type: 'work' | 'education' | 'project' | 'award';
}

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'univ',
    year: 2018,
    month: 3,
    title: '중앙대학교 입학',
    subtitle: '공공인재학부 · 서울 · 2024.02 졸업',
    description:
      '공공인재학부에 입학해 사회·법·행정을 탐구하는 동시에, 독학으로 HTML·CSS부터 시작해 프론트엔드 개발에 발을 들였다. 전공 외 영역에서 자신이 만든 화면이 움직이는 경험이 개발자로의 전환점이 됐다.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    position: 8,
    icon: '🎓',
    type: 'education',
  },
  {
    id: 'likelion',
    year: 2023,
    month: 7,
    title: '멋쟁이사자처럼 프론트엔드 스쿨',
    subtitle: '640시간 · 2023.07 ~ 2023.11',
    description:
      '웹 접근성·UI/UX 기반의 HTML/CSS/JavaScript 심화 학습과 React를 활용한 팀 프로젝트를 수행했다. 처음으로 실제 협업 환경을 경험하며 Git Flow와 컴포넌트 설계 감각을 키웠다.',
    tags: ['React', 'HTML/CSS', 'JavaScript', 'UI/UX', '웹 접근성'],
    position: 26,
    icon: '🦁',
    type: 'education',
  },
  {
    id: 'typescript-ebook',
    year: 2024,
    month: 1,
    title: '타입스크립트 e-book 공동 집필',
    subtitle: '「핵심만 담은 타입스크립트 찍어먹기」 · 2024.01 ~ 2024.03',
    description:
      'TypeScript 입문자를 위한 e-book을 공동 집필했다. 개념을 글로 정리하는 과정에서 타입 시스템에 대한 이해가 크게 깊어졌고, 이후 실무에서도 타입 설계에 자신감을 갖게 됐다.',
    tags: ['TypeScript', '기술 글쓰기'],
    position: 43,
    icon: '📖',
    type: 'project',
  },
  {
    id: 'codeit',
    year: 2025,
    month: 1,
    title: '코드잇 심화 부트캠프',
    subtitle: '심화 프론트엔드 엔지니어 · 359시간 · 2025.01 ~ 2025.03',
    description:
      'Tailwind CSS, CSS 애니메이션, 웹 스토리지, 테스트, CI/CD를 집중적으로 학습했다. 협업 프로젝트를 통해 실무에 가까운 개발 프로세스를 경험했다.',
    tags: ['Tailwind CSS', 'CI/CD', 'Testing', 'React', 'Next.js'],
    position: 57,
    icon: '💻',
    type: 'education',
  },
  {
    id: 'bridge-intern',
    year: 2025,
    month: 6,
    title: '브릿지(주) 프론트엔드 인턴',
    subtitle: '프론트엔드 개발 인턴 · 2025.06 ~ 2025.07',
    description:
      'Next.js 기반 proptech MVP를 2주 내에 단독으로 구현했다. 해당 결과물이 은행 계약 및 투자 유치로 직접 연결되며 빠른 실행력과 제품 완성도를 인정받았다.',
    tags: ['Next.js', 'React', 'TypeScript', 'proptech'],
    position: 72,
    icon: '🏢',
    type: 'work',
  },
  {
    id: 'devworkshop',
    year: 2025,
    month: 10,
    title: '주식회사 개발공작실',
    subtitle: '프론트엔드 개발자 · 2025.10 ~ 2026.06',
    description:
      '자체 서비스 환경시험 관리 플랫폼(ETPS, LIMS)의 유지보수·고도화를 담당했다. SI 프로젝트(KINU 북한총람 플랫폼, 광주 도로 포트홀 관리 시스템 등)에서 단독 설계·구현 및 반응형 대응을 맡았고, 테스트 시나리오·기능명세서·QA 버그 리포트 등 개발 문서도 체계화했다.',
    tags: ['React', 'TypeScript', 'Next.js', 'LIMS', 'SI', '반응형'],
    position: 88,
    icon: '⭐',
    type: 'work',
  },
];
