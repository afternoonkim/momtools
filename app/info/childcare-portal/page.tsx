import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Baby, Building2, CheckCircle2, HeartPulse, Landmark, MessageCircleQuestion, SearchCheck } from "lucide-react";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import MedicalDisclaimer from "@/components/common/MedicalDisclaimer";
import {
  CHILDCARE_PORTAL_SOURCE_URL,
  CHILDCARE_PORTAL_VERIFIED_AT,
  childcarePortalQuickSteps,
  childcarePortalSections,
  childcarePortalServices,
} from "@/data/childcarePortal";
import { childcarePortalGuides } from "@/data/childcarePortalGuides";
import { buildCanonical, SITE_DATES } from "@/lib/content-meta";
import AdFitAd from "@/components/ads/AdFitAd";
import { ADFIT_UNITS } from "@/lib/adfit";

export const metadata: Metadata = {
  title: "아이사랑 공식정보 활용 가이드 | 임신 출산 육아 어린이집 정보 | MomTools",
  description:
    "임신육아종합포털 아이사랑에서 확인할 수 있는 임신, 출산, 육아, 어린이집, 상담, 건강정보를 부모가 실제로 찾는 흐름에 맞춰 정리했습니다.",
  keywords: [
    "아이사랑",
    "임신육아종합포털",
    "어린이집 찾기",
    "입소대기",
    "국민행복카드",
    "시간제보육",
    "육아 상담",
    "임신 출산 육아 정보",
  ],
  alternates: { canonical: buildCanonical("/info/childcare-portal") },
  openGraph: {
    title: "아이사랑 공식정보 활용 가이드 | MomTools",
    description: "아이사랑의 접근 가능한 정보성 메뉴를 부모가 찾기 쉬운 흐름으로 다시 정리했습니다.",
    url: buildCanonical("/info/childcare-portal"),
    siteName: "MomTools",
    locale: "ko_KR",
    type: "article",
  },
};

const sectionIcons = [Baby, Landmark, HeartPulse, Building2, MessageCircleQuestion, SearchCheck];

