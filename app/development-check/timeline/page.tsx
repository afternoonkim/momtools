import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft, Baby, CalendarDays, ClipboardCheck } from "lucide-react";
import {
  developmentAgeRanges,
  developmentDomains,
  developmentStatusLabels,
  getDevelopmentMilestone,
  type DevelopmentStatus,
} from "@/data/developmentMilestones";
import { getCurrentUser } from "@/lib/auth/session";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "발달 체크 타임라인",
  description: "아이 발달 체크 기록을 날짜별로 모아 봅니다.",
  robots: { index: false, follow: false },
};

type ChildOption = {
  id: string;
  nickname: string | null;
  isPrimary: boolean;
};

type TimelineLog = {
  id: string;
  itemKey: string;
  ageRangeKey: string;
  domainKey: string;
  previousStatus: string | null;
  status: string;
  note: string | null;
  observedAt: Date;
  createdAt: Date;
};

function childDisplayName(child: ChildOption, index: number) {
  return child.nickname?.trim() || `${index + 1}번째 아이`;
}

function toStatus(value: string | null | undefined): DevelopmentStatus {
  if (value === "practicing" || value === "achieved" || value === "concern" || value === "not_started") return value;
  return "not_started";
}

function formatDateKey(date: Date) {
  return date.toISOString().slice(0, 10);
}

function formatKoreanShortDate(date: Date) {
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
}

function domainLabel(key: string) {
  return developmentDomains.find((item) => item.key === key)?.label ?? "발달";
}

function ageRangeLabel(key: string) {
  return developmentAgeRanges.find((item) => item.key === key)?.shortLabel ?? key;
}

function statusPillClass(status: DevelopmentStatus) {
  if (status === "concern") return "bg-rose-50 text-rose-700";
  if (status === "achieved") return "bg-emerald-50 text-emerald-700";
  if (status === "practicing") return "bg-amber-50 text-amber-800";
  return "bg-slate-100 text-slate-700";
}

function groupLogsByObservedDate(logs: TimelineLog[]) {
  const groups = new Map<string, TimelineLog[]>();
  for (const log of logs) {
    const key = formatDateKey(log.observedAt ?? log.createdAt);
    groups.set(key, [...(groups.get(key) ?? []), log]);
  }
  return Array.from(groups.entries()).map(([dateKey, items]) => ({ dateKey, items }));
}

export default async function DevelopmentTimelinePage({ searchParams }: { searchParams?: Promise<{ childId?: string }> }) {
  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/development-check/timeline");
  if (!user.children.length) redirect("/child/new");

  const params = await searchParams;
  const selectedChild = user.children.find((child) => child.id === params?.childId) ?? user.children.find((child) => child.isPrimary) ?? user.children[0];
  const selectedIndex = user.children.findIndex((child) => child.id === selectedChild.id);
  const selectedName = childDisplayName(selectedChild, Math.max(selectedIndex, 0));

  const logs = await prisma.childDevelopmentCheckLog.findMany({
    where: { childId: selectedChild.id },
    orderBy: [{ observedAt: "desc" }, { createdAt: "desc" }],
    take: 240,
    select: {
      id: true,
      itemKey: true,
      ageRangeKey: true,
      domainKey: true,
      previousStatus: true,
      status: true,
      note: true,
      observedAt: true,
      createdAt: true,
    },
  });
  const timelineGroups = groupLogsByObservedDate(logs);

  return (
    <main className="mt-page">
      <div className="mt-container max-w-xl space-y-3">
        <section className="mt-card p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <span className="mt-badge">발달 타임라인</span>
              <h1 className="mt-title-lg mt-3">{selectedName} 기록을 날짜별로 봐요</h1>
              <p className="mt-text-main mt-2">체크한 시기, 상태 변화, 메모를 한 화면에서 확인할 수 있어요.</p>
            </div>
            <Link href={`/development-check?childId=${encodeURIComponent(selectedChild.id)}`} className="inline-flex shrink-0 items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-2 text-[11px] font-extrabold text-slate-700 active:scale-[0.98]">
              <ArrowLeft size={13} aria-hidden /> 체크
            </Link>
          </div>
        </section>

        <section className="mt-simple-list" aria-label="아이 선택">
          <div className="flex gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {user.children.map((child, index) => {
              const isSelected = child.id === selectedChild.id;
              return (
                <Link
                  key={child.id}
                  href={`/development-check/timeline?childId=${encodeURIComponent(child.id)}`}
                  aria-current={isSelected ? "page" : undefined}
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-2 text-[12px] font-extrabold transition active:scale-[0.98] ${
                    isSelected ? "border-amber-200 bg-amber-50 text-amber-900" : "border-slate-200 bg-white text-slate-700"
                  }`}
                >
                  <Baby size={13} aria-hidden /> {childDisplayName(child, index)}
                </Link>
              );
            })}
          </div>
        </section>

        {timelineGroups.length ? (
          <section className="space-y-3" aria-label="발달 기록 목록">
            {timelineGroups.map((group) => (
              <div key={group.dateKey} className="mt-simple-list overflow-hidden">
                <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 text-slate-700">
                    <CalendarDays size={14} aria-hidden />
                  </span>
                  <h2 className="text-[13px] font-extrabold text-slate-900">{formatKoreanShortDate(new Date(group.dateKey))}</h2>
                  <span className="ml-auto rounded-full bg-slate-50 px-2 py-1 text-[10px] font-extrabold text-slate-500">{group.items.length}개</span>
                </div>

                <div className="divide-y divide-slate-100">
                  {group.items.map((log) => {
                    const milestone = getDevelopmentMilestone(log.itemKey);
                    const status = toStatus(log.status);
                    const previousStatus = toStatus(log.previousStatus);
                    const hasChanged = log.previousStatus && previousStatus !== status;
                    return (
                      <article key={log.id} className="px-4 py-3.5">
                        <div className="flex items-start gap-2.5">
                          <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                            <ClipboardCheck size={13} aria-hidden />
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-2">
                              <h3 className="text-[13px] font-extrabold leading-5 text-slate-900">{milestone?.title ?? "발달 체크 항목"}</h3>
                              <span className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-extrabold ${statusPillClass(status)}`}>{developmentStatusLabels[status]}</span>
                            </div>
                            <p className="mt-1 text-[11px] font-bold leading-4 text-slate-500">{ageRangeLabel(log.ageRangeKey)} · {domainLabel(log.domainKey)}</p>
                            {hasChanged ? (
                              <p className="mt-1.5 rounded-2xl bg-slate-50 px-3 py-2 text-[12px] leading-5 text-slate-700">
                                {developmentStatusLabels[previousStatus]}에서 {developmentStatusLabels[status]}로 바뀌었어요.
                              </p>
                            ) : null}
                            {log.note ? <p className="mt-1.5 rounded-2xl bg-amber-50 px-3 py-2 text-[12px] leading-5 text-amber-900">메모 · {log.note}</p> : null}
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            ))}
          </section>
        ) : (
          <section className="mt-card p-4 text-center">
            <p className="text-[14px] font-extrabold text-slate-900">아직 남긴 발달 기록이 없어요.</p>
            <p className="mt-2 text-[12px] leading-5 text-slate-500">발달 체크에서 상태를 하나만 선택해도 이곳에 날짜별 기록이 쌓입니다.</p>
            <Link href={`/development-check?childId=${encodeURIComponent(selectedChild.id)}`} className="mt-4 inline-flex rounded-full bg-amber-500 px-4 py-2 text-[12px] font-extrabold text-white active:scale-[0.98]">
              첫 기록 남기기
            </Link>
          </section>
        )}
      </div>
    </main>
  );
}
