# NOURI — Fonts

## Pairing

| Role | Family | Source |
|------|--------|--------|
| Display / editorial | **Instrument Serif** | Google Fonts |
| UI + body | **Geist** | Google Fonts |
| Data / mono | **Geist Mono** | Google Fonts |

All three are loaded via `@import` from Google Fonts at the top of
`colors_and_type.css`. If you ship to production, replace the `@import` with
`<link rel="preconnect">` + `<link rel="stylesheet">` tags for performance.

## Substitution note ⚠️

No custom font files were provided with the brief. Instrument Serif and Geist
are **our proposed pairing** for NOURI — they match the editorial / confident /
modern tone the brand needs (editorial like a women's magazine, neutral on UI).

If NOURI has licensed typefaces (e.g. a custom display serif, Söhne, Editorial
New, etc.), please drop the `.woff2` files into `fonts/` and update this
`@import` in `colors_and_type.css` accordingly.

## Why this pairing

- **Instrument Serif** — high-contrast transitional serif with a distinctive
  italic. Conveys authority and care. Feels like it belongs on a book cover
  about women's lives, not a medical pamphlet.
- **Geist** — humanist grotesque designed for screens. Neutral enough to
  disappear, warm enough not to feel corporate. Excellent at 14–18px body.
- **Geist Mono** — pairs perfectly with Geist for dosages, timestamps,
  cycle-day numerics, and tabular data.
