import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy | technical information and contact messages | MomTools",
  description:
    "Read how MomTools may handle limited technical information, cookies, and contact details when you use the U.S. parenting pages.",
  alternates: { canonical: "https://momtools.kr/en/privacy" },
};

const sections = [
  {
    title: "Using these pages",
    body: "You can browse the English parenting pages and use their public tools without creating a separate account. Some calculators ask for dates, age, or measurements so they can show an on-page result. Only enter the information needed for the tool you are using.",
  },
  {
    title: "Technical information",
    body: "Like most websites, MomTools may process limited technical details such as device type, browser type, page activity, referral source, and error logs. This information can help keep pages working, identify broken links, and improve site stability and usability.",
  },
  {
    title: "Contact messages",
    body: "If you email MomTools, the email address and message you send may be reviewed so the question, correction request, or site issue can be handled. Please avoid including information that is not necessary for the request.",
  },
  {
    title: "Cookies and similar browser tools",
    body: "Cookies or similar technologies may be used for basic settings, site performance, analytics, and traffic understanding. You can manage cookies in your browser settings, although some site behavior may be less convenient when cookies are blocked.",
  },
  {
    title: "External resources",
    body: "Some pages link to outside resources such as CDC guidance, public health information, videos, or other websites. Once you follow an external link, that service's own privacy policy and terms apply.",
  },
  {
    title: "Sensitive information",
    body: "Please do not send private medical records, full birth dates, photos of a child, test results, home addresses, or other sensitive personal information by email. MomTools is not a medical record system and is not an urgent health communication channel.",
  },
  {
    title: "Policy updates",
    body: "This page may be updated when the site changes or when the way technical information and contact messages are handled changes. The version shown here should be treated as the current reference for these pages.",
  },
];

export default function EnglishPrivacyPage() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Privacy</span>
          <h1 className="mt-title-lg mt-4">How MomTools handles basic technical and contact information</h1>
          <p className="mt-text-main mt-4">
            Most people can read the parenting pages and use the public tools without signing in. Limited technical information may still be processed to keep the site working, understand page performance, and respond to messages you choose to send.
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

        <section className="mt-card p-6 md:p-8">
          <h2 className="text-lg font-bold text-slate-900">Related pages</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <Link href="/en/contact" className="rounded-2xl border border-slate-100 bg-white p-4 transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="font-semibold text-slate-800">Contact</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">See what kinds of messages are useful to send.</div>
            </Link>
            <Link href="/en/terms" className="rounded-2xl border border-slate-100 bg-white p-4 transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="font-semibold text-slate-800">Terms</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">Read the general information limits for the site.</div>
            </Link>
            <Link href="/en/faq" className="rounded-2xl border border-slate-100 bg-white p-4 transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="font-semibold text-slate-800">FAQ</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">Read how the tools are meant to be used by parents.</div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
