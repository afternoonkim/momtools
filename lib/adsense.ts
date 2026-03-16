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

export const AD_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "";

const placementSlotMap: Record<AdPlacement, string> = {
  default: process.env.NEXT_PUBLIC_ADSENSE_SLOT_DEFAULT ?? "0000000000",
  header:
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_HEADER ??
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_DEFAULT ??
    "0000000000",
  footer:
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_FOOTER ??
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_DEFAULT ??
    "0000000000",
  inline:
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_INLINE ??
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_DEFAULT ??
    "0000000000",
  sidebar:
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR ??
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_DEFAULT ??
    "0000000000",
  homeTop:
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME_TOP ??
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_HEADER ??
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_DEFAULT ??
    "0000000000",
  homeMiddle:
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME_MIDDLE ??
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_INLINE ??
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_DEFAULT ??
    "0000000000",
  homeBottom:
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME_BOTTOM ??
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_FOOTER ??
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_DEFAULT ??
    "0000000000",
  calculatorTop:
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_CALC_TOP ??
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_HEADER ??
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_DEFAULT ??
    "0000000000",
  calculatorInline:
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_CALC_INLINE ??
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_INLINE ??
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_DEFAULT ??
    "0000000000",
  calculatorBottom:
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_CALC_BOTTOM ??
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_FOOTER ??
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_DEFAULT ??
    "0000000000",
  contentInline:
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_CONTENT_INLINE ??
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_INLINE ??
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_DEFAULT ??
    "0000000000",
  legalInline:
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_LEGAL_INLINE ??
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_INLINE ??
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_DEFAULT ??
    "0000000000",
};

export function getAdSlot(placement: AdPlacement = "default") {
  return placementSlotMap[placement] || placementSlotMap.default;
}
