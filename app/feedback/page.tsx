import type { Metadata } from "next";
import Link from "next/link";
import FeedbackForm from "./FeedbackForm";

export const metadata: Metadata = {
  title: "의견 보내기 | MomTools",
  description: "MomTools를 이용하면서 불편했던 점, 오류, 필요한 기능을 가볍게 남겨주세요.",
  robots: { index: false, follow: true },
};

export default async function FeedbackPage({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string; type?: string }>;
}) {
  const params = await searchParams;
  const page = typeof params?.page === "string" ? params.page : "";
  const type = typeof params?.type === "string" ? params.type : "";

  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-5 md:space-y-6">
        <Link href="/" className="text-[13px] font-bold text-amber-700">
          ← 홈으로
        </Link>

        <section className="mt-page-hero">
          <span className="mt-badge">의견 보내기</span>
          <h1 className="mt-title-xl mt-4">MomTools를 더 쓰기 쉽게 만들게요</h1>
          <p className="mt-text-main mt-3">
            헷갈린 문장, 오류, 필요한 기능을 짧게 남겨주세요. 실제 사용자의 의견을 기준으로 화면과 콘텐츠를 계속 정리하겠습니다.
          </p>
        </section>

        <FeedbackForm initialPageUrl={page} initialType={type} />
      </div>
    </div>
  );
}
