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
    name: "Boyka He",
    role: "Automotive Engineering / Autonomous Systems Project Engineer",
    tagline:
      "Vehicle engineering graduate focused on autonomous driving systems, path planning, tracking control, and project-oriented automotive engineering.",
    focus: [
      "Autonomous vehicle systems",
      "Path planning and tracking control",
      "Chassis, suspension, and steering design",
      "Formula Student Artificial Intelligence"
    ],
    location: "Dongguan, China. Open to opportunities in Dongguan, Guangzhou, Shanghai, Beijing, Ningbo, and remote-friendly teams.",
    availability:
      "Open to graduate and early-career roles in autonomous systems, chassis/suspension, powertrain, automotive project management, and component design.",
    intro:
      "I am Jiawei (Boyka) He, an automotive engineering graduate with experience across Formula Student AI, connected and autonomous vehicle design, and self-driving system architecture. My work connects vehicle dynamics, simulation, control, sensor selection, and engineering project delivery."
  },
  socials: [
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/BoykaHe",
      kind: "external"
    },
    {
      id: "email",
      label: "Email",
      href: "mailto:boyka.jiawei.he@gmail.com",
      kind: "email",
      copyValue: "boyka.jiawei.he@gmail.com"
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jiawei-he-457542225/",
      kind: "external"
    }
  ],
  experiences: [
    {
      id: "exp-1",
      period: "Sep 2023 - Sep 2024",
      role: "MSc Vehicle Engineering",
      organisation: "University of Leeds",
      location: "Leeds, United Kingdom",
      summary:
        "Studied connected and autonomous vehicle systems, electric and hybrid powertrain engineering, chassis engineering, engineering computation, and human factors.",
      technologies: ["CAV systems", "Powertrain", "Chassis engineering", "Engineering computation"]
    },
    {
      id: "exp-2",
      period: "Oct 2022 - Apr 2024",
      role: "Path Planning and Tracking Engineer / ADS-DV Operator",
      organisation: "Brunel Autonomous Racing and Leeds Gryphon Racing AI",
      location: "London and Leeds, United Kingdom",
      summary:
        "Worked on Formula Student Artificial Intelligence projects covering path planning, trajectory tracking, cone data processing, and autonomous driving system operation.",
      technologies: ["FS-AI", "Path planning", "Tracking control", "Simulink", "CarSim"]
    },
    {
      id: "exp-3",
      period: "Jul 2020 - Sep 2021",
      role: "Manufacturing, Equipment Operation, and Quality Control",
      organisation: "Dongguan Haoxin Electronics Co., Ltd.",
      location: "Dongguan, China",
      summary:
        "Gained hands-on production experience across SMT operation, AI machine operation, equipment maintenance, functional testing, PCBA inspection, and quality control workflows.",
      technologies: ["SMT", "AI equipment", "QC", "PCBA inspection", "Process monitoring"]
    }
  ],
  skills: [
    {
      id: "autonomous-systems",
      title: "Autonomous Systems",
      order: 1,
      items: ["Path planning", "Trajectory tracking", "Sensor selection", "Sensor fusion", "ADS operation"]
    },
    {
      id: "vehicle-engineering",
      title: "Vehicle Engineering",
      order: 2,
      items: ["Vehicle dynamics", "Chassis design", "Suspension design", "Steering design", "FMEA"]
    },
    {
      id: "engineering-tools",
      title: "Engineering Tools",
      order: 3,
      items: [
        "MATLAB",
        "Python",
        "C++",
        "Simulink",
        "CarSim",
        "IPG CarMaker",
        "Ansys",
        "SolidWorks"
      ]
    }
  ],
  now: [
    {
      id: "now-1",
      title: "Building an automotive systems portfolio",
      description:
        "Replacing the first portfolio skeleton content with real autonomous vehicle, CAV, and Formula Student AI project material."
    },
    {
      id: "now-2",
      title: "Organising project evidence",
      description:
        "Preparing clearer write-ups for path planning, tracking control, chassis/suspension design, sensor selection, and system architecture work."
    },
    {
      id: "now-3",
      title: "Open to engineering opportunities",
      description:
        "Looking for graduate or early-career opportunities in automotive engineering, autonomous systems, vehicle systems, and project-oriented engineering teams."
    }
  ],
  resume: {
    summary:
      "MSc Vehicle Engineering graduate from the University of Leeds with project experience in Formula Student AI, autonomous shuttle design, self-driving system architecture, vehicle dynamics simulation, path planning, and tracking control.",
    downloadUrl: "/resume/resume-placeholder.txt",
    updatedAt: "2026-04",
    contactLabel:
      "Resume PDF is still a placeholder in this site. For the latest version, contact boyka.jiawei.he@gmail.com."
  },
  githubActivity: {
    username: "BoykaHe",
    rangeLabel: "Mock activity - replace with real GitHub data later",
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
        name: "Formula Student AI project repository - TODO",
        description:
          "Placeholder card for a future repository or technical write-up covering path planning and tracking control.",
        url: "https://github.com/BoykaHe"
      },
      {
        name: "Autonomous vehicle systems portfolio - TODO",
        description:
          "Placeholder card for future project evidence, simulation files, reports, or README-based documentation.",
        url: "https://github.com/BoykaHe"
      }
    ]
  }
};
