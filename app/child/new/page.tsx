import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import ChildProfileForm from "@/components/child/ChildProfileForm";
import { getCurrentUser } from "@/lib/auth/session";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "아이 정보 등록",
  description: "아이 생년월일을 등록하고 내 아이 기준으로 육아 정보를 확인하세요.",
  robots: { index: false, follow: false },
};

export default async function NewChildPage() {
  const user = await getCurrentUser();

  if (!user) redirect("/login?next=/child/new");

  const hasChildren = user.children.length > 0;

  return (
    <main className="mt-page">
      <div className="mt-container max-w-xl space-y-5">
        <section className="mt-card p-5 md:p-7">
          <span className="mt-badge">{hasChildren ? "아이 추가" : "내 아이 홈 준비"}</span>
          <h1 className="mt-title-lg mt-4">{hasChildren ? "아이를 추가로 등록해 주세요" : "아이 생년월일을 등록해 주세요"}</h1>
          <p className="mt-text-main mt-3">
            {hasChildren
              ? "아이를 여러 명 등록하면 내 아이 홈에서 아이별로 따로 선택해 확인할 수 있어요. 가족 연결을 하면 엄마와 아빠가 같은 기록을 함께 볼 수 있어요."
              : "한 번만 등록하면 월령, 주요 날짜, 이유식 시기, 발달 체크를 내 아이 기준으로 확인할 수 있어요. 가족 연결을 하면 다른 보호자도 같은 기록을 함께 볼 수 있어요."}
          </p>
          {hasChildren ? (
            <Link href="/my" className="mt-4 inline-flex rounded-full bg-slate-100 px-3 py-2 text-[12px] font-extrabold text-slate-700 transition active:scale-[0.98] hover:bg-slate-200">
              내 아이 홈으로 돌아가기
            </Link>
          ) : null}
        </section>

        <ChildProfileForm submitLabel={hasChildren ? "아이 추가하기" : "아이 정보 저장하기"} />
      </div>
    </main>
  );
}
