"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type VaccinePoint = {
  label: string;
  month: number;
  vaccines: string[];
  note: string;
};

const vaccinePoints: VaccinePoint[] = [
  {
    label: "출생 직후",
    month: 0,
    vaccines: ["BCG", "B형간염"],
    note: "출생 직후 또는 신생아 시기에 안내되는 대표 접종 구간이에요.",
  },
  {
    label: "1개월",
    month: 1,
    vaccines: ["B형간염 2차"],
    note: "출생 직후 접종 이후 다음 일정을 다시 확인하기 좋은 시기예요.",
  },
  {
    label: "2개월",
    month: 2,
    vaccines: ["DTaP", "IPV", "Hib", "폐렴구균", "로타바이러스"],
    note: "기초 접종이 본격적으로 시작되는 시기로 예약 관리가 중요해요.",
  },
  {
    label: "4개월",
    month: 4,
    vaccines: ["DTaP", "IPV", "Hib", "폐렴구균", "로타바이러스"],
    note: "2개월 접종 이후 간격을 확인해 다음 접종을 이어가는 시기예요.",
  },
  {
    label: "6개월",
    month: 6,
    vaccines: ["B형간염 3차", "DTaP", "폐렴구균", "인플루엔자 검토"],
    note: "월령에 따라 추가 접종이나 독감 접종 여부를 함께 확인해보세요.",
  },
  {
    label: "12개월",
    month: 12,
    vaccines: ["MMR", "수두", "Hib 추가", "폐렴구균 추가"],
    note: "돌 전후 접종이 이어질 수 있어 미리 예약해 두면 편해요.",
  },
];

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

function addMonthsSafe(date: Date, months: number) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const targetMonthIndex = month + months;
  const targetYear = year + Math.floor(targetMonthIndex / 12);
  const normalizedTargetMonth = ((targetMonthIndex % 12) + 12) % 12;
  const lastDayOfTargetMonth = new Date(
    targetYear,
    normalizedTargetMonth + 1,
    0
  ).getDate();

  return new Date(
    targetYear,
    normalizedTargetMonth,
    Math.min(day, lastDayOfTargetMonth)
  );
}

function diffInDays(from: Date, to: Date) {
  const start = new Date(from.getFullYear(), from.getMonth(), from.getDate()).getTime();
  const end = new Date(to.getFullYear(), to.getMonth(), to.getDate()).getTime();
  return Math.floor((end - start) / (1000 * 60 * 60 * 24));
}

