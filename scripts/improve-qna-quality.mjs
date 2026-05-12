import fs from 'fs';
import path from 'path';
const file = path.join(process.cwd(), 'data/qna.ts');
const src = fs.readFileSync(file, 'utf8');
const match = src.match(/export const qnaData: Record<QnaCategory, QnaEntry\[]> = ([\s\S]*?) as const;/);
if (!match) throw new Error('qnaData not found');
const data = Function(`return (${match[1]});`)();

const first = (arr, fallback='') => arr.find(Boolean) || fallback;
const includes = (text, words) => words.some(w => text.includes(w));
const clean = (s) => s.replace(/\s+/g, ' ').trim();

function healthProfile(entry){
  const q = entry.question + ' ' + entry.topic + ' ' + (entry.keywords||[]).join(' ');
  if (includes(q, ['RSV','쌕쌕','천명'])) return 'rsv';
  if (includes(q, ['열','미열','고열','발열','해열','예방접종 후 열','접종 후 열'])) return 'fever';
  if (includes(q, ['기침','밤기침','가래'])) return 'cough';
  if (includes(q, ['콧물','코막힘','코가 막'])) return 'runny';
  if (includes(q, ['설사','묽은 변','물변'])) return 'diarrhea';
  if (includes(q, ['구토','토했','토를','분수토'])) return 'vomit';
  if (includes(q, ['변비','변이 안','딱딱한 변','배변 간격'])) return 'constipation';
  if (includes(q, ['검게 보이는 변','검은 변','혈변','변 색','초록 변'])) return 'stool-color';
  if (includes(q, ['기저귀 발진','두드러기','발진','피부','아토피','입술','침독'])) return 'skin';
  if (includes(q, ['눈곱','충혈','눈물','눈'])) return 'eye';
  if (includes(q, ['수유 거부','분유 거부','젖병 거부','먹는 양','수유량'])) return 'feeding';
  if (includes(q, ['이유식 거부','이유식'])) return 'weaning';
  if (includes(q, ['황달','노랗'])) return 'jaundice';
  if (includes(q, ['머리','부딪','혹','낙상','떨어졌'])) return 'head-bump';
  return 'health-general';
}
function growthProfile(entry){
  const q = entry.question + ' ' + entry.topic + ' ' + (entry.keywords||[]).join(' ');
  if (includes(q, ['키','몸무게','체중','백분위','성장곡선','작게','마른'])) return includes(q,['백분위','성장곡선']) ? 'percentile' : 'height-weight';
  if (includes(q, ['뒤집','목 가누','앉','기기','서기','걷','터미타임','대근육','발끝'])) return 'gross-motor';
  if (includes(q, ['말','언어','옹알','단어','이름 반응','가리키'])) return 'language';
  if (includes(q, ['손','집기','잡기','소근육','블록','그림','숟가락'])) return 'fine-motor';
  if (includes(q, ['눈맞춤','사회','낯가림','분리불안','친구','상호작용','공유'])) return 'social';
  if (includes(q, ['수면','잠','밤'])) return 'sleep-growth';
  if (includes(q, ['식사','밥','먹는 양','편식','체중'])) return 'eating-weight';
  return 'growth-general';
}
function behaviorProfile(entry){
  const q = entry.question + ' ' + entry.topic + ' ' + (entry.keywords||[]).join(' ');
  if (includes(q, ['잠','수면','밤','낮잠','기상'])) return 'sleep-behavior';
  if (includes(q, ['어린이집','등원','적응','분리'])) return 'daycare';
  if (includes(q, ['떼','고집','짜증','울음','감정','분노','폭발'])) return 'emotion';
  if (includes(q, ['때리','물','던지','자해','타해','공격'])) return 'safety-behavior';
  if (includes(q, ['거부','싫어','양치','목욕','기저귀','약'])) return 'refusal';
  if (includes(q, ['배변훈련','기저귀 떼','변기'])) return 'toilet';
  if (includes(q, ['편식','음식','밥','먹'])) return 'eating-behavior';
  return 'behavior-general';
}

