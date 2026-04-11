import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "문의하기",
  description:
    "MomTools 문의하기 페이지입니다. 오류 제보, 정보 수정 요청, 콘텐츠 제안, 제휴 문의, 정책 문의와 함께 문의 전 확인해야 할 기준과 답변 범위를 안내합니다.",
};

const inquiryTypes = [
  {
    title: "오류 제보",
    description:
      "계산 결과가 비정상적이거나 화면이 깨지는 등 기능상 문제가 있을 때 보내는 문의입니다.",
    examples: [
      "특정 계산기에서 버튼이 동작하지 않는 경우",
      "모바일에서 화면이 깨지거나 입력이 되지 않는 경우",
      "특정 페이지가 열리지 않거나 에러가 발생하는 경우",
    ],
  },
  {
    title: "정보 수정 요청",
    description:
      "오타, 오래된 표현, 링크 오류, 이해하기 어려운 안내 문구를 알려주는 문의입니다.",
    examples: [
      "문구 오탈자 수정 요청",
      "링크가 잘못 연결된 메뉴 신고",
      "정책 페이지 문장 보완 요청",
    ],
  },
  {
    title: "콘텐츠 제안",
    description:
      "추가되면 좋을 계산기, 육아 정보, 체크리스트, 놀이 자료를 제안하는 문의입니다.",
    examples: [
      "추가되면 좋은 육아 계산기 제안",
      "임신 / 신생아 / 유아 정보 보강 요청",
      "놀이·색칠공부·체크리스트 주제 제안",
    ],
  },
  {
    title: "제휴 및 협업 문의",
    description:
      "브랜드 협업, 콘텐츠 협업, 링크 안내처럼 사이트 내용과 직접 관련된 문의입니다.",
    examples: [
      "육아용품 관련 제휴 제안",
      "콘텐츠 협업 문의",
      "협업 또는 안내 문의",
    ],
  },
];

const guideItems = [
  {
    title: "문의 시 함께 보내면 좋은 정보",
    contents: [
      "문제가 발생한 페이지 주소",
      "사용한 기기 종류(예: 아이폰, 갤럭시, PC)",
      "사용 브라우저(예: 크롬, 사파리)",
      "오류가 난 상황과 재현 순서",
      "가능하다면 화면 캡처 이미지",
    ],
  },
  {
    title: "답변이 늦어질 수 있는 경우",
    contents: [
      "주말, 공휴일, 야간 시간대",
      "동일 유형 문의가 많아 순차 확인이 필요한 경우",
      "정책 검토나 외부 플랫폼 확인이 필요한 경우",
    ],
  },
  {
    title: "문의 전 먼저 확인하면 좋은 페이지",
    contents: [
      "FAQ: 자주 묻는 질문 확인",
      "개인정보처리방침: 문의 과정의 정보 처리 기준 확인",
      "이용약관: 서비스 이용 범위와 면책 사항 확인",
    ],
  },
];

const responsePolicy = [
  {
    title: "1. 정확한 확인이 가능한 문의",
    description:
      "계산기 오작동, 링크 오류, 문구 수정 요청처럼 확인 가능한 문의는 우선 검토 대상이 됩니다.",
  },
  {
    title: "2. 개인별 의료 판단 요청",
    description:
      "아이의 건강 상태, 진단, 치료 여부, 응급성 판단은 답변 대상이 아니며, 반드시 병원 또는 의료진과 상담해 주세요.",
  },
  {
    title: "3. 상품 구매 판단 요청",
    description:
      "육아용품 링크가 연결되어 있더라도 특정 상품의 만족도나 안전성을 보증하지 않으며, 구매 전 판매처 상세정보와 정책을 직접 확인해 주세요.",
  },
  {
    title: "4. 비정상적 또는 부적절한 문의",
    description:
      "욕설, 반복 스팸, 악성 행위, 시스템 공격 시도, 불법적 요청 등은 별도 답변 없이 제한될 수 있습니다.",
  },
];

export default function ContactPage() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">Contact</span>
          <h1 className="mt-title-lg mt-4">MomTools 문의 안내</h1>
          <p className="mt-text-main mt-4">
            MomTools 이용 중 오류 제보, 정보 수정 요청, 콘텐츠 제안, 제휴 문의가 있다면
            이 페이지를 참고해 주세요. 문의 전에 어떤 내용은 답변이 가능하고, 어떤
            내용은 병원이나 공식 기관으로 확인해야 하는지 기준도 함께 정리했습니다.
          </p>

          <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50 p-5">
            <div className="text-sm font-semibold text-slate-800">
              이메일: afternoonkim93@gmail.com
            </div>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              오류 제보나 정보 수정 요청은 가능한 한 구체적으로 보내 주시면 확인이 더
              빨라집니다. 페이지 주소와 오류 화면을 함께 남겨 주세요.
            </p>
          </div>
        </section>

        <section className="mt-card-soft p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-800">문의 전 꼭 확인해 주세요</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-white p-5 text-sm leading-7 text-slate-600">
              MomTools는 개인별 의료 상담 창구가 아니므로, 증상 판단이나 진단 관련 문의는
              답변 대상이 아닙니다.
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-5 text-sm leading-7 text-slate-600">
              계산기 오류, 오탈자, 링크 오류, 정책 문의처럼 확인 가능한 내용은 적극적으로
              검토합니다.
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-5 text-sm leading-7 text-slate-600">
              아이 실명, 전체 생년월일, 상세 진료기록, 사진처럼 민감한 정보는 메일에 넣지
              않는 것을 권장합니다.
            </div>
          </div>
        </section>

        <section className="mt-card p-8 md:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-800">
            어떤 문의를 받을 수 있나요?
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {inquiryTypes.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-amber-100 bg-white p-5"
              >
                <h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>

                <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-500">
                  {item.examples.map((example) => (
                    <li key={example}>• {example}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-card p-8 md:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-800">
            문의 전에 확인해 주세요
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {guideItems.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-amber-100 bg-white p-5"
              >
                <h3 className="text-base font-semibold text-slate-800">{item.title}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-500">
                  {item.contents.map((content) => (
                    <li key={content}>• {content}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-card p-8 md:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-800">문의 처리 기준</h2>

          <div className="mt-6 space-y-4">
            {responsePolicy.map((item) => (
              <div key={item.title} className="mt-list-card">
                <div className="font-semibold text-slate-800">{item.title}</div>
                <div className="mt-2 text-sm leading-7 text-slate-600">{item.description}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-card-soft p-8 md:p-10">
          <h2 className="text-xl font-bold text-slate-800">관련 정책 페이지</h2>
          <p className="mt-4 text-sm leading-8 text-slate-600 md:text-base">
            문의 과정에서 이름, 이메일, 문의 내용 등 사용자가 자발적으로 제공한 정보가
            포함될 수 있습니다. 관련 처리 기준과 서비스 이용 원칙은 아래 페이지에서 자세히
            확인할 수 있습니다.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <Link
              href="/privacy"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="font-semibold text-slate-800">개인정보처리방침</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">
                문의 시 전달한 정보가 어떤 기준으로 처리될 수 있는지 확인해 보세요.
              </div>
            </Link>
            <Link
              href="/terms"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="font-semibold text-slate-800">이용약관</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">
                사이트 정보의 활용 범위와 면책 기준을 함께 확인할 수 있어요.
              </div>
            </Link>
            <Link
              href="/faq"
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-200"
            >
              <div className="font-semibold text-slate-800">FAQ</div>
              <div className="mt-2 text-sm leading-7 text-slate-500">
                계산기 정확도, 정책, 문의 방식과 관련된 자주 묻는 질문을 볼 수 있어요.
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
