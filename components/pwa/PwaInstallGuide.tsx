"use client";

import { useEffect, useMemo, useState } from "react";
import { Download, X } from "lucide-react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

type PwaGuideState = {
  qualifiedAt?: number;
  dismissedUntil?: number;
};

const LEGACY_DISMISSED_KEY = "momtools:pwa-install-dismissed-at";
const INSTALLED_KEY = "momtools:pwa-installed";
const STATE_KEY_PREFIX = "momtools:pwa-install-guide";
const QUALIFIED_EVENT = "momtools:pwa-install-qualified";
const DAY_MS = 24 * 60 * 60 * 1000;

function isStandaloneMode() {
  if (typeof window === "undefined") return false;
  const navigatorWithStandalone = window.navigator as Navigator & {
    standalone?: boolean;
  };
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    navigatorWithStandalone.standalone === true
  );
}

function getScope(userId: string | null) {
  return userId ? `user:${userId}` : "guest";
}

function getStateKey(scope: string) {
  return `${STATE_KEY_PREFIX}:${scope}`;
}

function readState(scope: string): PwaGuideState {
  if (typeof window === "undefined") return {};

  const raw = window.localStorage.getItem(getStateKey(scope));
  if (raw) {
    try {
      const parsed = JSON.parse(raw) as PwaGuideState;
      return typeof parsed === "object" && parsed ? parsed : {};
    } catch {
      return {};
    }
  }

  const legacyDismissedAt = Number(
    window.localStorage.getItem(LEGACY_DISMISSED_KEY) ?? 0,
  );
  if (legacyDismissedAt > 0) {
    return {
      dismissedUntil: legacyDismissedAt + DAY_MS,
    };
  }

  return {};
}

function writeState(scope: string, state: PwaGuideState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(getStateKey(scope), JSON.stringify(state));
}

function markQualified(scope: string) {
  const current = readState(scope);
  if (!current.qualifiedAt) {
    writeState(scope, { ...current, qualifiedAt: Date.now() });
  }
}

function getEndOfToday() {
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  return end.getTime();
}

function hideUntilEndOfToday(scope: string) {
  const current = readState(scope);
  writeState(scope, {
    ...current,
    dismissedUntil: getEndOfToday(),
  });
}

function isInstalledOnThisDevice() {
  if (typeof window === "undefined") return true;
  return (
    isStandaloneMode() || window.localStorage.getItem(INSTALLED_KEY) === "1"
  );
}

function shouldShowGuide({
  scope,
  installPrompt,
  isIos,
  isSafari,
}: {
  scope: string;
  installPrompt: BeforeInstallPromptEvent | null;
  isIos: boolean;
  isSafari: boolean;
}) {
  if (typeof window === "undefined") return false;
  if (isInstalledOnThisDevice()) return false;

  const state = readState(scope);
  if (!state.qualifiedAt) return false;
  if (state.dismissedUntil && state.dismissedUntil > Date.now()) return false;

  const canUseBrowserPrompt = Boolean(installPrompt);
  const canGuideIosSafari = isIos && isSafari;
  return canUseBrowserPrompt || canGuideIosSafari;
}

