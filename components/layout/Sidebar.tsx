"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  ChevronLeft,
  Home,
  Calculator,
  Baby,
  ClipboardList,
  BookOpen,
  Package,
  CircleHelp,
  Mail,
  CalendarHeart,
  Rss,
  PlaySquare,
  Sparkles,
} from "lucide-react";
import SidebarItem from "./SidebarItem";
import SidebarGroup from "./SidebarGroup";

export default function Sidebar({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileSidebar = () => setMobileOpen(false);

  return (
    <>
      {!mobileOpen && (
        <button
          onClick={() => setMobileOpen(true)}
          className="fixed left-4 top-4 z-[60] rounded-xl border border-amber-200 bg-white p-2 text-amber-600 shadow-lg lg:hidden"
          aria-label="메뉴 열기"
        >
          <Menu size={20} />
        </button>
      )}

      {mobileOpen && (
        <button
          className="fixed inset-0 z-40 bg-slate-900/30 lg:hidden"
          onClick={closeMobileSidebar}
          aria-label="메뉴 닫기"
        />
      )}

      <aside
        className={`fixed bottom-0 left-0 top-0 z-50 flex flex-col border-r border-amber-100 bg-[linear-gradient(180deg,#fffaf2_0%,#ffffff_100%)] text-slate-700 transition-all duration-300 ${
          collapsed ? "w-20" : "w-72"
        } ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="flex items-center justify-between border-b border-amber-100 p-4">
          <Link
            href="/"
            onClick={closeMobileSidebar}
            className={`${collapsed ? "mx-auto" : ""} flex items-center gap-3`}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-xl shadow-sm">
              👶
            </div>
            {!collapsed ? (
              <div>
                <div className="text-lg font-bold text-slate-800">MomTools</div>
                <div className="text-xs text-slate-500">밝고 실용적인 육아 도구</div>
              </div>
            ) : null}
          </Link>

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden text-slate-400 hover:text-slate-700 lg:block"
            aria-label="사이드바 접기"
          >
            <ChevronLeft
              size={18}
              className={`transition-transform ${collapsed ? "rotate-180" : ""}`}
            />
          </button>

          <button
            onClick={closeMobileSidebar}
            className="text-slate-400 hover:text-slate-700 lg:hidden"
            aria-label="모바일 메뉴 닫기"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 space-y-6 overflow-y-auto p-4">
          <div onClick={closeMobileSidebar}>
            <SidebarItem href="/" label="홈" icon={Home} collapsed={collapsed} />
          </div>

          <div onClick={closeMobileSidebar}>
            <SidebarGroup title="육아 계산기" collapsed={collapsed}>
              <SidebarItem href="/cal/due-date" label="출산 예정일 계산기" icon={CalendarHeart} collapsed={collapsed} />
              <SidebarItem href="/cal/baby-age" label="아기 개월수 계산기" icon={Baby} collapsed={collapsed} />
              <SidebarItem href="/cal/vaccine-schedule" label="예방접종 일정 계산기" icon={Calculator} collapsed={collapsed} />
              <SidebarItem href="/cal/weaning-start" label="이유식 시작 계산기" icon={Sparkles} collapsed={collapsed} />
              <SidebarItem href="/cal/growth-percentile" label="성장 백분위 계산기" icon={Calculator} collapsed={collapsed} />
            </SidebarGroup>
          </div>

          <div onClick={closeMobileSidebar}>
            <SidebarGroup title="육아 정보" collapsed={collapsed}>
              <SidebarItem href="/info/pregnancy" label="임신" icon={BookOpen} collapsed={collapsed} />
              <SidebarItem href="/info/newborn" label="신생아" icon={BookOpen} collapsed={collapsed} />
              <SidebarItem href="/info/weaning" label="이유식" icon={BookOpen} collapsed={collapsed} />
              <SidebarItem href="/info/toddler" label="유아" icon={BookOpen} collapsed={collapsed} />
            </SidebarGroup>
          </div>

          <div onClick={closeMobileSidebar}>
            <SidebarGroup title="체크리스트" collapsed={collapsed}>
              <SidebarItem href="/checklists/birth-prep" label="출산 준비" icon={ClipboardList} collapsed={collapsed} />
              <SidebarItem href="/checklists/newborn-prep" label="신생아 준비" icon={ClipboardList} collapsed={collapsed} />
              <SidebarItem href="/checklists/weaning-prep" label="이유식 준비" icon={ClipboardList} collapsed={collapsed} />
              <SidebarItem href="/checklists/daycare-prep" label="어린이집 준비" icon={ClipboardList} collapsed={collapsed} />
            </SidebarGroup>
          </div>

          <div onClick={closeMobileSidebar}>
            <SidebarGroup title="콘텐츠" collapsed={collapsed}>
              <SidebarItem href="/content/blog" label="블로그 글" icon={Rss} collapsed={collapsed} />
              <SidebarItem href="/content/youtube" label="추천 유튜브" icon={PlaySquare} collapsed={collapsed} />
            </SidebarGroup>
          </div>

          <div onClick={closeMobileSidebar}>
            <SidebarGroup title="육아용품" collapsed={collapsed}>
              <SidebarItem href="/items/essential" label="필수용품" icon={Package} collapsed={collapsed} />
            </SidebarGroup>
          </div>

          <div onClick={closeMobileSidebar}>
            <SidebarGroup title="기타" collapsed={collapsed}>
              <SidebarItem href="/faq" label="FAQ" icon={CircleHelp} collapsed={collapsed} />
              <SidebarItem href="/contact" label="문의하기" icon={Mail} collapsed={collapsed} />
            </SidebarGroup>
          </div>
        </div>

        <div className="border-t border-amber-100 p-4 text-xs text-slate-500">
          {!collapsed ? (
            <div className="space-y-1">
              <div className="font-semibold text-slate-700">MomTools</div>
              <div>v1.0.0</div>
              <div>care tools · checklists · content hub</div>
            </div>
          ) : (
            <div className="text-center">v1</div>
          )}
        </div>
      </aside>
    </>
  );
}
