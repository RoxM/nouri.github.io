# NOURI — Design System

> Para que las mujeres en perimenopausia y menopausia transiten esta etapa
> con claridad y poder — no con miedo o confusión.

NOURI is a health platform for women navigating perimenopause and menopause.
In a system that has historically ignored them, NOURI gives them the voice
back: evidence‑based information contextualized to their hormonal moment,
personal symptom tracking, and the company of other women living the same
transition.

This design system exists so anyone — designer, developer, agent — can build
for NOURI without the product losing its voice.

---

## Sources we were given

- **Logo** — `uploads/Rox_logo_imagotipo_blackbg_final_150dpi.jpg` (JPEG on
  dark background, 679×679). Copied into `assets/`. Filename references
  "Rox" but the product name is NOURI; treat as the definitive mark.
- **Brand brief** — short description (the epigraph above) and a tonal
  instruction: *"lenguaje directo pero cercano y empático, dirigido hacia
  las mujeres"*.
- **No codebase, Figma, or marketing site** was attached. The content and
  visual foundations below are a first proposal built on top of the logo's
  palette and the brand's stated mission. They should be reviewed and
  tightened by the NOURI team.

---

## Index / Manifest

| File / Folder | What's in it |
|---|---|
| `README.md` | This document — brand understanding, content fundamentals, visual foundations, iconography |
| `colors_and_type.css` | All CSS variables: colors, typography, spacing, radii, shadows, motion |
| `SKILL.md` | Agent Skill manifest — lets Claude Code / other agents load this system |
| `fonts/FONTS.md` | Type pairing + substitution note |
| `assets/` | Logo variants, iconography notes, brand imagery |
| `preview/` | Small HTML cards that render in the Design System tab |
| `ui_kits/app/` | High‑fidelity recreation of the NOURI mobile app (JSX components + `index.html`) |

---

## 1 · Brand at a glance

**Name.** NOURI — from *nourish*. One word, all caps in the wordmark, sentence
case in running copy.

**Audience.** Women, typically 40–58, navigating perimenopause or
menopause. Intelligent, underserved, suspicious of being condescended to.

**Promise.** Information, tracking, and community — contextualized to where
*she* is in her hormonal transition.

**Personality.**
- Warm, not saccharine
- Knowledgeable, not clinical
- Direct, not brusque
- Contemporary, not pink‑and‑floral
- Adult — speaks peer‑to‑peer, never parental

**What NOURI is not.**
- Not a period tracker. Not Flo. Not Clue.
- Not a medical record. Not a telehealth chat.
- Not a "wellness" app. No moon phases, no affirmations written in cursive,
  no eucalyptus watercolors.

---

## 2 · Content fundamentals

### 2.1 · Language

Primary language is **Spanish (neutral Latin American)**. Copy must be
writeable in Spain and LatAm without re‑localization — prefer forms that
work in both (`cuéntanos` over `cuentame` vs `contanos`; avoid
regionalisms like *chévere*, *guay*, *pana*).

English copy follows the same tonal rules and should only appear where
clearly labeled (e.g. an EN/ES toggle, or imported medical terms in
parentheses the first time they appear).

### 2.2 · Person, tense, pronouns

- **Second person singular — `tú`.** Always. Never *usted*. NOURI is a peer,
  not a doctor's office.
- **First person plural — `nosotras`.** When NOURI speaks as a collective
  (the team, the community). Never *nosotros* — the brand is for and by
  women.
- **Present indicative** wins over subjunctive for instructions.
  ✅ *Registra cómo te sientes hoy.*
  ❌ *Te recomendaríamos registrar cómo te sientas hoy.*

### 2.3 · Tone

**Direct, warm, specific.** Three rules in tension; copy is good when all
three are present.

- **Direct** — short sentences. Lead with the verb or the number.
  ✅ *Dormiste 5h 42m. Menos que el promedio de tu semana.*
  ❌ *Parece que hoy quizás no descansaste lo suficiente…*

- **Warm** — acknowledge what she is living. Never perform cheerfulness.
  ✅ *Esto no es todo en tu cabeza.*
  ❌ *¡Hola, hermosa! 🌸 ¡Tú puedes con todo! ✨*

