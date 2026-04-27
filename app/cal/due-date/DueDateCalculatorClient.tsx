"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Milestone = {
  label: string;
  week: number;
  date: Date | null;
  description: string;
};

const AVERAGE_PREGNANCY_DAYS = 280;
const MIN_CYCLE = 21;
const MAX_CYCLE = 40;

function parseLocalDate(dateString: string) {
  if (!dateString) return null;

  const [year, month, day] = dateString.split("-").map(Number);
  if (!year || !month || !day) return null;

  const date = new Date(year, month - 1, day);

  if (
    Number.isNaN(date.getTime()) ||
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }

  return date;
}

function addDays(date: Date, days: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function diffInDays(from: Date, to: Date) {
  const start = new Date(
    from.getFullYear(),
    from.getMonth(),
    from.getDate()
  ).getTime();
  const end = new Date(
    to.getFullYear(),
    to.getMonth(),
    to.getDate()
  ).getTime();

  return Math.floor((end - start) / (1000 * 60 * 60 * 24));
}

function formatDate(date: Date | null) {
  if (!date) return "-";

  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  }).format(date);
}

function formatCompactDate(date: Date | null) {
  if (!date) return "-";

  return new Intl.DateTimeFormat("ko-KR", {
    month: "long",
    day: "numeric",
  }).format(date);
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("ko-KR").format(value);
}

function getTrimester(weeks: number) {
  if (weeks < 14) return "임신 초기";
  if (weeks < 28) return "임신 중기";
  return "임신 후기";
}

