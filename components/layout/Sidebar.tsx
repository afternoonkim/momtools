"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  ChevronLeft,
  Calculator,
  Baby,
  ClipboardList,
  BookOpen,
  CalendarHeart,
  Sparkles,
  HeartPulse,
  UtensilsCrossed,
  Landmark,
  NotebookPen,
  Stethoscope,
  Moon,
} from "lucide-react";
import SidebarItem from "./SidebarItem";
import SidebarGroup from "./SidebarGroup";
import SearchBox from "./SearchBox";
import DesktopAuthActions from "@/components/auth/DesktopAuthActions";

export default function Sidebar({
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
}: {
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
}) {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const closeMobileSidebar = () => setMobileOpen(false);

  const handleLogoClick = () => {
    const isDesktop = typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches;
    closeMobileSidebar();
    router.push(isDesktop ? "/?view=home" : "/my");
  };

  const hasPath = (path: string) => pathname === path || pathname.startsWith(`${path}/`);

  const isCalculateOpen = hasPath("/tools") || hasPath("/cal");
  const isRecordOpen = hasPath("/records") || hasPath("/child") || hasPath("/checklists") || hasPath("/development-check") || hasPath("/weaning-record") || hasPath("/vaccine-check") || hasPath("/family");
  const isCheckOpen = hasPath("/qna") || hasPath("/health") || hasPath("/monthly-guide") || hasPath("/family-health-qna") || hasPath("/moonlight-hospitals");
  const isReferenceOpen = hasPath("/info") || hasPath("/policy") || hasPath("/baby-food") || hasPath("/baby-names") || hasPath("/family-health-qna");

  return (
    <>
      {mobileOpen && (
        <button className="fixed inset-0 z-40 bg-slate-900/30 lg:hidden" onClick={closeMobileSidebar} aria-label="메뉴 닫기" />
      )}

      <aside
        className={`mt-sidebar fixed bottom-0 left-0 top-0 z-50 flex flex-col border-r border-amber-100 bg-[linear-gradient(180deg,#fffaf2_0%,#ffffff_100%)] text-slate-700 transition-all duration-300 ${
          collapsed ? "w-20" : "w-72"
        } ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="mt-sidebar-header flex items-center justify-between border-b border-amber-100 p-4">
          <button
            type="button"
            onClick={handleLogoClick}
            className={`${collapsed ? "mx-auto" : ""} flex min-w-0 items-center gap-3 text-left`}
            aria-label="MomTools 로고 이동"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-xl shadow-sm">👶</span>
            {!collapsed ? (
              <span className="min-w-0">
                <span className="block text-lg font-extrabold text-slate-900">MomTools</span>
                {/* <span className="block text-xs text-slate-500">계산 · 기록 · 확인 · 참고</span> */}
              </span>
            ) : null}
          </button>

          <button onClick={() => setCollapsed(!collapsed)} className="hidden shrink-0 text-slate-400 hover:text-slate-700 lg:block" aria-label="사이드바 접기">
            <ChevronLeft size={18} className={`transition-transform ${collapsed ? "rotate-180" : ""}`} />
          </button>

          <button onClick={closeMobileSidebar} className="shrink-0 text-slate-400 hover:text-slate-700 lg:hidden" aria-label="메뉴 닫기">✕</button>
        </div>

        {!collapsed ? (
          <div className="mt-sidebar-search-wrap border-b border-amber-100 px-4 py-3">
            <SearchBox size="sm" placeholder="아기 열, 개월수, 예방접종" className="mt-sidebar-searchbox" />
          </div>
        ) : null}

        <div className="hidden border-b border-amber-100 px-4 py-2 lg:block">
          <DesktopAuthActions compact={collapsed} />
        </div>

        <div className="mt-sidebar-body flex-1 space-y-5 overflow-y-auto p-4">
          <div onClick={closeMobileSidebar}>
            <SidebarGroup title="기록하기" collapsed={collapsed} defaultOpen={isRecordOpen}>
              <SidebarItem href="/child/new" label="아이 추가/등록" icon={NotebookPen} collapsed={collapsed} />
              <SidebarItem href="/development-check" label="발달 체크" icon={Sparkles} collapsed={collapsed} />
              <SidebarItem href="/weaning-record" label="이유식 기록" icon={UtensilsCrossed} collapsed={collapsed} />
              <SidebarItem href="/vaccine-check" label="예방접종 체크" icon={HeartPulse} collapsed={collapsed} />
              <SidebarItem href="/checklists/birth" label="출산 준비" icon={NotebookPen} collapsed={collapsed} />
              <SidebarItem href="/checklists/newborn" label="신생아 준비" icon={ClipboardList} collapsed={collapsed} />
              <SidebarItem href="/checklists/weaning" label="이유식 준비" icon={ClipboardList} collapsed={collapsed} />
              <SidebarItem href="/checklists/daycare" label="어린이집 준비" icon={ClipboardList} collapsed={collapsed} />
            </SidebarGroup>
          </div>

          <div onClick={closeMobileSidebar}>
            <SidebarGroup title="확인하기" collapsed={collapsed} defaultOpen={isCheckOpen}>
              <SidebarItem href="/qna/health" label="아이 건강" icon={Stethoscope} collapsed={collapsed} />
              <SidebarItem href="/qna/growth" label="성장·발달" icon={Baby} collapsed={collapsed} />
              <SidebarItem href="/qna/behavior" label="행동·수면" icon={Sparkles} collapsed={collapsed} />
              <SidebarItem href="/health" label="증상별 가이드" icon={HeartPulse} collapsed={collapsed} />
              <SidebarItem href="/moonlight-hospitals" label="달빛아동병원" icon={Moon} collapsed={collapsed} />
              <SidebarItem href="/monthly-guide" label="월령별 가이드" icon={CalendarHeart} collapsed={collapsed} />
              <SidebarItem href="/family-health-qna/family" label="가족 건강 확인" icon={HeartPulse} collapsed={collapsed} />
            </SidebarGroup>
          </div>

          <div onClick={closeMobileSidebar}>
            <SidebarGroup title="계산하기" collapsed={collapsed} defaultOpen={isCalculateOpen}>
              <SidebarItem href="/tools/baby-age" label="아기 개월수" icon={Baby} collapsed={collapsed} />
              <SidebarItem href="/tools/vaccine-schedule" label="예방접종 일정" icon={HeartPulse} collapsed={collapsed} />
              <SidebarItem href="/tools/weaning-start" label="이유식 시작" icon={UtensilsCrossed} collapsed={collapsed} />
              <SidebarItem href="/tools/growth-percentile" label="성장 백분위" icon={Calculator} collapsed={collapsed} />
              <SidebarItem href="/tools/due-date" label="출산 예정일" icon={CalendarHeart} collapsed={collapsed} />
              <SidebarItem href="/tools/birth-support-calculator" label="출산지원금" icon={Landmark} collapsed={collapsed} />
            </SidebarGroup>
          </div>

          <div onClick={closeMobileSidebar}>
            <SidebarGroup title="참고하기" collapsed={collapsed} defaultOpen={isReferenceOpen}>
              <SidebarItem href="/info" label="육아 정보" icon={BookOpen} collapsed={collapsed} />
              <SidebarItem href="/info/pregnancy" label="임신 정보" icon={BookOpen} collapsed={collapsed} />
              <SidebarItem href="/info/newborn" label="신생아 정보" icon={BookOpen} collapsed={collapsed} />
              <SidebarItem href="/info/weaning" label="이유식 정보" icon={UtensilsCrossed} collapsed={collapsed} />
              <SidebarItem href="/policy" label="정부지원정책" icon={Landmark} collapsed={collapsed} />
              <SidebarItem href="/info/family-finance" label="가계 가이드" icon={Landmark} collapsed={collapsed} />
              <SidebarItem href="/baby-food" label="이유식 레시피" icon={UtensilsCrossed} collapsed={collapsed} />
              <SidebarItem href="/baby-names" label="아기 이름과 뜻" icon={Baby} collapsed={collapsed} />
              <SidebarItem href="/info/childcare-portal" label="아이사랑 활용" icon={BookOpen} collapsed={collapsed} />
            </SidebarGroup>
          </div>

        </div>

        <div className="mt-sidebar-footer border-t border-amber-100 p-4 text-xs text-slate-500">
          {!collapsed ? (
            <div className="space-y-1">
              <div className="font-semibold text-slate-700">MomTools</div>
              {/* <div>모바일에서 빠르게 확인하는 육아 도구</div> */}
              <div>v1.4.0</div>
            </div>
          ) : (
            <div className="text-center">v1.4</div>
          )}
        </div>
      </aside>
    </>
  );
}
