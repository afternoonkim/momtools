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
  const accentClass = locale === "en" ? "text-sky-700" : "text-amber-700";

  return (
    <section className="space-y-3">
      <div className="px-1">
        <div className={`text-[12px] font-extrabold ${accentClass}`}>
          {eyebrow ?? (locale === "en" ? "Related pages" : "관련 페이지")}
        </div>
        <h2 className="mt-1 text-[16px] font-extrabold leading-snug text-slate-900 md:text-xl">{title}</h2>
        {description ? <p className="mt-1 text-[12px] leading-5 text-slate-500 md:text-sm">{description}</p> : null}
      </div>
      <div className="mt-simple-list">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="block px-3.5 py-3 transition hover:bg-amber-50/60 active:bg-amber-50">
            <div className="text-[13px] font-extrabold leading-5 text-slate-900 md:text-base">{item.title}</div>
            <div className="mt-0.5 line-clamp-2 text-[12px] leading-5 text-slate-500 md:text-sm">{item.description}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
