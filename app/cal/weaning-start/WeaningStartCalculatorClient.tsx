"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import UsDateInput from "@/components/common/UsDateInput";

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
  ) return null;
  return date;
}

function addMonths(date: Date, months: number) {
  const next = new Date(date);
  const originalDay = next.getDate();
  next.setDate(1);
  next.setMonth(next.getMonth() + months);
  const lastDay = new Date(next.getFullYear(), next.getMonth() + 1, 0).getDate();
  next.setDate(Math.min(originalDay, lastDay));
  return next;
}

function getMonthDiffWithDayAdjustment(from: Date, to: Date) {
  let months = (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth());
  if (to.getDate() < from.getDate()) months -= 1;
  return Math.max(0, months);
}

function formatDate(date: Date | null) {
  if (!date) return "-";
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export default function WeaningStartCalculatorClient() {
  const today = useMemo(() => new Date(), []);
  const [birthDate, setBirthDate] = useState("");
  const [premature, setPremature] = useState<"no" | "yes">("no");

  const result = useMemo(() => {
    if (!birthDate) {
      return { status: "idle" as const, message: "아기 생년월일을 입력하면 현재 월령과 생후 6개월 참고 시점을 확인할 수 있어요." };
    }

    const birth = parseLocalDate(birthDate);
    if (!birth) return { status: "error" as const, message: "생년월일 형식을 다시 확인해 주세요." };
    if (birth.getTime() > today.getTime()) return { status: "error" as const, message: "아기 생년월일은 오늘 이후 날짜로 입력할 수 없어요." };

    const currentMonthAge = getMonthDiffWithDayAdjustment(birth, today);
    const sixMonthReference = addMonths(birth, 6);

    return {
      status: "ready" as const,
      currentMonthAge,
      sixMonthReference,
      premature,
    };
  }, [birthDate, premature, today]);

  return (
    <section className="space-y-5 md:space-y-6">
      <header className="mt-card p-4 md:p-6">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">MomTools 이유식 준비 도구</div>
          <h1 className="mt-title-lg">이유식 시작 시기 참고</h1>
          <p className="text-sm leading-7 text-slate-600 md:text-base">
            생년월일로 현재 월령과 생후 6개월 참고 시점을 확인하되, 실제 시작은 목 가누기·지지해 앉기·삼키기·음식 관심 같은 발달 준비 상태를 함께 봅니다.
          </p>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="mt-card p-4 md:p-6">
          <h2 className="text-lg font-bold text-slate-900">아이 정보</h2>
          <div className="mt-5 space-y-4">
            <div className="space-y-2">
              <label htmlFor="birthDate" className="block text-sm font-semibold text-slate-800">아기 생년월일</label>
              <UsDateInput
                id="birthDate"
                label="아기 생년월일"
                value={birthDate}
                max={new Date().toISOString().split("T")[0]}
                onChange={setBirthDate}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="premature" className="block text-sm font-semibold text-slate-800">교정연령을 고려해야 하나요?</label>
              <select
                id="premature"
                value={premature}
                onChange={(e) => setPremature(e.target.value as "no" | "yes")}
                className="mt-input"
              >
                <option value="no">아니요</option>
                <option value="yes">네, 미숙아 등으로 교정연령을 봐야 해요</option>
              </select>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-orange-100 bg-orange-50 p-4 text-sm leading-7 text-slate-700">
            <div className="font-semibold text-slate-900">중요한 기준</div>
            <p className="mt-1">
              미숙아의 교정연령은 단순히 출생일에서 며칠을 더하는 방식으로 계산하지 않습니다. 재태주수와 성장·발달 상태를 함께 봐야 하므로 시작 시점은 소아청소년과 의료진 안내를 우선하세요.
            </p>
          </div>
        </section>

        <section className="mt-card p-4 md:p-6">
          <h2 className="text-lg font-bold text-slate-900">시작 시기 참고</h2>
          {result.status !== "ready" ? (
            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-600">{result.message}</div>
          ) : (
            <div className="mt-5 space-y-4">
              <div className="mt-result-list">
                <div className="mt-result-list-item"><div><div className="mt-result-label">현재 월령</div><div className="mt-result-value">{result.currentMonthAge}개월</div></div></div>
                <div className="mt-result-list-item"><div><div className="mt-result-label">생후 6개월 참고 시점</div><div className="mt-result-value">{formatDate(result.sixMonthReference)}</div><p className="mt-result-hint mt-1">달력상 참고일일 뿐, 자동 시작일이 아닙니다.</p></div></div>
              </div>

              {result.premature === "yes" ? (
                <div className="rounded-2xl border border-rose-100 bg-rose-50 p-4 text-sm leading-7 text-rose-900">
                  <div className="font-semibold">교정연령 확인이 먼저입니다</div>
                  <p className="mt-1">위 날짜를 실제 이유식 시작일로 사용하지 마세요. 출생 주수와 아이 상태에 따라 교정연령이 달라질 수 있습니다.</p>
                </div>
              ) : null}

              <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4 text-sm leading-7 text-slate-700">
                <div className="font-semibold text-slate-900">준비 신호를 같이 보세요</div>
                <ul className="mt-2 space-y-1">
                  <li>• 고개를 비교적 안정적으로 가눌 수 있습니다.</li>
                  <li>• 도움을 받아 몸을 지지해 앉을 수 있습니다.</li>
                  <li>• 숟가락의 음식을 계속 밀어내기보다 삼키는 모습이 보입니다.</li>
                  <li>• 어른이 먹는 모습을 보고 음식에 관심을 보입니다.</li>
                </ul>
              </div>
            </div>
          )}
        </section>
      </div>

      <section className="mt-card-soft p-4 md:p-6">
        <h2 className="font-bold text-slate-900">이유식 시작 후 안전하게 진행하기</h2>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
          <li>• 새로운 식품은 아이가 반응을 관찰할 수 있는 속도로 하나씩 도입합니다.</li>
          <li>• 특별한 이유 없이 알레르기 가능 식품을 무조건 늦게 시작할 필요는 없습니다.</li>
          <li>• 이전에 음식 반응이 있었거나 심한 아토피 피부염, 강한 알레르기 가족력이 있다면 의료진과 먼저 상의하는 것이 좋습니다.</li>
          <li>• 먹는 동안 보호자가 가까이에서 지켜보고, 아이 발달에 맞는 크기와 질감으로 준비합니다.</li>
        </ul>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=5212" target="_blank" rel="noreferrer" className="font-semibold text-amber-700 underline underline-offset-4">질병관리청 영유아 식이영양 확인</a>
          <Link href="/baby-food/early" className="font-semibold text-amber-700 underline underline-offset-4">초기 이유식 이어서 보기</Link>
        </div>
      </section>
    </section>
  );
}
