# Redesign Proposal V1

## Current V3 Diagnosis

### Home page

1. The first screen still reads as a technical document rather than a hiring-facing portfolio entrance. The current hero communicates engineering seriousness, but the identity signal is not strong enough at first glance.
2. The hero answers "what I work on" more clearly than "who I am", "what I have built", and "where a recruiter should go next".
3. The current metadata rail is useful, but it behaves like a documentation sidebar. It should become a tighter recruitment-status and proof rail.
4. The contact section is visually clean but too evenly weighted. GitHub, Email, and LinkedIn currently feel like template fields rather than a direct reach and proof strip.
5. The projects preview already has a featured-plus-secondary structure, but it still reads like a text index. It needs a stronger representative-work moment without becoming a marketing hero.
6. The page has good low-noise discipline, but the grey scale is narrow. The result is credible yet visually under-memorable.

### Projects page

1. The page is moving toward a project index, but the top summary still feels like a document preface rather than a browsable portfolio index.
2. The featured project and compact projects have layout hierarchy, but their visual language remains too similar: title, summary, tags, and link.
3. The card system does not yet give recruiters a fast way to scan project role, evidence, contribution, and status.
4. Stack badges compete with the project narrative. They should behave as metadata, not as the primary visual content.
5. The page has wide editorial space, but the project grouping lacks the richer bento-style information rhythm expected by the V3 direction.

### Project detail page

1. The technical dossier cover direction is correct, but the page still depends too much on a large title. It needs stronger thesis, contribution, and proof anchors.
2. The right-side metadata rail is useful, but status, timeframe, links, and stack currently have similar visual priority. The next action should be clearer.
3. The evidence strip is a good pattern, but the three evidence items are too equal. The strongest evidence should receive clearer priority when available.
4. The overview tab has a numbered case-study flow, but it still feels like structured documentation rather than a mature technical case study.
5. Tabs are correctly linear and restrained, but they should feel more integrated with the content area and less like a generic page switcher.

## Recommended Direction

### Direction 1: Dossier Bento Editorial

**Visual keywords**

- Near-black warm graphite
- Asymmetric bento
- Hairline dossier
- Large sans editorial hierarchy
- Muted sage or muted steel accent
- Dense metadata, spacious page rhythm

**Why it fits this portfolio**

This direction best combines the project's two required modes: a credible hiring entrance and a technical project archive. It allows the home page to answer identity, capability, evidence, and next action in one composed first screen while keeping the engineering-dossier tone.

**Risk points**

- If every section becomes a bento grid, the site will become a card wall.
- If surfaces become too strong, it will drift toward SaaS dashboard aesthetics.
- If accent use becomes broad, the quiet engineering tone will weaken.

**Parts not recommended**

- Large rounded bento cards
- Colourful product-site blocks
- Decorative glassmorphism
- Animated card choreography
- Fake dashboard statistics

### Direction 2: Technical Journal Index

**Visual keywords**

- Engineering journal
- Editorial index
- Strong table-of-contents rhythm
- Long-form readability
- Thin dividers
- Restrained mono metadata

**Why it fits this portfolio**

This direction reinforces credibility and reading clarity. It is suitable for technical readers who want to inspect case-study material and engineering evidence.

**Risk points**

- It may not solve the current lack of first-glance attraction.
- It may continue the current "technical documentation" impression.
- It can feel too static for a hiring-facing personal entrance.

**Parts not recommended**

- Pure text-flow layout
- Overly academic page rhythm
- Long unbroken document sections
- Full mono or pseudo-terminal styling

### Direction 3: Warm Blueprint Minimal

**Visual keywords**

- Warm technical blueprint
- Near-black base
- Quiet technical cover
- Metadata rails
- Low-saturation accent lines
- Precise grid alignment

**Why it fits this portfolio**

This direction strengthens the autonomous systems and vehicle engineering signal. It can make the work feel technical, structured, and precise.

**Risk points**

- It may become decorative engineering theatre if grid marks, blueprint lines, or HUD-like details are overused.
- It can become too cold if warmth is limited to minor colour changes.

**Parts not recommended**

- Blueprint noise textures
- Bright cyan or electric blue lines
- HUD frames
- Decorative coordinate marks
- Technical ornament without information value

### Final recommendation

Adopt **Dossier Bento Editorial**.

This is the strongest direction because it directly addresses V3's main weakness: the site is credible, but not yet visually memorable or sufficiently hiring-oriented. Dossier Bento Editorial keeps the engineering archive quality while introducing a more attractive first-screen information structure.

The redesign should not reopen the overall style direction. It should refine the locked V3 direction: **Precision Editorial with Warm Bento Discipline**.

## Final Design Rules

