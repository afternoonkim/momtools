import type { Metadata } from "next";
import Link from "next/link";
import WeaningPrepChecklistClient from "./WeaningPrepChecklistClient";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import RelatedContent from "@/components/common/RelatedContent";

export const metadata: Metadata = {
  title: "이유식 준비 체크리스트 | 식기 재료 보관 준비물 정리 | MomTools",
  description:
    "아기 식탁의자, 이유식 스푼, 보관 용기, 조리도구, 알레르기 체크까지 한눈에 정리해보세요. MomTools 이유식 준비 체크리스트로 이유식 시작 전 필요한 준비를 빠짐없이 확인할 수 있습니다.",
  keywords: [
    "이유식 준비 체크리스트",
    "이유식 준비물",
    "이유식 식기",
    "이유식 큐브 트레이",
    "이유식 조리도구",
    "MomTools",
  ],
  alternates: {
    canonical: "https://momtools.kr/checklists/weaning",
  },
  openGraph: {
    title: "이유식 준비 체크리스트 | MomTools",
    description:
      "식기, 조리도구, 보관 용기, 알레르기 체크까지 이유식 준비물을 한눈에 정리해보세요.",
    url: "https://momtools.kr/checklists/weaning",
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "이유식 준비 체크리스트 | MomTools",
    description:
      "이유식 시작 전 필요한 준비물을 카테고리별로 한눈에 정리해보세요.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WeaningPrepPage() {
  return (
    <div className="space-y-8">
      <WeaningPrepChecklistClient />

      <ContentUpdateNote publishedOn="2026-04-09" updatedOn="2026-04-09" />

      <div className="mt-container-narrow space-y-8">

        <section className="mt-card p-6 md:p-8">
          <span className="mt-badge">추가 안내</span>
          <h2 className="mt-title-lg mt-4">이유식 준비는 기본 도구부터 시작해도 충분해요</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            <p>
              이유식을 시작할 때는 모든 단계를 한 번에 준비하려고 하기 쉽지만,
              실제로는 스푼, 식기, 턱받이, 보관용기처럼 자주 쓰는 기본 도구부터 준비해도
              충분히 시작할 수 있습니다.
            </p>
            <p>
              식사 도구 못지않게 중요한 것이 식사 공간입니다. 닦기 쉬운 자리,
              손이 잘 닿는 위치에 있는 도구, 식후 정리 동선까지 함께 생각해 두면
              이유식 초반 부담을 훨씬 줄일 수 있습니다.
            </p>
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
            관련 페이지
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <RelatedLink
              href="/info/weaning"
              title="이유식 정보"
              description="시작 신호와 단계별 흐름을 함께 이해하면 준비가 더 쉬워져요."
            />
            <RelatedLink
              href="/tools/weaning-start"
              title="이유식 시작 계산기"
              description="아기 생년월일 기준으로 이유식 준비 시점을 참고할 수 있어요."
            />
            <RelatedLink
              href="/tools/baby-age"
              title="아기 개월수 계산기"
              description="이유식은 월령 기준으로 많이 보기 때문에 함께 쓰기 좋습니다."
            />
            <RelatedLink
              href="/items/essential"
              title="육아용품 목록"
              description="이유식 용품 카테고리와 실제 체크리스트를 연결해 보기 좋아요."
            />
          </div>
        </section>
      

        <RelatedContent
          locale="ko"
          title="함께 보면 좋은 페이지"
          description="관련 계산기, 정보, 체크리스트를 같이 보면 한 가지 질문을 더 쉽게 정리할 수 있어요."
          items={[
            { href: "/info/weaning", title: "이유식 정보", description: "시작 시기와 기본 흐름을 함께 이해하기 좋습니다." },
            { href: "/tools/weaning-start", title: "이유식 시작 시기 계산기", description: "개월수 기준으로 준비 시점을 다시 확인할 수 있어요." },
            { href: "/baby-food", title: "이유식 메뉴", description: "메뉴 아이디어와 재료 조합을 함께 살펴보세요." },
            { href: "/qna/growth", title: "성장 Q&A", description: "식사량과 성장 흐름을 함께 볼 때 도움이 됩니다." }
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