import type { Metadata } from "next";
import Link from "next/link";
import { enQnaEntries } from "@/data/en/qna100";

export const metadata: Metadata = {
  title: "Parent Q&A | 100 common baby and toddler questions",
  description:
    "Detailed answers to 100 common parent questions about health, feeding, sleep, milestones, routines, and toddler behavior.",
  alternates: { canonical: "https://momtools.kr/en/qna" },
};

const topicCards = [
  {
    href: "/en/qna/health",
    title: "Health",
    description: "Symptoms, feeding, solids, spit-up, constipation, allergies, hydration, and when to call the pediatrician.",
  },
  {
    href: "/en/qna/growth",
    title: "Growth",
    description: "Sleep, milestones, rolling, crawling, walking, language, and healthy day-to-day development.",
  },
  {
    href: "/en/qna/behavior",
    title: "Behavior",
    description: "Crying, routines, separation anxiety, tantrums, hitting, biting, bonding, and everyday family life.",
  },
];

const featuredQuestions = enQnaEntries.slice(0, 9);

export default function EnQnaHubPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Parent Q&amp;A</span>
          <h1 className="mt-title-xl mt-5">100 detailed parent questions with practical answers</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            This section is built for everyday parenting decisions. Each page explains what to look at first,
            what usually helps at home, when a symptom or behavior may still be normal, and when it makes sense
            to call your pediatrician.
          </p>
          <div className="mt-4 text-sm font-semibold text-sky-700">{enQnaEntries.length} total questions</div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {topicCards.map((item) => (
            <Link key={item.href} href={item.href} className="mt-card p-6 transition hover:-translate-y-0.5">
              <h2 className="text-lg font-bold text-slate-800">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              <div className="mt-5 text-sm font-semibold text-sky-700">Open topic</div>
            </Link>
          ))}
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Popular questions</div>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredQuestions.map((item) => (
              <Link
                key={item.slug}
                href={`/en/qna/${item.slug}`}
                className="rounded-2xl bg-white px-5 py-5 shadow-sm transition hover:-translate-y-0.5"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">{item.topic}</div>
                <div className="mt-2 font-semibold text-slate-800">{item.question}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
