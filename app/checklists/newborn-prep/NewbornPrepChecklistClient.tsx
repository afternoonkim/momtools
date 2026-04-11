"use client";

import Link from "next/link";
import PersistentChecklist from "@/components/common/PersistentChecklist";

const checklistSections = [
  {
    title: "기본 위생 용품",
    badge: "가장 먼저",
    tone: "emerald",
    summary:
      "신생아 시기에는 자주 쓰는 위생 용품을 손이 닿기 쉬운 곳에 정리해두는 것이 훨씬 편해요.",
    items: [
      "기저귀와 물티슈",
      "손수건과 거즈 수건",
      "아기 전용 바디워시 또는 세정용품",
      "체온계와 손톱깎이",
      "보습제와 기본 피부 케어 용품",
    ],
  },
  {
    title: "수유 준비물",
    badge: "자주 쓰는 용품",
    tone: "sky",
    summary:
      "수유용품은 한 번만 쓰는 것이 아니라 매일 반복해서 쓰게 되므로, 세척과 보관 흐름까지 같이 생각하는 것이 좋아요.",
    items: [
      "수유용품과 젖병 세정도구",
      "젖병 또는 수유 보조용품",
      "젖병솔과 건조대",
      "분유 수유 예정이면 분유포트 또는 온수 준비 방식 점검",
      "트림용 손수건과 수유 후 정리용 천",
    ],
  },
  {
    title: "수면 준비물",
    badge: "잠자리 환경",
    tone: "amber",
    summary:
      "신생아는 잠자는 시간이 길고 수면 환경이 중요해요. 안전하고 단순한 잠자리 구성이 우선이에요.",
    items: [
      "아기 침구와 수면조끼",
      "속싸개 또는 계절에 맞는 얇은 담요",
      "아기 침대 또는 안전한 수면 공간",
      "방 온도와 습도 확인용 기본 도구",
      "잠자리 주변에 불필요한 쿠션이나 소품 없는지 점검",
    ],
  },
  {
    title: "의류와 세탁",
    badge: "계절 맞춤",
    tone: "rose",
    summary:
      "옷은 예쁘게 많이 사기보다 갈아입히기 쉬운 기본 구성을 먼저 준비하는 것이 실용적이에요.",
    items: [
      "배냇저고리와 기본 내의",
      "계절에 맞는 우주복 또는 외출복",
      "신생아용 세탁세제",
      "세탁 후 바로 정리할 수 있는 수납 공간",
      "토하거나 젖었을 때 갈아입힐 여벌옷",
    ],
  },
  {
    title: "외출과 이동",
    badge: "퇴원 후 준비",
    tone: "violet",
    summary:
      "출산 직후 바로 자주 외출하지 않아도, 퇴원과 병원 방문에 필요한 이동 준비는 미리 해두는 것이 좋아요.",
    items: [
      "카시트 또는 안전한 이동 준비",
      "기저귀 가방 또는 외출용 정리 파우치",
      "외출용 담요나 계절에 맞는 덮개",
      "병원 방문 시 챙길 기본 물품 따로 정리",
      "차량 이동 또는 택시 이동 시 동선 미리 확인",
    ],
  },
];

const faqItems = [
  {
    question: "신생아 준비물은 언제부터 정리하면 좋나요?",
    answer:
      "출산 직전 한 번에 준비하려 하기보다 막달 전에 큰 항목부터 정리해두는 것이 좋아요. 특히 자주 쓰는 위생용품, 수유용품, 수면용품은 먼저 정리해두면 훨씬 편합니다.",
  },
  {
    question: "준비물은 많이 사둘수록 좋은가요?",
    answer:
      "처음부터 너무 많이 사두기보다 기본적으로 자주 쓰는 항목부터 준비하는 것이 실용적이에요. 아기마다 잘 맞는 제품이 다를 수 있어서 써본 뒤 추가하는 편이 더 나을 수 있습니다.",
  },
  {
    question: "병원이나 조리원에서 제공하는 물품이 있으면 덜 준비해도 되나요?",
    answer:
      "제공 물품이 있는 경우에도 집에 돌아왔을 때 바로 쓸 기본 준비물은 따로 필요할 수 있어요. 제공 항목과 집에서 필요한 항목을 나눠서 정리하는 것이 좋아요.",
  },
  {
    question: "신생아 준비에서 가장 먼저 챙길 것은 무엇인가요?",
    answer:
      "기저귀, 손수건, 수유용품, 체온계처럼 매일 바로 쓰게 될 기본 용품을 먼저 챙기는 것이 좋아요. 이후 수면 공간, 세탁, 외출 준비 순으로 확장하면 정리하기 쉽습니다.",
  },
];

