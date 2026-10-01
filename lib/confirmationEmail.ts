import type { Resend } from "resend";
import { siteConfig } from "@/lib/navigation";

/**
 * Automatische Bestätigungsmail an Personen, die das Kontaktformular absenden.
 * Wird nur nach erfolgreichem Versand der internen Anfrage und nur für echte (Nicht-Honeypot-)Anfragen genutzt.
 *
 * Env (alle optional):
 * - CONFIRMATION_FROM  Absender, Standard: "Jascha Kestler <jascha@kestler-connect.de>"
 *                      (die Domain kestler-connect.de muss in Resend verifiziert sein)
 * - CONFIRMATION_EMAIL_ENABLED=false  schaltet die Bestätigungsmail ab (Kill-Switch)
 */

const DEFAULT_FROM = "Jascha Kestler <jascha@kestler-connect.de>";
const REPLY_TO = "jascha@kestler-connect.de";
export const CONFIRMATION_SUBJECT = "Danke für deine Anfrage – ich melde mich bei dir";

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
  const telHref = `tel:${phone.replace(/\s/g, "")}`;
  const siteUrl = siteConfig.url;
  const { streetAddress, postalCode, addressLocality } = siteConfig.address;

  const paragraphs = [
    "vielen Dank für deine Anfrage – sie ist bei mir angekommen.",
    "Ich melde mich innerhalb von 24 Stunden (Montag bis Freitag) bei dir. Dann sprechen wir in einem kostenlosen und unverbindlichen Strategiegespräch darüber, was für dein Unternehmen sinnvoll ist.",
    `Wenn es eilt, erreichst du mich direkt unter ${phone}.`,
  ];

  const text = [
    greeting,
    "",
    ...paragraphs.flatMap((p) => [p, ""]),
    "Viele Grüße",
    "Jascha Kestler",
    "",
    "--",
    "Jascha Kestler",
    "Kestler Connect",
    `${streetAddress}, ${postalCode} ${addressLocality}`,
    `Telefon: ${phone}`,
    siteUrl,
  ].join("\n");

  const html = `<!doctype html>
<html lang="de">
  <body style="margin:0;padding:0;background:#ffffff;">
    <div style="max-width:560px;margin:0 auto;padding:24px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.5;color:#1f2937;">
      <p style="margin:0 0 16px;">${escapeHtml(greeting)}</p>
      <p style="margin:0 0 16px;">${escapeHtml(paragraphs[0])}</p>
      <p style="margin:0 0 16px;">${escapeHtml(paragraphs[1])}</p>
      <p style="margin:0 0 16px;">Wenn es eilt, erreichst du mich direkt unter <a href="${escapeHtml(telHref)}" style="color:#1f2937;">${escapeHtml(phone)}</a>.</p>
      <p style="margin:0 0 24px;">Viele Grüße<br>Jascha Kestler</p>
      <hr style="border:0;border-top:1px solid #e5e7eb;margin:0 0 16px;">
      <p style="margin:0;font-size:14px;line-height:1.5;color:#4b5563;">
        <strong>Jascha Kestler</strong><br>
        Kestler Connect<br>
        ${escapeHtml(streetAddress)}, ${escapeHtml(postalCode)} ${escapeHtml(addressLocality)}<br>
        Telefon: <a href="${escapeHtml(telHref)}" style="color:#4b5563;">${escapeHtml(phone)}</a><br>
        <a href="${escapeHtml(siteUrl)}" style="color:#4b5563;">${escapeHtml(siteUrl)}</a>
      </p>
    </div>
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
      // Kennzeichnet die Mail als automatische Antwort (verhindert Auto-Reply-Schleifen).
      headers: { "Auto-Submitted": "auto-replied" },
    });

    if (error) {
      console.error("Confirmation email failed:", error.name, error.message);
    }
  } catch (err) {
    console.error("Confirmation email threw:", err instanceof Error ? err.message : "unknown error");
  }
}
