import type { Project } from "@/data/types";

export const projectsEn: Project[] = [
  {
    slug: "portfolio-starter",
    title: "Portfolio Starter",
    summary:
      "A clean, locale-aware portfolio foundation built to organise projects, experience, and future GitHub integrations.",
    status: "building",
    timeframe: "2026",
    featured: true,
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Locale-aware App Router structure",
      "Project detail page with tab deep links",
      "Mock-first data layer for iterative delivery"
    ],
    responsibilities: [
      "Planned information architecture",
      "Defined data models and route structure",
      "Built the minimal skeleton before visual polish"
    ],
    problemSolved:
      "Creates a professional entry point that is easier to maintain than a one-off static page and easier to evolve than a template site.",
    cover: {
      src: "/projects/portfolio-starter-cover.png",
      alt: "Placeholder cover for the portfolio starter project"
    },
    screenshots: [
      {
        src: "/projects/portfolio-starter-screen-1.png",
        alt: "Homepage placeholder screenshot"
      }
    ],
    links: [
      {
        label: "Live website",
        href: "https://example.com/portfolio-starter"
      },
      {
        label: "GitHub repository",
        href: "https://github.com/your-handle/portfolio-starter"
      },
      {
        label: "Clone URL",
        href: "git@github.com:your-handle/portfolio-starter.git"
      }
    ],
    readmeSource: {
      kind: "inline",
      content: [
        "# Portfolio Starter",
        "",
        "This placeholder README demonstrates where markdown content will be connected later.",
        "",
        "## Goals",
        "",
        "- Keep the site job-search focused",
        "- Separate data from UI",
        "- Prepare for future multilingual content"
      ].join("\n")
    }
  },
  {
    slug: "github-activity-mock",
    title: "GitHub Activity Mock",
    summary:
      "A mock-friendly GitHub activity section designed to swap data sources without rewriting the UI.",
    status: "live",
    timeframe: "2026",
    featured: true,
    stack: ["TypeScript", "UI modelling", "Mock data"],
    highlights: [
      "Standardised contribution snapshot shape",
      "Mock data that mirrors future real data",
      "Graceful fallback path for later API integration"
    ],
    responsibilities: [
      "Defined activity snapshot structure",
      "Mapped mock heatmap data",
      "Prepared server-side integration seam"
    ],
    problemSolved:
      "Avoids locking the UI to a temporary mock shape, which keeps the future real API integration straightforward.",
    cover: {
      src: "/projects/github-activity-cover.png",
      alt: "Placeholder cover for the GitHub activity mock project"
    },
    screenshots: [
      {
        src: "/projects/github-activity-screen-1.png",
        alt: "GitHub activity placeholder screenshot"
      }
    ],
    links: [
      {
        label: "Live preview",
        href: "https://example.com/github-activity-mock"
      },
      {
        label: "GitHub repository",
        href: "https://github.com/your-handle/github-activity-mock"
      }
    ],
    readmeSource: {
      kind: "local-file",
      path: "@/content/projects/github-activity-mock.md"
    }
  },
  {
    slug: "resume-entrypoint",
    title: "Resume Entrypoint",
    summary:
      "A compact section concept for handing off from website narrative to resume download and contact.",
    status: "archived",
    timeframe: "2025",
    featured: false,
    stack: ["Content strategy", "UI copy", "CTA flow"],
    highlights: [
      "Fast contact handoff",
      "Resume summary block",
      "Reuse-ready layout pattern"
    ],
    responsibilities: [
      "Explored CTA ordering",
      "Drafted concise resume summary",
      "Prepared public asset structure"
    ],
    problemSolved:
      "Makes the resume section feel connected to the rest of the site instead of acting like an isolated download button.",
    cover: {
      src: "/projects/resume-entrypoint-cover.png",
      alt: "Placeholder cover for the resume entrypoint project"
    },
    screenshots: [
      {
        src: "/projects/resume-entrypoint-screen-1.png",
        alt: "Resume section placeholder screenshot"
      }
    ],
    links: [
      {
        label: "Prototype note",
        href: "https://example.com/resume-entrypoint"
      }
    ],
    readmeSource: {
      kind: "remote-url",
      url: "https://example.com/readme/resume-entrypoint"
    }
  }
];