- **Specific** — numbers, names, time windows, concrete symptoms.
  ✅ *Los sofocos suelen durar entre 1 y 5 minutos.*
  ❌ *Los sofocos pueden durar un ratito.*

### 2.4 · What we never do

| Don't | Because |
|---|---|
| "Hormonitas", "reglita", "viejita" | Diminutives infantilize |
| "Guerrera", "valiente por sufrir" | She's not a warrior for having a body |
| "Tu mejor versión" | Growth‑hack copy; empty |
| "Lamentamos las molestias" | Medical‑bureaucracy voice |
| Pink‑flamingo emoji, flowers, sparkles | Not our visual vocabulary |
| "Mamá/abuela" as default identity | She is herself first |
| Exclamation mark stacks (!!!) | One is the limit, rarely used |
| Fear framing ("los peligros de…") | We inform, we do not frighten |

### 2.5 · Casing

- **Wordmark:** NOURI (all caps, tight tracking).
- **UI labels:** sentence case (*Registrar síntoma*, not *Registrar Síntoma*).
- **Buttons:** sentence case, verb‑first (*Agregar nota*).
- **Tabs / nav:** sentence case.
- **Eyebrows / micro‑labels:** UPPERCASE with `letter-spacing: 0.14em`.
  Used sparingly — section labels in long‑form articles.

### 2.6 · Emoji & punctuation

- **Emoji: no.** Not in UI, not in push, not in marketing. If a visual needs
  a glyph, use an SVG icon (see §5).
- **Em dash (—)** is encouraged — it carries our voice's rhythm.
- **Ellipsis (…)** only for genuine trailing thought, not coy hedging.
- **Ampersand (&)** is allowed in tight display type ("cuerpo & mente").
- **Numbers** inside body copy: words for 1–9, digits for 10+. Exception:
  always digits for ages, days, hours, dosages, pressures.

### 2.7 · Reference voice samples

> **Landing hero**
> **Lo que está pasando en tu cuerpo tiene nombre.**
> Y no estás sola. Información, registro y una comunidad que vive lo mismo
> que tú — contextualizado a tu momento hormonal.

> **Onboarding, step 1**
> Cuéntanos dónde estás. No para diagnosticarte — para acompañarte.

> **Empty state, symptom log**
> Aquí vamos a guardar lo que sientes.
> Un registro tuyo, no un expediente médico.

> **Push notification**
> Llevas 3 noches con sueño fragmentado. ¿Quieres anotar qué cambió?

> **Article eyebrow**
> PERIMENOPAUSIA · 6 MIN DE LECTURA

---

## 3 · Visual foundations

### 3.1 · Palette — sampled from the mark

The logo is five overlapping diamonds on deep navy. Every brand color comes
from it. Nothing else is brand‑legal until extended here.

| Token | Hex | Role |
|---|---|---|
| `--nouri-navy` | `#1E1D2B` | Anchor; dark surfaces, display text on paper |
| `--nouri-purple` | `#7B39D2` | Primary accent — voice, action, authority |
| `--nouri-teal` | `#07B5B5` | Clarity, data, highlights, the "now" |
| `--nouri-violet` | `#8677C3` | Bridge — soft purple, secondary surfaces |
| `--nouri-lavender` | `#D6C7FD` | Calm, rest, tint washes |
| `--nouri-mint` | `#B6E8E9` | Soft teal, rest, gentle chart fills |

**Neutrals are warm paper, not cold white.** `--paper: #FBF7F1` is the
default background. This is deliberate: clinical white reads "waiting
room". Paper reads "book you wanted to read". Ink is the logo's navy
(`#1E1D2B`), never pure black.

**Semantic** — success/warning/danger are muted, not alarm‑bell: a menopause
app must flag without frightening. See `colors_and_type.css` for the full
ramp.

### 3.2 · Typography

Pairing: **Instrument Serif** (display) + **Geist** (UI/body) + **Geist
Mono** (data). See `fonts/FONTS.md` for reasoning and substitution.

