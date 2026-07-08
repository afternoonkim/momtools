import { NextRequest, NextResponse } from "next/server";
import { MOMTOOLS_SESSION_COOKIE, getSessionCookieOptions, oauthCookies, sanitizeNextPath } from "@/lib/auth/session";

export const dynamic = "force-dynamic";

function expireAuthCookies(response: NextResponse) {
  response.cookies.set(MOMTOOLS_SESSION_COOKIE, "", getSessionCookieOptions(0));
  response.cookies.set(oauthCookies.state, "", getSessionCookieOptions(0));
  response.cookies.set(oauthCookies.next, "", getSessionCookieOptions(0));
  response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  return response;
}

export async function GET(request: NextRequest) {
  const nextPath = sanitizeNextPath(request.nextUrl.searchParams.get("next") || "/");
  return expireAuthCookies(NextResponse.redirect(new URL(nextPath, request.url)));
}

export async function POST() {
  return expireAuthCookies(NextResponse.json({ ok: true }));
}
