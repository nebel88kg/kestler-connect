import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, phone, email, message, source } = body;

    if (!name || !company || !phone || !email) {
      return NextResponse.json({ error: "Pflichtfelder fehlen" }, { status: 400 });
    }

    const to = process.env.CONTACT_EMAIL;
    const from =
      process.env.CONTACT_FROM || "Kestler Connect <noreply@kestler-connect.de>";

    if (!process.env.RESEND_API_KEY || !to) {
      console.error("Missing RESEND_API_KEY or CONTACT_EMAIL");
      return NextResponse.json({ error: "E-Mail nicht konfiguriert" }, { status: 500 });
    }

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Neue Anfrage von ${name} (${company})`,
      text: [
        "Neue Kontaktanfrage über die Website",
        "",
        `Name: ${name}`,
        `Firma: ${company}`,
        `Telefon: ${phone}`,
        `E-Mail: ${email}`,
        `Quelle: ${source || "website"}`,
        "",
        "Nachricht:",
        message || "(keine Nachricht)",
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "E-Mail konnte nicht gesendet werden" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Interner Fehler" }, { status: 500 });
  }
}
