import type { Metadata } from "next";
import VideosClient from "./VideosClient";
import Link from "next/link";
import AdBlock from "@/components/ad/AdBlock";
export const metadata: Metadata = { title: "추천 유튜브", description: "MomTools 유튜브 콘텐츠 허브" };
export default function VideosPage(){
    return (
        <div className="mt-page">
            <div className="mt-container">
                <VideosClient />
            </div>
            <div className="mt-container">
                <AdBlock label="추천 유튜브 하단 광고 영역" format="rectangle" />

                <section className="mt-card p-6 md:p-8">
                    <span className="mt-badge">추가 안내</span>
                    <h2 className="mt-title-lg mt-4">영상 콘텐츠를 참고할 때 기억할 점</h2>
                    <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
                    <p>
                        유튜브나 영상 콘텐츠는 실제 수유 자세, 이유식 준비, 육아 동선처럼 글보다
                        눈으로 보는 편이 더 이해가 쉬운 주제를 확인할 때 특히 도움이 됩니다.
                    </p>
                    <p>
                        다만 모든 영상이 내 상황에 그대로 맞는 것은 아니므로, MomTools의 계산기와
                        정보 페이지로 기본 흐름을 먼저 확인한 뒤 영상으로 보완하는 방식이 더 효율적입니다.
                    </p>
                    <p>
                        특히 건강, 예방접종, 성장 판단과 같은 내용은 영상만 보고 결정하기보다
                        의료진과 공식 기관 안내를 함께 확인하는 것이 중요합니다.
                    </p>
                    </div>
                </section>

                <section className="mt-card-soft p-6 md:p-8">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
                    관련 페이지
                    </div>
                    <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <Link
                        href="/content/blog"
                        className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
                    >
                        <div className="font-semibold text-slate-800">블로그 콘텐츠</div>
                        <div className="mt-2 text-sm leading-7 text-slate-500">
                        영상과 함께 읽으면 더 이해가 쉬운 확장형 글 콘텐츠를 볼 수 있어요.
                        </div>
                    </Link>

                    <Link
                        href="/info/newborn"
                        className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
                    >
                        <div className="font-semibold text-slate-800">신생아 정보</div>
                        <div className="mt-2 text-sm leading-7 text-slate-500">
                        영상으로 보기 전에 기본 개념을 짧게 정리된 형태로 먼저 확인할 수 있어요.
                        </div>
                    </Link>

                    <Link
                        href="/info/weaning"
                        className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
                    >
                        <div className="font-semibold text-slate-800">이유식 정보</div>
                        <div className="mt-2 text-sm leading-7 text-slate-500">
                        이유식 단계와 준비 흐름을 먼저 정리한 뒤 영상으로 넘어가기 좋아요.
                        </div>
                    </Link>

                    <Link
                        href="/faq"
                        className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
                    >
                        <div className="font-semibold text-slate-800">FAQ</div>
                        <div className="mt-2 text-sm leading-7 text-slate-500">
                        MomTools 이용 기준과 참고 범위를 다시 확인할 수 있어요.
                        </div>
                    </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
