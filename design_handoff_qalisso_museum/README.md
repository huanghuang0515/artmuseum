# Handoff: QALISSO Museum Website

## Overview
A complete marketing + ticketing website for QALISSO Museum, a fine-art museum. Seven screens cover the full visitor journey: discovering the museum (Home), browsing what's on (Exhibitions, Collections, Events), planning a trip (Visit), getting in touch (Contact), and buying admission (Tickets, a 3-step booking flow).

The design language is warm, editorial, and print-influenced: a tobacco/cream palette, oversized serif display type, arched and circular image crops, hairline rules, and a four-pointed star ornament used as a section marker.

## About the Design Files
**The files in this bundle are design references created in HTML.** They are prototypes that demonstrate the intended look, layout, copy, and interaction behavior — they are not production code to lift directly.

The task is to **recreate these designs in the target codebase's existing environment** (React, Next.js, Vue, SwiftUI, native, etc.) using its established routing, component library, styling solution, and conventions. If the project has no environment yet, choose the framework most appropriate for a content-driven marketing site with a booking flow (Next.js or Astro are both good fits) and implement the designs there.

Specifically, do not carry over from the prototypes:
- Inline `style={{}}` objects — port these to the codebase's styling approach (CSS Modules, Tailwind, styled-components, etc.)
- `window`-global component registration (`Object.assign(window, {...})`) — a Babel-in-browser workaround
- Hash-based page switching in `App.jsx` — use the codebase's real router
- Hardcoded content arrays — these should come from a CMS or API in production

## Fidelity
**High-fidelity (hifi).** Colors, typography, spacing, and interaction behavior are final and should be matched closely. All values are documented below. Two caveats:

1. The original Figma file uses a licensed display typeface called **Qalisso**. The prototypes substitute **Cinzel** (Google Fonts). If the real Qalisso license is available, swap it in — it is the brand face.
2. Images in `assets/` are Unsplash placeholders extracted from the Figma file. Production will need real museum photography and artwork images.

---

## Screens / Views

### 1. Home (`HomePage.jsx`)

**Purpose:** Establish the brand, surface the current headline, and funnel to Collections.

**Sections, top to bottom:**

**1a. Hero**
- Full-viewport (`min-height: 100vh`), background `#9F7C53`
- Horizontal hairline: `2px` at `rgba(255,255,255,0.35)`, inset `8%` left/right, `88px` from top (sits just under the nav)
- Two-column flex, `padding: 130px 8% 100px`, gap `5%`
  - **Left (52%):** `QALISSO` display heading → ornament divider row → `MUSEUM` display heading → bold lede paragraph → light body paragraph
    - Headings: Cinzel 400, `clamp(68px, 9.5vw, 152px)`, `line-height: 1`, white. `MUSEUM` carries `letter-spacing: 0.1em`
    - Ornament row: 1.5px `rgba(255,255,255,0.38)` rules flanking a 34px star, 18px margin each side
    - Lede: Roboto 700, 17px, white, `max-width: 480px`
    - Body: Roboto 300, 16px, `line-height: 1.85`, `rgba(255,255,255,0.82)`, `max-width: 480px`
  - **Right (43%):** featured artwork, `clamp(260px, 32vw, 500px)` square, `border-radius: 50% 50% 0 50%` (three-corner arch), `box-shadow: 0 24px 80px rgba(0,0,0,0.28)`
- Slide dots: bottom 36px, centered. Active dot 28×9px white pill; inactive 9×9px `rgba(255,255,255,0.38)`
- Chevrons `‹` `›`: 32px, `rgba(255,255,255,0.7)`, vertically centered, 28px from each edge

**1b. Culture** — background `#EFD2B0`, `padding: 100px 8%`, two-column flex gap `6%`
- Left (42%): image with the same `50% 50% 0 50%` arch crop, `max-height: 680px`
- Right: `CULTURE` heading (Cinzel, `clamp(44px, 6vw, 96px)`, `#5F2E13`) → justified body (Roboto 300, 18px, `line-height: 1.88`, `max-width: 560px`) → "Read more" arrow link → navigates to Exhibitions

**1c. Story Description** — background `#C2A786`, `padding: 80px 8%`
- Centered heading flanked by two 30px stars, gap 20px, `margin-bottom: 60px`
- 3-column grid, gap 40px. Each card: 3:4 image (scales to 1.05 on hover, 0.45s), Marcellus 22px title, Roboto 300 15px body, arrow link
- Cards lift `translateY(-5px)` on hover (0.3s)

