/**
 * SPOTSTAGE – Central translations (de / en)
 * Extend by adding new locale keys under each language.
 */
(function () {
  'use strict';

  window.SpotstageTranslations = {
    de: {
      meta: {
        "title": "SPOTSTAGE – Comedy-Shows organisieren. Auftritte finden.",
        "description": "SPOTSTAGE – die App für Veranstalter und Comedians. Comedy-Shows veröffentlichen, Bewerbungen verwalten und Auftritte im Blick behalten."
      },
      lang: {
        switchAria: 'Sprache wählen',
        labelDe: 'Deutsch auswählen',
        labelEn: 'Englisch auswählen',
        activeDe: 'Deutsch, aktuelle Sprache',
        activeEn: 'Englisch, aktuelle Sprache',
      },
      a11y: {
        skipToMain: 'Zum Hauptinhalt springen',
      },
      notFound: {
        meta: '404 | SPOTSTAGE',
        metaDescription: 'Seite nicht gefunden – SPOTSTAGE',
        imageAlt: 'Heruntergefallener, kaputter Bühnenscheinwerfer auf dunkler Bühne',
        headline: 'Hier spielt nicht die Show!',
        text: 'Die Seite, die du suchst, ist nicht mehr hier – oder hat ihren Auftritt noch nicht.',
        cta: 'Zur Startseite',
      },
      invite: {
        metaTitle: 'Organisationseinladung | SPOTSTAGE',
        metaDescription: 'Organisationseinladung in SPOTSTAGE öffnen',
        headline: 'Du wurdest zu einer Organisation eingeladen',
        lead:
          'Öffne die Einladung in der SPOTSTAGE-App, um dem Team beizutreten. Falls die App noch nicht installiert ist, installiere sie zuerst und tippe danach erneut auf den Einladungslink.',
        hint: 'Die SPOTSTAGE-App wird benötigt, um die Einladung anzunehmen.',
        openInApp: 'In SPOTSTAGE öffnen',
        backToHome: 'Zur Startseite',
      },
      nav: {
        "ariaLabel": "Hauptnavigation",
        "open": "Menü öffnen",
        "close": "Menü schließen",
        "howItWorks": "So funktioniert's",
        "download": "App herunterladen"
      },
      logo: {
        ariaHome: 'SPOTSTAGE Startseite',
      },
      hero: {
        "availability": "Demnächst verfügbar!",
        "slogan": "Deine Show. Deine Bühne. Dein Moment.",
        "headline": "Die App für<br><span class=\"hero-section__accent hero-section__accent--purple\">Veranstalter</span><br>& <span class=\"hero-section__accent hero-section__accent--gold\">Comedians</span>",
        "subheadline": "SPOTSTAGE bringt Veranstalter und Comedians zusammen.<br>Von der Show-Ausschreibung und Bewerbung bis zum Line-up und Auftritt.",
        "phoneArtistAlt": "Illustratives SPOTSTAGE-Mockup für Comedians",
        "phoneOrganizerAlt": "Illustratives SPOTSTAGE-Mockup für Veranstalter",
        "phoneArtistCaption": "Für Comedians",
        "phoneOrganizerCaption": "Für Veranstalter",
        "scrollHint": "Zum nächsten Abschnitt scrollen",
        "eyebrow": "Für Veranstalter & Comedians",
        "primaryCta": "App herunterladen",
        "secondaryCta": "So funktioniert Spotstage"
      },
      badges: {
        "comingSoon": "Demnächst verfügbar",
        "apple": {
          "src": "images/badges/Download_on_the_App_Store_Badge_DE_RGB_blk_092917.svg",
          "width": 162,
          "height": 54,
          "aria": "SPOTSTAGE im Apple App Store öffnen",
          "unavailableAria": "Apple App Store – Link zum App-Launch verfügbar",
          "alt": "Laden im App Store"
        },
        "google": {
          "src": "images/badges/GetItOnGooglePlay_Badge_Web_color_German.svg",
          "width": 182,
          "height": 54,
          "aria": "SPOTSTAGE bei Google Play öffnen",
          "unavailableAria": "Google Play – Link zum App-Launch verfügbar",
          "alt": "Jetzt bei Google Play"
        }
      },
      howItWorks: {
        "carouselLabel": "Produktfunktionen",
        "carouselRole": "Karussell",
        "previousFeature": "Vorheriges Feature",
        "nextFeature": "Nächstes Feature",
        "chooseFeature": "Feature auswählen",
        "showFeature": "Feature anzeigen",
        "eyebrow": "So funktioniert's",
        "title": "Mehr Überblick. Weniger Hin und Her.",
        "subtitle": "Entdecke, wie SPOTSTAGE deine Arbeit rund um Comedy-Shows vereinfacht.",
        "switchAria": "Funktionen nach Zielgruppe auswählen",
        "switchArtists": "Für Comedians",
        "switchOrganizers": "Für Veranstalter",
        "organizerStatus": "Funktionen für Veranstalter werden angezeigt.",
        "artistStatus": "Funktionen für Comedians werden angezeigt.",
        "organizers": [
          {
            "id": "organizer-create",
            "label": "Show erstellen",
            "title": "Erstelle deine Show mit allen Details",
            "text": "Lege Format, Spotanzahl und -länge, Gage, Extras und weitere Rahmenbedingungen fest. Wiederkehrende Shows planst du direkt als Serie.",
            "benefit": "Einzelshows und Serien schnell mit allen Rahmenbedingungen anlegen.",
            "imageAlt": "Show-Konfiguration mit Spots, Spotlänge, Event-Serie und Gage"
          },
          {
            "id": "organizer-shows",
            "label": "Showübersicht",
            "title": "Alle Shows und ihren Status im Blick",
            "text": "Plane und besetze deine Shows im Casting. Sobald das Line-up steht, organisierst du die Show weiter und stimmst dich im Show-Chat direkt mit den Comedians ab.",
            "benefit": "Von der Planung bis zur Abstimmung – alles in einer App.",
            "imageAlt": "Showkarten mit Besetzung und offenen Entscheidungen, Casting-Status und Chat"
          },
          {
            "id": "organizer-applications",
            "label": "Bewerbungen",
            "title": "Bewerbungen besser einordnen. Zusagen sicherer planen.",
            "text": "Sieh Profil, Auftrittswünsche und SPOTLIGHT-Hinweise wie weite Anreise oder bereits gebuchte Shows am selben Tag. Entscheide anschließend über Zusage, Warteliste oder Absage.",
            "benefit": "Mehr Kontext für bessere Entscheidungen und verlässlichere Zusagen.",
            "imageAlt": "Zwei Bewerbungen mit Profil, Auftrittswünschen und Hinweisen zu erster Bewerbung und Anreise",
            "annotation": "Mehr Kontext für deine Besetzung."
          },
          {
            "id": "organizer-lineup",
            "label": "Line-up & Warteliste",
            "title": "Schnell zum Line-up. Warteliste als Backup.",
            "text": "Aus deinen Zusagen entsteht direkt das Line-up. Reihenfolge und Spots kannst du bei Bedarf anpassen. Mit der Warteliste hast du bei kurzfristigen Absagen schnell Ersatz parat.",
            "benefit": "Schneller zum Line-up. Flexibler bei Absagen.",
            "imageAlt": "Line-up mit belegten und freien Spots sowie eine separate Warteliste"
          },
          {
            "id": "organizer-tasks",
            "label": "Aufgaben",
            "title": "Sieh, was als Nächstes wichtig ist",
            "text": "Behalte offene Aufgaben rund um Shows, Bewerbungen, Planung und Updates im Blick.",
            "benefit": "Weniger suchen. Klarer wissen, was als Nächstes ansteht.",
            "imageAlt": "Aufgabenfilter und Hinweise auf ein unvollständiges Line-up und neue Bewerbungen"
          },
          {
            "id": "organizer-team",
            "label": "Organisation",
            "title": "Einzeln oder als Team",
            "text": "Organisiere Shows allein oder gemeinsam. Teammitglieder können planen und unterstützen, während wichtige Organisationsstatistiken für euch im Blick bleiben.",
            "benefit": "Eine gemeinsame Basis für eure Shows.",
            "imageAlt": "Organisationsmenü mit Team, Rollen und Einladungen sowie eine Statistik"
          }
        ],
        "artists": [
          {
            "id": "comedian-discover",
            "label": "Shows entdecken",
            "title": "Finde Shows, die zu dir passen",
            "text": "Grenze deine Suche nach Datum, Auftrittsgebiet und Format ein. Vergleiche Shows und ihre offenen Spots.",
            "benefit": "Schneller zur passenden Bühne.",
            "imageAlt": "Showfilter für Datum, Auftrittsgebiet und Format sowie drei offene Comedy-Shows"
          },
          {
            "id": "comedian-apply",
            "label": "Bewerben",
            "title": "Bewirb dich schnell und flexibel",
            "text": "Alle wichtigen Showinfos auf einen Blick. Gib deinen Wunsch für frühe oder späte Slots an und signalisiere, ob du auch als Host verfügbar bist.",
            "benefit": "Show prüfen, Wunsch angeben, Bewerbung senden.",
            "imageAlt": "Showdetails, Line-up-Wunsch und Bewerbungsoptionen"
          },
          {
            "id": "comedian-application-status",
            "label": "Bewerbungen",
            "title": "Behalte jede Bewerbung im Blick",
            "text": "Ausstehend, Warteliste, angenommen oder abgelehnt: Filter und Statusfarben zeigen dir jederzeit den aktuellen Stand.",
            "benefit": "Alle Bewerbungen und Status auf einen Blick.",
            "imageAlt": "Bewerbungsfilter und Showkarten für die vier Bewerbungszustände"
          },
          {
            "id": "comedian-calendar",
            "label": "Kalender",
            "title": "Deine nächsten Auftritte auf einen Blick",
            "text": "Sieh bestätigte Auftritte und relevante Bewerbungen direkt in deinem Show-Kalender und plane deine nächsten Termine einfacher.",
            "benefit": "Deine nächsten Termine an einem Ort.",
            "imageAlt": "Kalender mit einem bestätigten Auftritt und einer ausstehenden Bewerbung"
          },
          {
            "id": "comedian-messages",
            "label": "Nachrichten",
            "title": "Updates und Chats direkt im Blick",
            "text": "Updates und neue Nachrichten erreichen dich per Push. In der App findest du Änderungen und Show-Chats direkt an einem Ort.",
            "benefit": "Wichtige Änderungen und Nachrichten schneller mitbekommen.",
            "imageAlt": "Nachrichten-Navigation, Updates zur Warteliste und Moderation sowie ein Show-Chat"
          },
          {
            "id": "comedian-conflicts",
            "label": "Terminkonflikte",
            "title": "Mehrere Shows am selben Tag? Du siehst es vorher.",
            "text": "SPOTSTAGE weist dich auf bestehende Buchungen am gleichen Tag hin, damit du Bewerbungen und Zusagen besser einschätzen kannst.",
            "benefit": "Besser planen, bevor du zusagst.",
            "imageAlt": "Showkarte, Buchungsbestätigung und Hinweis auf eine bereits bestehende Buchung am selben Kalendertag"
          }
        ]
      },
      earlyAdopters: {
        "title": "Gestalte Spotstage mit.",
        "intro": "SPOTSTAGE entwickelt sich mit echter Nutzung und direktem Feedback weiter. Teile deine Erfahrungen mit uns.",
        "support": "Veranstalter unterstützen wir persönlich beim Einrichten erster Shows und bei Fragen. Ausgewählte Shows können wir zusätzlich über unsere Social-Media-Kanäle begleiten.",
        "cta": "Kontakt & Feedback"
      },
      launchCta: {
        "title": "Bereit für deine nächste Show?",
        "text": "Comedy-Shows organisieren. Auftritte finden. Mit SPOTSTAGE.",
        "availability": "Demnächst verfügbar!"
      },
      footer: {
        claim: 'Deine Show. Deine Bühne. Dein Moment.',
        navAria: 'Footer-Navigation',
        legalNotice: 'Impressum',
        privacy: 'Datenschutz',
        terms: 'Nutzungsbedingungen',
        support: 'Support',
        accessibility: 'Barrierefreiheit',
        accountDeletion: 'Account löschen',
        copyright: '© 2026 SPOTSTAGE UG (haftungsbeschränkt)',
      },
      legal: {
        backToHome: 'Zurück zur Startseite',
        imprintTitle: 'Impressum',
        imprintIntro: 'Angaben gemäß § 5 DDG',
        imprintCompany:
          'SPOTSTAGE UG (haftungsbeschränkt)<br>Hugo-Weiss-Str. 25<br>81827 München<br>Deutschland',
        imprintRepresentationHeading: 'Vertreten durch',
        imprintRepresentationText: 'Geschäftsführer: Christian Peter Sigel',
        imprintContactHeading: 'Kontakt',
        imprintContact:
          'E-Mail: <a class="legal-page__link" href="mailto:hello@spotstage.app">hello@spotstage.app</a>',
        imprintRegisterHeading: 'Handelsregister',
        imprintRegisterIntro: '',
        imprintRegisterDetails:
          'Registergericht: Amtsgericht München<br>Registernummer: HRB 313304',
        imprintDisputeHeading: 'Verbraucherstreitbeilegung',
        imprintDisputeText:
          'Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
        imprintDisclaimer: '',
        privacyTitle: 'Datenschutzerklärung',
        imprintMeta: 'Impressum | SPOTSTAGE',
        privacyMeta: 'Datenschutz | SPOTSTAGE',
        accessibilityMeta: 'Barrierefreiheit | SPOTSTAGE',
        accessibilityTitle: 'Informationen zur Barrierefreiheit',
        accessibilityCommitmentHeading: 'Unser Anspruch',
        accessibilityCommitmentBody:
          '<p>SPOTSTAGE möchte seine Website für möglichst viele Menschen zugänglich und nutzbar machen.</p>' +
          '<p>Wir arbeiten daran, die Website im Einklang mit den Anforderungen des Barrierefreiheitsstärkungsgesetzes sowie den einschlägigen technischen Standards barrierefrei zu gestalten und fortlaufend zu verbessern.</p>',
        accessibilityDescriptionHeading: 'Beschreibung der Website',
        accessibilityDescriptionBody:
          '<p>Die Website spotstage.app informiert über die mobile Anwendung SPOTSTAGE.</p>' +
          '<p>SPOTSTAGE unterstützt Künstlerinnen und Künstler sowie Veranstalterinnen und Veranstalter dabei, Bühnenshows zu finden, zu planen und zu organisieren.</p>' +
          '<p>Die Website stellt die wichtigsten Funktionen der App vor und enthält Informationen für die verschiedenen Zielgruppen sowie rechtliche Informationen.</p>' +
          '<p>Über die Website selbst können derzeit keine Nutzerkonten erstellt, Verträge abgeschlossen, Zahlungen vorgenommen oder Daten über ein Kontaktformular eingegeben werden.</p>',
        accessibilityComplianceHeading: 'Stand der Vereinbarkeit',
        accessibilityComplianceBody:
          '<p>Die Website wurde intern anhand zentraler Anforderungen der Web Content Accessibility Guidelines (WCAG) 2.1 auf den Konformitätsstufen A und AA geprüft und wird fortlaufend verbessert.</p>' +
          '<p>Nach dem derzeitigen Stand ist die Website mit diesen Anforderungen voraussichtlich weitgehend vereinbar.</p>' +
          '<p>Eine vollständige Konformität mit sämtlichen Anforderungen des Barrierefreiheitsstärkungsgesetzes kann derzeit nicht zugesichert werden. Eine unabhängige externe Prüfung oder Zertifizierung ist bislang nicht erfolgt.</p>',
        accessibilityMeasuresHeading: 'Umgesetzte Maßnahmen',
        accessibilityMeasuresBody:
          '<p>Bei der Entwicklung und Überarbeitung der Website wurden insbesondere folgende Aspekte berücksichtigt:</p>' +
          '<ul class="legal-page__list">' +
          '<li>verständliche und semantisch strukturierte Inhalte</li>' +
          '<li>logische Überschriftenhierarchien</li>' +
          '<li>Bedienbarkeit mit der Tastatur</li>' +
          '<li>sichtbare Fokuszustände</li>' +
          '<li>ein Sprunglink zum Hauptinhalt</li>' +
          '<li>zugängliche Navigation und mobile Menüführung</li>' +
          '<li>verständliche Beschriftungen interaktiver Elemente</li>' +
          '<li>Alternativtexte für informative Bilder</li>' +
          '<li>ausreichende Farbkontraste</li>' +
          '<li>ausreichend große Bedienflächen</li>' +
          '<li>Unterstützung von Zoom und schmalen Bildschirmgrößen</li>' +
          '<li>Berücksichtigung der Systemeinstellung „Bewegung reduzieren“</li>' +
          '<li>Unterstützung von erzwungenen Systemfarben</li>' +
          '<li>deutsch- und englischsprachige Inhalte</li>' +
          '</ul>',
        accessibilityKnownHeading: 'Bekannte Einschränkungen',
        accessibilityKnownBody:
          '<p>Die App-Store-Links sind derzeit noch nicht aktiv, da die Veröffentlichung von SPOTSTAGE in den App Stores noch aussteht. Dieser Zustand wird auf der Website als „demnächst verfügbar“ gekennzeichnet.</p>' +
          '<p>Einzelne Animationen und Spotlight-Effekte dienen ausschließlich der visuellen Gestaltung. Bei aktivierter Systemeinstellung „Bewegung reduzieren“ werden diese deaktiviert oder deutlich reduziert.</p>' +
          '<p>Die Website wurde noch nicht abschließend mit allen Kombinationen aus Screenreadern, Browsern und Betriebssystemen getestet. Abweichungen bei Ansage oder Fokusführung können daher in Einzelfällen nicht vollständig ausgeschlossen werden.</p>',
        accessibilityFeedbackHeading: 'Feedback und Kontakt',
        accessibilityFeedbackBody:
          '<p>Sind Ihnen Barrieren auf unserer Website aufgefallen oder haben Sie Schwierigkeiten bei der Nutzung?</p>' +
          '<p>Schreiben Sie uns bitte unter:</p>' +
          '<p><a class="legal-page__link" href="mailto:hello@spotstage.app?subject=Hinweis%20zur%20Barrierefreiheit%20bei%20SPOTSTAGE">hello@spotstage.app</a></p>' +
          '<p>Beschreiben Sie möglichst genau, auf welcher Seite und bei welcher Funktion das Problem auftritt. Hilfreich sind außerdem Angaben zum verwendeten Gerät, Browser und gegebenenfalls zur eingesetzten assistiven Technologie.</p>' +
          '<p>Wir prüfen Ihren Hinweis und bemühen uns um eine zeitnahe Rückmeldung und eine geeignete Lösung.</p>',
        accessibilityStandardHeading: 'Prüfgrundlage',
        accessibilityStandardBody:
          '<p>Die Entwicklung und interne Prüfung der Website orientiert sich insbesondere an:</p>' +
          '<ul class="legal-page__list">' +
          '<li>den Web Content Accessibility Guidelines (WCAG) 2.1 auf den Konformitätsstufen A und AA</li>' +
          '<li>der europäischen Norm EN 301 549</li>' +
          '<li>den Anforderungen des Barrierefreiheitsstärkungsgesetzes</li>' +
          '<li>den Anforderungen der Barrierefreiheitsstärkungsverordnung</li>' +
          '</ul>' +
          '<p>Zur Prüfung wurden unter anderem eine HTML-Validierung, Google Lighthouse, codebasierte Kontrollen sowie manuelle Prüfungen der Tastatur- und Fokusführung eingesetzt.</p>' +
          '<p>Automatisierte Prüfwerkzeuge können nicht alle Barrieren erkennen und ersetzen keine umfassende Prüfung mit unterschiedlichen assistiven Technologien.</p>',
        accessibilityUpdated: 'Erstellt und zuletzt überprüft: Juni 2026',
        supportMeta: 'Support | SPOTSTAGE',
        supportTitle: 'Support',
        supportPurposeHeading: 'Wobei wir helfen',
        supportPurposeBody:
          '<p>Diese Seite bietet Hilfe zur SPOTSTAGE-App. Du findest hier Antworten und Kontaktmöglichkeiten bei Problemen mit Login, Passwort-Reset, Account-Löschung, Bewerbungen, Shows, Profilen oder technischen Fehlern.</p>',
        supportContactHeading: 'Kontakt',
        supportContactBody:
          '<p>Bei Fragen oder Problemen erreichst du uns per E-Mail:</p>' +
          '<p><a class="legal-page__link" href="mailto:hello@spotstage.app">hello@spotstage.app</a></p>',
        supportExpectationsHeading: 'Was du erwarten kannst',
        supportExpectationsBody:
          '<p>Wir bearbeiten Anfragen so schnell wie möglich. Eine garantierte Antwortzeit, Support-Hotline oder feste Supportzeiten gibt es derzeit nicht.</p>',
        supportHelpHeading: 'Häufige Themen',
        supportHelpBody:
          '<p><strong>Passwort vergessen</strong><br>Öffne die App, tippe auf „Passwort vergessen?“ und folge den Anweisungen in der E-Mail. Weitere Details findest du in unserer Datenschutzerklärung.</p>' +
          '<p><strong>Account löschen</strong><br>Die Löschung erfolgt in der App unter Profil → Konto → „Account löschen“. Ausführliche Informationen findest du auf der Seite <a class="legal-page__link" href="account-loeschen.html">Account löschen</a>.</p>' +
          '<p><strong>Technische Probleme melden</strong><br>Schreib uns an <a class="legal-page__link" href="mailto:hello@spotstage.app">hello@spotstage.app</a>. Folgende Angaben helfen uns bei der Fehlersuche:</p>' +
          '<ul class="legal-page__list">' +
          '<li>Gerät und Modell</li>' +
          '<li>Betriebssystem und Version</li>' +
          '<li>App-Version</li>' +
          '<li>betroffener Screen oder Funktion</li>' +
          '<li>Schritte zur Reproduktion des Problems</li>' +
          '<li>Screenshot ohne sensible Daten (keine Passwörter, keine privaten Nachrichten)</li>' +
          '</ul>',
        supportUpdated: 'Stand: Juni 2026',
        accountDeletionMeta: 'Account löschen | SPOTSTAGE',
        accountDeletionTitle: 'Account löschen',
        accountDeletionIntroHeading: 'Informationen zur Account-Löschung',
        accountDeletionIntroBody:
          '<p>Diese Seite erklärt, wie du deinen SPOTSTAGE-Account in der App löschen kannst und was dabei passiert. Es handelt sich um eine Informationsseite — die Löschung selbst erfolgt ausschließlich in der App.</p>',
        accountDeletionStepsHeading: 'So löschst du deinen Account in der App',
        accountDeletionStepsBody:
          '<ol class="legal-page__list">' +
          '<li>SPOTSTAGE öffnen</li>' +
          '<li>Profil öffnen</li>' +
          '<li>Den Bereich „Konto“ aufrufen</li>' +
          '<li>„Account löschen“ wählen</li>' +
          '<li>Dein Passwort erneut eingeben</li>' +
          '<li>Mit „LÖSCHEN“ bestätigen</li>' +
          '</ol>',
        accountDeletionDeletedHeading: 'Was gelöscht wird',
        accountDeletionDeletedBody:
          '<p>Bei einer erfolgreichen Account-Löschung werden insbesondere folgende Daten entfernt:</p>' +
          '<ul class="legal-page__list">' +
          '<li>dein Account-Zugang und der zugehörige Authentifizierungsaccount</li>' +
          '<li>persönliche Profil- und Rollenprofildaten</li>' +
          '<li>Profilbilder</li>' +
          '<li>Push Token</li>' +
          '<li>Benachrichtigungseinstellungen und In-App-Benachrichtigungen</li>' +
          '<li>offene oder noch nicht abgeschlossene Bewerbungen</li>' +
          '</ul>',
        accountDeletionRetainedHeading: 'Was nach Entfernung direkter Profilangaben erhalten bleiben kann',
        accountDeletionRetainedBody:
          '<p>Bestimmte Daten können bestehen bleiben, wenn sie der Organisation beziehungsweise der Durchführung oder Dokumentation von Shows dienen und nicht ausschließlich deinem persönlichen Profil zuzuordnen sind. Dazu können insbesondere gehören:</p>' +
          '<ul class="legal-page__list">' +
          '<li>Daten von Organisationen und Veranstaltungsorten</li>' +
          '<li>vergangene Shows und historische Line-ups</li>' +
          '<li>vergangene Auftritte und Besetzungsbezüge</li>' +
          '<li>historische Show-Kommunikation</li>' +
          '</ul>' +
          '<p>Direkte Profilangaben werden entfernt; dein Name kann in historischen Zusammenhängen durch „Gelöschtes Mitglied“ ersetzt werden. Soweit dennoch ein Personenbezug fortbesteht, gelten deine gesetzlichen Datenschutzrechte unverändert fort.</p>',
        accountDeletionBlockersHeading: 'Mögliche Blocker',
        accountDeletionBlockersBody:
          '<p>Die technische Account-Löschung in der App kann vorübergehend nicht möglich sein, wenn noch aktive Verpflichtungen oder organisatorische Abhängigkeiten bestehen, zum Beispiel:</p>' +
          '<ul class="legal-page__list">' +
          '<li>zukünftiger bestätigter Auftritt</li>' +
          '<li>aktive oder noch offene Host-Zuordnung</li>' +
          '<li>Organisations-Eigentümerschaft</li>' +
          '<li>du bist das einzige aktive Mitglied einer Organisation</li>' +
          '<li>eine Organisation könnte ohne vorherige Übertragung der erforderlichen Rechte und Verantwortlichkeiten nicht weitergeführt werden</li>' +
          '<li>Admin-Self-Delete ist nicht möglich</li>' +
          '</ul>' +
          '<p>In diesen Fällen musst du zunächst die jeweilige Verpflichtung beziehungsweise organisatorische Abhängigkeit auflösen. Gesetzliche Datenschutzrechte, insbesondere ein gegebenenfalls bestehendes Recht auf Löschung nach Art. 17 DSGVO, bleiben hiervon unberührt.</p>',
        accountDeletionHelpHeading: 'Hilfe ohne App-Zugriff',
        accountDeletionHelpBody:
          '<p>Wenn du keinen Zugang mehr zur App hast, kontaktiere uns unter <a class="legal-page__link" href="mailto:hello@spotstage.app">hello@spotstage.app</a>.</p>' +
          '<p>Zum Schutz deiner Daten kann eine Identitätsprüfung erforderlich sein. Wir können keine sofortige Löschung allein aufgrund einer ungeprüften E-Mail zusagen. Eine Löschung fremder Accounts ist aus Sicherheitsgründen nicht möglich.</p>',
        accountDeletionUpdated: 'Stand: Oktober 2026',
      },
    },
    en: {
      meta: {
        "title": "SPOTSTAGE – Organise comedy shows. Find gigs.",
        "description": "SPOTSTAGE – the app for organisers and comedians. Publish comedy shows, manage applications and keep track of gigs."
      },
      lang: {
        switchAria: 'Choose language',
        labelDe: 'Select German',
        labelEn: 'Select English',
        activeDe: 'German, current language',
        activeEn: 'English, current language',
      },
      a11y: {
        skipToMain: 'Skip to main content',
      },
      notFound: {
        meta: '404 | SPOTSTAGE',
        metaDescription: 'Page not found – SPOTSTAGE',
        imageAlt: 'A fallen, broken stage spotlight on a dark stage floor',
        headline: 'The show doesn’t go on here!',
        text: 'The page you\u2019re looking for is no longer here \u2013 or hasn\u2019t made its entrance yet.',
        cta: 'Back to home',
      },
      invite: {
        metaTitle: 'Organization invitation | SPOTSTAGE',
        metaDescription: 'Open your organization invitation in SPOTSTAGE',
        headline: 'You were invited to join an organization',
        lead:
          'Open the invitation in the SPOTSTAGE app to join the team. If the app is not installed yet, install it first and tap the invitation link again.',
        hint: 'The SPOTSTAGE app is required to accept this invitation.',
        openInApp: 'Open in SPOTSTAGE',
        backToHome: 'Back to home',
      },
      nav: {
        "ariaLabel": "Main navigation",
        "open": "Open menu",
        "close": "Close menu",
        "howItWorks": "How it works",
        "download": "Download the app"
      },
      logo: {
        ariaHome: 'SPOTSTAGE home',
      },
      hero: {
        "availability": "Coming soon!",
        "slogan": "Your Show. Your Stage. Your Moment.",
        "headline": "The App for<br><span class=\"hero-section__accent hero-section__accent--purple\">organisers</span><br>& <span class=\"hero-section__accent hero-section__accent--gold\">comedians</span>",
        "subheadline": "SPOTSTAGE brings organisers and comedians together.<br>From posting a show and applying for a spot to the line-up and the gig.",
        "phoneArtistAlt": "Illustrative SPOTSTAGE mockup for comedians",
        "phoneOrganizerAlt": "Illustrative SPOTSTAGE mockup for organisers",
        "phoneArtistCaption": "For comedians",
        "phoneOrganizerCaption": "For organisers",
        "scrollHint": "Scroll to next section",
        "eyebrow": "For organisers & comedians",
        "primaryCta": "Download the app",
        "secondaryCta": "How Spotstage works"
      },
      badges: {
        "comingSoon": "Coming soon",
        "apple": {
          "src": "images/badges/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg",
          "width": 162,
          "height": 54,
          "aria": "Open SPOTSTAGE in the Apple App Store",
          "unavailableAria": "Apple App Store – link available at app launch",
          "alt": "Download on the App Store"
        },
        "google": {
          "src": "images/badges/GetItOnGooglePlay_Badge_Web_color_English.svg",
          "width": 182,
          "height": 54,
          "aria": "Open SPOTSTAGE on Google Play",
          "unavailableAria": "Google Play – link available at app launch",
          "alt": "Get it on Google Play"
        }
      },
      howItWorks: {
        "carouselLabel": "Product features",
        "carouselRole": "Carousel",
        "previousFeature": "Previous feature",
        "nextFeature": "Next feature",
        "chooseFeature": "Choose a feature",
        "showFeature": "Show feature",
        "eyebrow": "How it works",
        "title": "More clarity. Less back and forth.",
        "subtitle": "Discover how SPOTSTAGE makes organising comedy shows and gigs simpler.",
        "switchAria": "Choose features by audience",
        "switchArtists": "For comedians",
        "switchOrganizers": "For organisers",
        "organizerStatus": "Showing features for organisers.",
        "artistStatus": "Showing features for comedians.",
        "organizers": [
          {
            "id": "organizer-create",
            "label": "Create a show",
            "title": "Create your show with every detail covered",
            "text": "Set the format, number and length of spots, fee, extras and other key details. Plan recurring shows as a series.",
            "benefit": "Set up one-off shows and series with all the details in place.",
            "imageAlt": "Show setup with spots, set length, event series and fee"
          },
          {
            "id": "organizer-shows",
            "label": "Show overview",
            "title": "Every show and its status at a glance",
            "text": "Plan and cast your shows in Casting. Once the line-up is ready, keep organizing your show and coordinate directly with comedians in the show chat.",
            "benefit": "From planning to coordination, all in one app.",
            "imageAlt": "Show cards with line-up progress, pending decisions, Casting status and chat"
          },
          {
            "id": "organizer-applications",
            "label": "Applications",
            "title": "Understand applications. Plan offers with more confidence.",
            "text": "See profiles, performance preferences and SPOTLIGHT context such as long journeys or existing bookings on the same day. Then accept, waitlist or decline.",
            "benefit": "More context for better decisions and more reliable commitments.",
            "imageAlt": "Two applications with profiles, performance preferences and notes about first-time applicants and travel",
            "annotation": "More context for your line-up."
          },
          {
            "id": "organizer-lineup",
            "label": "Line-up & waitlist",
            "title": "Build your line-up. Keep a waitlist as backup.",
            "text": "Accepted applications form your line-up. Adjust the order and spots as needed, and turn to your waitlist for replacements when someone cancels at short notice.",
            "benefit": "Build your line-up faster. Stay flexible when plans change.",
            "imageAlt": "Line-up with filled and open spots alongside a separate waitlist"
          },
          {
            "id": "organizer-tasks",
            "label": "Tasks",
            "title": "See what needs your attention next",
            "text": "Keep track of outstanding tasks across shows, applications, planning and updates.",
            "benefit": "Less searching. A clearer view of what comes next.",
            "imageAlt": "Task filters and notices about an incomplete line-up and new applications"
          },
          {
            "id": "organizer-team",
            "label": "Organization",
            "title": "On your own or as a team",
            "text": "Organize shows solo or together. Team members can help with planning and support while key organization statistics stay in view.",
            "benefit": "A shared foundation for your shows.",
            "imageAlt": "Organization menu with team, roles and invitations alongside statistics"
          }
        ],
        "artists": [
          {
            "id": "comedian-discover",
            "label": "Discover shows",
            "title": "Find shows that suit you",
            "text": "Narrow your search by date, area and format. Compare shows and their open spots.",
            "benefit": "Find the right stage faster.",
            "imageAlt": "Filters for date, area and format alongside three open comedy shows"
          },
          {
            "id": "comedian-apply",
            "label": "Apply",
            "title": "Apply quickly, with room for your preferences",
            "text": "See all the key show details at a glance. Share your preference for early or late spots and let organizers know if you are also available to host.",
            "benefit": "Check the show, share your preferences, send your application.",
            "imageAlt": "Show details, preferred line-up position and application options"
          },
          {
            "id": "comedian-application-status",
            "label": "Applications",
            "title": "Keep track of every application",
            "text": "Pending, waitlisted, accepted or declined: filters and status colors keep you up to date on each application.",
            "benefit": "Every application and its status at a glance.",
            "imageAlt": "Application filters and show cards illustrating the four application statuses"
          },
          {
            "id": "comedian-calendar",
            "label": "Calendar",
            "title": "Your upcoming gigs at a glance",
            "text": "See confirmed gigs and relevant applications in your show calendar, making it easier to plan your upcoming dates.",
            "benefit": "Your upcoming dates, all in one place.",
            "imageAlt": "Calendar showing a confirmed gig and a pending application"
          },
          {
            "id": "comedian-messages",
            "label": "Messages",
            "title": "Keep updates and chats in view",
            "text": "Receive updates and new messages via push notifications. Find changes and show chats together in the app.",
            "benefit": "Catch important changes and messages sooner.",
            "imageAlt": "Messages navigation, waitlist and hosting updates alongside a show chat"
          },
          {
            "id": "comedian-conflicts",
            "label": "Same-day bookings",
            "title": "More than one show on the same day? Know before you commit.",
            "text": "SPOTSTAGE flags existing bookings on the same day, helping you make informed decisions about applications and offers.",
            "benefit": "Plan ahead before you commit.",
            "imageAlt": "Show card, booking confirmation and a notice about an existing booking on the same calendar day"
          }
        ]
      },
      earlyAdopters: {
        "title": "Help shape Spotstage.",
        "intro": "Real use and direct feedback help SPOTSTAGE grow. Share your experience with us.",
        "support": "We personally help organisers set up their first shows and answer questions. Selected shows may also receive support through our social media channels.",
        "cta": "Contact & feedback"
      },
      launchCta: {
        "title": "Ready for your next show?",
        "text": "Organise comedy shows. Find gigs. With SPOTSTAGE.",
        "availability": "Coming soon!"
      },
      footer: {
        claim: 'Your show. Your stage. Your moment.',
        navAria: 'Footer navigation',
        legalNotice: 'Legal Notice',
        privacy: 'Privacy',
        terms: 'Terms of use',
        support: 'Support',
        accessibility: 'Accessibility',
        accountDeletion: 'Delete account',
        copyright: '© 2026 SPOTSTAGE UG (haftungsbeschränkt)',
      },
      legal: {
        backToHome: 'Back to home',
        imprintTitle: 'Legal Notice',
        imprintIntro:
          'Information pursuant to Section 5 of the German Digital Services Act (DDG)',
        imprintCompany:
          'SPOTSTAGE UG (haftungsbeschränkt)<br>Hugo-Weiss-Str. 25<br>81827 Munich<br>Germany',
        imprintRepresentationHeading: 'Represented by',
        imprintRepresentationText:
          'Represented by its Managing Director:<br>Christian Peter Sigel',
        imprintContactHeading: 'Contact',
        imprintContact:
          'Email: <a class="legal-page__link" href="mailto:hello@spotstage.app">hello@spotstage.app</a>',
        imprintRegisterHeading: 'Commercial Register',
        imprintRegisterIntro:
          'Registered with the Commercial Register maintained by:',
        imprintRegisterDetails:
          'Amtsgericht München (Munich Local Court)<br><br>Registration number: HRB 313304',
        imprintDisputeHeading: 'Consumer Dispute Resolution',
        imprintDisputeText:
          'We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.',
        imprintDisclaimer:
          'This English version is provided for convenience only. In the event of any discrepancies, the German version shall prevail.',
        privacyTitle: 'Privacy Notice',
        imprintMeta: 'Legal Notice | SPOTSTAGE',
        privacyMeta: 'Privacy Notice | SPOTSTAGE',
        accessibilityMeta: 'Accessibility | SPOTSTAGE',
        accessibilityTitle: 'Accessibility Information',
        accessibilityCommitmentHeading: 'Our Commitment',
        accessibilityCommitmentBody:
          '<p>SPOTSTAGE aims to make its website accessible and usable for as many people as possible.</p>' +
          '<p>We are working to design and continuously improve the website in line with the requirements of the German Accessibility Strengthening Act (BFSG) and the applicable technical standards.</p>',
        accessibilityDescriptionHeading: 'Description of the Website',
        accessibilityDescriptionBody:
          '<p>The website spotstage.app provides information about the SPOTSTAGE mobile application.</p>' +
          '<p>SPOTSTAGE helps Performers and organisers find, plan and organise live stage shows.</p>' +
          '<p>The website presents the app’s key features and provides information for its different target audiences, as well as legal information.</p>' +
          '<p>At present, users cannot create accounts, enter into contracts, make payments or submit personal data through a contact form on this website.</p>',
        accessibilityComplianceHeading: 'Conformance Status',
        accessibilityComplianceBody:
          '<p>The website has been reviewed internally against key requirements of the Web Content Accessibility Guidelines (WCAG) 2.1 at conformance levels A and AA and is being continuously improved.</p>' +
          '<p>Based on the current review, the website is expected to be largely conformant with these requirements.</p>' +
          '<p>Full compliance with all applicable requirements of the German Accessibility Strengthening Act cannot currently be guaranteed. The website has not yet undergone an independent external audit or certification.</p>',
        accessibilityMeasuresHeading: 'Measures Implemented',
        accessibilityMeasuresBody:
          '<p>When developing and improving the website, we have paid particular attention to the following aspects:</p>' +
          '<ul class="legal-page__list">' +
          '<li>clear and semantically structured content</li>' +
          '<li>logical heading hierarchies</li>' +
          '<li>keyboard accessibility</li>' +
          '<li>clearly visible focus indicators</li>' +
          '<li>a skip link to the main content</li>' +
          '<li>accessible navigation and mobile menu behaviour</li>' +
          '<li>clear labels for interactive elements</li>' +
          '<li>alternative text for informative images</li>' +
          '<li>sufficient colour contrast</li>' +
          '<li>adequately sized touch targets</li>' +
          '<li>support for zoom and narrow screen sizes</li>' +
          '<li>support for the “Reduce Motion” system setting</li>' +
          '<li>support for forced system colours</li>' +
          '<li>German- and English-language content</li>' +
          '</ul>',
        accessibilityKnownHeading: 'Known Limitations',
        accessibilityKnownBody:
          '<p>The app store links are not yet active because SPOTSTAGE has not yet been published in the relevant app stores. This is clearly indicated on the website with a “Coming soon” notice.</p>' +
          '<p>Some animations and spotlight effects are purely decorative. When the “Reduce Motion” system setting is enabled, these effects are disabled or significantly reduced.</p>' +
          '<p>The website has not yet been fully tested with all combinations of screen readers, browsers and operating systems. In individual cases, variations in announcements or focus behaviour therefore cannot be completely ruled out.</p>',
        accessibilityFeedbackHeading: 'Feedback and Contact',
        accessibilityFeedbackBody:
          '<p>Have you encountered a barrier on our website or experienced difficulties using it?</p>' +
          '<p>Please contact us at:</p>' +
          '<p><a class="legal-page__link" href="mailto:hello@spotstage.app?subject=Accessibility%20feedback%20for%20SPOTSTAGE">hello@spotstage.app</a></p>' +
          '<p>Please describe as precisely as possible which page and function are affected. It is also helpful to include details about your device, browser and, where applicable, the assistive technology you use.</p>' +
          '<p>We will review your report and aim to respond promptly with an appropriate solution.</p>',
        accessibilityStandardHeading: 'Review Basis',
        accessibilityStandardBody:
          '<p>The development and internal review of the website are guided in particular by:</p>' +
          '<ul class="legal-page__list">' +
          '<li>the Web Content Accessibility Guidelines (WCAG) 2.1 at conformance levels A and AA</li>' +
          '<li>the European standard EN 301 549</li>' +
          '<li>the requirements of the German Accessibility Strengthening Act (BFSG)</li>' +
          '<li>the requirements of the German Accessibility Strengthening Ordinance (BFSGV)</li>' +
          '</ul>' +
          '<p>The review has included HTML validation, Google Lighthouse, code-based checks and manual testing of keyboard and focus behaviour.</p>' +
          '<p>Automated testing tools cannot identify all accessibility barriers and do not replace comprehensive testing with different assistive technologies.</p>',
        accessibilityUpdated: 'Created and last reviewed: June 2026',
        supportMeta: 'Support | SPOTSTAGE',
        supportTitle: 'Support',
        supportPurposeHeading: 'How we can help',
        supportPurposeBody:
          '<p>This page provides help for the SPOTSTAGE app. You will find answers and contact options for issues with login, password reset, account deletion, applications, shows, profiles, or technical errors.</p>',
        supportContactHeading: 'Contact',
        supportContactBody:
          '<p>For questions or problems, you can reach us by email:</p>' +
          '<p><a class="legal-page__link" href="mailto:hello@spotstage.app">hello@spotstage.app</a></p>',
        supportExpectationsHeading: 'What to expect',
        supportExpectationsBody:
          '<p>We handle requests as quickly as possible. There is currently no guaranteed response time, support hotline, or fixed support hours.</p>',
        supportHelpHeading: 'Common topics',
        supportHelpBody:
          '<p><strong>Forgot password</strong><br>Open the app, tap “Forgot password?”, and follow the instructions in the email. Further details are available in our privacy notice.</p>' +
          '<p><strong>Delete account</strong><br>Deletion is performed in the app under Profile → Account → “Delete account”. For detailed information, see the <a class="legal-page__link" href="account-loeschen.html">Delete account</a> page.</p>' +
          '<p><strong>Report technical issues</strong><br>Email us at <a class="legal-page__link" href="mailto:hello@spotstage.app">hello@spotstage.app</a>. The following details help us investigate:</p>' +
          '<ul class="legal-page__list">' +
          '<li>Device and model</li>' +
          '<li>Operating system and version</li>' +
          '<li>App version</li>' +
          '<li>Affected screen or feature</li>' +
          '<li>Steps to reproduce the issue</li>' +
          '<li>Screenshot without sensitive data (no passwords, no private messages)</li>' +
          '</ul>',
        supportUpdated: 'Last updated: June 2026',
        accountDeletionMeta: 'Delete account | SPOTSTAGE',
        accountDeletionTitle: 'Delete account',
        accountDeletionIntroHeading: 'Information about account deletion',
        accountDeletionIntroBody:
          '<p>This page explains how to delete your SPOTSTAGE account in the app and what happens when you do. This is an information page only — deletion itself takes place exclusively in the app.</p>',
        accountDeletionStepsHeading: 'How to delete your account in the app',
        accountDeletionStepsBody:
          '<ol class="legal-page__list">' +
          '<li>Open SPOTSTAGE</li>' +
          '<li>Open Profile</li>' +
          '<li>Go to the “Account” section</li>' +
          '<li>Select “Delete account”</li>' +
          '<li>Re-enter your password</li>' +
          '<li>Confirm with “DELETE”</li>' +
          '</ol>',
        accountDeletionDeletedHeading: 'What is deleted',
        accountDeletionDeletedBody:
          '<p>When account deletion is successful, the following data is removed in particular:</p>' +
          '<ul class="legal-page__list">' +
          '<li>your account access and the associated authentication account</li>' +
          '<li>personal profile and role-profile data</li>' +
          '<li>profile images</li>' +
          '<li>push tokens</li>' +
          '<li>notification settings and in-app notifications</li>' +
          '<li>open or otherwise unfinished applications</li>' +
          '</ul>',
        accountDeletionRetainedHeading: 'What may remain after direct profile information is removed',
        accountDeletionRetainedBody:
          '<p>Certain data may remain where it serves the organization or the operation or documentation of shows and is not attributable solely to your personal profile. This may include in particular:</p>' +
          '<ul class="legal-page__list">' +
          '<li>organization and venue data</li>' +
          '<li>past shows and historical line-ups</li>' +
          '<li>past performances and casting references</li>' +
          '<li>historical show communications</li>' +
          '</ul>' +
          '<p>Direct profile information is removed; your name may be replaced with “Deleted member” in historical contexts. Where a personal-data link nevertheless remains, your statutory data-protection rights continue to apply unchanged.</p>',
        accountDeletionBlockersHeading: 'Possible blockers',
        accountDeletionBlockersBody:
          '<p>Technical account deletion in the app may temporarily be unavailable where active obligations or organizational dependencies remain, for example:</p>' +
          '<ul class="legal-page__list">' +
          '<li>confirmed future performance</li>' +
          '<li>active or pending host assignment</li>' +
          '<li>organization ownership</li>' +
          '<li>you are the only active member of an organization</li>' +
          '<li>an organization could not continue without first transferring the necessary rights and responsibilities</li>' +
          '<li>admin self-deletion is not possible</li>' +
          '</ul>' +
          '<p>In these cases, you must first resolve the relevant obligation or organizational dependency. Statutory data-protection rights, including any applicable right to erasure under Art. 17 GDPR, remain unaffected.</p>',
        accountDeletionHelpHeading: 'Help without app access',
        accountDeletionHelpBody:
          '<p>If you no longer have access to the app, contact us at <a class="legal-page__link" href="mailto:hello@spotstage.app">hello@spotstage.app</a>.</p>' +
          '<p>To protect your data, identity verification may be required. We cannot promise immediate deletion based on an unverified email alone. Deletion of third-party accounts is not possible for security reasons.</p>',
        accountDeletionUpdated: 'Last updated: October 2026',
      },
    },
  };

  if (window.SpotstagePrivacyLegal) {
    Object.assign(
      window.SpotstageTranslations.de.legal,
      window.SpotstagePrivacyLegal.de
    );
    Object.assign(
      window.SpotstageTranslations.en.legal,
      window.SpotstagePrivacyLegal.en
    );
  }

  if (window.SpotstagePrivacyApp) {
    Object.assign(
      window.SpotstageTranslations.de.legal,
      window.SpotstagePrivacyApp.de
    );
    Object.assign(
      window.SpotstageTranslations.en.legal,
      window.SpotstagePrivacyApp.en
    );
  }
})();