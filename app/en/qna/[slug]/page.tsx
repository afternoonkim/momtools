import type { Metadata } from "next";
import Link from "next/link";
import { enQnaEntries, getEnQnaEntry } from "@/data/en/qna100";
import { notFound } from "next/navigation";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import RelatedContent from "@/components/common/RelatedContent";

const topicMeta = {
  Health: {
    hubHref: "/en/qna/health",
    hubLabel: "Health questions",
    searchLabel: "baby health questions",
    guides: [
      { href: "/en/info/newborn", label: "Newborn guide", note: "Feeding, spit-up, congestion, diapering, and first-week routines." },
      { href: "/en/cal/vaccine-schedule", label: "Vaccine schedule", note: "Use your baby’s birth date to preview routine CDC visit timing." },
      { href: "/en/cal/weaning-start", label: "Starting solids calculator", note: "Helpful when feeding questions turn into solids-timing questions." },
    ],
  },
  Growth: {
    hubHref: "/en/qna/growth",
    hubLabel: "Growth questions",
    searchLabel: "baby growth and sleep questions",
    guides: [
      { href: "/en/info/toddler", label: "Toddler guide", note: "Daily routines, language growth, big feelings, and behavior patterns." },
      { href: "/en/cal/baby-age", label: "Baby age calculator", note: "Useful for milestone windows, forms, and exact-age check-ins." },
      { href: "/en/cal/growth-percentile", label: "Growth percentile calculator", note: "Turn recent visit measurements into a clearer growth reference." },
    ],
  },
  Behavior: {
    hubHref: "/en/qna/behavior",
    hubLabel: "Behavior questions",
    searchLabel: "baby and toddler behavior questions",
    guides: [
      { href: "/en/info/toddler", label: "Toddler guide", note: "Helpful for routines, tantrums, transitions, and everyday family rhythm." },
      { href: "/en/checklists/daycare", label: "Daycare checklist", note: "Useful when separation, transitions, or pickup routines are part of the issue." },
      { href: "/en/cal/baby-age", label: "Baby age calculator", note: "Many behavior questions make more sense when matched to the right age window." },
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
  const topic = topicMeta[entry.topic];
  return {
    title: `${entry.question} | Parent Q&A for U.S. families`,
    description: `${entry.summary} Structured parent guidance with what to check, what to try first, when to call your pediatrician, and related tools.`,
    keywords: [entry.question, topic.searchLabel, "parent q&a", "baby questions", "U.S. parenting guide"],
    alternates: { canonical: `https://momtools.kr/en/qna/${slug}` },
    openGraph: {
      title: `${entry.question} | Parent Q&A`,
      description: `${entry.summary} Practical guidance for parents in the U.S.`,
      url: `https://momtools.kr/en/qna/${slug}`,
      type: "article",
    },
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

        <ContentUpdateNote publishedOn="2026-04-09" updatedOn="2026-04-09" locale="en" note="This answer is reviewed so parents can quickly see when the guidance on home observation, next steps, and when to call a clinician was last checked." />

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Short answer</div>
          <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
            {entry.summary} This page is written for real home decisions: what parents usually notice first,
            what is often okay to observe, what you can try at home, and when it is smarter to call your pediatrician.
          </p>
        </section>

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
            <h2 className="mt-title-md">What you can try first at home</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              {entry.simpleAction.map((point) => (
                <li key={point} className="rounded-2xl bg-white px-4 py-3">{point}</li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="mt-title-md">What to check before you decide what to do next</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
            {entry.checklist.map((point) => (
              <li key={point} className="rounded-2xl bg-white px-4 py-3">{point}</li>
            ))}
          </ul>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="mt-title-md">When to call your pediatrician or get more help</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">{entry.caution}</p>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Useful tools and next pages</div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {topic.guides.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl bg-white px-5 py-5 shadow-sm transition hover:-translate-y-0.5"
              >
                <div className="font-semibold text-slate-800">{item.label}</div>
                <p className="mt-2 text-sm leading-6 text-slate-500">{item.note}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="mt-title-md">Related questions parents also search</h2>
          <p className="mt-4 text-sm leading-8 text-slate-600 md:text-base">
            Most parent concerns do not stop at one question. Reading nearby questions often helps you
            compare patterns, notice what changed, and decide what details are worth writing down before
            you call your pediatrician.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {entry.related.map((item) => (
              <Link
                key={item.slug}
                href={`/en/qna/${item.slug}`}
                className="rounded-2xl bg-white px-5 py-5 shadow-sm transition hover:-translate-y-0.5"
              >
                <div className="font-semibold text-slate-800">{item.question}</div>
                <div className="mt-3 text-sm font-semibold text-sky-700">Read this question next</div>
              </Link>
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Link href={topic.hubHref} className="rounded-2xl border border-slate-100 bg-white px-5 py-5 transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="font-semibold text-slate-800">Browse all {topic.hubLabel.toLowerCase()}</div>
              <p className="mt-2 text-sm leading-7 text-slate-500">Compare similar questions in the same topic instead of relying on one page alone.</p>
            </Link>
            <Link href="/en/qna" className="rounded-2xl border border-slate-100 bg-white px-5 py-5 transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="font-semibold text-slate-800">Back to the full Parent Q&amp;A hub</div>
              <p className="mt-2 text-sm leading-7 text-slate-500">Jump across health, growth, and behavior questions from one place.</p>
            </Link>
          </div>
        </section>
      

        <RelatedContent
          locale="en"
          title="Helpful next pages for this question"
          description="Most parent questions make more sense when you compare them with a guide, a calculator, or another question in the same topic."
          items={topic.guides.map((item) => ({ href: item.href, title: item.label, description: item.note }))}
        />
      </div>
    </div>
  );
}
