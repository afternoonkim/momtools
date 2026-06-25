export const ADFIT_UNITS = {
  mobileSmall: {
    unit: "DAN-Ra251xHJJXqo5PJc",
    width: 320,
    height: 50,
  },
  contentMedium: {
    unit: "DAN-kfHuDXIFDqmExo8o",
    width: 300,
    height: 250,
  },
  mobileResult: {
    unit: "DAN-dEE6T8m6QpHzO3V",
    width: 320,
    height: 100,
  },
} as const;

export type GlobalAdFitPosition = "top" | "bottom";

type AdFitRoutePolicy = {
  enabled: boolean;
  reason:
    | "global-adfit"
    | "inline-adfit"
    | "ad-free-page"
    | "temporary-language-page"
    | "debug-page"
    | "calculator-page"
    | "content-page";
};

const ADFIT_NEVER_SHOW_PATHS = new Set<string>([
  "/privacy",
  "/terms",
  "/contact",
] as const);

const ADFIT_NEVER_SHOW_PREFIXES = [
  "/en",
  "/db-check",
  "/api",
] as const;

const ADFIT_CALCULATOR_PREFIXES = [
  "/cal",
  "/tools",
  "/policy/birth-support-calculator",
] as const;

const ADFIT_CONTENT_PREFIXES = [
  "/content",
] as const;

const ADFIT_INLINE_EXACT_PATHS = new Set<string>([
  "/",
  "/baby-food",
  "/checklists/birth",
  "/checklists/daycare",
  "/checklists/newborn",
  "/checklists/weaning",
  "/info/childcare-portal",
  "/info/newborn",
  "/info/pregnancy",
  "/info/toddler",
  "/info/weaning",
  "/items/essential",
  "/monthly-guide",
  "/policy",
] as const);

function matchesPrefix(pathname: string, prefix: string) {
  return pathname === prefix || pathname.startsWith(`${prefix}/`);
}

function isQnaDetailPath(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  return parts.length >= 3 && parts[0] === "qna";
}

function isFamilyHealthQnaDetailPath(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  return parts.length >= 3 && parts[0] === "family-health-qna";
}

export function normalizeAdFitPathname(pathname: string) {
  return pathname.split("?")[0]?.replace(/\/$/, "") || "/";
}

export function getAdFitRoutePolicy(pathname: string): AdFitRoutePolicy {
  const normalizedPathname = normalizeAdFitPathname(pathname);

  if (ADFIT_NEVER_SHOW_PATHS.has(normalizedPathname)) {
    return { enabled: false, reason: "ad-free-page" };
  }

  if (ADFIT_NEVER_SHOW_PREFIXES.some((prefix) => matchesPrefix(normalizedPathname, prefix))) {
    if (matchesPrefix(normalizedPathname, "/en")) {
      return { enabled: false, reason: "temporary-language-page" };
    }

    if (matchesPrefix(normalizedPathname, "/db-check") || matchesPrefix(normalizedPathname, "/api")) {
      return { enabled: false, reason: "debug-page" };
    }
  }

  if (ADFIT_CALCULATOR_PREFIXES.some((prefix) => matchesPrefix(normalizedPathname, prefix))) {
    return { enabled: false, reason: "calculator-page" };
  }

  if (ADFIT_CONTENT_PREFIXES.some((prefix) => matchesPrefix(normalizedPathname, prefix))) {
    return { enabled: false, reason: "content-page" };
  }

  if (
    ADFIT_INLINE_EXACT_PATHS.has(normalizedPathname) ||
    isQnaDetailPath(normalizedPathname) ||
    isFamilyHealthQnaDetailPath(normalizedPathname)
  ) {
    return { enabled: false, reason: "inline-adfit" };
  }

  return { enabled: true, reason: "global-adfit" };
}

export function shouldShowGlobalAdFitAd(
  pathname: string,
  position: GlobalAdFitPosition = "bottom",
) {
  const policy = getAdFitRoutePolicy(pathname);
  if (!policy.enabled) return false;

  // 모바일 첫 화면을 광고가 과하게 밀어내지 않도록 상단 광고는 320x50 단위만 사용하고,
  // 하단 광고와 함께 노출되어도 페이지당 전역 광고는 최대 2개로 제한합니다.
  if (position === "top") return true;

  return true;
}
