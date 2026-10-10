import type { Metadata } from "next";
import Link from "next/link";
import NewbornInfoClient from "./NewbornInfoClient";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import MedicalDisclaimer from "@/components/common/MedicalDisclaimer";
import RelatedContent from "@/components/common/RelatedContent";
import { buildCanonical, getPageDates } from "@/lib/content-meta";
import AdFitAd from "@/components/ads/AdFitAd";
import { ADFIT_UNITS } from "@/lib/adfit";

const pageDates = getPageDates("/info/newborn");

export const metadata: Metadata = {
  title: "신생아 정보 | 수유 수면 황달 배변 안전 가이드 | MomTools",
  description:
    "신생아 시기에 자주 확인하는 수유, 안전한 수면 환경, 체온, 황달, 배변, 병원 상담 신호를 한눈에 정리한 MomTools 신생아 정보 페이지입니다.",
  keywords: ["신생아 정보", "신생아 수유", "신생아 수면", "신생아 황달", "신생아 배변", "영아돌연사 예방", "MomTools"],
  alternates: { canonical: buildCanonical("/info/newborn") },
  openGraph: {
    title: "신생아 정보 | 수유 수면 황달 배변 안전 가이드 | MomTools",
    description: "신생아 시기에 자주 확인하는 수유, 안전한 수면, 황달, 배변 체크포인트를 한눈에 정리해보세요.",
    url: buildCanonical("/info/newborn"),
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function NewbornPage() {
  return (
    <div className="space-y-8">
      <NewbornInfoClient />

      <div className="mt-container-narrow space-y-5">
        <MedicalDisclaimer lang="ko" variant="compact" />

        <section className="rounded-3xl border border-sky-100 bg-sky-50 p-5 md:p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">안전한 수면</div>
          <h2 className="mt-2 text-lg font-extrabold text-slate-900">수면 시간보다 수면 환경을 먼저 확인하세요</h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
            <li>• 아기는 등을 대고 바로 눕혀 재우는 것이 기본입니다.</li>
            <li>• 단단하고 평평한 수면 표면을 사용하고, 베개·쿠션·두꺼운 이불·인형 같은 부드러운 물건은 수면 공간에 두지 않습니다.</li>
            <li>• 엎드려 재우거나 경사진 쿠션·수면 보조기구로 자세를 고정하지 않습니다.</li>
            <li>• 과하게 덥게 입히거나 덮지 말고 얼굴과 머리가 가려지지 않게 합니다.</li>
            <li>• 호흡이 힘들어 보이거나 입술색 변화, 심한 처짐, 깨우기 어려움이 있으면 온라인 정보보다 진료·응급 상담을 우선하세요.</li>
          </ul>
          <a
            href="https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=5467"
            target="_blank"
            rel="noreferrer"
            className="mt-chip-link mt-4 inline-flex"
          >
            질병관리청 영아돌연사증후군 안내
          </a>
        </section>
      </div>

      <AdFitAd {...ADFIT_UNITS.contentMedium} />

      <ContentUpdateNote
        publishedOn={pageDates.published}
        updatedOn={pageDates.updated}
        note="2026년 10월 안전성 재검토에서 신생아 수면 환경과 응급 신호 안내를 질병관리청 기준에 맞춰 보강했습니다."
      />

      <div className="mt-container-narrow space-y-8">
        <section className="mt-card p-6 md:p-8">
          <span className="mt-badge">추가 안내</span>
          <h2 className="mt-title-lg mt-4">신생아 시기에는 전체 흐름으로 보는 것이 중요해요</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            <p>신생아 시기에는 수유량 하나만 따로 보기보다 수면, 배변, 체중, 보챔, 피부색, 반응성까지 함께 보는 것이 중요합니다.</p>
            <p>정상 범위를 혼자 단정하기보다 내 아이의 흐름을 기록하고 영유아 건강검진이나 진료 시 의료진과 함께 확인하세요.</p>
            <p>수유 거부, 축 처짐, 발열, 심한 구토, 호흡 이상처럼 걱정되는 신호는 온라인 정보보다 진료가 우선입니다.</p>
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">관련 페이지</div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <RelatedLink href="/tools/baby-age" title="아기 개월수 계산기" description="신생아 월령 기준 흐름을 확인할 때 함께 쓰기 좋은 기본 계산기예요." />
            <RelatedLink href="/tools/vaccine-schedule" title="예방접종 일정 계산기" description="출생 직후부터 주요 접종 시기를 월령 기준으로 참고할 수 있어요." />
            <RelatedLink href="/checklists/newborn" title="신생아 준비 체크리스트" description="집으로 아기를 맞이하기 전에 필요한 준비물을 실제로 점검할 수 있어요." />
            <RelatedLink href="/info/weaning" title="이유식 정보" description="개월수가 지나면 다음 단계로 이어지는 이유식 흐름도 함께 볼 수 있어요." />
          </div>
        </section>

        <RelatedContent
          locale="ko"
          title="함께 보면 좋은 페이지"
          description="관련 계산기, 정보, 체크리스트를 같이 보면 한 가지 질문을 더 쉽게 정리할 수 있어요."
          items={[
            { href: "/tools/baby-age", title: "아기 개월수 계산기", description: "개월수 기준으로 수면, 수유, 발달 흐름을 볼 때 편리해요." },
            { href: "/qna/health", title: "건강 Q&A", description: "체온, 배변, 수유처럼 처음 자주 마주치는 질문을 함께 확인해 보세요." },
            { href: "/checklists/newborn", title: "신생아 준비 체크리스트", description: "집에서 바로 챙겨야 하는 준비물을 순서대로 정리할 수 있어요." },
            { href: "/info/weaning", title: "이유식 정보", description: "개월 수가 지나면서 다음 단계로 이어질 때 보기 좋아요." },
          ]}
        />
      </div>
    </div>
  );
}

function RelatedLink({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link href={href} className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200">
      <div className="font-semibold text-slate-800">{title}</div>
      <div className="mt-2 text-sm leading-7 text-slate-500">{description}</div>
    </Link>
  );
}
