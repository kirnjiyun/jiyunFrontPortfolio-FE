import projectData from './projects.json';
import profileData from './profile.json';

export const projects = projectData;
export type Project = (typeof projects)[number];
export const profile = profileData;
export const featuredProjects = projects.filter((project) => project.featured);
export const currentProjects = projects.filter((project) => !project.archived);
export const siteUrl = 'https://www.kimjiyun.site';
