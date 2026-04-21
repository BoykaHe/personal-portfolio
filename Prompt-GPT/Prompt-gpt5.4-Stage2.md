我们现在确定继续在 Windows 原生环境中搭建这个项目，不切到 WSL。

请你不要先泛化讨论，而是直接进入“Phase 2A：本地开发环境确认 + 项目初始化”。

目标：
1. 只安装和确认这个项目当前真正需要的最小依赖环境
2. 在 Windows 端初始化一个可运行的 Next.js 项目
3. 为后续 Phase 2 骨架开发做好准备

已冻结决策如下：
- 开发环境：Windows 原生
- Node：22 LTS
- 包管理器：npm（先用默认方案，减少变量）
- 技术栈：Next.js App Router + TypeScript + Tailwind CSS
- 首版先不用 HTML + CSS + JS 原生方案
- 首版不接 CMS、不接后台、不接 GitHub 真实 API
- 首版先不强制安装大量 UI 库
- shadcn/ui 暂时只保留后续接入可能，不要现在一次性装很多组件
- 多语言先保留路由骨架和字典结构，不必现在补全所有中文内容
- GitHub Activity 先 mock
- README 先预留渲染能力，后续再接真实 markdown

请按下面顺序执行并输出：

第一部分：检查 Windows 本地环境
- 检查 Node / npm / Git 是否已就绪
- 如果未就绪，给出最短安装方案
- 如果已就绪，直接进入初始化

第二部分：初始化项目
请在当前工作目录下创建项目，并采用：
- Next.js
- TypeScript
- Tailwind CSS
- App Router
- ESLint
- src 目录结构
- import alias

第三部分：初始化后的目录规划
请在项目创建完成后，直接建立适合本项目的基础目录骨架，至少包括：
- src/app/[locale]
- src/app/[locale]/projects
- src/app/[locale]/projects/[slug]
- src/components
- src/components/sections
- src/components/projects
- src/components/ui
- src/data
- src/data/site
- src/data/projects
- src/content/projects
- public/resume
- public/projects

第四部分：先创建占位文件，不要做复杂视觉
请只做最小骨架：
- locale layout / page 占位
- home page 占位
- projects list page 占位
- project detail page 占位
- 基础类型文件
- mock 数据文件
- 深色主题基础样式占位

第五部分：输出结果
请最后给我：
1. 你实际执行了哪些命令
2. 创建了哪些关键文件
3. 当前项目是否已经能跑起来
4. 下一步最合理的是做什么

重要要求：
- 不要跳到复杂视觉实现
- 不要一次性安装很多暂时用不到的库
- 优先把“最小可运行骨架”搭起来
- 如果遇到网络、权限、沙盒问题，请明确指出失败点，并给出我可以手动执行的 Windows 命令