# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing / lead-generation site for Denova Creations (interior design, Bangalore), live at `https://denovacreations.com`. The deployed app is the React SPA in `frontend/`. The project was scaffolded by the Emergent platform (`.emergent/`, `.gitconfig`, `test_result.md`, `frontend/plugins/`).

## Commands

All commands run from `frontend/` (yarn 1.22 is the declared package manager):

```bash
yarn install
yarn start      # craco start — dev server on http://localhost:3000
yarn build      # craco build — production build to frontend/build/
yarn test       # craco test — Jest watch mode (no test files currently exist)
yarn test --watchAll=false src/path/to/File.test.js   # single test, non-watch
```

There is no separate lint script. ESLint (react-hooks rules) runs as part of `craco start`/`craco build` via `craco.config.js`.

## Architecture

- **Stack:** React 19 + Create React App (`react-scripts` 5) wrapped by CRACO, React Router 7, Tailwind 3 + shadcn/ui (Radix) components in `src/components/ui/`, `react-helmet-async` for head tags. The `@/` import alias maps to `src/`.
- **Rendering:** Client-side SPA, pre-rendered at build time. `yarn build` runs `react-snap` as `postbuild` (config in `package.json` → `reactSnap`), which crawls the built site and writes `build/<route>/index.html` for every linked page plus `build/404.html`. New pages must be linked from somewhere (or added to `reactSnap.include`) to be pre-rendered. Third-party scripts (GTM in `index.html`, Clarity in `App.js`, AdSense in `AdSlot.jsx`) are skipped when `navigator.userAgent === "ReactSnap"` so snapshots don't carry duplicate tags; keep that guard on any new tracking script.
- **AdSense:** The ad script is not in `index.html` (only the `google-adsense-account` verification meta is). `components/AdSlot.jsx` injects it on first use and renders only on content pages (`pageAllowsAds`: allow-list of paths/prefixes, never forms, legal pages, `/interior-designers/*`, `/lp/*`, thank-you or the 404 page, detected via the `data-page-not-found` marker in `NotFoundPage`). This is to satisfy AdSense's "ads on screens without publisher content" policy; don't add the global script back.
- **Guides (blog):** `src/data/guides.js` → `/guides` (`GuidesPage`) and `/guides/:slug` (`GuideArticlePage`, with Article + FAQPage JSON-LD and an in-article ad). Add each new guide to `public/sitemap.xml`.
- **Routing (`src/App.js`):** Two-level `<Routes>`. `/lp/interior-design-bangalore` (Google Ads landing) and `/thank-you` render without the site chrome. Everything else goes through a `path="*"` route wrapped in `Layout` (Header, Footer, InternalLinksCTA, FloatingCTA, FloatingLeadForm) with a nested `<Routes>`. There is no 404 route. Most pages are `React.lazy`-loaded.
- **Data-driven pages:** These share one data source, so changes to the data affect several routes and the sitemap:
  - `src/data/projects.js` → `/portfolio/:type/:category` (`CategoryPage`, matches `slugify(project.category)`), `/portfolio/:type/:category/:projectId` (`ProjectPage`, matches `id`), and `/projects/:slug` (`ProjectDetailPage`, matches `slug`). Project images live at `public/images/projects/<id>/<n>.webp`.
  - `src/data/locations.js` → `/interior-designers/:city` via `CityLanding` + `components/CityLandingTemplate.jsx` (matches `slug`).
  - `src/pages/locations/*.jsx` are legacy per-city pages that are **not routed or imported anywhere**.
- **Lead capture:** Forms POST to a Google Apps Script URL (`src/utils/submitLead.js`, also exported from `src/utils/api.js`). `backend/` (Flask `server.py`, Express-style `leads.js`, Emergent template `requirements.txt`) does not appear to be used by the deployed site.

## SEO

- `components/SEO.jsx` sets title, description, canonical, Open Graph and Twitter tags from a `pageMeta` table keyed by pathname, with fallbacks for `/interior-designers/*` and `/portfolio/*`. It is applied with `withSEO(...)` in `App.js` for only some routes.
- Many pages also render their own `<Helmet>` (including some wrapped with `withSEO`) and inline JSON-LD (`ProfessionalService`, `LocalBusiness`, `FAQPage`, `CollectionPage`, `CreativeWork`, `Product`, etc.). When editing meta for a page, check both `SEO.jsx` and the page itself.
- `public/robots.txt` and `public/sitemap.xml` are static, hand-maintained files. Update the sitemap when adding routes, projects, or locations. `frontend/sitemap.xml` is a stale duplicate and is not served.

## Analytics / tracking

- Google Tag Manager `GTM-59NLP9MV` is in `public/index.html`.
- Microsoft Clarity is injected in a `useEffect` in `App.js`.
- Lead forms call `trackLeadConversion()` in `src/utils/leadTracking.js`, which pushes one `lead_conversion` dataLayer event per successful lead. The GTM Google Ads tag sends it to the "Submit lead form" conversion (`AW-11303451952/zBhUCM29o5QcELD6840q`). There are no direct `gtag()` calls in the code, and the thank-you page fires nothing.
- `App.js` stores UTM params, `gclid` and the first landing page in `localStorage` for lead attribution. Keep this intact when changing form submission.

## Deployment

Production (`denovacreations.com`) is served through the Hostinger CDN. The production `.htaccess` lives in Hostinger's `public_html` and is **not** in this repo. `frontend/deploy/hostinger.htaccess` is the recommended replacement for use with pre-rendered builds (serves `/<route>/index.html`, real 404 status via `404.html`, no blanket SPA fallback). It 301-redirects `www` to the apex domain and provides the SPA fallback to `/index.html`, excluding `robots.txt` and `sitemap.xml` from React routing. Change redirects or rewrites there, not in the repo.

- There is no Hostinger deploy script, CI workflow, or deployment documentation in the repo. `frontend/build/` is gitignored.
- **Unknown:** the exact method used to build and upload files to Hostinger.
- `frontend/vercel.json` is still in the repo but does not control the production domain. Its redirect and rewrite rules have no effect on the live site.

## Repo quirks

- `Denova_Interiors_Website/` at the root is a nested, outdated clone of this same repo, tracked as a gitlink with no `.gitmodules`. Do not edit code there.
- `test_result.md` contains an Emergent "Testing Protocol" block marked DO NOT EDIT. Leave it unchanged.
- `frontend/plugins/` holds Emergent CRACO plugins: `visual-edits` loads only on the dev server, and `health-check` loads only when `ENABLE_HEALTH_CHECK=true`.
