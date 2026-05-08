# Portfolio Site Audit

Comprehensive inventory of every page, section, link, and content element
currently rendered on the deployed site.

- **Repo path:** [nikola-simic-portfolio/](nikola-simic-portfolio/)
- **Router:** `HashRouter` (SPA-safe on GitHub Pages, deep links use `#/...`)
- **Deploy:** `npm run deploy` → `gh-pages -d dist`
- **Live demo URL referenced:** https://hotelsmates.com
- **External profiles linked:** GitHub `nlekkerman`, LinkedIn `nikola-simic-674862110`

---

## Global chrome (rendered on every page)

### Navbar — [src/components/Navbar.jsx](nikola-simic-portfolio/src/components/Navbar.jsx)

- Sticky, blurred top bar.
- Brand mark: gradient `NS` square + text "Nikola Simic", clicks to `/`.
- Mobile hamburger toggle (`bi-list` / `bi-x-lg`).
- Active link highlight; menu auto-closes on route change.
- **Public nav items:**
  | Label | Route |
  | --- | --- |
  | Home | `/` |
  | HotelMates | `/hotelmates` |
  | RBAC Matrix | `/hotelmates/rbac` |
  | Architecture | `/hotelmates/architecture` |
  | About | `/about` |
- **NOT in nav (intentional):** `/demo-access` (private/shareable only).

### Layout — [src/components/Layout.jsx](nikola-simic-portfolio/src/components/Layout.jsx)

- Wraps every route, scrolls to top on route change.

### Footer — [src/components/SiteFooter.jsx](nikola-simic-portfolio/src/components/SiteFooter.jsx)

- Left: `© <current year> Nikola Simic`
- Right: meta line `Full-stack systems · Django · React · PostgreSQL`

---

## Routes registered — [src/App.jsx](nikola-simic-portfolio/src/App.jsx)

| Path | Component |
| --- | --- |
| `/` (index) | `HomePage` |
| `/hotelmates` | `HotelMatesPage` |
| `/hotelmates/rbac` | `RbacPage` |
| `/hotelmates/architecture` | `ArchitecturePage` |
| `/about` | `AboutPage` |
| `/contact` | `<Navigate to="/about" replace />` |
| `/demo-access` | `DemoAccessPage` (private, unlinked) |
| `*` | `NotFoundPage` |

---

## Page 1 — Home (`/`) — [src/pages/HomePage.jsx](nikola-simic-portfolio/src/pages/HomePage.jsx)

### Section 1.1 — Hero (`.cc-hero`)
- Background: grid pattern + radial glow (`.cc-hero-grid`, `.cc-hero-glow`).
- Eyebrow: `Command Center · Full-Stack Engineer`
- H1 title: `I build full-stack systems that behave like real products.`
  ("behave like real products." in gradient text)
- Subtitle: `Django + React developer focused on multi-tenant SaaS, backend-driven permissions, real-time workflows, and operational dashboards.`
- **Primary CTAs:**
  | Button | Variant | Target |
  | --- | --- | --- |
  | Open HotelMates Demo | primary | https://hotelsmates.com (external) |
  | View HotelMates Case Study | outline | `/hotelmates` |
  | Explore RBAC Matrix | ghost | `/hotelmates/rbac` |
- **Secondary links (icon row):**
  - GitHub → https://github.com/nlekkerman
  - LinkedIn → https://www.linkedin.com/in/nikola-simic-674862110

### Section 1.2 — System Capabilities
- Eyebrow: `System Capabilities`
- H2: `Engineered for operational reality`
- Description paragraph.
- **4 system cards** (`.cc-grid-4`):
  1. **Multi-Tenant SaaS** (`bi-building`) — Hotel-scoped data, staff, rooms, bookings, and workflows isolated per tenant.
  2. **Capability-Based RBAC** (`bi-shield-lock`) — Backend resolves permissions from tier, role, and department. React consumes a live RBAC payload.
  3. **Real-Time Operations** (`bi-broadcast`) — Guest/staff chat and operational workflows updated through realtime channels.
  4. **Operational Dashboards** (`bi-grid-1x2`) — Bookings, housekeeping, maintenance, staff, room service, and restaurant flows.

### Section 1.3 — Featured Case Study CTA panel (alt bg)
- Eyebrow: `Featured Case Study`
- H2: `HotelMates`
- Description: full multi-tenant operations summary.
- **Buttons:**
  | Button | Target |
  | --- | --- |
  | Open HotelMates Demo | https://hotelsmates.com (external) |
  | Open Case Study | `/hotelmates` |
  | See Architecture | `/hotelmates/architecture` |

