import { NextResponse } from "next/server";

export const revalidate = 1800;

type CategoryMatch = {
  parentCategory: string;
  childCategory: string;
};

type BlogPost = {
  title: string;
  link: string;
  description: string;
  thumbnail: string | null;
  parentCategory: string;
  childCategory: string;
  pubDate: string;
  isoDate: string;
};

const MAX_ITEMS = 76;

const BLOG_CATEGORY_RULES: Array<{
  parent: string;
  children: Array<{
    label: string;
    keywords: string[];
  }>;
}> = [
  {
    parent: "일상",
    children: [
      {
        label: "일상",
        keywords: [
          "일상",
          "하루",
          "기록",
          "육아일기",
          "육아 일상",
          "브이로그",
          "소소한",
          "근황",
          "주말",
          "오늘의",
        ],
      },
    ],
  },
  {
    parent: "임신준비·임신생활",
    children: [
      {
        label: "임신준비",
        keywords: [
          "임신준비",
          "임신 준비",
          "배란",
          "배테기",
          "임테기",
          "가임기",
          "난임",
          "시험관",
          "인공수정",
          "엽산",
          "출산 예정일",
        ],
      },
      {
        label: "임신생활",
        keywords: [
          "임신",
          "임산부",
          "태아",
          "태동",
          "입덧",
          "산전검사",
          "임신 초기",
          "임신 중기",
          "임신 후기",
          "임산부 영양제",
          "주수",
        ],
      },
    ],
  },
  {
    parent: "출산·산후조리",
    children: [
      {
        label: "출산",
        keywords: [
          "출산",
          "분만",
          "제왕절개",
          "자연분만",
          "진통",
          "유도분만",
          "출산가방",
          "출산 준비",
          "입원 준비",
        ],
      },
      {
        label: "산후조리",
        keywords: [
          "산후조리",
          "조리원",
          "산후",
          "오로",
          "산후 회복",
          "산후도우미",
          "산욕기",
          "몸조리",
        ],
      },
    ],
  },
  {
    parent: "수유·이유식·육아식",
    children: [
      {
        label: "수유",
        keywords: [
          "수유",
          "모유",
          "분유",
          "혼합수유",
          "유축",
          "젖병",
          "수유텀",
          "트림",
          "수유량",
        ],
      },
      {
        label: "이유식",
        keywords: [
          "이유식",
          "초기 이유식",
          "중기 이유식",
          "후기 이유식",
          "완료기 이유식",
          "이유식 시작",
          "이유식 준비물",
          "이유식 식단",
        ],
      },
      {
        label: "육아식",
        keywords: [
          "육아식",
          "유아식",
          "아기 반찬",
          "아기 식단",
          "유아 반찬",
          "유아 식단",
          "아기밥",
          "아이 식판",
        ],
      },
    ],
  },
  {
    parent: "성장·발달·건강",
    children: [
      {
        label: "성장",
        keywords: [
          "성장",
          "키",
          "몸무게",
          "성장 백분위",
          "월령",
          "개월수",
          "발육",
        ],
      },
      {
        label: "발달",
        keywords: [
          "발달",
          "뒤집기",
          "배밀이",
          "기기",
          "앉기",
          "걷기",
          "말문",
          "언어발달",
          "인지발달",
          "감각놀이",
        ],
      },
      {
        label: "건강",
        keywords: [
          "건강",
          "예방접종",
          "열",
          "감기",
          "병원",
          "소아과",
          "알레르기",
          "변비",
          "설사",
          "수면",
          "배변",
        ],
      },
    ],
  },
  {
    parent: "육아템·생활노하우",
    children: [
      {
        label: "육아템",
        keywords: [
          "육아템",
          "육아용품",
          "기저귀",
          "물티슈",
          "젖병소독기",
          "유모차",
          "카시트",
          "아기침대",
          "쪽쪽이",
          "아기띠",
          "수유쿠션",
          "이유식 용기",
        ],
      },
      {
        label: "생활노하우",
        keywords: [
          "생활노하우",
          "육아꿀팁",
          "육아 팁",
          "정리",
          "청소",
          "수납",
          "루틴",
          "외출 준비",
          "등원 준비",
          "재우기",
          "잠투정",
        ],
      },
    ],
  },
  {
    parent: "지원금 라이프·워크맘라이프",
    children: [
      {
        label: "지원금 라이프",
        keywords: [
          "지원금",
          "육아지원금",
          "출산지원금",
          "부모급여",
          "아동수당",
          "첫만남이용권",
          "보육료",
          "양육수당",
          "정부지원",
          "복지",
          "혜택",
        ],
      },
      {
        label: "워크맘라이프",
        keywords: [
          "워크맘",
          "워킹맘",
          "복직",
          "육아휴직",
          "단축근무",
          "어린이집",
          "등원",
          "직장맘",
          "경력단절",
          "일과 육아",
        ],
      },
    ],
  },
];

function decodeXml(input: string) {
  return input
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");
}

