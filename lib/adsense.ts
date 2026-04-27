export type AdPlacement =
  | "default"
  | "header"
  | "footer"
  | "inline"
  | "sidebar"
  | "homeTop"
  | "homeMiddle"
  | "homeBottom"
  | "calculatorTop"
  | "calculatorInline"
  | "calculatorBottom"
  | "contentInline"
  | "legalInline";

export const AD_CLIENT = (process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "").trim();

const SLOT_ENV_KEYS: Record<AdPlacement, string> = {
  default: "NEXT_PUBLIC_ADSENSE_SLOT_DEFAULT",
  header: "NEXT_PUBLIC_ADSENSE_SLOT_HEADER",
  footer: "NEXT_PUBLIC_ADSENSE_SLOT_FOOTER",
  inline: "NEXT_PUBLIC_ADSENSE_SLOT_INLINE",
  sidebar: "NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR",
  homeTop: "NEXT_PUBLIC_ADSENSE_SLOT_HOME_TOP",
  homeMiddle: "NEXT_PUBLIC_ADSENSE_SLOT_HOME_MIDDLE",
  homeBottom: "NEXT_PUBLIC_ADSENSE_SLOT_HOME_BOTTOM",
  calculatorTop: "NEXT_PUBLIC_ADSENSE_SLOT_CALC_TOP",
  calculatorInline: "NEXT_PUBLIC_ADSENSE_SLOT_CALC_INLINE",
  calculatorBottom: "NEXT_PUBLIC_ADSENSE_SLOT_CALC_BOTTOM",
  contentInline: "NEXT_PUBLIC_ADSENSE_SLOT_CONTENT_INLINE",
  legalInline: "NEXT_PUBLIC_ADSENSE_SLOT_LEGAL_INLINE",
};

export function getAdSlot(placement: AdPlacement = "default"): string {
  const direct = process.env[SLOT_ENV_KEYS[placement]];
  if (direct && direct.trim().length > 0) return direct.trim();
  const fallback = process.env.NEXT_PUBLIC_ADSENSE_SLOT_DEFAULT;
  return fallback?.trim() ?? "";
}

export const ADSENSE_ENABLED = AD_CLIENT.length > 0 && getAdSlot("default").length > 0;
