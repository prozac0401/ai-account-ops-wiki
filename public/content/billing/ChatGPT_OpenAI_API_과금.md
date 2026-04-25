# ChatGPT·OpenAI API 과금

> 상위 문서: [[../Home|AI 계정 운영]]
> 분류: OpenAI / 과금 / 좌석 / API 사용량

[목차]

## 개요

ChatGPT Business 과금과 OpenAI API 과금은 별도다.

ChatGPT Business는 좌석 중심이다. OpenAI API는 사용량 중심이다. 둘을 같은 예산 항목으로 묶으면 나중에 비용 설명이 어려워진다.

## ChatGPT Business 좌석 과금

OpenAI 도움말 기준으로 ChatGPT Business의 표준 ChatGPT 좌석은 최소 2석이 필요하다. 대부분 국가 기준 가격은 월간 결제와 연간 결제 단가가 다르게 안내된다.

### 실제 부과 비용

2026-04-25 기준 OpenAI 도움말은 ChatGPT Business standard seat 가격을 다음과 같이 안내한다.

| 결제 방식 | 단가 | 비고 |
|---|---:|---|
| Monthly plan | $25/user/month | 최소 2 standard seats |
| Annual plan | $20/user/month | 연간 청구 |

예를 들어 52석을 월간 플랜으로 운영하면 `52 x $25 = $1,300/month` 수준이다. 연간 플랜으로 잡으면 `52 x $20 x 12 = $12,480/year` 수준이다.

```text
52명 monthly: 52 seats x $25 = $1,300/month
52명 annual: 52 seats x $20 x 12 = $12,480/year
```

### 결제 방식

Self-serve ChatGPT Business는 신용카드와 체크카드 결제를 지원한다. 인보이스, 은행 송금, wire, ACH, PO, net terms, split payments는 self-serve Business에서 제공되지 않으며, 인보이스가 필요하면 Enterprise 또는 Education 같은 계약 플랜을 영업팀에 문의해야 한다고 안내된다.

### 운영상 의미

- 소규모 교육은 카드로 빠르게 시작할 수 있다.
- 공공기관/대기업처럼 인보이스가 필수인 곳은 Business self-serve가 맞지 않을 수 있다.
- 연간계약은 중간 좌석 증가 시 true-up이 발생할 수 있다.
- 좌석을 줄였다고 이미 결제된 연간 비용이 바로 줄어든다고 보면 안 된다.

### 사용자 추가·제거 과금

월간 플랜에서는 billing month 시작 시 baseline standard seats를 먼저 청구한다. 월 중 baseline보다 좌석이 늘면 늘어난 좌석은 일할 계산된다. 반대로 좌석 수를 줄여 baseline보다 낮아져도 현재 월의 baseline 비용은 유지되고, 다음 월 청구일부터 반영된다.

연간 플랜에서는 월별 true-up cycle이 중요하다. 연중 좌석을 추가하면 초과 좌석은 남은 기간 기준으로 일할 정산되고, true-up 후 새 좌석 수가 남은 연도 baseline이 된다. 한 달 안에 현재 baseline의 1배 또는 20석 이상을 추가하면 즉시 true-up invoice가 나올 수 있다.

```text
연간 플랜 예시
초기 5석: 5 x $20 x 12 = $1,200
10일차 3석 추가:
  3 x $20 x 20/30 = $40
  3 x $20 x 11 months = $660
추가 청구 = $700
새 baseline = 8 seats
```

## Codex 좌석과 크레딧

ChatGPT Business에는 표준 ChatGPT 좌석과 Codex 좌석이 구분된다.

표준 좌석은 고정 좌석 과금이고, Codex 좌석은 사용량 기반 요소가 있다. 교육에서 Codex 실습을 넣을 경우, 단순히 ChatGPT 좌석 수만 보는 것이 아니라 크레딧과 사용량 제한도 확인해야 한다.

## OpenAI API 사용량 과금

API는 API 작업 단위별 사용량, 예산, rate limit 관리가 핵심이다.

OpenAI API는 좌석 과금이 아니라 모델별 사용량 과금이다. 예를 들어 GPT-5.2는 공식 pricing 문서 기준 input $1.75/1M tokens, cached input $0.175/1M tokens, output $14/1M tokens로 안내된다.

```text
GPT-5.2 단순 예시
입력 1,000,000 tokens = $1.75
출력   300,000 tokens = 0.3 x $14 = $4.20
합계 = $5.95
```

실제 비용은 선택 모델, 입력·출력 비율, 캐시 적용 여부, Batch API 사용 여부, 이미지·음성·검색 같은 부가 기능에 따라 달라진다.

운영자는 다음을 확인한다.

- API 작업 단위별 월 예산
- 사용량 알림 기준
- 모델별 사용 가능 여부
- API 키 권한
- 서비스 계정 권한
- 교육 종료 후 키 삭제

## ChatGPT와 API 예산을 나누는 방식

권장 예산 항목은 다음과 같다.

```text
OpenAI
├─ ChatGPT Business seats
│  ├─ 수강생 표준 좌석
│  └─ 운영자 좌석
└─ OpenAI API usage
   ├─ 교육용 API 작업 단위 예산
   ├─ 실습 서버 예산
   └─ 예비 크레딧
```

## 비용 폭주를 막는 방법

- 교육용 API 작업 단위를 별도로 만든다.
- 예산을 낮게 잡고 알림을 켠다.
- 수강생에게 개인 API 키를 직접 배포하지 않는다.
- 필요한 경우 서버에서만 API 키를 보관한다.
- 키를 GitHub에 올리지 않도록 안내한다.
- 교육 종료 직후 키를 삭제한다.

## 자주 헷갈리는 점

### ChatGPT Business 좌석이 있으면 API도 무료인가?

아니다. API 사용량은 별도다.

### API 키가 있으면 ChatGPT Business에 로그인할 수 있나?

아니다. API Platform과 ChatGPT Workspace는 다르다.

### 결제 카드를 등록한 사람만 Owner인가?

항상 그렇지는 않다. 하지만 결제와 워크스페이스 관리 권한은 강력하므로 최소화해야 한다.

## 출처

- ChatGPT Business billing and seats: https://help.openai.com/en/articles/8792536-managing-billing-and-seats-in-chatgpt-business
- ChatGPT Business roles and seats: https://help.openai.com/en/articles/8542216-managing-members-seat-types-and-roles-in-chatgpt-business
- OpenAI API pricing: https://platform.openai.com/docs/pricing
- OpenAI API 작업 단위: https://help.openai.com/ko-kr/articles/9186755-api-%ED%94%8C%EB%9E%AB%ED%8F%BC%EC%97%90%EC%84%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0
- OpenAI API org members: https://help.openai.com/en/articles/4936812-how-do-i-add-change-or-remove-members-on-my-openai-api-account
