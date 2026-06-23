# DUO Refresh — Design System

A serious, restrained design system for **business & finance software** in the visual tradition of DATEV: clear hierarchy, calm color, flat surfaces, and dense-but-airy data layouts. Built so a designer or engineer can ship a new view that looks like it has always belonged.

> **Source material:** a written design specification (DATEV-style guidelines, see project chat). No codebase, Figma, or screenshots were attached — all visual decisions in this system are derived from the spec, with reasonable choices made where the spec was silent. The Open Sans webfont is a documented match for the spec's "clean modern sans-serif" requirement; flag if a proprietary house face exists.

---

## Index — what's in this folder

| File / folder | Purpose |
| --- | --- |
| `colors_and_type.css` | All design tokens (color, type, spacing, radii, shadows, motion). Import this in every artifact. |
| `preview/` | Specimen cards that populate the Design System tab — color swatches, type ramps, components in isolation. |
| `assets/` | Logo, mark, empty-state illustrations. |
| `ui_kits/app/` | High-fidelity recreation of the DUO Refresh business app — dashboard, master data, transactions, document upload, table view. |
| `SKILL.md` | Agent Skill front-matter for cross-tool use. |

---

## Product context

**DUO Refresh** is a web application for German-speaking SMEs and tax advisors (Steuerberater) to manage finances, accounting documents, payments, and master data (Stammdaten). It sits in the same product space as DATEV Unternehmen Online — a tool people use every day, often for hours, to file receipts, reconcile bank transactions, manage clients, and prepare bookkeeping. The UI must be **trustworthy, fast to scan, and uncluttered**. Decorative flourishes belong in consumer apps; they are out of place here.

The system contains:
- A **global app shell** (petrol header + sub-navigation + tabs)
- **Dashboards** of action-tiles
- **Lists & tables** with row-level actions
- **Detail screens** built from a left rail of nav + content cards
- **Form-heavy editors** (master data, payment terms, contacts)
- **Upload flows** (drop zones, file pickers)
- **Empty states** with two-tone illustrative placeholders

---

## Content fundamentals

**Language.** German first. Formal register (`Sie`-form), but plain — no legalese, no jargon dumps. Section labels are noun phrases (`Stammdaten`, `Zahlungsbedingungen`, `Belege`). Buttons are verbs (`Hinzufügen`, `Bearbeiten`, `Dateien auswählen`, `Löschen & Kündigen`).

**Tone.** Calm, competent, neutral. Never breezy, never apologetic. The product is a tool, not a friend; copy is direct.

> ✓ "Keine Zahlungsbedingungen gefunden."
> ✗ "Hier ist's leider noch ganz schön leer 😅"

**Casing.** German sentence case for body and most UI text (`Belege hinzufügen`). Title Case is avoided. UPPER CASE used sparingly for tiny meta-labels (one or two words, tracked).

**Numbers & data.** Numeric values that matter (KPIs, balances, counts, transaction totals) are set in **bold**. Currency uses German formatting: `1.234,56 €`. Dates are `TT.MM.JJJJ`.

**Voice.** Generally avoid "you" / "wir". Phrase as system status, not conversation: `Belege wurden hochgeladen` rather than `Wir haben Ihre Belege hochgeladen`.

**No emoji.** None. Status is communicated through icons, badges, and color — never glyphs.

**Microcopy examples**
- Empty state: `Keine Kontaktdaten vorhanden.`
- Warning: `Es fehlen Pflichtangaben in den Stammdaten.`
- CTA: `Dateien auswählen` (primary), `Abbrechen` (secondary).
- Destructive: `Löschen & Kündigen` (full sentence, no exclamation).

---

## Visual foundations

### Color
Two brand colors carry the entire UI:
- **Petrol `#2C5A6A`** — the global header, sub-nav, active tabs, primary headings, link color.
- **Action green `#85B946`** — every primary action (button, add-icon, "+", confirm).

Everything else is greyscale: app background `#F0F2F4`, cards `#FFFFFF`, borders `#E4E8EB`. Status colors (warning yellow, danger red) appear only inside alert containers, never as raw text or buttons. **Invent no other blues, no other greens, no gradients.** Tags (`Belege`, `L`, `Angelegt`) draw from a tiny named palette — violet, petrol, amber, grey — each used as a `bg + text` pair.

