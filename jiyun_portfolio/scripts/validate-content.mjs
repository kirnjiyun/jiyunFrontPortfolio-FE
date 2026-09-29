import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const root = fileURLToPath(new URL('../', import.meta.url));
export const projects = JSON.parse(readFileSync(resolve(root, 'src/data/projects.json'), 'utf8'));
export const profile = JSON.parse(readFileSync(resolve(root, 'src/data/profile.json'), 'utf8'));

export function validateContent(data, person, assetExists = asset => existsSync(resolve(root, 'public', asset.slice(1)))) {
  const errors = []; const slugs = new Set();
  for (const p of data) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.slug || '')) errors.push(`Invalid slug: ${p.slug}`);
    if (slugs.has(p.slug)) errors.push(`Duplicate slug: ${p.slug}`);
    slugs.add(p.slug);
    for (const key of ['name', 'category', 'period', 'role', 'summary', 'context']) {
      if (typeof p[key] !== 'string' || !p[key].trim()) errors.push(`${p.slug}: missing ${key}`);
    }
    if (!['실무', '인턴', '개인', '팀', '출간'].includes(p.category)) errors.push(`${p.slug}: invalid category`);
    for (const key of ['techStack', 'actions', 'screenshots', 'links']) {
      if (!Array.isArray(p[key])) errors.push(`${p.slug}: invalid ${key}`);
    }
    for (const asset of [p.thumbnail, ...(p.screenshots || [])].filter(Boolean)) {
      if (!asset.startsWith('/images/') || asset.includes('..') || !assetExists(asset)) errors.push(`${p.slug}: missing/local-only asset ${asset}`);
    }
    for (const link of p.links || []) {
      try { if (new URL(link.url).protocol !== 'https:') throw new Error(); }
      catch { errors.push(`${p.slug}: invalid link ${link.url}`); }
    }
  }
  for (const career of person.careers || []) for (const slug of career.projects) if (!slugs.has(slug)) errors.push(`Broken career project: ${slug}`);
  for (const award of person.awards || []) if (!slugs.has(award.slug)) errors.push(`Broken award project: ${award.slug}`);
  return errors;
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const errors = validateContent(projects, profile);
  if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
  else console.log(`Validated ${projects.length} projects, local assets, external links and profile references.`);
}
