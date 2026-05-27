import Link from "next/link";

type NextStepItem = {
  href: string;
  label: string;
  description: string;
  tag?: string;
};

interface NextStepLinksProps {
  eyebrow?: string;
  title: string;
  description?: string;
  items: NextStepItem[];
}

export default function NextStepLinks({ eyebrow = "이어서 확인하기", title, description, items }: NextStepLinksProps) {
  return (
    <section className="mt-card-soft p-5 md:p-8">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">{eyebrow}</div>
      <h2 className="mt-title-lg mt-3">{title}</h2>
      {description ? <p className="mt-text-main mt-3">{description}</p> : null}
      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {items.map((item) => (
          <Link
            key={`${item.href}-${item.label}`}
            href={item.href}
            className="group flex min-h-[112px] flex-col rounded-3xl border border-white bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200"
          >
            {item.tag ? <span className="mb-3 w-fit rounded-full bg-amber-50 px-3 py-1 text-[11px] font-bold text-amber-700">{item.tag}</span> : null}
            <strong className="text-base leading-6 text-slate-900 group-hover:text-amber-700">{item.label}</strong>
            <span className="mt-2 text-sm leading-6 text-slate-600">{item.description}</span>
            <span className="mt-auto pt-3 text-sm font-bold text-amber-700">바로 확인하기 →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
