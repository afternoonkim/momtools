export type BabyProductCategory = "stroller" | "feeding" | "toy" | "potty" | "bath" | "weaning";

export type BabyProductKind = string;

export type BabyProductQna = {
  slug: string;
  category: BabyProductCategory;
  kind: BabyProductKind;
  productName: string;
  shortName: string;
  brand?: string;
  question: string;
  title: string;
  description: string;
  summary: string;
  answer: string[];
  productFacts: Array<{ label: string; value: string; note?: string }>;
  goodFor: string[];
  checkPoints: string[];
  beforeBuy: string[];
  caution: string[];
  compareWith: string;
  sourceUrl: string;
  partnerUrl: string;
  coupangIframeHtml: string;
  keywords: string[];
  updatedAt: string;
};

export const COUPANG_PARTNERS_DISCLOSURE =
  "이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.";

export const babyProductCategories: Record<
  BabyProductCategory,
  { label: string; shortLabel: string; description: string; keywords: string[] }
> = {
  stroller: {
    label: "유모차·외출용품 Q&A",
    shortLabel: "유모차·외출",
    description: "휴대용 유모차, 절충형 유모차, 쌍둥이 유모차처럼 외출 방식에 따라 달라지는 선택 기준을 부모 입장에서 정리했습니다.",
    keywords: ["유모차", "휴대용 유모차", "절충형 유모차", "기내반입 유모차", "쌍둥이 유모차"],
  },
  feeding: {
    label: "수유용품 Q&A",
    shortLabel: "수유용품",
    description: "젖병, 빨대컵, 분유케이스, 보온병처럼 매일 쓰기 쉬운 수유·외출용품을 구매 전 확인 기준으로 정리했습니다.",
    keywords: ["젖병", "PPSU 젖병", "유리젖병", "빨대컵", "분유케이스", "보온병"],
  },
  toy: {
    label: "장난감·발달용품 Q&A",
    shortLabel: "장난감·발달",
    description: "아이가 흥미를 보이는 장난감을 고르기 전 소리, 소재, 세척, 사용 시기를 함께 살펴볼 수 있게 정리했습니다.",
    keywords: ["아기 장난감", "발달완구", "멜로디 장난감", "촉감발달완구"],
  },
  potty: {
    label: "배변훈련용품 Q&A",
    shortLabel: "배변훈련",
    description: "유아변기, 변기커버, 디딤대처럼 배변훈련 시기에 고민되는 용품을 아이 성향과 집 구조 기준으로 정리했습니다.",
    keywords: ["유아변기", "변기커버", "배변훈련", "디딤대"],
  },
  bath: {
    label: "목욕·위생용품 Q&A",
    shortLabel: "목욕·위생",
    description: "아기비데, 목욕의자, 샤워핸들처럼 매일 쓰는 위생용품을 안전과 세척 편의 기준으로 정리했습니다.",
    keywords: ["아기비데", "유아목욕의자", "샤워핸들", "목욕용품"],
  },
  weaning: {
    label: "이유식용품 Q&A",
    shortLabel: "이유식용품",
    description: "이유식 스푼, 흡착식판, 보관용기, 냉동큐브처럼 이유식 준비와 자기주도 식사에 필요한 용품을 정리했습니다.",
    keywords: ["이유식용품", "이유식 스푼", "흡착식판", "이유식 보관용기", "이유식 큐브"],
  },
};

export const babyProductCategoryOptions = Object.entries(babyProductCategories).map(([value, item]) => ({
  value: value as BabyProductCategory,
  label: item.shortLabel,
}));

type BabyProductSeed = {
  id: number;
  productName: string;
  shortName: string;
  brand?: string;
  category: BabyProductCategory;
  kind: BabyProductKind;
  sourceUrl: string;
  partnerUrl: string;
  coupangIframeHtml: string;
};