---

## Page 2 — HotelMates (`/hotelmates`) — [src/pages/HotelMatesPage.jsx](nikola-simic-portfolio/src/pages/HotelMatesPage.jsx)

### Section 2.1 — Page hero
- Eyebrow: `Case Study`
- Title: `HotelMates`
- Subtitle: `A multi-tenant hotel operations platform built with Django REST and React.`
- Description: full HotelMates summary covering staff management, bookings, housekeeping, maintenance, room service, restaurant bookings, guest communication, role-aware dashboards, hotel-scoped SaaS.
- **Badges:** `Django REST`, `React`, `PostgreSQL`, `Pusher`, `RBAC`, `Multi-Tenant`
- **Buttons:**
  | Button | Target |
  | --- | --- |
  | Launch Live Demo | https://hotelsmates.com (external) |
  | View RBAC Matrix | `/hotelmates/rbac` |
  | System Architecture | `/hotelmates/architecture` |
  | Backend (GitHub) | https://github.com/nlekkerman/HotelMateBackend |
  | Frontend (GitHub) | https://github.com/nlekkerman/HotelMateFrontend |

### Section 2.2 — Problem
- Eyebrow: `Problem`
- H2: `Different staff need different controls`
- Prose: explains why receptionists, housekeepers, managers, and platform owners must not see/control the same things; HotelMates uses backend-resolved capabilities + capability-gated frontend.

### Section 2.3 — What I Built (alt bg)
- Eyebrow: `What I Built`
- H2: `Modules & subsystems`
- **8 module cards** (`.cc-grid-4`):
  1. **Hotel provisioning** (`bi-building-add`)
  2. **Staff dashboard** (`bi-people`)
  3. **Booking lifecycle** (`bi-calendar2-range`)
  4. **Housekeeping operations** (`bi-bucket`)
  5. **Maintenance workflows** (`bi-tools`)
  6. **Room service & restaurant** (`bi-cup-hot`)
  7. **Guest & staff communication** (`bi-chat-dots`)
  8. **Capability-based permissions** (`bi-shield-lock`)

### Section 2.4 — Operational Flows
- Eyebrow: `Operational Flows`
- H2: `How the system moves`
- **4 flow cards** (numbered steps):
  1. **Booking lifecycle** — Reservation → Room assignment → Check-in → Checkout
  2. **Housekeeping lifecycle** — Room status → Task assignment → Cleaning progress → Inspection
  3. **Staff management** — Department → Role → Access level → Capability payload → UI gates
  4. **Guest communication** — Guest token → Guest portal → Staff chat → Realtime updates

### Section 2.5 — Proof & Validation (alt bg)
- Eyebrow: `Proof & Validation`
- H2: `Backend integrity is enforced`
- **Proof card 1 — Backend validators (code block):**
  ```
  validate_preset_maps()       → []
  validate_module_policy()     → []
  python manage.py check       → no issues
  ```
  Footer: validators ensure module policy and preset maps are internally consistent before deployment.
- **Proof card 2 — Seeded persona matrix:** copy + `Open Live Permission Matrix` outline button → `/hotelmates/rbac`.

---

## Page 3 — RBAC Matrix (`/hotelmates/rbac`) — [src/pages/RbacPage.jsx](nikola-simic-portfolio/src/pages/RbacPage.jsx)

### Section 3.1 — Page hero
- Eyebrow: `HotelMates · Permissions`
- Title: `Live Permission Matrix`
- Subtitle: `Nine seeded staff personas demonstrate how the same React frontend changes based on backend authorization.`
- Description: explains backend-resolved capabilities & RBAC payload consumption.
- **Button:** `Test Live RBAC Demo` (primary) → https://hotelsmates.com (external).

### Section 3.2 — Persona groups (selectable cards)

Each card shows: name, authority pill, tier, role, department, capability count, proof note. Clicking a card updates the Permission Console below.

#### Full Hotel Authority (4 personas)
| Name | Tier | Role | Department | Caps | Proof |
| --- | --- | --- | --- | --- | --- |
| Nora King | `super_staff_admin` | `front_office_manager` | Front Office | 176 | Top hotel authority by tier. |
| Henry Walsh | `staff_admin` | `hotel_manager` | Management | ~173–175 | Full hotel authority by role. |
| Fiona Brooks | `regular_staff` | `front_office_manager` | Front Office | ~173–175 | Manager role grants full hotel authority. |
| Maya Reed | `regular_staff` | `housekeeping_manager` | Housekeeping | ~173–175 | Department manager receives full hotel authority. |

