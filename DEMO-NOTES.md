# BBC English Academy — 5-Minute Demo Script

**Open:** `python3 -m http.server 8000` in `bbc-frontend-only/`, then
http://localhost:8000/ — or just open `index.html`.

Say first: *"This is a visual demo only. No bookings, prices, teachers or
contact details here are real yet — everything marked TODO/demo will be
replaced with your confirmed information."*

## Minute 0–1 — Home + language
1. Home (`index.html`): hero, features, popular courses.
2. Click **العربية** (top right): the whole page flips to RTL Arabic.
   Click **English** to flip back. The choice sticks across pages.

## Minute 1–2 — Courses + detail
3. **Courses**: click the level filters (Beginner / Elementary /
   Intermediate / Advanced) — the grid filters instantly.
4. Click **Details & enrol** on any course → `course.html?id=...` shows
   that course's detail, then **Book your seat**.

## Minute 2–3 — Placement test + booking
5. **Levels & Placement Test**: click **Start quiz**, answer 6 questions,
   get a demo level result (clearly labelled demo, not official).
6. **Book a seat**: fill the form, submit → success message appears
   (nothing is actually sent — say so out loud).

## Minute 3–4 — Dashboards
7. **Dashboards** (nav) → student dashboard: progress bar, attendance,
   homework table (all mock numbers).
8. From there, open **Teacher dashboard** and **Admin dashboard**
   (links at the bottom) — class lists and invented admin totals.

## Minute 4–5 — Pricing, teachers, login, close
9. **Pricing**: point out every price is "XX / month — TODO" on purpose.
10. **Teachers**: point out all six profiles are labelled demo placeholders.
11. **Login / Sign up**: any input shows a demo success message only.
12. Close with the TODO list in `README.md`: real story, address, phone,
    teachers, courses, prices, policies — then the full-stack build
    (separate project) can start.

## If something looks broken
- Course detail blank? Make sure you opened it via the local server
  (`http://localhost:8000/course.html?id=ielts`), not just the file path
  without a query string — or click through from Courses, which always
  passes the id.
- Language stuck? The toggle is the dark button at the top right of every page.
