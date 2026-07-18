import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "family-tree-web-app",
    title: "Family Tree Web Application",
    description:
      "A full-stack genealogy platform combining interactive tree visualization, family event notifications, and a multilingual AI assistant for family history.",
    longDescription:
      "A full-stack genealogy platform that lets families map their lineage, preserve history, and stay connected — combining interactive tree visualization with real-time communication and an AI assistant that can answer virtually any question about the family, even beyond what's explicitly recorded.",
    fileName: "./family-tree.tsx",
    status: "in-progress",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS v4",
      "Django",
      "Django REST Framework",
    ],
    gradient: "from-amber-500 to-orange-700",
    links: { live: "", github: "", caseStudy: "family-tree-web-app" },
    flagship: true,
    type: "web",
    role: "Full-stack developer & designer",
    timeline: "2025 – present",
    caseStudy: {
      problem:
        "Most family history lives scattered across group chats, old photos, and memory — hard to search, easy to lose, and inaccessible to younger or distant family members. Existing genealogy tools are often clunky, static, or built for research rather than everyday family use. The goal was to build something that's both a structured record and a living, usable part of family life.",
      approach:
        "The build started with the data model: representing relationships (parent, sibling, spouse, etc.) in a way that stays valid as families grow, including rules to catch invalid or contradictory relationships as they're added. On top of that sits an interactive tree canvas — zoomable, pannable, and readable even for large, multi-generational families — with visual distinctions for deceased members and tagging for grouping (e.g. by branch, generation, or location). From there, the scope expanded from a record of who's related to whom into a living hub for the family, adding event notifications and a conversational AI assistant.",
      techStack: {
        frontend: ["React 18", "TypeScript", "Vite", "Tailwind CSS v4"],
        backend: ["Django", "Django REST Framework"],
        inProgress: [
          "Email notification pipeline",
          "Multilingual AI assistant integration",
        ],
      },
      designConsiderations:
        "Because the app handles sensitive, personal family information — including records of deceased members — care went into both the visual tone (respectful, warm styling rather than a clinical dashboard look) and access control (admin-level management of who can view or edit specific parts of the tree).",
      challenges: [
        "Modeling family relationships turned out to be more complex than a typical tree structure — real families include remarriages, adoptions, and non-linear relationships that a naive parent-child model doesn't capture well",
        "Building validation rules that catch genuine errors without being overly rigid was one of the harder design problems in the project",
        "Extending the app from a static record into something with live notifications and a conversational AI layer also meant designing the data model to be flexible enough to feed both a structured UI and a natural-language assistant",
      ],
      features: [
        "Interactive tree visualization with zoom, pan, and generational layout",
        "Relationship-rule validation to prevent invalid family structures",
        "Deceased-member styling and tagging system",
        "Full events system with photo uploads",
        "Automated member notifications via email (multi-channel planned)",
        "Multilingual AI assistant for open-ended family Q&A",
        "Tree-wide statistics (family size, generations, branches)",
        "Authentication and admin controls for managing sensitive family data",
      ],
      outcome:
        "Core tree, person/relationship management, tagging, and events system are built and functional. Email notifications and the multilingual AI assistant are in active development.",
      screenshots: [
        {
          label: "Tree View",
          description:
            "Interactive family tree with zoom/pan and deceased-member styling",
        },
        {
          label: "Person Editor",
          description:
            "Detailed person card with relationships, events, and photo gallery",
        },
        {
          label: "Events Timeline",
          description: "Chronological view of family events with photo uploads",
        },
      ],
    },
  },
  {
    slug: "nera-exchange",
    title: "NERA Currency Exchange",
    description:
      "Real-time currency conversion platform supporting fiat and crypto exchange rates across 100+ currencies.",
    longDescription:
      "NERA is a currency-rate web app offering live conversion between fiat and crypto currencies, with a clean lookup interface and a Nigerian-flag-inspired brand identity.",
    fileName: "./nera.py",
    status: "shipped",
    tags: ["Python", "API integration", "Frontend"],
    gradient: "from-green-500 to-b-accent",
    links: { live: "#", github: "#" },
    flagship: false,
    type: "web",
    role: "Developer · Solo project",
    timeline: "Q4 2025",
    caseStudy: {
      problem:
        "Getting accurate, real-time currency conversion rates — especially for Nigerian Naira (NGN) against both fiat and crypto — requires aggregating multiple APIs. Most tools either don't support NGN or have stale rates.",
      approach:
        "Built a lightweight Python backend that polls multiple exchange rate APIs and caches results with smart TTLs. The frontend is a clean single-page interface with a Nigerian-flag-inspired color palette.",
      techStack: [
        {
          category: "Backend",
          items: [
            "Python",
            "FastAPI",
            "Redis (caching)",
            "ExchangeRate-API",
            "CoinGecko API",
          ],
        },
        {
          category: "Frontend",
          items: ["HTML", "CSS", "JavaScript", "Chart.js"],
        },
      ],
      outcome:
        "Supports 100+ fiat currencies and 50+ cryptocurrencies with sub-30-second cache freshness. The NGN-specific feature saw organic traffic from Nigeria within days of launch.",
      challenges: [
        "Handling API rate limits across multiple providers with graceful fallbacks",
        "Designing a color scheme that feels distinctly Nigerian without being overwhelming",
      ],
    },
  },
  {
    slug: "pump-house-uiux",
    title: "Pump House UI/UX",
    description:
      "Mobile fitness app design specification, navigation architecture, and high-fidelity screen mockups.",
    longDescription:
      'A full UI/UX design analysis and specification for a mobile fitness app, "Pump House" — covering navigation architecture and high-fidelity screens matching an existing design system.',
    fileName: "./pump-house.fig",
    status: "shipped",
    tags: ["Figma", "UI/UX", "Mobile Design"],
    gradient: "from-b-accent2 to-purple-500",
    links: { caseStudy: "#" },
    flagship: true,
    type: "design",
    role: "UI/UX Designer · Contract",
    timeline: "Q3 2025",
    caseStudy: {
      problem:
        "The Pump House fitness app had a functional but visually inconsistent interface. Users reported confusion navigating between workout tracking, social features, and progress analytics. The existing design system was fragmented across screens.",
      approach:
        "I conducted a full design audit, then rebuilt the navigation architecture using a bottom-tab + contextual action sheet pattern. Created a cohesive design system in Figma with reusable components, typography scale, and a dark-mode-first color palette that matches the brand's gym aesthetic.",
      techStack: [
        {
          category: "Design",
          items: ["Figma", "Design System", "Prototyping", "User Flows"],
        },
        {
          category: "Research",
          items: [
            "Heuristic Evaluation",
            "Competitive Analysis",
            "User Interviews",
          ],
        },
      ],
      outcome:
        "Delivered 30+ high-fidelity screens, a 50-component design system, and an interactive prototype. The client reported a 40% reduction in user support questions about navigation after implementing the new flow.",
      challenges: [
        "Balancing the gritty gym aesthetic with iOS/Android platform conventions",
        "Designing a dark-mode-first interface that still works well in bright gym lighting",
      ],
      screenshots: [
        {
          label: "Dashboard",
          description:
            "Main workout dashboard with quick-start and progress rings",
        },
        {
          label: "Workout Flow",
          description: "Exercise logging with rest timer and form tips",
        },
        {
          label: "Social Feed",
          description: "Community workouts, challenges, and friend activity",
        },
      ],
    },
  },
  {
    slug: "portfolio-v1",
    title: "Portfolio v1",
    description:
      "My previous single-page portfolio — the one this new site replaced.",
    fileName: "./portfolio-v1/",
    status: "shipped",
    tags: ["Design"],
    gradient: "from-b-ink to-b-accent",
    links: { live: "#", github: "#" },
    flagship: false,
    type: "web",
    role: "Designer & Developer · Solo",
    timeline: "Q2 2025",
  },
  {
    slug: "nakore-construction",
    title: "Nakore Construction",
    description:
      "Brand identity and website for a construction company — in progress.",
    fileName: "./nakore-construction/",
    status: "in-progress",
    tags: ["Branding"],
    gradient: "from-gray-300 to-gray-400",
    links: {},
    flagship: false,
    type: "design",
    role: "Brand Designer · In progress",
    timeline: "Q2 2026",
  },
  {
    slug: "ft-project",
    title: "FT",
    description: "Details coming soon.",
    fileName: "./ft-project/",
    status: "in-progress",
    tags: [],
    gradient: "from-gray-300 to-gray-400",
    links: {},
    flagship: false,
    type: "other",
  },
];

export const shippedProjects = projects.filter((p) => p.status === "shipped");
export const ongoingProjects = projects.filter(
  (p) => p.status === "in-progress",
);
export const flagshipProjects = projects.filter((p) => p.flagship);