function stripHtml(input: string) {
  return decodeXml(input)
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getTagValue(block: string, tagName: string) {
  const escaped = tagName.replace(":", "\\:");
  const match = block.match(new RegExp(`<${escaped}>([\\s\\S]*?)<\\/${escaped}>`, "i"));
  return match?.[1]?.trim() ?? "";
}

function getAttrValue(block: string, tagName: string, attrName: string) {
  const escaped = tagName.replace(":", "\\:");
  const match = block.match(
    new RegExp(`<${escaped}[^>]*\\s${attrName}=["']([^"']+)["'][^>]*\\/?>`, "i")
  );
  return match?.[1]?.trim() ?? "";
}

function normalizeThumbnailUrl(input: string | null) {
  if (!input) return null;

  let value = decodeXml(input).trim();
  if (!value) return null;

  if (value.startsWith("//")) {
    value = `https:${value}`;
  }

  if (value.startsWith("/")) {
    return null;
  }

  value = value.replace(/ /g, "%20");

  if (!/^https?:\/\//i.test(value)) {
    return null;
  }

  try {
    const url = new URL(value);
    return url.toString();
  } catch {
    return null;
  }
}

function extractFirstImage(block: string) {
  const candidates = [
    getAttrValue(block, "media:thumbnail", "url"),
    getAttrValue(block, "media:content", "url"),
    getAttrValue(block, "enclosure", "url"),
  ];

  const htmlSources = [
    ...Array.from(
      decodeXml(block).matchAll(
        /<img[^>]+(?:src|data-src|data-lazy-src|data-original)=["']([^"']+)["']/gi
      )
    ).map((match) => match[1]),
  ];

  const all = [...candidates, ...htmlSources];

  for (const candidate of all) {
    const normalized = normalizeThumbnailUrl(candidate ?? null);
    if (normalized) return normalized;
  }

  return null;
}

function guessHierarchicalCategory(title: string, description: string): CategoryMatch {
  const source = `${title} ${description}`.toLowerCase();

  for (const group of BLOG_CATEGORY_RULES) {
    for (const child of group.children) {
      const matched = child.keywords.some((keyword) =>
        source.includes(keyword.toLowerCase())
      );

      if (matched) {
        return {
          parentCategory: group.parent,
          childCategory: child.label,
        };
      }
    }
  }

  return {
    parentCategory: "일상",
    childCategory: "일상",
  };
}

function formatDate(input: string) {
  const date = new Date(input);

  if (Number.isNaN(date.getTime())) {
    return input;
  }

  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

function parseRss(xml: string): BlogPost[] {
  const itemBlocks = xml.match(/<item>[\s\S]*?<\/item>/gi) ?? [];

  return itemBlocks
    .map((block) => {
      const rawTitle = getTagValue(block, "title");
      const rawLink = getTagValue(block, "link");
      const rawDescription =
        getTagValue(block, "description") || getTagValue(block, "content:encoded");
      const rawPubDate = getTagValue(block, "pubDate");

      const title = stripHtml(rawTitle);
      const description = stripHtml(rawDescription).slice(0, 220);
      const thumbnail = extractFirstImage(block);
      const categoryInfo = guessHierarchicalCategory(title, description);
      const link = decodeXml(rawLink);

      const isoDate = (() => {
        const date = new Date(rawPubDate);
        return Number.isNaN(date.getTime()) ? "" : date.toISOString();
      })();

      return {
        title,
        link,
        description,
        thumbnail,
        parentCategory: categoryInfo.parentCategory,
        childCategory: categoryInfo.childCategory,
        pubDate: formatDate(rawPubDate),
        isoDate,
      };
    })
    .filter((item) => item.title && item.link)
    .sort((a, b) => {
      if (a.isoDate && b.isoDate) {
        return a.isoDate < b.isoDate ? 1 : -1;
      }
      return 0;
    });
}

export async function GET() {
  const rssUrl = process.env.NAVER_BLOG_RSS_URL;

  if (!rssUrl) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "NAVER_BLOG_RSS_URL 환경변수가 없습니다. 예: https://rss.blog.naver.com/블로그아이디.xml",
        items: [],
      },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(rssUrl, {
      headers: {
        Accept: "application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8",
        "User-Agent": "MomToolsBot/1.0 (+https://momtools.example)",
      },
      next: { revalidate },
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          ok: false,
          message: `RSS를 불러오지 못했습니다. status=${response.status}`,
          items: [],
        },
        { status: response.status }
      );
    }

    const xml = await response.text();
    const parsed = parseRss(xml);
    const items = parsed.slice(0, MAX_ITEMS);

    const fixedParentCategories = [
      "전체보기",
      "일상",
      "임신준비·임신생활",
      "출산·산후조리",
      "수유·이유식·육아식",
      "성장·발달·건강",
      "육아템·생활노하우",
      "지원금 라이프·워크맘라이프",
    ];

    const childCategoriesByParent = {
      일상: ["전체보기", "일상"],
      "임신준비·임신생활": ["전체보기", "임신준비", "임신생활"],
      "출산·산후조리": ["전체보기", "출산", "산후조리"],
      "수유·이유식·육아식": ["전체보기", "수유", "이유식", "육아식"],
      "성장·발달·건강": ["전체보기", "성장", "발달", "건강"],
      "육아템·생활노하우": ["전체보기", "육아템", "생활노하우"],
      "지원금 라이프·워크맘라이프": ["전체보기", "지원금 라이프", "워크맘라이프"],
    };

    return NextResponse.json({
      ok: true,
      items,
      parentCategories: fixedParentCategories,
      childCategoriesByParent,
      totalParsed: parsed.length,
      returnedCount: items.length,
      fetchedAt: new Date().toISOString(),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "알 수 없는 오류";
    return NextResponse.json(
      {
        ok: false,
        message,
        items: [],
      },
      { status: 500 }
    );
  }
}