import type { Metadata } from "next";
import Link from "next/link";
import KakaoLoginButton from "@/components/auth/KakaoLoginButton";
import { getCurrentUser, sanitizeNextPath } from "@/lib/auth/session";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "로그인",
  description: "카카오 로그인으로 아이 정보를 저장하고 MomTools를 더 편하게 이용하세요.",
  robots: { index: false, follow: false },
};

const errorMessages: Record<string, string> = {
  config: "로그인을 준비하는 중이에요. 잠시 후 다시 시도해 주세요.",
  state: "로그인 요청이 만료됐어요. 다시 시도해 주세요.",
  token: "카카오 로그인 연결이 원활하지 않았어요. 다시 시도해 주세요.",
  profile: "카카오 계정 정보를 확인하지 못했어요. 다시 시도해 주세요.",
  login: "로그인을 완료하지 못했어요. 다시 시도해 주세요.",
};

export default async function LoginPage({ searchParams }: { searchParams?: Promise<{ next?: string; error?: string }> }) {
  const user = await getCurrentUser();
  const params = await searchParams;
  const next = sanitizeNextPath(params?.next);

  if (user) {
    redirect(next === "/login" ? "/auth/after-login" : next);
  }

  const errorMessage = params?.error ? errorMessages[params.error] ?? errorMessages.login : "";

  return (
    <main className="mt-page">
      <div className="mt-container max-w-xl space-y-5">
        <section className="mt-card p-5 text-center md:p-7">
          <span className="mt-badge">MomTools 계정</span>
          <h1 className="mt-title-lg mt-4">아이 정보를 저장하고 더 빠르게 확인해요</h1>
          <p className="mt-text-main mt-3">
            카카오 로그인 후 아이의 애칭, 생년월일, 성별을 등록하면 개월수, 이유식 시기, 예방접종 흐름을 내 아이 기준으로 볼 수 있어요.
          </p>

          {errorMessage ? (
            <p className="mt-4 rounded-2xl bg-rose-50 px-4 py-3 text-[13px] font-bold leading-6 text-rose-700">{errorMessage}</p>
          ) : null}

          <div className="mt-6 flex justify-center">
            <KakaoLoginButton next={next} />
          </div>
        </section>

        <section className="mt-card-soft p-4">
          <h2 className="text-sm font-extrabold text-slate-900">아이 정보는 꼭 필요한 것만 받아요</h2>
          <p className="mt-2 text-[13px] leading-6 text-slate-600">
            MomTools는 내 아이 홈을 보여주기 위해 아이의 애칭, 생년월일, 성별만 입력받아요. 실명, 주민등록번호, 주소, 연락처, 사진, 진료기록은 요구하지 않으니 안심하고 이용해 주세요.
          </p>
          <Link href="/privacy" className="mt-3 inline-flex text-xs font-bold text-amber-700">
            개인정보 처리 안내 보기 →
          </Link>
        </section>
      </div>
    </main>
  );
}
