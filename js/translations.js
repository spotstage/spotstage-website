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
      },
      nav: {
        ariaLabel: 'Hauptnavigation',
        open: 'Navigation öffnen',
        close: 'Navigation schließen',
        benefits: 'Vorteile',
        howItWorks: "So funktioniert's",
        outlook: 'Ausblick',
        download: 'Download die App',
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
        apple: {
          src: 'images/badges/Download_on_the_App_Store_Badge_DE_RGB_blk_092917.svg',
          width: 162,
          height: 54,
          aria: 'SPOTSTAGE im App Store laden',
          alt: 'Laden im App Store',
        },
        google: {
          src: 'images/badges/GetItOnGooglePlay_Badge_Web_color_German.svg',
          width: 182,
          height: 54,
          aria: 'SPOTSTAGE bei Google Play laden',
          alt: 'Jetzt bei Google Play',
        },
      },
      comparison: {
        heading:
          '<span class="comparison__accent comparison__accent--artists">Talente</span> treffen <span class="comparison__accent comparison__accent--organizers">Hosts</span>',
        subline: 'SPOTSTAGE bringt Bewerbung, Planung und Line-up an einen Ort.',
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
              text: 'Entdecke Open Mics, Club Shows und Events in deiner Nähe.',
              icon: 'search',
            },
            {
              title: 'Einfach bewerben',
              text: 'Bewirb dich in wenigen Klicks und behalte deinen Status im Blick.',
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
              text: 'Plane Events mit Datum, Location, Slots und klarer Struktur.',
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
          'SPOTSTAGE bringt Künstler:innen und Veranstalter:innen in einen einfachen Ablauf — von der ersten Show-Idee bis zur finalen Besetzung.',
        switchAria: 'Zielgruppe auswählen',
        switchArtists: 'Für Künstler:innen',
        switchOrganizers: 'Für Veranstalter:innen',
        prevStep: 'Vorheriger Schritt',
        nextStep: 'Nächster Schritt',
        dotLabel: 'Schritt',
        artists: [
          {
            number: '01',
            title: 'Profil erstellen',
            text: 'Zeige deine Erfahrung, Vorlieben und Auftrittsdetails, damit Veranstalter:innen schnell einschätzen können, ob du zur Show passt.',
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
            title: 'Shows finden & bewerben',
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
            text: 'Erstelle deine Show mit allen wichtigen Details — egal ob einmaliges Event oder regelmäßiges Format.',
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
            text: 'Besetze Slots, bestätige Künstler:innen und bringe dein Line-up sicher auf die Bühne.',
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
            description: 'Open Mics, Mixed Shows, Stand-up und Comedy-Events.',
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
            description: 'Für Live-Acts, Shows und kreative Bühnenmomente.',
            type: 'planned',
            icon: 'variety',
          },
          {
            title: 'Musik',
            status: 'Geplant',
            description: 'Für Sänger:innen, Bands und kleine Bühnenformate.',
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
        imprintPlaceholder: 'Placeholder – Impressumsinhalte werden hier eingefügt.',
        privacyTitle: 'Datenschutzerklärung',
        privacyPlaceholder: 'Placeholder – Datenschutzinhalte werden hier eingefügt.',
        imprintMeta: 'Impressum – SPOTSTAGE',
        privacyMeta: 'Datenschutzerklärung – SPOTSTAGE',
        accessibilityMeta: 'Barrierefreiheit – SPOTSTAGE',
        accessibilityTitle: 'Barrierefreiheit',
        accessibilityIntro:
          'SPOTSTAGE möchte die Website und die App für möglichst viele Menschen gut zugänglich und nutzbar gestalten.',
        accessibilityCommitmentHeading: 'Unser Anspruch',
        accessibilityCommitmentText:
          'Wir achten bei der Weiterentwicklung unter anderem auf verständliche Inhalte, ausreichende Kontraste, sichtbare Fokuszustände, Tastaturbedienbarkeit und sinnvolle Beschriftungen für unterstützende Technologien.',
        accessibilityReportHeading: 'Barriere melden',
        accessibilityReportText:
          'Ist dir eine Barriere aufgefallen oder kannst du einen Bereich nicht wie erwartet nutzen? Schreib uns gerne. Dein Feedback hilft uns, SPOTSTAGE weiter zu verbessern.',
        accessibilityReportLink: 'Barriere melden',
        accessibilityMailto:
          'mailto:hello@spotstage.app?subject=Hinweis%20zur%20Barrierefreiheit%20bei%20SPOTSTAGE',
        accessibilityNote:
          'SPOTSTAGE befindet sich im Aufbau. Die Zugänglichkeit wird im Zuge der Weiterentwicklung regelmäßig geprüft und verbessert.',
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
      },
      nav: {
        ariaLabel: 'Main navigation',
        open: 'Open navigation',
        close: 'Close navigation',
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
        apple: {
          src: 'images/badges/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg',
          width: 162,
          height: 54,
          aria: 'Download SPOTSTAGE on the App Store',
          alt: 'Download on the App Store',
        },
        google: {
          src: 'images/badges/GetItOnGooglePlay_Badge_Web_color_English.svg',
          width: 182,
          height: 54,
          aria: 'Get SPOTSTAGE on Google Play',
          alt: 'Get it on Google Play',
        },
      },
      comparison: {
        heading:
          '<span class="comparison__accent comparison__accent--artists">Artists</span> meet <span class="comparison__accent comparison__accent--organizers">Organizers</span>',
        subline: 'SPOTSTAGE brings applications, planning, and line-ups together in one place.',
        artistTitle: 'For Artists',
        artistSubline: 'More fitting gigs. Less effort.',
        organizerTitle: 'For Organizers',
        organizerSubline: 'Better shows. Less organizational stress.',
        ctaHeading: 'Get SPOTSTAGE now',
        ctaText: 'For artists and organizers.',
      },
      benefits: {
        artist: {
          accent: 'gold',
          items: [
            {
              title: 'Find the right shows',
              text: 'Discover open mics, club shows, and events near you.',
              icon: 'search',
            },
            {
              title: 'Apply with ease',
              text: 'Apply in a few taps and keep track of your status.',
              icon: 'send',
            },
            {
              title: 'Gigs at a glance',
              text: 'All confirmations, dates, and show details in one place.',
              icon: 'calendar',
            },
            {
              title: 'More visibility',
              text: 'Build your profile and get discovered for more shows.',
              icon: 'visibility',
            },
          ],
        },
        organizer: {
          accent: 'purple',
          items: [
            {
              title: 'Organize shows',
              text: 'Plan events with date, location, slots, and clear structure.',
              icon: 'mic',
            },
            {
              title: 'Manage applications',
              text: 'Keep all applications organized in one place.',
              icon: 'users',
            },
            {
              title: 'Plan the line-up',
              text: 'Fill slots faster and stay on top of things until showtime.',
              icon: 'lineup',
            },
            {
              title: 'Focus on what matters',
              text: 'Less coordination, more time for a great event.',
              icon: 'focus',
            },
          ],
        },
      },
      howItWorks: {
        eyebrow: 'How it works',
        title: 'From application to line-up',
        subtitle:
          'SPOTSTAGE brings artists and organizers into one simple flow — from the first show idea to the final line-up.',
        switchAria: 'Select audience',
        switchArtists: 'For Artists',
        switchOrganizers: 'For Organizers',
        prevStep: 'Previous step',
        nextStep: 'Next step',
        dotLabel: 'Step',
        artists: [
          {
            number: '01',
            title: 'Create your profile',
            text: 'Show your experience, preferences and performance details so organizers can quickly see if you fit their show.',
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
            text: 'Discover fitting shows in your city or wherever you want to perform — and apply directly for open slots.',
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
            text: 'Set up your show with all important details — whether it\'s a one-time event or a recurring format.',
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
            text: 'Review applications in one place, stay organized and plan your line-up directly in SPOTSTAGE.',
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
            text: 'Fill slots, confirm artists and get your line-up ready for the stage.',
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
            description: 'Open mics, mixed shows, stand-up and comedy events.',
            type: 'live',
            icon: 'comedy',
          },
          {
            title: 'Poetry & Readings',
            status: 'Planned',
            description: 'For poetry slams, reading stages and spoken-word formats.',
            type: 'planned',
            icon: 'poetry',
          },
          {
            title: 'Variety',
            status: 'Planned',
            description: 'For diverse live acts, shows and creative stage moments.',
            type: 'planned',
            icon: 'variety',
          },
          {
            title: 'Music',
            status: 'Planned',
            description: 'For singer, bands and small stage formats.',
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
        imprintTitle: 'Legal notice',
        imprintPlaceholder: 'Placeholder – Legal notice content will be added here.',
        privacyTitle: 'Privacy policy',
        privacyPlaceholder: 'Placeholder – Privacy policy content will be added here.',
        imprintMeta: 'Legal notice – SPOTSTAGE',
        privacyMeta: 'Privacy policy – SPOTSTAGE',
        accessibilityMeta: 'Accessibility – SPOTSTAGE',
        accessibilityTitle: 'Accessibility',
        accessibilityIntro:
          'SPOTSTAGE aims to make its website and app accessible and easy to use for as many people as possible.',
        accessibilityCommitmentHeading: 'Our commitment',
        accessibilityCommitmentText:
          'As we continue to develop SPOTSTAGE, we pay attention to clear content, sufficient contrast, visible focus states, keyboard accessibility and meaningful labels for assistive technologies.',
        accessibilityReportHeading: 'Report an accessibility issue',
        accessibilityReportText:
          'Have you encountered a barrier or are you unable to use part of SPOTSTAGE as expected? Please let us know. Your feedback helps us improve.',
        accessibilityReportLink: 'Report an accessibility issue',
        accessibilityMailto:
          'mailto:hello@spotstage.app?subject=Accessibility%20feedback%20for%20SPOTSTAGE',
        accessibilityNote:
          'SPOTSTAGE is currently being developed. Accessibility will be reviewed and improved continuously.',
      },
    },
  };
})();
