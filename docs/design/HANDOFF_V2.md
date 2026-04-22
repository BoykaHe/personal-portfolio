# Portfolio Design Handoff V2

## 1. Project purpose

这是一个求职优先的个人入口站，不是传统简历页，也不是纯作品集站。  
目标是在短时间内让招聘方、潜在合作方快速理解：

- 我是谁
- 我在做什么
- 我做过什么
- 下一步想做什么

它需要同时满足两类用途：

1. **招聘入口**：让招聘方快速判断背景、方向、项目能力与可信度  
2. **项目入口**：让技术型读者快速进入项目摘要、README、仓库与后续材料

---

## 2. Current implementation status

### Stack
- Next.js 15.5.15
- TypeScript
- Tailwind CSS
- App Router

### Repo
- GitHub: `https://github.com/BoykaHe/personal-portfolio`

### Current routes
- `/en`
- `/zh`
- `/en/projects`
- `/zh/projects`
- `/en/projects/[slug]`
- `/zh/projects/[slug]`

### Current feature status
- 首页骨架已完成
- 项目列表页已完成
- 项目详情页已完成
- 项目详情页含三个 Tab：`Overview / README / Website`
- 英文真实内容替换已完成 Phase 2B-A
- slug 兼容跳转已完成
- duplicate key 问题已修复
- 本地 `npm run lint` / `npm run build` 已通过
- 已推送到 GitHub `main`

---

## 3. Current problems

当前站点“能用”，但还不是“可信、成熟、可投递”的视觉状态。主要问题：

- 视觉层级不够强
- 深色主题方向对，但还缺少统一的设计语言
- 页面存在明显“骨架感 / 模板感”
- 缺少更明确的个人气质表达
- 首页 Hero、Contact、Projects Preview 的节奏还不够好
- 项目详情页顶部摘要区、Tab 区与内容区层次还不够成熟
- 基础组件语言（Button / Badge / Card / Tab）缺少统一规则
- 当前内容仍有部分 placeholder，后续会继续替换，但本阶段重点是视觉系统

---

## 4. Design direction

希望整体气质是：

- 深色为主
- 克制
- 工程感
- 偏独立开发者 / 工程型个人站气质
- 避免模板感
- 避免 SaaS dashboard 感
- 避免廉价炫技
- 优先提升“可信度、清晰度、耐看度”
- 以信息效率和项目理解速度优先，不追求花哨视觉

这不是一个“炫酷 landing page”，而是一个**可信的工程型个人入口站**。

---

## 5. Design constraints

下面三项为当前工作基线，除非有强理由，否则不要偏离：

### 5.1 Typography baseline
**Sans-first with mono accents**

- 标题与正文以 Sans 为主
- 元信息、标签、小型状态信息可用 Mono 点缀
- 不做大面积全站 Mono
- 不走强文学感 Serif 方向

### 5.2 Dark depth
**Near-black, not pure black**

- 使用近黑，而不是纯黑 `#000`
- 保留深色主基调
- 可以保留轻微冷色氛围，但不要大面积霓虹感
- 目标是冷静、专业、耐看，而不是 OLED 炫黑

### 5.3 Accent strategy
**Single low-saturation accent**

- 只允许一个低饱和 accent 色
- 只在 CTA、active、focus、关键状态中少量使用
- 不做多 accent 竞争
- 不做大面积高亮发光

---

## 6. Target impressions

设计输出应该最终让页面传达出这些关键词：

- credible
- restrained
- engineered
- thoughtful
- independent
- clear
- calm
- modern but not trendy

用中文说，就是：

- 可信
- 克制
- 有工程逻辑
- 有独立开发者气质
- 清晰
- 耐看
- 不跟风

---

## 7. Non-goals

明确不希望出现的方向：

- 不做强动画炫技
- 不做玻璃拟态主导风格
- 不做五颜六色的渐变堆叠
- 不做 SaaS dashboard 风
- 不做营销感很强的 hero 文案样式
- 不做卡通化、emoji 化表达
- 不做“极客到不可读”的全 Mono 风格
- 不推翻现有路由与信息架构
- 不为了视觉重设计而重写整站代码结构

---

## 8. Audience

主要读者分两类：

### 8.1 Recruiters / hiring managers
他们需要快速看到：
- 姓名与定位
- 求职方向
- 项目代表作
- 经验与技能
- 联系方式
- GitHub / LinkedIn

### 8.2 Technical readers / collaborators
他们需要快速进入：
- 项目摘要
- README
- 仓库链接
- 技术栈
- 项目职责
- 后续材料入口

因此设计必须同时兼顾：
- 第一眼可信度
- 第二层信息效率
- 第三层项目可深入阅读

---

## 9. Key pages

本轮视觉重设计只关注这三个关键页面：

1. 首页 `/en`
2. 项目列表页 `/en/projects`
3. 项目详情页 `/en/projects/[slug]`

中文页暂时不是视觉探索重点。  
本阶段主要先在英文页面上建立视觉系统，再映射到中文版本。

---

## 10. What needs redesign first

优先级从高到低：

