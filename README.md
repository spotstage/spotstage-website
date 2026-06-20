# SPOTSTAGE Website

Official landing page for the **SPOTSTAGE** mobile app.

> Deine Show. Deine Bühne. Dein Moment.

A fast, static website built with HTML, CSS, and minimal vanilla JavaScript — optimized for Netlify deployment and mobile-first responsive design.

## Project Overview

This repository contains the marketing website for SPOTSTAGE, a mobile app connecting artists and event organizers. The site focuses on app downloads and user conversion with a premium, spotlight-inspired visual identity.

**Tech stack:**

- HTML5 (semantic markup)
- CSS3 (custom properties, mobile-first)
- Vanilla JavaScript (no frameworks or build tools)
- Netlify (static hosting)
- Client-side i18n (DE / EN)

## Folder Structure

```
/
├── index.html                  # Main landing page
├── impressum.html              # Legal notice (Impressum)
├── datenschutz.html            # Privacy policy (Datenschutz)
├── barrierefreiheit.html       # Accessibility statement
├── support.html                # App support page
├── account-loeschen.html       # Account deletion information
├── 404.html                    # Not found page
│
├── css/
│   ├── styles.css              # Global styles, design system
│   └── tokens.css              # Design tokens reference
│
├── js/
│   ├── app.js                  # Navigation, smooth scroll, CTA helpers
│   ├── i18n.js                 # Locale switching (de / en)
│   ├── translations.js         # Central translations
│   ├── privacy-legal-content.js # Website privacy policy content
│   └── privacy-app-content.js  # App privacy policy content
│
├── images/
│   ├── logo/                   # Brand logo assets
│   ├── screenshots/            # App screenshots
│   └── badges/                 # App store badges
│
├── docs/
│   ├── DESIGN-SYSTEM.md        # Design token documentation
│   └── app-release-website-pages.md  # App release page documentation
│
└── README.md
```

## App Release Pages

Legal and support pages for App Store / Google Play are documented in [`docs/app-release-website-pages.md`](docs/app-release-website-pages.md).

**Target URLs (after custom domain is live):**

- `https://spotstage.app/`
- `https://spotstage.app/support.html`
- `https://spotstage.app/datenschutz.html`
- `https://spotstage.app/impressum.html`
- `https://spotstage.app/barrierefreiheit.html`
- `https://spotstage.app/account-loeschen.html`

**Note:** Custom domain `spotstage.app` is linked in Netlify with DNS configured at united-domains. Verify HTTPS and all paths are reachable before using as Store URLs. Netlify preview: `https://spotstage-website.netlify.app/`.

## Local Development

No build step or dependencies required.

### Option 1: Open directly

Open `index.html` in your browser. Note: some features work best with a local server.

### Option 2: Local server (recommended)

**Python:**

```bash
python -m http.server 8080
```

**Node.js (npx):**

```bash
npx serve .
```

**VS Code / Cursor:**

Use the **Live Server** extension and open the project folder.

Then visit [http://localhost:8080](http://localhost:8080) (port may vary).

## Netlify Deployment

### Deploy via Git (recommended)

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Log in to [Netlify](https://www.netlify.com/) and click **Add new site → Import an existing project**.
3. Connect your Git provider and select this repository.
4. Configure build settings:
   - **Build command:** *(leave empty)*
   - **Publish directory:** `.` (root)
5. Click **Deploy site**.

Netlify will serve the static files directly — no build step needed.

### Deploy via Netlify CLI

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=.
```

### Custom domain

After deployment, add your custom domain under **Site settings → Domain management** in the Netlify dashboard. DNS must be configured at your domain registrar (e.g. united-domains).

## Brand Colors (Reference)

| Token            | Value     |
|------------------|-----------|
| Background       | `#0d0618` |
| Purple accent    | `#7c3aed` |
| Gold accent      | `#d4a853` |
| Text primary     | `#f5f0ff` |

Full design tokens are defined in `css/styles.css` under `:root`.

## License

© SPOTSTAGE. All rights reserved.