const healthGuides = {
 fever: {page:'/health/fever', title:'아기 열 대처 가이드', conclusion:'열이 있다고 해서 체온 숫자만으로 바로 판단하기는 어렵습니다. 월령, 측정 부위, 아이의 반응과 수분 섭취를 함께 보면 다음 행동을 정하기 쉽습니다.', check:'같은 체온계로 다시 재고 옷을 너무 두껍게 입히지 않았는지, 실내 온도와 최근 예방접종 여부를 같이 확인해 보세요.', age:'생후 3개월 미만의 38도 이상 발열은 더 빠르게 상담하는 편이 안전하고, 이후 월령은 고열 지속 시간과 컨디션 변화를 함께 봅니다.', danger:'경련, 축 늘어짐, 숨쉬기 어려움, 소변이 눈에 띄게 줄어듦, 해열 후에도 반응이 나쁜 경우에는 진료 상담을 우선하세요.', record:'체온을 잰 시간과 부위, 해열제 복용 시간, 수유량, 소변 횟수, 동반 증상을 순서대로 남겨두면 도움이 됩니다.'},
 rsv: {page:'/health/cough', title:'아기 기침·호흡 가이드', conclusion:'RSV가 걱정될 때는 콧물보다 호흡 상태와 먹는 양을 먼저 봐야 합니다. 쌕쌕거림, 빠른 호흡, 갈비뼈가 들어가는 호흡은 특히 중요합니다.', check:'기침 소리, 숨을 쉴 때 가슴이 들어가는지, 수유 중 자주 멈추는지, 평소보다 처지는지 차분히 확인해 보세요.', age:'어린 월령이거나 조산 이력이 있으면 같은 기침이라도 더 빠르게 악화될 수 있어 관찰 간격을 짧게 잡는 것이 좋습니다.', danger:'입술색이 파래짐, 숨이 가빠 보임, 갈비뼈 사이가 움푹 들어감, 수유량 급감, 깨워도 반응이 약하면 바로 상담이 필요합니다.', record:'호흡수, 수유량, 기저귀 횟수, 열 여부, 기침이 심해지는 시간대를 적어두면 상담에 도움이 됩니다.'},
 cough: {page:'/health/cough', title:'아기 기침 확인 가이드', conclusion:'기침은 소리보다 호흡이 편한지와 수유·수면이 유지되는지가 더 중요합니다. 밤에 심한지, 누우면 심해지는지, 콧물이 함께 있는지 나누어 보세요.', check:'기침이 마른기침인지 가래가 섞였는지, 숨소리가 거칠어졌는지, 수유 중 숨차 보이는지 먼저 확인하세요.', age:'어린 아기는 기침만으로도 수유량이 줄기 쉬워 기저귀 횟수와 처짐 여부를 함께 봐야 합니다.', danger:'쌕쌕거림, 숨가쁨, 입술색 변화, 반복 구토를 동반한 기침, 38도 이상 열이 오래 이어지면 진료 상담이 필요합니다.', record:'기침이 심해지는 자세와 시간, 콧물 동반 여부, 열, 수유량 변화를 하루 단위로 메모해 주세요.'},
 runny: {page:'/health/runny-nose', title:'아기 콧물·코막힘 가이드', conclusion:'콧물 색만으로 감기 심한 정도를 단정하기는 어렵습니다. 코막힘 때문에 먹기와 잠이 흔들리는지가 핵심입니다.', check:'수유 중 코가 막혀 자주 떼는지, 잠잘 때 입으로 숨 쉬는지, 한쪽 코만 오래 막히는지 확인해 보세요.', age:'신생아와 어린 아기는 코막힘만으로도 수유가 어려워질 수 있어 먹는 양과 소변 횟수를 같이 봅니다.', danger:'숨쉬기 힘들어함, 고열, 귀 통증 의심, 콧물이 오래 지속되며 컨디션이 떨어지는 경우에는 상담을 고려하세요.', record:'콧물 색과 양, 코막힘이 심한 시간, 수유량, 잠자는 자세, 열 동반 여부를 기록하면 좋습니다.'},
 diarrhea: {page:'/health/diarrhea', title:'아기 설사 확인 가이드', conclusion:'설사는 횟수만큼이나 소변량과 컨디션을 함께 봐야 합니다. 묽은 변이 반복되면 탈수 신호가 없는지 먼저 확인하세요.', check:'평소보다 변 횟수가 얼마나 늘었는지, 피나 점액이 섞였는지, 입안이 마르거나 눈물이 줄었는지 살펴보세요.', age:'어린 아기는 수분 여유가 적어 설사 횟수가 많지 않아도 소변 감소가 빠르게 나타날 수 있습니다.', danger:'혈변, 반복 구토, 소변 감소, 축 처짐, 고열, 입이 마르고 눈물이 거의 없는 모습이 보이면 진료 상담이 우선입니다.', record:'변 횟수와 모양, 마지막 소변 시간, 먹은 양, 열 여부, 새로 먹은 음식이나 약을 함께 적어두세요.'},
 vomit: {page:'/health/vomiting', title:'아기 구토 확인 가이드', conclusion:'한두 번 토했다고 모두 응급은 아니지만, 반복 횟수와 토한 색, 소변량, 처짐 여부는 꼭 봐야 합니다.', check:'분수처럼 뿜는지, 초록색이나 피가 섞였는지, 수유 후 바로 반복되는지, 탈수 신호가 있는지 확인하세요.', age:'신생아는 반복 구토와 수유 저하를 더 조심해서 봐야 하고, 이유식 이후에는 새 음식과 장염 가능성도 함께 봅니다.', danger:'초록색 구토, 피 섞인 구토, 반복 구토 뒤 소변 감소, 심하게 처짐, 배가 심하게 불러 보이면 빠른 상담이 필요합니다.', record:'토한 시간과 횟수, 색, 직전에 먹은 음식, 마지막 소변 시간, 열·설사 동반 여부를 남겨 주세요.'},
 constipation: {page:'/health/constipation', title:'아기 변비 확인 가이드', conclusion:'며칠 만에 변을 봤는지보다 변이 딱딱한지, 힘들어하는지, 배가 불편해 보이는지가 더 중요합니다.', check:'변 모양이 토끼똥처럼 딱딱한지, 배에 힘을 주며 우는지, 피가 묻는지, 먹는 양이 줄었는지 확인하세요.', age:'완전 모유수유 아기는 배변 간격이 길어질 수 있지만, 이유식 이후에는 수분과 식이섬유 변화도 함께 봅니다.', danger:'심한 복부팽만, 반복 구토, 피가 묻는 변, 체중 증가 부진, 매우 아파 보이는 배변이 반복되면 상담이 필요합니다.', record:'배변 날짜, 변 모양, 이유식 재료, 수분 섭취, 배변 시 울음이나 피 묻음 여부를 적어두세요.'},
 'stool-color': {page:'/health/diarrhea', title:'아기 변 색 확인 가이드', conclusion:'검게 보이는 변은 음식이나 철분제 영향일 수도 있지만, 끈적하고 새까만 변처럼 보이면 출혈 가능성도 함께 봐야 합니다.', check:'최근 철분제, 블루베리, 김, 진한 색 음식 섭취가 있었는지와 변이 타르처럼 끈적한지 확인하세요.', age:'신생아 시기의 태변과 이후 검은 변은 의미가 다를 수 있으므로 월령과 최근 먹은 것을 함께 비교해야 합니다.', danger:'검은 변이 반복되거나 피가 섞임, 창백함, 처짐, 구토, 복통 의심이 함께 보이면 진료 상담을 권합니다.', record:'변 사진, 먹은 음식과 약, 변 색이 시작된 날짜, 횟수, 아이 컨디션을 함께 남겨두세요.'},
 skin: {page:'/health/rash', title:'아기 발진·두드러기 가이드', conclusion:'피부 변화는 모양과 번지는 속도, 가려움, 열 동반 여부를 함께 봐야 합니다. 입술 건조는 침독이나 자극, 탈수 신호와도 구분해야 합니다.', check:'발진 위치, 입 주변 침 자극, 새 음식·세제·로션 사용, 입술 갈라짐과 소변 감소 여부를 확인해 보세요.', age:'어린 아기는 침과 마찰만으로도 입 주변이 쉽게 헐 수 있고, 이유식 이후에는 음식 자극이나 알레르기 가능성도 함께 봅니다.', danger:'호흡곤란, 얼굴·입술 부종, 전신 두드러기, 고열, 물집, 탈수 의심이 있으면 빠르게 상담하세요.', record:'발진 사진, 새로 먹은 음식, 바른 제품, 시작 시간, 가려움과 열 여부를 기록해 두면 좋습니다.'},
 eye: {page:'/health/rash', title:'아기 눈곱·눈 충혈 확인', conclusion:'눈곱은 색과 양, 한쪽인지 양쪽인지, 충혈과 열이 있는지에 따라 관리 방향이 달라집니다.', check:'노란 눈곱이 계속 끼는지, 눈 흰자가 빨간지, 눈물이 고이는지, 한쪽만 반복되는지 확인하세요.', age:'어린 아기는 눈물길이 좁아 눈곱이 반복될 수 있지만, 충혈이나 붓기가 함께 있으면 감염 가능성도 봐야 합니다.', danger:'눈이 붓고 빨갛거나, 고름 같은 분비물, 열, 눈을 못 뜰 정도의 불편감, 신생아 눈 분비물이 있으면 상담하세요.', record:'눈곱 색, 닦아도 다시 끼는 시간, 한쪽·양쪽 여부, 충혈 사진, 열 동반 여부를 남겨 주세요.'},
 feeding: {page:'/tools/baby-age', title:'아기 개월수별 수유 흐름', conclusion:'수유 거부는 한 번의 거부보다 하루 전체 섭취량과 소변 횟수를 함께 봐야 합니다.', check:'젖병이나 젖을 무는 순간 힘들어하는지, 코막힘·입안 통증·열이 있는지, 기저귀가 평소처럼 젖는지 확인하세요.', age:'어린 아기는 수유량 감소가 빨리 탈수로 이어질 수 있고, 월령이 높아질수록 치아·호기심·이유식 영향도 함께 봅니다.', danger:'반나절 이상 거의 못 먹음, 소변 감소, 축 처짐, 반복 구토, 호흡이 힘들어 보이는 경우에는 상담이 필요합니다.', record:'수유 시간과 양, 거부한 상황, 마지막 소변, 열·구토·콧물 여부를 간단히 기록해 주세요.'},
 weaning: {page:'/baby-food', title:'이유식 메뉴와 단계별 흐름', conclusion:'이유식 거부는 맛의 문제만이 아니라 질감, 피곤함, 수유 간격, 컨디션이 함께 영향을 줍니다.', check:'입자를 너무 빨리 올렸는지, 먹는 시간이 졸린 시간과 겹치는지, 새 재료 뒤 불편감이 있었는지 살펴보세요.', age:'초기에는 양보다 경험이 중요하고, 중기 이후에는 질감 변화와 손으로 만져보는 기회를 천천히 늘려볼 수 있습니다.', danger:'음식만 보면 심하게 울며 모든 식사를 거부하거나, 체중 증가가 둔해지고 구토·설사가 반복되면 상담하세요.', record:'거부한 재료와 질감, 먹은 양, 식사 시간, 수유 간격, 피부·변 변화를 함께 남기면 좋습니다.'},
 jaundice: {page:'/tools/baby-age', title:'신생아 월령 확인', conclusion:'신생아 황달은 피부색만으로 판단하기 어렵고, 생후 며칠째인지와 먹는 양, 소변·대변 횟수를 함께 봐야 합니다.', check:'눈 흰자와 얼굴·몸통 색, 수유량, 기저귀 횟수, 잠만 자려는지 여부를 확인해 보세요.', age:'생후 첫 주에는 황달 확인이 특히 중요하며, 퇴원 후 노란 기가 진해지거나 오래가면 상담 기준이 달라질 수 있습니다.', danger:'잘 깨지 않음, 수유량 감소, 소변·대변 감소, 손발까지 노랗게 보임, 생후 초기 황달이 빠르게 진해지면 상담하세요.', record:'생후 날짜, 수유량, 기저귀 횟수, 노랗게 보이는 부위, 병원에서 들은 빌리루빈 수치를 적어두세요.'},
 'head-bump': {page:'/health/head-bump', title:'아기 머리 부딪힘 관찰 가이드', conclusion:'머리를 부딪힌 뒤에는 울음을 그쳤는지보다 이후 24시간 동안 구토, 졸림, 반응 변화를 보는 것이 중요합니다.', check:'부딪힌 높이와 바닥, 혹 크기, 의식이 멍했는지, 평소처럼 놀고 먹는지 확인하세요.', age:'말로 표현하기 어려운 어린 아기는 처짐, 반복 울음, 수유 거부 같은 간접 신호를 더 주의해서 봐야 합니다.', danger:'반복 구토, 의식 저하, 경련, 한쪽 팔다리 힘 빠짐, 계속 심하게 보챔, 큰 혹이나 상처가 있으면 바로 상담하세요.', record:'사고 시간, 높이, 충격 부위 사진, 구토 횟수, 잠든 뒤 깨웠을 때 반응을 남겨 주세요.'},
 'health-general': {page:'/family-health-qna', title:'아이 건강 Q&A', conclusion:'아이 건강 문제는 증상 하나보다 컨디션, 먹는 양, 소변·대변 변화가 함께 흔들리는지를 보는 것이 좋습니다.', check:'언제 시작됐는지, 좋아지는 흐름인지, 열·통증·구토 같은 동반 증상이 있는지 차분히 확인해 보세요.', age:'월령이 어릴수록 같은 증상도 더 빠르게 상담 기준에 가까워질 수 있습니다.', danger:'반응이 약해짐, 숨쉬기 어려움, 반복 구토, 소변이 줄어듦, 피가 섞인 분비물이 있으면 상담을 미루지 마세요.', record:'증상 시작 시간, 먹은 양, 기저귀 횟수, 사진이나 동영상, 새 음식·약 사용 여부를 정리해 주세요.'}
};

