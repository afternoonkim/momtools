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

function getMonthlyGuideLink(months: number) {
  if (months <= 12) return `/monthly-guide/${months}-month`;
  if (months <= 18) return "/monthly-guide/13-18-month";
  if (months <= 24) return "/monthly-guide/19-24-month";
  return "/monthly-guide/25-36-month";
}

function getMonthlyGuideLabel(months: number) {
  if (months <= 12) return `생후 ${months}개월 육아 로드맵`;
  if (months <= 18) return "생후 13~18개월 육아 로드맵";
  if (months <= 24) return "생후 19~24개월 육아 로드맵";
  return "생후 25~36개월 육아 로드맵";
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
    <section className="space-y-6 md:space-y-8">
      <section className="mt-card p-5 md:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-4">
            <div>
              <div className="mt-badge">MomTools 육아 계산기</div>
              <h1 className="mt-title-lg mt-4">아기 개월수 계산기</h1>
              <p className="mt-text-main mt-3">
                생년월일을 입력하면 현재 월령, 출생 후 일수, 100일과 첫돌 날짜를 바로 확인할 수 있어요. 결과를 본 뒤에는 월령에 맞는 수면, 이유식, 접종, 발달 정보로 이어서 이동할 수 있습니다.
              </p>
            </div>

            <div className="rounded-3xl border border-amber-100 bg-amber-50/70 p-4">
              <label htmlFor="birthDate" className="block text-sm font-bold text-slate-900">
                아기 생년월일
              </label>
              <input
                id="birthDate"
                type="date"
                value={birthDate}
                max={new Date().toISOString().split("T")[0]}
                onChange={(e) => setBirthDate(e.target.value)}
                className="mt-input mt-3 min-h-12 text-base"
              />
              <p className="mt-3 text-sm leading-6 text-slate-600">
                오늘 날짜 기준으로 자동 계산됩니다. 미숙아나 교정 연령 확인이 필요한 경우에는 병원 안내를 우선 참고해 주세요.
              </p>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-100 bg-gradient-to-br from-white via-amber-50/60 to-sky-50 p-4 md:p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-extrabold text-slate-900">계산 결과</h2>
                <p className="mt-1 text-sm text-slate-500">핵심 숫자를 먼저 보여드려요.</p>
              </div>
              {result.status === "ready" ? (
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-amber-700 shadow-sm">계산 완료</span>
              ) : null}
            </div>

            {result.status !== "ready" ? (
              <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-600">
                {result.message}
              </div>
            ) : (
              <>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  <ResultCard title="현재 개월수" value={`${result.months}개월`} hint="오늘 기준" highlight />
                  <ResultCard title="출생 후 일수" value={`${formatNumber(result.diffDays)}일`} hint="생후 일수" />
                  <ResultCard title="출생 후 주수" value={`${formatNumber(result.weeks)}주 ${result.remainDays}일`} hint="주수 기준" />
                  <ResultCard title="나이 표현" value={`${result.ageDetail.years}세 ${result.ageDetail.months}개월`} hint={`${result.ageDetail.days}일 경과`} />
                </div>

                <div className="mt-5 rounded-3xl border border-amber-100 bg-white p-5">
                  <div className="text-sm font-bold text-slate-900">결과를 본 뒤 바로 확인하면 좋은 것</div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <Link href={getMonthlyGuideLink(result.months)} className="rounded-2xl bg-amber-50 px-4 py-3 text-sm font-bold leading-6 text-amber-800 transition hover:bg-amber-100">
                      {getMonthlyGuideLabel(result.months)} 보기 →
                    </Link>
                    <Link href="/tools/vaccine-schedule" className="rounded-2xl bg-sky-50 px-4 py-3 text-sm font-bold leading-6 text-sky-800 transition hover:bg-sky-100">
                      예방접종 일정 확인 →
                    </Link>
                    <Link href="/tools/weaning-start" className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-bold leading-6 text-emerald-800 transition hover:bg-emerald-100">
                      이유식 시작 시기 확인 →
                    </Link>
                    <Link href="/tools/growth-percentile" className="rounded-2xl bg-rose-50 px-4 py-3 text-sm font-bold leading-6 text-rose-800 transition hover:bg-rose-100">
                      성장 백분위 확인 →
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <MilestoneBlock result={result} />
      </section>

      <section className="mt-card p-5 md:p-8">
        <h2 className="mt-title-md">개월수 확인 후 많이 이어보는 정보</h2>
        <p className="mt-text-main mt-3">
          월령은 이유식, 예방접종, 수면, 발달 체크를 볼 때 자주 쓰이는 기준입니다. 계산 결과를 확인했다면 아래 항목을 함께 보면 검색을 반복하지 않아도 흐름이 정리됩니다.
        </p>
        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <Link href="/qna/health" className="mt-list-card min-h-24"><strong className="text-slate-900">건강 Q&amp;A</strong><p className="mt-2 text-sm text-slate-600">열, 기침, 배변처럼 월령별로 헷갈리는 증상을 확인해요.</p></Link>
          <Link href="/qna/behavior" className="mt-list-card min-h-24"><strong className="text-slate-900">수면·행동 Q&amp;A</strong><p className="mt-2 text-sm text-slate-600">잠투정, 흥분, 분리불안 같은 반복 고민을 살펴봐요.</p></Link>
          <Link href="/info/weaning" className="mt-list-card min-h-24"><strong className="text-slate-900">이유식 정보</strong><p className="mt-2 text-sm text-slate-600">시작 시기와 단계별 진행 흐름을 이어서 봐요.</p></Link>
          <Link href="/checklists/newborn" className="mt-list-card min-h-24"><strong className="text-slate-900">신생아 준비물</strong><p className="mt-2 text-sm text-slate-600">초기 육아에 필요한 물품을 빠르게 체크해요.</p></Link>
        </div>
      </section>

      <section className="mt-card-soft p-5 md:p-8">
        <h2 className="mt-title-md">아기 개월수 계산기는 어떻게 활용하나요?</h2>
        <div className="mt-4 space-y-4 text-sm leading-8 text-slate-700 md:text-base">
          <p>
            아기 개월수는 같은 나이처럼 보여도 수면, 이유식, 접종, 놀이 기준을 다르게 볼 수 있어 중요한 기준이 됩니다. 특히 생후 24개월 전후까지는 몇 개월 차이만으로 생활 루틴과 발달 흐름이 크게 달라질 수 있습니다.
          </p>
          <p>
            계산 결과는 참고용입니다. 병원 안내문이나 예방접종 안내에서는 만 나이, 교정 연령, 체중, 아이 상태를 함께 볼 수 있으니 중요한 판단은 의료진 안내를 우선해 주세요.
          </p>
        </div>
      </section>

      <section className="mt-card p-5 md:p-8" id="faq">
        <h2 className="mt-title-md">자주 묻는 질문</h2>
        <div className="mt-5 space-y-4">
          <FaqItem question="아기 개월수는 어떻게 계산하나요?" answer="생년월일과 오늘 날짜의 연·월 차이를 기준으로 계산하고, 오늘 날짜의 일이 출생일보다 이르면 1개월을 차감해 실제 체감 월령에 가깝게 보여줍니다." />
          <FaqItem question="생후 일수와 개월수는 왜 함께 보나요?" answer="예방접종, 이유식, 성장 체크는 개월수 기준으로 많이 보지만 100일, 200일, 첫돌처럼 기념 시점은 일수 기준으로 확인하는 경우가 많기 때문입니다." />
          <FaqItem question="병원 안내와 계산기 결과가 다를 수 있나요?" answer="네. 병원이나 기관에서는 만 나이, 교정 연령, 접종 기준일 등을 함께 고려할 수 있어 표현 방식이 다를 수 있습니다." />
          <FaqItem question="미숙아나 교정 연령은 어떻게 봐야 하나요?" answer="이 계산기는 일반적인 생년월일 기준 계산기입니다. 교정 연령 확인이 필요한 경우에는 병원이나 전문가 안내를 우선 참고하는 것이 좋습니다." />
        </div>
      </section>
    </section>
  );
}

function MilestoneBlock({
  result,
}: {
  result:
    | { status: "idle" | "error"; message: string }
    | {
        status: "ready";
        hundredDay: Date;
        twoHundredDay: Date;
        firstBirthday: Date;
      };
}) {
  if (result.status !== "ready") {
    return (
      <div className="mt-card p-5 md:col-span-3 md:p-6">
        <h2 className="text-lg font-bold text-slate-900">100일과 첫돌 날짜도 함께 확인할 수 있어요</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">생년월일을 입력하면 100일, 200일, 첫돌 날짜를 한 번에 보여드립니다.</p>
      </div>
    );
  }

  return (
    <>
      <MilestoneCard title="100일" date={formatDate(result.hundredDay)} hint={formatCompactDate(result.hundredDay)} />
      <MilestoneCard title="200일" date={formatDate(result.twoHundredDay)} hint={formatCompactDate(result.twoHundredDay)} />
      <MilestoneCard title="첫돌" date={formatDate(result.firstBirthday)} hint={formatCompactDate(result.firstBirthday)} />
    </>
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
        "rounded-3xl border p-4",
        highlight
          ? "border-amber-200 bg-amber-50"
          : "border-slate-100 bg-white",
      ].join(" ")}
    >
      <div className="text-sm font-medium text-slate-500">{title}</div>
      <div className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">{value}</div>
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
    <div className="mt-card p-5">
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
      <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">{answer}</p>
    </div>
  );
}
