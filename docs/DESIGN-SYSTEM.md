# SPOTSTAGE Design System — Extraktion aus der Mobile App

> **Quelle:** `spotstage-mobile` (`c:\Users\csige\projects\spotstage-mobile`)  
> **Kanonische Token-Dateien:** `src/design/*`, `lib/theme/*`  
> **Export-Artefakte:** `css/tokens.css`, `docs/tailwind.theme.js`  
> **Stand:** Extrahiert aus dem tatsächlichen Code — keine geschätzten Werte.

---

## Architektur der App-Design-Tokens

| Bereich | Pfad | Rolle |
|---------|------|-------|
| Theme-Aggregat | `src/design/theme.ts` | Zentraler Export |
| Farben | `src/design/colors.ts` | Flat + semantische Farben |
| Typografie | `src/design/typography.ts` | Inter-Presets |
| Spacing | `src/design/spacing.ts` | 4–40px Skala |
| Radius | `src/design/radius.ts` | Border-Radius |
| Shadows | `src/design/shadows.ts` | RN Shadow-Presets |
| Gradients | `lib/theme/gradients.ts` | LinearGradient-Farben |
| Surfaces | `lib/theme/surfaces.ts` | Panel/Card/Overlay |
| Elevation | `lib/theme/elevation.ts` | Visual System 1.0 |
| Text Styles | `lib/theme/textStyles.ts` | Hero/Section/Meta |
| Layout | `lib/theme/layout.ts` | Section-Gaps, Padding |
| Opacity | `lib/theme/opacity.ts` | Disabled/Overlay |

---

## 1. Farben

### Primary & Brand

| Token | Hex | RGB | Verwendung | Quelle |
|-------|-----|-----|------------|--------|
| `background` | `#1c1550` | 28, 21, 80 | Haupt-App-Hintergrund, StageBackground | `colors.ts`, `StageBackground.tsx` |
| `atmosphere` | `#3b1c85` | 59, 28, 133 | Sekundär-Lila, Borders, Secondary Buttons | `colors.ts`, `Button.tsx` |
| `surface` | `#231a4e` | 35, 26, 78 | Cards, Tab Bar, Sheets | `colors.ts`, Navigation |
| `accent` | `#fecf39` | 254, 207, 57 | Primary Brand Gold, Tab-Highlight, Nav `primary` | `colors.ts`, `AppProviders.tsx` |
| `showDetailCard` | `#181246` | 24, 18, 70 | Show-Detail-Karten | `colors.ts`, `showCardLayout.ts` |
| `ctaLabel` | `#120d36` | 18, 13, 54 | Text auf Gold-CTA-Buttons | `colors.ts`, `Button.tsx` |

**Häufigkeit (TS/TSX, ohne coverage):**
- `colors.background` — ~15 Dateien (Navigation, ScreenContainer, Auth)
- `colors.accent` — ~20 Dateien (Button, Tabs, Onboarding, Push)

### Text

| Token | Hex | RGB | Verwendung | Quelle |
|-------|-----|-----|------------|--------|
| `textPrimary` | `#FFFFFF` | 255, 255, 255 | Haupttext | `colors.ts` |
| `textSecondary` | `#d68eff` | 214, 142, 255 | Lavender-Akzenttext | `colors.ts` |
| `textMeta` | `#cbcbcb` | 203, 203, 203 | Meta/Caption | `colors.ts`, `textStyles.ts` |
| `textDark` | `#000000` | 0, 0, 0 | Schatten auf Sheets | `overlaySheetStyles.ts` |

### Success / Warning / Error

| Token | Wert | Rolle | Quelle |
|-------|------|-------|--------|
| `success` | `#4ADE80` | Erfolg-Text/Icon | `colors.ts` |
| `successSurface` | `rgba(34, 197, 94, 0.7)` | Erfolg-Hintergrund | `colors.ts` |
| `successBorder` | `#22C55E` | Erfolg-Rand | `colors.ts` |
| `error` | `#FF5A72` | Fehler, Danger-Button | `colors.ts`, `Button.tsx` |
| `statusAppliedBg/Border` | `rgba(255,193,7,0.7)` / `#FFC107` | **Warning/Pending** — Bewerbung in Prüfung | `colors.ts` |
| `statusDeclinedBg/Border` | `rgba(244,63,94,0.7)` / `#F43F5E` | Abgelehnt | `colors.ts` |
| `statusAcceptedBg/Border` | wie success | Angenommen | `colors.ts` |
| `statusNeutralBg/Border` | Purple tones | Neutral | `colors.ts` |

