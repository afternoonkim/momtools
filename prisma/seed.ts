import dotenv from "dotenv";

const dotenvOptions = (path: string) =>
  ({ path, quiet: true }) as Parameters<typeof dotenv.config>[0];

dotenv.config(dotenvOptions(".env.local"));
dotenv.config(dotenvOptions(".env"));

import { qnaCategories, qnaData, type QnaCategory, type QnaEntry } from "../data/qna";
import type { Prisma, PrismaClient } from "../lib/generated/prisma/client";

let activePrisma: PrismaClient | null = null;

type SeedSection = {
  sectionType: string;
  title?: string;
  body?: string;
  items?: string[];
  sortOrder: number;
};

type QnaProfile = {
  key: string;
  title: string;
  page: string;
  intent: string;
  first: string[];
  check: string[];
  age: string[];
  caution: string[];
  record: string[];
  homeAction: string[];
};

const categoryOrder: Record<QnaCategory, number> = {
  health: 1,
  growth: 2,
  behavior: 3,
};

const categoryDescriptions: Record<QnaCategory, string> = {
  health:
    "열, 기침, 콧물, 설사, 구토처럼 부모가 집에서 먼저 확인해야 하는 아이 건강 질문을 월령과 컨디션 기준으로 정리합니다.",
  growth:
    "키, 몸무게, 발달 단계, 언어, 대근육·소근육 발달처럼 아이가 자기 속도로 자라고 있는지 확인하는 질문을 모았습니다.",
  behavior:
    "잠, 떼쓰기, 어린이집 적응, 식사 거부, 배변훈련처럼 일상에서 자주 부딪히는 아이 행동 고민을 상황별로 정리합니다.",
};

