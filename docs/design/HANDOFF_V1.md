# Portfolio Design Handoff V1

## 1. Project purpose
这是一个求职优先的个人入口站，不是传统简历页，也不是纯作品集站。
目标是在短时间内让招聘方或合作方快速理解：
我是谁、我在做什么、做过什么、下一步想做什么。

## 2. Current implementation status
- Next.js + TypeScript + Tailwind
- 已有多语言路由：/en /zh /en/projects /zh/projects /projects/[slug]
- 首页、项目列表、项目详情页骨架已完成
- 项目详情页已有 Overview / README / Website 三个 Tab
- 本地运行与 Git/GitHub 已完成

## 3. Current problems
- 当前内容仍有 placeholder
- 视觉层级不够强
- 深色主题方向对，但还缺少统一的设计语言
- 页面有“骨架感 / 模板感”
- 缺少更鲜明的可信度与个人气质表达

## 4. Design direction
希望整体风格：
- 深色为主
- 克制
- 工程感
- 偏独立开发者气质
- 避免模板感
- 以信息效率和项目理解速度优先

## 5. Non-goals
- 不做重动画炫技
- 不做过度玻璃拟态
- 不把页面做成 SaaS dashboard
- 不破坏现有路由和信息架构
- 不优先追求“花哨”，而是追求“可信、清晰、耐看”

## 6. Key pages
- 首页
- 项目列表页
- 项目详情页

## 7. What needs redesign first
- 首页 Hero
- Contact 区
- 项目预览卡
- 项目详情页顶部 Hero
- Tab 区与内容层级
- 基础组件语言（Button / Badge / Card / Tab）

## 8. Constraints for implementation
- 设计应能被 Codex 在当前工程结构中逐步落地
- 优先做结构清晰、修改成本低的方案
- 不要依赖整套重型 UI 方案