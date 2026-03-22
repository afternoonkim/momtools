import type { Metadata } from "next";
import Link from "next/link";
import { meaningPureKoreanNames } from "@/data/koreanNames";

const pureKoreanNames = meaningPureKoreanNames.slice(0, 400);

export const metadata: Metadata = {
  title: "한글 이름 뜻 모음",
  description: "순우리말 이름 400개를 뜻과 함께 정리한 참고 페이지입니다. 마음에 드는 이름을 누르면 개별 이름의 뜻을 더 자세히 볼 수 있습니다.",
};

export default function KoreanNameMeaningsPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">한글 이름 참고</span>
          <h1 className="mt-title-xl mt-5">순우리말 이름 뜻 모음</h1>
          <p className="mt-text-main mt-5 max-w-3xl">
            순우리말 느낌을 살린 이름을 한곳에 모아 카드 형태로 정리했습니다. 남아, 여아로 나누지 않고 이름 자체의 소리감과 뜻을 중심으로 빠르게 훑어볼 수 있도록 구성했으며,
            마음에 드는 이름을 누르면 이름의 뜻과 인상을 더 자세히 확인할 수 있습니다.
          </p>
          <div className="mt-5 text-sm text-slate-500">총 {pureKoreanNames.length}개 이름</div>
        </section>

        <section className="mt-card p-6 md:p-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mt-badge">이름 카드 모음</span>
              <h2 className="mt-title-md mt-3">순우리말 이름 400개</h2>
              <p className="mt-text-sub mt-3 max-w-3xl">
                부드럽고 따뜻한 느낌, 자연의 이미지, 밝고 단정한 인상을 담은 순우리말 이름을 함께 모았습니다. 이름을 고를 때는 뜻뿐 아니라 실제로 자주 불렀을 때의 발음,
                성과 붙였을 때의 자연스러움도 함께 살펴보면 좋습니다.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {pureKoreanNames.map((item) => (
              <Link
                key={item.slug}
                href={`/baby-names/meanings/${item.slug}`}
                className="group rounded-2xl border border-amber-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200 hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xl font-bold text-slate-800">{item.name}</div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.meaning}</p>
                  </div>
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">상세 보기</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
