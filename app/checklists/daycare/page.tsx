import type { Metadata } from "next";
import Link from "next/link";
import AdBlock from "@/components/ad/AdBlock";
import DaycarePrepChecklistClient from "../daycare-prep/DaycarePrepChecklistClient";

export const metadata: Metadata = {
  title: "어린이집 준비 체크리스트",
  description: "어린이집 등원 전 준비 항목을 정리한 MomTools 체크리스트입니다.",
  alternates: { canonical: "https://momtools.kr/checklists/daycare" },
};

export default function Page() {
  return (
    <div className="space-y-8">
      <DaycarePrepChecklistClient />
      <div className="mt-container-narrow space-y-8">
        <AdBlock label="어린이집 준비 체크리스트 하단 광고 영역" format="rectangle" />
        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">관련 페이지</div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <RelatedLink href="/info/toddler" title="유아 정보" description="등원 전 생활 루틴과 적응 포인트를 함께 정리하기 좋아요." />
            <RelatedLink href="/tools/baby-age" title="아기 개월수 계산기" description="연령 기준으로 준비 시기를 가늠할 때 도움이 돼요." />
            <RelatedLink href="/checklists/weaning" title="이유식 준비 체크리스트" description="식사 준비가 아직 익숙하지 않다면 먼저 점검해보세요." />
            <RelatedLink href="/items/essential" title="육아용품 목록" description="등원 전 필요한 가방, 식기, 생활용품을 정리하기 좋아요." />
          </div>
        </section>
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
