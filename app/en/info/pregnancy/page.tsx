import type { Metadata } from "next";
import Link from "next/link";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import RelatedContent from "@/components/common/RelatedContent";
import { getPageDates } from "@/lib/content-meta";

const pageDates = getPageDates("/en/info/pregnancy");

export const metadata: Metadata = {
  title: "Pregnancy guide | due date, trimester timing, warning signs, and planning",
  description:
    "A practical U.S. pregnancy guide covering due-date dating, trimester timing, prenatal planning, warning signs, and when clinician guidance should take priority.",
  alternates: { canonical: "https://momtools.kr/en/info/pregnancy" },
  openGraph: {
    title: "Pregnancy guide | MomTools",
    description: "Due-date context, trimester timing, prenatal planning, and practical next steps for U.S. families.",
    url: "https://momtools.kr/en/info/pregnancy",
    locale: "en_US",
    type: "website",
  },
};

const sections = [
  {
    title: "Use the clinically established due date",
    text: "A home calculator can start with 280 days from the first day of the last menstrual period, but first-trimester ultrasound is the most accurate method to establish or confirm gestational age. ART pregnancies should use treatment-specific dating from the fertility team.",
  },
  {
    title: "Know the trimester boundaries",
    text: "ACOG describes the first trimester as 0 weeks through 13 weeks 6 days, the second as 14 weeks through 27 weeks 6 days, and the third beginning at 28 weeks.",
  },
  {
    title: "Prepare questions before visits",
    text: "Keep a short list of symptoms, medications and supplements, test questions, work or travel concerns, and birth-prep decisions. A written list is especially useful when several issues come up between appointments.",
  },
  {
    title: "Know when online reading should stop",
    text: "Heavy bleeding, severe or persistent abdominal pain, trouble breathing, severe headache or vision changes, reduced fetal movement later in pregnancy, or any symptom your OB team has told you is urgent should be handled through medical care rather than an online guide.",
  },
];

export default function PregnancyPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">U.S. pregnancy guide</span>
          <h1 className="mt-title-xl mt-5">Use timing to organize care, not to replace it</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            This guide keeps pregnancy planning focused on due-date context, trimester timing, questions for prenatal visits, and warning signs.
            It is designed to support conversations with your OB-GYN, midwife, or maternal-fetal medicine team rather than create a separate medical plan.
          </p>
        </section>

        <ContentUpdateNote
          publishedOn={pageDates.published}
          updatedOn={pageDates.updated}
          locale="en"
          note="Reviewed against current ACOG guidance on estimated due dates and trimester definitions."
        />

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
              <RelatedLink href="/en/cal/due-date" title="Due date calculator" description="Estimate an LMP-based EDD and understand when ultrasound dating takes priority." />
              <RelatedLink href="/en/checklists/birth" title="Birth prep checklist" description="Keep hospital bag, paperwork, and home prep in one place." />
              <RelatedLink href="/en/info/newborn" title="Newborn guide" description="Review safe sleep, feeding, diaper output, and newborn warning signs." />
            </div>
            <a href="https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/05/methods-for-estimating-the-due-date" target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-semibold text-sky-700 underline underline-offset-4">ACOG pregnancy dating guidance</a>
          </aside>
        </section>

        <RelatedContent
          locale="en"
          title="Helpful next pages"
          description="Use the related tools, guides, and checklists below to turn one answer into a clearer next step."
          items={[
            { href: "/en/cal/due-date", title: "Due date calculator", description: "Estimate an LMP-based due date and gestational age." },
            { href: "/en/checklists/birth", title: "Birth prep checklist", description: "Keep your hospital bag, paperwork, and home prep in one place." },
            { href: "/en/info/newborn", title: "Newborn guide", description: "See what parents usually need right after delivery." },
            { href: "/en/qna/health", title: "Health Q&A", description: "Browse practical parent questions and know when to call a clinician." }
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
