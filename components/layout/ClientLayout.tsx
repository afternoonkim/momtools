"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import SiteFooter from "@/components/layout/SiteFooter";
import GlobalAdFitAd from "@/components/ads/GlobalAdFitAd";
import GlobalCoupangPartnersAd from "@/components/ads/GlobalCoupangPartnersAd";
import GlobalCoupangProductAd from "@/components/ads/GlobalCoupangProductAd";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-transparent text-slate-700">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

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
      </div>
    </div>
  );
}
