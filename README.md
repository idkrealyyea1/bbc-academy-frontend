# BBC English Academy — Frontend-Only Demo Website

**Status: VISUAL DEMO ONLY — for owner review tonight. No backend, no database, no real bookings, payments, accounts or emails.**

This site is NOT affiliated with the British Broadcasting Corporation (BBC). No BBC logos or BBC branding are used. "BBC English Academy" is the academy's own name as given by the user; if the owner wants a different brand name, it is a one-line change.

## How to run (no build step)

Option 1 — recommended (local server):
```bash
cd bbc-frontend-only
python3 -m http.server 8000
# then open http://localhost:8000/
```

Option 2:
```bash
npx serve .
```

Option 3: open `index.html` directly in a browser. Everything works except that
`course.html?id=...` detail rendering needs the query string, so the server
options above are preferred for the course-detail demo.

## Page list (16 pages)

| Page | File |
|---|---|
| Home | `index.html` |
| Courses (filter by level) | `courses.html` |
| Course detail (query `?id=...`, e.g. `course.html?id=ielts`) | `course.html` |
| Levels & placement test (interactive mock quiz) | `levels.html` |
| About | `about.html` |
| Teachers (demo profiles) | `teachers.html` |
| Pricing / plans | `pricing.html` |
| Student dashboard (mock) | `dashboard-student.html` |
| Teacher dashboard (mock) | `dashboard-teacher.html` |
| Admin dashboard (mock) | `dashboard-admin.html` |
| Booking / enrolment form (mock submit) | `booking.html` |
| Blog & news | `blog.html` |
| FAQ | `faq.html` |
| Contact | `contact.html` |
| Login screen | `login.html` |
| Sign-up screen | `signup.html` |

Every page is reachable from the top navigation, the footer, or (for dashboards)
the "Dashboards" nav link + cross-links between dashboard pages.

## Language toggle

Top-right button switches **Arabic ↔ English** and flips the whole page
`dir="rtl"` ↔ `dir="ltr"`. Headings, navigation, buttons and course data are
translated via `data-en`/`data-ar` attributes and the course catalogue in
`app.js`. Stored in `localStorage` (`bbc-lang`) so the choice persists across pages.

## What is mock / placeholder — DO NOT treat as real

- **All teacher names, bios and photos** are invented demo placeholders
  ("Demo Teacher 1–6"). No real staff names are used.
- **All prices** are "XX / month" placeholders. Currency, amounts and plan
  inclusions are TODO.
- **Address, phone/WhatsApp, email, opening hours** are literally "TODO".
- **Course schedules, class sizes, dashboard numbers, blog posts, FAQ answers**
  are demo wording/numbers.
- **Forms (booking, contact, login, signup)** only show a success message on
  the page. Nothing is sent, stored or checked.
- **Placement quiz** (levels.html) is a 6-question mock. It is not an official
  placement test and its result must not be presented as one.
- **Images:** no photos are used at all — CSS/SVG-style shapes and emoji
  illustrations only, so the site stays fast and light for low-bandwidth users.
  No external CDN images or heavy frameworks are loaded. System fonts only.

## Design

Navy `#0F2A44` + gold `#C9A227` + teal `#0E9A8B`, responsive mobile-first
CSS, system fonts, one `styles.css` + one `app.js` shared by all pages.
No build step, no npm dependencies.

## TODOs before production (owner must confirm)

1. Real academy story, mission, address, phone/WhatsApp, email, hours.
2. Real teacher names, photos, bios and qualifications (with consent).
3. Real courses: names, levels, durations, schedules, delivery mode
   (in-person/online), class sizes, and real prices + currency.
4. Real pricing plans and what each includes; refund/certificate policies
   for the FAQ.
5. Real blog/news content.
6. Brand decision: keep "BBC English Academy" or rename to avoid confusion
   with the British Broadcasting Corporation.
7. Backend (separate project): real accounts, bookings, payments, dashboards
   and a real placement test — none of that exists in this demo.
8. Privacy/terms pages if collecting real student data.

## Files

- `index.html` … `signup.html` — the 16 pages above
- `styles.css` — all styling
- `app.js` — language toggle, course catalogue/filter/detail, mock quiz, mock forms
- `DEMO-NOTES.md` — 5-minute demo script

## Design — 2026-11-02 redesign (client presentation build)

- **Identity:** restored from the academy's own earlier design, as confirmed by
  the owner's reference screenshot: near-black `#0A0A0A`, BBC red `#D60000` /
  `#FF2D2D`, Inter for UI, Playfair Display for display headlines, Tajawal
  for Arabic. One `styles.css` is shared with the full-stack frontend so the
  two can never diverge again.
- **Hero (exact reference):** faint oversized background letters (A, N, C, B,
  E) + subtle red sparkles, outlined red pill `PREMIUM ENGLISH EDUCATION`,
  centred serif headline `Master English` (white) / `Unlock Your Future`
  (red), the reference paragraph, solid red `Start Learning →` + dark
  outlined `Explore Courses`, and a 2×2 stats grid.
- **Navigation:** sticky blurred header, red `BBC` wordmark with
  `ENGLISH ACADEMY` underneath. Desktop shows the primary links on one row
  (Blog / FAQ / Dashboards live in the footer and in the mobile panel);
  at ≤1024px a hamburger opens a solid, scrollable panel — the nav never
  wraps into multiple rows.
- **First-screen pattern (ui-ux-pro-max, Hero-Centric + proof):** hero →
  features → How it works (3 steps) → courses → dashboards preview → final
  CTA. Motion is restrained (≤2px hover, 12px / 350ms scroll reveal, honours
  `prefers-reduced-motion`). No emoji icons — SVG / typographic marks only.
- **Performance:** no hero photo (typographic hero), one 15.6KB stylesheet,
  one small JS file, Google Fonts with `display=swap` and preconnect. The
  only photo is `hero.jpg` (classroom photo from the old repo, compressed
  7.8MB → 177KB, lazy-loaded, About page only).
- **Client-facing pages carry no visible TODO / demo / placeholder text.**
  That honesty lives here and in code comments, not on the site.

## What is NOT yet real — owner must confirm/correct before any public launch

- **Hero stats (10,000+ students, 95% success, 50+ teachers, 20+ courses)**
  are the old site's figures, reproduced for the reference layout. They are
  NOT verified academy facts — the owner must confirm or correct every one.
- **Teachers** are shown by specialism only (no names, photos or bios).
  Real staff must be supplied with consent before launch.
- **Prices** are shown as "Fees on enquiry" — no currency or amount is
  claimed. The owner must set real prices/currency.
- **No address, phone, email or opening hours** are shown anywhere, because
  none was provided or verified. Do not invent them.
- **"BBC" name:** the site is not affiliated with the British Broadcasting
  Corporation (BBC) — stated in the footer. The owner must confirm the
  exact trading name / affiliation position before launch.
- **Forms, login and signup** in this frontend-only build show success
  messages on the page only; nothing is sent or stored. The full-stack
  build provides the real backend for these flows.
- **Placement quiz** here is a short 6-question guide, not an official
  placement test. The full-stack build has the 20-question version.
- **Classroom photo** (`hero.jpg`) is a generic photo from the old repo, not
  a photo of the real academy — replace with real academy photos.
