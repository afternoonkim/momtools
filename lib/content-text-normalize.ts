const AUTO_TITLE_SUFFIX_PATTERNS = [
  /\s*답변\s*정리\s*/g,
  /\s*정리\s*답변\s*/g,
];

const AWKWARD_INTRO_PATTERNS = [
  /[^.!?\n。！？]*때문에\s*마음이\s*급해질\s*수\s*있지만[,，]?\s*/g,
  /이\s*질문은\s*보호자가\s*불안해지기\s*쉬운\s*상황입니다[.。]?\s*/g,
  /검색\s*사용자를\s*위한\s*추가\s*설명은[^.。!?！？]*(?:[.。!?！？]|$)\s*/g,
];

function normalizeSpacing(value: string) {
  return value
    .replace(/\s+([,.:;!?？])/g, "$1")
    .replace(/([|])\s*\|+/g, "$1")
    .replace(/\s{2,}/g, " ")
    .replace(/\s*\|\s*$/g, "")
    .replace(/^\s*\|\s*/g, "")
    .trim();
}

export function normalizeUserVisibleText(value: string | null | undefined) {
  if (!value) return value ?? "";

  let next = value;
  for (const pattern of AUTO_TITLE_SUFFIX_PATTERNS) {
    next = next.replace(pattern, " ");
  }
  for (const pattern of AWKWARD_INTRO_PATTERNS) {
    next = next.replace(pattern, "");
  }

  return normalizeSpacing(next);
}

export function normalizeQnaQuestion(value: string | null | undefined) {
  const normalized = normalizeUserVisibleText(value)
    .replace(/\s*\|.*$/g, "")
    .replace(/\s*\|\s*$/g, "")
    .trim();

  if (!normalized) return normalized;
  if (/[?？.!。]$/.test(normalized)) return normalized;

  const questionEnding = /(인가요|가요|나요|까요|하나요|되나요|있나요|없나요|맞나요|좋나요|필요할까요|봐야 하나요|무엇인가요|어떻게 하나요|어떻게 봐야 하나요)$/;
  return questionEnding.test(normalized) ? `${normalized}?` : normalized;
}

export function normalizeStringList(values: string[]) {
  return values.map((value) => normalizeUserVisibleText(value)).filter((value) => value.length > 0);
}

export function normalizeJsonText(value: unknown): unknown {
  if (typeof value === "string") return normalizeUserVisibleText(value);
  if (Array.isArray(value)) return value.map((item) => normalizeJsonText(item));
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, item]) => [key, normalizeJsonText(item)]),
    );
  }
  return value;
}
