"use client";

import Link from "next/link";
import TimelineLinkCard from "@/components/common/TimelineLinkCard";
import { useMemo, useState } from "react";
import { AlertTriangle, Baby, CalendarDays, CheckCircle2, Clock3, Info, ShieldCheck, type LucideIcon } from "lucide-react";
import {
  formatVaccinationWindow,
  getVaccinationScheduleForBirthDate,
  type VaccinationScheduleWithDate,
} from "@/lib/vaccination-schedule";

type ChildOption = {
  id: string;
  nickname: string | null;
  birthDate: string;
  isPrimary: boolean;
};

type VaccinationRecord = {
  id: string;
  childId: string;
  vaccineKey: string;
  doseKey: string;
  scheduledDate: string;
  completed: boolean;
  completedAt: string | null;
  note?: string | null;
  createdAt: string;
  updatedAt: string;
};

type Props = {
  childrenOptions: ChildOption[];
  selectedChildId: string;
  initialRecords: VaccinationRecord[];
};

type ScheduleGroup = {
  key: string;
  windowLabel: string;
  status: VaccinationScheduleWithDate["status"];
  items: VaccinationScheduleWithDate[];
};

function childDisplayName(child: ChildOption, index: number) {
  return child.nickname?.trim() || `${index + 1}번째 아이`;
}

function parseLocalDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatDate(value: string) {
  const date = parseLocalDate(value);
  return new Intl.DateTimeFormat("ko-KR", { month: "long", day: "numeric", weekday: "short" }).format(date);
}

function compareByScheduledDate(a: VaccinationScheduleWithDate, b: VaccinationScheduleWithDate) {
  if (a.scheduledDate !== b.scheduledDate) return a.scheduledDate.localeCompare(b.scheduledDate);
  return a.title.localeCompare(b.title, "ko-KR");
}

function compareCompletedFirst(a: VaccinationScheduleWithDate, b: VaccinationScheduleWithDate, recordMap: Map<string, VaccinationRecord>) {
  const aRecord = recordMap.get(getRecordKey(a));
  const bRecord = recordMap.get(getRecordKey(b));
  const aDate = aRecord?.completedAt ?? aRecord?.updatedAt ?? a.scheduledDate;
  const bDate = bRecord?.completedAt ?? bRecord?.updatedAt ?? b.scheduledDate;
  if (aDate !== bDate) return bDate.localeCompare(aDate);
  return b.scheduledDate.localeCompare(a.scheduledDate);
}

function getRecordKey(item: Pick<VaccinationScheduleWithDate, "vaccineKey" | "doseKey">) {
  return `${item.vaccineKey}__${item.doseKey}`;
}

function isCompleted(item: VaccinationScheduleWithDate, recordMap: Map<string, VaccinationRecord>) {
  return recordMap.get(getRecordKey(item))?.completed === true;
}

function getStatusText(item: VaccinationScheduleWithDate, completed: boolean) {
  if (completed) return "완료";
  if (item.status === "near") {
    if (item.daysFromToday === 0) return "오늘 예정";
    if (item.daysFromToday > 0) return `${item.daysFromToday}일 남음`;
    return "확인 시기";
  }
  if (item.status === "overdue") return "확인 필요";
  if (item.daysFromToday > 0) return `${item.daysFromToday}일 남음`;
  return "예정";
}

function getGroupStatus(items: VaccinationScheduleWithDate[], recordMap: Map<string, VaccinationRecord>) {
  const hasOpenOverdue = items.some((item) => !isCompleted(item, recordMap) && item.status === "overdue");
  if (hasOpenOverdue) return "overdue" as const;
  const hasOpenNear = items.some((item) => !isCompleted(item, recordMap) && item.status === "near");
  if (hasOpenNear) return "near" as const;
  const allCompleted = items.every((item) => isCompleted(item, recordMap));
  if (allCompleted) return "completed" as const;
  return "upcoming" as const;
}

