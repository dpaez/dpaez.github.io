# PRD: New Portfolio Site with Blog

## Problem Statement

The current portfolio site (dpaez.github.io) is minimal and lacks content depth. It only displays basic identity information but doesn't effectively showcase professional projects, provide detailed background information, or offer a platform for sharing technical insights. The user needs a modern, content-rich portfolio that communicates expertise as a developer, entrepreneur, and P2P enthusiast while providing a clean blog for technical writing. The site should adopt a Technical Geometry / Sci-Fi minimal design aesthetic matching the local-components library style.

## Solution

Build a new static portfolio site using Astro and React with multi-page navigation. The design will follow a Technical Geometry / Sci-Fi minimal aesthetic leveraging local-components' design system.

### Pages & Structure

1. **Home Page**: Minimal hero with DΞKΔ brand identity, brief tagline, and navigation to main sections. Clean geometric layout with sci-fi minimal styling.

2. **Projects Page**: Grid layout showcasing key projects as cards. Each card includes title, description, tags (technologies), and links to live demos or repositories. Projects include SHER (P2P live audio platform), GEUT consultancy work, and notable past work.

3. **About Page**: Comprehensive professional profile including:
   - Background (Tierra del Fuego, UNLP Computer Science)
   - Current role (co-founder GEUT and SHER)
   - Career history (Despegar, LIFIA, Assistant Professor)
   - Talks subsection with conference presentations (NodeConf Colombia 2019, NodeConf Argentina 2018 & 2016, Node Interactive NA 2016)
   - Photos from talks preserved and displayed

4. **Blog Page**: Simple chronological list of posts. Each post card shows title, date, and brief excerpt. Individual post pages for full content. Markdown-based with frontmatter support.

5. **Social/Contact**: Integrated throughout with clear contact info and links to profiles (Twitter/X, GitHub, GEUT, SHER).

### Design System

- **Style**: Technical Geometry / Sci-Fi minimal following local-components design language
- **Colors**: Use local-components default theme palette
- **Typography**: Geometric, clean sans-serif maintaining technical aesthetic
- **Dark Mode**: Toggle switch enabled using local-components theme utilities with persistence via localStorage
- **Layout**: Generous whitespace, grid-based, geometric accents

## User Stories

1. As a visitor, I want to see a clean minimal homepage that immediately communicates who DEKA is, so that I can quickly understand the professional identity.

2. As a potential client, I want to browse projects in a grid layout with clear descriptions and tech tags, so that I can evaluate expertise at a glance.

3. As a fellow developer, I want to read blog posts in a simple chronological list, so that I can follow technical insights easily.

4. As a conference organizer, I want to find talks and presentation history within the About page, so that I can assess speaking experience.

5. As a visitor, I want to toggle between light and dark modes, so that I can view the site comfortably in any lighting condition.

6. As the site owner, I want to add new blog posts via Markdown files, so that I can publish content without technical complexity.

7. As a mobile user, I want the multi-page navigation to work smoothly on all devices, so that I can browse from anywhere.

8. As the site owner, I want to maintain the DΞKΔ brand identity with geometric styling, so that the site feels cohesive with the technical aesthetic.

9. As a visitor, I want the site to load fast as a static site, so that I have a smooth browsing experience.

10. As the site owner, I want existing talk photos and assets preserved, so that historical conference presence is maintained.

## Implementation Decisions

### Architecture

- **Framework**: Astro 5.x for static multi-page site generation
- **UI Components**: React 19 for interactive components, leveraging `local-components` library (v0.1.0-alpha.4)
- **Styling**: Tailwind CSS 4.x with local-components theme configuration
- **Theming**: local-components theme utilities with dark mode toggle component
- **Content**: Markdown for blog posts with frontmatter (title, date, tags, excerpt)
- **Routing**: Astro file-based routing: `/`, `/projects`, `/about`, `/blog`, `/blog/[slug]`

### Modules

1. **Navigation Module**: Deep module for site navigation.
   - Interface: `Navigation` component with mobile hamburger menu and desktop links
   - Props: links array, current path
   - Encapsulates: Mobile/desktop responsive behavior, active state highlighting

2. **Theme Module**: Deep module for dark/light mode management.
   - Interface: `ThemeProvider` wrapper, `ThemeToggle` component from local-components
   - Encapsulates: localStorage persistence, system preference detection, CSS class toggling
   - Dependencies: local-components theme utilities

3. **Hero Module**: Deep module for homepage hero section.
   - Interface: `Hero` component
   - Props: title, tagline, ctaLinks
   - Encapsulates: Geometric layout, animations, responsive scaling