const productSeeds: BabyProductSeed[] = [
{
  id: 1,
  productName: `요요3 프리미엄 휴대용 유모차`,
  shortName: `요요3 휴대용 유모차`,
  brand: `스토케`,
  category: "stroller" as const,
  kind: `프리미엄 휴대용 유모차`,
  sourceUrl: "https://www.coupang.com/vp/products/9506400515?itemId=28325924141",
  partnerUrl: "https://link.coupang.com/a/exUk3I",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBUMW" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 2,
  productName: `요요3 프리미엄 휴대용 유모차 봉쁘앙베이지`,
  shortName: `요요3 봉쁘앙베이지 유모차`,
  brand: `스토케`,
  category: "stroller" as const,
  kind: `프리미엄 휴대용 유모차`,
  sourceUrl: "https://www.coupang.com/vp/products/9506400665?itemId=28325924936",
  partnerUrl: "https://link.coupang.com/a/exUmx2",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBUO7" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 3,
  productName: `조이로 JR2 휴대용 초경량 기내반입 여행용 접이식 유모차`,
  shortName: `조이로 JR2 휴대용 유모차`,
  brand: `조이로`,
  category: "stroller" as const,
  kind: `여행용 휴대용 유모차`,
  sourceUrl: "https://www.coupang.com/vp/products/9269557342?itemId=27433095649",
  partnerUrl: "https://link.coupang.com/a/exUoBh",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBUTf" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 4,
  productName: `베이비조거 시티 투어2 더블 쌍둥이 유모차`,
  shortName: `베이비조거 시티 투어2 더블`,
  brand: `베이비조거`,
  category: "stroller" as const,
  kind: `쌍둥이 유모차`,
  sourceUrl: "https://www.coupang.com/vp/products/8798761433?itemId=25617880258",
  partnerUrl: "https://link.coupang.com/a/exUpw9",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBUUg" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 5,
  productName: `아시안핏 신생아 절충형 유모차 아기 유모차 어반라이더`,
  shortName: `어반라이더 신생아 절충형 유모차`,
  brand: `어반라이더`,
  category: "stroller" as const,
  kind: `신생아 절충형 유모차`,
  sourceUrl: "https://www.coupang.com/vp/products/8847884174?itemId=25791328463",
  partnerUrl: "https://link.coupang.com/a/exUr7J",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBUYE" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 6,
  productName: `르베르 S 유모카 유모차 휴대용 프리미엄`,
  shortName: `르베르 S 휴대용 유모차`,
  brand: `르베르`,
  category: "stroller" as const,
  kind: `휴대용 유모차`,
  sourceUrl: "https://www.coupang.com/vp/products/9397903413?itemId=27912822804",
  partnerUrl: "https://link.coupang.com/a/exUsPF",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBUZN" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 7,
  productName: `다이치 스무즈 절충형 유모차`,
  shortName: `다이치 스무즈 유모차`,
  brand: `다이치`,
  category: "stroller" as const,
  kind: `절충형 유모차`,
  sourceUrl: "https://www.coupang.com/vp/products/9136640843?itemId=26890691260",
  partnerUrl: "https://link.coupang.com/a/exUuoh",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBU2s" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 8,
  productName: `디프락스 유아용 젖병`,
  shortName: `디프락스 유아용 젖병`,
  brand: `디프락스`,
  category: "feeding" as const,
  kind: `젖병`,
  sourceUrl: "https://www.coupang.com/vp/products/7396410664?itemId=19133992945",
  partnerUrl: "https://link.coupang.com/a/exUvGf",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBU4v" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 9,
  productName: `유비맘 모유실감 PPSU 리틀포니 젖병 젖꼭지`,
  shortName: `유비맘 모유실감 PPSU 젖병`,
  brand: `유비맘`,
  category: "feeding" as const,
  kind: `젖병`,
  sourceUrl: "https://www.coupang.com/vp/products/9340140939?itemId=27698878240",
  partnerUrl: "https://link.coupang.com/a/exUwfJ",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBU5y" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 10,
  productName: `란시노 신생아 배앓이 유리젖병`,
  shortName: `란시노 배앓이 유리젖병`,
  brand: `란시노`,
  category: "feeding" as const,
  kind: `젖병`,
  sourceUrl: "https://www.coupang.com/vp/products/6673319515?itemId=25391854687",
  partnerUrl: "https://link.coupang.com/a/exUwN1",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBU6W" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 11,
  productName: `베베그로우 PPSU 노꼭지 젖병 트리플팩`,
  shortName: `베베그로우 PPSU 젖병`,
  brand: `베베그로우`,
  category: "feeding" as const,
  kind: `젖병`,
  sourceUrl: "https://www.coupang.com/vp/products/7733085866?itemId=20785004822",
  partnerUrl: "https://link.coupang.com/a/exUxv2",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBU8z" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 12,
  productName: `더블하트 모유실감 3세대 PPSU 젖병 트윈팩`,
  shortName: `더블하트 모유실감 PPSU 젖병`,
  brand: `더블하트`,
  category: "feeding" as const,
  kind: `젖병`,
  sourceUrl: "https://www.coupang.com/vp/products/8510763920?itemId=24635109273",
  partnerUrl: "https://link.coupang.com/a/exUymz",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBU98" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 13,
  productName: `더블하트 모유실감 3세대 PPSU 노꼭지 젖병 트윈팩`,
  shortName: `더블하트 노꼭지 PPSU 젖병`,
  brand: `더블하트`,
  category: "feeding" as const,
  kind: `젖병`,
  sourceUrl: "https://www.coupang.com/vp/products/9499511975?itemId=28122994306",
  partnerUrl: "https://link.coupang.com/a/exUzJW",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBVbu" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 14,
  productName: `아기와 놀아 주는 꼬꼬맘`,
  shortName: `꼬꼬맘 촉감발달완구`,
  brand: `꼬꼬맘`,
  category: "toy" as const,
  kind: `발달완구`,
  sourceUrl: "https://www.coupang.com/vp/products/5625236375?itemId=639254975",
  partnerUrl: "https://link.coupang.com/a/exUDcq",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBVgY" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 15,
  productName: `2세대 볼륨조절 가능 말하는 춤추는 선인장`,
  shortName: `말하는 춤추는 선인장 장난감`,
  brand: undefined,
  category: "toy" as const,
  kind: `멜로디 장난감`,
  sourceUrl: "https://www.coupang.com/vp/products/8452989007?itemId=20855158750",
  partnerUrl: "https://link.coupang.com/a/exUD7d",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBVia" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 16,
  productName: `릴라코 엉금엉금 기어가는 멜로디 거북이 장난감`,
  shortName: `릴라코 멜로디 거북이`,
  brand: `릴라코`,
  category: "toy" as const,
  kind: `멜로디 장난감`,
  sourceUrl: "https://www.coupang.com/vp/products/9499530073?itemId=28299393639",
  partnerUrl: "https://link.coupang.com/a/exUFR2",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBVkB" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 17,
  productName: `플레스타 휴대용 접이식 유아변기`,
  shortName: `플레스타 접이식 유아변기`,
  brand: `플레스타`,
  category: "potty" as const,
  kind: `유아변기`,
  sourceUrl: "https://www.coupang.com/vp/products/9357348520?itemId=27762370795",
  partnerUrl: "https://link.coupang.com/a/exUI69",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBVqn" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 18,
  productName: `더마더 핸들 유아변기커버 + 2단 디딤대 세트`,
  shortName: `더마더 유아변기커버 세트`,
  brand: `더마더`,
  category: "potty" as const,
  kind: `변기커버·디딤대`,
  sourceUrl: "https://www.coupang.com/vp/products/1366777506?itemId=2398925889",
  partnerUrl: "https://link.coupang.com/a/exUJxn",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBVqR" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 19,
  productName: `해피달링 세이프 아기비데 유아목욕의자`,
  shortName: `해피달링 세이프 아기비데`,
  brand: `해피달링`,
  category: "bath" as const,
  kind: `아기비데·목욕의자`,
  sourceUrl: "https://www.coupang.com/vp/products/8966213904?itemId=26239732665",
  partnerUrl: "https://link.coupang.com/a/exULOA",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBVuB" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 20,
  productName: `폴레드 허그베어 뉴본 아기비데 세면대형`,
  shortName: `폴레드 허그베어 뉴본 아기비데`,
  brand: `폴레드`,
  category: "bath" as const,
  kind: `아기비데`,
  sourceUrl: "https://www.coupang.com/vp/products/9117550452?itemId=26818657258",
  partnerUrl: "https://link.coupang.com/a/exUMh7",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBVvg" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 21,
  productName: `해피달링 세이프 아기 비데 그레이 + 각도조절 워터탭 세트`,
  shortName: `해피달링 아기 비데 워터탭 세트`,
  brand: `해피달링`,
  category: "bath" as const,
  kind: `아기비데·워터탭`,
  sourceUrl: "https://www.coupang.com/vp/products/7680056664?itemId=20510869973",
  partnerUrl: "https://link.coupang.com/a/exUO8y",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBVzc" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 22,
  productName: `프롬유 샤워핸들`,
  shortName: `프롬유 샤워핸들`,
  brand: `프롬유`,
  category: "bath" as const,
  kind: `샤워핸들`,
  sourceUrl: "https://www.coupang.com/vp/products/8750135730?itemId=24491249529",
  partnerUrl: "https://link.coupang.com/a/exUQha",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBVBO" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 23,
  productName: `폴레드 허그베어 샤워 목욕 핸들 기저귀갈이 아기비데`,
  shortName: `폴레드 허그베어 샤워핸들`,
  brand: `폴레드`,
  category: "bath" as const,
  kind: `샤워핸들·아기비데`,
  sourceUrl: "https://www.coupang.com/vp/products/9366379246?itemId=27794689397",
  partnerUrl: "https://link.coupang.com/a/exURl3",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBVEB" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 24,
  productName: `아가짱 샤워덕 조이 V2 목욕핸들`,
  shortName: `아가짱 샤워덕 조이 V2`,
  brand: `아가짱`,
  category: "bath" as const,
  kind: `목욕핸들`,
  sourceUrl: "https://www.coupang.com/vp/products/8376920933?itemId=24204425137",
  partnerUrl: "https://link.coupang.com/a/exURXz",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBVFK" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 25,
  productName: `허그아이 접이식 아기 살끼임방지 샤워 폴더 핸들`,
  shortName: `허그아이 접이식 샤워 폴더 핸들`,
  brand: `허그아이`,
  category: "bath" as const,
  kind: `접이식 목욕핸들`,
  sourceUrl: "https://www.coupang.com/vp/products/9081133965?itemId=26677992137",
  partnerUrl: "https://link.coupang.com/a/exUTx3",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBVIF" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 26,
  productName: `글라스락 스포티 핸들 텀블러 2p`,
  shortName: `글라스락 스포티 핸들 텀블러`,
  brand: `글라스락`,
  category: "feeding" as const,
  kind: `보온병·텀블러`,
  sourceUrl: "https://www.coupang.com/vp/products/9429836680?itemId=28035657616",
  partnerUrl: "https://link.coupang.com/a/exUWfC",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBVNn" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 27,
  productName: `릿첼 이지 드링킹컵`,
  shortName: `릿첼 이지 드링킹컵`,
  brand: `릿첼`,
  category: "feeding" as const,
  kind: `빨대컵`,
  sourceUrl: "https://www.coupang.com/vp/products/9414751336?itemId=27975371914",
  partnerUrl: "https://link.coupang.com/a/exUWM1",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBVOo" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 28,
  productName: `MOZ 스웨덴 텀블러 포스코 316 스텐 원터치 손잡이 보온보냉병`,
  shortName: `MOZ 스텐 원터치 보온보냉병`,
  brand: `MOZ`,
  category: "feeding" as const,
  kind: `보온병·텀블러`,
  sourceUrl: "https://www.coupang.com/vp/products/8758409240?itemId=24735732199",
  partnerUrl: "https://link.coupang.com/a/exUXtp",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBVP9" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 29,
  productName: `자기주도 휘어지는 이유식 중기 완료기 스푼 포크 세트`,
  shortName: `자기주도 이유식 스푼 포크 세트`,
  brand: undefined,
  category: "weaning" as const,
  kind: `이유식 스푼·포크`,
  sourceUrl: "https://www.coupang.com/vp/products/7814555368?itemId=21206678780",
  partnerUrl: "https://link.coupang.com/a/exUZdE",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBVTc" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 30,
  productName: `쁘띠누베 국내 제조 실리콘 이유식스푼`,
  shortName: `쁘띠누베 실리콘 이유식스푼`,
  brand: `쁘띠누베`,
  category: "weaning" as const,
  kind: `이유식 스푼`,
  sourceUrl: "https://www.coupang.com/vp/products/55502828?itemId=193095419",
  partnerUrl: "https://link.coupang.com/a/exU0vp",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBVVV" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 31,
  productName: `다온베이비랩 곰돌이 이유식 흡착볼`,
  shortName: `다온베이비랩 곰돌이 흡착볼`,
  brand: `다온베이비랩`,
  category: "weaning" as const,
  kind: `이유식 흡착볼`,
  sourceUrl: "https://www.coupang.com/vp/products/9399863243?itemId=27920103238",
  partnerUrl: "https://link.coupang.com/a/exU2sY",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBVZh" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 32,
  productName: `플라라 자기 주도 이유식 간식 래빗 실리콘 흡착 식판`,
  shortName: `플라라 래빗 실리콘 흡착 식판`,
  brand: `플라라`,
  category: "weaning" as const,
  kind: `이유식 흡착식판`,
  sourceUrl: "https://www.coupang.com/vp/products/9471891304?itemId=28193380902",
  partnerUrl: "https://link.coupang.com/a/exU2Yh",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBV0d" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 33,
  productName: `어텀31 유아 실리콘 식기 올인원 세트`,
  shortName: `어텀31 실리콘 식기 세트`,
  brand: `어텀31`,
  category: "weaning" as const,
  kind: `유아 식기세트`,
  sourceUrl: "https://www.coupang.com/vp/products/8581248924?itemId=24872974139",
  partnerUrl: "https://link.coupang.com/a/exU3T4",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBV1R" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 34,
  productName: `글라스락 베이비 곰돌이캡 이유식 보관용기 원형`,
  shortName: `글라스락 베이비 이유식 보관용기`,
  brand: `글라스락`,
  category: "weaning" as const,
  kind: `이유식 보관용기`,
  sourceUrl: "https://www.coupang.com/vp/products/9034803535?itemId=26504170286",
  partnerUrl: "https://link.coupang.com/a/exU4V1",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBV3h" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 35,
  productName: `퍼기 이유식 멀티 찜기`,
  shortName: `퍼기 이유식 멀티 찜기`,
  brand: `퍼기`,
  category: "weaning" as const,
  kind: `이유식 조리기`,
  sourceUrl: "https://www.coupang.com/vp/products/8589892312?itemId=21246717849",
  partnerUrl: "https://link.coupang.com/a/exU5uI",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBV34" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 36,
  productName: `도아미 분유케이스 분유보관통 저장통 3종 세트`,
  shortName: `도아미 분유케이스 3종 세트`,
  brand: `도아미`,
  category: "feeding" as const,
  kind: `분유케이스`,
  sourceUrl: "https://www.coupang.com/vp/products/9396055192?itemId=27905430615",
  partnerUrl: "https://link.coupang.com/a/exU6S2",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBV6q" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 37,
  productName: `퍼기 이중 밀폐 이유식 큐브 12구 세트`,
  shortName: `퍼기 이유식 큐브 12구`,
  brand: `퍼기`,
  category: "weaning" as const,
  kind: `이유식 냉동용기`,
  sourceUrl: "https://www.coupang.com/vp/products/9403279425?itemId=20806705243",
  partnerUrl: "https://link.coupang.com/a/exU8Dg",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBV85" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 38,
  productName: `아띠래빗 쏙쏙 실리콘 멀티큐브 12구 이유식냉동용기`,
  shortName: `아띠래빗 실리콘 멀티큐브`,
  brand: `아띠래빗`,
  category: "weaning" as const,
  kind: `이유식 냉동용기`,
  sourceUrl: "https://www.coupang.com/vp/products/8750533558?itemId=21352714201",
  partnerUrl: "https://link.coupang.com/a/exU9Dw",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBWaT" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 39,
  productName: `그로미미 PPSU 유아용 빨대컵 + 추빨대`,
  shortName: `그로미미 PPSU 빨대컵`,
  brand: `그로미미`,
  category: "feeding" as const,
  kind: `빨대컵`,
  sourceUrl: "https://www.coupang.com/vp/products/8790886536?itemId=25289311743",
  partnerUrl: "https://link.coupang.com/a/exVdC6",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBWid" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
},
{
  id: 40,
  productName: `아띠래빗 일회용 방수 턱받이`,
  shortName: `아띠래빗 일회용 방수 턱받이`,
  brand: `아띠래빗`,
  category: "weaning" as const,
  kind: `방수 턱받이`,
  sourceUrl: "https://www.coupang.com/vp/products/8589999357?itemId=18669340263",
  partnerUrl: "https://link.coupang.com/a/exVgKN",
  coupangIframeHtml: `<iframe src="https://coupa.ng/cmBWm3" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>`,
}
];

