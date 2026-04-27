"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type GrowthBand = "하위 구간" | "중간 구간" | "상위 구간";

function getBand(score: number): GrowthBand {
  if (score < -1.5) return "하위 구간";
  if (score > 1.5) return "상위 구간";
  return "중간 구간";
}

function getBandStyle(band: GrowthBand) {
  if (band === "하위 구간") {
    return "bg-sky-50 text-sky-700 ring-sky-100";
  }
  if (band === "상위 구간") {
    return "bg-orange-50 text-orange-700 ring-orange-100";
  }
  return "bg-emerald-50 text-emerald-700 ring-emerald-100";
}

function getBandDescription(type: "height" | "weight", band: GrowthBand) {
  if (type === "height") {
    if (band === "하위 구간") {
      return "현재 입력한 키가 같은 월령 평균 흐름보다 다소 낮은 편으로 보이는 구간이에요.";
    }
    if (band === "상위 구간") {
      return "현재 입력한 키가 같은 월령 평균 흐름보다 다소 높은 편으로 보이는 구간이에요.";
    }
    return "현재 입력한 키가 같은 월령 평균 흐름 안쪽에 있는 구간으로 보여요.";
  }

  if (band === "하위 구간") {
    return "현재 입력한 몸무게가 같은 월령 평균 흐름보다 다소 낮은 편으로 보이는 구간이에요.";
  }
  if (band === "상위 구간") {
    return "현재 입력한 몸무게가 같은 월령 평균 흐름보다 다소 높은 편으로 보이는 구간이에요.";
  }
  return "현재 입력한 몸무게가 같은 월령 평균 흐름 안쪽에 있는 구간으로 보여요.";
}

function formatNumber(value: number, maximumFractionDigits = 1) {
  return new Intl.NumberFormat("ko-KR", {
    maximumFractionDigits,
  }).format(value);
}

function getMonthStage(months: number) {
  if (months <= 1) return "신생아 시기";
  if (months <= 6) return "영아 초기";
  if (months <= 12) return "영아 중기";
  if (months <= 24) return "영아 후기";
  return "유아 초기";
}