const healthProfiles: Record<string, QnaProfile> = {
  fever: {
    key: "fever",
    title: "아기 열 대처 가이드",
    page: "/health/fever",
    intent: "발열",
    first: [
      "체온 숫자만으로 결론을 내리기보다 월령, 측정 부위, 아이 반응, 먹는 양을 함께 봐야 합니다.",
      "열이 있어도 아이가 잘 마시고 반응이 괜찮은지, 반대로 열이 낮아도 처지는지부터 나누어 확인하세요.",
      "부모가 가장 먼저 볼 기준은 체온 하나가 아니라 아이의 전체 컨디션과 수분 섭취 흐름입니다.",
    ],
    check: [
      "같은 체온계와 같은 부위로 다시 재고, 옷차림·이불·실내 온도·최근 예방접종 여부를 함께 확인해 보세요.",
      "열이 오른 시간, 최고 체온, 해열 뒤 반응, 콧물·기침·구토·설사 동반 여부를 따로 적어두면 판단이 쉬워집니다.",
      "손발이 차다는 이유만으로 더 덮기보다 몸통 열감, 땀, 방 온도, 아이 표정을 같이 보세요.",
    ],
    age: [
      "생후 3개월 미만에서 38도 이상으로 측정되면 기다리기보다 의료진 상담을 우선하는 편이 안전합니다.",
      "월령이 어릴수록 열의 원인을 집에서 구분하기 어렵기 때문에 관찰 간격을 짧게 잡는 것이 좋습니다.",
      "이후 월령이라도 고열이 오래가거나 먹는 양과 소변이 줄면 단순히 기다리기보다 상담 기준에 가까워집니다.",
    ],
    caution: [
      "경련, 축 늘어짐, 숨쉬기 어려움, 입술색 변화, 반복 구토, 소변 감소, 깨워도 반응이 약한 모습이 보이면 빠르게 진료 상담을 받으세요.",
      "해열 뒤에도 아이가 처지거나 수분 섭취가 거의 되지 않으면 체온이 조금 내려갔더라도 확인이 필요합니다.",
      "생후 초기 발열, 의식 저하, 호흡곤란, 반복되는 고열은 집에서만 지켜보기보다 의료진에게 문의하는 것이 안전합니다.",
    ],
    record: [
      "체온을 잰 시간과 부위, 해열제 사용 시간, 먹은 양, 소변 횟수, 잠든 시간, 아이 반응을 순서대로 남겨 주세요.",
      "하루 동안의 최고 체온과 열이 다시 오른 시간, 동반 증상, 마지막 소변 시간을 메모해두면 상담 때 도움이 됩니다.",
      "접종일, 외출이나 감기 노출, 복용한 약, 수유량 변화를 같이 기록하면 원인을 좁히는 데 도움이 됩니다.",
    ],
    homeAction: [
      "우선 체온을 다시 확인하고 아이가 물이나 수유를 받아들이는지, 기저귀가 평소처럼 젖는지부터 살펴보세요.",
      "아이가 힘들어 보이면 옷을 조금 가볍게 하고 실내를 너무 덥지 않게 조절한 뒤 반응을 확인하세요.",
      "체온보다 아이 반응이 나빠 보이면 기록을 기다리지 말고 바로 상담 기준을 확인하세요.",
    ],
  },
  cough: {
    key: "cough",
    title: "아기 기침·호흡 확인 가이드",
    page: "/health/cough",
    intent: "기침과 호흡",
    first: [
      "기침은 소리의 크기보다 숨쉬기 편한지, 수유와 잠이 유지되는지가 더 중요합니다.",
      "밤에 심한지, 누우면 심해지는지, 콧물이나 열이 함께 있는지를 나누어 보면 원인을 좁히기 쉽습니다.",
      "기침이 들릴 때는 소리보다 아이의 가슴 움직임과 먹는 양 변화를 먼저 확인하세요.",
    ],
    check: [
      "마른기침인지 가래가 섞였는지, 쌕쌕거림이 있는지, 수유 중 숨차 보이는지 확인해 보세요.",
      "기침이 심해지는 시간대, 눕는 자세, 콧물 동반 여부, 방 안 건조함을 함께 살펴보세요.",
      "기침 후 토하는지, 잠에서 자주 깨는지, 평소보다 보채거나 처지는지도 같이 봐야 합니다.",
    ],
    age: [
      "어린 아기는 기침만으로도 먹는 양이 줄 수 있어 기저귀 횟수와 처짐 여부를 함께 봐야 합니다.",
      "월령이 낮거나 조산 이력이 있으면 같은 기침이라도 더 빠르게 상담 기준에 가까워질 수 있습니다.",
      "말로 숨참을 표현하기 어려운 시기에는 수유 중 멈춤, 갈비뼈가 들어가는 호흡 같은 신호가 중요합니다.",
    ],
    caution: [
      "쌕쌕거림, 숨가쁨, 갈비뼈 사이가 들어가는 호흡, 입술색 변화, 반복 구토를 동반한 기침, 수유량 급감이 있으면 진료 상담이 필요합니다.",
      "호흡이 빨라 보이거나 아이가 축 처지고 잘 먹지 못하면 단순 기침으로만 보지 말고 확인을 받으세요.",
      "기침과 함께 고열이 오래가거나 숨쉬기가 힘들어 보이면 의료진 상담을 미루지 않는 것이 좋습니다.",
    ],
    record: [
      "기침이 심해지는 시간, 자세, 콧물·열 동반 여부, 수유량과 소변 횟수를 하루 단위로 메모해 주세요.",
      "숨소리나 기침 소리는 짧은 영상으로 남겨두면 진료 상담 때 상황을 설명하기 쉽습니다.",
      "외출, 감기 노출, 어린이집 등원, 방 안 습도 변화도 함께 적어두면 원인을 비교하기 좋습니다.",
    ],
    homeAction: [
      "수유나 물 마시기가 유지되는지 확인하고, 코막힘이 있으면 먼저 코를 편하게 해주는 것부터 시작하세요.",
      "기침이 심한 시간대를 적어두고 누웠을 때 심해지는지, 활동 후 심해지는지 비교해 보세요.",
      "숨쉬기 힘들어 보이는 신호가 있으면 가정관리보다 상담 기준 확인을 우선하세요.",
    ],
  },
  runny: {
    key: "runny",
    title: "아기 콧물·코막힘 가이드",
    page: "/health/runny-nose",
    intent: "콧물과 코막힘",
    first: [
      "콧물 색만으로 상태를 단정하기보다 코막힘 때문에 먹기와 잠이 흔들리는지를 먼저 봐야 합니다.",
      "코가 막힌 아기는 수유와 수면이 바로 불편해질 수 있어 양과 기저귀 변화를 함께 확인하세요.",
      "콧물은 양, 색, 지속 기간보다 아이가 숨쉬고 먹는 데 어려움이 있는지가 더 중요한 기준입니다.",
    ],
    check: [
      "수유 중 자주 떼는지, 잠잘 때 입으로 숨 쉬는지, 한쪽 코만 오래 막히는지 확인해 보세요.",
      "콧물 색 변화, 열 동반 여부, 기침이 함께 있는지, 코막힘이 심한 시간대를 나누어 보세요.",
      "코를 닦은 뒤 바로 다시 막히는지, 아이가 숨쉬기 불편해 보이는지도 함께 관찰하세요.",
    ],
    age: [
      "신생아와 어린 아기는 코막힘만으로도 수유가 어려워질 수 있어 먹는 양과 소변 횟수를 같이 봅니다.",
      "월령이 낮을수록 코막힘으로 인한 수유 저하가 빠르게 나타날 수 있습니다.",
      "돌 전후 아이는 활동량이 늘어 콧물이 길어질 수 있지만 컨디션 저하가 동반되는지는 따로 봐야 합니다.",
    ],
    caution: [
      "숨쉬기 힘들어함, 고열, 귀 통증 의심, 수유량 감소, 콧물이 오래 지속되며 컨디션이 떨어지는 경우에는 상담을 고려하세요.",
      "코막힘 때문에 거의 먹지 못하거나 잠을 못 잘 정도로 힘들어하면 의료진에게 문의하는 것이 좋습니다.",
      "호흡곤란처럼 보이거나 입술색 변화, 심한 처짐이 있으면 빠르게 진료 상담을 받으세요.",
    ],
    record: [
      "콧물 색과 양, 코막힘이 심한 시간, 수유량, 잠자는 자세, 열 동반 여부를 기록해 주세요.",
      "콧물이 시작된 날짜와 어린이집·가족 감기 노출 여부를 같이 적어두면 상담 때 도움이 됩니다.",
      "코막힘 때문에 먹는 양이 얼마나 줄었는지와 마지막 소변 시간을 함께 남겨두세요.",
    ],
    homeAction: [
      "먹기 전 코가 너무 막혀 있지 않은지 확인하고, 실내가 지나치게 건조하지 않게 관리해 보세요.",
      "수유량과 기저귀 횟수가 유지되는지 하루 기준으로 비교해 보세요.",
      "숨쉬기 불편해 보이면 콧물 색을 기다리기보다 상담이 필요한 신호부터 확인하세요.",
    ],
  },
  diarrhea: {
    key: "diarrhea",
    title: "아기 설사 확인 가이드",
    page: "/health/diarrhea",
    intent: "설사와 변 변화",
    first: [
      "설사는 횟수만큼이나 소변량과 컨디션을 함께 봐야 합니다.",
      "묽은 변이 반복되면 먼저 탈수 신호가 없는지, 아이가 평소처럼 먹고 반응하는지 확인하세요.",
      "변이 묽어졌을 때는 새 음식이나 장염 가능성보다 아이의 수분 상태를 먼저 챙기는 것이 좋습니다.",
    ],
    check: [
      "평소보다 변 횟수가 얼마나 늘었는지, 피나 점액이 섞였는지, 입안이 마르거나 눈물이 줄었는지 살펴보세요.",
      "마지막 소변 시간, 먹은 양, 열이나 구토 동반 여부를 함께 확인해야 합니다.",
      "새로 먹은 이유식 재료, 약, 가족 장염 여부도 같이 비교해 보세요.",
    ],
    age: [
      "어린 아기는 수분 여유가 적어 설사 횟수가 많지 않아도 소변 감소가 빠르게 나타날 수 있습니다.",
      "이유식 이후에는 새 재료나 질감 변화가 변 상태에 영향을 줄 수 있어 식단 기록을 함께 보는 것이 좋습니다.",
      "월령이 낮을수록 탈수 신호를 더 빨리 확인해야 합니다.",
    ],
    caution: [
      "혈변, 반복 구토, 소변 감소, 축 처짐, 고열, 입이 마르고 눈물이 거의 없는 모습이 보이면 진료 상담이 우선입니다.",
      "설사와 함께 먹지 못하고 처지는 모습이 있으면 집에서 오래 지켜보기보다 확인을 받으세요.",
      "검은 변, 피가 섞인 변, 심한 복통처럼 보이는 울음이 반복되면 의료진 상담이 필요합니다.",
    ],
    record: [
      "변 횟수와 모양, 마지막 소변 시간, 먹은 양, 열 여부, 새로 먹은 음식이나 약을 함께 적어두세요.",
      "기저귀 사진은 변 색과 점액 여부를 설명하는 데 도움이 될 수 있습니다.",
      "설사가 시작된 날짜와 가족 중 비슷한 증상이 있는지도 남겨두세요.",
    ],
    homeAction: [
      "아이의 소변 횟수와 입안 건조함을 먼저 확인하고, 먹을 수 있는 만큼 수분 섭취를 이어가세요.",
      "새 음식은 잠시 멈추고 최근 먹은 재료와 변화를 비교해 보세요.",
      "혈변이나 탈수 신호가 보이면 변 횟수를 더 세기보다 상담을 우선하세요.",
    ],
  },
  vomit: {
    key: "vomit",
    title: "아기 구토 확인 가이드",
    page: "/health/vomiting",
    intent: "구토",
    first: [
      "한두 번 토했다고 모두 응급은 아니지만 반복 횟수, 토한 색, 소변량, 처짐 여부는 꼭 봐야 합니다.",
      "토한 직후에는 아이가 다시 먹을 수 있는지보다 탈수와 반복 구토 신호를 먼저 확인하세요.",
      "구토는 원인을 바로 단정하기보다 색, 횟수, 직전에 먹은 것, 아이 반응을 함께 봐야 합니다.",
    ],
    check: [
      "분수처럼 뿜는지, 초록색이나 피가 섞였는지, 수유 후 바로 반복되는지, 탈수 신호가 있는지 확인하세요.",
      "토한 뒤 축 처지는지, 열이나 설사가 같이 있는지, 마지막 소변이 언제였는지 살펴보세요.",
      "기침 뒤 토한 것인지, 먹고 바로 토한 것인지, 멀미나 울음 뒤 토한 것인지 상황을 나누어 보세요.",
    ],
    age: [
      "신생아는 반복 구토와 수유 저하를 더 조심해서 봐야 합니다.",
      "이유식 이후에는 새 음식, 질감 변화, 장염 가능성도 함께 비교해 볼 수 있습니다.",
      "어린 월령일수록 구토 뒤 소변 감소가 빠르게 올 수 있어 기저귀 확인이 중요합니다.",
    ],
    caution: [
      "초록색 구토, 피 섞인 구토, 반복 구토 뒤 소변 감소, 심하게 처짐, 배가 심하게 불러 보이면 빠른 상담이 필요합니다.",
      "구토가 반복되고 아이가 거의 먹지 못하거나 깨워도 반응이 약하면 의료진에게 문의하세요.",
      "머리를 부딪힌 뒤 구토가 반복되거나 의식 변화가 있으면 즉시 확인이 필요합니다.",
    ],
    record: [
      "토한 시간과 횟수, 색, 직전에 먹은 음식, 마지막 소변 시간, 열·설사 동반 여부를 남겨 주세요.",
      "가능하면 토한 양과 모양을 짧게 기록하고, 반복 간격을 함께 적어두세요.",
      "수유량, 이유식 재료, 복용한 약, 사고 여부를 같이 기록하면 상담 때 도움이 됩니다.",
    ],
    homeAction: [
      "토한 뒤 바로 많이 먹이기보다 아이가 처지는지와 소변이 유지되는지 먼저 확인하세요.",
      "구토 색이 초록색이거나 피가 섞여 보이면 기록보다 상담 기준 확인이 우선입니다.",
      "반복 구토가 멈췄더라도 먹는 양과 기저귀 횟수를 몇 시간 더 비교해 보세요.",
    ],
  },
  constipation: {
    key: "constipation",
    title: "아기 변비 확인 가이드",
    page: "/health/constipation",
    intent: "변비와 배변",
    first: [
      "며칠 만에 변을 봤는지보다 변이 딱딱한지, 힘들어하는지, 배가 불편해 보이는지가 더 중요합니다.",
      "배변 간격이 길어져도 아이가 편안하고 변이 부드러우면 상황을 조금 더 나누어 볼 수 있습니다.",
      "변비가 걱정될 때는 횟수만 세기보다 변 모양과 아이의 불편감을 함께 봐야 합니다.",
    ],
    check: [
      "변 모양이 토끼똥처럼 딱딱한지, 배에 힘을 주며 우는지, 피가 묻는지, 먹는 양이 줄었는지 확인하세요.",
      "이유식 재료, 수분 섭취, 활동량, 배변 시 울음이나 항문 찢어짐 여부를 같이 살펴보세요.",
      "배가 심하게 빵빵한지, 구토가 있는지, 평소보다 보챔이 심한지도 함께 봐야 합니다.",
    ],
    age: [
      "완전 모유수유 아기는 배변 간격이 길어질 수 있지만, 이유식 이후에는 수분과 식이섬유 변화도 함께 봅니다.",
      "월령이 낮은 아기는 무리한 자극보다 먹는 양과 편안함을 먼저 확인하는 것이 좋습니다.",
      "돌 이후에는 식사 패턴, 우유량, 활동량이 배변 리듬에 영향을 줄 수 있습니다.",
    ],
    caution: [
      "심한 복부팽만, 반복 구토, 피가 묻는 변, 체중 증가 부진, 매우 아파 보이는 배변이 반복되면 상담이 필요합니다.",
      "배변을 너무 아파하거나 변비 때문에 먹는 양이 줄면 의료진에게 문의해 보세요.",
      "딱딱한 변과 피 묻음이 반복되면 집에서만 해결하려 하기보다 상담을 받는 것이 좋습니다.",
    ],
    record: [
      "배변 날짜, 변 모양, 이유식 재료, 수분 섭취, 배변 시 울음이나 피 묻음 여부를 적어두세요.",
      "배변 간격보다 변의 딱딱함과 아이 표정을 함께 기록하면 상담 때 설명이 쉽습니다.",
      "최근 먹는 양, 우유량, 활동량, 새로 먹은 음식도 함께 남겨두세요.",
    ],
    homeAction: [
      "최근 이유식 재료와 수분 섭취를 확인하고, 변 모양을 기준으로 변화를 기록해 보세요.",
      "아이가 아파 보이지 않는다면 배변 간격만 보고 서두르기보다 변 상태를 함께 봐주세요.",
      "복부팽만이나 반복 구토가 함께 있으면 변비로만 보지 말고 상담 기준을 확인하세요.",
    ],
  },
  skin: {
    key: "skin",
    title: "아기 발진·두드러기 확인 가이드",
    page: "/health/rash",
    intent: "피부 변화",
    first: [
      "피부 변화는 모양과 번지는 속도, 가려움, 열 동반 여부를 함께 봐야 합니다.",
      "발진은 사진 한 장보다 언제 시작됐고 어디로 번지는지, 아이가 가려워하는지를 함께 보는 것이 좋습니다.",
      "피부가 붉어졌을 때는 새 음식·세제·로션·침 자극처럼 최근 달라진 것을 먼저 떠올려 보세요.",
    ],
    check: [
      "발진 위치, 새 음식·세제·로션 사용, 침이나 마찰 자극, 열과 가려움 동반 여부를 확인해 보세요.",
      "두드러기처럼 올라왔다 사라지는지, 물집이 있는지, 눌렀을 때 색이 변하는지도 살펴보세요.",
      "입 주변이나 기저귀 부위처럼 자극이 많은 곳인지, 전신으로 번지는지도 구분해 보세요.",
    ],
    age: [
      "어린 아기는 침과 마찰만으로도 입 주변이나 목 주름이 쉽게 붉어질 수 있습니다.",
      "이유식 이후에는 새 음식이 피부 변화와 연결되는지 식단 기록을 함께 보는 것이 좋습니다.",
      "월령이 높아질수록 외부 활동, 땀, 세제, 로션 같은 환경 요인도 같이 확인해야 합니다.",
    ],
    caution: [
      "호흡곤란, 얼굴·입술 부종, 전신 두드러기, 고열, 물집, 심한 처짐이 있으면 빠르게 상담하세요.",
      "발진이 빠르게 번지거나 열과 함께 아이 상태가 나빠지면 단순 피부 자극으로만 보지 마세요.",
      "새 음식 뒤 입술이나 눈 주변이 붓고 숨쉬기 힘들어 보이면 즉시 진료 상담이 필요합니다.",
    ],
    record: [
      "발진 사진, 새로 먹은 음식, 바른 제품, 시작 시간, 가려움과 열 여부를 기록해 두면 좋습니다.",
      "피부가 좋아졌다 나빠지는 시간대와 목욕·로션·외출 뒤 변화를 함께 적어두세요.",
      "처음 생긴 부위와 번진 방향을 사진으로 남겨두면 상담 때 도움이 됩니다.",
    ],
    homeAction: [
      "새로 바꾼 음식이나 제품을 떠올려 보고, 발진 사진을 남긴 뒤 번지는지 확인하세요.",
      "아이가 긁어 상처가 나지 않게 하고, 열이나 부종이 동반되는지 먼저 살펴보세요.",
      "호흡곤란이나 얼굴 부종이 있으면 피부 관리보다 진료 상담이 우선입니다.",
    ],
  },
  eye: {
    key: "eye",
    title: "아기 눈곱·눈 충혈 확인 가이드",
    page: "/health/rash",
    intent: "눈곱과 눈 충혈",
    first: [
      "눈곱은 색과 양, 한쪽인지 양쪽인지, 충혈과 열이 있는지에 따라 관리 방향이 달라집니다.",
      "눈 분비물이 반복될 때는 닦아도 바로 다시 끼는지와 눈 흰자가 빨간지를 함께 보세요.",
      "눈곱만 보고 단정하기보다 눈물 고임, 붓기, 아이가 불편해하는 정도를 같이 확인해야 합니다.",
    ],
    check: [
      "노란 눈곱이 계속 끼는지, 눈 흰자가 빨간지, 눈물이 고이는지, 한쪽만 반복되는지 확인하세요.",
      "눈꺼풀이 붓거나 아이가 눈을 비비는지, 열이나 콧물이 함께 있는지도 살펴보세요.",
      "닦아낸 뒤 다시 끼는 시간과 양쪽 눈 차이를 기록해 보세요.",
    ],
    age: [
      "어린 아기는 눈물길이 좁아 눈곱이 반복될 수 있지만, 충혈이나 붓기가 함께 있으면 감염 가능성도 봐야 합니다.",
      "신생아 시기 눈 분비물은 더 조심해서 확인해야 하므로 반복되면 상담을 권합니다.",
      "월령이 높아지면 감기와 함께 눈곱이 늘거나 손으로 비비며 자극될 수 있습니다.",
    ],
    caution: [
      "눈이 붓고 빨갛거나, 고름 같은 분비물, 열, 눈을 못 뜰 정도의 불편감, 신생아 눈 분비물이 있으면 상담하세요.",
      "눈 주변이 많이 붓거나 아이가 통증처럼 심하게 보채면 진료 상담이 필요합니다.",
      "눈곱과 함께 고열이나 심한 처짐이 있으면 단순 눈곱으로만 보지 마세요.",
    ],
    record: [
      "눈곱 색, 닦아도 다시 끼는 시간, 한쪽·양쪽 여부, 충혈 사진, 열 동반 여부를 남겨 주세요.",
      "처음 시작된 날짜와 감기 증상, 가족 중 결막염 여부를 함께 적어두세요.",
      "눈을 비비는 행동이나 수면 뒤 심해지는지도 같이 기록하면 좋습니다.",
    ],
    homeAction: [
      "깨끗한 거즈나 티슈로 닦은 뒤 얼마나 빨리 다시 끼는지 확인해 보세요.",
      "충혈과 붓기가 있는지 사진으로 남기고, 한쪽만 반복되는지 비교하세요.",
      "신생아 눈 분비물이나 심한 붓기가 있으면 바로 상담 기준을 확인하세요.",
    ],
  },
  feeding: {
    key: "feeding",
    title: "아기 수유·먹는 양 확인 가이드",
    page: "/tools/baby-age",
    intent: "수유와 먹는 양",
    first: [
      "수유 거부는 한 번의 거부보다 하루 전체 섭취량과 소변 횟수를 함께 봐야 합니다.",
      "먹는 양이 줄었을 때는 배고픔보다 코막힘, 입안 통증, 열, 피곤함이 겹쳤는지 확인하세요.",
      "아기가 덜 먹는 날에는 총량과 기저귀 횟수, 아이 반응을 함께 보며 흐름을 판단하는 것이 좋습니다.",
    ],
    check: [
      "젖병이나 젖을 무는 순간 힘들어하는지, 코막힘·입안 통증·열이 있는지, 기저귀가 평소처럼 젖는지 확인하세요.",
      "수유 간격, 한 번에 먹는 양, 거부하는 시간대, 트림이나 구토 동반 여부를 같이 살펴보세요.",
      "새 젖꼭지, 분유 변경, 주변 소음, 졸림 같은 환경 변화도 함께 비교해 보세요.",
    ],
    age: [
      "어린 아기는 수유량 감소가 빨리 탈수로 이어질 수 있고, 월령이 높아질수록 치아·호기심·이유식 영향도 함께 봅니다.",
      "월령이 낮을수록 먹는 양보다 소변 횟수와 처짐 여부가 중요한 신호가 됩니다.",
      "이유식을 시작한 뒤에는 수유와 이유식의 간격이 거부에 영향을 줄 수 있습니다.",
    ],
    caution: [
      "반나절 이상 거의 못 먹음, 소변 감소, 축 처짐, 반복 구토, 호흡이 힘들어 보이는 경우에는 상담이 필요합니다.",
      "먹는 양이 줄고 아이가 계속 처지거나 깨워도 반응이 약하면 빠르게 확인을 받으세요.",
      "수유 거부와 함께 고열, 반복 구토, 호흡곤란이 있으면 집에서만 지켜보지 않는 것이 좋습니다.",
    ],
    record: [
      "수유 시간과 양, 거부한 상황, 마지막 소변, 열·구토·콧물 여부를 간단히 기록해 주세요.",
      "하루 총량과 기저귀 횟수를 전날과 비교하면 변화가 더 분명해집니다.",
      "거부가 심한 시간대와 그 직전 수면·놀이·울음 상황을 함께 남겨두세요.",
    ],
    homeAction: [
      "하루 총 수유량과 젖은 기저귀 횟수를 먼저 확인하고, 코막힘이나 열이 있는지 살펴보세요.",
      "먹이려고 애쓰기보다 아이가 거부하는 상황을 기록해 원인을 좁혀보세요.",
      "거의 먹지 못하고 소변이 줄면 수유 방법보다 상담 기준 확인이 먼저입니다.",
    ],
  },
  weaning: {
    key: "weaning",
    title: "이유식 시작·거부 확인 가이드",
    page: "/baby-food",
    intent: "이유식",
    first: [
      "이유식 거부는 맛의 문제만이 아니라 질감, 피곤함, 수유 간격, 컨디션이 함께 영향을 줍니다.",
      "이유식은 처음부터 양을 늘리기보다 아이가 앉아 있고 삼킬 준비가 되었는지 보는 것이 중요합니다.",
      "먹는 양이 적어도 경험을 쌓는 시기라면 질감과 시간대를 조절하며 천천히 보는 것이 좋습니다.",
    ],
    check: [
      "입자를 너무 빨리 올렸는지, 먹는 시간이 졸린 시간과 겹치는지, 새 재료 뒤 불편감이 있었는지 살펴보세요.",
      "수유 직후라 배가 부른지, 의자 자세가 불편한지, 숟가락이나 온도에 거부가 있는지 확인하세요.",
      "새 재료를 먹은 뒤 피부, 변, 구토, 보챔 변화가 있었는지도 함께 봐야 합니다.",
    ],
    age: [
      "초기에는 양보다 경험이 중요하고, 중기 이후에는 질감 변화와 손으로 만져보는 기회를 천천히 늘려볼 수 있습니다.",
      "월령과 발달 준비가 맞지 않으면 같은 음식도 거부가 심할 수 있습니다.",
      "중기 이후에는 질감과 입자 크기, 스스로 먹고 싶은 욕구가 식사 분위기에 영향을 줍니다.",
    ],
    caution: [
      "음식만 보면 심하게 울며 모든 식사를 거부하거나, 체중 증가가 둔해지고 구토·설사가 반복되면 상담하세요.",
      "새 음식 뒤 전신 두드러기, 얼굴 부종, 호흡 불편이 보이면 즉시 진료 상담이 필요합니다.",
      "이유식 거부와 함께 먹는 양이 전체적으로 줄고 소변도 감소하면 확인을 받는 것이 좋습니다.",
    ],
    record: [
      "거부한 재료와 질감, 먹은 양, 식사 시간, 수유 간격, 피부·변 변화를 함께 남기면 좋습니다.",
      "잘 먹은 시간대와 싫어한 질감을 비교해두면 다음 식단을 조정하기 쉽습니다.",
      "새 재료는 날짜별로 적고, 변이나 피부 변화가 있었는지 함께 기록하세요.",
    ],
    homeAction: [
      "오늘은 양보다 앉는 자세, 시간대, 질감이 맞았는지부터 확인해 보세요.",
      "거부가 심하면 한 단계 부드러운 질감으로 돌아가고, 수유 간격도 함께 조정해 보세요.",
      "알레르기 의심 신호가 있으면 새 재료 시도보다 상담 기준 확인이 먼저입니다.",
    ],
  },
  general: {
    key: "general",
    title: "아이 건강 Q&A",
    page: "/qna/health",
    intent: "아이 건강 상태",
    first: [
      "아이 건강 문제는 증상 하나보다 컨디션, 먹는 양, 소변·대변 변화가 함께 흔들리는지를 보는 것이 좋습니다.",
      "증상이 애매할수록 평소와 다른 점을 나누어 기록하면 다음 행동을 정하기 쉬워집니다.",
      "집에서 확인할 수 있는 신호와 의료진에게 물어볼 신호를 분리해 두면 불안이 줄어듭니다.",
    ],
    check: [
      "언제 시작됐는지, 좋아지는 흐름인지, 열·통증·구토 같은 동반 증상이 있는지 차분히 확인해 보세요.",
      "먹는 양, 잠, 놀이 반응, 기저귀 횟수가 평소와 얼마나 다른지 비교해 보세요.",
      "새 음식, 약, 외출, 접종, 가족 감기 노출처럼 최근 달라진 것도 함께 확인하세요.",
    ],
    age: [
      "월령이 어릴수록 같은 증상도 더 빠르게 상담 기준에 가까워질 수 있습니다.",
      "말로 불편함을 표현하기 어려운 시기에는 처짐, 먹는 양, 울음 변화 같은 간접 신호가 중요합니다.",
      "아이마다 평소 리듬이 다르므로 또래 비교보다 내 아이의 변화 폭을 보는 것이 좋습니다.",
    ],
    caution: [
      "반응이 약해짐, 숨쉬기 어려움, 반복 구토, 소변 감소, 피가 섞인 분비물이 있으면 상담을 미루지 마세요.",
      "평소와 확연히 다르게 처지거나 깨워도 반응이 약하면 바로 진료 상담을 권합니다.",
      "증상이 빠르게 악화되거나 보호자가 보기에 이상하다는 느낌이 강하면 확인을 받는 편이 안전합니다.",
    ],
    record: [
      "증상 시작 시간, 먹은 양, 기저귀 횟수, 사진이나 동영상, 새 음식·약 사용 여부를 정리해 주세요.",
      "좋아지는지 나빠지는지 시간대별로 짧게 남겨두면 상담 때 설명하기 쉽습니다.",
      "체온, 수유량, 수면, 울음 변화처럼 숫자나 시간으로 남길 수 있는 정보를 같이 적어두세요.",
    ],
    homeAction: [
      "먼저 아이가 평소처럼 먹고 반응하는지, 소변이 줄지 않았는지 확인하세요.",
      "증상이 시작된 시간과 최근 달라진 생활 변화를 간단히 메모해 보세요.",
      "안전 신호가 하나라도 보이면 더 기다리기보다 상담 기준을 확인하세요.",
    ],
  },
};

