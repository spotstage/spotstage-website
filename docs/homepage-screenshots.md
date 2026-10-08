# Homepage: Screenshot-Briefing

Die Feature-Section zeigt ein Carousel mit vier unabhängigen Features je Zielgruppe,
von denen jeweils eines sichtbar ist. Alle Bildbereiche
verwenden vorläufig den vorhandenen neutralen `images/placeholders/hero-phone.svg`.
Es werden keine neuen App-Oberflächen simuliert. Die Hero-Mockups bleiben vorläufig bestehen.

## Benötigte Aufnahmen

Alle folgenden Dateien gehören nach `images/screenshots/`. Die Dateinamen entsprechen
den Feature-IDs in `js/how-it-works.js`.

| Dateiname | App-Seite und sichtbarer Zustand | Sinnvolle Testdaten |
|---|---|---|
| `organizer-applications.webp` | Bewerbungen einer Show; mehrere Bewerbungen und die tatsächlich vorhandenen Status/Aktionen sichtbar. | Eine klar benannte Comedy-Show; 4–6 Test-Comedians; angenommen, Warteliste und ausstehend. Absage nur zeigen, wenn dieser Zustand in derselben Ansicht wirklich angezeigt wird. |
| `organizer-lineup.webp` | Line-up derselben Show mit besetzten Spots in nachvollziehbarer Reihenfolge. | 3–4 angenommene Test-Comedians, ein freier Spot; plausibel kurze Set-Zeiten. Host separat halten, sofern sichtbar. |
| `organizer-show-organization.webp` | Die reale Showübersicht mit Host, Aufgaben oder Kommunikation. Keine künstlich kombinierte Ansicht. | Zugeordneter Test-Host; kurze Aufgabe wie „Mikrofone prüfen“; nur tatsächlich auf dieser App-Seite sichtbare Informationen aufnehmen. |
| `organizer-team.webp` | Organisation-/Teamseite mit mehreren Mitgliedern. | Neutrale Testorganisation, z. B. „Bühnenrunde“; 2–3 Testmitglieder. Nur existierende Rollenbezeichnungen verwenden. Keine echten Einladungslinks zeigen. |
| `comedian-discover.webp` | Entdecken-/Showsuche mit offenen Comedy-Shows. | 3–4 fiktive Testshows mit zukünftigen Terminen und realistischen Orten; keine Erfolgsaussage oder regionale Nutzungsbeschränkung ableiten. |
| `comedian-apply.webp` | Reale Showdetail- oder Bewerbungsansicht unmittelbar vor dem Bewerben. | Dieselbe Testshow; erkennbare Showinformationen und echte Bewerben-Aktion. Keine zusätzlichen Formularfelder erfinden. |
| `comedian-application-status.webp` | Bewerbungsübersicht mit klar lesbaren Status. | Vier Testbewerbungen: angenommen, Warteliste, ausstehend, abgelehnt; nur Status zeigen, die die App in dieser Ansicht unterstützt. |
| `comedian-calendar.webp` | Kalender/Terminübersicht mit bestätigtem Auftritt und relevanten Bewerbungen. | Ein bestätigter Auftritt und eine weitere relevante Bewerbung am selben Tag. Überschneidungshinweis nur aufnehmen, wenn die App ihn dort tatsächlich anzeigt. |

## Aufnahme und Integration

- Ausschließlich Testkonten und fiktive Namen verwenden; keine privaten Nachrichten, Tokens oder personenbezogenen Echtdaten.
- Einheitliches Gerät, Hochformat und Auflösung; etwa 1080 px Breite als Ausgangspunkt. Lesbare Schrift, keine abgeschnittenen Inhalte.
- Keine zusätzliche Geräteumrandung in das Bild einbauen: Der Bildbereich stellt die Aufnahme unverzerrt mit `object-fit: contain` dar.
- Die acht Dateien sind die deutsche Basis. Bei lokalisierten Aufnahmen zusätzlich `*-en.webp` erstellen und die Bildzuordnung um die Locale erweitern; aktuell werden keine nicht vorhandenen Sprachvarianten referenziert.
- In `FEATURE_IMAGES` in `js/how-it-works.js` die passende Quelle von `PLACEHOLDER` auf `images/screenshots/<dateiname>` ändern.
- Danach verschwindet die Platzhalter-Beschriftung für dieses Bild automatisch; Feature-Label und Titel dienen als Caption/Alt-Text. Den Alt-Text anhand des tatsächlichen Bildes prüfen und bei Bedarf präzisieren.
- Die statischen Organizer-Fallbacks in `index.html` ebenfalls auf die echten Dateien sowie passende Alt-Texte/Captions umstellen.
- Hero später vorzugsweise mit Showentdeckung und Organizer-Showübersicht aktualisieren. Dafür zusätzlich `hero-comedian.webp` und `hero-organizer.webp` aufnehmen.

## Store-Links vor Launch

In `js/app.js` unter `STORE_URLS` die verifizierten HTTPS-Ziele für Apple App Store und
Google Play eintragen. Ohne URL besitzt das jeweilige Badge keinen `href` und ist als
deaktiviert gekennzeichnet. Bei zwei hinterlegten Links entfällt der Launch-Hinweis.
Anschließend beide Ziele, DE/EN-Badges und Tastaturbedienung prüfen.
