# Portfolio Design Handoff V3
## Precision Editorial with Warm Bento Discipline
> 保持工程型可信度与技术档案感，用更有呼吸感的 editorial 节奏与更成熟的 bento 信息组织方式，替代当前偏“纯技术深色站”的默认质感。

---

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

## 4. Locked direction summary

### Selected direction
**Precision Editorial**

### This is now a refined hybrid direction
- **Primary visual DNA**: The Precision Blueprint
- **Primary content hierarchy**: The Editorial Statement
- **Secondary component cues only**: The Semantic Dashboard

### One-line interpretation
这是一个以 **工程型可信度** 为核心、以 **editorial 排版节奏** 为主体、以 **少量 dashboard 语义化组件** 作为信息组织工具的个人入口站。

### Hard rule
Do not drift into SaaS dashboard aesthetics.

---

## 5. Core design constraints

下面三项仍是当前工作基线，除非有强理由，否则不要偏离：

### 5.1 Typography baseline
**Sans-first with mono accents**

- 标题与正文以 Sans 为主
- 元信息、标签、小型状态信息可用 Mono 点缀
- 不做大面积全站 Mono
- 不走强文学感 Serif 主导方向
- 如需引入更强 editorial 感，只能通过字号、字重、留白、行长和节奏完成，不靠 Serif 大幅改气质

### 5.2 Dark depth
**Near-black, not pure black**

- 使用近黑，而不是纯黑 `#000`
- 保留深色主基调
- 允许轻微暖偏移或冷暖平衡，但整体仍应是近黑工程底色
- 目标是冷静、专业、耐看，而不是 OLED 炫黑
- 不允许全站切到米白底 / 杂志暖底方向

### 5.3 Accent strategy
**Single low-saturation accent**

- 只允许一个低饱和 accent 色
- 只在 CTA、active、focus、关键状态中少量使用
- 不做多 accent 竞争
- 不做大面积高亮发光
- 不让 accent 成为“品牌主角”，它只能是次级强调

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

新增补充关键词：

- editorial
- legible
- disciplined
- precise
- quietly premium

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

新增禁止项：

- 不做整站米白/复古杂志作品集风
- 不做 Display Serif 主导的创意人站
- 不做大圆角 Bento 卡片墙
- 不做过多“工程装饰网格 / HUD / 蓝图噪点”来假装工程感
- 不做右侧大盒子信息卡主导首页 Hero
- 不做亮蓝、亮紫、荧光青这类强 startup accent
- 不做“所有模块等权”的卡片平铺

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
4. **项目列表页结构主次**
5. **项目详情页顶部 Hero**
6. **Tab 区与内容区关系**
7. **基础组件语言**
   - Button
   - Badge
   - Card
   - Tab
8. **整体页面节奏**
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

### Inspiration references for translation layer
5. `https://bentogrids.com/`
   - 参考点：Bento 不是“卡片越多越好”，而是“信息优先级拆分方式”

6. `https://read.cv/`
   - 参考点：极简 editorial 语气、标题层级、去噪后的职业可信感

7. `https://dante.dev/`
   - 参考点：工程感与审美感结合的个人站节奏

8. `https://www.awwwards.com/`
   - 参考点：只借高质量微交互与细节控制，不借炫技视觉

这些参考站点是为了借：
- 字体与层级原则
- 布局节奏
- 深色主题成熟度
- 组件语义
- 高级但克制的个性表达

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

新增约束：

- Bento 只能作为信息组织方法，不是整站 UI 结构模板
- 首页允许出现不对称布局，但必须服务于“先身份、后证明、再转化”的招聘逻辑
- 项目详情页必须更像 dossier / technical case cover，而不是“tab 包住几张卡片”
- 项目列表页必须体现主次，不允许所有项目完全等权
- 任何视觉变化都要在当前代码结构里可以渐进实现

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

---

## 19. Inspiration translation layer

这一节是 V3 相比 V2 的新增核心：  
它不是重新改方向，而是把外部 inspiration 的审美价值，翻译成**适合这个工程型 portfolio 的执行规则**。

### 19.1 What to absorb from inspiration

#### A. Editorial minimal rhythm
吸收：
- 更明确的标题层级
- 更大的版芯呼吸感
- 更克制的分隔线使用
- 更成熟的正文行长与行距
- 更强的章节标题语气

不要吸收：
- 大面积文学化字体
- 纯视觉设计师作品集气质
- 极端留白导致信息效率下降

#### B. Warm restraint
吸收：
- 近黑背景中微弱的暖偏移或中性偏移
- 不是纯冷黑白的硬切对比
- 更像高质量出版物 / 技术档案，而不是默认深色 UI 模板

不要吸收：
- 全站暖底杂志风
- 大面积米白、褐色、深咖主导
- 复古情绪压过工程可信度