function groupScheduleItems(schedule: VaccinationScheduleWithDate[], recordMap: Map<string, VaccinationRecord>) {
  const groups = new Map<string, ScheduleGroup>();

  for (const item of schedule) {
    const windowLabel = formatVaccinationWindow(item);
    const groupKey = `${item.scheduledDate}__${item.rangeEndDate ?? ""}__${item.timing}`;
    const current = groups.get(groupKey);
    if (current) {
      current.items.push(item);
      current.status = getGroupStatus(current.items, recordMap);
    } else {
      groups.set(groupKey, {
        key: groupKey,
        windowLabel,
        status: getGroupStatus([item], recordMap),
        items: [item],
      });
    }
  }

  return Array.from(groups.values()).map((group) => ({
    ...group,
    items: [...group.items].sort(compareByScheduledDate),
  }));
}

function statusTone(status: VaccinationScheduleWithDate["status"] | "completed") {
  if (status === "completed") return "border-emerald-100 bg-emerald-50/70 text-emerald-700";
  if (status === "near") return "border-amber-100 bg-amber-50/80 text-amber-700";
  if (status === "overdue") return "border-rose-100 bg-rose-50/80 text-rose-700";
  return "border-slate-100 bg-slate-50 text-slate-600";
}

function sectionTone(kind: "future" | "overdue" | "completed") {
  if (kind === "future") return "border-amber-100 bg-amber-50/50";
  if (kind === "overdue") return "border-rose-100 bg-rose-50/50";
  return "border-emerald-100 bg-emerald-50/40";
}

function VaccineCheckboxRow({
  item,
  record,
  onToggle,
  saving,
}: {
  item: VaccinationScheduleWithDate;
  record?: VaccinationRecord;
  onToggle: (item: VaccinationScheduleWithDate, completed: boolean) => void;
  saving: boolean;
}) {
  const completed = record?.completed === true;
  const statusText = getStatusText(item, completed);
  const tone = statusTone(completed ? "completed" : item.status);
  const inputId = `vaccine-${item.vaccineKey}-${item.doseKey}`;

  return (
    <label
      htmlFor={inputId}
      className={`block rounded-2xl border p-3 transition active:scale-[0.99] ${
        completed ? "border-emerald-200 bg-emerald-50/60" : "border-slate-100 bg-white"
      }`}
    >
      <div className="flex items-start gap-3">
        <input
          id={inputId}
          type="checkbox"
          checked={completed}
          disabled={saving}
          onChange={(event) => onToggle(item, event.currentTarget.checked)}
          className="mt-1 h-5 w-5 shrink-0 rounded border-slate-300 accent-amber-500 disabled:opacity-50"
          aria-label={`${item.title} 접종 완료`}
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className={`rounded-full border px-2 py-1 text-[10px] font-extrabold ${tone}`}>{statusText}</span>
            <span className="rounded-full bg-slate-50 px-2 py-1 text-[10px] font-extrabold text-slate-500">{formatVaccinationWindow(item)}</span>
            {record?.completedAt ? (
              <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-extrabold text-emerald-700">{record.completedAt}</span>
            ) : null}
          </div>
          <h3 className="mt-1.5 text-[13px] font-black leading-5 text-slate-950">{item.title}</h3>
          <p className="mt-0.5 text-[11px] leading-4 text-slate-600">{item.note}</p>
          {item.caution ? <p className="mt-1.5 text-[11px] leading-4 text-amber-700">{item.caution}</p> : null}
        </div>
      </div>
    </label>
  );
}

function VaccineScheduleGroupCard({
  group,
  recordMap,
  savingKey,
  onToggle,
}: {
  group: ScheduleGroup;
  recordMap: Map<string, VaccinationRecord>;
  savingKey: string | null;
  onToggle: (item: VaccinationScheduleWithDate, completed: boolean) => void;
}) {
  const completedCount = group.items.filter((item) => isCompleted(item, recordMap)).length;
  const totalCount = group.items.length;
  const tone = statusTone(completedCount === totalCount ? "completed" : group.status);

  return (
    <article className="rounded-3xl border border-slate-100 bg-white p-3.5">
      <div className="flex flex-wrap items-center gap-1.5">
        <span className={`rounded-full border px-2 py-1 text-[10px] font-extrabold ${tone}`}>{completedCount}/{totalCount} 완료</span>
        <span className="rounded-full bg-slate-50 px-2 py-1 text-[10px] font-extrabold text-slate-500">{group.windowLabel}</span>
      </div>
      <div className="mt-3 space-y-2">
        {group.items.map((item) => {
          const key = getRecordKey(item);
          return <VaccineCheckboxRow key={key} item={item} record={recordMap.get(key)} saving={savingKey === key} onToggle={onToggle} />;
        })}
      </div>
    </article>
  );
}