const growthProfiles: Record<string, QnaProfile> = {
  percentile: {
    key: "percentile",
    title: "성장 백분위 계산기",
    page: "/tools/growth-percentile",
    intent: "성장 백분위",
    first: [
      "성장 백분위는 높고 낮음보다 아이가 자기 곡선을 따라가고 있는지가 핵심입니다.",
      "한 번의 숫자만 보면 불안해지기 쉬우니 이전 기록과 이어서 보는 것이 좋습니다.",
      "키와 몸무게는 오늘의 결과보다 몇 달 동안의 흐름을 함께 볼 때 더 현실적으로 해석할 수 있습니다.",
    ],
    check: [
      "최근 측정값이 같은 조건에서 잰 것인지, 식사량과 활동량, 아픈 기간이 있었는지 같이 확인해 보세요.",
      "측정 도구와 시간, 옷차림이 달라지면 작은 차이도 크게 느껴질 수 있습니다.",
      "이전 측정값과 비교해 갑자기 크게 떨어지거나 올라갔는지 확인하세요.",
    ],
    age: [
      "월령이 낮을수록 작은 측정 오차도 백분위에 크게 보일 수 있어 같은 방식으로 반복 측정하는 것이 좋습니다.",
      "영아기에는 체중 변화가 빠르고, 돌 이후에는 키와 체형 변화가 조금 더 천천히 보일 수 있습니다.",
      "성장 속도는 아이마다 다르지만 자기 곡선에서 크게 벗어나는 변화는 확인이 필요할 수 있습니다.",
    ],
    caution: [
      "백분위가 짧은 기간에 크게 떨어지거나 체중 증가가 멈추고 먹는 양도 줄면 상담이 필요할 수 있습니다.",
      "체중이 지속적으로 줄거나 성장곡선이 급격히 꺾이면 소아청소년과 상담을 고려하세요.",
      "키·몸무게 변화와 함께 식사량 감소, 잦은 설사·구토, 심한 피로가 있으면 확인을 받는 것이 좋습니다.",
    ],
    record: [
      "측정 날짜, 키·몸무게, 아픈 기간, 식사량 변화, 성장 백분위 흐름을 기록해 주세요.",
      "같은 시간대와 비슷한 조건으로 재고, 이전 기록을 함께 남겨두면 비교가 쉬워집니다.",
      "성장표를 볼 때는 측정값만 아니라 최근 수면·식사·활동 변화도 함께 적어두세요.",
    ],
    homeAction: [
      "오늘 숫자만 보지 말고 이전 기록과 같은 조건에서 비교해 보세요.",
      "식사량과 컨디션이 함께 변했는지 먼저 확인하고 다음 측정 날짜를 정해두세요.",
      "성장곡선이 급격히 꺾이면 계산기 결과만 보지 말고 상담 기준을 확인하세요.",
    ],
  },
  motor: {
    key: "motor",
    title: "월령별 대근육 발달",
    page: "/monthly-guide",
    intent: "대근육 발달",
    first: [
      "뒤집기, 앉기, 기기, 걷기는 날짜처럼 딱 맞춰 일어나기보다 준비 신호가 쌓이며 나타납니다.",
      "운동 발달은 또래보다 빠른지보다 몸을 양쪽으로 비슷하게 쓰는지와 점점 시도하는지가 중요합니다.",
      "한 동작이 늦어 보여도 아이가 힘을 모으고 균형을 잡는 준비 신호가 있는지 함께 봐야 합니다.",
    ],
    check: [
      "양쪽 몸을 비슷하게 쓰는지, 엎드렸을 때 머리와 몸을 지탱하는지, 새로운 동작을 시도하는지 보세요.",
      "한쪽만 계속 쓰거나 자세가 한쪽으로 기울어지는지, 싫어하는 자세가 있는지 확인해 보세요.",
      "짧은 놀이 시간에 반복해서 시도하는지와 피곤할 때 무너지는 정도를 같이 봐주세요.",
    ],
    age: [
      "월령별 범위는 참고 기준이고, 아이마다 준비되는 속도와 순서가 조금씩 다를 수 있습니다.",
      "조산이나 아팠던 기간이 있다면 실제 월령과 발달 흐름을 함께 고려하는 것이 좋습니다.",
      "새 동작은 어느 날 갑자기 나오기보다 목·몸통·팔 힘이 차례로 쌓이며 나타납니다.",
    ],
    caution: [
      "이전에 하던 동작을 잃거나, 한쪽만 계속 쓰거나, 몸이 지나치게 뻣뻣하거나 축 늘어지는 모습이 반복되면 상담을 고려하세요.",
      "월령 범위를 많이 지나도 시도 자체가 거의 없거나 양쪽 사용 차이가 크면 확인을 받아보는 것이 좋습니다.",
      "발달이 늦어 보이는 것과 함께 먹기·반응·시선 맞춤이 함께 흔들리면 전문가 상담을 권합니다.",
    ],
    record: [
      "새로 시도한 동작, 성공한 날짜, 싫어하는 자세, 한쪽 사용 차이, 놀이 시간을 기록해 주세요.",
      "짧은 영상을 남기면 자세와 움직임을 설명하기 쉽습니다.",
      "엎드리기, 앉기, 잡고 서기처럼 단계별 변화를 월령과 함께 적어두세요.",
    ],
    homeAction: [
      "하루 몇 분이라도 아이가 편안해하는 자세에서 놀이 시간을 만들어 보고 반응을 기록하세요.",
      "한쪽 사용 차이가 반복되는지 짧은 영상으로 남겨 비교해 보세요.",
      "새 동작을 억지로 연습시키기보다 아이가 스스로 시도하는 환경을 만들어 주세요.",
    ],
  },
  language: {
    key: "language",
    title: "아기 언어 발달 가이드",
    page: "/monthly-guide",
    intent: "언어 발달",
    first: [
      "말은 단어 수만이 아니라 눈맞춤, 반응, 손짓, 따라 하기 흐름을 함께 봐야 합니다.",
      "아이가 아직 말이 적어도 소리에 반응하고 의도를 표현하는지 함께 보는 것이 중요합니다.",
      "언어 발달은 갑자기 단어가 늘기 전에도 이해와 반응이 먼저 쌓이는 경우가 많습니다.",
    ],
    check: [
      "이름을 부르면 돌아보는지, 손가락으로 가리키는지, 원하는 것을 몸짓으로 표현하는지 확인해 보세요.",
      "소리를 따라 하려는지, 익숙한 말에 반응하는지, 보호자와 주고받는 놀이가 되는지 살펴보세요.",
      "단어 수보다 의사소통 시도와 이해 반응을 함께 기록해 보세요.",
    ],
    age: [
      "월령별 단어 수는 참고 기준이고, 이해 언어와 표현 언어가 같은 속도로 늘지 않을 수 있습니다.",
      "말이 늦어 보여도 눈맞춤과 반응, 손짓이 풍부하면 흐름을 조금 더 나누어 볼 수 있습니다.",
      "청각 문제나 반복 중이염이 있으면 말 발달에도 영향을 줄 수 있어 함께 확인이 필요합니다.",
    ],
    caution: [
      "이름 반응이 거의 없거나, 눈맞춤·손짓·따라 하기가 적고, 이전에 하던 말을 잃었다면 상담을 고려하세요.",
      "말이 늦는 것과 함께 상호작용이 줄거나 소리에 반응이 약하면 확인을 받아보는 것이 좋습니다.",
      "월령이 지났는데 의사표현 시도 자체가 적고 답답해하는 모습이 커지면 전문가 상담이 도움이 될 수 있습니다.",
    ],
    record: [
      "새로 한 말, 알아듣는 말, 손짓, 이름 반응, 따라 한 소리를 날짜와 함께 적어두세요.",
      "짧은 놀이 영상은 아이가 주고받는 방식을 설명하는 데 도움이 됩니다.",
      "책 읽기, 노래, 놀이 뒤 어떤 반응이 늘었는지 기록해 보세요.",
    ],
    homeAction: [
      "아이 말을 바로 고치기보다 짧게 받아주고 한 단어를 덧붙여 반복해 주세요.",
      "이름 반응, 손짓, 따라 하기처럼 말 이전의 소통 신호를 먼저 확인하세요.",
      "이전에 하던 말이나 반응이 줄었다면 기록을 모아 상담 기준을 확인하세요.",
    ],
  },
  general: {
    key: "general",
    title: "월령별 성장 발달 가이드",
    page: "/monthly-guide",
    intent: "성장 발달",
    first: [
      "성장과 발달은 또래와 똑같이 맞추는 것보다 아이가 자기 속도로 꾸준히 변하는지가 중요합니다.",
      "한 가지 모습만 보고 판단하기보다 먹기, 잠, 놀이, 반응이 함께 어떻게 달라지는지 보세요.",
      "발달 고민은 날짜보다 준비 신호와 반복되는 변화를 함께 볼 때 더 현실적으로 정리됩니다.",
    ],
    check: [
      "최근 새로 늘어난 행동과 줄어든 행동, 아이가 좋아하는 놀이, 싫어하는 상황을 함께 확인해 보세요.",
      "수면과 식사, 활동량이 흔들리면 발달 모습도 일시적으로 달라질 수 있습니다.",
      "아이의 평소 흐름과 비교해 갑자기 달라진 점이 있는지 나누어 보세요.",
    ],
    age: [
      "월령별 기준은 참고용이며 아이마다 발달 순서와 속도에는 차이가 있습니다.",
      "조산, 입원, 긴 병치레가 있었다면 발달 흐름을 조금 더 길게 보는 것이 좋습니다.",
      "새로운 기술은 여러 신호가 쌓인 뒤 나타나므로 하루 차이로 판단하지 않는 편이 좋습니다.",
    ],
    caution: [
      "하던 기능을 잃거나 반응이 크게 줄고, 먹기·잠·놀이가 함께 흔들리면 상담을 고려하세요.",
      "월령 범위를 많이 지나도 시도 자체가 거의 없거나 퇴행이 보이면 확인을 받아보는 것이 좋습니다.",
      "보호자가 반복해서 이상하다고 느끼는 변화가 있다면 기록을 모아 전문가와 상의하세요.",
    ],
    record: [
      "새로 늘어난 행동, 걱정되는 행동, 수면·식사 변화, 놀이 반응을 날짜와 함께 적어두세요.",
      "짧은 영상과 사진을 남겨두면 발달 흐름을 비교하기 쉽습니다.",
      "계산기 결과와 월령별 가이드를 함께 보며 아이에게 맞는 기준을 정리해 보세요.",
    ],
    homeAction: [
      "오늘 새로 보인 행동과 걱정되는 행동을 각각 하나씩 적어보세요.",
      "또래 비교보다 지난달의 우리 아이와 비교해 좋아진 점을 먼저 확인하세요.",
      "퇴행이나 반응 저하가 느껴지면 날짜와 상황을 모아 상담 기준을 확인하세요.",
    ],
  },
};

