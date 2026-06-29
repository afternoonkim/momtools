"use client";

import Link from "next/link";
import { PARTNER_SITES, getPartnerLinkProps } from "@/lib/partner-sites";

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-xs font-medium text-slate-500 transition hover:text-slate-700">
      {children}
    </Link>
  );
}

export default function SiteFooter() {
  const bluedinoProps = getPartnerLinkProps(PARTNER_SITES.bluedino, "ko");
  const megaProps = getPartnerLinkProps(PARTNER_SITES.megaCalculators, "ko");

  return (
    <footer className="border-t border-amber-100 bg-white/80">
      <div className="mx-auto max-w-7xl px-4 py-5 md:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="text-sm font-extrabold text-slate-800">
            MomTools
          </Link>

          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <FooterLink href="/about">사이트 소개</FooterLink>
            <FooterLink href="/faq">FAQ</FooterLink>
            <FooterLink href="/contact">문의하기</FooterLink>
            <FooterLink href="/privacy">개인정보처리방침</FooterLink>
            <FooterLink href="/terms">이용약관</FooterLink>
          </div>
        </div>

        <div className="mt-5 border-t border-amber-50 pt-4">
          <div className="text-[11px] font-semibold tracking-[-0.01em] text-slate-400">
            함께 보면 좋은 사이트
          </div>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500">
            <a {...megaProps} className="transition hover:text-slate-700">
              {PARTNER_SITES.megaCalculators.copy.ko.label} · {PARTNER_SITES.megaCalculators.domain}
            </a>
            <a {...bluedinoProps} className="transition hover:text-slate-700">
              {PARTNER_SITES.bluedino.copy.ko.label} · {PARTNER_SITES.bluedino.domain}
            </a>
          </div>
        </div>

        <div className="mt-4 border-t border-amber-50 pt-3 text-[11px] text-slate-400">
          © {new Date().getFullYear()} MomTools. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
