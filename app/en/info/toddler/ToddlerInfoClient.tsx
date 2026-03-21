"use client";

import Link from "next/link";

const toddlerSections = [
  {
    title: "생활 루틴",
    badge: "하루 흐름 잡기",
    tone: "violet",
    summary:
      "유아기에는 완벽한 시간표보다 반복되는 하루 흐름을 만드는 것이 중요해요. 식사, 낮잠, 놀이, 외출 시간을 큰 틀에서 비슷하게 유지하면 아이도 더 안정감을 느끼기 쉬워요.",
    items: [
      "기상, 식사, 낮잠, 잠자리 시간을 큰 틀에서 일정하게 유지하기",
      "주말에도 완전히 무너지지 않도록 비슷한 생활 흐름 유지하기",
      "외출 전후, 잠들기 전 같은 반복 루틴 만들기",
      "하루가 꼬였다고 바로 실패로 보기보다 다음 흐름을 다시 잡아주기",
      "루틴은 부모를 위한 규칙이 아니라 아이가 예측 가능함을 느끼게 해주는 장치로 생각하기",
    ],
  },
  {
    title: "식사와 수면",
    badge: "기본 생활 관리",
    tone: "amber",
    summary:
      "유아기는 먹는 양과 수면 패턴이 자주 달라져 부모가 가장 많이 고민하는 시기 중 하나예요. 절대 기준보다 최근 흐름과 컨디션을 함께 보는 것이 좋아요.",
    items: [
      "잘 먹는 날과 안 먹는 날이 있어도 며칠 흐름을 같이 보기",
      "간식이 식사에 영향을 주지 않는지 확인하기",
      "잠드는 시간과 깨어나는 시간이 지나치게 흔들리지 않도록 보기",
      "낮잠 시간과 밤잠 리듬이 어떻게 연결되는지 관찰하기",
      "식사와 수면 모두 억지로 통제하기보다 안정적인 패턴을 만드는 방향으로 보기",
    ],
  },
  {
    title: "말과 감정",
    badge: "관계와 표현",
    tone: "rose",
    summary:
      "유아기에는 말이 늘어나는 속도도 다르고, 감정 표현도 아직 서툴러요. 훈육보다 먼저 감정을 읽어주고 표현을 도와주는 것이 중요해요.",
    items: [
      "짧고 반복적인 표현으로 자주 말 걸어주기",
      "화남, 속상함, 기다리기 어려움 같은 감정 이름 붙여주기",
      "길게 설명하기보다 짧고 일관된 문장으로 전달하기",
      "선택지를 너무 많이 주기보다 2개 정도로 좁혀서 스스로 결정하게 돕기",
      "말이 느려 보이더라도 비교보다 아이가 이해하고 반응하는 흐름을 함께 보기",
    ],
  },
  {
    title: "놀이와 활동",
    badge: "몸놀이와 상호작용",
    tone: "sky",
    summary:
      "유아기에는 비싼 교구보다 반복적인 상호작용, 몸놀이, 바깥 활동이 훨씬 중요한 경우가 많아요.",
    items: [
      "스크린타임보다 몸놀이와 직접 상호작용 시간을 늘리기",
      "짧아도 매일 바깥 공기 쐬는 시간을 만들어보기",
      "블록, 그림책, 역할놀이처럼 반복 가능한 놀이를 자주 하기",
      "한 번에 오래 놀게 하기보다 짧고 자주 함께하는 방향으로 보기",
      "놀이 결과보다 아이가 즐겁게 참여하는 경험 자체를 더 중요하게 보기",
    ],
  },
  {
    title: "어린이집 적응",
    badge: "처음 적응할 때",
    tone: "emerald",
    summary:
      "어린이집 적응은 아이마다 속도가 다르기 때문에, 빠르게 익숙해지지 않아도 이상한 것이 아니에요. 짧게, 안정적으로, 반복적으로 적응시키는 것이 중요해요.",
    items: [
      "첫 주에는 짧은 시간부터 적응할 수 있게 계획하기",
      "등원 전 루틴과 하원 후 안정 시간을 정해두기",
      "선생님께 전달받은 내용을 간단히 기록해두기",
      "집에서 갑자기 많은 훈육 변화를 주기보다 안정감 유지하기",
      "울거나 거부 반응이 있다고 바로 실패로 보기보다 적응 과정으로 이해하기",
    ],
  },
];

