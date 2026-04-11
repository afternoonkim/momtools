import type { Metadata } from "next";
import Link from "next/link";
import DueDateCalculatorClient from "./DueDateCalculatorClient";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import { buildCanonical, getPageDates } from "@/lib/content-meta";

const pageDates = getPageDates("/en/cal/due-date");
const canonical = buildCanonical("/en/cal/due-date");

const keyPoints = [
  "Most U.S. due date estimates start with the first day of your last menstrual period and add 280 days, which is the standard Naegele’s Rule approach used in routine prenatal care.",
  "A due date is best used as a planning anchor for appointments, leave planning, and birth prep, not as a promise of the exact day labor will begin.",
  "If your cycle is irregular, you conceived with fertility treatment, or your early ultrasound gave a different date, your obstetrician or midwife should guide the official estimate.",
];

const faq = [
  {
    q: "How accurate is a due date calculator?",
    a: "It gives a helpful estimate, but it is still an estimate. Many babies are born before or after the predicted date, so the result is most useful for planning the overall timeline of pregnancy rather than guessing the exact day of birth.",
  },
  {
    q: "Why can my doctor’s due date be different from the calculator result?",
    a: "Your care team may adjust the date after an early ultrasound, especially if your cycle length varies or ovulation happened earlier or later than average. In practice, an ultrasound-based estimate often becomes the date used for prenatal follow-up.",
  },
  {
    q: "Does this calculator work for IVF pregnancies?",
    a: "It can still be used as a rough reference, but IVF pregnancies are usually dated using transfer and embryo age details. In that situation, use the fertility clinic or OB team’s date as the main reference.",
  },
  {
    q: "What should I do after I check my estimated due date?",
    a: "Use it to map out the next steps: prenatal visits, routine tests, leave planning, a birth checklist, and the transition to newborn care after delivery. The date itself matters less than the preparation decisions it helps you make.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "MomTools Due Date Calculator",
  applicationCategory: "HealthApplication",
  operatingSystem: "All",
  url: canonical,
  description:
    "Estimate an expected due date from the first day of your last menstrual period and review practical pregnancy planning guidance based on common U.S. prenatal care references.",
};

export const metadata: Metadata = {
  title: "Due Date Calculator | ACOG-based pregnancy due date estimate | MomTools",
  description:
    "Estimate your baby's due date using your last menstrual period, review pregnancy timing, and plan next steps with parent-friendly guidance aligned with common ACOG-based care.",
  alternates: { canonical },
  openGraph: {
    title: "Due Date Calculator | MomTools",
    description:
      "Estimate a pregnancy due date, understand how the date is used in care planning, and review next steps U.S. parents often need.",
    url: canonical,
    siteName: "MomTools",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Due Date Calculator | MomTools",
    description:
      "Estimate a pregnancy due date and review parent-friendly planning guidance aligned with common U.S. prenatal care.",
  },
};

export default function Page() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Pregnancy planning tool</span>
          <h1 className="mt-title-xl mt-5">Estimate your due date and turn it into a real pregnancy plan</h1>
          <p className="mt-text-main mt-4">
            This due date calculator estimates your baby&apos;s expected delivery date from the first day of your last menstrual period.
            The estimate follows the same basic 280-day timing rule that many OB-GYN offices use as a starting point, which is why
            it is such a common first check for newly pregnant parents in the U.S. A due date can help you think ahead about prenatal
            visits, family leave timing, nursery planning, and the general pace of each trimester.
          </p>
          <p className="mt-text-sub mt-4">
            It is still a home reference tool rather than a medical diagnosis. If your ultrasound date, fertility treatment plan, or
            clinician guidance differs from the calculator result, use your care team&apos;s date as the main reference.
          </p>
        </section>

        <DueDateCalculatorClient />

        <ContentUpdateNote
          locale="en"
          publishedOn={pageDates.published}
          updatedOn={pageDates.updated}
          note="This page is reviewed so parents can quickly see when the due date guidance was first published and when the planning advice was most recently checked."
        />

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-lg">What parents usually want from a due date result</h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 md:text-base">
            {keyPoints.map((item) => (
              <li key={item} className="rounded-2xl bg-sky-50/80 px-4 py-4 text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="mt-card p-6 md:p-8">
            <h2 className="mt-title-lg">How this estimate is usually used in the U.S.</h2>
            <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
              <p>
                In most everyday situations, parents use a due date calculator to answer three simple questions: how far along am I,
                when should I expect major prenatal milestones, and when do I need to start preparing for birth? The common rule is to
                count 40 weeks from the first day of the last menstrual period. That method is familiar because it mirrors how many care
                teams begin pregnancy dating before they compare it with ultrasound findings.
              </p>
              <p>
                For parents, the most helpful part is not the exact date itself. It is what the date helps you plan. Once you know your
                approximate week of pregnancy, you can place appointments on the calendar, start a list of insurance or leave tasks,
                think about travel timing, and gradually prepare for the switch from pregnancy care to newborn care. In that sense, a
                due date works best as a practical organizing tool.
              </p>
            </div>
          </article>

          <article className="mt-card p-6 md:p-8">
            <h2 className="mt-title-lg">When your clinician&apos;s date matters more than the calculator</h2>
            <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
              <p>
                A home calculator is helpful when your cycle is predictable and you know the date of your last period. It becomes less
                reliable when your cycle is irregular, ovulation timing is uncertain, or bleeding did not reflect a normal period.
                Fertility treatment, including IVF, is another common example where clinic-based dating is more accurate than a general
                LMP estimate.
              </p>
              <p>
                In many pregnancies, an early ultrasound gives the clearest dating reference. If your ultrasound estimate and this tool
                do not match, follow the plan from your obstetrician, midwife, or fertility team. A calculator can still help you think
                about planning, but it should not replace clinical judgment.
              </p>
            </div>
          </article>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-lg">Parent-friendly references behind this page</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            <p>
              This page is written for everyday use with the same broad timing concepts U.S. parents often hear in prenatal care. The
              wording is designed to stay practical and easy to follow, while the overall approach is aligned with common references
              parents encounter from ACOG, AAP, and hospital prenatal education materials. The goal is to help you understand what a
              due date means in real life, not simply generate a number with no context.
            </p>
            <p>
              Because pregnancy care is personal, this page should be used alongside your own provider&apos;s recommendations. If you have
              bleeding, pain, sudden swelling, reduced fetal movement later in pregnancy, or any other symptom that feels urgent, a
              calculator is not the right next step. Reach out to your care team directly.
            </p>
          </div>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-lg">Frequently asked questions</h2>
          <div className="mt-5 space-y-4">
            {faq.map((item) => (
              <article key={item.q} className="rounded-3xl border border-slate-100 bg-white p-5">
                <h3 className="text-base font-semibold text-slate-900">{item.q}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Keep planning</div>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Link href="/en/info/pregnancy" className="mt-list-card">
              <div className="font-semibold text-slate-800">Related guide: Pregnancy</div>
              <div className="mt-2 text-sm text-slate-500">Read through trimester planning, symptom basics, and practical next steps.</div>
            </Link>
            <Link href="/en/qna/health" className="mt-list-card">
              <div className="font-semibold text-slate-800">Parenting Q&amp;A: Health</div>
              <div className="mt-2 text-sm text-slate-500">See common questions parents ask about pregnancy and early newborn care.</div>
            </Link>
            <Link href="/en/cal/baby-age" className="mt-list-card">
              <div className="font-semibold text-slate-800">Recommended tool: Baby age calculator</div>
              <div className="mt-2 text-sm text-slate-500">After delivery, use your baby&apos;s age to track visits, milestones, and routines.</div>
            </Link>
            <Link href="/en/checklists/birth" className="mt-list-card">
              <div className="font-semibold text-slate-800">Recommended checklist: Birth prep</div>
              <div className="mt-2 text-sm text-slate-500">Turn the estimated due date into a practical hospital bag and document plan.</div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
