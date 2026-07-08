import type { Metadata } from "next";
import Link from "next/link";
import { Baby, ClipboardList } from "lucide-react";

export const metadata: Metadata = {
  title: "기록하기",
  description: "아이 정보 등록, 이유식 기록, 발달 체크, 출산·신생아·이유식·어린이집 체크리스트를 한곳에서 확인하세요.",
  robots: { index: false, follow: false },
};

const childItems = [
  {
    title: "아이 추가/등록",
    description: "아이 애칭, 생년월일, 성별을 등록하면 홈에서 아이 기준으로 볼 수 있어요.",
    href: "/child/new",
  },
  {
    title: "발달 체크",
    description: "아이별로 움직임, 감각, 말·소통, 먹기·생활 발달 흐름을 기록해요.",
    href: "/development-check",
  },
  {
    title: "이유식 기록",
    description: "오늘 먹인 재료, 먹은 양, 반응을 아이별로 짧게 남겨요.",
    href: "/weaning-record",
  },
  {
    title: "예방접종 체크",
    description: "아이 생년월일 기준으로 접종 예상 시기와 완료 여부를 확인해요.",
    href: "/vaccine-check",
  },
  {
    title: "가족 연결",
    description: "엄마와 아빠가 같은 아이 정보와 기록을 함께 볼 수 있게 연결해요.",
    href: "/family",
  },
] as const;

const checklistItems = [
  {
    title: "출산 준비",
    description: "입원 가방과 출산 전 준비 항목을 확인합니다.",
    href: "/checklists/birth",
  },
  {
    title: "신생아 준비",
    description: "집으로 아기를 맞이하기 전 필요한 준비를 정리합니다.",
    href: "/checklists/newborn",
  },
  {
    title: "이유식 준비",
    description: "이유식 도구와 시작 전 점검 항목을 확인합니다.",
    href: "/checklists/weaning",
  },
  {
    title: "어린이집 준비",
    description: "등원 전 준비물과 적응 포인트를 정리합니다.",
    href: "/checklists/daycare",
  },
] as const;

function RecordLink({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link href={href} className="mt-simple-list-item flex items-center justify-between gap-3 py-3">
      <span className="min-w-0">
        <strong className="block text-[13px] font-extrabold leading-5 text-slate-900">{title}</strong>
        <span className="mt-0.5 line-clamp-1 block text-[12px] leading-5 text-slate-500">{description}</span>
      </span>
      <span className="shrink-0 text-sm font-extrabold text-amber-700" aria-hidden>
        →
      </span>
    </Link>
  );
}

export default function RecordsPage() {
  return (
    <div className="mt-page">
      <div className="mt-container max-w-xl space-y-3 md:space-y-4">
        <section className="mt-card p-4">
          <span className="mt-badge">기록하기</span>
          <h1 className="mt-3 text-[20px] font-black leading-7 text-slate-950">기록할 기능을 바로 선택해요</h1>
          <p className="mt-1.5 text-[12px] leading-5 text-slate-600">아이 등록, 이유식 기록, 예방접종 체크, 발달 체크로 바로 이동할 수 있어요.</p>
        </section>

        <section className="mt-simple-list" aria-labelledby="child-record-title">
          <div className="border-b border-slate-100 px-4 py-3">
            <div className="flex items-center gap-2">
              <Baby size={16} className="text-amber-600" aria-hidden />
              <h2 id="child-record-title" className="text-[14px] font-extrabold text-slate-900">
                아이 관리와 매일 기록
              </h2>
            </div>
          </div>
          {childItems.map((item) => (
            <RecordLink key={item.href} {...item} />
          ))}
        </section>

        <section className="mt-simple-list" aria-labelledby="checklist-record-title">
          <div className="border-b border-slate-100 px-4 py-3">
            <div className="flex items-center gap-2">
              <ClipboardList size={16} className="text-amber-600" aria-hidden />
              <h2 id="checklist-record-title" className="text-[14px] font-extrabold text-slate-900">
                체크리스트
              </h2>
            </div>
          </div>
          {checklistItems.map((item) => (
            <RecordLink key={item.href} {...item} />
          ))}
        </section>

      </div>
    </div>
  );
}
