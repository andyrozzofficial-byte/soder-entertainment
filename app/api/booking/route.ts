import { NextResponse } from "next/server";

/** Env is read at request time; avoid any static bundling assumptions for secrets. */
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const LOG_PREFIX = "[booking]";

type BookingBody = {
  name?: string;
  phone?: string;
  email?: string;
  date?: string;
  subject?: string;
  message?: string;
};

function envPresence(value: string | undefined): "set" | "missing" {
  return sanitizeEnv(value) ? "set" : "missing";
}

/** Trim, strip BOM/newlines, and remove accidental wrapping quotes from Vercel paste. */
function sanitizeEnv(value: string | undefined): string {
  if (value == null) return "";
  let s = String(value).trim();
  if (s.charCodeAt(0) === 0xfeff) s = s.slice(1);
  s = s.replace(/\r/g, "").replace(/\n/g, "").trim();
  if (s.length >= 2 && ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'")))) {
    s = s.slice(1, -1).trim();
  }
  return s;
}

function looksLikeResendApiKey(key: string): boolean {
  return key.startsWith("re_") && key.length >= 12;
}

/** Extract domain from `addr` or `Name <addr>` for Resend dashboard checks — no API secrets. */
function fromDomainHint(from: string): string | null {
  const trimmed = from.trim();
  const angle = trimmed.match(/<([^>]+)>/);
  const addr = (angle?.[1] ?? trimmed).trim();
  const at = addr.lastIndexOf("@");
  if (at === -1 || at === addr.length - 1) return null;
  return addr.slice(at + 1).toLowerCase();
}

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

type ResendErrorBody = {
  message?: string;
  name?: string;
  statusCode?: number;
};

function userMessageForResendFailure(
  status: number,
  detail: unknown,
): { code: string; message: string } {
  const d = detail as ResendErrorBody | null;
  const apiMsg =
    d && typeof d === "object" && typeof d.message === "string"
      ? d.message
      : null;
  if (status === 403) {
    return {
      code: "resend_forbidden",
      message:
        apiMsg ??
        "Resend svarade med 403. Vanliga orsaker: ogiltig API-nyckel (RESEND_API_KEY), eller att BOOKING_FROM_EMAIL inte använder er verifierade domän när ni skickar till en annan mottagare än kontots egen adress. Kontrollera nyckel och avsändaradress i Vercel och Resend.",
    };
  }
  if (status === 422) {
    return {
      code: "resend_validation",
      message:
        apiMsg ??
        "Avsändaradress eller domän är inte godkänd i Resend. Verifiera domänen och BOOKING_FROM_EMAIL.",
    };
  }
  return {
    code: "resend_failed",
    message:
      apiMsg ??
      "E-post kunde inte skickas just nu. Försök igen om en stund eller ring oss.",
  };
}

export async function POST(request: Request) {
  console.log(LOG_PREFIX, "env snapshot (secrets as set/missing only)", {
    RESEND_API_KEY: envPresence(process.env.RESEND_API_KEY),
    BOOKING_INBOX_EMAIL: envPresence(process.env.BOOKING_INBOX_EMAIL),
    BOOKING_FROM_EMAIL: envPresence(process.env.BOOKING_FROM_EMAIL),
  });

  let body: BookingBody = {};
  try {
    body = (await request.json()) as BookingBody;
  } catch {
    console.error(LOG_PREFIX, "invalid JSON body");
    return NextResponse.json(
      {
        ok: false,
        error: "invalid_json",
        message: "Ogiltig begäran.",
      },
      { status: 400 },
    );
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
    return NextResponse.json(
      {
        ok: false,
        error: "validation",
        field: invalid,
        message: "Fyll i alla obligatoriska fält korrekt.",
      },
      { status: 400 },
    );
  }

  const resendKey = sanitizeEnv(process.env.RESEND_API_KEY);
  const toEmail = sanitizeEnv(process.env.BOOKING_INBOX_EMAIL);
  const fromEmail = sanitizeEnv(process.env.BOOKING_FROM_EMAIL);

  const fromDomain = fromEmail ? fromDomainHint(fromEmail) : null;
  console.log(LOG_PREFIX, "BOOKING_FROM_EMAIL domain hint (must be verified in Resend):", fromDomain ?? "(could not parse)");

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
        message:
          "Bokningsformuläret är inte kopplat till e-post på servern än. Sätt RESEND_API_KEY, BOOKING_INBOX_EMAIL och BOOKING_FROM_EMAIL i Vercel.",
      },
      { status: 503 },
    );
  }

  if (!looksLikeResendApiKey(resendKey)) {
    console.error(
      LOG_PREFIX,
      "RESEND_API_KEY has unexpected shape after sanitize (expected prefix re_)",
    );
    return NextResponse.json(
      {
        ok: false,
        error: "email_not_configured",
        message:
          "RESEND_API_KEY verkar ogiltig (saknar förväntat format). Kontrollera värdet i Vercel utan extra citattecken eller radbrytningar.",
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
  const htmlBody = `<pre style="font-family:system-ui,sans-serif;white-space:pre-wrap">${textBody
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")}</pre>`;

  const resendPayload = {
    from: fromEmail,
    to: [toEmail],
    reply_to: [payload.email],
    subject: `Webbförfrågan: ${payload.subject}`,
    text: textBody,
    html: htmlBody,
  };

  const toDomain = toEmail.includes("@") ? toEmail.split("@").pop() : null;
  console.log(LOG_PREFIX, "Resend request meta (addresses redacted to domain only)", {
    fromDomain,
    toDomain,
    replyToDomain: payload.email.includes("@")
      ? payload.email.split("@").pop()
      : null,
    subject: resendPayload.subject,
  });

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
      resJson = { raw: resText };
    }

    console.log(
      LOG_PREFIX,
      "Resend HTTP status:",
      res.status,
      "response body:",
      JSON.stringify(resJson),
    );

    if (!res.ok) {
      const { code, message } = userMessageForResendFailure(res.status, resJson);
      console.error(
        LOG_PREFIX,
        "Resend API error",
        "status:",
        res.status,
        "parsed body:",
        JSON.stringify(resJson),
      );
      return NextResponse.json(
        {
          ok: false,
          error: code,
          status: res.status,
          detail: resJson,
          message,
        },
        { status: 502 },
      );
    }

    console.log(LOG_PREFIX, "Resend API success — full response:", JSON.stringify(resJson));
    return NextResponse.json({
      ok: true,
      emailSent: true,
      provider: "resend",
      detail: resJson,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(LOG_PREFIX, "email send threw:", msg, err);
    return NextResponse.json(
      {
        ok: false,
        error: "send_exception",
        message: "Ett oväntat fel uppstod vid sändning. Försök igen.",
        detail: msg,
      },
      { status: 500 },
    );
  }
}
