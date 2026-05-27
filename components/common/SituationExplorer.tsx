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
    <section className="mt-card-soft p-5 md:p-8">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">상황별 탐색</div>
      <h2 className="mt-title-md mt-3">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">{description}</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link
            key={`${item.href}-${item.label}`}
            href={item.href}
            className="flex min-h-14 items-center justify-between gap-3 rounded-2xl border border-amber-100 bg-white px-4 py-3 text-sm font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200 hover:bg-amber-50/70"
          >
            <span>
              {item.label}
              {item.description ? <span className="mt-1 block text-xs font-medium leading-5 text-slate-500">{item.description}</span> : null}
            </span>
            <span className="text-amber-700">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
