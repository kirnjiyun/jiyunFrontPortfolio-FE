import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/content';

export const dynamicParams = false;
export function generateStaticParams() { return projects.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const p = projects.find(p => p.slug === slug);
  return p ? { title: p.name, description: p.summary, alternates: { canonical: `/projects/${p.slug}/` }, openGraph: { title: p.name, description: p.summary, url: `/projects/${p.slug}/`, siteName: '김지윤 포트폴리오', locale: 'ko_KR', type: 'article' } } : {};
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const project = projects.find(p => p.slug === slug); if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <article className="page-content detail"><Link className="text-link back-link" href="/projects/">← 모든 프로젝트</Link><header className="page-heading"><span className="eyebrow">{project.category} / {project.period}{project.archived ? ' / ARCHIVE' : ''}</span><h1>{project.name}</h1><p>{project.summary}</p></header>
    <div className="detail-facts"><div><span className="eyebrow">ROLE</span><p>{project.role}</p></div><div><span className="eyebrow">PERIOD</span><p>{project.period}</p></div><div><span className="eyebrow">STACK</span><div className="tags">{project.techStack.map(t => <span key={t}>{t}</span>)}</div></div></div>
    <div className="detail-body"><aside><span className="eyebrow">PROJECT OVERVIEW</span>{project.metric && <p className="detail-metric">{project.metric}</p>}{project.links.length > 0 && <div className="detail-links">{project.links.map(link => <a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div>}</aside>
    <div className="case-study"><section><span className="eyebrow">01 / CONTEXT</span><h2>어떤 문제였나요?</h2><p>{project.context}</p></section><section><span className="eyebrow">02 / CONTRIBUTION</span><h2>이렇게 풀었습니다.</h2><ol>{project.actions.map((action, i) => <li key={action}><span className="action-number">{String(i + 1).padStart(2, '0')}</span><p>{action}</p></li>)}</ol></section>{project.result && <section className="result-box"><span className="eyebrow">03 / OUTCOME</span><h2>결과와 배운 점.</h2><p>{project.result}</p></section>}</div></div>
    {project.screenshots.length > 0 && <section className="screenshots"><div className="section-heading"><div><span className="eyebrow">INTERFACE</span><h2>화면 기록</h2></div></div><div className="screenshot-grid">{project.screenshots.map((src, i) => <a href={src} target="_blank" rel="noreferrer" key={src} aria-label={`${project.name} 화면 ${i + 1} 원본 보기`}><img src={src} alt={`${project.name} 구현 화면 ${i + 1}`} loading="lazy" /></a>)}</div></section>}
    <Link className="next-project" href={`/projects/${next.slug}/`}><span className="eyebrow">NEXT PROJECT</span><h2>{next.name}<span>↗</span></h2></Link>
  </article>;
}