const behaviorProfiles: Record<string, QnaProfile> = {
  sleep: {
    key: "sleep",
    title: "아기 수면 습관 가이드",
    page: "/qna/behavior",
    intent: "수면과 잠투정",
    first: [
      "수면 문제는 한밤중 한 장면보다 낮잠, 수유, 잠드는 방식, 깨는 시간대를 함께 봐야 합니다.",
      "아이가 자주 깨면 부모도 지치기 쉬우니 원인을 하나로 단정하기보다 하루 리듬을 먼저 정리해 보세요.",
      "잠투정은 의지 문제가 아니라 피곤함, 배고픔, 분리불안, 수면 연관 습관이 겹쳐 나타날 수 있습니다.",
    ],
    check: [
      "잠드는 시간, 마지막 낮잠, 수유 간격, 깨는 시간대, 다시 잠드는 방법을 함께 확인하세요.",
      "너무 늦게 재우는지, 낮잠이 과하거나 부족한지, 잠들 때 필요한 조건이 있는지 보세요.",
      "밤중에 깼을 때 바로 안아야만 잠드는지, 스스로 진정할 시간이 있는지도 살펴보세요.",
    ],
    age: [
      "월령에 따라 밤중 각성, 낮잠 횟수, 분리불안의 영향이 달라질 수 있습니다.",
      "어린 아기는 수유와 수면이 붙어 있고, 월령이 높아질수록 잠드는 습관이 더 중요해질 수 있습니다.",
      "성장 급등기, 이앓이, 새로운 발달 단계가 잠을 일시적으로 흔들 수 있습니다.",
    ],
    caution: [
      "코골이와 숨 멎는 듯한 모습, 심한 호흡 불편, 통증 의심, 성장과 먹는 양 저하가 함께 있으면 상담을 고려하세요.",
      "잠 문제와 함께 낮에도 지나치게 처지거나 먹는 양이 줄면 단순 수면 습관으로만 보지 마세요.",
      "밤마다 심하게 울고 달래지지 않으며 통증처럼 보이면 의료진 상담이 필요할 수 있습니다.",
    ],
    record: [
      "잠든 시간, 깬 시간, 낮잠 길이, 수유·간식 시간, 진정 방법을 3일 정도 적어보세요.",
      "깨는 시간대가 일정한지와 그 직전 생활 리듬을 기록하면 원인을 찾기 쉽습니다.",
      "새로운 환경, 이앓이, 감기, 등원 변화가 있었는지도 함께 남겨두세요.",
    ],
    homeAction: [
      "오늘은 잠드는 조건과 깨는 시간대를 먼저 적고, 낮잠과 수유 간격을 함께 비교해 보세요.",
      "갑자기 모든 습관을 바꾸기보다 한 가지 조건만 정해 3일 정도 관찰해 보세요.",
      "호흡이나 통증 의심 신호가 있으면 수면 교육보다 상담 기준 확인이 먼저입니다.",
    ],
  },
  emotion: {
    key: "emotion",
    title: "아이 떼쓰기·감정조절 가이드",
    page: "/qna/behavior",
    intent: "떼쓰기와 감정 표현",
    first: [
      "떼쓰기와 감정 폭발은 통제보다 아이가 어떤 상황에서 조절을 잃는지 찾는 것이 먼저입니다.",
      "아이가 크게 울거나 고집을 부릴 때는 성격 문제로 보기보다 피곤함, 배고픔, 전환 상황을 함께 보세요.",
      "감정 표현이 커지는 시기에는 말보다 행동이 먼저 나오기 쉬워 보호자의 반응 방식이 중요해집니다.",
    ],
    check: [
      "주로 언제 심해지는지, 배고픔·졸림·장소 이동·화면 종료와 연결되는지 확인해 보세요.",
      "금지나 전환이 있을 때 폭발하는지, 선택권을 주면 나아지는지, 진정까지 걸리는 시간을 살펴보세요.",
      "보호자가 달래는 방식 뒤 더 커지는지, 짧게 기다리면 줄어드는지도 비교해 보세요.",
    ],
    age: [
      "월령이 낮을수록 말보다 울음과 행동으로 표현하고, 자라면서 기다림과 규칙 이해가 조금씩 늘어납니다.",
      "두 돌 전후에는 자기 뜻을 표현하려는 마음이 커져 떼쓰기가 늘 수 있습니다.",
      "아이마다 감정 회복 속도가 달라서 또래보다 우리 아이의 반복 패턴을 보는 것이 좋습니다.",
    ],
    caution: [
      "자해·타해가 반복되거나, 일상생활이 크게 흔들리고, 진정 시간이 매우 길어지는 경우에는 상담을 고려하세요.",
      "폭발 뒤 회복이 어렵고 어린이집이나 가정생활이 지속적으로 흔들리면 전문가 도움을 받아볼 수 있습니다.",
      "갑작스러운 퇴행, 수면·식사 변화, 강한 공격성이 함께 늘면 기록을 모아 상담하세요.",
    ],
    record: [
      "감정 폭발 직전 상황, 보호자 반응, 진정까지 걸린 시간, 반복 시간대를 적어보세요.",
      "성공적으로 지나간 상황도 함께 기록하면 아이에게 맞는 진정 방법을 찾기 쉽습니다.",
      "수면 부족, 간식 시간, 화면 사용, 등원 변화와 감정 폭발의 연결을 같이 남겨두세요.",
    ],
    homeAction: [
      "아이를 설득하기 전에 안전을 확보하고, 짧은 말로 감정을 이름 붙여 주세요.",
      "전환 상황이 힘들다면 미리 예고하고 선택지를 2개 정도로 줄여보세요.",
      "자해나 타해가 반복되면 훈육 방법보다 상담 기준 확인이 먼저입니다.",
    ],
  },
  daycare: {
    key: "daycare",
    title: "어린이집 적응 가이드",
    page: "/info/childcare",
    intent: "어린이집 적응",
    first: [
      "어린이집 적응은 첫날 울었는지보다 헤어진 뒤 회복되는지, 집에서 먹고 자는 리듬이 유지되는지가 중요합니다.",
      "등원 거부는 낯선 환경, 분리불안, 수면 부족, 선생님·친구 관계가 함께 영향을 줄 수 있습니다.",
      "아이가 울며 떨어지는 모습만 보면 불안하지만 하루 중 회복 시간과 놀이 참여를 함께 확인해야 합니다.",
    ],
    check: [
      "헤어진 뒤 얼마나 빨리 진정되는지, 낮잠과 식사, 놀이 참여, 하원 후 컨디션을 확인해 보세요.",
      "등원 전 아침 리듬, 전날 수면, 특정 교실·친구·활동에서 힘들어하는지도 살펴보세요.",
      "집에서 어린이집 이야기를 피하는지, 특정 상황을 반복해서 말하는지도 들어보세요.",
    ],
    age: [
      "분리불안이 강한 시기에는 적응 시간이 더 걸릴 수 있고, 아이마다 낯선 환경을 받아들이는 속도가 다릅니다.",
      "말이 아직 서툰 아이는 울음, 식욕, 잠 변화로 적응 스트레스를 표현할 수 있습니다.",
      "월령이 높아도 반 변화나 선생님 교체처럼 환경 변화가 있으면 다시 적응이 필요할 수 있습니다.",
    ],
    caution: [
      "등원 거부가 심해지고 식사·수면이 무너지거나, 특정 상황에서 극심한 공포 반응이 반복되면 교사와 상담해 보세요.",
      "하원 후 지속적인 위축, 반복 악몽, 신체 통증 호소가 이어지면 원인을 함께 확인해야 합니다.",
      "아이에게 상처나 안전 문제가 의심되는 신호가 있으면 기관과 즉시 사실 확인을 하세요.",
    ],
    record: [
      "등원 전후 울음 시간, 하원 후 컨디션, 식사·낮잠 여부, 교사가 전한 적응 모습을 적어두세요.",
      "좋아했던 활동과 힘들어한 순간을 같이 기록하면 적응 전략을 세우기 쉽습니다.",
      "아이의 표현, 선생님 피드백, 집에서의 수면·식사 변화를 함께 남겨두세요.",
    ],
    homeAction: [
      "등원 전 이별 인사를 짧고 일정하게 유지하고, 하원 후에는 아이가 회복할 시간을 주세요.",
      "교사에게 울음보다 진정 시간과 놀이 참여를 물어보세요.",
      "식사와 수면이 계속 흔들리면 적응 방식과 등원 시간을 함께 조정해 보세요.",
    ],
  },
  eating: {
    key: "eating",
    title: "아이 식사·편식 가이드",
    page: "/baby-food",
    intent: "식사와 편식",
    first: [
      "편식과 음식 거부는 맛보다 질감, 피곤함, 선택권, 간식 리듬이 영향을 주는 경우가 많습니다.",
      "밥을 안 먹는 날이 반복되면 한 끼보다 하루 전체 섭취와 간식·수유 간격을 함께 봐야 합니다.",
      "식사 문제는 억지로 먹이는 것보다 아이가 거부하는 조건을 찾는 데서 시작하는 편이 좋습니다.",
    ],
    check: [
      "새 음식만 거부하는지, 특정 질감만 싫어하는지, 간식과 수유가 식사 시간에 가까운지 확인하세요.",
      "식사 시간이 너무 길어지는지, 졸린 시간과 겹치는지, 보호자 반응이 부담으로 느껴지는지도 보세요.",
      "잘 먹는 음식과 거부하는 음식의 질감·온도·모양을 비교해 보세요.",
    ],
    age: [
      "월령이 높아질수록 스스로 먹고 싶은 마음이 커져 식사 방식 조정이 필요할 수 있습니다.",
      "돌 전후에는 먹는 양이 들쭉날쭉할 수 있어 성장 흐름과 함께 보는 것이 좋습니다.",
      "유아기에는 낯선 음식에 조심스러운 반응이 자연스럽게 늘 수 있습니다.",
    ],
    caution: [
      "먹는 범위가 지나치게 좁아지고 체중 증가가 둔해지거나 삼킴 문제가 의심되면 상담이 좋습니다.",
      "음식을 삼키기 힘들어하거나 자주 사레가 들리고 체중 변화가 동반되면 확인이 필요합니다.",
      "식사 거부와 함께 구토, 설사, 피부 반응, 심한 변비가 반복되면 상담을 고려하세요.",
    ],
    record: [
      "잘 먹는 음식, 거부한 질감, 식사 시간, 간식량, 보호자 반응 뒤 변화를 적어보세요.",
      "한 끼보다 3일 정도의 총 섭취 흐름을 보면 과도한 걱정을 줄일 수 있습니다.",
      "새 음식은 시도 날짜와 반응을 적어두면 다음 식단을 짜기 쉽습니다.",
    ],
    homeAction: [
      "오늘은 한 입 더 먹이는 것보다 잘 먹는 조건과 거부 조건을 나누어 적어보세요.",
      "간식과 수유 시간을 식사와 너무 가깝게 두지 않았는지 확인해 보세요.",
      "체중 증가가 둔하거나 삼킴 문제가 의심되면 식사 습관보다 상담 기준 확인이 우선입니다.",
    ],
  },
  general: {
    key: "general",
    title: "아이 행동 Q&A",
    page: "/qna/behavior",
    intent: "아이 행동",
    first: [
      "아이 행동은 한 번의 모습보다 반복되는 상황과 회복되는 시간을 함께 보는 것이 좋습니다.",
      "문제 행동처럼 보여도 피곤함, 배고픔, 전환 상황, 표현 부족이 겹쳐 나타나는 경우가 많습니다.",
      "행동을 바로 고치려 하기보다 언제, 어떤 상황에서, 얼마나 오래 이어지는지부터 정리해 보세요.",
    ],
    check: [
      "언제 자주 나타나는지, 피곤함·배고픔·전환 상황과 연결되는지, 보호자 반응 뒤 달라지는지 확인하세요.",
      "반복되는 시간대와 직전 상황, 아이가 원하는 것, 진정까지 걸리는 시간을 함께 보세요.",
      "새로운 환경, 수면 부족, 가족 변화, 어린이집 변화가 있었는지도 살펴보세요.",
    ],
    age: [
      "월령이 낮을수록 말 대신 행동으로 표현하고, 자라면서 언어와 규칙 이해가 함께 늘어납니다.",
      "아이의 자기조절 능력은 천천히 자라므로 즉시 멈추게 하는 것보다 반복 상황을 줄이는 접근이 도움이 됩니다.",
      "같은 행동도 월령과 발달 단계에 따라 의미가 달라질 수 있습니다.",
    ],
    caution: [
      "일상생활이 크게 흔들리고 강한 공격성이나 퇴행이 반복되면 전문가 상담을 고려하세요.",
      "자해·타해가 반복되거나 진정이 매우 어렵고 가족 전체가 지칠 정도라면 도움을 받아보세요.",
      "갑자기 행동이 크게 달라지고 수면·식사·놀이 반응도 함께 무너지면 원인을 확인하는 것이 좋습니다.",
    ],
    record: [
      "반복 시간대, 직전 상황, 진정 방법, 새로 늘어난 행동, 어려워진 행동을 기록해 주세요.",
      "성공적으로 지나간 상황도 같이 적으면 아이에게 맞는 대응법을 찾기 쉽습니다.",
      "보호자 반응을 바꿨을 때 아이가 어떻게 달라지는지도 함께 남겨두세요.",
    ],
    homeAction: [
      "오늘 반복된 행동을 한 가지 정하고 직전 상황과 진정 방법을 적어보세요.",
      "훈육 문장을 길게 하기보다 짧고 일관된 반응을 정해보세요.",
      "공격성이나 퇴행이 반복되면 기록을 모아 상담 기준을 확인하세요.",
    ],
  },
};

