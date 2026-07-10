import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { AlertTriangle, Baby, Plus, Utensils } from "lucide-react";
import { getCurrentUser } from "@/lib/auth/session";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "이유식 타임라인",
  description: "아이별 이유식 기록을 날짜별 타임라인으로 확인하세요.",
  robots: { index: false, follow: false },
};

type ChildOption = {
  id: string;
  nickname: string | null;
  isPrimary: boolean;
};

type TimelineRecord = {
  id: string;
  childId: string;
  recordDate: string;
  mealSlot: string;
  foodNames: string;
  amount: string;
  reaction: string;
  hasNewFood: boolean;
  note?: string | null;
};

const mealSlotOrder: Record<string, number> = {
  breakfast: 0,
  lunch: 1,
  dinner: 2,
  snack: 3,
};

const mealSlotLabelMap: Record<string, string> = {
  breakfast: "아침",
  lunch: "점심",
  dinner: "저녁",
  snack: "간식",
};

const amountLabelMap: Record<string, string> = {
  taste: "맛보기",
  little: "조금",
  normal: "보통",
  good: "잘 먹음",
};

const reactionLabelMap: Record<string, string> = {
  ok: "괜찮았어요",
  refused: "거부했어요",
  uncomfortable: "불편해 보여요",
  caution: "상담 필요",
};

function childDisplayName(child: ChildOption, index: number) {
  return child.nickname?.trim() || `${index + 1}번째 아이`;
}

function todayInputValue() {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
}

function parseInputDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function addDays(value: string, days: number) {
  const date = parseInputDate(value);
  date.setDate(date.getDate() + days);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function formatDateLabel(value: string) {
  const today = todayInputValue();
  if (value === today) return "오늘";
  if (value === addDays(today, -1)) return "어제";
  if (value === addDays(today, 1)) return "내일";
  const date = parseInputDate(value);
  return `${date.getMonth() + 1}월 ${date.getDate()}일`;
}

function formatFullDateLabel(value: string) {
  const date = parseInputDate(value);
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  return `${formatDateLabel(value)} · ${date.getMonth() + 1}/${date.getDate()}(${weekdays[date.getDay()]})`;
}

function splitFoodNames(value: string) {
  return value
    .split(/[,.·/+&、，]|\s{2,}|\s+(?:그리고|및|랑|와|과)\s+/g)
    .map((item) => item.replace(/죽$|미음$/g, "").trim())
    .filter(Boolean)
    .slice(0, 10);
}

function uniqueFoodsFromRecords(records: TimelineRecord[], limit = 8) {
  const seen = new Set<string>();
  const foods: string[] = [];
  for (const record of records) {
    for (const food of splitFoodNames(record.foodNames)) {
      const key = food.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      foods.push(food);
      if (foods.length >= limit) return foods;
    }
  }
  return foods;
}

function groupRecordsByDate(records: TimelineRecord[]) {
  const grouped = new Map<string, TimelineRecord[]>();
  for (const record of records) {
    grouped.set(record.recordDate, [
      ...(grouped.get(record.recordDate) ?? []),
      record,
    ]);
  }

  return Array.from(grouped.entries()).map(([date, dayRecords]) => {
    const orderedRecords = [...dayRecords].sort(
      (a, b) =>
        (mealSlotOrder[a.mealSlot] ?? 99) - (mealSlotOrder[b.mealSlot] ?? 99),
    );
    return {
      date,
      records: orderedRecords,
      foods: uniqueFoodsFromRecords(orderedRecords),
      newFoodCount: orderedRecords.filter((record) => record.hasNewFood).length,
      cautionCount: orderedRecords.filter(
        (record) =>
          record.reaction === "caution" || record.reaction === "uncomfortable",
      ).length,
    };
  });
}

export default async function WeaningTimelinePage({
  searchParams,
}: {
  searchParams?: Promise<{ childId?: string }>;
}) {
  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/weaning-record/timeline");
  if (!user.children.length) redirect("/child/new");

  const params = await searchParams;
  const bornChildren = user.children.filter((child) => child.birthDate);
  if (!bornChildren.length) redirect("/my");

  const selectedChild =
    bornChildren.find((child) => child.id === params?.childId) ??
    bornChildren.find((child) => child.isPrimary) ??
    bornChildren[0];
  const selectedChildIndex = bornChildren.findIndex(
    (child) => child.id === selectedChild.id,
  );
  const selectedChildName = childDisplayName(
    selectedChild,
    Math.max(selectedChildIndex, 0),
  );

  const records = await prisma.childWeaningRecord.findMany({
    where: { childId: selectedChild.id },
    orderBy: [{ recordDate: "desc" }, { updatedAt: "desc" }],
    take: 240,
    select: {
      id: true,
      childId: true,
      recordDate: true,
      mealSlot: true,
      foodNames: true,
      amount: true,
      reaction: true,
      hasNewFood: true,
      note: true,
    },
  });

  const clientRecords: TimelineRecord[] = records.map((record) => ({
    id: record.id,
    childId: record.childId,
    recordDate: record.recordDate.toISOString().slice(0, 10),
    mealSlot: record.mealSlot,
    foodNames: record.foodNames,
    amount: record.amount,
    reaction: record.reaction,
    hasNewFood: record.hasNewFood,
    note: record.note,
  }));

  const timelineGroups = groupRecordsByDate(clientRecords);
  const stats = {
    days: timelineGroups.length,
    total: clientRecords.length,
    newFoods: clientRecords.filter((record) => record.hasNewFood).length,
    cautions: clientRecords.filter(
      (record) =>
        record.reaction === "caution" || record.reaction === "uncomfortable",
    ).length,
  };
  const today = todayInputValue();

  return (
    <main className="mt-page">
      <div className="mt-container max-w-xl space-y-3">
        <section className="mt-card p-4">
          <span className="mt-badge">이유식 타임라인</span>
          <h1 className="mt-3 text-[20px] font-black leading-7 text-slate-950">
            날짜별 이유식 흐름을 한눈에 봐요
          </h1>
          <p className="mt-1.5 text-[12px] leading-5 text-slate-600">
            {selectedChildName}가 언제 무엇을 먹었는지, 새 재료와 주의 반응을
            날짜별로 모아 보여줘요.
          </p>
        </section>

        <section className="mt-card p-3" aria-label="아이 선택">
          <div className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {bornChildren.map((child, index) => {
              const isSelected = child.id === selectedChild.id;
              return (
                <Link
                  key={child.id}
                  href={`/weaning-record/timeline?childId=${encodeURIComponent(child.id)}`}
                  aria-current={isSelected ? "page" : undefined}
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-2 text-[12px] font-extrabold transition active:scale-[0.98] ${
                    isSelected
                      ? "border-amber-200 bg-amber-50 text-amber-900"
                      : "border-slate-200 bg-white text-slate-700"
                  }`}
                >
                  <Baby size={13} aria-hidden />
                  {childDisplayName(child, index)}
                </Link>
              );
            })}
            <Link
              href="/child/new"
              className="inline-flex shrink-0 items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-2 text-[12px] font-extrabold text-slate-700 active:scale-[0.98]"
            >
              <Plus size={13} aria-hidden /> 추가
            </Link>
          </div>
        </section>

        <section
          className="grid grid-cols-2 gap-2"
          aria-label="이유식 타임라인 요약"
        >
          <div className="rounded-2xl border border-slate-100 bg-white p-3">
            <p className="text-[10px] font-bold text-slate-500">기록한 날</p>
            <p className="mt-0.5 text-[16px] font-black text-slate-950">
              {stats.days}일
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-3">
            <p className="text-[10px] font-bold text-slate-500">전체</p>
            <p className="mt-0.5 text-[16px] font-black text-slate-950">
              {stats.total}회
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-3">
            <p className="text-[10px] font-bold text-slate-500">새 재료</p>
            <p className="mt-0.5 text-[16px] font-black text-slate-950">
              {stats.newFoods}회
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-3">
            <p className="text-[10px] font-bold text-slate-500">주의</p>
            <p className="mt-0.5 text-[16px] font-black text-slate-950">
              {stats.cautions}회
            </p>
          </div>
        </section>

        <div className="grid grid-cols-2 gap-2">
          <Link
            href={`/weaning-record?childId=${encodeURIComponent(selectedChild.id)}&date=${encodeURIComponent(today)}`}
            className="mt-button-primary text-center"
          >
            오늘 기록하기
          </Link>
          <Link href="/records" className="mt-button-secondary text-center">
            기록 메뉴로
          </Link>
        </div>

        {timelineGroups.length ? (
          <section
            className="mt-simple-list"
            aria-labelledby="weaning-timeline-list-title"
          >
            <div className="border-b border-slate-100 px-4 py-3">
              <div className="flex items-center justify-between gap-3">
                <h2
                  id="weaning-timeline-list-title"
                  className="text-[14px] font-extrabold text-slate-900"
                >
                  날짜별 기록
                </h2>
                <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[11px] font-extrabold text-slate-600">
                  최근 {timelineGroups.length}일
                </span>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              {timelineGroups.map((group) => (
                <article key={group.date} className="px-4 py-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <h3 className="text-[14px] font-black text-slate-950">
                          {formatFullDateLabel(group.date)}
                        </h3>
                        {group.newFoodCount ? (
                          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-extrabold text-emerald-700">
                            새 재료 {group.newFoodCount}
                          </span>
                        ) : null}
                        {group.cautionCount ? (
                          <span className="rounded-full bg-rose-50 px-2 py-0.5 text-[10px] font-extrabold text-rose-600">
                            주의 {group.cautionCount}
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-1 text-[11px] leading-4 text-slate-500">
                        {group.records.length}회 기록 ·{" "}
                        {group.records
                          .map(
                            (record) =>
                              mealSlotLabelMap[record.mealSlot] ?? "기록",
                          )
                          .join(" · ")}
                      </p>
                    </div>
                    <Link
                      href={`/weaning-record?childId=${encodeURIComponent(selectedChild.id)}&date=${encodeURIComponent(group.date)}`}
                      className="shrink-0 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-extrabold text-slate-600 active:scale-[0.98]"
                    >
                      기록 보기
                    </Link>
                  </div>

                  {group.foods.length ? (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {group.foods.map((food) => (
                        <span
                          key={`${group.date}-${food}`}
                          className="rounded-full bg-slate-50 px-2 py-1 text-[10px] font-extrabold text-slate-600"
                        >
                          {food}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-3 space-y-2">
                    {group.records.map((record) => (
                      <div
                        key={record.id}
                        className="rounded-2xl border border-slate-100 bg-slate-50/70 px-3 py-2.5"
                      >
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-extrabold text-amber-700">
                            {mealSlotLabelMap[record.mealSlot] ?? "기록"}
                          </span>
                          {record.hasNewFood ? (
                            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-extrabold text-emerald-700">
                              새 재료
                            </span>
                          ) : null}
                          <span className="text-[10px] font-bold text-slate-500">
                            {amountLabelMap[record.amount] ?? "보통"} ·{" "}
                            {reactionLabelMap[record.reaction] ?? "괜찮았어요"}
                          </span>
                        </div>
                        <p className="mt-1.5 text-[13px] font-extrabold leading-5 text-slate-900">
                          {record.foodNames}
                        </p>
                        {record.note ? (
                          <p className="mt-1 rounded-2xl bg-white px-3 py-2 text-[11px] leading-4 text-slate-600">
                            {record.note}
                          </p>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : (
          <section className="mt-card p-6 text-center" aria-label="빈 타임라인">
            <Utensils
              className="mx-auto text-slate-300"
              size={30}
              aria-hidden
            />
            <p className="mt-3 text-[14px] font-extrabold text-slate-800">
              아직 타임라인에 표시할 기록이 없어요
            </p>
            <p className="mt-1 text-[12px] leading-5 text-slate-500">
              오늘 먹인 재료 하나만 남겨도 이곳에 날짜별 흐름이 쌓여요.
            </p>
            <Link
              href={`/weaning-record?childId=${encodeURIComponent(selectedChild.id)}&date=${encodeURIComponent(today)}`}
              className="mt-button-primary mt-4 inline-flex"
            >
              첫 기록 남기기
            </Link>
          </section>
        )}

        <section className="rounded-2xl border border-amber-100 bg-amber-50/70 px-4 py-3 text-[12px] leading-5 text-slate-700">
          <div className="flex gap-2">
            <AlertTriangle
              size={15}
              className="mt-0.5 shrink-0 text-amber-600"
              aria-hidden
            />
            <p>
              이유식 타임라인은 보호자가 흐름을 기억하기 위한 기록이에요.
              반복되는 거부, 구토, 피부 반응이 있으면 기록을 보여주며 상담해
              주세요.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
