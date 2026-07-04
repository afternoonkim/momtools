import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import SearchBox from "@/components/layout/SearchBox";
import RecentViewedPages from "@/components/common/RecentViewedPages";
import MyChildHome from "@/components/child/MyChildHome";
import { getCurrentUser } from "@/lib/auth/session";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "아이를 키우는 모든 순간을 더 쉽게 | MomTools",
  description:
    "아기 개월수, 예방접종, 이유식, 성장, 건강 신호와 육아 체크리스트를 부모가 모바일에서 바로 확인할 수 있게 정리한 MomTools 홈입니다.",
  keywords: [
    "육아 계산기",
    "아기 개월수 계산기",
    "예방접종 일정",
    "이유식 시작 시기",
    "아기 열",
    "육아 Q&A",
    "육아 체크리스트",
    "MomTools",
  ],
  openGraph: {
    title: "아이를 키우는 모든 순간을 더 쉽게 | MomTools",
    description: "필요한 육아 정보를 검색하고, 최근 확인한 페이지로 빠르게 이어서 볼 수 있습니다.",
    url: "https://momtools.kr/",
    siteName: "MomTools",
    locale: "ko_KR",
    type: "website",
  },
};

const quickLinks = [
  { label: "출산 예정일", href: "/tools/due-date" },
  { label: "성장 백분위", href: "/tools/growth-percentile" },
  { label: "아이 건강", href: "/qna/health" },
  { label: "월령별 가이드", href: "/monthly-guide" },
  { label: "체크리스트", href: "/checklists" },
  { label: "정부지원정책", href: "/policy" },
];

function PublicHome() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-6 md:space-y-8">
        <section className="mx-auto flex min-h-[58vh] max-w-3xl flex-col items-center justify-center px-1 py-8 text-center md:py-14">
          <span className="mt-badge">MomTools</span>
          {/* <h1 className="mt-home-slogan mt-5">아이를 키우는 모든 순간을 더 쉽게</h1> */}

          <div className="mt-7 w-full max-w-2xl">
            <SearchBox
              placeholder="아기 열, 개월수, 예방접종, 이유식 검색"
              className="min-h-14 rounded-[24px] px-4 py-3 text-base shadow-[0_14px_28px_rgba(245,158,11,0.12)]"
            />
          </div>

          <div className="mt-4 flex max-w-2xl flex-wrap justify-center gap-2">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="mt-chip-link">
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <RecentViewedPages limit={3} className="shrink-0" />
      </div>
    </div>
  );
}

export default async function HomePage({ searchParams }: { searchParams?: Promise<{ childId?: string }> }) {
  const user = await getCurrentUser();

  if (!user) return <PublicHome />;
  if (!user.children.length) redirect("/child/new");

  const params = await searchParams;

  return <MyChildHome user={user} selectedChildId={params?.childId} baseHref="/" showLogout={false} />;
}
