import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import {
  createSessionToken,
  getSessionCookieOptions,
  MOMTOOLS_SESSION_COOKIE,
  oauthCookies,
  sanitizeNextPath,
} from "@/lib/auth/session";

export const dynamic = "force-dynamic";

type KakaoTokenResponse = {
  access_token?: string;
  token_type?: string;
  refresh_token?: string;
  expires_in?: number;
  error?: string;
  error_description?: string;
};

type KakaoUserResponse = {
  id?: number | string;
  kakao_account?: {
    email?: string;
    profile?: {
      nickname?: string;
      thumbnail_image_url?: string;
      profile_image_url?: string;
    };
  };
  properties?: {
    nickname?: string;
    profile_image?: string;
    thumbnail_image?: string;
  };
};

function getBaseUrl(request: NextRequest) {
  const configured = process.env.NEXTAUTH_URL || process.env.NEXT_PUBLIC_SITE_URL;
  if (configured) return configured.replace(/\/$/, "");
  return request.nextUrl.origin;
}

function loginErrorRedirect(request: NextRequest, error = "login") {
  return NextResponse.redirect(new URL(`/login?error=${error}`, request.url));
}

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const state = request.nextUrl.searchParams.get("state");
  const savedState = request.cookies.get(oauthCookies.state)?.value;
  const nextPath = sanitizeNextPath(request.cookies.get(oauthCookies.next)?.value);

  if (!code || !state || !savedState || state !== savedState) {
    return loginErrorRedirect(request, "state");
  }

  const clientId = process.env.KAKAO_CLIENT_ID;
  const clientSecret = process.env.KAKAO_CLIENT_SECRET;

  if (!clientId) {
    return loginErrorRedirect(request, "config");
  }

  const redirectUri = `${getBaseUrl(request)}/api/auth/callback/kakao`;
  const tokenBody = new URLSearchParams({
    grant_type: "authorization_code",
    client_id: clientId,
    redirect_uri: redirectUri,
    code,
  });

  if (clientSecret) tokenBody.set("client_secret", clientSecret);

  const tokenResponse = await fetch("https://kauth.kakao.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" },
    body: tokenBody,
  });

  const tokenJson = (await tokenResponse.json()) as KakaoTokenResponse;
  if (!tokenResponse.ok || !tokenJson.access_token) {
    return loginErrorRedirect(request, "token");
  }

  const userResponse = await fetch("https://kapi.kakao.com/v2/user/me", {
    headers: { Authorization: `Bearer ${tokenJson.access_token}` },
  });
  const kakaoUser = (await userResponse.json()) as KakaoUserResponse;
  const providerAccountId = kakaoUser.id ? String(kakaoUser.id) : "";

  if (!userResponse.ok || !providerAccountId) {
    return loginErrorRedirect(request, "profile");
  }

  const email = kakaoUser.kakao_account?.email ?? null;
  const nickname = kakaoUser.kakao_account?.profile?.nickname ?? kakaoUser.properties?.nickname ?? null;
  const profileImageUrl =
    kakaoUser.kakao_account?.profile?.profile_image_url ??
    kakaoUser.properties?.profile_image ??
    kakaoUser.kakao_account?.profile?.thumbnail_image_url ??
    kakaoUser.properties?.thumbnail_image ??
    null;

  const user = await prisma.$transaction(async (tx) => {
    const existingAccount = await tx.userAccount.findUnique({
      where: { provider_providerAccountId: { provider: "KAKAO", providerAccountId } },
      include: { user: true },
    });

    if (existingAccount) {
      await tx.userAccount.update({
        where: { id: existingAccount.id },
        data: { email, profileImageUrl },
      });

      return tx.user.update({
        where: { id: existingAccount.userId },
        data: {
          email: existingAccount.user.email ?? email,
          nickname: nickname ?? existingAccount.user.nickname,
          lastLoginAt: new Date(),
          deletedAt: null,
        },
      });
    }

    return tx.user.create({
      data: {
        email,
        nickname,
        lastLoginAt: new Date(),
        accounts: {
          create: {
            provider: "KAKAO",
            providerAccountId,
            email,
            profileImageUrl,
          },
        },
      },
    });
  });

  let sessionToken = "";
  try {
    sessionToken = createSessionToken(user.id);
  } catch {
    return loginErrorRedirect(request, "config");
  }

  const response = NextResponse.redirect(new URL(nextPath, request.url));
  response.cookies.set(MOMTOOLS_SESSION_COOKIE, sessionToken, getSessionCookieOptions());
  response.cookies.set(oauthCookies.state, "", { path: "/", maxAge: 0 });
  response.cookies.set(oauthCookies.next, "", { path: "/", maxAge: 0 });
  return response;
}
