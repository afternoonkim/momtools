import type { Metadata } from "next";
import Link from "next/link";
import NewbornPrepChecklistClient from "../newborn-prep/NewbornPrepChecklistClient";

export const metadata: Metadata = {
  title: "신생아 준비 체크리스트",
  description: "신생아 맞이 전 준비물을 정리한 MomTools 체크리스트입니다.",
  alternates: { canonical: "https://momtools.kr/checklists/newborn" },
};

export default function Page() {
  return (
    <div className="space-y-8">
      <NewbornPrepChecklistClient />
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">관련 페이지</div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <RelatedLink href="/tools/baby-age" title="아기 개월수 계산기" description="예방접종과 발달 흐름을 볼 때 개월수 기준을 함께 보기 좋아요." />
            <RelatedLink href="/info/newborn" title="신생아 정보" description="수면, 수유, 배변처럼 초반에 자주 궁금한 내용을 함께 정리할 수 있어요." />
            <RelatedLink href="/checklists/birth" title="출산 준비 체크리스트" description="출산 전 준비 항목을 아직 다 보지 않았다면 먼저 확인해보세요." />
            <RelatedLink href="/items/essential" title="육아용품 목록" description="필수 용품을 비교하면서 실제 준비 순서를 정리하기 좋아요." />
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
