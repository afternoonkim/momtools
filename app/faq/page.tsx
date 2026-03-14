import type { Metadata } from "next";
import AdBlock from "@/components/ad/AdBlock";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "MomTools 자주 묻는 질문 페이지입니다. 계산기 결과, 정확도, 문의 방법, 제휴 링크, 개인정보와 이용 정책 관련 내용을 확인할 수 있습니다.",
};

const faqSections = [
  {
    title: "계산기 이용 관련",
    items: [
      {
        question: "MomTools의 계산 결과는 정확한 진단인가요?",
        answer:
          "아니요. MomTools의 계산 결과는 빠른 참고를 위한 보조 정보입니다. 실제 의료적 판단, 진단, 치료 결정은 반드시 의료진 상담 또는 공공기관 안내를 기준으로 확인해 주세요.",
      },
      {
        question: "MomTools 계산기는 무료인가요?",
        answer:
          "네. MomTools에서 제공하는 계산기와 기본 정보 페이지는 무료로 이용할 수 있도록 구성되어 있습니다. 다만 사이트 구조, 기능, 운영 정책은 추후 변경될 수 있습니다.",
      },
      {
        question: "출산 예정일 계산기는 어떤 용도로 보면 되나요?",
        answer:
          "마지막 생리 시작일 또는 임신 주수를 기준으로 예정일과 현재 임신 주차를 대략 확인하는 용도입니다. 실제 진료 중 수정된 예정일이 있다면 병원에서 안내받은 날짜를 우선해 주세요.",
      },
      {
        question: "아기 개월수 계산기는 왜 필요한가요?",
        answer:
          "예방접종, 이유식, 성장 발달, 생활 습관 정보는 개월수 기준으로 안내되는 경우가 많습니다. 아기의 생년월일 기준 현재 개월 단계를 빠르게 확인하는 참고 도구로 사용할 수 있습니다.",
      },
      {
        question: "예방접종 일정 계산기는 그대로 따라도 되나요?",
        answer:
          "월령 기준 흐름을 빠르게 보는 용도입니다. 실제 접종 가능 여부와 일정은 질병관리청 예방접종 안내, 보건소, 병원 일정, 아이의 건강 상태를 함께 고려해 확인해야 합니다.",
      },
      {
        question: "성장 백분위 계산 결과만으로 정상 여부를 판단해도 되나요?",
        answer:
          "아니요. 성장 백분위는 참고용 지표일 뿐이며, 아이의 성장 속도, 출생 이력, 건강 상태, 진료 기록 등을 함께 봐야 합니다. 지속적으로 걱정되는 경우 소아청소년과 상담이 필요합니다.",
      },
      {
        question: "모바일에서도 사용할 수 있나요?",
        answer:
          "네. MomTools는 모바일과 PC 환경 모두에서 사용할 수 있도록 구성되어 있습니다. 다만 기기 환경에 따라 화면 배치가 조금 다르게 보일 수 있습니다.",
      },
    ],
  },
  {
    title: "정보 콘텐츠 관련",
    items: [
      {
        question: "정보 페이지는 의료 기관 공식 자료인가요?",
        answer:
          "MomTools의 정보 페이지는 부모가 이해하기 쉬운 형태로 핵심 내용을 정리한 안내형 콘텐츠입니다. 공식 진료 지침이나 법적 효력을 가진 문서가 아니며, 최종 판단 전에는 반드시 공식 기관과 전문가 정보를 확인해 주세요.",
      },
      {
        question: "임신, 신생아, 이유식, 유아 정보는 누구에게 도움이 되나요?",
        answer:
          "초보 부모, 출산 준비 중인 가정, 육아 정보를 빠르게 정리하고 싶은 사용자에게 특히 도움이 되도록 구성했습니다. 긴 글보다는 핵심 흐름과 체크 포인트를 빠르게 보는 데 초점을 두고 있습니다.",
      },
      {
        question: "육아 정보는 어디서 확인할 수 있나요?",
        answer:
          "MomTools 상단 메뉴 또는 홈 화면의 육아 정보 섹션에서 임신, 신생아, 이유식, 유아 관련 페이지를 확인할 수 있습니다. 계산기 사용 후 관련 정보 페이지로 함께 이동해 보면 더 이해하기 쉽습니다.",
      },
      {
        question: "체크리스트는 그대로 사용해도 되나요?",
        answer:
          "체크리스트는 일반적인 준비 흐름을 바탕으로 구성된 참고 자료입니다. 가정 환경, 계절, 병원 출산 준비물 정책, 어린이집 규정 등에 따라 필요한 항목은 달라질 수 있습니다.",
      },
      {
        question: "블로그 글이나 유튜브 콘텐츠는 계속 추가되나요?",
        answer:
          "프로젝트 구조상 콘텐츠 확장이 가능한 형태로 구성되어 있습니다. 실제 운영 시 API 또는 수동 업데이트 방식에 따라 블로그와 유튜브 콘텐츠를 계속 보강할 수 있습니다.",
      },
    ],
  },
  {
    title: "육아용품 / 외부 링크 / 제휴 관련",
    items: [
      {
        question: "육아용품 페이지의 링크는 어떤 성격인가요?",
        answer:
          "운영 방식에 따라 일반 정보 링크일 수도 있고, 제휴 링크일 수도 있습니다. 제휴 링크가 포함될 경우 관련 법령과 플랫폼 정책에 따라 광고 또는 제휴 고지 문구를 명확히 표시하는 것이 좋습니다.",
      },
      {
        question: "제휴 링크가 있으면 사용자에게 불이익이 있나요?",
        answer:
          "일반적으로 사용자가 추가 비용을 부담하는 구조는 아니지만, 구매처 정책이나 가격은 수시로 바뀔 수 있습니다. 구매 전에는 실제 상품 페이지의 가격, 배송, 교환, 환불 조건을 다시 확인해 주세요.",
      },
      {
        question: "MomTools가 특정 상품의 품질을 보증하나요?",
        answer:
          "아니요. MomTools는 육아용품 탐색 편의를 위한 정보 연결 역할을 할 수 있으나, 특정 상품의 성능, 안전성, 만족도를 보증하지 않습니다. 최종 선택은 상품 상세정보와 후기, 판매처 정책을 충분히 확인한 뒤 진행해 주세요.",
      },
    ],
  },
  {
    title: "문의 / 개인정보 / 운영 정책 관련",
    items: [
      {
        question: "문의는 어떻게 보내면 되나요?",
        answer:
          "문의하기 페이지에서 운영자가 안내한 이메일 또는 문의 채널을 통해 전달하면 됩니다. 오류 제보의 경우 사용 기기, 화면, 문제 발생 경로를 함께 남기면 확인에 도움이 됩니다.",
      },
      {
        question: "개인정보를 많이 입력해야 하나요?",
        answer:
          "MomTools는 기본적으로 회원가입 없이 이용하는 구조를 지향합니다. 문의 기능을 운영하는 경우에도 가능한 한 최소한의 정보만 수집하는 방향을 권장합니다.",
      },
      {
        question: "개인정보처리방침과 이용약관은 왜 필요한가요?",
        answer:
          "사이트가 정보를 제공하고 문의를 받으며 외부 서비스, 광고, 분석 도구를 연동할 수 있기 때문에 이용자에게 운영 기준을 명확히 안내하기 위한 기본 페이지가 필요합니다.",
      },
      {
        question: "정책 내용은 변경될 수 있나요?",
        answer:
          "네. 서비스 구조, 외부 서비스 연동, 법령 변화, 운영 정책 변경에 따라 개인정보처리방침과 이용약관은 수정될 수 있습니다. 중요한 변경이 있을 경우 페이지 내 공지 또는 개정일 갱신 형태로 반영하는 것이 좋습니다.",
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
            MomTools를 이용하면서 가장 자주 궁금해할 수 있는 내용을 한곳에 정리했습니다.
            계산기 결과의 의미, 정보 콘텐츠의 활용 범위, 육아용품 링크, 문의 방법,
            개인정보와 이용 정책 관련 기준까지 빠르게 확인할 수 있습니다.
          </p>
        </section>

        <AdBlock label="FAQ 상단 광고 영역" format="horizontal" />

        {faqSections.map((section, index) => (
          <section key={section.title} className="mt-card p-8 md:p-10">
            <h2 className="text-2xl font-bold tracking-tight text-slate-800">
              {section.title}
            </h2>

            <div className="mt-6 space-y-4">
              {section.items.map((item) => (
                <article
                  key={item.question}
                  className="rounded-2xl border border-amber-100 bg-white p-5"
                >
                  <h3 className="text-base font-semibold text-slate-800 md:text-lg">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm leading-8 text-slate-600 md:text-base">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>

            {index === 1 ? <AdBlock label="FAQ 중단 광고 영역" format="rectangle" /> : null}
          </section>
        ))}

        <section className="mt-card-soft p-8 md:p-10">
          <h2 className="text-xl font-bold text-slate-800">안내</h2>
          <p className="mt-4 text-sm leading-8 text-slate-600 md:text-base">
            FAQ의 내용은 MomTools 이용 편의를 위한 일반 안내입니다. 실제 의료 판단,
            구매 결정, 법적 판단이 필요한 경우에는 공식 기관, 의료진, 판매처,
            전문가의 안내를 우선적으로 확인해 주세요.
          </p>
        </section>
      </div>
    </div>
  );
}