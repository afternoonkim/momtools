import type { Metadata } from "next";
import Link from "next/link";
import BlogFeedClient from "./BlogFeedClient";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import { buildCanonical, getPageDates } from "@/lib/content-meta";

const pageDates = getPageDates("/content/blog");

export const metadata: Metadata = {
  title: "블로그 글 모음 | MomTools",
  description: "육아 흐름을 조금 더 자세히 읽고 싶을 때 참고할 수 있는 MomTools 블로그 연결 페이지입니다.",
  alternates: { canonical: buildCanonical("/content/blog") },
  robots: { index: false, follow: true },
};

export default function BlogPage() {
  return (
    <div className="mt-page">
      <div className="mt-container">
        <BlogFeedClient />

        <div className="mt-6">
          <ContentUpdateNote
            publishedOn={pageDates.published}
            updatedOn={pageDates.updated}
            note="블로그 연결 페이지는 최신 글이 보이는지만 확인하는 공간이 아니라, 부모가 계산기와 정보 페이지에서 부족했던 배경 설명을 더 읽고 싶을 때 참고할 수 있도록 안내 문구를 함께 점검합니다."
          />
        </div>
      </div>

      <div className="mt-container">
        <section className="mt-card p-6 md:p-8">
          <span className="mt-badge">읽기 전 안내</span>
          <h2 className="mt-title-lg mt-4">이 페이지는 먼저 핵심 흐름을 확인한 뒤 더 읽고 싶을 때 보는 공간입니다</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            <p>블로그 글은 계산기나 짧은 정보 페이지에서 다 담기 어려운 배경 설명을 보완하는 용도로 연결하고 있습니다. 따라서 육아 흐름을 처음 정리하는 경우라면 아래의 정보 허브나 계산기 페이지를 먼저 보고, 세부 설명이 더 필요할 때 블로그 글로 넘어가는 방식이 가장 편합니다.</p>
            <p>MomTools는 외부 글로 이동하기 전에 먼저 지금 시기에 필요한 핵심 포인트를 사이트 안에서 이해할 수 있게 구성하는 것을 우선합니다. 이 페이지는 그다음 단계에서 추가 읽을거리를 찾는 데 도움을 주는 보조 메뉴입니다.</p>
          </div>
        </section>
        <br />
        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">먼저 보면 좋은 페이지</div>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Link href="/info" className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"><div className="font-semibold text-slate-800">육아 정보 허브</div><div className="mt-2 text-sm leading-7 text-slate-500">임신, 신생아, 이유식, 유아 흐름을 한곳에서 먼저 정리할 수 있어요.</div></Link>
            <Link href="/tools" className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"><div className="font-semibold text-slate-800">육아 계산기 모음</div><div className="mt-2 text-sm leading-7 text-slate-500">예정일, 개월수, 접종 일정, 이유식 시작, 성장 체크를 먼저 확인해 보세요.</div></Link>
            <Link href="/qna" className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"><div className="font-semibold text-slate-800">육아 Q&A</div><div className="mt-2 text-sm leading-7 text-slate-500">부모가 자주 묻는 질문을 설명형 답변으로 먼저 읽을 수 있습니다.</div></Link>
            <Link href="/content/youtube" className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"><div className="font-semibold text-slate-800">추천 유튜브</div><div className="mt-2 text-sm leading-7 text-slate-500">글보다 영상이 더 이해 쉬운 주제를 함께 확인할 수 있어요.</div></Link>
          </div>
        </section>
      </div>
    </div>
  );
}
