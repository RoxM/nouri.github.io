---
name: nouri-design
description: Use this skill to generate well-branded interfaces and assets for NOURI, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

NOURI is a Spanish-language health platform for women in perimenopause and
menopause. Voice is direct, warm, specific — always `tú`, never `usted`, never
emoji. Visual language is editorial (Instrument Serif display + Geist UI) on
warm paper (`#FBF7F1`), anchored by navy (`#1E1D2B`) and the logo's purple +
teal accents. See `README.md` for the full content fundamentals, visual
foundations, and iconography guidance.

Key files:
- `README.md` — brand context, content rules, visual foundations, iconography
- `colors_and_type.css` — all CSS variables (colors, type scale, spacing, radii, shadows, motion)
- `assets/` — logo variants (dark bg, cream, white)
- `ui_kits/app/` — mobile app recreation (JSX components)
- `preview/` — individual design-system cards

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy
assets out of `assets/` and create static HTML files for the user to view,
linking `colors_and_type.css`. If working on production code, copy the tokens
and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they
want to build or design, ask some questions, and act as an expert designer who
outputs HTML artifacts _or_ production code, depending on the need.