#### C. Bento as information discipline
吸收：
- 信息按重要性拆分
- 主块与次块明显区分
- 首页 / Projects 页可以采用 Bento 的信息组织思路
- “我是谁 / 我做什么 / 我做过什么 / 下一步”可以用非对称块级组织表达

不要吸收：
- 整站卡片墙
- 所有模块都盒子化
- 大量等权小卡片
- 用 Bento 替代叙事

#### D. Hairline / labels / metadata system
吸收：
- hairline 分割线
- 全大写 / 小字距 label
- mono 元数据
- 时间、状态、stack、标签的统一视觉语法

不要吸收：
- 过度装饰的 grid 噪点
- 假工程 HUD
- 大量无意义的技术框线和编号

---

## 20. Direction synthesis

### Final design synthesis
**Precision Editorial with Warm Bento Discipline**

### Meaning
- **Precision**：工程型可信度、精确、克制、线性组件、近黑深度
- **Editorial**：通过排版层级、段落节奏、标题重量来建立权威感
- **Warm Bento Discipline**：用更成熟的信息拆分替代均匀卡片墙，但仍受严格约束，不滑向彩色产品站

### In one sentence
这是一个**技术档案感**主导、带有**作品册式排版节奏**、并借助**有限 Bento 信息组织**提高阅读效率的工程型个人站。

---

## 21. Page translation rules

### 21.1 Home page `/en`
首页不应再像“section 骨架合集”，而应更像：

> 一个可信的职业入口页 + 工程能力摘要页

#### Required changes
- Hero 从“姓名 + 说明 + 右侧盒子”升级为**去盒子的 editorial hero**
- 右侧不再是模板式 intro card，而应成为 **metadata / status rail**
- Contact 不再是三个普通卡片，而应更像 **proof strip / direct reach rail**
- Projects Preview 必须建立主次：**1 个 featured dossier + 2 个 compact secondary summaries**
- GitHub Activity 若仍为 mock，应视觉弱化，不能抢主叙事
- Experiences / Skills / Now / Resume 应更像 dossier section，而不是“一个个功能模块”

### 21.2 Projects page `/en/projects`
项目列表页应从“项目网格页”升级为：

> 工程案例索引页（Project Index）

#### Required changes
- 页面顶部加 editorial summary，说明项目集合的意义
- 列表必须体现主次，而不是三张大卡完全等权
- 第一项目可以更大、更强，承担 featured dossier 角色
- 第二、第三项目可以是 compact secondary dossier
- badge 数量必须控制，不让标签盖过标题与摘要
- action 文案更像阅读型 CTA，如 `Open dossier` / `Read case` / `View details`

### 21.3 Project detail page `/en/projects/[slug]`
项目详情页应从“项目详情 + tabs”升级为：

> technical dossier cover + structured case study

#### Required changes
- 顶部 Hero 更像技术文档封面，不是普通详情 banner
- 右侧摘要区应为 metadata rail：status / timeframe / links / stack
- Overview 不应只是信息块堆叠，而应像有序 case-study flow
- README / Website 仍可保留 placeholder，但容器语言必须统一
- Tabs 必须保持线性、安静、靠内容区，不允许回到 pill tab 风格

---

## 22. Component language V3

### 22.1 Buttons
- Primary button：矩形或轻微圆角（3px-6px），1px 边框，低饱和 accent 或高对比文字
- Secondary button：透明底 + 1px 边框
- Ghost / text action：更像 text-link + underline，不像独立 pill
- 不允许大圆角
- 不允许厚阴影
- 不允许发光 hover

### 22.2 Badges / chips
- 作用：技术标签、状态、分类
- 字体：Mono
- 形式：小尺寸、细边框、低噪声
- 背景：可透明或极低透明度填充
- 数量必须被控制
- 标签不能成为视觉主角

### 22.3 Cards / panels
- 不是默认大盒子
- 更像轻面板 / section boundary / dossier block
- 允许局部 panel，但边界应细、安静、少层级
- 优先使用版式区分，不要依赖重卡片

### 22.4 Tabs
- 必须是线性 underline tabs
- inactive 只保留文字
- active 使用底线或轻 accent 线
- 不做 pill
- 不做独立凸起按钮感

### 22.5 Metadata labels
- 使用 Mono
- 可以全大写或小写，但要统一
- 小字距（tracking）
- 用来承接时间、状态、区域标题、技术摘要

### 22.6 Section headings
- Sans
- 强层级
- 不花哨
- section 之间要有明确节奏差

---

## 23. Visual token preferences V3

### 23.1 Background family
- Base: near-black
- 可以从纯冷黑调整到略有中性/微暖偏移的近黑
- 不允许纯 `#000000` 成为整站唯一背景语气
- 不允许切成暖米色底

### 23.2 Surface family
- panel 只比 base 亮半级到一级
- 要让内容浮出来，但不要形成重 SaaS 面板感
- surface 差异要轻，不要像 dashboard 卡片堆

