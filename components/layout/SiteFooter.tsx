"use client";

import Link from "next/link";

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-slate-500 transition hover:text-slate-700">
      {children}
    </Link>
  );
}

export default function SiteFooter() {
  return (
    <footer className="border-t border-amber-100 bg-white/80">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-800">MomTools</span>
              <span className="text-xs text-slate-400">육아 도구 · 정보 · 체크리스트</span>
            </div>
            <p className="mt-2 max-w-2xl text-xs leading-relaxed text-slate-500">
              본 사이트의 계산 결과와 정보는 육아 계획을 돕기 위한 참고용입니다.<br/>
              실제 진료, 접종, 성장 판단은 의료진 안내와 공공기관 기준을 우선해 주세요.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <FooterLink href="/faq">FAQ</FooterLink>
            <FooterLink href="/contact">문의하기</FooterLink>
            <FooterLink href="/privacy">개인정보처리방침</FooterLink>
            <FooterLink href="/terms">이용약관</FooterLink>
          </div>
        </div>

        <div className="mt-6 text-xs text-slate-400">© {new Date().getFullYear()} MomTools. All rights reserved.</div>
      </div>
    </footer>
  );
}
