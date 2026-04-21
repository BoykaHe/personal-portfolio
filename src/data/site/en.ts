import type { SiteContent } from "@/data/types";

export const siteContentEn: SiteContent = {
  dictionary: {
    nav: {
      intro: "Intro",
      projects: "Projects",
      experiences: "Experiences",
      skills: "Skills",
      now: "Now",
      resume: "Resume"
    },
    labels: {
      featuredProjects: "Featured projects",
      allProjects: "All projects",
      viewDetails: "View details",
      githubActivity: "GitHub activity",
      projectOverview: "Overview",
      readme: "README",
      website: "Website",
      backToProjects: "Back to projects"
    }
  },
  profile: {
    name: "Your Name",
    role: "Frontend Engineer / Product-minded Builder",
    tagline: "A focused portfolio entry point for shipping projects, communicating clearly, and building maintainable user experiences.",
    focus: ["Next.js portfolio build", "Frontend architecture", "Job search positioning"],
    location: "Based in China, open to remote and hybrid roles",
    availability: "Open to frontend engineer and product engineering opportunities",
    intro:
      "This site is designed to help recruiters and collaborators understand what I am building, what I have delivered, and where to explore my work next."
  },
  socials: [
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/your-handle",
      kind: "external"
    },
    {
      id: "email",
      label: "Email",
      href: "mailto:hello@example.com",
      kind: "email",
      copyValue: "hello@example.com"
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/your-handle",
      kind: "external"
    }
  ],
  experiences: [
    {
      id: "exp-1",
      period: "2024 - 2025",
      role: "Frontend Developer",
      organisation: "Portfolio Project Track",
      location: "Remote",
      summary:
        "Built and iterated on personal and interview-focused projects with emphasis on structure, clarity, and measurable storytelling.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      id: "exp-2",
      period: "2023 - 2024",
      role: "Project-based Engineer",
      organisation: "Independent Practice",
      location: "China",
      summary:
        "Explored engineering fundamentals, UI systems, and reusable patterns through small production-style builds.",
      technologies: ["React", "JavaScript", "Git"]
    }
  ],
  skills: [
    {
      id: "frontend",
      title: "Frontend",
      order: 1,
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
    },
    {
      id: "tooling",
      title: "Tooling",
      order: 2,
      items: ["Git", "npm", "ESLint", "Vercel"]
    },
    {
      id: "workflow",
      title: "Workflow",
      order: 3,
      items: ["Component design", "Mock-first development", "Incremental delivery"]
    }
  ],
  now: [
    {
      id: "now-1",
      title: "Building this portfolio",
      description:
        "Creating a portfolio site that is clean, job-search focused, and ready for real project content."
    },
    {
      id: "now-2",
      title: "Sharpening frontend fundamentals",
      description:
        "Focusing on App Router, data-driven UI structure, and maintainable component architecture."
    },
    {
      id: "now-3",
      title: "Open to interviews",
      description:
        "Actively preparing materials for frontend and product engineering opportunities."
    }
  ],
  resume: {
    summary:
      "A concise resume section will live here, with a download link and a fast handoff to contact details.",
    downloadUrl: "/resume/resume-placeholder.txt",
    updatedAt: "2026-04",
    contactLabel: "Reach out by email for the latest version."
  },
  githubActivity: {
    username: "your-handle",
    rangeLabel: "Last 12 weeks",
    totalContributions: 86,
    palette: ["#1b1f26", "#17353a", "#1b5d5a", "#2a908b", "#59d2c5"],
    weeks: [
      {
        weekStart: "2026-01-26",
        days: [
          { date: "2026-01-26", count: 0, level: 0 },
          { date: "2026-01-27", count: 1, level: 1 },
          { date: "2026-01-28", count: 3, level: 2 },
          { date: "2026-01-29", count: 2, level: 2 },
          { date: "2026-01-30", count: 0, level: 0 },
          { date: "2026-01-31", count: 4, level: 3 },
          { date: "2026-02-01", count: 1, level: 1 }
        ]
      },
      {
        weekStart: "2026-02-02",
        days: [
          { date: "2026-02-02", count: 0, level: 0 },
          { date: "2026-02-03", count: 2, level: 2 },
          { date: "2026-02-04", count: 5, level: 3 },
          { date: "2026-02-05", count: 6, level: 4 },
          { date: "2026-02-06", count: 1, level: 1 },
          { date: "2026-02-07", count: 0, level: 0 },
          { date: "2026-02-08", count: 2, level: 2 }
        ]
      },
      {
        weekStart: "2026-02-09",
        days: [
          { date: "2026-02-09", count: 1, level: 1 },
          { date: "2026-02-10", count: 0, level: 0 },
          { date: "2026-02-11", count: 4, level: 3 },
          { date: "2026-02-12", count: 3, level: 2 },
          { date: "2026-02-13", count: 5, level: 3 },
          { date: "2026-02-14", count: 1, level: 1 },
          { date: "2026-02-15", count: 0, level: 0 }
        ]
      },
      {
        weekStart: "2026-02-16",
        days: [
          { date: "2026-02-16", count: 2, level: 2 },
          { date: "2026-02-17", count: 3, level: 2 },
          { date: "2026-02-18", count: 0, level: 0 },
          { date: "2026-02-19", count: 1, level: 1 },
          { date: "2026-02-20", count: 5, level: 3 },
          { date: "2026-02-21", count: 6, level: 4 },
          { date: "2026-02-22", count: 2, level: 2 }
        ]
      },
      {
        weekStart: "2026-02-23",
        days: [
          { date: "2026-02-23", count: 0, level: 0 },
          { date: "2026-02-24", count: 3, level: 2 },
          { date: "2026-02-25", count: 4, level: 3 },
          { date: "2026-02-26", count: 2, level: 2 },
          { date: "2026-02-27", count: 1, level: 1 },
          { date: "2026-02-28", count: 0, level: 0 },
          { date: "2026-03-01", count: 2, level: 2 }
        ]
      },
      {
        weekStart: "2026-03-02",
        days: [
          { date: "2026-03-02", count: 1, level: 1 },
          { date: "2026-03-03", count: 1, level: 1 },
          { date: "2026-03-04", count: 3, level: 2 },
          { date: "2026-03-05", count: 4, level: 3 },
          { date: "2026-03-06", count: 0, level: 0 },
          { date: "2026-03-07", count: 2, level: 2 },
          { date: "2026-03-08", count: 1, level: 1 }
        ]
      }
    ],
    repositories: [
      {
        name: "portfolio-starter",
        description: "A data-driven personal site starter with locale-aware routing.",
        url: "https://github.com/your-handle/portfolio-starter"
      },
      {
        name: "ui-pattern-lab",
        description: "Small experiments around reusable UI structure and component composition.",
        url: "https://github.com/your-handle/ui-pattern-lab"
      }
    ]
  }
};
