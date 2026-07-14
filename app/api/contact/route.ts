import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, phone, email, message, source } = body;

    if (!name || !company || !phone || !email) {
      return NextResponse.json({ error: "Pflichtfelder fehlen" }, { status: 400 });
    }

    console.log("Neue Kontaktanfrage:", {
      name,
      company,
      phone,
      email,
      message,
      source,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Interner Fehler" }, { status: 500 });
  }
}
