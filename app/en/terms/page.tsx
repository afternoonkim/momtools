import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms | general information and planning support only",
  description: "Review the basic terms for using MomTools English, including informational use, limitations, and general site updates.",
};

export default function EnglishTermsPage() {
  return (
    <div className="mt-page"><div className="mt-container-narrow space-y-6">
      <section className="mt-card p-8"><span className="mt-badge">Terms</span><h1 className="mt-title-lg mt-4">General information and planning support only</h1><p className="mt-text-main mt-4">MomTools English is designed to help parents organize information, estimate common timelines, and move through everyday parenting questions more easily.</p></section>
      <section className="grid gap-4"><article className="mt-card-soft p-6"><h2 className="text-lg font-bold text-slate-900">Not medical advice</h2><p className="mt-3 text-sm leading-8 text-slate-600">The site does not replace a pediatrician, OB office, lactation consultant, or emergency care. Use it as a reference, not as a diagnosis or treatment source.</p></article><article className="mt-card-soft p-6"><h2 className="text-lg font-bold text-slate-900">Tool limitations</h2><p className="mt-3 text-sm leading-8 text-slate-600">Calculators and checklists are simplified tools. Real-life decisions may depend on medical history, local clinic guidance, and circumstances the site cannot account for.</p></article><article className="mt-card-soft p-6"><h2 className="text-lg font-bold text-slate-900">Content updates</h2><p className="mt-3 text-sm leading-8 text-slate-600">Pages may be revised as the site expands. Content can change without notice when a section is updated or reorganized.</p></article></section>
    </div></div>
  );
}
