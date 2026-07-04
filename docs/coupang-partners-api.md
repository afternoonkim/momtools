# MomTools 쿠팡 파트너스 네이티브 추천형 광고 운영 메모

## 목표

수동으로 고정해둔 쿠팡 파트너스 배너는 사용하지 않고, 페이지 주제와 맞는 육아용품을 네이티브 추천형 카드로 최대 3개만 보여준다.

## 노출 정책

- 한 페이지에 최대 3개 품목만 노출한다.
- 페이지별로 가장 관련 있는 품목 카테고리를 최대 3개까지 고른다.
- 쿠팡 파트너스 API는 실제 이동 URL을 가져오는 용도로 사용한다.
- 화면에는 상품 이미지, 가격, 배송 문구, 긴 상품명을 노출하지 않는다.
- API 인증 정보가 없거나 API 호출이 실패하면 기존 DB 수동 링크를 백업으로 사용한다.
- 기존 iframe 배너는 운영 화면에서 렌더링하지 않는다.

## 환경변수

Vercel 운영 환경에 아래 값을 추가한다.

```txt
NEXT_PUBLIC_COUPANG_PARTNERS_ENABLED=true
COUPANG_PARTNERS_ACCESS_KEY=쿠팡파트너스_access_key
COUPANG_PARTNERS_SECRET_KEY=쿠팡파트너스_secret_key
COUPANG_PARTNERS_SUB_ID=momtools
NEXT_PUBLIC_COUPANG_PARTNERS_LEGACY_BANNER_ENABLED=false
```

기존 변수명과의 호환을 위해 아래 이름도 지원한다.

```txt
COUPANG_ACCESS_KEY
COUPANG_SECRET_KEY
COUPANG_SUB_ID
```

## DB seed 순서

처음 운영 배포 전 또는 콘텐츠 DB를 크게 바꾼 뒤 아래 명령을 실행한다.

```bash
npm run db:seed:coupang-ads
```

페이지 매핑만 다시 확인하고 싶다면:

```bash
npm run db:seed:coupang-mappings:dry
```

기존에 남은 불필요한 매핑을 비활성화하면서 최신 매핑으로 맞추고 싶다면:

```bash
npm run db:seed:coupang-mappings:sync
```

## 현재 품목 키워드 기준

| 카테고리 | API 검색 키워드 |
|---|---|
| 체온계 | 아기 체온계 |
| 콧물흡입기 | 아기 콧물흡입기 |
| 가습기 | 아기방 가습기 |
| 유모차 | 휴대용 유모차 |
| 카시트 | 아기 카시트 |
| 아기띠 | 아기띠 |
| 밸런스바이크 | 유아 밸런스바이크 |
| 이유식 용품 | 이유식 용기 스푼 세트 |
| 젖병 | 아기 젖병 |
| 기저귀 | 아기 기저귀 |
| 아기 물티슈 | 아기 물티슈 |
| 신생아 준비물 | 신생아 준비물 |
| 어린이집 준비물 | 어린이집 준비물 |
| 아기 목욕용품 | 아기 목욕용품 |
| 아기 세제 | 아기 세제 |
| 수면 용품 | 아기 수면조끼 |
| 구강 관리용품 | 유아 칫솔 구강관리 |
| 배변훈련 용품 | 유아 배변훈련 변기 |
| 안전용품 | 아기 안전용품 |
| 발달 놀이용품 | 영유아 발달 장난감 |

## 운영 전 확인

1. Vercel 환경변수에 Access Key/Secret Key를 넣는다.
2. `NEXT_PUBLIC_COUPANG_PARTNERS_ENABLED=true`인지 확인한다.
3. `/api/coupang-product-ads?path=/baby-food` 응답에 `items`가 최대 3개만 오는지 확인한다.
4. `/baby-food`, `/checklists/newborn`, `/tools/vaccine-schedule`, `/play`에서 카드 노출 위치를 확인한다.
5. 카드가 상품 이미지/가격/배송정보 없이 카테고리명, 설명, 보기 버튼만 보이는지 확인한다.
6. 기존 iframe 배너가 노출되지 않는지 확인한다.
7. 쿠팡 파트너스 고지 문구가 카드 아래에 보이는지 확인한다.