const UPDATED_AT = "2026-04-28";

function toSlug(seed: BabyProductSeed) {
  const productId = seed.sourceUrl.match(/products\/(\d+)/)?.[1] ?? String(seed.id);
  return `baby-product-${seed.category}-${productId}`;
}

function productNumber(seed: BabyProductSeed) {
  const productId = seed.sourceUrl.match(/products\/(\d+)/)?.[1];
  const itemId = seed.sourceUrl.match(/itemId=(\d+)/)?.[1];
  return productId && itemId ? `${productId} - ${itemId}` : "상품정보 URL에서 확인";
}

function categoryTone(category: BabyProductCategory) {
  switch (category) {
    case "stroller":
      return {
        situation: "외출 빈도, 차 트렁크 보관, 아이 월령, 접고 펴는 편의성",
        decision: "유모차는 가벼움만큼 승차감과 안전벨트, 등받이 각도, 보관 공간이 중요합니다.",
        compare: "휴대용은 이동성, 절충형은 안정감, 쌍둥이 유모차는 좌석 폭과 전체 무게를 중심으로 비교해 보세요.",
      };
    case "feeding":
      return {
        situation: "수유 방식, 세척 빈도, 열탕·소독 가능 여부, 외출 사용 여부",
        decision: "수유용품은 아이가 매일 입에 닿거나 물·분유를 담는 제품이 많아 소재와 세척 편의성을 먼저 확인하는 것이 좋습니다.",
        compare: "젖병은 소재와 젖꼭지 호환, 빨대컵은 세척 구조, 보온병은 보온·보냉과 무게를 중심으로 비교해 보세요.",
      };
    case "toy":
      return {
        situation: "아이 월령, 소리 크기, 세척 가능 여부, 입에 가져가는 시기",
        decision: "장난감은 흥미를 끄는 것도 중요하지만 아이가 안전하게 만지고 놀 수 있는지, 소리와 부품이 부담스럽지 않은지 확인해야 합니다.",
        compare: "멜로디 완구는 소리 조절과 내구성, 촉감 완구는 소재와 세척 편의성을 중심으로 비교해 보세요.",
      };
    case "potty":
      return {
        situation: "배변훈련 시작 시기, 아이 키와 앉는 자세, 화장실 공간, 미끄럼 방지",
        decision: "배변훈련용품은 아이가 무서워하지 않고 안정적으로 앉을 수 있는지가 가장 중요합니다.",
        compare: "유아변기는 독립 사용이 쉽고, 변기커버·디딤대 세트는 실제 변기 적응을 돕는 방향으로 비교해 보세요.",
      };
    case "bath":
      return {
        situation: "목욕시키는 보호자 자세, 세면대 사용 여부, 아이 몸무게, 세척과 건조 편의성",
        decision: "목욕·위생용품은 보호자 손목 부담을 줄이면서도 아이 몸을 안정적으로 받쳐주는 구조인지 확인해야 합니다.",
        compare: "아기비데는 사용 월령과 세면대 적합성, 샤워핸들은 접힘 구조와 미끄럼 방지, 목욕의자는 건조 편의성을 중심으로 보세요.",
      };
    case "weaning":
      return {
        situation: "이유식 단계, 자기주도 식사 여부, 냉동 보관 계획, 전자레인지·식기세척기 사용 여부",
        decision: "이유식용품은 예쁜 디자인보다 세척이 쉬운지, 아이가 잡기 편한지, 보관과 소분이 편한지가 실제 사용 만족도를 좌우합니다.",
        compare: "스푼은 입 크기와 소재, 흡착식판은 흡착력과 세척, 보관용기는 용량과 냉동·전자레인지 가능 여부를 중심으로 비교해 보세요.",
      };
  }
}

