"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import UsDateInput from "@/components/common/UsDateInput";

const PREGNANCY_DAYS = 280;

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

function addDays(date: Date, days: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function dateOnlySerial(date: Date) {
  return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
}

function diffInDays(from: Date, to: Date) {
  return Math.floor((dateOnlySerial(to) - dateOnlySerial(from)) / 86_400_000);
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  }).format(date);
}

function trimesterFromDays(days: number) {
  if (days < 14 * 7) return "임신 초기";
  if (days < 28 * 7) return "임신 중기";
  return "임신 후기";
}

export default function DueDateCalculatorClient() {
  const today = useMemo(() => new Date(), []);
  const [lmp, setLmp] = useState("");

  const result = useMemo(() => {
    if (!lmp) {
      return {
        status: "idle" as const,
        message: "마지막 생리 시작일을 입력하면 출산 예정일과 현재 임신 주수를 확인할 수 있어요.",
      };
    }

    const lmpDate = parseLocalDate(lmp);
    if (!lmpDate) return { status: "error" as const, message: "날짜를 다시 확인해 주세요." };

    const gestationalDays = diffInDays(lmpDate, today);
    if (gestationalDays < 0) {
      return { status: "error" as const, message: "마지막 생리 시작일은 오늘 이후 날짜로 입력할 수 없어요." };
    }
    if (gestationalDays > 330) {
      return { status: "error" as const, message: "입력한 날짜가 너무 오래되었어요. 마지막 생리 시작일을 다시 확인해 주세요." };
    }

    const dueDate = addDays(lmpDate, PREGNANCY_DAYS);
    const weeks = Math.floor(gestationalDays / 7);
    const days = gestationalDays % 7;
    const daysUntilDue = diffInDays(today, dueDate);
    const milestones = [12, 20, 28, 36, 40].map((week) => ({
      week,
      date: addDays(lmpDate, week * 7),
    }));

    return {
      status: "ready" as const,
      dueDate,
      weeks,
      days,
      trimester: trimesterFromDays(gestationalDays),
      daysUntilDue,
      milestones,
    };
  }, [lmp, today]);

  return (
    <section className="space-y-5 md:space-y-6">
      <section className="mt-card p-4 md:p-6">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="mt-badge">출산 일정 계산</div>
            <h2 className="mt-title-lg mt-4">출산 예정일과 현재 임신 주수</h2>
            <p className="mt-text-main mt-3">
              마지막 생리 시작일을 0주 0일로 두고 일반적인 280일 기준 예정일을 계산합니다. 병원에서 확정한 예정일이 있다면 그 날짜를 우선하세요.
            </p>

            <div className="mt-5 rounded-2xl border border-rose-100 bg-rose-50/70 p-4">
              <label htmlFor="lmp" className="block text-sm font-bold text-slate-900">마지막 생리 시작일</label>
              <div className="mt-3">
                <UsDateInput
                  id="lmp"
                  label="마지막 생리 시작일"
                  value={lmp}
                  max={new Date().toISOString().split("T")[0]}
                  onChange={setLmp}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                생리주기가 불규칙하거나 시험관·배아이식 등으로 임신한 경우에는 이 계산보다 의료진이 정한 임신 주수와 예정일을 우선해 주세요.
              </p>
            </div>
          </div>

          <div className="rounded-[20px] border border-slate-100 bg-gradient-to-br from-white via-rose-50/50 to-sky-50 p-4 md:p-6">
            <h3 className="text-lg font-extrabold text-slate-900">계산 결과</h3>
            {result.status !== "ready" ? (
              <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-600">
                {result.message}
              </div>
            ) : (
              <div className="mt-5 space-y-5">
                <div className="mt-result-list">
                  <ResultRow title="출산 예정일" value={formatDate(result.dueDate)} />
                  <ResultRow title="현재 임신 주수" value={`${result.weeks}주 ${result.days}일`} />
                  <ResultRow title="현재 구간" value={result.trimester} />
                  <ResultRow
                    title={result.daysUntilDue >= 0 ? "예정일까지" : "예정일 경과"}
                    value={`${Math.abs(result.daysUntilDue)}일`}
                  />
                </div>

                <div className="rounded-2xl border border-slate-100 bg-white p-4">
                  <div className="text-sm font-bold text-slate-900">주요 주차 참고일</div>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {result.milestones.map((item) => (
                      <div key={item.week} className="rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700">
                        <span className="font-bold text-slate-900">{item.week}주</span> · {formatDate(item.date)}
                      </div>
                    ))}
                  </div>
                </div>

                <Link href="/checklists/birth" className="inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
                  출산 준비 체크리스트 보기
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </section>
  );
}

function ResultRow({ title, value }: { title: string; value: string }) {
  return (
    <div className="mt-result-list-item bg-white">
      <div className="mt-result-label">{title}</div>
      <div className="max-w-[62%] text-right text-base font-extrabold text-slate-900">{value}</div>
    </div>
  );
}