**1d. Collections preview** — background `#544534`, `padding: 80px 8%`
- White heading flanked by two 34px white stars, then a 1.5px `rgba(255,255,255,0.28)` rule
- 3-column grid of 6 images, gap 12px, aspect `4/3`. Images zoom to 1.05 on hover
- Centered `Explore` button: white fill, black text, `border-radius: 40px`, `padding: 12px 44px`, Roboto 18px, scales to 1.03 on hover → navigates to Collections

---

### 2. Exhibitions (`ExhibitionsPage.jsx`)
Background `#DCC1A1`.

- **Hero:** 85vh, full-bleed photo with `linear-gradient(rgba(0,0,0,0) 25%, rgba(0,0,0,0.86))` scrim. Content bottom-left at `8%`: `CURRENT` badge → `GIORGIO VASARI` (Cinzel, `clamp(32px, 4.5vw, 66px)`) → Marcellus 19px subtitle at 88% opacity → Roboto 300 15px date at 75%
- **Card row:** `padding: 80px 8%`, 3-column grid gap 36px. Each card: `2/2.8` image with a `CURRENT` badge absolutely positioned top-left (16px/16px), Cinzel 20px title (`letter-spacing: 0.06em`), Roboto 300 14px subtitle, Roboto 300 13px date at 65% opacity
- **Section label row:** `THE QALISSO MUSEUM` in Marcellus 17px, followed by a flex-filling 1px `rgba(95,46,19,0.35)` rule
- **Detail pair:** 2-column grid gap 72px. Each: `3/2` image → Marcellus 30px title → Roboto 300 16px body (`line-height: 1.8`) → Roboto 13px date at 65%

**`CURRENT` badge spec:** `1.5px solid` current color, `border-radius: 28px`, `padding: 3px 14px`, Roboto 12px, `letter-spacing: 0.08em`

---

### 3. Collections (`CollectionsPage.jsx`)
Background `#C2A786`, `padding-top: 100px` to clear the fixed nav.

- **Header block:** 8 star ornaments scattered at 45% opacity (16px and 22px alternating) at fixed positions around the title. `COLLECTIONS` in Cinzel `clamp(38px, 5.5vw, 78px)`, `letter-spacing: 0.06em`
- **Search:** `max-width: 720px`, centered. Magnifier SVG + text input on a `1.5px solid #5F2E13` bottom border; black pill `Search` button (`border-radius: 30px`, `padding: 11px 30px`). Below-left: `Advanced search` link with its own icon
  - Typing filters rows live against `title` and `author` (case-insensitive substring)
- **Results table:** `grid-template-columns: 180px 1fr 150px 170px`, gap 24px
  - Header row: labels `""`, `Title, author, description`, `Date`, `Inventory N°` — Roboto 14px at 55% opacity, `border-bottom: 1px solid rgba(95,46,19,0.3)`
  - Data rows: `padding: 26px 16px`, `border-bottom: 1px solid rgba(95,46,19,0.14)`, hover background `rgba(95,46,19,0.07)` (0.2s)
  - Cells: 160×115px thumbnail; Marcellus 19px title + Roboto 300 14px author + Roboto 300 13px medium at 60%; Roboto 300 15px date; Roboto 300 13px inventory number
  - Empty state: centered `No results for "<query>"`, Roboto 300 17px at 60%
- **Pagination:** `‹ 1 / 35 ›`. The active page number sits on a 44×30px `rgba(214,185,150,0.6)` highlight block

---

### 4. Events (`EventsPage.jsx`)
Background `#B28F65`. Text color throughout is `#431C07` (darker than the site brown).

- **Hero:** 82vh photo, `linear-gradient(rgba(0,0,0,0.18), rgba(0,0,0,0.55))` scrim, centered `EVENTS` in Cinzel `clamp(52px, 7vw, 110px)` with `letter-spacing: 0.07em`
- **Filter bar:** `padding: 32px 8%`, `border-bottom: 1px solid rgba(67,28,7,0.22)`. Contains, left to right: `ALL DATES` (calendar icon + chevron), `🌙 Night Opening` toggle pill, and `Type` / `Public` / `Age` chevron dropdowns, plus two 32×1px vertical separators
  - **Night Opening is functional:** when on, the pill inverts (fill `#431C07`, white text) and the list filters to `night: true` events only
