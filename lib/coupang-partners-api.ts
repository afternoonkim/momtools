import crypto from "crypto";

export type CoupangPartnersApiProduct = {
  productId: number | string;
  productName: string;
  productPrice: number | null;
  productImage: string | null;
  productUrl: string;
  isRocket: boolean;
  isFreeShipping: boolean;
  rank: number | null;
};

type CoupangPartnersSearchResponse = {
  rCode?: string;
  rMessage?: string;
  data?:
    | {
        productData?: UnknownCoupangProduct[];
      }
    | UnknownCoupangProduct[];
};

type UnknownCoupangProduct = Record<string, unknown>;

type CachedProducts = {
  expiresAt: number;
  products: CoupangPartnersApiProduct[];
};

type CoupangApiCacheGlobal = typeof globalThis & {
  __momtoolsCoupangApiCache?: Map<string, CachedProducts>;
};

const COUPANG_API_DOMAIN = "https://api-gateway.coupang.com";
const COUPANG_PRODUCT_SEARCH_PATH = "/v2/providers/affiliate_open_api/apis/openapi/products/search";
const COUPANG_API_CACHE_TTL_MS = 1000 * 60 * 60;
const COUPANG_API_TIMEOUT_MS = 4500;

const CATEGORY_SEARCH_KEYWORDS: Record<string, string> = {
  thermometer: "아기 체온계",
  "nasal-aspirator": "아기 콧물흡입기",
  humidifier: "아기방 가습기",
  stroller: "휴대용 유모차",
  "car-seat": "아기 카시트",
  "baby-carrier": "아기띠",
  "balance-bike": "유아 밸런스바이크",
  "baby-food-tool": "이유식 용기 스푼 세트",
  "baby-bottle": "아기 젖병",
  diaper: "아기 기저귀",
  "baby-wipes": "아기 물티슈",
  "newborn-item": "신생아 준비물",
  "daycare-item": "어린이집 준비물",
  "baby-bath": "아기 목욕용품",
  "baby-detergent": "아기 세제",
  "sleeping-item": "아기 수면조끼",
  "oral-care": "유아 칫솔 구강관리",
  "potty-training": "유아 배변훈련 변기",
  "safety-item": "아기 안전용품",
  "development-toy": "영유아 발달 장난감",
};

function getCache() {
  const cacheGlobal = globalThis as CoupangApiCacheGlobal;
  cacheGlobal.__momtoolsCoupangApiCache ??= new Map<string, CachedProducts>();
  return cacheGlobal.__momtoolsCoupangApiCache;
}

function getEnvValue(...names: string[]) {
  for (const name of names) {
    const value = process.env[name]?.trim();
    if (value) return value;
  }
  return "";
}

function getCoupangCredentials() {
  const accessKey = getEnvValue("COUPANG_PARTNERS_ACCESS_KEY", "COUPANG_ACCESS_KEY");
  const secretKey = getEnvValue("COUPANG_PARTNERS_SECRET_KEY", "COUPANG_SECRET_KEY");
  return { accessKey, secretKey };
}

function getCoupangSubId() {
  return getEnvValue("COUPANG_PARTNERS_SUB_ID", "COUPANG_SUB_ID");
}

export function isCoupangPartnersApiConfigured() {
  const { accessKey, secretKey } = getCoupangCredentials();
  return accessKey.length > 0 && secretKey.length > 0;
}

export function getCoupangSearchKeyword(categorySlug: string) {
  return CATEGORY_SEARCH_KEYWORDS[categorySlug] ?? categorySlug.replace(/-/g, " ");
}

function formatSignedDate(date = new Date()) {
  const year = String(date.getUTCFullYear()).slice(-2);
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  const hour = String(date.getUTCHours()).padStart(2, "0");
  const minute = String(date.getUTCMinutes()).padStart(2, "0");
  const second = String(date.getUTCSeconds()).padStart(2, "0");
  return `${year}${month}${day}T${hour}${minute}${second}Z`;
}

