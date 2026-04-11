import Link from "next/link";

type RelatedItem = {
  href: string;
  title: string;
  description: string;
};

type RelatedContentProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: RelatedItem[];
  locale?: "ko" | "en";
};

export default function RelatedContent({
  eyebrow,
  title,
  description,
  items,
  locale = "ko",
}: RelatedContentProps) {
  return (
    <section className="mt-card-soft p-6 md:p-8">
      <div className={`text-xs font-semibold uppercase tracking-[0.18em] ${locale === "en" ? "text-sky-700" : "text-amber-600"}`}>
        {eyebrow ?? (locale === "en" ? "Related pages" : "관련 페이지")}
      </div>
      <h2 className="mt-3 text-xl font-bold text-slate-900">{title}</h2>
      {description ? <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">{description}</p> : null}
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
          >
            <div className="font-semibold text-slate-800">{item.title}</div>
            <div className="mt-2 text-sm leading-7 text-slate-500">{item.description}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
