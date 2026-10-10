import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact MomTools | report an issue or suggest a better guide",
  description:
    "Contact MomTools to report a broken page, request a correction, suggest a new guide, or ask for a clearer explanation on an existing page.",
  alternates: { canonical: "https://momtools.kr/en/contact" },
};

const contactReasons = [
  {
    title: "Report a page problem",
    description: "Use this when a tool does not respond, a layout breaks on mobile, or a link goes to the wrong place.",
  },
  {
    title: "Request a wording or content fix",
    description: "Send a note when a sentence feels unclear, a section seems incomplete, or a page needs a correction.",
  },
  {
    title: "Suggest a helpful new page",
    description: "Suggest a checklist, tool, or guide when you keep running into a parenting question that is hard to answer clearly.",
  },
  {
    title: "Partnership or content inquiry",
    description: "For collaboration or content questions, include the purpose of the message and the page or topic it relates to.",
  },
];

const includeItems = [
  "The page URL or exact tool name",
  "What looked wrong, incomplete, or confusing",
  "Your device and browser if it was a display issue",
  "A screenshot if the problem is visual or hard to describe",
];

const boundaries = [
  "MomTools is not a medical contact channel. Urgent health concerns should go to your pediatrician, OB office, nurse line, or emergency care first.",
  "Please do not send private medical records, full birth dates, photos of a child, or other sensitive personal information by email.",
  "A short description plus the page URL is usually enough to understand a site problem or correction request.",
];

export default function EnglishContactPage() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Contact</span>
          <h1 className="mt-title-lg mt-4">Contact MomTools</h1>
          <p className="mt-text-main mt-4">
            Report a broken page, request a correction, suggest a missing guide, or share an idea that would make MomTools more useful for parents.
          </p>

          <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50 p-5">
            <div className="text-sm font-semibold text-slate-800">Email: afternoonkim93@gmail.com</div>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Include the page URL and a short description of what happened or what looks unclear.
            </p>
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-800">Before you send a message</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {boundaries.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-100 bg-white p-5 text-sm leading-7 text-slate-600">{item}</div>
            ))}
          </div>
        </section>

        <section className="mt-card p-8 md:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-800">What you can contact us about</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {contactReasons.map((item) => (
              <article key={item.title} className="rounded-2xl border border-amber-100 bg-white p-5">
                <h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-card p-8 md:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-800">What to include in your message</h2>
          <div className="mt-5 space-y-3 text-sm leading-7 text-slate-600 md:text-base">
            {includeItems.map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3">{item}</div>
            ))}
          </div>
        </section>

        <section className="mt-card-soft p-8 md:p-10">
          <h2 className="text-xl font-bold text-slate-800">Related pages</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <Link href="/en/faq" className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="font-semibold text-slate-800">FAQ</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">See how the site is meant to be used and where its limits are.</div>
            </Link>
            <Link href="/en/privacy" className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="font-semibold text-slate-800">Privacy</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">Review how basic technical information and contact messages may be handled.</div>
            </Link>
            <Link href="/en/terms" className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="font-semibold text-slate-800">Terms</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">Read the general information limits for the site.</div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