export default function PwaInstallGuide() {
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);
  const [isIos, setIsIos] = useState(false);
  const [isSafari, setIsSafari] = useState(false);
  const [authLoaded, setAuthLoaded] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  const scope = useMemo(() => getScope(userId), [userId]);

  useEffect(() => {
    if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      navigator.serviceWorker.register("/sw.js").catch(() => undefined);
    }

    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsIos(/iphone|ipad|ipod/.test(userAgent));
    setIsSafari(/^((?!chrome|android|crios|fxios).)*safari/.test(userAgent));

    fetch("/api/auth/me", { cache: "no-store" })
      .then((response) => response.json())
      .then((data: { loggedIn?: boolean; user?: { id?: string } }) => {
        setUserId(data.loggedIn && data.user?.id ? data.user.id : null);
      })
      .catch(() => setUserId(null))
      .finally(() => setAuthLoaded(true));

    const onBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as BeforeInstallPromptEvent);
    };

    const onAppInstalled = () => {
      window.localStorage.setItem(INSTALLED_KEY, "1");
      setVisible(false);
      setInstallPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    window.addEventListener("appinstalled", onAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
      window.removeEventListener("appinstalled", onAppInstalled);
    };
  }, []);

  useEffect(() => {
    if (!authLoaded) return;
    setVisible(shouldShowGuide({ scope, installPrompt, isIos, isSafari }));
  }, [authLoaded, scope, installPrompt, isIos, isSafari]);

  useEffect(() => {
    if (!authLoaded) return;

    const onQualified = () => {
      markQualified(scope);
      setVisible(shouldShowGuide({ scope, installPrompt, isIos, isSafari }));
    };

    window.addEventListener(QUALIFIED_EVENT, onQualified);
    return () => window.removeEventListener(QUALIFIED_EVENT, onQualified);
  }, [authLoaded, scope, installPrompt, isIos, isSafari]);

  const installHint = useMemo(() => {
    if (isIos && isSafari && !installPrompt) {
      return "Safari 공유 버튼을 누른 뒤 ‘홈 화면에 추가’를 선택하면 돼요.";
    }
    return null;
  }, [installPrompt, isIos, isSafari]);

  if (!visible) return null;

  async function install() {
    if (!installPrompt) return;
    await installPrompt.prompt();
    const choice = await installPrompt.userChoice.catch(() => null);
    if (choice?.outcome === "accepted") {
      window.localStorage.setItem(INSTALLED_KEY, "1");
    } else {
      hideUntilEndOfToday(scope);
    }
    setVisible(false);
    setInstallPrompt(null);
  }

  function dismiss() {
    hideUntilEndOfToday(scope);
    setVisible(false);
  }

  return (
    <div
      className="fixed inset-x-3 bottom-[calc(4.5rem+env(safe-area-inset-bottom))] z-40 mx-auto max-w-xl rounded-[20px] border border-amber-100 bg-white/95 p-3 shadow-[0_14px_40px_rgba(15,23,42,0.16)] backdrop-blur lg:hidden"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start gap-2.5">
        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
          <Download size={16} aria-hidden />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[13px] font-black leading-5 text-slate-900">
            기록을 더 편하게 남기고 싶다면
            <br />
            홈 화면에 추가해보세요.
          </p>
          <p className="mt-0.5 text-[11px] leading-4 text-slate-500">
            이유식 기록, 발달 체크, 아이 정보를 앱처럼 바로 열 수 있어요.
          </p>
          {installHint ? (
            <p className="mt-1 text-[10px] leading-4 text-amber-700">
              {installHint}
            </p>
          ) : null}
          <div className="mt-2 flex items-center gap-1.5">
            {installPrompt ? (
              <button
                type="button"
                onClick={install}
                className="whitespace-nowrap rounded-full bg-amber-500 px-2.5 py-1.5 text-[10px] font-extrabold leading-none text-white active:scale-[0.98]"
              >
                홈 화면에 추가
              </button>
            ) : (
              <span className="whitespace-nowrap rounded-full bg-amber-50 px-2.5 py-1.5 text-[10px] font-extrabold leading-none text-amber-800">
                공유 → 홈 화면에 추가
              </span>
            )}
            <button
              type="button"
              onClick={dismiss}
              className="whitespace-nowrap rounded-full bg-slate-50 px-2.5 py-1.5 text-[10px] font-extrabold leading-none text-slate-600 active:scale-[0.98]"
            >
              오늘 하루 보지 않기
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={dismiss}
          className="rounded-full p-1 text-slate-400 active:bg-slate-100"
          aria-label="홈 화면 추가 안내 닫기"
        >
          <X size={15} aria-hidden />
        </button>
      </div>
    </div>
  );
}