- **Event rows:** `grid-template-columns: 1fr 240px 160px 48px`, gap 36px, `padding: 44px 0`, `border-bottom: 1px solid rgba(67,28,7,0.2)`. Row opacity drops to 0.85 on hover
  - Col 1: uppercase category (Roboto 11px, `letter-spacing: 0.1em`, 62% opacity) → Cinzel `clamp(22px, 2.4vw, 32px)` title → Roboto 300 15px description (`max-width: 600px`)
  - Col 2: `SCHEDULE` label + value; Col 3: `AUDIENCE` + value + `Age NN`; Col 4: right arrow
  - Labels: Roboto 11px, `letter-spacing: 0.07em`, uppercase, 55% opacity
- **Empty state:** `No night events currently scheduled.`

---

### 5. Visit (`VisitPage.jsx`)
Background `#EFD2B0`.

- **Hero split:** `min-height: 88vh`. Left 45% full-bleed building photo; right: `CULTURE` heading (`clamp(40px, 5.5vw, 88px)`), justified Roboto 300 17px body, `Plan your visit` arrow link. Right padding `130px 7% 80px`
- **Hours & Admission card:** white, `padding: 60px 64px`, `border-radius: 3px`, `box-shadow: 0 4px 40px rgba(0,0,0,0.06)`, sitting on the cream page at `padding: 80px 8%`
  - Heading flanked by two 32px stars, `clamp(28px, 4vw, 66px)`
  - Two-column grid gap 64px: **Opening Hours** and **Admission**, each a Marcellus 22px subhead over rows of `padding: 15px 0` with `border-bottom: 1px solid rgba(95,46,19,0.1)`, label left / value right
  - `CLOSED` renders in `#c0392b` at weight 600; its label goes to weight 700
- **Tradition section:** `padding: 60px 8% 80px`. `Tradition` heading → 2px `rgba(255,255,255,0.55)` rule → justified Roboto 300 18px body (`max-width: 840px`) → two `4/3` photos side by side (gap 24px, zoom to 1.04 on hover) → one full-width `21/9` interior photo

**Content — Opening Hours:** Monday `9 a.m. – 6 p.m.` / Wednesday–Sunday `9 a.m. – 6 p.m.` / Friday (late) `9 a.m. – 9:45 p.m.` / Tuesday `CLOSED`

**Content — Admission:** General admission `€17` / Tickets purchased online `€17` / Reduced admission `€13` / Under 18 (EU nationals) `Free` / Under 26 (EU nationals) `Free`

---

### 6. Contact (`ContactPage.jsx`)
Background `#EFD7BB`, `padding-top: 100px`.

- Two-column grid `1fr 1.5fr`, gap 10%
- **Left:** `Contact` heading (`clamp(44px, 5vw, 78px)`), then museum details at `line-height: 2.15` (name Roboto 600 17px; the rest Roboto 300 15px), then a 170px-tall map thumbnail with `box-shadow: 0 4px 24px rgba(0,0,0,0.1)`
- **Right:** three fields using the shared `.mu-input` underline style, 36px apart — `Enter your name`, `Enter a valid email address`, `Enter your message` (textarea, 5 rows). Right-aligned `Send` button: `#5F2E13` fill, white text, `border-radius: 40px`, `padding: 13px 48px`, darkens to `#3D1A08` on hover
- **Validation** (on submit, `noValidate` on the form):
  - Name empty → `Please enter your name.`
  - Email empty or fails `/\S+@\S+\.\S+/` → `Please enter a valid email.`
  - Message empty → `Please enter a message.`
  - Errors render in `#c0392b` at Roboto 13px, 5px under the field, and clear as soon as that field changes
- **Success state** replaces the form: 48px star → `Thank you!` (Cinzel 36px) → `Your message has been sent. We'll get back to you shortly.` → `Send another` ghost button, which resets the form
- **Bottom row:** 32px above a `1px rgba(95,46,19,0.2)` top border, three items space-between: `Qalisso Museum` / `+33 1 44 23 08 55` / `qalissomuseum@qaliss.com`

---