function getMonthDiffWithDayAdjustment(from: Date, to: Date) {
  let months =
    (to.getFullYear() - from.getFullYear()) * 12 +
    (to.getMonth() - from.getMonth());

  if (to.getDate() < from.getDate()) {
    months -= 1;
  }

  return months;
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

function getStatusLabel(targetDate: Date, today: Date) {
  const diff = diffInDays(today, targetDate);

  if (diff > 0) {
    return {
      text: `${diff}일 남음`,
      style: "bg-sky-50 text-sky-700 ring-sky-100",
    };
  }

  if (diff >= -14) {
    return {
      text: "가까운 일정",
      style: "bg-amber-50 text-amber-700 ring-amber-100",
    };
  }

  return {
    text: "지난 일정",
    style: "bg-slate-100 text-slate-600 ring-slate-200",
  };
}

export default function VaccineScheduleCalculatorClient() {
  const today = useMemo(() => new Date(), []);
  const [birthDate, setBirthDate] = useState("");

  const result = useMemo(() => {
    if (!birthDate) {
      return {
        status: "idle" as const,
        message:
          "아기 생년월일을 입력하면 출생 직후부터 12개월까지의 주요 예방접종 예상 시점을 확인할 수 있어요.",
      };
    }

    const birth = parseLocalDate(birthDate);

    if (!birth) {
      return {
        status: "error" as const,
        message: "생년월일 형식을 다시 확인해 주세요.",
      };
    }

    const livedDays = diffInDays(birth, today);

    if (livedDays < 0) {
      return {
        status: "error" as const,
        message: "아기 생년월일은 오늘 이후 날짜로 입력할 수 없어요.",
      };
    }

    const currentMonthAge = Math.max(0, getMonthDiffWithDayAdjustment(birth, today));

    const schedule = vaccinePoints.map((item) => {
      const date = addMonthsSafe(birth, item.month);
      const status = getStatusLabel(date, today);

      return {
        ...item,
        date,
        status,
      };
    });

    const nextUpcoming =
      schedule.find((item) => diffInDays(today, item.date) >= 0) ?? null;

    return {
      status: "ready" as const,
      birth,
      currentMonthAge,
      livedDays,
      schedule,
      nextUpcoming,
    };
  }, [birthDate, today]);

  return (
    <section className="space-y-8">
      <header className="mt-card p-6 md:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              MomTools 육아 계산기
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              예방접종 일정 계산기
            </h1>
            <p className="text-sm leading-7 text-slate-600 md:text-base">
              아기 생년월일을 입력하면 월령 기준으로 주요 예방접종 예상 시점을
              한눈에 정리해볼 수 있어요. 출생 직후부터 12개월까지 자주 확인하는
              구간을 빠르게 참고하기 좋게 구성했습니다.
            </p>
          </div>

          <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4 text-sm leading-6 text-slate-700 lg:max-w-sm">
            <div className="font-semibold text-slate-900">함께 확인하면 좋은 도구</div>
            <p className="mt-2">
              접종 일정과 함께{" "}
              <Link
                href="/cal/baby-age"
                className="font-semibold text-sky-700 underline underline-offset-4"
              >
                아기 개월수 계산기
              </Link>{" "}
              와{" "}
              <Link
                href="/cal/weaning-start"
                className="font-semibold text-sky-700 underline underline-offset-4"
              >
                이유식 시작 계산기
              </Link>
              도 같이 보면 육아 일정 관리가 더 쉬워져요.
            </p>
          </div>
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <aside className="space-y-6">
          <section className="mt-card p-6 md:p-7">
            <div className="space-y-5">
              <div>
                <h2 className="text-lg font-bold text-slate-900">입력값</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  아기 생년월일을 입력하면 월령별 주요 예방접종 예상 시점을 자동으로 계산해요.
                </p>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="birthDate"
                  className="block text-sm font-semibold text-slate-800"
                >
                  아기 생년월일
                </label>
                <input
                  id="birthDate"
                  type="date"
                  value={birthDate}
                  max={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="mt-input"
                />
              </div>

              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm leading-7 text-slate-700">
                <div className="font-semibold text-slate-900">입력 전 참고</div>
                <ul className="mt-2 space-y-1">
                  <li>• 이 계산기는 월령 기준으로 대표 접종 시점을 정리해주는 참고용 도구예요.</li>
                  <li>• 실제 접종일은 보건소, 병원 예약일, 백신 종류에 따라 달라질 수 있어요.</li>
                  <li>• 접종 전에는 반드시 의료기관 또는 공식 안내문을 함께 확인해 주세요.</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="mt-card p-4 md:p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              AdSense 추천 위치 1
            </div>
            <div className="mt-2 rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center text-sm text-slate-500">
              입력 영역 아래 / 결과 영역 시작 전 광고 영역
            </div>
          </div>
        </aside>

        <div className="space-y-6">
          <section className="mt-card p-6 md:p-7">
            <div>
              <h2 className="text-lg font-bold text-slate-900">결과 화면 구성</h2>
              <p className="mt-1 text-sm text-slate-500">
                핵심 요약 → 월령별 접종 일정 → 안내 문구 순서로 구성했습니다.
              </p>
            </div>

            {result.status !== "ready" ? (
              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-600">
                {result.message}
              </div>
            ) : (
              <>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  <SummaryCard
                    title="현재 월령"
                    value={`${result.currentMonthAge}개월`}
                    hint="오늘 날짜 기준"
                    highlight
                  />
                  <SummaryCard
                    title="출생 후 경과일"
                    value={`${result.livedDays}일`}
                    hint="생년월일부터 오늘까지"
                  />
                  <SummaryCard
                    title="가장 가까운 다음 일정"
                    value={result.nextUpcoming ? result.nextUpcoming.label : "주요 일정 확인"}
                    hint={
                      result.nextUpcoming
                        ? formatCompactDate(result.nextUpcoming.date)
                        : "표에서 전체 일정 확인"
                    }
                  />
                </div>

                <div className="mt-6 overflow-hidden rounded-3xl border border-emerald-100 bg-white">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[760px] text-left">
                      <thead className="bg-emerald-50 text-sm text-slate-600">
                        <tr>
                          <th className="px-4 py-3">월령</th>
                          <th className="px-4 py-3">예상 시점</th>
                          <th className="px-4 py-3">대표 접종</th>
                          <th className="px-4 py-3">상태</th>
                          <th className="px-4 py-3">메모</th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.schedule.map((item, index) => (
                          <tr
                            key={item.label}
                            className={
                              index !== result.schedule.length - 1
                                ? "border-t border-emerald-100"
                                : ""
                            }
                          >
                            <td className="px-4 py-4 font-semibold text-slate-800">
                              {item.label}
                            </td>
                            <td className="px-4 py-4 text-slate-700">
                              {formatDate(item.date)}
                            </td>
                            <td className="px-4 py-4 text-sm leading-7 text-slate-600">
                              {item.vaccines.join(", ")}
                            </td>
                            <td className="px-4 py-4">
                              <span
                                className={[
                                  "inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1",
                                  item.status.style,
                                ].join(" ")}
                              >
                                {item.status.text}
                              </span>
                            </td>
                            <td className="px-4 py-4 text-sm leading-7 text-slate-500">
                              {item.note}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-6 rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm ring-1 ring-emerald-100">
                      계산 로직
                    </span>
                    <span className="text-sm text-slate-700">
                      생년월일 + 월령별 개월수 가산 → 주요 예방접종 예상 시점 계산
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    날짜는 생년월일에 월령 개월 수를 더해 계산하며, 실제 접종일은 병원 예약일,
                    백신 수급, 진료 판단에 따라 달라질 수 있어요.
                  </p>
                </div>
              </>
            )}
          </section>

          <div className="mt-card p-4 md:p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              AdSense 추천 위치 2
            </div>
            <div className="mt-2 rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center text-sm text-slate-500">
              결과 영역 아래 / 설명 콘텐츠 시작 전 광고 영역
            </div>
          </div>
        </div>
      </div>

      <section className="mt-card p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                예방접종 일정 계산기는 어떻게 활용하나요?
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700 md:text-base">
                <p>
                  예방접종 일정 계산기는 아기 생년월일을 기준으로 대표적인 월령별
                  접종 시점을 정리해보는 도구입니다. 출생 직후, 1개월, 2개월,
                  4개월, 6개월, 12개월처럼 자주 확인하는 구간을 빠르게 정리할 수 있어요.
                </p>
                <p>
                  부모 입장에서는 “다음 접종이 언제였지?”, “지금 몇 개월이라 어떤 접종을
                  확인해야 하지?” 같은 질문이 자주 생기는데, 이 페이지에서는 월령과 예상 날짜를
                  함께 보여주어 일정 관리에 도움을 주도록 구성했습니다.
                </p>
                <p>
                  다만 실제 국가예방접종 일정, 병원 예약일, 백신 종류와 접종 간격은 상황에 따라
                  달라질 수 있으므로, 최종 접종 전에는 보건소·질병관리청·소아청소년과 안내를
                  꼭 함께 확인하는 것이 좋습니다.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                자주 묻는 질문
              </h2>

              <div className="mt-4 space-y-4">
                <FaqItem
                  question="예방접종 일정은 계산기 결과대로만 보면 되나요?"
                  answer="아니요. 이 계산기는 월령 기준 주요 시점을 정리해주는 참고용 도구입니다. 실제 접종은 보건소, 병원 예약일, 진료 판단을 함께 확인해야 합니다."
                />
                <FaqItem
                  question="왜 병원 일정과 다르게 보일 수 있나요?"
                  answer="병원은 진료 일정, 백신 종류, 접종 간격, 아기 상태 등을 함께 고려합니다. 그래서 계산기 결과와 실제 예약일이 다르게 안내될 수 있습니다."
                />
                <FaqItem
                  question="출생 직후 접종은 어떻게 확인하나요?"
                  answer="출생 직후 접종은 병원이나 산후조리원 안내에 따라 바로 확인하는 경우가 많습니다. 계산기에서는 전체 흐름을 보기 쉽게 출생 직후 구간을 함께 표시합니다."
                />
                <FaqItem
                  question="독감 접종은 왜 따로 확인하라고 하나요?"
                  answer="인플루엔자 접종은 시기나 권장 대상이 달라질 수 있어 별도 안내가 필요한 경우가 많습니다. 계절성 접종은 반드시 병원 또는 공식 안내를 함께 확인해 주세요."
                />
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-5 md:p-6">
              <h2 className="text-lg font-bold text-slate-900">
                이용 전 참고해 주세요
              </h2>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
                <li>• 본 계산 결과는 월령 기준 대표 시점을 정리한 참고용 정보입니다.</li>
                <li>• 실제 접종 일정은 보건소, 질병관리청, 소아청소년과 안내가 우선입니다.</li>
                <li>• 백신 종류, 접종 간격, 아기 상태에 따라 일정이 달라질 수 있습니다.</li>
                <li>• 중요한 일정은 반드시 의료기관 예약 정보와 함께 다시 확인해 주세요.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-5 md:p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
              <h2 className="text-lg font-bold text-slate-900">
                함께 보면 좋은 도구
              </h2>
              <div className="mt-4 space-y-3">
                <Link
                  href="/cal/baby-age"
                  className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  아기 개월수 계산기
                </Link>
                <Link
                  href="/cal/weaning-start"
                  className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  이유식 시작 계산기
                </Link>
                <Link
                  href="/checklist/newborn-prep"
                  className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  신생아 준비 체크리스트
                </Link>
                <Link
                  href="/info/newborn"
                  className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  신생아 정보 모아보기
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-sky-100 bg-sky-50 p-5 md:p-6">
              <h2 className="text-lg font-bold text-slate-900">
                육아 일정과 비용도 함께 준비해보세요
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                예방접종 일정은 육아 계획의 한 부분이에요. 병원 방문 일정, 이유식 시기,
                육아용품 준비까지 함께 정리하면 훨씬 수월해집니다.
              </p>
              {/* <p className="mt-3 text-sm leading-7 text-slate-700">
                MomTools에서 육아 일정을 정리한 뒤, 나중에는 BlueDino와 연결해
                육아 예산과 가계 계획까지 한 흐름으로 확장할 수 있어요.
              </p> */}
            </div>
          </aside>
        </div>
      </section>
    </section>
  );
}

function SummaryCard({
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
          ? "border-emerald-100 bg-gradient-to-br from-emerald-50 to-white"
          : "border-slate-100 bg-white",
      ].join(" ")}
    >
      <div className="text-sm font-medium text-slate-500">{title}</div>
      <div className="mt-2 text-xl font-bold tracking-tight text-slate-900">{value}</div>
      <div className="mt-2 text-xs leading-6 text-slate-500">{hint}</div>
    </div>
  );
}

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
      <h3 className="text-base font-semibold text-slate-900">{question}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-700">{answer}</p>
    </div>
  );
}