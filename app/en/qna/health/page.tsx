import type { Metadata } from "next";
import Link from "next/link";
import { enQnaEntries } from "@/data/en/qna100";

export const metadata: Metadata = {
  title: "Health Questions | Parent Q&A for U.S. families",
  description:
    "Common parent searches about fever, spit-up, gas, feeding, hydration, solids, allergies, and when to call the pediatrician.",
  keywords: ["baby health questions", "parent q&a", "baby questions", "U.S. parenting"],
  alternates: { canonical: "https://momtools.kr/en/qna/health" },
};

const items = enQnaEntries.filter((item) => item.topic === "Health");

export default function HealthTopicPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Parent Q&amp;A</span>
          <h1 className="mt-title-xl mt-5">Health Questions</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            Common parent searches about fever, spit-up, gas, feeding, hydration, solids, allergies,
            and when to call the pediatrician.
          </p>
          <div className="mt-4 text-sm font-semibold text-sky-700">{items.length} questions in this topic</div>
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
            <Link href="/en/cal/vaccine-schedule" className="rounded-2xl bg-white px-5 py-5 shadow-sm font-semibold text-slate-800">
              Vaccine schedule
            </Link>
            <Link href="/en/cal/weaning-start" className="rounded-2xl bg-white px-5 py-5 shadow-sm font-semibold text-slate-800">
              Starting solids calculator
            </Link>
            <Link href="/en/info/newborn" className="rounded-2xl bg-white px-5 py-5 shadow-sm font-semibold text-slate-800">
              Newborn guide
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
