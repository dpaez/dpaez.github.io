# Technical Design Document: DΞKΔ Portfolio Site

> Source PRD: docs/PRD.md

## Overview

This document describes the technical implementation of the DΞKΔ portfolio site - a static, multi-page website featuring a blog, projects showcase, and about section. The site follows a Technical Geometry / Sci-Fi minimal design aesthetic using the local-components UI library.

## Goals

- Build a fast, static portfolio site deployable to Cloudflare Pages
- Implement a clean blog system using Markdown with syntax highlighting
- Maintain consistent design using local-components design system
- Enable dark mode toggle with persistence
- Follow GEUT fullstack best practices for code quality and maintainability

## Background/Context

The project replaces an existing minimal portfolio site (dpaez.github.io) with a more comprehensive, content-rich portfolio. The current site uses basic Astro with minimal styling. This redesign adopts modern tooling and follows GEUT's established patterns for React/Tailwind/Astro projects.

## Technology Stack

### Core Framework

- **Astro 5.x** - Static site generation with View Transitions API
- **React 19** - Interactive components (navigation, theme toggle)
- **TypeScript** - Full type safety with strict mode

### Styling & UI

- **Tailwind CSS 4.x** - CSS-first configuration with OKLCH colors
- **local-components 0.1.0-alpha.4** - UI component library (Layout, Card, Button, ThemeToggle)

### Build & Development Tools

- **Bun** - Runtime, package manager, and bundler
- **OXC Tooling** - oxlint (linting) and oxfmt (formatting)
- **tsgo** - Type checking

### Content

- **Markdown** - Blog posts with frontmatter
- **Shiki** - Syntax highlighting for code blocks

### Deployment

- **Cloudflare Pages** - Static hosting (user-managed deployment)

## Requirements

### Functional Requirements

1. Multi-page navigation (Home, Projects, About, Blog)
2. Dark mode toggle with localStorage persistence
3. Mobile-responsive hamburger menu
4. Blog with Markdown support and frontmatter
5. View Transitions between pages
6. SEO meta tags (Open Graph, Twitter Cards)

### Non-Functional Requirements

1. **Performance**: Lighthouse score > 90, FCP < 1.5s
2. **Accessibility**: WCAG AA compliance, keyboard navigation
3. **Maintainability**: Type-safe code, consistent patterns
4. **Build Speed**: Fast bundling with Bun
5. **Code Quality**: Linting with oxlint, formatting with oxfmt

## High-Level Design/Architecture

```
/src
  /components
    /ui           # Reusable UI components
      Navigation.tsx      # Site navigation + mobile menu
      ThemeToggle.tsx     # Dark/light mode toggle
    Hero.tsx              # Homepage hero section
  /data                   # Static data files
    about.ts
    talks.ts
    projects.ts
  /content
    /blog                 # Markdown blog posts
  /layouts
    Layout.astro          # Base page layout
  /pages
    index.astro           # Home page
    projects.astro        # Projects showcase
    about.astro           # About + talks
    blog.astro            # Blog list
    /blog
      [slug].astro        # Individual blog posts
  /styles
    global.css            # Tailwind + theme config

/public
  /assets                 # Static assets (images, favicons)
```

### Routing Structure

| Route          | Page      | Description                     |
| -------------- | --------- | ------------------------------- |
| `/`            | Home      | Minimal hero with DΞKΔ branding |
| `/projects`    | Projects  | Grid of project cards           |
| `/about`       | About     | Bio, experience, talks          |
| `/blog`        | Blog List | Chronological post list         |
| `/blog/[slug]` | Blog Post | Individual Markdown post        |

## Data Design

### Blog Post Schema

```typescript
interface BlogFrontmatter {
  title: string;
  date: string; // ISO 8601
  tags: string[];
  excerpt: string;
  draft?: boolean;
}
```

### Project Schema

```typescript
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
```

### Talk Schema

```typescript
interface Talk {
  title: string;
  event: string;
  year: number;
  topics: string[];
  link?: string;
  image?: string;
}
```

## API Design

No backend API. Content loaded via:

- **Astro Content Collections** - Type-safe Markdown loading
- **Static imports** - Data files (TypeScript/JSON)
- **Astro Image** - Optimized image loading

