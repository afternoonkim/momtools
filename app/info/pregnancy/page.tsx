import type { Metadata } from "next";
import Link from "next/link";
import PregnancyInfoClient from "./PregnancyInfoClient";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import RelatedContent from "@/components/common/RelatedContent";
import { buildCanonical, SITE_DATES } from "@/lib/content-meta";

export const metadata: Metadata = {
  title: "임신 정보 | 주차별 체크포인트와 준비 가이드 | MomTools",
  description:
    "임신 초기, 중기, 후기에 꼭 확인하면 좋은 체크포인트와 생활 팁을 한눈에 정리해보세요. 진료 일정, 준비물, 생활 습관, 출산 준비 흐름까지 MomTools 임신 정보 페이지에서 확인할 수 있습니다.",
  keywords: [
    "임신 정보",
    "임신 초기 증상",
    "임신 중기 체크리스트",
    "임신 후기 준비",
    "출산 준비",
    "MomTools",
  ],
  alternates: {
    canonical: buildCanonical("/info/pregnancy"),
  },
  openGraph: {
    title: "임신 정보 | 주차별 체크포인트와 준비 가이드 | MomTools",
    description:
      "임신 초기, 중기, 후기별 체크포인트와 생활 팁을 한눈에 확인해보세요.",
    url: buildCanonical("/info/pregnancy"),
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "임신 정보 | MomTools",
    description:
      "임신 초기, 중기, 후기별 체크포인트와 준비 가이드를 한눈에 확인해보세요.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PregnancyPage() {
  return (
    <div className="space-y-8">
      <PregnancyInfoClient />

      <ContentUpdateNote publishedOn={SITE_DATES.published} updatedOn={SITE_DATES.updated} />

      <div className="mt-container-narrow space-y-8">

        <section className="mt-card p-6 md:p-8">
          <span className="mt-badge">추가 안내</span>
          <h2 className="mt-title-lg mt-4">임신 정보 페이지를 더 잘 활용하는 방법</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            <p>
              이 페이지의 핵심은 임신 초기, 중기, 후기 흐름을 한 번에 파악하는 데 있습니다.
              임신 시기마다 병원 진료 일정, 생활 습관, 몸의 변화, 준비해야 할 물건이 달라지기 때문에
              한 시기만 따로 보기보다 전체 흐름으로 연결해서 보는 편이 훨씬 이해하기 쉽습니다.
            </p>
            <p>
              특히 출산 준비는 막달에 몰아서 하기보다 임신 중기부터 조금씩 정리해두는 것이 좋습니다.
              출산 예정일, 입원 가방, 신생아 준비물, 보호자 일정처럼 실제 생활과 연결되는 부분까지
              같이 보면 훨씬 덜 급하게 준비할 수 있습니다.
            </p>
            <p>
              다만 이 페이지는 일반적인 참고 정보이며, 출혈, 심한 복통, 태동 변화처럼 건강 상태와 직접
              연결되는 부분은 반드시 병원과 의료진 안내를 먼저 따라야 합니다.
            </p>
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
            관련 페이지
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <RelatedLink
              href="/tools/due-date"
              title="출산 예정일 계산기"
              description="예정일과 임신 주수 흐름을 먼저 확인하고 이 페이지를 보면 준비 순서를 잡기 쉬워요."
            />
            <RelatedLink
              href="/checklists/birth"
              title="출산 준비 체크리스트"
              description="임신 후기에는 실제 준비물을 체크리스트와 함께 정리하면 훨씬 편합니다."
            />
            <RelatedLink
              href="/info/newborn"
              title="신생아 정보"
              description="출산 이후 이어서 보게 되는 수유, 수면, 체중 흐름을 함께 확인할 수 있어요."
            />
            <RelatedLink
              href="/faq"
              title="FAQ"
              description="MomTools 계산기와 정보 페이지를 어떻게 참고하면 좋은지 확인할 수 있어요."
            />
          </div>
        </section>
      

        <RelatedContent
          locale="ko"
          title="함께 보면 좋은 페이지"
          description="관련 계산기, 정보, 체크리스트를 같이 보면 한 가지 질문을 더 쉽게 정리할 수 있어요."
          items={[
            { href: "/tools/due-date", title: "출산 예정일 계산기", description: "예정일과 임신 주수 흐름을 먼저 확인하고 준비 순서를 잡아보세요." },
            { href: "/checklists/birth", title: "출산 준비 체크리스트", description: "입원 가방, 서류, 집안 준비를 함께 정리하기 좋아요." },
            { href: "/info/newborn", title: "신생아 정보", description: "출산 직후 이어서 보게 되는 수유와 수면 흐름을 함께 확인할 수 있어요." },
            { href: "/qna/health", title: "건강 Q&A", description: "임신 중 불안할 때 참고 범위와 상담이 필요한 신호를 함께 볼 수 있어요." }
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