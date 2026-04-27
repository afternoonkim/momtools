import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없어요",
  description: "MomTools에서 요청하신 페이지를 찾을 수 없습니다. 자주 찾는 메뉴로 빠르게 돌아가 보세요.",
  robots: { index: false, follow: true },
};

const quickLinks = [
  { href: "/tools", title: "계산기 모아보기", description: "출산 예정일, 아기 개월수, 성장 백분위처럼 자주 찾는 도구를 바로 볼 수 있어요." },
  { href: "/qna", title: "육아 Q&A", description: "건강, 성장, 행동 질문을 주제별로 정리한 설명형 답변을 확인해 보세요." },
  { href: "/info", title: "육아 정보", description: "임신, 신생아, 이유식, 유아 시기의 핵심 흐름을 한눈에 볼 수 있어요." },
  { href: "/play", title: "놀이 자료", description: "색칠공부, 미로찾기, 숨은그림찾기처럼 집에서 바로 활용할 자료를 살펴볼 수 있어요." },
  { href: "/checklists", title: "체크리스트", description: "출산 준비, 신생아 준비, 이유식 준비, 어린이집 준비를 차례대로 정리할 수 있어요." },
];

export default function NotFoundPage() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card p-8 md:p-10 text-center">
          <span className="mt-badge">404</span>
          <h1 className="mt-title-xl mt-5">찾으시는 페이지를 열 수 없어요</h1>
          <p className="mt-text-main mt-4">
            주소가 바뀌었거나 더 이상 제공되지 않는 페이지일 수 있어요. 오래된 북마크나 잘못된 주소로 들어오셨다면, 아래 자주 찾는 메뉴에서 필요한 내용을 다시 찾아 보세요.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/" className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white">홈으로 가기</Link>
            <Link href="/qna" className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700">육아 Q&amp;A 보기</Link>
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-900">이 메뉴부터 다시 살펴보세요</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {quickLinks.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200">
                <div className="font-semibold text-slate-800">{item.title}</div>
                <div className="mt-2 text-sm leading-7 text-slate-500">{item.description}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
