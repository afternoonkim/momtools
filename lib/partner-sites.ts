/**
 * MomTools에서 함께 안내하는 관련 사이트 정보를 관리합니다.
 * 사용자가 보고 있는 언어와 맞는 경로로 연결합니다.
 */

export type Locale = "ko" | "en";

export interface PartnerSiteCopy {
  /** 사용자에게 보여줄 짧은 라벨 (예: "BlueDino 금융 정보") */
  label: string;
  /** 한 줄 설명 */
  blurb: string;
  /** 클릭 유도 마이크로카피 (예: "확인하러 가기 →") */
  cta: string;
}

export interface PartnerSite {
  /** 코드상 식별자 */
  id: "bluedino" | "mega-calculators";
  /** 외부 도메인 표기 (사용자에게 노출됨) */
  domain: string;
  /** 로케일별 URL */
  url: Record<Locale, string>;
  /** 로케일별 hreflang 코드 (예: "ko-KR" / "en-US") */
  hreflang: Record<Locale, string>;
  /** 로케일별 카피 */
  copy: Record<Locale, PartnerSiteCopy>;
}

export const PARTNER_SITES: Record<"bluedino" | "megaCalculators", PartnerSite> = {
  bluedino: {
    id: "bluedino",
    domain: "bluedino.kr",
    url: {
      ko: "https://bluedino.kr",
      en: "https://bluedino.kr",
    },
    hreflang: {
      ko: "ko-KR",
      en: "ko-KR",
    },
    copy: {
      ko: {
        label: "BlueDino 금융·재테크 가이드",
        blurb:
          "출산 후 가계 운용, 자녀 적금, 청약, 세액공제처럼 육아와 함께 챙겨야 할 돈 흐름을 다루는 사이트예요.",
        cta: "BlueDino에서 가계 계획 보기",
      },
      en: {
        label: "BlueDino financial guides (Korean)",
        blurb:
          "If you're navigating Korean family finance — household budgeting, savings for kids, tax credits — BlueDino covers it.",
        cta: "Open BlueDino (Korean finance site)",
      },
    },
  },
  megaCalculators: {
    id: "mega-calculators",
    domain: "mega-calculators.com",
    url: {
      ko: "https://mega-calculators.com/ko",
      en: "https://mega-calculators.com/en",
    },
    hreflang: {
      ko: "ko-KR",
      en: "en-US",
    },
    copy: {
      ko: {
        label: "Mega Calculators · 더 많은 계산기",
        blurb:
          "환율, 대출, 적금, 단위 변환처럼 일상에서 자주 쓰는 계산기를 한곳에 모아 둔 관련 사이트예요.",
        cta: "다른 계산기 모아보기",
      },
      en: {
        label: "Mega Calculators · everyday calculators",
        blurb:
          "Currency, loan, savings, and unit conversion calculators in one related hub for everyday household numbers.",
        cta: "Open Mega Calculators",
      },
    },
  },
};

/**
 * 관련 외부 사이트로 향하는 anchor에 들어갈 공통 속성입니다.
 */
export function getPartnerLinkProps(site: PartnerSite, viewerLocale: Locale) {
  return {
    href: site.url[viewerLocale],
    target: "_blank" as const,
    rel: "me external noopener",
    hrefLang: site.hreflang[viewerLocale],
  };
}
