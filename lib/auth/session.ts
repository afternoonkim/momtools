import { cookies } from "next/headers";
import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { prisma } from "@/lib/db";
import { getAccessibleChildren } from "@/lib/family-sharing";

export const MOMTOOLS_SESSION_COOKIE = "momtools_session";
const STATE_COOKIE = "momtools_oauth_state";
const NEXT_COOKIE = "momtools_auth_next";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 30;
const OAUTH_COOKIE_MAX_AGE_SECONDS = 60 * 10;

type SessionPayload = {
  userId: string;
  exp: number;
};

function getSecret() {
  const secret = process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET;
  if (!secret || secret.trim().length < 16) {
    throw new Error("AUTH_SECRET 또는 NEXTAUTH_SECRET 환경변수가 필요합니다.");
  }
  return secret.trim();
}

function base64UrlEncode(value: string | Buffer) {
  return Buffer.from(value)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function base64UrlDecode(value: string) {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized.padEnd(normalized.length + ((4 - (normalized.length % 4)) % 4), "=");
  return Buffer.from(padded, "base64").toString("utf8");
}

function sign(value: string) {
  return base64UrlEncode(createHmac("sha256", getSecret()).update(value).digest());
}

function safeEqual(a: string, b: string) {
  const aBuffer = Buffer.from(a);
  const bBuffer = Buffer.from(b);
  if (aBuffer.length !== bBuffer.length) return false;
  return timingSafeEqual(aBuffer, bBuffer);
}

export function createSessionToken(userId: string) {
  const header = base64UrlEncode(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const payload = base64UrlEncode(
    JSON.stringify({ userId, exp: Math.floor(Date.now() / 1000) + SESSION_MAX_AGE_SECONDS } satisfies SessionPayload),
  );
  const unsigned = `${header}.${payload}`;
  return `${unsigned}.${sign(unsigned)}`;
}

export function verifySessionToken(token?: string | null): SessionPayload | null {
  if (!token) return null;
  const parts = token.split(".");
  if (parts.length !== 3) return null;

  const [header, payload, signature] = parts;
  const unsigned = `${header}.${payload}`;

  try {
    if (!safeEqual(signature, sign(unsigned))) return null;
    const decoded = JSON.parse(base64UrlDecode(payload)) as SessionPayload;
    if (!decoded.userId || !decoded.exp || decoded.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }
    return decoded;
  } catch {
    return null;
  }
}

export function getSessionCookieOptions(maxAge = SESSION_MAX_AGE_SECONDS) {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge,
  };
}

export function createOAuthState() {
  return randomBytes(24).toString("base64url");
}

export function sanitizeNextPath(value?: string | null) {
  if (!value) return "/auth/after-login";
  if (!value.startsWith("/") || value.startsWith("//")) return "/auth/after-login";
  if (value.startsWith("/api/")) return "/auth/after-login";
  return value;
}

export async function getCurrentSessionPayload() {
  const cookieStore = await cookies();
  const token = cookieStore.get(MOMTOOLS_SESSION_COOKIE)?.value;
  return verifySessionToken(token);
}

export async function getCurrentUser() {
  const session = await getCurrentSessionPayload();
  if (!session) return null;

  const user = await prisma.user.findFirst({
    where: { id: session.userId, deletedAt: null },
    include: {
      accounts: true,
    },
  });

  if (!user) return null;

  const children = await getAccessibleChildren(user.id);
  return { ...user, children };
}

export const oauthCookies = {
  state: STATE_COOKIE,
  next: NEXT_COOKIE,
  maxAge: OAUTH_COOKIE_MAX_AGE_SECONDS,
};
