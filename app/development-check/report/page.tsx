import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Baby, ClipboardList, MessageCircle, Sparkles } from "lucide-react";
import {
  developmentDomains,
  developmentStatusLabels,
  getDevelopmentAgeRangeKey,
  getDevelopmentMilestone,
  type DevelopmentStatus,
} from "@/data/developmentMilestones";
import { getCurrentUser } from "@/lib/auth/session";
import { getChildSummary, formatKoreanDate } from "@/lib/child-profile";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "상담용 발달 기록",
  description: "아이 발달 체크에서 걱정되는 항목과 메모를 상담 전에 정리합니다.",
  robots: { index: false, follow: false },
};

function childDisplayName(child: { nickname: string | null }, index: number) {
  return child.nickname?.trim() || `${index + 1}번째 아이`;
}

function toStatus(value: string): DevelopmentStatus {
  if (value === "practicing" || value === "achieved" || value === "concern" || value === "not_started") return value;
  return "not_started";
}

function domainLabel(key: string) {
  return developmentDomains.find((item) => item.key === key)?.label ?? "발달";
}

function ConsultationItem({ item }: { item: { title: string; domain: string; status: DevelopmentStatus; note?: string | null; supportTip?: string } }) {
  return (
    <li className="border-b border-slate-100 px-4 py-3 last:border-b-0">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[13px] font-extrabold leading-5 text-slate-900">{item.title}</p>
          <p className="mt-0.5 text-[12px] leading-5 text-slate-500">{domainLabel(item.domain)} · {developmentStatusLabels[item.status]}</p>
        </div>
        <span className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-extrabold ${item.status === "concern" ? "bg-rose-50 text-rose-700" : "bg-amber-50 text-amber-800"}`}>
          {developmentStatusLabels[item.status]}
        </span>
      </div>
      {item.note ? <p className="mt-2 rounded-2xl bg-slate-50 px-3 py-2 text-[12px] leading-5 text-slate-700">메모 · {item.note}</p> : null}
      {item.supportTip ? <p className="mt-2 text-[12px] leading-5 text-slate-600">집에서 해본 것 · {item.supportTip}</p> : null}
    </li>
  );
}

export default async function DevelopmentReportPage({ searchParams }: { searchParams?: Promise<{ childId?: string }> }) {
  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/development-check/report");
  if (!user.children.length) redirect("/child/new");

  const params = await searchParams;
  const bornChildren = user.children.filter((child) => child.birthDate);
  if (!bornChildren.length) redirect("/my");
  const selectedChild = bornChildren.find((child) => child.id === params?.childId) ?? bornChildren.find((child) => child.isPrimary) ?? bornChildren[0];
  const selectedIndex = bornChildren.findIndex((child) => child.id === selectedChild.id);
  const displayName = childDisplayName(selectedChild, Math.max(selectedIndex, 0));
  const summary = getChildSummary(selectedChild.birthDate!, new Date(), selectedChild.expectedDueDate, selectedChild.useCorrectedAge);
  const ageRangeKey = getDevelopmentAgeRangeKey(summary.months);

  const [records, recentLogs] = await Promise.all([
    prisma.childDevelopmentRecord.findMany({
      where: { childId: selectedChild.id },
      orderBy: [{ status: "asc" }, { updatedAt: "desc" }],
      select: { itemKey: true, domainKey: true, status: true, note: true, updatedAt: true },
    }),
    prisma.childDevelopmentCheckLog.findMany({
      where: { childId: selectedChild.id },
      orderBy: { createdAt: "desc" },
      take: 12,
      select: { itemKey: true, previousStatus: true, status: true, note: true, createdAt: true },
    }),
  ]);

  const enriched = records.flatMap((record) => {
    const milestone = getDevelopmentMilestone(record.itemKey);
    if (!milestone) return [];
    return [{
      title: milestone.title,
      domain: milestone.domainKey,
      status: toStatus(record.status),
      note: record.note,
      supportTip: milestone.supportTip,
      updatedAt: record.updatedAt,
    }];
  });

  const concernItems = enriched.filter((item) => item.status === "concern");
  const watchItems = enriched.filter((item) => item.status === "practicing" || item.status === "not_started").slice(0, 8);
  const changedLogs = recentLogs
    .map((log) => ({ ...log, milestone: getDevelopmentMilestone(log.itemKey), status: toStatus(log.status), previousStatus: log.previousStatus ? toStatus(log.previousStatus) : null }))
    .filter((log) => log.milestone && log.previousStatus && log.previousStatus !== log.status)
    .slice(0, 5);

  return (
    <main className="mt-page">
      <div className="mt-container max-w-3xl space-y-4 md:space-y-5">
        <section className="mt-page-hero">
          <span className="mt-badge">상담용 기록</span>
          <h1 className="mt-title-xl mt-4">{displayName} 발달 기록을 정리했어요</h1>
          <p className="mt-text-main mt-3 max-w-2xl">
            진료나 발달 상담 전에 보여주기 좋은 내용만 모았어요. 아이를 판단하는 결과표가 아니라, 보호자가 관찰한 흐름을 차분하게 전달하기 위한 기록입니다.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href={`/development-check?childId=${encodeURIComponent(selectedChild.id)}`} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-[12px] font-extrabold text-slate-700 transition active:scale-[0.98] hover:bg-slate-50">
              발달 체크로 돌아가기
            </Link>
          </div>
        </section>

        <section className="mt-card overflow-hidden p-0" aria-labelledby="report-child-title">
          <div className="border-b border-slate-100 px-4 py-3">
            <div className="flex items-center gap-2">
              <Baby size={16} className="text-amber-600" aria-hidden />
              <h2 id="report-child-title" className="text-[14px] font-extrabold text-slate-900">아이 기본 정보</h2>
            </div>
          </div>
          <div className="divide-y divide-slate-100">
            <div className="px-4 py-3 text-[12px] leading-5 text-slate-700">생년월일 · {formatKoreanDate(summary.birth)}</div>
            <div className="px-4 py-3 text-[12px] leading-5 text-slate-700">
              {summary.usesCorrectedAge && summary.correctedBaseDate
                ? `실제 월령 약 ${summary.actualMonths}개월 · 발달 참고 월령 약 ${summary.months}개월 · 예정일 ${formatKoreanDate(summary.correctedBaseDate)}`
                : `현재 월령 약 ${summary.months}개월`}
            </div>
            <div className="px-4 py-3 text-[12px] leading-5 text-slate-700">현재 확인 구간 · {ageRangeKey}개월 기준</div>
          </div>
        </section>

        <section className="mt-card overflow-hidden p-0" aria-labelledby="report-concern-title">
          <div className="border-b border-slate-100 px-4 py-3">
            <div className="flex items-center gap-2">
              <MessageCircle size={16} className="text-rose-600" aria-hidden />
              <h2 id="report-concern-title" className="text-[14px] font-extrabold text-slate-900">상담 때 먼저 보여줄 내용</h2>
            </div>
            <p className="mt-1 text-[12px] leading-5 text-slate-500">반복해서 걱정된 항목과 계속 연습 중인 항목을 우선 정리했어요.</p>
          </div>
          {concernItems.length || watchItems.length ? (
            <ul>
              {concernItems.map((item) => <ConsultationItem key={`concern-${item.title}`} item={item} />)}
              {watchItems.map((item) => <ConsultationItem key={`watch-${item.title}`} item={item} />)}
            </ul>
          ) : (
            <p className="px-4 py-4 text-[12px] leading-5 text-slate-600">아직 상담용으로 따로 표시된 항목이 없어요. 발달 체크에서 걱정되거나 연습 중인 모습을 남기면 이곳에 정리됩니다.</p>
          )}
        </section>

        <section className="mt-card p-4 md:p-5" aria-labelledby="report-history-title">
          <div className="flex items-start gap-2">
            <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
              <ClipboardList size={15} aria-hidden />
            </span>
            <div>
              <h2 id="report-history-title" className="text-[15px] font-extrabold text-slate-900">최근 달라진 기록</h2>
              <p className="mt-1 text-[12px] leading-5 text-slate-500">좋아진 항목과 새롭게 걱정된 항목은 상담 때 변화 흐름을 설명하는 데 도움이 돼요.</p>
            </div>
          </div>
          {changedLogs.length ? (
            <ul className="mt-3 space-y-2 text-[12px] leading-5 text-slate-700">
              {changedLogs.map((log) => (
                <li key={`${log.itemKey}-${log.createdAt.toISOString()}`} className="rounded-2xl bg-slate-50 px-3 py-2">
                  {log.milestone?.title}: {log.previousStatus ? developmentStatusLabels[log.previousStatus] : "처음 기록"} → {developmentStatusLabels[log.status]}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 rounded-2xl bg-slate-50 px-3 py-3 text-[12px] leading-5 text-slate-600">아직 비교할 만큼 바뀐 기록이 많지 않아요. 1~2주 뒤에 다시 체크하면 변화 흐름이 더 잘 보입니다.</p>
          )}
        </section>

        <section className="rounded-2xl border border-amber-100 bg-amber-50/80 px-4 py-3 text-[12px] leading-5 text-amber-900">
          <div className="flex gap-2">
            <Sparkles size={15} className="mt-0.5 shrink-0" aria-hidden />
            <p>
              이 기록은 진단서가 아니에요. 다만 보호자가 본 모습을 짧게 정리해두면 영유아검진, 소아청소년과, 발달 상담에서 상황을 설명하는 데 도움이 됩니다.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
