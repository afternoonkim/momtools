import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy | how MomTools English uses basic analytics and cookies",
  description: "Learn how MomTools English handles basic analytics, cookies, and limited technical data used to operate the site.",
};

export default function EnglishPrivacyPage() {
  return (
    <div className="mt-page"><div className="mt-container-narrow space-y-6">
      <section className="mt-card p-8"><span className="mt-badge">Privacy</span><h1 className="mt-title-lg mt-4">A simple explanation of what data is used on the site</h1><p className="mt-text-main mt-4">MomTools English uses limited technical information to keep the site working, understand which pages are useful, and support advertising or analytics where enabled.</p></section>
      <section className="grid gap-4"><article className="mt-card-soft p-6"><h2 className="text-lg font-bold text-slate-900">Basic usage data</h2><p className="mt-3 text-sm leading-8 text-slate-600">Like most websites, the site may collect standard technical details such as browser type, device information, and general page activity to improve performance and usability.</p></article><article className="mt-card-soft p-6"><h2 className="text-lg font-bold text-slate-900">Cookies and ads</h2><p className="mt-3 text-sm leading-8 text-slate-600">Cookies may be used for analytics, remembering basic settings, and showing advertising if ad services are active. You can manage cookies through your browser settings.</p></article><article className="mt-card-soft p-6"><h2 className="text-lg font-bold text-slate-900">Third-party services</h2><p className="mt-3 text-sm leading-8 text-slate-600">Analytics or ad providers may collect data according to their own policies. Those services operate independently of MomTools and should be reviewed directly when needed.</p></article></section>
    </div></div>
  );
}
