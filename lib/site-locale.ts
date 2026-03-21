export type SiteLocale = "ko" | "en";

export function getLocaleFromPath(path: string): SiteLocale {
  return path === "/en" || path.startsWith("/en/") ? "en" : "ko";
}

export function stripLocalePrefix(path: string): string {
  if (!path) return "/";
  if (path === "/en") return "/";
  return path.startsWith("/en/") ? path.replace(/^\/en/, "") || "/" : path;
}

export function withLocalePath(path: string, locale: SiteLocale): string {
  const normalized = stripLocalePrefix(path || "/");
  if (locale === "en") {
    return normalized === "/" ? "/en" : `/en${normalized}`;
  }
  return normalized;
}

export function toggleLocalePath(path: string): string {
  const locale = getLocaleFromPath(path);
  return withLocalePath(path, locale === "ko" ? "en" : "ko");
}
