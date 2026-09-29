import type { MetadataRoute } from 'next';
import { projects, profile, siteUrl } from '@/data/content';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap { return ['', '/about', '/projects', '/resume', ...projects.map(p => `/projects/${p.slug}`)].map(path => ({ url: `${siteUrl}${path}/`, lastModified: profile.updatedAt })); }
