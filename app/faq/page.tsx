import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "MomTools 자주 묻는 질문 페이지입니다. 계산기 활용 범위, 정보 콘텐츠의 성격, 외부 링크와 제휴, 문의 방법, 개인정보와 정책 페이지 관련 내용을 확인할 수 있습니다.",
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
          "네. MomTools에서 제공하는 계산기와 기본 정보 페이지는 무료로 이용할 수 있습니다. 다만 제공 범위나 안내 방식은 필요에 따라 달라질 수 있습니다.",
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
          "초보 부모, 출산 준비 중인 가정, 육아 흐름을 빠르게 정리하고 싶은 사용자에게 특히 도움이 되도록 구성했습니다. 긴 논문형 설명보다는 실제로 자주 궁금해하는 내용을 이해하기 쉽게 정리하는 데 초점을 두고 있습니다.",
      },
      {
        question: "체크리스트는 그대로 사용해도 되나요?",
        answer:
          "체크리스트는 일반적인 준비 흐름을 바탕으로 구성된 참고 자료입니다. 가정 환경, 계절, 병원 출산 준비물 정책, 어린이집 규정 등에 따라 필요한 항목은 달라질 수 있습니다.",
      },
      {
        question: "블로그 글이나 유튜브 콘텐츠는 계속 추가되나요?",
        answer:
          "필요한 주제는 순차적으로 더 보강될 수 있습니다. 새 글이나 영상이 추가되면 부모가 이해하기 쉬운 흐름으로 다시 정리해 소개할 수 있습니다.",
      },
    ],
  },
  {
    title: "외부 링크 및 안내 관련",
    items: [
      {
        question: "육아용품 페이지의 링크는 어떤 성격인가요?",
        answer:
          "육아용품 페이지의 링크는 부모가 제품 정보를 더 쉽게 확인하도록 연결한 외부 안내 링크입니다. 일부 링크에는 별도 안내가 함께 표시될 수 있으며, 실제 조건은 연결된 판매처 페이지를 기준으로 확인해 주세요.",
      },
      {
        question: "제휴 링크가 있으면 사용자에게 불이익이 있나요?",
        answer:
          "일반적으로 사용자가 별도 비용을 더 부담하는 구조는 아니지만, 실제 가격과 혜택은 판매처 정책에 따라 달라질 수 있습니다. 구매 전에는 판매처의 최신 상품 페이지를 반드시 확인해 주세요.",
      },
      {
        question: "MomTools가 특정 상품의 품질을 보증하나요?",
        answer:
          "아니요. MomTools는 육아용품 탐색 편의를 위한 정보 연결 역할을 할 수 있으나, 특정 상품의 성능, 안전성, 만족도를 보증하지 않습니다. 최종 선택은 상품 상세정보와 후기, 판매처 정책을 충분히 확인한 뒤 진행해 주세요.",
      },
      {
        question: "화면에 외부 안내가 보이면 사이트 추천으로 봐도 되나요?",
        answer:
          "아닙니다. 화면에 외부 안내나 소개가 보이더라도, 그것만으로 MomTools가 해당 상품이나 서비스를 품질 보증하거나 최종 추천한다는 뜻은 아닙니다.",
      },
    ],
  },
  {
    title: "문의 / 개인정보 / 정책 관련",
    items: [
      {
        question: "문의는 어떻게 보내면 되나요?",
        answer:
          "문의하기 페이지에 안내된 이메일 또는 문의 채널을 이용하면 됩니다. 오류 제보의 경우 사용 기기, 브라우저, 페이지 주소, 오류 발생 순서를 함께 남기면 확인에 도움이 됩니다.",
      },
      {
        question: "개인정보를 많이 입력해야 하나요?",
        answer:
          "아니요. MomTools는 기본적으로 회원가입 없이 이용할 수 있습니다. 문의가 필요한 경우에도 가능한 한 꼭 필요한 정보만 남기는 것을 권장합니다.",
      },
      {
        question: "아이의 건강 상태를 자세히 적어 문의해도 되나요?",
        answer:
          "권장하지 않습니다. 아이 실명, 전체 생년월일, 상세 진료기록, 사진, 검사 결과처럼 민감한 정보는 가능한 한 보내지 말아 주세요. 건강 문제는 반드시 의료기관에 직접 문의해야 합니다.",
      },
      {
        question: "개인정보처리방침과 이용약관은 왜 필요한가요?",
        answer:
          "사이트가 정보를 제공하고 외부 서비스와 연결될 수 있기 때문에, 이용자가 참고 범위와 정보 처리 원칙을 쉽게 확인할 수 있도록 기본 정책 페이지를 두고 있습니다.",
      },
      {
        question: "정책 내용은 변경될 수 있나요?",
        answer:
          "네. 외부 서비스 연결 방식이나 관련 기준이 달라지면 개인정보처리방침과 이용약관도 함께 수정될 수 있습니다. 중요한 변경이 있을 경우 페이지의 개정일을 함께 갱신합니다.",
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
            MomTools를 이용하면서 자주 궁금해할 수 있는 내용을 한곳에 정리했습니다.
            계산기 결과의 의미, 정보 콘텐츠의 활용 범위, 외부 링크 안내, 문의 기준,
            개인정보와 정책 페이지 관련 내용을 한 번에 확인할 수 있습니다.
          </p>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-800">빠르게 확인할 핵심</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-white p-5 text-sm leading-7 text-slate-600">
              계산기와 정보 페이지는 참고용이며, 의료 판단이나 법적 판단을 대신하지
              않습니다.
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-5 text-sm leading-7 text-slate-600">
              외부 링크는 편의를 위한 연결이며, 실제 상품 정보와 정책은 연결된 페이지 기준이 적용됩니다.
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-5 text-sm leading-7 text-slate-600">
              오류 제보, 정보 수정 요청은 문의하기로 받을 수 있지만, 개인별 의료 상담은
              답변 대상이 아닙니다.
            </div>
          </div>
        </section>

        {faqSections.map((section, index) => (
          <section key={section.title} className="mt-card p-8 md:p-10">
            <h2 className="text-2xl font-bold tracking-tight text-slate-800">{section.title}</h2>

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
          </section>
        ))}

        <section className="mt-card-soft p-8 md:p-10">
          <h2 className="text-xl font-bold text-slate-800">관련 페이지 바로가기</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <Link
              href="/privacy"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="font-semibold text-slate-800">개인정보처리방침</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">
                정보 수집, 쿠키, 외부 서비스, 이용자 권리를 확인해 보세요.
              </div>
            </Link>
            <Link
              href="/terms"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="font-semibold text-slate-800">이용약관</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">
                서비스 활용 범위, 참고 기준, 외부 링크 안내 원칙을 볼 수 있어요.
              </div>
            </Link>
            <Link
              href="/contact"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="font-semibold text-slate-800">문의하기</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">
                오류 제보, 정보 수정 요청, 제휴 문의를 보내는 방법을 확인하세요.
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