const faqItems = [
  {
    question: "유아기 루틴은 얼마나 규칙적으로 잡아야 하나요?",
    answer:
      "분 단위로 완벽하게 맞출 필요는 없어요. 중요한 것은 기상, 식사, 낮잠, 잠자리 같은 큰 흐름이 반복되도록 만드는 것이에요. 너무 엄격한 시간표보다 예측 가능한 하루가 더 중요합니다.",
  },
  {
    question: "편식이 심해 보이면 바로 걱정해야 하나요?",
    answer:
      "유아기에는 일시적으로 특정 음식만 먹거나 거부하는 시기가 있을 수 있어요. 한 끼보다 며칠 단위 흐름을 보고, 체중 변화나 컨디션 저하가 함께 있는지 같이 보는 것이 좋아요.",
  },
  {
    question: "말이 느린 것 같으면 어떻게 봐야 하나요?",
    answer:
      "단순히 단어 수만 보기보다 눈맞춤, 이해 반응, 따라 하기, 의사 표현 방식도 함께 보는 것이 좋아요. 걱정되는 부분이 지속되면 전문가 상담을 받아보는 것이 좋습니다.",
  },
  {
    question: "어린이집 적응이 느리면 문제가 있는 걸까요?",
    answer:
      "반드시 그렇지는 않아요. 낯가림, 기질, 환경 변화에 대한 반응은 아이마다 달라요. 짧은 적응 기간과 반복적인 루틴으로 천천히 익숙해질 수 있도록 돕는 것이 중요합니다.",
  },
];

