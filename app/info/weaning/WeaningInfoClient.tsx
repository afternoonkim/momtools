"use client";

import Link from "next/link";

const weaningSections = [
  {
    title: "시작 전 체크",
    badge: "준비 단계",
    tone: "orange",
    summary:
      "이유식은 날짜만 맞는다고 바로 시작하기보다 아기 발달 신호와 준비 상태를 함께 보는 것이 중요해요.",
    items: [
      "목을 비교적 안정적으로 가누는지 확인하기",
      "어른이 먹는 음식에 관심을 보이는지 살펴보기",
      "혀로 밀어내는 반사가 줄어드는지 체크하기",
      "이유식 스푼, 턱받이, 의자 등 기본 준비물 챙기기",
      "처음부터 복잡하게 시작하지 말고 단순한 재료부터 계획하기",
    ],
  },
  {
    title: "초기 이유식 진행",
    badge: "천천히 적응",
    tone: "amber",
    summary:
      "처음에는 먹는 양보다 삼키는 모습, 표정, 컨디션, 알레르기 반응 여부를 보는 것이 더 중요해요.",
    items: [
      "처음에는 한 가지 재료씩 천천히 시작하기",
      "새 재료를 추가할 때는 반응을 관찰할 시간 두기",
      "먹는 양이 적더라도 억지로 늘리기보다 적응에 집중하기",
      "수유를 갑자기 끊는 과정이 아니라 병행하는 흐름으로 보기",
      "아기가 유난히 싫어하면 텀을 두고 다시 시도하기",
    ],
  },
  {
    title: "단계별 변화",
    badge: "질감 조절",
    tone: "sky",
    summary:
      "월령이 지나면서 재료 종류와 질감을 조금씩 바꿔가지만, 기준보다 아기 반응을 우선 보는 게 좋아요.",
    items: [
      "초기에는 묽고 부드러운 형태로 시작하기",
      "적응이 되면 재료 가짓수와 질감을 조금씩 넓혀가기",
      "씹는 반응과 삼키는 모습을 보며 다음 단계로 넘어가기",
      "잘 먹는다고 너무 빠르게 질감을 올리지 않기",
      "월령표는 참고용이고 실제 변화 속도는 아기마다 다를 수 있음을 기억하기",
    ],
  },
  {
    title: "자주 헷갈리는 부분",
    badge: "많이 묻는 내용",
    tone: "emerald",
    summary:
      "처음 이유식을 시작하면 먹는 양, 수유와의 관계, 알레르기 반응 때문에 가장 많이 고민하게 돼요.",
    items: [
      "잘 안 먹는 날이 있어도 바로 실패라고 생각하지 않기",
      "수유를 완전히 끊는 과정이 아니라 함께 조절하는 과정으로 이해하기",
      "알레르기가 의심되면 무리한 재도전보다 상담을 우선하기",
      "비교보다 우리 아기 반응과 컨디션 기록을 더 중요하게 보기",
      "먹는 양보다 꾸준히 적응해가는 흐름을 보는 것이 더 중요하기",
    ],
  },
];

const faqItems = [
  {
    question: "이유식은 꼭 6개월에 시작해야 하나요?",
    answer:
      "꼭 같은 날짜에 시작해야 하는 것은 아니에요. 일반적으로 생후 5~6개월 전후를 많이 참고하지만, 실제 시작은 목 가누기, 음식에 대한 관심, 혀 내밀기 반사 감소 같은 발달 신호를 함께 봐야 해요.",
  },
  {
    question: "처음부터 잘 안 먹으면 중단해야 하나요?",
    answer:
      "반드시 그렇지는 않아요. 처음에는 낯설어서 양이 적거나 거부 반응처럼 보일 수 있어요. 억지로 먹이기보다 간격을 두고 다시 시도하면서 반응을 보는 것이 좋습니다.",
  },
  {
    question: "이유식을 시작하면 수유는 바로 줄여야 하나요?",
    answer:
      "처음에는 수유를 대체한다기보다 적응을 시작하는 단계에 가까워요. 초기에는 수유와 이유식을 함께 이어가며 천천히 비중을 조절하는 흐름으로 보는 것이 좋아요.",
  },
  {
    question: "알레르기 반응이 의심되면 어떻게 해야 하나요?",
    answer:
      "피부 반응, 구토, 설사, 호흡기 증상 등 걱정되는 변화가 보이면 새로운 재료를 무리하게 다시 시도하기보다 의료진과 상담하는 것이 우선입니다.",
  },
];

