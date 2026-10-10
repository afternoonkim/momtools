"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import BottomTabNav from "@/components/layout/BottomTabNav";
import SiteFooter from "@/components/layout/SiteFooter";
import ScrollToTopButton from "@/components/common/ScrollToTopButton";
import RecentPageTracker from "@/components/common/RecentPageTracker";
import GlobalAdFitAd from "@/components/ads/GlobalAdFitAd";
import GlobalCoupangProductAd from "@/components/ads/GlobalCoupangProductAd";
import GlobalCoupangPartnersAd from "@/components/ads/GlobalCoupangPartnersAd";
import PwaInstallGuide from "@/components/pwa/PwaInstallGuide";
import FeelingFab from "@/components/feelings/FeelingFab";
import RouteHtmlLang from "@/components/layout/RouteHtmlLang";

function EnglishShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-transparent text-slate-700">
      <RouteHtmlLang lang="en-US" />
      <header className="sticky top-0 z-30 border-b border-amber-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex min-h-14 max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
          <Link href="/en" className="flex items-center gap-2 font-extrabold text-slate-900" aria-label="MomTools home">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-100 text-base">👶</span>
            <span>MomTools</span>
          </Link>
          <nav className="hidden items-center gap-5 text-sm font-semibold text-slate-600 md:flex" aria-label="Main navigation">
            <Link href="/en/cal" className="transition hover:text-amber-700">Tools</Link>
            <Link href="/en/info" className="transition hover:text-amber-700">Guides</Link>
            <Link href="/en/qna" className="transition hover:text-amber-700">Parent Q&amp;A</Link>
            <Link href="/en/checklists" className="transition hover:text-amber-700">Checklists</Link>
            <Link href="/en/baby-food" className="transition hover:text-amber-700">Baby food</Link>
            <Link href="/en/about" className="transition hover:text-amber-700">About</Link>
          </nav>
          <Link href="/" className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-600 transition hover:border-amber-200 hover:text-amber-700">
            한국어
          </Link>
        </div>
        <nav className="border-t border-amber-50 px-3 py-2 md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-2xl gap-2 overflow-x-auto text-xs font-bold text-slate-600">
            <Link href="/en" className="whitespace-nowrap rounded-full bg-amber-50 px-3 py-2 text-amber-800">Home</Link>
            <Link href="/en/cal" className="whitespace-nowrap rounded-full bg-slate-50 px-3 py-2">Tools</Link>
            <Link href="/en/info" className="whitespace-nowrap rounded-full bg-slate-50 px-3 py-2">Guides</Link>
            <Link href="/en/qna" className="whitespace-nowrap rounded-full bg-slate-50 px-3 py-2">Q&amp;A</Link>
            <Link href="/en/checklists" className="whitespace-nowrap rounded-full bg-slate-50 px-3 py-2">Checklists</Link>
          </div>
        </nav>
      </header>

      <main className="min-h-[70vh]">{children}</main>

      <footer className="border-t border-amber-100 bg-white/80">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/en" className="text-sm font-extrabold text-slate-800">MomTools</Link>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-slate-500">
              <Link href="/en/about" className="hover:text-slate-700">About</Link>
              <Link href="/en/faq" className="hover:text-slate-700">FAQ</Link>
              <Link href="/en/contact" className="hover:text-slate-700">Contact</Link>
              <Link href="/en/privacy" className="hover:text-slate-700">Privacy</Link>
              <Link href="/en/terms" className="hover:text-slate-700">Terms</Link>
            </div>
          </div>
          <p className="mt-4 border-t border-amber-50 pt-3 text-[11px] leading-5 text-slate-400">
            MomTools provides general parenting information for planning and reference. For medical concerns, use your clinician or an appropriate emergency service.
          </p>
          <div className="mt-2 text-[11px] text-slate-400">© {new Date().getFullYear()} MomTools. All rights reserved.</div>
        </div>
      </footer>
      <ScrollToTopButton />
    </div>
  );
}

function KoreanShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-transparent text-slate-700">
      <RouteHtmlLang lang="ko" />
      <RecentPageTracker />
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileMenuOpen}
        setMobileOpen={setMobileMenuOpen}
      />

      <div
        className={`min-h-screen flex flex-col transition-all duration-300 ${
          collapsed ? "lg:pl-20" : "lg:pl-72"
        }`}
      >
        <Topbar />
        <GlobalAdFitAd position="top" />
        <main className="flex-1">{children}</main>
        <GlobalCoupangPartnersAd />
        <GlobalCoupangProductAd />
        <GlobalAdFitAd position="bottom" />
        <SiteFooter />
        <div className="h-[calc(4.1rem+env(safe-area-inset-bottom))] lg:hidden" />
        <ScrollToTopButton />
        <PwaInstallGuide />
        <FeelingFab />
        <BottomTabNav onMenuClick={() => setMobileMenuOpen(true)} />
      </div>
    </div>
  );
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");

  return isEnglish ? <EnglishShell>{children}</EnglishShell> : <KoreanShell>{children}</KoreanShell>;
}