function makeQuestion(seed: BabyProductSeed) {
  if (seed.category === "stroller") return `${seed.shortName}는 우리 집 외출용으로 잘 맞을까요?`;
  if (seed.category === "feeding" && seed.kind.includes("젖병")) return `${seed.shortName}는 신생아 젖병으로 고르기 전에 무엇을 봐야 할까요?`;
  if (seed.category === "feeding" && seed.kind.includes("빨대컵")) return `${seed.shortName}는 빨대컵 연습용으로 괜찮을까요?`;
  if (seed.category === "feeding" && seed.kind.includes("분유")) return `${seed.shortName}는 외출할 때 꼭 필요할까요?`;
  if (seed.category === "feeding") return `${seed.shortName}는 아기 외출용으로 고르기 전에 무엇을 확인해야 할까요?`;
  if (seed.category === "toy") return `${seed.shortName}는 아기 장난감으로 사기 전에 무엇을 봐야 할까요?`;
  if (seed.category === "potty") return `${seed.shortName}는 배변훈련 시작할 때 도움이 될까요?`;
  if (seed.category === "bath") return `${seed.shortName}는 아기 목욕할 때 꼭 필요할까요?`;
  return `${seed.shortName}는 이유식 준비용품으로 어떤 점을 확인해야 할까요?`;
}

