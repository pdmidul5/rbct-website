# Royal Bengal Club Tasmania — Website

A modern glassmorphism website for Royal Bengal Club Tasmania (RBCT), built with
React + Vite and published for free through GitHub Pages. No purchased domain
or paid hosting is required.

This project implements the RBCT Website Complete Blueprint: eight public pages
(Home, About, Events, Membership, Gallery, Committee, Sponsors, Contact), a
maroon-gold glassmorphism design system, calm devotional-style animation, and
free Google Forms for membership, volunteering, sponsorship and contact.

## 1. What's included

- All 8 pages, fully built and responsive (320px mobile → desktop).
- Glassmorphism component system (`glass-card`, `glass-panel`) matching the
  approved colour and blur specification.
- Animated hero background, floating particles and petals, section reveal
  animation, staggered event cards, animated statistics counters and a
  photo lightbox — all respecting `prefers-reduced-motion` and disabled on
  low-power devices.
- Simple data files (`src/data/*.js`) so non-developers can update events,
  committee members, sponsors and gallery photos without touching layout code.
- GitHub Actions workflow that automatically builds and deploys to GitHub
  Pages on every push to `main`.
- A GitHub Pages SPA routing workaround (`public/404.html`) so deep links and
  page refreshes work correctly.

## 2. What is NOT included yet (placeholders)

Following the blueprint's launch scope, this build ships with clearly marked
placeholder text and empty data arrays instead of real club content, because
real photos, fees, names and confirmed figures were not supplied. Search the
codebase for "to be confirmed" and "coming soon" before public launch, and see
the **Final content questionnaire** section below for the full list of items
required from RBCT.

No real or AI-generated religious imagery has been added. Per the blueprint's
imagery rules, committee approval is required before publishing any religious
imagery, and real event photography is preferred. Add approved images to
`public/images/...` and reference them from the relevant data file or page.

## 3. Install required software

