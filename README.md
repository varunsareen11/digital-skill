# Digital Skills Academy — Website

Built with **React + TypeScript**, **Vite**, **React Router** and **Tailwind CSS**.

## Getting started

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install      # once, to download the packages
npm run dev      # start a local preview at http://localhost:5173 (updates as you edit)
npm run build    # create the final website in the dist/ folder
npm run preview  # preview the built dist/ folder
```

## Where to change things

Most content lives in plain data files, so you rarely need to touch the page layouts.

| What                                             | File                                             |
| ------------------------------------------------ | ------------------------------------------------ |
| Phone, WhatsApp number, email, founder, menu     | `src/data/site.ts`                               |
| Form service URLs (Apply / Contact)              | `src/data/site.ts` → `formEndpoints`             |
| The 10 courses (titles, durations, topics, outcomes) | `src/data/courses.ts`                        |
| Coming soon courses                              | `src/data/comingSoon.ts`                         |
| Certificates shown in the gallery and home page  | `src/data/certificates.ts`                       |
| FAQs                                             | `src/data/faqs.tsx`                              |
| Highlights, benefits, audience, steps            | `src/data/content.ts`                            |
| Legal pages                                      | `src/pages/legal/*.tsx`                          |
| Colours and font                                 | `tailwind.config.ts` (`brand` = teal, `accent` = amber) |
| Shared styles (buttons, cards, form fields)      | `src/index.css`                                  |
| Images                                           | `public/assets/`                                 |

**Add a course** — add an entry to `src/data/courses.ts`. Its page (`/courses/<slug>`), its card, the
course dropdown on the forms and the related-course links all update automatically. Add the new address to
`public/sitemap.xml` too.

**Launch a "coming soon" course** — move it from `src/data/comingSoon.ts` into `src/data/courses.ts`.

**Certificates** — the current images (`public/assets/certificates/certificate1.svg` … `certificate8.svg`) are
samples marked "SAMPLE". To use real ones, save them in that folder (JPEG, PNG or SVG) and update the file
names and captions in `src/data/certificates.ts`. They appear in the "Our Approach" row on the home page and in
the gallery on `/certificates`. Any certificate whose image file is missing is hidden automatically.

## Connecting the forms (important)

The Apply and Contact forms are **not connected to any service yet**. Until they are, the form checks the
details and then tells the visitor to send them via WhatsApp or email instead — nothing is falsely shown as
"submitted".

To receive submissions, create a form on a service such as [Formspree](https://formspree.io) or
[Getform](https://getform.io) and paste its URL into `formEndpoints` in `src/data/site.ts`. The form posts
these fields: `form_type`, `full_name`, `mobile`, `email`, `course`, `city`, `message`, `consent`, `page`.

## Deploying

Run `npm run build` and upload the contents of `dist/`. Because page addresses like `/about` are handled by
React, the host must send unknown addresses to `index.html`. This is already set up for:

- **Netlify / Cloudflare Pages** — `public/_redirects`
- **Vercel** — `vercel.json`
- **Apache / cPanel / Hostinger** — `public/.htaccess`

The domain and email are placeholders (`www.example.com`, `info@example.com`). Replace them with the real ones
in `index.html`, `src/data/site.ts`, `public/robots.txt` and `public/sitemap.xml` before going live.
