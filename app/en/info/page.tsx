import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Baby and toddler guides for everyday parenting decisions | MomTools English",
  description:
    "Browse stage-based parenting guides for pregnancy, newborn care, starting solids, and toddler routines with simpler explanations and useful next-step links.",
  alternates: { canonical: "https://momtools.kr/en/info" },
};

const guideCards = [
  {
    title: "Pregnancy",
    href: "/en/info/pregnancy",
    description: "Start here for due date planning, trimester priorities, visit questions, and what usually matters before birth.",
  },
  {
    title: "Newborn",
    href: "/en/info/newborn",
    description: "Focus on feeding patterns, diaper output, safe sleep, newborn routines, and the questions that feel biggest in the first weeks.",
  },
  {
    title: "Starting solids",
    href: "/en/info/weaning",
    description: "Readiness signs, first foods, texture progression, and how to keep early meals simple and realistic.",
  },
  {
    title: "Toddler",
    href: "/en/info/toddler",
    description: "Daily routines, picky eating, big feelings, daycare transitions, and everyday behavior questions.",
  },
];

const whyThisHubWorks = [
  "Each guide is written as a stage-based entry point, so parents can start with the season they are in now.",
  "The pages connect directly to calculators, Q&A topics, and checklists instead of leaving parents with a dead end.",
  "The writing aims to reduce noise and help parents decide what to look at next, not to overwhelm them with every possible detail.",
];

export default function Page() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Guide hub</span>
          <h1 className="mt-title-lg mt-4">Stage-based parenting guides for everyday decisions</h1>
          <p className="mt-text-main mt-4">
            This section is built for parents who do not just want an answer. They want context. Open the stage that matches your life now,
            then use the related calculator, checklist, or Q&amp;A page that helps the next question make more sense.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          {guideCards.map((item) => (
            <Link key={item.href} href={item.href} className="mt-card p-6 transition hover:-translate-y-0.5">
              <h2 className="text-xl font-bold text-slate-800">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              <div className="mt-5 text-sm font-semibold text-sky-700">Open guide</div>
            </Link>
          ))}
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-800">Why this hub matters</h2>
          <div className="mt-5 space-y-3 text-sm leading-8 text-slate-600 md:text-base">
            {whyThisHubWorks.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-100 bg-white px-5 py-4">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-800">Helpful next pages</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/en/cal" className="mt-button-secondary">Open calculator hub</Link>
            <Link href="/en/checklists" className="mt-button-secondary">Open checklists</Link>
            <Link href="/en/qna" className="mt-button-secondary">Browse parent Q&amp;A</Link>
            <Link href="/en/faq" className="mt-button-secondary">Read FAQ</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
