import type { Metadata } from "next";
import Link from "next/link";
import { boyPureKoreanNames, girlPureKoreanNames } from "@/data/koreanNames";

const boyNames = boyPureKoreanNames.slice(0, 100);
const girlNames = girlPureKoreanNames.slice(0, 100);

export const metadata: Metadata = {
  title: "한글 이름 뜻 모음",
  description: "순우리말로 된 남아 이름과 여아 이름을 뜻과 함께 정리한 참고 페이지입니다. 이름 카드를 누르면 개별 이름의 뜻을 더 자세히 볼 수 있습니다.",
};

function NameSection({ title, description, items }: { title: string; description: string; items: typeof boyNames }) {
  return (
    <section className="mt-card p-6 md:p-8">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="mt-badge">{title}</span>
          <h2 className="mt-title-md mt-3">{title} 100개</h2>
          <p className="mt-text-sub mt-3 max-w-3xl">{description}</p>
        </div>
        <div className="text-sm text-slate-500">총 {items.length}개 이름</div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
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
  );
}

export default function KoreanNameMeaningsPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">한글 이름 참고</span>
          <h1 className="mt-title-xl mt-5">순우리말 이름 뜻 모음</h1>
          <p className="mt-text-main mt-5 max-w-3xl">
            이름을 지을 때 많이 찾는 순우리말 이름을 남아용, 여아용으로 나누어 정리했습니다. 카드 형태로 빠르게 훑어볼 수 있고, 마음에 드는 이름을 누르면 이름의 뜻과 느낌을 더 자세히 확인할 수 있습니다.
          </p>
        </section>

        <NameSection title="남아 이름" description="반듯하고 힘 있는 느낌, 자연의 이미지, 따뜻하고 단정한 인상을 담은 순우리말 남아 이름을 모았습니다." items={boyNames} />

        <NameSection title="여아 이름" description="맑고 사랑스러운 느낌, 부드럽고 단정한 인상, 빛과 계절의 이미지를 담은 순우리말 여아 이름을 모았습니다." items={girlNames} />
      </div>
    </div>
  );
}
