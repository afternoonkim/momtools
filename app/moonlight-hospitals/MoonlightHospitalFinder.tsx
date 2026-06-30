"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { MapPin, PhoneCall, Search, X } from "lucide-react";
import {
  getMoonlightHospitalAreaPath,
  moonlightHospitalCityAreas,
  moonlightHospitalRegionAreas,
  moonlightHospitals,
  moonlightHospitalRegions,
  type MoonlightHospital,
} from "@/data/moonlightHospitals";

function normalize(value: string) {
  return value.toLowerCase().replace(/\s+/g, "").trim();
}

function getMapUrl(hospital: MoonlightHospital) {
  return `https://map.naver.com/p/search/${encodeURIComponent(hospital.mapQuery)}`;
}

export default function MoonlightHospitalFinder() {
  const searchParams = useSearchParams();
  const [selectedRegion, setSelectedRegion] = useState("전체");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const regionParam = searchParams.get("region")?.trim();
    const queryParam = searchParams.get("q")?.trim();
    if (regionParam && moonlightHospitalRegions.some((region) => region.name === regionParam)) {
      setSelectedRegion(regionParam);
    }
    if (queryParam) setQuery(queryParam);
  }, [searchParams]);
  const normalizedQuery = normalize(query);

  const filteredHospitals = useMemo(() => {
    return moonlightHospitals.filter((hospital) => {
      const matchesRegion = selectedRegion === "전체" || hospital.region === selectedRegion;
      const matchesQuery =
        !normalizedQuery ||
        normalize([hospital.name, hospital.region, hospital.regionShort, hospital.city, hospital.address, hospital.phone].join(" ")).includes(normalizedQuery);
      return matchesRegion && matchesQuery;
    });
  }, [normalizedQuery, selectedRegion]);

  const hasFilter = selectedRegion !== "전체" || query.trim().length > 0;

  return (
    <section className="space-y-4" aria-label="달빛아동병원 찾기">
      <div className="mt-app-stack">
        <div className="mt-app-stack-section">
          <h2 className="mt-app-section-title">지역으로 찾기</h2>
          <p className="mt-app-section-desc">가까운 시·도를 선택하거나 병원명, 주소 일부를 입력해 보세요.</p>
        </div>

        <div className="mt-app-stack-section bg-amber-50/40">
          <label htmlFor="moonlight-search" className="sr-only">달빛아동병원 검색</label>
          <div className="flex items-center gap-2 rounded-2xl border border-amber-100 bg-white px-3 py-2.5 transition focus-within:border-amber-300 focus-within:ring-4 focus-within:ring-amber-100">
            <Search className="h-4 w-4 shrink-0 text-amber-600" aria-hidden="true" />
            <input
              id="moonlight-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="예: 강남, 용인, 병원명"
              className="min-w-0 flex-1 bg-transparent py-1 text-[13px] text-slate-800 outline-none placeholder:text-slate-400"
            />
            {hasFilter ? (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setSelectedRegion("전체");
                }}
                className="rounded-full bg-amber-50 p-2 text-amber-800"
                aria-label="검색 조건 지우기"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            ) : null}
          </div>

          <label htmlFor="moonlight-region" className="mt-3 block text-[12px] font-bold text-slate-600">
            지역 선택
          </label>
          <select
            id="moonlight-region"
            value={selectedRegion}
            onChange={(event) => setSelectedRegion(event.target.value)}
            className="mt-1 w-full rounded-2xl border border-amber-100 bg-white px-3 py-2.5 text-[13px] font-bold text-slate-800 outline-none focus:border-amber-300 focus:ring-4 focus:ring-amber-100"
          >
            <option value="전체">전국</option>
            {moonlightHospitalRegions.map((region) => (
              <option key={region.name} value={region.name}>
                {region.shortName}
              </option>
            ))}
          </select>

          <div className="mt-3 flex gap-2 overflow-x-auto pb-1" aria-label="지역 빠른 선택">
            <button
              type="button"
              onClick={() => setSelectedRegion("전체")}
              aria-pressed={selectedRegion === "전체"}
              className={`shrink-0 rounded-full border px-3 py-1.5 text-[12px] font-bold transition ${
                selectedRegion === "전체" ? "border-amber-400 bg-amber-100 text-amber-900" : "border-amber-100 bg-white text-slate-600"
              }`}
            >
              전국
            </button>
            {moonlightHospitalRegions.map((region) => {
              const isActive = selectedRegion === region.name;
              return (
                <button
                  key={region.name}
                  type="button"
                  onClick={() => setSelectedRegion(region.name)}
                  aria-pressed={isActive}
                  className={`shrink-0 rounded-full border px-3 py-1.5 text-[12px] font-bold transition ${
                    isActive ? "border-amber-400 bg-amber-100 text-amber-900" : "border-amber-100 bg-white text-slate-600"
                  }`}
                >
                  {region.shortName}
                </button>
              );
            })}
          </div>
        </div>
      </div>


      <section className="mt-app-stack" aria-label="지역별 달빛아동병원 검색 페이지">
        <div className="mt-app-stack-section">
          <h2 className="mt-app-section-title">지역별 달빛아동병원 바로가기</h2>
          <p className="mt-app-section-desc">네이버에서 자주 찾는 지역명 기준으로 바로 확인할 수 있게 정리했어요.</p>
        </div>
        <div className="px-4 py-3">
          <div className="flex flex-wrap gap-2" aria-label="시도별 달빛아동병원">
            {moonlightHospitalRegionAreas.map((area) => (
              <Link
                key={area.slug}
                href={getMoonlightHospitalAreaPath(area)}
                className="rounded-full border border-amber-100 bg-white px-3 py-1.5 text-[12px] font-bold text-slate-700"
              >
                {area.label}
              </Link>
            ))}
          </div>
          <details className="mt-3 rounded-2xl border border-amber-100 bg-amber-50/40 px-3 py-2">
            <summary className="cursor-pointer text-[12px] font-extrabold text-amber-800">시·군·구별 페이지 보기</summary>
            <div className="mt-3 flex flex-wrap gap-2">
              {moonlightHospitalCityAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={getMoonlightHospitalAreaPath(area)}
                  className="rounded-full border border-amber-100 bg-white px-3 py-1.5 text-[12px] font-bold text-slate-700"
                >
                  {area.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </section>

      <div className="mt-app-stack" aria-live="polite">
        <div className="mt-app-stack-section">
          <h2 className="mt-app-section-title">확인된 병원 목록</h2>
          <p className="mt-app-section-desc">방문 전 운영시간과 진료 가능 여부를 전화로 먼저 확인해 주세요.</p>
        </div>

        {filteredHospitals.length > 0 ? (
          <div className="divide-y divide-slate-100">
            {filteredHospitals.map((hospital) => (
              <article key={hospital.id} className="px-4 py-3.5">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold text-amber-600">
                      {hospital.regionShort} · {hospital.city}
                    </div>
                    <h3 className="mt-1 text-[13.5px] font-extrabold leading-5 text-slate-900">{hospital.name}</h3>
                  </div>
                  <a
                    href={`tel:${hospital.phoneHref}`}
                    className="inline-flex min-h-9 shrink-0 items-center justify-center gap-1.5 rounded-full bg-amber-500 px-3 text-[12px] font-extrabold text-white shadow-sm active:scale-[0.98]"
                    aria-label={`${hospital.name} 전화 연결`}
                  >
                    <PhoneCall className="h-3.5 w-3.5" aria-hidden="true" />
                    전화
                  </a>
                </div>

                <p className="mt-2 text-[12.5px] leading-5 text-slate-500">{hospital.address}</p>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <a href={`tel:${hospital.phoneHref}`} className="rounded-full bg-amber-50 px-2.5 py-1 text-[11.5px] font-bold text-amber-800" aria-label={`${hospital.name} 전화번호 ${hospital.phone}로 연결`}>{hospital.phone}</a>
                  <a
                    href={getMapUrl(hospital)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-amber-100 bg-white px-2.5 py-1 text-[11.5px] font-bold text-slate-600"
                  >
                    <MapPin className="h-3.5 w-3.5 text-amber-600" aria-hidden="true" />
                    지도에서 보기
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-app-stack-section text-center">
            <h3 className="text-[14px] font-extrabold text-slate-900">해당 조건의 병원을 찾지 못했어요</h3>
            <p className="mt-1 text-[13px] leading-6 text-slate-600">지역 선택을 전국으로 바꾸거나 검색어를 더 짧게 입력해 보세요.</p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setSelectedRegion("전체");
              }}
              className="mt-3 rounded-2xl bg-amber-600 px-4 py-2.5 text-[13px] font-bold text-white"
            >
              전체 보기
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
