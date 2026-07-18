import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "family-tree-web-app",
    title: "Family Tree Web Application",
    thumbnail: "/images/kamal_portfolio.png",
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
    slug: "furqan-quran-app",
    title: "Furqan — Quran Audio & Recitation App",
    description:
      "A complete Quran listening experience with dynamic reciter switching, offline downloads, background playback, and a subscription-based ad-free model — built for both iOS and Android with Expo and React Native.",
    longDescription:
      "Furqan is a feature-rich Quran audio app that combines a polished listening experience with modern mobile capabilities. It allows users to stream or download recitations from multiple reciters, switch playback speed without pitch distortion, play audio in the background, and manage their listening journey with bookmarks and personalized stats. The app includes a full subscription and ad-based monetization system, with reciter locking and rewarded video unlock mechanics — all built with a clean, responsive UI that respects Islamic design principles.",
    fileName: "./furqan-app.tsx",
    status: "shipped",
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "NativeWind",
      "expo-audio",
      "RevenueCat",
      "Google AdMob",
      "expo-file-system",
    ],
    gradient: "from-emerald-600 to-teal-800",
    links: {
      live: "https://apps.apple.com/...",
      github: "https://github.com/abnakore/furqan",
      caseStudy: "furqan-quran-app",
    },
    flagship: true,
    type: "mobile",
    role: "Full-stack mobile developer & UI/UX designer",
    timeline: "2025 – present",
    caseStudy: {
      problem:
        "Most Quran audio apps either have outdated interfaces, limited reciter options, or require constant internet connectivity. They often lack modern features like background playback, fine-grained playback speed control, offline downloads, and flexible monetization — leading to a fragmented user experience. Users want a single app that feels modern, respects their listening habits, and gives them control over how they access and experience recitations.",
      approach:
        "The development started with a clear separation of concerns: an audio engine that can switch between streaming and offline playback seamlessly, a download manager that handles large audio files without memory issues, and a flexible UI that adapts to both light and dark themes. The app is built as a single codebase for iOS and Android using Expo and React Native, with a strong emphasis on background audio support and system integration (Now Playing, Dynamic Island, lock screen controls).",
      techStack: {
        frontend: [
          "React Native / Expo 51",
          "TypeScript",
          "NativeWind (Tailwind CSS)",
          "expo-router",
          "lucide-react-native",
        ],
        audioEngine: ["expo-audio", "expo-file-system (legacy for streaming)"],
        backend: [
          "RevenueCat (subscriptions)",
          "Google AdMob (ads)",
          "GitHub-hosted JSON (reciter data)",
          "AsyncStorage (local state)",
        ],
        stateManagement: [
          "React Context API (AudioContext, AppContext, SettingsContext, PurchaseContext, ReciterLockContext)",
        ],
      },
      designConsiderations:
        "The app was designed with the spiritual context in mind — warm, earthy greens and golds create a calming atmosphere without being distracting. Typography uses a mix of Inter for English and Amiri for Arabic to maintain authenticity. The audio player screen balances visual appeal with functional density, showing artwork, progress, and controls in a layout that feels focused and serene. Dark mode is fully supported to match user preference and reduce eye strain during night listening.",
      challenges: [
        "Maintaining audio playback in the background on both iOS and Android required careful configuration of expo-audio and handling of app state changes to keep the Now Playing controls in sync.",
        "Preventing memory leaks and stale closures in the audio context — especially in playback listeners that capture state from earlier renders — was a recurring challenge that was solved using React refs and functional updates.",
        "Handling large audio file downloads without OutOfMemory errors required switching from response.arrayBuffer() to a streaming download approach using expo-file-system's DownloadResumable with progress callbacks.",
        "Designing a flexible monetization system that supports both subscriptions (RevenueCat) and ad-based mechanics (Google AdMob) with clean separation of concerns and a smooth user experience.",
        "Managing the reciter lock system: one free reciter, all others locked, with temporary unlock via rewarded ads (60s) and permanent unlock via subscription — all without blocking the core listening flow.",
        "Building a custom popup system that handles both simple alerts and complex interaction flows (like locked reciter prompts with ad loading states) while maintaining theme consistency.",
        "Implementing an offline download management interface with per-surah progress tracking, cancellation, and batch download — all while keeping the UI responsive.",
        "Dynamic reciter list loaded from GitHub JSON and cached locally, with fallback defaults and pull-to-refresh support.",
      ],
      features: [
        "Full audio playback with play/pause, seek, skip forward/back, and progress tracking",
        "Playback speed control (0.5x – 2.0x) with pitch correction for natural voice",
        "Background audio with lock screen, Dynamic Island, and Control Center support",
        "Offline downloads with per-surah progress, cancellation, and batch download",
        "Multiple reciters (30+), loaded dynamically from a GitHub-hosted JSON file",
        "Reciter locking system: one free reciter, others unlocked via ad or subscription",
        "Rewarded video ads for temporary reciter unlock (60 seconds)",
        "Subscription plans (weekly, monthly, yearly, lifetime) via RevenueCat",
        "Listening stats: today's minutes, total minutes, and daily streaks",
        "Bookmarking surahs for quick access",
        "Auto-play next surah with configurable repeat modes (off, one, all)",
        "Full light/dark theme support with system theme detection",
        "Native performance with Expo and react-native-reanimated for smooth animations",
        "Modular, context-based state management for clean separation of concerns",
      ],
      outcome:
        "The Furqan app is fully functional with a polished UI, complete audio engine, download management, and monetization system. The app has been tested on both iOS and Android devices with smooth background playback, responsive UI, and stable download performance. The reciter unlock system works seamlessly with both ad-based and subscription-based paths. The codebase is structured for maintainability with clear separation between UI components, business logic, and service layers — making it easy to extend with new features in the future.",
      screenshots: [
        {
          label: "Home Screen",
          description:
            "Hero section with dynamic time-based background, listening stats, and continue listening cards.",
        },
        {
          label: "Player Screen",
          description:
            "Full-featured audio player with artwork, progress slider, playback controls, reciter info, and bookmarking.",
        },
        {
          label: "Reciter Selection",
          description:
            "Grid/list view of reciters with lock indicators and ad unlock popup.",
        },
        {
          label: "Downloads Manager",
          description:
            "Expandable reciter cards with per-surah download progress, cancel, and batch download controls.",
        },
        {
          label: "Premium Screen",
          description:
            "Clean subscription plan cards with pricing, feature list, and restore purchases button.",
        },
        {
          label: "Settings",
          description:
            "Organized settings with appearance, audio, notification, and about sections.",
        },
      ],
    },
  },
  {
    slug: "startpilot",
    title: "StartPilot",
    description:
      "An AI-powered platform that helps founders transform ideas into validated startups through guided workflows, market insights, and personalized execution plans.",

    longDescription:
      "StartPilot is an AI-powered startup companion designed to bridge the gap between inspiration and execution. Instead of leaving founders with a blank page, it guides them through validating ideas, refining business concepts, identifying market opportunities, and generating actionable roadmaps that turn ambitious ideas into products worth building.",

    fileName: "./startpilot.tsx",

    status: "in-progress",

    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Docker",
      "AI",
    ],

    gradient: "from-indigo-600 to-violet-700",

    links: {
      live: "",
      github: "",
      caseStudy: "startpilot",
    },

    flagship: true,

    type: "web",

    role: "Backend developer & AI workflow designer",

    timeline: "2026 – present",

    caseStudy: {
      problem:
        "Many aspiring founders have exciting ideas but struggle to answer the questions that determine whether those ideas are worth pursuing. They often lack structured validation, clear execution plans, technical guidance, and market insights. Existing tools usually solve only one part of the journey—idea generation, business planning, or project management—forcing founders to jump between multiple platforms.",

      approach:
        "Rather than creating another AI chatbot, the goal was to design a complete startup-building workflow. Every feature revolves around helping founders make better decisions at each stage of building a company. The platform combines guided onboarding, AI-assisted idea refinement, market validation, startup planning, and personalized recommendations into a single experience. Particular attention was given to designing workflows that feel conversational while still producing structured, actionable outputs instead of generic AI responses.",

      techStack: {
        frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],

        backend: ["Django", "Django REST Framework", "PostgreSQL"],

        infrastructure: ["Docker", "JWT Authentication", "REST APIs"],

        AI: [
          "LLM-powered startup analysis",
          "Prompt engineering",
          "Structured AI workflows",
        ],

        inProgress: [
          "Founder AI mentor",
          "Advanced market-gap analysis",
          "Investor-ready pitch generation",
          "Team collaboration",
        ],
      },

      designConsiderations:
        "The biggest design priority was reducing overwhelm. Building a startup already involves uncertainty, so the interface focuses on guiding founders one step at a time instead of presenting dozens of disconnected tools. The experience balances flexibility with structure, ensuring AI acts as a thoughtful guide rather than replacing human decision-making.",

      challenges: [
        "Designing AI workflows that produce structured, reliable outputs instead of generic chatbot conversations",
        "Breaking the startup-building journey into clear, guided stages without making the experience feel restrictive",
        "Designing a backend architecture capable of supporting multiple AI-powered workflows while remaining modular and scalable",
        "Creating prompts and data structures that allow different features to share context throughout a founder's journey",
        "Balancing automation with user control so founders always remain in charge of important business decisions",
      ],

      features: [
        "AI-guided startup ideation workflow",
        "Business idea validation",
        "Market opportunity analysis",
        "Personalized startup roadmap generation",
        "Technology stack recommendations",
        "Founder profile and startup workspace",
        "Progress tracking across startup stages",
        "Authentication and secure user management",
        "Modular architecture designed for future AI capabilities",
      ],

      outcome:
        "The platform's architecture, onboarding flow, authentication system, startup workspace, and core AI-guided workflows are actively under development. The project is being designed with scalability in mind so future features—such as investor tools, founder collaboration, and AI mentorship—can be integrated without major architectural changes.",

      screenshots: [
        {
          label: "Founder Onboarding",
          description:
            "Multi-step onboarding that captures founder goals, experience, skills, and startup vision.",
        },
        {
          label: "Startup Workspace",
          description:
            "Central dashboard where founders manage ideas, progress, and AI-generated insights.",
        },
        {
          label: "AI Validation Workflow",
          description:
            "Structured AI experience for refining ideas, identifying opportunities, and generating actionable recommendations.",
        },
      ],
    },
  },

  {
    slug: "portfolio-v2",
    title: "Developer Portfolio",
    description:
      "A dual-mode portfolio featuring Terminal and Bento experiences, interactive animations, and detailed engineering case studies.",
    fileName: "./portfolio-v2/",
    status: "shipped",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    gradient: "from-slate-900 to-slate-700",
    links: { live: "", github: "" },
    flagship: false,
    type: "web",
    role: "Designer & Full-stack Developer · Solo",
    timeline: "2026",
  },

  {
    slug: "nera",
    title: "NERA",
    description:
      "A fast, intuitive currency conversion platform supporting both fiat and cryptocurrencies with live exchange rates.",
    longDescription:
      "NERA simplifies currency conversion for over 100+ currencies, including crypto assets. Built with a lightweight frontend and live API integration, it delivers speed and clarity for everyday conversions.",
    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "API Integration",
      "Crypto",
      "Fiat",
      "Finance",
    ],
    fileName: "nera",
    status: "shipped",
    links: {
      live: "https://nera.vercel.app",
      github: "https://github.com/kamalbuilds/nera",
      caseStudy: "https://kamal.build/nera-case-study",
    },
    gradient: "from-blue-500 to-cyan-400",
    flagship: false,
    type: "web",
    role: "Full Stack Developer",
    timeline: "2024",
    caseStudy: {
      problem:
        "Currency conversion websites often feel slow, cluttered, or limited to a handful of currencies. The objective was to provide a fast and intuitive experience with broad global coverage.",
      approach:
        "Built a lightweight frontend that consumes live exchange-rate APIs while keeping the interface clean and conversion workflows straightforward.",
      techStack: {
        Frontend: ["React", "JavaScript", "Tailwind CSS", "API Integration"],
      },
      outcome:
        "Delivered a publicly accessible platform that simplifies everyday currency conversions.",
      challenges: [
        "Managing real-time data synchronization across multiple currency pairs",
        "Optimizing performance for rapid conversions",
      ],
      features: [
        "100+ supported currencies",
        "Live exchange rates",
        "Fast currency conversion",
        "Responsive design",
      ],
    },
  },
  {
    slug: "personal-health-record",
    title: "Personal Health Record",
    description:
      "A comprehensive health management platform that centralizes medical records, medication tracking, and health timelines.",
    longDescription:
      "This ongoing project aims to solve medical record fragmentation by creating a unified digital health repository. Features include document management, AI-powered summaries, and emergency information accessibility.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Django",
      "PostgreSQL",
      "AI",
      "Healthcare",
    ],
    fileName: "personal-health-record",
    status: "in-progress",
    links: {
      github: "https://github.com/kamalbuilds/health-record",
    },
    gradient: "from-emerald-500 to-teal-400",
    flagship: false,
    type: "web",
    role: "Full Stack Developer",
    timeline: "2024-Present",
    caseStudy: {
      problem:
        "Medical records are often scattered across hospitals, paper documents, and personal notes, making them difficult to access when needed.",
      approach:
        "Building a full-stack application with React frontend, Django backend, and PostgreSQL database. Implemented AI features for intelligent health data summarization.",
      techStack: {
        frontend: ["React", "Tailwind CSS", "TypeScript"],
        backend: ["Django", "Django REST Framework"],
        database: ["PostgreSQL"],
      },
      outcome:
        "Actively developing a platform that will give users complete control over their health data.",
      features: [
        "Medical document management",
        "Medication tracking",
        "Health timeline",
        "Emergency information",
        "Allergy records",
        "AI summary",
      ],
    },
  },
  {
    slug: "votechain",
    title: "VoteChain",
    description:
      "A blockchain-backed voting system built on NEAR Protocol for transparent, auditable, and decentralized elections.",
    longDescription:
      "VoteChain explores how blockchain technology can enhance trust in digital voting systems. By leveraging NEAR Protocol's fast and scalable infrastructure, the platform ensures transparent vote recording and decentralized verification.",
    tags: [
      "React",
      "TypeScript",
      "NEAR Protocol",
      "Blockchain",
      "Web3",
      "Tailwind CSS",
    ],
    fileName: "votechain",
    status: "shipped",
    links: {
      github: "https://github.com/kamalbuilds/votechain",
      live: "https://votechain.vercel.app",
    },
    gradient: "from-purple-600 to-indigo-500",
    flagship: false,
    type: "web3",
    role: "Blockchain Developer",
    timeline: "2024",
    caseStudy: {
      problem:
        "Traditional electronic voting systems often require trust in centralized authorities, making transparency difficult.",
      approach:
        "Explored blockchain technology as a way to improve trust, transparency, and auditability in digital voting.",
      techStack: {
        frontend: ["React", "TypeScript", "JavaScript", "Tailwind CSS"],
        blockchain: ["NEAR Protocol"],
      },
      outcome:
        "Successfully explored Web3 application development while learning decentralized system architecture.",
      challenges: [
        "Smart contract development on NEAR",
        "Managing transaction finality and user experience",
      ],
      features: [
        "Blockchain-backed voting",
        "Transparent vote recording",
        "Decentralized architecture",
      ],
    },
  },
  {
    slug: "fitness-companion",
    title: "Fitness Companion",
    description:
      "A React Native mobile app that combines exercise discovery, workout tracking, and cloud synchronization for a seamless fitness experience.",
    longDescription:
      "Fitness Companion addresses the fragmentation of workout resources by bringing everything into one mobile-first application. Built with React Native and Appwrite, it offers a polished cross-platform experience with real-time progress tracking.",
    tags: [
      "React Native",
      "Expo",
      "Appwrite",
      "Mobile Development",
      "NativeWind",
    ],
    fileName: "fitness-companion",
    status: "shipped",
    links: {
      github: "https://github.com/kamalbuilds/fitness-companion",
    },
    gradient: "from-green-500 to-lime-400",
    flagship: false,
    type: "mobile",
    role: "Mobile Developer",
    timeline: "2024",
    caseStudy: {
      problem:
        "Many people struggle to maintain consistent fitness routines because workout resources are scattered across different platforms.",
      approach:
        "Built a mobile-first experience that brings workouts, exercise discovery, and progress tracking into one application.",
      techStack: {
        frontend: ["React Native", "Expo", "NativeWind"],
        backend: ["Appwrite"],
      },
      outcome:
        "Developed a polished mobile application while strengthening experience with React Native and mobile UX.",
      features: [
        "Exercise discovery",
        "Workout tracking",
        "Responsive mobile interface",
        "Cloud synchronization",
      ],
    },
  },
  {
    slug: "smart-surveillance-system",
    title: "Smart Surveillance System",
    description:
      "An AI-powered surveillance system using computer vision for object detection and automated activity monitoring.",
    longDescription:
      "This system enhances traditional surveillance by leveraging computer vision techniques to automatically detect and analyze activities. Built with Python and computer vision libraries, it reduces manual monitoring requirements for large environments.",
    tags: ["Python", "Computer Vision", "AI", "OpenCV", "Data Science"],
    fileName: "smart-surveillance-system",
    status: "shipped",
    links: {
      github: "https://github.com/kamalbuilds/smart-surveillance",
    },
    gradient: "from-red-600 to-orange-500",
    flagship: false,
    type: "ai",
    role: "AI Engineer",
    timeline: "2024",
    caseStudy: {
      problem:
        "Conventional surveillance systems often rely heavily on manual monitoring, making them inefficient for large environments.",
      approach:
        "Explored computer vision techniques to automatically identify activity and improve monitoring efficiency.",
      techStack: {
        language: ["Python"],
        technologies: ["Computer Vision", "Data Science"],
      },
      outcome:
        "Strengthened practical understanding of AI-powered computer vision systems.",
      features: [
        "Object detection",
        "Intelligent monitoring",
        "Automated analysis",
      ],
    },
  },
  {
    slug: "internship-analytics-dashboard",
    title: "Internship Analytics Dashboard",
    description:
      "An interactive Streamlit dashboard that transforms internship data into meaningful visual analytics.",
    longDescription:
      "This dashboard empowers organizations to extract insights from internship datasets through interactive charts, filtering, and performance analytics. Built with Streamlit and Python, it simplifies data exploration and visualization.",
    tags: ["Python", "Streamlit", "Data Visualization", "Analytics", "Pandas"],
    fileName: "internship-analytics-dashboard",
    status: "shipped",
    links: {
      github: "https://github.com/kamalbuilds/internship-analytics",
    },
    gradient: "from-blue-600 to-purple-500",
    flagship: false,
    type: "web",
    role: "Data Scientist",
    timeline: "2024",
    caseStudy: {
      problem:
        "Internship datasets often contain valuable insights that are difficult to identify without proper visualization.",
      approach:
        "Developed an interactive dashboard capable of transforming raw internship data into meaningful visual analytics.",
      techStack: {
        language: ["Python"],
        framework: ["Streamlit"],
      },
      outcome:
        "Created a dashboard that simplifies internship performance analysis through visual storytelling.",
      features: [
        "Interactive charts",
        "Performance analytics",
        "CSV upload",
        "Data filtering",
      ],
    },
  },
  {
    slug: "bingo-robot",
    title: "BinGo Robot",
    description:
      "An Arduino-based line-following robot with IR sensors and motor control for autonomous navigation.",
    longDescription:
      "BinGo Robot demonstrates fundamental principles of autonomous navigation through sensor-based feedback loops. Built with Arduino, IR sensors, and embedded C, it serves as a foundation for more complex robotics projects.",
    tags: [
      "Arduino",
      "Embedded C",
      "Robotics",
      "IR Sensors",
      "Motor Control",
      "Hardware",
    ],
    fileName: "bingo-robot",
    status: "shipped",
    links: {
      github: "https://github.com/kamalbuilds/bingo-robot",
    },
    gradient: "from-gray-700 to-gray-500",
    flagship: false,
    type: "embedded",
    role: "Embedded Systems Engineer",
    timeline: "2024",
    caseStudy: {
      problem:
        "Autonomous navigation is a fundamental robotics challenge requiring reliable interaction between hardware and software.",
      approach:
        "Designed and programmed a line-following robot capable of navigating predefined paths using sensor feedback.",
      techStack: {
        hardware: ["Arduino", "IR Sensors", "L298N"],
        software: ["Embedded C"],
      },
      outcome:
        "Successfully combined embedded programming with hardware integration, laying the foundation for future autonomous robotics projects.",
      features: [
        "Line following",
        "Sensor-based navigation",
        "Motor control",
        "Embedded programming",
      ],
    },
  },
  {
    slug: "are-you-a-math-whiz",
    title: "Are You A Math Whiz?",
    description:
      "An educational math game built with Pygame that turns arithmetic practice into an interactive and rewarding experience.",
    longDescription:
      "This game makes arithmetic practice engaging for children through interactive challenges and progressive difficulty. Built with Python and Pygame, it explores gamification in education while reinforcing math skills.",
    tags: ["Python", "Pygame", "Game Development", "Education", "Gamification"],
    fileName: "are-you-a-math-whiz",
    status: "shipped",
    links: {
      github: "https://github.com/kamalbuilds/math-whiz",
    },
    gradient: "from-yellow-500 to-orange-400",
    flagship: false,
    type: "game",
    role: "Game Developer",
    timeline: "2024",
    caseStudy: {
      problem:
        "Children often find arithmetic repetitive and unengaging using traditional learning methods.",
      approach:
        "Developed an educational game that turns arithmetic practice into an interactive and rewarding experience.",
      techStack: {
        language: ["Python"],
        framework: ["Pygame"],
      },
      outcome:
        "Strengthened game development skills while exploring gamification in education.",
      features: [
        "Interactive gameplay",
        "Arithmetic challenges",
        "Progressive difficulty",
      ],
    },
  },
  {
    slug: "kamal-portfolio",
    title: "Kamal Portfolio",
    description:
      "A responsive portfolio website designed to showcase engineering projects and services with clarity and visual appeal.",
    longDescription:
      "This professional portfolio was built to help a client present their engineering projects and services effectively. With a focus on responsive design and visual storytelling, it establishes a strong online presence.",
    tags: ["React", "Tailwind CSS", "Portfolio", "Responsive Design"],
    fileName: "kamal-portfolio",
    status: "shipped",
    links: {
      live: "https://kamal.build",
      github: "https://github.com/kamalbuilds/portfolio",
    },
    gradient: "from-indigo-500 to-pink-400",
    flagship: false,
    type: "web",
    role: "Frontend Developer",
    timeline: "2024",
    caseStudy: {
      problem:
        "The client needed a modern online presence to professionally showcase engineering projects and services.",
      approach:
        "Designed and developed a responsive portfolio focused on clarity, credibility, and visual presentation.",
      techStack: {
        frontend: ["React", "Tailwind CSS"],
      },
      outcome:
        "Delivered a professional portfolio tailored to the client's personal brand and industry.",
      features: [
        "Responsive design",
        "Project showcase",
        "Service presentation",
        "Contact integration",
      ],
    },
  },
  {
    slug: "nakore-collection",
    title: "Nakore Collection",
    description:
      "A scalable e-commerce platform with product catalog, shopping cart, and order management features.",
    longDescription:
      "Nakore Collection provides small businesses with an affordable online storefront. Built with React, Django, and PostgreSQL, it balances performance, usability, and extensibility for future growth.",
    tags: [
      "React",
      "Django",
      "PostgreSQL",
      "E-commerce",
      "Shopping Cart",
      "Order Management",
    ],
    fileName: "nakore-collection",
    status: "in-progress",
    links: {
      github: "https://github.com/kamalbuilds/nakore-collection",
    },
    gradient: "from-rose-600 to-pink-500",
    flagship: false,
    type: "web",
    role: "Full Stack Developer",
    timeline: "2024-Present",
    caseStudy: {
      problem:
        "Small businesses need affordable online storefronts that provide a smooth shopping experience without unnecessary complexity.",
      approach:
        "Currently building a scalable e-commerce platform with a focus on performance, usability, and future extensibility.",
      techStack: {
        frontend: ["React"],
        backend: ["Django", "PostgreSQL"],
      },
      outcome:
        "Actively in development with core e-commerce functionality taking shape.",
      features: [
        "Product catalog",
        "Shopping cart",
        "Order management",
        "Responsive storefront",
      ],
    },
  },
];

export const shippedProjects = projects.filter((p) => p.status === "shipped");
export const ongoingProjects = projects.filter(
  (p) => p.status === "in-progress",
);
export const flagshipProjects = projects.filter((p) => p.flagship);
