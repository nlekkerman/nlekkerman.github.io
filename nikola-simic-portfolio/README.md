# Nikola Simic — Portfolio

Personal portfolio site for a full-stack engineer specializing in multi-tenant SaaS systems, RBAC, and event-driven architecture.

Built with **React + Vite**.

---

## Page Structure

### Hero

- Title: Nikola Simic
- Tagline: "Building multi-tenant SaaS systems"
- Subtitle: From database design to real-time dashboards — system-driven applications with RBAC, event-driven workflows, and clean backend/frontend contracts.

### Featured Project — HotelsMates

Multi-tenant hospitality platform designed for real operations.

- **Multi-Tenant Isolation** — Each hotel in its own scoped environment
- **Live Operational State** — Event-driven dashboards via Pusher
- **Role-Based Access** — Granular permissions per role (owner, manager, receptionist, housekeeper)
- **Full Booking Lifecycle** — Reservation → Pre-check-in → In-house → Checkout → Post-stay

Links: [Frontend](https://github.com/nlekkerman/HotelMateFrontend) · [Backend](https://github.com/nlekkerman/HotelMateBackend)

### System Diagram

Visual architecture flow: Entry Points → React Frontend → Django REST API → Services (PostgreSQL, Pusher, Token Auth).

### Flows

Six core system flows documented:

1. Booking Lifecycle
2. Staff Onboarding
3. Guest Experience
4. Operational Config
5. Public Hotel Page
6. Realtime Sync

### Architecture

Design principles: multi-tenant isolation, RBAC, token-based guest identity, event-driven updates (Pusher), explicit backend ↔ frontend contracts, configurable operational logic.

### Secondary Project — ShootAR

Web-based AR system combining real-time interaction, spatial mapping, and 3D gameplay.

Tech: Unity, C#, AR Foundation, Android

Links: [Frontend](https://github.com/nlekkerman/shootars) · [Backend](https://github.com/nlekkerman/shootars-backend)

### About the Engineer

> I design and build complete, production-grade systems — from data models and APIs to real-time dashboards and deployment. My focus is on multi-tenant SaaS platforms, role-based access control, and event-driven workflows.

### Contact

- Email: nlekkerman@gmail.com
- GitHub: [nlekkerman](https://github.com/nlekkerman)
- LinkedIn: [nikola-simic](https://www.linkedin.com/in/nikola-simic-674862110)

---

## Tech Stack

| Category      | Tools                        |
|---------------|------------------------------|
| Backend       | Python, Django, REST APIs    |
| Frontend      | JavaScript, React, Bootstrap |
| Data          | PostgreSQL                   |
| Realtime      | Pusher                       |
| Notifications | Firebase                     |
| Tools         | Git                          |

---

## Setup

```bash
npm install
npm run dev
```
