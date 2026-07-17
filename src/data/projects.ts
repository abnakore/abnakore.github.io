import type { Project } from '../types';

export const projects: Project[] = [
  {
    slug: 'family-tree-platform',
    title: 'Family Tree Platform',
    description: 'Full-stack visualization app with zoom/pan tree rendering, person & relationship management, and a full events system with photo uploads.',
    longDescription:
      'A comprehensive full-stack family tree application. The frontend is React 18 + TypeScript + Vite with a custom Tailwind v4 design system built around a family-themed palette. The backend is Django + DRF, handling authentication, relationship rules, tagging, and event photo management. Includes tree statistics, deceased-person styling, and admin tooling.',
    fileName: './family-tree.tsx',
    status: 'shipped',
    tags: ['React 18', 'TypeScript', 'Vite', 'Django', 'DRF', 'Tailwind v4'],
    gradient: 'from-b-accent to-purple-500',
    links: {},
  },
  {
    slug: 'nera-exchange',
    title: 'NERA Currency Exchange',
    description: 'Real-time currency conversion platform supporting fiat and crypto exchange rates across 100+ currencies.',
    longDescription:
      'NERA is a currency-rate web app offering live conversion between fiat and crypto currencies, with a clean lookup interface and a Nigerian-flag-inspired brand identity.',
    fileName: './nera.py',
    status: 'shipped',
    tags: ['Python', 'API integration', 'Frontend'],
    gradient: 'from-green-500 to-b-accent',
    links: {},
  },
  {
    slug: 'pump-house-uiux',
    title: 'Pump House UI/UX',
    description: 'Mobile fitness app design specification, navigation architecture, and high-fidelity screen mockups.',
    longDescription:
      'A full UI/UX design analysis and specification for a mobile fitness app, "Pump House" — covering navigation architecture and high-fidelity screens matching an existing design system.',
    fileName: './pump-house.fig',
    status: 'shipped',
    tags: ['Figma', 'UI/UX', 'Mobile Design'],
    gradient: 'from-b-accent2 to-purple-500',
    links: {},
  },
  {
    slug: 'portfolio-v1',
    title: 'Portfolio v1',
    description: 'My previous single-page portfolio — the one this new site replaced.',
    fileName: './portfolio-v1/',
    status: 'shipped',
    tags: ['Design'],
    gradient: 'from-b-ink to-b-accent',
    links: {},
  },
  {
    slug: 'nakore-construction',
    title: 'Nakore Construction',
    description: 'Brand identity and website for a construction company — in progress.',
    fileName: './nakore-construction/',
    status: 'in-progress',
    tags: ['Branding'],
    gradient: 'from-gray-300 to-gray-400',
    links: {},
  },
  {
    slug: 'ft-project',
    title: 'FT',
    description: 'Details coming soon.',
    fileName: './ft-project/',
    status: 'in-progress',
    tags: [],
    gradient: 'from-gray-300 to-gray-400',
    links: {},
  },
];

export const shippedProjects = projects.filter((p) => p.status === 'shipped');
export const ongoingProjects = projects.filter((p) => p.status === 'in-progress');
