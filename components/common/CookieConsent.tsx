"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const STORAGE_KEY = "momtools_cookie_consent_v1";

type ConsentValue = "accepted" | "rejected";

function isEnglishPath(pathname: string | null): boolean {
  if (!pathname) return false;
  return pathname === "/en" || pathname.startsWith("/en/");
}

const COPY = {
  ko: {
    title: "쿠키 사용 안내",
    body:
      "MomTools는 사이트 이용 통계, 콘텐츠 품질 개선, 그리고 Google AdSense를 포함한 광고 파트너의 맞춤형 광고 제공을 위해 쿠키를 사용할 수 있어요. ‘동의’를 선택하면 광고용 쿠키 사용에도 동의하게 되며, ‘맞춤형 광고 거부’를 선택하면 비맞춤형 광고만 표시되도록 설정해요.",
    accept: "동의",
    reject: "맞춤형 광고 거부",
    privacy: "개인정보처리방침 보기",
  },
  en: {
    title: "Cookies on MomTools",
    body:
      "We use cookies to keep the site working well, measure usage, and — through Google AdSense and other advertising partners — show more relevant ads. Choose “Accept” to allow personalized ads, or “Reject personalized ads” to limit ad cookies to non-personalized advertising.",
    accept: "Accept",
    reject: "Reject personalized ads",
    privacy: "Read our privacy policy",
  },
} as const;

export default function CookieConsent() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const lang = isEnglishPath(pathname) ? "en" : "ko";
  const copy = COPY[lang];
  const privacyHref = lang === "en" ? "/en/privacy" : "/privacy";

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        setVisible(true);
      }
    } catch {
      // localStorage may be unavailable (private browsing, etc.)
      setVisible(true);
    }
  }, []);

  const writeConsent = (value: ConsentValue) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Ignore storage errors; the banner will simply re-appear next visit.
    }

    // Pass the signal to Google AdSense if its consent API is loaded.
    type GoogleTag = { cmd: { push: (cb: () => void) => void } };
    type WindowWithGoogletag = Window & {
      googletag?: GoogleTag;
      adsbygoogle?: unknown[] & { requestNonPersonalizedAds?: number };
    };
    const w = window as WindowWithGoogletag;
    try {
      if (value === "rejected") {
        w.adsbygoogle = w.adsbygoogle ?? [];
        (w.adsbygoogle as unknown as { requestNonPersonalizedAds: number }).requestNonPersonalizedAds = 1;
      }
    } catch {
      // No-op
    }

    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-3 pb-3 sm:px-6 sm:pb-6">
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-2xl backdrop-blur sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-5">
          <div className="flex-1 text-sm leading-7 text-slate-700">
            <div className="text-base font-bold text-slate-900">{copy.title}</div>
            <p className="mt-1 text-sm leading-7 text-slate-600">{copy.body}</p>
            <Link
              href={privacyHref}
              className="mt-2 inline-block text-xs font-semibold text-amber-700 underline underline-offset-4"
            >
              {copy.privacy}
            </Link>
          </div>
          <div className="flex flex-col gap-2 sm:w-44">
            <button
              type="button"
              onClick={() => writeConsent("accepted")}
              className="rounded-2xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-600"
            >
              {copy.accept}
            </button>
            <button
              type="button"
              onClick={() => writeConsent("rejected")}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300"
            >
              {copy.reject}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
