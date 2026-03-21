import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | practical questions about MomTools English",
  description: "Answers to common questions about how to use MomTools English calculators, guides, and checklists.",
};

const faqs = [
  ["Are these tools medical advice?", "No. The tools are for planning and quick reference. Diagnosis, treatment, and urgent concerns should go through your pediatrician or OB team."],
  ["Are the vaccine dates exact?", "They are meant for routine timing reference in the US. Catch-up schedules and medical exceptions should always be confirmed with your clinic."],
  ["Can I use the site if my child was born early?", "You can still use the tools as a starting point, but preterm birth often changes how milestones and feeding questions are discussed with your clinician."],
  ["Why are some pages short?", "The English section is being expanded page by page. Priority pages already have fuller guidance, and more detailed sections are being added gradually."],
];

export default function EnglishFaqPage() {
  return (
    <div className="mt-page"><div className="mt-container-narrow space-y-6">
      <section className="mt-card p-8"><span className="mt-badge">FAQ</span><h1 className="mt-title-lg mt-4">Common questions from parents using MomTools English</h1><p className="mt-text-main mt-4">These answers are written to help you understand what the site is for, when the tools are useful, and when a healthcare professional should come first.</p></section>
      <section className="grid gap-4">{faqs.map(([q,a]) => <article key={q} className="mt-card-soft p-6"><h2 className="text-lg font-bold text-slate-900">{q}</h2><p className="mt-3 text-sm leading-8 text-slate-600 md:text-base">{a}</p></article>)}</section>
      <section className="mt-card p-6"><h2 className="text-lg font-bold text-slate-900">Helpful links</h2><div className="mt-4 flex flex-wrap gap-3"><Link href="/en" className="mt-button-secondary">English home</Link><Link href="/en/info" className="mt-button-secondary">Guides</Link><Link href="/en/contact" className="mt-button-secondary">Contact</Link></div></section>
    </div></div>
  );
}