const growthGuides = {
 'height-weight': {page:'/tools/growth-percentile', title:'성장 백분위 계산기', conclusion:'키와 몸무게는 하루 차이보다 몇 달 동안의 성장 곡선을 함께 보는 것이 더 정확합니다.', check:'최근 측정값이 같은 조건에서 잰 것인지, 식사량과 활동량, 아픈 기간이 있었는지 같이 확인해 보세요.', age:'영아기에는 체중 변화가 빠르고, 돌 이후에는 키와 체형 변화가 천천히 보일 수 있습니다.', danger:'체중이 지속적으로 줄거나 성장곡선이 급격히 꺾이고 식사량도 줄면 상담을 고려하세요.', record:'측정 날짜, 키·몸무게, 아픈 기간, 식사량 변화, 성장 백분위 흐름을 기록해 주세요.'},
 percentile: {page:'/tools/growth-percentile', title:'성장 백분위 해석', conclusion:'성장 백분위는 높고 낮음보다 아이가 자기 곡선을 따라가고 있는지가 핵심입니다.', check:'한 번의 숫자보다 이전 기록과 비교해 갑자기 크게 이동했는지 확인해 보세요.', age:'월령이 낮을수록 작은 측정 오차도 백분위에 크게 보일 수 있어 같은 방식으로 반복 측정하는 것이 좋습니다.', danger:'백분위가 짧은 기간에 크게 떨어지거나 체중 증가가 멈추고 먹는 양이 줄면 상담이 필요할 수 있습니다.', record:'측정 도구, 날짜, 수유·식사량, 최근 감기나 장염 여부를 함께 남기세요.'},
 'gross-motor': {page:'/monthly-guide', title:'월령별 대근육 발달', conclusion:'뒤집기, 앉기, 기기, 걷기는 날짜처럼 딱 맞춰 일어나기보다 준비 신호가 쌓이며 나타납니다.', check:'양쪽 몸을 비슷하게 쓰는지, 엎드렸을 때 머리와 몸을 지탱하는지, 새로운 동작을 시도하는지 보세요.', age:'각 월령마다 기대 범위가 다르므로 예정일보다 일찍 태어난 아이는 교정월령도 함께 참고하는 것이 좋습니다.', danger:'이전에 하던 동작이 사라지거나 한쪽만 계속 쓰고 몸이 지나치게 뻣뻣하거나 축 늘어지면 상담을 고려하세요.', record:'처음 성공한 날짜, 자주 되는 상황, 어려워하는 자세, 양쪽 사용 차이를 동영상으로 남겨두면 좋습니다.'},
 language: {page:'/monthly-guide', title:'월령별 언어 발달', conclusion:'언어 발달은 말하는 단어 수만 보지 말고 소리를 듣고 반응하는지, 의사표현이 늘어나는지를 함께 봐야 합니다.', check:'이름을 부르면 돌아보는지, 손짓이나 가리키기가 있는지, 옹알이와 모방 소리가 늘어나는지 확인해 보세요.', age:'돌 전후에는 이해와 몸짓이 먼저 늘고, 이후 단어와 짧은 표현으로 이어지는 경우가 많습니다.', danger:'소리에 반응이 약하거나, 눈맞춤·가리키기·모방이 함께 부족하고 이전 표현이 줄면 상담이 도움이 됩니다.', record:'새로 나온 소리와 단어, 알아듣는 말, 손짓, 가족과 놀이 중 반응을 적어두세요.'},
 'fine-motor': {page:'/monthly-guide', title:'월령별 소근육 발달', conclusion:'손 사용은 장난감을 잡는 힘보다 손을 바꿔 쥐고, 집고, 놓는 과정이 자연스러운지 보는 것이 좋습니다.', check:'작은 물건을 엄지와 검지로 집는지, 양손을 함께 쓰는지, 숟가락이나 블록을 탐색하는지 확인하세요.', age:'월령이 높아질수록 단순히 잡는 동작에서 조작하고 맞추는 동작으로 발전합니다.', danger:'한쪽 손만 지속적으로 쓰거나 물건을 거의 잡지 못하고, 다른 발달 신호도 함께 늦으면 상담을 고려하세요.', record:'잘 잡는 물건, 어려워하는 크기, 양손 사용 차이, 놀이 반응을 짧게 남기세요.'},
 social: {page:'/qna/growth', title:'아이 성장 Q&A', conclusion:'사회성은 낯가림이 있느냐보다 눈맞춤, 반응 주고받기, 관심 공유가 늘어나는지가 중요합니다.', check:'보호자의 표정에 반응하는지, 좋아하는 것을 보여주려 하는지, 이름을 부르면 상호작용이 이어지는지 보세요.', age:'낯가림과 분리불안은 월령에 따라 자연스러운 시기가 있지만, 반응 주고받기는 꾸준히 살펴볼 필요가 있습니다.', danger:'눈맞춤과 이름 반응이 매우 적고, 이전에 하던 상호작용이 줄거나 관심 공유가 거의 없으면 상담을 권합니다.', record:'잘 반응하는 사람과 상황, 놀이 중 주고받기, 이름 반응, 새로 생긴 행동을 기록해 주세요.'},
 'sleep-growth': {page:'/monthly-guide', title:'월령별 수면 흐름', conclusion:'수면은 성장과 컨디션에 영향을 주지만, 시간표보다 낮잠·밤잠 뒤 아이가 회복되는지가 더 중요합니다.', check:'잠드는 데 오래 걸리는지, 밤중 각성이 늘었는지, 낮 동안 예민함이나 식사량 변화가 있는지 보세요.', age:'월령마다 낮잠 횟수와 깨어 있는 시간이 달라지므로 현재 월령의 루틴 범위를 같이 확인하는 것이 좋습니다.', danger:'잠 부족으로 먹는 양이 크게 줄거나, 코골이·호흡 멈춤 의심, 심한 처짐이 있으면 상담을 고려하세요.', record:'취침·기상 시간, 낮잠 길이, 밤중 각성 횟수, 식사량과 기분 변화를 남겨보세요.'},
 'eating-weight': {page:'/baby-food', title:'이유식·식사 가이드', conclusion:'식사량은 하루마다 달라질 수 있어 체중 흐름과 기저귀, 활동량을 함께 보는 것이 현실적입니다.', check:'최근 아픈 적이 있었는지, 질감이 어려운지, 간식이나 수유가 식사를 밀어내는지 확인해 보세요.', age:'이유식 초기에는 양보다 경험이 중요하고, 돌 이후에는 가족 식사와 간식 리듬이 체중 흐름에 영향을 줍니다.', danger:'먹는 양이 오래 줄고 체중 증가가 멈추거나, 삼킴 어려움·구토·설사가 반복되면 상담을 권합니다.', record:'먹은 양, 거부한 질감, 수유·간식 시간, 체중 변화, 변 상태를 함께 적어주세요.'},
 'growth-general': {page:'/monthly-guide', title:'월령별 육아 로드맵', conclusion:'발달은 한 가지 행동만으로 판단하기보다 여러 영역이 함께 앞으로 나아가는지 보는 것이 좋습니다.', check:'새로 늘어난 행동, 유지되는 기능, 놀이 반응, 식사와 수면 변화를 함께 확인해 보세요.', age:'월령별 기대 범위가 다르기 때문에 현재 개월수와 아이의 전체 흐름을 같이 보는 것이 안전합니다.', danger:'이전에 하던 행동이 뚜렷하게 줄거나 여러 영역이 동시에 후퇴하면 전문가 상담을 고려하세요.', record:'처음 보인 행동, 잘 되는 상황, 어려워하는 상황, 부모가 걱정한 날짜를 남겨두세요.'}
};

