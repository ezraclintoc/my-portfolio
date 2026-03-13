# Portfolio — Claude Instructions

## Project Overview

Personal portfolio for Ezra Clintoc, deployed to `ezra.is-a.dev` via GitHub Pages (`npm run deploy`).

**Stack**: React 19 + Vite + TypeScript + Tailwind CSS v4 + Lucide React
**Contact**: Formspree (`VITE_FORMSPREE_UID` env var)
**No animation libraries** — all motion is pure CSS + React

---

## Design Context

### Users
Employers, recruiters, and freelance clients evaluating Ezra as a potential hire or collaborator. They arrive with a professional mindset: they want to understand what he builds and whether he's someone they'd want to work with. The interface should build trust quickly and feel genuinely made by a person, not assembled from a template.

### Brand Personality
**Friendly, creative, real.** Not a corporate résumé. Not a flashy portfolio trying too hard. A real person who builds things, cares about craft, and can be talked to.

### Aesthetic Direction
- **Light theme only** — stone-50 background (`#fafaf9`), neutral-900 text, single teal accent (`#0f766e` / `teal-700`)
- **Refined and calm** — generous whitespace, clear hierarchy, nothing competing for attention
- **No references needed** — the direction is already established; lean into it

**Anti-references (explicitly avoid):**
- Dark glassmorphism, neon glows, blur cards, AI color palettes
- Generic Bootstrap-template feel: boxy, flat, could be any junior dev
- Corporate/sterile: feels like a LinkedIn printout, no personality
- Overdesigned/flashy: particles, excessive animations, trying too hard

### Design Principles

1. **Let the work speak** — the projects are the hero; UI is the frame, not the subject
2. **Calm confidence** — use restraint; one well-placed teal accent is more powerful than many colors
3. **Human over polished** — personality beats perfection; friendly copy and real project descriptions matter as much as visual craft
4. **Motion with purpose** — scroll reveals and entrance animations exist for orientation, not decoration; every animation has a reason
5. **Accessible by default** — `prefers-reduced-motion` is fully respected throughout; this is non-negotiable

---

## Technical Conventions

### Animation
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out) for all transitions
- Entrance: `.animate-in` class + `.animate-delay-{100|200|300|500}` utility classes
- Scroll: `data-scroll-reveal` attribute + `.revealed` class via `IntersectionObserver` in `App.tsx`
- **Always** add a `@media (prefers-reduced-motion: reduce)` override for any new animation

### Colors
- Background: `bg-stone-50` / `#fafaf9`
- Primary text: `text-neutral-900`
- Secondary text: `text-neutral-500`
- Accent: `teal-700` / `#0f766e` — used sparingly (buttons, focus rings, hover states)
- Borders: `border-neutral-200`
- Cards: `bg-white` with `border-neutral-200` and `shadow-sm`
- **Never** use gray text on colored backgrounds — use a tint of that color instead

### Components
- `Navigation.tsx` — fixed bottom floating pill nav; 44px minimum touch targets
- `Hero.tsx` — two-column layout with staggered entrance animations; children slot = InteractiveCard
- `Body.tsx` — Projects grid + Languages & Tools + Socials; all use `data-scroll-reveal`
- `InteractiveCard.tsx` — tilt card with pointer events (unified mouse + touch); auto-rotates projects every 20s
- `ContactSection.tsx` — Formspree form with sr-only labels, maxLength constraints, and status-aware button
- `Footer.tsx` — single credit line with `pb-28` to clear floating nav

### Icons
Use Lucide React throughout. Current: `Home`, `Code`, `Mail`, `Github`, `Send`, `Loader`, `CheckCircle`, `AlertTriangle`.

### Data
All project data lives in `src/data.tsx` — edit there to add/update projects.
