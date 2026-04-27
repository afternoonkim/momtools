import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About MomTools English | practical U.S. parenting tools with clear limits",
  description:
    "Learn what MomTools English is built for, how the English pages are structured for U.S. parents, and why the site focuses on planning support instead of false medical certainty.",
  alternates: { canonical: "https://momtools.kr/en/about" },
};

const pillars = [
  {
    title: "Plain-language help first",
    description:
      "The site is written for tired parents, not for people who want to decode technical wording. Pages aim to answer the first useful question clearly, then link to the next step.",
  },
  {
    title: "U.S.-focused structure",
    description:
      "The English version is built around the types of questions English-speaking parents search in the United States, including due dates, newborn routines, vaccine timing, solids, and daycare transitions.",
  },
  {
    title: "Reference, not diagnosis",
    description:
      "MomTools English is meant for planning and understanding. It is not a substitute for a pediatrician, OB office, emergency evaluation, or individualized medical advice.",
  },
];

const principles = [
  "Major tools are connected to related guides, Q&A pages, and checklists so parents can keep moving without starting over.",
  "Pages try to explain what is common, what is worth watching, and when online reading should stop and a clinician should come first.",
  "Site policies, contact information, and usage limits are visible because trust matters as much as convenience.",
  "Pages favor clear structure and useful next steps over filler — so you spend less time reading and more time deciding.",
];

const bestFor = [
  "Parents who want a faster starting point before digging into official guidance.",
  "Families trying to organize timelines, checklists, and common routine questions.",
  "Users who prefer a simpler explanation before comparing it with their pediatrician or OB guidance.",
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
          <h1 className="mt-title-lg mt-4">MomTools English is built to make the next parenting step clearer</h1>
          <p className="mt-text-main mt-4">
            MomTools English organizes common parenting questions into one clearer path. Instead of leaving you
            with a single calculator or a short answer, the site connects the result, the plain-language
            explanation, and the next practical page. The goal is simple: help you decide what to check,
            what to prepare, and what to ask next — without ten browser tabs.
          </p>
          <p className="mt-text-sub mt-4">
            The English version is especially focused on U.S. parent searches and everyday family use. At the same time,
            the site stays clear about its limits. It is a reference for planning and education, not a medical service,
            urgent care channel, or replacement for professional judgment.
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
          <h2 className="text-2xl font-bold tracking-tight text-slate-800">What you can find on the site</h2>
          <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            <p>
              <strong className="text-slate-800">Calculators</strong> help with timing questions such as due date,
              exact baby age, vaccine schedule reference, starting solids, and growth percentile checks.
            </p>
            <p>
              <strong className="text-slate-800">Guide pages</strong> turn those results into fuller explanations so
              parents can understand the situation before comparing it with official or clinical guidance.
            </p>
            <p>
              <strong className="text-slate-800">Q&amp;A and checklists</strong> cover the practical follow-up questions
              that usually appear right after the first search, such as newborn routines, feeding concerns, or daycare prep.
            </p>
          </div>
        </section>

        <section className="mt-card-soft p-8 md:p-10">
          <h2 className="text-xl font-bold text-slate-800">Editorial principles</h2>
          <div className="mt-5 space-y-3 text-sm leading-8 text-slate-600 md:text-base">
            {principles.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-100 bg-white px-5 py-4">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <article className="mt-card p-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-800">Best use of MomTools English</h2>
            <div className="mt-5 space-y-3 text-sm leading-8 text-slate-600 md:text-base">
              {bestFor.map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 px-5 py-4">{item}</div>
              ))}
            </div>
          </article>
          <article className="mt-card p-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-800">When MomTools is not enough</h2>
            <div className="mt-5 space-y-3 text-sm leading-8 text-slate-600 md:text-base">
              {notFor.map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 px-5 py-4">{item}</div>
              ))}
            </div>
          </article>
        </section>

        <section className="mt-card p-8 md:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-800">Who runs MomTools</h2>
          <p className="mt-4 text-sm leading-8 text-slate-600 md:text-base">
            MomTools is built and maintained by a single individual operator. Corrections, edits, and content
            requests are reviewed and applied directly. The channels below are the official ways to verify the
            site&apos;s ownership and reach the maintainer outside of the contact form.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <a
              href="https://blog.naver.com/afterchan"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">Naver Blog</div>
              <div className="mt-2 font-semibold text-slate-800">blog.naver.com/afterchan</div>
              <p className="mt-2 text-sm leading-7 text-slate-500">Personal blog with parenting notes and updates from the site maintainer.</p>
            </a>
            <a
              href="https://github.com/afternoonkim"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">GitHub</div>
              <div className="mt-2 font-semibold text-slate-800">github.com/afternoonkim</div>
              <p className="mt-2 text-sm leading-7 text-slate-500">Public profile and technical history for the maintainer&apos;s open work.</p>
            </a>
          </div>
        </section>

        <section className="mt-card-soft p-8 md:p-10">
          <h2 className="text-xl font-bold text-slate-800">Useful next pages</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Link href="/en/cal" className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="font-semibold text-slate-800">Tool hub</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">Browse the core calculators used most often by parents.</div>
            </Link>
            <Link href="/en/info" className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="font-semibold text-slate-800">Guide hub</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">Move from one question into broader stage-by-stage guidance.</div>
            </Link>
            <Link href="/en/qna" className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="font-semibold text-slate-800">Parent Q&amp;A</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">Read fuller answers to the questions parents type into Google.</div>
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
