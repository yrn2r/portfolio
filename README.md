# Yernur — Portfolio

Production-ready personal portfolio built with React, TypeScript, Tailwind CSS and Framer Motion. Three languages (EN / RU / KZ) with no page reload, persisted in `localStorage`.

## Stack

- **Vite** — build tool / dev server
- **React 18 + TypeScript**
- **React Router 6** — top-level routing (portfolio home ↔ AURA case study)
- **Tailwind CSS** — design tokens in `tailwind.config.js`
- **Framer Motion** — hero interaction, scroll reveals, hover states, carousels
- **lucide-react** — icons (used inside AURA)

## Project structure

```
src/
  App.tsx           top-level router: "/" → PortfolioHome, "/projects/aura/*" → AuraApp
  pages/
    PortfolioHome.tsx   the existing portfolio, unchanged content
  components/       Nav, Hero, Work, About, Services, Contact, Footer, ProjectVisual
  i18n/              translations.ts (EN/RU/KZ copy), LanguageContext.tsx (state + localStorage)
  hooks/             useReveal.ts (scroll-triggered reveal)
  index.css          portfolio design tokens applied via Tailwind layers
  projects/
    aura/            AURA case study — fully isolated, see below
```

## AURA — case study project

`/projects/aura` is a fully built fragrance-brand experience living inside this same app (not a separate project). It demonstrates routing, data-driven rendering, independent per-card carousels, a scoring-based recommendation quiz, cart state, and a demo checkout flow. Source: `src/projects/aura/`.

**Routes:**

```
/projects/aura                    home (hero, collection, scent finder, story, reviews, newsletter)
/projects/aura/fragrance/verde    and /noir, /eclat, /sable, /luna, /ember, /mist
/projects/aura/cart
/projects/aura/checkout
```

**Isolation:** everything AURA-specific lives under `src/projects/aura/`. Its only shared surface with the portfolio is a handful of additive tokens in `tailwind.config.js` (prefixed `aura-*` colors, `auraDisplay`/`auraSans` fonts) and its own stylesheet, `src/projects/aura/styles/aura.css` — every rule in it is scoped under `.aura-scope`, so nothing leaks either direction.

**Assets:** real photography/video for AURA doesn't exist yet. `src/projects/aura/data/fragrances.ts` points at:

```
public/projects/aura/hero/verde-hero.webp  (+ verde-hero.mp4, optional)
public/projects/aura/story/philosophy.webp
public/projects/aura/{verde,noir,eclat,sable,luna,ember,mist}/01.webp … 04.webp
```

None of those files exist yet — `CinematicMedia` (`src/projects/aura/components/CinematicMedia.tsx`) catches the failed load and renders a labeled placeholder instead of breaking. Drop real files in at those exact paths whenever they're ready; no code changes needed.

**Cart:** persisted separately from anything else in `localStorage` under the key `aura-cart` — clearing your browser's storage for this site will also clear it.

## Local development

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`. Portfolio at `/`, AURA at `/projects/aura`.

## Build for production

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

Output goes to `dist/`.

## Deployment

The `dist/` folder is static — deploy it anywhere that serves static files:

- **Vercel**: `vercel` in the project root, or connect the GitHub repo (framework preset: Vite).
- **Netlify**: build command `npm run build`, publish directory `dist`.
- **GitHub Pages**: build, then push `dist/` to a `gh-pages` branch (or use an action).

No environment variables or server are required.

## Contact details

All set in `src/components/Contact.tsx` (the `CONTACT` object at the top):

- Email: `y.ak6ergen@gmail.com` (opens via `mailto:`)
- GitHub: `https://github.com/yrn2r`
- Telegram: `https://t.me/bolvtbekuly`

Phone and LinkedIn were intentionally removed from the interface, footer and metadata — add them back the same way if that changes.

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (see `src/index.css` and, for AURA, `src/projects/aura/styles/aura.css`).
- Visible focus states on all interactive elements — AURA overrides the portfolio's focus-outline color locally so it stays legible on its light background.
- AURA's image carousels are operable via real `<button>` arrows and progress-dot tabs (keyboard + screen reader accessible), in addition to drag/swipe.
- Fonts are loaded via `<link>` with `display=swap` to avoid blocking render.
- Missing AURA media (photography/video not added yet) fails gracefully to a labeled placeholder — it will not throw or blank the page.
- No unnecessary dependencies — this is the full dependency list in `package.json`.

## If you already ran `npm install` before this update

Two dependencies were added for AURA (`react-router-dom`, `lucide-react`). Run `npm install` again to pick them up before `npm run dev` / `npm run build`.

## AURA authentication & reviews

AURA now includes real email/password authentication and persistent fragrance reviews through Supabase.

1. Create a Supabase project.
2. In Supabase SQL Editor, run `supabase_schema.sql`.
3. In Supabase Authentication settings, configure email confirmation as desired.
4. Copy `.env.example` to `.env.local`.
5. Add the project's URL and anon key to `.env.local`.
6. Run `npm install` and `npm run dev`.

Only the Supabase anon/public key belongs in the Vite client. Never put a Supabase service-role key in `.env.local` or frontend code.
