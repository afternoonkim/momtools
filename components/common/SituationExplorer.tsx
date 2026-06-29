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
    <section className="mt-card-soft p-4 md:p-6">
      <div className="text-xs font-bold uppercase tracking-[0.16em] text-amber-600">상황별 탐색</div>
      <h2 className="mt-2 text-xl font-extrabold text-slate-900 md:text-2xl">{title}</h2>
      <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <Link
            key={`${item.href}-${item.label}`}
            href={item.href}
            className="flex min-h-12 items-center justify-between gap-3 rounded-2xl border border-amber-100 bg-white px-4 py-3 text-sm font-bold text-slate-800 transition hover:bg-amber-50/70"
          >
            <span>
              {item.label}
              {item.description ? <span className="mt-0.5 block text-xs font-medium leading-5 text-slate-500">{item.description}</span> : null}
            </span>
            <span className="text-amber-700">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
