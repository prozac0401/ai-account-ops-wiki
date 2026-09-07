# ChatGPT·OpenAI API 과금

> 상위 문서: [[Home|AI 계정 운영]]
> 분류: OpenAI / 과금 / 좌석 / API 사용량

[목차]

## 개요

ChatGPT Business 과금과 OpenAI API 과금은 별도다.

ChatGPT Business는 좌석 중심이다. OpenAI API는 사용량 중심이다. 둘을 같은 예산 항목으로 묶으면 나중에 비용 설명이 어려워진다.

## ChatGPT Business 좌석 과금

2026-09-07 공식 재확인 기준 현재 ChatGPT Business는 Standard·Premium 합계 최소 2석이다. 기존 계약과 legacy Codex 좌석은 따로 확인한다(U09). [좌석·청구(P26)](https://help.openai.com/en/articles/8792536-managing-billing-and-seats-in-chatgpt-business)

### 실제 부과 비용

현재 도움말의 USD 단가는 다음과 같다. 연 결제의 월 환산액과 실제 연간 청구액을 구분하고 세금·지역·계약 조건을 구매 화면에서 확인한다.

| 결제 방식 | 단가 | 비고 |
|---|---:|---|
| Standard 월간 | $25/user/month | 현재 일반 좌석 |
| Standard 연간 | $20/user/month | 연간 청구 |
| Premium 월간 | $125/user/month | 현재 일반 좌석 |
| Premium 연간 | $100/user/month | 연간 청구 |

예를 들어 52석을 월간 플랜으로 운영하면 `52 x $25 = $1,300/month` 수준이다. 연간 플랜으로 잡으면 `52 x $20 x 12 = $12,480/year` 수준이다.

```text
52명 monthly: 52 seats x $25 = $1,300/month
52명 annual: 52 seats x $20 x 12 = $12,480/year
```

### 결제 방식

Self-serve ChatGPT Business는 신용카드와 체크카드 결제를 지원한다. 인보이스, 은행 송금, wire, ACH(Automated Clearing House) <sup class="wiki-footnote-ref"><a class="wiki-footnote-link" id="abbr-ref-1" href="#abbr-note-1">[1]</a></sup>, PO(Purchase Order) <sup class="wiki-footnote-ref"><a class="wiki-footnote-link" id="abbr-ref-2" href="#abbr-note-2">[2]</a></sup>, net terms, split payments는 self-serve Business에서 제공되지 않으며, 인보이스가 필요하면 Enterprise 또는 Education 같은 계약 플랜을 영업팀에 문의해야 한다고 안내된다.

### 운영상 의미

- 소규모 교육은 카드로 빠르게 시작할 수 있다.
- 청구서 PDF 증빙과 invoice/PO 후불 결제 계약은 다르다. 결제 방식이 맞는지 따로 확인한다.
- 월간 플랜은 좌석 추가분을 일할 계산하고, 좌석 감소는 다음 월 과금 주기에 반영한다.
- 현재 추가 좌석 구매는 즉시 일할 청구되며 연간 좌석 약정은 현재 계약 기간에 유지된다. 과거 월별 true-up 사례와 구분한다.
- 좌석을 줄였다고 이미 결제된 연간 비용이 바로 줄어든다고 보면 안 된다.

### 사용자 추가·제거 과금

현재는 Owner의 **구매 좌석 수**와 멤버 배정을 구분한다. 이미 산 빈 좌석 배정에는 추가 구매비가 없고, 새 좌석 구매는 남은 기간을 즉시 일할 청구한다. 감소는 월간이면 다음 월 갱신, 연간이면 다음 연간 갱신에 적용한다. [구매·감소(P26)](https://help.openai.com/en/articles/8792536-managing-billing-and-seats-in-chatgpt-business)

```text
월간 플랜 예시
1일차: 10 seats x $25 = $250
10일차: 3 seats 추가
추가분: 3 seats x $25 x 20/30 = $50
사용월 귀속 비용: $250 + $50 = $300
다음 주기 기본료: 13 x $25 = $325
조건부 합산 청구: 미청구 조정 $50 + 다음 기본료 $325 = $375
현재 즉시 청구로 $50을 이미 냈다면 다음 기본료는 $325이며 재합산하지 않는다.
```

아래는 **2026-04-25 문서에 남은 과거 연간 true-up 계산 사례**다. 당시 설명의 월별 정산·추가량 트리거를 현행 신규 플랜 규칙으로 쓰지 않는다. 현재는 추가 좌석 즉시 청구를 확인하고, 실제 legacy 적용은 계약 원문이 필요하다(U09).

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

| 비용 경로 | 확인할 것 |
|---|---|
| ChatGPT 구독 좌석 | Standard·Premium 또는 실제 legacy 계약, 구매·배정 수 |
| 워크스페이스 크레딧 | 해당 플랜에서 허용하는 ChatGPT·Codex 등의 추가 사용, 잔량·사용 통제 |
| API 키 사용 | API 조직·프로젝트에 별도 청구, 앱 로그인 구독으로 대체되지 않음 |

같은 Codex 화면이라도 인증·결제 경로를 확인한다. 크레딧은 적용 가능한 워크스페이스 기능 범위에서 쓰며 API 키 호출을 구독에 포함된 사용량으로 처리하지 않는다. [크레딧·결제 경로(P14)](https://learn.chatgpt.com/docs/pricing)

## OpenAI API 사용량 과금

API는 API 작업 단위별 사용량, 예산, rate limit 관리가 핵심이다.

OpenAI API는 좌석이 아니라 모델별 사용량 과금이다. 아래 GPT-5.2 단가는 2026-04-25 기록의 **산식 예시**이며 현행 견적이 아니다. 2026-09-07 재조회한 가격표 본문에서는 해당 모델 행을 확인하지 못했으므로 최신 단가로 다시 인증하지 않는다. 모델·처리 유형·컨텍스트 조건을 실습 직전 대조한다. [API 가격(P30)](https://developers.openai.com/api/docs/pricing)

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

알림과 강제 차단은 다르다. 2026-09-07 공식 문서는 조직·프로젝트의 spend alert는 알림만 보내고, 별도로 활성화한 hard spend limit는 한도 도달 시 해당 API 요청을 429로 차단한다고 설명한다. 추적 지연으로 초과가 발생할 수 있다. 설정 절차와 오류 구분은 [[services/OpenAI_API|API 예산과 사용량 제한]]에서 확인한다. [Spend limits(P17)](https://developers.openai.com/api/docs/guides/spend-limits)

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

<div class="wiki-footnotes">
<p class="wiki-footnote" id="abbr-note-1"><a class="wiki-footnote-link" href="#abbr-ref-1">[1]</a> ACH(Automated Clearing House): 미국 은행 계좌 기반 이체망이다. 카드 외 결제수단 예시로 등장할 수 있다.</p>
<p class="wiki-footnote" id="abbr-note-2"><a class="wiki-footnote-link" href="#abbr-ref-2">[2]</a> PO(Purchase Order): 구매 주문서다. 기업 구매 절차에서 인보이스 결제와 함께 등장한다.</p>
</div>
