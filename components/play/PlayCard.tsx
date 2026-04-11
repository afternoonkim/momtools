import type { ReactNode } from "react";
import Link from "next/link";
import type { PlayItem, PlayLocale } from "@/data/play";
import { getLocalizedPlayText } from "@/data/play";

export default function PlayCard({
  item,
  locale,
}: {
  item: PlayItem;
  locale: PlayLocale;
}) {
  const basePath = locale === "ko" ? "/play" : "/en/play";
  const isReady = item.assets.status === "ready";

  return (
    <Link
      href={`${basePath}/${item.category}/${item.slug}`}
      className="group overflow-hidden rounded-[28px] border border-amber-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(245,158,11,0.14)]"
    >
      <div className={`bg-gradient-to-br ${item.color} px-6 py-7`}>
        <br/>
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {locale === "ko" ? "Printable Play" : "Printable Play"}
            </div>
            <div className="mt-3 text-4xl">{item.emoji}</div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="rounded-full border border-white/80 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
              {getLocalizedPlayText(item.difficulty, locale)}
            </div>
            <div
              className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                isReady ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
              }`}
            >
              {isReady ? (locale === "ko" ? "다운로드 가능" : "Ready") : locale === "ko" ? "준비 중" : "Coming soon"}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 p-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900 transition group-hover:text-amber-700">
            {getLocalizedPlayText(item.title, locale)}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {getLocalizedPlayText(item.summary, locale)}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <InfoPill>{getLocalizedPlayText(item.ageRange, locale)}</InfoPill>
          <InfoPill>{getLocalizedPlayText(item.playTime, locale)}</InfoPill>
          {item.assets.pageCount ? (
            <InfoPill>{locale === "ko" ? `${item.assets.pageCount}장` : `${item.assets.pageCount} page`}</InfoPill>
          ) : null}
        </div>

        <div className="text-sm font-semibold text-amber-700">
          {locale === "ko" ? "상세 보기 →" : "Open printable page →"}
        </div>
      </div>
    </Link>
  );
}

function InfoPill({ children }: { children: ReactNode }) {
  return <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-slate-700">{children}</span>;
}
