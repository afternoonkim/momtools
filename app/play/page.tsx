import type { Metadata } from "next";
import Link from "next/link";
import PlayHubView from "@/components/play/PlayHubView";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import { buildCanonical, getPageDates } from "@/lib/content-meta";

const pageDates = getPageDates("/play");

export const metadata: Metadata = {
  title: "놀이 자료 안내 | MomTools",
  description:
    "색칠공부, 미로찾기, 숨은그림찾기, 점잇기처럼 집에서 활용할 놀이 자료를 안내하는 MomTools 페이지입니다.",
  alternates: { canonical: buildCanonical("/play") },
  robots: { index: false, follow: true },
};

export default function PlayHomePage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">놀이 자료 안내</div>
          <h1 className="mt-title-lg mt-3">집에서 가볍게 활용할 놀이 자료를 준비하고 있습니다</h1>
          <p className="mt-text-main mt-3 max-w-4xl">
            MomTools 놀이 메뉴는 아이와 집에서 가볍게 활용할 수 있는 프린트형 놀이 자료를 정리하는 허브입니다.
            현재는 전체 자료를 단계적으로 연결하는 중이라, 놀이 아이디어를 먼저 훑어보고 관련 정보 페이지로 이어서 보는 용도로 활용하실 수 있습니다.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-5 shadow-sm"><div className="font-bold text-slate-800">주제별 정리</div><p className="mt-2 text-sm leading-7 text-slate-600">색칠공부, 미로찾기, 숨은그림찾기, 점잇기처럼 많이 찾는 주제를 기준으로 연결합니다.</p></div>
            <div className="rounded-3xl bg-white p-5 shadow-sm"><div className="font-bold text-slate-800">부모 중심 활용</div><p className="mt-2 text-sm leading-7 text-slate-600">아이 연령과 흥미에 맞게 보호자가 주제를 고를 수 있도록 정리합니다.</p></div>
            <div className="rounded-3xl bg-white p-5 shadow-sm"><div className="font-bold text-slate-800">현재 상태</div><p className="mt-2 text-sm leading-7 text-slate-600">다운로드 자료는 순차적으로 연결 중이며, 완성도 있는 자료부터 먼저 공개할 예정입니다.</p></div>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
            <Link href="/info/toddler" className="rounded-full bg-amber-50 px-4 py-2 text-amber-800">유아 정보</Link>
            <Link href="/qna/behavior" className="rounded-full bg-white px-4 py-2 text-slate-700 shadow-sm">행동 Q&A</Link>
            <Link href="/about" className="rounded-full bg-white px-4 py-2 text-slate-700 shadow-sm">사이트 소개</Link>
          </div>
        </section>

        <ContentUpdateNote
          publishedOn={pageDates.published}
          updatedOn={pageDates.updated}
          note="놀이 자료는 준비 상태가 분명하게 보이도록 허브 구조와 연결 상태를 점검합니다. 자료가 충분히 연결되기 전까지는 검색 노출보다 사용 안내를 우선합니다."
        />

        <PlayHubView locale="ko" />
      </div>
    </div>
  );
}
