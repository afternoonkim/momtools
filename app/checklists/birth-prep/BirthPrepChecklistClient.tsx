"use client";

import Link from "next/link";
import PersistentChecklist from "@/components/common/PersistentChecklist";

const checklistSections = [
  {
    title: "산모 서류와 기본 준비",
    badge: "먼저 챙기기",
    tone: "rose",
    summary:
      "출산 직전에는 준비물보다 서류와 병원 안내를 먼저 정리해두는 것이 훨씬 중요해요.",
    items: [
      "산모수첩과 신분증",
      "입원 서류와 병원 안내문",
      "보험 서류나 제출이 필요한 문서 확인",
      "진료 예약 일정과 분만 병원 연락처 정리",
      "응급 상황 시 이동 방법과 보호자 연락 체계 정리",
    ],
  },
  {
    title: "산모 입원 준비물",
    badge: "입원 가방",
    tone: "amber",
    summary:
      "입원 가방은 너무 늦지 않게 미리 싸두는 것이 좋아요. 막달에는 몸 상태가 갑자기 달라질 수 있어요.",
    items: [
      "산모용 속옷과 수유 브라",
      "세면도구와 개인 위생용품",
      "편한 수면 양말 또는 실내 슬리퍼",
      "휴대폰 충전기와 보조 배터리",
      "퇴원 시 입을 편한 옷",
    ],
  },
  {
    title: "아기 준비물",
    badge: "퇴원 준비",
    tone: "sky",
    summary:
      "병원과 조리원에서 제공되는 물품이 다를 수 있으니, 개인 준비가 필요한 항목을 먼저 확인하는 것이 좋아요.",
    items: [
      "아기 배냇저고리와 속싸개",
      "퇴원용 우주복 또는 계절에 맞는 외출복",
      "손수건 또는 거즈 수건",
      "기저귀나 기본 위생용품 제공 여부 확인",
      "수유 관련 추가 준비물이 필요한지 확인",
    ],
  },
  {
    title: "보호자 준비물",
    badge: "같이 챙기기",
    tone: "emerald",
    summary:
      "출산 당일에는 보호자 준비가 생각보다 중요해요. 장시간 대기와 이동을 고려해 따로 챙겨두면 좋아요.",
    items: [
      "보호자 충전기와 세면도구",
      "간단한 간식과 물",
      "여분 옷 또는 얇은 겉옷",
      "주차, 출입, 병실 안내 관련 정보 확인",
      "산모와 아기 퇴원 동선 미리 점검",
    ],
  },
  {
    title: "퇴원 전 체크",
    badge: "마지막 확인",
    tone: "violet",
    summary:
      "출산 후에는 정신이 없기 쉬워서, 퇴원 전 체크 항목은 미리 따로 정리해두는 것이 좋아요.",
    items: [
      "퇴원 시 카시트 또는 이동 준비",
      "퇴원 약과 안내사항 다시 확인",
      "다음 외래 일정과 아기 진료 일정 체크",
      "집에 도착했을 때 바로 필요한 물품 배치 확인",
      "출생 직후 행정 처리나 서류 준비 일정 정리",
    ],
  },
];

const faqItems = [
  {
    question: "출산 준비물은 언제부터 챙기는 게 좋나요?",
    answer:
      "보통 막달 전에 큰 틀을 정리해두고, 입원 가방은 조금 여유 있게 미리 싸두는 것이 좋아요. 막달에는 몸 상태가 갑자기 달라질 수 있어서 너무 늦게 미루지 않는 편이 좋습니다.",
  },
  {
    question: "병원 제공 물품이 있으면 준비를 덜 해도 되나요?",
    answer:
      "병원이나 조리원마다 제공 물품이 다를 수 있어요. 그래서 무조건 줄이기보다, 제공 항목과 개인 준비 항목을 먼저 구분해서 정리하는 것이 좋아요.",
  },
  {
    question: "아기 준비물보다 산모 준비물을 먼저 챙겨야 하나요?",
    answer:
      "실제로는 서류, 입원 관련 안내, 산모 입원 준비를 먼저 정리해두는 것이 훨씬 실용적이에요. 아기 준비물은 퇴원 시점과 계절을 고려해 맞춰 준비하면 됩니다.",
  },
  {
    question: "퇴원 전 꼭 다시 확인해야 하는 것은 무엇인가요?",
    answer:
      "퇴원 약, 다음 진료 일정, 아기 외래 일정, 이동 준비, 집에 도착했을 때 바로 필요한 물품 배치를 다시 확인하는 것이 좋아요.",
  },
];