const behaviorGuides = {
 'sleep-behavior': {page:'/monthly-guide', title:'월령별 수면 흐름', conclusion:'수면 행동은 버릇만의 문제가 아니라 피곤함, 분리불안, 낮잠 리듬이 함께 영향을 줍니다.', check:'잠들기 전 자극, 낮잠 길이, 밤중에 깨는 시간, 달래는 방식 뒤 변화를 살펴보세요.', age:'월령에 따라 수면퇴행과 분리불안이 겹칠 수 있어 갑작스러운 변화는 며칠 흐름으로 보는 것이 좋습니다.', danger:'수면 문제가 식사와 낮 활동까지 크게 흔들리거나 호흡 이상이 의심되면 상담을 고려하세요.', record:'취침 루틴, 깨는 시간, 달래는 데 걸린 시간, 낮잠과 식사 변화를 적어보세요.'},
 daycare: {page:'/checklists/daycare', title:'어린이집 준비 체크리스트', conclusion:'어린이집 적응은 울지 않는 것보다 헤어진 뒤 회복하는 시간이 조금씩 짧아지는지를 보는 것이 좋습니다.', check:'등원 전후 식사와 수면, 선생님과의 상호작용, 집에 돌아온 뒤 예민함이 얼마나 이어지는지 확인하세요.', age:'어릴수록 분리 상황을 말로 설명하기 어렵기 때문에 생활 리듬 변화로 신호가 나타날 수 있습니다.', danger:'몇 주 이상 식사·수면이 크게 무너지고 등원 공포가 심해지거나 퇴행 행동이 뚜렷하면 상담을 고려하세요.', record:'등원 때 반응, 하원 후 기분, 선생님이 본 회복 시간, 집에서 달라진 행동을 메모해 보세요.'},
 emotion: {page:'/qna/behavior', title:'아이 행동 Q&A', conclusion:'떼쓰기와 감정 폭발은 통제보다 아이가 어떤 상황에서 조절을 잃는지 찾는 것이 먼저입니다.', check:'배고픔, 피곤함, 전환 상황, 원하는 말이 통하지 않는 순간에 반복되는지 살펴보세요.', age:'말이 아직 짧은 시기에는 감정이 행동으로 먼저 나오고, 언어가 늘면서 요구 표현을 배울 수 있습니다.', danger:'감정 폭발이 매우 잦고 오래가며 일상생활이 어렵거나 자신·타인을 다치게 하는 행동이 반복되면 상담이 필요합니다.', record:'발생 시간, 직전 상황, 보호자 반응, 진정까지 걸린 시간, 반복 패턴을 남겨보세요.'},
 'safety-behavior': {page:'/qna/behavior', title:'아이 행동 Q&A', conclusion:'때리기나 물기 같은 행동은 나쁘다고만 보기보다 언제, 누구에게, 어떤 감정 뒤에 나오는지 봐야 합니다.', check:'장난감 갈등, 전환, 피곤함, 관심 끌기 상황에서 반복되는지 확인하고 즉시 짧고 일관된 제한을 주세요.', age:'어린 아이는 말보다 행동이 먼저 나올 수 있지만, 반복될수록 대체 표현을 알려주는 과정이 필요합니다.', danger:'다치는 행동이 반복되고 강도가 세지거나, 멈추기 어렵고 집단생활에도 영향을 주면 전문가 상담을 고려하세요.', record:'대상, 상황, 직전 감정, 멈추는 데 도움이 된 말, 다친 정도를 적어두세요.'},
 refusal: {page:'/qna/behavior', title:'아이 행동 Q&A', conclusion:'거부 행동은 고집만이 아니라 불편함, 예측 어려움, 감각 자극 때문에 생길 수 있습니다.', check:'양치·목욕·기저귀 갈기 전후에 어떤 자극을 싫어하는지, 선택지를 주면 반응이 달라지는지 보세요.', age:'자율성이 커지는 시기에는 직접 고르는 경험이 거부감을 줄이는 데 도움이 됩니다.', danger:'필수 돌봄을 거의 못 할 정도로 거부가 심하고 울음이 오래 지속되면 상담이나 환경 조정이 필요할 수 있습니다.', record:'거부하는 단계, 싫어하는 감각, 성공한 방식, 걸린 시간을 남겨보세요.'},
 toilet: {page:'/checklists/daycare', title:'어린이집 생활 준비', conclusion:'배변훈련은 빨리 끝내는 것보다 아이가 신호를 알고 부담 없이 시도하는지가 중요합니다.', check:'소변 간격, 젖은 기저귀 불편함 표현, 변기 앉기 거부감, 변비 여부를 먼저 확인하세요.', age:'아이마다 준비 시기가 다르므로 또래와 비교하기보다 신체 신호와 협조 가능성을 함께 봅니다.', danger:'배변을 참아 변비가 심해지거나 훈련 때문에 불안이 커지면 속도를 늦추고 상담을 고려하세요.', record:'소변 간격, 성공·실패 시간, 변비 여부, 칭찬 방식, 거부 반응을 적어두세요.'},
 'eating-behavior': {page:'/baby-food', title:'이유식·식사 가이드', conclusion:'편식과 음식 거부는 맛보다 질감, 피곤함, 선택권, 간식 리듬이 영향을 주는 경우가 많습니다.', check:'새 음식만 거부하는지, 특정 질감만 싫어하는지, 간식과 수유가 식사 시간에 가까운지 확인하세요.', age:'월령이 높아질수록 스스로 먹고 싶은 마음이 커져 식사 방식 조정이 필요할 수 있습니다.', danger:'먹는 범위가 지나치게 좁아지고 체중 증가가 둔해지거나 삼킴 문제가 의심되면 상담이 좋습니다.', record:'잘 먹는 음식, 거부한 질감, 식사 시간, 간식량, 보호자 반응 뒤 변화를 적어보세요.'},
 'behavior-general': {page:'/qna/behavior', title:'아이 행동 Q&A', conclusion:'아이 행동은 한 번의 모습보다 반복되는 상황과 회복되는 시간을 함께 보는 것이 좋습니다.', check:'언제 자주 나타나는지, 피곤함·배고픔·전환 상황과 연결되는지, 보호자 반응 뒤 달라지는지 확인하세요.', age:'월령이 낮을수록 말 대신 행동으로 표현하고, 자라면서 언어와 규칙 이해가 함께 늘어납니다.', danger:'일상생활이 크게 흔들리고 강한 공격성이나 퇴행이 반복되면 전문가 상담을 고려하세요.', record:'반복 시간대, 직전 상황, 진정 방법, 새로 늘어난 행동, 어려워진 행동을 기록해 주세요.'}
};