#### Supervisor (1 persona)
| Name | Tier | Role | Department | Caps | Proof |
| --- | --- | --- | --- | --- | --- |
| Liam Stone | `regular_staff` | `front_office_supervisor` | Front Office | 64 | Elevated operational authority below manager. |

#### Operational Staff (4 personas)
| Name | Tier | Role | Department | Caps | Proof |
| --- | --- | --- | --- | --- | --- |
| Ava Doyle | `regular_staff` | `housekeeper` | Housekeeping | 37–60 | Housekeeping operator restrictions. |
| Omar Price | `regular_staff` | `waiter` | Restaurant | 37–60 | F&B / restaurant operator restrictions. |
| Kate Nolan | `regular_staff` | `maintenance_staff` | Maintenance | 37–60 | Maintenance operator restrictions. |
| Zoe Hart | `regular_staff` | `front_desk_agent` | Front Office | 37–60 | Reception / bookings operator restrictions. |

### Section 3.3 — Permission Console (alt bg)
- Eyebrow: `Permission Console`
- H2: dynamically shows the active persona name.
- Console rows: Authority (pill), Tier, Role, Department, Capabilities, Proof.
- **Visible modules** list (green pills) — per persona:
  - Nora King: All operational modules · Staff administration · Hotel configuration
  - Henry Walsh: All operational modules · Staff oversight · Hotel-wide reporting
  - Fiona Brooks: Bookings · Housekeeping · Maintenance · Staff · Restaurant
  - Maya Reed: All operational modules with manager scope
  - Liam Stone: Bookings · Reception operations · Limited staff oversight
  - Ava Doyle: Assigned room tasks · Cleaning status updates
  - Omar Price: Restaurant bookings · Order tickets
  - Kate Nolan: Maintenance tickets · Assigned tasks
  - Zoe Hart: Bookings desk · Guest check-in/out · Guest chat
- **Restricted areas** list (red pills) — per persona:
  - Nora King: Cross-tenant platform controls
  - Henry Walsh: Platform owner / multi-tenant controls
  - Fiona Brooks: Tenant provisioning
  - Maya Reed: Tenant provisioning
  - Liam Stone: Hotel-wide configuration · Department admin
  - Ava Doyle: Bookings management · Staff administration · Restaurant
  - Omar Price: Housekeeping · Maintenance · Staff management
  - Kate Nolan: Bookings · Restaurant · Staff configuration
  - Zoe Hart: Hotel configuration · Staff administration
- **Footer note:** *"Demo personas are available for guided review. Credentials can be shared privately."*

> No passwords, emails, tokens, or backend URLs are present anywhere on this page.

---

## Page 4 — Architecture (`/hotelmates/architecture`) — [src/pages/ArchitecturePage.jsx](nikola-simic-portfolio/src/pages/ArchitecturePage.jsx)

### Section 4.1 — Page hero
- Eyebrow: `HotelMates · Architecture`
- Title: `System Architecture`
- Subtitle: `The chain that turns a request into a permission-gated UI.`
- Description: `Navigation controls visibility. Capabilities control actions.`

### Section 4.2 — Architecture chain (vertical, with connector arrows)
1. **React Staff UI** (entry tone, `bi-window`) — Hotel-scoped routing, role-aware components, realtime updates.
2. **AuthContext + RBAC Payload** (layer tone, `bi-shield-check`) — Frontend consumes resolved capabilities and gates UI accordingly.
3. **Django REST API** (core tone, `bi-hdd-rack`) — Tenant scoping, business logic, lifecycle management.
4. **Capability Resolver** (core tone, `bi-diagram-3`) — Resolves effective capabilities from tier, role, and department.
5. **PostgreSQL Hotel-Scoped Data** (service tone, `bi-database`) — Tenant isolation enforced at the data layer per hotel slug.

### Section 4.3 — Architecture Pillars (alt bg)
- Eyebrow: `Architecture Pillars`
- H2: `Supporting subsystems`
- **5 pillar cards:**
  1. **Tenant isolation** (`bi-building`) — Hotel slug scopes staff, rooms, bookings, workflows, and dashboards.
  2. **RBAC resolver** (`bi-shield-lock`) — Capabilities resolved from tier, role, and department.
  3. **Module policy** (`bi-toggles`) — Backend emits module/action booleans for frontend gates.
  4. **Realtime layer** (`bi-broadcast`) — Pusher channels for guest/staff communication and live operational updates.
  5. **Guest access** (`bi-key`) — Tokenized guest flows for controlled portal/chat access.