### Borders & Overlays

| Token | Wert | Quelle |
|-------|------|--------|
| `border` | `rgba(122, 100, 198, 0.26)` | `colors.ts` |
| `cardRim` | `rgba(170, 144, 248, 0.28)` | `colors.ts` |
| `inputBorderFocused` | `#FFD166` | `colors.ts` |
| `surface.panel` | `rgba(35, 26, 78, 0.72)` | `surfaces.ts` |
| `surface.card` | `rgba(45, 33, 97, 0.82)` | `surfaces.ts` |
| `surface.overlay` | `rgba(15, 10, 40, 0.92)` | `surfaces.ts` |
| `surface.heroOverlay` | `rgba(16, 12, 44, 0.58)` | `surfaces.ts` |
| Sheet border top | `rgba(214, 142, 255, 0.22)` | `overlaySheetStyles.ts` |
| Sheet handle | `rgba(214, 142, 255, 0.35)` | `overlaySheetStyles.ts` |

### Splash / Native Shell

| Wert | Quelle |
|------|--------|
| `#0F0A1F` | `app.json` — splash + Android adaptive icon background |

### Spotlight / Glow (effektbezogen)

| Wert | Quelle |
|------|--------|
| `rgba(254, 207, 57, 0.34)` → `transparent` | `gradients.spotlight` |
| `#FFD166` | `shadow.spotlight` shadowColor |
| `rgba(255, 209, 102, 0.55)` | `shadow.cardActive` |
| `rgba(254, 207, 57, 0.5)` | `elevation.glow` |
| `rgba(214, 142, 255, 0.58)` | `elevation.focus` |

### CSS `:root` (fertig)

Siehe **`css/tokens.css`** — alle Werte als `--color-*`, `--gradient-*`.

---

## 2. Typografie

### Font-Families

| Token | Wert | Geladen via | Quelle |
|-------|------|-------------|--------|
| `regular` | `Inter_400Regular` | `@expo-google-fonts/inter` | `typography.ts`, `AppProviders.tsx` |
| `semiBold` | `Inter_600SemiBold` | `@expo-google-fonts/inter` | `typography.ts` |
| `bold` | `Inter_700Bold` | `@expo-google-fonts/inter` | `typography.ts` |
| Brand (Logo SVG) | `Big Shoulders Bold` | **Nicht in App geladen** — nur SVG | `assets/brand/spotstage_logo.svg` |

