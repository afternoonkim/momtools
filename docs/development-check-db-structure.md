# MomTools 발달 체크 DB 구조

## 목적

발달 체크는 로그인한 보호자가 등록한 아이별로 발달 관찰 기록을 남기는 기능이다.
진단이나 점수화가 아니라, 보호자가 영유아검진이나 병원 상담 전 아이의 변화를 기억하기 쉽도록 돕는 기록 기능으로 운영한다.

## 추가 테이블

### ChildDevelopmentRecord

아이 1명과 체크 항목 1개를 연결해서 상태와 짧은 메모를 저장한다.

```prisma
model ChildDevelopmentRecord {
  id          String   @id @default(cuid())
  childId     String

  ageRangeKey String
  domainKey   String
  itemKey     String
  status      String   @default("not_started")
  note        String?
  observedAt  DateTime? @db.Date

  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  child       Child    @relation(fields: [childId], references: [id], onDelete: Cascade)

  @@unique([childId, itemKey])
  @@index([childId])
  @@index([childId, ageRangeKey])
  @@index([childId, status])
}
```

## Child와의 관계

```prisma
model Child {
  ...
  developmentRecords ChildDevelopmentRecord[]
}
```

## 저장 상태

현재 상태값은 문자열로 저장한다.

- `not_started`: 아직 어려워요
- `practicing`: 연습 중
- `achieved`: 잘 해요
- `concern`: 걱정돼요

## 정적 체크 항목

체크 항목 자체는 DB가 아니라 `data/developmentMilestones.ts`에 정적 데이터로 둔다.
초기 운영에서는 항목을 자주 바꾸지 않고, 기록만 DB에 저장하는 편이 안전하다.

## 적용 명령어

```bash
npx prisma generate
npx prisma db push
```

운영 DB에 적용하기 전에는 Supabase 백업 또는 스키마 변경 내역 확인을 먼저 권장한다.