function generateCoupangAuthorization(method: "GET" | "POST", uri: string) {
  const { accessKey, secretKey } = getCoupangCredentials();
  const [path, query = ""] = uri.split("?");
  const signedDate = formatSignedDate();
  const message = `${signedDate}${method}${path}${query}`;
  const signature = crypto.createHmac("sha256", secretKey).update(message, "utf8").digest("hex");

  return `CEA algorithm=HmacSHA256, access-key=${accessKey}, signed-date=${signedDate}, signature=${signature}`;
}

function toStringValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function toNumberValue(value: unknown) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") {
    const parsed = Number(value.replace(/,/g, ""));
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}

function toBooleanValue(value: unknown) {
  if (typeof value === "boolean") return value;
  if (typeof value === "string") return value.toLowerCase() === "true" || value === "Y";
  return false;
}

function normalizeProduct(rawProduct: UnknownCoupangProduct, index: number): CoupangPartnersApiProduct | null {
  const productName = toStringValue(rawProduct.productName ?? rawProduct.name ?? rawProduct.title);
  const productUrl = toStringValue(rawProduct.productUrl ?? rawProduct.link ?? rawProduct.url);
  if (!productName || !productUrl) return null;

  const productId = rawProduct.productId ?? rawProduct.id ?? `${productName}-${index}`;
  const productPrice = toNumberValue(rawProduct.productPrice ?? rawProduct.price);
  const rank = toNumberValue(rawProduct.rank);

  return {
    productId: typeof productId === "number" || typeof productId === "string" ? productId : `${productName}-${index}`,
    productName,
    productPrice,
    productImage: toStringValue(rawProduct.productImage ?? rawProduct.image ?? rawProduct.imageUrl) || null,
    productUrl,
    isRocket: toBooleanValue(rawProduct.isRocket),
    isFreeShipping: toBooleanValue(rawProduct.isFreeShipping),
    rank,
  };
}

function extractProducts(payload: CoupangPartnersSearchResponse) {
  const rawProducts = Array.isArray(payload.data)
    ? payload.data
    : Array.isArray(payload.data?.productData)
      ? payload.data.productData
      : [];

  return rawProducts
    .map(normalizeProduct)
    .filter((product): product is CoupangPartnersApiProduct => Boolean(product));
}

function buildProductSearchUri(keyword: string, limit: number) {
  const params = new URLSearchParams();
  params.set("keyword", keyword);
  params.set("limit", String(Math.max(1, Math.min(limit, 10))));
  params.set("imageSize", "230x230");

  const subId = getCoupangSubId();
  if (subId) params.set("subId", subId);

  return `${COUPANG_PRODUCT_SEARCH_PATH}?${params.toString()}`;
}

export async function searchCoupangProductsByKeyword(keyword: string, limit = 3) {
  if (!isCoupangPartnersApiConfigured()) return [];

  const normalizedKeyword = keyword.trim();
  if (!normalizedKeyword) return [];

  const uri = buildProductSearchUri(normalizedKeyword, limit);
  const cacheKey = `search:${uri}`;
  const cache = getCache();
  const cached = cache.get(cacheKey);
  if (cached && cached.expiresAt > Date.now()) return cached.products;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), COUPANG_API_TIMEOUT_MS);

  try {
    const response = await fetch(`${COUPANG_API_DOMAIN}${uri}`, {
      method: "GET",
      headers: {
        Authorization: generateCoupangAuthorization("GET", uri),
        "Content-Type": "application/json;charset=UTF-8",
      },
      signal: controller.signal,
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("쿠팡 파트너스 API 상품 검색 실패", response.status, await response.text());
      return [];
    }

    const payload = (await response.json()) as CoupangPartnersSearchResponse;
    if (payload.rCode && payload.rCode !== "0") {
      console.error("쿠팡 파트너스 API 상품 검색 오류", payload.rCode, payload.rMessage);
      return [];
    }

    const products = extractProducts(payload).slice(0, limit);
    cache.set(cacheKey, { products, expiresAt: Date.now() + COUPANG_API_CACHE_TTL_MS });
    return products;
  } catch (error) {
    if ((error as { name?: string }).name !== "AbortError") {
      console.error("쿠팡 파트너스 API 상품 검색 예외", error);
    }
    return [];
  } finally {
    clearTimeout(timer);
  }
}
