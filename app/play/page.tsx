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
          <h1 className="mt-title-lg mt-3">집에서 가볍게 활용할 놀이 아이디어를 모았습니다</h1>
          <p className="mt-text-main mt-3 max-w-4xl">
            MomTools 놀이 메뉴는 아이와 집에서 가볍게 활용할 수 있는 색칠공부, 미로찾기, 숨은그림찾기, 점잇기 아이디어를 한곳에 모아둔 공간입니다.
            아이 연령과 흥미에 맞는 놀이 주제를 고르고, 관련 육아 정보도 함께 확인해 보세요.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-5 shadow-sm"><div className="font-bold text-slate-800">주제별 정리</div><p className="mt-2 text-sm leading-7 text-slate-600">색칠공부, 미로찾기, 숨은그림찾기, 점잇기처럼 많이 찾는 주제를 기준으로 연결합니다.</p></div>
            <div className="rounded-3xl bg-white p-5 shadow-sm"><div className="font-bold text-slate-800">부모 중심 활용</div><p className="mt-2 text-sm leading-7 text-slate-600">아이 연령과 흥미에 맞게 보호자가 주제를 고를 수 있도록 정리합니다.</p></div>
            <div className="rounded-3xl bg-white p-5 shadow-sm"><div className="font-bold text-slate-800">현재 상태</div><p className="mt-2 text-sm leading-7 text-slate-600">아이와 바로 시도하기 좋은 주제와 놀이 방향을 먼저 확인할 수 있습니다.</p></div>
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
          note="아이와 바로 활용하기 좋은 놀이 방향과 관련 정보를 함께 안내해 드려요."
        />

        <PlayHubView locale="ko" />
      </div>
    </div>
  );
}
