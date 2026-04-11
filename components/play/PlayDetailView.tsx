import type { ReactNode } from "react";
import Link from "next/link";
import type { PlayDownloadFile, PlayItem, PlayLocale } from "@/data/play";
import { getLocalizedPlayText, getPlayRelatedItems } from "@/data/play";
import PlayCard from "./PlayCard";
import StateMessage from "@/components/common/StateMessage";

export default function PlayDetailView({
  item,
  locale,
}: {
  item: PlayItem;
  locale: PlayLocale;
}) {
  const basePath = locale === "ko" ? "/play" : "/en/play";
  const related = getPlayRelatedItems(item.category, item.slug, 3);
  const isReady = item.assets.status === "ready";
  const primaryDownload = item.assets.downloads.find((file) => file.isPrimary) ?? item.assets.downloads[0];
  const relatedInfoHref = item.relatedInfoHref?.[locale];
  const relatedInfoLabel = item.relatedInfoLabel;

  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card overflow-hidden p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <Link href={basePath} className="hover:text-slate-700">
                  {locale === "ko" ? "놀이" : "Play"}
                </Link>
                <span>›</span>
                <Link href={`${basePath}/${item.category}`} className="hover:text-slate-700">
                  {locale === "ko" ? categoryLabel(item.category) : categoryLabelEn(item.category)}
                </Link>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="mt-badge">{locale === "ko" ? "프린트 놀이 자료" : "Printable activity"}</span>
                <StatusBadge ready={isReady} locale={locale} />
              </div>
              <h1 className="mt-title-xl mt-5">{getLocalizedPlayText(item.title, locale)}</h1>
              <p className="mt-text-main mt-4 max-w-3xl">{getLocalizedPlayText(item.intro, locale)}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <MetaPill>{getLocalizedPlayText(item.ageRange, locale)}</MetaPill>
                <MetaPill>{getLocalizedPlayText(item.difficulty, locale)}</MetaPill>
                <MetaPill>{getLocalizedPlayText(item.playTime, locale)}</MetaPill>
                {item.assets.orientation ? <MetaPill>{getLocalizedPlayText(item.assets.orientation, locale)}</MetaPill> : null}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {isReady && primaryDownload ? (
                  <a href={primaryDownload.href} download className="mt-button-primary">
                    {getLocalizedPlayText(primaryDownload.label, locale)}
                  </a>
                ) : (
                  <a href="#download-info" className="mt-button-primary">
                    {locale === "ko" ? "다운로드 준비 상태 보기" : "See download status"}
                  </a>
                )}
                {relatedInfoHref && relatedInfoLabel ? (
                  <Link href={relatedInfoHref} className="mt-button-secondary">
                    {getLocalizedPlayText(relatedInfoLabel, locale)}
                  </Link>
                ) : null}
              </div>
            </div>

            <div className={`rounded-[32px] bg-gradient-to-br ${item.color} p-6 shadow-inner`}>
              <div className="rounded-[28px] border border-white/80 bg-white/85 p-6 backdrop-blur-sm">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {locale === "ko" ? "미리보기" : "Preview"}
                </div>
                <div className="mt-5 overflow-hidden rounded-[28px] border border-dashed border-amber-200 bg-white">
                  {isReady && item.assets.previewImage ? (
                    <img
                      src={item.assets.previewImage}
                      alt={getLocalizedPlayText(item.title, locale)}
                      className="h-auto w-full object-cover"
                    />
                  ) : (
                    <div className="px-6 py-14 text-center">
                      <div className="text-6xl">{item.emoji}</div>
                      <div className="mt-4 text-xl font-bold text-slate-900">{getLocalizedPlayText(item.title, locale)}</div>
                      <div className="mt-2 text-sm leading-7 text-slate-600">
                        {getLocalizedPlayText(item.summary, locale)}
                      </div>
                      <div className="mt-5 inline-flex rounded-full bg-amber-50 px-4 py-2 text-xs font-semibold text-amber-700">
                        {locale === "ko"
                          ? "미리보기 이미지가 연결되면 이 영역에 실제 도안이 표시됩니다."
                          : "The real printable preview will appear here when the image file is attached."}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="mt-card p-6 md:p-8">
            <h2 className="mt-title-lg">{locale === "ko" ? "이 도안으로 기대할 수 있는 점" : "What this page can support"}</h2>
            <ul className="mt-5 space-y-3">
              {item.skills.map((skill) => (
                <li key={skill.ko} className="rounded-2xl bg-amber-50/80 px-4 py-3 text-sm font-medium text-slate-700">
                  {getLocalizedPlayText(skill, locale)}
                </li>
              ))}
            </ul>
          </div>

          <div id="download-info" className="mt-card p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h2 className="mt-title-lg">{locale === "ko" ? "다운로드 파일 안내" : "Download files"}</h2>
              <StatusBadge ready={isReady} locale={locale} />
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
              {isReady
                ? locale === "ko"
                  ? "아래 버튼을 통해 PDF나 이미지 파일을 바로 내려받을 수 있습니다. 파일은 한국어/영어 페이지가 따로 있어도 동일한 원본을 함께 사용하도록 설계되어 있어, 자료 하나를 올리면 양쪽 상세 페이지에서 동시에 연결됩니다."
                  : "You can download the printable files below. The Korean and English pages share the same original asset files, so one upload can power both language versions at the same time."
                : locale === "ko"
                  ? "이 상세 페이지는 실제 PDF와 이미지 파일을 바로 연결할 수 있는 구조로 준비되어 있습니다. 원본 파일이 업로드되면 아래 버튼이 즉시 활성화되고, 같은 자료를 한국어/영어 페이지에서 함께 사용할 수 있습니다."
                  : "This detail page is already structured to connect directly to real PDF and image files. Once the source files are uploaded, the buttons below can be activated and shared across both Korean and English pages."}
            </p>

            <div className="mt-5 space-y-3">
              {item.assets.downloads.map((file) => (
                <DownloadCard key={file.kind} file={file} locale={locale} ready={isReady} />
              ))}
            </div>

            <div className="mt-5 rounded-3xl bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">{locale === "ko" ? "출력 팁" : "Print tip"}</div>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {item.assets.printTip ? getLocalizedPlayText(item.assets.printTip, locale) : getLocalizedPlayText(item.useTip, locale)}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
                {typeof item.assets.pageCount === "number" ? (
                  <span className="rounded-full bg-slate-100 px-3 py-1">
                    {locale === "ko" ? `총 ${item.assets.pageCount}장` : `${item.assets.pageCount} page${item.assets.pageCount > 1 ? "s" : ""}`}
                  </span>
                ) : null}
                {item.assets.orientation ? (
                  <span className="rounded-full bg-slate-100 px-3 py-1">{getLocalizedPlayText(item.assets.orientation, locale)}</span>
                ) : null}
              </div>
            </div>

            <div className="mt-5 rounded-3xl bg-amber-50/70 p-5">
              <div className="text-sm font-semibold text-slate-900">{locale === "ko" ? "활용 팁" : "Parent tip"}</div>
              <p className="mt-2 text-sm leading-7 text-slate-600">{getLocalizedPlayText(item.useTip, locale)}</p>
            </div>
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="mt-title-lg">{locale === "ko" ? "같은 카테고리의 다른 놀이" : "More pages in this category"}</h2>
          {related.length > 0 ? (
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {related.map((relatedItem) => (
                <PlayCard key={relatedItem.slug} item={relatedItem} locale={locale} />
              ))}
            </div>
          ) : (
            <div className="mt-6">
              <StateMessage
                title={locale === "ko" ? "같은 카테고리의 다른 자료를 준비 중입니다" : "More pages in this category are coming soon"}
                description={locale === "ko" ? "현재는 이 자료를 먼저 확인할 수 있고, 같은 카테고리의 추가 예시는 순차적으로 연결할 예정입니다." : "This is the first connected page in the category. More printable examples can be attached here later."}
                href={locale === "ko" ? `/play/${item.category}` : `/en/play/${item.category}`}
                actionLabel={locale === "ko" ? "카테고리 다시 보기" : "Back to category"}
              />
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function DownloadCard({
  file,
  locale,
  ready,
}: {
  file: PlayDownloadFile;
  locale: PlayLocale;
  ready: boolean;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-3xl border border-amber-100 bg-white p-4 md:flex-row md:items-center md:justify-between">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="text-sm font-semibold text-slate-900">{getLocalizedPlayText(file.label, locale)}</div>
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">{file.formatLabel}</span>
        </div>
        {file.sizeLabel ? <div className="mt-1 text-xs leading-6 text-slate-500">{getLocalizedPlayText(file.sizeLabel, locale)}</div> : null}
      </div>

      {ready ? (
        <a href={file.href} download className="inline-flex rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-600">
          {locale === "ko" ? "파일 받기" : "Download"}
        </a>
      ) : (
        <div className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-500">
          {locale === "ko" ? "준비 중" : "Coming soon"}
        </div>
      )}
    </div>
  );
}

function StatusBadge({ ready, locale }: { ready: boolean; locale: PlayLocale }) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
        ready ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
      }`}
    >
      {ready ? (locale === "ko" ? "다운로드 가능" : "Download ready") : locale === "ko" ? "파일 준비 중" : "Files coming soon"}
    </span>
  );
}

function MetaPill({ children }: { children: ReactNode }) {
  return <span className="rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-slate-700">{children}</span>;
}

function categoryLabel(category: PlayItem["category"]) {
  return {
    coloring: "색칠공부",
    maze: "미로찾기",
    "hidden-picture": "숨은그림찾기",
    "dot-to-dot": "점잇기",
  }[category];
}

function categoryLabelEn(category: PlayItem["category"]) {
  return {
    coloring: "Coloring Pages",
    maze: "Mazes",
    "hidden-picture": "Hidden Picture",
    "dot-to-dot": "Dot to Dot",
  }[category];
}
