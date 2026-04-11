import type { Metadata } from "next";
import Link from "next/link";
import VideosClient from "./VideosClient";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import { buildCanonical, getPageDates } from "@/lib/content-meta";

const pageDates = getPageDates("/content/youtube");

export const metadata: Metadata = {
  title: "추천 유튜브 | MomTools",
  description: "육아 주제를 영상으로 확인하고 싶을 때 참고할 수 있는 MomTools 추천 유튜브 연결 페이지입니다.",
  alternates: { canonical: buildCanonical("/content/youtube") },
  robots: { index: false, follow: true },
};

export default function VideosPage() {
  return (
    <div className="mt-page">
      <div className="mt-container">
        <VideosClient />
        <div className="mt-6">
          <ContentUpdateNote
            publishedOn={pageDates.published}
            updatedOn={pageDates.updated}
            note="추천 영상 페이지는 부모가 영상만 보고 판단하지 않도록, 계산기와 정보 페이지를 먼저 확인할 수 있는 안내 흐름을 함께 점검합니다."
          />
        </div>
      </div>
      <div className="mt-container">
        <section className="mt-card p-6 md:p-8">
          <span className="mt-badge">영상 참고 기준</span>
          <h2 className="mt-title-lg mt-4">영상은 이해를 돕는 보조 수단으로 활용해 주세요</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            <p>수유 자세, 이유식 준비, 생활 동선처럼 눈으로 보는 편이 이해하기 쉬운 주제는 영상이 도움이 될 수 있습니다. 하지만 건강, 접종, 성장 판단처럼 개별 상황에 따라 달라지는 내용은 영상만으로 결정하기보다 MomTools의 설명 페이지와 병원 안내를 함께 확인하는 편이 안전합니다.</p>
            <p>이 페이지는 부모가 필요한 영상을 빠르게 찾도록 돕는 보조 메뉴이며, 사이트의 핵심 정보는 계산기·정보 허브·Q&A 안에서 먼저 이해할 수 있게 구성하고 있습니다.</p>
          </div>
        </section>
        <br />
        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">먼저 확인하면 좋은 메뉴</div>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Link href="/info/newborn" className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"><div className="font-semibold text-slate-800">신생아 정보</div><div className="mt-2 text-sm leading-7 text-slate-500">기본 개념을 먼저 정리한 뒤 영상으로 보완하기 좋습니다.</div></Link>
            <Link href="/info/weaning" className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"><div className="font-semibold text-slate-800">이유식 정보</div><div className="mt-2 text-sm leading-7 text-slate-500">단계별 흐름을 먼저 이해한 뒤 준비 영상을 확인해 보세요.</div></Link>
            <Link href="/tools" className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"><div className="font-semibold text-slate-800">육아 계산기</div><div className="mt-2 text-sm leading-7 text-slate-500">월령과 시기를 먼저 확인하면 영상 선택이 쉬워집니다.</div></Link>
            <Link href="/faq" className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"><div className="font-semibold text-slate-800">FAQ</div><div className="mt-2 text-sm leading-7 text-slate-500">MomTools가 어떤 기준으로 정보를 정리하는지 다시 확인할 수 있어요.</div></Link>
          </div>
        </section>
      </div>
    </div>
  );
}
