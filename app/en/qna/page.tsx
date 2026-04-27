import type { Metadata } from "next";
import Link from "next/link";
import { enQnaEntries } from "@/data/en/qna100";
import MedicalDisclaimer from "@/components/common/MedicalDisclaimer";

export const metadata: Metadata = {
  title: "Parent Q&A | baby and toddler questions U.S. parents actually search",
  description:
    "Browse detailed parent questions about newborn sleep, feeding, milestones, solids, tantrums, daycare transitions, and when to call the pediatrician.",
  keywords: [
    "baby questions",
    "newborn sleep schedule",
    "when to start solids",
    "toddler tantrums help",
    "baby milestones by age",
    "when to call pediatrician",
  ],
  alternates: { canonical: "https://momtools.kr/en/qna" },
};

const topicCards = [
  {
    href: "/en/qna/health",
    title: "Health",
    description: "Questions about fever, spit-up, gas, hydration, allergies, congestion, solids, and when a pediatrician should come first.",
  },
  {
    href: "/en/qna/growth",
    title: "Growth",
    description: "Questions about sleep, milestones, rolling, crawling, walking, language, growth patterns, and age-based expectations.",
  },
  {
    href: "/en/qna/behavior",
    title: "Behavior",
    description: "Questions about crying, tantrums, biting, separation anxiety, bedtime battles, and daycare transitions.",
  },
];

const featuredQuestions = enQnaEntries.slice(0, 12);

const howToUse = [
  "Start with the question that sounds most like yours rather than reading an entire topic from top to bottom.",
  "Use the answer to understand what to watch, what might help at home, and when the issue sounds more like a clinician question than an internet question.",
  "Open the related calculator or guide after the answer if timing, age, or preparation is part of the problem.",
];

export default function EnQnaHubPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Parent Q&amp;A</span>
          <h1 className="mt-title-xl mt-5">Detailed baby and toddler questions with practical next steps</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            This section is organized around real parent searches, not academic topic labels. The answers are written to help parents
            understand what to check first, what often helps at home, and which page to open next when timing, routines, feeding,
            or daily logistics are part of the question.
          </p>
          <div className="mt-4 text-sm font-semibold text-sky-700">{enQnaEntries.length} total questions</div>
        </section>

        <MedicalDisclaimer lang="en" variant="full" />

        <section className="grid gap-5 md:grid-cols-3">
          {topicCards.map((item) => (
            <Link key={item.href} href={item.href} className="mt-card p-6 transition hover:-translate-y-0.5">
              <h2 className="text-lg font-bold text-slate-800">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              <div className="mt-5 text-sm font-semibold text-sky-700">Open topic</div>
            </Link>
          ))}
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">How to use this section well</div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {howToUse.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-100 bg-white p-5 text-sm leading-7 text-slate-600">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Popular parent searches</div>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredQuestions.map((item) => (
              <Link key={item.slug} href={`/en/qna/${item.slug}`} className="rounded-2xl bg-white px-5 py-5 shadow-sm transition hover:-translate-y-0.5">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">{item.topic}</div>
                <div className="mt-2 font-semibold text-slate-800">{item.question}</div>
                <p className="mt-3 text-sm leading-7 text-slate-500">{item.summary}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-800">Helpful next pages</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Link href="/en/cal/baby-age" className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="font-semibold text-slate-800">Baby age calculator</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">Exact age often makes Q&amp;A answers easier to apply.</div>
            </Link>
            <Link href="/en/cal/weaning-start" className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="font-semibold text-slate-800">Starting solids tool</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">Move from feeding questions into age and readiness planning.</div>
            </Link>
            <Link href="/en/info/newborn" className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="font-semibold text-slate-800">Newborn guide</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">Open broader context around feeds, diapers, sleep, and common concerns.</div>
            </Link>
            <Link href="/en/checklists/daycare" className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="font-semibold text-slate-800">Daycare checklist</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">Use it when behavior or routine questions are tied to childcare transitions.</div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
