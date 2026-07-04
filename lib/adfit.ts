export const ADFIT_UNITS = {
  mobileSmall: {
    unit: "DAN-Ra251xHJjXQo5PJc",
    width: 320,
    height: 50,
  },
  contentMedium: {
    unit: "DAN-kfHuDXIFDqmExo8o",
    width: 300,
    height: 250,
  },
  mobileResult: {
    unit: "DAN-dEE6T8m6QcpHzO3V",
    width: 320,
    height: 100,
  },
} as const;

export type AdFitUnit = (typeof ADFIT_UNITS)[keyof typeof ADFIT_UNITS];
export type GlobalAdFitPosition = "top" | "bottom";

const GLOBAL_ADFIT_EXCLUDED_PATH_PREFIXES = [
  "/auth",
  "/child",
  "/en",
  "/content",
  "/db-check",
  "/development-check",
  "/family",
  "/my",
  "/tools",
  "/cal",
] as const;

const GLOBAL_ADFIT_EXCLUDED_PATHS = new Set<string>([
  "/",
  "/login",
  "/privacy",
  "/terms",
  "/contact",
] as const);

const GLOBAL_ADFIT_BOTTOM_EXCLUDED_PATHS = new Set<string>([
  "/",
] as const);

const GLOBAL_ADFIT_BOTTOM_INLINE_MOBILE_RESULT_PATTERNS = [
  /^\/qna\/[^/]+\/[^/]+$/,
  /^\/family-health-qna\/[^/]+\/[^/]+$/,
  /^\/checklists\/(birth|daycare|newborn|weaning)$/,
  /^\/policy\/birth-support-calculator(?:\/.*)?$/,
] as const;

export function normalizeAdFitPathname(pathname: string) {
  return pathname.split("?")[0]?.replace(/\/$/, "") || "/";
}

function isExcludedGlobalAdFitPath(pathname: string) {
  if (GLOBAL_ADFIT_EXCLUDED_PATHS.has(pathname)) return true;

  return GLOBAL_ADFIT_EXCLUDED_PATH_PREFIXES.some((prefix) =>
    pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

function hasInlineMobileResultAd(pathname: string) {
  return GLOBAL_ADFIT_BOTTOM_INLINE_MOBILE_RESULT_PATTERNS.some((pattern) =>
    pattern.test(pathname),
  );
}

export function shouldShowGlobalAdFitAd(
  pathname: string,
  position: GlobalAdFitPosition = "bottom",
) {
  const normalizedPathname = normalizeAdFitPathname(pathname);

  if (isExcludedGlobalAdFitPath(normalizedPathname)) return false;

  if (position === "bottom") {
    if (GLOBAL_ADFIT_BOTTOM_EXCLUDED_PATHS.has(normalizedPathname)) return false;
    if (hasInlineMobileResultAd(normalizedPathname)) return false;
  }

  return true;
}

export function getGlobalAdFitUnit(position: GlobalAdFitPosition): AdFitUnit {
  if (position === "top") return ADFIT_UNITS.mobileSmall;

  // 하단 전역 광고는 상단 광고와 다른 광고단위를 사용해서
  // 한 페이지 안에서 같은 data-ad-unit이 중복되지 않도록 한다.
  return ADFIT_UNITS.mobileResult;
}