**Scale rules.**
- Display serif used only ≥ 26px — small serif looks frail.
- Line‑height 1.05 for display, 1.2 for H2, 1.45 UI, 1.6 long‑form.
- `text-wrap: balance` on all headlines; `text-wrap: pretty` on body.
- `letter-spacing: -0.02em` on display; `0.14em` uppercase on eyebrows.

**Italic is a voice.** Instrument Serif italic is distinctive and we use
it for single words that carry the emotional weight of a headline:
*esto*, *ahora*, *contigo*. Don't italicize entire sentences.

### 3.3 · Layout & composition

- **Paper base.** Screens default to `--paper` (`#FBF7F1`). Dark hero
  sections are `--nouri-navy`. Avoid neutral grays for screen backgrounds.
- **Grid.** Soft 12‑column on desktop, margin `var(--s-7)` (32px) at 1280.
  Mobile: 16px gutters, 20px safe margins.
- **Rhythm.** Spacing scale is a linear 4‑based scale (see CSS). Section
  breaks use `--s-10` (72px) or `--s-11` (96px).
- **Editorial layouts** beat card‑grid layouts. Asymmetry, big type, generous
  white space. Leave cards for functional surfaces (tracker, inbox).

### 3.4 · Corner radius

| Token | Value | Used for |
|---|---|---|
| `--r-sm` | 6px | Inline chips, tight controls |
| `--r-md` | 10px | Inputs, small cards |
| `--r-lg` | 16px | Standard cards, modals |
| `--r-xl` | 24px | Feature cards, hero tiles |
| `--r-2xl` | 32px | Large editorial surfaces |
| `--r-pill` | 999px | Buttons, tabs, badges |

**Never** use radius 0 (too technical) or radius 4 (too Bootstrap).

### 3.5 · Shadows & elevation

Shadows are **warm, low, and stacked** — two layers (tight + loose) rather
than one blurry puff. They sit under surfaces to suggest **paper lifting
off paper**, not UI chrome hovering.

- `--shadow-xs` — a single hairline, for pressed inputs.
- `--shadow-sm` — default card elevation.
- `--shadow-md` — menus, popovers.
- `--shadow-lg` — modals, lifted hero tiles.

We prefer **hairline borders + soft shadow** together, over heavy shadow
alone.

### 3.6 · Borders

- Paper‑tone `#E3DCCC` — the default hairline on cream surfaces.
- `#2A2939` on navy surfaces.
- Never use `rgba(0,0,0,.1)` on paper — reads dirty.

### 3.7 · Backgrounds

- **Flat paper** is the default. Not gradient‑washed.
- **The Mark as Pattern** — the logo diamonds can be enlarged, cropped,
  faded to 8–12% opacity, and used as a background texture on feature
  pages. Only one instance per screen.
- **Photography** is preferred over illustration: real women 40–60,
  natural light, warm grade, never stock‑y. No smiling‑into‑camera stock
  photography; prefer candid, off‑axis, hands/neck/back‑of‑head framings
  that protect dignity.
- **No gradients** except the one exception below.
- **Aurora gradient** — single permitted gradient, using navy → purple →
  teal. Used only in large dark hero sections, never behind text > body
  size. See `preview/05-gradients.html`.

### 3.8 · Transparency & blur

Backdrop‑blur is used once: the floating **"NOURI aquí"** persistent nav on
mobile, which sits on a `rgba(30,29,43,.6) + backdrop-filter: blur(24px)`
over paper or photo. No glassmorphism anywhere else.

### 3.9 · Motion

**Slow, confident, never bouncy.** We design for a user who does not want
her phone performing for her.

| Token | Value | Used for |
|---|---|---|
| `--dur-fast` | 140ms | Hover, press |
| `--dur-normal` | 260ms | Enter/exit, tab change |
| `--dur-slow` | 480ms | Modal in, screen transition |

Easing is `cubic-bezier(0.22, 0.61, 0.36, 1)` — "ease‑out expo" feel,
decelerating into place. **No spring bounces. No overshoot.** A symptom
check‑in that bounces is a symptom check‑in that does not get filled in
twice.

### 3.10 · Interaction states

- **Hover (desktop)** — background darkens by one paper step
  (`--paper` → `--paper-2`), or button tint goes from `purple-600` to
  `purple-700`. Never just opacity.
