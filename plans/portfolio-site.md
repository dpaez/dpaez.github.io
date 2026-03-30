# Plan: New Portfolio Site with Blog

> Source PRD: docs/PRD.md  
> Source TDD: docs/TDD.md  
> GEUT Best Practices: .agents/skills/fullstack-skill/

## Technology Stack (from TDD)

### Core Framework

- **Astro 5.x** - Static site generation with View Transitions API
- **React 19** - Interactive components (navigation, theme toggle)
- **TypeScript** - Full type safety with strict mode

### Styling & UI

- **Tailwind CSS 4.x** - CSS-first configuration with OKLCH colors
- **local-components 0.1.0-alpha.4** - UI component library
- **Lucide icons** - Reference icons library

### Build & Development Tools

- **Bun** - Runtime, package manager, and bundler
- **OXC Tooling** - oxlint (linting) and oxfmt (formatting)
- **tsgo** - Fast TypeScript type checking

### Content

- **Markdown** - Blog posts with frontmatter
- **Shiki** - Syntax highlighting for code blocks

### Deployment

- **Cloudflare Pages** - Static hosting (user-managed deployment)

## Architectural Decisions

### Routes

- `/` - Home page with minimal hero
- `/projects` - Projects grid page
- `/about` - About page with bio and talks subsection
- `/blog` - Blog list page
- `/blog/[slug]` - Individual blog post pages

### Schema/Data Models

```typescript
// Project
interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  image?: string;
  featured: boolean;
}

// Blog Post Frontmatter
interface BlogFrontmatter {
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  draft?: boolean;
}

// Talk
interface Talk {
  title: string;
  event: string;
  year: number;
  topics: string[];
  link?: string;
  image?: string;
}

// About Data
interface AboutData {
  bio: string;
  background: string;
  currentRole: string;
  experience: Experience[];
  talks: Talk[];
  contact: ContactInfo;
}
```

### Third-Party Service Boundaries

- `local-components` - UI component library (Layout, Card, Button, ThemeToggle)
- Tailwind CSS v4 - Styling with local-components theme tokens
- Astro 5.x - Static site generation with View Transitions API
- React 19 - Interactive components (theme toggle, mobile nav)

### Tooling Boundaries (OXC + Bun)

- **oxlint** - Fast Rust-based linting (50-100x faster than ESLint)
- **oxfmt** - Fast formatting with experimental import sorting
- **Bun** - All-in-one runtime, bundler, and package manager
- **tsgo** - Go-based TypeScript type checker for development

### Global Configuration

- View Transitions enabled globally in Layout component for smooth page transitions
- SEO meta tags standardized across all pages
- Dark mode class strategy: `dark` class on `<html>` element
- OXC configuration: single quotes, no semicolons, import sorting with `@/` pattern

---

## Phase 1: Foundation + Theme + Navigation

**User stories**: #1 (minimal hero), #5 (dark mode), #7 (multi-page nav), #9 (fast static site)

### What to Build

Create the foundational site shell with multi-page navigation and theme system. This is the first tracer bullet that establishes the architecture all other phases will build upon.

**Tooling Setup (OXC + Bun):**

- Configure OXC tooling (oxlint and oxfmt) for code quality
- Set up Bun as package manager and runtime
- Configure tsgo for fast type checking during development
- Ensure TypeScript strict mode with path aliases (`@/*`)

Build a `Layout` component that wraps all pages with:

