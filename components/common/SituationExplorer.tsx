import Link from "next/link";

type SituationItem = {
  href: string;
  label: string;
  description?: string;
};

interface SituationExplorerProps {
  title?: string;
  description?: string;
  items: SituationItem[];
}

export default function SituationExplorer({
  title = "상황별 빠른 찾기",
  description = "지금 겪고 있는 상황과 가까운 항목을 먼저 열어보세요.",
  items,
}: SituationExplorerProps) {
  return (
    <section className="mt-app-stack" aria-label="상황별 탐색">
      <div className="mt-app-stack-section">
        <div className="text-[11px] font-bold tracking-[0.14em] text-amber-600">상황별 탐색</div>
        <h2 className="mt-app-section-title mt-1.5">{title}</h2>
        <p className="mt-app-section-desc">{description}</p>
      </div>
      <div className="divide-y divide-slate-100">
        {items.map((item) => {
          const targetHref = item.href.includes("#")
            ? item.href
            : item.href.includes("?")
            ? `${item.href}#qna-search-panel`
            : item.href;

          return (
          <Link
            key={`${item.href}-${item.label}`}
            href={targetHref}
            className="flex min-h-14 items-center justify-between gap-3 px-4 py-3 transition hover:bg-amber-50/60 active:bg-amber-50"
          >
            <span className="min-w-0">
              <span className="block text-[13px] font-extrabold leading-5 text-slate-900">{item.label}</span>
              {item.description ? (
                <span className="mt-0.5 line-clamp-1 block text-[12.5px] leading-5 text-slate-500">
                  {item.description}
                </span>
              ) : null}
            </span>
            <span className="shrink-0 text-sm font-bold text-amber-700">→</span>
          </Link>
          );
        })}
      </div>
    </section>
  );
}