function makeTitle(seed: BabyProductSeed) {
  const question = makeQuestion(seed);
  if (seed.category === "stroller") return `${question} 구매 전 확인할 유모차 선택 기준`;
  if (seed.category === "feeding") return `${question} 수유용품 구매 전 체크포인트`;
  if (seed.category === "toy") return `${question} 월령과 안전 기준 정리`;
  if (seed.category === "potty") return `${question} 아이 성향별 배변훈련용품 체크`;
  if (seed.category === "bath") return `${question} 목욕·위생용품 구매 전 기준`;
  return `${question} 이유식 단계별 구매 전 체크`;
}

function makeSummary(seed: BabyProductSeed) {
  const tone = categoryTone(seed.category);
  return `${seed.shortName}를 바로 구매하기보다 우리 집의 ${tone.situation}을 먼저 확인하는 것이 좋습니다. ${tone.decision} 이 글에서는 상품정보 URL을 바탕으로 구매 전 확인할 점과 실제 생활에서 비교할 기준을 정리했습니다.`;
}

function makeAnswer(seed: BabyProductSeed) {
  const tone = categoryTone(seed.category);
  return [
    `${seed.productName}를 볼 때 가장 먼저 확인할 부분은 “우리 집에서 얼마나 자주, 어떤 상황에서 쓰게 될까?”입니다. 같은 ${seed.kind}라도 아이 월령, 생활 동선, 보관 공간에 따라 만족도가 달라질 수 있습니다.`,
    "상품정보 URL에서 표시되는 제품명과 구성은 구매 전 기준을 잡는 데 도움이 됩니다. 다만 가격, 재고, 색상, 옵션, 배송 조건은 수시로 바뀔 수 있으므로 최종 결정 전에는 판매처 상세페이지를 다시 확인하는 것이 안전합니다.",
    `${tone.compare} 처음 준비하는 부모라면 유명한 제품인지보다 관리가 쉬운지, 아이에게 맞는지, 우리 집 예산 안에서 오래 쓸 수 있는지를 함께 보세요.`,
  ];
}

