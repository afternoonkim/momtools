import type { Metadata } from "next";
import Link from "next/link";
import NewbornInfoClient from "./NewbornInfoClient";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import RelatedContent from "@/components/common/RelatedContent";
import { buildCanonical, SITE_DATES } from "@/lib/content-meta";

export const metadata: Metadata = {
  title: "신생아 정보 | 수유 수면 황달 배변 체크 가이드 | MomTools",
  description:
    "신생아 시기에 자주 확인하는 수유, 수면, 체온, 황달, 배변, 병원 상담 신호를 한눈에 정리해보세요. 초보 부모가 보기 쉽게 핵심 체크포인트를 모은 MomTools 신생아 정보 페이지입니다.",
  keywords: [
    "신생아 정보",
    "신생아 수유",
    "신생아 수면",
    "신생아 황달",
    "신생아 배변",
    "MomTools",
  ],
  alternates: {
    canonical: buildCanonical("/info/newborn"),
  },
  openGraph: {
    title: "신생아 정보 | 수유 수면 황달 배변 체크 가이드 | MomTools",
    description:
      "신생아 시기에 자주 확인하는 수유, 수면, 체온, 황달, 배변, 병원 상담 신호를 한눈에 정리해보세요.",
    url: buildCanonical("/info/newborn"),
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "신생아 정보 | MomTools",
    description:
      "신생아 시기에 자주 확인하는 수유, 수면, 황달, 배변 체크포인트를 한눈에 정리해보세요.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function NewbornPage() {
  return (
    <div className="space-y-8">
      <NewbornInfoClient />

      <ContentUpdateNote publishedOn={SITE_DATES.published} updatedOn={SITE_DATES.updated} />

      <div className="mt-container-narrow space-y-8">

        <section className="mt-card p-6 md:p-8">
          <span className="mt-badge">추가 안내</span>
          <h2 className="mt-title-lg mt-4">신생아 시기에는 전체 흐름으로 보는 것이 중요해요</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            <p>
              신생아 시기에는 수유량 하나만 따로 보기보다 수면, 배변, 체중, 보챔, 피부색,
              반응성까지 함께 보는 것이 훨씬 중요합니다. 하루하루 변화가 커 보여도 전체 흐름을
              며칠 단위로 보면 조금 더 안정적으로 판단할 수 있습니다.
            </p>
            <p>
              특히 초보 부모 입장에서는 정상 범위인지 아닌지가 가장 궁금할 수 있지만,
              실제로는 아기마다 차이가 큰 시기이기 때문에 단순 비교보다 내 아이의 흐름을 기록하고
              병원 안내와 함께 보는 접근이 훨씬 현실적입니다.
            </p>
            <p>
              수유 거부, 축 처짐, 열, 심한 구토, 호흡 이상처럼 걱정되는 신호는 온라인 정보보다
              진료가 더 중요하다는 점도 꼭 기억해 두는 것이 좋습니다.
            </p>
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
            관련 페이지
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <RelatedLink
              href="/tools/baby-age"
              title="아기 개월수 계산기"
              description="신생아 월령 기준 흐름을 확인할 때 함께 쓰기 좋은 기본 계산기예요."
            />
            <RelatedLink
              href="/tools/vaccine-schedule"
              title="예방접종 일정 계산기"
              description="출생 직후부터 주요 접종 시기를 월령 기준으로 참고할 수 있어요."
            />
            <RelatedLink
              href="/checklists/newborn"
              title="신생아 준비 체크리스트"
              description="집으로 아기를 맞이하기 전에 필요한 준비물을 실제로 점검할 수 있어요."
            />
            <RelatedLink
              href="/info/weaning"
              title="이유식 정보"
              description="개월수가 지나면 다음 단계로 이어지는 이유식 흐름도 함께 볼 수 있어요."
            />
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
            { href: "/info/weaning", title: "이유식 정보", description: "개월 수가 지나면서 다음 단계로 이어질 때 보기 좋아요." }
          ]}
        />
      </div>
    </div>
  );
}

function RelatedLink({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
    >
      <div className="font-semibold text-slate-800">{title}</div>
      <div className="mt-2 text-sm leading-7 text-slate-500">{description}</div>
    </Link>
  );
}