# 个人网站 / 作品集入口 Phase 1 规划方案

## 摘要
- 站点定位：这是一个“求职优先”的个人入口站，不是简历替代品，而是让招聘方或合作方在 1-2 分钟内看清你是谁、在做什么、做过什么、值不值得继续聊。
- 叙事策略：首页先建立身份与可信度，再用项目与经历证明能力，最后用 GitHub、简历与联系方式完成转化。
- 视觉方向：深色为主、克制、工程感、偏独立开发者气质；避免模板感，所以只借助通用组件做“底层可访问性”，不直接套整套 UI 风格。
- 首版语言：英文优先；中文从架构上同时预留，但不要求首版把所有中文内容一次补齐。
- 当前环境假设：工作区是空目录，所以按 greenfield 新项目规划，不依赖现有代码。

## 信息架构与路由设计
- 首页承担总入口：`/en` 作为英文默认首页，包含 `Intro`、`Contact`、`Projects Preview`、`GitHub Activity`、`Experiences`、`Skills`、`Now`、`Resume`。
- 独立项目列表页：`/en/projects`，用于完整浏览项目，解决首页只能展示精选项目的问题。
- 独立项目详情页：`/en/projects/[slug]`，每个项目一页，利于深度展示、分享链接和后续 SEO。
- 多语言路由从第一天按 locale 设计：`/[locale]`、`/[locale]/projects`、`/[locale]/projects/[slug]`；`/` 在首版直接跳到 `/en`，后续再决定是否按浏览器语言自动分流。
- 项目详情页的三个 Tab 不拆成三个子路由，而是保留在同一详情页内，用 `?tab=overview|readme|website` 深链控制。这样分享、刷新、切语言时都更稳定，也避免路由过重。
- 首页导航建议使用锚点滚动到各 section；项目详情页顶部保留返回项目列表和 GitHub/Live Demo CTA，形成清晰路径。

## 数据模型设计
- 统一核心类型：`Locale = "en" | "zh"`，所有可翻译文案按 locale 隔离，结构型字段共用。
- `SiteProfile`：姓名、头像、角色定位、简介、当前聚焦方向、所在地、开放状态。
- `SocialLink`：平台、链接、显示名、是否支持复制、是否为 `mailto:`。
- `Project`：`slug`、状态、封面、时间、技术栈、摘要、亮点、职责、问题与结果、截图占位、`links`、`readmeSource`。
- `Project.readmeSource` 建议定义为 `inline | local-file | remote-url` 三态；首版先用 `inline` mock markdown，后续接真实 README 不需要改 UI。
- `ExperienceItem`：时间范围、角色、组织/项目名、地点、说明、相关技术。
- `SkillGroup`：分类名、技能标签数组、排序权重；方便以后扩展前端/后端/工具链/AI 等分类。
- `NowItem`：当前在做什么、学习重点、开放合作状态、更新时间。
- `ResumeInfo`：摘要、PDF 下载地址、更新时间、备用联系入口。
- `GitHubActivitySnapshot`：用户名、时间范围、总贡献数、周维度矩阵、颜色级别、近期仓库摘要；UI 只消费这个标准化结构，不直接依赖 GitHub 原始返回。

## 组件拆分建议
- 布局层：`SiteShell`、`Header`、`LocaleSwitcher`、`SectionContainer`、`Footer`。
- 首页区块层：`IntroSection`、`ContactPanel`、`ProjectsPreviewSection`、`GitHubActivitySection`、`ExperienceTimeline`、`SkillsSection`、`NowSection`、`ResumeSection`。
- 项目域组件：`ProjectCard`、`ProjectGrid`、`ProjectHero`、`ProjectMeta`、`ProjectTabs`、`ProjectOverviewTab`、`ProjectReadmeTab`、`ProjectWebsiteTab`。
- 通用基础组件：`Badge`、`Button`、`Card`、`Tabs`、`CopyButton`、`ExternalLinkButton`、`EmptyState`。
- 拆分原则：section 负责编排，domain component 负责业务，primitive 负责基础交互；这样后续替换数据源或重做视觉都不会牵一发而动全身。

## 技术栈与方案选择
- `Next.js App Router`：适合从一开始就做布局、动态路由、SEO metadata 和后续服务端取数；项目详情页 `slug` 路由也天然匹配。
- `TypeScript`：把内容结构先类型化，能显著降低后续替换真实项目数据、简历数据、多语言字典时的维护成本。
- `Tailwind CSS`：适合快速搭建设计系统，但会以自定义 token 为主，不走模板站常见的默认视觉。
- `shadcn/ui`：只选 `Tabs`、`Button`、`Card` 这类无障碍基础件，原因是它更像“可修改源码的组件起点”，不会锁死你的网站气质。
- Markdown 渲染：首选 `react-markdown + remark-gfm`，先保证 README 的标题、列表、表格、代码块、链接能稳定显示；代码高亮与更精细排版放到第四阶段。
- 图示与图标：建议使用 `lucide-react` 这类轻量图标集，但视觉重点仍放在版式、层次、间距和材质感，而不是图标堆砌。

