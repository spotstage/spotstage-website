# SPOTSTAGE Website — Agent Instructions

This repository contains the public SPOTSTAGE marketing/support website.
The mobile app lives in the separate `spotstage-mobile` repository; no app backend or database is implemented here.

## Architecture and orientation

- Keep the site static: HTML, CSS and minimal vanilla JavaScript.
- Do not introduce React, Vue, Vite, a bundler, package manager, or build step unless the task explicitly requires an architectural change.
- Preserve Netlify deployment from the repository root (`netlify.toml`).
- Homepage: `index.html`; shared live styles and tokens: `css/styles.css`; local fonts: `css/fonts.css`.
- `css/tokens.css` and `docs/tailwind.theme.js` are reference exports, not the active website theme or a Tailwind build.
- Reuse existing CSS variables, components/patterns and translation structure before adding new ones.
- Content: `js/translations.js`; locale handling: `js/i18n.js`; section rendering: `js/benefits.js`, `js/how-it-works.js`, `js/future-categories.js`.
- Treat actual code as technical source of truth; documentation may describe older states.

## Scope and safety

- Prefer small, reviewable changes; avoid unrelated edits and unnecessary refactors.
- Inspect Git status before editing; never overwrite or discard existing local changes, including untracked assets.
- Do not expose secrets, modify `.env` files, or manipulate production data.
- Database work belongs to the mobile/backend repository; inspect its rules and migration workflow before any separately requested database change.
- Do not commit, push, or deploy unless explicitly requested.

## UI and content

- Keep the site mobile-first and responsive, including keyboard access, focus behavior and reduced-motion support.
- Preserve the existing SPOTSTAGE visual language; consult `docs/DESIGN-SYSTEM.md` while checking its statements against live CSS.
- Maintain DE/EN behavior when changing user-facing copy or sections covered by the translation system.
- Preserve script ordering and the `spotstage:localechange` event used by dynamically rendered sections.
- Distinguish organizer and comedian/artist flows; do not invent app capabilities or add future product categories without an explicit task.
- Verify marketing claims against the app's implemented behavior; website mockups and copy are not proof of a feature.
- Keep legal, support, account-deletion, accessibility and app-link pages/routes working.
- Avoid duplicating app product/domain documentation here; the mobile-app repository is the source of truth for app behavior.

## App links / integrations

- For organization invite or Android App Links changes, read `docs/android-app-links-integration.md` and inspect `.well-known/assetlinks.json`, `org/invite/index.html`, `js/org-invite.js` and `netlify.toml`.
- Preserve invite query parameters; never display or log invitation tokens, or invent signing fingerprints.
- Store destinations are configured in `js/app.js`; preserve unavailable/coming-soon behavior until verified URLs are supplied.

## Validation

- No `package.json`, package scripts, TypeScript configuration, linter, formatter, automated test suite or build step is configured here. Do not invent npm commands.
- Existing README preview options: `python -m http.server 8080` (Python required), or `npx serve .` (may download a package; do not use when dependency installation is prohibited).
- With Node available, syntax-check each changed JavaScript file using `node --check <path>`; this is not a runtime test or linter.
- Run `git diff --check` and review the final Git status/diff.
- For page, style or behavior changes, inspect affected pages at mobile and desktop widths; check DE/EN, navigation, links, keyboard use and reduced motion as relevant.
- A simple local file server does not verify Netlify rewrite/header behavior; check that separately when integrations change.
- Report pre-existing failures and checks not run; do not change product code just to make checks pass.

## Documentation

Update existing documentation when deployment, app-link integration, legal/support-page structure, reusable design rules, or another durable website behavior changes.
Use `README.md` for local development/deployment, `docs/app-release-website-pages.md` for release-page context and `docs/DESIGN-SYSTEM.md` for design references.

## Definition of done

Requested scope is complete; existing patterns are reused; relevant responsive, DE/EN and route checks pass; durable documentation is updated when warranted; no unnecessary framework/build dependency was introduced.
