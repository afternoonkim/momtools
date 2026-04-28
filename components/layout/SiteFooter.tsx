"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocaleFromPath, withLocalePath } from "@/lib/site-locale";

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-slate-500 transition hover:text-slate-700">
      {children}
    </Link>
  );
}

export default function SiteFooter() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPath(pathname);
  const href = (path: string) => withLocalePath(path, locale);

  return (
    <footer className="border-t border-amber-100 bg-white/80">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-800">MomTools</span>
              <span className="text-xs text-slate-400">
                {locale === "ko" ? "육아 도구 · 정보 · 체크리스트" : "tools · guides · checklists for parents"}
              </span>
            </div>
            <p className="mt-2 max-w-2xl text-xs leading-relaxed text-slate-500">
              {locale === "ko" ? (
                <>
                  본 사이트의 계산 결과와 정보는 육아 계획을 돕기 위한 참고용입니다.<br />
                  실제 진료, 접종, 성장 판단은 의료진 안내와 공공기관 기준을 우선해 주세요.
                </>
              ) : (
                <>
                  Results and guides on this site are for planning and educational use.<br />
                  For diagnosis, vaccines, and growth decisions, follow your clinician and official guidance first.
                </>
              )}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <FooterLink href={href("/about")}>{locale === "ko" ? "사이트 소개" : "About"}</FooterLink>
            {locale === "ko" ? <FooterLink href="/policy/pregnancy-birth">임신·출산 지원</FooterLink> : null}
            {locale === "ko" ? <FooterLink href="/policy/local-check">지역별 출산지원금</FooterLink> : null}
            {locale === "ko" ? <FooterLink href="/family-health-qna/family">가족 생활 건강</FooterLink> : null}
            {locale === "ko" ? <FooterLink href="/items/essential">육아용품 Q&A</FooterLink> : null}
            <FooterLink href={href("/faq")}>FAQ</FooterLink>
            <FooterLink href={href("/contact")}>{locale === "ko" ? "문의하기" : "Contact"}</FooterLink>
            <FooterLink href={href("/privacy")}>{locale === "ko" ? "개인정보처리방침" : "Privacy"}</FooterLink>
            <FooterLink href={href("/terms")}>{locale === "ko" ? "이용약관" : "Terms"}</FooterLink>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-amber-50 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-slate-400">© {new Date().getFullYear()} MomTools. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
            <span className="text-slate-400">
              {locale === "ko" ? "관련 채널" : "Related links"}
            </span>
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
