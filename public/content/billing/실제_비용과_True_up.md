# 실제 비용과 True-up

> 상위 문서: [[../Home|AI 계정 운영]]
> 분류: 과금 / 실제 비용 / True-up

[목차]

## 개요

이 문서는 교육 운영자가 예산을 잡을 때 바로 써먹을 수 있도록 실제 부과 단가, 사용자 추가·제거 시 과금, True-up 개념을 한 번에 정리한다.

금액은 2026-04-25 기준 공식 가격 또는 도움말에서 확인한 USD 기준이다. 실제 결제 금액은 국가, 통화, 세금, 환율, 프로모션, 리셀러 또는 영업 계약 조건에 따라 달라질 수 있다. 최종 금액은 결제 직전 Billing 화면과 견적서를 기준으로 확정한다.

## 실제 부과 단가 빠른 표

| 서비스 | 현재 확인 단가 | 최소/주의 | 과금 성격 |
|---|---:|---|---|
| Google Workspace Business Starter | Flexible $8.40/user/month, Annual $7/user/month 또는 $84/user/year | Business 플랜은 보통 최대 300 users | 사용자 라이선스 |
| Google Workspace Business Standard | Flexible $16.80/user/month, Annual $14/user/month 또는 $168/user/year | Gemini/스토리지 요건 확인 | 사용자 라이선스 |
| Google Workspace Business Plus | Flexible $26.40/user/month, Annual $22/user/month 또는 $264/user/year | 보안 기능 요건 확인 | 사용자 라이선스 |
| Colab Pro | Annual $8.33/user/month, Flexible $9.99/user/month | 온라인 직접 구매는 Annual/Fixed-Term Plan으로 안내됨 | 사용자 라이선스 + 컴퓨팅 단위 |
| Colab Pro+ | Annual $41.66/user/month, Flexible $49.99/user/month | Pro+는 500 compute units/month | 사용자 라이선스 + 컴퓨팅 단위 |
| ChatGPT Business standard seat | Monthly $25/user/month, Annual $20/user/month billed annually | 최소 2 standard seats | 고정 좌석 |
| Cursor Teams | $40/user/month | On-demand usage는 후불 사용량 과금 가능 | 좌석 + 사용량 |
| Claude Team standard seat | Annual $20/seat/month, Monthly $25/seat/month | Team은 5~150명용 | 좌석 |
| Claude Team premium seat | Annual $100/seat/month, Monthly $125/seat/month | 표준 좌석보다 사용량이 큼 | 좌석 |
| OpenAI API GPT-5.2 예시 | input $1.75/1M tokens, cached input $0.175/1M tokens, output $14/1M tokens | 모델별 단가 다름 | 사용량 |

## 월 단위 사용자 추가와 제거

월 단위 과금은 보통 “이번 달에 며칠 썼는가”를 기준으로 일할 계산한다.

예를 들어 ChatGPT Business 월간 플랜에서 10석을 월 $25로 쓰다가 10일차에 3석을 추가하면 다음 청구서에는 기본 13석과 추가 3석의 남은 기간 사용분이 함께 잡힌다.

```text
예시: ChatGPT Business 월간 플랜

기본 10석: 13 seats x $25 = $325
추가 3석: 3 seats x $25 x 20/30 days = $50
합계: $375
```

월 중 제거는 서비스마다 다르게 처리된다.

| 서비스 | 월 중 추가 | 월 중 제거 |
|---|---|---|
| Google Workspace Flexible | 추가한 날부터 일할 계산 | 삭제 또는 라이선스 제거 시 일할 계산으로 줄어듦 |
| ChatGPT Business monthly | baseline 초과 좌석은 일할 계산 | 현재 월에는 baseline 비용이 유지되고 다음 청구일에 반영 |
| Claude Team monthly | 추가·제거 즉시 일할 청구 또는 크레딧 | 제거하면 접근은 즉시 끝나고 일할 크레딧 가능 |
| Cursor Teams self-serve | 좌석 추가 시 비용 증가 | 실제 화면과 계약 조건 확인. 팀 내 재배정은 별도 비용 없이 처리될 수 있음 |

### 월 단위 그래프