### 7. Tickets (`TicketsPage.jsx`)
Background `#EFD7BB`, `padding-top: 100px`. Reached by the nav's Tickets button.

- **Header:** `BOOK YOUR VISIT` eyebrow (Roboto 13px, `letter-spacing: 0.18em`) between two 26px stars → `Tickets` (Cinzel `clamp(46px, 6vw, 92px)`) → centered Roboto 300 16px intro, `max-width: 560px`
- **Stepper:** three nodes — `1 Select tickets`, `2 Date & time`, `3 Checkout` — joined by 80×1px rules. Completed/current nodes are 32px `#5F2E13` circles with white numerals; pending nodes use `rgba(95,46,19,0.18)` fill and 55%-opacity labels
- **Body:** two-column grid `1.6fr 1fr`, gap 48px, items start-aligned

**Step 1 — ticket picker.** Stack of cards, gap 14px. Each card is white, `padding: 22px 28px`, `border-radius: 6px`, `grid-template-columns: 1fr auto auto`, gap 24px.
- Unselected: `box-shadow: 0 2px 10px rgba(0,0,0,0.04)`, transparent 1.5px border
- Selected (qty > 0): `box-shadow: 0 4px 22px rgba(95,46,19,0.18)`, `1.5px solid #5F2E13`
- Name Marcellus 20px; description Roboto 300 13px at 70%; price Marcellus 24px right-aligned, `min-width: 70px`, showing `Free` when 0
- Quantity stepper: two 32px circular buttons `−` / `+` with the count between them. Active buttons fill `#5F2E13` with white glyph; the `−` button is outlined at `rgba(95,46,19,0.25)` while qty is 0
- The `POPULAR` flag on Family Pass: `#295B37` fill, white, `border-radius: 20px`, `padding: 3px 12px`, Roboto 11px, absolutely positioned `top: -10px; left: 24px`

**Step 2 — date & time.** White panel, `padding: 40px`. Marcellus 24px heading, Roboto 300 14px note (`Closed Tuesdays. Last entry 30 minutes before closing.`), a native date input (`#FAF4EC` fill, `1.5px solid rgba(95,46,19,0.3)`, `border-radius: 4px`), then a `repeat(4, 1fr)` grid of eight time-slot buttons (gap 10px). Selected slot inverts to `#5F2E13` / white.
- Slots: `09:00 10:00 11:00 12:30 14:00 15:30 17:00 19:30`

**Step 3 — details & payment.** White panel. `Your details` (Marcellus 24px) over three `.mu-input` fields — `Full name`, `Email address`, `Phone (optional)`. Then a `1px rgba(95,46,19,0.15)` divider, `Payment` (Marcellus 18px), a `Card number` field, and a 2-column `MM / YY` + `CVC` pair.

**Step navigation** (below the panel, 32px gap, space-between):
- Left: `‹ Back`, or `‹ Cancel` on step 1 (returns to Home). Ghost style: transparent fill, `1.5px solid #5F2E13`, `border-radius: 40px`, `padding: 12px 32px`
- Right: `Continue ›` on steps 1–2, `Confirm & Pay €<total>` on step 3. Primary style: `#5F2E13` fill, white, `border-radius: 40px`, `padding: 13px 36px`
- `Continue` is disabled (opacity 0.4, `cursor: not-allowed`) while zero tickets are selected

**Order summary** (right column, `position: sticky; top: 120px`):
- White card, `padding: 32px`, `border-radius: 6px`, `box-shadow: 0 4px 24px rgba(0,0,0,0.06)`
- `🎟 Order Summary` header (Marcellus 20px, icon in `#295B37`)
- Empty: `No tickets selected yet. Choose ticket types from the list to begin.`
- Populated: one row per selected type (name + `× qty` on the left, line total right), each `padding: 10px 0` with a `rgba(95,46,19,0.1)` bottom rule
- From step 2 onward, a Date / Time block appears above the total
- Total row: `Total (N)` label at 70% opacity, amount in Marcellus 32px
- **Reassurance box** below, 18px gap: `rgba(95,46,19,0.06)` fill, `border-radius: 6px`, `padding: 18px 22px`, Roboto 300 13px — free cancellation up to 24 hours, mobile e-tickets

**Ticket inventory:**