### 23.3 Text family
- headline：高对比、强重量
- narrative body：正文可读优先
- metadata：Mono + muted
- hierarchy 必须明显，不能整站都是一个灰阶区间

### 23.4 Accent family
- 低饱和、稀疏、克制
- 可偏 steel blue / muted teal / desaturated brass 中的一种
- 只能用于：
  - active tab
  - focus
  - CTA 强调
  - 细节 underline / edge emphasis
- 不可用于大面积背景块

### 23.5 Borders
- 1px 为主
- hairline 感优先
- 分隔线比卡片更重要
- 用线组织页面，而不是用重盒子组织页面

### 23.6 Radius
- 3px-6px
- 不允许 16px、20px 这种柔软大圆角
- 整体偏“精密”而不是“产品化亲和”

### 23.7 Shadows
- 原则上尽量少用
- 若必须有，只能非常弱
- 靠边框、明度、留白来做层次，不靠阴影

### 23.8 Spacing rhythm
- 区块间距大
- 组件内部间距紧
- 体现“外松内紧”的工程文档节奏
- 首页 Hero 与 Projects 第一屏必须比当前更有大呼吸感

---

## 24. Warm Bento discipline rules

这是 V3 新增的核心执行规则。

### 24.1 Bento 只负责信息优先级，不负责整站样式
Bento 在本项目中的意思是：

- 大块放身份与主价值
- 中块放状态、proof、联系信息
- 次块放项目索引或 secondary summaries

不是：

- 到处加卡片
- 到处不规则拼贴
- 做成 Apple/Linear 风产品首页

### 24.2 Where Bento is allowed
- 首页首屏与首屏后半段
- Projects overview / preview
- Contact / proof strip 的信息拆分

### 24.3 Where Bento is NOT allowed
- 项目详情正文主体
- Resume section 主体
- README 容器
- 整页 section 全部变成网格块

### 24.4 Warm means restrained warmth
这里的 warm 不是“复古”或“奶油色”，而是：

- 背景更不死黑
- 文本白值更不刺眼
- panel 亮度与 accent 更有温度
- 页面阅读感更像高质量档案，而不是默认暗黑模板

---

## 25. What to keep from V2

- Asymmetric homepage hero
- Editorial-scale headline hierarchy
- Metadata / technical note panel on the right side
- Project index feeling for projects page
- Technical-document cover feeling for project detail hero
- Linear tabs instead of pill tabs
- Sans for narrative hierarchy, Mono for metadata and technical labels
- Near-black palette with restrained low-saturation accent
- Thin borders, small radius, low visual noise

---

## 26. What to remove or weaken

- Template-like right-side boxed intro card
- 三张完全一样权重的 contact cards
- 首页所有模块都像 section skeleton
- Projects 页的等权大卡平铺
- 过多 badge 抢标题
- 详情页里“tab + card” 的默认 shadcn 感
- 任何接近 SaaS dashboard 的面板层级
- 任何无必要的 hover 动画和亮 outline

---

## 27. Claude Design partial convergence notes

Claude Design session stopped due to usage limit before final full system output.  
However, the following convergence cues were already confirmed and should be treated as active implementation constraints:

- lower-saturation accent
- Sans + Mono pairing
- smaller radius
- linear tabs instead of pill tabs
- denser, less decorative chips
- asymmetric / de-boxed homepage hero
- less SaaS dashboard feeling
- tighter border treatment
- quieter, more restrained component language

If Claude Design becomes available later, its next output should refine this locked direction rather than replace it.

---

## 28. Implementation brief for Codex

Codex 后续实现 V3 时，应遵循以下优先级：

### First pass
1. 重构首页 Hero
2. 重构首页 Contact 区
3. 重构首页 Projects Preview 主次
4. 收窄组件语言（button / badge / card / tab）
5. 建立统一 token：background / text / border / accent / radius / spacing

### Second pass
6. 重构 `/en/projects`
7. 重构 `/en/projects/[slug]` 的 Hero 与 Overview 流

### Third pass
8. 再统一 Experiences / Skills / Now / Resume / GitHub Activity 的节奏
9. 最后再处理 README / Website placeholder 的容器一致性

### Engineering principle
- 优先改样式和版式
- 其次改 section 结构
- 最后才改更深层内容容器
- 不在这一轮接真实 GitHub API
- 不在这一轮补全所有项目真实资产
- 不在这一轮扩展复杂动画

---

## 29. Final lock

### Selected direction
**Precision Editorial with Warm Bento Discipline**

### Final rule
- 主方向不再继续发散
- 后续所有设计 proposal 必须基于此方向继续收敛
- 若引用新的 inspiration，只能服务于这个方向，不得重开新风格分支

### One-line checkpoint for every design decision
> 这个改动，是否让页面更像一个可信、克制、清晰、工程型的职业入口站，而不是一个模板站、产品站或设计实验站？

如果不是，就不要做。