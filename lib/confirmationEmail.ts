import type { Resend } from "resend";
import { siteConfig } from "@/lib/navigation";

/**
 * Automatische Bestätigungsmail an Personen, die das Kontaktformular absenden.
 * Wird nur nach erfolgreichem Versand der internen Anfrage und nur für echte (Nicht-Honeypot-)Anfragen genutzt.
 *
 * Zustellbarkeit (Transaktionsmail, kein Newsletter):
 * - persönlicher Absendername, neutraler Betreff, sachlicher Text ohne Werbeton/Ausrufezeichen
 * - Plain-Text ist der Hauptinhalt, HTML nur minimal (Absätze, keine Hintergründe/Buttons/Bilder)
 * - nur Klartext-URLs (Website, Impressum), keine Tracking- oder Kurzlinks, kein tel:-Link
 * - keine Zusatz-Header (kein Auto-Submitted, kein List-Unsubscribe)
 *
 * Env (alle optional):
 * - CONFIRMATION_FROM  Absender-Override, Standard: "Jascha Kestler | Kestler Connect <jascha@send.kestler-connect.de>"
 *                      (Subdomain send.kestler-connect.de ist in Resend verifiziert; ein anderer Absender
 *                      braucht eine in Resend verifizierte Domain)
 * - CONFIRMATION_EMAIL_ENABLED=false  schaltet die Bestätigungsmail ab (Kill-Switch)
 * Reply-To ist immer jascha@kestler-connect.de.
 */

const DEFAULT_FROM = "Jascha Kestler | Kestler Connect <jascha@send.kestler-connect.de>";
const REPLY_TO = "jascha@kestler-connect.de";
export const CONFIRMATION_SUBJECT = "Deine Anfrage bei Kestler Connect";

/** Strenge Prüfung (ASCII, genau eine Adresse, keine Steuerzeichen/Leerzeichen/Kommas/Klammern), max. 254 Zeichen. */
const STRICT_EMAIL =
  /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;

/** Gibt die Adresse zurück, wenn sie sicher als einzelner Empfänger verwendet werden kann – sonst null. */
export function getConfirmationRecipient(email: string): string | null {
  const value = email.trim();
  if (value.length === 0 || value.length > 254) return null;
  // Keine Steuerzeichen (CR/LF/Tab/NUL etc.) → Header-Injection ausgeschlossen.
  // eslint-disable-next-line no-control-regex
  if (/[\u0000-\u001f\u007f]/.test(value)) return null;
  if (!STRICT_EMAIL.test(value)) return null;
  const [local] = value.split("@");
  if (local.length > 64) return null;
  return value;
}

/** Name nur für die Anrede im Mailtext (nie in Headern): Steuerzeichen und spitze Klammern entfernen, kürzen. */
function displayName(name: string): string {
  return (
    name
      // eslint-disable-next-line no-control-regex
      .replace(/[\u0000-\u001f\u007f<>"]+/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 60)
  );
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function buildConfirmationEmail(name: string): { subject: string; text: string; html: string } {
  const safeName = displayName(name);
  const greeting = safeName ? `Hallo ${safeName},` : "Hallo,";
  const phone = siteConfig.phone;
  const siteUrl = siteConfig.url;
  const impressumUrl = `${siteConfig.url}/impressum`;
  const { streetAddress, postalCode, addressLocality } = siteConfig.address;
  const addressLine = `${streetAddress}, ${postalCode} ${addressLocality}`;

  const paragraphs = [
    "vielen Dank für deine Anfrage. Sie ist bei mir angekommen.",
    "Ich melde mich innerhalb von 24 Stunden (Montag bis Freitag) bei dir. Dann sprechen wir in einem kostenlosen und unverbindlichen Strategiegespräch darüber, worum es dir geht und was für dich sinnvoll ist.",
    `Wenn es eilt, erreichst du mich unter ${phone}.`,
  ];

  const footerLines = [
    "Jascha Kestler",
    "Kestler Connect",
    addressLine,
    `Telefon: ${phone}`,
    `Website: ${siteUrl}`,
    `Impressum: ${impressumUrl}`,
  ];

  const text = [
    greeting,
    "",
    ...paragraphs.flatMap((p) => [p, ""]),
    "Viele Grüße",
    "Jascha",
    "",
    "--",
    ...footerLines,
  ].join("\n");

  // Minimales HTML: nur Absätze, systemnahe Schrift, keine Hintergründe, Buttons, Bilder oder Links (URLs als Klartext).
  const html = `<!doctype html>
<html lang="de">
<body>
<p>${escapeHtml(greeting)}</p>
${paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join("\n")}
<p>Viele Grüße<br>Jascha</p>
<p>--<br>${footerLines.map(escapeHtml).join("<br>\n")}</p>
</body>
</html>`;

  return { subject: CONFIRMATION_SUBJECT, text, html };
}

export function isConfirmationEnabled(): boolean {
  return (process.env.CONFIRMATION_EMAIL_ENABLED ?? "true").trim().toLowerCase() !== "false";
}

/**
 * Versendet die Bestätigung. Wirft nie: Fehler werden nur geloggt (ohne E-Mail-Adresse, kein PII im Log).
 */
export async function sendConfirmationEmail(resend: Resend, params: { name: string; email: string }): Promise<void> {
  try {
    if (!isConfirmationEnabled()) return;
    const to = getConfirmationRecipient(params.email);
    if (!to) return;

    const from = process.env.CONFIRMATION_FROM?.trim() || DEFAULT_FROM;
    const { subject, text, html } = buildConfirmationEmail(params.name);

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: REPLY_TO,
      subject,
      text,
      html,
    });

    if (error) {
      console.error("Confirmation email failed:", error.name, error.message);
    }
  } catch (err) {
    console.error("Confirmation email threw:", err instanceof Error ? err.message : "unknown error");
  }
}