export default function ChildcarePortalGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "아이사랑 공식정보 활용 가이드",
    description: "임신육아종합포털 아이사랑의 주요 정보성 메뉴를 부모가 실제로 찾기 쉬운 흐름으로 정리한 안내입니다.",
    datePublished: SITE_DATES.published,
    dateModified: CHILDCARE_PORTAL_VERIFIED_AT,
    mainEntityOfPage: buildCanonical("/info/childcare-portal"),
    publisher: { "@type": "Organization", name: "MomTools" },
  };

  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <section className="mt-card overflow-hidden p-6 md:p-10">
          <div className="grid gap-7 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <span className="mt-badge">공식 육아정보 빠른 길잡이</span>
              <h1 className="mt-title-xl mt-5">아이사랑에서 볼 수 있는 정보, 필요한 순서대로 확인해 보세요</h1>
              <p className="mt-text-main mt-4 max-w-4xl">
                임신육아종합포털 아이사랑에는 임신, 출산, 육아, 어린이집, 상담, 건강정보처럼 부모가 실제로 자주 찾는 공식 메뉴가 모여 있습니다.
                이 페이지는 부모가 먼저 알아야 할 핵심 기준을 MomTools 안에서 바로 확인하고, 신청·상담·결제처럼 최종 확인이 필요한 단계는 공식 메뉴로 이어갈 수 있도록 정리했습니다.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a href={CHILDCARE_PORTAL_SOURCE_URL} target="_blank" rel="noopener noreferrer" className="mt-button-primary min-h-12 px-4 text-sm sm:text-base">
                  아이사랑 공식 사이트 열기
                </a>
                <Link href="/tools" className="mt-button-secondary min-h-12 px-4 text-sm sm:text-base">
                  먼저 계산기로 확인하기
                </Link>
              </div>
            </div>
            <div className="rounded-[28px] border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-sky-50 p-5 md:p-6">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
                <CheckCircle2 className="h-5 w-5 text-amber-600" aria-hidden="true" />
                이렇게 보면 덜 헷갈려요
              </div>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                {childcarePortalQuickSteps.map((step, index) => (
                  <div key={step} className="rounded-2xl bg-white/90 px-4 py-3 shadow-sm">
                    <span className="mr-2 font-bold text-amber-700">{index + 1}</span>
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      <AdFitAd {...ADFIT_UNITS.contentMedium} />

        <ContentUpdateNote
          publishedOn={SITE_DATES.published}
          updatedOn={CHILDCARE_PORTAL_VERIFIED_AT}
          note="아이사랑 공식 사이트의 접근 가능한 메뉴 구조를 확인해 부모가 찾기 쉬운 흐름으로 재정리했습니다. 신청, 상담, 금액, 이용 가능 여부는 공식 사이트와 담당 기관 안내를 최종 기준으로 확인해 주세요."
        />

        <MedicalDisclaimer lang="ko" variant="compact" />

        <section className="mt-card p-6 md:p-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mt-badge">상황별 공식정보 연결</span>
              <h2 className="mt-title-lg mt-3">지금 필요한 메뉴를 먼저 고르세요</h2>
            </div>
            <a href={CHILDCARE_PORTAL_SOURCE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-amber-700">
              공식 메인 보기 <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {childcarePortalSections.map((section, index) => {
              const Icon = sectionIcons[index] ?? SearchCheck;
              return (
                <article key={section.id} className="rounded-[28px] border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold leading-7 text-slate-900">{section.title}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-amber-700">{section.subtitle}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{section.description}</p>

                  <div className="mt-4 rounded-2xl bg-slate-50 px-4 py-3">
                    <div className="text-xs font-bold text-slate-700">이럴 때 확인해요</div>
                    <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-600">
                      {section.useWhen.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {section.momtoolsLinks.map((link) => (
                      <Link key={link.href} href={link.href} className="rounded-full bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-700">
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  <a href={section.officialUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-1 text-sm font-bold text-slate-800">
                    공식 메뉴에서 최종 확인 <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-card p-6 md:p-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mt-badge">MomTools에서 바로 읽는 활용 가이드</span>
              <h2 className="mt-title-lg mt-3">링크로 이동하기 전에 핵심 내용을 먼저 확인하세요</h2>
              <p className="mt-text-main mt-3 max-w-3xl">
                어린이집 찾기, 입소대기, 국민행복카드, 시간제보육처럼 부모가 자주 헷갈리는 주제는
                MomTools 안에서 먼저 읽을 수 있도록 따로 정리했습니다. 공식 신청과 최신 조건 확인이 필요할 때만 아이사랑 메뉴로 이어가면 됩니다.
              </p>
            </div>
            <Link href="/checklists/daycare" className="mt-button-secondary min-h-11 px-4 text-sm">
              등원 준비도 함께 보기
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {childcarePortalGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/info/childcare-portal/${guide.slug}`}
                className="rounded-[28px] border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200"
              >
                <div className="text-xs font-bold text-amber-700">{guide.topic}</div>
                <h3 className="mt-3 text-lg font-bold leading-7 text-slate-900">{guide.shortTitle}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">{guide.quickAnswer}</p>
                <div className="mt-4 inline-flex min-h-11 items-center text-sm font-bold text-slate-800">
                  MomTools에서 먼저 보기 →
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <span className="mt-badge">자주 쓰는 공식 서비스</span>
              <h2 className="mt-title-lg mt-3">신청이나 상담으로 이어질 때 바로 확인하세요</h2>
              <p className="mt-text-main mt-3">
                정보성 글을 읽은 뒤 실제 신청, 상담, 시설 검색으로 넘어가야 할 때가 많습니다.
                아래 링크는 부모가 자주 찾는 공식 경로만 골라 연결했습니다.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {childcarePortalServices.map((service) => (
                <a
                  key={service.officialUrl}
                  href={service.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl border border-white bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">{service.badge}</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-400" aria-hidden="true" />
                  </div>
                  <div className="mt-3 font-bold text-slate-900">{service.title}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-md">MomTools 안에서는 이렇게 이어서 보면 좋아요</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <Link href="/tools/baby-age" className="mt-list-card">
              <div className="font-semibold text-slate-900">개월수부터 확인</div>
              <div className="mt-2 text-sm leading-6 text-slate-500">아이 나이를 정확히 계산한 뒤 월령별 가이드와 접종 일정을 이어서 볼 수 있어요.</div>
            </Link>
            <Link href="/policy" className="mt-list-card">
              <div className="font-semibold text-slate-900">지원정책 먼저 정리</div>
              <div className="mt-2 text-sm leading-6 text-slate-500">부모급여, 아동수당, 첫만남이용권, 돌봄 지원을 신청 전 체크 기준으로 확인해요.</div>
            </Link>
            <Link href="/checklists/daycare" className="mt-list-card">
              <div className="font-semibold text-slate-900">등원 준비 확인</div>
              <div className="mt-2 text-sm leading-6 text-slate-500">어린이집 준비물, 적응 포인트, 서류를 한 번에 정리할 수 있어요.</div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
