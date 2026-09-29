'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname() ?? '';
  return <header className="header"><Link className="wordmark" href="/" aria-label="김지윤 포트폴리오 홈"><span className="brand-mark">j.</span> kim jiyun</Link>
    <nav aria-label="주 메뉴">
      <Link href="/projects/" aria-current={pathname.startsWith('/projects') ? 'page' : undefined}>Projects</Link>
      <Link href="/about/" aria-current={pathname.startsWith('/about') ? 'page' : undefined}>About</Link>
      <Link className="nav-contact" href="/#contact">Contact <span aria-hidden="true">↗</span></Link>
    </nav>
  </header>;
}
