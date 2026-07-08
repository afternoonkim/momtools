"use client";

import Link from "next/link";
import TimelineLinkCard from "@/components/common/TimelineLinkCard";
import { useMemo, useState, type ReactNode } from "react";
import {
  AlertTriangle,
  Baby,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Info,
  Plus,
  ShieldAlert,
  Trash2,
  Utensils,
} from "lucide-react";
import {
  findWeaningFoodGuides,
  type WeaningFoodGuide,
} from "@/lib/weaning-food-guides";

type ChildOption = {
  id: string;
  nickname: string | null;
  birthDate: string;
  isPrimary: boolean;
};

type WeaningRecord = {
  id: string;
  childId: string;
  recordDate: string;
  mealSlot: string;
  foodNames: string;
  amount: string;
  reaction: string;
  hasNewFood: boolean;
  note?: string | null;
  createdAt: string;
  updatedAt: string;
};

type WeaningRecordClientProps = {
  childrenOptions: ChildOption[];
  selectedChildId: string;
  selectedDate: string;
  initialRecords: WeaningRecord[];
};

const mealSlots = [
  { key: "breakfast", label: "아침" },
  { key: "lunch", label: "점심" },
  { key: "dinner", label: "저녁" },
  { key: "snack", label: "간식" },
] as const;

const amountOptions = [
  { key: "taste", label: "맛보기" },
  { key: "little", label: "조금" },
  { key: "normal", label: "보통" },
  { key: "good", label: "잘 먹음" },
] as const;

const reactionOptions = [
  { key: "ok", label: "괜찮았어요" },
  { key: "refused", label: "거부했어요" },
  { key: "uncomfortable", label: "불편해 보여요" },
  { key: "caution", label: "상담 필요" },
] as const;

type MealSlot = (typeof mealSlots)[number]["key"];
type Amount = (typeof amountOptions)[number]["key"];
type Reaction = (typeof reactionOptions)[number]["key"];

const mealSlotOrder = Object.fromEntries(
  mealSlots.map((item, index) => [item.key, index]),
);
const mealSlotLabelMap = Object.fromEntries(
  mealSlots.map((item) => [item.key, item.label]),
);
const amountLabelMap = Object.fromEntries(
  amountOptions.map((item) => [item.key, item.label]),
);
const reactionLabelMap = Object.fromEntries(
  reactionOptions.map((item) => [item.key, item.label]),
);

function childDisplayName(child: ChildOption, index: number) {
  return child.nickname?.trim() || `${index + 1}번째 아이`;
}

function parseInputDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function toDateInputValue(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function todayInputValue() {
  return toDateInputValue(new Date());
}

function addDays(value: string, days: number) {
  const date = parseInputDate(value);
  date.setDate(date.getDate() + days);
  return toDateInputValue(date);
}

function formatDateLabel(value: string) {
  const today = todayInputValue();
  if (value === today) return "오늘";
  if (value === addDays(today, -1)) return "어제";
  if (value === addDays(today, 1)) return "내일";
  const date = parseInputDate(value);
  return `${date.getMonth() + 1}월 ${date.getDate()}일`;
}

function safeMealSlot(value: string): MealSlot {
  return mealSlots.some((item) => item.key === value)
    ? (value as MealSlot)
    : "lunch";
}

function safeAmount(value: string): Amount {
  return amountOptions.some((item) => item.key === value)
    ? (value as Amount)
    : "normal";
}

function safeReaction(value: string): Reaction {
  return reactionOptions.some((item) => item.key === value)
    ? (value as Reaction)
    : "ok";
}

function splitFoodNames(value: string) {
  return value
    .split(/[,.·/+&、，]|\s{2,}|\s+(?:그리고|및|랑|와|과)\s+/g)
    .map((item) => item.replace(/죽$|미음$/g, "").trim())
    .filter(Boolean)
    .slice(0, 10);
}

function OptionButton({
  active,
  label,
  onClick,
  group,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
  group: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      data-mt-selected={active ? "true" : "false"}
      data-mt-choice-group={group}
      onClick={onClick}
      className={`mt-selectable-button mt-choice-button min-h-10 rounded-2xl border px-3 py-2 text-[12px] font-extrabold transition active:scale-[0.98] ${
        active
          ? "border-amber-300 bg-amber-100 text-amber-900 ring-1 ring-amber-200"
          : "border-slate-200 bg-white text-slate-600"
      }`}
    >
      {label}
    </button>
  );
}

function FoodGuideDetail({
  title,
  icon,
  children,
}: {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <details className="rounded-2xl border border-slate-100 bg-white px-3 py-2.5 open:border-amber-100 open:bg-amber-50/30">
      <summary className="flex min-h-8 cursor-pointer list-none items-center justify-between gap-2 text-[12px] font-extrabold text-slate-800 [&::-webkit-details-marker]:hidden">
        <span className="inline-flex items-center gap-1.5">
          {icon}
          {title}
        </span>
        <ChevronDown
          size={14}
          className="shrink-0 text-slate-400 transition"
          aria-hidden
        />
      </summary>
      <div className="mt-2 text-[12px] leading-5 text-slate-600">
        {children}
      </div>
    </details>
  );
}

function FoodGuideCards({ guides }: { guides: WeaningFoodGuide[] }) {
  const [selectedName, setSelectedName] = useState(guides[0]?.name ?? "");
  const selectedGuide =
    guides.find((guide) => guide.name === selectedName) ?? guides[0];

  if (!selectedGuide) return null;

  return (
    <section
      className="mt-3 rounded-3xl border border-amber-100 bg-amber-50/40 p-3"
      aria-labelledby="food-guide-title"
    >
      <div className="flex items-start gap-2">
        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-white text-amber-700">
          <Info size={16} aria-hidden />
        </div>
        <div className="min-w-0 flex-1">
          <h3
            id="food-guide-title"
            className="text-[13px] font-black text-slate-900"
          >
            재료 참고 정보
          </h3>
          <p className="mt-1 text-[11px] leading-4 text-slate-600">
            입력한 재료 중 대표 식재료를 찾아 보여줘요. 필요한 카드만
            열어보세요.
          </p>
        </div>
      </div>

      {guides.length > 1 ? (
        <div
          className="mt-3 flex gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="입력한 재료 선택"
        >
          {guides.map((guide) => {
            const active = guide.name === selectedGuide.name;
            return (
              <button
                key={guide.name}
                type="button"
                onClick={() => setSelectedName(guide.name)}
                aria-pressed={active}
                data-mt-selected={active ? "true" : undefined}
                className={`mt-selectable-button shrink-0 rounded-full border px-2.5 py-1.5 text-[11px] font-extrabold active:scale-[0.98] ${
                  active
                    ? "border-amber-200 bg-white text-amber-800"
                    : "border-transparent bg-white/70 text-slate-600"
                }`}
              >
                {guide.name}
              </button>
            );
          })}
        </div>
      ) : null}

      <div className="mt-3 rounded-2xl bg-white/70 px-3 py-2.5">
        <div className="flex flex-wrap items-center gap-1.5">
          <strong className="text-[13px] font-black text-slate-900">
            {selectedGuide.name}
          </strong>
          <span className="rounded-full bg-slate-50 px-2 py-0.5 text-[10px] font-extrabold text-slate-500">
            {selectedGuide.category}
          </span>
        </div>
        <p className="mt-1 text-[11px] leading-4 text-slate-500">
          음식 정보는 조금 더 자세히, 알레르겐과 제공법은 기록에 필요한 만큼만
          담았어요.
        </p>
      </div>

      <div className="mt-2 space-y-1.5">
        <FoodGuideDetail
          title="음식 백과"
          icon={<Info size={14} className="text-amber-600" aria-hidden />}
        >
          <p>{selectedGuide.summary}</p>
        </FoodGuideDetail>

        <FoodGuideDetail
          title="알레르겐·주의 반응"
          icon={<ShieldAlert size={14} className="text-rose-500" aria-hidden />}
        >
          <p>{selectedGuide.allergenNote}</p>
          <p className="mt-1.5 text-[11px] leading-4 text-slate-500">
            이 내용은 진단이 아니라 기록을 돕는 참고예요. 반응이 뚜렷하거나
            걱정되면 의료진과 상담해 주세요.
          </p>
        </FoodGuideDetail>

        <FoodGuideDetail
          title="월령별 제공법"
          icon={<Baby size={14} className="text-amber-600" aria-hidden />}
        >
          <div className="space-y-1.5">
            <p>
              <strong className="text-slate-800">초기</strong> ·{" "}
              {selectedGuide.stageTips.early}
            </p>
            <p>
              <strong className="text-slate-800">중기</strong> ·{" "}
              {selectedGuide.stageTips.middle}
            </p>
            <p>
              <strong className="text-slate-800">후기</strong> ·{" "}
              {selectedGuide.stageTips.late}
            </p>
          </div>
        </FoodGuideDetail>

        <FoodGuideDetail
          title="식단 조합 아이디어"
          icon={<Utensils size={14} className="text-emerald-600" aria-hidden />}
        >
          <div className="flex flex-wrap gap-1.5">
            {selectedGuide.pairings.map((pairing) => (
              <span
                key={pairing}
                className="rounded-full bg-white px-2.5 py-1 text-[11px] font-extrabold text-slate-600"
              >
                {selectedGuide.name} + {pairing}
              </span>
            ))}
          </div>
        </FoodGuideDetail>

        <FoodGuideDetail
          title="간단 조리 힌트"
          icon={<CheckCircle2 size={14} className="text-sky-600" aria-hidden />}
        >
          <p>{selectedGuide.recipeIdea}</p>
        </FoodGuideDetail>
      </div>
    </section>
  );
}

export default function WeaningRecordClient({
  childrenOptions,
  selectedChildId,
  selectedDate: initialSelectedDate,
  initialRecords,
}: WeaningRecordClientProps) {
  const selectedChild =
    childrenOptions.find((child) => child.id === selectedChildId) ??
    childrenOptions[0];
  const selectedChildIndex = childrenOptions.findIndex(
    (child) => child.id === selectedChild.id,
  );
  const selectedChildName = childDisplayName(
    selectedChild,
    Math.max(selectedChildIndex, 0),
  );

  const [selectedDate, setSelectedDate] = useState(initialSelectedDate);
  const [records, setRecords] = useState<WeaningRecord[]>(initialRecords);
  const [mealSlot, setMealSlot] = useState<MealSlot>("lunch");
  const [foodNames, setFoodNames] = useState("");
  const [amount, setAmount] = useState<Amount>("normal");
  const [reaction, setReaction] = useState<Reaction>("ok");
  const [hasNewFood, setHasNewFood] = useState(false);
  const [note, setNote] = useState("");
  const [pending, setPending] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  const selectedDateRecords = useMemo(() => {
    return records
      .filter((record) => record.recordDate === selectedDate)
      .sort(
        (a, b) =>
          (mealSlotOrder[a.mealSlot] ?? 99) - (mealSlotOrder[b.mealSlot] ?? 99),
      );
  }, [records, selectedDate]);

  const editingRecord =
    selectedDateRecords.find((record) => record.mealSlot === mealSlot) ?? null;
  const newFoodCount = selectedDateRecords.filter(
    (record) => record.hasNewFood,
  ).length;
  const cautionCount = selectedDateRecords.filter(
    (record) =>
      record.reaction === "caution" || record.reaction === "uncomfortable",
  ).length;
  const recentFoods = useMemo(() => {
    const seen = new Set<string>();
    const foods: string[] = [];
    for (const record of records) {
      for (const food of splitFoodNames(record.foodNames)) {
        const key = food.toLowerCase();
        if (seen.has(key)) continue;
        seen.add(key);
        foods.push(food);
        if (foods.length >= 10) return foods;
      }
    }
    return foods;
  }, [records]);

  const foodGuideMatches = useMemo(
    () => findWeaningFoodGuides(foodNames, 5),
    [foodNames],
  );

  const timelineStats = useMemo(() => {
    return {
      days: new Set(records.map((record) => record.recordDate)).size,
      total: records.length,
      newFoods: records.filter((record) => record.hasNewFood).length,
    };
  }, [records]);

  function resetForm(nextSlot: MealSlot = mealSlot) {
    setMealSlot(nextSlot);
    setFoodNames("");
    setAmount("normal");
    setReaction("ok");
    setHasNewFood(false);
    setNote("");
  }

  function selectSlot(nextSlot: MealSlot) {
    setMessage("");
    setMealSlot(nextSlot);
    const record = selectedDateRecords.find(
      (item) => item.mealSlot === nextSlot,
    );
    if (!record) {
      resetForm(nextSlot);
      return;
    }
    setFoodNames(record.foodNames);
    setAmount(safeAmount(record.amount));
    setReaction(safeReaction(record.reaction));
    setHasNewFood(record.hasNewFood);
    setNote(record.note ?? "");
  }

  function changeDate(nextDate: string) {
    setSelectedDate(nextDate);
    setMessage("");
    resetForm("lunch");
  }

  async function saveRecord() {
    const trimmedFoodNames = foodNames.trim();
    if (!trimmedFoodNames) {
      setMessage("오늘 먹인 재료나 메뉴를 적어주세요.");
      return;
    }

    setPending(true);
    setMessage("");

    const response = await fetch(
      `/api/children/${selectedChild.id}/weaning-records`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          recordDate: selectedDate,
          mealSlot,
          foodNames: trimmedFoodNames,
          amount,
          reaction,
          hasNewFood,
          note,
        }),
      },
    ).catch(() => null);

    setPending(false);

    if (!response?.ok) {
      const data = (await response?.json().catch(() => null)) as {
        message?: string;
      } | null;
      setMessage(
        data?.message ?? "저장하지 못했어요. 잠시 후 다시 시도해 주세요.",
      );
      return;
    }

    const data = (await response.json().catch(() => null)) as {
      record?: WeaningRecord;
    } | null;
    if (!data?.record) {
      setMessage(
        "저장 결과를 확인하지 못했어요. 새로고침 후 다시 확인해 주세요.",
      );
      return;
    }

    setRecords((current) => {
      const filtered = current.filter(
        (record) =>
          record.id !== data.record?.id &&
          !(record.recordDate === selectedDate && record.mealSlot === mealSlot),
      );
      return [data.record as WeaningRecord, ...filtered];
    });
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("momtools:pwa-install-qualified"));
    }
    setMessage("이유식 기록을 저장했어요.");
  }

  async function deleteRecord(record: WeaningRecord) {
    if (!window.confirm("이 이유식 기록을 삭제할까요?")) return;

    setDeletingId(record.id);
    setMessage("");

    const response = await fetch(
      `/api/children/${selectedChild.id}/weaning-records?id=${encodeURIComponent(record.id)}`,
      {
        method: "DELETE",
      },
    ).catch(() => null);

    setDeletingId(null);

    if (!response?.ok) {
      const data = (await response?.json().catch(() => null)) as {
        message?: string;
      } | null;
      setMessage(
        data?.message ?? "삭제하지 못했어요. 잠시 후 다시 시도해 주세요.",
      );
      return;
    }

    setRecords((current) => current.filter((item) => item.id !== record.id));
    if (record.mealSlot === mealSlot) resetForm(safeMealSlot(record.mealSlot));
    setMessage("기록을 삭제했어요.");
  }

  return (
    <main className="mt-page">
      <div className="mt-container max-w-xl space-y-3">
        <section className="mt-card p-4">
          <span className="mt-badge">이유식 기록</span>
          <h1 className="mt-3 text-[20px] font-black leading-7 text-slate-950">
            오늘 먹은 것만 짧게 남겨요
          </h1>
          <p className="mt-1.5 text-[12px] leading-5 text-slate-600">
            {selectedChildName}의 이유식 메뉴, 먹은 양, 반응만 간단히 기록해요.
            매일 길게 쓰지 않아도 흐름을 볼 수 있어요.
          </p>
        </section>

        <section className="mt-card p-3" aria-label="아이 선택">
          <div className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {childrenOptions.map((child, index) => {
              const isSelected = child.id === selectedChild.id;
              return (
                <Link
                  key={child.id}
                  href={`/weaning-record?childId=${encodeURIComponent(child.id)}&date=${encodeURIComponent(selectedDate)}`}
                  aria-current={isSelected ? "page" : undefined}
                  data-mt-selected={isSelected ? "true" : undefined}
                  className={`mt-selectable-button inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-2 text-[12px] font-extrabold transition active:scale-[0.98] ${
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

        <TimelineLinkCard
          href={`/weaning-record/timeline?childId=${encodeURIComponent(selectedChild.id)}`}
          icon={CalendarDays}
          title="이유식 타임라인"
          description={
            timelineStats.total
              ? `${timelineStats.days}일 · ${timelineStats.total}회 기록을 한눈에 보기`
              : "첫 기록을 남기면 날짜별 흐름을 볼 수 있어요"
          }
        />

        <section className="mt-card p-3.5" aria-label="날짜 선택">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => changeDate(addDays(selectedDate, -1))}
              className="h-10 rounded-2xl border border-slate-200 bg-white px-3 text-[12px] font-extrabold text-slate-600 active:scale-[0.98]"
            >
              이전
            </button>
            <label className="min-w-0 flex-1">
              <span className="sr-only">기록 날짜</span>
              <input
                type="date"
                value={selectedDate}
                onChange={(event) => changeDate(event.target.value)}
                className="mt-input min-h-10 px-3 py-2 text-center text-[13px] font-extrabold"
              />
            </label>
            <button
              type="button"
              onClick={() => changeDate(addDays(selectedDate, 1))}
              className="h-10 rounded-2xl border border-slate-200 bg-white px-3 text-[12px] font-extrabold text-slate-600 active:scale-[0.98]"
            >
              다음
            </button>
          </div>
          <div className="mt-2 flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1 text-[12px] font-extrabold text-slate-700">
              <CalendarDays size={14} aria-hidden />{" "}
              {formatDateLabel(selectedDate)} 기록
            </span>
            <button
              type="button"
              onClick={() => changeDate(todayInputValue())}
              className="rounded-full bg-slate-50 px-2.5 py-1 text-[11px] font-extrabold text-slate-600 active:scale-[0.98]"
            >
              오늘로 이동
            </button>
          </div>
        </section>

        <section
          className="grid grid-cols-3 gap-2"
          aria-label="오늘 이유식 요약"
        >
          <div className="rounded-2xl border border-slate-100 bg-white p-3">
            <p className="text-[10px] font-bold text-slate-500">기록</p>
            <p className="mt-0.5 text-[16px] font-black text-slate-950">
              {selectedDateRecords.length}회
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-3">
            <p className="text-[10px] font-bold text-slate-500">새 재료</p>
            <p className="mt-0.5 text-[16px] font-black text-slate-950">
              {newFoodCount}개
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-3">
            <p className="text-[10px] font-bold text-slate-500">주의 반응</p>
            <p className="mt-0.5 text-[16px] font-black text-slate-950">
              {cautionCount}회
            </p>
          </div>
        </section>

        <section className="mt-card p-4" aria-labelledby="weaning-form-title">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2
                id="weaning-form-title"
                className="text-[15px] font-extrabold text-slate-900"
              >
                기록 추가
              </h2>
              <p className="mt-1 text-[12px] leading-5 text-slate-500">
                식사 시간 하나를 고르고, 오늘 먹인 것만 적으면 돼요.
              </p>
            </div>
            {editingRecord ? (
              <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-extrabold text-amber-700">
                수정 중
              </span>
            ) : null}
          </div>

          <div className="mt-3 grid grid-cols-4 gap-1.5">
            {mealSlots.map((slot) => {
              const hasRecord = selectedDateRecords.some(
                (record) => record.mealSlot === slot.key,
              );
              return (
                <button
                  key={slot.key}
                  type="button"
                  onClick={() => selectSlot(slot.key)}
                  aria-pressed={mealSlot === slot.key}
                  data-mt-selected={mealSlot === slot.key ? "true" : "false"}
                  data-mt-choice-group="meal-slot"
                  className={`mt-selectable-button mt-choice-button rounded-2xl border px-2 py-2 text-center text-[11px] font-extrabold transition active:scale-[0.98] ${
                    mealSlot === slot.key
                      ? "border-amber-300 bg-amber-100 text-amber-900 ring-1 ring-amber-200"
                      : hasRecord
                        ? "border-emerald-100 bg-emerald-50 text-emerald-700"
                        : "border-slate-200 bg-white text-slate-600"
                  }`}
                >
                  {slot.label}
                </button>
              );
            })}
          </div>

          <label className="mt-3 block">
            <span className="text-[12px] font-extrabold text-slate-700">
              먹인 재료나 메뉴
            </span>
            <input
              value={foodNames}
              onChange={(event) => setFoodNames(event.target.value)}
              placeholder="예: 쌀, 소고기, 애호박 / 소고기 애호박죽"
              maxLength={100}
              aria-describedby="weaning-food-input-help"
              className="mt-input mt-1.5"
            />
          </label>
          <div
            id="weaning-food-input-help"
            className="mt-2 rounded-2xl bg-slate-50 px-3 py-2 text-[11px] leading-4 text-slate-500"
          >
            여러 재료를 함께 적을 수 있어요. 쉼표로 나누면 기록과 최근 재료
            정리가 더 깔끔해요.
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {["쌀, 소고기, 애호박", "고구마, 브로콜리", "오트밀, 바나나"].map(
                (example) => (
                  <button
                    key={example}
                    type="button"
                    onClick={() => setFoodNames(example)}
                    className="rounded-full bg-white px-2.5 py-1 text-[10px] font-extrabold text-slate-600 active:scale-[0.98]"
                  >
                    {example}
                  </button>
                ),
              )}
            </div>
          </div>

          {foodGuideMatches.length ? (
            <>
              <div
                className="mt-2 flex flex-wrap gap-1.5"
                aria-label="인식된 대표 재료"
              >
                {foodGuideMatches.map((guide) => (
                  <span
                    key={guide.name}
                    className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-extrabold text-amber-700"
                  >
                    {guide.name} 정보 있음
                  </span>
                ))}
              </div>
              <FoodGuideCards guides={foodGuideMatches} />
            </>
          ) : foodNames.trim() ? (
            <p className="mt-2 text-[11px] leading-4 text-slate-500">
              아직 연결된 음식 정보가 없는 재료도 기록은 저장할 수 있어요.
            </p>
          ) : null}

          <div className="mt-3">
            <p className="text-[12px] font-extrabold text-slate-700">먹은 양</p>
            <div className="mt-1.5 grid grid-cols-4 gap-1.5">
              {amountOptions.map((item) => (
                <OptionButton
                  key={item.key}
                  active={amount === item.key}
                  label={item.label}
                  onClick={() => setAmount(item.key)}
                  group="amount"
                />
              ))}
            </div>
          </div>

          <div className="mt-3">
            <p className="text-[12px] font-extrabold text-slate-700">반응</p>
            <div className="mt-1.5 grid grid-cols-2 gap-1.5">
              {reactionOptions.map((item) => (
                <OptionButton
                  key={item.key}
                  active={reaction === item.key}
                  label={item.label}
                  onClick={() => setReaction(item.key)}
                  group="reaction"
                />
              ))}
            </div>
          </div>

          <label
            data-mt-selected={hasNewFood ? "true" : "false"}
            data-mt-choice-group="new-food"
            className="mt-selectable-button mt-choice-button mt-3 flex items-center gap-2 rounded-2xl border border-slate-100 bg-slate-50 px-3 py-2.5 text-[12px] font-extrabold text-slate-700"
          >
            <input
              type="checkbox"
              checked={hasNewFood}
              onChange={(event) => setHasNewFood(event.target.checked)}
              className="h-4 w-4 accent-amber-500"
            />
            처음 먹인 재료가 있어요
          </label>

          <label className="mt-3 block">
            <span className="text-[12px] font-extrabold text-slate-700">
              메모
            </span>
            <textarea
              value={note}
              onChange={(event) => setNote(event.target.value)}
              placeholder="예: 입 주변이 살짝 빨개짐, 숟가락은 거부함"
              maxLength={300}
              rows={3}
              className="mt-input mt-1.5 resize-none"
            />
          </label>

          {reaction === "caution" || reaction === "uncomfortable" ? (
            <div className="mt-3 rounded-2xl border border-rose-100 bg-rose-50 px-3 py-2.5 text-[12px] leading-5 text-rose-700">
              입술·눈 주변 붓기, 호흡이 불편해 보임, 반복 구토처럼 평소와 다른
              반응이 뚜렷하면 바로 의료진과 상담해 주세요.
            </div>
          ) : null}

          {message ? (
            <p className="mt-3 text-[12px] font-extrabold text-amber-700">
              {message}
            </p>
          ) : null}

          <div className="mt-3 grid grid-cols-[1fr_auto] gap-2">
            <button
              type="button"
              onClick={saveRecord}
              disabled={pending}
              className="mt-button-primary w-full disabled:opacity-60"
            >
              {pending ? "저장 중" : editingRecord ? "수정 저장" : "기록 저장"}
            </button>
            <button
              type="button"
              onClick={() => resetForm()}
              className="mt-button-secondary px-3"
            >
              비우기
            </button>
          </div>
        </section>

        <section
          className="mt-simple-list"
          aria-labelledby="weaning-record-list-title"
        >
          <div className="border-b border-slate-100 px-4 py-3">
            <div className="flex items-center justify-between gap-3">
              <h2
                id="weaning-record-list-title"
                className="text-[14px] font-extrabold text-slate-900"
              >
                {formatDateLabel(selectedDate)} 먹은 기록
              </h2>
              <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[11px] font-extrabold text-slate-600">
                {selectedDateRecords.length}개
              </span>
            </div>
          </div>

          {selectedDateRecords.length ? (
            selectedDateRecords.map((record) => (
              <article
                key={record.id}
                className="border-b border-slate-100 px-4 py-3.5 last:border-b-0"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-extrabold text-amber-700">
                        {mealSlotLabelMap[record.mealSlot] ?? "기록"}
                      </span>
                      {record.hasNewFood ? (
                        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-extrabold text-emerald-700">
                          새 재료
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-2 text-[14px] font-black leading-5 text-slate-950">
                      {record.foodNames}
                    </h3>
                    <p className="mt-1 text-[12px] leading-5 text-slate-500">
                      {amountLabelMap[record.amount] ?? "보통"} ·{" "}
                      {reactionLabelMap[record.reaction] ?? "괜찮았어요"}
                    </p>
                    {record.note ? (
                      <p className="mt-1.5 rounded-2xl bg-slate-50 px-3 py-2 text-[12px] leading-5 text-slate-600">
                        {record.note}
                      </p>
                    ) : null}
                  </div>
                  <div className="flex shrink-0 flex-col gap-1">
                    <button
                      type="button"
                      onClick={() => selectSlot(safeMealSlot(record.mealSlot))}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-extrabold text-slate-600 active:scale-[0.98]"
                    >
                      수정
                    </button>
                    <button
                      type="button"
                      onClick={() => deleteRecord(record)}
                      disabled={deletingId === record.id}
                      className="inline-flex items-center justify-center rounded-full border border-rose-100 bg-white px-3 py-1.5 text-[11px] font-extrabold text-rose-600 active:scale-[0.98] disabled:opacity-60"
                    >
                      <Trash2 size={12} aria-hidden />
                    </button>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="px-4 py-6 text-center">
              <Utensils
                className="mx-auto text-slate-300"
                size={28}
                aria-hidden
              />
              <p className="mt-2 text-[13px] font-extrabold text-slate-800">
                아직 기록이 없어요
              </p>
              <p className="mt-1 text-[12px] leading-5 text-slate-500">
                오늘 먹인 재료 하나만 적어도 다음 식사 준비가 훨씬 쉬워져요.
              </p>
            </div>
          )}
        </section>

        {recentFoods.length ? (
          <section className="mt-card p-4" aria-labelledby="recent-food-title">
            <div className="flex items-center gap-2">
              <CheckCircle2
                size={15}
                className="text-emerald-600"
                aria-hidden
              />
              <h2
                id="recent-food-title"
                className="text-[14px] font-extrabold text-slate-900"
              >
                최근 먹어본 재료
              </h2>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {recentFoods.map((food) => (
                <button
                  key={food}
                  type="button"
                  onClick={() =>
                    setFoodNames((current) =>
                      current.trim() ? `${current.trim()}, ${food}` : food,
                    )
                  }
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[12px] font-extrabold text-slate-600 active:scale-[0.98]"
                >
                  {food}
                </button>
              ))}
            </div>
          </section>
        ) : null}

        <section className="rounded-2xl border border-amber-100 bg-amber-50/70 px-4 py-3 text-[12px] leading-5 text-slate-700">
          <div className="flex gap-2">
            <AlertTriangle
              size={15}
              className="mt-0.5 shrink-0 text-amber-600"
              aria-hidden
            />
            <p>
              이유식 기록은 진단이 아니라 보호자가 기억하기 위한 메모예요.
              반복되는 거부, 구토, 피부 반응이 있으면 기록을 보여주며 상담해
              주세요.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
