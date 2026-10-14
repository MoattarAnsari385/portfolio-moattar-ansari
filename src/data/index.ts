import {
  Code2,
  Brain,
  Database,
  Cloud,
  Wrench,
  Layout,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  Calendar,
  Briefcase,
  Sparkles,
  Bot,
  Cpu,
  Globe,
  Server,
  Terminal,
  Layers,
} from "lucide-react";

// ─── Navigation ───────────────────────────────────────────────
export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
] as const;

// ─── Hero ─────────────────────────────────────────────────────
export const heroData = {
  greeting: "Hi, I'm",
  name: "Moattar Ansari",
  roles: ["Agentic AI Engineer", "Full-Stack Developer"],
  description:
    "I'm a Full-Stack Developer growing into an Agentic AI Engineer — passionate about building intelligent digital products, autonomous AI systems, and modern SaaS platforms.",
  subDescription:
    "I specialize in AI Engineering, Full-Stack Development, intelligent automation, and scalable web applications that solve real-world problems.",
  cta: {
    primary: { text: "View Projects", href: "#projects" },
    secondary: { text: "Contact Me", href: "#contact" },
  },
  socials: [
    { name: "GitHub", href: "https://github.com/", icon: "github" },
    { name: "LinkedIn", href: "https://linkedin.com/in/", icon: "linkedin" },
    { name: "Email", href: "mailto:moattaransari@gmail.com", icon: "mail" },
  ],
};

// ─── About ────────────────────────────────────────────────────
export const aboutData = {
  paragraphs: [
    "Hi, I'm Moattar Ansari, a Full-Stack Developer growing into an Agentic AI Engineer, passionate about building intelligent, real-world digital products.",
    "From crafting modern, responsive applications with Next.js and the MERN stack to building autonomous AI agents using the OpenAI Agent SDK, I enjoy turning ideas into systems that think, automate, and solve real-world problems.",
    "My expertise spans AI Engineering, Full-Stack Development, LLM applications, Retrieval-Augmented Generation (RAG), Agentic AI, and scalable SaaS architecture.",
    "I believe in learning through building — and continuously improving by creating practical software that delivers real value.",
  ],
  stats: [
    { label: "Years Experience", value: "3+", icon: "calendar" },
    { label: "Projects Completed", value: "10+", icon: "briefcase" },
    { label: "Dedication", value: "100%", icon: "sparkles" },
  ],
};

// ─── Skills ───────────────────────────────────────────────────
export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "AI Engineering",
    icon: "brain",
    color: "#a78bfa",
    skills: [
      { name: "OpenAI API" },
      { name: "OpenAI Agent SDK" },
      { name: "Anthropic Claude" },
      { name: "LangChain" },
      { name: "LLMs" },
      { name: "RAG" },
      { name: "Prompt Engineering" },
      { name: "Agentic AI" },
      { name: "Agentic Automation" },
      { name: "Vector Databases" },
    ],
  },
  {
    name: "Frontend",
    icon: "layout",
    color: "#818cf8",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    name: "Backend",
    icon: "server",
    color: "#06b6d4",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "FastAPI" },
      { name: "Python" },
      { name: "REST APIs" },
    ],
  },
  {
    name: "Database",
    icon: "database",
    color: "#34d399",
    skills: [
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "Vector Databases" },
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: "cloud",
    color: "#f472b6",
    skills: [
      { name: "Vercel" },
      { name: "Git" },
      { name: "GitHub" },
    ],
  },
  {
    name: "Architecture",
    icon: "layers",
    color: "#fbbf24",
    skills: [
      { name: "Software Architecture" },
      { name: "System Design" },
      { name: "Scalable Systems" },
    ],
  },
];

// ─── Projects ─────────────────────────────────────────────────
export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  live: string;
  gradient: string;
  icon: string;
}

export const projects: Project[] = [
  {
    title: "AI Customer Support Agent",
    description:
      "An autonomous AI support system that answers customer queries with context-aware responses using advanced RAG pipelines.",
    longDescription:
      "Built with OpenAI Agent SDK, LangChain, RAG, PostgreSQL, and Next.js. This intelligent support agent retrieves relevant knowledge from vector databases, maintains conversation context, and delivers accurate, helpful responses — reducing support tickets by automating tier-1 queries.",
    tech: ["OpenAI Agent SDK", "LangChain", "RAG", "PostgreSQL", "Next.js"],
    github: "#",
    live: "#",
    gradient: "from-accent-blue via-accent-purple to-accent-cyan",
    icon: "bot",
  },
  {
    title: "SmileFlow AI",
    description:
      "An AI-powered SaaS platform for premium dental clinics with intelligent automation and patient engagement.",
    longDescription:
      "A comprehensive SaaS platform featuring AI-driven appointment booking, WhatsApp automation, patient engagement workflows, analytics dashboard, and intelligent communication tools — designed specifically for premium dental clinics seeking to modernize their operations.",
    tech: ["Next.js", "TypeScript", "OpenAI", "WhatsApp API", "PostgreSQL", "Tailwind CSS"],
    github: "#",
    live: "#",
    gradient: "from-accent-cyan via-accent-blue to-accent-purple",
    icon: "sparkles",
  },
  {
    title: "Multi-Agent Research Assistant",
    description:
      "A multi-agent AI system that researches, summarizes, reasons, and generates structured reports autonomously.",
    longDescription:
      "A sophisticated multi-agent application where specialized AI agents collaborate — a researcher, summarizer, analyst, and writer — to produce comprehensive structured reports. Powered by LLMs, vector databases, and autonomous orchestration for end-to-end research automation.",
    tech: ["Python", "LangChain", "OpenAI", "Vector DB", "FastAPI", "Agent SDK"],
    github: "#",
    live: "#",
    gradient: "from-accent-purple via-accent-pink to-accent-blue",
    icon: "cpu",
  },
];

// ─── Experience ───────────────────────────────────────────────
export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
}

export const experiences: Experience[] = [
  {
    role: "AI Engineer",
    company: "Your Company",
    period: "2024 — Present",
    description:
      "Building autonomous AI agents and intelligent automation systems. Developing RAG pipelines, multi-agent architectures, and LLM-powered applications for enterprise clients.",
    tech: ["OpenAI Agent SDK", "LangChain", "Python", "FastAPI", "PostgreSQL"],
  },
  {
    role: "Full-Stack Developer",
    company: "Your Company",
    period: "2023 — 2024",
    description:
      "Designed and developed production-grade web applications using the MERN stack and Next.js. Built scalable APIs, real-time features, and modern UI interfaces.",
    tech: ["Next.js", "React", "Node.js", "MongoDB", "TypeScript"],
  },
  {
    role: "Frontend Developer",
    company: "Your Company",
    period: "2022 — 2023",
    description:
      "Created responsive, accessible, and performant user interfaces. Focused on component architecture, state management, and pixel-perfect designs.",
    tech: ["React", "JavaScript", "Tailwind CSS", "Git"],
  },
];

// ─── Contact ──────────────────────────────────────────────────
export const contactInfo = [
  {
    label: "Email",
    value: "moattaransari@gmail.com",
    href: "mailto:moattaransari@gmail.com",
    icon: "mail",
  },
  {
    label: "GitHub",
    value: "github.com/moattaransari",
    href: "https://github.com/",
    icon: "github",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/moattaransari",
    href: "https://linkedin.com/in/",
    icon: "linkedin",
  },
  {
    label: "Location",
    value: "Pakistan",
    href: "#",
    icon: "map-pin",
  },
];
