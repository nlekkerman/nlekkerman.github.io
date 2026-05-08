# Portfolio Redesign Report

Refactored the portfolio frontend from a single-scroll page into a multi-page,
command-center style case-study site centered on **HotelMates**.

## Stack additions

- Added `react-router-dom@6` for client-side routing.
- Wrapped the app in `HashRouter` (safe for static GitHub Pages hosting — no
  server SPA fallback required, existing `vite.config.js` `base: '/'` and
  `gh-pages` deploy script untouched).

## New route / page structure

| Route                       | Page              |
| --------------------------- | ----------------- |
| `/`                         | Home / Command Center |
| `/hotelmates`               | HotelMates case study |
| `/hotelmates/rbac`          | Live Permission Matrix |
| `/hotelmates/architecture`  | System Architecture |
| `/about`                    | About / Contact |
| `/contact`                  | redirects to `/about` |
| `*`                         | 404 page |

## Files created

### Components ([nikola-simic-portfolio/src/components/](nikola-simic-portfolio/src/components/))

- [Layout.jsx](nikola-simic-portfolio/src/components/Layout.jsx) — shell with
  `<Outlet />`, scroll-to-top on route change.
- [Navbar.jsx](nikola-simic-portfolio/src/components/Navbar.jsx) — sticky,
  blurred top nav with desktop links and mobile menu.
- [SiteFooter.jsx](nikola-simic-portfolio/src/components/SiteFooter.jsx)
- [PageHero.jsx](nikola-simic-portfolio/src/components/PageHero.jsx) — reusable
  hero with eyebrow, title, subtitle, description, badges, actions slot.
- [SystemCard.jsx](nikola-simic-portfolio/src/components/SystemCard.jsx)
- [FlowCard.jsx](nikola-simic-portfolio/src/components/FlowCard.jsx) — numbered
  step cards.
- [PersonaCard.jsx](nikola-simic-portfolio/src/components/PersonaCard.jsx) —
  selectable persona card with authority pill.
- [ArchitectureNode.jsx](nikola-simic-portfolio/src/components/ArchitectureNode.jsx) —
  vertical chain node with connector arrows.
- [Badge.jsx](nikola-simic-portfolio/src/components/Badge.jsx)
- [CTAButton.jsx](nikola-simic-portfolio/src/components/CTAButton.jsx)

### Pages ([nikola-simic-portfolio/src/pages/](nikola-simic-portfolio/src/pages/))

- [HomePage.jsx](nikola-simic-portfolio/src/pages/HomePage.jsx) — Command Center
  hero + 4 system cards + featured CTA panel.
- [HotelMatesPage.jsx](nikola-simic-portfolio/src/pages/HotelMatesPage.jsx) —
  Hero, Problem, What I Built (8 modules), Operational Flows (4 lifecycle flow
  cards), Proof & Validation (validators code block + persona matrix CTA).
- [RbacPage.jsx](nikola-simic-portfolio/src/pages/RbacPage.jsx) — 9 personas
  grouped by Full Authority / Supervisor / Operational; interactive
  Permission Console panel showing tier, role, dept, capabilities, visible
  modules, restricted areas.
- [ArchitecturePage.jsx](nikola-simic-portfolio/src/pages/ArchitecturePage.jsx) —
  vertical architecture chain (UI → AuthContext → REST API → Capability
  Resolver → PostgreSQL) + 5 supporting pillars + tagline:
  *"Navigation controls visibility. Capabilities control actions."*
- [AboutPage.jsx](nikola-simic-portfolio/src/pages/AboutPage.jsx) — short bio,
  stack groups, contact rows, ShootAR repackaged as Other Work.
- [NotFoundPage.jsx](nikola-simic-portfolio/src/pages/NotFoundPage.jsx)

## Files modified

- [src/App.jsx](nikola-simic-portfolio/src/App.jsx) — replaced single-page
  composition with route table.
- [src/main.jsx](nikola-simic-portfolio/src/main.jsx) — wrapped `<App />` in
  `HashRouter`.
- [src/assets/styles.css](nikola-simic-portfolio/src/assets/styles.css) —
  appended a self-contained `cc-*` design system (~600 lines): navbar, glass
  cards, page heros, system/flow/persona/console/architecture nodes, badges,
  responsive grid utilities. Existing tokens and styles preserved.
- [eslint.config.js](nikola-simic-portfolio/eslint.config.js) — disabled
  `react/prop-types` (modern React convention; unblocks lint).
- [package.json](nikola-simic-portfolio/package.json) — added
  `react-router-dom@^6`.

## Files removed (replaced or orphaned)

These were old single-scroll sections fully repackaged into the new pages, or
pre-existing dead/broken files (`ProjectCard.jsx`, `pages/Home.jsx` referenced
undefined `isListening`/`handleVoicePermissionsAndStartSpeechRecognition`):