### Colour system

Use a near-black system with subtle warmth, not pure black.

Recommended token direction:

- `background`: `#080A09` or current `#080B0D`, adjusted slightly warmer if needed.
- `surface-1`: `#0D1110`, used for quiet panels only.
- `surface-2`: `#121715`, used sparingly for active or elevated dossier tiles.
- `line`: `rgba(232, 226, 214, 0.10)` or equivalent warm hairline.
- `text-strong`: `#F0F2ED`, used for primary headings.
- `text-body`: `#C8D0CA`, used for readable paragraphs.
- `text-muted`: `#8E9A93`, used for metadata and secondary copy.
- `accent`: `#8EA69B`, or a similarly muted sage/steel tone.
- `accent-soft`: `rgba(142, 166, 155, 0.12)`.

Accent usage must remain sparse:

- Primary CTA underline or border
- Active tab underline
- Focus ring
- Selected or important metadata edge
- Small proof emphasis

Do not use accent as a large background fill.

### Typography system

Use sans-first typography with mono accents.

**Display**

- Use only for hero headlines, project titles, and major section titles.
- Keep a strong sans weight, preferably medium rather than heavy.
- Desktop hero range: `56px-88px`, depending on viewport.
- Mobile hero range: `40px-52px`.
- Line-height: `0.98-1.08`.
- Avoid negative letter spacing.

**Body**

- Use for narrative text, summaries, project descriptions, and case-study content.
- Target size: `15px-17px`.
- Line-height: `1.7-1.9`.
- Maximum readable line length: `64ch-72ch`.

**Mono**

- Use only for metadata labels, status, dates, stack tags, nav labels, tab labels, and small technical annotations.
- Do not use mono for full paragraphs.
- Label size: `10px-11px`.
- Tracking: `0.14em-0.22em`.

### Spacing rhythm

Use an "outer loose, inner tight" rhythm.

- Page section gap: `88px-120px`.
- Home first-screen module gap: `12px-16px`.
- Card or dossier tile internal padding: `20px-28px`.
- Compact metadata rows: `12px-16px`.
- Hero bottom spacing should allow the next section to be visible without crowding.
- Avoid equal vertical spacing everywhere. Stronger content should receive more air.

### Border, radius, shadow, and divider

- Use `1px` hairline borders as the main structure.
- Prefer dividers and layout alignment over heavy cards.
- Radius should stay between `3px` and `6px`.
- Avoid `16px+` rounded card language.
- Avoid thick shadows. If shadow is needed, use a very weak depth only, such as `0 18px 40px rgba(0, 0, 0, 0.18)`.
- Dividers should organise reading flow, not decorate the page.

### Button and CTA

Primary CTA:

- Rectangular or slightly rounded.
- Height around `40px`.
- `px-4` to `px-5`.
- Border or underline uses accent.
- Text remains mono uppercase only when the action is short.

Secondary CTA:

- Text-link with underline.
- Muted by default.
- Text or underline brightens on hover.

Do not use:

- Pill buttons
- Large glowing buttons
- Gradient buttons
- Product-marketing CTA blocks

### Badge and tag

Badges and tags should behave as metadata.

- Mono `10px-11px`.
- `px-2 py-1`.
- Border: `1px solid line`.
- Radius: `3px`.
- Background: transparent or very low-opacity surface.
- Default visible count: `3-4`, then use `+N`.
- Tags should never compete with the title.

### Card and panel

Use cards as dossier tiles, not generic product cards.

Featured dossier:

- May use a quiet surface.
- Should have stronger title scale and clearer proof summary.
- Should expose contribution or evidence before stack tags.

Compact dossier:

- Should use border-top or divider structure.
- Should remain readable in a list.
- Should not try to behave like a smaller version of the featured card.

Avoid:

- Heavy card walls
- Cards inside cards
- Decorative shadows
- Large-radius bento tiles

### Tabs

Tabs must remain linear.

- Use underline tabs.
- Inactive state: text only, muted.
- Active state: accent underline or stronger text.
- Keep tabs visually attached to the content area.
- Do not use pill tabs or raised tab buttons.

### Hover and focus state

Hover:

- Use slight border change, text colour change, or very quiet surface shift.
- Optional movement should be limited to `translateY(-1px)`.
- Duration: `140ms-180ms`.

Focus:

- Use visible `accent/20` ring.
- Preserve keyboard accessibility.
- Avoid bright outlines that feel like dashboard controls.

### Motion policy

Motion should be functional, not expressive.

Allowed:

- Link colour transitions
- Border transitions
- Small surface transitions
- Minimal card hover lift

Not allowed:

- Scroll-driven spectacle
- Parallax
- Large entrance animations
- Glow pulses
- Animated bento rearrangement
- Heavy motion libraries

## Home Bento Information Architecture

The home first screen should use bento as information discipline, not as a decorative card layout.

### Module 1: Who I am

**Content**

- Boyka He
- Automotive Engineering / Autonomous Systems Project Engineer
- One concise positioning sentence

**Priority**

- P0

**Suggested size**

- Desktop: left side, roughly `7/12` width, spanning two rows.
- Mobile: first module, full width.

**Visual weight**

- Highest weight.
- Largest display text.
- Not boxed heavily.

### Module 2: What I can do

**Content**

- Autonomous vehicle systems
- Path planning and tracking control
- Vehicle dynamics, chassis, suspension, and steering design

**Priority**

- P1

**Suggested size**

- Desktop: right-top module, roughly `5/12` width.
- Mobile: directly below identity.

**Visual weight**

- Medium-high.
- Use compact capability rows, not paragraph-heavy copy.

### Module 3: What I have built

**Content**

- Featured dossier: Formula Student Autonomous Car - Path Planning and Tracking Controller
- One-line evidence summary
- Link to project dossiers

**Priority**

- P1

**Suggested size**

- Desktop: right-bottom or lower cross-row module.
- Mobile: full-width dossier tile after capability.

**Visual weight**

- Strong secondary anchor.
- Should be visually more prominent than generic project cards.

### Module 4: Next step

**Content**

- Open project dossiers
- Email
- Resume handoff

**Priority**

- P0

**Suggested size**

- Compact module, always visible in first screen.

**Visual weight**

- Small but high-contrast.
- Primary action should use accent border or underline.

### Module 5: Credible evidence / technical proof

**Content**

- MSc Vehicle Engineering
- Formula Student AI
- MPC tracking
- Vehicle dynamics
- CAV systems
- Location and availability

**Priority**

- P2

**Suggested size**

- Bottom proof strip or right-side metadata rail.

**Visual weight**

- Low to medium.
- Mono labels and compact rows.
- Must support credibility without competing with identity.

## Page-level Redesign Proposal

### 1. Home page

**Page goal**

Help recruiters and technical readers understand within ten seconds:

- Who Boyka He is
- What engineering work he is focused on
- Which project proves the capability
- Where to go next

**Layout sketch**

1. Sticky header with current route and language switcher.
2. First-screen bento hero:
   - Large identity and positioning area on the left.
   - Capability module on the right.
   - Featured proof module beneath capability.
   - Compact next-step CTA row.
   - Technical proof strip or metadata rail.
3. Direct reach strip:
   - Email should become the most direct action.
   - GitHub and LinkedIn should behave as external proof.
4. Featured projects:
   - One dominant dossier.
   - Two compact supporting dossiers.
5. GitHub activity:
   - Keep visually weaker while mock data remains.
6. Experiences, Skills, Now, Resume:
   - Keep as dossier sections with improved rhythm.

**Existing content to keep**

- Profile name, role, focus, location, availability, and intro.
- Existing socials.
- Existing projects and project summaries.
- Existing experience, skills, now, resume content.
- Current route structure.

**Content to reorganise**

- Move identity and role into the strongest hero position.
- Convert focus items into capability rows.
- Treat featured project as proof inside or immediately after the hero.
- Convert contact cards into a direct reach/proof strip.
- Weaken GitHub activity until real data replaces mock content.

**Components that need redesign**

- `IntroSection`
- `ContactSection`
- `ProjectsPreviewSection`
- `ProjectCard`
- `SectionContainer`
- `StatusPill`

**Content not to add**

- Fake testimonials
- Fake stats
- Stock imagery
- Placeholder portraits
- Marketing hero claims
- Decorative motion

### 2. Projects page

**Page goal**

Make the page feel like a browsable engineering case index rather than a text list.

**Layout sketch**

1. Project Index cover:
   - Short editorial summary.
   - Compact index facts: number of dossiers, dominant case, evidence status.
2. Featured dossier:
   - First project receives larger title scale and stronger narrative weight.
   - Show role/contribution/proof before stack.
3. Compact dossier list:
   - Remaining projects appear as compact case summaries.
   - Keep status, timeframe, and primary tags in stable positions.
4. Footer remains restrained.

**Existing content to keep**

- All project data from `src/data/projects/en.ts`.
- Existing slug routes.
- Existing status and timeframe fields.
- Existing project links.

**Content to reorganise**

- Treat the first project as the dominant case.
- Move stack tags below evidence or contribution.
- Use `Open dossier` or similar reading-oriented action text.
- Keep secondary projects compact and scan-friendly.

**Components that need redesign**