const pageStorageKey = "app-checklists-birth-prep-BirthPrepChecklistClient";

export default function BirthPrepChecklistClient() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <header className="mt-card p-6 md:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700">
                MomTools 체크리스트
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                출산 준비 체크리스트
              </h1>
              <p className="text-sm leading-7 text-slate-600 md:text-base">
                산모 준비물, 아기 준비물, 보호자 준비물, 퇴원 전 체크까지 한눈에
                정리해보세요. 출산 직전에는 무엇을 먼저 챙겨야 할지 헷갈리기 쉬워서,
                실제로 많이 필요한 흐름 중심으로 보기 쉽게 구성했습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4 text-sm leading-6 text-slate-700 lg:max-w-sm">
              <div className="font-semibold text-slate-900">
                함께 활용하면 좋은 도구
              </div>
              <p className="mt-2">
                출산 시기를 먼저 확인하고 싶다면{" "}
                <Link
                  href="/tools/due-date"
                  className="font-semibold text-sky-700 underline underline-offset-4"
                >
                  출산 예정일 계산기
                </Link>
                를 보고, 이후 이 체크리스트에서 준비 흐름을 같이 정리하면 훨씬
                편해요.
              </p>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <QuickCard
            title="가장 먼저"
            value="서류와 병원 안내"
            description="준비물보다 먼저 병원 일정, 서류, 연락 체계를 정리해두는 것이 좋아요."
            tone="rose"
          />
          <QuickCard
            title="입원 가방"
            value="미리 준비"
            description="막달에는 몸 상태가 갑자기 달라질 수 있어 너무 늦게 미루지 않는 편이 좋아요."
            tone="amber"
          />
          <QuickCard
            title="마지막 확인"
            value="퇴원 동선"
            description="퇴원 약, 이동 수단, 카시트, 집 도착 후 필요한 물품까지 같이 보면 편해요."
            tone="sky"
          />
        </section>

        <div className="mt-card p-4 md:p-5">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            AdSense 추천 위치 1
          </div>
          <div className="mt-2 rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center text-sm text-slate-500">
            상단 요약 카드 아래 / 체크리스트 본문 시작 전 광고 영역
          </div>
        </div>

        <section className="space-y-6">
          {checklistSections.map((section) => (
            <section key={section.title} className="mt-card-soft p-6 md:p-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <div
                    className={[
                      "inline-flex rounded-full px-3 py-1 text-xs font-semibold",
                      section.tone === "rose"
                        ? "bg-rose-100 text-rose-700"
                        : section.tone === "amber"
                        ? "bg-amber-100 text-amber-700"
                        : section.tone === "sky"
                        ? "bg-sky-100 text-sky-700"
                        : section.tone === "emerald"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-violet-100 text-violet-700",
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

              <PersistentChecklist storageKey={`${pageStorageKey}-${section.title}`} items={section.items} accent={section.tone as "emerald" | "sky" | "amber" | "rose" | "violet" | "orange"} />
            </section>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="mt-card p-6 md:p-8">
            <h2 className="text-lg font-bold text-slate-900 md:text-xl">
              출산 준비할 때 같이 보면 좋은 것
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <GuideCard
                title="병원 안내 재확인"
                description="입원 기준, 응급 연락, 출입 시간, 보호자 동선 같은 안내는 미리 다시 보는 것이 좋아요."
              />
              <GuideCard
                title="집 정리"
                description="퇴원 후 바로 쓸 물품이 어디 있는지, 신생아 동선이 불편하지 않은지 미리 점검하면 편해요."
              />
              <GuideCard
                title="보호자 역할"
                description="당일 이동, 수납, 연락, 퇴원 준비처럼 보호자가 맡을 역할을 미리 나누면 훨씬 수월해요."
              />
              <GuideCard
                title="행정 일정"
                description="출생 직후 처리해야 할 서류나 등록 절차를 너무 늦지 않게 확인해두면 좋아요."
              />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-amber-100 bg-amber-50 p-5 md:p-6">
              <h2 className="text-lg font-bold text-slate-900">안내 문구</h2>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
                <li>• 이 페이지는 출산 전 준비 흐름을 정리한 참고용 체크리스트예요.</li>
                <li>• 병원마다 준비물과 제공 물품이 다를 수 있으니 안내문을 함께 확인해 주세요.</li>
                <li>• 준비물은 한 번에 완벽히 끝내려 하기보다 우선순위부터 정리하는 것이 좋아요.</li>
                <li>• 임신 막달에는 몸 상태가 달라질 수 있으니 너무 늦게 미루지 않는 편이 좋습니다.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-5 md:p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
              <h2 className="text-lg font-bold text-slate-900">
                함께 보면 좋은 페이지
              </h2>
              <div className="mt-4 space-y-3">
                <Link
                  href="/tools/due-date"
                  className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  출산 예정일 계산기
                </Link>
                <Link
                  href="/info/pregnancy"
                  className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  임신 정보
                </Link>
                <Link
                  href="/faq"
                  className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  자주 묻는 질문
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
            체크리스트 본문 아래 / FAQ 및 설명 콘텐츠 시작 전 광고 영역
          </div>
        </div>

        <section className="mt-card p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                  출산 준비 체크리스트는 어떻게 활용하면 좋을까요?
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700 md:text-base">
                  <p>
                    출산 준비 체크리스트는 준비물을 단순히 많이 적어두는 용도보다,
                    무엇을 먼저 챙기면 좋을지 순서를 정리하는 데 더 도움이 돼요.
                    실제로는 서류, 병원 안내, 입원 준비, 퇴원 동선까지 함께 봐야
                    빠뜨리는 항목이 줄어듭니다.
                  </p>
                  <p>
                    특히 막달에는 몸 상태가 갑자기 달라질 수 있어서, 한 번에 몰아서
                    준비하려 하기보다 큰 항목부터 미리 정리해두는 편이 좋아요.
                    이 페이지도 우선순위 중심으로 흐름을 잡기 쉽게 구성했습니다.
                  </p>
                  <p>
                    다만 병원마다 제공 물품과 준비물이 다를 수 있으니, 최종 준비는
                    병원 안내문과 함께 다시 확인하는 것이 좋습니다.
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
                  이 체크리스트를 이렇게 활용해보세요
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  출산 준비는 물건만 챙기는 일이 아니에요. 이 체크리스트는 산모,
                  아기, 보호자, 퇴원 준비까지 순서대로 정리할 수 있게 구성해,
                  필요한 내용을 빠르게 다시 확인하는 데 도움이 되도록 만들었습니다.
                </p>
              </div>

              <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-5 md:p-6">
                <h2 className="text-lg font-bold text-slate-900">
                  준비는 나눠서 해도 충분해요
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  출산 준비는 한 번에 완벽하게 끝내려 하면 오히려 부담이 커질 수 있어요.
                  서류, 입원 가방, 아기 준비물, 퇴원 준비처럼 큰 항목별로 나눠서
                  정리하면 훨씬 수월하게 준비할 수 있습니다.
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
  tone: "rose" | "amber" | "sky";
}) {
  const toneClass =
    tone === "rose"
      ? "border-rose-100 bg-rose-50"
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