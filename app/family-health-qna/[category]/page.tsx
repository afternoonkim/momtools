import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MedicalDisclaimer from "@/components/common/MedicalDisclaimer";
import {
  familyHealthCategories,
  getFamilyHealthEntries,
  type FamilyHealthQnaCategory,
} from "@/data/familyHealthQna";
import { buildCanonical } from "@/lib/content-meta";
import FamilyHealthCategorySearch from "./FamilyHealthCategorySearch";

type Params = { category: string };

const categoryTips: Record<FamilyHealthQnaCategory, { title: string; description: string }[]> = {
  mom: [
    { title: "내 몸도 기록하기", description: "아이 기록만큼 엄마의 수면, 통증, 식사, 감정 변화도 함께 적어두면 도움이 됩니다." },
    { title: "참는 시간 줄이기", description: "반복되는 통증이나 피로는 ‘엄마니까 참아야지’보다 원인을 확인하는 태도가 더 안전합니다." },
    { title: "도움 요청도 건강 관리", description: "쉬는 시간을 확보하는 것도 치료만큼 중요한 회복의 시작이 될 수 있습니다." },
  ],
  dad: [
    { title: "검진 수치와 생활 연결하기", description: "혈압, 혈당, 간 수치는 식사, 음주, 수면, 체중 변화와 함께 보면 더 이해하기 쉽습니다." },
    { title: "참고 넘기지 않기", description: "가슴 통증, 숨참, 실신 느낌처럼 급한 신호는 ‘괜찮겠지’ 하고 미루지 않는 것이 중요합니다." },
    { title: "가족과 같이 관리하기", description: "아빠 건강 관리는 개인 문제가 아니라 가족의 생활 리듬과도 연결됩니다." },
  ],
  postpartum: [
    { title: "회복 속도는 다를 수 있어요", description: "출산 방식, 수면, 수유, 출혈량에 따라 회복 흐름은 사람마다 달라집니다." },
    { title: "출혈·통증·기분 변화 확인", description: "오로, 상처, 통증, 우울감은 혼자 판단하기보다 기록하고 필요하면 상담하는 편이 안전합니다." },
    { title: "급한 신호는 바로 상담", description: "많은 출혈, 고열, 심한 우울감, 숨참은 기다리지 말아야 할 신호일 수 있습니다." },
  ],
  family: [
    { title: "가족별 증상 시작일 보기", description: "감기나 장염처럼 함께 생기는 증상은 누가 언제 시작됐는지 정리하면 판단에 도움이 됩니다." },
    { title: "생활 환경도 함께 확인", description: "습도, 환기, 침구, 음식 보관 상태처럼 집안 환경이 증상에 영향을 줄 수 있습니다." },
    { title: "어린아이와 임산부는 더 조심", description: "같은 증상이라도 아이, 임산부, 고령자, 기저질환자는 더 빠른 상담이 필요할 수 있습니다." },
  ],
  medicine: [
    { title: "제품명보다 성분 보기", description: "감기약이나 진통제는 같은 성분이 겹칠 수 있어 제품명보다 성분 확인이 먼저입니다." },
    { title: "가족끼리 약 나누지 않기", description: "나이, 체중, 질환, 복용 중인 약이 다르면 같은 약도 안전하지 않을 수 있습니다." },
    { title: "헷갈리면 약국에 묻기", description: "복용 시간, 중복 성분, 보관 상태가 헷갈릴 때는 약사에게 확인하는 것이 가장 안전합니다." },
  ],
  checkup: [
    { title: "수치 하나만 보지 않기", description: "검진 결과는 이전 수치, 가족력, 생활 습관, 현재 증상과 함께 봐야 이해하기 쉽습니다." },
    { title: "결과지를 버리지 않기", description: "다음 검진이나 진료 때 이전 결과와 비교하면 변화 흐름을 확인하기 좋습니다." },
    { title: "재검 안내는 미루지 않기", description: "재검이나 정밀검사 안내가 있다면 스스로 판단하기보다 의료진과 확인하는 것이 좋습니다." },
  ],
};

export async function generateStaticParams() {
  return (Object.keys(familyHealthCategories) as FamilyHealthQnaCategory[]).map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { category } = await params;
  if (!(category in familyHealthCategories)) return {};
  const typed = category as FamilyHealthQnaCategory;
  const info = familyHealthCategories[typed];

  return {
    title: `${info.label} Q&A | 가족건강 질문 모음 | MomTools`,
    description: `${info.description} 집에서 먼저 확인할 점, 기록할 내용, 병원·약국 상담이 필요한 신호를 바로 확인할 수 있게 정리했습니다.`,
    keywords: [info.label, "가족건강 Q&A", "생활 건강", "건강 질문", ...getFamilyHealthEntries(typed).slice(0, 8).map((item) => item.topic)],
    alternates: { canonical: buildCanonical(`/family-health-qna/${typed}`) },
    openGraph: {
      title: `${info.label} Q&A | MomTools`,
      description: info.description,
      url: buildCanonical(`/family-health-qna/${typed}`),
      siteName: "MomTools",
      locale: "ko_KR",
      type: "website",
    },
  };
}

export default async function FamilyHealthCategoryPage({ params }: { params: Promise<Params> }) {
  const { category } = await params;
  if (!(category in familyHealthCategories)) notFound();
  const typed = category as FamilyHealthQnaCategory;
  const info = familyHealthCategories[typed];
  const entries = getFamilyHealthEntries(typed);
  const featuredEntries = entries.slice(0, 6);
  const searchableEntries = entries.map(({ slug, question, topic, summary, keywords }) => ({ slug, question, topic, summary, keywords }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${info.label} Q&A`,
    description: info.description,
    inLanguage: "ko-KR",
    url: buildCanonical(`/family-health-qna/${typed}`),
  };

  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-500" aria-label="breadcrumb">
          <Link href="/" className="hover:text-amber-700">홈</Link>
          <span>/</span>
          <span className="text-slate-700">{info.label}</span>
        </nav>

        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">{info.label}</span>
          <h1 className="mt-title-xl mt-5">{info.label} 질문을 상황별로 확인해 보세요</h1>
          <p className="mt-text-main mt-4 max-w-4xl">{info.heroLead}</p>
          <p className="mt-4 max-w-4xl text-sm leading-8 text-slate-600 md:text-base">{info.homeGuide}</p>
          <div className="mt-5 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800 inline-flex">
            {entries.length}개 질문
          </div>
        </section>

        <MedicalDisclaimer lang="ko" variant="compact" />

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">이 카테고리 활용법</div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {categoryTips[typed].map((tip) => (
              <article key={tip.title} className="rounded-3xl bg-white px-5 py-5 shadow-sm">
                <h2 className="text-base font-bold text-slate-800">{tip.title}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{tip.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-md">먼저 많이 찾는 질문</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">비슷한 상황을 빠르게 비교할 수 있도록 먼저 확인하기 좋은 질문을 모았습니다.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredEntries.map((item) => (
              <Link key={item.slug} href={`/family-health-qna/${typed}/${item.slug}`} className="rounded-[28px] border border-amber-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">{item.topic}</div>
                <h3 className="mt-3 text-lg font-bold text-slate-800">{item.question}</h3>
              </Link>
            ))}
          </div>
        </section>

        <FamilyHealthCategorySearch category={typed} entries={searchableEntries} />
      </div>
    </div>
  );
}
