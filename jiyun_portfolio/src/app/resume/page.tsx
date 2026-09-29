import type { Metadata } from 'next';
import Link from 'next/link';
import { profile, featuredProjects } from '@/data/content';
import PrintButton from '@/components/PrintButton';
export const metadata: Metadata = { title: '이력서', alternates: { canonical: '/resume/' } };
export default function Resume() { return <article className="page-content resume"><header className="resume-heading"><div><span className="eyebrow">FULL-STACK DEVELOPER</span><h1>{profile.name}</h1><a href={`mailto:${profile.email}`}>{profile.email}</a><p><a href={profile.github}>{profile.github}</a></p></div><PrintButton /></header><p className="resume-intro">{profile.introduction}</p>
    <section><h2>경력</h2>{profile.careers.map(c => <article key={c.company}><h3>{c.company} · {c.role}</h3><p className="item-date">{c.period}</p><p>{c.description}</p></article>)}</section>
    <section><h2>주요 프로젝트</h2>{featuredProjects.map(p => <article key={p.slug}><h3><Link href={`/projects/${p.slug}/`}>{p.name}</Link> · {p.role}</h3><p className="item-date">{p.period}</p><p>{p.summary}</p><ul>{p.actions.slice(0, 2).map(a => <li key={a}>{a}</li>)}</ul><p>{p.result}</p></article>)}</section>
    <section><h2>기술</h2>{profile.skills.map(s => <p key={s.name}><strong>{s.name}</strong> — {s.items.join(', ')}</p>)}</section>
    <section><h2>학력·교육</h2>{profile.education.map(e => <article key={e.name}><h3>{e.organization} · {e.name}</h3><p>{e.period} / {e.detail}</p></article>)}</section>
    <section><h2>자격·어학</h2>{profile.certifications.map(c => <p key={c.name}>{c.name} — {c.detail} ({c.date})</p>)}</section><section><h2>출간·수상</h2>{profile.awards.map(a => <p key={a.slug}>{a.name} — {a.detail}</p>)}</section><p className="muted">최종 업데이트 {profile.updatedAt.slice(0, 7).replace('-', '.')}</p>
  </article>; }