## 多语言切换方案
- 路由级国际化从首版就建好，避免未来从单语改多语时重构整套路由。
- 文案采用“字典 + 内容数据”双层结构：界面固定文案放 `dictionary`，项目/经历/Now 这类内容放 locale 对应的数据文件。
- `slug` 不翻译，保证链接稳定；翻译的是标题、摘要、正文和标签显示名。
- 首版默认英文，不做浏览器自动识别；语言切换器始终可见，并尽量保留当前页面和当前 Tab。
- 当某个中文内容暂未完成时，允许局部 fallback 到英文，但要有清晰的内容边界，不混成半套双语。

## GitHub Activity：先 Mock，后接真实数据
- 第一阶段只定义 `GitHubActivitySnapshot` 结构，并提供本地 mock 文件；热力图组件只认标准化数据，不关心来源。
- 第二阶段先把 UI 和 mock 跑通，确认尺寸、图例、空态、移动端表现。
- 第三阶段接真实数据时，新增服务层函数，例如 `getGitHubActivity(username): Promise<GitHubActivitySnapshot>`，由它负责把 GitHub 返回转换成统一结构。
- 真实数据优先走服务端拉取，并通过环境变量保存 token；这样不会把敏感信息暴露到客户端，也便于做缓存和降级。
- 若真实请求失败，组件应优雅回退到“空态或最后一次缓存态”，而不是让首页主要区域报错。

## 分阶段开发路线图
1. 初始化项目与设计基础：建立 Next.js、TypeScript、Tailwind、路由骨架、深色主题 token、数据目录。
2. 搭首页骨架：先做 section 布局和占位数据，验证整体叙事顺序是否成立。
3. 做项目系统：完成项目卡片、项目列表页、项目详情页与 tabs 深链。
4. 做内容型模块：Experiences、Skills、Now、Resume、Contact。
5. 接入 README 渲染：先本地 markdown，后续可切到真实 README 文件或远程源。
6. 接入 GitHub Activity 真实服务层：在不改 UI 的前提下把 mock 替换成真实数据。
7. 做多语言切换：先落英文和中文字典框架，再逐步补齐内容。
8. 做第四阶段优化：响应式、细节交互、SEO、部署、替换真实内容资产。

## 测试与验收标准
- 路由层：`/en`、`/en/projects`、`/en/projects/[slug]` 均可访问，项目 slug 能正确生成页面。
- 交互层：语言切换后保持当前页面；项目详情 `tab` 可深链、刷新后状态不丢。
- 内容层：没有真实 API 时，所有 section 都能靠 mock 数据独立渲染。
- README 层：标题、列表、链接、代码块、表格至少有一组示例可正确显示。
- 联系层：邮箱支持复制与 `mailto:`；GitHub、Resume、Project Website 外链都有明确入口。
- 响应式层：移动端优先保证信息顺序与 CTA 可见，桌面端再强化层次与留白。

## 关键默认假设
- 首版不做 CMS、不做后台、不做登录，所有内容先由本地数据文件管理。
- 首版不单独做 `/resume` 页面，简历先作为首页 section + PDF 下载入口；如果后面发现信息量太大，再拆独立页。
- 首页展示精选项目，完整项目放到 `/projects`，这样首页不会变成冗长的信息墙。
- GitHub Activity 首版目标是“结构先对”，不是追求第一天就完全接通真实 API。
- 视觉上坚持“深色主风格 + 高级留白 + 强调层次”，不做花哨动效堆砌。

## 参考依据
- [Next.js App Router](https://nextjs.org/docs/app)
- [Next.js Internationalization Guide](https://nextjs.org/docs/app/guides/internationalization)
- [Next.js Dynamic Routes](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes)
- [Next.js generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params)
- [Tailwind CSS Dark Mode](https://tailwindcss.com/docs/dark-mode)
- [shadcn/ui Introduction](https://ui.shadcn.com/docs)
- [shadcn/ui Tabs](https://ui.shadcn.com/docs/components/tabs)
- [react-markdown](https://github.com/remarkjs/react-markdown)
- [remark-gfm](https://github.com/remarkjs/remark-gfm)
- [GitHub GraphQL ContributionsCollection](https://docs.github.com/en/graphql/reference/objects)
