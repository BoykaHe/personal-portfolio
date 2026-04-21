import type { Project } from "@/data/types";

export const projectsZh: Project[] = [
  {
    slug: "portfolio-starter",
    title: "个人网站骨架",
    summary: "一个为作品集、经历与后续 GitHub 集成预留结构的多语言个人网站起点。",
    status: "building",
    timeframe: "2026",
    featured: true,
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "预留多语言 App Router 结构",
      "带 Tab 深链的项目详情页",
      "基于 mock 数据的渐进式开发方式"
    ],
    responsibilities: [
      "规划信息架构",
      "设计数据模型和路由结构",
      "先搭建最小骨架再做视觉细化"
    ],
    problemSolved:
      "让网站比一次性静态页更可维护，也比模板站更容易逐步演化成真正属于自己的作品集。",
    cover: {
      src: "/projects/portfolio-starter-cover.png",
      alt: "个人网站骨架项目封面占位图"
    },
    screenshots: [
      {
        src: "/projects/portfolio-starter-screen-1.png",
        alt: "首页占位图"
      }
    ],
    links: [
      {
        label: "在线地址",
        href: "https://example.com/portfolio-starter"
      },
      {
        label: "GitHub 仓库",
        href: "https://github.com/your-handle/portfolio-starter"
      },
      {
        label: "Clone 地址",
        href: "git@github.com:your-handle/portfolio-starter.git"
      }
    ],
    readmeSource: {
      kind: "inline",
      content: [
        "# Portfolio Starter",
        "",
        "这是一个用于占位的 README 文本，后续会接入真实 markdown 渲染。",
        "",
        "## 目标",
        "",
        "- 以求职表达为主",
        "- 数据与 UI 分离",
        "- 预留双语扩展能力"
      ].join("\n")
    }
  },
  {
    slug: "github-activity-mock",
    title: "GitHub 活跃度 Mock",
    summary: "一个先用 mock 驱动、后续可平滑接入真实数据的 GitHub 活跃度模块。",
    status: "live",
    timeframe: "2026",
    featured: true,
    stack: ["TypeScript", "UI 模型设计", "Mock 数据"],
    highlights: [
      "统一的活跃度快照结构",
      "mock 数据贴近未来真实结构",
      "为后续服务端接入预留边界"
    ],
    responsibilities: [
      "设计活跃度数据结构",
      "准备热力图占位数据",
      "抽离未来真实 API 的接缝"
    ],
    problemSolved:
      "避免 UI 被临时 mock 绑死，后续接真实 GitHub 数据时不需要重写整个模块。",
    cover: {
      src: "/projects/github-activity-cover.png",
      alt: "GitHub 活跃度模块封面占位图"
    },
    screenshots: [
      {
        src: "/projects/github-activity-screen-1.png",
        alt: "GitHub 活跃度模块截图占位"
      }
    ],
    links: [
      {
        label: "在线预览",
        href: "https://example.com/github-activity-mock"
      },
      {
        label: "GitHub 仓库",
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
    title: "简历入口模块",
    summary: "一个把站点叙事自然过渡到简历下载和联系方式的页面区块概念。",
    status: "archived",
    timeframe: "2025",
    featured: false,
    stack: ["内容结构", "UI 文案", "转化路径"],
    highlights: ["快速联系", "简历摘要", "可复用区块结构"],
    responsibilities: ["梳理 CTA 顺序", "压缩简历摘要文案", "预留 public 资源目录"],
    problemSolved:
      "让简历模块不再只是一个孤立下载按钮，而是融入整站叙事的自然收束点。",
    cover: {
      src: "/projects/resume-entrypoint-cover.png",
      alt: "简历入口模块封面占位图"
    },
    screenshots: [
      {
        src: "/projects/resume-entrypoint-screen-1.png",
        alt: "简历模块截图占位"
      }
    ],
    links: [
      {
        label: "原型说明",
        href: "https://example.com/resume-entrypoint"
      }
    ],
    readmeSource: {
      kind: "remote-url",
      url: "https://example.com/readme/resume-entrypoint"
    }
  }
];
