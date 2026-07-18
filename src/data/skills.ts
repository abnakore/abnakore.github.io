import type { SkillGroup } from "../types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      { label: "Python", value: 90 },
      { label: "TypeScript / JavaScript", value: 87 },
      { label: "HTML / CSS", value: 90 },
      { label: "C / C++", value: 78 },
      { label: "Java", value: 65 },
      { label: "PHP", value: 45 },
      { label: "Swift", value: 40 },
      { label: "Scratch", value: 90 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { label: "React", value: 88 },
      { label: "React Native / Expo", value: 82 },
      { label: "Django / DRF", value: 88 },
      { label: "Tailwind CSS", value: 90 },
      { label: "Kivy / KivyMD", value: 80 },
      { label: "Pygame", value: 75 },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { label: "Git / GitHub", value: 82 },
      { label: "Docker", value: 72 },
      { label: "PostgreSQL", value: 80 },
      { label: "Figma", value: 82 },
      // { label: "Linux", value: 75 },
    ],
  },
  {
    category: "Domains",
    items: [
      { label: "Backend Development", value: 90 },
      { label: "Frontend Development", value: 86 },
      { label: "Software Engineering", value: 88 },
      { label: "Mobile App Development", value: 82 },
      { label: "UI/UX Design", value: 80 },
      { label: "API Design", value: 85 },
      { label: "Data Science", value: 65 },
      { label: "Embedded Systems", value: 60 },
      { label: "Game Development", value: 60 },
    ],
  },
];