function VaccinePrioritySection({
  title,
  description,
  icon: Icon,
  kind,
  groups,
  recordMap,
  savingKey,
  onToggle,
  emptyText,
  collapsible = false,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  kind: "future" | "overdue" | "completed";
  groups: ScheduleGroup[];
  recordMap: Map<string, VaccinationRecord>;
  savingKey: string | null;
  onToggle: (item: VaccinationScheduleWithDate, completed: boolean) => void;
  emptyText: string;
  collapsible?: boolean;
}) {
  const content = groups.length ? (
    <div className="space-y-2">
      {groups.map((group) => (
        <VaccineScheduleGroupCard key={group.key} group={group} recordMap={recordMap} savingKey={savingKey} onToggle={onToggle} />
      ))}
    </div>
  ) : (
    <p className="rounded-2xl border border-slate-100 bg-white px-3 py-3 text-[12px] font-bold leading-5 text-slate-500">{emptyText}</p>
  );

  if (collapsible) {
    return (
      <details className={`rounded-3xl border p-3.5 ${sectionTone(kind)}`}>
        <summary className="flex cursor-pointer list-none items-center gap-2 [&::-webkit-details-marker]:hidden">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-white text-amber-700">
            <Icon size={16} aria-hidden />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[14px] font-black text-slate-950">{title}</span>
            <span className="block text-[11px] font-bold leading-4 text-slate-600">{description}</span>
          </span>
          <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[11px] font-extrabold text-amber-800">펼치기</span>
        </summary>
        <div className="mt-3">{content}</div>
      </details>
    );
  }

  return (
    <section className={`space-y-2 rounded-3xl border p-3.5 ${sectionTone(kind)}`} aria-labelledby={`${kind}-vaccine-title`}>
      <div className="flex items-start gap-2.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-white text-amber-700">
          <Icon size={16} aria-hidden />
        </span>
        <div className="min-w-0">
          <h2 id={`${kind}-vaccine-title`} className="text-[14px] font-black text-slate-950">{title}</h2>
          <p className="mt-0.5 text-[11px] font-bold leading-4 text-slate-600">{description}</p>
        </div>
      </div>
      {content}
    </section>
  );
}

function getCompletedTimelineDescription(records: VaccinationRecord[]) {
  const completedCount = records.filter((record) => record.completed).length;
  if (!completedCount) return "완료로 체크하면 날짜별 흐름을 볼 수 있어요";
  return `${completedCount}개 접종 완료 기록을 한눈에 보기`;
}

