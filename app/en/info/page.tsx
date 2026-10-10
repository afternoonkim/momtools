import type { Metadata } from "next";
import Link from "next/link";
import MedicalDisclaimer from "@/components/common/MedicalDisclaimer";

export const metadata: Metadata = {
  title: "Baby and toddler guides for everyday parenting decisions | MomTools",
  description:
    "Browse practical guides for pregnancy, newborn care, starting solids, and toddler routines with clear explanations and useful next steps.",
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

const nextSteps = [
  "Choose the stage that matches your family right now instead of reading everything in order.",
  "Use a related tool when age or timing matters, or a checklist when you need to turn information into a plan.",
  "For symptoms, medical decisions, or questions tied to your child’s history, use the guide as context and confirm with a clinician.",
];

export default function Page() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Guides</span>
          <h1 className="mt-title-lg mt-4">Start with the stage your family is in now</h1>
          <p className="mt-text-main mt-4">
            Pick pregnancy, newborn care, starting solids, or toddler life, then follow the related tool, checklist, or Q&amp;A when you need a clearer next step.
          </p>
        </section>

        <MedicalDisclaimer lang="en" variant="compact" />

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
          <h2 className="text-xl font-bold text-slate-800">Choose what to do next</h2>
          <div className="mt-5 space-y-3 text-sm leading-8 text-slate-600 md:text-base">
            {nextSteps.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-100 bg-white px-5 py-4">{item}</div>
            ))}
          </div>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-800">Helpful next pages</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/en/cal" className="mt-button-secondary">Open tools</Link>
            <Link href="/en/checklists" className="mt-button-secondary">Open checklists</Link>
            <Link href="/en/qna" className="mt-button-secondary">Browse parent Q&amp;A</Link>
            <Link href="/en/faq" className="mt-button-secondary">Read FAQ</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
