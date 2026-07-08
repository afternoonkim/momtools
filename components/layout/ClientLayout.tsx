"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import BottomTabNav from "@/components/layout/BottomTabNav";
import SiteFooter from "@/components/layout/SiteFooter";
import ScrollToTopButton from "@/components/common/ScrollToTopButton";
import RecentPageTracker from "@/components/common/RecentPageTracker";
import GlobalAdFitAd from "@/components/ads/GlobalAdFitAd";
import GlobalCoupangProductAd from "@/components/ads/GlobalCoupangProductAd";
import PwaInstallGuide from "@/components/pwa/PwaInstallGuide";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-transparent text-slate-700">
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
        <GlobalCoupangProductAd />
        <GlobalAdFitAd position="bottom" />
        <SiteFooter />
        <div className="h-[calc(4.1rem+env(safe-area-inset-bottom))] lg:hidden" />
        <ScrollToTopButton />
        <PwaInstallGuide />
        <BottomTabNav onMenuClick={() => setMobileMenuOpen(true)} />
      </div>
    </div>
  );
}
