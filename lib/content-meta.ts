export const SITE_BASE_URL = "https://momtools.kr";

export const SITE_DATES = {
  published: "2026-04-09",
  updated: "2026-04-28",
} as const;

export const PAGE_DATES = {
  "/": { published: "2026-04-09", updated: "2026-04-10" },
  "/about": { published: "2026-04-09", updated: "2026-04-10" },
  "/info": { published: "2026-04-10", updated: "2026-04-10" },
  "/tools/due-date": { published: "2026-04-10", updated: "2026-04-10" },
  "/tools/baby-age": { published: "2026-04-10", updated: "2026-04-10" },
  "/tools/vaccine-schedule": { published: "2026-04-10", updated: "2026-04-10" },
  "/tools/weaning-start": { published: "2026-04-10", updated: "2026-04-10" },
  "/tools/growth-percentile": { published: "2026-04-10", updated: "2026-04-10" },
  "/en/cal/due-date": { published: "2026-04-10", updated: "2026-04-10" },
  "/en/cal/baby-age": { published: "2026-04-10", updated: "2026-04-10" },
  "/en/cal/vaccine-schedule": { published: "2026-04-10", updated: "2026-04-10" },
  "/en/cal/weaning-start": { published: "2026-04-10", updated: "2026-04-10" },
  "/en/cal/growth-percentile": { published: "2026-04-10", updated: "2026-04-10" },
  "/content/blog": { published: "2026-04-09", updated: "2026-04-10" },
  "/content/youtube": { published: "2026-04-09", updated: "2026-04-10" },
  "/play": { published: "2026-04-09", updated: "2026-04-10" },
  "/family-health-qna": { published: "2026-04-27", updated: "2026-04-27" },
  "/policy/pregnancy-birth": { published: "2026-04-28", updated: "2026-04-28" },
  "/policy/childcare-benefit": { published: "2026-04-28", updated: "2026-04-28" },
  "/policy/work-parenting": { published: "2026-04-28", updated: "2026-04-28" },
  "/policy/care-education": { published: "2026-04-28", updated: "2026-04-28" },
  "/policy/health-medical": { published: "2026-04-28", updated: "2026-04-28" },
  "/policy/local-birth-grant": { published: "2026-04-28", updated: "2026-04-28" },
  "/tools/birth-support-calculator": { published: "2026-04-28", updated: "2026-04-28" },
  "/policy/birth-support-calculator": { published: "2026-04-28", updated: "2026-04-28" },
} as const satisfies Record<string, { published: string; updated: string }>;

export const HOME_CARD_UPDATED_LABEL = "2026.04 최신 검토";

export function buildCanonical(path: string) {
  if (!path.startsWith("/")) {
    return `${SITE_BASE_URL}/${path}`;
  }
  return `${SITE_BASE_URL}${path}`;
}

export function getPageDates(path: keyof typeof PAGE_DATES | string) {
  return PAGE_DATES[path as keyof typeof PAGE_DATES] ?? SITE_DATES;
}
