# BBC English Academy — 5-Minute Demo Script (internal presenter notes)

**Open:** `python3 -m http.server 8000` in `bbc-frontend-only/`, then
http://localhost:8000/

Say first, out loud: *"This is the presentation build — the design, the
pages and the flows. The academy's real details (stats, teachers, prices,
address, photos) are confirmed with the owner before anything goes public;
nothing on these pages should be read as a verified fact yet."*

## Minute 0–1 — Home + language
1. Home: reference hero (faint letters, red pill, serif headline, 2×2
   stats), features, How it works.
2. Click **العربية** (top right): the whole page flips to RTL Arabic.
   Click **English** to flip back. The choice sticks across pages.

## Minute 1–2 — Courses + detail
3. **Courses**: click the level filters — the grid filters instantly.
4. Click **Details & enrol** on any course → detail page, then
   **Book this course**.

## Minute 2–3 — Placement test + booking
5. **Levels & Placement Test**: click **Start quiz**, answer 6 questions,
   get a level result and a recommended next step.
6. **Book a seat**: fill the form, submit → success message appears
   (in this frontend-only build nothing is sent or stored — say so).

## Minute 3–4 — Dashboards
7. **Dashboards** (mobile menu / footer) → student dashboard: progress,
   attendance, homework. Then teacher and admin dashboards from the links.

## Minute 4–5 — Pricing, teachers, login, close
8. **Pricing**: three plans, "Fees on enquiry" — real prices are set by
   the owner before launch.
9. **Teachers**: shown by specialism only — real staff come with consent.
10. **Login / Sign up**: screens work as a flow preview in this build;
    real accounts live in the full-stack build.
11. Close with the owner-confirmation list in `README.md`: hero stats,
    teachers, prices, address/phone, photos, trading name — then the
    full-stack build (separate repo) is deployed with the backend.