1. **首页 Hero**
2. **Contact 区**
3. **Projects Preview**
4. **项目详情页顶部 Hero**
5. **Tab 区与内容区关系**
6. **基础组件语言**
   - Button
   - Badge
   - Card
   - Tab
7. **整体页面节奏**
   - 垂直间距
   - 横向宽度
   - 文本块密度
   - 信息主次

---

## 11. Baseline assets to review

在视觉探索前，应参考当前基线截图：

- `docs/design/baseline/baseline-home.png`
- `docs/design/baseline/baseline-projects.png`
- `docs/design/baseline/baseline-project-detail.png`

这些 baseline 只用于：
- before / after 对比
- 判断哪些层级保留
- 判断哪些部分必须重做

不要把现有视觉当成最终风格，只把它当作当前工程基线。

---

## 12. References

只参考少量高质量站点的**原则**，不直接模仿表面样式。

### Primary references
1. `https://rauno.me/`
   - 参考点：气质、排版重量、mono 点缀、独立开发者感

2. `https://leerob.io/`
   - 参考点：布局节奏、信息主次、工程型个人站的可信度

3. `https://paco.me/`
   - 参考点：深色温度、层次处理、克制但不冷漠

### Secondary references
4. `https://linear.app/`
   - 参考点：组件语言、按钮/标签/层级克制感

这些参考站点是为了借：
- 字体与层级原则
- 布局节奏
- 深色主题成熟度
- 组件语义

不是为了做成“像某某站”。

---

## 13. Deliverables expected

视觉阶段的目标不是直接产出代码，而是产出**可落地的视觉系统方向**。

期望设计阶段输出：

### 13.1 Style direction
- 1 个主方向
- 必要时 1 个备选方向
- 用文字说明为什么适合这个项目

### 13.2 Design tokens
- 背景层级
- 文本层级
- 边框策略
- accent 色使用规则
- 字体 scale
- spacing 节奏
- 圆角 / 阴影原则

### 13.3 Component language
至少定义这些组件的视觉语言：
- Primary button
- Secondary button
- Ghost button / text button
- Badge / tag
- Card
- Tab
- Section heading
- Small meta text

### 13.4 Page-specific guidance
至少给出这三个页面的设计建议：
- Home Hero
- Projects grid / card
- Project detail hero + tab content layout

### 13.5 Engineering-friendly output
输出必须能被 Codex 工程化落地，避免只给抽象形容词。  
最好能描述到：
- 哪些区域更稀疏
- 哪些区域更密集
- 哪些文本要更强
- 哪些组件需要统一收窄
- 哪些卡片需要更明确的边界感

---

## 14. Constraints for implementation

后续 Codex 落地时必须遵守：

- 不改现有信息架构
- 不重做路由系统
- 不推翻 `src/data` 驱动结构
- 尽量在当前组件层级内渐进改造
- 优先改样式、层级、节奏，不优先重写逻辑
- 不为了视觉重设计而引入过重依赖
- 不做难维护的大型动画系统
- 可以使用更成熟的基础组件思路，但不要直接套整套第三方风格

---

## 15. Current content state

当前英文内容已完成 Phase 2B-A 的真实内容替换，包含：

- 姓名 / 角色定位
- GitHub / Email / LinkedIn
- 项目标题与摘要
- Experience / Skills / Now / Resume 概述

仍然存在的 placeholder / staged content：

- README 仍是临时内容
- Website tab 目前仍是临时链接展示
- GitHub Activity 仍是 mock 数据
- 项目仓库、报告、截图、仿真文件等真实链接还未全部补完
- 中文内容尚未同步完成

所以本阶段重点不是“补全所有真实内容”，而是先建立成熟的视觉系统。

---

## 16. Model collaboration plan

### Gemini / Nano Banana 2
负责：
- 视觉方向发散
- 首页 Hero 探索
- 页面气质探索
- 多方案对比

### Claude Design
负责：
- 收敛设计系统
- 统一组件语言
- 建立深色主题下的层级规则
- 输出更适合工程落地的设计规范

### Codex
负责：
- 在现有 Next.js 代码结构中实现设计方案
- 保持路由、数据结构、组件结构稳定
- 做渐进式改造

顺序应为：

**Gemini 发散探索 → Claude Design 收敛系统 → Codex 工程落地**

---

## 17. Immediate task for design phase

当前视觉阶段最应该先回答的问题，不是“整站怎么做”，而是：

1. 首页 Hero 应该如何从“骨架感”变成“可信入口”
2. Contact 区如何更像真实个人入口，而不是模板块
3. Projects Preview 如何建立代表作优先级
4. 项目详情页顶部摘要区如何更成熟
5. Tab 区如何更像系统的一部分，而不是临时切换器
6. 整站如何建立统一的深色层级与组件语义

---

## 18. Final instruction

请始终记住：

这个项目不是要做成“最酷的网站”，  
而是要做成一个**可信、清晰、克制、工程感强、适合招聘与项目阅读的个人入口站**。

任何设计决策都应优先回答：

- 是否提高可信度？
- 是否提高信息效率？
- 是否降低模板感？
- 是否更接近独立开发者 / 工程型个人站气质？
- 是否便于 Codex 在现有代码结构中落地？

如果答案是否定的，就不要做。