export default function WeaningInfoClient() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <header className="mt-card p-6 md:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                MomTools 육아 정보
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                이유식 정보
              </h1>
              <p className="text-sm leading-7 text-slate-600 md:text-base">
                이유식은 시작 시기보다도 아기의 발달 신호와 반응을 함께 보면서
                천천히 진행하는 것이 중요해요. 시작 전 체크포인트부터 단계별 진행
                흐름, 자주 헷갈리는 부분까지 한눈에 보기 쉽게 정리했습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4 text-sm leading-6 text-slate-700 lg:max-w-sm">
              <div className="font-semibold text-slate-900">
                함께 활용하면 좋은 도구
              </div>
              <p className="mt-2">
                이유식 시기를 먼저 확인하고 싶다면{" "}
                <Link
                  href="/cal/weaning-start"
                  className="font-semibold text-sky-700 underline underline-offset-4"
                >
                  이유식 시작 계산기
                </Link>
                를 보고, 이후 이 페이지에서 실제 진행 흐름을 함께 보면 더
                정리하기 쉬워요.
              </p>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <QuickCard
            title="가장 중요한 기준"
            value="발달 신호 확인"
            description="시작 날짜보다 목 가누기, 관심 표현, 삼킴 반응을 함께 보는 것이 더 중요해요."
            tone="orange"
          />
          <QuickCard
            title="처음 목표"
            value="많이 먹기보다 적응"
            description="초기 이유식은 양을 늘리는 것보다 천천히 익숙해지는 과정에 더 가까워요."
            tone="amber"
          />
          <QuickCard
            title="자주 걱정하는 부분"
            value="양 · 알레르기 · 수유"
            description="먹는 양이 적거나 잘 안 먹는 날이 있어도 반응과 흐름을 함께 보면 도움이 돼요."
            tone="sky"
          />
        </section>

        <div className="mt-card p-4 md:p-5">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            AdSense 추천 위치 1
          </div>
          <div className="mt-2 rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center text-sm text-slate-500">
            상단 요약 카드 아래 / 본문 시작 전 광고 영역
          </div>
        </div>

        <section className="space-y-6">
          {weaningSections.map((section) => (
            <section key={section.title} className="mt-card-soft p-6 md:p-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <div
                    className={[
                      "inline-flex rounded-full px-3 py-1 text-xs font-semibold",
                      section.tone === "orange"
                        ? "bg-orange-100 text-orange-700"
                        : section.tone === "amber"
                        ? "bg-amber-100 text-amber-700"
                        : section.tone === "sky"
                        ? "bg-sky-100 text-sky-700"
                        : "bg-emerald-100 text-emerald-700",
                    ].join(" ")}
                  >
                    {section.badge}
                  </div>
                  <h2 className="mt-3 text-xl font-bold text-slate-900">
                    {section.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                    {section.summary}
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {section.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-100 bg-white px-4 py-4 text-sm leading-7 text-slate-700 shadow-[0_8px_30px_rgba(15,23,42,0.04)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="mt-card p-6 md:p-8">
            <h2 className="text-lg font-bold text-slate-900 md:text-xl">
              이유식 진행할 때 같이 보면 좋은 것
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <GuideCard
                title="반응 기록"
                description="새 재료를 시작한 날, 피부 반응, 컨디션 변화를 간단히 적어두면 훨씬 정리하기 쉬워요."
              />
              <GuideCard
                title="식사 분위기"
                description="억지로 많이 먹이기보다 편안하게 경험하게 해주는 것이 초기 적응에 더 도움이 돼요."
              />
              <GuideCard
                title="수유와 병행"
                description="처음부터 수유를 크게 줄이기보다 아기 반응을 보며 천천히 조절하는 것이 좋아요."
              />
              <GuideCard
                title="준비물 관리"
                description="스푼, 턱받이, 보관 용기, 의자 같은 준비물은 미리 단순하게 정리해두면 편해요."
              />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-amber-100 bg-amber-50 p-5 md:p-6">
              <h2 className="text-lg font-bold text-slate-900">안내 문구</h2>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
                <li>• 이 페이지는 이유식 시작과 진행 흐름을 정리한 참고용 정보예요.</li>
                <li>• 날짜 기준보다 아기 발달 상태와 반응을 함께 보는 것이 중요해요.</li>
                <li>• 알레르기 의심, 삼킴 문제, 컨디션 저하가 있으면 의료진 상담이 우선입니다.</li>
                <li>• 비교보다 우리 아기 반응과 최근 흐름을 중심으로 보는 것이 좋아요.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-5 md:p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
              <h2 className="text-lg font-bold text-slate-900">
                함께 보면 좋은 페이지
              </h2>
              <div className="mt-4 space-y-3">
                <Link
                  href="/cal/weaning-start"
                  className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  이유식 시작 계산기
                </Link>
                <Link
                  href="/cal/baby-age"
                  className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  아기 개월수 계산기
                </Link>
                <Link
                  href="/checklist/weaning-prep"
                  className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  이유식 준비 체크리스트
                </Link>
              </div>
            </div>
          </aside>
        </section>

        <div className="mt-card p-4 md:p-5">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            AdSense 추천 위치 2
          </div>
          <div className="mt-2 rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center text-sm text-slate-500">
            핵심 정보 섹션 아래 / FAQ 및 설명 콘텐츠 시작 전 광고 영역
          </div>
        </div>

        <section className="mt-card p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                  이유식 정보는 어떻게 활용하면 좋을까요?
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700 md:text-base">
                  <p>
                    이유식 정보 페이지는 시작 시기만 보는 것이 아니라, 시작 전
                    체크포인트와 실제 진행 흐름을 함께 정리해두는 가이드예요.
                    처음에는 무엇을 준비해야 하는지, 얼마나 먹는 게 맞는지,
                    수유와는 어떻게 병행해야 하는지 헷갈리는 경우가 많기 때문에
                    흐름 중심으로 보는 것이 도움이 됩니다.
                  </p>
                  <p>
                    특히 초기 이유식은 많이 먹이는 것보다 경험하고 적응하는
                    과정에 가까워요. 그래서 이 페이지도 양만 강조하기보다
                    반응, 컨디션, 재료 추가 방식, 알레르기 주의처럼 실제로 자주
                    마주치는 고민을 중심으로 정리했습니다.
                  </p>
                  <p>
                    다만 알레르기 의심, 삼킴 문제, 먹는 양 급감, 컨디션 저하 같은
                    걱정되는 변화가 있으면 정보 페이지보다 의료진 상담이
                    우선입니다.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                  자주 묻는 질문
                </h2>
                <div className="mt-4 space-y-4">
                  {faqItems.map((item) => (
                    <FaqItem
                      key={item.question}
                      question={item.question}
                      answer={item.answer}
                    />
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl border border-sky-100 bg-sky-50 p-5 md:p-6">
                <h2 className="text-lg font-bold text-slate-900">
                  이 페이지를 이렇게 활용해보세요
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  이유식은 시작 날짜만 아는 것으로 끝나지 않아요. 이 페이지는
                  시작 전 준비, 초기 진행, 단계별 변화, 자주 헷갈리는 부분까지
                  흐름대로 정리해두어 필요한 내용을 빠르게 다시 보는 데 도움이
                  되도록 만들었습니다.
                </p>
              </div>

              <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-5 md:p-6">
                <h2 className="text-lg font-bold text-slate-900">
                  기록해두면 훨씬 편해요
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  처음 먹인 재료, 반응, 컨디션, 잘 먹었던 음식 정도만 간단히
                  적어두어도 이유식 진행이 훨씬 수월해져요. 완벽하게 기록하기보다
                  평소와 다른 변화가 있었는지 보는 것만으로도 충분히 도움이
                  됩니다.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </div>
  );
}

function QuickCard({
  title,
  value,
  description,
  tone,
}: {
  title: string;
  value: string;
  description: string;
  tone: "orange" | "amber" | "sky";
}) {
  const toneClass =
    tone === "orange"
      ? "border-orange-100 bg-orange-50"
      : tone === "amber"
      ? "border-amber-100 bg-amber-50"
      : "border-sky-100 bg-sky-50";

  return (
    <div className={`rounded-3xl border p-5 ${toneClass}`}>
      <div className="text-sm font-medium text-slate-500">{title}</div>
      <div className="mt-2 text-xl font-bold tracking-tight text-slate-900">
        {value}
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}

function GuideCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-700">{description}</p>
    </div>
  );
}

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
      <h3 className="text-base font-semibold text-slate-900">{question}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-700">{answer}</p>
    </div>
  );
}