import type { Metadata } from "next";
import Link from "next/link";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import RelatedContent from "@/components/common/RelatedContent";

export const metadata: Metadata = {
  title: "Pregnancy guide | due date planning, trimester priorities, and next steps",
  description:
    "A practical pregnancy guide for parents in the U.S., covering due date planning, trimester priorities, prenatal visits, symptom questions, and birth preparation.",
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
    title: "Start with timing, not with everything",
    text: "Most pregnancy questions feel easier once the timing is clear. Due date, current week, the next visit, and the trimester you are in usually matter more than reading every possible topic at once.",
  },
  {
    title: "Think in trimester priorities",
    text: "The first trimester often centers on confirmation, early symptoms, and basic questions. The second often brings more planning space. The third usually shifts attention toward birth prep, leave planning, and what you want ready before labor starts.",
  },
  {
    title: "Prepare questions before visits",
    text: "Parents often get more out of prenatal visits when they bring a short written list. Symptoms, testing questions, work concerns, medication questions, and birth-prep decisions are easier to discuss when they are not left to memory.",
  },
  {
    title: "Know when online reading should stop",
    text: "Heavy bleeding, severe abdominal pain, reduced fetal movement later in pregnancy, severe headache, or any symptom your OB office has specifically warned you about should be handled through your medical team first.",
  },
];

export default function PregnancyPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Pregnancy guide</span>
          <h1 className="mt-title-xl mt-5">Pregnancy planning that is easier to follow in real life</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            This guide is built for everyday use: due date timing, trimester priorities, prenatal visit planning,
            symptom questions, and birth preparation. The goal is to make the next step clearer without turning
            pregnancy into a full-time research project.
          </p>
        </section>

        <ContentUpdateNote publishedOn="2026-04-09" updatedOn="2026-04-11" locale="en" />

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

        <RelatedContent
          locale="en"
          title="Helpful next pages"
          description="Use the related tools, guides, and checklists below to turn one answer into a clearer next step."
          items={[
            { href: "/en/cal/due-date", title: "Due date calculator", description: "Estimate your due date and pregnancy week before planning the next steps." },
            { href: "/en/checklists/birth", title: "Birth prep checklist", description: "Keep your hospital bag, paperwork, and home prep in one place." },
            { href: "/en/info/newborn", title: "Newborn guide", description: "See what parents usually need right after delivery." },
            { href: "/en/qna/health", title: "Health Q&A", description: "Browse practical parent questions about symptoms and when to call your OB or pediatrician." }
          ]}
        />
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
