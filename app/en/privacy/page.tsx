import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy | how MomTools English handles basic technical information",
  description:
    "Read how MomTools English may handle limited technical information, cookies, and contact details to keep the site working and improve parent-facing pages.",
  alternates: { canonical: "https://momtools.kr/en/privacy" },
};

const sections = [
  {
    title: "What this page covers",
    body: "MomTools English is designed to be used without creating an account. This page explains what limited information may be processed when someone visits a page, uses a tool, or sends a message through the contact channel.",
  },
  {
    title: "Information that may be handled",
    body: "Like most websites, the site may process basic technical details such as device type, browser type, page activity, referral source, and error logs. If you contact the site, your email address and the message you send may also be reviewed so the issue can be answered or fixed.",
  },
  {
    title: "Why that information may be used",
    body: "These details may be used to keep pages working, understand which sections are useful, spot broken links, review display problems, improve site stability, and respond to contact requests. The aim is site maintenance and usability, not collecting more personal information than needed.",
  },
  {
    title: "Cookies and similar browser tools",
    body: "Cookies or similar technologies may be used for basic settings, site performance, analytics, and simple traffic understanding. You can manage cookies in your browser settings, although some parts of the site may work less smoothly if cookies are blocked.",
  },
  {
    title: "Advertising and Google AdSense",
    body: "MomTools English may show ads served by Google AdSense and other third-party advertising partners. These partners may set or read cookies and use device identifiers (such as advertising IDs) to display ads that are more relevant to you. Google's processing of advertising data is governed by the Google Privacy Policy and the page \"How Google uses information from sites or apps that use our services.\" If you'd rather not see personalized ads, choose \"Reject personalized ads\" in the cookie banner, or visit adssettings.google.com, optout.aboutads.info, or youronlinechoices.eu to opt out of personalized advertising. EU/EEA, UK, and Swiss visitors may see a separate consent prompt before any non-essential cookies load. California residents have the right to opt out of the sale or sharing of personal information under CCPA.",
  },
  {
    title: "Third-party services and links",
    body: "Some pages may link to outside services such as videos, public resources, shopping pages, or embedded content. Once you leave MomTools English, the other service's own privacy policy and terms control what happens there.",
  },
  {
    title: "Sensitive information",
    body: "Please do not send private medical details, full birth dates, test results, photos of a child, or other sensitive personal information by email. The site is not a medical record system and is not meant for urgent health communication.",
  },
  {
    title: "Policy updates",
    body: "This page may be revised as the site changes, expands, or improves how it handles technical operations and contact requests. The latest version on the site should be treated as the current reference.",
  },
];

export default function EnglishPrivacyPage() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Privacy</span>
          <h1 className="mt-title-lg mt-4">How MomTools English handles basic technical and contact information</h1>
          <p className="mt-text-main mt-4">
            MomTools English is built to be simple to use. Most visitors read pages and use tools without logging in or creating an account.
            Even so, some limited technical information may still be processed to keep the site working, understand page performance,
            and respond to messages sent through the contact channel.
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
