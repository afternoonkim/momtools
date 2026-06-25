"use client";

import Link from "next/link";
import { PARTNER_SITES, getPartnerLinkProps } from "@/lib/partner-sites";

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-slate-500 transition hover:text-slate-700">
      {children}
    </Link>
  );
}

export default function SiteFooter() {
  const bluedinoProps = getPartnerLinkProps(PARTNER_SITES.bluedino, "ko");
  const megaProps = getPartnerLinkProps(PARTNER_SITES.megaCalculators, "ko");

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
              본 사이트의 계산 결과와 정보는 육아 계획을 돕기 위한 참고용입니다.<br />
              실제 진료, 접종, 성장 판단은 의료진 안내와 공공기관 기준을 우선해 주세요.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <FooterLink href="/about">사이트 소개</FooterLink>
            <FooterLink href="/policy/pregnancy-birth">임신·출산 지원</FooterLink>
            <FooterLink href="/policy/local-check">지역별 출산지원금</FooterLink>
            <FooterLink href="/family-health-qna/family">가족 생활 건강</FooterLink>
            <FooterLink href="/faq">FAQ</FooterLink>
            <FooterLink href="/contact">문의하기</FooterLink>
            <FooterLink href="/privacy">개인정보처리방침</FooterLink>
            <FooterLink href="/terms">이용약관</FooterLink>
          </div>
        </div>

        <div className="mt-6 border-t border-amber-50 pt-4">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            함께 보면 좋은 관련 서비스
          </div>
          <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
            <a {...megaProps} className="transition hover:text-slate-700">
              {PARTNER_SITES.megaCalculators.copy.ko.label} · {PARTNER_SITES.megaCalculators.domain}
            </a>
            <a {...bluedinoProps} className="transition hover:text-slate-700">
              {PARTNER_SITES.bluedino.copy.ko.label} · {PARTNER_SITES.bluedino.domain}
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-amber-50 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-slate-400">© {new Date().getFullYear()} MomTools. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
            <span className="text-slate-400">공식 채널</span>
            <a
              href="https://blog.naver.com/afterchan"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-slate-700"
            >
              Naver Blog
            </a>
            <a
              href="https://github.com/afternoonkim"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-slate-700"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
