# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Bis Repetita** — premium boxing studio website for Nicolas de Boccard in Geneva, Switzerland. French-language site (`fr_CH`) targeting local SEO for boxing/coaching services. Branche `refonte-2026` : monde blanc / encre / photo N&B, Inter seule — le système visuel est dans `DESIGN.md` (fait foi), le produit dans `PRODUCT.md`.

## Commands

```bash
npm run dev          # Dev server (localhost:4321)
npm run build        # Production build → dist/
npm run preview      # Serve production build
npm run check        # Astro diagnostics
npm run typecheck    # TypeScript type check (tsc --noEmit)
npm run lint         # ESLint with auto-fix
npm run lint:check   # ESLint check only
npm run format       # Prettier format all
npm run fix          # Format + lint combined
npm run test         # Vitest
```

## Tech Stack

- **Astro 5** (static-first, `trailingSlash: "never"`)
- **Tailwind CSS v4** via Vite plugin (`@tailwindcss/vite`) — no `tailwind.config.js`, all config in `src/styles/global.css` using `@theme` directive
- **GSAP 3 + ScrollTrigger** for animations
- **TypeScript strict** (extends `astro/tsconfigs/strict`)
- **Vercel** deployment (prod + previews par branche) ; `api/contact.js` = fonction Vercel. `netlify.toml` est un reste : Vercel l'ignore (redirects et en-têtes inactifs)
- **Plausible Analytics** (privacy-first, loaded in BaseLayout)

## Site Map

```
bisrepetita.ch/
├── /                                → Home (hero, stats, services overview, FAQ, CTA)
├── /studio                          → Présentation du lieu, équipements, localisation
├── /tarifs                          → Grille tarifaire toutes formules
├── /contact                         → Formulaire de contact + carte
├── /cgv                             → Conditions générales de vente
├── /cours-de-boxe-geneve            → Pillar page SEO informationnelle (guide débutant, profils, FAQ)
├── /services/                       → Index des programmes (grid ServiceCard)
│   ├── /services/coaching-prive     → Hub coaching privé (comparatif formats)
│   ├── /services/coaching-solo      → Coaching individuel 1-on-1
│   ├── /services/coaching-duo-trio  → Coaching à 2 ou 3
│   ├── /services/small-group-training → Petit groupe (6 max)
│   ├── /services/coaching-boxe-domicile → Coaching à domicile
│   ├── /services/round-by-round     → Cours collectifs (8 max, 2 coachs)
│   ├── /services/corporate          → Programmes entreprise + team building
│   └── /services/boxe-femme         → Landing page dédiée femmes
├── /blog/                           → Liste des articles (pagination)
│   ├── /blog/[slug]                 → Article individuel (MDX)
│   ├── /blog/category/[category]    → Articles filtrés par catégorie
│   └── /blog/tags/[tag]             → Articles filtrés par tag
├── /styleguide                      → Guide visuel interne (dev only)
└── /404                             → Page d'erreur
```

### Pages pillar SEO (maillage interne)

- `/cours-de-boxe-geneve` — hub informationnel pour le cluster Persona 1 (débutants, femmes, reconversion, compétiteur). Les articles blog P1 pointent vers cette page.
- `/services/boxe-femme` — landing service ciblant "boxe femme Genève". Les articles blog cluster B pointent ici.
- `/services/corporate` — contient une section Team Building ciblant "team building boxe Genève". Les articles blog Corporate pointent ici.

## Architecture

### Layout Flow

`BaseLayout.astro` → wraps every page. Loads Inter (Google Fonts, axe opsz), initializes GSAP, renders Navbar (barre blanche + panneau « Cours ») + Footer (logo pleine largeur). All pages pass a `metadata` object for SEO.

### Key Directories

- `src/config/site.ts` — centralized site config (contact info, nav links, social links, map embed, footer links)
- `src/types/types.d.ts` — all TypeScript interfaces for components (Widget, HeroProps, FeaturesProps, etc.)
- `src/styles/global.css` — Tailwind v4 `@theme` + tokens N&B, classes `.wrap .section .t-* .btn .link-line .nb` (anciennes utilitaires or/verre neutralisées pour compat)
- `src/utils/gsap.ts` — GSAP initialization with ScrollTrigger, defines all animation types
- `src/content.config.ts` — blog content collection (glob `src/content/blog/*.{md,mdx}`)
- `docs/calendrier-editorial-6-mois.md` — calendrier éditorial 80 articles sur 6 mois (avr–sept 2026)

### Component Pattern

Pages compose **widgets** (`src/components/widgets/`) with **UI primitives** (`src/components/ui/`):

- **Widgets** = full sections (Hero, Stats, Features, Testimonials, FAQ, PricingTable, CTABanner, LocationMap, etc.). Most accept props matching interfaces from `types.d.ts` and are wrapped in `WidgetWrapper.astro` for consistent spacing.
- **UI primitives** = Button, Card, Container, SectionTitle, Headline, Badge, Form, Tags, Pagination.
- **SEO components** (`src/components/seo/`) = `Seo.astro` (meta/OG tags), `Schema.astro` (JSON-LD supporting: WebSite, BlogPosting, SportsActivityLocation, Service, Person, FAQPage).

### Design & animation

Voir `DESIGN.md` (tokens, typo, composants, mouvement). GSAP + ScrollTrigger dans `gsap.matchMedia()` avec `prefers-reduced-motion` (`src/utils/gsap.ts`) : `data-split` (titres), `data-photo-reveal`, `data-parallax`, `data-clip-grow`, `data-follow`, `.gsap-reveal`, `.gsap-stagger-cards`. Références et règles de refonte : `design/references/refs.md`, `docs/project/rebranding-2026-10.md`.

Garde-fou SEO : `node scripts/seo-snapshot.mjs dist > design/seo-after.json && node scripts/seo-diff.mjs design/seo-before.json design/seo-after.json`.

### Content & SEO

- Blog posts in `src/content/blog/` as Markdown/MDX with frontmatter: title, description, pubDate, author, image?, tags?, category?
- Schema.org structured data per page type via `<Schema type="..." data={...} />`
- Site URL: `https://bisrepetita.ch`
- Redirect `/about` → `/studio` déclaré seulement dans `netlify.toml`, donc inactif sur Vercel (404 en prod)

## Conventions

- All content and UI text in **French**
- Icon sets: `lucide` and `tabler` via `astro-icon` (usage: `<Icon name="lucide:arrow-right" />`)
- Prettier: semicolons on, trailing commas all
- ESLint: Astro + TypeScript + jsx-a11y plugins; unused vars warned (prefix `_` to ignore)
- Image assets in `src/assets/` (Astro optimizes them); public static files in `public/`
- No path aliases configured — use relative imports
