import type { SiteContent } from "@/data/types";

export const siteContentZh: SiteContent = {
  dictionary: {
    nav: {
      intro: "介绍",
      projects: "项目",
      experiences: "经历",
      skills: "技能",
      now: "近况",
      resume: "简历"
    },
    labels: {
      featuredProjects: "精选项目",
      allProjects: "全部项目",
      viewDetails: "查看详情",
      githubActivity: "GitHub 活跃度",
      projectOverview: "概览",
      readme: "README",
      website: "网站",
      backToProjects: "返回项目列表"
    }
  },
  profile: {
    name: "你的名字",
    role: "前端工程师 / 工程型创作者",
    tagline: "一个用于快速建立认知与可信度的个人作品集入口。",
    focus: ["个人网站搭建", "前端架构练习", "求职内容整理"],
    location: "中国，可远端或混合办公",
    availability: "正在寻找前端工程与产品工程相关机会",
    intro:
      "这个站点用于帮助招聘方和合作方快速理解我在做什么、做过什么，以及下一步如何继续了解我的作品。"
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
      label: "邮箱",
      href: "mailto:hello@example.com",
      kind: "email",
      copyValue: "hello@example.com"
    },
    {
      id: "xiao-hong-shu",
      label: "社交入口",
      href: "https://example.com/social",
      kind: "external"
    }
  ],
  experiences: [
    {
      id: "exp-1",
      period: "2024 - 2025",
      role: "前端开发方向",
      organisation: "个人作品集项目",
      location: "远端",
      summary:
        "围绕求职与作品表达，搭建结构清晰、可持续迭代的前端项目，并强调叙事与展示质量。",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      id: "exp-2",
      period: "2023 - 2024",
      role: "项目实践",
      organisation: "独立练习",
      location: "中国",
      summary:
        "通过小型项目练习 UI 结构、组件拆分、工程组织与版本管理。",
      technologies: ["React", "JavaScript", "Git"]
    }
  ],
  skills: [
    {
      id: "frontend",
      title: "前端",
      order: 1,
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
    },
    {
      id: "tooling",
      title: "工程工具",
      order: 2,
      items: ["Git", "npm", "ESLint", "Vercel"]
    },
    {
      id: "workflow",
      title: "工作方式",
      order: 3,
      items: ["组件化", "Mock 优先", "渐进式交付"]
    }
  ],
  now: [
    {
      id: "now-1",
      title: "搭建个人网站",
      description: "先完成最小可运行骨架，再逐步补充真实内容与细节。"
    },
    {
      id: "now-2",
      title: "强化前端基础",
      description: "重点练习 App Router、数据驱动 UI 与组件边界设计。"
    },
    {
      id: "now-3",
      title: "准备求职材料",
      description: "同步整理项目表达、简历和联系入口。"
    }
  ],
  resume: {
    summary: "这里会放简历摘要、下载按钮与快速联系入口。",
    downloadUrl: "/resume/resume-placeholder.txt",
    updatedAt: "2026-04",
    contactLabel: "如需最新版简历，可通过邮箱联系。"
  },
  githubActivity: {
    username: "your-handle",
    rangeLabel: "最近 12 周",
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
        description: "一个预留多语言与数据结构的个人网站骨架。",
        url: "https://github.com/your-handle/portfolio-starter"
      },
      {
        name: "ui-pattern-lab",
        description: "围绕组件结构与表达方式的小型实验仓库。",
        url: "https://github.com/your-handle/ui-pattern-lab"
      }
    ]
  }
};