## Security Considerations

1. **XSS Prevention**: Astro's automatic HTML escaping
2. **External Links**: All external links use `rel="noopener noreferrer"`
3. **No User Input**: Static site with no forms or user data
4. **Dependency Management**: Regular updates via Bun

## Scalability/Performance

1. **Static Generation**: All pages pre-built at build time
2. **Partial Hydration**: React components only where needed (`client:load`)
3. **Image Optimization**: Astro Image component with lazy loading
4. **Minimal JavaScript**: Only essential interactivity (nav, theme)
5. **Bundle Size**: Local-components tree-shaking

## Testing Strategy

### Unit Testing

- **Bun test runner** - Native TypeScript support, faster than Jest/Vitest
- Test components: ThemeToggle, Navigation
- Test utilities: Blog data fetching

### Integration Testing

- Build verification: `astro build` completes without errors
- Route generation: All routes produce static HTML
- Lighthouse CI: Performance budgets

### Accessibility Testing

- Keyboard navigation flow
- axe-core automated scans
- Color contrast validation (both themes)

## Deployment Plan

1. **Build Command**: `bun run build`
2. **Output Directory**: `./dist/`
3. **Platform**: Cloudflare Pages (user-managed)
4. **No Server Configuration**: Static files only

## Monitoring/Observability

Not applicable for static site. User will monitor via Cloudflare analytics.

## Out of Scope

- Backend API or server-side logic
- Database (content is Markdown + static data)
- User authentication
- CMS integration
- Search functionality
- Comments system
- Newsletter subscription
- Analytics (handled by Cloudflare)
- RSS feed (can be added later)

## Alternatives Considered

### Framework: Next.js vs Astro

- **Next.js**: Excellent for dynamic apps, but overkill for static portfolio
- **Astro**: Purpose-built for static sites, better performance, View Transitions API
- **Decision**: Astro for optimal static site performance

### Styling: CSS Modules vs Tailwind

- **CSS Modules**: Scoped styles, but requires more boilerplate
- **Tailwind**: Utility-first, rapid development, matches local-components
- **Decision**: Tailwind CSS v4 with CSS-first config per GEUT best practices

### Runtime: Node.js vs Bun

- **Node.js**: Mature ecosystem, wider compatibility
- **Bun**: Fast bundling, native TypeScript, integrated test runner
- **Decision**: Bun for speed and modern tooling alignment

### Type Checking: tsc vs tsgo

- **tsc**: Official TypeScript compiler, slower
- **tsgo**: Go-based, significantly faster type checking
- **Decision**: tsgo for development speed

### Linting: ESLint/Prettier vs OXC

- **ESLint/Prettier**: Industry standard, slower
- **OXC**: Rust-based, 50-100x faster, experimental import sorting
- **Decision**: OXC (oxlint + oxfmt) per GEUT tooling standards

## GEUT Best Practices Applied

### TypeScript Configuration

- Strict mode enabled
- `verbatimModuleSyntax` for clean imports
- Path aliases (`@/*`) for internal imports
- Bun types included

### Component Patterns

- `data-slot` attributes for debugging
- CVA (class-variance-authority) for component variants
- `cn()` utility for class merging
- `asChild` composition pattern

### Code Quality

- OXC tooling for linting and formatting
- Single quotes, no semicolons (GEUT style)
- Import sorting with internal pattern (`@/`)

### Testing

- Bun test runner for native TypeScript support
- Factory patterns for test data

## Type Checking Strategy

### Development

- **tsgo** for fast feedback during development
- IDE integration (VS Code) for real-time type checking

### Build

- **Bun** handles TypeScript compilation during build
- No separate tsc step needed

### CI/CD

- Type checking as part of build process
- Fail build on type errors

## References

- PRD: docs/PRD.md
- Implementation Plan: plans/portfolio-site.md
- GEUT Fullstack Skill: .agents/skills/fullstack-skill/
- Astro Documentation: https://docs.astro.build
- local-components: https://github.com/geut/local-components
- Bun Documentation: https://bun.sh/docs
- OXC Tooling: https://oxc.rs

## Revision History

| Date       | Version | Changes              |
| ---------- | ------- | -------------------- |
| 2026-03-20 | 1.0     | Initial TDD document |
