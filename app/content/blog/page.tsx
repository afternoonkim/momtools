import type { Metadata } from "next";
import BlogFeedClient from "./BlogFeedClient";
import Link from "next/link";
import AdBlock from "@/components/ad/AdBlock";

export const metadata: Metadata = {
  title: "블로그 글 | MomTools",
  description: "MomTools 블로그 콘텐츠 허브",
};

export default function BlogPage() {
  return (
    <div className="mt-page">
      <div className="mt-container">
        <BlogFeedClient />
      </div>
      <div className="mt-container">
        <AdBlock label="블로그 콘텐츠 하단 광고 영역" format="rectangle" />

        <section className="mt-card p-6 md:p-8">
          <span className="mt-badge">추가 안내</span>
          <h2 className="mt-title-lg mt-4">블로그 콘텐츠를 함께 두는 이유</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            <p>
              블로그 콘텐츠 영역은 계산기나 짧은 정보 페이지에서 다 담기 어려운 내용을
              조금 더 자세한 글 형태로 확장하기 위한 공간입니다. 사용자는 계산기로 현재
              상황을 빠르게 확인한 뒤, 블로그 글을 통해 왜 그런 흐름으로 이해하면 좋은지
              더 깊게 볼 수 있습니다.
            </p>
            <p>
              특히 임신, 신생아, 이유식, 유아 같은 주제는 단순 요약 정보만으로는 부족할 수
              있기 때문에 확장형 글이 함께 있으면 검색 유입과 체류 시간 측면에서도 도움이 됩니다.
            </p>
          </div>
        </section>
        <br/>
        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
            관련 페이지
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Link
              href="/info/pregnancy"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="font-semibold text-slate-800">임신 정보</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">
                블로그 글로 확장하기 전에 기본 흐름을 요약형으로 먼저 확인할 수 있어요.
              </div>
            </Link>

            <Link
              href="/info/newborn"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="font-semibold text-slate-800">신생아 정보</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">
                초보 부모가 자주 찾는 핵심 내용을 먼저 빠르게 볼 수 있어요.
              </div>
            </Link>

            <Link
              href="/info/weaning"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="font-semibold text-slate-800">이유식 정보</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">
                이유식 시작 시기와 단계별 흐름을 먼저 이해한 뒤 글로 이어서 보기 좋아요.
              </div>
            </Link>

            <Link
              href="/content/youtube"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="font-semibold text-slate-800">추천 유튜브</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">
                글뿐 아니라 영상으로도 내용을 확인하고 싶은 사용자와 연결할 수 있어요.
              </div>
            </Link>
          </div>
        </section>
      </div>
      
    </div>
  );
}
