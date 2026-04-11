import type { Metadata } from "next";
import Link from "next/link";
import { enQnaEntries } from "@/data/en/qna100";

export const metadata: Metadata = {
  title: "Baby health questions | parent Q&A for everyday concerns and next steps",
  description:
    "Read baby and toddler health questions about spit-up, fever, gas, feeding, hydration, constipation, allergies, and when to call a pediatrician.",
  keywords: ["baby health questions", "when to call pediatrician", "baby fever", "spit up", "baby constipation"],
  alternates: { canonical: "https://momtools.kr/en/qna/health" },
};

const items = enQnaEntries.filter((item) => item.topic === "Health");

const introPoints = [
  "Health questions often sound simple online but depend on age, feeding, energy level, and how quickly the pattern changed.",
  "These answers are written to help parents notice what matters first, not to replace a pediatrician or urgent evaluation.",
  "When symptoms seem more serious than usual, professional care should come before more reading.",
];

export default function HealthTopicPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Parent Q&amp;A · Health</span>
          <h1 className="mt-title-xl mt-5">Health questions parents search when something feels off</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            This topic covers common baby and toddler health worries such as fever, spit-up, gas, feeding trouble,
            hydration, constipation, congestion, allergies, and when it is time to call the pediatrician instead of
            trying one more home fix.
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
            <Link href="/en/cal/vaccine-schedule" className="rounded-2xl bg-white px-5 py-5 shadow-sm transition hover:-translate-y-0.5">
              <div className="font-semibold text-slate-800">Vaccine schedule</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">Compare age-based timing before you confirm the real schedule with your clinic.</div>
            </Link>
            <Link href="/en/cal/weaning-start" className="rounded-2xl bg-white px-5 py-5 shadow-sm transition hover:-translate-y-0.5">
              <div className="font-semibold text-slate-800">Starting solids calculator</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">Use it when feeding and digestion questions overlap with age and readiness.</div>
            </Link>
            <Link href="/en/info/newborn" className="rounded-2xl bg-white px-5 py-5 shadow-sm transition hover:-translate-y-0.5">
              <div className="font-semibold text-slate-800">Newborn guide</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">Step back into the bigger picture of feeds, diapers, sleep, and common early concerns.</div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