export default function GrowthPercentileCalculatorClient() {
  const [gender, setGender] = useState<"boy" | "girl">("boy");
  const [months, setMonths] = useState("6");
  const [height, setHeight] = useState("67");
  const [weight, setWeight] = useState("8");

  const result = useMemo(() => {
    const m = Number(months);
    const h = Number(height);
    const w = Number(weight);

    if ([m, h, w].some((n) => Number.isNaN(n) || n <= 0)) {
      return {
        status: "error" as const,
        message: "월령, 키, 몸무게를 모두 올바르게 입력해 주세요.",
      };
    }

    if (m > 36) {
      return {
        status: "error" as const,
        message: "현재 계산기는 0~36개월 범위의 간이 성장 체크용으로 구성되어 있어요.",
      };
    }

    const expectedHeight = gender === "boy" ? 50 + m * 2.8 : 49 + m * 2.7;
    const expectedWeight = gender === "boy" ? 3.3 + m * 0.75 : 3.2 + m * 0.7;

    const heightScore = (h - expectedHeight) / 4;
    const weightScore = (w - expectedWeight) / 1.2;

    const heightBand = getBand(heightScore);
    const weightBand = getBand(weightScore);

    const stage = getMonthStage(m);

    return {
      status: "ready" as const,
      months: m,
      height: h,
      weight: w,
      stage,
      expectedHeight,
      expectedWeight,
      heightScore,
      weightScore,
      heightBand,
      weightBand,
      heightDescription: getBandDescription("height", heightBand),
      weightDescription: getBandDescription("weight", weightBand),
      overallGuide:
        heightBand === "중간 구간" && weightBand === "중간 구간"
          ? "키와 몸무게 모두 평균 흐름 안쪽으로 보이는 편이에요. 추세를 계속 관찰해보면 좋아요."
          : "한 번의 측정값보다 최근 성장 추세를 함께 보는 것이 더 중요해요.",
    };
  }, [gender, months, height, weight]);

  return (
    <section className="space-y-8">
      <header className="mt-card p-6 md:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
              MomTools 육아 계산기
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              성장 백분위 계산기
            </h1>
            <p className="text-sm leading-7 text-slate-600 md:text-base">
              성별, 월령, 키, 몸무게를 입력하면 아기의 현재 성장 위치를 간편하게 확인할 수 있어요.
              정밀 백분위표 대신 평균 흐름 대비 어느 구간인지 빠르게 참고하기 좋게 구성했습니다.
            </p>
          </div>

          <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4 text-sm leading-6 text-slate-700 lg:max-w-sm">
            <div className="font-semibold text-slate-900">함께 보면 좋은 도구</div>
            <p className="mt-2">
              성장 위치를 확인했다면{" "}
              <Link
                href="/tools/baby-age"
                className="font-semibold text-sky-700 underline underline-offset-4"
              >
                아기 개월수 계산기
              </Link>{" "}
              와{" "}
              <Link
                href="/tools/vaccine-schedule"
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
                  성별, 월령, 키, 몸무게를 입력하면 평균 흐름 대비 성장 위치를 간단히 확인할 수 있어요.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-800">
                    성별
                  </label>
                  <select
                    className="mt-input"
                    value={gender}
                    onChange={(e) => setGender(e.target.value as "boy" | "girl")}
                  >
                    <option value="boy">남아</option>
                    <option value="girl">여아</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-800">
                    월령
                  </label>
                  <input
                    className="mt-input"
                    type="number"
                    min="0"
                    max="36"
                    value={months}
                    onChange={(e) => setMonths(e.target.value)}
                    placeholder="예: 6"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-800">
                    키(cm)
                  </label>
                  <input
                    className="mt-input"
                    type="number"
                    step="0.1"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="예: 67"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-800">
                    몸무게(kg)
                  </label>
                  <input
                    className="mt-input"
                    type="number"
                    step="0.1"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="예: 8"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-violet-100 bg-violet-50 p-4 text-sm leading-7 text-slate-700">
                <div className="font-semibold text-slate-900">입력 전 참고</div>
                <ul className="mt-2 space-y-1">
                  <li>• 이 계산기는 정밀 성장 백분위표가 아닌 간이 성장 위치 체크용 도구예요.</li>
                  <li>• 한 번의 측정값보다 최근 성장 추세를 함께 보는 것이 더 중요해요.</li>
                  <li>• 걱정되는 변화가 있으면 병원 진료와 공식 성장곡선표를 함께 확인해 주세요.</li>
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
              <h2 className="text-lg font-bold text-slate-900">결과 화면 한눈에 보기</h2>
              <p className="mt-1 text-sm text-slate-500">
                핵심 요약 → 키/몸무게 위치 → 참고 안내 순서로 살펴볼 수 있어요.
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
                    value={`${result.months}개월`}
                    hint={result.stage}
                    highlight
                  />
                  <SummaryCard
                    title="입력한 키"
                    value={`${formatNumber(result.height)}cm`}
                    hint={`기대 흐름 약 ${formatNumber(result.expectedHeight)}cm`}
                  />
                  <SummaryCard
                    title="입력한 몸무게"
                    value={`${formatNumber(result.weight)}kg`}
                    hint={`기대 흐름 약 ${formatNumber(result.expectedWeight)}kg`}
                  />
                  <SummaryCard
                    title="전체 참고"
                    value="간이 체크"
                    hint="정밀 백분위가 아닌 참고용"
                  />
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <GrowthCard
                    title="키 위치"
                    band={result.heightBand}
                    description={result.heightDescription}
                  />
                  <GrowthCard
                    title="몸무게 위치"
                    band={result.weightBand}
                    description={result.weightDescription}
                  />
                </div>

                <div className="mt-6 rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-sky-50 p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-violet-700 shadow-sm ring-1 ring-violet-100">
                      계산 로직
                    </span>
                    <span className="text-sm text-slate-700">
                      월령별 평균 흐름 추정값과 입력값 차이를 기준으로 상·중·하 구간 표시
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {result.overallGuide}
                  </p>
                </div>
              </>
            )}
          </section>

          <section className="mt-card p-6 md:p-7">
            <div>
              <h2 className="text-lg font-bold text-slate-900">성장 체크할 때 같이 보면 좋은 포인트</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                숫자 하나보다 최근 변화 흐름과 수유, 식사, 수면, 활동량을 함께 보는 것이 중요해요.
              </p>
            </div>

            {result.status === "ready" ? (
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <CheckCard
                  title="추세 확인"
                  description="한 번의 측정값보다 최근 1~3개월 사이 성장 흐름을 함께 보는 것이 좋아요."
                />
                <CheckCard
                  title="수유와 식사"
                  description="수유량, 이유식 진행 정도, 식사 패턴 변화가 몸무게 변화에 영향을 줄 수 있어요."
                />
                <CheckCard
                  title="수면과 컨디션"
                  description="수면 상태와 컨디션, 활동량도 성장 흐름에 영향을 줄 수 있어요."
                />
                <CheckCard
                  title="진료 시점"
                  description="체중 감소, 급격한 정체, 먹는 양 저하 등 걱정되는 변화가 있으면 진료를 받아보는 것이 좋아요."
                />
              </div>
            ) : (
              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-500">
                값을 입력하면 성장 체크 시 같이 볼 포인트도 함께 보여드려요.
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
                성장 백분위 계산기는 어떻게 활용하나요?
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700 md:text-base">
                <p>
                  성장 백분위 계산기는 성별, 월령, 키, 몸무게를 바탕으로 현재 성장 위치를 빠르게 참고해보는 도구입니다.
                  다만 이 페이지는 병원이나 국가 성장곡선표처럼 정밀 백분위를 계산하는 방식이 아니라,
                  평균 흐름 대비 어느 구간에 가까운지 간단히 살펴보는 용도로 구성되어 있어요.
                </p>
                <p>
                  부모 입장에서는 “지금 우리 아기 키와 몸무게가 어느 정도 위치일까?”가 궁금할 때가 많지만,
                  실제로는 한 번의 숫자보다 최근 성장 추세가 더 중요합니다. 그래서 이 페이지도 단일 결과보다는
                  흐름을 참고하는 방향으로 이해하는 것이 좋아요.
                </p>
                <p>
                  만약 성장 정체가 오래 지속되거나, 체중 감소, 식사량 저하, 발달 걱정이 함께 있다면
                  계산기 결과보다 병원 진료와 공식 성장곡선표 확인이 우선입니다.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                자주 묻는 질문
              </h2>

              <div className="mt-4 space-y-4">
                <FaqItem
                  question="이 결과가 실제 백분위인가요?"
                  answer="아니요. 이 계산기는 정밀 성장 백분위표를 그대로 계산하는 도구가 아니라, 평균 흐름 대비 현재 위치를 간단히 참고할 수 있게 만든 간이 체크 도구예요."
                />
                <FaqItem
                  question="하위 구간이라고 바로 문제인 건가요?"
                  answer="반드시 그렇지는 않아요. 아이마다 성장 속도 차이가 있고, 한 번의 측정값보다 최근 추세가 더 중요해요. 다만 걱정되는 변화가 계속되면 진료를 받아보는 것이 좋습니다."
                />
                <FaqItem
                  question="상위 구간이면 무조건 잘 크고 있는 건가요?"
                  answer="숫자가 높다고 해서 무조건 더 좋은 것은 아니에요. 중요한 것은 아이가 자기 성장 흐름을 안정적으로 이어가고 있는지예요."
                />
                <FaqItem
                  question="언제 병원에 가서 확인하는 게 좋나요?"
                  answer="체중 감소, 급격한 성장 정체, 먹는 양 변화, 발달 걱정이 함께 있으면 계산기 결과와 별개로 병원 상담을 받아보는 것이 좋아요."
                />
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-violet-100 bg-violet-50 p-5 md:p-6">
              <h2 className="text-lg font-bold text-slate-900">
                이용 전 참고해 주세요
              </h2>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
                <li>• 본 계산 결과는 정밀 성장 백분위가 아닌 간이 성장 위치 참고용 정보입니다.</li>
                <li>• 실제 성장 백분위는 병원 또는 공식 성장곡선표와 함께 확인해 주세요.</li>
                <li>• 한 번의 수치보다 최근 성장 추세를 함께 보는 것이 중요합니다.</li>
                <li>• 걱정되는 변화가 있으면 계산기보다 의료진 상담이 우선입니다.</li>
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
                  href="/info/newborn"
                  className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  신생아 정보 모아보기
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-sky-100 bg-sky-50 p-5 md:p-6">
              <h2 className="text-lg font-bold text-slate-900">
                육아 일정과 가계 준비도 함께 생각해보세요
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                성장 체크는 수유, 이유식, 병원 방문, 육아용품 준비와도 자연스럽게 연결돼요.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                MomTools에서 육아 일정을 정리한 뒤, 관련 정보와 체크리스트를 함께 보며
                육아비와 가계 계획까지 함께 관리할 수 있도록 확장할 수 있어요.
              </p>
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
          ? "border-violet-100 bg-gradient-to-br from-violet-50 to-white"
          : "border-slate-100 bg-white",
      ].join(" ")}
    >
      <div className="text-sm font-medium text-slate-500">{title}</div>
      <div className="mt-2 text-xl font-bold tracking-tight text-slate-900">{value}</div>
      <div className="mt-2 text-xs leading-6 text-slate-500">{hint}</div>
    </div>
  );
}

function GrowthCard({
  title,
  band,
  description,
}: {
  title: string;
  band: GrowthBand;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-violet-100 bg-white p-6">
      <div className="text-sm text-slate-500">{title}</div>
      <div className="mt-3 flex items-center gap-3">
        <div className="text-2xl font-bold text-slate-900">{band}</div>
        <span
          className={[
            "inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1",
            getBandStyle(band),
          ].join(" ")}
        >
          간이 체크 결과
        </span>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
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