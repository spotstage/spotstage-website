# Android App Links — Website-Integration

**Repository:** `spotstage-website`  
**Mobile App:** `spotstage-mobile` (separates Repo)

---

## Neue Dateien

| Pfad | Zweck |
|------|-------|
| `.well-known/assetlinks.json` | Android Domain-Verifikation |
| `org/invite/index.html` | Web-Fallback für nicht installierte App |
| `js/org-invite.js` | „In SPOTSTAGE öffnen“-Button (Custom Scheme, kein Token im UI) |
| `netlify.toml` | JSON Content-Type, `/org/invite` Static Rewrite |

---

## Deployment

1. Änderungen in `spotstage-website` committen und nach `main` pushen.
2. Netlify baut automatisch (Publish directory: `.`, kein Build-Step).
3. Nach Deploy verifizieren:

```bash
curl -I https://spotstage.app/.well-known/assetlinks.json
curl -I "https://spotstage.app/org/invite?token=test"
```

Erwartung:

- `assetlinks.json` → **200**, `Content-Type: application/json`, kein Redirect auf HTML
- `/org/invite?token=…` → **200**, Invite-Fallback-Seite, Query-Parameter erhalten

---

## Fingerprint aktualisieren

Fingerprints stammen vom EAS Android Keystore. Ermittlung im Mobile-Repo:

```bash
node scripts/extract-apk-signing-sha256.cjs path/to/eas-development.apk
```

Mehrere legitime Fingerprints (z. B. nach Keystore-Rotation) als Array in `sha256_cert_fingerprints` eintragen.

**Nicht erfinden** — nur verifizierte Werte aus APK/AAB oder Expo Credentials.

---

## Sicherheit

- Kein Token im sichtbaren Fließtext
- Kein Token in Analytics
- Kein serverseitiges Logging des Query-Parameters
- Keine Einladungsvorschau ohne serverseitige RPC-Prüfung (nur in der App)