```text
좌석 수
13 |          █████████████████████  10일차에 3석 추가
12 |
11 |
10 | █████████
   +--------------------------------
     1일       10일              30일

청구 감각:
- 10석은 월 전체 비용
- 추가 3석은 10일차 이후 남은 20일만 일할 계산
```

## 연 단위 사용자 추가와 제거

연 단위 과금은 “싸게 쓰는 대신 줄이는 자유가 적다”라고 이해하면 된다.

Google Workspace Annual/Fixed-Term Plan은 처음 구매한 라이선스 수에 대해 연 단위 약정을 잡는다. 중간에 사용자를 삭제해도 라이선스 수가 줄어드는 것은 아니며, 해당 라이선스를 다른 사용자에게 재할당할 수 있을 뿐이다. 라이선스 수를 줄여 비용을 낮추는 것은 보통 갱신 시점에 가능하다.

Google Workspace Business Starter Annual 예시는 다음과 같다.

```text
처음 7석 구매:
7 seats x $84/year / 12 = $49/month

4개월차 6일에 3석 추가:
기존 7석 = $49
추가 3석 = 3 seats x $84/year / 12 x 24/30 days = $16.80
해당 월 합계 = $65.80

다음 달부터:
10 seats x $84/year / 12 = $70/month
```

연 단위 계약에서 사용자를 제거할 때는 “사용자 제거”와 “라이선스 감소”를 구분한다.

| 작업 | 운영 결과 | 비용 결과 |
|---|---|---|
| 사용자 삭제 | 접근 회수, 데이터 처리 필요 | Annual에서는 라이선스 수가 줄지 않음 |
| 라이선스 재할당 | 남은 좌석을 다른 사용자에게 사용 | 비용 변화 없음 |
| 라이선스 수 감소 | 계약 좌석 수 자체 축소 | 보통 갱신 시점에만 가능 |

## True-up이란

True-up은 이미 정한 기준 좌석 수와 실제 사용 좌석 수를 나중에 맞추는 정산이다.

교육 운영에서는 다음처럼 이해하면 쉽다.

```text
처음에 20석을 샀다.
그런데 교육 직전에 28명이 실제로 접속했다.
서비스는 28명 사용을 허용하되, 나중에 초과 8석을 정산한다.
이 정산이 True-up이다.
```

True-up은 특히 연간계약, baseline seat, active user 기준이 있는 서비스에서 중요하다. 계약서나 도움말에서 “baseline”, “active users”, “true-up period”, “monthly true-up cycle” 같은 표현이 나오면, 사용자를 잠깐 추가한 것처럼 보여도 청구 기준 좌석이 올라갈 수 있다.

### True-up 그래프

```text
Active users
28 |                    ███████████  초과 8명
27 |                    ███████████
26 |                    ███████████
25 |                    ███████████
24 |                    ███████████
23 |                    ███████████
22 |                    ███████████
21 |                    ███████████
20 | ███████████████████ baseline 20석
   +--------------------------------
     계약 시작        True-up 기준일

정산 대상 = 실제 active users 28 - baseline 20 = 8 seats
```

## True-up 예시

### ChatGPT Business annual 예시

연간 플랜에서 5석을 $20/user/month로 구매하면 첫 결제는 다음과 같다.

```text
5 seats x $20 x 12 months = $1,200
```

10일차에 3석을 추가하면 남은 20일 사용분과 남은 11개월분이 다음 true-up에서 정산된다.

```text
남은 20일분: 3 seats x $20 x 20/30 = $40
남은 11개월분: 3 seats x $20 x 11 = $660
추가 청구 합계: $700
```

이후 baseline은 8석으로 올라간다. 다음 달에 2명을 제거해도 8석 baseline 아래로 내려간 사용분은 즉시 환불되는 구조로 보지 않는다.

### Cursor true-up 예시

Cursor Pricing Policy는 Subscription Services의 True Up을 True Up Period 마지막 30일의 Active Users 기준으로 계산한다고 설명한다. 라이선스 재배정은 30일 True Up Period 안의 Active Users가 기존 Core License seat count를 넘지 않으면 추가 비용이 없을 수 있다.

예를 들어 Teams를 $40/user/month로 20석 운영한다고 가정한다. 12개월 기간 중 4개월차 말 기준 Active Users가 28명이고 남은 기간이 8개월이면, 단순 좌석료만 보면 다음처럼 설명할 수 있다.

