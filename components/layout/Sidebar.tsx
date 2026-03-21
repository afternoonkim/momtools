"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  HeartPulse,
  UtensilsCrossed,
  Tags,
} from "lucide-react";
import SidebarItem from "./SidebarItem";
import SidebarGroup from "./SidebarGroup";
import LanguageSwitch from "./LanguageSwitch";
import { getLocaleFromPath, withLocalePath } from "@/lib/site-locale";

export default function Sidebar({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
}) {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPath(pathname);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobileSidebar = () => setMobileOpen(false);
  const isKo = locale === "ko";
  const isEn = locale === "en";

  const t = isKo
    ? {
        tagline: "네이버 중심 육아 도구 허브",
        openMenu: "메뉴 열기",
        closeMenu: "메뉴 닫기",
        collapse: "사이드바 접기",
        home: "홈",
        tools: "육아 계산기",
        qna: "육아 Q&A",
        checklists: "체크리스트",
        content: "콘텐츠",
        babyFood: "이유식 메뉴",
        names: "아이 이름 짓기",
        items: "육아용품",
        misc: "기타",
        versionMeta: "tools · names · baby food · qna",
        links: {
          dueDate: "출산 예정일 계산기",
          babyAge: "아기 개월수 계산기",
          vaccine: "예방접종 일정 계산기",
          weaningStart: "이유식 시작 계산기",
          growth: "성장 백분위 계산기",
          health: "아이 건강",
          growthQna: "아이 성장",
          behavior: "아이 행동",
          birth: "출산 준비",
          newborn: "신생아 준비",
          weaning: "이유식 준비",
          daycare: "어린이집 준비",
          blog: "육아 블로그",
          youtube: "추천 유튜브",
          earlyFood: "초기 이유식",
          middleFood: "중기 이유식",
          lateFood: "후기 이유식",
          generator: "이름 생성기",
          rankings: "인기 이름 순위",
          meanings: "한글 이름 뜻 모음",
          essential: "필수용품",
          faq: "FAQ",
          contact: "문의하기",
        },
      }
    : {
        tagline: "US-friendly parenting tools and guides",
        openMenu: "Open menu",
        closeMenu: "Close menu",
        collapse: "Collapse sidebar",
        home: "Home",
        tools: "Parenting Tools",
        qna: "Parent Q&A",
        checklists: "Checklists",
        content: "Content",
        babyFood: "Baby Food",
        names: "Baby Names",
        items: "Essentials",
        misc: "More",
        versionMeta: "tools · baby food · qna",
        links: {
          dueDate: "Due date calculator",
          babyAge: "Baby age calculator",
          vaccine: "Vaccine schedule",
          weaningStart: "Starting solids calculator",
          growth: "Growth percentile",
          health: "Health",
          growthQna: "Growth",
          behavior: "Behavior",
          birth: "Birth prep",
          newborn: "Newborn prep",
          weaning: "Starting solids prep",
          daycare: "Daycare prep",
          blog: "Parenting blog",
          youtube: "YouTube picks",
          earlyFood: "First foods",
          middleFood: "Stage 2 foods",
          lateFood: "Stage 3 foods",
          generator: "Name generator",
          rankings: "Popular names",
          meanings: "Name meanings",
          essential: "Must-have items",
          faq: "FAQ",
          contact: "Contact",
        },
      };

  const href = (path: string) => withLocalePath(path, locale);

  return (
    <>
      {!mobileOpen && (
        <button
          onClick={() => setMobileOpen(true)}
          className="fixed left-4 top-4 z-[60] rounded-xl border border-amber-200 bg-white p-2 text-amber-600 shadow-lg lg:hidden"
          aria-label={t.openMenu}
        >
          <Menu size={20} />
        </button>
      )}

      {mobileOpen && (
        <button className="fixed inset-0 z-40 bg-slate-900/30 lg:hidden" onClick={closeMobileSidebar} aria-label={t.closeMenu} />
      )}

      <aside
        className={`fixed bottom-0 left-0 top-0 z-50 flex flex-col border-r border-amber-100 bg-[linear-gradient(180deg,#fffaf2_0%,#ffffff_100%)] text-slate-700 transition-all duration-300 ${
          collapsed ? "w-20" : "w-72"
        } ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="flex items-center justify-between border-b border-amber-100 p-4">
          <Link href={href("/")} onClick={closeMobileSidebar} className={`${collapsed ? "mx-auto" : ""} flex items-center gap-3`}>
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-xl shadow-sm">👶</div>
            {!collapsed ? (
              <div>
                <div className="text-lg font-bold text-slate-800">MomTools</div>
                <div className="text-xs text-slate-500">{t.tagline}</div>
              </div>
            ) : null}
          </Link>

          <button onClick={() => setCollapsed(!collapsed)} className="hidden text-slate-400 hover:text-slate-700 lg:block" aria-label={t.collapse}>
            <ChevronLeft size={18} className={`transition-transform ${collapsed ? "rotate-180" : ""}`} />
          </button>

          <button onClick={closeMobileSidebar} className="text-slate-400 hover:text-slate-700 lg:hidden" aria-label={t.closeMenu}>✕</button>
        </div>

        {!collapsed ? (
          <div className="hidden border-b border-amber-100 px-4 py-3 lg:block">
            <LanguageSwitch />
          </div>
        ) : null}

        <div className="flex-1 space-y-6 overflow-y-auto p-4">
          <div onClick={closeMobileSidebar}><SidebarItem href={href("/")} label={t.home} icon={Home} collapsed={collapsed} /></div>

          <div onClick={closeMobileSidebar}>
            <SidebarGroup title={t.tools} collapsed={collapsed}>
              <SidebarItem href={isEn ? "/en/cal/due-date" : href("/tools/due-date")} label={t.links.dueDate} icon={CalendarHeart} collapsed={collapsed} />
              <SidebarItem href={isEn ? "/en/cal/baby-age" : href("/tools/baby-age")} label={t.links.babyAge} icon={Baby} collapsed={collapsed} />
              <SidebarItem href={isEn ? "/en/cal/vaccine-schedule" : href("/tools/vaccine-schedule")} label={t.links.vaccine} icon={Calculator} collapsed={collapsed} />
              <SidebarItem href={isEn ? "/en/cal/weaning-start" : href("/tools/weaning-start")} label={t.links.weaningStart} icon={Sparkles} collapsed={collapsed} />
              <SidebarItem href={isEn ? "/en/cal/growth-percentile" : href("/tools/growth-percentile")} label={t.links.growth} icon={Calculator} collapsed={collapsed} />
            </SidebarGroup>
          </div>

          <div onClick={closeMobileSidebar}>
            <SidebarGroup title={t.qna} collapsed={collapsed}>
              <SidebarItem href={href("/qna/health")} label={t.links.health} icon={HeartPulse} collapsed={collapsed} />
              <SidebarItem href={href("/qna/growth")} label={t.links.growthQna} icon={Baby} collapsed={collapsed} />
              <SidebarItem href={href("/qna/behavior")} label={t.links.behavior} icon={Sparkles} collapsed={collapsed} />
            </SidebarGroup>
          </div>

          <div onClick={closeMobileSidebar}>
            <SidebarGroup title={t.checklists} collapsed={collapsed}>
              <SidebarItem href={href("/checklists/birth")} label={t.links.birth} icon={ClipboardList} collapsed={collapsed} />
              <SidebarItem href={href("/checklists/newborn")} label={t.links.newborn} icon={ClipboardList} collapsed={collapsed} />
              <SidebarItem href={href("/checklists/weaning")} label={t.links.weaning} icon={ClipboardList} collapsed={collapsed} />
              <SidebarItem href={href("/checklists/daycare")} label={t.links.daycare} icon={ClipboardList} collapsed={collapsed} />
            </SidebarGroup>
          </div>

          {isKo ? (
            <div onClick={closeMobileSidebar}>
              <SidebarGroup title={t.content} collapsed={collapsed}>
                <SidebarItem href={href("/content/blog")} label={t.links.blog} icon={Rss} collapsed={collapsed} />
                <SidebarItem href={href("/content/youtube")} label={t.links.youtube} icon={PlaySquare} collapsed={collapsed} />
              </SidebarGroup>
            </div>
          ) : null}

          <div onClick={closeMobileSidebar}>
            <SidebarGroup title={t.babyFood} collapsed={collapsed}>
              <SidebarItem href={href("/baby-food/early")} label={t.links.earlyFood} icon={UtensilsCrossed} collapsed={collapsed} />
              <SidebarItem href={href("/baby-food/middle")} label={t.links.middleFood} icon={UtensilsCrossed} collapsed={collapsed} />
              <SidebarItem href={href("/baby-food/late")} label={t.links.lateFood} icon={UtensilsCrossed} collapsed={collapsed} />
            </SidebarGroup>
          </div>

          {isKo ? (
            <div onClick={closeMobileSidebar}>
              <SidebarGroup title={t.names} collapsed={collapsed}>
                <SidebarItem href={href("/baby-names/rankings/2025")} label={t.links.rankings} icon={Tags} collapsed={collapsed} />
                <SidebarItem href={href("/baby-names/meanings")} label={t.links.meanings} icon={BookOpen} collapsed={collapsed} />
              </SidebarGroup>
            </div>
          ) : null}

          {isKo ? (
            <div onClick={closeMobileSidebar}>
              <SidebarGroup title={t.items} collapsed={collapsed}>
                <SidebarItem href={href("/items/essential")} label={t.links.essential} icon={Package} collapsed={collapsed} />
              </SidebarGroup>
            </div>
          ) : null}

          <div onClick={closeMobileSidebar}>
            <SidebarGroup title={t.misc} collapsed={collapsed}>
              <SidebarItem href={href("/faq")} label={t.links.faq} icon={CircleHelp} collapsed={collapsed} />
              <SidebarItem href={href("/contact")} label={t.links.contact} icon={Mail} collapsed={collapsed} />
            </SidebarGroup>
          </div>
        </div>

        <div className="border-t border-amber-100 p-4 text-xs text-slate-500">
          {!collapsed ? (
            <div className="space-y-1">
              <div className="font-semibold text-slate-700">MomTools</div>
              <div>v1.2.0</div>
              <div>{t.versionMeta}</div>
            </div>
          ) : (
            <div className="text-center">v1.2</div>
          )}
        </div>
      </aside>
    </>
  );
}
