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

function addDays(date: Date, days: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
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

  return Math.max(0, months);
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
      text: "가까운 시점",
      style: "bg-amber-50 text-amber-700 ring-amber-100",
    };
  }

  return {
    text: "지난 시점",
    style: "bg-slate-100 text-slate-600 ring-slate-200",
  };
}

export default function WeaningStartCalculatorClient() {
  const today = useMemo(() => new Date(), []);
  const [birthDate, setBirthDate] = useState("");
  const [premature, setPremature] = useState<"no" | "yes">("no");

  const result = useMemo(() => {
    if (!birthDate) {
      return {
        status: "idle" as const,
        message:
          "아기 생년월일을 입력하면 이유식 준비 시작일과 이유식 시작 참고일을 바로 확인할 수 있어요.",
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

    const startDays = premature === "yes" ? 180 : 168;
    const prepDays = startDays - 14;

    const prepDate = addDays(birth, prepDays);
    const startDate = addDays(birth, startDays);

    const currentMonthAge = getMonthDiffWithDayAdjustment(birth, today);

    const prepStatus = getStatusLabel(prepDate, today);
    const startStatus = getStatusLabel(startDate, today);

    const phaseItems = [
      {
        title: "준비 시작 추천",
        date: prepDate,
        description: "스푼 적응, 의자 준비, 식사 자세 체크를 시작해보기 좋은 시기예요.",
        status: prepStatus,
      },
      {
        title: "이유식 시작 참고일",
        date: startDate,
        description: "일반적인 초기 이유식 시작 시점으로 많이 참고하는 구간이에요.",
        status: startStatus,
      },
      {
        title: "초기 이유식 적응기",
        date: addDays(startDate, 28),
        description: "한 가지 식재료씩 천천히 반응을 살펴보며 적응하기 좋아요.",
        status: getStatusLabel(addDays(startDate, 28), today),
      },
    ];

    return {
      status: "ready" as const,
      birth,
      livedDays,
      currentMonthAge,
      premature,
      prepDate,
      startDate,
      phaseItems,
      baseGuide:
        premature === "yes"
          ? "교정 연령 참고가 필요한 경우 조금 더 늦게 시작 시점을 보는 경우가 있어요."
          : "일반적으로 생후 5~6개월 전후를 많이 참고해요.",
      checklistGuide: "목 가누기, 혀 내밀기 반사 감소, 음식에 관심 보이기",
    };
  }, [birthDate, premature, today]);

  return (
    <section className="space-y-8">
      <header className="mt-card p-6 md:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
              MomTools 육아 계산기
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              이유식 시작 계산기
            </h1>
            <p className="text-sm leading-7 text-slate-600 md:text-base">
              아기 생년월일을 기준으로 이유식 준비 시작일과 이유식 시작 참고일을 간편하게 확인해보세요.
              일반 기준과 교정 연령 참고 여부를 함께 반영해, 이유식 타이밍을 정리하기 쉽게 구성했습니다.
            </p>
          </div>

          <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4 text-sm leading-6 text-slate-700 lg:max-w-sm">
            <div className="font-semibold text-slate-900">함께 보면 더 좋은 도구</div>
            <p className="mt-2">
              이유식 시기를 확인했다면{" "}
              <Link
                href="/cal/baby-age"
                className="font-semibold text-sky-700 underline underline-offset-4"
              >
                아기 개월수 계산기
              </Link>{" "}
              와{" "}
              <Link
                href="/cal/vaccine-schedule"
                className="font-semibold text-sky-700 underline underline-offset-4"
              >
                예방접종 일정 계산기
              </Link>
              도 함께 확인해보세요.
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
                  아기 생년월일과 교정 연령 참고 여부를 선택하면 이유식 준비 시점과 시작 참고일을 계산해요.
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

              <div className="space-y-2">
                <label htmlFor="premature" className="block text-sm font-semibold text-slate-800">
                  교정 연령 고려가 필요한가요?
                </label>
                <select
                  id="premature"
                  value={premature}
                  onChange={(e) => setPremature(e.target.value as "no" | "yes")}
                  className="mt-input"
                >
                  <option value="no">아니요</option>
                  <option value="yes">네, 참고가 필요해요</option>
                </select>
                <p className="text-xs leading-6 text-slate-500">
                  미숙아 등 교정 연령을 고려해야 하는 경우에는 의료진 안내를 우선 참고해 주세요.
                </p>
              </div>

              <div className="rounded-2xl border border-orange-100 bg-orange-50 p-4 text-sm leading-7 text-slate-700">
                <div className="font-semibold text-slate-900">입력 전 참고</div>
                <ul className="mt-2 space-y-1">
                  <li>• 일반적으로 이유식은 생후 5~6개월 전후를 많이 참고해요.</li>
                  <li>• 날짜 계산은 참고용이며, 실제 시작은 아기 발달 상태를 함께 봐야 해요.</li>
                  <li>• 교정 연령이 필요한 경우에는 반드시 의료진 안내를 우선 확인해 주세요.</li>
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
                핵심 결과 → 단계별 시점 → 안내 문구 순서로 구성했습니다.
              </p>
            </div>

            {result.status !== "ready" ? (
              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-600">
                {result.message}
              </div>
            ) : (
              <>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
                    title="준비 시작 추천일"
                    value={formatCompactDate(result.prepDate)}
                    hint={formatDate(result.prepDate)}
                  />
                  <SummaryCard
                    title="이유식 시작 참고일"
                    value={formatCompactDate(result.startDate)}
                    hint={formatDate(result.startDate)}
                  />
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {result.phaseItems.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-orange-100 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.04)]"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-base font-bold text-slate-900">{item.title}</div>
                        <span
                          className={[
                            "inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1",
                            item.status.style,
                          ].join(" ")}
                        >
                          {item.status.text}
                        </span>
                      </div>
                      <div className="mt-3 text-sm font-semibold text-orange-700">
                        {formatCompactDate(item.date)}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {formatDate(item.date)}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-sky-50 p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-orange-700 shadow-sm ring-1 ring-orange-100">
                      계산 로직
                    </span>
                    <span className="text-sm text-slate-700">
                      일반 기준 168일 / 교정 연령 참고 180일 기준으로 이유식 시작 참고일 계산
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    준비 시작일은 시작 참고일보다 14일 앞선 날짜로 계산했습니다. 다만 실제 이유식 시작은
                    아기의 발달 신호와 의료진 안내를 함께 고려하는 것이 좋아요.
                  </p>
                </div>
              </>
            )}
          </section>

          <section className="mt-card p-6 md:p-7">
            <div>
              <h2 className="text-lg font-bold text-slate-900">이유식 시작 전 체크 포인트</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                날짜만 맞는다고 바로 시작하기보다, 아기 발달 상태를 함께 보는 것이 중요해요.
              </p>
            </div>

            {result.status === "ready" ? (
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <CheckCard
                  title="기본 기준"
                  description={result.baseGuide}
                />
                <CheckCard
                  title="시작 전 확인"
                  description={result.checklistGuide}
                />
                <CheckCard
                  title="준비물 예시"
                  description="이유식 스푼, 턱받이, 하이체어 또는 식사 자세 보조용품을 미리 확인해보세요."
                />
                <CheckCard
                  title="주의할 점"
                  description="알레르기 반응, 삼킴 상태, 컨디션을 살피면서 한 가지씩 천천히 진행하는 것이 좋아요."
                />
              </div>
            ) : (
              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-500">
                생년월일을 입력하면 이유식 시작 전 체크 포인트도 함께 보여드려요.
              </div>
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
                이유식 시작 계산기는 어떻게 활용하나요?
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700 md:text-base">
                <p>
                  이유식 시작 계산기는 아기 생년월일을 기준으로 이유식 준비 시작일과 이유식 시작 참고일을
                  정리해보는 도구입니다. 일반적으로 생후 5~6개월 전후를 많이 참고하지만, 실제 시작 시기는
                  아기 발달 상태와 의료진 안내를 함께 보는 것이 중요해요.
                </p>
                <p>
                  부모 입장에서는 “언제부터 준비하면 좋지?”, “지금 바로 시작해도 되나?” 같은 질문이 자주 생기는데,
                  이 페이지에서는 날짜 계산뿐 아니라 체크 포인트도 함께 보여주어 판단에 도움을 주도록 구성했습니다.
                </p>
                <p>
                  다만 미숙아 등 교정 연령을 고려해야 하는 경우, 알레르기 이력, 삼킴 상태, 발달 상황에 따라
                  시작 시점이 달라질 수 있으므로 최종 결정은 의료진 또는 전문가 안내와 함께 확인하는 것이 좋습니다.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                자주 묻는 질문
              </h2>

              <div className="mt-4 space-y-4">
                <FaqItem
                  question="이유식은 꼭 계산기 날짜에 시작해야 하나요?"
                  answer="아니요. 계산기 날짜는 일반적인 참고 시점이에요. 실제 시작은 목 가누기, 음식에 대한 관심, 혀 내밀기 반사 감소 같은 발달 신호를 함께 확인하는 것이 중요합니다."
                />
                <FaqItem
                  question="교정 연령 참고가 필요한 경우는 어떻게 봐야 하나요?"
                  answer="미숙아 등 교정 연령을 고려해야 하는 경우에는 일반 생후 개월수보다 조금 더 늦게 시작 시점을 보는 경우가 있습니다. 이 경우에는 반드시 의료진 안내를 우선 참고해 주세요."
                />
                <FaqItem
                  question="이유식 시작 전 가장 중요한 체크 포인트는 무엇인가요?"
                  answer="목을 잘 가누는지, 음식에 관심을 보이는지, 혀로 밀어내는 반사가 줄었는지 등을 함께 보는 것이 좋아요. 날짜만 맞는다고 바로 시작하기보다 아기 상태를 함께 확인해야 합니다."
                />
                <FaqItem
                  question="처음부터 여러 재료를 같이 먹여도 되나요?"
                  answer="처음에는 한 가지씩 천천히 시작하고 반응을 확인하는 것이 좋아요. 새로운 재료를 추가할 때는 알레르기나 소화 상태를 잘 살피면서 진행해 주세요."
                />
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-orange-100 bg-orange-50 p-5 md:p-6">
              <h2 className="text-lg font-bold text-slate-900">
                이용 전 참고해 주세요
              </h2>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
                <li>• 본 계산 결과는 일반적인 이유식 시작 시점을 정리한 참고용 정보입니다.</li>
                <li>• 실제 이유식 시작은 아기 발달 상태와 의료진 안내를 함께 확인해야 합니다.</li>
                <li>• 교정 연령이 필요한 경우에는 의료진 판단이 우선입니다.</li>
                <li>• 알레르기, 삼킴 문제, 건강 상태가 있다면 반드시 전문가 상담을 먼저 받아주세요.</li>
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
                  href="/cal/vaccine-schedule"
                  className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  예방접종 일정 계산기
                </Link>
                <Link
                  href="/checklist/weaning-prep"
                  className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  이유식 준비 체크리스트
                </Link>
                <Link
                  href="/info/weaning"
                  className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  이유식 정보 모아보기
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-sky-100 bg-sky-50 p-5 md:p-6">
              <h2 className="text-lg font-bold text-slate-900">
                육아 준비와 예산도 함께 정리해보세요
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                이유식은 일정만 정하면 끝나는 것이 아니라 식기, 재료, 보관 용기 등 준비물도 함께 필요해요.
              </p>
              {/* <p className="mt-3 text-sm leading-7 text-slate-700">
                MomTools에서 이유식 일정을 정리한 뒤, 나중에는 BlueDino와 연결해
                육아비와 가계 계획까지 한 흐름으로 확장할 수 있어요.
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
          ? "border-orange-100 bg-gradient-to-br from-orange-50 to-white"
          : "border-slate-100 bg-white",
      ].join(" ")}
    >
      <div className="text-sm font-medium text-slate-500">{title}</div>
      <div className="mt-2 text-xl font-bold tracking-tight text-slate-900">{value}</div>
      <div className="mt-2 text-xs leading-6 text-slate-500">{hint}</div>
    </div>
  );
}

function CheckCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
      <div className="text-base font-bold text-slate-900">{title}</div>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
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