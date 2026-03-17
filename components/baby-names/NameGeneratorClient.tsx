"use client";

import { useMemo, useState } from "react";
import { generatorNamePools, nameStyles, type NameGender, type NameStyle } from "@/data/babyNames";

function hashString(value: string) {
  return value.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
}

export default function NameGeneratorClient() {
  const [surname, setSurname] = useState("김");
  const [gender, setGender] = useState<NameGender>("boy");
  const [style, setStyle] = useState<NameStyle>(nameStyles[0]);

  const recommendations = useMemo(() => {
    const pool = generatorNamePools[gender][style];
    const seed = hashString(`${surname}-${gender}-${style}`);
    return Array.from({ length: 16 }, (_, index) => pool[(seed + index * 3) % pool.length]);
  }, [surname, gender, style]);

  return (
    <div className="space-y-6">
      <section className="mt-card p-6 md:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
          <div className="flex-1">
            <span className="mt-badge">아이 이름 생성기</span>
            <h1 className="mt-title-lg mt-4">성씨와 분위기를 넣고 바로 참고 이름 16개 보기</h1>
            <p className="mt-text-sub mt-3">
              한글 이름 위주로 빠르게 비교할 수 있도록 구성했습니다. 성씨와 함께 실제로 불러 보면서 어감이 자연스러운지,
              가족이 부르기 편한지 먼저 확인해 보세요.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <label className="space-y-2">
            <span className="text-sm font-semibold text-slate-700">성씨</span>
            <input
              value={surname}
              onChange={(e) => setSurname(e.target.value.slice(0, 2) || "김")}
              className="mt-input"
              placeholder="예: 김"
            />
          </label>
          <label className="space-y-2">
            <span className="text-sm font-semibold text-slate-700">성별 느낌</span>
            <select value={gender} onChange={(e) => setGender(e.target.value as NameGender)} className="mt-input">
              <option value="boy">남아 이름</option>
              <option value="girl">여아 이름</option>
            </select>
          </label>
          <label className="space-y-2">
            <span className="text-sm font-semibold text-slate-700">원하는 분위기</span>
            <select value={style} onChange={(e) => setStyle(e.target.value as NameStyle)} className="mt-input">
              {nameStyles.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </label>
        </div>
      </section>

      <section className="mt-card-soft p-6 md:p-8">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">추천 결과</div>
            <h2 className="mt-2 text-2xl font-bold text-slate-800">참고용 이름 16개</h2>
          </div>
          <div className="text-sm text-slate-500">이름만 빠르게 비교하기 좋은 구성</div>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {recommendations.map((name, idx) => (
            <article key={`${name}-${idx}`} className="rounded-3xl border border-amber-100 bg-white p-5 text-center shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-600">Option {idx + 1}</div>
              <div className="mt-4 text-2xl font-bold text-slate-800">{surname}{name}</div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
