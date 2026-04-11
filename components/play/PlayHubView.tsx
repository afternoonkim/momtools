import Link from "next/link";
import type { PlayLocale } from "@/data/play";
import { playCategories, playItems, getLocalizedPlayText } from "@/data/play";
import PlayCard from "./PlayCard";

export default function PlayHubView({ locale }: { locale: PlayLocale }) {
  const basePath = locale === "ko" ? "/play" : "/en/play";
  const topItems = playItems.slice(0, 4);

  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card overflow-hidden p-8 md:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <span className="mt-badge">{locale === "ko" ? "놀이 자료" : "Printable activities"}</span>
              <h1 className="mt-title-xl mt-5">
                {locale === "ko"
                  ? "집에서 바로 활용하기 좋은\n프린트 놀이 자료 모음"
                  : "Printable play pages for easy at-home activities"}
              </h1>
              <p className="mt-text-main mt-5 max-w-3xl whitespace-pre-line">
                {locale === "ko"
                  ? "색칠공부, 미로찾기, 숨은그림찾기, 점잇기처럼 아이가 부담 없이 시작할 수 있는 놀이 자료를 한곳에 모았습니다. 연령과 난이도를 함께 표시해 지금 우리 아이에게 맞는 활동을 고르기 쉽게 구성했습니다."
                  : "Browse coloring pages, mazes, hidden picture printables, and dot-to-dot activities in one place. Each page is grouped by theme, age range, and challenge level so parents can quickly choose a printable that fits the moment."}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={`${basePath}/${playCategories[0].slug}`} className="mt-button-primary">
                  {locale === "ko" ? "인기 카테고리 보기" : "Browse popular category"}
                </Link>
                <Link href={locale === "ko" ? "/info/toddler" : "/en/info/toddler"} className="mt-button-secondary">
                  {locale === "ko" ? "유아 정보 함께 보기" : "Read toddler guide"}
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {playCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`${basePath}/${category.slug}`}
                  className="rounded-[28px] border border-amber-100 bg-amber-50/70 p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                    {getLocalizedPlayText(category.searchLabel, locale)}
                  </div>
                  <div className="mt-3 text-xl font-bold text-slate-900">
                    {getLocalizedPlayText(category.name, locale)}
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {getLocalizedPlayText(category.description, locale)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {topItems.map((item) => (
            <PlayCard key={item.slug} item={item} locale={locale} />
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="mt-card p-6 md:p-8">
            <h2 className="mt-title-lg">
              {locale === "ko" ? "이런 상황에서 활용하기 좋아요" : "When parents often use these pages"}
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {(
                locale === "ko"
                  ? [
                      ["비 오는 날 실내 놀이", "준비물이 많지 않아도 프린트 한 장으로 바로 시작할 수 있어요."],
                      ["잠깐의 대기 시간", "병원 대기, 외출 전, 식사 준비 전 같은 짧은 시간에도 활용하기 좋습니다."],
                      ["연필 잡기 연습", "색칠, 선 따라가기, 작은 물건 찾기 활동이 자연스럽게 손 조절 연습으로 이어집니다."],
                      ["형제자매 함께 놀이", "같은 카테고리 안에서 난이도만 다르게 골라 같이 놀기 편해요."],
                    ]
                  : [
                      ["Rainy day activity", "A single printable can turn into an easy indoor activity without much setup."],
                      ["Short waiting time", "These pages work well before meals, before leaving home, or during quiet waiting moments."],
                      ["Pencil control practice", "Coloring, tracing, and finding tasks naturally support early fine-motor use."],
                      ["Siblings with different levels", "Parents can stay in one category and simply choose an easier or harder page."],
                    ]
              ).map(([title, desc]) => (
                <div key={title} className="rounded-3xl bg-amber-50/70 p-5">
                  <div className="text-base font-bold text-slate-900">{title}</div>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-card p-6 md:p-8">
            <h2 className="mt-title-lg">
              {locale === "ko" ? "많이 찾는 놀이 카테고리" : "Popular printable categories"}
            </h2>
            <div className="mt-5 space-y-3">
              {playCategories.map((category) => {
                const count = playItems.filter((item) => item.category === category.slug).length;
                return (
                  <Link
                    key={category.slug}
                    href={`${basePath}/${category.slug}`}
                    className="flex items-center justify-between rounded-3xl border border-amber-100 bg-white px-5 py-4 transition hover:border-amber-200 hover:bg-amber-50/40"
                  >
                    <div>
                      <div className="font-semibold text-slate-900">{getLocalizedPlayText(category.name, locale)}</div>
                      <div className="mt-1 text-sm text-slate-500">{getLocalizedPlayText(category.searchLabel, locale)}</div>
                    </div>
                    <div className="rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700">
                      {count}{locale === "ko" ? "개 예시" : " samples"}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