function makeGoodFor(seed: BabyProductSeed) {
  switch (seed.category) {
    case "stroller":
      return [
        "아이와 외출하는 횟수가 늘어 유모차 사용 빈도가 높은 집",
        "차량 이동, 병원 방문, 쇼핑몰, 여행처럼 유모차를 접고 펴는 일이 많은 집",
        "기존 유모차의 무게나 보관이 부담스러워 다른 유형을 비교하는 부모",
        `${seed.kind}를 기준으로 우리 집 생활 동선에 맞는 제품을 찾는 부모`,
      ];
    case "feeding":
      return [
        "수유용품을 매일 쓰기 때문에 세척과 관리 편의성을 중요하게 보는 집",
        "외출할 때 분유, 물, 간식 준비를 조금 더 편하게 하고 싶은 부모",
        "아이 입에 닿는 용품이라 소재와 구조를 꼼꼼히 확인하고 싶은 부모",
        `${seed.kind}를 기존 제품과 비교해 추가 구매할지 고민하는 집`,
      ];
    case "toy":
      return [
        "소리와 움직임이 있는 장난감으로 아이의 흥미를 끌어주고 싶은 집",
        "월령에 맞는 발달완구를 찾지만 너무 복잡한 제품은 피하고 싶은 부모",
        "선물용 아기 장난감을 고르기 전 안전과 관리 기준을 확인하고 싶은 경우",
        "짧은 놀이 시간에도 아이가 반응하기 쉬운 장난감을 찾는 경우",
      ];
    case "potty":
      return [
        "배변훈련을 시작하면서 아이가 변기를 무서워하지 않게 도와주고 싶은 집",
        "화장실 공간에 맞는 유아변기나 변기커버를 비교하는 부모",
        "아이가 안정적으로 앉는 자세와 미끄럼 방지를 중요하게 보는 경우",
        "외출이나 이동 중 사용할 배변훈련용품을 함께 고민하는 집",
      ];
    case "bath":
      return [
        "목욕할 때 보호자 손목과 허리 부담을 줄이고 싶은 집",
        "신생아 또는 영아 목욕을 조금 더 안정적으로 도와줄 용품을 찾는 부모",
        "세면대, 욕실, 샤워 공간에 맞는 목욕용품을 비교하는 경우",
        "사용 후 물기 제거와 건조가 쉬운 제품을 중요하게 보는 집",
      ];
    case "weaning":
      return [
        "이유식을 시작하면서 스푼, 식판, 보관용기를 단계별로 준비하는 집",
        "자기주도 식사를 시도하며 아이가 잡기 편한 용품을 찾는 부모",
        "이유식을 소분·냉동·해동하며 보관 편의성을 중요하게 보는 경우",
        "세척이 쉽고 식사 후 정리가 덜 번거로운 이유식용품을 고르고 싶은 집",
      ];
  }
}

