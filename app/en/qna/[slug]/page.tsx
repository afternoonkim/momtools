import type { Metadata } from "next";
import Link from "next/link";
import { enQnaEntries, getEnQnaEntry } from "@/data/en/qna100";
import { notFound } from "next/navigation";
import AdBlock from "@/components/ad/AdBlock";

const topicMeta = {
  Health: {
    hubHref: "/en/qna/health",
    hubLabel: "Health questions",
    guides: [
      { href: "/en/info/newborn", label: "Newborn guide" },
      { href: "/en/cal/vaccine-schedule", label: "Vaccine schedule" },
      { href: "/en/checklists/newborn", label: "Newborn checklist" },
    ],
  },
  Growth: {
    hubHref: "/en/qna/growth",
    hubLabel: "Growth questions",
    guides: [
      { href: "/en/info/toddler", label: "Toddler guide" },
      { href: "/en/cal/baby-age", label: "Baby age calculator" },
      { href: "/en/cal/growth-percentile", label: "Growth percentile tool" },
    ],
  },
  Behavior: {
    hubHref: "/en/qna/behavior",
    hubLabel: "Behavior questions",
    guides: [
      { href: "/en/info/toddler", label: "Toddler guide" },
      { href: "/en/checklists/daycare", label: "Daycare checklist" },
      { href: "/en/checklists/newborn", label: "Newborn checklist" },
    ],
  },
} as const;

export async function generateStaticParams() {
  return enQnaEntries.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEnQnaEntry(slug);
  if (!entry) return {};
  return {
    title: `${entry.question} | Parent Q&A`,
    description: `${entry.summary} Practical everyday guidance for parents in the US.`,
    alternates: { canonical: `https://momtools.kr/en/qna/${slug}` },
  };
}

export default async function EnQnaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getEnQnaEntry(slug);
  if (!entry) notFound();

  const topic = topicMeta[entry.topic];

  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="mt-badge">Parent Q&amp;A</span>
            <span className="rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-500">{entry.topic}</span>
          </div>
          <h1 className="mt-title-xl mt-5">{entry.question}</h1>
          <p className="mt-text-main mt-4">{entry.summary}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <Link href="/en" className="hover:text-sky-700">Home</Link>
            <span>/</span>
            <Link href="/en/qna" className="hover:text-sky-700">Parent Q&amp;A</Link>
            <span>/</span>
            <Link href={topic.hubHref} className="hover:text-sky-700">{topic.hubLabel}</Link>
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Before you start</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            This page is written for day-to-day parenting decisions. It focuses on what parents usually notice first,
            what can often be checked at home, and when it makes sense to get medical or professional advice. It is
            general guidance, not a diagnosis.
          </p>
        </section>

        <AdBlock placement="contentInline" format="rectangle" />

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-md">What this question usually means in real life</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            {entry.answer.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        {entry.simpleAction && entry.simpleAction.length > 0 ? (
          <section className="mt-card-soft p-6 md:p-8">
            <h2 className="mt-title-md">What you can try first</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              {entry.simpleAction.map((point) => (
                <li key={point} className="rounded-2xl bg-white px-4 py-3">{point}</li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="mt-title-md">What to check at home</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
            {entry.checklist.map((point) => (
              <li key={point} className="rounded-2xl bg-white px-4 py-3">{point}</li>
            ))}
          </ul>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="mt-title-md">When to get extra help</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">{entry.caution}</p>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Useful tools and guides</div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {topic.guides.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl bg-white px-5 py-5 shadow-sm transition hover:-translate-y-0.5"
              >
                <div className="font-semibold text-slate-800">{item.label}</div>
              </Link>
            ))}
          </div>
        </section>

        <AdBlock placement="contentInline" format="horizontal" />

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="mt-title-md">Related questions</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {entry.related.map((item) => (
              <Link
                key={item.slug}
                href={`/en/qna/${item.slug}`}
                className="rounded-2xl bg-white px-5 py-5 shadow-sm transition hover:-translate-y-0.5"
              >
                <div className="font-semibold text-slate-800">{item.question}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