- **Tagline (italic):** *"Navigation controls visibility. Capabilities control actions."*

---

## Page 5 — About (`/about`) — [src/pages/AboutPage.jsx](nikola-simic-portfolio/src/pages/AboutPage.jsx)

### Section 5.1 — Page hero
- Eyebrow: `About`
- Title: `Nikola Simic`
- Subtitle: `Full-stack developer · Multi-tenant SaaS · Real-time systems`
- Description: short bio focused on Django, React, PostgreSQL, multi-tenant SaaS, backend authorization, real-time workflows, dashboards, product-quality UI.

### Section 5.2 — Stack + Contact (2-column glass cards)
- **Stack card** — Eyebrow `Stack`, title `Tools I reach for`, groups:
  - **Backend:** Python, Django, Django REST, PostgreSQL
  - **Frontend:** JavaScript, React, React Router, Bootstrap
  - **Realtime:** Pusher
  - **Notifications:** Firebase
  - **Tooling:** Vite, Git, GitHub Pages
- **Contact card** — Eyebrow `Contact`, title `Direct lines`:
  | Channel | Value | Link |
  | --- | --- | --- |
  | Email | nlekkerman@gmail.com | `mailto:` |
  | Phone | +353 83 094 5102 | `tel:` |
  | GitHub | nlekkerman | https://github.com/nlekkerman |
  | LinkedIn | Nikola Simic | https://www.linkedin.com/in/nikola-simic-674862110 |

### Section 5.3 — Other Work (alt bg)
- Eyebrow: `Other Work`
- H2: `ShootAR`
- Prose: web-based AR system with real-time interaction, spatial tracking, 3D gameplay; core mechanics + initial levels implemented; ongoing expansion.
- **Tags:** `React`, `A-Frame`, `Three.js`, `WebXR`
- **Buttons:**
  - Frontend → https://github.com/nlekkerman/shootars
  - Backend → https://github.com/nlekkerman/shootars-backend

---

## Page 6 — 404 (`*`) — [src/pages/NotFoundPage.jsx](nikola-simic-portfolio/src/pages/NotFoundPage.jsx)

- Eyebrow: `404`
- Title: `Route not found`
- Description: `The page you tried to reach is not part of this portfolio.`
- Button: `Back to Command Center` → `/`

---

## Page 7 — Demo Access (`/demo-access`, **private / unlinked**) — [src/pages/DemoAccessPage.jsx](nikola-simic-portfolio/src/pages/DemoAccessPage.jsx)

> Reachable only by direct URL (e.g. `https://nlekkerman.github.io/#/demo-access`). Not in nav, not linked from public pages.

### Section 7.1 — Page hero
- Eyebrow: `Private · For Reviewers`
- Title: `HotelMates Demo Access`
- Subtitle: `Shareable credentials for guided portfolio review.`
- Description: instructs use of staff login page; explains UI changes per persona.

### Section 7.2 — Warning banner (amber)
- **Strong:** `Portfolio demo / testing only.`
- **Body:** seeded into an isolated demo tenant; not real users; no real data; do not share publicly.

### Section 7.3 — Tenant + Walkthrough (2-column)
- **Workspace card** (copy-to-clipboard rows):
  - Live demo: `https://hotelsmates.com`
  - Hotel slug: `no-way-hotel`
  - Shared demo password: `PortfolioTest123!`
  - Button: `Launch Live Demo` (primary) → https://hotelsmates.com
  - Footer note: shared password used across all demo personas; grants no production access.
- **Walkthrough card** (ordered list):
  1. Open `https://hotelsmates.com` and go to staff login.
  2. Enter hotel slug `no-way-hotel`.
  3. Pick any persona email below.
  4. Use shared demo password `PortfolioTest123!`.
  5. Compare the UI between authority levels.

### Section 7.4 — Persona email groups (copy-to-clipboard)
- **Full Hotel Authority (4 emails):**
  - nora.king.demo@noway.test
  - henry.walsh.demo@noway.test
  - fiona.brooks.demo@noway.test
  - maya.reed.demo@noway.test
- **Supervisor (1 email):**
  - liam.stone.demo@noway.test
- **Operational Staff (4 emails):**
  - ava.doyle.demo@noway.test
  - omar.price.demo@noway.test
  - kate.nolan.demo@noway.test
  - zoe.hart.demo@noway.test

### Section 7.5 — Security banner (muted)
- **Strong:** `Security:`
- **Body:** No real secrets, API keys, tokens, or admin credentials published; demo data isolated to demo tenant.

