import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    items: [
      { label: 'Python', value: 90 },
      { label: 'TypeScript / JavaScript', value: 85 },
      { label: 'HTML / CSS', value: 85 },
      { label: 'Scratch', value: 90 },
    ],
  },
  {
    category: 'Frameworks',
    items: [
      { label: 'React', value: 85 },
      { label: 'Django / DRF', value: 80 },
      { label: 'Tailwind CSS', value: 85 },
      { label: 'Node.js', value: 70 },
    ],
  },
  {
    category: 'Domain',
    items: [
      { label: 'UI/UX & Figma', value: 80 },
      { label: 'Data Science', value: 65 },
      { label: 'Embedded Systems', value: 60 },
      { label: 'Git & DevOps', value: 70 },
    ],
  },
];