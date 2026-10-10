import type { Metadata } from "next";
import Link from "next/link";
import { enQnaEntries } from "@/data/en/qna100";
import MedicalDisclaimer from "@/components/common/MedicalDisclaimer";

export const metadata: Metadata = {
  title: "Parent Q&A | practical baby and toddler answers | MomTools",
  description:
    "Browse practical parent questions about newborn sleep, feeding, milestones, solids, tantrums, daycare transitions, and when to call the pediatrician.",
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
    description: "Fever, spit-up, gas, hydration, allergies, congestion, feeding concerns, and when a pediatrician should come first.",
  },
  {
    href: "/en/qna/growth",
    title: "Growth & development",
    description: "Sleep, milestones, rolling, crawling, walking, language, growth patterns, and age-based expectations.",
  },
  {
    href: "/en/qna/behavior",
    title: "Behavior & routines",
    description: "Crying, tantrums, biting, separation anxiety, bedtime battles, and daycare transitions.",
  },
];

const featuredQuestions = enQnaEntries.slice(0, 12);

const howToUse = [
  "Start with the question that sounds most like yours instead of reading an entire topic from top to bottom.",
  "Use the answer to decide what to watch, what may help at home, and when it makes more sense to contact a clinician.",
  "Open the related tool or guide when age, timing, feeding, or preparation is part of the question.",
];

export default function EnQnaHubPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Parent Q&amp;A</span>
          <h1 className="mt-title-xl mt-5">Find the question closest to what you are dealing with now</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            Start with health, growth and development, or behavior and routines. Each answer focuses on what to notice first,
            what may help at home, and when a pediatrician or other clinician should come first.
          </p>
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
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">A simple way to use Q&amp;A</div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {howToUse.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-100 bg-white p-5 text-sm leading-7 text-slate-600">{item}</div>
            ))}
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Questions parents often start with</div>
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
              <div className="mt-2 text-sm leading-7 text-slate-500">Exact age can make milestone and feeding guidance easier to apply.</div>
            </Link>
            <Link href="/en/cal/weaning-start" className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="font-semibold text-slate-800">Starting solids</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">Check age and readiness together when feeding questions come up.</div>
            </Link>
            <Link href="/en/info/newborn" className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="font-semibold text-slate-800">Newborn guide</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">See broader context around feeds, diapers, sleep, and common early concerns.</div>
            </Link>
            <Link href="/en/checklists/daycare" className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="font-semibold text-slate-800">Daycare checklist</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">Get organized when routine or behavior questions are tied to a childcare transition.</div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
