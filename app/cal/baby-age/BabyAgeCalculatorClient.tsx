"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

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

function getMonthDiffWithDayAdjustment(birth: Date, today: Date) {
  let months =
    (today.getFullYear() - birth.getFullYear()) * 12 +
    (today.getMonth() - birth.getMonth());

  if (today.getDate() < birth.getDate()) {
    months -= 1;
  }

  return Math.max(0, months);
}

function getYearsMonthsDays(birth: Date, today: Date) {
  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  if (days < 0) {
    const prevMonthLastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += prevMonthLastDay;
    months -= 1;
  }

  if (months < 0) {
    months += 12;
    years -= 1;
  }

  return {
    years: Math.max(0, years),
    months: Math.max(0, months),
    days: Math.max(0, days),
  };
}

export default function BabyAgeCalculatorClient() {
  const today = useMemo(() => new Date(), []);
  const [birthDate, setBirthDate] = useState("");

  const result = useMemo(() => {
    if (!birthDate) {
      return {
        status: "idle" as const,
        message:
          "아기 생년월일을 입력하면 현재 개월수, 출생 후 일수, 100일과 돌 시점을 바로 확인할 수 있어요.",
      };
    }

    const birth = parseLocalDate(birthDate);

    if (!birth) {
      return {
        status: "error" as const,
        message: "생년월일 형식을 다시 확인해 주세요.",
      };
    }

    const diffDays = diffInDays(birth, today);

    if (diffDays < 0) {
      return {
        status: "error" as const,
        message: "아기 생년월일은 오늘 이후 날짜로 입력할 수 없어요.",
      };
    }

    const months = getMonthDiffWithDayAdjustment(birth, today);
    const weeks = Math.floor(diffDays / 7);
    const remainDays = diffDays % 7;
    const ageDetail = getYearsMonthsDays(birth, today);

    const hundredDay = addDays(birth, 99);
    const twoHundredDay = addDays(birth, 199);
    const firstBirthday = addDays(birth, 365);

    return {
      status: "ready" as const,
      birth,
      months,
      diffDays,
      weeks,
      remainDays,
      ageDetail,
      hundredDay,
      twoHundredDay,
      firstBirthday,
    };
  }, [birthDate, today]);

  return (
    <section className="space-y-8">
      <header className="mt-card p-6 md:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
              MomTools 육아 계산기
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              아기 개월수 계산기
            </h1>
            <p className="text-sm leading-7 text-slate-600 md:text-base">
              아기 생년월일을 입력하면 현재 생후 개월수, 출생 후 일수, 주수, 100일과 돌 시점을
              간편하게 확인할 수 있어요. 이유식, 예방접종, 성장 체크할 때 빠르게 참고하기 좋게 구성했습니다.
            </p>
          </div>

          <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4 text-sm leading-6 text-slate-700 lg:max-w-sm">
            <div className="font-semibold text-slate-900">함께 보면 더 편한 도구</div>
            <p className="mt-2">
              아기 개월수를 확인했다면 다음으로{" "}
              <Link
                href="/tools/vaccine-schedule"
                className="font-semibold text-sky-700 underline underline-offset-4"
              >
                예방접종 일정 계산기
              </Link>
              나{" "}
              <Link
                href="/tools/weaning-start"
                className="font-semibold text-sky-700 underline underline-offset-4"
              >
                이유식 시작 계산기
              </Link>
              까지 이어서 확인해보세요.
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
                  아기 생년월일을 입력하면 생후 개월수와 출생 후 일수를 자동으로 계산해요.
                </p>
              </div>

              <div className="space-y-2">
                <label htmlFor="birthDate" className="block text-sm font-semibold text-slate-800">
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

              <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4 text-sm leading-7 text-slate-700">
                <div className="font-semibold text-slate-900">입력 전 참고</div>
                <ul className="mt-2 space-y-1">
                  <li>• 생후 개월수는 오늘 날짜 기준으로 자동 계산됩니다.</li>
                  <li>• 이유식, 예방접종, 성장 체크 시 자주 활용할 수 있어요.</li>
                  <li>• 병원 안내문은 만 나이, 교정 연령 기준을 함께 확인해야 할 수 있어요.</li>
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
              <h2 className="text-lg font-bold text-slate-900">결과 화면 구성</h2>
              <p className="mt-1 text-sm text-slate-500">
                핵심 결과 → 기념 시점 → 안내 문구 순서로 구성했습니다.
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
                    title="현재 개월수"
                    value={`${result.months}개월`}
                    hint="오늘 날짜 기준"
                    highlight
                  />
                  <ResultCard
                    title="출생 후 일수"
                    value={`${formatNumber(result.diffDays)}일`}
                    hint="출생일부터 오늘까지"
                  />
                  <ResultCard
                    title="출생 후 주수"
                    value={`${formatNumber(result.weeks)}주 ${result.remainDays}일`}
                    hint="생후 주수 기준"
                  />
                  <ResultCard
                    title="현재 나이 표현"
                    value={`${result.ageDetail.years}세 ${result.ageDetail.months}개월`}
                    hint={`${result.ageDetail.days}일 추가 경과`}
                  />
                </div>

                <div className="mt-6 rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-sky-50 p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-amber-700 shadow-sm ring-1 ring-amber-100">
                      계산 로직
                    </span>
                    <span className="text-sm text-slate-700">
                      생년월일 기준 개월수 계산 + 출생 후 경과일/주수 자동 산출
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    개월수는 연·월 차이를 기준으로 계산하고, 오늘 날짜의 일이 출생일보다 이르면 1개월을
                    차감해 실제 체감 개월수에 가깝게 보여줍니다.
                  </p>
                </div>
              </>
            )}
          </section>

          <section className="mt-card p-6 md:p-7">
            <div>
              <h2 className="text-lg font-bold text-slate-900">기념 시점과 자주 보는 날짜</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                100일, 200일, 첫돌처럼 자주 확인하는 시점을 함께 보여드리면 활용도가 높아져요.
              </p>
            </div>

            {result.status === "ready" ? (
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <MilestoneCard
                  title="100일"
                  date={formatDate(result.hundredDay)}
                  hint={formatCompactDate(result.hundredDay)}
                />
                <MilestoneCard
                  title="200일"
                  date={formatDate(result.twoHundredDay)}
                  hint={formatCompactDate(result.twoHundredDay)}
                />
                <MilestoneCard
                  title="첫돌"
                  date={formatDate(result.firstBirthday)}
                  hint={formatCompactDate(result.firstBirthday)}
                />
              </div>
            ) : (
              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-500">
                생년월일을 입력하면 100일, 200일, 첫돌 날짜도 함께 보여드려요.
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
                아기 개월수 계산기는 어떻게 활용하나요?
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700 md:text-base">
                <p>
                  아기 개월수 계산기는 생년월일을 기준으로 현재 생후 개월수와 출생 후 일수를 빠르게 계산하는
                  도구입니다. 이유식 시작 시기, 예방접종 일정, 발달 체크 포인트를 확인할 때 자주 활용됩니다.
                </p>
                <p>
                  부모 입장에서는 “지금 우리 아기가 몇 개월이지?”, “100일은 정확히 언제지?” 같은 질문이
                  자주 생기는데, 이 페이지에서는 개월수뿐 아니라 생후 주수와 주요 기념 날짜까지 함께 볼 수
                  있도록 구성했습니다.
                </p>
                <p>
                  다만 병원 안내나 발달 정보는 상황에 따라 만 나이, 교정 연령 기준을 함께 보는 경우가 있으니,
                  실제 진료나 전문 안내문이 있다면 그 기준도 함께 확인하는 것이 좋습니다.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                자주 묻는 질문
              </h2>

              <div className="mt-4 space-y-4">
                <FaqItem
                  question="아기 개월수는 어떻게 계산하나요?"
                  answer="일반적으로 생년월일과 오늘 날짜를 기준으로 연·월 차이를 계산합니다. MomTools는 날짜 차이를 반영해 현재 생후 개월수를 보다 자연스럽게 확인할 수 있게 구성했습니다."
                />
                <FaqItem
                  question="생후 일수와 개월수는 왜 함께 보는 게 좋나요?"
                  answer="예방접종, 이유식, 성장 체크는 개월수 기준으로 많이 보지만, 100일이나 200일처럼 특정 기념일은 일수 기준으로 확인하는 경우가 많기 때문입니다."
                />
                <FaqItem
                  question="병원 안내와 계산기 결과가 다를 수 있나요?"
                  answer="네. 병원이나 기관에서는 만 나이, 교정 연령, 접종 기준일 등을 함께 고려할 수 있어 계산기 결과와 표현 방식이 다를 수 있습니다."
                />
                <FaqItem
                  question="미숙아나 교정 연령은 어떻게 봐야 하나요?"
                  answer="이 계산기는 일반적인 생년월일 기준 계산기입니다. 미숙아나 교정 연령 기준 확인이 필요한 경우에는 병원이나 전문가 안내를 우선 참고하는 것이 좋습니다."
                />
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-amber-100 bg-amber-50 p-5 md:p-6">
              <h2 className="text-lg font-bold text-slate-900">
                이용 전 참고해 주세요
              </h2>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
                <li>• 본 계산 결과는 일반적인 생년월일 기준의 참고용 정보입니다.</li>
                <li>• 병원 안내문은 만 나이, 교정 연령 기준을 함께 확인해야 할 수 있습니다.</li>
                <li>• 예방접종이나 발달 관련 판단은 전문 의료진 안내가 우선입니다.</li>
                <li>• 일정 확인용 도구로 활용하고, 중요한 판단은 공식 안내를 함께 참고해 주세요.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-5 md:p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
              <h2 className="text-lg font-bold text-slate-900">
                함께 보면 좋은 도구
              </h2>
              <div className="mt-4 space-y-3">
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
                육아 일정과 예산도 함께 준비해보세요
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                개월수 확인은 시작일 뿐이에요. 예방접종, 이유식, 육아용품 준비까지 함께 계획하면
                훨씬 수월해집니다.
              </p>
              {/* <p className="mt-3 text-sm leading-7 text-slate-700">
                MomTools에서 육아 일정을 정리한 뒤, 관련 정보와 체크리스트를 함께 보며 가계 예산과
                육아비 준비 흐름까지 자연스럽게 확장할 수 있어요.
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
          ? "border-amber-100 bg-gradient-to-br from-amber-50 to-white"
          : "border-slate-100 bg-white",
      ].join(" ")}
    >
      <div className="text-sm font-medium text-slate-500">{title}</div>
      <div className="mt-2 text-xl font-bold tracking-tight text-slate-900">{value}</div>
      <div className="mt-2 text-xs leading-6 text-slate-500">{hint}</div>
    </div>
  );
}

function MilestoneCard({
  title,
  date,
  hint,
}: {
  title: string;
  date: string;
  hint: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
      <div className="text-base font-bold text-slate-900">{title}</div>
      <div className="mt-2 text-sm font-semibold text-amber-700">{hint}</div>
      <p className="mt-2 text-sm leading-6 text-slate-600">{date}</p>
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