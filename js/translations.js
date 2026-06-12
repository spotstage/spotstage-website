/**
 * SPOTSTAGE – Central translations (de / en)
 * Extend by adding new locale keys under each language.
 */
(function () {
  'use strict';

  window.SpotstageTranslations = {
    de: {
      meta: {
        title: 'SPOTSTAGE – Deine Show. Deine Bühne. Dein Moment.',
        description:
          'SPOTSTAGE – Die App für Talente und Hosts. Shows finden. Shows organisieren.',
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
      nav: {
        ariaLabel: 'Hauptnavigation',
        open: 'Menü öffnen',
        close: 'Menü schließen',
        benefits: 'Vorteile',
        howItWorks: "So funktioniert's",
        outlook: 'Ausblick',
        download: 'App herunterladen',
      },
      logo: {
        ariaHome: 'SPOTSTAGE Startseite',
      },
      hero: {
        slogan: 'Deine Show. Deine Bühne. Dein Moment.',
        headline:
          'Die App für<br><span class="hero-section__accent hero-section__accent--gold">Talente</span> &amp;<br><span class="hero-section__accent hero-section__accent--purple">Hosts</span>',
        subheadline:
          '<span>Mehr Bühne. Weniger Aufwand.</span><br>Einfacher planen, bewerben und besetzen.',
        phoneArtistAlt: 'SPOTSTAGE App – Künstler:innen-Ansicht mit Auftrittsübersicht',
        phoneOrganizerAlt: 'SPOTSTAGE App – Veranstalter:innen-Ansicht mit Show-Besetzung',
        phoneArtistCaption: 'Für Künstler:innen',
        phoneOrganizerCaption: 'Für Veranstalter:innen',
      },
      badges: {
        comingSoon: 'Demnächst verfügbar',
        apple: {
          src: 'images/badges/Download_on_the_App_Store_Badge_DE_RGB_blk_092917.svg',
          width: 162,
          height: 54,
          aria: 'SPOTSTAGE im Apple App Store öffnen',
          unavailableAria: 'SPOTSTAGE im Apple App Store – demnächst verfügbar',
          alt: 'Laden im App Store',
        },
        google: {
          src: 'images/badges/GetItOnGooglePlay_Badge_Web_color_German.svg',
          width: 182,
          height: 54,
          aria: 'SPOTSTAGE bei Google Play öffnen',
          unavailableAria: 'SPOTSTAGE bei Google Play – demnächst verfügbar',
          alt: 'Jetzt bei Google Play',
        },
      },
      comparison: {
        heading:
          '<span class="comparison__accent comparison__accent--artists">Talente</span> treffen <span class="comparison__accent comparison__accent--organizers">Hosts</span>',
        subline: 'SPOTSTAGE vereint Bewerbungen, Planung und Line-up in einer App.',
        artistTitle: 'Für Künstler:innen',
        artistSubline: 'Mehr passende Auftritte. Weniger Aufwand.',
        organizerTitle: 'Für Veranstalter:innen',
        organizerSubline: 'Bessere Shows. Weniger Organisationsstress.',
        ctaHeading: 'Hol dir jetzt SPOTSTAGE',
        ctaText: 'Für Künstler:innen und Veranstalter:innen.',
      },
      benefits: {
        artist: {
          accent: 'gold',
          items: [
            {
              title: 'Passende Shows finden',
              text: 'Entdecke Open Mics, Mixed Shows und passende Events in deiner Nähe.',
              icon: 'search',
            },
            {
              title: 'Einfach bewerben',
              text: 'Bewirb dich in wenigen Schritten und behalte den Status deiner Bewerbung im Blick.',
              icon: 'send',
            },
            {
              title: 'Auftritte im Blick',
              text: 'Alle Zusagen, Termine und Showdetails an einem Ort.',
              icon: 'calendar',
            },
            {
              title: 'Mehr Sichtbarkeit',
              text: 'Baue dein Profil auf und werde für weitere Shows entdeckt.',
              icon: 'visibility',
            },
          ],
        },
        organizer: {
          accent: 'purple',
          items: [
            {
              title: 'Shows organisieren',
              text: 'Erstelle Shows mit allen wichtigen Details und einer klaren Slot-Struktur.',
              icon: 'mic',
            },
            {
              title: 'Bewerbungen verwalten',
              text: 'Behalte alle Bewerbungen übersichtlich an einem Ort.',
              icon: 'users',
            },
            {
              title: 'Line-up planen',
              text: 'Besetze Slots schneller und behalte den Überblick bis zur Show.',
              icon: 'lineup',
            },
            {
              title: 'Mehr Fokus aufs Wesentliche',
              text: 'Weniger Koordination, mehr Zeit für eine starke Veranstaltung.',
              icon: 'focus',
            },
          ],
        },
      },
      howItWorks: {
        eyebrow: "So funktioniert's",
        title: 'Von der Bewerbung bis zum Line-up',
        subtitle:
          'Von der ersten Show-Idee bis zum fertigen Line-up: SPOTSTAGE verbindet alle Schritte in einem einfachen Ablauf.',
        switchAria: 'Zielgruppe auswählen',
        switchArtists: 'Für Künstler:innen',
        switchOrganizers: 'Für Veranstalter:innen',
        prevStep: 'Vorheriger Schritt',
        nextStep: 'Nächster Schritt',
        stepsAria: 'Schritte',
        dotLabel: 'Schritt',
        artists: [
          {
            number: '01',
            title: 'Profil erstellen',
            text: 'Zeige deine Erfahrung, Präferenzen und Auftrittsdetails, damit Veranstalter:innen schnell sehen, ob du zu ihrer Show passt.',
            visual: 'artist-profile',
            ui: {
              primary: {
                label: 'Dein Profil',
                title: 'Stand-up · Comedy',
                meta: 'Berlin',
                detail: '5 Min Set · Deutsch',
                tags: ['Comedy', 'Stand-up', 'Live'],
              },
              secondary: {
                label: 'Vorlieben',
                items: [
                  { title: 'Genres', meta: 'Comedy, Stand-up' },
                  { title: 'Set-Länge', meta: '5 Min' },
                ],
              },
              floatTop: { label: 'Status', title: 'Profil bereit', badge: 'Aktiv' },
              floatBottom: { label: 'Sichtbarkeit', title: '87% vollständig', meta: 'Für Veranstalter sichtbar' },
            },
          },
          {
            number: '02',
            title: 'Shows finden & sich bewerben',
            text: 'Entdecke passende Shows in deiner Stadt oder dort, wo du auftreten möchtest — und bewirb dich direkt auf freie Slots.',
            visual: 'artist-discover',
            ui: {
              primary: {
                label: 'Show-Details',
                title: 'Open Mic Mitte',
                meta: 'Freitag · Berlin',
                detail: '2 Slots frei · 8 Min Set',
                action: 'Jetzt bewerben',
              },
              secondary: {
                label: 'Shows entdecken',
                items: [
                  { title: 'Open Mic Mitte', meta: 'Fr · 2 Slots' },
                  { title: 'Club Show', meta: 'Sa · 1 Slot' },
                  { title: 'Comedy Night', meta: 'So · 3 Slots' },
                ],
              },
              floatTop: { label: 'Bewerbungsstatus', title: 'Open Mic Mitte', badge: 'Applied' },
              floatBottom: { label: 'Dein Profil', title: 'Stand-up', tags: ['Comedy', 'Open Mic', 'Live'] },
            },
          },
          {
            number: '03',
            title: 'Bewerbungen im Blick behalten',
            text: 'Verfolge den Status deiner Bewerbungen und erhalte Benachrichtigungen, sobald sich etwas ändert.',
            visual: 'artist-track',
            ui: {
              primary: {
                label: 'Meine Bewerbungen',
                items: [
                  { title: 'Club Show', meta: 'Sa · Berlin', badge: 'Angenommen', variant: 'success' },
                  { title: 'Open Mic Mitte', meta: 'Fr · Berlin', badge: 'Offen', variant: 'pending' },
                  { title: 'Comedy Night', meta: 'So · Hamburg', badge: 'Abgelehnt', variant: 'declined' },
                ],
              },
              floatTop: { label: 'Benachrichtigung', title: 'Status aktualisiert', meta: 'Club Show bestätigt' },
              floatBottom: { label: 'Nächster Schritt', title: 'Line-up Update', badge: 'Neu' },
            },
          },
        ],
        organizers: [
          {
            number: '01',
            title: 'Show anlegen',
            text: 'Erstelle deine Show mit allen wichtigen Details – als einmaliges Event oder wiederkehrendes Format.',
            visual: 'org-create',
            ui: {
              primary: {
                label: 'Show anlegen',
                title: 'Comedy Night',
                fields: [
                  { label: 'Datum', value: 'Sa, 20:00' },
                  { label: 'Ort', value: 'Berlin · Mitte' },
                  { label: 'Slots', value: '6 offen' },
                  { label: 'Format', value: 'Einmalig' },
                ],
              },
              secondary: {
                label: 'Slot-Planung',
                items: [
                  { title: 'Slot 1', meta: '8 Min' },
                  { title: 'Slot 2', meta: '8 Min' },
                  { title: 'Slot 3', meta: '10 Min' },
                ],
              },
              floatTop: { label: 'Entwurf', title: 'Gespeichert', badge: 'Draft' },
              floatBottom: { label: 'Wiederholung', title: 'Einmaliges Event', tags: ['Einmalig', '6 Slots'] },
            },
          },
          {
            number: '02',
            title: 'Bewerbungen verwalten',
            text: 'Prüfe Bewerbungen zentral, behalte den Überblick und plane dein Line-up direkt in SPOTSTAGE.',
            visual: 'org-manage',
            ui: {
              primary: {
                label: 'Bewerbungen',
                items: [
                  { title: 'Alex M. · Stand-up', meta: 'Slot 2', badge: 'Shortlist', variant: 'gold' },
                  { title: 'Jamie K. · Comedy', meta: 'Slot 1', badge: 'Neu', variant: 'pending' },
                  { title: 'Sam R. · Open Mic', meta: 'Slot 3', badge: 'Review', variant: 'pending' },
                ],
              },
              secondary: {
                label: 'Übersicht',
                items: [
                  { title: '12 eingegangen', meta: '3 Shortlist' },
                  { title: 'Slot 2', meta: '4 Kandidat:innen' },
                ],
              },
              floatTop: { label: 'Neue Bewerbung', title: 'Jamie K.', badge: 'Neu' },
              floatBottom: { label: 'Aktionen', title: 'Annehmen · Ablehnen', meta: 'Direkt im Slot' },
            },
          },
          {
            number: '03',
            title: 'Line-up finalisieren',
            text: 'Besetze deine Slots, bestätige Künstler:innen und mach dein Line-up bereit für die Bühne.',
            visual: 'org-lineup',
            ui: {
              primary: {
                label: 'Line-up Board',
                slots: [
                  { title: '01 · Alex M.', meta: 'Stand-up · bestätigt', badge: '✓' },
                  { title: '02 · Jamie K.', meta: 'Comedy · bestätigt', badge: '✓' },
                  { title: '03 · Offen', meta: 'Noch frei', badge: '—' },
                ],
              },
              secondary: {
                label: 'Show-Status',
                items: [
                  { title: '5 / 6 besetzt', meta: '1 Slot offen' },
                  { title: 'Comedy Night', meta: 'Sa · 20:00' },
                ],
              },
              floatTop: { label: 'Line-up', title: 'Fast komplett', badge: '5/6' },
              floatBottom: { label: 'Show-Status', title: 'Bereit für die Bühne', badge: 'Live' },
            },
          },
        ],
      },
      futureCategories: {
        eyebrow: 'AUSBLICK',
        title: 'Mehr Bühnenformate folgen',
        subtitle:
          'SPOTSTAGE startet mit Comedy — und ist darauf ausgelegt, künftig weitere Live-Formate zu unterstützen.',
        noteText: 'Du planst ein anderes Format? Schlag es uns vor.',
        ctaLabel: 'Format vorschlagen',
        ctaEmail: 'formate@spotstage.app',
        ctaMailSubject: 'Neues Bühnenformat für SPOTSTAGE',
        ctaMailBody:
          'Hallo SPOTSTAGE,\n\nIch möchte folgendes Bühnenformat vorschlagen:\n\nFormat:\nStadt/Region:\nKurzbeschreibung:\n\nViele Grüße',
        items: [
          {
            title: 'Comedy',
            status: 'Live zum Start',
            description: 'Open Mics, Mixed Shows, Impro und weitereComedy-Events.',
            type: 'live',
            icon: 'comedy',
          },
          {
            title: 'Poetry & Lesungen',
            status: 'Geplant',
            description: 'Für Poetry Slams, Lesebühnen und Spoken-Word-Formate.',
            type: 'planned',
            icon: 'poetry',
          },
          {
            title: 'Kleinkunst',
            status: 'Geplant',
            description: 'Für Zauberei, Kabarett, Artistik und weitere Kleinkunstformate',
            type: 'planned',
            icon: 'variety',
          },
          {
            title: 'Musik',
            status: 'Geplant',
            description: 'Für Sänger:innen, Bands und weitere Live-Musikformate.',
            type: 'planned',
            icon: 'music',
          },
        ],
      },
      downloadCta: {
        title: 'Jetzt kostenlos herunterladen',
        titleAria: 'Jetzt SPOTSTAGE kostenlos herunterladen',
        note: 'Kostenlos loslegen. Mehr geht später immer.',
      },
      footer: {
        claim: 'Deine Show. Deine Bühne. Dein Moment.',
        navAria: 'Footer-Navigation',
        legalNotice: 'Impressum',
        privacy: 'Datenschutz',
        contact: 'Kontakt',
        accessibility: 'Barrierefreiheit',
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
      },
    },
    en: {
      meta: {
        title: 'SPOTSTAGE – Your Show. Your Stage. Your Moment.',
        description:
          'SPOTSTAGE – The app for artists and organizers. Find shows. Organize shows.',
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
      nav: {
        ariaLabel: 'Main navigation',
        open: 'Open menu',
        close: 'Close menu',
        benefits: 'Benefits',
        howItWorks: 'How it works',
        outlook: 'Outlook',
        download: 'Get the app',
      },
      logo: {
        ariaHome: 'SPOTSTAGE home',
      },
      hero: {
        slogan: 'Your Show. Your Stage. Your Moment.',
        headline:
          'The app for<br><span class="hero-section__accent hero-section__accent--gold">Artists</span> &amp;<br><span class="hero-section__accent hero-section__accent--purple">Organizers</span>',
        subheadline:
          '<span>More stage time. Less hassle.</span><br>Plan, apply, and fill slots with ease.',
        phoneArtistAlt: 'SPOTSTAGE app – artist view with gig overview',
        phoneOrganizerAlt: 'SPOTSTAGE app – organizer view with show lineup',
        phoneArtistCaption: 'For Artists',
        phoneOrganizerCaption: 'For Organizers',
      },
      badges: {
        comingSoon: 'Coming soon',
        apple: {
          src: 'images/badges/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg',
          width: 162,
          height: 54,
          aria: 'Open SPOTSTAGE in the Apple App Store',
          unavailableAria: 'SPOTSTAGE on the Apple App Store – coming soon',
          alt: 'Download on the App Store',
        },
        google: {
          src: 'images/badges/GetItOnGooglePlay_Badge_Web_color_English.svg',
          width: 182,
          height: 54,
          aria: 'Open SPOTSTAGE on Google Play',
          unavailableAria: 'SPOTSTAGE on Google Play – coming soon',
          alt: 'Get it on Google Play',
        },
      },
      comparison: {
        heading:
          '<span class="comparison__accent comparison__accent--artists">Artists</span> meet <span class="comparison__accent comparison__accent--organizers">Organizers</span>',
        subline: 'From applications to the final line-up — everything in one place.',
        artistTitle: 'For Artists',
        artistSubline: 'More opportunities. Less hassle.',
        organizerTitle: 'For Organizers',
        organizerSubline: 'Better shows. Less coordination.',
        ctaHeading: 'Get SPOTSTAGE now',
        ctaText: 'For artists and organizers.',
      },
      benefits: {
        artist: {
          accent: 'gold',
          items: [
            {
              title: 'Find the right shows',
              text: 'Discover open mics, mixed shows, and events near you.',
              icon: 'search',
            },
            {
              title: 'Apply with ease',
              text: 'Apply in just a few taps, and track your application status.',
              icon: 'send',
            },
            {
              title: 'Gigs at a glance',
              text: 'All your confirmed gigs, dates, and show details in one place.',
              icon: 'calendar',
            },
            {
              title: 'More visibility',
              text: 'Build your profile and get discovered by more organizers.',
              icon: 'visibility',
            },
          ],
        },
        organizer: {
          accent: 'purple',
          items: [
            {
              title: 'Organize shows',
              text: 'Create shows with all the essential details and a clear slot structure.',
              icon: 'mic',
            },
            {
              title: 'Manage applications',
              text: 'Keep all applications organized in one place.',
              icon: 'users',
            },
            {
              title: 'Plan the line-up',
              text: 'Fill slots faster and keep your line-up organized until showtime.',
              icon: 'lineup',
            },
            {
              title: 'Focus on what matters',
              text: 'Less coordination, more time for a great show.',
              icon: 'focus',
            },
          ],
        },
      },
      howItWorks: {
        eyebrow: 'How it works',
        title: 'From application to line-up',
        subtitle:
          'From the first show idea to the final line-up, SPOTSTAGE brings every step together in one simple flow.',
        switchAria: 'Select audience',
        switchArtists: 'For Artists',
        switchOrganizers: 'For Organizers',
        prevStep: 'Previous step',
        nextStep: 'Next step',
        stepsAria: 'Steps',
        dotLabel: 'Step',
        artists: [
          {
            number: '01',
            title: 'Create your profile',
            text: 'Show your experience, preferences and performance details so organizers can quickly see whether you are a good fit for their show.',
            visual: 'artist-profile',
            ui: {
              primary: {
                label: 'Your profile',
                title: 'Stand-up · Comedy',
                meta: 'Berlin',
                detail: '5 min set · German',
                tags: ['Comedy', 'Stand-up', 'Live'],
              },
              secondary: {
                label: 'Preferences',
                items: [
                  { title: 'Genres', meta: 'Comedy, Stand-up' },
                  { title: 'Set length', meta: '5 min' },
                ],
              },
              floatTop: { label: 'Status', title: 'Profile ready', badge: 'Active' },
              floatBottom: { label: 'Visibility', title: '87% complete', meta: 'Visible to organizers' },
            },
          },
          {
            number: '02',
            title: 'Find shows & apply',
            text: 'Find shows that match your profile, wherever you want to perform, and apply directly for open slots.',
            visual: 'artist-discover',
            ui: {
              primary: {
                label: 'Show details',
                title: 'Indie Nights',
                meta: 'Friday · Berlin',
                detail: '2 slots open · 8 min set',
                action: 'Apply for this show',
              },
              secondary: {
                label: 'Discover shows',
                items: [
                  { title: 'Indie Nights', meta: 'Fri · 2 slots' },
                  { title: 'Urban Vibes', meta: 'Sat · 1 slot' },
                  { title: 'Comedy Night', meta: 'Sun · 3 slots' },
                ],
              },
              floatTop: { label: 'Application status', title: 'Indie Nights', badge: 'Applied' },
              floatBottom: { label: 'Your profile', title: 'Indie Rock', tags: ['Indie', 'Alternative', 'Live'] },
            },
          },
          {
            number: '03',
            title: 'Track your applications',
            text: 'Follow the status of your applications and get notified as soon as something changes.',
            visual: 'artist-track',
            ui: {
              primary: {
                label: 'My applications',
                items: [
                  { title: 'Club Show', meta: 'Sat · Berlin', badge: 'Accepted', variant: 'success' },
                  { title: 'Indie Nights', meta: 'Fri · Berlin', badge: 'Open', variant: 'pending' },
                  { title: 'Comedy Night', meta: 'Sun · Hamburg', badge: 'Declined', variant: 'declined' },
                ],
              },
              floatTop: { label: 'Notification', title: 'Status updated', meta: 'Club Show confirmed' },
              floatBottom: { label: 'Next step', title: 'Line-up update', badge: 'New' },
            },
          },
        ],
        organizers: [
          {
            number: '01',
            title: 'Create a show',
            text: 'Set up your show with all the important details — whether it is a one-time event or a recurring show.',
            visual: 'org-create',
            ui: {
              primary: {
                label: 'Create show',
                title: 'Comedy Night',
                fields: [
                  { label: 'Date', value: 'Sat, 8:00 PM' },
                  { label: 'Location', value: 'Berlin · Downtown' },
                  { label: 'Slots', value: '6 open' },
                  { label: 'Format', value: 'One-time' },
                ],
              },
              secondary: {
                label: 'Slot planning',
                items: [
                  { title: 'Slot 1', meta: '8 min' },
                  { title: 'Slot 2', meta: '8 min' },
                  { title: 'Slot 3', meta: '10 min' },
                ],
              },
              floatTop: { label: 'Draft', title: 'Saved', badge: 'Draft' },
              floatBottom: { label: 'Recurrence', title: 'One-time event', tags: ['One-time', '6 slots'] },
            },
          },
          {
            number: '02',
            title: 'Manage applications',
            text: 'Review applications in one place, stay organized, and plan your line-up directly in SPOTSTAGE.',
            visual: 'org-manage',
            ui: {
              primary: {
                label: 'Applications inbox',
                items: [
                  { title: 'Alex M. · Stand-up', meta: 'Slot 2', badge: 'Shortlist', variant: 'gold' },
                  { title: 'Jamie K. · Comedy', meta: 'Slot 1', badge: 'New', variant: 'pending' },
                  { title: 'Sam R. · Open Mic', meta: 'Slot 3', badge: 'Review', variant: 'pending' },
                ],
              },
              secondary: {
                label: 'Overview',
                items: [
                  { title: '12 received', meta: '3 shortlisted' },
                  { title: 'Slot 2', meta: '4 candidates' },
                ],
              },
              floatTop: { label: 'New application', title: 'Jamie K.', badge: 'New' },
              floatBottom: { label: 'Actions', title: 'Accept · Decline', meta: 'Directly in slot' },
            },
          },
          {
            number: '03',
            title: 'Finalize the line-up',
            text: 'Fill slots, confirm artists, and get your line-up ready for the stage.',
            visual: 'org-lineup',
            ui: {
              primary: {
                label: 'Line-up board',
                slots: [
                  { title: '01 · Alex M.', meta: 'Stand-up · confirmed', badge: '✓' },
                  { title: '02 · Jamie K.', meta: 'Comedy · confirmed', badge: '✓' },
                  { title: '03 · Open', meta: 'Still open', badge: '—' },
                ],
              },
              secondary: {
                label: 'Show status',
                items: [
                  { title: '5 / 6 filled', meta: '1 slot open' },
                  { title: 'Comedy Night', meta: 'Sat · 8:00 PM' },
                ],
              },
              floatTop: { label: 'Line-up', title: 'Almost complete', badge: '5/6' },
              floatBottom: { label: 'Show status', title: 'Ready for the stage', badge: 'Live' },
            },
          },
        ],
      },
      futureCategories: {
        eyebrow: 'LOOKING AHEAD',
        title: 'More stage formats coming soon',
        subtitle:
          'SPOTSTAGE starts with comedy — and is built to support more live formats in the future.',
        noteText: 'Planning a different format? Tell us about it.',
        ctaLabel: 'Suggest a format',
        ctaEmail: 'formate@spotstage.app',
        ctaMailSubject: 'New stage format suggestion for SPOTSTAGE',
        ctaMailBody:
          'Hello SPOTSTAGE,\n\nI would like to suggest the following stage format:\n\nFormat:\nCity/Region:\nShort description:\n\nBest regards',
        items: [
          {
            title: 'Comedy',
            status: 'Live at launch',
            description: 'Open mics, mixed shows, stand-up, and comedy events.',
            type: 'live',
            icon: 'comedy',
          },
          {
            title: 'Poetry & Readings',
            status: 'Planned',
            description: 'For poetry slams, live readings, and spoken-word events.',
            type: 'planned',
            icon: 'poetry',
          },
          {
            title: 'Variety',
            status: 'Planned',
            description: 'For magic, cabaret, and other live music formats.',
            type: 'planned',
            icon: 'variety',
          },
          {
            title: 'Music',
            status: 'Planned',
            description: 'For singer, bands, and small stage formats.',
            type: 'planned',
            icon: 'music',
          },
        ],
      },
      downloadCta: {
        title: 'Get for free now',
        titleAria: 'Get SPOTSTAGE for free now',
        note: 'Start for free. There’s always more when you’re ready.',
      },
      footer: {
        claim: 'Your show. Your stage. Your moment.',
        navAria: 'Footer navigation',
        legalNotice: 'Legal Notice',
        privacy: 'Privacy',
        contact: 'Contact',
        accessibility: 'Accessibility',
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
          '<p>SPOTSTAGE helps artists and organisers find, plan and organise live stage shows.</p>' +
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
})();