```text
초과 좌석: 28 active users - 20 baseline = 8 seats
남은 기간 좌석료: 8 seats x $40 x 8 months = $2,560
```

실제 Cursor 계약에서는 여기에 Precommitted Usage Fee 또는 On-demand Usage가 함께 붙을 수 있으므로, 최종 금액은 Order Form과 Billing 화면을 확인한다.

### Google Workspace와 True-up

Google Workspace 도움말은 “True-up”이라는 말보다 prorated payment, Annual/Fixed-Term license commitment라는 구조로 설명한다.

운영 관점에서는 다음처럼 본다.

- Flexible Plan: 매월 실제 사용자 수를 일할 계산한다.
- Annual/Fixed-Term Plan: 약정한 라이선스 수는 갱신 전까지 줄지 않는다.
- Annual 중 추가 라이선스: 남은 기간만큼 일할 계산되어 추가된다.
- 대량 사용자 증가: 신규 계정 제한, 수동 결제, 결제 신용 확인과 함께 나타날 수 있다.

## 교육장 예산 산식

교육 예산은 다음 순서로 계산한다.

1. 수강생 좌석 수를 정한다.
2. 운영자와 보조강사 좌석을 더한다.
3. 최소 좌석 수를 맞춘다.
4. 월간 또는 연간 플랜을 고른다.
5. 중간 추가 가능성을 예비비로 잡는다.
6. 사용량 기반 서비스는 별도 한도를 둔다.

### 48석 강의장 예시

수강생 48명, 운영자 2명, 예비 2명을 잡으면 기준 좌석은 52석이다.

```text
기준 좌석 = 48 수강생 + 2 운영자 + 2 예비 = 52 seats
```

대표 비용 감각은 다음과 같다.

| 서비스 | 월간 기준 예시 |
|---|---:|
| ChatGPT Business monthly | 52 x $25 = $1,300/month |
| Cursor Teams | 52 x $40 = $2,080/month |
| Claude Team standard monthly | 52 x $25 = $1,300/month |
| Google Workspace Business Starter Flexible | 52 x $8.40 = $436.80/month |
| Colab Pro Flexible | 52 x $9.99 = $519.48/month |
| Colab Pro+ Flexible | 52 x $49.99 = $2,599.48/month |

세금, 환율, 카드 수수료, 프로모션, 지역 가격은 별도다. 실제 결제 전에는 반드시 구매 화면의 최종 금액을 캡처한다.

## 운영 체크리스트

- 월간 플랜인지 연간 플랜인지 확인한다.
- 최소 좌석 수와 baseline seat를 확인한다.
- 중간 추가 좌석이 일할 계산인지, 즉시 청구인지, 월말 정산인지 확인한다.
- 제거한 사용자가 “접근만 제거”된 것인지 “라이선스 비용까지 감소”한 것인지 구분한다.
- True-up 기준일과 기준 좌석 수를 기록한다.
- On-demand usage 또는 extra usage가 켜져 있으면 월 한도를 낮게 둔다.
- 구매 직전 Billing 화면과 결제 후 인보이스를 PDF로 저장한다.

## 출처

- Google Workspace payment plans: https://support.google.com/a/answer/1247360?hl=en-IE
- Google Workspace bills and charges: https://knowledge.workspace.google.com/admin/billing/understand-google-workspace-bills-and-charges
- Google Workspace Annual/Fixed-Term Plan: https://knowledge.workspace.google.com/admin/billing/annual-fixed-term-plan
- Google Workspace add-ons and Colab pricing: https://support.google.com/a/answer/13177581?hl=en
- ChatGPT Business billing and seats: https://help.openai.com/en/articles/8792536-managing-billing-and-seats-in-chatgpt-business
- OpenAI API pricing: https://platform.openai.com/docs/pricing
- Cursor Pricing: https://cursor.com/pricing
- Cursor Pricing Policy: https://cursor.com/terms/pricing
- Claude Pricing: https://claude.com/pricing
- Claude Team billing: https://support.anthropic.com/en/articles/9267289-how-is-my-team-plan-bill-calculated
- Claude extra usage: https://support.anthropic.com/en/articles/12005970-extra-usage-for-claude-for-work-team-and-enterprise-plans
