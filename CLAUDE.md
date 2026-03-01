# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page and documentation site for **Narrative Protocol** — an AI-native world state and event engine for games. Built with Next.js 16, React 19, TypeScript, and Fumadocs MDX for documentation.

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build (includes Fumadocs MDX compilation)
npm start        # Start production server
npm run lint     # ESLint (Next.js core web vitals + TypeScript)
```

## Architecture

### Key Directories

- `app/` — Next.js App Router pages and API routes
  - `app/page.tsx` — Main landing page (hero, features, use cases, CTA)
  - `app/docs/` — Documentation pages with dynamic `[[...slug]]` routing
  - `app/api/search/` — Fumadocs full-text search endpoint
- `content/docs/` — MDX documentation files organized into Introduction, Concepts, and API Reference sections. Navigation structure defined in `meta.json` files.
- `components/` — React components; `components/ui/` contains shadcn/ui primitives
- `lib/source.ts` — Fumadocs source loader configuration
- `.source/` — Auto-generated Fumadocs collection registries (browser.ts, server.ts). These are generated from `source.config.ts` during build.

### Documentation System (Fumadocs)

Documentation lives in `content/docs/` as MDX files. To add a new doc page:
1. Create an `.mdx` file in the appropriate subdirectory
2. Add the page slug to the relevant `meta.json` for navigation ordering
3. The page is automatically available via the `[[...slug]]` catch-all route

Source configuration is in `source.config.ts`. The import alias `fumadocs-mdx:collections/*` maps to `.source/`.

### Styling

- Dark theme only (enforced, no light mode)
- Custom color palette: Void Black background (#0B0D10), Ritual Amber primary (#E0A94F), Obsidian borders (#1F2430)
- Tailwind CSS 4 with shadcn/ui "new-york" style preset
- `cn()` utility in `lib/utils.ts` (clsx + tailwind-merge)

### Path Aliases

- `@/*` → project root
- `fumadocs-mdx:collections/*` → `.source/`

## Environment Variables

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — Google Analytics (optional)

## Commit Convention

Commits follow conventional format: `docs:`, `fix:`, `refactor:`, `chore:`, `update:`
