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

const GLOBAL_ADFIT_EXCLUDED_PATH_PREFIXES = ["/en"] as const;

const GLOBAL_ADFIT_EXCLUDED_PATHS = new Set<string>([
  "/privacy",
  "/terms",
  "/contact",
] as const);

const GLOBAL_ADFIT_BOTTOM_EXCLUDED_PATHS = new Set<string>([
  "/",
] as const);

export function normalizeAdFitPathname(pathname: string) {
  return pathname.split("?")[0]?.replace(/\/$/, "") || "/";
}

export function shouldShowGlobalAdFitAd(
  pathname: string,
  position: GlobalAdFitPosition = "bottom",
) {
  const normalizedPathname = normalizeAdFitPathname(pathname);

  if (GLOBAL_ADFIT_EXCLUDED_PATHS.has(normalizedPathname)) return false;

  if (GLOBAL_ADFIT_EXCLUDED_PATH_PREFIXES.some((prefix) =>
    normalizedPathname === prefix || normalizedPathname.startsWith(`${prefix}/`),
  )) {
    return false;
  }

  if (position === "bottom" && GLOBAL_ADFIT_BOTTOM_EXCLUDED_PATHS.has(normalizedPathname)) {
    return false;
  }

  return true;
}
