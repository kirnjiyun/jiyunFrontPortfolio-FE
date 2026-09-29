import type { Metadata } from 'next';
import ProjectExplorer from '@/components/ProjectExplorer';
export const metadata: Metadata = { title: 'Projects', description: 'DailyQ, ETPS, KINU, NPLY를 비롯한 김지윤의 실무·개인·팀 프로젝트.', alternates: { canonical: '/projects/' } };
export default function ProjectsPage() { return <div className="page-content"><header className="page-heading"><span className="eyebrow">WORK / 2023 — 2026</span><h1>만들고, 운영하고, 개선한 기록.</h1><p>아이디어를 서비스로 구현하고, 운영 중 발견한 오류와 사용성을 개선해온 경험입니다.</p></header><ProjectExplorer /></div>; }
