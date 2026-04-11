import playItemsJson from "./play-items.json";

export type PlayLocale = "ko" | "en";
export type PlayCategory = "coloring" | "maze" | "hidden-picture" | "dot-to-dot";
export type LocalizedText = { ko: string; en: string };
export type PlayDownloadKind = "pdf" | "jpg" | "png" | "zip";

export type PlayDownloadFile = {
  kind: PlayDownloadKind;
  href: string;
  label: LocalizedText;
  formatLabel: string;
  sizeLabel?: LocalizedText;
  isPrimary?: boolean;
};

export type PlayAssetSet = {
  status: "ready" | "coming-soon";
  previewImage?: string;
  thumbnailImage?: string;
  downloads: PlayDownloadFile[];
  pageCount?: number;
  orientation?: LocalizedText;
  printTip?: LocalizedText;
};

export type PlayItemBase = {
  slug: string;
  category: PlayCategory;
  ageRange: LocalizedText;
  difficulty: LocalizedText;
  playTime: LocalizedText;
  keywords: string[];
  color: string;
  emoji: string;
  title: LocalizedText;
  summary: LocalizedText;
  intro: LocalizedText;
  skills: LocalizedText[];
  useTip: LocalizedText;
  relatedInfoHref?: { ko: string; en: string };
  relatedInfoLabel?: LocalizedText;
};

export type PlayItem = PlayItemBase & { assets: PlayAssetSet };

export const playCategories: Array<{
  slug: PlayCategory;
  name: LocalizedText;
  description: LocalizedText;
  searchLabel: LocalizedText;
}> = [
  {
    slug: "coloring",
    name: { ko: "색칠공부", en: "Coloring Pages" },
    description: {
      ko: "동물, 탈것, 계절 주제처럼 아이가 편하게 시작하기 좋은 색칠놀이 도안을 모아볼 수 있어요.",
      en: "Browse easy coloring printables built around animals, vehicles, seasons, and other familiar topics.",
    },
    searchLabel: { ko: "색칠공부 도안", en: "coloring pages" },
  },
  {
    slug: "maze",
    name: { ko: "미로찾기", en: "Mazes" },
    description: {
      ko: "쉬운 길 찾기부터 조금 더 복잡한 미로까지 난이도별로 고를 수 있어요.",
      en: "Choose from simple path-tracing mazes to slightly more challenging printable mazes by level.",
    },
    searchLabel: { ko: "미로찾기 프린트", en: "printable mazes" },
  },
  {
    slug: "hidden-picture",
    name: { ko: "숨은그림찾기", en: "Hidden Picture" },
    description: {
      ko: "집중력과 관찰력을 키우기 좋은 숨은그림찾기 자료를 주제별로 정리해둘 수 있어요.",
      en: "Find hidden picture printables that help build focus, visual scanning, and attention to detail.",
    },
    searchLabel: { ko: "숨은그림찾기 도안", en: "hidden picture printables" },
  },
  {
    slug: "dot-to-dot",
    name: { ko: "점잇기", en: "Dot to Dot" },
    description: {
      ko: "숫자 순서 따라가기와 손 조절 연습을 함께 할 수 있는 점잇기 놀이예요.",
      en: "Use dot-to-dot pages to practice number order, pencil control, and simple picture completion.",
    },
    searchLabel: { ko: "점잇기 도안", en: "dot to dot printables" },
  },
];

type RawPlayItem = PlayItemBase & { assets?: Partial<PlayAssetSet> };
const rawPlayItems = playItemsJson as RawPlayItem[];

const CATEGORY_DEFAULTS: Record<PlayCategory, Pick<PlayItemBase, "relatedInfoHref" | "relatedInfoLabel">> = {
  coloring: {
    relatedInfoHref: { ko: "/info/toddler", en: "/en/info/toddler" },
    relatedInfoLabel: { ko: "유아 정보", en: "Toddler guide" },
  },
  maze: {
    relatedInfoHref: { ko: "/qna/growth", en: "/en/qna/growth" },
    relatedInfoLabel: { ko: "성장 Q&A", en: "Growth Q&A" },
  },
  "hidden-picture": {
    relatedInfoHref: { ko: "/qna/behavior", en: "/en/qna/behavior" },
    relatedInfoLabel: { ko: "행동 Q&A", en: "Behavior Q&A" },
  },
  "dot-to-dot": {
    relatedInfoHref: { ko: "/info/toddler", en: "/en/info/toddler" },
    relatedInfoLabel: { ko: "유아 정보", en: "Toddler guide" },
  },
};

const READY_SLUGS = new Set<string>([]);

function defaultAssetStatus(slug: string): PlayAssetSet["status"] {
  return READY_SLUGS.has(slug) ? "ready" : "coming-soon";
}

function buildPlayAssets(item: PlayItemBase, rawAssets?: Partial<PlayAssetSet>): PlayAssetSet {
  const basePath = `/play-files/${item.category}/${item.slug}`;
  const status = rawAssets?.status ?? defaultAssetStatus(item.slug);

  return {
    status,
    previewImage: rawAssets?.previewImage ?? `${basePath}/preview.jpg`,
    thumbnailImage: rawAssets?.thumbnailImage ?? `${basePath}/thumb.jpg`,
    downloads:
      rawAssets?.downloads && rawAssets.downloads.length > 0
        ? rawAssets.downloads
        : [
            {
              kind: "pdf",
              href: `${basePath}/${item.slug}.pdf`,
              label: { ko: "PDF 도안 다운로드", en: "Download PDF printable" },
              formatLabel: "PDF",
              sizeLabel: { ko: "A4 인쇄용", en: "A4 printable" },
              isPrimary: true,
            },
            {
              kind: "jpg",
              href: `${basePath}/${item.slug}.jpg`,
              label: { ko: "이미지 파일 다운로드", en: "Download image file" },
              formatLabel: "JPG",
              sizeLabel: { ko: "미리보기/이미지용", en: "Preview image" },
            },
          ],
    pageCount: rawAssets?.pageCount ?? 1,
    orientation: rawAssets?.orientation ?? { ko: "세로형 A4", en: "Portrait A4" },
    printTip:
      rawAssets?.printTip ?? {
        ko: "일반 A4 용지에 100% 배율로 출력하면 집에서도 바로 사용하기 편해요.",
        en: "Print at 100% on standard A4 paper for an easy at-home printable setup.",
      },
  };
}

export const playItems: PlayItem[] = rawPlayItems.map(({ assets, relatedInfoHref, relatedInfoLabel, ...item }) => {
  const defaults = CATEGORY_DEFAULTS[item.category];
  const normalized: PlayItemBase = {
    ...item,
    relatedInfoHref: relatedInfoHref ?? defaults.relatedInfoHref,
    relatedInfoLabel: relatedInfoLabel ?? defaults.relatedInfoLabel,
  };

  return {
    ...normalized,
    assets: buildPlayAssets(normalized, assets),
  };
});

export function getPlayCategory(category: string) {
  return playCategories.find((item) => item.slug === category);
}

export function getPlayItemsByCategory(category: string) {
  return playItems.filter((item) => item.category === category);
}

export function getPlayItem(category: string, slug: string) {
  return playItems.find((item) => item.category === category && item.slug === slug);
}

export function getPlayRelatedItems(category: string, slug: string, limit = 3) {
  return playItems.filter((item) => item.category === category && item.slug !== slug).slice(0, limit);
}

export function getLocalizedPlayText(value: LocalizedText, locale: PlayLocale) {
  return value[locale];
}
