export type CoupangPartnersBannerKind = "category" | "dynamic";

export type CoupangPartnersBannerConfig = {
  kind: CoupangPartnersBannerKind;
  label: string;
  html: string;
  width: number;
  height: number;
};

const COUPANG_PARTNERS_BANNER_SIZE = {
  width: 320,
  height: 100,
} as const;

export const COUPANG_PARTNERS = {
  enabled: process.env.NEXT_PUBLIC_COUPANG_PARTNERS_ENABLED === "true",
  categoryBannerHtml:
    process.env.NEXT_PUBLIC_COUPANG_PARTNERS_CATEGORY_BANNER_HTML?.trim() ?? "",
  dynamicBannerHtml:
    process.env.NEXT_PUBLIC_COUPANG_PARTNERS_DYNAMIC_BANNER_HTML?.trim() ?? "",
  categoryBanner: {
    ...COUPANG_PARTNERS_BANNER_SIZE,
    label: "로켓 출산/유아동",
  },
  dynamicBanner: {
    ...COUPANG_PARTNERS_BANNER_SIZE,
    label: "육아용품 추천 배너",
  },
} as const;

export const COUPANG_PARTNERS_DISCLOSURE =
  "이 게시물은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.";

const GLOBAL_COUPANG_EXCLUDED_PATH_PREFIXES = [
  "/cal",
  "/content",
  "/db-check",
  "/en",
  "/tools",
] as const;

const GLOBAL_COUPANG_EXCLUDED_PATHS = new Set<string>([
  "/about",
  "/contact",
  "/faq",
  "/privacy",
  "/search",
  "/terms",
] as const);

const GLOBAL_COUPANG_EXCLUDED_PATH_PATTERNS = [
  /^\/policy\/birth-support-calculator(?:\/.*)?$/,
] as const;

export function normalizeCoupangPathname(pathname: string) {
  return pathname.split("?")[0]?.replace(/\/$/, "") || "/";
}

export function shouldShowGlobalCoupangPartnersAd(pathname: string) {
  const normalizedPathname = normalizeCoupangPathname(pathname);

  if (GLOBAL_COUPANG_EXCLUDED_PATHS.has(normalizedPathname)) return false;

  if (
    GLOBAL_COUPANG_EXCLUDED_PATH_PREFIXES.some(
      (prefix) => normalizedPathname === prefix || normalizedPathname.startsWith(`${prefix}/`),
    )
  ) {
    return false;
  }

  return !GLOBAL_COUPANG_EXCLUDED_PATH_PATTERNS.some((pattern) =>
    pattern.test(normalizedPathname),
  );
}

export function getGlobalCoupangPartnerBanners(): CoupangPartnersBannerConfig[] {
  if (!COUPANG_PARTNERS.enabled) return [];

  return [
    {
      kind: "category" as const,
      label: COUPANG_PARTNERS.categoryBanner.label,
      html: COUPANG_PARTNERS.categoryBannerHtml,
      width: COUPANG_PARTNERS.categoryBanner.width,
      height: COUPANG_PARTNERS.categoryBanner.height,
    },
    {
      kind: "dynamic" as const,
      label: COUPANG_PARTNERS.dynamicBanner.label,
      html: COUPANG_PARTNERS.dynamicBannerHtml,
      width: COUPANG_PARTNERS.dynamicBanner.width,
      height: COUPANG_PARTNERS.dynamicBanner.height,
    },
  ].filter((banner) => banner.html.length > 0);
}
