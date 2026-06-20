/**
 * SPOTSTAGE – Privacy policy app sections (de / en)
 * Loaded after privacy-legal-content.js, before translations.js
 */
(function () {
  'use strict';

  var mailLink =
    '<a class="legal-page__link" href="mailto:hello@spotstage.app">hello@spotstage.app</a>';
  var accountDeletionLink =
    '<a class="legal-page__link" href="account-loeschen.html">Account löschen</a>';
  var accountDeletionLinkEn =
    '<a class="legal-page__link" href="account-loeschen.html">Delete account</a>';

  window.SpotstagePrivacyApp = {
    de: {
      privacyS9Title: '9. SPOTSTAGE-App – Überblick',
      privacyS9Body:
        '<p>Die mobile SPOTSTAGE-App ermöglicht es registrierten Nutzerinnen und Nutzern, Profile anzulegen, Shows zu organisieren oder sich auf Shows zu bewerben sowie Benachrichtigungen zu erhalten.</p>' +
        '<p>Die Abschnitte 1 und 2 sowie die Abschnitte 17 bis 25 dieser Datenschutzerklärung gelten für Website und App gemeinsam. Die Abschnitte 3 bis 8 betreffen ausschließlich die Website. Die Abschnitte 9 bis 16 beschreiben die Datenverarbeitung in der SPOTSTAGE-App.</p>' +
        '<p>Verantwortlicher für die App-Datenverarbeitung ist derselbe wie in Abschnitt 1 genannt.</p>',

      privacyS10Title: '10. Benutzerkonto und Authentifizierung',
      privacyS10Body:
        '<p>Um die SPOTSTAGE-App nutzen zu können, ist ein Nutzerkonto erforderlich. Für Registrierung, Anmeldung und Sitzungsverwaltung setzen wir Supabase Auth ein.</p>' +
        '<p>Dabei können insbesondere folgende Daten verarbeitet werden:</p>' +
        '<ul class="legal-page__list">' +
        '<li>E-Mail-Adresse</li>' +
        '<li>Passwort (ausschließlich in verschlüsselter Form gespeichert, nicht im Klartext)</li>' +
        '<li>Status der E-Mail-Bestätigung</li>' +
        '<li>Sitzungs- und Authentifizierungsinformationen</li>' +
        '<li>technische Metadaten im Zusammenhang mit der Anmeldung</li>' +
        '</ul>' +
        '<p>Bei der Registrierung kann eine E-Mail zur Bestätigung der E-Mail-Adresse versendet werden. Die Anmeldung erfolgt mit E-Mail-Adresse und Passwort. Es wird derzeit kein Social Login angeboten.</p>' +
        '<p>Die Verarbeitung erfolgt zur Einrichtung und Verwaltung Ihres Nutzerkontos, zur Authentifizierung und zur Bereitstellung der App-Funktionen.</p>' +
        '<p>Rechtsgrundlage ist Art. 6 Abs. 1 Buchst. b DSGVO, soweit die Verarbeitung zur Erfüllung des Nutzungsverhältnisses erforderlich ist. Soweit die Verarbeitung der Sicherheit des Kontos dient, ist Rechtsgrundlage Art. 6 Abs. 1 Buchst. f DSGVO. Unser berechtigtes Interesse liegt in der sicheren Bereitstellung der App.</p>' +
        '<p>Supabase verarbeitet personenbezogene Daten in unserem Auftrag. Mit Supabase besteht ein Vertrag über Auftragsverarbeitung gemäß Art. 28 DSGVO.</p>',

      privacyS11Title: '11. Profile',
      privacyS11Body:
        '<p>In der App können Sie ein persönliches Profil und rollenbezogene Profile pflegen.</p>' +
        '<p>Dabei können insbesondere folgende Daten verarbeitet werden:</p>' +
        '<ul class="legal-page__list">' +
        '<li>Name, Anzeigename oder Künstlername</li>' +
        '<li>Stadt</li>' +
        '<li>Profilbeschreibung</li>' +
        '<li>Rollenprofile als Comedian beziehungsweise Organizer</li>' +
        '<li>von Ihnen freiwillig eingetragene Social Links</li>' +
        '<li>Profilbilder</li>' +
        '</ul>' +
        '<p>Die Verarbeitung erfolgt zur Bereitstellung Ihres Profils innerhalb der App und zur Kommunikation mit anderen Nutzerinnen und Nutzern im Rahmen von Shows und Bewerbungen.</p>' +
        '<p>Rechtsgrundlage ist Art. 6 Abs. 1 Buchst. b DSGVO, soweit die Profildaten für die Nutzung der App erforderlich sind. Soweit Sie freiwillige Angaben machen, ist Rechtsgrundlage Art. 6 Abs. 1 Buchst. a DSGVO beziehungsweise Art. 6 Abs. 1 Buchst. b DSGVO.</p>',

      privacyS12Title: '12. Shows und Bewerbungen',
      privacyS12Body:
        '<p>Die App dient der Organisation von Shows und der Abwicklung von Bewerbungen und Besetzungen.</p>' +
        '<p>Dabei können insbesondere folgende Daten verarbeitet werden:</p>' +
        '<ul class="legal-page__list">' +
        '<li>Showdaten wie Titel, Datum, Uhrzeit und Beschreibung</li>' +
        '<li>Bewerbungen und deren Status</li>' +
        '<li>Besetzungen, Line-ups und Slot-Zuordnungen</li>' +
        '<li>Host-Zuordnungen</li>' +
        '<li>Locations und Veranstaltungsorte</li>' +
        '<li>Veranstalterdaten und Organisationsbezüge</li>' +
        '<li>Status- und Verlaufsdaten zu Shows, Einladungen und Auftritten</li>' +
        '</ul>' +
        '<p>Die Verarbeitung erfolgt zur Durchführung der App-Funktionen, zur Koordination von Shows und zur Dokumentation des Show-Verlaufs.</p>' +
        '<p>Rechtsgrundlage ist Art. 6 Abs. 1 Buchst. b DSGVO. Soweit historische Showbezüge nach einer Account-Löschung anonymisiert verbleiben, kann Rechtsgrundlage Art. 6 Abs. 1 Buchst. f DSGVO sein. Unser berechtigtes Interesse liegt in der sachlich nachvollziehbaren Showhistorie.</p>',

      privacyS13Title: '13. Uploads',
      privacyS13Body:
        '<p>Sie können in der App Profilbilder und Showbilder hochladen. Der Upload erfolgt über Supabase Storage.</p>' +
        '<p>Dabei werden die von Ihnen ausgewählten Bilddateien gespeichert und mit Ihrem Profil beziehungsweise der jeweiligen Show verknüpft. Metadaten zum Upload können technisch erforderlich verarbeitet werden.</p>' +
        '<p>Die Verarbeitung erfolgt zur Bereitstellung der von Ihnen gewünschten Bildinhalte in der App.</p>' +
        '<p>Rechtsgrundlage ist Art. 6 Abs. 1 Buchst. b DSGVO, soweit der Upload für die Nutzung der App erforderlich ist, beziehungsweise Art. 6 Abs. 1 Buchst. a DSGVO, soweit Sie den Upload freiwillig vornehmen.</p>' +
        '<p>Supabase verarbeitet die gespeicherten Dateien in unserem Auftrag gemäß Art. 28 DSGVO.</p>',

      privacyS14Title: '14. Push-Benachrichtigungen',
      privacyS14Body:
        '<p>Sofern Sie Push-Benachrichtigungen in der App aktivieren, verarbeiten wir einen Push Token sowie die Zuordnung zu Ihrem Gerät und Ihren Benachrichtigungseinstellungen.</p>' +
        '<p>Für den Versand von Push-Benachrichtigungen nutzen wir den Expo Push Service.</p>' +
        '<p>Push-Benachrichtigungen dienen der Information über relevante App-Ereignisse, etwa Bewerbungsstatus, Show-Updates oder Einladungen, soweit Sie diese Funktion aktiviert haben.</p>' +
        '<p>Sie können Push-Benachrichtigungen jederzeit in den Einstellungen der App oder Ihres Geräts deaktivieren. Nach Deaktivierung werden keine weiteren Push-Nachrichten an das betreffende Gerät versendet.</p>' +
        '<p>Rechtsgrundlage ist Art. 6 Abs. 1 Buchst. a DSGVO, soweit Sie Push-Benachrichtigungen aktivieren. Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.</p>' +
        '<p>Expo verarbeitet personenbezogene Daten in unserem Auftrag, soweit dies für den Versand technisch erforderlich ist. Mit Expo besteht ein Vertrag über Auftragsverarbeitung gemäß Art. 28 DSGVO, soweit anwendbar.</p>',

      privacyS15Title: '15. Account-Löschung',
      privacyS15Body:
        '<p>Sie können Ihren Account in der App selbst löschen. Nähere Informationen finden Sie auf unserer Seite ' + accountDeletionLink + '.</p>' +
        '<p>Bei einer Account-Löschung werden insbesondere Ihr Account-Zugang, persönliche Profildaten, Rollenprofile, Avatare, Push Token, Benachrichtigungseinstellungen und offene Bewerbungen gelöscht.</p>' +
        '<p>Historische Showbezüge, vergangene Line-ups oder Auftritte können aus sachlichen Gründen anonymisiert erhalten bleiben, etwa unter der Anzeige „Gelöschtes Mitglied“. Ein Anspruch auf vollständige Löschung solcher anonymisierter historischer Datensätze besteht nicht, soweit deren Aufbewahrung für eine nachvollziehbare Showhistorie erforderlich ist.</p>' +
        '<p>Eine Löschung kann vorübergehend blockiert sein, wenn beispielsweise ein zukünftiger bestätigter Auftritt, eine aktive Host-Zuordnung, geplante Shows, Organisations-Eigentümerschaft oder andere aktive Verpflichtungen entgegenstehen.</p>' +
        '<p>Bei Problemen mit der Account-Löschung können Sie uns unter ' + mailLink + ' kontaktieren.</p>',

      privacyS16Title: '16. Passwort-Reset',
      privacyS16Body:
        '<p>Wenn Sie Ihr Passwort vergessen haben, können Sie in der App einen Passwort-Reset anfordern.</p>' +
        '<p>Dabei wird an Ihre registrierte E-Mail-Adresse eine Nachricht mit einem Link zum Zurücksetzen des Passworts versendet. Der Link führt zu einer Recovery-Funktion, über die Sie ein neues Passwort festlegen können.</p>' +
        '<p>Passwörter werden nicht im Klartext gespeichert. Die Verarbeitung erfolgt über Supabase Auth.</p>' +
        '<p>Rechtsgrundlage ist Art. 6 Abs. 1 Buchst. b DSGVO, soweit der Passwort-Reset für die Fortführung Ihres Nutzerkontos erforderlich ist.</p>',
    },

    en: {
      privacyS9Title: '9. SPOTSTAGE app – overview',
      privacyS9Body:
        '<p>The SPOTSTAGE mobile app allows registered users to create profiles, organize shows or apply for shows, and receive notifications.</p>' +
        '<p>Sections 1 and 2 and sections 17 to 25 of this privacy policy apply to both the website and the app. Sections 3 to 8 relate exclusively to the website. Sections 9 to 16 describe data processing in the SPOTSTAGE app.</p>' +
        '<p>The controller for app data processing is the same as named in section 1.</p>',

      privacyS10Title: '10. User account and authentication',
      privacyS10Body:
        '<p>A user account is required to use the SPOTSTAGE app. We use Supabase Auth for registration, login, and session management.</p>' +
        '<p>In particular, the following data may be processed:</p>' +
        '<ul class="legal-page__list">' +
        '<li>Email address</li>' +
        '<li>Password (stored only in encrypted form, not in plain text)</li>' +
        '<li>Email confirmation status</li>' +
        '<li>Session and authentication information</li>' +
        '<li>Technical metadata related to login</li>' +
        '</ul>' +
        '<p>During registration, an email may be sent to confirm your email address. Login is performed with email address and password. Social login is not currently offered.</p>' +
        '<p>Processing takes place to set up and manage your user account, authenticate you, and provide app features.</p>' +
        '<p>The legal basis is Art. 6(1)(b) GDPR where processing is necessary to perform the user relationship. Where processing serves account security, the legal basis is Art. 6(1)(f) GDPR. Our legitimate interest lies in the secure provision of the app.</p>' +
        '<p>Supabase processes personal data on our behalf. We have a data processing agreement with Supabase pursuant to Art. 28 GDPR.</p>',

      privacyS11Title: '11. Profiles',
      privacyS11Body:
        '<p>In the app, you can maintain a personal profile and role-based profiles.</p>' +
        '<p>In particular, the following data may be processed:</p>' +
        '<ul class="legal-page__list">' +
        '<li>Name, display name, or stage name</li>' +
        '<li>City</li>' +
        '<li>Profile description</li>' +
        '<li>Role profiles as comedian or organizer</li>' +
        '<li>Social links you voluntarily provide</li>' +
        '<li>Profile images</li>' +
        '</ul>' +
        '<p>Processing takes place to provide your profile within the app and to communicate with other users in the context of shows and applications.</p>' +
        '<p>The legal basis is Art. 6(1)(b) GDPR where profile data is necessary to use the app. Where you provide voluntary information, the legal basis is Art. 6(1)(a) GDPR or Art. 6(1)(b) GDPR.</p>',

      privacyS12Title: '12. Shows and applications',
      privacyS12Body:
        '<p>The app is used to organize shows and handle applications and line-ups.</p>' +
        '<p>In particular, the following data may be processed:</p>' +
        '<ul class="legal-page__list">' +
        '<li>Show data such as title, date, time, and description</li>' +
        '<li>Applications and their status</li>' +
        '<li>Line-ups and slot assignments</li>' +
        '<li>Host assignments</li>' +
        '<li>Locations and venues</li>' +
        '<li>Organizer data and organization links</li>' +
        '<li>Status and history data relating to shows, invitations, and performances</li>' +
        '</ul>' +
        '<p>Processing takes place to provide app features, coordinate shows, and document show history.</p>' +
        '<p>The legal basis is Art. 6(1)(b) GDPR. Where historical show references remain anonymized after account deletion, the legal basis may be Art. 6(1)(f) GDPR. Our legitimate interest lies in a factually traceable show history.</p>',

      privacyS13Title: '13. Uploads',
      privacyS13Body:
        '<p>In the app, you can upload profile images and show images. Uploads are handled via Supabase Storage.</p>' +
        '<p>Selected image files are stored and linked to your profile or the respective show. Metadata related to the upload may be processed where technically necessary.</p>' +
        '<p>Processing takes place to provide the image content you choose within the app.</p>' +
        '<p>The legal basis is Art. 6(1)(b) GDPR where the upload is necessary to use the app, or Art. 6(1)(a) GDPR where you upload voluntarily.</p>' +
        '<p>Supabase processes stored files on our behalf pursuant to Art. 28 GDPR.</p>',

      privacyS14Title: '14. Push notifications',
      privacyS14Body:
        '<p>If you enable push notifications in the app, we process a push token and the assignment to your device and notification settings.</p>' +
        '<p>We use the Expo Push Service to send push notifications.</p>' +
        '<p>Push notifications inform you about relevant app events, such as application status, show updates, or invitations, where you have enabled this feature.</p>' +
        '<p>You can disable push notifications at any time in the app or device settings. After deactivation, no further push messages are sent to the affected device.</p>' +
        '<p>The legal basis is Art. 6(1)(a) GDPR where you enable push notifications. You may withdraw your consent at any time with effect for the future.</p>' +
        '<p>Expo processes personal data on our behalf where technically necessary for delivery. We have a data processing agreement with Expo pursuant to Art. 28 GDPR, where applicable.</p>',

      privacyS15Title: '15. Account deletion',
      privacyS15Body:
        '<p>You can delete your account yourself in the app. Further information is available on our page ' + accountDeletionLinkEn + '.</p>' +
        '<p>When an account is deleted, your account access, personal profile data, role profiles, avatars, push tokens, notification settings, and open applications are deleted in particular.</p>' +
        '<p>Historical show references, past line-ups, or performances may remain anonymized for factual reasons, for example displayed as “Deleted member”. There is no entitlement to complete erasure of such anonymized historical records where retention is necessary for a traceable show history.</p>' +
        '<p>Deletion may be temporarily blocked if, for example, a confirmed future performance, an active host assignment, planned shows, organization ownership, or other active obligations prevent deletion.</p>' +
        '<p>If you encounter problems with account deletion, you can contact us at ' + mailLink + '.</p>',

      privacyS16Title: '16. Password reset',
      privacyS16Body:
        '<p>If you forget your password, you can request a password reset in the app.</p>' +
        '<p>An email with a link to reset your password is sent to your registered email address. The link leads to a recovery function where you can set a new password.</p>' +
        '<p>Passwords are not stored in plain text. Processing is handled via Supabase Auth.</p>' +
        '<p>The legal basis is Art. 6(1)(b) GDPR where the password reset is necessary to continue your user account.</p>',
    },
  };
})();