function applyProfile(entry, category){
  let profile, p;
  if (category === 'health') { profile = healthProfile(entry); p = healthGuides[profile]; }
  else if (category === 'growth') { profile = growthProfile(entry); p = growthGuides[profile]; }
  else { profile = behaviorProfile(entry); p = behaviorGuides[profile]; }

  const q = entry.question;
  const topic = entry.topic || '아이 상태';
  const starters = [
    `‘${q}’가 걱정될 때는 ${topic}만 보지 말고 아이의 전체 컨디션을 함께 확인해 주세요. ${p.conclusion}`,
    `‘${q}’처럼 보인다면 먼저 평소와 달라진 점이 무엇인지 차분히 나누어 보는 것이 좋습니다. ${p.conclusion}`,
    `${topic}을 판단할 때는 한 번의 모습보다 언제 시작됐고 얼마나 이어지는지가 중요합니다. ${p.conclusion}`,
    `부모가 느끼는 작은 변화도 기록해 두면 ${topic}의 흐름을 훨씬 현실적으로 볼 수 있습니다. ${p.conclusion}`,
    `‘${q}’에 대한 답은 아이의 월령과 컨디션에 따라 달라질 수 있습니다. ${p.conclusion}`,
    `${topic}이 반복된다면 먹기, 잠, 놀이 반응이 같이 흔들리는지 먼저 비교해 보세요. ${p.conclusion}`,
    `집에서 바로 할 일은 ${topic}의 강도와 반복 여부를 나누어 확인하는 것입니다. ${p.conclusion}`,
    `‘${q}’라는 고민은 숫자나 한 장면보다 전후 흐름을 볼 때 더 잘 정리됩니다. ${p.conclusion}`,
    `${topic} 때문에 불안할 때는 지금 당장 상담이 필요한 신호부터 구분해 보세요. ${p.conclusion}`,
    `아이 상태가 애매하게 느껴진다면 ${topic}과 함께 나타나는 다른 변화를 같이 보세요. ${p.conclusion}`,
    `‘${q}’를 확인할 때는 평소 모습과 얼마나 다른지가 중요한 기준이 됩니다. ${p.conclusion}`,
    `${topic}은 또래 비교보다 아이가 자기 흐름을 유지하는지 확인하는 편이 더 도움이 됩니다. ${p.conclusion}`,
    `이럴 때는 보호자가 볼 수 있는 신호와 병원에 물어볼 신호를 분리해 두는 것이 좋습니다. ${p.conclusion}`,
    `‘${q}’가 계속 마음에 걸린다면 오늘 하루의 변화와 최근 며칠의 흐름을 따로 보세요. ${p.conclusion}`,
    `${topic}은 좋아졌다 나빠지는 흐름이 있을 수 있어 관찰 기준을 정해두면 불안이 줄어듭니다. ${p.conclusion}`,
    `아이에게 ${topic} 변화가 보이면 먼저 안전 신호와 생활 리듬 변화를 함께 확인해 주세요. ${p.conclusion}`
  ];  const idx = Math.abs(hash(entry.slug)) % starters.length;
  const intro = starters[idx];
  const check = p.check;
  const age = p.age;
  const danger = p.danger;
  const record = p.record;
  const relatedVariants = [
    `${p.title}(${p.page})에서 같은 주제의 확인 순서를 이어서 볼 수 있습니다.`,
    `${p.page}를 함께 보면 오늘 기록한 내용을 기준별로 다시 정리하기 쉽습니다.`,
    `${p.title} 페이지는 집에서 볼 신호와 상담 기준을 나누어 확인할 때 도움이 됩니다.`,
    `다음 단계가 헷갈린다면 ${p.title}에서 관련 내용을 한 번 더 비교해 보세요. ${p.page}`,
    `현재 질문과 가까운 내용은 ${p.page}에서도 이어서 확인할 수 있습니다.`,
    `${p.title}을 함께 보면 계산기·체크리스트·Q&A 흐름을 자연스럽게 연결할 수 있습니다.`,
    `같은 고민을 더 정리하고 싶다면 ${p.title} 페이지를 참고해 보세요.`,
    `${p.page}에는 보호자가 바로 확인하기 쉬운 기준을 따로 모아두었습니다.`,
    `관련 페이지인 ${p.title}에서 월령이나 증상 기준을 이어서 확인해 보세요.`,
    `필요하다면 ${p.title}(${p.page})로 이동해 비슷한 사례를 더 살펴볼 수 있습니다.`,
    `${p.title}은 이 질문과 함께 보면 좋은 내부 참고 페이지입니다.`,
    `기록한 내용을 비교할 때는 ${p.page}의 기준도 같이 확인해 보세요.`
  ];
  const related = relatedVariants[(idx + 1) % relatedVariants.length];

  entry.summary = clean(`${intro} ${check} ${danger} ${related}`);
  entry.answer = [intro, check, age, danger, record, related].map(clean);
  entry.checklist = [check, age, danger, record].map(clean);
  entry.caution = danger;
  entry.simpleAction = [check, record, related].map(clean);
}
function hash(str){ let h=0; for (let i=0;i<str.length;i++) h=((h<<5)-h)+str.charCodeAt(i)|0; return h; }

for (const category of Object.keys(data)) {
  for (const entry of data[category]) applyProfile(entry, category);
}

let body = JSON.stringify(data, null, 2).replace(/"([^"\n]+)":/g, (m,k)=> /^[a-zA-Z_$][\w$]*$/.test(k)? `${k}:` : m);
const header = src.slice(0, match.index);
const tail = src.slice(match.index + match[0].length);
const out = `${header}export const qnaData: Record<QnaCategory, QnaEntry[]> = ${body} as const;${tail}`;
fs.writeFileSync(file, out);
