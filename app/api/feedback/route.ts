import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type FeedbackPayload = {
  type?: string;
  message?: string;
  email?: string;
  pageUrl?: string;
  pageTitle?: string;
  website?: string;
  startedAt?: number;
};

const FEEDBACK_TYPES = new Set([
  "불편해요",
  "오류가 있어요",
  "이런 기능이 필요해요",
  "내용이 헷갈려요",
  "기타",
]);

const DEFAULT_TO_EMAIL = "afternoonkim93@gmail.com";
const DEFAULT_FROM_EMAIL = "MomTools <noreply@momtools.kr>";

function asText(value: unknown, max = 1000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function envText(...keys: string[]) {
  for (const key of keys) {
    const value = process.env[key]?.trim();
    if (!value) continue;
    return value.replace(/^['\"]|['\"]$/g, "");
  }
  return "";
}

function isValidEmail(value: string) {
  if (!value) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildEmailHtml({
  type,
  message,
  email,
  pageUrl,
  pageTitle,
  userAgent,
  ip,
}: {
  type: string;
  message: string;
  email: string;
  pageUrl: string;
  pageTitle: string;
  userAgent: string;
  ip: string;
}) {
  const rows = [
    ["유형", type],
    ["답변 받을 이메일", email || "미입력"],
    ["페이지", pageTitle || pageUrl || "미확인"],
    ["페이지 주소", pageUrl || "미확인"],
    ["접속 환경", userAgent || "미확인"],
    ["IP", ip || "미확인"],
  ];

  return `
    <div style="font-family:Arial,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;line-height:1.65;color:#1f2937;max-width:680px">
      <h2 style="margin:0 0 16px;color:#111827">MomTools 의견이 도착했어요</h2>
      <div style="padding:16px;border:1px solid #f3d7a3;border-radius:16px;background:#fff7ed">
        <div style="font-size:13px;font-weight:700;color:#b45309;margin-bottom:8px">내용</div>
        <div style="white-space:pre-wrap;font-size:15px;color:#111827">${escapeHtml(message)}</div>
      </div>
      <table style="margin-top:18px;border-collapse:collapse;width:100%;font-size:13px">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <th style="text-align:left;vertical-align:top;padding:10px;border-bottom:1px solid #f1f5f9;color:#64748b;width:150px">${escapeHtml(label)}</th>
                  <td style="padding:10px;border-bottom:1px solid #f1f5f9;color:#111827;word-break:break-word">${escapeHtml(value)}</td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

async function sendWithResend({
  type,
  message,
  email,
  pageUrl,
  pageTitle,
  userAgent,
  ip,
}: {
  type: string;
  message: string;
  email: string;
  pageUrl: string;
  pageTitle: string;
  userAgent: string;
  ip: string;
}) {
  const apiKey = envText("RESEND_API_KEY");
  if (!apiKey) {
    return { ok: false, status: 503, error: "missing_resend_api_key" };
  }

  const to = envText("FEEDBACK_TO_EMAIL") || DEFAULT_TO_EMAIL;
  const from = envText("FEEDBACK_FROM_EMAIL", "RESEND_FROM_EMAIL") || DEFAULT_FROM_EMAIL;
  const subject = `[MomTools 의견] ${type}${pageTitle ? ` · ${pageTitle}` : ""}`.slice(0, 160);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email || undefined,
      subject,
      html: buildEmailHtml({ type, message, email, pageUrl, pageTitle, userAgent, ip }),
      text: [
        `유형: ${type}`,
        `답변 받을 이메일: ${email || "미입력"}`,
        `페이지: ${pageTitle || pageUrl || "미확인"}`,
        `페이지 주소: ${pageUrl || "미확인"}`,
        `접속 환경: ${userAgent || "미확인"}`,
        `IP: ${ip || "미확인"}`,
        "",
        message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    return { ok: false, status: response.status, error: errorText || "resend_send_failed" };
  }

  return { ok: true, status: 200, error: "" };
}

export async function POST(request: NextRequest) {
  let payload: FeedbackPayload;
  try {
    payload = (await request.json()) as FeedbackPayload;
  } catch {
    return NextResponse.json({ ok: false, message: "의견 내용을 다시 확인해 주세요." }, { status: 400 });
  }

  const honeypot = asText(payload.website, 200);
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  const startedAt = typeof payload.startedAt === "number" ? payload.startedAt : 0;
  if (startedAt && Date.now() - startedAt < 1200) {
    return NextResponse.json({ ok: true });
  }

  const type = FEEDBACK_TYPES.has(asText(payload.type, 40)) ? asText(payload.type, 40) : "기타";
  const message = asText(payload.message, 1200);
  const email = asText(payload.email, 160).toLowerCase();
  const pageUrl = asText(payload.pageUrl, 500);
  const pageTitle = asText(payload.pageTitle, 160);
  const userAgent = asText(request.headers.get("user-agent"), 500);
  const ip = asText(request.headers.get("x-forwarded-for")?.split(",")[0] || request.headers.get("x-real-ip"), 80);

  if (message.length < 10) {
    return NextResponse.json({ ok: false, message: "의견 내용을 10자 이상 적어주세요." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, message: "이메일 형식을 확인해 주세요." }, { status: 400 });
  }

  try {
    const result = await sendWithResend({ type, message, email, pageUrl, pageTitle, userAgent, ip });
    if (!result.ok) {
      console.error("Feedback email failed", {
        status: result.status,
        error: result.error,
        hasApiKey: Boolean(envText("RESEND_API_KEY")),
        from: envText("FEEDBACK_FROM_EMAIL", "RESEND_FROM_EMAIL") || DEFAULT_FROM_EMAIL,
        to: envText("FEEDBACK_TO_EMAIL") || DEFAULT_TO_EMAIL,
      });
      return NextResponse.json(
        {
          ok: false,
          message: "지금은 의견 보내기가 원활하지 않아요. 아래 메일로 직접 보내주셔도 됩니다.",
          fallbackEmail: DEFAULT_TO_EMAIL,
        },
        { status: result.status || 500 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Feedback email error", error);
    return NextResponse.json(
      {
        ok: false,
        message: "지금은 의견 보내기가 원활하지 않아요. 아래 메일로 직접 보내주셔도 됩니다.",
        fallbackEmail: DEFAULT_TO_EMAIL,
      },
      { status: 500 },
    );
  }
}