### Typography
**Open Sans**, regular and medium most of the time. Headlines are *not* heavy — `h1` ships at 24px / 400 weight in petrol, deliberately understated. Bold is reserved for: KPI numbers, table cells with primary identifiers, and the occasional callout. Line-height stays loose (1.45) so dense tables breathe.

### Spacing
A 4-px base scale (`4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 56`). Card padding is `24px`. Table cells `12px 16px`. Form rows `16px` vertical. Sections separated by `32–40px`. The grid is forgiving; whitespace is generous **between** modules, snug **within** them.

### Cards & surfaces
Everything that isn't header chrome lives on a **white card** with `1px solid #E4E8EB` and `border-radius: 4–6px`. **Flat by default.** Shadows are reserved for popovers, dropdowns, and modals; never on the resting state of a card. A card has a header row (title left, action-link right) and a content area, optionally separated by a `1px` divider.

### Borders & dividers
- Card border: `1px solid #E4E8EB`
- Table row divider: `1px solid #E4E8EB` (horizontal only — never vertical column rules)
- Input border: `1px solid #CED4D8`, focus → `1px solid #2C5A6A`
- Drop zone: `2px dashed #B0BEC5`

### Corner radii
4–6px throughout. Pill-shape (`999px`) is allowed *only* for chips/tags and search inputs. Big rounded buttons are out of character.

### Backgrounds & imagery
No hero images, no patterns, no gradients on UI surfaces. The only illustrative element is the **empty-state graphic** — a two-tone outline document with a `?` or `+` accent, in pale grey-blue with a single green dot. Photography, if any, lives only on a marketing site, not in the app.

### Animation
Restrained. `120–180ms` transitions for hover, focus, and accordion expansion, easing `cubic-bezier(.2,0,.2,1)`. No bounces, no spring, no parallax. Loading uses a determinate spinner or skeleton row — never a marketing-style animated illustration.

### Hover & press
- Row hover: background → `#F4F6F7`
- Button hover: brand color darkens by ~6%
- Press: darkens another ~4%, no scale change
- Link hover: underline
- Focus: 2px petrol outline at 2px offset (keyboard only)

### Transparency & blur
Effectively unused. Modals dim the page with a `rgba(20,40,50,0.45)` veil — no backdrop-filter, no glass effects. Dropdowns and popovers are fully opaque white with the popover shadow.

### Layout rules
- Fixed-height global header (`56px`) at all times.
- Fixed-height sub-header (`44px`) when present.
- Left rails are non-sticky, 240–280px wide, page-scroll along with content.
- Page max-width: `1280px`, centered with `24px` gutters at smaller widths.

---

## Iconography

**Approach.** Line icons, single weight (1.5–2px stroke), no fill. Two functional colors: petrol (`#2C5A6A`) for navigational and informational icons, action green (`#85B946`) for "add" / "confirm" affordances. Icons stand at `16px` inline with text and `20–24px` standalone in tile/empty-state contexts. Status badges use solid fills, but icons proper stay outlined.

**Source.** This system ships with the brand mark in `assets/` and pulls glyphs from **Lucide** (`https://unpkg.com/lucide@latest`) — its weight and geometry match the DATEV-family aesthetic closely. Substitution noted; if a house icon set exists, drop the SVGs into `assets/icons/` and update `ui_kits/app/components/Icon.jsx`.

**Emoji.** Never. Not in UI, not in copy.

**Unicode glyphs.** Allowed only for typographic helpers (`›`, `·`, `…`, `–`), never as semantic icons.

---

## Substitutions & gaps (please review)

- **Typeface.** Open Sans is used as the spec called only for "a clean, modern sans-serif (Arial, Roboto, Segoe UI, Open Sans)." If DUO Refresh has a brand face, ship the `.woff2` into `fonts/` and update `--font-sans`.
- **Icon set.** Lucide. Swap if a proprietary set exists.
- **Logo.** A placeholder DUO Refresh logo (`assets/logo.svg`) was constructed from the brand colors — replace with the real one.
- **Imagery.** No product photography or marketing-style imagery is included; spec implied an in-app-only system.

---

## How to use

1. Import `colors_and_type.css` at the top of any HTML artifact.
2. Look at `ui_kits/app/index.html` for a working composition of header + sub-nav + cards + table.
3. Lift individual components from `ui_kits/app/components/*.jsx`.
4. Stay flat. When in doubt, remove a shadow, calm a color, and add white space.