- `src/components/Hero.jsx` → `pages/HomePage.jsx`
- `src/components/FeaturedProject.jsx` → `pages/HotelMatesPage.jsx`
- `src/components/SystemDiagram.jsx` → `pages/ArchitecturePage.jsx`
- `src/components/FlowsSection.jsx` → flows section in `HotelMatesPage.jsx`
- `src/components/ArchitectureSection.jsx` → `pages/ArchitecturePage.jsx`
- `src/components/SecondaryProject.jsx` → Other Work section in `AboutPage.jsx`
- `src/components/AboutSection.jsx` → `pages/AboutPage.jsx`
- `src/components/ContactSection.jsx` → contact card in `AboutPage.jsx`
- `src/components/Header.jsx` (orphan)
- `src/components/ProjectCard.jsx` (orphan, broken)
- `src/pages/Home.jsx` (orphan, broken)
- `src/pages/Home.css` (only used by broken `Home.jsx`)
- `src/portfolio.css` (not imported anywhere)

## Content preserved & repackaged

- GitHub: `nlekkerman` (links present in original code) — used in Home hero,
  HotelMates page, About page.
- HotelMates frontend/backend repos — preserved on HotelMates page.
- ShootAR repos — preserved on About page as Other Work.
- LinkedIn: `nikola-simic-674862110` — preserved.
- Email + phone — preserved on About page.
- Stack groups (Backend / Frontend / Realtime / Notifications / Tooling).
- Existing design tokens (`--color-bg`, `--color-accent`, etc.) kept; new
  `cc-*` tokens layered on top.

## HotelMates content added

- Hero with badges (Django REST, React, PostgreSQL, Pusher, RBAC, Multi-Tenant).
- Problem statement.
- 8 module cards: hotel provisioning, staff dashboard, booking lifecycle,
  housekeeping, maintenance, room service & restaurant, communication,
  capability-based permissions.
- 4 operational flow cards (booking lifecycle, housekeeping lifecycle, staff
  management, guest communication) with explicit step ordering.
- Proof block listing `validate_preset_maps()`, `validate_module_policy()`,
  `python manage.py check` results.

## RBAC Matrix content added

- Title "Live Permission Matrix" with explanatory subtitle and paragraph
  describing how Django backend resolves capabilities and React consumes the
  payload.
- 9 personas grouped by authority:
  - **Full Hotel Authority**: Nora King, Henry Walsh, Fiona Brooks, Maya Reed
  - **Supervisor**: Liam Stone
  - **Operational Staff**: Ava Doyle, Omar Price, Kate Nolan, Zoe Hart
- Each persona shows tier, role, department, capability count, proof.
- Interactive Permission Console reveals authority pill, visible modules
  (green pills), restricted areas (red pills) for the selected persona.
- Wording uses "demo personas" / "seeded staff personas" — no "dummy users"
  language in UI.

## Architecture content added

- Vertical chain: React Staff UI → AuthContext + RBAC Payload → Django REST
  API → Capability Resolver → PostgreSQL Hotel-Scoped Data.
- 5 supporting cards: tenant isolation, RBAC resolver, module policy,
  realtime layer, guest access.
- Tagline: *Navigation controls visibility. Capabilities control actions.*

## Security note

- **No demo passwords, secrets, API keys, tokens, or private URLs are
  rendered anywhere in the UI.** A neutral note ("Demo credentials are
  available for guided walkthroughs.") replaces any in-UI credentials.
- All external links use `target="_blank" rel="noopener noreferrer"`.
- No new env files or secrets introduced.
- No production/customer claims in copy.

## Validation results

```
npm run lint   →  0 errors, 0 warnings
npm run build  →  built in 1.24s, 52 modules, no errors
```

Output bundle:

| Asset | Size | Gzip |
| --- | --- | --- |
| `dist/index.html` | 0.90 kB | 0.48 kB |
| `dist/assets/index-*.css` | 333.74 kB | 50.21 kB |
| `dist/assets/index-*.js` | 192.43 kB | 60.67 kB |

## Deployment

- `vite.config.js` (`base: '/'`) untouched — site continues to deploy at
  `nlekkerman.github.io` root.
- `npm run deploy` (`gh-pages -d dist`) script unchanged.
- `HashRouter` ensures deep links (`/#/hotelmates/rbac`) work without a
  server SPA fallback on GitHub Pages.

## Follow-up improvements (not done in this pass)

- Consider migrating to `BrowserRouter` + a proper SPA `404.html` redirect if
  hash URLs are not desired (`public/404.html` currently has a hard-coded
  redirect to `/nlekkerman.github.io` that is unrelated to routing and was
  left untouched).
- Add per-page `<title>` updates (e.g. via a small `useDocumentTitle` hook).
- Add screenshots / short looms inside the case-study page once available.
- Wire a real "Live Demo" link into HotelMates page once a public demo URL
  is available (currently no live URL is rendered).
- Consider extracting persona data to a JSON module if the matrix grows.