4. **ProjectCard Module**: Deep module for project display.
   - Interface: `ProjectCard` component (extends local-components Card)
   - Props: title, description, tags[], demoUrl, repoUrl, image
   - Encapsulates: Grid layout adaptation, hover effects, tag rendering

5. **Blog Module**: Deep module for blog functionality.
   - Interface: `BlogList`, `BlogPost`, `BlogExcerpt` components
   - Functions: `getAllPosts()`, `getPostBySlug(slug)`
   - Encapsulates: Markdown parsing, frontmatter extraction, chronological sorting, excerpt generation

6. **About Module**: Deep module for about page content.
   - Interface: `AboutContent`, `TalksSection` components
   - Encapsulates: Content layout, talks subsection, image galleries

7. **Layout Module**: Deep module for page structure.
   - Interface: `Layout.astro` base wrapper
   - Props: title, description, ogImage, bodyClasses
   - Encapsulates: SEO meta tags, theme initialization, global styles

### Data Structure

```typescript
// Projects data
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

// Blog post frontmatter
interface BlogFrontmatter {
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  draft?: boolean;
}

// Talks data
interface Talk {
  title: string;
  event: string;
  year: number;
  topics: string[];
  link?: string;
  image?: string;
}

// About content
interface AboutData {
  bio: string;
  background: string;
  currentRole: string;
  experience: Experience[];
  talks: Talk[];
  contact: ContactInfo;
}
```

### Data Migration

- Move existing content from `reference/content.md` to structured data files
- Preserve all assets from `/assets/` to `/public/assets/`
- Convert talks data from markdown sections to structured Talk objects
- Maintain conference photos (`dk_nodeconfco.jpg`, `dat_workshop.jpeg`, `deka_nodeconf_2.jpg`)

### Design Implementation

- **Technical Geometry aesthetic**: Sharp edges, grid layouts, minimal decoration
- **Sci-fi minimal**: Clean lines, geometric shapes, purposeful whitespace
- **Dark mode**: Use local-components dark theme palette with toggle
- **Responsive**: Mobile-first with hamburger navigation on small screens
- **Typography**: Technical/monospace feel for code/tech elements

## Testing Decisions

1. **Theme Module Testing**:
   - Test theme toggle switches between light/dark correctly
   - Test localStorage persistence across page reloads
   - Test system preference detection on first visit
   - Test no FOUC (flash of unstyled content) on theme load

2. **Navigation Module Testing**:
   - Test mobile menu opens/closes correctly
   - Test active page highlighting
   - Test keyboard navigation accessibility

3. **Blog Module Testing**:
   - Test all Markdown files generate valid routes
   - Test frontmatter parsing handles missing fields gracefully
   - Test posts sort correctly by date
   - Test draft posts are excluded from production build

4. **ProjectCard Module Testing**:
   - Test grid layout responsiveness at various viewports
   - Test hover states and interactions
   - Test fallback when images fail to load

5. **Static Build Testing**:
   - Test `astro build` completes without errors
   - Test all routes are generated as static HTML
   - Test Lighthouse performance score > 90
   - Test no broken internal links

6. **Accessibility Testing**:
   - Test keyboard navigation across all pages
   - Test color contrast in both light and dark modes
   - Test semantic HTML structure
   - Test screen reader compatibility

## Out of Scope

- Search functionality for blog posts
- Comments system on blog posts
- Newsletter/email subscription
- Analytics integration
- Multi-language/internationalization
- Real-time features
- E-commerce functionality
- User authentication
- Backend API
- RSS feed generation (can be added later)
- Tag filtering on blog (simple list only for MVP)
- Project detail pages (cards link externally)
- Speaking page separate from About
- Complex animations (keep minimal geometric)

## Further Notes

- The DΞKΔ brand identity (Greek delta characters) should be preserved and integrated into the geometric design
- Site must remain deployable to GitHub Pages with zero configuration
- All existing talk photos and profile images should be preserved and displayed
- The local-components library provides the foundation for the Technical Geometry aesthetic - leverage its existing components and design tokens
- Blog posts should support code syntax highlighting using a lightweight library like Shiki
- Consider implementing view transitions between pages for smooth navigation (Astro 5 View Transitions API)
- SEO is important: implement proper meta tags, Open Graph, Twitter Cards using existing `deka.png` as default image
- Keep the design intentionally minimal - the geometric sci-fi aesthetic works best with restraint
- The theme toggle should be prominent but not intrusive - likely in the navigation bar
- Inspiration from roicort.github.io/dasein should inform the layout and navigation patterns, not copied exactly
