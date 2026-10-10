import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "자주 묻는 질문 | MomTools",
  description:
    "계산 결과를 어떻게 봐야 하는지, 건강·육아 정보는 어디까지 참고해야 하는지, 외부 링크와 문의는 어떻게 이용하는지 확인해 보세요.",
};

const faqSections = [
  {
    title: "계산·확인 도구",
    items: [
      {
        question: "MomTools의 계산 결과는 진단 결과인가요?",
        answer:
          "아니요. 계산 결과는 날짜나 기준을 빠르게 정리하기 위한 참고 정보입니다. 증상, 성장, 약 복용, 예방접종처럼 의료적 판단이 필요한 내용은 의료진과 공식 기관 안내를 우선해 주세요.",
      },
      {
        question: "MomTools의 기본 도구는 무료로 이용할 수 있나요?",
        answer:
          "네. MomTools에서 제공하는 계산·확인 도구와 기본 정보 페이지는 무료로 이용할 수 있습니다.",
      },
      {
        question: "출산 예정일 계산 결과는 어떻게 봐야 하나요?",
        answer:
          "마지막 생리 시작일 등을 기준으로 예상 일정을 확인하는 용도입니다. 진료 중 의료진이 예정일을 따로 정하거나 수정했다면 병원에서 안내받은 날짜를 우선해 주세요.",
      },
      {
        question: "아기 개월수는 왜 정확히 확인하는 게 좋나요?",
        answer:
          "예방접종, 이유식, 성장·발달, 생활 습관 정보는 개월수 기준으로 안내되는 경우가 많습니다. 생년월일을 기준으로 현재 월령을 확인하면 관련 정보를 찾기 쉬워져요.",
      },
      {
        question: "예방접종 일정은 계산 결과대로 진행하면 되나요?",
        answer:
          "아니요. 월령별 접종 시기를 미리 확인하는 참고용입니다. 실제 접종 일정은 질병관리청 예방접종 안내, 아이의 기존 접종 기록, 병원·보건소 안내와 건강 상태를 함께 확인해 주세요.",
      },
      {
        question: "성장도표에서 낮거나 높게 보이면 바로 문제가 있는 건가요?",
        answer:
          "한 번의 위치만으로 정상·비정상을 판단할 수는 없습니다. 같은 조건에서 측정한 이전 기록과 비교해 성장 흐름이 이어지는지 보는 것이 중요하며, 증가가 멈추거나 감소하는 흐름이 반복되거나 다른 증상이 함께 있으면 소아청소년과 상담을 고려하세요.",
      },
    ],
  },
  {
    title: "육아·건강 정보",
    items: [
      {
        question: "정보 페이지는 병원이나 공공기관의 공식 자료인가요?",
        answer:
          "아니요. MomTools는 부모가 이해하기 쉽게 내용을 정리한 참고용 서비스입니다. 건강, 진료, 지원정책처럼 중요한 결정은 연결된 공식 기관이나 전문가의 최신 안내를 최종 기준으로 확인해 주세요.",
      },
      {
        question: "임신, 신생아, 이유식, 유아 정보는 어떻게 활용하면 좋나요?",
        answer:
          "지금 시기에 먼저 확인할 기준을 빠르게 파악하는 용도로 활용해 보세요. 아이의 건강 상태나 성장 이력처럼 개인차가 큰 내용은 일반적인 안내만으로 판단하지 않는 것이 좋습니다.",
      },
      {
        question: "체크리스트에 있는 항목을 모두 준비해야 하나요?",
        answer:
          "아니요. 체크리스트는 빠뜨리기 쉬운 항목을 확인하기 위한 참고용입니다. 계절, 가정 환경, 병원 안내, 어린이집 규정에 따라 필요한 항목만 골라 사용하세요.",
      },
    ],
  },
  {
    title: "외부 링크와 육아용품",
    items: [
      {
        question: "육아용품 가이드의 외부 링크는 왜 제공하나요?",
        answer:
          "선택 기준을 확인한 뒤 필요한 경우 상품 정보를 이어서 비교할 수 있도록 연결합니다. 가격, 구성, 배송, 사용 조건은 연결된 판매처의 최신 정보를 기준으로 확인해 주세요.",
      },
      {
        question: "제휴 링크를 이용하면 가격이 더 비싸지나요?",
        answer:
          "일반적으로 링크 이용 때문에 별도 비용이 추가되는 방식은 아니지만, 실제 가격과 혜택은 판매처 정책에 따라 달라질 수 있습니다. 결제 전 판매처의 최종 가격을 확인해 주세요.",
      },
      {
        question: "MomTools가 특정 상품의 품질이나 안전성을 보증하나요?",
        answer:
          "아니요. 육아용품 가이드는 구매 전에 확인할 기준을 정리하는 데 도움을 주기 위한 정보입니다. 실제 제품의 규격, 사용 연령, 주의사항, 리콜 여부 등은 제조사와 공식 판매처의 최신 안내를 확인해 주세요.",
      },
    ],
  },
  {
    title: "문의와 개인정보",
    items: [
      {
        question: "오류나 잘못된 내용은 어디로 알려주면 되나요?",
        answer:
          "문의하기 페이지를 이용해 주세요. 페이지 주소와 어떤 내용이 잘못 보이는지 함께 적어주면 확인하는 데 도움이 됩니다.",
      },
      {
        question: "문의할 때 개인정보를 많이 적어야 하나요?",
        answer:
          "아니요. 꼭 필요한 내용만 남겨 주세요. 특히 아이 실명, 전체 생년월일, 상세 진료기록, 검사 결과, 사진처럼 민감한 정보는 보내지 않는 것을 권장합니다.",
      },
      {
        question: "아이의 건강 문제를 문의하면 상담받을 수 있나요?",
        answer:
          "개인별 진단이나 치료 상담은 제공하지 않습니다. 아이가 아프거나 상태가 걱정된다면 문의 페이지보다 의료기관이나 필요한 경우 응급의료 안내를 우선해 주세요.",
      },
      {
        question: "개인정보처리방침과 이용약관은 어디서 확인하나요?",
        answer:
          "페이지 하단의 개인정보처리방침과 이용약관에서 정보 처리 방식, 서비스 이용 범위, 외부 서비스 관련 안내를 확인할 수 있습니다.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">FAQ</span>
          <h1 className="mt-title-lg mt-4">자주 묻는 질문</h1>
          <p className="mt-text-main mt-4">
            계산 결과를 어떻게 봐야 하는지, 건강·육아 정보는 어디까지 참고하면 되는지, 외부 링크와 문의는 어떻게 이용하는지 궁금한 내용을 찾아보세요.
          </p>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-800">먼저 기억해 주세요</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-white p-5 text-sm leading-7 text-slate-600">
              계산과 정보 페이지는 빠르게 기준을 확인하기 위한 참고용입니다.
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-5 text-sm leading-7 text-slate-600">
              상품 정보와 지원정책은 구매·신청 직전에 공식 페이지의 최신 내용을 확인해 주세요.
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-5 text-sm leading-7 text-slate-600">
              아이의 건강 문제가 걱정될 때는 사이트 문의보다 의료기관 상담을 우선해 주세요.
            </div>
          </div>
        </section>

        {faqSections.map((section) => (
          <section key={section.title} className="mt-card p-8 md:p-10">
            <h2 className="text-2xl font-bold tracking-tight text-slate-800">{section.title}</h2>
            <div className="mt-6 space-y-4">
              {section.items.map((item) => (
                <article key={item.question} className="rounded-2xl border border-amber-100 bg-white p-5">
                  <h3 className="text-base font-semibold text-slate-800 md:text-lg">{item.question}</h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600 md:text-base">{item.answer}</p>
                </article>
              ))}
            </div>
          </section>
        ))}

        <section className="mt-card-soft p-8 md:p-10">
          <h2 className="text-xl font-bold text-slate-800">더 확인하기</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <Link href="/privacy" className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="font-semibold text-slate-800">개인정보처리방침</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">어떤 정보를 어떻게 다루는지 확인해 보세요.</div>
            </Link>
            <Link href="/terms" className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="font-semibold text-slate-800">이용약관</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">서비스 이용 범위와 참고 기준을 확인해 보세요.</div>
            </Link>
            <Link href="/contact" className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200">
              <div className="font-semibold text-slate-800">문의하기</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">오류 제보나 내용 수정 요청을 보낼 수 있어요.</div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
