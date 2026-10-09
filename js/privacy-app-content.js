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
        '<p>Die mobile SPOTSTAGE-App ermöglicht es registrierten Nutzerinnen und Nutzern, Profile anzulegen, Shows zu organisieren, sich auf Shows zu bewerben, im Zusammenhang mit Shows zu kommunizieren sowie Benachrichtigungen zu erhalten.</p>' +
        '<p>Die Abschnitte 1 und 2 sowie die Abschnitte 17 bis 25 dieser Datenschutzerklärung gelten für Website und App gemeinsam. Die Abschnitte 3 bis 8 betreffen ausschließlich die Website. Die Abschnitte 9 bis 16 beschreiben die Datenverarbeitung in der SPOTSTAGE-App.</p>' +
        '<p>Verantwortlicher für die App-Datenverarbeitung ist derselbe wie in Abschnitt 1 genannt.</p>',

      privacyS10Title: '10. Benutzerkonto und Authentifizierung',
      privacyS10Body:
        '<p>Um die SPOTSTAGE-App nutzen zu können, ist ein Nutzerkonto erforderlich. Für Registrierung, Anmeldung und Sitzungsverwaltung setzen wir Supabase Auth ein.</p>' +
        '<p>Dabei können insbesondere folgende Daten verarbeitet werden:</p>' +
        '<ul class="legal-page__list">' +
        '<li>E-Mail-Adresse</li>' +
        '<li>Passwort (ausschließlich als sicherer Passwort-Hash durch den Authentifizierungsdienst gespeichert; SPOTSTAGE speichert das Passwort nicht im Klartext)</li>' +
        '<li>Status der E-Mail-Bestätigung</li>' +
        '<li>Sitzungs- und Authentifizierungsinformationen</li>' +
        '<li>technische Metadaten im Zusammenhang mit der Anmeldung</li>' +
        '</ul>' +
        '<p>Bei der Registrierung kann eine E-Mail zur Bestätigung der E-Mail-Adresse versendet werden. Die Anmeldung erfolgt mit E-Mail-Adresse und Passwort. Es wird derzeit kein Social Login angeboten.</p>' +
        '<p>Damit Sie in der App angemeldet bleiben können, werden Sitzungs- und Authentifizierungsinformationen lokal im App-Speicher des Endgeräts gespeichert. Die Sitzung kann automatisch erneuert werden, solange sie gültig ist. Das Passwort selbst wird dabei nicht lokal im Klartext gespeichert.</p>' +
        '<p>Beim Festlegen eines Passworts während der Registrierung sowie beim Zurücksetzen des Passworts prüft die App zusätzlich, ob das gewählte Passwort in bekannten Datenlecks vorkommt. Hierfür verwenden wir den Dienst „Pwned Passwords“ von Have I Been Pwned (HIBP), betrieben von Superlative Enterprises Pty Ltd, Australien.</p>' +
        '<p>Das Passwort wird dabei ausschließlich auf dem Endgerät in einen SHA-1-Hash umgewandelt. An HIBP werden nur die ersten fünf Zeichen dieses Hashes übertragen. Das Passwort selbst und der vollständige Hash werden nicht an HIBP übermittelt. HIBP sendet eine Menge möglicher Hash-Endungen zurück; der eigentliche Vergleich findet lokal in der App statt. Zusätzlich verwenden wir die von HIBP angebotene Antwort-Padding-Funktion.</p>' +
        '<p>Bei der Verbindung zu HIBP fallen technisch bedingt insbesondere die IP-Adresse des Endgeräts, der übermittelte fünfstellige Hash-Präfix und HTTP-Verbindungsdaten an. Nach Angaben von HIBP können betriebsnotwendige Server-Logs für einen begrenzten Zeitraum gespeichert werden. Eine Zuordnung des geprüften Passworts zu Ihrer E-Mail-Adresse wird von SPOTSTAGE nicht an HIBP übermittelt.</p>' +
        '<p>Da HIBP von einem Unternehmen in Australien betrieben wird und nach dessen Datenschutzhinweisen technische Verarbeitung auch außerhalb der EU beziehungsweise des EWR stattfinden kann, kann eine Drittlandverarbeitung nicht ausgeschlossen werden. Soweit HIBP im konkreten Verarbeitungsvorgang als Auftragsverarbeiter tätig wird und ein nach der DSGVO eingeschränkter Drittlandtransfer vorliegt, sieht die von HIBP veröffentlichte Datenverarbeitungsvereinbarung die Einbeziehung der Standardvertragsklauseln der Europäischen Kommission vor.</p>' +
        '<p>Die Passwortprüfung dient der Erhöhung der Kontosicherheit und der Verringerung des Risikos, dass bereits kompromittierte Passwörter erneut verwendet werden. Rechtsgrundlage ist Art. 6 Abs. 1 Buchst. f DSGVO. Unser berechtigtes Interesse liegt in der Verhinderung von Kontoübernahmen und dem sicheren Betrieb der Plattform. Ist der Prüfdienst vorübergehend nicht erreichbar, wird die Registrierung beziehungsweise Passwortänderung nicht allein deshalb blockiert.</p>' +
        '<p>Die übrige Verarbeitung erfolgt zur Einrichtung und Verwaltung Ihres Nutzerkontos, zur Authentifizierung und zur Bereitstellung der App-Funktionen.</p>' +
        '<p>Rechtsgrundlage ist Art. 6 Abs. 1 Buchst. b DSGVO, soweit die Verarbeitung zur Erfüllung des Nutzungsverhältnisses erforderlich ist. Soweit die Verarbeitung der Sicherheit des Kontos dient, ist Rechtsgrundlage Art. 6 Abs. 1 Buchst. f DSGVO. Unser berechtigtes Interesse liegt in der sicheren Bereitstellung der App.</p>' +
        '<p>Supabase verarbeitet personenbezogene Daten in unserem Auftrag. Mit Supabase besteht ein Vertrag über Auftragsverarbeitung gemäß Art. 28 DSGVO. Das von SPOTSTAGE verwendete Supabase-Produktionsprojekt wird derzeit in der Region EU West (Irland) betrieben; dort werden die primären Projektdaten gespeichert. Eine Verarbeitung im Zusammenhang mit Support, Administration oder eingesetzten Unterauftragnehmern außerhalb der Europäischen Union beziehungsweise des Europäischen Wirtschaftsraums kann jedoch nicht vollständig ausgeschlossen werden. Soweit hierfür eine geeignete Garantie erforderlich ist, sieht der mit Supabase bestehende Vertrag insbesondere die Standardvertragsklauseln der Europäischen Kommission vor.</p>',

      privacyS11Title: '11. Profile',
      privacyS11Body:
        '<p>In der App können Sie ein persönliches Profil sowie rollenbezogene Profile als Comedian oder Veranstalter pflegen.</p>' +
        '<p>Dabei können insbesondere folgende Daten verarbeitet werden:</p>' +
        '<ul class="legal-page__list">' +
        '<li>Name, Anzeigename oder Künstlername</li>' +
        '<li>Stadt beziehungsweise ausgewählter Auftrittsort</li>' +
        '<li>Postleitzahl, Region und Land</li>' +
        '<li>geografische Koordinaten des ausgewählten Orts sowie eine technische Ortskennung</li>' +
        '<li>Profilbeschreibung</li>' +
        '<li>Profil- und Rolleninformationen</li>' +
        '<li>Profilbild</li>' +
        '<li>freiwillig angegebene Social-Media- und Website-Links</li>' +
        '</ul>' +
        '<p>Bei Comedians können zusätzlich insbesondere Erfahrungslevel, Comedy-Stile, Sprachen, bevorzugte Spot-Länge und gewünschter Auftrittsradius verarbeitet werden.</p>' +
        '<p>Bei Veranstaltern können zusätzlich insbesondere angebotene Show-Formate, Sprachen, Kontakt-E-Mail und die Zugehörigkeit zu einer Organisation verarbeitet werden.</p>' +
        '<p>Die Ortsangaben werden verwendet, um standortbezogene Funktionen der Plattform bereitzustellen, insbesondere die Suche und Einordnung von Shows nach Auftrittsgebiet und Entfernung. SPOTSTAGE greift hierfür derzeit nicht auf den GPS-Standort Ihres Endgeräts zu.</p>' +
        '<p>Die Verarbeitung erfolgt zur Bereitstellung und Darstellung des jeweiligen Profils, zur Nutzung rollenbezogener Funktionen sowie zur Kommunikation und Koordination im Zusammenhang mit Shows, Bewerbungen und Organisationen.</p>' +
        '<p>Rechtsgrundlage ist Art. 6 Abs. 1 Buchst. b DSGVO, soweit die Angaben für die Nutzung der jeweiligen App-Funktionen erforderlich sind. Soweit Angaben freiwillig bereitgestellt werden und hierfür eine Einwilligung erforderlich ist, erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 Buchst. a DSGVO.</p>',

      privacyS12Title: '12. Shows, Bewerbungen und Show-Kommunikation',
      privacyS12Body:
        '<p>Die App dient der Organisation von Shows, der Abwicklung von Bewerbungen und Besetzungen sowie der Kommunikation zwischen den an einer Show beteiligten Nutzerinnen und Nutzern.</p>' +
        '<p>Dabei können insbesondere folgende Daten verarbeitet werden:</p>' +
        '<ul class="legal-page__list">' +
        '<li>Showdaten wie Titel, Datum, Uhrzeit, Beschreibung, Format und weitere Rahmenbedingungen</li>' +
        '<li>Angaben zu Veranstaltungsorten und Locations</li>' +
        '<li>Bewerbungen und deren Status</li>' +
        '<li>Besetzungen, Line-ups und Slot-Zuordnungen</li>' +
        '<li>Host-Zuordnungen</li>' +
        '<li>Angaben zu Gage, Extras und weiteren Showbedingungen</li>' +
        '<li>Veranstalterdaten und Organisationsbezüge</li>' +
        '<li>Status- und Verlaufsdaten zu Shows, Bewerbungen, Einladungen und Auftritten</li>' +
        '<li>Nachrichten innerhalb von Show-Chats</li>' +
        '<li>Absender, Zeitpunkt und Zuordnung einer Nachricht zur jeweiligen Show</li>' +
        '<li>Systemnachrichten zu relevanten Änderungen innerhalb einer Show</li>' +
        '<li>Reaktionen auf Nachrichten</li>' +
        '<li>Informationen zur Chat-Mitgliedschaft sowie gegebenenfalls Lesestatus, Stummschaltung und angeheftete Nachrichten</li>' +
        '</ul>' +
        '<p>Die Kommunikation innerhalb eines Show-Chats ist grundsätzlich für die jeweils berechtigten Teilnehmerinnen und Teilnehmer der betreffenden Show bestimmt. Die Zugriffsberechtigungen richten sich nach der jeweiligen Rolle und Beteiligung an der Show.</p>' +
        '<p>Die Verarbeitung erfolgt zur Bereitstellung der App-Funktionen, zur Koordination und Durchführung von Shows, zur Abwicklung von Bewerbungen und Besetzungen sowie zur Kommunikation zwischen den beteiligten Nutzerinnen und Nutzern.</p>' +
        '<p>Rechtsgrundlage ist Art. 6 Abs. 1 Buchst. b DSGVO, soweit die Verarbeitung zur Durchführung des Nutzungsverhältnisses und zur Bereitstellung der jeweiligen Plattformfunktionen erforderlich ist. Soweit historische Bezüge nach einer Account-Löschung mit fortbestehendem Personenbezug erhalten bleiben, kann die Verarbeitung auf Art. 6 Abs. 1 Buchst. f DSGVO gestützt werden. Unser berechtigtes Interesse liegt in einer sachlich nachvollziehbaren Showhistorie.</p>',

      privacyS13Title: '13. Uploads von Bildern',
      privacyS13Body:
        '<p>In der SPOTSTAGE-App können Nutzerinnen und Nutzer freiwillig Bilder hochladen oder über die Kamera des Endgeräts aufnehmen. Dies betrifft derzeit insbesondere Profilbilder sowie Bilder für Shows.</p>' +
        '<p>Hierbei können insbesondere die Bilddatei, der zugehörige Speicherpfad beziehungsweise die öffentliche Bild-URL sowie technisch erforderliche Dateiinformationen verarbeitet werden.</p>' +
        '<p>Die Bilder werden über Supabase Storage gespeichert. Profil- und Showbilder werden technisch über öffentlich abrufbare URLs bereitgestellt, damit sie innerhalb der vorgesehenen App-Bereiche angezeigt werden können. Nutzer sollten daher keine Bilder hochladen, die nicht für die entsprechende Darstellung auf SPOTSTAGE bestimmt sind.</p>' +
        '<p>Der Zugriff auf die Foto-Mediathek oder Kamera des Endgeräts erfolgt nur nach der jeweiligen Freigabe durch das Betriebssystem. SPOTSTAGE verarbeitet nur die von Ihnen ausgewählten beziehungsweise aufgenommenen Bilder; ein allgemeiner Upload weiterer Medien findet nicht statt.</p>' +
        '<p>Die Verarbeitung erfolgt zur Bereitstellung der vom Nutzer gewünschten Profil- oder Showbildfunktion auf Grundlage von Art. 6 Abs. 1 Buchst. b DSGVO.</p>' +
        '<p>Supabase verarbeitet die gespeicherten Dateien in unserem Auftrag gemäß Art. 28 DSGVO. Wird ein Bild ersetzt oder entfernt, kann die zugehörige Datei aus dem Speicher gelöscht werden. Weitere Einzelheiten zur Speicherdauer und zur Löschung von Daten ergeben sich aus den Abschnitten 15 und 18.</p>',

      privacyS14Title: '14. Push-Benachrichtigungen',
      privacyS14Body:
        '<p>SPOTSTAGE kann Push-Benachrichtigungen über relevante Ereignisse innerhalb der App senden, beispielsweise zu Bewerbungen, veröffentlichten Shows oder bevorstehenden Auftritten.</p>' +
        '<p>Push-Benachrichtigungen werden nur eingerichtet, wenn die entsprechende Berechtigung auf dem Endgerät erteilt wurde.</p>' +
        '<p>Hierbei können insbesondere ein Push-Token zur Adressierung des Endgeräts, eine appbezogene Gerätekennung, die verwendete Plattform (iOS oder Android), Benachrichtigungseinstellungen, technische Informationen zur Zustellung sowie der für die jeweilige Benachrichtigung erforderliche Inhalt verarbeitet werden.</p>' +
        '<p>Für die technische Zustellung verwenden wir den Expo Push Notification Service von 650 Industries, Inc. („Expo“). Expo erhält hierfür insbesondere den Push-Token und den jeweiligen Benachrichtigungsinhalt.</p>' +
        '<p>Expo übermittelt die Benachrichtigung abhängig vom verwendeten Betriebssystem an den Apple Push Notification Service (APNs) von Apple Inc. beziehungsweise an Firebase Cloud Messaging (FCM) von Google LLC. Diese Dienste übernehmen anschließend die Zustellung an das jeweilige Endgerät.</p>' +
        '<p>Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 Buchst. a DSGVO, soweit hierfür eine Einwilligung eingeholt wird. Eine erteilte Berechtigung für Push-Benachrichtigungen kann über die Einstellungen des Betriebssystems jederzeit geändert oder entzogen werden. Zusätzlich können einzelne Benachrichtigungsarten innerhalb von SPOTSTAGE angepasst werden.</p>' +
        '<p>Expo verarbeitet personenbezogene Daten in unserem Auftrag, soweit dies für die technische Zustellung erforderlich ist. Soweit personenbezogene Daten im Rahmen der Expo-Dienste in Drittländer übertragen werden und hierfür eine geeignete Garantie erforderlich ist, sieht die Datenverarbeitungsvereinbarung von Expo insbesondere die Standardvertragsklauseln der Europäischen Kommission vor.</p>',

      privacyS15Title: '15. Account-Löschung',
      privacyS15Body:
        '<p>Sie können Ihren Account grundsätzlich direkt in der App löschen. Nähere Informationen finden Sie auf unserer Seite ' + accountDeletionLink + '.</p>' +
        '<p>Bei einer erfolgreichen Account-Löschung werden insbesondere der Zugang zum Benutzerkonto, persönliche Profil- und Rollenprofildaten, Profilbilder, Push Token, Benachrichtigungseinstellungen, In-App-Benachrichtigungen sowie noch offene oder nicht abgeschlossene Bewerbungen entfernt. Der zugehörige Authentifizierungsaccount wird gelöscht.</p>' +
        '<p>Daten von Organisationen, Shows oder Veranstaltungsorten können bestehen bleiben, soweit diese nicht ausschließlich dem gelöschten Nutzer persönlich zuzuordnen sind, sondern der Organisation beziehungsweise der Durchführung und Dokumentation von Shows dienen.</p>' +
        '<p>Bestimmte historische Bezüge, beispielsweise zu vergangenen Besetzungen, Line-ups, Auftritten oder Show-Kommunikation, können nach Entfernung der direkten Profilangaben bestehen bleiben. Der Name kann dabei beispielsweise durch „Gelöschtes Mitglied“ ersetzt werden. Soweit solche Daten keinen Personenbezug mehr aufweisen, unterliegen sie nicht mehr der DSGVO. Soweit ein Personenbezug fortbesteht, werden die Daten nur weiterverarbeitet, soweit hierfür eine gesetzliche Rechtsgrundlage besteht. Ihre gesetzlichen Datenschutzrechte bleiben hiervon unberührt.</p>' +
        '<p>Die Account-Löschung innerhalb der App kann vorübergehend nicht möglich sein, wenn noch aktive Verpflichtungen oder organisatorische Abhängigkeiten bestehen, beispielsweise ein zukünftiger bestätigter Auftritt oder eine aktive Host-Zuordnung oder wenn eine Organisation ohne vorherige Übertragung der erforderlichen Rechte und Verantwortlichkeiten nicht weitergeführt werden könnte.</p>' +
        '<p>Eine Einschränkung der technischen Account-Löschung innerhalb der App lässt gesetzliche Datenschutzrechte, insbesondere ein gegebenenfalls bestehendes Recht auf Löschung nach Art. 17 DSGVO, unberührt.</p>' +
        '<p>Bei Problemen mit der Account-Löschung können Sie uns unter ' + mailLink + ' kontaktieren.</p>',

      privacyS16Title: '16. Passwort-Reset',
      privacyS16Body:
        '<p>Wenn Sie Ihr Passwort vergessen haben, können Sie in der App einen Passwort-Reset anfordern.</p>' +
        '<p>Dabei wird an die angegebene beziehungsweise registrierte E-Mail-Adresse eine Nachricht mit einem Link zum Zurücksetzen des Passworts versendet. Der Link führt zu einer Recovery-Funktion, über die Sie ein neues Passwort festlegen können.</p>' +
        '<p>Zur Prüfung des Reset-Links und zur Einrichtung einer temporären Recovery-Sitzung werden technisch erforderliche Authentifizierungsinformationen, beispielsweise ein Recovery-Code beziehungsweise Token und Sitzungsinformationen, verarbeitet.</p>' +
        '<p>Das neu gewählte Passwort wird vor der Änderung zusätzlich wie in Abschnitt 10 beschrieben gegen bekannte kompromittierte Passwörter geprüft.</p>' +
        '<p>Passwörter werden nicht im Klartext gespeichert. Die Durchführung des Passwort-Resets und die Änderung des Passworts erfolgen über Supabase Auth.</p>' +
        '<p>Rechtsgrundlage ist Art. 6 Abs. 1 Buchst. b DSGVO, soweit der Passwort-Reset zur Wiederherstellung beziehungsweise Fortführung des Nutzerkontos erforderlich ist.</p>',
    },

    en: {
      privacyS9Title: '9. SPOTSTAGE app – overview',
      privacyS9Body:
        '<p>The SPOTSTAGE mobile app allows registered users to create profiles, organize shows, apply for shows, communicate in connection with shows, and receive notifications.</p>' +
        '<p>Sections 1 and 2 and sections 17 to 25 of this privacy policy apply to both the website and the app. Sections 3 to 8 relate exclusively to the website. Sections 9 to 16 describe data processing in the SPOTSTAGE app.</p>' +
        '<p>The controller for app data processing is the same as named in section 1.</p>',

      privacyS10Title: '10. User account and authentication',
      privacyS10Body:
        '<p>A user account is required to use the SPOTSTAGE app. We use Supabase Auth for registration, sign-in and session management.</p>' +
        '<p>The following data may be processed in particular:</p>' +
        '<ul class="legal-page__list">' +
        '<li>email address</li>' +
        '<li>password (stored by the authentication provider only as a secure password hash; SPOTSTAGE does not store the password in plain text)</li>' +
        '<li>email confirmation status</li>' +
        '<li>session and authentication information</li>' +
        '<li>technical metadata relating to authentication</li>' +
        '</ul>' +
        '<p>During registration, an email may be sent to confirm the email address. Sign-in uses an email address and password. Social login is not currently offered.</p>' +
        '<p>To keep you signed in to the app, session and authentication information is stored locally in the app storage on your device. The session may be refreshed automatically while it remains valid. The password itself is not stored locally in plain text.</p>' +
        '<p>When a password is chosen during registration or reset, the app additionally checks whether the selected password appears in known data breaches. For this purpose, we use the “Pwned Passwords” service provided by Have I Been Pwned (HIBP), operated by Superlative Enterprises Pty Ltd, Australia.</p>' +
        '<p>The password is converted into a SHA-1 hash exclusively on the device. Only the first five characters of that hash are sent to HIBP. The password itself and the complete hash are never sent to HIBP. HIBP returns a set of possible hash suffixes and the actual comparison takes place locally in the app. We also enable the response-padding feature offered by HIBP.</p>' +
        '<p>For technical reasons, the connection to HIBP may involve processing of the device IP address, the transmitted five-character hash prefix and HTTP connection data. According to HIBP, operational server logs may be retained for a limited period. SPOTSTAGE does not send your email address together with the password check.</p>' +
        '<p>HIBP is operated by a company in Australia and its privacy information indicates that technical processing may also take place outside the EU or EEA, so third-country processing cannot be excluded. Where HIBP acts as a processor for the relevant processing and a restricted transfer under the GDPR is involved, HIBP’s published data processing addendum provides for incorporation of the European Commission’s Standard Contractual Clauses.</p>' +
        '<p>The password check is used to improve account security and reduce the risk of reusing previously compromised passwords. The legal basis is Art. 6(1)(f) GDPR. Our legitimate interest is preventing account takeover and operating the platform securely. If the checking service is temporarily unavailable, registration or password changes are not blocked solely for that reason.</p>' +
        '<p>Other processing takes place to create and manage your user account, authenticate you and provide app functionality.</p>' +
        '<p>The legal basis is Art. 6(1)(b) GDPR where processing is necessary for the user relationship. Where processing serves account security, the legal basis is Art. 6(1)(f) GDPR. Our legitimate interest lies in providing the app securely.</p>' +
        '<p>Supabase processes personal data on our behalf. We have entered into a data processing agreement with Supabase pursuant to Art. 28 GDPR. The Supabase production project used by SPOTSTAGE is currently operated in the EU West (Ireland) region, where the primary project data is stored. Processing in connection with support, administration, or subprocessors outside the European Union or European Economic Area cannot, however, be completely excluded. Where an appropriate safeguard is required, the agreement with Supabase provides in particular for the European Commission’s Standard Contractual Clauses.</p>',

      privacyS11Title: '11. Profiles',
      privacyS11Body:
        '<p>In the app, you can maintain a personal profile as well as role-based profiles as a comedian or organizer.</p>' +
        '<p>In particular, the following data may be processed:</p>' +
        '<ul class="legal-page__list">' +
        '<li>name, display name, or stage name</li>' +
        '<li>city or selected performance location</li>' +
        '<li>postal code, region, and country</li>' +
        '<li>geographic coordinates of the selected location and a technical place identifier</li>' +
        '<li>profile description</li>' +
        '<li>profile and role information</li>' +
        '<li>profile image</li>' +
        '<li>social-media and website links provided voluntarily</li>' +
        '</ul>' +
        '<p>For comedians, additional data may include experience level, comedy styles, languages, preferred spot length, and desired performance radius.</p>' +
        '<p>For organizers, additional data may include offered show formats, languages, contact email, and organization membership.</p>' +
        '<p>Location information is used to provide location-based platform functions, in particular to search for and classify shows by performance area and distance. SPOTSTAGE currently does not access the GPS location of your device for this purpose.</p>' +
        '<p>Processing takes place to provide and display the relevant profile, enable role-specific functions, and support communication and coordination relating to shows, applications, and organizations.</p>' +
        '<p>The legal basis is Art. 6(1)(b) GDPR where the information is required to use the relevant app functions. Where information is provided voluntarily and consent is required for that processing, processing is based on Art. 6(1)(a) GDPR.</p>',

      privacyS12Title: '12. Shows, applications, and show communication',
      privacyS12Body:
        '<p>The app is used to organize shows, handle applications and casting, and enable communication between users involved in a show.</p>' +
        '<p>In particular, the following data may be processed:</p>' +
        '<ul class="legal-page__list">' +
        '<li>show data such as title, date, time, description, format, and other conditions</li>' +
        '<li>venue and location information</li>' +
        '<li>applications and their status</li>' +
        '<li>casting decisions, line-ups, and slot assignments</li>' +
        '<li>host assignments</li>' +
        '<li>information about fees, extras, and other show conditions</li>' +
        '<li>organizer data and organization links</li>' +
        '<li>status and history data relating to shows, applications, invitations, and performances</li>' +
        '<li>messages within show chats</li>' +
        '<li>sender, time, and assignment of a message to the relevant show</li>' +
        '<li>system messages relating to relevant changes within a show</li>' +
        '<li>reactions to messages</li>' +
        '<li>information about chat membership and, where applicable, read status, mute status, and pinned messages</li>' +
        '</ul>' +
        '<p>Communication within a show chat is generally intended for the authorized participants of the relevant show. Access permissions depend on the user’s role and involvement in the show.</p>' +
        '<p>Processing takes place to provide app functions, coordinate and operate shows, handle applications and casting, and enable communication between the users involved.</p>' +
        '<p>The legal basis is Art. 6(1)(b) GDPR where processing is necessary for the user relationship and to provide the relevant platform functions. Where historical references remain after account deletion and still constitute personal data, processing may be based on Art. 6(1)(f) GDPR. Our legitimate interest lies in maintaining a factually traceable show history.</p>',

      privacyS13Title: '13. Image uploads',
      privacyS13Body:
        '<p>In the SPOTSTAGE app, users can voluntarily upload images or take images using the device camera. This currently applies in particular to profile images and images for shows.</p>' +
        '<p>In particular, the image file, the associated storage path or public image URL, and technically required file information may be processed.</p>' +
        '<p>Images are stored via Supabase Storage. Profile and show images are technically provided through publicly accessible URLs so that they can be displayed in the intended areas of the app. Users should therefore not upload images that are not intended for the corresponding display on SPOTSTAGE.</p>' +
        '<p>Access to the device photo library or camera takes place only after the relevant permission has been granted through the operating system. SPOTSTAGE processes only the images you select or capture; other media is not uploaded generally.</p>' +
        '<p>Processing takes place to provide the profile or show-image function requested by the user on the basis of Art. 6(1)(b) GDPR.</p>' +
        '<p>Supabase processes stored files on our behalf pursuant to Art. 28 GDPR. If an image is replaced or removed, the associated file may be deleted from storage. Further information on retention and deletion is provided in sections 15 and 18.</p>',

      privacyS14Title: '14. Push notifications',
      privacyS14Body:
        '<p>SPOTSTAGE can send push notifications about relevant events within the app, for example applications, published shows, or upcoming performances.</p>' +
        '<p>Push notifications are set up only where the relevant permission has been granted on the device.</p>' +
        '<p>In particular, a push token used to address the device, an app-related device identifier, the platform used (iOS or Android), notification settings, technical delivery information, and the content required for the respective notification may be processed.</p>' +
        '<p>For technical delivery, we use the Expo Push Notification Service provided by 650 Industries, Inc. (“Expo”). For this purpose, Expo receives in particular the push token and the relevant notification content.</p>' +
        '<p>Depending on the operating system used, Expo forwards the notification to the Apple Push Notification Service (APNs) provided by Apple Inc. or Firebase Cloud Messaging (FCM) provided by Google LLC. These services then deliver the notification to the relevant device.</p>' +
        '<p>Processing is based on Art. 6(1)(a) GDPR where consent is obtained for this purpose. Permission for push notifications can be changed or withdrawn at any time through the operating-system settings. Individual notification categories can also be adjusted within SPOTSTAGE.</p>' +
        '<p>Expo processes personal data on our behalf where technically necessary for delivery. Where personal data is transferred to third countries as part of the Expo services and an appropriate safeguard is required, Expo’s data processing agreement provides in particular for the European Commission’s Standard Contractual Clauses.</p>',

      privacyS15Title: '15. Account deletion',
      privacyS15Body:
        '<p>You can generally delete your account directly in the app. Further information is available on our page ' + accountDeletionLinkEn + '.</p>' +
        '<p>When account deletion is completed successfully, access to the user account, personal profile and role-profile data, profile images, push tokens, notification settings, in-app notifications, and open or otherwise unfinished applications are removed in particular. The associated authentication account is deleted.</p>' +
        '<p>Data relating to organizations, shows, or venues may remain where it is not attributable solely to the deleted user personally but serves the organization or the operation and documentation of shows.</p>' +
        '<p>Certain historical references, for example to past line-ups, performances, casting decisions, or show communications, may remain after direct profile information has been removed. The name may, for example, be replaced by “Deleted member”. Where such data no longer relates to an identifiable person, the GDPR no longer applies to it. Where a personal-data link remains, the data is processed further only where a legal basis permits this. Your statutory data-protection rights remain unaffected.</p>' +
        '<p>Technical account deletion within the app may temporarily be unavailable where active obligations or organizational dependencies remain, for example a confirmed future performance, an active host assignment, or where an organization could not continue without first transferring the necessary rights and responsibilities.</p>' +
        '<p>Any restriction of the technical account-deletion process within the app does not affect statutory data-protection rights, including any applicable right to erasure under Art. 17 GDPR.</p>' +
        '<p>If you encounter problems with account deletion, you can contact us at ' + mailLink + '.</p>',

      privacyS16Title: '16. Password reset',
      privacyS16Body:
        '<p>If you forget your password, you can request a password reset in the app.</p>' +
        '<p>An email containing a password-reset link is sent to the email address entered or registered for the account. The link opens a recovery function through which you can set a new password.</p>' +
        '<p>To validate the reset link and establish a temporary recovery session, technically required authentication information, such as a recovery code or token and session information, is processed.</p>' +
        '<p>Before the password is changed, the newly selected password is also checked against known compromised passwords as described in section 10.</p>' +
        '<p>Passwords are not stored in plain text. The password-reset process and password change are handled via Supabase Auth.</p>' +
        '<p>The legal basis is Art. 6(1)(b) GDPR where the password reset is necessary to restore or continue the user account.</p>',
    },
  };
})();