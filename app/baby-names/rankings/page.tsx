import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "인기 이름 순위",
  description:
    "최근 부모들이 많이 참고하는 부드럽고 세련된 느낌의 이름 흐름을 남아와 여아로 나누어 보기 쉽게 정리했습니다.",
};

const boyNames = [
  "이준", "서준", "도윤", "하준", "은우", "지호", "건우", "시우", "유준", "민준",
  "현우", "우주", "준우", "이안", "도현", "선우", "정우", "주원", "예준", "지후",
];
const girlNames = [
  "서아", "하윤", "지아", "서윤", "하은", "시아", "지우", "채원", "유나", "윤서",
  "하린", "소율", "지안", "예나", "아린", "나은", "이서", "서하", "채아", "다은",
];

function RankingList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mt-card p-6 md:p-8">
      <span className="mt-badge">{title}</span>
      <h2 className="mt-title-md mt-3">{title} TOP 20</h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((name, index) => (
          <div key={name} className="flex items-center gap-4 rounded-2xl border border-amber-100 bg-white px-4 py-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-sm font-bold text-amber-700">
              {index + 1}
            </div>
            <div className="text-base font-semibold text-slate-800">{name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function BabyNameRankingsPage() {
  return (
    <div className="mt-page">
      <div className="mt-container space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">이름 참고</span>
          <h1 className="mt-title-xl mt-5">인기 이름 순위</h1>
          <p className="mt-text-main mt-5 max-w-3xl">
            요즘 부모들이 선호하는 부드럽고 세련된 느낌의 이름을 간단히 참고할 수 있도록 정리했습니다.
            실제 작명은 성씨, 발음, 뜻, 가족이 느끼는 분위기를 함께 보고 결정하는 것이 좋습니다.
          </p>
        </section>
        <RankingList title="남아 이름" items={boyNames} />
        <RankingList title="여아 이름" items={girlNames} />
      </div>
    </div>
  );
}
