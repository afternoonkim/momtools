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
    <section className="space-y-3">
      <div className="px-1">
        <div className="text-[12px] font-extrabold text-amber-700">{eyebrow}</div>
        <h2 className="mt-1 text-[16px] font-extrabold leading-snug text-slate-900 md:text-xl">{title}</h2>
        {description ? <p className="mt-1 text-[12px] leading-5 text-slate-500 md:text-sm">{description}</p> : null}
      </div>
      <div className="mt-simple-list">
        {items.map((item) => (
          <Link key={`${item.href}-${item.label}`} href={item.href} className="block px-3.5 py-3 transition hover:bg-amber-50/60 active:bg-amber-50">
            <div className="flex items-center gap-2">
              {item.tag ? <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-bold text-amber-700">{item.tag}</span> : null}
              <strong className="text-[14px] leading-6 text-slate-900 md:text-base">{item.label}</strong>
            </div>
            <span className="mt-0.5 line-clamp-2 block text-[12px] leading-5 text-slate-500 md:text-sm">{item.description}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
