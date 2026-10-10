const routePairs = [
  ["/", "/en"],
  ["/tools", "/en/cal"],
  ["/tools/due-date", "/en/cal/due-date"],
  ["/tools/baby-age", "/en/cal/baby-age"],
  ["/tools/vaccine-schedule", "/en/cal/vaccine-schedule"],
  ["/tools/weaning-start", "/en/cal/weaning-start"],
  ["/tools/growth-percentile", "/en/cal/growth-percentile"],
  ["/info", "/en/info"],
  ["/info/pregnancy", "/en/info/pregnancy"],
  ["/info/newborn", "/en/info/newborn"],
  ["/info/weaning", "/en/info/weaning"],
  ["/info/toddler", "/en/info/toddler"],
  ["/qna", "/en/qna"],
  ["/qna/health", "/en/qna/health"],
  ["/qna/growth", "/en/qna/growth"],
  ["/qna/behavior", "/en/qna/behavior"],
  ["/checklists", "/en/checklists"],
  ["/checklists/birth", "/en/checklists/birth"],
  ["/checklists/newborn", "/en/checklists/newborn"],
  ["/checklists/weaning", "/en/checklists/weaning"],
  ["/checklists/daycare", "/en/checklists/daycare"],
  ["/baby-food", "/en/baby-food"],
  ["/baby-food/early", "/en/baby-food/early"],
  ["/baby-food/middle", "/en/baby-food/middle"],
  ["/baby-food/late", "/en/baby-food/late"],
  ["/about", "/en/about"],
  ["/faq", "/en/faq"],
  ["/contact", "/en/contact"],
  ["/privacy", "/en/privacy"],
  ["/terms", "/en/terms"],
] as const;

function normalizePath(pathname: string) {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

export function getLanguagePath(pathname: string, target: "ko" | "en") {
  const normalized = normalizePath(pathname);

  for (const [ko, en] of routePairs) {
    if (target === "en" && normalized === ko) return en;
    if (target === "ko" && normalized === en) return ko;
  }

  if (target === "en") {
    if (normalized.startsWith("/qna/")) return "/en/qna";
    if (normalized.startsWith("/checklists/")) return "/en/checklists";
    if (normalized.startsWith("/baby-food/")) return "/en/baby-food";
    return "/en";
  }

  if (normalized.startsWith("/en/qna/")) return "/qna";
  if (normalized.startsWith("/en/checklists/")) return "/checklists";
  if (normalized.startsWith("/en/baby-food/")) return "/baby-food";
  return "/";
}