---

## Reusable components inventory

| Component | File | Used by |
| --- | --- | --- |
| `Layout` | [Layout.jsx](nikola-simic-portfolio/src/components/Layout.jsx) | All routes |
| `Navbar` | [Navbar.jsx](nikola-simic-portfolio/src/components/Navbar.jsx) | Layout |
| `SiteFooter` | [SiteFooter.jsx](nikola-simic-portfolio/src/components/SiteFooter.jsx) | Layout |
| `PageHero` | [PageHero.jsx](nikola-simic-portfolio/src/components/PageHero.jsx) | HotelMates, RBAC, Architecture, About, DemoAccess |
| `SystemCard` | [SystemCard.jsx](nikola-simic-portfolio/src/components/SystemCard.jsx) | Home, HotelMates, Architecture |
| `FlowCard` | [FlowCard.jsx](nikola-simic-portfolio/src/components/FlowCard.jsx) | HotelMates |
| `PersonaCard` | [PersonaCard.jsx](nikola-simic-portfolio/src/components/PersonaCard.jsx) | RBAC |
| `ArchitectureNode` | [ArchitectureNode.jsx](nikola-simic-portfolio/src/components/ArchitectureNode.jsx) | Architecture |
| `Badge` | [Badge.jsx](nikola-simic-portfolio/src/components/Badge.jsx) | (available; PageHero renders inline `cc-badge` spans) |
| `CTAButton` | [CTAButton.jsx](nikola-simic-portfolio/src/components/CTAButton.jsx) | Home |
| `Copyable` (inline) | DemoAccessPage.jsx | DemoAccess |

---

## External link inventory (full list)

| URL | Where used |
| --- | --- |
| https://hotelsmates.com | Home hero, Home featured panel, HotelMates hero, RBAC hero, Demo Access workspace card |
| https://github.com/nlekkerman | Home hero secondary, About contact |
| https://github.com/nlekkerman/HotelMateBackend | HotelMates hero |
| https://github.com/nlekkerman/HotelMateFrontend | HotelMates hero |
| https://github.com/nlekkerman/shootars | About — Other Work |
| https://github.com/nlekkerman/shootars-backend | About — Other Work |
| https://www.linkedin.com/in/nikola-simic-674862110 | Home hero secondary, About contact |
| `mailto:nlekkerman@gmail.com` | About contact |
| `tel:+353830945102` | About contact |

All external links use `target="_blank" rel="noopener noreferrer"`.

---

## Public credential exposure check

| Page | Demo password? | Demo emails? | Hotel slug? | Live URL? |
| --- | --- | --- | --- | --- |
| `/` | No | No | No | Yes (CTA) |
| `/hotelmates` | No | No | No | Yes (CTA) |
| `/hotelmates/rbac` | No | No | No | Yes (CTA) |
| `/hotelmates/architecture` | No | No | No | No |
| `/about` | No | No | No | No |
| `/demo-access` (private) | Yes | Yes | Yes | Yes |
| `*` (404) | No | No | No | No |

No API keys, backend URLs, or admin credentials anywhere.

---

## Styling system summary — [src/assets/styles.css](nikola-simic-portfolio/src/assets/styles.css)

- Original token + Bootstrap-based base preserved.
- New `cc-*` design layer appended:
  - Tokens: `--cc-bg`, `--cc-surface`, `--cc-border`, `--cc-accent`, `--cc-accent-2`, `--cc-success`, `--cc-danger`, radii, shadows.
  - Patterns: `cc-navbar`, `cc-hero`, `cc-page-hero`, `cc-section`, `cc-section-alt`, `cc-grid-{2,3,4}`, `cc-glass-card`, `cc-system-card`, `cc-flow-card`, `cc-proof-card`, `cc-arch-card`, `cc-arch-node`, `cc-persona-card`, `cc-console`, `cc-console-list-{ok,blocked}`, `cc-cta-panel`, `cc-warning-banner`, `cc-copy-row`, `cc-howto-list`, `cc-tech-tag`, `cc-badge`, `cc-btn-{primary,outline,ghost}`.
- Responsive breakpoints at 991.98px, 767.98px, 575.98px (grid collapse, console row stacking, mobile nav drawer, persona meta single-column).

---

## Validation status (last run)

- `npm run lint` → 0 errors, 0 warnings.
- `npm run build` → ✓ built (53 modules, ~336 kB CSS / ~197 kB JS, gzipped ~50 kB / ~62 kB).
- `npm run deploy` → executed (gh-pages).