export default function DueDateCalculatorClient() {
  const today = useMemo(() => new Date(), []);
  const [lmp, setLmp] = useState("");
  const [cycleLength, setCycleLength] = useState(28);

  const result = useMemo(() => {
    if (!lmp) {
      return {
        status: "idle" as const,
        message:
          "마지막 생리 시작일을 입력하면 출산 예정일과 현재 임신 주수를 바로 확인할 수 있어요.",
      };
    }

    const lmpDate = parseLocalDate(lmp);

    if (!lmpDate) {
      return {
        status: "error" as const,
        message: "날짜 형식을 다시 확인해 주세요.",
      };
    }

    const daysFromLmp = diffInDays(lmpDate, today);

    if (daysFromLmp < 0) {
      return {
        status: "error" as const,
        message: "마지막 생리 시작일은 오늘 이후 날짜로 입력할 수 없어요.",
      };
    }

    if (daysFromLmp > 330) {
      return {
        status: "error" as const,
        message:
          "입력한 날짜가 너무 오래되었어요. 최근 마지막 생리 시작일을 다시 확인해 주세요.",
      };
    }

    const cycleAdjustment = cycleLength - 28;
    const dueDate = addDays(
      lmpDate,
      AVERAGE_PREGNANCY_DAYS + cycleAdjustment
    );

    const elapsedDays = Math.max(0, daysFromLmp);
    const gestationalDays = elapsedDays;
    const weeks = Math.floor(gestationalDays / 7) + 1;
    const days = gestationalDays % 7;
    const remainingDays = Math.max(0, diffInDays(today, dueDate));
    const isOverdue = diffInDays(dueDate, today) > 0;
    const trimester = getTrimester(weeks);

    const milestones: Milestone[] = [
      {
        label: "12주",
        week: 12,
        date: addDays(lmpDate, 11 * 7),
        description: "초기 안정기에 접어드는 시기로 많이 참고해요.",
      },
      {
        label: "16주",
        week: 16,
        date: addDays(lmpDate, 15 * 7),
        description: "임신 중기 준비를 생각하기 시작하는 시기예요.",
      },
      {
        label: "20주",
        week: 20,
        date: addDays(lmpDate, 19 * 7),
        description: "임신 중반부를 체크하는 대표 시점이에요.",
      },
      {
        label: "24주",
        week: 24,
        date: addDays(lmpDate, 23 * 7),
        description: "몸 변화와 생활 루틴을 다시 조정하는 시기예요.",
      },
      {
        label: "28주",
        week: 28,
        date: addDays(lmpDate, 27 * 7),
        description: "임신 후기 시작으로 많이 안내되는 구간이에요.",
      },
      {
        label: "32주",
        week: 32,
        date: addDays(lmpDate, 31 * 7),
        description: "출산 준비와 육아용품 점검을 본격화하기 좋아요.",
      },
      {
        label: "36주",
        week: 36,
        date: addDays(lmpDate, 35 * 7),
        description: "막달 준비와 병원 안내를 다시 확인하는 시기예요.",
      },
      {
        label: "40주",
        week: 40,
        date: dueDate,
        description: "일반적인 40주 기준 출산 예정일이에요.",
      },
    ];

    return {
      status: "ready" as const,
      lmpDate,
      dueDate,
      cycleAdjustment,
      weeks,
      days,
      elapsedDays,
      remainingDays,
      trimester,
      isOverdue,
      milestones,
      monthLabel: new Intl.DateTimeFormat("ko-KR", {
        year: "numeric",
        month: "long",
      }).format(dueDate),
    };
  }, [lmp, cycleLength, today]);

  return (
    <section className="space-y-8">
      <header className="mt-card p-6 md:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700">
              MomTools 육아 계산기
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              출산 예정일 계산기
            </h1>
            <p className="text-sm leading-7 text-slate-600 md:text-base">
              마지막 생리 시작일을 기준으로 출산 예정일, 현재 임신 주수,
              남은 기간을 간편하게 확인해보세요. 생리주기까지 반영해 조금 더
              현실적으로 참고할 수 있도록 구성했습니다.
            </p>
          </div>

          {/* <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4 text-sm leading-6 text-slate-700 lg:max-w-sm">
            <div className="font-semibold text-slate-900">
              함께 준비하면 좋은 것
            </div>
            <p className="mt-2">
              출산 준비 비용과 육아 초기 예산도 같이 점검하고 싶다면{" "}
              <Link
                href="https://momtools.kr"
                className="font-semibold text-sky-700 underline underline-offset-4"
              >
                MomTools
              </Link>{" "}
              안의 다른 계산기와 관련 정보 페이지도 함께
              활용해보세요.
            </p>
          </div> */}
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <aside className="space-y-6">
          <section className="mt-card p-6 md:p-7">
            <div className="space-y-5">
              <div>
                <h2 className="text-lg font-bold text-slate-900">입력값</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  마지막 생리 시작일과 평균 생리주기를 입력하면 일반적인 임신
                  40주 기준으로 출산 예정일을 계산해요.
                </p>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="lmp"
                  className="block text-sm font-semibold text-slate-800"
                >
                  마지막 생리 시작일
                </label>
                <input
                  id="lmp"
                  type="date"
                  value={lmp}
                  max={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setLmp(e.target.value)}
                  className="mt-input"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="cycleLength"
                  className="block text-sm font-semibold text-slate-800"
                >
                  평균 생리주기
                </label>
                <select
                  id="cycleLength"
                  value={cycleLength}
                  onChange={(e) => setCycleLength(Number(e.target.value))}
                  className="mt-input"
                >
                  {Array.from(
                    { length: MAX_CYCLE - MIN_CYCLE + 1 },
                    (_, index) => {
                      const value = MIN_CYCLE + index;
                      return (
                        <option key={value} value={value}>
                          {value}일
                        </option>
                      );
                    }
                  )}
                </select>
                <p className="text-xs leading-6 text-slate-500">
                  기본값은 28일이며, 생리주기가 다르면 예정일도 조금 달라질 수
                  있어요.
                </p>
              </div>

              <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4 text-sm leading-7 text-slate-700">
                <div className="font-semibold text-slate-900">입력 전 참고</div>
                <ul className="mt-2 space-y-1">
                  <li>• 마지막 생리 시작일 기준으로 계산합니다.</li>
                  <li>• 생리주기가 28일이 아니면 예정일에 보정이 들어갑니다.</li>
                  <li>• 결과는 참고용이며 병원 진료 일정과 다를 수 있습니다.</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="mt-card p-4 md:p-5">
            <div className="text-sm font-bold text-slate-900">입력 전에 확인해 보세요</div>
            <p className="mt-2 text-sm leading-7 text-slate-600">날짜와 수치를 천천히 확인해 입력하면 결과를 더 안정적으로 참고할 수 있어요. 헷갈리는 값이 있다면 정확한 기준을 먼저 다시 확인한 뒤 입력해 주세요.</p>
          </div>
        </aside>

        <div className="space-y-6">
          <section className="mt-card p-6 md:p-7">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                결과 화면 한눈에 보기
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                핵심 결과 → 주요 일정 → 안내 문구 순서로 살펴볼 수 있어요.
              </p>
            </div>

            {result.status !== "ready" ? (
              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-600">
                {result.message}
              </div>
            ) : (
              <>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  <ResultCard
                    title="출산 예정일"
                    value={formatDate(result.dueDate)}
                    hint={`${result.monthLabel} 분만 예정`}
                    highlight
                  />
                  <ResultCard
                    title="현재 임신 주수"
                    value={`${result.weeks}주 ${result.days}일`}
                    hint={result.trimester}
                  />
                  <ResultCard
                    title="임신 경과일"
                    value={`${formatNumber(result.elapsedDays)}일`}
                    hint="마지막 생리 시작일 기준"
                  />
                  <ResultCard
                    title="출산까지 남은 기간"
                    value={
                      result.isOverdue
                        ? "예정일 경과"
                        : `${formatNumber(result.remainingDays)}일`
                    }
                    hint={
                      result.isOverdue
                        ? "진료 일정 재확인 권장"
                        : "일반적인 40주 기준"
                    }
                  />
                </div>

                <div className="mt-6 rounded-3xl border border-rose-100 bg-gradient-to-br from-rose-50 via-white to-sky-50 p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-rose-700 shadow-sm ring-1 ring-rose-100">
                      계산 로직
                    </span>
                    <span className="text-sm text-slate-700">
                      마지막 생리 시작일 + 280일 + 생리주기 보정(
                      {result.cycleAdjustment >= 0 ? "+" : ""}
                      {result.cycleAdjustment}일)
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    생리주기가 28일보다 길면 예정일이 뒤로, 짧으면 앞으로 조금
                    보정됩니다. 생리주기가 불규칙하거나 마지막 생리일이 정확하지
                    않으면 실제 진료 일정과 차이가 날 수 있어요.
                  </p>
                </div>
              </>
            )}
          </section>

          <section className="mt-card p-6 md:p-7">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                주요 일정 타임라인
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                예정일만 보는 것보다 앞으로 어떤 시점이 오는지 함께 보면 출산
                준비와 병원 일정 정리에 더 도움이 돼요.
              </p>
            </div>

            {result.status === "ready" ? (
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {result.milestones.map((milestone) => (
                  <div
                    key={milestone.label}
                    className="rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.04)]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-base font-bold text-slate-900">
                        {milestone.label}
                      </div>
                      <div className="text-sm font-semibold text-sky-700">
                        {formatCompactDate(milestone.date)}
                      </div>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {milestone.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-500">
                날짜를 입력하면 12주, 20주, 28주, 36주, 40주 등 주요 시점을
                함께 보여드려요.
              </div>
            )}
          </section>

          <div className="mt-card p-4 md:p-5">
            <div className="text-sm font-bold text-slate-900">결과는 이렇게 활용해 보세요</div>
            <p className="mt-2 text-sm leading-7 text-slate-600">결과를 한 번 확인한 뒤 바로 결론을 내리기보다, 아래 설명과 자주 묻는 질문을 함께 읽으면 실제 생활에 어떻게 연결하면 좋을지 더 쉽게 이해할 수 있습니다.</p>
          </div>
        </div>
      </div>

      <section className="mt-card p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-8">
            <div>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                출산 예정일 계산기는 어떻게 계산되나요?
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700 md:text-base">
                <p>
                    출산 예정일 계산기는 마지막 생리 시작일을 기준으로 일반적인 임신 40주 일정을 계산하는 도구입니다.
                    현재 임신 주수, 출산 예정일까지 남은 기간, 주요 시점을 함께 확인할 수 있어 임신 초기부터
                    많이 활용됩니다.
                </p>
                <p>
                    평균 생리주기가 28일이 아닌 경우에는 예정일에 차이가 생길 수 있습니다. 그래서 MomTools
                    계산기는 평균 생리주기를 함께 입력할 수 있도록 구성해, 조금 더 현실적으로 참고할 수 있게
                    만들었습니다.
                </p>
                <p>
                    다만 실제 출산 예정일은 초음파 검사, 배란 시점, 진료 결과에 따라 달라질 수 있습니다.
                    따라서 이 계산 결과는 참고용으로 활용하고, 정확한 일정은 병원 진료와 함께 확인하는 것이
                    좋습니다.
                </p>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                자주 묻는 질문
                </h2>

                <div className="mt-4 space-y-4">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                    <h3 className="text-base font-semibold text-slate-900">
                    출산 예정일은 얼마나 정확한가요?
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-700">
                    출산 예정일은 일반적인 임신 기간을 기준으로 계산한 참고값입니다. 실제 출산일은 사람마다
                    다를 수 있으며, 병원에서는 초음파 검사와 진료 내용을 함께 보고 예정일을 조정할 수 있습니다.
                    </p>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                    <h3 className="text-base font-semibold text-slate-900">
                    생리주기가 불규칙해도 계산할 수 있나요?
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-700">
                    계산은 가능하지만, 생리주기가 불규칙하면 오차가 더 커질 수 있습니다. 마지막 생리 시작일이
                    정확하지 않거나 배란 시점이 일정하지 않은 경우 병원 진료 기준과 차이가 날 수 있어요.
                    </p>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                    <h3 className="text-base font-semibold text-slate-900">
                    병원에서 말한 예정일과 계산기 결과가 왜 다를 수 있나요?
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-700">
                    계산기는 마지막 생리 시작일과 평균 생리주기를 바탕으로 계산하지만, 병원은 초음파 검사와
                    태아 성장 상태 등을 함께 반영합니다. 그래서 계산기 결과와 병원 예정일이 다르게 나올 수 있습니다.
                    </p>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                    <h3 className="text-base font-semibold text-slate-900">
                    임신 주수는 어떻게 계산하나요?
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-700">
                    일반적으로 임신 주수는 마지막 생리 시작일을 기준으로 계산합니다. MomTools 계산기는 입력한
                    날짜를 기준으로 현재 몇 주 몇 일인지 함께 보여주어, 임신 진행 상황을 한눈에 확인할 수 있게
                    도와줍니다.
                    </p>
                </div>
                </div>
            </div>
            </div>

            <aside className="space-y-6">
            <div className="rounded-3xl border border-amber-100 bg-amber-50 p-5 md:p-6">
                <h2 className="text-lg font-bold text-slate-900">
                이용 전 참고해 주세요
                </h2>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
                <li>• 본 계산 결과는 일반적인 임신 40주 기준의 참고용 정보입니다.</li>
                <li>• 생리주기, 배란일, 초음파 검사 결과에 따라 실제 예정일은 달라질 수 있습니다.</li>
                <li>• 생리주기가 불규칙하거나 마지막 생리일이 정확하지 않다면 오차가 생길 수 있습니다.</li>
                <li>• 복통, 출혈, 통증 등 이상 증상이 있다면 계산 결과보다 의료진 상담이 우선입니다.</li>
                </ul>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-5 md:p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
                <h2 className="text-lg font-bold text-slate-900">
                함께 보면 좋은 도구
                </h2>
                <div className="mt-4 space-y-3">
                <Link
                    href="/tools/baby-age"
                    className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                    아기 개월수 계산기
                </Link>
                <Link
                    href="/tools/vaccine-schedule"
                    className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                    예방접종 일정 계산기
                </Link>
                <Link
                    href="/tools/weaning-start"
                    className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                    이유식 시작 계산기
                </Link>
                <Link
                    href="/checklist/birth-prep"
                    className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                    출산 준비 체크리스트
                </Link>
                </div>
            </div>

            <div className="rounded-3xl border border-sky-100 bg-sky-50 p-5 md:p-6">
                <h2 className="text-lg font-bold text-slate-900">
                출산 준비 예산도 함께 생각해보세요
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                출산 준비는 일정만 확인하는 것으로 끝나지 않아요. 병원비, 육아용품, 생활비까지 함께 계획하면
                훨씬 안정적으로 준비할 수 있습니다.
                </p>
                {/* <p className="mt-3 text-sm leading-7 text-slate-700">
                MomTools에서 육아 일정을 체크한 뒤 관련 체크리스트와 정보 페이지까지 함께 보면
                출산 준비와 가계 계획을 한 흐름으로 정리할 수 있어요.
                </p> */}
            </div>
            </aside>
        </div>
      </section>
    </section>
  );
}

function ResultCard({
  title,
  value,
  hint,
  highlight = false,
}: {
  title: string;
  value: string;
  hint: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-3xl border p-5",
        highlight
          ? "border-rose-100 bg-gradient-to-br from-rose-50 to-white"
          : "border-slate-100 bg-white",
      ].join(" ")}
    >
      <div className="text-sm font-medium text-slate-500">{title}</div>
      <div className="mt-2 text-xl font-bold tracking-tight text-slate-900">
        {value}
      </div>
      <div className="mt-2 text-xs leading-6 text-slate-500">{hint}</div>
    </div>
  );
}

function SeoBox({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
      <div className="font-semibold text-slate-900">{title}</div>
      <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}