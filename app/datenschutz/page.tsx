import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CookieSettingsButton } from "@/components/consent/CookieSettingsButton";

export const metadata: Metadata = createMetadata({
  title: "Datenschutz",
  description: "Datenschutzerklärung von Kestler Connect.",
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  return (
    <div className="page-top">
      <div className="container-custom section-padding">
        <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Datenschutz" }]} />
        <h1 className="text-3xl font-extrabold text-anthracite">Datenschutzerklärung</h1>

        <div className="prose-custom mt-8 max-w-3xl space-y-8 text-gray-600">
          <section>
            <h2 className="text-xl font-bold text-anthracite">1. Datenschutz auf einen Blick</h2>
            <p className="mt-4 leading-relaxed">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-anthracite">2. Verantwortliche Stelle</h2>
            <p className="mt-4 leading-relaxed">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist Kestler Connect, Jascha Kestler.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-anthracite">3. Datenerfassung auf dieser Website</h2>
            <p className="mt-4 leading-relaxed">
              Wenn Sie unser Kontaktformular nutzen, werden die von Ihnen eingegebenen Daten (Name, Firma, Telefonnummer, E-Mail) zur Bearbeitung Ihrer Anfrage verwendet. Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-anthracite">4. Ihre Rechte</h2>
            <p className="mt-4 leading-relaxed">
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
            </p>
          </section>

          <section id="cookies">
            <h2 className="text-xl font-bold text-anthracite">5. Cookies und Einwilligung (Cookie-Banner)</h2>
            <p className="mt-4 leading-relaxed">
              Beim ersten Besuch fragen wir Sie über einen Cookie-Banner, ob wir Analyse- und Marketing-Dienste einsetzen dürfen. Bis zu Ihrer Entscheidung sind diese Kategorien standardmäßig deaktiviert. Sie können „Alle akzeptieren“, „Nur notwendige“ wählen oder unter „Einstellungen“ einzelne Kategorien (Analyse, Marketing) festlegen.
            </p>
            <p className="mt-4 leading-relaxed">
              Ihre Auswahl speichern wir in Ihrem Browser (Local Storage und ein Cookie mit dem Namen „kc_consent“, Speicherdauer 180 Tage). Dieser Eintrag ist technisch erforderlich, um Ihre Entscheidung zu berücksichtigen. Rechtsgrundlage dafür ist § 25 Abs. 2 Nr. 2 TDDDG in Verbindung mit Art. 6 Abs. 1 lit. f DSGVO. Für alle weiteren Speicherungen und Zugriffe auf Ihr Endgerät sowie die anschließende Verarbeitung holen wir Ihre Einwilligung nach § 25 Abs. 1 TDDDG und Art. 6 Abs. 1 lit. a DSGVO ein.
            </p>
            <p className="mt-4 leading-relaxed">
              Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft ändern oder widerrufen, indem Sie die Cookie-Einstellungen erneut öffnen (Link „Cookie-Einstellungen“ im Footer oder hier):{" "}
              <CookieSettingsButton className="font-semibold text-accent-dark underline underline-offset-2 hover:text-navy" />
              . Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt.
            </p>
          </section>

          <section id="google-tag-manager">
            <h2 className="text-xl font-bold text-anthracite">6. Google Tag Manager, Google Analytics und Google Ads</h2>
            <p className="mt-4 leading-relaxed">
              Wir nutzen den Google Tag Manager, einen Dienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland (Google). Der Tag Manager verwaltet Website-Tags; er selbst setzt keine Cookies und erfasst keine personenbezogenen Daten, kann aber andere Tags auslösen, die dies tun.
            </p>
            <p className="mt-4 leading-relaxed">
              Über den Tag Manager setzen wir – abhängig von Ihrer Einwilligung – Google Analytics (Reichweitenmessung, z. B. besuchte Seiten, Klicks auf Telefon, WhatsApp oder Kontaktanfragen) und Google Ads (Conversion-Messung, ggf. Remarketing) ein. Dabei können Cookies und ähnliche Technologien verwendet und Daten wie IP-Adresse, Geräte- und Browserinformationen sowie Nutzungsdaten an Google übermittelt werden.
            </p>
            <p className="mt-4 leading-relaxed">
              Wir verwenden den Google Consent Mode (Version 2). Alle Einwilligungskategorien (Analyse: analytics_storage; Marketing: ad_storage, ad_user_data, ad_personalization) sind standardmäßig auf „verweigert“ gesetzt und werden erst nach Ihrer Zustimmung auf „erteilt“ gesetzt. Solange Sie nicht eingewilligt haben, werden keine Analyse- oder Werbe-Cookies gesetzt. Google-Tags können in diesem Fall jedoch anonymisierte, nicht cookie-basierte Signale (sogenannte Pings, z. B. Zeitpunkt, Browser- und Seiteninformationen) an Google senden, die für aggregierte Messungen und Modellierungen verwendet werden.
            </p>
            <p className="mt-4 leading-relaxed">
              Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Eine Übermittlung von Daten in die USA kann nicht ausgeschlossen werden; Google ist nach dem EU-US Data Privacy Framework zertifiziert. Weitere Informationen finden Sie in der Datenschutzerklärung von Google unter https://policies.google.com/privacy.
            </p>
          </section>

          {/* TODO(Rechtsprüfung): Abschnitt 7 vor Livegang juristisch prüfen lassen. */}
          <section id="vercel-analytics">
            <h2 className="text-xl font-bold text-anthracite">7. Vercel Web Analytics und Speed Insights</h2>
            <p className="mt-4 leading-relaxed">
              Zur Reichweitenmessung und zur Analyse der Ladegeschwindigkeit nutzen wir Vercel Web Analytics und Vercel Speed Insights, Dienste der Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Beide Dienste arbeiten ohne Cookies und ohne Speicherung von Informationen auf Ihrem Endgerät; es werden keine personenbezogenen Daten erfasst und kein Profil über Sie über mehrere Websites hinweg erstellt. Erfasst werden ausschließlich aggregierte, nicht auf Sie als Person zurückführbare Nutzungs- und Leistungsdaten (z. B. aufgerufene Seiten, Referrer, Land, Browser, Betriebssystem, Gerätetyp und Ladezeiten).
            </p>
            <p className="mt-4 leading-relaxed">
              Rechtsgrundlage ist unser berechtigtes Interesse an einer bedarfsgerechten Gestaltung und technischen Optimierung unserer Website (Art. 6 Abs. 1 lit. f DSGVO). Da keine Informationen auf Ihrem Endgerät gespeichert oder aus ihm ausgelesen werden, ist hierfür keine Einwilligung über den Cookie-Banner erforderlich. Sie können der Verarbeitung jederzeit mit Wirkung für die Zukunft widersprechen, indem Sie uns über die im Impressum genannten Kontaktdaten kontaktieren. Weitere Informationen finden Sie in der Datenschutzerklärung von Vercel unter https://vercel.com/legal/privacy-policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
