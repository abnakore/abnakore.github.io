# Abdullahi Nakore — Portfolio (React + TS + Tailwind v4)

Dual-mode portfolio: a Terminal/Dev-Core theme and a Bento Grid theme, toggled live via the
CLI / GRID switch in the navbar. State is shared through `ModeContext` so it persists across
routes.

## 1. Install dependencies

From your existing project root:

```bash
npm install react-router-dom framer-motion lucide-react
```

## 2. Drop in the source files

Copy everything inside this `src/` folder into your project's `src/`, merging with what's
already there. Key files:

- `App.tsx`, `main.tsx` — replace your existing ones (or merge the Router/Provider setup in).
- `index.css` — merge the `@theme` block into your existing Tailwind v4 CSS entry file
  (don't duplicate the `@import "tailwindcss";` line if you already have one).
- Everything else (`components/`, `pages/`, `hooks/`, `context/`, `data/`, `types/`) is new.

## 3. Add fonts

Add these to your `index.html` `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&family=IBM+Plex+Sans:wght@400;500;600;700&family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

## 4. Update your content

- `data/projects.ts` — swap in real links, screenshots-as-gradients (or real thumbnail images),
  and edit `longDescription` for each project's detail page.
- `data/socials.ts` — put your real GitHub / LinkedIn / Instagram / email links.
- `components/sections/Contact.tsx` — currently opens the visitor's mail client via `mailto:`.
  Swap in a real form backend (Formspree, EmailJS, your own API) when ready — the form state and
  validation are already wired, just replace the `handleSubmit` body.

## Structure

```
src/
  types/        — shared TS interfaces
  data/         — projects, skills, services, socials (edit these for content changes)
  context/      — ModeContext (terminal/bento global state)
  hooks/        — useMode, useTilt (cursor-tilt cards), useTypewriter (hero typing effect)
  components/
    layout/     — Navbar, Footer, Layout, ModeToggle, WaveDivider
    ui/         — Button, SectionTag, SocialLinks, TiltCard
    sections/   — Hero, About, Services, ProjectsPreview, ProjectCard, Contact, SkillBars
  pages/        — Home, ProjectsPage, ProjectDetailPage, ContactPage, NotFoundPage
```

## Routes

- `/` — full one-page layout (Hero → About → Skills → Services → Projects preview → Contact)
- `/projects` — full project listing (shipped + in progress)
- `/projects/:slug` — individual project case study
- `/contact` — standalone contact page
- `*` — 404