export default function ToddlerInfoClient() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <header className="mt-card p-6 md:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
                MomTools 육아 정보
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                유아 정보
              </h1>
              <p className="text-sm leading-7 text-slate-600 md:text-base">
                유아기에는 식사, 수면, 감정 표현, 놀이, 어린이집 적응처럼 일상 전체가 함께 연결돼요.
                완벽한 정답을 찾기보다 생활 루틴을 안정적으로 만들고, 아이 반응을 흐름으로 보는 것이 중요합니다.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4 text-sm leading-6 text-slate-700 lg:max-w-sm">
              <div className="font-semibold text-slate-900">
                함께 활용하면 좋은 도구
              </div>
              <p className="mt-2">
                지금 우리 아이 시기를 먼저 확인하고 싶다면{" "}
                <Link
                  href="/en/cal/baby-age"
                  className="font-semibold text-sky-700 underline underline-offset-4"
                >
                  아기 개월수 계산기
                </Link>
                를 보고, 이후 이 페이지에서 생활 루틴과 적응 포인트를 함께 정리해보세요.
              </p>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <QuickCard
            title="가장 중요한 기준"
            value="꾸준한 생활 흐름"
            description="유아기에는 완벽한 통제보다 반복되는 일상이 아이에게 더 큰 안정감을 줘요."
            tone="violet"
          />
          <QuickCard
            title="자주 보는 고민"
            value="편식 · 수면 · 감정"
            description="하루치 결과보다 최근 며칠의 흐름과 컨디션을 같이 보는 것이 좋아요."
            tone="amber"
          />
          <QuickCard
            title="처음 적응할 때"
            value="짧게 · 천천히 · 반복"
            description="어린이집이나 새로운 환경 적응은 빠르지 않아도 괜찮아요. 반복적인 안정감이 중요해요."
            tone="emerald"
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
          {toddlerSections.map((section) => (
            <section key={section.title} className="mt-card-soft p-6 md:p-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <div
                    className={[
                      "inline-flex rounded-full px-3 py-1 text-xs font-semibold",
                      section.tone === "violet"
                        ? "bg-violet-100 text-violet-700"
                        : section.tone === "amber"
                        ? "bg-amber-100 text-amber-700"
                        : section.tone === "rose"
                        ? "bg-rose-100 text-rose-700"
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
              유아기에는 이런 것도 같이 보면 좋아요
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <GuideCard
                title="하루 기록"
                description="식사량, 낮잠, 보챔, 잘 놀았는지 정도만 간단히 봐도 아이 흐름을 이해하는 데 도움이 돼요."
              />
              <GuideCard
                title="감정 대응"
                description="혼내기보다 먼저 감정을 읽어주고, 짧고 일관된 표현으로 반복해주는 것이 효과적일 때가 많아요."
              />
              <GuideCard
                title="놀이 환경"
                description="복잡한 자극보다 반복 가능한 놀이와 부모 상호작용이 더 중요한 경우가 많아요."
              />
              <GuideCard
                title="적응 과정"
                description="어린이집, 새로운 사람, 새로운 공간에 적응하는 속도는 아이마다 다르다는 점을 기억하는 것이 좋아요."
              />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-amber-100 bg-amber-50 p-5 md:p-6">
              <h2 className="text-lg font-bold text-slate-900">안내 문구</h2>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
                <li>• 이 페이지는 유아기 생활 루틴과 적응 포인트를 정리한 참고용 정보예요.</li>
                <li>• 식사, 수면, 감정 표현은 하루 결과보다 최근 흐름을 함께 보는 것이 좋아요.</li>
                <li>• 걱정되는 변화가 길게 이어지면 병원이나 전문가 상담을 받아보는 것이 좋습니다.</li>
                <li>• 비교보다 우리 아이의 기질과 반응을 중심으로 보는 것이 훨씬 중요해요.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-5 md:p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
              <h2 className="text-lg font-bold text-slate-900">
                함께 보면 좋은 페이지
              </h2>
              <div className="mt-4 space-y-3">
                <Link
                  href="/checklist/daycare-prep"
                  className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  어린이집 준비 체크리스트
                </Link>
                <Link
                  href="/faq"
                  className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  자주 묻는 질문
                </Link>
                <Link
                  href="/en/cal/baby-age"
                  className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  아기 개월수 계산기
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
                  유아 정보는 어떻게 활용하면 좋을까요?
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700 md:text-base">
                  <p>
                    유아 정보 페이지는 식사, 수면, 감정 표현, 놀이, 어린이집 적응처럼
                    일상 전체가 함께 흔들리기 쉬운 시기에 흐름을 잡는 데 도움을 주는 가이드예요.
                    유아기에는 한 가지 문제만 따로 보기보다 생활 루틴 전체를 같이 보는 것이 더 중요할 때가 많아요.
                  </p>
                  <p>
                    특히 유아기는 아이 기질과 반응 차이가 크게 느껴지는 시기라서,
                    비교보다 우리 아이가 어떤 패턴을 보이는지 이해하는 것이 훨씬 중요해요.
                    이 페이지도 정답을 단정하기보다, 부모가 일상을 정리하고 다시 점검할 수 있도록 구성했습니다.
                  </p>
                  <p>
                    다만 식사 거부, 수면 문제, 발달 걱정, 감정 기복이 지나치게 길게 이어지거나
                    생활에 큰 어려움을 주고 있다면 병원이나 전문가 상담을 함께 고려하는 것이 좋습니다.
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
                  유아기에는 하루에도 식사, 수면, 감정, 놀이 문제가 서로 연결돼 보여요.
                  이 페이지는 그 고민들을 따로 떼어 보기보다 생활 흐름 안에서 같이 정리할 수 있도록 구성해,
                  필요할 때 빠르게 다시 확인하는 데 도움이 되도록 만들었습니다.
                </p>
              </div>

              <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-5 md:p-6">
                <h2 className="text-lg font-bold text-slate-900">
                  완벽함보다 꾸준함이 더 중요해요
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  유아기에는 하루가 자주 흔들릴 수 있어요. 그래서 완벽한 루틴을 지키는 것보다,
                  큰 흐름을 다시 잡아주는 꾸준함이 더 중요합니다. 한 번 어긋났다고 실패로 보기보다
                  다음 식사, 다음 낮잠, 다음 일과를 다시 이어가는 방식으로 보는 것이 좋아요.
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
  tone: "violet" | "amber" | "emerald";
}) {
  const toneClass =
    tone === "violet"
      ? "border-violet-100 bg-violet-50"
      : tone === "amber"
      ? "border-amber-100 bg-amber-50"
      : "border-emerald-100 bg-emerald-50";

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