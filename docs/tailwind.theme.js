/**
 * SPOTSTAGE Tailwind theme extension
 * Extracted from spotstage-mobile design tokens
 *
 * Usage (tailwind.config.js):
 *   const spotstageTheme = require('./docs/tailwind.theme');
 *   module.exports = {
 *     theme: { extend: spotstageTheme }
 *   };
 */

module.exports = {
  colors: {
    spotstage: {
      background: "#1c1550",
      atmosphere: "#3b1c85",
      surface: "#231a4e",
      accent: "#fecf39",
      "cta-label": "#120d36",
      "show-detail-card": "#181246",
      "text-primary": "#ffffff",
      "text-secondary": "#d68eff",
      "text-meta": "#cbcbcb",
      success: "#4ade80",
      "success-border": "#22c55e",
      error: "#ff5a72",
      border: "rgba(122, 100, 198, 0.26)",
      "border-card-rim": "rgba(170, 144, 248, 0.28)",
      "border-focus": "#ffd166",
      "surface-panel": "rgba(35, 26, 78, 0.72)",
      "surface-card": "rgba(45, 33, 97, 0.82)",
      "surface-overlay": "rgba(15, 10, 40, 0.92)",
      "surface-hero-overlay": "rgba(16, 12, 44, 0.58)",
      "status-applied-border": "#ffc107",
      "status-declined-border": "#f43f5e",
      "role-organizer-accent": "#f44eff",
      splash: "#0f0a1f",
      // Logo SVG fills (assets/brand/spotstage_logo.svg)
      "logo-gold-light": "#fde263",
      "logo-gold-dark": "#f49e55",
      "logo-purple": "#351776",
      "logo-magenta": "#d764fd",
    },
  },

  spacing: {
    xxs: "0.25rem",  // 4px — spacing.xxs
    xs: "0.5rem",    // 8px
    sm: "0.75rem",   // 12px
    md: "1rem",      // 16px
    lg: "1.5rem",    // 24px
    xl: "2rem",      // 32px
    xxl: "2.5rem",   // 40px
  },

  borderRadius: {
    xs: "0.25rem",   // 4px
    sm: "0.5rem",    // 8px
    md: "0.875rem",  // 14px — buttons
    lg: "1.125rem",  // 18px — cards
    xl: "1.5rem",    // 24px — show cards
    sheet: "2rem",   // 32px — overlay sheets
    full: "9999px",
  },

  boxShadow: {
    "spotstage-xs": "0 1px 3px rgba(0, 0, 0, 0.08)",
    "spotstage-sm": "0 2px 6px rgba(0, 0, 0, 0.12)",
    "spotstage-md": "0 4px 10px rgba(0, 0, 0, 0.18)",
    "spotstage-lg": "0 6px 16px rgba(0, 0, 0, 0.22)",
    "spotstage-card": "0 4px 12px rgba(0, 0, 0, 0.35)",
    "spotstage-card-active": "0 0 18px rgba(255, 209, 102, 0.45)",
    "spotstage-spotlight": "0 0 16px rgba(255, 209, 102, 0.55)",
    "spotstage-glow": "0 0 18px rgba(254, 207, 57, 0.5)",
    "spotstage-focus": "0 0 16px rgba(214, 142, 255, 0.58)",
    "spotstage-sheet": "0 -4px 16px rgba(0, 0, 0, 0.4)",
  },

  fontFamily: {
    spotstage: ["Inter", "system-ui", "sans-serif"],
    "spotstage-brand": ["Big Shoulders", "Inter", "system-ui", "sans-serif"],
  },

  fontSize: {
    "heading-xl": ["2.125rem", { lineHeight: "2.5rem", letterSpacing: "-0.03125em", fontWeight: "700" }],
    "heading-l": ["1.625rem", { lineHeight: "2rem", fontWeight: "700" }],
    "heading-m": ["1.25rem", { lineHeight: "1.75rem", letterSpacing: "-0.01875em", fontWeight: "600" }],
    body: ["1rem", { lineHeight: "1.5rem", fontWeight: "400" }],
    label: ["0.875rem", { lineHeight: "1.25rem", fontWeight: "400" }],
    caption: ["0.8125rem", { lineHeight: "1.125rem", fontWeight: "400" }],
    "caption-sm": ["0.6875rem", { lineHeight: "1rem", fontWeight: "400" }],
    button: ["1rem", { lineHeight: "1.5rem", letterSpacing: "0.08em", fontWeight: "600" }],
  },

  backgroundImage: {
    "spotstage-hero": "linear-gradient(180deg, #09061f 0%, #16103a 50%, #241a56 100%)",
    "spotstage-hero-overlay": "linear-gradient(180deg, rgba(9, 6, 31, 0.16) 0%, rgba(9, 6, 31, 0.62) 50%, rgba(22, 16, 58, 0.9) 100%)",
    "spotstage-spotlight": "linear-gradient(180deg, rgba(254, 207, 57, 0.34) 0%, rgba(254, 207, 57, 0.08) 50%, transparent 100%)",
    "spotstage-button": "linear-gradient(180deg, #fafd63 0%, #f4a958 100%)",
    "spotstage-button-ring": "linear-gradient(180deg, #d68eff 0%, #3b1c85 100%)",
    "spotstage-card-glow": "linear-gradient(180deg, rgba(214, 142, 255, 0.5) 0%, rgba(59, 28, 133, 0.7) 100%)",
    "spotstage-logo": "linear-gradient(180deg, #fde263 0%, #f49e55 100%)",
  },
};
