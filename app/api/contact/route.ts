import { after, NextResponse } from "next/server";
import { Resend } from "resend";
import { getConfirmationRecipient, sendConfirmationEmail } from "@/lib/confirmationEmail";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Zusätzlicher Empfänger aller Website-Anfragen, falls CONTACT_CC nicht gesetzt ist. */
const DEFAULT_CONTACT_CC = "nebel@kestler-connect.de";

/**
 * CC-Empfänger der internen Anfrage-Mail.
 * - CONTACT_CC nicht gesetzt → Default nebel@kestler-connect.de (keine neue Vercel-Variable nötig)
 * - CONTACT_CC="a@x.de, b@y.de" → diese Adressen
 * - CONTACT_CC="" (leer gesetzt) → kein CC
 * Ungültige Adressen und Dubletten zu den To-Empfängern werden verworfen.
 */
function getContactCc(toList: string[]): string[] {
  const raw = process.env.CONTACT_CC ?? DEFAULT_CONTACT_CC;
  const to = new Set(toList.map((address) => address.toLowerCase()));
  const seen = new Set<string>();
  return raw
    .split(/[,;]/)
    .map((address) => address.trim())
    .filter((address) => {
      const key = address.toLowerCase();
      if (!EMAIL_PATTERN.test(address) || to.has(key) || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new Resend(apiKey);
}

/** Einzeilige Felder: Zeilenumbrüche entfernen (Header-Injection), Länge begrenzen. */
function singleLine(value: unknown, max: number): string {
  return typeof value === "string" ? value.replace(/[\r\n\t]+/g, " ").trim().slice(0, max) : "";
}

function multiLine(value: unknown, max: number): string {
  return typeof value === "string" ? value.replace(/\r\n/g, "\n").trim().slice(0, max) : "";
}

/**
 * Bestätigungsmail ans Absender-Postfach: läuft nach der Antwort (after), blockiert weder die Formular-Antwort
 * noch das generate_lead-Event im Browser. Fehler werden nur geloggt.
 */
function scheduleConfirmation(resend: Resend, name: string, email: string) {
  const task = () => sendConfirmationEmail(resend, { name, email });
  try {
    after(task);
  } catch {
    // after() nicht verfügbar (z. B. außerhalb eines Request-Kontexts): ohne Warten im Hintergrund starten.
    void task();
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot: Bots füllen das versteckte Feld aus – still verwerfen (keine interne Mail, keine Bestätigung).
    if (singleLine(body?.website, 200) !== "") {
      return NextResponse.json({ success: true });
    }

    const name = singleLine(body?.name, 120);
    const company = singleLine(body?.company, 160);
    const phone = singleLine(body?.phone, 60);
    const email = singleLine(body?.email, 200);
    const message = multiLine(body?.message, 3000);
    const source = singleLine(body?.source, 80) || "website";

    const hasValidEmail = EMAIL_PATTERN.test(email);
    const hasPhone = phone.length >= 6;

    if (name.length < 2 || (!hasValidEmail && !hasPhone)) {
      return NextResponse.json({ error: "Pflichtfelder fehlen" }, { status: 400 });
    }

    const to = process.env.CONTACT_EMAIL;
    const from =
      process.env.CONTACT_FROM || "Kestler Connect <noreply@send.kestler-connect.de>";

    const resend = getResendClient();

    if (!resend || !to) {
      console.error("Missing RESEND_API_KEY or CONTACT_EMAIL");
      return NextResponse.json({ error: "E-Mail nicht konfiguriert" }, { status: 503 });
    }

    const cc = getContactCc([to]);

    const { error } = await resend.emails.send({
      from,
      to: [to],
      ...(cc.length > 0 ? { cc } : {}),
      replyTo: hasValidEmail ? email : undefined,
      subject: company ? `Neue Anfrage von ${name} (${company})` : `Neue Anfrage von ${name}`,
      text: [
        "Neue Kontaktanfrage über die Website",
        "",
        `Name: ${name}`,
        ...(company ? [`Firma: ${company}`] : []),
        `Telefon: ${phone || "(nicht angegeben)"}`,
        `E-Mail: ${email || "(nicht angegeben)"}`,
        `Quelle: ${source}`,
        "",
        "Nachricht:",
        message || "(keine Nachricht)",
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "E-Mail konnte nicht gesendet werden" }, { status: 500 });
    }

    // Interne Anfrage ist raus → jetzt (und nur jetzt) die Bestätigung an den Absender, falls eine gültige E-Mail vorliegt.
    const confirmationTo = hasValidEmail ? getConfirmationRecipient(email) : null;
    if (confirmationTo) {
      scheduleConfirmation(resend, name, confirmationTo);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Interner Fehler" }, { status: 500 });
  }
}
