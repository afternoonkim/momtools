import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | how to use MomTools English and where its limits are",
  description:
    "Read common questions about MomTools English, including how calculators and guides should be used, when a pediatrician comes first, and how to report a page issue.",
  alternates: { canonical: "https://momtools.kr/en/faq" },
};

const faqs = [
  {
    question: "Are the English tools medical advice?",
    answer:
      "No. MomTools English is written as a parent reference for planning, observation, and clearer next steps. It is not medical advice, diagnosis, or treatment guidance.",
  },
  {
    question: "Can I treat the vaccine schedule page as my child's exact appointment plan?",
    answer:
      "No. The page is a routine reference only. Real appointment timing can change because of clinic schedules, illness, catch-up doses, insurance issues, or pediatrician guidance.",
  },
  {
    question: "Do the age and milestone pages work the same way for babies born early?",
    answer:
      "They can still be helpful as a reference, but preterm babies are often discussed using adjusted age for milestones and feeding questions. Your child's own clinical guidance should come first.",
  },
  {
    question: "Why are the answers written around observation and next steps instead of diagnosis?",
    answer:
      "Because that is what parents can actually use at home. A short article cannot safely diagnose a child, but it can help a parent notice patterns, track changes, and decide when a clinician should be contacted.",
  },
  {
    question: "Are the English pages just translations of the Korean pages?",
    answer:
      "No. The English section is meant to stand on its own for English-speaking users and U.S.-style search intent. It is structured around the kinds of questions those parents actually search in English.",
  },
  {
    question: "What should I do if a page looks wrong, outdated, or broken?",
    answer:
      "Use the contact page and include the page URL, what looks incorrect, and a screenshot if the issue is visual. Clear correction requests are the easiest updates to review and fix.",
  },
];

const quickTakeaways = [
  "Use the tools for timing, planning, and context, not for diagnosis.",
  "Clinic routines, state rules, insurance coverage, and personal medical history can change what applies to your family.",
  "When a child seems much worse than usual or a parent feels seriously uneasy, contacting a clinician is the safer move.",
];

export default function EnglishFaqPage() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">FAQ</span>
          <h1 className="mt-title-lg mt-4">Common questions about using MomTools English</h1>
          <p className="mt-text-main mt-4">
            These answers explain what the English pages are built for, how parents usually get the most value from them,
            and when online information should stop and professional guidance should come first.
          </p>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-800">Quick takeaways</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {quickTakeaways.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-100 bg-white p-5 text-sm leading-7 text-slate-600">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-4">
          {faqs.map((item) => (
            <article key={item.question} className="mt-card p-6 md:p-8">
              <h2 className="text-lg font-bold text-slate-900">{item.question}</h2>
              <p className="mt-3 text-sm leading-8 text-slate-600 md:text-base">{item.answer}</p>
            </article>
          ))}
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-800">Helpful links</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <Link href="/en" className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="font-semibold text-slate-800">English home</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">Start from the main tools and guides hub.</div>
            </Link>
            <Link href="/en/contact" className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="font-semibold text-slate-800">Contact</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">Report a bug, suggest a fix, or ask for a clearer explanation.</div>
            </Link>
            <Link href="/en/terms" className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="font-semibold text-slate-800">Terms</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">Review the general limits of using the site.</div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
