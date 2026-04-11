import type { Metadata } from "next";
import Link from "next/link";
import WeaningPrepChecklistClient from "../weaning-prep/WeaningPrepChecklistClient";

export const metadata: Metadata = {
  title: "이유식 준비 체크리스트",
  description: "이유식 시작 전 필요한 준비물을 정리한 MomTools 체크리스트입니다.",
  alternates: { canonical: "https://momtools.kr/checklists/weaning" },
};

export default function Page() {
  return (
    <div className="space-y-8">
      <WeaningPrepChecklistClient />
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">관련 페이지</div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <RelatedLink href="/tools/weaning-start" title="이유식 시작 계산기" description="시작 시기와 준비 흐름을 함께 맞춰 보기 좋아요." />
            <RelatedLink href="/info/weaning" title="이유식 정보" description="초기, 중기, 후기 흐름과 식재료 도입 순서를 같이 확인할 수 있어요." />
            <RelatedLink href="/baby-food" title="이유식 메뉴" description="단계별 메뉴와 식단 아이디어를 이어서 볼 수 있어요." />
            <RelatedLink href="/checklists/newborn" title="신생아 준비 체크리스트" description="수유에서 이유식으로 넘어가기 전 준비 흐름도 같이 보면 좋아요." />
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
