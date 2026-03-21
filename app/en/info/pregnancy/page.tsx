import type { Metadata } from "next";
import Link from "next/link";
import AdBlock from "@/components/ad/AdBlock";

export const metadata: Metadata = {
  title: "Pregnancy guide | due date planning, appointments, and trimester basics",
  description:
    "A practical pregnancy guide for parents in the US, covering trimester planning, prenatal appointments, common symptoms, and what to prepare before birth.",
  alternates: { canonical: "https://momtools.kr/en/info/pregnancy" },
  openGraph: {
    title: "Pregnancy guide | MomTools",
    description:
      "Trimester basics, prenatal visit planning, symptom tracking, and practical preparation for birth.",
    url: "https://momtools.kr/en/info/pregnancy",
    locale: "en_US",
    type: "website",
  },
};

const sections = [
  {
    title: "What most parents want first",
    text: "Most pregnancy questions start with timing: how far along you are, when your due date falls, and which appointments matter next. A simple structure helps more than reading everything at once.",
  },
  {
    title: "Trimester planning in real life",
    text: "The first trimester usually brings the biggest uncertainty, the second is often when planning feels easier, and the third is when practical decisions pick up. Thinking by trimester helps you focus on what matters now instead of trying to prepare for everything at once.",
  },
  {
    title: "When online information is not enough",
    text: "Heavy bleeding, severe abdominal pain, reduced fetal movement later in pregnancy, or symptoms your OB office has told you to watch should always be handled through your medical team first.",
  },
];

export default function PregnancyPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Pregnancy guide</span>
          <h1 className="mt-title-xl mt-5">Pregnancy planning that feels easier to follow</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            This page is built for everyday use: due date timing, trimester priorities, what to ask at visits,
            and how to prepare without turning pregnancy into a full-time research project.
          </p>
        </section>

        <AdBlock placement="contentInline" format="horizontal" label="Pregnancy guide" />

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="mt-card p-6 md:p-8 space-y-5">
            {sections.map((section) => (
              <article key={section.title}>
                <h2 className="text-xl font-bold text-slate-900">{section.title}</h2>
                <p className="mt-3 text-sm leading-8 text-slate-600 md:text-base">{section.text}</p>
              </article>
            ))}
          </div>

          <aside className="mt-card-soft p-6 md:p-8">
            <h2 className="text-lg font-bold text-slate-900">Helpful next steps</h2>
            <div className="mt-4 grid gap-3">
              <RelatedLink href="/en/cal/due-date" title="Due date calculator" description="Estimate your due date and current pregnancy week." />
              <RelatedLink href="/en/checklists/birth" title="Birth prep checklist" description="Keep hospital bag, paperwork, and home prep in one place." />
              <RelatedLink href="/en/info/newborn" title="Newborn guide" description="See what usually comes next after delivery." />
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}

function RelatedLink({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link href={href} className="rounded-2xl border border-slate-100 bg-white p-4 transition hover:-translate-y-0.5 hover:border-amber-200">
      <div className="font-semibold text-slate-800">{title}</div>
      <div className="mt-2 text-sm leading-7 text-slate-500">{description}</div>
    </Link>
  );
}
