export const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

export const ABOUT = {
  intro:
    "Hi! I’m Udula, a full‑stack developer who ships maintainable UIs and robust APIs. I care about performance, accessibility, and developer experience.",
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Delivered", value: "20+" },
    { label: "Avg Lighthouse Perf", value: "95+" }
  ]
};

export const SKILLS = [
  { name: "React", level: "Advanced" },
  { name: "TypeScript", level: "Advanced" },
  { name: "Node.js", level: "Advanced" },
  { name: "Express", level: "Advanced" },
  { name: "Laravel", level: "Intermediate" },
  { name: "PostgreSQL", level: "Advanced" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "Vite", level: "Advanced" },
  { name: "Jest", level: "Intermediate" },
  { name: "Docker", level: "Intermediate" }
];

export const EXPERIENCE = [
  {
    company: "Acme Corp",
    role: "Full‑Stack Developer",
    period: "2023 — Present",
    summary:
      "Built a multi‑tenant SaaS with React and Node. Led performance work (TTI ↓ 40%), introduced CI/CD, and improved test coverage to 80%.",
    stack: ["React", "Node", "PostgreSQL", "Redis", "Docker"]
  },
  {
    company: "Pixel Works",
    role: "Frontend Engineer",
    period: "2021 — 2023",
    summary:
      "Delivered design‑system components and SSR pages. Reduced bundle size by 30% via code‑splitting and strict lint rules.",
    stack: ["React", "Vite", "Jest", "Storybook"]
  }
];

export const PROJECTS = [
  {
    slug: "taskflow",
    title: "TaskFlow",
    description: "Kanban-style task manager with real‑time updates and offline sync.",
    stack: ["React", "Zustand", "Express", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1555421689-43cad7100751?q=80&w=1200&auto=format&fit=crop",
    live: "https://example.com/taskflow",
    repo: "https://github.com/you/taskflow"
  },
  {
    slug: "shoplite",
    title: "ShopLite",
    description: "Headless e‑commerce starter featuring cart, checkout, and webhooks.",
    stack: ["React", "Node", "Stripe"],
    image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?q=80&w=1200&auto=format&fit=crop",
    live: "https://example.com/shoplite",
    repo: "https://github.com/you/shoplite"
  },
  {
    slug: "blogpress",
    title: "BlogPress",
    description: "Markdown blog with full‑text search and image optimization.",
    stack: ["React", "Vite", "Algolia"],
    image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop",
    live: "https://example.com/blogpress",
    repo: "https://github.com/you/blogpress"
  }
];

export const LINKS = [
  { label: "GitHub", href: "https://github.com/you", icon: "" },
  { label: "LinkedIn", href: "https://linkedin.com/in/you", icon: "" },
  { label: "Email", href: "mailto:hello@you.dev", icon: "✉" }
];
