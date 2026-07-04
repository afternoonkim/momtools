"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Baby, CalendarDays, ClipboardCheck, History, Plus, UsersRound } from "lucide-react";
import {
  developmentAgeRanges,
  developmentDomains,
  developmentMilestones,
  developmentStatusDescriptions,
  developmentStatusLabels,
  getDevelopmentAgeRangeKey,
  getDevelopmentMilestone,
  type DevelopmentAgeRangeKey,
  type DevelopmentDomainKey,
  type DevelopmentMilestone,
  type DevelopmentStatus,
} from "@/data/developmentMilestones";

type ChildOption = {
  id: string;
  nickname: string | null;
  birthDate: string;
  expectedDueDate: string | null;
  useCorrectedAge: boolean;
  isPrimary: boolean;
};

type DevelopmentRecordMap = Record<string, { status: DevelopmentStatus; note?: string | null }>;

type DevelopmentHistoryItem = {
  itemKey: string;
  ageRangeKey: DevelopmentAgeRangeKey;
  domainKey: DevelopmentDomainKey;
  previousStatus: DevelopmentStatus | null;
  status: DevelopmentStatus;
  note?: string | null;
  observedAt?: string | null;
  createdAt: string;
};

type DevelopmentCheckClientProps = {
  childrenOptions: ChildOption[];
  selectedChildId: string;
  initialRecords: DevelopmentRecordMap;
  initialHistory: DevelopmentHistoryItem[];
};

type StatusStats = Record<DevelopmentStatus, number> & { total: number; checked: number };

const statusOrder: DevelopmentStatus[] = ["not_started", "practicing", "achieved", "concern"];

const statusPriority: Record<DevelopmentStatus, number> = {
  concern: 0,
  practicing: 1,
  not_started: 2,
  achieved: 3,
};

function parseBirthDate(value: string) {
  const [year, month, day] = value.slice(0, 10).split("-").map(Number);
  return new Date(year, month - 1, day);
}

function getMonthDiffWithDayAdjustment(birth: Date, today: Date) {
  let months = (today.getFullYear() - birth.getFullYear()) * 12 + (today.getMonth() - birth.getMonth());
  if (today.getDate() < birth.getDate()) months -= 1;
  return Math.max(0, months);
}

function childDisplayName(child: ChildOption, index: number) {
  return child.nickname?.trim() || `${index + 1}번째 아이`;
}

function getRangeIndex(key: DevelopmentAgeRangeKey) {
  return developmentAgeRanges.findIndex((item) => item.key === key);
}

function getStats(items: DevelopmentMilestone[], records: DevelopmentRecordMap): StatusStats {
  return items.reduce<StatusStats>(
    (acc, item) => {
      const status = records[item.key]?.status;
      if (status) {
        acc[status] += 1;
        acc.checked += 1;
      }
      acc.total += 1;
      return acc;
    },
    { not_started: 0, practicing: 0, achieved: 0, concern: 0, checked: 0, total: 0 },
  );
}

function formatShortDate(value?: string | null) {
  if (!value) return "최근";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "최근";
  return `${date.getMonth() + 1}/${date.getDate()}`;
}

function diffInDays(from: Date, to: Date) {
  const start = new Date(from.getFullYear(), from.getMonth(), from.getDate()).getTime();
  const end = new Date(to.getFullYear(), to.getMonth(), to.getDate()).getTime();
  return Math.floor((end - start) / (1000 * 60 * 60 * 24));
}

function addDays(date: Date, days: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function formatKoreanShortDate(date: Date) {
  return `${date.getMonth() + 1}월 ${date.getDate()}일`;
}

function statusClass(status: DevelopmentStatus, active: boolean) {
  if (!active) return "border-slate-200 bg-white text-slate-600 hover:bg-slate-50";
  if (status === "concern") return "border-rose-200 bg-rose-50 text-rose-700";
  if (status === "achieved") return "border-emerald-200 bg-emerald-50 text-emerald-700";
  if (status === "practicing") return "border-amber-200 bg-amber-50 text-amber-800";
  return "border-slate-200 bg-slate-100 text-slate-700";
}

function StatusButton({ status, active, disabled, onClick }: { status: DevelopmentStatus; active: boolean; disabled: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`rounded-full border px-2.5 py-1.5 text-[11px] font-extrabold transition active:scale-[0.98] disabled:opacity-60 ${statusClass(status, active)}`}
    >
      {developmentStatusLabels[status]}
    </button>
  );
}

