import type { Metadata } from 'next';
import Link from 'next/link';
import AsciiFlower from '@/components/AsciiFlower';
import SpreadProjects from '@/components/SpreadProjects';
import { featuredProjects, profile } from '@/data/content';

export const metadata: Metadata = { alternates: { canonical: '/' } };
export default function Home() {
  return <>
    <section className="hero"><div className="hero-top"><span className="eyebrow"><i className="status-dot" /> FULL-STACK DEVELOPER</span><span className="eyebrow">PORTFOLIO / 2026</span></div>
      <AsciiFlower /><h1>{profile.headline.split('\n').map(line => <span key={line}>{line}</span>)}</h1>
      <div className="hero-bottom"><p>{profile.introduction}</p><Link className="round-link" href="#selected" aria-label="주요 프로젝트 보기">↓</Link></div>
      <div className="hero-foot"><span>KIM JIYUN · 김지윤</span><span>Vue · React · TypeScript · Next.js</span></div>
    </section>
    <section id="selected" className="section"><div className="section-heading"><div><span className="eyebrow">01 / SELECTED WORK</span><h2>만들고, 운영하고, 개선한 기록.</h2></div><Link className="text-link" href="/projects/">모든 프로젝트 보기 ↗</Link></div>
      <SpreadProjects projects={featuredProjects} label="주요 프로젝트" />
    </section>
    <section className="approach section"><div><span className="eyebrow">02 / HOW I WORK</span><h2>구현에서 멈추지 않고,<br />운영하며 개선합니다.</h2><Link className="text-link" href="/about/">조금 더 알아보기 ↗</Link></div>
      <div className="principles"><article><span>01</span><div><h3>요구사항의 빈칸을 찾습니다.</h3><p>NPLY에서 모호한 수익률 계산 기준을 기획과 세 차례 대조해 확정했습니다. 구현 전에 무엇을 계산하고 보여줄지부터 맞춥니다.</p></div></article><article><span>02</span><div><h3>증상을 넘어 원인을 고칩니다.</h3><p>ETPS의 계산 오류와 ExcelJS의 공유 스타일 참조까지 추적했습니다. 수정한 이유와 재발방지안을 문서로 남깁니다.</p></div></article><article><span>03</span><div><h3>만든 다음의 일도 책임집니다.</h3><p>DailyQ의 발송 중단을 겪으며 중복과 누락을 다른 실패로 다뤘습니다. 기획과 개발에서 운영과 관측까지 관심을 이어갑니다.</p></div></article></div>
    </section>
    <section className="career-preview section"><div className="section-heading"><div><span className="eyebrow">03 / EXPERIENCE</span><h2>서비스를 만들고 개선해온 경험.</h2></div><Link className="text-link" href="/about/#experience">전체 경력 보기 ↗</Link></div>{profile.careers.map(c => <Link className="career-row" key={c.company} href={`/projects/${c.projects[0]}/`}><span>{c.period}</span><h3>{c.company}</h3><span>{c.role}</span><span aria-hidden="true">↗</span></Link>)}</section>
  </>;
}