**Web-Mapping:** Inter via Google Fonts (`Inter:wght@400;600;700`). Logo optional: [Big Shoulders](https://fonts.google.com/specimen/Big+Shoulders).

### Typografie-Skala

| Stil | Family | Weight | Size | Line Height | Letter Spacing | Quelle |
|------|--------|--------|------|-------------|----------------|--------|
| **Heading XL** | Inter Bold | 700 | 34px | 40px | -0.5px | `textStyles.heroTitle` |
| **Heading L** | Inter Bold | 700 | 26px | 32px | — | `typography.title` |
| **Heading M** | Inter SemiBold | 600 | 20px | 28px | -0.3px | `textStyles.sectionTitle` |
| **Body Large** | Inter Regular | 400 | 16px | 24px | — | `typography.body` |
| **Body** | Inter Regular | 400 | 16px | 24px | — | `typography.body` |
| **Label** | Inter Regular | 400 | 14px | 20px | — | `typography.label` |
| **Caption** | Inter Regular | 400 | 13px | 18px | — | `typography.caption` / `textStyles.meta` |
| **Caption SM** | Inter Regular | 400 | 11px | 16px | — | `textStyles.caption` |
| **Button** | Inter SemiBold | 600 | 16px | ~24px | uppercase | `Button.tsx` |

### CSS Typography System

Fertige Klassen in **`css/tokens.css`**: `.text-heading-xl`, `.text-heading-l`, `.text-heading-m`, `.text-body`, `.text-caption`, `.text-button`.

---

## 3. Logo & Brand Assets

### Dateien im Repository (tatsächlich vorhanden)

| Datei | Pfad | Format | Variante |
|-------|------|--------|----------|
| Vollständiges Logo | `spotstage-mobile/assets/brand/spotstage_logo.svg` | SVG | Weißes Wortmark + Spotlight-Icon (Gold/Lila Gradient) |

**SVG-Embedded-Farben** (`spotstage_logo.svg`):
- Gradient: `#fde263` → `#f49e55`
- Text: `#ffffff` (Big Shoulders Bold, letter-spacing 2.45px)
- Icon: `#fde364`, `#d764fd`, `#fded93`, `#351776`
- Blur: `feGaussianBlur stdDeviation="5"`

### Im Code referenziert (Dateien ggf. nicht im Workspace)

| Datei | Referenz | Verwendung |
|-------|----------|------------|
| `assets/brand/spotstage_logo.png` | `components/SpotstageLogo.tsx` | 1× Raster (240×56) |
| `assets/brand/spotstage_logo_3x.png` | `components/SpotstageLogo.tsx` | 3× Raster |
| `assets/icon.png` | `app.json` | App Icon |
| `assets/splash-icon.png` | `app.json` | Splash |
| `assets/adaptive-icon.png` | `app.json` | Android Adaptive Icon |
| `assets/favicon.png` | `app.json` | Web Favicon |
| `assets/spotlight.png` | `AuthLandingScreen.tsx` | Auth Spotlight-Bild |

### Empfehlung Website Header

1. **Primär:** `assets/brand/spotstage_logo.svg` — skalierbar, offizielle Brand-Farben
2. **Fallback:** `spotstage_logo.png` / `spotstage_logo_3x.png` wenn SVG nicht gewünscht
3. **Nicht verwenden:** App Icon (`icon.png`) als Header-Logo — das ist das App-Symbol, nicht die Wortmarke

> **Hinweis:** Die aktuelle Website nutzt ein vereinfachtes Placeholder-Logo unter `spotstage-website/images/logo/logo.svg`. Für visuelle Parität sollte das App-Asset kopiert werden.

---

## 4. Gradients & Effekte

### Zentral definiert (`lib/theme/gradients.ts`)

| Token | Farben | Richtung (Button) | Genutzt in |
|-------|--------|-------------------|------------|
| `hero` | `#09061F`, `#16103A`, `#241A56` | vertikal (default) | **Nur definiert** |
| `heroOverlay` | `rgba(9,6,31,0.16)`, `0.62`, `0.9` | vertikal | **Nur definiert** |
| `spotlight` | gold 0.34 → 0.08 → transparent | vertikal | **Nur definiert** |
| `primaryButton` / `cta` | `#FAFD63`, `#F4A958` | vertikal | `Button.tsx` |
| `ctaRingPurple` | `#D68EFF`, `#3B1C85` | `start {0,0}` → `end {0,1}` | `Button.tsx` |
| `cardGlow` | lavender → purple | — | **Nur definiert** |

### Inline LinearGradient (Komponenten)

| Datei | Farben | Stops / Richtung |
|-------|--------|------------------|
| `showCardLayout.ts` | gold, magenta, lavender | 3-stop border gradient |
| `ShowCardDivider.tsx` | transparent → gold → magenta → lavender → transparent | `locations: [0, 0.1, 0.5, 0.9, 1]` |
| `ShowCardDateBox.tsx` | `#181246` → white 0.2 | diagonal |
| `HeroImageCard.tsx` | transparent → background 60% → background | `locations: [0, 0.55, 1]` |

**RadialGradient:** Nicht im Projekt verwendet.

### CSS-Gradients (fertig in `tokens.css`)

```css
--gradient-hero: linear-gradient(180deg, #09061f 0%, #16103a 50%, #241a56 100%);
--gradient-spotlight: linear-gradient(180deg, rgba(254,207,57,0.34) 0%, rgba(254,207,57,0.08) 50%, transparent 100%);
--gradient-button: linear-gradient(180deg, #fafd63 0%, #f4a958 100%);
--gradient-button-ring: linear-gradient(180deg, #d68eff 0%, #3b1c85 100%);
--gradient-card-glow: linear-gradient(180deg, rgba(214,142,255,0.5) 0%, rgba(59,28,133,0.7) 100%);
```

### Glassmorphism

Kein explizites `backdrop-filter`-Pattern in der App. Nächste Entsprechung:
- Halbtransparente Surfaces (`surface.panel`, `surface.card`)
- `dateGlassBorder: rgba(221, 162, 245, 0.3)` in `showCardLayout.ts`

---

## 5. Border Radius

### Token-Skala (`src/design/radius.ts`)

| Token | px | Verwendung | Häufigkeit (Datei-Treffer) |
|-------|-----|------------|----------------------------|
| `none` | 0 | — | — |
| `xs` | 4 | Kleine Details | selten |
| `sm` | 8 | Chips, kleine Elemente | ~13 Dateien |
| `md` | 14 | **Buttons**, Primary CTA | ~17 Dateien |
| `lg` / `card` | 18 | **Cards** | ~20 Dateien |
| `xl` | 24 | Show Cards | 2 Dateien |
| `full` / `pill` | 9999 | Badges, Pills | ~15 Dateien |

### Komponenten-spezifisch (nicht tokenisiert)

| px | Komponente | Quelle |
|----|------------|--------|
| 12 | Compact Thumbnails | `showCardLayout.ts` |
| 32 | Overlay Sheet top corners | `overlaySheetStyles.ts` |
| 16 | Host Avatar | `OrganizerHostRow.tsx` |

### Web-System (abgeleitet)

| Rolle | Token | Wert |
|-------|-------|------|
| Button | `--radius-md` | 14px |
| Card | `--radius-lg` | 18px |
| Show/Hero Card | `--radius-xl` | 24px |
| Badge/Pill | `--radius-full` | 9999px |
| Modal/Sheet | `--radius-sheet` | 32px |
| Input | `--radius-md` | 14px (wie Button) |

---

## 6. Spacing System

### Skala (`src/design/spacing.ts`)

| Token | px | rem | Häufigkeit |
|-------|-----|-----|------------|
| `xxs` | 4 | 0.25 | niedrig |
| `xs` | 8 | 0.5 | hoch (Cluster-Gaps) |
| `sm` | 12 | 0.75 | hoch (Listen) |
| `md` | 16 | 1 | **sehr hoch** (~65+ Dateien) |
| `lg` | 24 | 1.5 | hoch (~45 Dateien) |
| `xl` | 32 | 2 | mittel |
| `xxl` | 40 | 2.5 | niedrig |

### Layout-Rhythm (`lib/theme/layout.ts`)

| Token | Wert |
|-------|------|
| `sectionGap` | 32px (`xl`) |
| `contentPadding` | 24px (`lg`) |
| `cardPadding` | 16px (`md`) |
| `ctaMaxWidth` | 420px |
| `heroContentOffset` | 32px |
| `listItemGap` | 12px |
| `clusterGap` | 8px |

---

## 7. Shadows

### `src/design/shadows.ts`

| Preset | elevation | opacity | radius | offsetY | shadowColor | CSS-Äquivalent |
|--------|-----------|---------|--------|---------|-------------|----------------|
| `xs` | 1 | 0.08 | 3 | 1 | `#000` | `0 1px 3px rgba(0,0,0,0.08)` |
| `sm` | 2 | 0.12 | 6 | 2 | `#000` | `0 2px 6px rgba(0,0,0,0.12)` |
| `md` | 4 | 0.18 | 10 | 4 | `#000` | `0 4px 10px rgba(0,0,0,0.18)` |
| `lg` | 6 | 0.22 | 16 | 6 | `#000` | `0 6px 16px rgba(0,0,0,0.22)` |
| `spotlight` | 3 | 0.55 | 16 | 0 | `#FFD166` | `0 0 16px rgba(255,209,102,0.55)` |
| `card` | 5 | 0.35 | 12 | 4 | `#000` | `0 4px 12px rgba(0,0,0,0.35)` |
| `cardActive` | 6 | 0.45 | 18 | 0 | gold rgba | `0 0 18px rgba(255,209,102,0.45)` |

### `lib/theme/elevation.ts`

| Preset | shadowColor | CSS-Äquivalent |
|--------|-------------|----------------|
| `soft` | `#0B071F` | `0 2px 8px rgba(11,7,31,0.16)` |
| `card` | `#080515` | `0 4px 12px rgba(8,5,21,0.24)` |
| `glow` | gold rgba | `0 0 18px rgba(254,207,57,0.5)` |
| `focus` | lavender rgba | `0 0 16px rgba(214,142,255,0.58)` |

---

## 8. Website-Export — Zusammenfassung

### A) Artefakte

| Datei | Beschreibung |
|-------|--------------|
| `docs/DESIGN-SYSTEM.md` | Diese Dokumentation |
| `css/tokens.css` | CSS Custom Properties + Typography-Klassen |
| `docs/tailwind.theme.js` | Tailwind `theme.extend` |

### B) Was den SPOTSTAGE-Look definiert

1. **Tiefes Lila** (`#1c1550`) + **Atmosphere** (`#3b1c85`) als Bühnen-Hintergrund
2. **Gold-Akzent** (`#fecf39`) für CTAs und Spotlight-Effekte
3. **Lavender-Sekundärtext** (`#d68eff`) für Hierarchie
4. **Gold-Lila Button-Gradient** (`#FAFD63` → `#F4A958`) mit **Lila Ring** (`#D68EFF` → `#3B1C85`)
5. **Spotlight-Glow** (gold, `#FFD166` / `rgba(254,207,57,*)`)
6. **Inter** als UI-Schrift (400/600/700)
7. **Spotlight-Logo** (Big Shoulders + Goldkegel) als Brand Mark
8. Halbtransparente **Card-Surfaces** mit **lavender Rim** (`cardRim`)

### C) Unbedingt auf Website übernehmen

- Hintergrund `#1c1550` (nicht das aktuelle Website-`#0a0512` — **Abweichung!**)
- Accent `#fecf39` + CTA-Gradient aus `gradients.cta`
- Text `#FFFFFF` / `#d68eff`
- Hero-Gradient `#09061F` → `#241A56`
- Spotlight-Gradient aus `gradients.spotlight`
- Offizielles SVG-Logo aus `assets/brand/spotstage_logo.svg`
- Inter als Webfont
- Button-Radius 14px, Card-Radius 18px

### D) NICHT 1:1 übertragen

| App-Element | Grund |
|-------------|-------|
| Weiße Input-Felder (`inputBackground: #fff`) | Form-UI der App, nicht Landing Page |
| Tab Bar / Navigation Chrome | Mobile-spezifisch |
| Overlay Sheets (32px top radius, Handle) | Mobile Bottom-Sheet-Pattern |
| `boxShadow: "0 5px 10px..."` auf Web-Cards | RN-Web-Compat — stattdessen `elevation.*` CSS nutzen |
| Press-Scale Animationen (`PRESS_SCALE: 0.92`) | Touch-Feedback, auf Web dezent halten |
| Status-Badge-Farben 1:1 als UI-Chrome | Nur für Status-Anzeigen, nicht für allgemeines Layout |
| Ad-hoc-Farben (`#60A5FA`, `#FFC145`, `#8EB4FF`) | Nicht im zentralen Token-Set — vermeiden |
| App Icon als Marketing-Logo | Falsche Asset-Kategorie |

### E) Abweichung: Aktuelle Website vs. App

Die Marketing-Website (`spotstage-website/css/styles.css`) verwendet derzeit **eigene Werte** (z. B. `#0a0512`, `#d4a853`, Plus Jakarta Sans), die **nicht** den App-Tokens entsprechen. Für visuelle Parität:

1. `@import url('tokens.css')` in `styles.css`
2. Website-Farben schrittweise auf `--color-*` Tokens umstellen
3. Logo durch `spotstage_logo.svg` aus der App ersetzen
4. Font von Plus Jakarta Sans → **Inter** wechseln

---

## Quellenindex

```
spotstage-mobile/
├── src/design/
│   ├── colors.ts
│   ├── typography.ts
│   ├── spacing.ts
│   ├── radius.ts
│   ├── shadows.ts
│   └── theme.ts
├── lib/theme/
│   ├── gradients.ts
│   ├── surfaces.ts
│   ├── elevation.ts
│   ├── textStyles.ts
│   ├── layout.ts
│   └── opacity.ts
├── components/
│   ├── Button.tsx
│   ├── SpotstageLogo.tsx
│   └── StageBackground.tsx
├── assets/brand/spotstage_logo.svg
└── app.json
```
