import Link from 'next/link';
export default function NotFound() { return <div className="not-found"><span className="eyebrow">404 / PAGE NOT FOUND</span><h1>이 페이지는 찾을 수 없어요.</h1><p>프로젝트 목록에서 다른 경험을 살펴보세요.</p><Link className="button" href="/projects/">프로젝트 보기 ↗</Link></div>; }
