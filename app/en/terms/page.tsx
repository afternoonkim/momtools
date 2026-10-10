import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms | informational use and planning support only",
  description:
    "Review the general terms for using MomTools, including informational use, site limitations, outside links, and page updates.",
  alternates: { canonical: "https://momtools.kr/en/terms" },
};

const sections = [
  {
    title: "Informational use",
    body: "MomTools is designed to help parents organize common timelines, compare routines, and understand everyday questions more clearly. The site should be used as a reference, not as a substitute for diagnosis, treatment, or professional judgment.",
  },
  {
    title: "Medical limits",
    body: "The site does not replace a pediatrician, OB office, lactation consultant, therapist, nurse line, or emergency care. When a child or pregnant patient seems significantly worse than usual, professional care should come first.",
  },
  {
    title: "Tool and checklist limitations",
    body: "Tools, guides, Q&A pages, and checklists simplify real-life situations. Personal history, prematurity, chronic conditions, specialist guidance, daycare rules, clinic processes, and local practices can all change what is appropriate for a family.",
  },
  {
    title: "Outside links and services",
    body: "Some pages may connect to outside resources for convenience. Once you leave the site, product details, service quality, availability, privacy practices, and outside content are controlled by that provider, not by MomTools.",
  },
  {
    title: "Content updates",
    body: "Pages may be corrected or updated when guidance changes, a clearer explanation is needed, or a link no longer works. The version shown on the site should be treated as the current one.",
  },
  {
    title: "User responsibility",
    body: "Parents remain responsible for how they use the information on the site, including medical decisions, product choices, legal or insurance actions, and any urgent situations that require professional help.",
  },
];

export default function EnglishTermsPage() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Terms</span>
          <h1 className="mt-title-lg mt-4">General parent information and planning support only</h1>
          <p className="mt-text-main mt-4">
            MomTools can help with planning, observation, and next-step organization, but medical, legal, insurance, and purchasing decisions still depend on your own situation and the appropriate professional guidance.
          </p>
        </section>

        <section className="grid gap-4">
          {sections.map((item) => (
            <article key={item.title} className="mt-card-soft p-6">
              <h2 className="text-lg font-bold text-slate-900">{item.title}</h2>
              <p className="mt-3 text-sm leading-8 text-slate-600">{item.body}</p>
            </article>
          ))}
        </section>

        <section className="mt-card p-6">
          <h2 className="text-lg font-bold text-slate-900">Related pages</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <Link href="/en/privacy" className="rounded-2xl border border-slate-100 bg-white p-4 transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="font-semibold text-slate-800">Privacy</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">See how basic technical and contact information may be handled.</div>
            </Link>
            <Link href="/en/contact" className="rounded-2xl border border-slate-100 bg-white p-4 transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="font-semibold text-slate-800">Contact</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">Send a correction request or report a page issue.</div>
            </Link>
            <Link href="/en/faq" className="rounded-2xl border border-slate-100 bg-white p-4 transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="font-semibold text-slate-800">FAQ</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">Read common questions about the tools and guides.</div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