export default function VaccinationCheckClient({ childrenOptions, selectedChildId, initialRecords }: Props) {
  const [records, setRecords] = useState(initialRecords);
  const [savingKey, setSavingKey] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const selectedChild = childrenOptions.find((child) => child.id === selectedChildId) ?? childrenOptions[0];

  const schedule = useMemo(() => getVaccinationScheduleForBirthDate(parseLocalDate(selectedChild.birthDate)), [selectedChild.birthDate]);
  const recordMap = useMemo(() => new Map(records.map((record) => [`${record.vaccineKey}__${record.doseKey}`, record])), [records]);
  const completedCount = schedule.filter((item) => isCompleted(item, recordMap)).length;
  const futureItems = useMemo(
    () => schedule.filter((item) => !isCompleted(item, recordMap) && item.status !== "overdue").sort(compareByScheduledDate),
    [schedule, recordMap],
  );
  const overdueItems = useMemo(
    () => schedule.filter((item) => !isCompleted(item, recordMap) && item.status === "overdue").sort(compareByScheduledDate),
    [schedule, recordMap],
  );
  const completedItems = useMemo(
    () => schedule.filter((item) => isCompleted(item, recordMap)).sort((a, b) => compareCompletedFirst(a, b, recordMap)),
    [schedule, recordMap],
  );
  const futureGroups = useMemo(() => groupScheduleItems(futureItems, recordMap), [futureItems, recordMap]);
  const overdueGroups = useMemo(() => groupScheduleItems(overdueItems, recordMap), [overdueItems, recordMap]);
  const completedGroups = useMemo(() => groupScheduleItems(completedItems, recordMap), [completedItems, recordMap]);
  const nextFuture = futureItems[0];

  async function toggleCompleted(item: VaccinationScheduleWithDate, completed: boolean) {
    const key = getRecordKey(item);
    setSavingKey(key);
    setMessage("");

    const response = await fetch(`/api/children/${encodeURIComponent(selectedChild.id)}/vaccinations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        vaccineKey: item.vaccineKey,
        doseKey: item.doseKey,
        scheduledDate: item.scheduledDate,
        completed,
      }),
    });

    const data = (await response.json().catch(() => null)) as { record?: VaccinationRecord; message?: string } | null;
    setSavingKey(null);

    if (!response.ok || !data?.record) {
      setMessage(data?.message ?? "저장하지 못했어요. 잠시 후 다시 시도해 주세요.");
      return;
    }

    setRecords((current) => {
      const others = current.filter((record) => getRecordKey(record) !== key);
      return [...others, data.record as VaccinationRecord];
    });
    setMessage(completed ? `${item.shortTitle}을 완료로 기록했어요.` : `${item.shortTitle} 완료 표시를 해제했어요.`);
    window.dispatchEvent(new Event("momtools:pwa-install-qualified"));
  }

  return (
    <main className="mt-page">
      <div className="mt-container max-w-xl space-y-3">
        <section className="mt-card p-3.5">
          <span className="mt-badge">예방접종 체크</span>
          <h1 className="mt-2 text-[20px] font-black leading-7 text-slate-950">앞으로 맞아야 할 접종부터 확인해요</h1>
          <p className="mt-1 text-[12px] leading-5 text-slate-600">
            완료한 접종은 아래로 정리하고, 아직 남은 접종과 확인이 필요한 접종을 먼저 보여드려요.
          </p>
        </section>

        <section className="mt-simple-list" aria-label="아이 선택">
          <div className="flex gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {childrenOptions.map((child, index) => {
              const active = child.id === selectedChild.id;
              return (
                <Link
                  key={child.id}
                  href={`/vaccine-check?childId=${encodeURIComponent(child.id)}`}
                  aria-current={active ? "page" : undefined}
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-2 text-[12px] font-extrabold transition active:scale-[0.98] ${
                    active ? "border-amber-200 bg-amber-50 text-amber-900" : "border-slate-200 bg-white text-slate-700"
                  }`}
                >
                  <Baby size={13} aria-hidden />
                  {childDisplayName(child, index)}
                </Link>
              );
            })}
          </div>
        </section>

        <TimelineLinkCard
          href={`/vaccine-check/timeline?childId=${encodeURIComponent(selectedChild.id)}`}
          icon={ShieldCheck}
          title="예방접종 타임라인"
          description={getCompletedTimelineDescription(records)}
        />

        <section className="grid grid-cols-3 gap-2" aria-label="예방접종 요약">
          <div className="rounded-2xl border border-slate-100 bg-white px-3 py-2">
            <p className="text-[10px] font-bold text-slate-500">남은 접종</p>
            <p className="mt-0.5 text-[15px] font-black text-amber-700">{futureItems.length}</p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white px-3 py-2">
            <p className="text-[10px] font-bold text-slate-500">확인 필요</p>
            <p className="mt-0.5 text-[15px] font-black text-rose-700">{overdueItems.length}</p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white px-3 py-2">
            <p className="text-[10px] font-bold text-slate-500">완료</p>
            <p className="mt-0.5 text-[15px] font-black text-emerald-700">{completedCount}</p>
          </div>
        </section>

        {nextFuture ? (
          <section className="rounded-3xl border border-amber-100 bg-amber-50/60 p-3.5">
            <div className="flex items-start gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-white text-amber-700">
                <Clock3 size={16} aria-hidden />
              </div>
              <div className="min-w-0">
                <h2 className="text-[13px] font-black text-slate-950">가장 가까운 예정 접종</h2>
                <p className="mt-1 text-[12px] font-bold leading-5 text-slate-700">
                  {nextFuture.shortTitle} · {formatDate(nextFuture.scheduledDate)}
                </p>
                <p className="mt-0.5 text-[11px] leading-4 text-slate-600">예정일이 가까운 항목부터 위에서 바로 체크할 수 있어요.</p>
              </div>
            </div>
          </section>
        ) : null}

        {message ? <p className="rounded-2xl border border-amber-100 bg-amber-50 px-3 py-2 text-[12px] font-bold text-amber-800">{message}</p> : null}

        <section className="rounded-3xl border border-slate-100 bg-white p-3.5">
          <div className="flex items-start gap-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
              <Info size={16} aria-hidden />
            </div>
            <div className="min-w-0">
              <h2 className="text-[13px] font-black text-slate-900">접종 기록은 공식 기록과 함께 확인해요</h2>
              <p className="mt-1 text-[12px] leading-5 text-slate-600">
                이 화면은 집에서 놓치지 않도록 정리하는 체크용이에요. 정확한 접종 이력과 다음 일정은 의료기관, 보건소, 예방접종도우미에서 확인해 주세요.
              </p>
            </div>
          </div>
        </section>

        <VaccinePrioritySection
          title="앞으로 맞아야 할 접종"
          description="아직 완료 체크가 없는 예정 접종을 가까운 날짜순으로 보여줘요."
          icon={CalendarDays}
          kind="future"
          groups={futureGroups}
          recordMap={recordMap}
          savingKey={savingKey}
          onToggle={toggleCompleted}
          emptyText="현재 남은 예정 접종이 없어요. 완료 기록과 공식 예방접종 기록을 함께 확인해 주세요."
        />

        <VaccinePrioritySection
          title="확인이 필요한 접종"
          description="예정 시기가 지났지만 아직 완료 체크가 없는 항목이에요. 실제 접종 여부를 확인해보세요."
          icon={AlertTriangle}
          kind="overdue"
          groups={overdueGroups}
          recordMap={recordMap}
          savingKey={savingKey}
          onToggle={toggleCompleted}
          emptyText="확인이 필요한 지난 일정은 없어요."
        />

        <VaccinePrioritySection
          title={`완료한 접종 ${completedItems.length}개`}
          description="이미 완료로 체크한 접종은 필요할 때만 펼쳐서 확인해요."
          icon={CheckCircle2}
          kind="completed"
          groups={completedGroups}
          recordMap={recordMap}
          savingKey={savingKey}
          onToggle={toggleCompleted}
          emptyText="완료로 체크한 접종이 아직 없어요."
          collapsible
        />

        <section className="grid grid-cols-2 gap-2">
          <Link href={`/tools/vaccine-schedule?childId=${encodeURIComponent(selectedChild.id)}`} className="rounded-2xl border border-slate-100 bg-white px-3 py-3 text-[12px] font-extrabold text-slate-700">
            <CalendarDays size={14} className="mb-1 text-amber-600" aria-hidden />
            일정 계산기로 보기
          </Link>
          <Link href={`/my?childId=${encodeURIComponent(selectedChild.id)}`} className="rounded-2xl border border-slate-100 bg-white px-3 py-3 text-[12px] font-extrabold text-slate-700">
            <CheckCircle2 size={14} className="mb-1 text-amber-600" aria-hidden />
            내 아이 홈으로
          </Link>
        </section>
      </div>
    </main>
  );
}
