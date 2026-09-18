import { Project, SkillCategory, TimelineMilestone, SecondaryProject } from '../types';

export const FEATURED_EXPERIENCE = {
  company: "Aagnia Technology",
  role: "Full Stack Developer",
  period: "May 2025 – Present",
  project: {
    id: "everest-tutoring",
    number: "01",
    category: "E-Learning Platform",
    title: "Everest Tutoring",
    description: "A multi-domain e-learning platform supporting administration, tutors and students with exam, class, study material and learning workflows. Engineered for real-time exam tracking and unified dashboard visibility.",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Material UI",
      "PrimeReact",
      "Python",
      "FastAPI",
      "PostgreSQL"
    ],
    metrics: [
      { label: "Total Students", value: "512", detail: "↑ 12% Growth" },
      { label: "Active Tutors", value: "48", detail: "100% Online" },
      { label: "Exams Taken", value: "1,240", detail: "Verified" },
      { label: "Pass Rate", value: "96%", detail: "+3.4% pts" }
    ],
    highlights: [
      "Architected multi-tenant RBAC portals for Superadmins, Admins, Tutors, and Students",
      "Designed low-latency WebSocket communication for real-time exam tracking and instant grading",
      "Integrated FastAPI backend with asynchronous PostgreSQL connection pooling handling 500+ concurrent students",
      "Created dynamic data-dense analytics dashboards with customized Material UI and PrimeReact components"
    ]
  }
};

export const OTHER_PROJECTS: Project[] = [
  {
    id: "moneypeechu",
    number: "02",
    category: "Next.js Website",
    title: "Moneypeechu",
    description: "A dynamic news and blog website built with Next.js with a focus on content management, fast static delivery, search performance, and automated SEO pipelines.",
    tags: ["Next.js", "React", "TypeScript", "SEO"],
    highlights: [
      "Built incremental static regeneration (ISR) for instant page updates without rebuilding the entire blog",
      "Implemented comprehensive structured JSON-LD schema for Google News indexing and rich snippet previews",
      "Engineered automated editorial review pipeline with integrated Markdown publishing tools"
    ]
  },
  {
    id: "gemini-journal",
    number: "03",
    category: "Generative AI",
    title: "Personal Gemini Journal",
    description: "An authenticated AI journaling application where users can write reflections and experience multi-turn, empathetic cognitive conversations with Gemini API.",
    tags: ["Firebase", "Gemini API", "Google Cloud", "React"],
    highlights: [
      "Integrated Gemini 1.5 Pro with custom empathetic system prompts to guide cognitive behavioral reflections",
      "Stored encrypted personal diary entries in Firebase Firestore with user-specific security rules",
      "Implemented sentiment tracking timeline visualization across journaling sessions"
    ]
  },
  {
    id: "badminton-scorer",
    number: "04",
    category: "Web Application",
    title: "Badminton Scorer",
    description: "A simple and interactive badminton scoring application featuring real-time score updates, match point predictions, audio announcements, and set history tracking.",
    tags: ["React", "JavaScript", "UI/UX"],
    highlights: [
      "Designed keyboard and touch-optimized large scoreboard controls for tournament operators",
      "Built audio synthesis announcing serve side, score totals, and match points automatically",
      "Persisted detailed point-by-point rally logs with download and export functionality"
    ]
  }
];

export const SECONDARY_PROJECTS: SecondaryProject[] = [
  {
    title: "Kalyanam Conform",
    domain: "Web Application",
    tech: ["React", "Node.js", "Tailwind CSS"],
    summary: "A marriage and event RSVP management system with digital invitation generation, guest table mapping, and real-time attendance analytics."
  },
  {
    title: "OCR Text Recognition",
    domain: "Computer Vision",
    tech: ["Python", "OpenCV", "Tesseract", "FastAPI"],
    summary: "Automated optical character recognition system extracting structured invoice and tabular data from noisy scanned documents."
  },
  {
    title: "Handwritten Digit Rec.",
    domain: "Machine Learning",
    tech: ["TensorFlow", "Python", "Flask", "Canvas API"],
    summary: "Convolutional Neural Network model recognizing interactive handwritten digits drawn directly on an HTML5 canvas in real time."
  },
  {
    title: "Traffic Time Analyzer",
    domain: "Data Analysis",
    tech: ["Python", "Pandas", "Matplotlib", "Folium"],
    summary: "Urban transit velocity analyzer processing geospatial GPS logs to forecast peak congestion corridors and recommend optimal delivery routes."
  },
  {
    title: "Precision Agriculture",
    domain: "AI / IoT Hardware",
    tech: ["ESP32", "MQTT", "Python", "React Dashboard"],
    summary: "Soil moisture and meteorological sensor mesh transmitting real-time telemetry to automated drip irrigation relays."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "frontend",
    color: "cyan",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Material UI",
      "PrimeReact",
      "Vite"
    ]
  },
  {
    title: "Backend",
    icon: "backend",
    color: "emerald",
    technologies: [
      "Node.js",
      "Python",
      "FastAPI",
      "REST APIs",
      "Microservices",
      "Async Architecture",
      "Auth"
    ]
  },
  {
    title: "Database",
    icon: "database",
    color: "blue",
    technologies: [
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "Cloud Firestore",
      "Redis Caching",
      "ORMs"
    ]
  },
  {
    title: "AI / Cloud",
    icon: "ai",
    color: "purple",
    technologies: [
      "Generative AI",
      "Gemini API",
      "Google Cloud Platform",
      "AI Agents",
      "RAG Pipelines"
    ]
  },
  {
    title: "Tools",
    icon: "tools",
    color: "amber",
    technologies: [
      "Git",
      "GitHub",
      "GitLab",
      "Postman",
      "Swagger",
      "VS Code",
      "CI/CD",
      "Docker"
    ]
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: "2023",
    title: "Early Development",
    description: "Foundational computer science, algorithms, frontend fundamentals, and first client solutions."
  },
  {
    year: "2024",
    title: "React & Full-Stack",
    description: "End-to-end full stack web architecture, REST APIs, database modeling, and performant state systems."
  },
  {
    year: "2025",
    title: "Aagnia Technology",
    description: "Full Stack Developer handling massive scale e-learning platforms, high concurrency, and live student feeds.",
    highlight: true
  },
  {
    year: "2026+",
    title: "Full Stack + AI",
    description: "Google Cloud Gen AI Academy cohort, autonomous agentic workflows, and high-performance intelligent interfaces.",
    highlight: true
  }
];
