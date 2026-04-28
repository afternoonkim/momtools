"use client";

import { useEffect, useMemo, useState } from "react";
import { Calculator, CheckCircle2, Landmark, MapPin, Search, WalletCards } from "lucide-react";
import {
  birthOrderLabels,
  birthSupportRegions,
  commonMonthlySupportSchedule,
  calculateBirthSupport,
  type BirthOrder,
  type BirthSupportRegion,
} from "@/data/birthSupportCalculator";

const birthOrderOptions: BirthOrder[] = ["first", "second", "third", "fourthPlus"];

function getRegionLabel(region: BirthSupportRegion) {
  return `${region.sido} ${region.sigungu === "전체" ? "" : region.sigungu}`.trim();
}

function normalizeRegionKeyword(value: string) {
  return value.normalize("NFKC").replace(/[\s·,._-]/g, "").toLowerCase();
}

const regionSearchOptions = birthSupportRegions.map((region) => {
  const label = getRegionLabel(region);
  return {
    regionCode: region.regionCode,
    label,
    sido: region.sido,
    sigungu: region.sigungu,
    searchText: normalizeRegionKeyword(`${label} ${region.title} ${region.regionCode}`),
  };
});

export default function BirthSupportCalculatorClient() {
  const [mounted, setMounted] = useState(false);
  const [regionCode, setRegionCode] = useState(birthSupportRegions[0]?.regionCode ?? "jeju");
  const [birthOrder, setBirthOrder] = useState<BirthOrder>("first");
  const [regionSearch, setRegionSearch] = useState(() => (birthSupportRegions[0] ? getRegionLabel(birthSupportRegions[0]) : ""));
  const [regionListOpen, setRegionListOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const result = useMemo(() => calculateBirthSupport(regionCode, birthOrder), [regionCode, birthOrder]);
  const selectedRegionLabel = getRegionLabel(result.region);

  useEffect(() => {
    setRegionSearch(selectedRegionLabel);
  }, [selectedRegionLabel]);

  const filteredRegions = useMemo(() => {
    const query = normalizeRegionKeyword(regionSearch.trim());

    if (!query) {
      return regionSearchOptions.slice(0, 80);
    }

    return regionSearchOptions.filter((region) => region.searchText.includes(query)).slice(0, 80);
  }, [regionSearch]);

  const handleRegionSelect = (option: (typeof regionSearchOptions)[number]) => {
    setRegionCode(option.regionCode);
    setRegionSearch(option.label);
    setRegionListOpen(false);
  };

  if (!mounted) {
    return (
      <section className="mt-card overflow-hidden p-0" suppressHydrationWarning>
        <div className="border-b border-amber-100 bg-gradient-to-br from-amber-50 via-white to-sky-50 p-6 md:p-8">
          <span className="mt-badge">지역별 출산지원금 데이터 적용</span>
          <h2 className="mt-title-lg mt-4">출산지원금 계산기를 불러오는 중입니다</h2>
          <p className="mt-text-sub mt-3 max-w-3xl">
            거주 지역과 출생 순위를 선택하면 전국 공통 지원금과 지자체 출산지원금을 함께 계산해 보여드립니다.
          </p>
        </div>
        <div className="grid gap-4 p-6 md:p-8 lg:grid-cols-2">
          <div className="h-44 animate-pulse rounded-3xl bg-slate-100" />
          <div className="h-44 animate-pulse rounded-3xl bg-slate-100" />
        </div>
      </section>
    );
  }

  return (
    <section className="mt-card overflow-hidden p-0" suppressHydrationWarning>
      <div className="border-b border-amber-100 bg-gradient-to-br from-amber-50 via-white to-sky-50 p-6 md:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mt-badge">지역별 출산지원금 데이터 적용</span>
            <h2 className="mt-title-lg mt-4">사는 지역과 출생 순위를 선택해 예상 지원금을 계산해 보세요</h2>
            <p className="mt-text-sub mt-3 max-w-3xl">
              제공해주신 2026년 전국 공통 지원금 기준과 제주도·경남·경북·전남·전북·충남·충북·경기·강원·세종·울산·대전·광주·인천·대구·부산·서울 지역별 상세 자료를 반영했습니다. 지역과 출생 순위를 선택하면 첫만남이용권, 부모급여, 아동수당, 가정양육수당, 지자체 출산지원금을 함께 계산합니다.
            </p>
          </div>
          <div className="rounded-3xl bg-white/80 p-4 text-sm text-slate-600 shadow-sm ring-1 ring-amber-100">
            <div className="font-semibold text-slate-800">자료 기준일</div>
            <div className="mt-1">{result.region.updatedAt}</div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <div className="relative">
            <label className="block" htmlFor="birth-support-region-search">
              <span className="text-sm font-semibold text-slate-700">거주 지역</span>
              <div className="relative mt-2">
                <span className="pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center pl-4 text-slate-400" aria-hidden="true">
                  <Search size={18} />
                </span>
                <input
                  id="birth-support-region-search"
                  type="text"
                  role="combobox"
                  aria-expanded={regionListOpen}
                  aria-controls="birth-support-region-options"
                  aria-autocomplete="list"
                  value={regionSearch}
                  onChange={(event) => {
                    setRegionSearch(event.target.value);
                    setRegionListOpen(true);
                  }}
                  onFocus={(event) => {
                    setRegionListOpen(true);
                    event.currentTarget.select();
                  }}
                  onBlur={() => {
                    window.setTimeout(() => {
                      setRegionListOpen(false);
                      setRegionSearch(selectedRegionLabel);
                    }, 120);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") {
                      setRegionListOpen(false);
                    }
                    if (event.key === "Enter" && filteredRegions[0]) {
                      event.preventDefault();
                      handleRegionSelect(filteredRegions[0]);
                    }
                  }}
                  placeholder="예: 서울 강남구, 부산 해운대구, 제주도"
                  className="block w-full appearance-none rounded-2xl border border-amber-100 bg-white py-3 pl-12 pr-4 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-amber-300 focus:ring-4 focus:ring-amber-100"
                />
              </div>
            </label>

            <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
              <MapPin size={14} />
              <span>총 {birthSupportRegions.length}개 지역 데이터에서 시·도, 시·군·구 이름으로 검색할 수 있습니다.</span>
            </div>

            {regionListOpen ? (
              <div
                id="birth-support-region-options"
                className="absolute z-30 mt-2 max-h-80 w-full overflow-y-auto rounded-3xl border border-amber-100 bg-white p-2 shadow-2xl"
              >
                {filteredRegions.length > 0 ? (
                  <div className="space-y-1">
                    {filteredRegions.map((region) => {
                      const selected = region.regionCode === regionCode;
                      return (
                        <button
                          key={region.regionCode}
                          type="button"
                          onMouseDown={(event) => event.preventDefault()}
                          onClick={() => handleRegionSelect(region)}
                          className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm transition ${
                            selected ? "bg-amber-100 text-amber-900" : "text-slate-700 hover:bg-amber-50"
                          }`}
                        >
                          <span className="font-semibold">{region.label}</span>
                          <span className="ml-3 shrink-0 text-xs text-slate-400">{selected ? "선택됨" : "선택"}</span>
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="rounded-2xl bg-slate-50 px-4 py-5 text-sm leading-7 text-slate-600">
                    검색 결과가 없습니다. 예를 들어 <b>서울 강남구</b>, <b>부산 해운대구</b>, <b>제주도</b>처럼 입력해 보세요.
                  </div>
                )}
              </div>
            ) : null}
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-700">출생 순위</div>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {birthOrderOptions.map((option) => {
                const selected = option === birthOrder;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setBirthOrder(option)}
                    className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                      selected
                        ? "border-amber-300 bg-amber-100 text-amber-900 shadow-sm"
                        : "border-slate-100 bg-white text-slate-600 hover:border-amber-200 hover:bg-amber-50"
                    }`}
                  >
                    {birthOrderLabels[option]}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-5 text-sm leading-7 text-slate-600">
            <div className="font-semibold text-slate-800">계산 기준</div>
            <p className="mt-2">
              총액은 첫만남이용권, 부모급여, 아동수당, 가정양육수당, 선택한 지역의 지자체 지원금을 합산했습니다. 부모급여는 0세 월 100만 원·1세 월 50만 원, 아동수당은 비수도권 월 10.5만 원, 가정양육수당은 조건부 월 10만 원 기준입니다.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-[2rem] bg-slate-900 p-6 text-white shadow-xl">
            <div className="flex items-center gap-3 text-sm font-semibold text-amber-200">
              <Calculator size={18} /> 예상 지원 가치
            </div>
            <div className="mt-5 text-4xl font-black tracking-tight md:text-5xl">{result.formattedTotal}</div>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {result.region.sido} {result.region.sigungu === "전체" ? "" : result.region.sigungu} 기준 {result.birthOrderLabel} 출산·양육 과정에서 받을 수 있는 전국 공통 지원과 지자체 지원의 누적 예상 금액입니다.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/10 p-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300"><WalletCards size={16} /> 현금성·계좌 지원</div>
                <div className="mt-2 text-2xl font-bold">{result.formattedCash}</div>
              </div>
              <div className="rounded-3xl bg-white/10 p-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300"><Landmark size={16} /> 바우처 지원</div>
                <div className="mt-2 text-2xl font-bold">{result.formattedVoucher}</div>
              </div>
              <div className="rounded-3xl bg-white/10 p-4">
                <div className="text-xs font-semibold text-slate-300">전국 공통 누적</div>
                <div className="mt-2 text-2xl font-bold">{result.formattedCommonSupport}</div>
              </div>
              <div className="rounded-3xl bg-white/10 p-4">
                <div className="text-xs font-semibold text-slate-300">지자체 추가 지원</div>
                <div className="mt-2 text-2xl font-bold">{result.formattedLocalSupport}</div>
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            {result.items.map((item) => (
              <article key={item.id} className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="text-xs font-semibold text-amber-600">{item.category} · {item.paymentType}</div>
                    <h3 className="mt-1 text-lg font-bold text-slate-900">{item.name}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.displayValue}</p>
                    {item.isConditional ? (
                      <p className="mt-2 inline-flex rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">조건부 지원: 어린이집·유치원 이용 여부 확인 필요</p>
                    ) : null}
                  </div>
                  <div className="shrink-0 rounded-2xl bg-amber-50 px-4 py-3 text-right">
                    <div className="text-xs text-slate-500">선택 기준</div>
                    <div className="text-xl font-black text-slate-900">{item.formattedAmount}</div>
                  </div>
                </div>
                <div className="mt-4 grid gap-3 text-sm leading-7 text-slate-600 md:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 p-4"><b className="text-slate-800">지원대상</b><br />{item.target}</div>
                  <div className="rounded-2xl bg-slate-50 p-4"><b className="text-slate-800">거주조건</b><br />{item.residenceCondition}</div>
                  <div className="rounded-2xl bg-slate-50 p-4"><b className="text-slate-800">신청기간</b><br />{item.applicationPeriod}</div>
                  <div className="rounded-2xl bg-slate-50 p-4"><b className="text-slate-800">신청방법</b><br />{item.applicationMethod}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 bg-white p-6 md:p-8">
        <h3 className="text-lg font-black text-slate-900">연령별 공통 지원 흐름</h3>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          아래 표는 2026년 전국 공통 지원금을 계산기 화면에서 바로 이해할 수 있도록 정리한 내용입니다. 첫만남이용권은 1회, 부모급여·아동수당·가정양육수당은 월 단위 지원으로 구분됩니다.
        </p>
        <div className="mt-5 overflow-x-auto rounded-3xl border border-slate-100">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-slate-50 text-xs font-semibold text-slate-500">
              <tr>
                <th className="px-4 py-3">연령</th>
                <th className="px-4 py-3">첫만남이용권</th>
                <th className="px-4 py-3">부모급여</th>
                <th className="px-4 py-3">아동수당</th>
                <th className="px-4 py-3">가정양육수당</th>
                <th className="px-4 py-3">월 기준 합계</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white text-slate-700">
              {commonMonthlySupportSchedule.map((row) => (
                <tr key={row.ageGroup}>
                  <td className="px-4 py-4 font-semibold text-slate-900">{row.ageGroup}<br /><span className="text-xs font-normal text-slate-500">{row.ageRange}</span></td>
                  <td className="px-4 py-4">{row.firstEncounterVoucher}</td>
                  <td className="px-4 py-4">{row.parentalBenefit}</td>
                  <td className="px-4 py-4">{row.childAllowance}</td>
                  <td className="px-4 py-4">{row.homeCareAllowance}</td>
                  <td className="px-4 py-4 font-bold text-slate-900">{row.monthlyTotalText}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="border-t border-amber-100 bg-amber-50/60 p-6 md:p-8">
        <div className="flex items-start gap-3 rounded-3xl bg-white p-5 text-sm leading-7 text-slate-600 shadow-sm">
          <CheckCircle2 className="mt-1 shrink-0 text-amber-600" size={20} />
          <div>
            <b className="text-slate-900">신청 전 꼭 확인하세요.</b> 지자체 출산지원금은 지역에 따라 일시금, 분할 지급, 지역화폐, 선불카드, 현물 지원으로 달라질 수 있습니다. 부모급여는 어린이집 이용 시 보육료 차감 후 차액이 지급되고, 가정양육수당은 보육서비스 이용 여부에 따라 실제 지급 여부가 달라질 수 있으므로 신청 전 주민센터 또는 담당 부서 안내를 다시 확인해야 합니다.
          </div>
        </div>
      </div>
    </section>
  );
}
