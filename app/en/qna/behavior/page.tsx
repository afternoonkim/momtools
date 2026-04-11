import type { Metadata } from "next";
import Link from "next/link";
import { enQnaEntries } from "@/data/en/qna100";

export const metadata: Metadata = {
  title: "Behavior questions | tantrums, crying, routines, and transitions",
  description:
    "Read parent questions about crying, self-soothing, separation anxiety, tantrums, biting, bedtime struggles, and daycare transitions.",
  keywords: ["toddler behavior questions", "tantrums", "separation anxiety", "bedtime battles", "biting toddler"],
  alternates: { canonical: "https://momtools.kr/en/qna/behavior" },
};

const items = enQnaEntries.filter((item) => item.topic === "Behavior");

const introPoints = [
  "Behavior questions often look worse on the hardest day than they do across a full week of routines and transitions.",
  "A parent's response pattern usually matters as much as the child's behavior pattern.",
  "These pages focus on practical next steps and common triggers, not on judging a family from one moment.",
];

export default function BehaviorTopicPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Parent Q&amp;A · Behavior</span>
          <h1 className="mt-title-xl mt-5">Behavior questions that usually show up when routines get harder</h1>
          <p className="mt-text-main mt-4 max-w-4xl">
            This topic covers crying, separation anxiety, tantrums, biting, bedtime battles, self-soothing,
            and the routine changes that make home life or daycare transitions feel heavier than usual.
          </p>
          <div className="mt-4 text-sm font-semibold text-sky-700">{items.length} questions in this topic</div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {introPoints.map((item) => (
            <div key={item} className="mt-card-soft p-5 text-sm leading-7 text-slate-600">{item}</div>
          ))}
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/en/qna/${item.slug}`}
              className="rounded-[28px] border border-sky-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">{item.topic}</div>
              <h2 className="mt-3 text-lg font-bold text-slate-800">{item.question}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">{item.summary}</p>
            </Link>
          ))}
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Helpful related pages</div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <Link href="/en/info/toddler" className="rounded-2xl bg-white px-5 py-5 shadow-sm transition hover:-translate-y-0.5">
              <div className="font-semibold text-slate-800">Toddler guide</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">Open routines, meals, sleep, and big-feelings context around daily behavior questions.</div>
            </Link>
            <Link href="/en/checklists/daycare" className="rounded-2xl bg-white px-5 py-5 shadow-sm transition hover:-translate-y-0.5">
              <div className="font-semibold text-slate-800">Daycare checklist</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">Use it when behavior concerns overlap with drop-off, labeling, or transition stress.</div>
            </Link>
            <Link href="/en/cal/baby-age" className="rounded-2xl bg-white px-5 py-5 shadow-sm transition hover:-translate-y-0.5">
              <div className="font-semibold text-slate-800">Baby age calculator</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">Exact age can make behavior expectations and routine changes easier to interpret.</div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
