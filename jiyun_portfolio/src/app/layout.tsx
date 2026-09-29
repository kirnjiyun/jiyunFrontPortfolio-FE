import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { profile, siteUrl } from '@/data/content';
import './globals.css';
import './editorial.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: '김지윤 | 풀스택 개발자', template: '%s | 김지윤 포트폴리오' },
  description: profile.introduction,
  openGraph: { type: 'website', locale: 'ko_KR', siteName: '김지윤 포트폴리오', title: '김지윤 | 풀스택 개발자', description: profile.introduction },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body><a className="skip-link" href="#main">본문 바로가기</a><div className="site-shell"><Navigation /><main id="main">{children}</main>
    <footer id="contact" className="footer"><div className="eyebrow">LET’S BUILD THE NEXT SERVICE</div><div className="footer-title">다음 서비스를<br />함께 만들어가요.<a href={`mailto:${profile.email}`} aria-label="김지윤에게 이메일 보내기">↗</a></div>
      <div className="footer-links"><a href={`mailto:${profile.email}`}>{profile.email}</a><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a><Link href="/resume/">이력서 보기 ↗</Link></div>
      <div className="footer-bottom"><span>© 2026 KIM JIYUN</span><span>Build. Operate. Improve.</span><a href="#main">Back to top ↑</a></div>
    </footer></div></body></html>;
}
