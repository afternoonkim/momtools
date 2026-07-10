import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth/session";
import { prisma } from "@/lib/db";
import { getAccessibleChildWhere } from "@/lib/family-sharing";
import { getSeverityClasses, getSeverityLabel, pregnancySymptoms } from "@/lib/pregnancy-home";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "임신 증상 상세",
  description: "임신 중 몸의 신호를 참고용으로 확인하세요.",
  robots: { index: false, follow: false },
};

export default async function PregnancySymptomDetailPage({ params }: { params: Promise<{ id: string; slug: string }> }) {
  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/my");
  const { id, slug } = await params;
  const child = await prisma.child.findFirst({ where: { id, ...getAccessibleChildWhere(user.id) }, select: { id: true, birthDate: true, expectedDueDate: true } });
  if (!child) redirect("/my");
  if (child.birthDate || !child.expectedDueDate) redirect(`/my?childId=${child.id}`);
  const symptom = pregnancySymptoms.find((item) => item.slug === slug);
  if (!symptom) notFound();

  return (
    <main className="mt-page">
      <div className="mt-container max-w-xl space-y-3">
        <section className="mt-card p-4">
          <span className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-extrabold ${getSeverityClasses(symptom.severity)}`}>{getSeverityLabel(symptom.severity)}</span>
          <h1 className="mt-3 text-[20px] font-black leading-7 text-slate-950">{symptom.title}</h1>
          <p className="mt-2 text-[12px] leading-5 text-slate-600">{symptom.summary}</p>
        </section>
        <section className="mt-card p-4">
          <h2 className="text-[14px] font-extrabold text-slate-900">어떻게 볼까요?</h2>
          <p className="mt-2 text-[13px] leading-6 text-slate-600">{symptom.detail}</p>
        </section>
        <section className="mt-card p-4">
          <h2 className="text-[14px] font-extrabold text-slate-900">보호자가 할 일</h2>
          <p className="mt-2 text-[13px] leading-6 text-slate-600">{symptom.actionGuide}</p>
          {symptom.caution ? <p className="mt-3 rounded-2xl bg-amber-50 px-3 py-2 text-[12px] font-bold leading-5 text-amber-800">{symptom.caution}</p> : null}
        </section>
        <Link href={`/child/${encodeURIComponent(child.id)}/pregnancy/symptoms`} className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-[12px] font-extrabold text-slate-700">목록으로</Link>
      </div>
    </main>
  );
}
