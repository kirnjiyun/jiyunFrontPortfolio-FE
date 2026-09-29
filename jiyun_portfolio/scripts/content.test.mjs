import test from 'node:test';
import assert from 'node:assert/strict';
import { validateContent, projects, profile } from './validate-content.mjs';

test('all migrated projects and profile references are valid', () => {
  assert.deepEqual(validateContent(projects, profile), []);
});
test('duplicate slugs and broken profile references fail before export', () => {
  const errors = validateContent([...projects, projects[0]], { ...profile, careers: [{ projects: ['missing-project'] }] });
  assert.ok(errors.some(e => e.startsWith('Duplicate slug:')));
  assert.ok(errors.some(e => e.includes('missing-project')));
});
test('expired remote images and missing local assets cannot enter a static build', () => {
  const errors = validateContent([{ ...projects[0], thumbnail: 'https://notion.so/expired-image', screenshots: ['/images/missing.png'] }], { careers: [], awards: [] }, () => false);
  assert.equal(errors.filter(e => e.includes('asset')).length, 2);
});
test('non-HTTPS external links are rejected', () => {
  const errors = validateContent([{ ...projects[0], links: [{ label: 'unsafe', url: 'javascript:alert(1)' }] }], { careers: [], awards: [] });
  assert.ok(errors.some(e => e.includes('invalid link')));
});
