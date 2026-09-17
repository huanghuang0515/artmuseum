# QALISSO Museum

Marketing + ticketing website for QALISSO Museum, rebuilt from the design
handoff in [`design_handoff_qalisso_museum/`](./design_handoff_qalisso_museum)
as a production **Next.js (App Router)** app.

The handoff `README.md` is the source of truth for the design (layout, exact
colors, type scale, hover behavior, validation rules, state, tokens). The
`.jsx` files there are **design references only** — this app re-implements
those designs with real routing, a component library, a styling solution, and
a content seam, per the handoff's instructions.

## Stack

- **Next.js 15 (App Router)** + **React 19**, TypeScript
- **CSS Modules** per component/route + a global token layer in
  [`src/app/globals.css`](./src/app/globals.css) (`:root` custom properties
  for every color, radius, shadow and the `8%` page gutter)
- **`next/font`** for Cinzel (display), Marcellus (subhead) and Roboto (body)
- **`next/image`** for all imagery (via [`CoverImage`](./src/components/CoverImage.tsx))

## Routes

| Route | Screen | Notable behavior |
|---|---|---|
| `/` | Home | hero, culture, stories, collections preview |
| `/exhibitions` | Exhibitions | hero + cards + detail pair |
| `/collections` | Collections | **live search** (title/author substring) |
| `/events` | Events | **Night Opening** filter |
| `/visit` | Visit | hours & admission, tradition |
| `/contact` | Contact | **on-submit validation** + success state |
| `/tickets` | Tickets | **3-step booking wizard** + live summary |
| `/tickets/confirmation` | Confirmation | booking reference + QR |

Per-route `document.title` is handled with route `metadata`
(`"<PAGE> — QALISSO MUSEUM"`, bare `QALISSO MUSEUM` on Home). The
per-navigation fade lives in [`src/app/template.tsx`](./src/app/template.tsx).

## Content seam (CMS/API-ready)

All editorial + commerce content is typed data in
[`src/content/`](./src/content) and is read **only** through the data-access
functions in [`src/lib/content.ts`](./src/lib/content.ts). To move content to a
CMS/API, reimplement those functions (they can become `async`) — no component
changes required.

## Booking seam

[`src/lib/booking.ts`](./src/lib/booking.ts) replaces the prototype's
`alert()` with a real confirmation flow. It currently **stubs** the parts that
need a backend, each with a clear interface to swap in:

- `checkSlotAvailability` → live per-slot capacity
- `processPayment` → Stripe (or equivalent), confirmed server-side
- `createBooking` → persist the order, return a real reference

The confirmation page reads the result from `sessionStorage`; in production it
would load the order by reference from the ticketing backend.

## Brand font (Qalisso)

The display face is the licensed **Qalisso**; this build substitutes **Cinzel**
as a stand-in. The swap is a single seam: load Qalisso in
[`src/app/layout.tsx`](./src/app/layout.tsx) and point the `--font-display`
token in `globals.css` at it. Nothing else references the font directly.

## Responsive

Prototypes were desktop-only; this build adds the handoff's minimum mobile
behavior below ~900px: a hamburger nav, single-column collapse, a card recast
of the Collections table and Events rows, and the Tickets summary as an
accordion. Images in `public/assets/` are Unsplash placeholders to be replaced
with licensed museum photography.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```