1. Install [Node.js LTS](https://nodejs.org/).
2. Install [Git](https://git-scm.com/).
3. Install [Visual Studio Code](https://code.visualstudio.com/) (optional but recommended).
4. Create a free GitHub account, or an RBCT GitHub organisation account.

## 4. Run the project locally

```bash
npm install
npm run dev
```

Open the local address shown in the terminal, normally `http://localhost:5173/`.
Keep the terminal running while developing.

## 5. Build and test the production version

```bash
npm run build
npm run preview
```

The production files are created in the `dist` folder. Review all pages on
desktop and mobile before deployment.

## 6. Publish to GitHub Pages

```bash
git init
git add .
git commit -m "Initial RBCT website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/rbct-website.git
git push -u origin main
```

Replace `YOUR-USERNAME` with the GitHub account or organisation name, and
create the empty public repository on GitHub before running the remote and
push commands.

Then, on GitHub:

1. Open the repository on GitHub.
2. Select **Settings**.
3. Select **Pages** in the left menu.
4. Under **Build and deployment**, choose **GitHub Actions** as the source.
5. Push a change to the `main` branch, or run the workflow manually.
6. Open the deployed address shown in the Actions or Pages area — it will look
   like `https://YOUR-USERNAME.github.io/rbct-website/`.

**Important:** `vite.config.js` sets `base: '/rbct-website/'`. If the
repository name is ever changed, update this value to match before deploying.

## 7. Updating events, committee and sponsors (no coding required)

Routine content lives in `src/data/`:

- `events.js` — upcoming and past events.
- `committee.js` — current committee members and term dates.
- `sponsors.js` — sponsor tiers, logos and links.
- `gallery.js` — photo albums grouped by event and year.

To make an update:

```bash
git pull
# Edit the required data file or image
git add .
git commit -m "Update upcoming events"
git push
```

After the push, GitHub Actions will rebuild and republish the website
automatically — usually within a few minutes.

## 8. Recommended image specification

- Hero images: landscape, 2400 × 1350 pixels or larger, saved as `.webp`.
- Event cards: 4:3 landscape or an approved portrait crop.
- Committee portraits: consistent square or 4:5 photographs.
- Sponsor logos: transparent PNG or SVG.
- Avoid screenshots, heavily compressed messaging-app images and watermarked images.

Recommended file naming: `logo-rbct-transparent.png`,
`hero-durga-puja-2026.webp`, `event-rath-yatra-2026.webp`,
`committee-president-full-name.webp`, `sponsor-business-name.png`,
`gallery-event-year-001.webp`.

## 9. Forms (Google Forms, no backend required)

Create these as Google Forms under an **RBCT-controlled Google account** (not
a personal account), then paste each form's embed URL into the matching
`<iframe src="...">` in `src/pages/Membership.jsx` and `src/pages/Contact.jsx`:

- Membership application / renewal
- Volunteer registration
- Sponsor enquiry
- General contact and feedback
- Event registration (where a dedicated ticket platform isn't required)

Form rules: only collect information genuinely required; include privacy and
media-consent wording separately; never collect passports, visas or banking
passwords; restrict spreadsheet access to authorised office-bearers; set an
automatic acknowledgement message.

## 10. Content approval workflow

1. Content owner prepares wording, dates, images and links.
2. Relevant office-bearer checks factual accuracy.
3. President or nominated approver confirms public release.
4. Website editor uploads the change to a preview branch or local preview.
5. A second person checks mobile layout, spelling, image consent and links.
6. The editor merges or pushes to `main`.
7. After deployment, verify the public page and record the update.

## 11. Pre-launch testing checklist

- [ ] All navigation links work.
- [ ] All dates, venues, fees and committee names are confirmed.
- [ ] No placeholder text remains.
- [ ] Every image has permission and useful alternative text.
- [ ] All forms submit correctly and reach the correct account.
- [ ] Mobile layout tested at 320px, 375px, 768px and desktop widths.
- [ ] Text remains readable over all hero images.
- [ ] Animation is smooth and reduced-motion mode works.
- [ ] No deity face is obstructed or incorrectly cropped.
- [ ] Facebook, Instagram, map and email links work.
- [ ] Page titles and descriptions are set.
- [ ] 404 behaviour and direct-page refresh are tested.
- [ ] A different committee member can update an event using these instructions.

## 12. Security, privacy and ownership

- The GitHub repository should be owned by an RBCT-controlled organisation
  account where possible.
- Enable two-factor authentication for all accounts with write access.
- At least two authorised committee members should hold owner access.
- Never place passwords, API secrets, bank details or private member data in
  this public repository.
- Google Form response spreadsheets must remain private.
- Remove former committee members' access promptly.
- Record image consent and sponsor permission.
- Keep a local backup of the repository and public assets.

## 13. Final content questionnaire for RBCT

Send the following when available. The website can go live progressively, but
these items are required before final public launch:

- Official RBCT logo, highest available resolution (transparent PNG preferred).
- Confirmed exact official name to display.
- Year RBCT was established.
- Official public email address.
- Confirmed social media links to display.
- Current committee names, roles, term dates and photo-publication permission.
- Approved About Us history, or key facts to write it from.
- Confirmed membership fees (general, student, family) and payment instructions.
- Membership Google Form link.
- Next three confirmed events with dates, times, venues and posters.
- 10–20 best event photographs, identified by event and year.
- Sponsor names, levels, logos and approved links.
- One approved Bengali quotation for the homepage, with English meaning.
- Whether Durga imagery should remain year-round or rotate by festival.
- Whether the site should be English only, or English and Bengali.
- Who will own the GitHub account, and who is the backup administrator.

## 14. Technical references

- [GitHub Docs — What is GitHub Pages?](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [GitHub Docs — Configuring a publishing source for GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Vite — Deploying a Static Site](https://vite.dev/guide/static-deploy)
- [Vite — Getting Started](https://vite.dev/guide/)

## 15. Project structure

```
rbct-website/
├── .github/workflows/deploy.yml
├── public/
│   ├── images/{hero,events,gallery,committee,sponsors}/
│   ├── patterns/
│   ├── favicon.png
│   └── 404.html
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```