| id | Name | Price | Description |
|---|---|---|---|
| `general` | General Admission | €17 | Full access to permanent collections and current exhibitions. |
| `reduced` | Reduced Admission | €13 | Students, seniors 65+, and groups of 10 or more. |
| `family` | Family Pass | €38 | Two adults and up to three children under 18. *(POPULAR)* |
| `night` | Night Opening | €20 | Friday evenings — galleries open until 9:45 p.m. |
| `guided` | Guided Tour | €28 | Includes admission + 90-minute expert-led tour. |
| `youth` | Under 26 (EU) | Free | Complimentary admission. ID required at entry. |

> **Production note:** step 3 currently fires a browser `alert()` on confirm. This needs a real payment integration (Stripe or equivalent), server-side inventory/capacity checks per time slot, and an order-confirmation screen with a booking reference and QR code.

---

## Shared Chrome

### Navbar (`Navbar.jsx`)
- `position: fixed`, full width, `z-index: 1000`, `padding: 18px 60px`, space-between
- **Transparent at top:** no background, `border-bottom: 1px solid rgba(255,255,255,0.18)`
- **Past 60px scroll:** background `rgba(36,14,2,0.92)`, `backdrop-filter: blur(14px)`, border becomes `rgba(255,233,208,0.1)`. Transition `all 0.35s ease`
- **Logo (left):** two stacked Cinzel 15px lines — `QALISSO ✦` (`letter-spacing: 0.1em`) and `MUSEUM` (`letter-spacing: 0.2em`) — clicking goes Home
- **Links (center):** `HOME VISIT EVENTS COLLECTIONS EXHIBITIONS CONTACT`, gap 38px, Roboto 14px uppercase, `letter-spacing: 0.07em`, white. Resting opacity 0.72 → 1 on hover/active. Hover adds `border-bottom: 1px solid rgba(255,255,255,0.55)`; active page uses `rgba(255,255,255,0.75)`
- **Tickets button (right):** `🎟` glyph in `#295B37` + `Tickets`, `1.5px solid rgba(255,255,255,0.65)`, `border-radius: 40px`, `padding: 7px 22px`. Hover `rgba(255,255,255,0.12)`; while on the Tickets page it holds `rgba(255,255,255,0.18)`

> **Accessibility note:** the nav is white-on-transparent and currently sits over light hero imagery on several pages. Verify 4.5:1 contrast per page during implementation; a subtle top-edge scrim may be needed.

### Footer (`Footer.jsx`)
- Background `#222222`, white text, `padding: 64px 8% 36px`
- Upper zone: `grid-template-columns: 1fr 1.6fr`, gap 80px, `padding-bottom: 40px`, `border-bottom: 1px solid rgba(255,255,255,0.12)`
  - **Left:** `QALISSO MUSEUM` (Roboto 600 15px, `letter-spacing: 0.07em`), contact block at Roboto 300 14px / `line-height: 2.1` / 78% opacity, then a 110px map thumbnail
  - **Right:** the six nav links (Roboto 14px, 75% → 100% opacity on hover), and below them four 50px circular social buttons (`0.5px solid rgba(255,255,255,0.45)`, gap 14px, hover fill `rgba(255,255,255,0.1)`)
- Lower bar: legal links — `Legal Notice`, `Privacy Policy`, `Cookies`, `Credits`, `Copyright` — Roboto 300 13px at `rgba(255,255,255,0.52)`, hover `rgba(255,255,255,0.85)`; opposite them the `QALISSO ✦ MUSEUM` wordmark in Cinzel 14px, `letter-spacing: 0.12em`

**Footer contact content:** `+33 1 44 23 08 55` / `qalissomuseum@qaliss.com` / `102 terrasse Boieldieu, Tour W` / `12ème étage, 92800 Puteaux`

> **Production note:** social buttons are text glyphs (`f`, `◎`, `𝕏`, `▶`) standing in for real icons. Use the codebase's icon set.

---

## Interactions & Behavior

**Navigation.** Seven routes: `HOME`, `VISIT`, `EVENTS`, `COLLECTIONS`, `EXHIBITIONS`, `CONTACT`, `TICKETS`. Every navigation scrolls to top instantly and swaps `document.title` to `<PAGE> — QALISSO MUSEUM` (bare `QALISSO MUSEUM` on Home). The prototype mirrors state into `window.location.hash` and restores from it on load — replace with real routes and real `<title>` handling.

