# SPOTSTAGE Website — Agent Instructions

This repository contains the public SPOTSTAGE marketing/support website.

## Architecture

- Keep the site static: HTML, CSS and minimal vanilla JavaScript.
- Do not introduce React, Vue, Vite, a bundler, package manager, or build step unless the task explicitly requires an architectural change.
- Preserve Netlify deployment from the repository root.
- Reuse existing CSS variables, design tokens, components/patterns and translation structure before adding new ones.

## UI and content

- Keep the site mobile-first and responsive.
- Preserve the existing SPOTSTAGE visual language and design-system documentation.
- Maintain DE/EN behavior when changing user-facing copy or sections covered by the translation system.
- Keep legal, support, account-deletion, accessibility and app-link pages/routes working.
- Avoid duplicating app product/domain documentation in this repository; the mobile-app repository is the source of truth for app behavior.

## App links / integrations

Changes to organization invite fallback or Android App Links must be checked against the existing `.well-known`, invite-route and documentation setup.

## Validation

For every change, inspect the affected pages at mobile and desktop widths and verify navigation/links relevant to the change. Avoid unrelated refactors.

## Documentation

Update repository documentation when deployment, app-link integration, legal/support-page structure, reusable design rules, or another durable website behavior changes.

## Definition of done

A task is done when:

- requested behavior/content is implemented,
- existing styles and patterns are reused where appropriate,
- responsive behavior is checked,
- DE/EN content remains consistent where relevant,
- links/routes affected by the change work,
- durable documentation is updated when warranted,
- no unnecessary framework/build dependency was introduced.
