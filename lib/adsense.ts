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

export const AD_CLIENT = "";

export function getAdSlot(_placement: AdPlacement = "default") {
  return "";
}
