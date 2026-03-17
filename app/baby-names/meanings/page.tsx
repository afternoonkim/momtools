import type { Metadata } from "next";
import Link from "next/link";
import { nameMeanings } from "@/data/babyNames";

export const metadata: Metadata = {
  title: "한글 이름 뜻 모음 | 부르기 좋은 순우리말 이름 정리",
  description: "한글 단어 느낌이 살아 있는 순우리말 이름과 그 뜻을 한곳에서 비교해 볼 수 있는 MomTools 한글 이름 뜻 모음 페이지입니다.",
  alternates: { canonical: "https://momtools.kr/baby-names/meanings" },
};

export default function NameMeaningsPage() {
  const boyNames = nameMeanings.filter((item) => item.gender === "boy");
  const girlNames = nameMeanings.filter((item) => item.gender === "girl");

  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">한글 이름 뜻 모음</span>
          <h1 className="mt-title-xl mt-5">부르기 좋은 한글 이름과 뜻을 한곳에서 비교하기</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            한글 이름은 말의 뜻이 바로 떠오른다는 장점이 있습니다. 이 페이지에서는 순우리말 느낌이 살아 있는 이름을
            모아 두고, 이름이 담고 있는 뜻을 바로 확인할 수 있게 정리했습니다. 성씨와 붙였을 때 발음이 편한지도 함께 살펴보세요.
          </p>
        </section>

        {[{ title: "남아 한글 이름", items: boyNames }, { title: "여아 한글 이름", items: girlNames }].map((section) => (
          <section key={section.title} className="space-y-4">
            <h2 className="mt-title-md">{section.title}</h2>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {section.items.map((item) => (
                <Link key={item.slug} href={`/baby-names/meanings/${item.slug}`} className="mt-card p-6 transition hover:-translate-y-0.5">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">{item.gender === "boy" ? "남아" : "여아"}</div>
                  <h3 className="mt-3 text-xl font-bold text-slate-800">{item.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{item.shortMeaning}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