function makeCheckPoints(seed: BabyProductSeed) {
  const common = [
    "상품명, 옵션, 색상, 구성품이 내가 생각한 제품과 같은지 확인해 보세요.",
    "가격, 배송 예정일, 교환·반품 조건은 구매 직전 판매처 상세페이지에서 다시 확인해 보세요.",
  ];

  switch (seed.category) {
    case "stroller":
      return [
        "사용 가능 월령과 최대 허용 무게를 아이 상태에 맞게 확인해 보세요.",
        "접었을 때 크기가 현관, 차량 트렁크, 엘리베이터 동선에 맞는지 확인해 보세요.",
        "차양막, 안전벨트, 바퀴 움직임, 브레이크처럼 실제 외출에서 자주 쓰는 부분을 살펴보세요.",
        ...common,
      ];
    case "feeding":
      return [
        "소재가 아이 월령과 사용 목적에 맞는지 확인해 보세요.",
        "세척이 쉬운 구조인지, 분리되는 부품이 너무 많지 않은지 살펴보세요.",
        "열탕, 전자레인지, 식기세척기, 소독기 사용 가능 여부는 제품 상세 기준으로 확인해 보세요.",
        ...common,
      ];
    case "toy":
      return [
        "아이 월령에 맞는 장난감인지, 작은 부품이 쉽게 분리되지 않는지 확인해 보세요.",
        "소리 조절, 건전지 교체, 세척 가능 여부를 확인해 보세요.",
        "아이가 입에 넣는 시기라면 소재와 모서리, 마감 상태를 더 꼼꼼히 보세요.",
        ...common,
      ];
    case "potty":
      return [
        "아이 키와 앉는 자세에 맞는 높이인지 확인해 보세요.",
        "바닥 미끄럼 방지와 안정감, 청소 편의성을 살펴보세요.",
        "변기커버형이라면 집 변기 크기와 호환되는지 확인해 보세요.",
        ...common,
      ];
    case "bath":
      return [
        "사용 가능 월령과 체중 범위를 아이 상태에 맞게 확인해 보세요.",
        "보호자가 한 손으로 아이를 받치며 사용할 때 안정적인 구조인지 확인해 보세요.",
        "물기가 잘 빠지고 건조가 쉬운지, 욕실 공간에 보관하기 편한지 살펴보세요.",
        ...common,
      ];
    case "weaning":
      return [
        "이유식 초기, 중기, 후기, 완료기 중 어느 단계에 맞는지 확인해 보세요.",
        "전자레인지, 냉동, 열탕, 식기세척기 사용 가능 여부를 제품 상세 기준으로 확인해 보세요.",
        "아이가 잡기 쉬운 크기인지, 흡착이나 뚜껑 구조가 실제 식사 상황에 맞는지 살펴보세요.",
        ...common,
      ];
  }
}

function makeBeforeBuy(seed: BabyProductSeed) {
  return [
    `${seed.shortName}가 지금 꼭 필요한 품목인지, 이미 집에 있는 용품으로 대체할 수 있는지 먼저 생각해 보세요.`,
    "처음부터 여러 개를 사기보다 하나를 써보고 아이 반응과 관리 편의성을 확인하는 방식이 실패를 줄일 수 있습니다.",
    "후기를 볼 때는 좋은 후기만 보지 말고 세척, 무게, 내구성, 실제 크기처럼 생활에서 불편할 수 있는 내용을 함께 확인해 보세요.",
  ];
}

