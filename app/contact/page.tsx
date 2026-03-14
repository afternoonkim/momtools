import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "문의하기",
  description:
    "MomTools 문의하기 페이지입니다. 오류 제보, 콘텐츠 제안, 제휴 문의, 정보 수정 요청 등 문의 전 확인할 내용을 안내합니다.",
};

const inquiryTypes = [
  {
    title: "오류 제보",
    description:
      "계산 결과가 이상하거나 페이지가 깨지는 등 기능상 문제가 있을 때 보내는 문의입니다.",
    examples: [
      "특정 계산기에서 버튼이 동작하지 않는 경우",
      "모바일에서 화면이 깨지거나 입력이 되지 않는 경우",
      "특정 페이지가 열리지 않거나 에러가 발생하는 경우",
    ],
  },
  {
    title: "콘텐츠 제안",
    description:
      "추가되면 좋을 계산기, 육아 정보, 체크리스트, 용품 정리 주제를 제안하는 문의입니다.",
    examples: [
      "추가되면 좋은 육아 계산기 제안",
      "임신 / 신생아 / 유아 정보 보강 요청",
      "특정 체크리스트나 용품 카테고리 요청",
    ],
  },
  {
    title: "정보 수정 요청",
    description:
      "오타, 잘못된 문구, 오래된 정보 등 수정이 필요한 내용을 알려주는 문의입니다.",
    examples: [
      "문구 오탈자 수정 요청",
      "링크 오류 또는 잘못 연결된 메뉴 신고",
      "정책 페이지의 문장 보완 요청",
    ],
  },
  {
    title: "제휴 및 협업 문의",
    description:
      "브랜드 협업, 콘텐츠 제휴, 링크 제휴, 광고 문의 등 운영 확장과 관련된 문의입니다.",
    examples: [
      "육아용품 관련 제휴 제안",
      "콘텐츠 협업 문의",
      "광고 또는 후원 관련 문의",
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

export default function ContactPage() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <section className="mt-card p-8 md:p-10">
          <span className="mt-badge">문의하기</span>
          <h1 className="mt-title-lg mt-4">MomTools 문의 안내</h1>
          <p className="mt-text-main mt-4">
            MomTools 이용 중 오류 제보, 정보 수정 요청, 콘텐츠 제안, 제휴 문의가 있다면
            이 페이지를 참고해 주세요.
          </p>

          <div className="mt-6 rounded-2xl border border-amber-100 bg-amber-50 p-5">
            <div className="text-sm font-semibold text-slate-800">이메일: afternoonkim93@gmail.com</div>
            {/* <p className="mt-2 text-sm leading-7 text-slate-600">
              현재는 예시 문구로 구성되어 있습니다. 실제 배포 시 아래 영역에 운영용
              이메일 주소, 구글폼, 네이버 폼, 응답 가능 시간 등을 넣어 사용해 주세요.
            </p> */}

            {/* <div className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
              {<div>이메일: afternoonkim93@gmail.com</div>}
              {<div>문의 폼 예시: 외부 설문/문의 폼 링크 연결</div>}
              {<div>운영 시간 예시: 평일 09:00 ~ 18:00</div>}
            </div> */}
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
          <h2 className="text-2xl font-bold tracking-tight text-slate-800">
            문의 처리 기준
          </h2>

          <div className="mt-6 space-y-4">
            <div className="mt-list-card">
              <div className="font-semibold text-slate-800">1. 정확한 확인이 필요한 문의</div>
              <div className="mt-2 text-sm leading-7 text-slate-600">
                계산기 오작동, 링크 오류, 문구 수정 요청처럼 확인이 가능한 문의는 우선
                검토 대상이 됩니다.
              </div>
            </div>

            <div className="mt-list-card">
              <div className="font-semibold text-slate-800">2. 의료 판단 요청</div>
              <div className="mt-2 text-sm leading-7 text-slate-600">
                아이의 건강 상태, 이상 증상, 진단, 치료 여부에 대한 판단은 답변 대상이
                아니며, 반드시 병원 또는 의료진과 상담해 주세요.
              </div>
            </div>

            <div className="mt-list-card">
              <div className="font-semibold text-slate-800">3. 상품 구매 판단 요청</div>
              <div className="mt-2 text-sm leading-7 text-slate-600">
                육아용품 링크가 연결되어 있더라도 특정 상품의 성능이나 만족도를 보증하지
                않으며, 구매 전 상품 상세정보와 판매처 정책을 직접 확인해 주세요.
              </div>
            </div>

            <div className="mt-list-card">
              <div className="font-semibold text-slate-800">4. 비정상적 또는 부적절한 문의</div>
              <div className="mt-2 text-sm leading-7 text-slate-600">
                욕설, 반복 스팸, 악성 행위, 시스템 공격 시도, 불법적 요청 등은 별도
                답변 없이 제한될 수 있습니다.
              </div>
            </div>
          </div>
        </section>

        <section className="mt-card-soft p-8 md:p-10">
          <h2 className="text-xl font-bold text-slate-800">개인정보 안내</h2>
          <p className="mt-4 text-sm leading-8 text-slate-600 md:text-base">
            문의 과정에서 이름, 이메일, 문의 내용 등 사용자가 자발적으로 제공한 정보가
            포함될 수 있습니다. 관련 처리 기준은 개인정보처리방침 페이지를 확인해 주세요.
          </p>
        </section>
      </div>
    </div>
  );
}