**Page transition.** Each page mounts with `pageFadeIn`: `opacity 0 → 1` and `translateY(10px) → 0` over 0.5s ease. Keyed on the route so it replays per navigation.

**Hover vocabulary.**
- Image zoom: `transform: scale(1.05)` over 0.45s ease (0.4s / 1.04 on Visit photos)
- Card lift: `translateY(-5px)` over 0.3s ease
- Arrow links: `gap` grows `12px → 18px` over 0.25s, so the arrow slides away from the label
- Table rows: background tint, 0.2s
- Buttons: fill or opacity change, 0.2–0.22s

**Functional interactions.** Collections search filters live on every keystroke. Events' Night Opening pill filters the list. Contact validates on submit and swaps to a success state. Tickets drives quantity state, a 3-step wizard, and a live-recalculating summary; `Continue` is gated on a non-empty cart.

**Responsive.** The prototypes are desktop-only — all multi-column grids are fixed-count and percentage padding is uniform `8%`. **Mobile and tablet layouts are undesigned.** At minimum, implementation needs: a hamburger nav under ~900px, single-column collapse for every grid, a card-based recast of the Collections table and Events rows, and the Tickets summary moving from sticky sidebar to a bottom bar or accordion. Confirm the intended breakpoint behavior before building.

---

## State Management

| Screen | State | Notes |
|---|---|---|
| App | `page` | Active route; replace with router state |
| Navbar | `scrolled` | `true` past 60px of scroll, from a `scroll` listener |
| Collections | `query` | Search string; filters client-side |
| Events | `nightOnly`, `dateFilter` | `nightOnly` is wired; `dateFilter` is declared but the dropdown is not yet functional |
| Contact | `form {name, email, message}`, `errors`, `sent` | `sent` swaps in the thank-you state |
| Tickets | `selected {[id]: qty}`, `date`, `time`, `step` | `selected` keys are deleted at qty 0, so `Object.keys` gives the cart |

**Data fetching.** Nothing is fetched — all content is hardcoded arrays in the page files. In production, exhibitions, collections, and events should come from a CMS or collections API (Collections especially, since it paginates to 35 pages), and the Tickets flow needs live pricing and per-slot capacity from a ticketing backend.

---

## Design Tokens

**Colors**

| Token | Hex | Use |
|---|---|---|
| Brown (ink) | `#5F2E13` | Primary text, buttons, borders on light grounds |
| Brown dark (hover) | `#3D1A08` | Primary button hover |
| Events ink | `#431C07` | All text on the Events page |
| Hero brown | `#9F7C53` | Home hero background |
| Culture cream | `#EFD2B0` | Home culture section, Visit page |
| Stories tan | `#C2A786` | Home stories section, Collections page |
| Collections dark | `#544534` | Home collections-preview section |
| Exhibitions tan | `#DCC1A1` | Exhibitions page |
| Events tan | `#B28F65` | Events page |
| Contact cream | `#EFD7BB` | Contact page, Tickets page |
| Panel cream | `#FAF4EC` | Input fills on the Tickets page |
| Footer | `#222222` | Footer |
| Nav scrolled | `rgba(36,14,2,0.92)` | Scrolled nav background |
| White | `#FFFFFF` | Text on dark, card surfaces |
| Accent green | `#295B37` | Ticket glyph, POPULAR flag |
| Error red | `#c0392b` | Validation errors, `CLOSED` |
| Highlight | `rgba(214,185,150,0.6)` | Active pagination block |

Recurring alphas on the brown ink: `0.06` (fills), `0.1` / `0.14` / `0.15` (hairlines), `0.2` / `0.22` / `0.25` / `0.3` / `0.35` (borders), `0.55` / `0.6` / `0.62` / `0.65` / `0.7` / `0.75` (secondary text).

**Typography**

| Role | Family | Weight | Size |
|---|---|---|---|
| Display | Cinzel (stand-in for Qalisso) | 400 | `clamp()` per screen, up to 152px |
| Subhead | Marcellus | 400 | 18–30px |
| Body | Roboto | 300 | 13–18px |
| UI / labels | Roboto | 400–600 | 11–16px |