- `ProjectCard` featured variant
- `ProjectCard` compact variant
- Projects page editorial summary block
- Badge/tag treatment

**Content not to add**

- Filters before there are enough projects to justify them.
- Search UI.
- Fake screenshots.
- New project data fields unless a real content need appears.
- Third-party UI framework components.

### 3. Project detail page

**Page goal**

Make each project detail feel like a technical dossier cover followed by a structured case study.

**Layout sketch**

1. Back link.
2. Dossier cover:
   - Large project title.
   - Summary.
   - Thesis and contribution block.
   - Metadata rail: status, timeframe, links, stack.
3. Evidence strip:
   - Show strongest observable outcomes.
   - Use consistent evidence labels.
4. Linear tabs:
   - Overview
   - README
   - Website
5. Overview case-study flow:
   - 01 Problem
   - 02 Work
   - 03 Evidence
   - 04 Stack

**Existing content to keep**

- Current route `/[locale]/projects/[slug]`.
- Current tab query structure.
- Existing Overview / README / Website tabs.
- Existing project data shape.
- Existing legacy slug redirect.

**Content to reorganise**

- Give thesis and contribution clearer hierarchy in the cover.
- Treat links as the primary next action inside the metadata rail.
- Move stack to lower priority.
- Make evidence feel like proof, not generic highlights.

**Components that need redesign**

- Project detail hero section
- Metadata rail
- Evidence strip
- `ProjectTabs`
- `ProjectOverviewTab`
- README and Website placeholder containers

**Content not to add**

- Bento layout inside main case-study body.
- Heavy cards around README.
- Fabricated diagrams or screenshots.
- Complex animation.
- Changes to `src/data` unless real project evidence requires additional structured fields later.

## Implementation Brief for Codex

### Phase 2D-1: Visual tokens and base components

**Scope**

- Update visual tokens in `src/app/globals.css`.
- Update Tailwind token mapping only if needed in `tailwind.config.ts`.
- Refine base components:
  - `SurfaceCard`
  - `StatusPill`
  - `SectionContainer`
  - shared badge/tag classes where present

**Rules**

- Do not change routes.
- Do not change `src/data` structure.
- Do not introduce a UI framework.
- Keep radius between `3px` and `6px`.
- Keep accent low-saturation and sparse.

**Verification**

- Re-read modified files.
- Run lint only after implementation starts.

### Phase 2D-2: Home Bento Hero

**Scope**

- Redesign `IntroSection` into the first-screen bento structure.
- Redesign `ContactSection` into a direct reach/proof strip.
- Adjust `ProjectsPreviewSection` so the featured project works as proof rather than a normal card list.

**Rules**

- Preserve existing content fields.
- Do not add fake content.
- Keep first-screen next actions visible.
- Do not create a marketing landing page.

**Verification**

- Check `/en` desktop and mobile screenshots.
- Confirm no text overflow.
- Confirm first screen answers identity, capability, proof, and next step.

### Phase 2D-3: Projects page

**Scope**

- Refine `src/app/[locale]/projects/page.tsx`.
- Refine `ProjectCard` featured and compact variants.
- Convert project list into a clearer engineering case index.

**Rules**

- First project is the dominant case.
- Secondary projects are compact summaries.
- Stack badges remain secondary metadata.
- Do not add filters or search.

**Verification**

- Check `/en/projects` desktop and mobile screenshots.
- Confirm project hierarchy is visible without reading every paragraph.

### Phase 2D-4: Project Detail page

**Scope**

- Refine `src/app/[locale]/projects/[slug]/page.tsx`.
- Refine `ProjectTabs`.
- Refine `ProjectOverviewTab`.
- Align README and Website placeholder containers with the same dossier language.

**Rules**

- Keep current tab behaviour.
- Keep legacy slug redirect.
- Keep project data shape.
- Do not bento-grid the main case-study body.

**Verification**

- Check at least one project detail page on desktop and mobile.
- Confirm metadata rail, evidence strip, tabs, and overview flow remain readable.

### Phase 2D-5: Verification, screenshots, commit

**Scope**

- Run `npm run lint`.
- Run `npm run build`.
- Capture screenshots for:
  - `/en`
  - `/en/projects`
  - `/en/projects/[slug]`
- Review desktop and mobile breakpoints.
- Commit only after visual and local verification pass.

**Rules**

- Do not push until explicitly requested.
- Do not commit failing or unverified work.
- Do not hide mock data. Visually weaken it until real data is available.

**Completion criteria**

- Modified files have been re-read.
- Lint passes.
- Build passes.
- Screenshots confirm no text overlap, broken layout, or excessive dashboard/card-wall drift.
- Git status contains only intended design implementation files before commit.
