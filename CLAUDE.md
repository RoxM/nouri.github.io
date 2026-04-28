# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

`nouri.github.io` is the marketing/landing site for **NOURI** — a Spanish-language health platform for women navigating perimenopause and menopause. There is no build step, bundler, or package manager. Everything is static HTML + CSS served directly via GitHub Pages.

The `app/` directory contains a separate, self-contained high-fidelity mobile app prototype (JSX components rendered in-browser, no compilation) that lives alongside the landing page.

## How to preview locally

Open files directly in a browser — no server needed for most things:

```bash
open index.html           # landing page
open app/index.html       # mobile app prototype
open "app/NOURI Design System/Landing.html"  # design system landing
```

If you need live-reload during editing, any static server works:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Repository structure

| Path | What it is |
|---|---|
| `index.html` | Marketing landing page (the GitHub Pages root) |
| `colors_and_type.css` | **Single source of truth** for all design tokens — import this, don't define colors inline |
| `assets/` | Logo variants (`nouri-logo-darkbg.jpg`, `nouri-logo-cream.jpg`, `nouri-logo-white.jpg`) |
| `app/index.html` | Click-through mobile app prototype (all screens toggled via JS) |
| `app/*.jsx` | Screen components (HomeScreen, CheckInScreen, TrackScreen, LearnScreen, CommunityScreen) |
| `app/primitives.jsx` | Design-system primitives: `N` tokens, `Icon`, `Button`, `Chip`, `Card`, `Ring`, `TabBar` |
| `app/colors_and_type.css` | Copy of the token file scoped to the app prototype |
| `app/NOURI Design System/` | Agent-loadable design system skill — `SKILL.md`, `README.md`, `colors_and_type.css` |

## Design system — critical rules

All visual work must follow `app/NOURI Design System/README.md`. The short version:

**Colors** — always use CSS variables from `colors_and_type.css`, never hard-code hex values in components. Core brand tokens: `--nouri-navy` (`#1E1D2B`), `--nouri-purple` (`#7B39D2`), `--nouri-teal` (`#07B5B5`). Default background is `--paper` (`#FBF7F1`) — warm cream, not white.

**Typography** — `--font-serif` (Instrument Serif) for display/editorial at ≥26px; `--font-sans` (Geist) for UI/body; `--font-mono` (Geist Mono) for data. All loaded from Google Fonts in the CSS `@import`.

**No emoji anywhere** — not in UI, not in copy, not in push. Use Lucide inline SVGs at `strokeWidth={1.5}`.

**Radius** — never `0` or `4px`. Use `--r-sm` (6px) through `--r-pill` (999px).

**Motion** — `--ease-out` cubic-bezier, `--dur-fast`/`--dur-normal`/`--dur-slow`. No spring bounces.

## Copy/language rules

- Language: Spanish, neutral Latin American. Always `tú`, never `usted`. Brand self-reference: `nosotras`.
- Tone: direct + warm + specific. Short sentences, verb-first, lead with numbers.
- Casing: NOURI all-caps wordmark; UI labels sentence case; buttons verb-first sentence case; eyebrow labels UPPERCASE with `letter-spacing: 0.14em`.
- Avoid: diminutives (`hormonitas`), warrior framing, `"tu mejor versión"`, exclamation stacks, fear framing.

## Design system skill

`app/NOURI Design System/SKILL.md` registers this repo as a Claude Code skill named `nouri-design`. When invoked (via `/nouri-design`), it loads the full brand context for building NOURI interfaces. Reference this skill when generating new UI artifacts or production components.