function makeCaution(seed: BabyProductSeed) {
  if (seed.category === "stroller") {
    return [
      "유모차는 안전과 직접 연결되는 제품이므로 사용 가능 월령, 안전벨트, 브레이크, 조립 상태를 반드시 확인해야 합니다.",
      "아이 체중이나 자세 안정성에 맞지 않으면 사용 시기를 늦추는 것이 좋습니다.",
      "항공기 반입, 차량 적재, A/S 조건은 상황에 따라 달라질 수 있으니 상세페이지와 판매처 안내를 확인하세요.",
    ];
  }
  if (seed.category === "feeding" || seed.category === "weaning") {
    return [
      "아이 입에 닿는 용품은 사용 전 세척과 소독 기준을 확인하고, 흠집이나 변색이 생기면 교체를 고려하세요.",
      "뜨거운 물, 분유, 이유식을 담는 제품은 내열 온도와 사용 방법을 상품 상세 기준으로 확인해야 합니다.",
      "아이가 직접 잡고 쓰는 제품은 사용 중 보호자가 가까이에서 확인하는 것이 안전합니다.",
    ];
  }
  if (seed.category === "bath") {
    return [
      "목욕용품은 미끄러짐 위험이 있어 사용 중 아이를 절대 혼자 두지 마세요.",
      "세면대나 욕조 크기와 맞지 않으면 오히려 불안정할 수 있으니 설치 공간을 먼저 확인하세요.",
      "사용 후 물기를 충분히 말려 위생적으로 보관하는 것이 좋습니다.",
    ];
  }
  if (seed.category === "potty") {
    return [
      "배변훈련은 아이마다 속도가 다르므로 용품을 샀다고 바로 적응해야 하는 것은 아닙니다.",
      "아이가 무서워하거나 거부하면 억지로 앉히기보다 시간을 두고 천천히 시도하세요.",
      "변기커버와 디딤대는 흔들림이 없는지 매번 확인하고 사용하세요.",
    ];
  }
  return [
    "소리 나는 장난감은 소리 크기가 아이에게 부담스럽지 않은지 확인하세요.",
    "작은 부품, 건전지 덮개, 모서리 마감 상태를 사용 전 확인하는 것이 좋습니다.",
    "아이 혼자 오래 가지고 놀게 하기보다 보호자가 가까이에서 반응을 함께 살펴보세요.",
  ];
}

function makeKeywords(seed: BabyProductSeed) {
  const category = babyProductCategories[seed.category];
  return Array.from(new Set([
    seed.shortName,
    seed.productName,
    seed.brand ?? "",
    seed.kind,
    `${seed.kind} 추천`,
    `${seed.kind} 구매 전 체크`,
    ...category.keywords,
  ].filter(Boolean))).slice(0, 10);
}

function makeDescription(seed: BabyProductSeed) {
  return `${seed.shortName} 구매 전 확인할 기준을 사용자 관점으로 정리했습니다. 상품정보 URL, 쿠팡파트너스 링크, 체크포인트, 주의사항을 함께 확인해 보세요.`;
}

function makeCompareWith(seed: BabyProductSeed) {
  return categoryTone(seed.category).compare;
}

function makeProductFacts(seed: BabyProductSeed) {
  return [
    { label: "상품정보 URL 기준 표시명", value: seed.productName },
    { label: "분류", value: `${babyProductCategories[seed.category].shortLabel} · ${seed.kind}` },
    ...(seed.brand ? [{ label: "브랜드", value: seed.brand }] : []),
    { label: "쿠팡상품번호", value: productNumber(seed), note: "상품정보 URL에서 확인되는 번호를 기준으로 정리했습니다." },
    { label: "확인할 부분", value: "가격, 재고, 색상, 옵션, 구성품, 배송, 교환·반품 조건", note: "이 항목들은 수시로 달라질 수 있어 구매 직전 상세페이지에서 다시 확인하는 것이 좋습니다." },
  ];
}

export const babyProductQnaItems: BabyProductQna[] = productSeeds.map((seed) => ({
  slug: toSlug(seed),
  category: seed.category,
  kind: seed.kind,
  productName: seed.productName,
  shortName: seed.shortName,
  brand: seed.brand,
  question: makeQuestion(seed),
  title: makeTitle(seed),
  description: makeDescription(seed),
  summary: makeSummary(seed),
  answer: makeAnswer(seed),
  productFacts: makeProductFacts(seed),
  goodFor: makeGoodFor(seed),
  checkPoints: makeCheckPoints(seed),
  beforeBuy: makeBeforeBuy(seed),
  caution: makeCaution(seed),
  compareWith: makeCompareWith(seed),
  sourceUrl: seed.sourceUrl,
  partnerUrl: seed.partnerUrl,
  coupangIframeHtml: seed.coupangIframeHtml,
  keywords: makeKeywords(seed),
  updatedAt: UPDATED_AT,
}));

export const babyProductKinds = Array.from(new Set(babyProductQnaItems.map((item) => item.kind)));

export function getBabyProductQnaItems(category?: BabyProductCategory) {
  if (!category) return babyProductQnaItems;
  return babyProductQnaItems.filter((item) => item.category === category);
}

export function getBabyProductQnaBySlug(slug: string) {
  const decoded = decodeURIComponent(slug);
  return babyProductQnaItems.find((item) => item.slug === slug || item.slug === decoded);
}

export function getRelatedBabyProductQna(current: BabyProductQna, limit = 4) {
  const sameCategory = babyProductQnaItems.filter((item) => item.slug !== current.slug && item.category === current.category);
  const sameKind = babyProductQnaItems.filter((item) => item.slug !== current.slug && item.kind === current.kind && item.category !== current.category);
  const others = babyProductQnaItems.filter((item) => item.slug !== current.slug && item.category !== current.category && item.kind !== current.kind);
  return [...sameCategory, ...sameKind, ...others].slice(0, limit);
}
