# Homepage: UI-Kompositionen

Der Feature-Slider nutzt unveränderte WebP-Ausschnitte unter `images/screenshots/`.
Keine Geräteumrandung oder nachgebauten App-Controls. Hero-Mockups bleiben separat.

## Reihenfolge und Zuordnung

- Organizer: Show erstellen (slide01), Showübersicht (02), Bewerbungen (03), Line-up & Warteliste (04), Aufgaben (05), Organisation (06).
- Comedian: Shows entdecken (slide01), Bewerben (02), Bewerbungen (04), Kalender (03), Nachrichten (05), Terminkonflikte (06).
- Comedian slide06 nutzt `showcard.webp`, `bottomSheet.webp` und zuletzt `overlay.webp`. Der Hinweis betrifft denselben Kalendertag; keine Aussage über sichere zeitliche Überschneidungserkennung, Fahrzeiten oder verhinderte Doppelbuchungen.
- Organizer Show erstellen verwendet Spots, Spotlänge, Serie und Gage. Format wird nur im Text erwähnt.
- SPOTLIGHT ist eine Website-Annotation direkt an den überlappenden Bewerbungskarten, keine nachgebaute App-UI.
- Die Originalbilder zeigen deutsche App-Texte; Website-Texte und Bildbeschreibungen sind DE/EN lokalisiert.

## Integration

`FEATURE_COMPOSITIONS` in `js/how-it-works.js` definiert Quellen, natürliche Maße,
Position, relative Breite, Rotation und Timing. Prozentwerte beziehen sich auf eine
kompakte Fläche im Verhältnis 500 × 450. Neue Features brauchen dort eine Komposition sowie passende
Einträge unter `howItWorks.organizers` oder `artists` in beiden Sprachen.
Seitliche 44-Pixel-Chevrons, Dots darunter, zyklische Navigation und End-Taste richten sich nach der tatsächlichen Anzahl.
Der statische HTML-Fallback entspricht dem ersten Organizer-Feature.

Die CSS-Animation läuft beim Einblenden einmal (900 ms je Layer, Gruppenstarts bei 0/400/800 ms, insgesamt bis 1700 ms), ausschließlich
über opacity/transform. Verstecken entfernt die Animation; Zurücknavigation startet
sie neu. Bei reduced motion stehen alle Ebenen sofort an ihrer finalen Position.
Die Visuals sind auf Desktop maximal 500 statt 650 Pixel breit (rund 23 % kleiner). Die Stage verzichtet auf den früheren 14-%-Abstand unterhalb. SPOTLIGHT ist ein gedrehter redaktioneller Callout mit feinen Linien, liegt im Winkel der vorderen Card über deren Oberkante, erscheint zuletzt und bleibt bei reduced motion sofort sichtbar.
Jede Ebene hat einen transparenzgerechten doppelten drop-shadow. Sekundäre Bilder
haben leere Alt-Texte; das Hauptbild beschreibt die gesamte Komposition.

Textblöcke reservieren per `min-height` und `lh` Zeilenraum pro Breakpoint; keine feste Höhe oder Textbeschneidung. Der Kalender bleibt ein einzelnes Bild. Der rote Datumsindikator im Terminkonflikt-Slide bleibt frei.

Der vorhandene Anchor-Offset ist ausreichend: Native Anker nutzen `scroll-margin-top`; der Smooth-Scroll-Handler zieht die tatsächliche Header-Höhe ab. Navigation zu `#how-it-works` wurde auf Desktop und Mobile geprüft; die Section-Headline bleibt unterhalb des Headers.

## Store-Links vor Launch

In `js/app.js` unter `STORE_URLS` die verifizierten HTTPS-Ziele für Apple App Store und
Google Play eintragen. Ohne URL besitzt das jeweilige Badge keinen `href` und ist als
deaktiviert gekennzeichnet. Bei zwei hinterlegten Links entfällt der Launch-Hinweis.
Anschließend beide Ziele, DE/EN-Badges und Tastaturbedienung prüfen.