- Global View Transitions configuration (Astro's `<ClientRouter />`)
- Standardized SEO meta tags (title, description, Open Graph, Twitter Cards using existing `deka.png`)
- Theme initialization script to prevent FOUC (Flash of Unstyled Content)
- Navigation component in header with links to Home, Projects, About, Blog
- Mobile hamburger menu with slide-out drawer
- Dark mode toggle button using local-components ThemeToggle
- Footer with copyright and location

Build `Navigation` component:

- Desktop: horizontal link list with active state highlighting
- Mobile: hamburger icon that opens slide-out menu
- Include ThemeToggle in navigation bar (top-right on desktop, inside mobile menu)
- Links: Home (`/`), Projects (`/projects`), About (`/about`), Blog (`/blog`)

Build `ThemeProvider` wrapper:

- Initialize theme from localStorage or system preference on load
- Provide theme context to child components
- Handle theme class toggling on `<html>` element
- Persist theme changes to localStorage

Build Home page (`/`):

- Minimal hero section with DΞKΔ branding
- Geometric layout using local-components Layout and Card
- Brief tagline: "Developer, P2P Enthusiast, Entrepreneur"
- Navigation links as call-to-action buttons

### Acceptance Criteria

- [ ] All four routes (`/`, `/projects`, `/about`, `/blog`) are accessible and render without errors
- [ ] Navigation works on desktop with visible link list
- [ ] Mobile hamburger menu opens/closes smoothly
- [ ] Dark mode toggle switches between light and dark themes
- [ ] Theme preference persists after page reload
- [ ] No FOUC on initial page load (theme applied before render)
- [ ] View Transitions enabled - navigating between pages shows smooth transition
- [ ] SEO meta tags present on all pages (title, description, og:image, twitter:card)
- [ ] `bun run build` completes successfully with no errors
- [ ] Lighthouse performance score > 90 for Home page
- [ ] Keyboard navigation works for menu and theme toggle
- [ ] `bun run dev` starts development server at `localhost:4321`
- [ ] OXC tooling configured: `oxlint` and `oxfmt` commands work
- [ ] tsgo type checking passes without errors
- [ ] Code follows GEUT style: single quotes, no semicolons, `@/` imports

### Testing Focus

- Theme Module: Verify localStorage persistence, system preference detection, FOUC prevention
- Navigation Module: Test mobile menu, active state highlighting, keyboard navigation
- Static Build: Verify all routes generate static HTML, no build errors
- Tooling: Verify OXC linting and formatting works correctly

---

## Phase 2: About Page with Data Structure

**User stories**: #4 (find talks), #8 (brand identity), #10 (preserve assets)

### What to Build

Migrate existing content from the current site and build the About page with structured data for bio, experience, and talks.

Create data layer:

- `src/data/about.ts` - AboutData object with bio, background, current role
- `src/data/talks.ts` - Array of Talk objects with all conference presentations
- `src/data/experience.ts` - Array of Experience objects (Despegar, LIFIA, Assistant Professor)
- Extract content from `reference/content.md`

Migrate assets:

- Move `/assets/deka.png` → `/public/assets/deka.png` (profile image)
- Move `/assets/dk_nodeconfco.jpg` → `/public/assets/talks/dk_nodeconfco.jpg` (NodeConf Colombia 2019)
- Move `/assets/dat_workshop.jpeg` → `/public/assets/talks/dat_workshop.jpeg` (NodeConf Argentina 2018)
- Move `/assets/deka_nodeconf_2.jpg` → `/public/assets/talks/deka_nodeconf_2.jpg` (NodeConf Argentina 2016)
- Copy favicon files, apple-touch-icon, etc. to `/public/assets/`

Build `AboutContent` component:

- Structured sections: Bio, Background, Current Role, Experience
- Use local-components Card for each section
- Geometric layout with generous whitespace

Build `TalksSection` component:

- Grid layout of talk cards
- Each card: event name, year, talk title, topics (tags), optional photo
- Photos displayed using Astro Image component with optimization
- Links to talk materials/repos where available

Build About page (`/about`):

- Full About content at top
- Talks subsection below
- Contact information section (email: diego at geutstudio . com)
- Social links (Twitter/X, GitHub, GEUT, SHER)

### Acceptance Criteria

- [ ] About page displays complete bio and background information
- [ ] All conference talks are listed (NodeConf Colombia 2019, NodeConf Argentina 2018 & 2016, Node Interactive NA 2016)
- [ ] Talk photos display correctly with proper alt text
- [ ] Contact email clearly visible with anti-spam formatting
- [ ] Social links open in new tabs
- [ ] Data files in `src/data/` are typed with TypeScript interfaces
- [ ] All assets accessible in `/public/assets/`
- [ ] Images use Astro's Image component for optimization
- [ ] Page SEO meta tags include Open Graph image (deka.png)
- [ ] View Transitions work when navigating to/from About page
- [ ] Dark mode renders About page correctly with proper contrast
- [ ] Mobile layout stacks sections vertically
- [ ] Code passes OXC linting (`oxlint` runs without errors)
- [ ] Data files use proper TypeScript strict types

### Testing Focus

- About Module: Verify content renders correctly, images load, responsive layout
- Data Layer: Test TypeScript types, content extraction accuracy
- Accessibility: Test image alt text, color contrast in both themes

---

## Phase 3: Projects Grid

**User stories**: #2 (browse projects)

### What to Build

Create the Projects page with a card grid layout showcasing key work.

Create data layer:

- `src/data/projects.ts` - Array of Project objects
- Include: SHER (P2P live audio platform), GEUT (consultancy), Despegar (components as a service), any other notable work
- Each project has title, description, tags (technologies), links

Build `ProjectCard` component:

- Extend local-components Card with project-specific features
- Display: title, description, technology tags, action buttons
- Use meta property from Card component
- Tags rendered as small pills/badges: pass a badge prop to the Card component
- Links open externally (demoUrl, repoUrl)
- Hover effect with subtle geometric accent

Build `ProjectsGrid` component:

- Responsive grid: 1 column mobile, 2 columns tablet, 3 columns desktop
- Consistent card heights using CSS Grid
- Gap spacing following geometric aesthetic

Build Projects page (`/projects`):

- Page title and brief intro
- Featured projects first (if marked featured: true)
- Full grid of all projects below
- Grid layout adapts to screen size

### Acceptance Criteria

- [ ] Projects page displays grid of project cards
- [ ] Each card shows title, description, and technology tags
- [ ] Cards link to external demo/repo URLs when provided
- [ ] Grid is responsive: 1 col (mobile) → 2 col (tablet) → 3 col (desktop)
- [ ] Project data typed with TypeScript Project interface
- [ ] All projects from PRD are included (SHER, GEUT, Despegar)
- [ ] Cards have consistent hover states with visual feedback
- [ ] Technology tags are visually distinct (pills/badges)
- [ ] Page SEO meta tags present
- [ ] View Transitions work when navigating to/from Projects
- [ ] Dark mode renders project cards correctly
- [ ] Mobile touch targets are adequate size (min 44px)
- [ ] All external links use `rel="noopener noreferrer"`
- [ ] Code passes OXC linting and formatting

### Testing Focus

- ProjectCard Module: Test grid responsiveness, hover states, external links
- Static Build: Verify all project data loads at build time
- Accessibility: Test tag contrast, link accessibility

---

## Phase 4: Blog System

**User stories**: #3 (read blog), #6 (add via Markdown)

### What to Build

Implement full blog functionality with Markdown-based posts.

Create content structure:

- `src/content/blog/` directory for Markdown posts
- `src/content/config.ts` - Content collections configuration
- Create 2-3 sample blog posts with frontmatter

Build content utilities:

- `getAllPosts()` - Fetch all Markdown files, sort by date descending
- `getPostBySlug(slug)` - Fetch specific post by slug
- `parseFrontmatter()` - Extract frontmatter with validation

Build `BlogList` component:

- Simple chronological list (not grid)
- Each item: title, date (formatted), excerpt
- Click navigates to individual post page

Build `BlogPost` component:

- Full post content rendered from Markdown
- Title and date at top
- Optional tags display
- Back link to blog list

Build `BlogExcerpt` utility:

- Generate excerpt from post content (first 150 chars or frontmatter excerpt)
- Strip Markdown formatting

Build Blog list page (`/blog`):

- Page title "Blog"
- List of all posts in reverse chronological order
- Draft posts excluded from production build

Build Blog post page (`/blog/[slug].astro`):

- Dynamic route for individual posts
- Full Markdown rendering
- SEO meta tags with post title and excerpt
- Syntax highlighting for code blocks (using Shiki or Prism)

Configure Markdown rendering:

- Install Shiki for syntax highlighting
- Configure remark/rehype plugins if needed
- Support images in posts (relative paths)

### Acceptance Criteria

- [ ] Blog list page (`/blog`) displays all posts in reverse chronological order
- [ ] Each post in list shows title, date, and excerpt
- [ ] Clicking post navigates to individual post page (`/blog/[slug]`)
- [ ] Post pages render full Markdown content correctly
- [ ] Code blocks have syntax highlighting (Shiki)
- [ ] Frontmatter parsing handles all required fields (title, date, excerpt, tags)
- [ ] Draft posts are excluded from production build
- [ ] Posts sort correctly by date
- [ ] At least 2 sample blog posts exist for testing
- [ ] Adding new post is as simple as creating new `.md` file in `src/content/blog/`
- [ ] View Transitions work when navigating between blog list and posts
- [ ] SEO meta tags unique per post (title, description from frontmatter)
- [ ] Dark mode renders blog content correctly (code blocks, typography)
- [ ] Mobile layout readable with proper text sizing
- [ ] `bun run build` completes without errors for all blog routes

### Testing Focus

- Blog Module: Test Markdown parsing, frontmatter extraction, date sorting
- Content Collections: Test all posts generate valid routes
- Syntax Highlighting: Test code blocks render with highlighting
- Accessibility: Test heading hierarchy, link text, color contrast

### Static Build Testing

- [ ] All blog routes (`/blog` and `/blog/[slug]` for each post) generate static HTML
- [ ] No 404 errors for any blog post
- [ ] Build completes without warnings
- [ ] `oxlint` passes with no errors
- [ ] `tsgo` type checking passes

---

## Cross-Cutting Concerns (All Phases)

### View Transitions

- Enable globally in `Layout.astro` using `<ClientRouter />` from `astro:transitions`
- Apply `transition:animate` directives to main content areas
- Use `transition:name` for shared elements (like navigation)
- Test smoothness on all navigation paths

### SEO Standards (All Pages)

- Title: `<title>{pageTitle} | DΞKΔ</title>`
- Description: Unique per page, fallback to default
- Open Graph: `og:title`, `og:description`, `og:image` (deka.png), `og:type: website`
- Twitter Cards: `twitter:card: summary`, `twitter:site: @carax`, `twitter:image`
- Canonical URL: `og:url` with full path
- Favicon: Use existing favicon files

### Performance Targets

- Lighthouse Performance: > 90
- First Contentful Paint: < 1.5s
- No render-blocking resources
- Images optimized with Astro Image component
- Minimal JavaScript bundle (leverage Astro islands)

### Accessibility Requirements

- Keyboard navigation works throughout
- Color contrast WCAG AA compliant in both themes
- Semantic HTML (proper heading hierarchy, landmarks)
- Alt text for all images
- Focus indicators visible
- Skip navigation link for screen readers

### GEUT Code Quality Standards (All Phases)

- **TypeScript**: Strict mode, `verbatimModuleSyntax`, path aliases (`@/*`)
- **OXC**: oxlint for linting, oxfmt for formatting
- **Style**: Single quotes, no semicolons, import sorting with `@/` pattern
- **Components**: `data-slot` attributes, CVA variants, `cn()` utility, `asChild` composition
- **Tailwind**: CSS-first configuration with OKLCH colors

### Testing Per Phase

Each phase should include:

1. **Module tests** - Component/unit tests using Bun test runner
2. **Integration tests** - End-to-end flows through new features
3. **Visual regression** - Screenshots in both themes
4. **Accessibility audit** - Automated axe-core scan
5. **Build verification** - `bun run build` passes, all routes generated
6. **Performance check** - Lighthouse scores meet targets
7. **Linting check** - `oxlint` passes with no errors
8. **Type check** - `tsgo` passes without type errors

### Type Checking Strategy

- **Development**: tsgo for fast feedback during development
- **Build**: Bun handles TypeScript compilation during build
- **CI/CD**: Type checking as part of build process, fail on errors

---

## Dependencies to Install

### Phase 1

- Configure OXC tooling (already available via local-components ecosystem)
- Ensure Bun is configured as package manager
- No new runtime dependencies

### Phase 2

- No new dependencies

### Phase 3

- No new dependencies

### Phase 4

- `shiki` - Syntax highlighting for code blocks
- `@astrojs/markdown-remark` - Already included with Astro

---

## File Structure After Implementation

```
/src
  /components
    /ui
      Navigation.tsx
      ThemeToggle.tsx
      ProjectCard.tsx
      BlogList.tsx
      BlogPost.tsx
    Hero.tsx
    AboutContent.tsx
    TalksSection.tsx
  /data
    about.ts
    talks.ts
    experience.ts
    projects.ts
  /content
    /blog
      first-post.md
      second-post.md
  /layouts
    Layout.astro
  /pages
    index.astro (Home)
    projects.astro
    about.astro
    blog.astro
    /blog
      [slug].astro
  /styles
    global.css
/public
  /assets
    deka.png
    deka-draw-512.png
    /talks
      dk_nodeconfco.jpg
      dat_workshop.jpeg
      deka_nodeconf_2.jpg
```

---

## Scripts (package.json)

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro",
    "lint": "oxlint",
    "format": "oxfmt",
    "typecheck": "tsgo",
    "test": "bun test"
  }
}
```

---

## Definition of Done

- All 4 phases complete with acceptance criteria met
- All user stories from PRD addressed
- Site deployable to Cloudflare Pages with `bun run build` output
- All tests passing (Bun test runner)
- Lighthouse scores > 90 across all pages
- OXC linting passes with no errors (`oxlint`)
- TypeScript strict mode passes (`tsgo`)
- Code formatted with `oxfmt`
- Documentation updated (README with build instructions)
- GEUT best practices followed throughout

---

## References

- PRD: docs/PRD.md - Product requirements and user stories
- TDD: docs/TDD.md - Technical design and architecture decisions
- GEUT Fullstack Skill: .agents/skills/fullstack-skill/ - Best practices and patterns
- Astro Documentation: https://docs.astro.build
- local-components: https://github.com/geut/local-components
- Bun Documentation: https://bun.sh/docs
- OXC Tooling: https://oxc.rs

### Routes

- `/` - Home page with minimal hero
- `/projects` - Projects grid page
- `/about` - About page with bio and talks subsection
- `/blog` - Blog list page
- `/blog/[slug]` - Individual blog post pages

### Schema/Data Models

```typescript
// Project
interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  image?: string;
  featured: boolean;
}

