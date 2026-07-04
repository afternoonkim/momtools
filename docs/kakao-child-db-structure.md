# MomTools 카카오 로그인 / 아이 정보 DB 구조 적용 메모

이번 패치는 `prisma/schema.prisma`에 아래 구조를 추가합니다.

- `User`: MomTools 사용자 기본 정보
- `UserAccount`: 카카오/구글/애플/휴대폰 등 로그인 제공자 연결 정보
- `Child`: 아이 별칭, 생년월일, 대표 아이 여부
- `AuthProvider`: 로그인 제공자 enum
- `ChildGender`: 아이 성별 enum

## 적용 순서

기존 프로젝트에 패치 파일을 덮어씌운 뒤 아래 명령어를 실행합니다.

```bash
npx prisma generate
npx prisma db push
```

운영 DB에 바로 적용하기 전에는 Supabase에서 백업을 먼저 확인하는 것을 권장합니다.

## 1차 기능 구현 기준

카카오 로그인 후 `UserAccount(provider=KAKAO, providerAccountId=카카오 고유 ID)` 기준으로 사용자를 찾습니다.

- 기존 계정이 있으면 `lastLoginAt` 갱신
- 없으면 `User`와 `UserAccount` 생성
- `Child`가 없으면 아이 정보 등록 화면으로 이동
- `Child`가 있으면 대표 아이 기준으로 내 아이 홈 표시

## 개인정보 기준

초기에는 아이 생년월일과 별칭 정도만 저장하는 방향이 안전합니다. 아이 실명, 주소, 병력, 복약 정보는 1차 범위에서 제외하는 것을 권장합니다.
