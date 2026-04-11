import type { Metadata } from "next";
import Link from "next/link";
import BabyAgeCalculatorClient from "@/app/cal/baby-age/BabyAgeCalculatorClient";
import ContentUpdateNote from "@/components/common/ContentUpdateNote";
import { buildCanonical, getPageDates } from "@/lib/content-meta";

const pageDates = getPageDates("/tools/baby-age");

export const metadata: Metadata = {
  title: "아기 개월수 계산기 | 월령 해석과 육아 일정 정리 | MomTools",
  description:
    "생년월일을 기준으로 아기 개월수와 일수를 확인하고, 수면·수유·접종·이유식처럼 월령 기준으로 많이 찾는 육아 흐름까지 함께 살펴볼 수 있는 MomTools 계산기입니다.",
  alternates: { canonical: buildCanonical("/tools/baby-age") },
};

const faq = [
  ["아기 개월수를 왜 정확히 확인해야 하나요?", "예방접종, 이유식 시작, 발달 체크처럼 월령 기준으로 안내되는 정보가 많기 때문입니다. 개월수가 다르면 같은 나이로 보여도 참고 기준이 달라질 수 있습니다."],
  ["개월수와 나이는 어떻게 다르게 보나요?", "일상에서는 몇 살이라고 표현하지만 육아에서는 월령이 더 세밀한 기준이 됩니다. 특히 생후 24개월 전후까지는 월령 차이가 생활 루틴과 발달 체크에 영향을 줄 수 있습니다."],
  ["계산 결과를 어디에 가장 먼저 연결하면 좋을까요?", "예방접종 일정, 이유식 시작 시기, 성장 백분위처럼 월령을 기반으로 해석하는 페이지와 함께 보는 것이 가장 효율적입니다."],
] as const;

export default function Page() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">월령 기준 정리</span>
          <h1 className="mt-title-xl mt-5">아기 개월수를 정확히 알면 다음에 볼 정보가 쉬워집니다</h1>
          <p className="mt-text-main mt-4">
            아기 개월수 계산기는 생년월일을 기준으로 현재 월령과 일수를 빠르게 확인하는 도구입니다.
            단순히 숫자만 보는 용도가 아니라, 지금 시기에 맞는 접종 일정, 이유식 시작, 성장 체크, 놀이 수준을 연결해서 이해하는 데 도움이 됩니다.
          </p>
        </section>

        <BabyAgeCalculatorClient />

        <ContentUpdateNote
          publishedOn={pageDates.published}
          updatedOn={pageDates.updated}
          note="월령 계산 페이지는 부모가 개월수 숫자를 실제 육아 일정에 연결해 이해할 수 있도록 설명과 내부 링크 흐름을 함께 점검합니다."
        />

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="mt-card p-6 md:p-8">
            <h2 className="mt-title-lg">개월수를 볼 때 가장 많이 연결되는 주제</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 md:text-base">
              <li className="rounded-2xl bg-amber-50/70 px-4 py-4">예방접종 일정은 월령 기준으로 확인하는 경우가 많아 개월수 계산과 바로 이어집니다.</li>
              <li className="rounded-2xl bg-amber-50/70 px-4 py-4">이유식 시작 여부, 식감 단계 조절, 새 재료 추가 시점도 월령을 기준으로 정리하면 편합니다.</li>
              <li className="rounded-2xl bg-amber-50/70 px-4 py-4">성장 백분위와 발달 흐름은 한 번의 숫자보다 월령대 흐름으로 같이 보는 편이 이해하기 쉽습니다.</li>
            </ul>
          </article>

          <article className="mt-card p-6 md:p-8">
            <h2 className="mt-title-lg">숫자보다 중요한 해석 포인트</h2>
            <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
              <p>
                아기 개월수는 다른 아이와 비교하기 위한 숫자라기보다, 지금 내 아이에게 어떤 정보가 필요한지 선택하는 기준에 가깝습니다.
                같은 한 살 미만이라도 생후 3개월과 8개월은 수면, 수유, 접종, 놀이 패턴이 크게 다를 수 있기 때문에 월령 기준을 보는 습관이 유용합니다.
              </p>
              <p>
                개월수 계산 결과를 확인했다면 그다음에는 지금 시기에 맞는 루틴과 일정 정리로 연결해 보세요. 이렇게 보면 검색을 반복하지 않아도 필요한 정보를 한 번에 찾기 쉽습니다.
              </p>
            </div>
          </article>
        </section>

        <section className="mt-card p-6 md:p-8">
          <h2 className="mt-title-lg">자주 묻는 질문</h2>
          <div className="mt-5 space-y-4">
            {faq.map(([q, a]) => (
              <article key={q} className="rounded-3xl border border-slate-100 bg-white p-5">
                <h3 className="text-base font-semibold text-slate-900">{q}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">{a}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">함께 보면 좋은 페이지</div>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Link href="/tools/vaccine-schedule" className="mt-list-card"><div className="font-semibold text-slate-800">예방접종 일정 계산기</div><div className="mt-2 text-sm text-slate-500">개월수 계산 뒤 바로 접종 흐름을 이어서 보기 좋습니다.</div></Link>
            <Link href="/tools/weaning-start" className="mt-list-card"><div className="font-semibold text-slate-800">이유식 시작 계산기</div><div className="mt-2 text-sm text-slate-500">월령을 확인했다면 이유식 시작 시기도 함께 정리해 보세요.</div></Link>
            <Link href="/tools/growth-percentile" className="mt-list-card"><div className="font-semibold text-slate-800">성장 백분위 계산기</div><div className="mt-2 text-sm text-slate-500">월령과 함께 보면 성장 결과를 더 자연스럽게 해석할 수 있습니다.</div></Link>
            <Link href="/info/newborn" className="mt-list-card"><div className="font-semibold text-slate-800">신생아 정보</div><div className="mt-2 text-sm text-slate-500">초기 수면, 수유, 생활 루틴 흐름을 함께 확인해 보세요.</div></Link>
          </div>
        </section>
      </div>
    </div>
  );
}