function includesAny(text: string, words: string[]) {
  return words.some((word) => text.includes(word));
}

function hashText(text: string) {
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) {
    hash = (hash << 5) - hash + text.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function pick<T>(values: T[], seed: string, offset = 0): T {
  return values[(hashText(seed) + offset) % values.length];
}

function compact(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

function stripQuestionPrefix(text: string, question: string) {
  let result = compact(text);
  const escaped = question.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const patterns = [
    new RegExp(`^[‘']${escaped}[’']\\s*(상황에서는|의 경우|라면|는|은|에 대한 답은)?\\s*`, "u"),
    new RegExp(`^[‘']${escaped}[’']\\s*`, "u"),
  ];

  for (const pattern of patterns) result = result.replace(pattern, "");
  return compact(
    result
      .replace(/^상황에서는\s*/u, "")
      .replace(/^의 경우\s*/u, "")
      .replace(/\(([^()]+)\)에서 같은 주제의 확인 순서를 이어서 볼 수 있습니다\./gu, "관련 가이드에서 같은 주제의 확인 순서를 이어서 볼 수 있습니다.")
      .replace(/가이드을/gu, "가이드를")
  );
}

function normalizeQuestion(question: string) {
  const cleaned = compact(question).replace(/[?？]+$/u, "");
  return `${cleaned}?`;
}

function toMetaTitle(question: string, profile: QnaProfile) {
  const base = question.replace(/[?？]$/u, "");
  const suffix = profile.key === "general" ? "확인 기준" : `${profile.intent} 확인 기준`;
  const title = `${base} | ${suffix}`;
  return title.length <= 58 ? title : `${base.slice(0, 36)} | ${suffix}`;
}

function toMetaDescription(question: string, profile: QnaProfile, category: QnaCategory) {
  const categoryText = qnaCategories[category];
  const sentence = `${question} ${categoryText}에서 먼저 볼 체크포인트, 집에서 기록할 내용, 상담이 필요한 신호를 부모 입장에서 정리했습니다.`;
  return sentence.length <= 150 ? sentence : `${sentence.slice(0, 147)}...`;
}

function uniqueTexts(values: string[]) {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const value of values.map(compact).filter(Boolean)) {
    const key = value.replace(/[\s,.!?！？。'’‘"“”]/g, "");
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(value);
  }
  return result;
}

function originalSpecificNotes(entry: QnaEntry, profile: QnaProfile) {
  const raw = [
    ...(entry.answer ?? []),
    ...(entry.checklist ?? []),
    ...(entry.simpleAction ?? []),
    entry.summary,
  ]
    .filter(Boolean)
    .map((text) => stripQuestionPrefix(text, entry.question))
    .map((text) =>
      text
        .replace(/열이 있다고 해서 체온 숫자만으로 바로 판단하기는 어렵습니다\./gu, "")
        .replace(/성장 백분위는 높고 낮음보다 아이가 자기 곡선을 따라가고 있는지가 핵심입니다\./gu, "")
        .replace(/뒤집기, 앉기, 기기, 걷기는 날짜처럼 딱 맞춰 일어나기보다 준비 신호가 쌓이며 나타납니다\./gu, "")
        .replace(/떼쓰기와 감정 폭발은 통제보다 아이가 어떤 상황에서 조절을 잃는지 찾는 것이 먼저입니다\./gu, "")
        .replace(/에서 같은 주제의 확인 순서를 이어서 볼 수 있습니다\./gu, "")
    )
    .map(compact)
    .filter((text) => text.length >= 24 && text.length <= 180)
    .filter((text) => !text.includes(profile.page))
    .filter((text) => !text.includes("계산기·체크리스트·Q&A"));

  return uniqueTexts(raw).slice(0, 2);
}

function healthProfileKey(entry: QnaEntry) {
  const text = `${entry.question} ${entry.topic} ${(entry.keywords ?? []).join(" ")}`;
  if (includesAny(text, ["열", "미열", "고열", "발열", "해열", "예방접종 후 열", "접종 후 열"])) return "fever";
  if (includesAny(text, ["기침", "쌕쌕", "천명", "가래", "RSV", "호흡"])) return "cough";
  if (includesAny(text, ["콧물", "코막힘", "코가 막"])) return "runny";
  if (includesAny(text, ["설사", "묽은 변", "물변", "혈변", "변 색", "검은 변", "초록 변"])) return "diarrhea";
  if (includesAny(text, ["구토", "토했", "토를", "분수토"])) return "vomit";
  if (includesAny(text, ["변비", "변이 안", "딱딱한 변", "배변 간격"])) return "constipation";
  if (includesAny(text, ["기저귀 발진", "두드러기", "발진", "피부", "아토피", "입술", "침독", "땀띠"])) return "skin";
  if (includesAny(text, ["눈곱", "충혈", "눈물", "눈"])) return "eye";
  if (includesAny(text, ["수유 거부", "분유 거부", "젖병 거부", "먹는 양", "수유량"])) return "feeding";
  if (includesAny(text, ["이유식 거부", "이유식", "새 재료"])) return "weaning";
  return "general";
}

function growthProfileKey(entry: QnaEntry) {
  const text = `${entry.question} ${entry.topic} ${(entry.keywords ?? []).join(" ")}`;
  if (includesAny(text, ["키", "몸무게", "체중", "백분위", "성장곡선", "작게", "마른"])) return "percentile";
  if (includesAny(text, ["뒤집", "목 가누", "앉", "기기", "서기", "걷", "터미타임", "대근육", "발끝", "운동"])) return "motor";
  if (includesAny(text, ["말", "언어", "옹알", "단어", "이름 반응", "가리키", "발음"])) return "language";
  return "general";
}

function behaviorProfileKey(entry: QnaEntry) {
  const text = `${entry.question} ${entry.topic} ${(entry.keywords ?? []).join(" ")}`;
  if (includesAny(text, ["잠", "수면", "밤", "낮잠", "기상", "잠투정"])) return "sleep";
  if (includesAny(text, ["어린이집", "등원", "적응", "분리"])) return "daycare";
  if (includesAny(text, ["떼", "고집", "짜증", "울음", "감정", "분노", "폭발", "화"])) return "emotion";
  if (includesAny(text, ["편식", "음식", "밥", "먹", "식사", "간식"])) return "eating";
  return "general";
}

function profileFor(category: QnaCategory, entry: QnaEntry) {
  if (category === "health") return healthProfiles[healthProfileKey(entry)] ?? healthProfiles.general;
  if (category === "growth") return growthProfiles[growthProfileKey(entry)] ?? growthProfiles.general;
  return behaviorProfiles[behaviorProfileKey(entry)] ?? behaviorProfiles.general;
}

function buildQnaSeedContent(category: QnaCategory, entry: QnaEntry) {
  const profile = profileFor(category, entry);
  const question = normalizeQuestion(entry.question);
  const seed = `${category}:${entry.slug}`;
  const detailNotes = originalSpecificNotes(entry, profile);

  const intro = `${question} 이 고민이라면 ${pick(profile.first, seed, 0)}`;
  const check = pick(profile.check, seed, 1);
  const age = pick(profile.age, seed, 2);
  const caution = pick(profile.caution, seed, 3);
  const record = pick(profile.record, seed, 4);
  const homeAction = pick(profile.homeAction, seed, 5);
  const related = `${profile.title}도 함께 보면 ${profile.intent}을 월령과 상황별로 다시 확인하기 쉽습니다.`;

  const answer = uniqueTexts([
    intro,
    ...(detailNotes.length ? detailNotes : [`이 질문에서는 ${entry.topic || profile.intent}이 언제 시작됐고 아이의 먹기·잠·놀이 반응이 함께 바뀌었는지를 나누어 보면 좋습니다.`]),
    check,
    age,
    caution,
    record,
  ]);

  const checklist = uniqueTexts([
    homeAction,
    check,
    age,
    caution,
    record,
  ]).slice(0, 5);

  const simpleAction = uniqueTexts([
    homeAction,
    record,
    related,
  ]);

  const summary = compact(
    `${question} 부모가 집에서 먼저 확인할 기준은 ${check} ${caution} ${profile.title}와 함께 보면 다음 행동을 정리하기 쉽습니다.`
  );

  const keywords = uniqueTexts([
    question.replace(/[?？]$/u, ""),
    entry.topic,
    profile.intent,
    qnaCategories[category],
    ...(entry.keywords ?? []),
  ])
    .map((keyword) => keyword.replace(/[?？]$/u, ""))
    .filter((keyword) => keyword.length >= 2)
    .slice(0, 14);

  const sections: SeedSection[] = [
    {
      sectionType: "answer",
      title: "먼저 이렇게 확인하세요",
      items: answer,
      sortOrder: 1,
    },
    {
      sectionType: "checklist",
      title: "집에서 볼 체크포인트",
      items: checklist,
      sortOrder: 2,
    },
    {
      sectionType: "simpleAction",
      title: "오늘 바로 해볼 일",
      items: simpleAction,
      sortOrder: 3,
    },
    {
      sectionType: "caution",
      title: category === "health" ? "진료 상담이 필요한 신호" : "상담을 고려할 신호",
      body: caution,
      sortOrder: 4,
    },
    {
      sectionType: "relatedGuide",
      title: "함께 보면 좋은 페이지",
      body: related,
      items: [profile.title, profile.page],
      sortOrder: 5,
    },
  ];

  return {
    question,
    title: question,
    summary: summary.length <= 260 ? summary : `${summary.slice(0, 257)}...`,
    metaTitle: toMetaTitle(question, profile),
    metaDescription: toMetaDescription(question, profile, category),
    keywords,
    caution,
    profile,
    sections,
  };
}

async function seedQna() {
  let contentCount = 0;
  let sectionCount = 0;
  let keywordCount = 0;
  const dryRun = process.argv.includes("--dry-run");
  activePrisma = dryRun ? null : (await import("../lib/db")).prisma;
  const db = activePrisma;

  for (const category of Object.keys(qnaData) as QnaCategory[]) {
    const categoryPayload = {
      locale: "ko" as const,
      type: "QNA" as const,
      slug: category,
      name: qnaCategories[category],
      shortName: qnaCategories[category].replace("아이 ", ""),
      description: categoryDescriptions[category],
      sortOrder: categoryOrder[category],
    };

    if (dryRun) {
      console.log(`[dry-run] category ${categoryPayload.name}`);
    }

    const categoryRow = dryRun
      ? { id: `dry-${category}` }
      : await db!.contentCategory.upsert({
          where: {
            locale_type_slug: {
              locale: "ko",
              type: "QNA",
              slug: category,
            },
          },
          update: {
            name: categoryPayload.name,
            shortName: categoryPayload.shortName,
            description: categoryPayload.description,
            sortOrder: categoryPayload.sortOrder,
          },
          create: categoryPayload,
        });

    for (const entry of qnaData[category]) {
      const content = buildQnaSeedContent(category, entry);
      const path = `/qna/${category}/${entry.slug}`;
      const isMedical = category === "health";
      const reviewStatus = isMedical ? "NEEDS_MEDICAL_REVIEW" : "READY_FOR_PAGE_TEST";

      if (dryRun) {
        if (contentCount < 5) {
          console.log(`[dry-run] ${path}`);
          console.log(`  title: ${content.title}`);
          console.log(`  summary: ${content.summary}`);
        }
        contentCount += 1;
        sectionCount += content.sections.length;
        keywordCount += content.keywords.length;
        continue;
      }

      await db!.$transaction(async (tx: any) => {
        const row = await tx.content.upsert({
          where: {
            locale_type_slug: {
              locale: "ko",
              type: "QNA",
              slug: entry.slug,
            },
          },
          update: {
            categoryId: categoryRow.id,
            path,
            title: content.title,
            shortTitle: entry.topic,
            question: content.question,
            topic: entry.topic,
            summary: content.summary,
            isMedical,
            isOfficialInfo: false,
            status: "PUBLISHED",
            reviewStatus,
            duplicateMemo: "seed 단계에서 반복 질문 접두어와 중복 섹션을 정리함",
            editorMemo: `${content.profile.title} 기준으로 사용자 관점 문장 구조를 재정리함`,
            metaTitle: content.metaTitle,
            metaDescription: content.metaDescription,
            canonicalPath: path,
            ogTitle: content.title,
            ogDescription: content.metaDescription,
            publishedAt: new Date(),
          },
          create: {
            locale: "ko",
            type: "QNA",
            categoryId: categoryRow.id,
            slug: entry.slug,
            path,
            title: content.title,
            shortTitle: entry.topic,
            question: content.question,
            topic: entry.topic,
            summary: content.summary,
            isMedical,
            isOfficialInfo: false,
            status: "PUBLISHED",
            reviewStatus,
            duplicateMemo: "seed 단계에서 반복 질문 접두어와 중복 섹션을 정리함",
            editorMemo: `${content.profile.title} 기준으로 사용자 관점 문장 구조를 재정리함`,
            metaTitle: content.metaTitle,
            metaDescription: content.metaDescription,
            canonicalPath: path,
            ogTitle: content.title,
            ogDescription: content.metaDescription,
            publishedAt: new Date(),
          },
        });

        await tx.contentSection.deleteMany({ where: { contentId: row.id } });
        await tx.contentKeyword.deleteMany({ where: { contentId: row.id } });

        await tx.contentSection.createMany({
          data: content.sections.map((section) => ({
            contentId: row.id,
            sectionType: section.sectionType,
            title: section.title,
            body: section.body,
            items: section.items ? (section.items as Prisma.InputJsonValue) : undefined,
            sortOrder: section.sortOrder,
          })),
        });

        await tx.contentKeyword.createMany({
          data: content.keywords.map((keyword) => ({
            contentId: row.id,
            keyword,
          })),
          skipDuplicates: true,
        });
      });

      contentCount += 1;
      sectionCount += content.sections.length;
      keywordCount += content.keywords.length;

      if (contentCount % 100 === 0) {
        console.log(`Q&A ${contentCount}개 저장 완료...`);
      }
    }
  }

  console.log(`Q&A seed 완료: 콘텐츠 ${contentCount}개, 섹션 ${sectionCount}개, 키워드 ${keywordCount}개`);
}

async function main() {
  await seedQna();
}

main()
  .catch((error) => {
    console.error("Q&A seed 실패");
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await activePrisma?.$disconnect();
  });
