/**
 * 함께 운영하는 자매 사이트(bluedino.kr / mega-calculators.com)의 메타 데이터를 한곳에서 관리합니다.
 *
 * 두 사이트 모두 같은 운영자가 직접 운영하는 신뢰할 수 있는 도메인이므로 외부 링크에 `nofollow`를 걸지 않습니다.
 *   - 한국어 경로(`/ko`)와 영어 경로(`/en`)가 분리된 mega-calculators는 사용자가 보는 페이지의 로케일과 같은 로케일로 직접 보냅니다.
 *   - SEO 관점에서 `rel="me"`는 동일 운영자의 사이트라는 신호를, `rel="external"`은 외부 사이트라는 표기를 남깁니다.
 *   - 모든 링크는 hreflang을 함께 적어 검색엔진이 언어 매칭을 쉽게 잡도록 도와줍니다.
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
          "환율, 대출, 적금, 단위 변환처럼 일상에서 자주 쓰는 계산기를 한곳에 모아 둔 사이트예요. 같은 운영자가 만들고 있어요.",
        cta: "다른 계산기 모아보기",
      },
      en: {
        label: "Mega Calculators · everyday calculators",
        blurb:
          "Currency, loan, savings, and unit conversion calculators in one place — built by the same maintainer behind MomTools English.",
        cta: "Open Mega Calculators",
      },
    },
  },
};

/**
 * 외부 자매 사이트로 향하는 anchor에 들어갈 공통 속성.
 * - 자매 사이트라 nofollow는 걸지 않음 (도메인 권위 공유 가능)
 * - rel="me external" 로 동일 운영자 + 외부 사이트 표시
 * - hreflang은 검색엔진의 언어 매칭에 도움
 */
export function getPartnerLinkProps(site: PartnerSite, viewerLocale: Locale) {
  return {
    href: site.url[viewerLocale],
    target: "_blank" as const,
    rel: "me external noopener",
    hrefLang: site.hreflang[viewerLocale],
  };
}
