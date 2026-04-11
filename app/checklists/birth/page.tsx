import type { Metadata } from "next";
import Link from "next/link";
import BirthPrepChecklistClient from "../birth-prep/BirthPrepChecklistClient";

export const metadata: Metadata = {
  title: "출산 준비 체크리스트",
  description: "입원 준비물과 출산 전 준비 항목을 정리한 MomTools 체크리스트입니다.",
  alternates: { canonical: "https://momtools.kr/checklists/birth" },
};

export default function Page() {
  return (
    <div className="space-y-8">
      <BirthPrepChecklistClient />
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">관련 페이지</div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <RelatedLink href="/tools/due-date" title="출산 예정일 계산기" description="예정일과 임신 주수 흐름을 확인하고 준비 시점을 잡기 좋아요." />
            <RelatedLink href="/info/pregnancy" title="임신 정보" description="출산 전후 흐름과 준비 포인트를 함께 정리할 수 있어요." />
            <RelatedLink href="/checklists/newborn" title="신생아 준비 체크리스트" description="출산 이후 바로 필요한 준비물도 이어서 점검해보세요." />
            <RelatedLink href="/items/essential" title="육아용품 목록" description="실제 구매가 필요한 품목은 용품 목록과 연결해 보기 좋아요." />
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