- **Press** — `transform: scale(0.98)` on buttons and tiles, duration
  `var(--dur-fast)`. No color change on press.
- **Focus** — 2px solid `--nouri-purple` ring, 2px offset. Always visible
  on keyboard focus; never removed.
- **Disabled** — 40% opacity, `cursor: not-allowed`. We never gray out
  without reason; prefer showing *why* nearby.

### 3.11 · Imagery

When we use photos:
- Warm color grade (slight magenta lift in shadows, gold lift in
  highlights). Never cool/blue.
- Grain: light (2–4%), never none, never crunchy.
- B&W is allowed for portraiture only, high contrast.
- Subjects: women who look ≥ 40. No younger models standing in for the
  audience.

---

## 4 · Layout motifs

- **The diamond** — the logo's shape becomes a recurring frame: avatar
  crops, key‑moment tiles, illustrative cutouts. Rotated 45°, with
  hairline border.
- **The editorial block** — a serif pull quote set against paper with a
  single teal rule above it.
- **The tracker ring** — a teal circular progress ring, used for daily
  check‑in completion and cycle day. Always sparse — one ring per view.
- **The paper card** — raised `--paper-2` surface, `--r-lg` radius,
  hairline border, soft shadow. Used for: articles, symptom entries,
  community posts.

---

## 5 · Iconography

### Approach

NOURI's iconography is **linear, 1.5px stroke, rounded joins, no fill**.
Icons should feel like marks drawn with a fineliner, not UI chrome.

Since no icon set was shipped with the brief, we adopt **Lucide** as the
default. It matches the stroke feel, is large (1400+ icons), MIT‑licensed,
and CDN‑available.

⚠️ **Substitution flag.** Lucide is our proposal. If NOURI has a custom
icon set (hand‑drawn, Phosphor, Radix, Feather, etc.), swap in by
dropping `.svg` files into `assets/icons/` and updating the usage note
below.

### Usage

```html
<!-- via Lucide CDN (web) -->
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="heart-pulse"></i>
<script>lucide.createIcons();</script>
```

```jsx
// via lucide-react (in UI kit)
import { HeartPulse } from 'lucide-react';
<HeartPulse size={20} strokeWidth={1.5} />
```

- **Stroke:** `1.5` always. Never `2` (too heavy), never `1` (too spidery).
- **Size:** 16 / 20 / 24 / 32 on a 4px rhythm.
- **Color:** inherits `currentColor`. Action icons = `--nouri-purple`.
  Nav icons = `--fg-muted` inactive / `--fg` active.
- **No color‑filled icons.** No 3D, no gradients, no emoji.

### Emoji policy

**No emoji.** Not as icons, not as reactions, not in push. Use text + SVG.
This is a deliberate tonal choice — emoji read casual in a product that
wants to be taken seriously by a user who has been dismissed her whole
life.

### Unicode glyphs we do use

- Em dash `—` (U+2014) — as a rhythm mark in copy.
- Middle dot `·` (U+00B7) — as separator in eyebrows (`PERIMENOPAUSIA · 6 MIN`).
- Ellipsis `…` (U+2026) — only for trailing thought.

### Brand marks in `assets/`

| File | Use |
|---|---|
| `nouri-logo-darkbg.jpg` | Imagotipo on navy — primary, social avatars, app icon |
| `nouri-logo-cream.jpg` | Imagotipo on paper — light backgrounds, marketing |
| `nouri-logo-white.jpg` | Imagotipo on pure white — press, third‑party use |
| `icons/ICONS.md` | Icon usage notes |

---

## 6 · Handoff & iteration

This system is a first proposal. Things to confirm with the NOURI team:

- **Wordmark** — we only have the imagotipo. Is there a NOURI wordmark or
  combined logo with letterforms?
- **Fonts** — we propose Instrument Serif + Geist. Is there a licensed
  type system we should use instead?
- **Icons** — we propose Lucide. Does NOURI have a custom set?
- **Photography direction** — we describe it; we do not have sample
  imagery. Any mood board we should align to?
- **Surfaces** — is there a marketing site / landing page / web dashboard
  in addition to the mobile app? The UI kit currently models the mobile
  app only.
