import { NextRequest, NextResponse } from "next/server";
import { MOMTOOLS_SESSION_COOKIE, getSessionCookieOptions, sanitizeNextPath } from "@/lib/auth/session";

export const dynamic = "force-dynamic";

function expireSessionCookie(response: NextResponse) {
  response.cookies.set(MOMTOOLS_SESSION_COOKIE, "", getSessionCookieOptions(0));
  return response;
}

export async function GET(request: NextRequest) {
  const nextPath = sanitizeNextPath(request.nextUrl.searchParams.get("next") || "/");
  return expireSessionCookie(NextResponse.redirect(new URL(nextPath, request.url)));
}

export async function POST() {
  return expireSessionCookie(NextResponse.json({ ok: true }));
}
