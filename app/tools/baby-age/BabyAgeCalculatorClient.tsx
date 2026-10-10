"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import UsDateInput from "@/components/common/UsDateInput";

function parseLocalDate(value: string) {
  if (!value) return null;
  const [year, month, day] = value.split("-").map(Number);
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

function dateOnlySerial(date: Date) {
  return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
}

function diffInDays(from: Date, to: Date) {
  return Math.floor((dateOnlySerial(to) - dateOnlySerial(from)) / 86_400_000);
}

function monthAge(from: Date, to: Date) {
  let months = (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth());
  if (to.getDate() < from.getDate()) months -= 1;
  return Math.max(0, months);
}

function addDays(date: Date, days: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function addYearsSafe(date: Date, years: number) {
  const year = date.getFullYear() + years;
  const month = date.getMonth();
  const lastDay = new Date(year, month + 1, 0).getDate();
  return new Date(year, month, Math.min(date.getDate(), lastDay));
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  }).format(date);
}

export default function BabyAgeCalculatorClient() {
  const today = useMemo(() => new Date(), []);
  const [birthDate, setBirthDate] = useState("");

  const result = useMemo(() => {
    if (!birthDate) {
      return { status: "idle" as const, message: "아기 생년월일을 입력하면 현재 월령과 생후 일수를 확인할 수 있어요." };
    }

    const birth = parseLocalDate(birthDate);
    if (!birth) return { status: "error" as const, message: "생년월일을 다시 확인해 주세요." };

    const livedDays = diffInDays(birth, today);
    if (livedDays < 0) return { status: "error" as const, message: "아기 생년월일은 오늘 이후 날짜로 입력할 수 없어요." };

    return {
      status: "ready" as const,
      months: monthAge(birth, today),
      weeks: Math.floor(livedDays / 7),
      remainDays: livedDays % 7,
      livedDays,
      hundredDay: addDays(birth, 99),
      twoHundredDay: addDays(birth, 199),
      firstBirthday: addYearsSafe(birth, 1),
    };
  }, [birthDate, today]);

  return (
    <section className="mt-card p-4 md:p-6">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <div className="mt-badge">월령 계산</div>
          <h2 className="mt-title-lg mt-4">아기 개월수와 생후 일수</h2>
          <p className="mt-text-main mt-3">
            생년월일을 기준으로 오늘의 월령과 생후 일수를 계산하고, 100일·200일·첫돌 날짜도 함께 확인합니다.
          </p>

          <div className="mt-5 rounded-2xl border border-amber-100 bg-amber-50/70 p-4">
            <label htmlFor="birthDate" className="block text-sm font-bold text-slate-900">아기 생년월일</label>
            <div className="mt-3">
              <UsDateInput
                id="birthDate"
                label="아기 생년월일"
                value={birthDate}
                max={new Date().toISOString().split("T")[0]}
                onChange={setBirthDate}
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              미숙아나 교정연령 확인이 필요한 경우에는 단순 월령보다 의료진이 안내한 교정연령을 우선해 주세요.
            </p>
          </div>
        </div>

        <div className="rounded-[20px] border border-slate-100 bg-gradient-to-br from-white via-amber-50/60 to-sky-50 p-4 md:p-6">
          <h3 className="text-lg font-extrabold text-slate-900">계산 결과</h3>
          {result.status !== "ready" ? (
            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-600">{result.message}</div>
          ) : (
            <div className="mt-5 space-y-5">
              <div className="mt-result-list">
                <ResultRow title="현재 월령" value={`${result.months}개월`} />
                <ResultRow title="생후 일수" value={`${result.livedDays.toLocaleString("ko-KR")}일`} />
                <ResultRow title="생후 주수" value={`${result.weeks}주 ${result.remainDays}일`} />
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-4">
                <div className="text-sm font-bold text-slate-900">기념 날짜</div>
                <div className="mt-3 space-y-2 text-sm text-slate-700">
                  <div>100일 · <strong>{formatDate(result.hundredDay)}</strong></div>
                  <div>200일 · <strong>{formatDate(result.twoHundredDay)}</strong></div>
                  <div>첫돌 · <strong>{formatDate(result.firstBirthday)}</strong></div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/monthly-guide" className="mt-button-secondary">월령별 가이드</Link>
                <Link href="/tools/vaccine-schedule" className="mt-button-secondary">예방접종 일정</Link>
                <Link href="/tools/growth-percentile" className="mt-button-secondary">성장도표 확인</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ResultRow({ title, value }: { title: string; value: string }) {
  return (
    <div className="mt-result-list-item bg-white">
      <div className="mt-result-label">{title}</div>
      <div className="text-base font-extrabold text-slate-900">{value}</div>
    </div>
  );
}
