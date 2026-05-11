import { NextResponse } from "next/server";

const LOG_PREFIX = "[booking]";

type BookingBody = {
  name?: string;
  phone?: string;
  email?: string;
  date?: string;
  subject?: string;
  message?: string;
};

function validate(body: BookingBody): string | null {
  const name = body.name?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const date = body.date?.trim() ?? "";
  if (name.length < 2) return "name";
  if (phone.length < 6) return "phone";
  if (!email.includes("@") || email.length < 4) return "email";
  if (!date) return "date";
  return null;
}

export async function POST(request: Request) {
  let body: BookingBody = {};
  try {
    body = (await request.json()) as BookingBody;
  } catch {
    console.error(LOG_PREFIX, "invalid JSON body");
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const payload = {
    name: body.name?.trim() ?? "",
    phone: body.phone?.trim() ?? "",
    email: body.email?.trim() ?? "",
    date: body.date?.trim() ?? "",
    subject: body.subject?.trim() || "Allmän förfrågan",
    message: body.message?.trim() ?? "",
  };

  console.log(LOG_PREFIX, "form payload received", JSON.stringify(payload));

  const invalid = validate(payload);
  if (invalid) {
    console.warn(LOG_PREFIX, "validation failed field:", invalid);
    return NextResponse.json({ ok: false, error: "validation", field: invalid }, { status: 400 });
  }

  const resendKey = process.env.RESEND_API_KEY?.trim();
  const toEmail = process.env.BOOKING_INBOX_EMAIL?.trim();
  const fromEmail = process.env.BOOKING_FROM_EMAIL?.trim();

  console.log(LOG_PREFIX, "recipient (BOOKING_INBOX_EMAIL):", toEmail ?? "(not set)");
  console.log(LOG_PREFIX, "from (BOOKING_FROM_EMAIL):", fromEmail ?? "(not set)");
  console.log(LOG_PREFIX, "RESEND_API_KEY set:", Boolean(resendKey));

  if (!resendKey || !toEmail || !fromEmail) {
    const missing: string[] = [];
    if (!resendKey) missing.push("RESEND_API_KEY");
    if (!toEmail) missing.push("BOOKING_INBOX_EMAIL");
    if (!fromEmail) missing.push("BOOKING_FROM_EMAIL");
    console.error(
      LOG_PREFIX,
      "email not sent — missing environment variables:",
      missing.join(", "),
    );
    return NextResponse.json(
      {
        ok: false,
        error: "email_not_configured",
        missing,
      },
      { status: 503 },
    );
  }

  const textLines = [
    `Ny förfrågan från webbplatsen`,
    ``,
    `Tjänst / produkt: ${payload.subject}`,
    `Namn: ${payload.name}`,
    `Telefon: ${payload.phone}`,
    `E-post: ${payload.email}`,
    `Datum: ${payload.date}`,
    ``,
    `Meddelande:`,
    payload.message || "(inget meddelande)",
  ];
  const textBody = textLines.join("\n");

  const resendPayload = {
    from: fromEmail,
    to: [toEmail],
    reply_to: payload.email,
    subject: `Webbförfrågan: ${payload.subject}`,
    text: textBody,
  };

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resendPayload),
    });

    const resText = await res.text();
    let resJson: unknown = null;
    try {
      resJson = resText ? JSON.parse(resText) : null;
    } catch {
      resJson = resText;
    }

    if (!res.ok) {
      console.error(LOG_PREFIX, "Resend API error status:", res.status, "body:", resJson);
      return NextResponse.json(
        {
          ok: false,
          error: "resend_failed",
          status: res.status,
          detail: resJson,
        },
        { status: 502 },
      );
    }

    console.log(LOG_PREFIX, "Resend API success response:", resJson);
    return NextResponse.json({ ok: true, emailSent: true, provider: "resend", detail: resJson });
  } catch (err) {
    console.error(LOG_PREFIX, "email send threw:", err);
    return NextResponse.json(
      { ok: false, error: "send_exception", message: err instanceof Error ? err.message : String(err) },
      { status: 500 },
    );
  }
}
