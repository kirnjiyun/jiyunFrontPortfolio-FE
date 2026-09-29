import type { Metadata } from 'next';
import Link from 'next/link';
import { profile, projects } from '@/data/content';
export const metadata: Metadata = { title: 'About', description: profile.introduction, alternates: { canonical: '/about/' } };
export default function About() {
  return <div className="page-content"><header className="page-heading about-heading"><span className="eyebrow">ABOUT / KIM JIYUN</span><h1>구현부터 운영까지,<br /><span className="blue">책임지는 개발자.</span></h1><p>{profile.introduction}</p><Link className="button" href="/resume/">이력서 보기 ↗</Link></header>
    <section id="experience" className="about-section"><div><span className="eyebrow">01 / EXPERIENCE</span><h2>경력</h2></div><div>{profile.careers.map(c => <article className="experience-item" key={c.company}><span className="item-date">{c.period}</span><h3>{c.company}</h3><p className="item-role">{c.role}</p><p>{c.description}</p><div className="tags project-links">{c.projects.map(slug => <Link key={slug} href={`/projects/${slug}/`}>{projects.find(p => p.slug === slug)?.name} ↗</Link>)}</div></article>)}</div></section>
    <section className="about-section"><div><span className="eyebrow">02 / CAPABILITIES</span><h2>기술과 도구</h2></div><div className="skill-grid">{profile.skills.map(group => <div key={group.name}><h3>{group.name}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div></section>
    <section className="about-section"><div><span className="eyebrow">03 / EDUCATION</span><h2>학력과 교육</h2></div><div>{profile.education.map(e => <article className="education-item" key={e.name}><span className="item-date">{e.period}</span><h3>{e.name}</h3><p>{e.organization}</p><p className="muted">{e.detail}</p></article>)}</div></section>
    <section className="about-section"><div><span className="eyebrow">04 / CERTIFICATIONS</span><h2>자격과 어학</h2></div><div>{profile.certifications.map(c => <div className="cert-row" key={c.name}><div><h3>{c.name}</h3><p>{c.detail}</p></div><span>{c.date}</span></div>)}</div></section>
    <section className="about-section"><div><span className="eyebrow">05 / BEYOND CODE</span><h2>출간과 수상</h2></div><div>{profile.awards.map(a => <Link className="award" href={`/projects/${a.slug}/`} key={a.slug}><h3>{a.name} ↗</h3><p>{a.detail}</p></Link>)}</div></section>
  </div>;
}
