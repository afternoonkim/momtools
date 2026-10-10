import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About MomTools | practical U.S. parenting tools with clear limits",
  description:
    "See how MomTools helps parents move from a quick question to a useful next step with practical tools, checklists, and plain-language guides.",
  alternates: { canonical: "https://momtools.kr/en/about" },
};

const pillars = [
  {
    title: "Start with the question you have",
    description:
      "Use a calculator when timing matters, a guide when you need context, or a checklist when you need to get organized.",
  },
  {
    title: "Use U.S. guidance when it matters",
    description:
      "Vaccine timing, growth charts, pregnancy care, and other health topics point you toward current U.S. references and your own clinician when individual advice is needed.",
  },
  {
    title: "Know when online information is not enough",
    description:
      "MomTools can help with planning and understanding, but it cannot diagnose symptoms, make medication decisions, or replace urgent medical care.",
  },
];

const simpleFlow = [
  "Start with the tool, guide, or parent question that matches what you need right now.",
  "Use the related links to check age, timing, preparation, or a broader stage guide without starting a new search.",
  "For medical decisions, current schedules, or anything specific to your child’s history, confirm with an official source or clinician.",
];

const bestFor = [
  "Checking timing such as due dates, baby age, vaccine windows, or starting solids.",
  "Getting organized for birth, newborn care, feeding, or daycare transitions.",
  "Understanding a common parenting question before deciding what to watch or ask next.",
];

const notFor = [
  "Emergency symptoms or situations where a child seems much worse than usual.",
  "Medication decisions, diagnosis, or personal treatment advice.",
  "Questions that depend heavily on a child's medical history, prematurity, or specialist guidance.",
];

export default function EnglishAboutPage() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">About MomTools</span>
          <h1 className="mt-title-lg mt-4">A clearer path from a parenting question to the next useful step</h1>
          <p className="mt-text-main mt-4">
            MomTools brings practical calculators, checklists, Q&amp;A, and stage-based guides together so you can find what you need without opening a long chain of unrelated pages.
          </p>
          <p className="mt-text-sub mt-4">
            The focus is everyday parenting in the U.S. — due dates, newborn routines, vaccine timing, starting solids, growth charts, toddler behavior, and daycare prep — with clear limits around medical advice.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {pillars.map((item) => (
            <article key={item.title} className="mt-card-soft p-6">
              <h2 className="text-lg font-bold text-slate-900">{item.title}</h2>
              <p className="mt-3 text-sm leading-8 text-slate-600">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="mt-card p-8 md:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-800">What you can find here</h2>
          <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            <p>
              <strong className="text-slate-800">Tools</strong> help with timing questions such as due date, exact baby age, vaccine schedule reference, starting solids, and choosing the right growth chart.
            </p>
            <p>
              <strong className="text-slate-800">Guides</strong> add context around pregnancy, newborn care, feeding, toddler routines, and other stage-based questions.
            </p>
            <p>
              <strong className="text-slate-800">Q&amp;A and checklists</strong> help with the practical follow-up questions that come next, from sleep and feeding concerns to daycare preparation.
            </p>
          </div>
        </section>

        <section className="mt-card-soft p-8 md:p-10">
          <h2 className="text-xl font-bold text-slate-800">A simple way to use MomTools</h2>
          <div className="mt-5 space-y-3 text-sm leading-8 text-slate-600 md:text-base">
            {simpleFlow.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-100 bg-white px-5 py-4">{item}</div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <article className="mt-card p-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-800">MomTools is useful when you want to...</h2>
            <div className="mt-5 space-y-3 text-sm leading-8 text-slate-600 md:text-base">
              {bestFor.map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 px-5 py-4">{item}</div>
              ))}
            </div>
          </article>
          <article className="mt-card p-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-800">When to go beyond MomTools</h2>
            <div className="mt-5 space-y-3 text-sm leading-8 text-slate-600 md:text-base">
              {notFor.map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 px-5 py-4">{item}</div>
              ))}
            </div>
          </article>
        </section>

        <section className="mt-card p-8 md:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-800">Found something unclear or outdated?</h2>
          <p className="mt-4 text-sm leading-8 text-slate-600 md:text-base">
            Send the page URL and a short note about what looks wrong or confusing. That is usually enough to understand the issue and make the page more useful.
          </p>
          <Link href="/en/contact" className="mt-button-primary mt-5 inline-flex">Contact MomTools</Link>
        </section>

        <section className="mt-card-soft p-8 md:p-10">
          <h2 className="text-xl font-bold text-slate-800">Useful next pages</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Link href="/en/cal" className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="font-semibold text-slate-800">Tools</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">Check timing, age, vaccine references, solids readiness, and growth-chart guidance.</div>
            </Link>
            <Link href="/en/info" className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="font-semibold text-slate-800">Guides</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">Move from one question into broader stage-by-stage guidance.</div>
            </Link>
            <Link href="/en/qna" className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="font-semibold text-slate-800">Parent Q&amp;A</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">Browse practical answers to common baby and toddler questions.</div>
            </Link>
            <Link href="/en/contact" className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="font-semibold text-slate-800">Contact</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">Report a problem, suggest a fix, or request a clearer explanation.</div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
