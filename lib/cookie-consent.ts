export const MOMTOOLS_COOKIE_CONSENT_KEY = "momtools_cookie_consent_v1";
export const MOMTOOLS_COOKIE_CONSENT_EVENT = "momtools:cookie-consent";

export type MomtoolsCookieConsent = "accepted" | "rejected";

export function isMomtoolsCookieConsent(value: string | null): value is MomtoolsCookieConsent {
  return value === "accepted" || value === "rejected";
}
