import { enQnaEntries } from "@/data/en/qna100";

export type QnaCategory = "health" | "growth" | "behavior";

export interface QnaEntry {
  slug: string;
  question: string;
  topic: string;
  summary: string;
  answer: string[];
  checklist: string[];
  simpleAction?: string[];
  caution: string;
  keywords: string[];
}

export const qnaCategories = {
  health: "Baby health",
  growth: "Growth and milestones",
  behavior: "Behavior and routines",
} as const;

const topicToCategory = {
  Health: "health",
  Growth: "growth",
  Behavior: "behavior",
} as const;

function toEntry(item: (typeof enQnaEntries)[number]): QnaEntry {
  return {
    slug: item.slug,
    question: item.question,
    topic: item.topic,
    summary: item.summary,
    answer: item.answer,
    checklist: item.checklist,
    simpleAction: item.simpleAction,
    caution: item.caution,
    keywords: [item.question, item.topic, "MomTools parent Q&A"],
  };
}

export const qnaData: Record<QnaCategory, QnaEntry[]> = {
  health: enQnaEntries.filter((item) => topicToCategory[item.topic] === "health").map(toEntry),
  growth: enQnaEntries.filter((item) => topicToCategory[item.topic] === "growth").map(toEntry),
  behavior: enQnaEntries.filter((item) => topicToCategory[item.topic] === "behavior").map(toEntry),
};

export function getQnaEntries(category: QnaCategory) {
  return qnaData[category];
}

export function getQnaEntry(category: QnaCategory, slug: string) {
  return qnaData[category].find((item) => item.slug === slug);
}

export function getRelatedQna(category: QnaCategory, slug: string, count = 4) {
  return qnaData[category].filter((item) => item.slug !== slug).slice(0, count);
}
