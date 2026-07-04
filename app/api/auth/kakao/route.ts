import { NextRequest, NextResponse } from "next/server";
import { createOAuthState, oauthCookies, sanitizeNextPath } from "@/lib/auth/session";

export const dynamic = "force-dynamic";

function getBaseUrl(request: NextRequest) {
  const configured = process.env.NEXTAUTH_URL || process.env.NEXT_PUBLIC_SITE_URL;
  if (configured) return configured.replace(/\/$/, "");
  return request.nextUrl.origin;
}

export async function GET(request: NextRequest) {
  const clientId = process.env.KAKAO_CLIENT_ID;
  if (!clientId) {
    return NextResponse.redirect(new URL("/login?error=config", request.url));
  }

  const state = createOAuthState();
  const nextPath = sanitizeNextPath(request.nextUrl.searchParams.get("next"));
  const redirectUri = `${getBaseUrl(request)}/api/auth/callback/kakao`;

  const authorizationUrl = new URL("https://kauth.kakao.com/oauth/authorize");
  authorizationUrl.searchParams.set("response_type", "code");
  authorizationUrl.searchParams.set("client_id", clientId);
  authorizationUrl.searchParams.set("redirect_uri", redirectUri);
  authorizationUrl.searchParams.set("state", state);

  const response = NextResponse.redirect(authorizationUrl);
  const cookieOptions = {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: oauthCookies.maxAge,
  };
  response.cookies.set(oauthCookies.state, state, cookieOptions);
  response.cookies.set(oauthCookies.next, nextPath, cookieOptions);
  return response;
}
