# App-Release: Website-Seiten für SPOTSTAGE

Dokumentation zu den rechtlichen und Support-Seiten der SPOTSTAGE-Website für den App Store / Google Play Release.

## Status

| Aspekt | Status |
|--------|--------|
| Website-Inhalte im Repo | Releasebereit |
| Netlify Preview | Erreichbar unter `https://spotstage-website.netlify.app/` |
| Custom Domain in Netlify | Mit `spotstage.app` verknüpft (DNS bei united-domains eingerichtet) |
| Produktive Domain `https://spotstage.app` | **Live** (HTTPS, alle Store-Pfade erreichbar) |
| REL-004 | **Resolved** (Stand 20.06.2026) |

**Verifiziert (20.06.2026):** Alle produktiven Pfade liefern HTTP 200 über `https://spotstage.app`. Deployment: Commit `1252166` auf `main`, Netlify Custom Domain aktiv.

### Produktive Pfade (Ziel-URLs für App Store / Google Play)

| Seite | URL |
|-------|-----|
| Startseite | `https://spotstage.app/` |
| Support | `https://spotstage.app/support.html` |
| Datenschutz | `https://spotstage.app/datenschutz.html` |
| Impressum | `https://spotstage.app/impressum.html` |
| Barrierefreiheit | `https://spotstage.app/barrierefreiheit.html` |
| Account löschen | `https://spotstage.app/account-loeschen.html` |

## Neue Seiten

| Seite | Datei | Finaler Pfad |
|-------|-------|--------------|
| Support | `support.html` | `https://spotstage.app/support.html` |
| Account löschen | `account-loeschen.html` | `https://spotstage.app/account-loeschen.html` |

## Bestehende Seiten (aktualisiert)

| Seite | Datei | Finaler Pfad |
|-------|-------|--------------|
| Startseite | `index.html` | `https://spotstage.app/` |
| Datenschutz | `datenschutz.html` | `https://spotstage.app/datenschutz.html` |
| Impressum | `impressum.html` | `https://spotstage.app/impressum.html` |
| Barrierefreiheit | `barrierefreiheit.html` | `https://spotstage.app/barrierefreiheit.html` |

## App-Datenflüsse in der Datenschutzerklärung

Die Datenschutzerklärung (`datenschutz.html`) umfasst 25 Abschnitte:

- **Abschnitte 1–8:** Website (Hosting via Netlify, Local Storage, keine Analytics, E-Mail-Kontakt, united-domains)
- **Abschnitte 9–16:** SPOTSTAGE-App (Inhalt in `js/privacy-app-content.js`)
  - 9: Überblick Website vs. App
  - 10: Benutzerkonto und Authentifizierung (Supabase Auth)
  - 11: Profile
  - 12: Shows und Bewerbungen
  - 13: Uploads (Supabase Storage)
  - 14: Push-Benachrichtigungen (Expo Push Service)
  - 15: Account-Löschung
  - 16: Passwort-Reset
- **Abschnitte 17–25:** Gemeinsame Regelungen (Empfänger inkl. Supabase/Expo, Speicherdauer, Rechte, Minderjährige, Änderungen)

Technische Anbieter, die benannt werden: Supabase, Expo/Expo Push, Netlify, united-domains. Keine Analytics, kein Crash-SDK, keine Zahlungen, kein Chat, kein Social Login.

## Supportkontakt

- E-Mail: `hello@spotstage.app`
- Supportseite: `https://spotstage.app/support.html`
- Keine garantierte Antwortzeit, keine Hotline, keine festen Supportzeiten

## Account-Löschprozess

- **In der App:** Profil → Konto → „Account löschen“ → Passwort → „LÖSCHEN“ bestätigen
- **Informationsseite:** `https://spotstage.app/account-loeschen.html` (keine Web-Löschfunktion)
- **Ohne App-Zugriff:** Kontakt per E-Mail mit möglicher Identitätsprüfung

Mögliche Blocker: bestätigter zukünftiger Auftritt, aktive Host-Zuordnung, geplante Shows, Organisations-Eigentümerschaft, einziges Organisationsmitglied, Admin-Self-Delete.

## Mobile-App-Config

Die folgenden URLs sind produktiv und können im Mobile-Repo gesetzt werden:

| Config-Key | Ziel-URL |
|------------|----------|
| `supportWeb` | `https://spotstage.app/support.html` |
| `accountDeletionWebUrl` | `https://spotstage.app/account-loeschen.html` |

Bestehende App-URLs (bereits vorbereitet):

- `https://spotstage.app/datenschutz.html`
- `https://spotstage.app/impressum.html`
- `https://spotstage.app/barrierefreiheit.html`

## Deployment-Schritte

| Schritt | Status |
|---------|--------|
| Netlify-Deployment aus Repo | Erledigt |
| Custom Domain `spotstage.app` in Netlify | Erledigt |
| DNS bei united-domains | Erledigt |
| TLS-Zertifikat / HTTPS auf Apex | Erledigt |
| Erreichbarkeit aller Pfade auf `spotstage.app` | Erledigt (20.06.2026) |
| Mobile-App-Config mit finalen URLs | Offen (Mobile-Repo) |
| REL-004 | **Resolved** |

### DNS-Check (bei united-domains)

Netlify zeigt unter **Site settings → Domain management** die erforderlichen Einträge. Typisch:

- **Apex (`spotstage.app`):** A/ALIAS auf Netlify Load Balancer (nicht united-domains Webspace-IP)
- **`www` (optional):** CNAME auf die Netlify-Site (z. B. `spotstage-website.netlify.app`)

Nach DNS-Änderungen kann die Propagation einige Minuten bis Stunden dauern.

## Netlify / Routing

- Kein `netlify.toml` oder `_redirects` erforderlich
- Statische `.html`-Dateien im Repo-Root werden direkt ausgeliefert
- `404.html` wird von Netlify automatisch für unbekannte Pfade verwendet

## i18n

- DE/EN über `js/i18n.js` und `js/translations.js`
- App-Datenschutz: `js/privacy-app-content.js`
- Website-Datenschutz: `js/privacy-legal-content.js`
- Gleiche HTML-Dateien für beide Sprachen

## Bekannte Grenzen

- Keine Open-Graph-Tags (site-weit nicht etabliert)
- Keine automatisierten Testskripte im Repo

## Verifikationsstatus

Manuelle Prüfung nach Implementierung:

- [x] Alle HTML-Dateien lokal erreichbar
- [x] Interne Links (Footer, Back-Link, Support → Account löschen)
- [x] DE/EN-Umschaltung auf neuen Seiten
- [x] Canonical URLs auf `spotstage.app` (neue Seiten + Datenschutz)
- [x] Keine Netlify-Domain in Canonicals
- [x] Genau eine `h1` pro Seite
- [x] Footer-Navigation konsistent (5 Links)
- [x] `mailto:hello@spotstage.app` auf Support-Seite
- [x] Produktive Erreichbarkeit auf `https://spotstage.app/` (20.06.2026)
- [x] Alle Store-Pfade auf `spotstage.app` erreichbar (HTTP 200)

Stand: Juni 2026 — produktiv live auf `spotstage.app`
