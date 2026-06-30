import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, PhoneCall } from "lucide-react";
import MedicalDisclaimer from "@/components/common/MedicalDisclaimer";
import { buildCanonical } from "@/lib/content-meta";
import {
  getMoonlightHospitalAreaBySlug,
  getMoonlightHospitalAreaPath,
  getMoonlightHospitalSiblingAreas,
  moonlightHospitalAreas,
  type MoonlightHospital,
} from "@/data/moonlightHospitals";

type Params = { area: string };

function getMapUrl(hospital: MoonlightHospital) {
  return `https://map.naver.com/p/search/${encodeURIComponent(hospital.mapQuery)}`;
}

export function generateStaticParams() {
  return moonlightHospitalAreas.map((area) => ({ area: area.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { area: areaSlug } = await params;
  const area = getMoonlightHospitalAreaBySlug(areaSlug);
  if (!area) return {};

  const pagePath = getMoonlightHospitalAreaPath(area);
  const title = `${area.label} 달빛아동병원 | 주소 전화번호 바로 확인 | MomTools`;

  return {
    title,
    description: area.description,
    keywords: area.keywords,
    alternates: { canonical: buildCanonical(pagePath) },
    openGraph: {
      title,
      description: area.description,
      url: buildCanonical(pagePath),
      siteName: "MomTools",
      locale: "ko_KR",
      type: "website",
    },
  };
}

export default async function MoonlightHospitalAreaPage({ params }: { params: Promise<Params> }) {
  const { area: areaSlug } = await params;
  const area = getMoonlightHospitalAreaBySlug(areaSlug);
  if (!area) notFound();

  const pagePath = getMoonlightHospitalAreaPath(area);
  const siblingAreas = getMoonlightHospitalSiblingAreas(area);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${buildCanonical(pagePath)}#webpage`,
    name: `${area.label} 달빛아동병원`,
    description: area.description,
    inLanguage: "ko-KR",
    url: buildCanonical(pagePath),
    about: ["달빛아동병원", "소아 야간진료", "휴일 소아진료"],
    mainEntity: {
      "@type": "ItemList",
      itemListElement: area.hospitals.map((hospital, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "MedicalClinic",
          name: hospital.name,
          address: hospital.address,
          telephone: hospital.phone,
          areaServed: `${hospital.regionShort} ${hospital.city}`,
        },
      })),
    },
  };

  return (
    <div className="mt-page">
      <div className="mt-container space-y-5 md:space-y-6">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <nav className="flex flex-wrap items-center gap-2 text-[12px] font-bold text-slate-500" aria-label="breadcrumb">
          <Link href="/" className="hover:text-amber-700">홈</Link>
          <span>/</span>
          <Link href="/qna" className="hover:text-amber-700">확인하기</Link>
          <span>/</span>
          <Link href="/moonlight-hospitals" className="hover:text-amber-700">달빛아동병원</Link>
          <span>/</span>
          <span className="text-slate-700">{area.label}</span>
        </nav>

        <section className="mt-page-hero">
          <span className="mt-badge">{area.label} 달빛아동병원</span>
          <h1 className="mt-title-xl mt-4">{area.label} 달빛아동병원 주소와 전화번호</h1>
          <p className="mt-text-main mt-3 max-w-3xl">
            {area.label}에서 야간이나 휴일에 아이 진료가 필요할 때 확인할 수 있는 달빛아동병원입니다. 모바일에서는 전화번호를 누르면 바로 연결할 수 있어요.
          </p>
        </section>

        <MedicalDisclaimer lang="ko" variant="compact" />

        <section className="mt-mobile-note">
          <strong className="text-slate-900">방문 전 먼저 확인하세요</strong>
          <p className="mt-1">
            운영일, 접수 마감, 진료 가능 연령은 병원 사정에 따라 달라질 수 있습니다. 이동하기 전에 전화로 운영 여부를 먼저 확인하는 것이 안전합니다.
          </p>
        </section>

        <section className="mt-app-stack" aria-label={`${area.label} 달빛아동병원 목록`}>
          <div className="mt-app-stack-section">
            <h2 className="mt-app-section-title">{area.label}에서 확인할 수 있는 병원</h2>
            <p className="mt-app-section-desc">주소를 확인한 뒤 전화로 운영 여부와 접수 시간을 먼저 문의해 주세요.</p>
          </div>

          <div className="divide-y divide-slate-100">
            {area.hospitals.map((hospital) => (
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
                  <a
                    href={`tel:${hospital.phoneHref}`}
                    className="rounded-full bg-amber-50 px-2.5 py-1 text-[11.5px] font-bold text-amber-800"
                    aria-label={`${hospital.name} 전화번호 ${hospital.phone}로 연결`}
                  >
                    {hospital.phone}
                  </a>
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
        </section>

        <section className="mt-app-stack" aria-label="다른 지역 달빛아동병원">
          <div className="mt-app-stack-section">
            <h2 className="mt-app-section-title">다른 지역도 확인하기</h2>
            <p className="mt-app-section-desc">가까운 생활권이나 같은 시·도의 달빛아동병원도 함께 확인해 보세요.</p>
          </div>
          <div className="flex flex-wrap gap-2 px-4 pb-4">
            <Link href="/moonlight-hospitals" className="rounded-full border border-amber-100 bg-white px-3 py-1.5 text-[12px] font-bold text-slate-700">
              전국 보기
            </Link>
            {siblingAreas.map((item) => (
              <Link key={item.slug} href={getMoonlightHospitalAreaPath(item)} className="rounded-full border border-amber-100 bg-white px-3 py-1.5 text-[12px] font-bold text-slate-700">
                {item.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
