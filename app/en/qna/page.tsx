import type { Metadata } from "next";
import Link from "next/link";
import { enQnaEntries } from "@/data/en/qna100";

export const metadata: Metadata = {
  title: "Parent Q&A | 100 baby and toddler questions U.S. parents search",
  description:
    "Browse 100 parent questions about sleep, feeding, milestones, routines, toddler behavior, and baby health with practical U.S.-focused guidance.",
  keywords: [
    "baby questions",
    "parent q&a",
    "newborn sleep schedule",
    "when to start solids",
    "toddler tantrums",
    "baby milestones",
  ],
  alternates: { canonical: "https://momtools.kr/en/qna" },
};

const topicCards = [
  { href: "/en/qna/health", title: "Health", description: "Common parent searches about fever, spit-up, gas, feeding, hydration, solids, allergies, and when to call the pediatrician." },
  { href: "/en/qna/growth", title: "Growth", description: "Questions about newborn sleep, baby milestones, naps, walking, language, growth patterns, and milestone timing." },
  { href: "/en/qna/behavior", title: "Behavior", description: "Questions parents search about crying, separation anxiety, tantrums, biting, routines, self-soothing, and daycare transitions." },
];

const featuredQuestions = enQnaEntries.slice(0, 9);

export default function EnQnaHubPage() {
  return (
    <div className="mt-page"><div className="mt-container space-y-8">
      <section className="mt-card p-8 md:p-10"><span className="mt-badge">Parent Q&amp;A</span><h1 className="mt-title-xl mt-5">100 detailed baby and toddler questions with practical answers</h1><p className="mt-text-main mt-4 max-w-4xl">This section is built around the questions real parents type into Google: newborn sleep schedule, when to start solids, what baby poop color means, how to handle tantrums, and when to call the pediatrician. Each answer is structured to help with what to check first, what often helps at home, and which tool or guide to open next.</p><div className="mt-4 text-sm font-semibold text-sky-700">{enQnaEntries.length} total questions</div></section>
      <section className="grid gap-5 md:grid-cols-3">{topicCards.map((item) => (<Link key={item.href} href={item.href} className="mt-card p-6 transition hover:-translate-y-0.5"><h2 className="text-lg font-bold text-slate-800">{item.title}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p><div className="mt-5 text-sm font-semibold text-sky-700">Open topic</div></Link>))}</section>
      <section className="mt-card-soft p-6 md:p-8"><div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Popular parent searches</div><div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{featuredQuestions.map((item) => (<Link key={item.slug} href={`/en/qna/${item.slug}`} className="rounded-2xl bg-white px-5 py-5 shadow-sm transition hover:-translate-y-0.5"><div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">{item.topic}</div><div className="mt-2 font-semibold text-slate-800">{item.question}</div></Link>))}</div></section>
    </div></div>
  );
}
