"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

function formatNumber(value: number, maximumFractionDigits = 1) {
  return new Intl.NumberFormat("ko-KR", { maximumFractionDigits }).format(value);
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

    if ([m, h, w].some((n) => Number.isNaN(n) || n < 0) || h <= 0 || w <= 0) {
      return { status: "error" as const, message: "월령, 키, 몸무게를 올바르게 입력해 주세요." };
    }

    if (m > 36) {
      return { status: "error" as const, message: "현재 도구는 0~36개월 아이의 측정값을 정리할 때 사용할 수 있어요." };
    }

    return {
      status: "ready" as const,
      months: m,
      height: h,
      weight: w,
      stage: getMonthStage(m),
      genderLabel: gender === "boy" ? "남아" : "여아",
    };
  }, [gender, months, height, weight]);

  return (
    <section className="space-y-5 md:space-y-6">
      <header className="mt-card p-4 md:p-6">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
            아이 성장 기록 정리
          </div>
          <h1 className="mt-title-lg">성장도표를 보기 전에 측정값을 정리하세요</h1>
          <p className="text-sm leading-7 text-slate-600 md:text-base">
            성별, 월령, 키, 몸무게를 한 번에 정리한 뒤 질병관리청 공식 성장도표와 비교해 보세요.
            이 도구는 정상·비정상을 자체 판정하지 않습니다.
          </p>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="mt-card p-4 md:p-6">
          <h2 className="text-lg font-bold text-slate-900">아이 정보 입력</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">같은 조건에서 잰 최근 측정값을 입력해 주세요.</p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-semibold text-slate-800">
              <span>성별</span>
              <select className="mt-input" value={gender} onChange={(e) => setGender(e.target.value as "boy" | "girl")}>
                <option value="boy">남아</option>
                <option value="girl">여아</option>
              </select>
            </label>
            <label className="space-y-2 text-sm font-semibold text-slate-800">
              <span>월령</span>
              <input className="mt-input" type="number" min="0" max="36" value={months} onChange={(e) => setMonths(e.target.value)} />
            </label>
            <label className="space-y-2 text-sm font-semibold text-slate-800">
              <span>키(cm)</span>
              <input className="mt-input" type="number" step="0.1" min="0" value={height} onChange={(e) => setHeight(e.target.value)} />
            </label>
            <label className="space-y-2 text-sm font-semibold text-slate-800">
              <span>몸무게(kg)</span>
              <input className="mt-input" type="number" step="0.1" min="0" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </label>
          </div>

          <div className="mt-5 rounded-2xl border border-violet-100 bg-violet-50 p-4 text-sm leading-7 text-slate-700">
            <div className="font-semibold text-slate-900">왜 성장도표를 직접 확인해야 하나요?</div>
            <p className="mt-1">
              성장 위치는 성별과 정확한 월령에 맞는 공식 성장도표의 분포를 함께 봐야 합니다. 단순 평균이나 임의 추정값 하나만으로 아이의 성장을 판단하지 마세요.
            </p>
          </div>
        </section>

        <section className="mt-card p-4 md:p-6">
          <h2 className="text-lg font-bold text-slate-900">성장도표 확인용 측정값</h2>
          {result.status !== "ready" ? (
            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-600">{result.message}</div>
          ) : (
            <>
              <div className="mt-5 mt-result-list">
                <div className="mt-result-list-item"><div><div className="mt-result-label">성별</div><div className="mt-result-value">{result.genderLabel}</div></div></div>
                <div className="mt-result-list-item"><div><div className="mt-result-label">월령</div><div className="mt-result-value">{result.months}개월</div><p className="mt-result-hint mt-1">{result.stage}</p></div></div>
                <div className="mt-result-list-item"><div><div className="mt-result-label">키</div><div className="mt-result-value">{formatNumber(result.height)}cm</div></div></div>
                <div className="mt-result-list-item"><div><div className="mt-result-label">몸무게</div><div className="mt-result-value">{formatNumber(result.weight)}kg</div></div></div>
              </div>

              <div className="mt-5 rounded-2xl border border-sky-100 bg-sky-50 p-4 text-sm leading-7 text-slate-700">
                <div className="font-semibold text-slate-900">다음 단계</div>
                <p className="mt-1">질병관리청의 소아청소년 성장도표에서 같은 성별·월령의 곡선과 비교하고, 한 번의 값보다 이전 측정값과 이어지는 흐름을 함께 보세요.</p>
                <a
                  href="https://kdca.go.kr/kdca/5458/subview.do"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex font-semibold text-sky-700 underline underline-offset-4"
                >
                  질병관리청 소아청소년 성장도표 확인
                </a>
              </div>
            </>
          )}
        </section>
      </div>

      <section className="mt-card-soft p-4 md:p-6">
        <h2 className="font-bold text-slate-900">성장 기록은 이렇게 살펴보세요</h2>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
          <li>• 현재 공식 기준은 질병관리청이 제공하는 2017 소아청소년 성장도표입니다.</li>
          <li>• 3세 미만은 WHO 성장표준을 도입한 국내 성장도표를 사용합니다.</li>
          <li>• 한 번의 위치보다 여러 시점의 성장곡선 흐름과 실제 진료 측정값이 중요합니다.</li>
          <li>• 키·몸무게 증가가 멈추거나 감소하고 식사량 저하, 반복 구토·설사, 처짐 등이 함께 있으면 진료 상담을 우선하세요.</li>
        </ul>
        <Link href="/qna/growth" className="mt-4 inline-flex font-semibold text-amber-700 underline underline-offset-4">성장 Q&A 이어서 보기</Link>
      </section>
    </section>
  );
}
