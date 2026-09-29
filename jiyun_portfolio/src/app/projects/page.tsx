import type { Metadata } from 'next';
import ProjectExplorer from '@/components/ProjectExplorer';
export const metadata: Metadata = { title: 'Projects', description: 'DailyQ, ETPS, KINU, NPLY를 비롯한 김지윤의 실무·개인·팀 프로젝트.', alternates: { canonical: '/projects/' } };
export default function ProjectsPage() { return <div className="page-content"><header className="page-heading"><span className="eyebrow">WORK / 2023 — 2026</span><h1>문제를 풀어온 기록.</h1><p>기획의 빈칸을 채우고, 화면을 구현하고, 운영의 문제를 해결한 경험입니다.</p></header><ProjectExplorer /></div>; }
