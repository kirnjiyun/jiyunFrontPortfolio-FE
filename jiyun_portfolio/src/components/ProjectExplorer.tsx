'use client';
import { useState } from 'react';
import { projects } from '@/data/content';
import SpreadProjects from './SpreadProjects';

const categories = ['전체', '실무', '인턴', '개인', '팀', '출간'];
export default function ProjectExplorer() {
  const [category, setCategory] = useState('전체');
  const [query, setQuery] = useState('');
  const [archive, setArchive] = useState(false);
  const filtered = projects.filter(p => (archive || !p.archived) && (category === '전체' || category === p.category) && `${p.name} ${p.summary} ${p.techStack.join(' ')}`.toLowerCase().includes(query.trim().toLowerCase()));
  return <>
    <div className="explorer-toolbar"><div className="filter-tabs" aria-label="프로젝트 분류">{categories.map(c => <button type="button" key={c} aria-pressed={c === category} onClick={() => setCategory(c)}>{c}</button>)}</div>
      <label className="search"><span className="sr-only">프로젝트 검색</span><span aria-hidden="true">⌕</span><input value={query} onChange={event => setQuery(event.target.value)} placeholder="프로젝트 또는 기술 검색" type="search" /></label></div>
    <div className="results-meta"><p role="status" aria-live="polite">{filtered.length} projects</p><label className="archive-toggle"><input type="checkbox" checked={archive} onChange={event => setArchive(event.target.checked)} /> 이전 학습 프로젝트 포함</label></div>
    <SpreadProjects projects={filtered} label="프로젝트" expandKey={`${category}:${query}:${archive}`} />
    {!filtered.length && <div className="empty-state"><h2>검색 결과가 없습니다.</h2><p>다른 검색어나 분류를 선택해 보세요.</p><button className="button" onClick={() => { setCategory('전체'); setQuery(''); setArchive(false); }}>필터 초기화</button></div>}
  </>;
}
