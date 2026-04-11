import type { Metadata } from "next";
import Link from "next/link";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import { buildCanonical, SITE_DATES } from "@/lib/content-meta";

export const metadata: Metadata = {
  title: "육아 정보 허브 | 임신 신생아 이유식 유아 가이드 | MomTools",
  description:
    "임신, 신생아, 이유식, 유아 시기의 핵심 흐름을 한곳에서 볼 수 있는 MomTools 육아 정보 허브입니다. 지금 시기에 맞는 가이드를 빠르게 찾고 다음에 이어서 볼 페이지까지 함께 확인해 보세요.",
  alternates: { canonical: buildCanonical("/info") },
  openGraph: {
    title: "육아 정보 허브 | MomTools",
    description: "임신부터 유아기까지 자주 찾는 육아 정보 흐름을 한곳에 정리했습니다.",
    url: buildCanonical("/info"),
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
};

const guides = [
  {
    href: "/info/pregnancy",
    title: "임신 정보",
    description: "주차별 체크포인트, 생활 습관, 출산 준비 흐름을 먼저 정리하고 싶을 때 보기 좋은 시작 가이드입니다.",
    links: [
      { href: "/tools/due-date", label: "출산 예정일 계산기" },
      { href: "/checklists/birth", label: "출산 준비 체크리스트" },
    ],
  },
  {
    href: "/info/newborn",
    title: "신생아 정보",
    description: "수유, 수면, 체온, 황달, 병원 상담 신호처럼 초보 부모가 가장 먼저 궁금해하는 내용을 모았습니다.",
    links: [
      { href: "/tools/baby-age", label: "아기 개월수 계산기" },
      { href: "/tools/vaccine-schedule", label: "예방접종 일정 계산기" },
    ],
  },
  {
    href: "/info/weaning",
    title: "이유식 정보",
    description: "언제 시작할지, 첫 재료는 무엇부터 볼지, 단계별로 어떻게 진행할지 흐름 중심으로 정리했습니다.",
    links: [
      { href: "/tools/weaning-start", label: "이유식 시작 계산기" },
      { href: "/baby-food", label: "이유식 레시피" },
    ],
  },
  {
    href: "/info/toddler",
    title: "유아 정보",
    description: "식사, 수면, 놀이, 생활 루틴처럼 유아기 일상에서 반복해서 보게 되는 주제를 편하게 살펴볼 수 있어요.",
    links: [
      { href: "/qna/behavior", label: "행동 Q&A" },
      { href: "/play", label: "놀이 자료" },
    ],
  },
];

const flow = [
  "임신 시기에는 예정일과 주수를 먼저 보고, 출산 준비 체크리스트로 실제 준비를 이어서 정리해 보세요.",
  "출산 직후에는 신생아 정보와 월령 계산기를 같이 보면 수유, 수면, 접종 흐름이 훨씬 잘 보입니다.",
  "개월 수가 지나 이유식 단계로 넘어가면 시작 시기 계산기와 단계별 레시피를 함께 보는 방식이 편합니다.",
  "유아기가 되면 Q&A와 놀이 자료를 같이 활용해 하루 루틴과 활동 아이디어를 연결해 보세요.",
];

export default function InfoHubPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">육아 정보 허브</span>
          <h1 className="mt-title-xl mt-5">지금 시기에 필요한 정보를 한 번에 찾을 수 있도록 묶었습니다</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            MomTools 정보 페이지는 임신, 신생아, 이유식, 유아처럼 부모가 실제로 겪는 시기 흐름에 맞춰 구성했습니다.
            한 페이지에서 끝나지 않고 다음에 궁금해질 계산기, 체크리스트, Q&A, 놀이 자료까지 함께 이어서 볼 수 있도록 정리했습니다.
          </p>
        </section>

        <ContentUpdateNote publishedOn={SITE_DATES.published} updatedOn={SITE_DATES.updated} />

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {guides.map((guide) => (
            <article key={guide.href} className="mt-card p-6 transition hover:-translate-y-0.5">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">가이드</div>
              <h2 className="mt-3 text-xl font-bold text-slate-900">{guide.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{guide.description}</p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
                {guide.links.map((link) => (
                  <Link key={link.href} href={link.href} className="rounded-full bg-amber-50 px-3 py-2 text-amber-700">
                    {link.label}
                  </Link>
                ))}
              </div>
              <Link href={guide.href} className="mt-5 inline-flex text-sm font-semibold text-slate-800">
                자세히 보기 →
              </Link>
            </article>
          ))}
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <h2 className="text-xl font-bold text-slate-900">정보 페이지를 이렇게 이어서 보면 편합니다</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                {flow.map((item) => (
                  <li key={item} className="rounded-2xl bg-white px-4 py-3 shadow-sm">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">빠른 이동</h2>
              <div className="mt-4 grid gap-3 text-sm">
                <Link href="/tools" className="mt-list-card">
                  <div className="font-semibold text-slate-800">육아 계산기 모음</div>
                  <div className="mt-2 text-slate-500">예정일, 개월수, 접종 일정, 이유식 시작, 성장 백분위를 한곳에서 볼 수 있어요.</div>
                </Link>
                <Link href="/qna" className="mt-list-card">
                  <div className="font-semibold text-slate-800">육아 Q&A</div>
                  <div className="mt-2 text-slate-500">건강, 성장, 행동 질문을 설명형 답변으로 이어서 확인할 수 있습니다.</div>
                </Link>
                <Link href="/checklists" className="mt-list-card">
                  <div className="font-semibold text-slate-800">체크리스트</div>
                  <div className="mt-2 text-slate-500">시기별로 준비해야 할 항목을 빠뜨리지 않게 정리해 보세요.</div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