Line heights: `1` for display, `1.5–1.55` compact, `1.7–1.75` standard, `1.85–1.88` long-form justified, `2.1–2.15` contact blocks.
Letter spacing: `0.04em` buttons, `0.05–0.07em` nav and labels, `0.08–0.1em` eyebrows and badges, `0.12–0.2em` wordmarks.

**Spacing.** Page gutter is `8%` throughout (`7%` on the Visit hero's right column). Section padding runs `60–100px` vertically. Grid gaps: `10px` (slot buttons), `12px` (image grid), `14px` (ticket cards), `24px` (table columns), `36px` (card row), `40px` (stories), `48px` (tickets layout), `64–80px` (footer, Hours & Admission), `72px` (exhibition detail pair).

**Radius.** `3px` panels · `4px` inputs and small buttons · `6px` ticket cards and summary · `20–28px` badges · `30–40px` pill buttons · `50%` circles · `50% 50% 0 50%` the signature three-corner arch on featured images.

**Shadow.** `0 2px 10px rgba(0,0,0,0.04)` resting card · `0 4px 22px rgba(95,46,19,0.18)` selected card · `0 4px 24px rgba(0,0,0,0.06)` summary · `0 4px 40px rgba(0,0,0,0.06)` large panel · `0 4px 24px rgba(0,0,0,0.1)` map · `0 24px 80px rgba(0,0,0,0.28)` hero image.

---

## Assets

All images live in `assets/` and were extracted from the source Figma file, where they are **Unsplash placeholders**. They are included so the layouts render, and should be replaced with licensed museum photography and artwork reproductions.

| File | Used on |
|---|---|
| `home-round.jpg` | Home hero featured artwork; Collections row |
| `culture.jpg` | Home culture section |
| `story1.jpg` | Home stories; Exhibitions detail; Collections row |
| `col1.jpg`, `col2.jpg` | Home collections grid; Collections rows |
| `exh-card1.jpg` | Home stories; Exhibitions card; Collections row |
| `exhibitions-hero.jpg` | Exhibitions hero |
| `exhibitions-detail.jpg` | Exhibitions cards and detail; Collections row |
| `event-hero.jpg` | Events hero |
| `visit-building.png` | Visit hero (left panel) |
| `visit-photo1.jpg`, `visit-photo2.jpg` | Visit tradition pair |
| `visit-interior.jpg` | Visit full-width interior |
| `footer-map.jpg` | Footer and Contact map thumbnails |

**Vector marks** (`Shared.jsx`) are inline SVG, no image files: `StarOrnament` — the four-pointed star used as a section marker, `viewBox="0 0 34 35"`, takes `size` and `color`; `ArrowRight` — a line-plus-chevron arrow taking `color` and `length`.

**Fonts** load from Google Fonts: Cinzel (400, 600), Marcellus (400), Roboto (300, 400, 500, 700 + 300 italic).

---

## Files

Open `index.html` to view the prototype; it loads React 18 + Babel from CDN and pulls in each file below as `type="text/babel"`.

| File | Contents |
|---|---|
| `index.html` | Shell, font links, global CSS (`.nav-link`, `.exh-card`, `.card-lift`, `.mu-input`, `.display-heading`, `.arrow-link`, `pageFadeIn`, scrollbar), script loading |
| `App.jsx` | Route state, hash sync, title updates, page map, fade wrapper |
| `Shared.jsx` | `StarOrnament`, `ArrowRight`, `BadgeCurrent`, and the `C` color object |
| `Navbar.jsx` | Fixed nav with scroll state |
| `Footer.jsx` | Footer |
| `HomePage.jsx` | Home — hero, culture, stories, collections preview |
| `ExhibitionsPage.jsx` | Exhibitions |
| `CollectionsPage.jsx` | Collections with live search |
| `EventsPage.jsx` | Events with night filter |
| `VisitPage.jsx` | Visit with hours and admission |
| `ContactPage.jsx` | Contact with validation |
| `TicketsPage.jsx` | Tickets 3-step booking flow |
| `assets/` | 13 placeholder images |

Global CSS classes worth porting as shared styles rather than re-deriving per component: `.display-heading` (Cinzel 400, `letter-spacing: 0.04em`, `line-height: 1`), `.mu-input` (transparent underline field, `1.5px solid rgba(95,46,19,0.35)` → `#5F2E13` on focus), `.arrow-link` (inline-flex, gap grows on hover), `.card-lift`, `.exh-card` / `.exh-img`.
