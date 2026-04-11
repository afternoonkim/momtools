import type { Metadata } from "next";
import Link from "next/link";
import { enQnaEntries } from "@/data/en/qna100";

export const metadata: Metadata = {
  title: "Growth and milestone questions | parent Q&A by age and stage",
  description:
    "Read parent questions about baby sleep, milestones, rolling, crawling, walking, language, naps, and how growth patterns change by age.",
  keywords: ["baby milestones", "growth questions", "baby sleep by age", "walking milestone", "language milestone"],
  alternates: { canonical: "https://momtools.kr/en/qna/growth" },
};

const items = enQnaEntries.filter((item) => item.topic === "Growth");

const introPoints = [
  "Growth questions are easier to judge when exact age is clear, especially in the first year.",
  "Milestones are patterns, not one-day tests, so the timeline matters more than a single hard afternoon.",
  "Parents often get the best value by pairing a question page with an age tool or growth reference page.",
];

export default function GrowthTopicPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Parent Q&amp;A · Growth</span>
          <h1 className="mt-title-xl mt-5">Growth questions parents search by age, sleep, and milestones</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            This topic covers questions about newborn sleep, naps, rolling, crawling, walking, language, growth patterns,
            and the age-based timing that often makes parents wonder whether something is still within a common range.
          </p>
          <div className="mt-4 text-sm font-semibold text-sky-700">{items.length} questions in this topic</div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {introPoints.map((item) => (
            <div key={item} className="mt-card-soft p-5 text-sm leading-7 text-slate-600">{item}</div>
          ))}
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/en/qna/${item.slug}`}
              className="rounded-[28px] border border-sky-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">{item.topic}</div>
              <h2 className="mt-3 text-lg font-bold text-slate-800">{item.question}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">{item.summary}</p>
            </Link>
          ))}
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Helpful related pages</div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <Link href="/en/cal/baby-age" className="rounded-2xl bg-white px-5 py-5 shadow-sm transition hover:-translate-y-0.5">
              <div className="font-semibold text-slate-800">Baby age calculator</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">Use exact age in months and weeks before comparing a milestone question.</div>
            </Link>
            <Link href="/en/cal/growth-percentile" className="rounded-2xl bg-white px-5 py-5 shadow-sm transition hover:-translate-y-0.5">
              <div className="font-semibold text-slate-800">Growth percentile calculator</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">Pair milestone questions with a growth reference instead of guessing from memory.</div>
            </Link>
            <Link href="/en/info/toddler" className="rounded-2xl bg-white px-5 py-5 shadow-sm transition hover:-translate-y-0.5">
              <div className="font-semibold text-slate-800">Toddler guide</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">Move into routines, sleep, and daily behavior questions as age and development change.</div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
