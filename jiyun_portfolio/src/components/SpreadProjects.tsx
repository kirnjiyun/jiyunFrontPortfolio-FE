'use client';

import { useId, useLayoutEffect, useRef, useState, type CSSProperties } from 'react';
import type { Project } from '@/data/content';
import ProjectCard from './ProjectCard';

type Placement = { x: number; y: number; scale: number; rotation: number };
const angles = [-8, 7, -4, 11, -12, 3];

export default function SpreadProjects({ projects, label, expandKey = '' }: {
  projects: Project[];
  label: string;
  expandKey?: string;
}) {
  const id = useId();
  const gridRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const previousFilter = useRef(expandKey);
  const [expanded, setExpanded] = useState(false);
  const [ready, setReady] = useState(false);
  const [layout, setLayout] = useState<{ height: number; placements: Placement[] }>({ height: 0, placements: [] });
  const projectKey = projects.map(p => p.slug).join(',');

  useLayoutEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => { if (preference.matches) setExpanded(true); };
    update();
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  useLayoutEffect(() => {
    // A filter change shows its results immediately instead of hiding them in a new pile.
    if (previousFilter.current !== expandKey) setExpanded(true);
    previousFilter.current = expandKey;
  }, [expandKey]);

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const measure = () => {
      const cards = Array.from(grid.children) as HTMLElement[];
      const width = grid.clientWidth;
      const small = width < 600;
      const placements = cards.map((card, index) => {
        const art = card.querySelector<HTMLElement>('.project-art');
        const artWidth = art?.offsetWidth || card.offsetWidth;
        const scale = Math.min((small ? 225 : 300) / artWidth, 0.9);
        const visibleIndex = Math.min(index, 5);
        return {
          x: width / 2 - artWidth * scale / 2 - card.offsetLeft - (art?.offsetLeft ?? 0) * scale + (visibleIndex % 2 ? 1 : -1) * visibleIndex * (small ? 5 : 9),
          y: (small ? 62 : 72) - card.offsetTop - (art?.offsetTop ?? 0) * scale + visibleIndex * 7,
          scale,
          rotation: angles[visibleIndex],
        };
      });
      setLayout({ height: grid.offsetHeight, placements });
      setReady(true);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(grid);
    return () => observer.disconnect();
  }, [projectKey]);

  if (!projects.length) return null;

  return <section className={`spread-projects ${expanded ? 'is-expanded' : 'is-collapsed'} ${ready ? 'is-ready' : ''}`} aria-label={`${label} 모음`}>
    <div className="spread-control">
      <span className="eyebrow">{expanded ? 'EXPLORE THE WORK' : 'A COLLECTION OF EXPERIENCES'}</span>
      <button ref={toggleRef} type="button" aria-expanded={expanded} aria-controls={id} onClick={() => setExpanded(value => !value)}>
        <span aria-hidden="true">{expanded ? '▧' : '↗'}</span> {expanded ? '다시 모아보기' : '펼쳐보기'}
      </button>
    </div>
    <div className="spread-stage" style={expanded && ready ? { height: layout.height } : undefined}>
      <div className="project-grid spread-grid" ref={gridRef} id={id}>
        {projects.map((project, index) => {
          const placement = layout.placements[index];
          const style: CSSProperties = {
            '--pile-x': `${placement?.x ?? 0}px`,
            '--pile-y': `${placement?.y ?? 0}px`,
            '--pile-scale': placement?.scale ?? 0.55,
            '--pile-rotation': `${placement?.rotation ?? 0}deg`,
            '--spread-delay': `${Math.min(index, 8) * 35}ms`,
            zIndex: projects.length - index,
          } as CSSProperties;
          return <div className={`spread-cell ${index > 5 ? 'pile-back' : ''}`} style={style} key={project.slug}>
            <ProjectCard project={project} index={index} stacked={ready && !expanded} />
          </div>;
        })}
      </div>
      {!expanded && <button className="stack-cover" type="button" aria-controls={id} aria-expanded={false} onClick={() => { setExpanded(true); toggleRef.current?.focus({ preventScroll: true }); }}>
        <span className="stack-caption"><span className="stack-count">{String(projects.length).padStart(2, '0')} PROJECTS</span><strong>클릭해서 펼쳐보세요 <span aria-hidden="true">↗</span></strong><span className="stack-hint">만들고 개선해온 서비스를 펼쳐보세요.</span></span>
      </button>}
    </div>
    <noscript><style>{'.spread-stage{height:auto!important;overflow:visible!important}.spread-cell{visibility:visible!important;transform:none!important;opacity:1!important}.spread-cell .project-card>*{opacity:1!important}.stack-cover,.spread-control{display:none!important}'}</style></noscript>
  </section>;
}
