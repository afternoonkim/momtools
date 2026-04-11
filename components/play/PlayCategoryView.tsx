import Link from "next/link";
import type { PlayCategory, PlayLocale } from "@/data/play";
import { getLocalizedPlayText, getPlayCategory, getPlayItemsByCategory, playCategories } from "@/data/play";
import PlayCard from "./PlayCard";
import StateMessage from "@/components/common/StateMessage";

export default function PlayCategoryView({
  category,
  locale,
}: {
  category: PlayCategory;
  locale: PlayLocale;
}) {
  const current = getPlayCategory(category)!;
  const items = getPlayItemsByCategory(category);
  const basePath = locale === "ko" ? "/play" : "/en/play";

  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <Link href={basePath} className="hover:text-slate-700">
              {locale === "ko" ? "놀이" : "Play"}
            </Link>
            <span>›</span>
            <span>{getLocalizedPlayText(current.name, locale)}</span>
          </div>

          <span className="mt-badge mt-5">{getLocalizedPlayText(current.searchLabel, locale)}</span>
          <h1 className="mt-title-xl mt-5">{getLocalizedPlayText(current.name, locale)}</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            {getLocalizedPlayText(current.description, locale)} {locale === "ko"
              ? "연령과 난이도를 보고 우리 아이가 지금 편하게 시작할 수 있는 도안을 골라보세요."
              : "Use the age range and difficulty labels to choose a page that feels manageable right now."}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {playCategories.map((item) => {
              const active = item.slug === category;
              return (
                <Link
                  key={item.slug}
                  href={`${basePath}/${item.slug}`}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? "bg-amber-500 text-white"
                      : "border border-amber-100 bg-white text-slate-700 hover:border-amber-200"
                  }`}
                >
                  {getLocalizedPlayText(item.name, locale)}
                </Link>
              );
            })}
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <PlayCard key={item.slug} item={item} locale={locale} />
          ))}
        </section>

        {items.length === 0 ? (
          <StateMessage
            title={locale === "ko" ? "아직 표시할 놀이 자료가 없습니다" : "No printable pages are listed here yet"}
            description={locale === "ko" ? "카테고리는 준비되어 있지만 실제 예시 자료가 아직 연결되지 않았습니다. 다른 카테고리를 먼저 보거나 유아 정보 페이지를 함께 확인해 보세요." : "The category structure is ready, but sample printable pages are not connected yet. Try another category or open the toddler guide first."}
            href={basePath}
            actionLabel={locale === "ko" ? "전체 놀이 보기" : "Back to play hub"}
            secondaryHref={locale === "ko" ? "/info/toddler" : "/en/info/toddler"}
            secondaryLabel={locale === "ko" ? "유아 정보 보기" : "Read toddler guide"}
          />
        ) : null}

        <section className="mt-card-soft p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                {locale === "ko" ? "도안 고를 때 같이 보면 좋은 기준" : "Quick ways to choose the right page"}
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                {(locale === "ko"
                  ? [
                      "처음이면 가장 쉬운 난이도부터 시작해 성공 경험을 먼저 만들어주세요.",
                      "한 번에 오래 하기보다 5~10분 정도 짧게 끊어주는 편이 더 편합니다.",
                      "아이 관심사와 연결되는 주제를 고르면 집중 시간이 더 길어질 수 있어요.",
                    ]
                  : [
                      "Start with the easiest level first so your child gets an early success experience.",
                      "Short five- to ten-minute sessions often work better than trying to do too much at once.",
                      "Choosing a theme your child already likes can make focus last longer.",
                    ]).map((text) => (
                  <li key={text} className="rounded-2xl bg-white px-4 py-3 shadow-sm">
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900">
                {locale === "ko" ? "함께 보면 좋은 페이지" : "Helpful next pages"}
              </h2>
              <div className="mt-4 grid gap-3 text-sm">
                <Link href={locale === "ko" ? "/info/toddler" : "/en/info/toddler"} className="mt-list-card">
                  <div className="font-semibold text-slate-800">{locale === "ko" ? "유아 정보" : "Toddler guide"}</div>
                  <div className="mt-2 text-slate-500">{locale === "ko" ? "식사, 수면, 놀이 흐름을 함께 보면 집에서의 하루 루틴 잡기에 도움이 돼요." : "Useful when you want simple guidance on routines, play, food, and everyday toddler life."}</div>
                </Link>
                <Link href={locale === "ko" ? "/qna/growth" : "/en/qna/growth"} className="mt-list-card">
                  <div className="font-semibold text-slate-800">{locale === "ko" ? "아이 성장 Q&A" : "Growth Q&A"}</div>
                  <div className="mt-2 text-slate-500">{locale === "ko" ? "발달, 놀이, 집중 시간과 관련해 자주 찾는 질문을 함께 볼 수 있어요." : "Browse common questions about development, routines, and what is typical by age."}</div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
