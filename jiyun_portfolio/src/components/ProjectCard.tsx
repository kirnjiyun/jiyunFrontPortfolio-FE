import Link from 'next/link';
import type { Project } from '@/data/content';

export default function ProjectCard({ project, index = 0, stacked = false }: { project: Project; index?: number; stacked?: boolean }) {
  return <Link className="project-card" tabIndex={stacked ? -1 : undefined} aria-hidden={stacked || undefined} href={`/projects/${project.slug}/`}>
    <div className={`project-art art-${project.slug}`} aria-hidden="true">
      {project.thumbnail ? <img src={project.thumbnail} alt="" loading="lazy" /> : <>
        <div className="art-meta"><span>{project.category === '출간' ? 'WRITING' : project.category === '실무' ? 'CLIENT WORK' : 'PRODUCT DEVELOPMENT'}</span><span>{String(index + 1).padStart(2, '0')}</span></div>
        <div className="art-type">{project.slug === 'dailyq' ? <>Daily<span>Q</span><small>One question. Every morning.</small></> : project.slug === 'etps' ? <>ETPS<span className="art-lines">↗</span><small>Clarity in complexity.</small></> : project.slug === 'kinu' ? <>KINU<span className="art-lines">▤</span><small>Knowledge, within reach.</small></> : project.slug === 'nply' ? <>NPLY<span className="art-lines">↗</span><small>Connecting opportunities.</small></> : <><span className="art-glyph">{project.category === '출간' ? '{ }' : project.category === '실무' ? '⌘' : '↗'}</span><small>{project.techStack.slice(0, 2).join(' / ')}</small></>}</div>
        <div className="art-bottom">{project.metric || project.role}<span>↗</span></div>
      </>}
    </div>
    <div className="card-meta"><span>{project.category} · {project.period}</span><span className="card-arrow" aria-hidden="true">↗</span></div>
    <h3>{project.name}</h3><p>{project.summary}</p>
    <div className="tags">{project.techStack.slice(0, 4).map(tech => <span key={tech}>{tech}</span>)}</div>
  </Link>;
}