export default function DevelopmentCheckClient({ childrenOptions, selectedChildId, initialRecords, initialHistory }: DevelopmentCheckClientProps) {
  const selectedChild = childrenOptions.find((child) => child.id === selectedChildId) ?? childrenOptions[0];
  const selectedIndex = childrenOptions.findIndex((child) => child.id === selectedChild.id);
  const selectedName = childDisplayName(selectedChild, Math.max(selectedIndex, 0));
  const today = new Date();
  const birthDate = parseBirthDate(selectedChild.birthDate);
  const actualMonths = getMonthDiffWithDayAdjustment(birthDate, today);
  const expectedDueDate = selectedChild.expectedDueDate ? parseBirthDate(selectedChild.expectedDueDate) : null;
  const usesCorrectedAge = Boolean(selectedChild.useCorrectedAge && expectedDueDate && expectedDueDate.getTime() > birthDate.getTime() && actualMonths < 24);
  const correctedMonths = usesCorrectedAge && expectedDueDate ? getMonthDiffWithDayAdjustment(expectedDueDate, today) : null;
  const currentMonths = correctedMonths ?? actualMonths;
  const currentAgeRangeKey = getDevelopmentAgeRangeKey(currentMonths);
  const [ageRangeKey, setAgeRangeKey] = useState<DevelopmentAgeRangeKey>(currentAgeRangeKey);
  const [domainKey, setDomainKey] = useState<DevelopmentDomainKey>("motor");
  const [records, setRecords] = useState<DevelopmentRecordMap>(initialRecords);
  const [history, setHistory] = useState<DevelopmentHistoryItem[]>(initialHistory);
  const [noteDrafts, setNoteDrafts] = useState<Record<string, string>>(() =>
    Object.fromEntries(Object.entries(initialRecords).map(([key, value]) => [key, value.note ?? ""])),
  );
  const [pendingKey, setPendingKey] = useState<string | null>(null);
  const [pendingNoteKey, setPendingNoteKey] = useState<string | null>(null);
  const [savedNoteKey, setSavedNoteKey] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  const range = developmentAgeRanges.find((item) => item.key === ageRangeKey) ?? developmentAgeRanges[0];
  const domain = developmentDomains.find((item) => item.key === domainKey) ?? developmentDomains[0];
  const milestones = developmentMilestones.filter((item) => item.ageRangeKey === ageRangeKey && item.domainKey === domainKey);
  const ageRangeMilestones = developmentMilestones.filter((item) => item.ageRangeKey === ageRangeKey);
  const ageRangeStats = getStats(ageRangeMilestones, records);
  const currentRangeIndex = getRangeIndex(currentAgeRangeKey);
  const checkedLabel = `${ageRangeStats.checked}/${ageRangeStats.total}`;

  const priorityItem = useMemo(() => {
    return ageRangeMilestones
      .map((item) => ({ item, status: records[item.key]?.status ?? ("not_started" as DevelopmentStatus) }))
      .filter(({ status }) => status !== "achieved")
      .sort((a, b) => statusPriority[a.status] - statusPriority[b.status])[0];
  }, [ageRangeMilestones, records]);

  const concernItems = useMemo(() => {
    return ageRangeMilestones.filter((item) => records[item.key]?.status === "concern").slice(0, 3);
  }, [ageRangeMilestones, records]);

  const recentHistory = useMemo(() => {
    return history
      .map((item) => ({ ...item, milestone: getDevelopmentMilestone(item.itemKey) }))
      .filter((item) => item.milestone)
      .slice(0, 5);
  }, [history]);

  const changedHistory = recentHistory.filter((item) => item.previousStatus && item.previousStatus !== item.status).slice(0, 3);
  const lastCheckedDate = history[0]?.createdAt ? new Date(history[0].createdAt) : null;
  const daysSinceLastCheck = lastCheckedDate && !Number.isNaN(lastCheckedDate.getTime()) ? diffInDays(lastCheckedDate, today) : null;
  const nextCheckDate = lastCheckedDate && !Number.isNaN(lastCheckedDate.getTime()) ? addDays(lastCheckedDate, 14) : addDays(today, 14);
  const nextCheckMessage = daysSinceLastCheck === null
    ? "첫 기록 후 2주 뒤 다시 보면 변화가 잘 보여요."
    : daysSinceLastCheck >= 14
      ? "2주가 지났어요. 오늘 다시 체크해볼 때예요."
      : `${14 - daysSinceLastCheck}일 뒤 다시 보면 좋아요.`;

  const recommendedRanges = useMemo(() => {
    const keys = new Set<DevelopmentAgeRangeKey>([currentAgeRangeKey]);
    if (currentRangeIndex > 0) keys.add(developmentAgeRanges[currentRangeIndex - 1].key);
    if (currentRangeIndex < developmentAgeRanges.length - 1) keys.add(developmentAgeRanges[currentRangeIndex + 1].key);
    return keys;
  }, [currentAgeRangeKey, currentRangeIndex]);

  async function saveStatus(itemKey: string, nextStatus: DevelopmentStatus) {
    setMessage("");
    setPendingKey(itemKey);
    const previous = records[itemKey];
    setRecords((current) => ({ ...current, [itemKey]: { ...current[itemKey], status: nextStatus } }));

    const response = await fetch(`/api/children/${selectedChild.id}/development-checks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ itemKey, status: nextStatus, note: previous?.note ?? "" }),
    }).catch(() => null);

    setPendingKey(null);

    if (!response?.ok) {
      setRecords((current) => ({ ...current, [itemKey]: previous ?? { status: "not_started" } }));
      const data = (await response?.json().catch(() => null)) as { message?: string } | null;
      setMessage(data?.message ?? "저장하지 못했어요. 잠시 후 다시 시도해 주세요.");
      return;
    }

    const data = (await response.json().catch(() => null)) as { log?: DevelopmentHistoryItem } | null;
    if (data?.log) setHistory((current) => [data.log as DevelopmentHistoryItem, ...current].slice(0, 80));
  }

  async function saveNote(itemKey: string) {
    setMessage("");
    setSavedNoteKey(null);
    setPendingNoteKey(itemKey);

    const note = (noteDrafts[itemKey] ?? "").trim();
    const previous = records[itemKey];
    const status = previous?.status ?? "practicing";

    const response = await fetch(`/api/children/${selectedChild.id}/development-checks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ itemKey, status, note }),
    }).catch(() => null);

    setPendingNoteKey(null);

    if (!response?.ok) {
      const data = (await response?.json().catch(() => null)) as { message?: string } | null;
      setMessage(data?.message ?? "메모를 저장하지 못했어요. 잠시 후 다시 시도해 주세요.");
      return;
    }

    setRecords((current) => ({ ...current, [itemKey]: { status, note } }));
    const data = (await response.json().catch(() => null)) as { log?: DevelopmentHistoryItem } | null;
    if (data?.log) setHistory((current) => [data.log as DevelopmentHistoryItem, ...current].slice(0, 80));
    setSavedNoteKey(itemKey);
  }

  return (
    <main className="mt-page">
      <div className="mt-container max-w-xl space-y-3">
        <section className="mt-card p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <span className="mt-badge">발달 체크</span>
              <h1 className="mt-title-lg mt-3">{selectedName} 오늘 모습만 짧게 체크해요</h1>
              <p className="mt-text-main mt-2">
                {usesCorrectedAge ? `실제 ${actualMonths}개월 · 참고 ${currentMonths}개월` : `현재 약 ${currentMonths}개월`} · {nextCheckMessage}
              </p>
            </div>
            <Link href="/family" className="inline-flex shrink-0 items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-2 text-[11px] font-extrabold text-slate-700 active:scale-[0.98]">
              <UsersRound size={13} aria-hidden /> 가족
            </Link>
          </div>
        </section>

        <section className="mt-simple-list" aria-labelledby="development-child-title">
          <div className="flex gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {childrenOptions.map((child, index) => {
              const isSelected = child.id === selectedChild.id;
              return (
                <Link
                  key={child.id}
                  href={`/development-check?childId=${encodeURIComponent(child.id)}`}
                  aria-current={isSelected ? "page" : undefined}
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-2 text-[12px] font-extrabold transition active:scale-[0.98] ${
                    isSelected ? "border-amber-200 bg-amber-50 text-amber-900" : "border-slate-200 bg-white text-slate-700"
                  }`}
                >
                  <Baby size={13} aria-hidden /> {childDisplayName(child, index)}
                </Link>
              );
            })}
            <Link href="/child/new" className="inline-flex shrink-0 items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-2 text-[12px] font-extrabold text-slate-700 active:scale-[0.98]">
              <Plus size={13} aria-hidden /> 추가
            </Link>
          </div>
        </section>

        <section className="mt-card p-3" aria-label="발달 기록 타임라인">
          <Link
            href={`/development-check/timeline?childId=${encodeURIComponent(selectedChild.id)}`}
            className="flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-3 py-3 transition active:scale-[0.99] hover:bg-slate-100"
          >
            <span className="flex min-w-0 items-center gap-2">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-slate-700">
                <History size={15} aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block text-[13px] font-extrabold text-slate-900">타임라인 보기</span>
                <span className="block truncate text-[11px] font-bold text-slate-500">시기별로 남긴 발달 기록을 한 번에 볼 수 있어요.</span>
              </span>
            </span>
            <span className="shrink-0 text-[11px] font-extrabold text-slate-500">보기</span>
          </Link>
        </section>

        <section className="mt-card p-4" aria-labelledby="development-basic-title">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 id="development-basic-title" className="text-[14px] font-extrabold text-slate-900">확인할 기준</h2>
              <p className="mt-0.5 text-[12px] leading-5 text-slate-500">{range.label} · {domain.label}</p>
            </div>
            <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[11px] font-extrabold text-slate-600">기록 {checkedLabel}</span>
          </div>

          <div className="mt-3 flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {developmentAgeRanges.map((item) => {
              const isSelected = item.key === ageRangeKey;
              const isRecommended = recommendedRanges.has(item.key);
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setAgeRangeKey(item.key)}
                  className={`shrink-0 rounded-full border px-3 py-2 text-[12px] font-extrabold transition active:scale-[0.98] ${
                    isSelected
                      ? "border-amber-300 bg-amber-100 text-amber-900"
                      : isRecommended
                        ? "border-amber-100 bg-amber-50 text-amber-800"
                        : "border-slate-200 bg-white text-slate-600"
                  }`}
                >
                  {item.shortLabel}
                </button>
              );
            })}
          </div>

          <div className="mt-3 grid grid-cols-4 gap-1.5">
            {developmentDomains.map((item) => {
              const isSelected = item.key === domainKey;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setDomainKey(item.key)}
                  className={`rounded-2xl border px-2 py-2 text-center text-[11px] font-extrabold transition active:scale-[0.98] ${
                    isSelected ? "border-amber-200 bg-amber-50 text-amber-900" : "border-slate-200 bg-white text-slate-600"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </section>

        {message ? <p className="rounded-2xl bg-rose-50 px-4 py-3 text-[13px] font-bold leading-6 text-rose-700">{message}</p> : null}

        <section className="mt-simple-list" aria-labelledby="milestone-list-title">
          <div className="border-b border-slate-100 px-4 py-3">
            <h2 id="milestone-list-title" className="text-[14px] font-extrabold text-slate-900">체크 항목</h2>
            <p className="mt-0.5 text-[12px] leading-5 text-slate-500">상태 버튼은 바로 저장돼요. 메모는 열어서 입력한 뒤 저장해 주세요.</p>
          </div>

          <div className="divide-y divide-slate-100">
            {milestones.map((item) => {
              const record = records[item.key];
              const selectedStatus = record?.status;
              return (
                <article key={item.key} className="px-4 py-3.5">
                  <div className="flex items-start gap-2.5">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                      <ClipboardCheck size={13} aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[13px] font-extrabold leading-5 text-slate-900">{item.title}</h3>
                      <p className="mt-0.5 text-[12px] leading-5 text-slate-600">{item.description}</p>
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {statusOrder.map((status) => (
                          <StatusButton key={status} status={status} active={selectedStatus === status} disabled={pendingKey === item.key} onClick={() => saveStatus(item.key, status)} />
                        ))}
                      </div>
                      {selectedStatus ? <p className="mt-1.5 text-[11px] leading-4 text-slate-500">{developmentStatusDescriptions[selectedStatus]}</p> : null}
                      <details className="mt-2 rounded-2xl border border-slate-100 bg-slate-50 px-3 py-2">
                        <summary className="cursor-pointer text-[12px] font-extrabold text-slate-700">도움말·메모</summary>
                        <div className="mt-2 space-y-2 text-[12px] leading-5 text-slate-600">
                          <p><strong className="text-slate-800">볼 기준</strong> · {item.observeTip}</p>
                          <p><strong className="text-slate-800">오늘 해보기</strong> · {item.supportTip}</p>
                          <div className="space-y-2">
                            <textarea
                              value={noteDrafts[item.key] ?? ""}
                              maxLength={300}
                              rows={2}
                              onChange={(event) => {
                                setSavedNoteKey((current) => (current === item.key ? null : current));
                                setNoteDrafts((current) => ({ ...current, [item.key]: event.target.value }));
                              }}
                              placeholder="짧게 메모해요. 예: 오른쪽은 아직 어려워요."
                              className="mt-input min-h-[60px] resize-none text-[13px] leading-5"
                            />
                            <div className="flex items-center justify-between gap-2">
                              <span className={`text-[11px] font-bold ${savedNoteKey === item.key ? "text-emerald-600" : "text-slate-500"}`}>
                                {savedNoteKey === item.key ? "메모를 저장했어요." : "메모는 저장 버튼을 눌러야 남아요."}
                              </span>
                              <button
                                type="button"
                                disabled={pendingNoteKey === item.key}
                                onClick={() => saveNote(item.key)}
                                className="rounded-full bg-amber-500 px-3 py-1.5 text-[11px] font-extrabold text-white transition active:scale-[0.98] disabled:opacity-60"
                              >
                                {pendingNoteKey === item.key ? "저장 중" : "메모 저장"}
                              </button>
                            </div>
                          </div>
                        </div>
                      </details>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-card p-4" aria-labelledby="development-next-title">
          <div className="flex items-start gap-2">
            <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-700">
              <CalendarDays size={15} aria-hidden />
            </span>
            <div className="min-w-0 flex-1">
              <h2 id="development-next-title" className="text-[14px] font-extrabold text-slate-900">다음에 볼 것</h2>
              <p className="mt-1 text-[12px] leading-5 text-slate-600">
                {concernItems.length
                  ? "걱정되는 항목은 오늘 날짜와 상황을 남겨두고 상담 때 보여주세요."
                  : priorityItem
                    ? `${priorityItem.item.title}은 다음에도 같은 상황에서 한 번 더 봐주세요.`
                    : "이번 구간에서 자주 보이는 항목이 많아요. 다음 구간도 천천히 확인해보세요."}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-50 px-2.5 py-1.5 text-[11px] font-extrabold text-slate-600">다음 추천일 {formatKoreanShortDate(nextCheckDate)}</span>
                <Link href={`/development-check/report?childId=${encodeURIComponent(selectedChild.id)}`} className="rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] font-extrabold text-slate-700 active:scale-[0.98]">
                  상담용 기록
                </Link>
              </div>

              <details className="mt-3 rounded-2xl border border-slate-100 bg-slate-50 px-3 py-2">
                <summary className="cursor-pointer text-[12px] font-extrabold text-slate-700">지난 기록과 주의할 점</summary>
                {changedHistory.length ? (
                  <ul className="mt-2 space-y-1.5 text-[12px] leading-5 text-slate-700">
                    {changedHistory.map((item) => (
                      <li key={`${item.itemKey}-${item.createdAt}`}>• {item.milestone?.title}: {item.previousStatus ? developmentStatusLabels[item.previousStatus] : "처음 기록"} → {developmentStatusLabels[item.status]}</li>
                    ))}
                  </ul>
                ) : recentHistory.length ? (
                  <ul className="mt-2 space-y-1.5 text-[12px] leading-5 text-slate-700">
                    {recentHistory.map((item) => (
                      <li key={`${item.itemKey}-${item.createdAt}`}>• {formatShortDate(item.observedAt ?? item.createdAt)} · {item.milestone?.title} · {developmentStatusLabels[item.status]}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-[12px] leading-5 text-slate-600">오늘 체크를 남기면 다음에 변화 흐름을 보여드릴게요.</p>
                )}
                <p className="mt-2 text-[12px] leading-5 text-slate-600">발달 체크는 진단표가 아니에요. 여러 항목이 반복해서 걱정되거나 이전에 하던 행동이 줄었다면 영유아검진이나 소아청소년과 상담 때 기록을 보여주세요.</p>
              </details>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