const pageStorageKey = "app-checklists-newborn-prep-NewbornPrepChecklistClient";

export default function NewbornPrepChecklistClient() {
  return (
    <div className="mt-page">
      <div className="mt-container-narrow space-y-8">
        <header className="mt-card p-6 md:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                MomTools 체크리스트
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                신생아 준비 체크리스트
              </h1>
              <p className="text-sm leading-7 text-slate-600 md:text-base">
                기저귀, 수유용품, 위생용품, 수면용품, 외출 준비물까지 한눈에
                정리해보세요. 신생아 시기에는 자주 쓰는 것부터 먼저 준비하는 것이
                중요해서, 실제로 많이 필요한 흐름 중심으로 보기 쉽게 구성했습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4 text-sm leading-6 text-slate-700 lg:max-w-sm">
              <div className="font-semibold text-slate-900">
                함께 활용하면 좋은 도구
              </div>
              <p className="mt-2">
                출산 직후 필요한 흐름을 같이 정리하고 싶다면{" "}
                <Link
                  href="/info/newborn"
                  className="font-semibold text-sky-700 underline underline-offset-4"
                >
                  신생아 정보
                </Link>
                와{" "}
                <Link
                  href="/tools/baby-age"
                  className="font-semibold text-sky-700 underline underline-offset-4"
                >
                  아기 개월수 계산기
                </Link>
                도 함께 보면 좋아요.
              </p>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <QuickCard
            title="가장 먼저"
            value="자주 쓰는 기본 용품"
            description="기저귀, 손수건, 수유용품처럼 매일 반복해서 쓰는 항목부터 준비하는 것이 좋아요."
            tone="emerald"
          />
          <QuickCard
            title="준비 기준"
            value="많이보다 실용성"
            description="처음부터 너무 많이 사두기보다 기본 구성부터 준비하고 맞춰가는 편이 실용적이에요."
            tone="amber"
          />
          <QuickCard
            title="함께 점검"
            value="집 동선과 수납"
            description="물건을 사는 것만큼 자주 쓰는 위치에 정리해두는 것이 실제로 더 중요해요."
            tone="sky"
          />
        </section>

        <div className="mt-card p-4 md:p-5">
          <div className="text-sm font-bold text-slate-900">체크리스트 활용 팁</div>
          <p className="mt-2 text-sm leading-7 text-slate-600">처음부터 모든 항목을 한 번에 끝내려 하기보다, 오늘 바로 확인할 수 있는 항목부터 체크해 보세요. 부담을 줄이면 실제 준비가 더 꾸준히 이어집니다.</p>
        </div>

        <section className="space-y-6">
          {checklistSections.map((section) => (
            <section key={section.title} className="mt-card-soft p-6 md:p-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <div
                    className={[
                      "inline-flex rounded-full px-3 py-1 text-xs font-semibold",
                      section.tone === "emerald"
                        ? "bg-emerald-100 text-emerald-700"
                        : section.tone === "sky"
                        ? "bg-sky-100 text-sky-700"
                        : section.tone === "amber"
                        ? "bg-amber-100 text-amber-700"
                        : section.tone === "rose"
                        ? "bg-rose-100 text-rose-700"
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
              신생아 준비할 때 같이 보면 좋은 것
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <GuideCard
                title="집 안 동선"
                description="수유, 기저귀 교체, 잠자리 공간이 자연스럽게 이어지도록 배치해두면 훨씬 편해요."
              />
              <GuideCard
                title="세탁과 수납"
                description="옷과 손수건, 거즈 수건은 자주 세탁하게 되니 세탁 후 정리 위치까지 같이 생각하는 것이 좋아요."
              />
              <GuideCard
                title="기록하기"
                description="어떤 물품을 자주 쓰는지 며칠만 봐도 추가 구매가 필요한 항목이 훨씬 명확해져요."
              />
              <GuideCard
                title="외출 전 점검"
                description="퇴원, 예방접종, 병원 방문처럼 처음 외출하는 상황을 미리 떠올려보면 필요한 준비가 더 잘 보여요."
              />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-amber-100 bg-amber-50 p-5 md:p-6">
              <h2 className="text-lg font-bold text-slate-900">안내 문구</h2>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
                <li>• 이 페이지는 신생아 맞이 준비 흐름을 정리한 참고용 체크리스트예요.</li>
                <li>• 제품마다 잘 맞는 정도가 다를 수 있으니 처음부터 너무 많이 사두지 않는 편이 좋아요.</li>
                <li>• 병원이나 조리원 제공 물품은 별도로 확인하고, 집에서 바로 필요한 기본 용품을 우선 정리해 주세요.</li>
                <li>• 물건 수보다 자주 쓰는 항목을 어디에 두는지가 실제 생활에서 더 중요할 수 있어요.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-5 md:p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
              <h2 className="text-lg font-bold text-slate-900">
                함께 보면 좋은 페이지
              </h2>
              <div className="mt-4 space-y-3">
                <Link
                  href="/info/newborn"
                  className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  신생아 정보
                </Link>
                <Link
                  href="/tools/baby-age"
                  className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  아기 개월수 계산기
                </Link>
                <Link
                  href="/tools/vaccine-schedule"
                  className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  예방접종 일정 계산기
                </Link>
              </div>
            </div>
          </aside>
        </section>

        <div className="mt-card p-4 md:p-5">
          <div className="text-sm font-bold text-slate-900">준비를 마무리할 때 확인해 보세요</div>
          <p className="mt-2 text-sm leading-7 text-slate-600">체크가 끝난 뒤에도 병원 안내문, 어린이집 공지, 집 안 동선처럼 실제 환경에 따라 달라지는 부분이 없는지 마지막으로 한 번 더 확인하면 좋아요.</p>
        </div>

        <section className="mt-card p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                  신생아 준비 체크리스트는 어떻게 활용하면 좋을까요?
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700 md:text-base">
                  <p>
                    신생아 준비 체크리스트는 물건을 많이 사기 위한 목록이라기보다,
                    무엇을 먼저 챙기면 좋을지 순서를 정리하는 데 더 도움이 돼요.
                    실제로는 기저귀, 손수건, 수유용품처럼 자주 쓰는 것부터 준비하고,
                    수면 공간과 외출 준비를 차근차근 확장하는 방식이 훨씬 실용적이에요.
                  </p>
                  <p>
                    특히 신생아 시기에는 물건 개수보다 자주 쓰는 항목을 어디에 두고
                    어떻게 꺼낼지가 더 중요할 때가 많아요. 그래서 이 페이지도 품목
                    나열보다 실제 생활 흐름을 생각하며 정리할 수 있게 구성했습니다.
                  </p>
                  <p>
                    다만 병원이나 조리원에서 제공하는 물품은 각각 다를 수 있으니,
                    최종 준비는 안내문을 함께 보고 조정하는 것이 좋아요.
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
                  신생아 준비는 카테고리별로 나눠서 보면 훨씬 정리하기 쉬워요.
                  이 체크리스트는 위생, 수유, 수면, 의류, 외출 준비까지 큰 흐름으로
                  나누어 필요한 내용을 빠르게 다시 확인할 수 있도록 만들었습니다.
                </p>
              </div>

              <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-5 md:p-6">
                <h2 className="text-lg font-bold text-slate-900">
                  많이보다 잘 쓰는 것이 중요해요
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  처음부터 모든 용품을 넉넉하게 사두기보다, 실제로 자주 쓰는 기본
                  항목부터 준비하고 생활하면서 필요한 것을 보완하는 편이 더 실용적일 수 있어요.
                  우리 집 동선과 사용 패턴에 맞게 정리해두는 것이 큰 도움이 됩니다.
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
  tone: "emerald" | "amber" | "sky";
}) {
  const toneClass =
    tone === "emerald"
      ? "border-emerald-100 bg-emerald-50"
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