// Blog Post Frontmatter
interface BlogFrontmatter {
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  draft?: boolean;
}

// Talk
interface Talk {
  title: string;
  event: string;
  year: number;
  topics: string[];
  link?: string;
  image?: string;
}

// About Data
interface AboutData {
  bio: string;
  background: string;
  currentRole: string;
  experience: Experience[];
  talks: Talk[];
  contact: ContactInfo;
}
```

### Third-Party Service Boundaries

- `local-components` - UI component library (Layout, Card, Button, ThemeToggle)
- Tailwind CSS v4 - Styling with local-components theme tokens
- Astro 5.x - Static site generation with View Transitions API
- React 19 - Interactive components (theme toggle, mobile nav)

### Global Configuration

- View Transitions enabled globally in Layout component for smooth page transitions
- SEO meta tags standardized across all pages
- Dark mode class strategy: `dark` class on `<html>` element

---

## Phase 1: Foundation + Theme + Navigation

**User stories**: #1 (minimal hero), #5 (dark mode), #7 (multi-page nav), #9 (fast static site)

### What to Build

Create the foundational site shell with multi-page navigation and theme system. This is the first tracer bullet that establishes the architecture all other phases will build upon.

Build a `Layout` component that wraps all pages with:

- Global View Transitions configuration (Astro's `<ClientRouter />`)
- Standardized SEO meta tags (title, description, Open Graph, Twitter Cards using existing `deka.png`)
- Theme initialization script to prevent FOUC (Flash of Unstyled Content)
- Navigation component in header with links to Home, Projects, About, Blog
- Mobile hamburger menu with slide-out drawer
- Dark mode toggle button using local-components ThemeToggle
- Footer with copyright and location

Build `Navigation` component:

- Desktop: horizontal link list with active state highlighting
- Mobile: hamburger icon that opens slide-out menu
- Include ThemeToggle in navigation bar (top-right on desktop, inside mobile menu)
- Links: Home (`/`), Projects (`/projects`), About (`/about`), Blog (`/blog`)

Build `ThemeProvider` wrapper:

- Initialize theme from localStorage or system preference on load
- Provide theme context to child components
- Handle theme class toggling on `<html>` element
- Persist theme changes to localStorage

Build Home page (`/`):

- Minimal hero section with DΞKΔ branding
- Geometric layout using local-components Layout and Card
- Brief tagline: "Developer, P2P Enthusiast, Entrepreneur"
- Navigation links as call-to-action buttons

### Acceptance Criteria

- [ ] All four routes (`/`, `/projects`, `/about`, `/blog`) are accessible and render without errors
- [ ] Navigation works on desktop with visible link list
- [ ] Mobile hamburger menu opens/closes smoothly
- [ ] Dark mode toggle switches between light and dark themes
- [ ] Theme preference persists after page reload
- [ ] No FOUC on initial page load (theme applied before render)
- [ ] View Transitions enabled - navigating between pages shows smooth transition
- [ ] SEO meta tags present on all pages (title, description, og:image, twitter:card)
- [ ] `astro build` completes successfully with no errors
- [ ] Lighthouse performance score > 90 for Home page
- [ ] Keyboard navigation works for menu and theme toggle
- [ ] `bun run dev` starts development server at `localhost:4321`

### Testing Focus

- Theme Module: Verify localStorage persistence, system preference detection, FOUC prevention
- Navigation Module: Test mobile menu, active state highlighting, keyboard navigation
- Static Build: Verify all routes generate static HTML, no build errors

---

## Phase 2: About Page with Data Structure

**User stories**: #4 (find talks), #8 (brand identity), #10 (preserve assets)

### What to Build

Migrate existing content from the current site and build the About page with structured data for bio, experience, and talks.

Create data layer:

- `src/data/about.ts` - AboutData object with bio, background, current role
- `src/data/talks.ts` - Array of Talk objects with all conference presentations
- `src/data/experience.ts` - Array of Experience objects (Despegar, LIFIA, Assistant Professor)
- Extract content from `reference/content.md`

Migrate assets:

- Move `/assets/deka.png` → `/public/assets/deka.png` (profile image)
- Move `/assets/dk_nodeconfco.jpg` → `/public/assets/talks/dk_nodeconfco.jpg` (NodeConf Colombia 2019)
- Move `/assets/dat_workshop.jpeg` → `/public/assets/talks/dat_workshop.jpeg` (NodeConf Argentina 2018)
- Move `/assets/deka_nodeconf_2.jpg` → `/public/assets/talks/deka_nodeconf_2.jpg` (NodeConf Argentina 2016)
- Copy favicon files, apple-touch-icon, etc. to `/public/assets/`

Build `AboutContent` component:

- Structured sections: Bio, Background, Current Role, Experience
- Use local-components Card for each section
- Geometric layout with generous whitespace

Build `TalksSection` component:

- Grid layout of talk cards
- Each card: event name, year, talk title, topics (tags), optional photo
- Photos displayed using Astro Image component with optimization
- Links to talk materials/repos where available

Build About page (`/about`):

- Full About content at top
- Talks subsection below
- Contact information section (email: diego at geutstudio . com)
- Social links (Twitter/X, GitHub, GEUT, SHER)

### Acceptance Criteria

- [ ] About page displays complete bio and background information
- [ ] All conference talks are listed (NodeConf Colombia 2019, NodeConf Argentina 2018 & 2016, Node Interactive NA 2016)
- [ ] Talk photos display correctly with proper alt text
- [ ] Contact email clearly visible with anti-spam formatting
- [ ] Social links open in new tabs
- [ ] Data files in `src/data/` are typed with TypeScript interfaces
- [ ] All assets accessible in `/public/assets/`
- [ ] Images use Astro's Image component for optimization
- [ ] Page SEO meta tags include Open Graph image (deka.png)
- [ ] View Transitions work when navigating to/from About page
- [ ] Dark mode renders About page correctly with proper contrast
- [ ] Mobile layout stacks sections vertically

### Testing Focus

- About Module: Verify content renders correctly, images load, responsive layout
- Data Layer: Test TypeScript types, content extraction accuracy
- Accessibility: Test image alt text, color contrast in both themes

---

## Phase 3: Projects Grid

**User stories**: #2 (browse projects)

### What to Build

Create the Projects page with a card grid layout showcasing key work.

Create data layer:

- `src/data/projects.ts` - Array of Project objects
- Include: SHER (P2P live audio platform), GEUT (consultancy), Despegar (components as a service), any other notable work
- Each project has title, description, tags (technologies), links

Build `ProjectCard` component:

- Extend local-components Card with project-specific features
- Display: title, description, technology tags, action buttons
- Tags rendered as small pills/badges
- Links open externally (demoUrl, repoUrl)
- Hover effect with subtle geometric accent

Build `ProjectsGrid` component:

- Responsive grid: 1 column mobile, 2 columns tablet, 3 columns desktop
- Consistent card heights using CSS Grid
- Gap spacing following geometric aesthetic

Build Projects page (`/projects`):

- Page title and brief intro
- Featured projects first (if marked featured: true)
- Full grid of all projects below
- Grid layout adapts to screen size

### Acceptance Criteria

- [ ] Projects page displays grid of project cards
- [ ] Each card shows title, description, and technology tags
- [ ] Cards link to external demo/repo URLs when provided
- [ ] Grid is responsive: 1 col (mobile) → 2 col (tablet) → 3 col (desktop)
- [ ] Project data typed with TypeScript Project interface
- [ ] All projects from PRD are included (SHER, GEUT, Despegar)
- [ ] Cards have consistent hover states with visual feedback
- [ ] Technology tags are visually distinct (pills/badges)
- [ ] Page SEO meta tags present
- [ ] View Transitions work when navigating to/from Projects
- [ ] Dark mode renders project cards correctly
- [ ] Mobile touch targets are adequate size (min 44px)

### Testing Focus

- ProjectCard Module: Test grid responsiveness, hover states, external links
- Static Build: Verify all project data loads at build time
- Accessibility: Test tag contrast, link accessibility

---

## Phase 4: Blog System

**User stories**: #3 (read blog), #6 (add via Markdown)

### What to Build

Implement full blog functionality with Markdown-based posts.

Create content structure:

- `src/content/blog/` directory for Markdown posts
- `src/content/config.ts` - Content collections configuration
- Create 2-3 sample blog posts with frontmatter

Build content utilities:

- `getAllPosts()` - Fetch all Markdown files, sort by date descending
- `getPostBySlug(slug)` - Fetch specific post by slug
- `parseFrontmatter()` - Extract frontmatter with validation

Build `BlogList` component:

- Simple chronological list (not grid)
- Each item: title, date (formatted), excerpt
- Click navigates to individual post page

Build `BlogPost` component:

- Full post content rendered from Markdown
- Title and date at top
- Optional tags display
- Back link to blog list

Build `BlogExcerpt` utility:

- Generate excerpt from post content (first 150 chars or frontmatter excerpt)
- Strip Markdown formatting

Build Blog list page (`/blog`):

- Page title "Blog"
- List of all posts in reverse chronological order
- Draft posts excluded from production build

Build Blog post page (`/blog/[slug].astro`):

- Dynamic route for individual posts
- Full Markdown rendering
- SEO meta tags with post title and excerpt
- Syntax highlighting for code blocks (using Shiki or Prism)

Configure Markdown rendering:

- Install Shiki for syntax highlighting
- Configure remark/rehype plugins if needed
- Support images in posts (relative paths)

### Acceptance Criteria

- [ ] Blog list page (`/blog`) displays all posts in reverse chronological order
- [ ] Each post in list shows title, date, and excerpt
- [ ] Clicking post navigates to individual post page (`/blog/[slug]`)
- [ ] Post pages render full Markdown content correctly
- [ ] Code blocks have syntax highlighting (Shiki)
- [ ] Frontmatter parsing handles all required fields (title, date, excerpt, tags)
- [ ] Draft posts are excluded from production build
- [ ] Posts sort correctly by date
- [ ] At least 2 sample blog posts exist for testing
- [ ] Adding new post is as simple as creating new `.md` file in `src/content/blog/`
- [ ] View Transitions work when navigating between blog list and posts
- [ ] SEO meta tags unique per post (title, description from frontmatter)
- [ ] Dark mode renders blog content correctly (code blocks, typography)
- [ ] Mobile layout readable with proper text sizing

### Testing Focus

- Blog Module: Test Markdown parsing, frontmatter extraction, date sorting
- Content Collections: Test all posts generate valid routes
- Syntax Highlighting: Test code blocks render with highlighting
- Accessibility: Test heading hierarchy, link text, color contrast

### Static Build Testing

- [ ] All blog routes (`/blog` and `/blog/[slug]` for each post) generate static HTML
- [ ] No 404 errors for any blog post
- [ ] Build completes without warnings

---

## Cross-Cutting Concerns (All Phases)

### View Transitions

- Enable globally in `Layout.astro` using `<ClientRouter />` from `astro:transitions`
- Apply `transition:animate` directives to main content areas
- Use `transition:name` for shared elements (like navigation)
- Test smoothness on all navigation paths

### SEO Standards (All Pages)

- Title: `<title>{pageTitle} | DΞKΔ</title>`
- Description: Unique per page, fallback to default
- Open Graph: `og:title`, `og:description`, `og:image` (deka.png), `og:type: website`
- Twitter Cards: `twitter:card: summary`, `twitter:site: @carax`, `twitter:image`
- Canonical URL: `og:url` with full path
- Favicon: Use existing favicon files

### Performance Targets

- Lighthouse Performance: > 90
- First Contentful Paint: < 1.5s
- No render-blocking resources
- Images optimized with Astro Image component
- Minimal JavaScript bundle (leverage Astro islands)

### Accessibility Requirements

- Keyboard navigation works throughout
- Color contrast WCAG AA compliant in both themes
- Semantic HTML (proper heading hierarchy, landmarks)
- Alt text for all images
- Focus indicators visible
- Skip navigation link for screen readers

### Testing Per Phase

Each phase should include:

1. **Module tests** - Component/unit tests for new modules
2. **Integration tests** - End-to-end flows through new features
3. **Visual regression** - Screenshots in both themes
4. **Accessibility audit** - Automated axe-core scan
5. **Build verification** - `astro build` passes, all routes generated
6. **Performance check** - Lighthouse scores meet targets

---

## Dependencies to Install

### Phase 1

- No new dependencies (use existing astro, react, local-components, tailwindcss)

### Phase 2

- No new dependencies

### Phase 3

- No new dependencies

### Phase 4

- `shiki` - Syntax highlighting for code blocks
- `@astrojs/markdown-remark` - Already included with Astro

---

## File Structure After Implementation

```
/src
  /components
    /ui
      Navigation.tsx
      ThemeToggle.tsx
      ProjectCard.tsx
      BlogList.tsx
      BlogPost.tsx
    Hero.tsx
    AboutContent.tsx
    TalksSection.tsx
  /data
    about.ts
    talks.ts
    experience.ts
    projects.ts
  /content
    /blog
      first-post.md
      second-post.md
  /layouts
    Layout.astro
  /pages
    index.astro (Home)
    projects.astro
    about.astro
    blog.astro
    /blog
      [slug].astro
  /styles
    global.css
/public
  /assets
    deka.png
    deka-draw-512.png
    /talks
      dk_nodeconfco.jpg
      dat_workshop.jpeg
      deka_nodeconf_2.jpg
```

---

## Definition of Done

- All 4 phases complete with acceptance criteria met
- All user stories from PRD addressed
- Site deployable to GitHub Pages with `astro build` output
- All tests passing
- Lighthouse scores > 90 across all pages
- Documentation updated (README with build instructions)
