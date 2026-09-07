# OpenAI API Platform

> 상위 문서: [[Home|AI 계정 운영]]
> 분류: OpenAI API / API 작업 단위 / API 키
> 권한·지출·데이터 정책 공식 재확인: 2026-09-07

[목차]

## 개요

OpenAI API Platform은 개발자나 시스템이 모델을 호출하기 위한 환경이다.

ChatGPT Business가 “사람이 웹에서 쓰는 워크스페이스”라면, OpenAI API는 “시스템이 키를 들고 호출하는 통로”다. 둘은 같은 회사의 제품이지만 운영 방식과 과금 방식이 다르다.

## 핵심 구조

```text
Organization
├─ Owner / Reader / 조직 사용자 정의 역할·그룹
├─ Billing / Usage limits
└─ API 작업 단위
   ├─ API 작업 단위 Owner / Member / Viewer / 사용자 정의 역할
   ├─ Service Account
   ├─ API Key
   ├─ Model usage limits
   └─ Spend alert / Hard spend limit
```

## Organization

조직은 API Platform의 최상위 단위다.

OpenAI 도움말에 따르면 조직 Owner는 조직과 멤버를 관리하고, 결제와 rate limit를 보고 변경할 수 있다. Reader는 조직 이름으로 API를 사용할 수 있지만 결제와 rate limit를 변경하거나 Owner를 초대할 수 없다.

## API 작업 단위

API 작업 단위는 API 사용을 나누기 위한 단위다.

API 작업 단위를 쓰면 다음을 분리할 수 있다.

- 교육용 API 작업 단위
- 실험용 API 작업 단위
- 운영 서비스용 API 작업 단위
- 특정 강의 또는 팀별 API 작업 단위

OpenAI API 문서에 따르면 API 작업 단위는 접근 권한, 한도, 서비스 계정, 사용량 추적, 예산 설정을 API 작업 단위 범위에서 관리하기 위한 구조다.

## 역할

| 역할 | 범위 | 할 수 있는 일 |
|---|---|---|
| Organization Owner | 조직 전체 | API 작업 단위 생성, 사용자/키/예산 관리, 모든 API 작업 단위 확인 |
| Organization Reader | 조직 | 본인이 속한 API 작업 단위에서 API 사용, 일부 키 생성 |
| API 작업 단위 Owner | API 작업 단위 | 설정, 예산, 멤버 관리 |
| API 작업 단위 Member | API 작업 단위 | API 호출, 리소스 사용, 키 생성 |
| API 작업 단위 Viewer | API 작업 단위 | 허용된 리소스 조회 중심. 기본 모델 호출 권한과 구분 |
| 사용자 정의 역할 | 조직 또는 API 작업 단위 | 허용 작업을 선택하고 사용자·그룹에 배정 |
| Service Account | API 작업 단위 | 시스템용 pseudo-user. 자동화에 사용 |

위 표는 기본 역할의 요약이다. 현재 RBAC는 조직·프로젝트의 사용자 정의 역할과 그룹 배정을 지원하며, 여러 역할의 권한은 **합집합**으로 적용된다. 한 역할을 줄여도 다른 직접·그룹 배정에서 권한이 남을 수 있다. Owner/Reader 두 이름만으로 실제 권한을 확정하지 않는다. [현재 권한 체계(P39)](https://developers.openai.com/api/docs/guides/rbac)

수강생에게 Organization Owner를 주는 일은 거의 없다. 대부분은 API 작업 단위 Member도 과한 경우가 있다. 실습 목적이라면 공용 샘플 앱 또는 제한된 키를 쓰는 편이 낫다.

## API 키 운영 원칙

### 개인 키 공유 금지

API 키는 비밀번호와 비슷하게 본다. 개인 키를 단톡방에 올리거나 수강생 전체에게 공유하면 안 된다.

### API 작업 단위별 키 사용

교육용 API 작업 단위를 따로 만들고, 그 API 작업 단위 안에서 키를 발급한다.

### 권한 제한

OpenAI API 키는 권한 수준을 설정할 수 있다. 가능한 경우 기본 All 권한 대신 Restricted 또는 Read Only를 검토한다.

### 키 회수

교육 종료 후에는 키를 삭제한다. 멤버 제거만으로 모든 키가 정리된다고 가정하지 않는다.

운영 제안으로 사용자 직접 역할, 그룹 상속, 서비스 계정·키, 남은 파일·저장 리소스를 각각 대조한다. 보존해야 할 자료를 먼저 인계하고 삭제 결과를 남긴다. 계정 관리자는 실제 허용·거부 결과를 검수하며, 단순히 메뉴가 사라진 것을 모든 API 접근 회수의 증거로 쓰지 않는다.

## 서비스 계정

서비스 계정은 사람 계정이 아니라 시스템용 계정이다.

예를 들어 다음 경우에 쓴다.

- 교육용 대시보드가 API를 호출할 때
- 실습 서버가 대신 모델을 호출할 때
- 개인 개발자 키 대신 중앙 키를 쓸 때

서비스 계정을 만들면 시크릿 키가 생성된다. OpenAI 도움말은 시크릿 키가 다시 표시되지 않으므로 안전한 곳에 저장하라고 안내한다. 잃어버리면 새로 만들어야 한다.

## 예산과 사용량 제한

API는 사용량 기반이므로 예산 통제가 중요하다.

**공식 확인일: 2026-09-07.** 알림용 spend alert와 강제 차단용 hard spend limit를 구분한다. 조직·프로젝트의 `Limits → Spend → Edit spend limit`에서 월 한도와 `Enforce a hard limit` 적용 여부를 확인한다. 조직 한도는 전체 프로젝트에, 프로젝트 한도는 해당 범위에 적용한다. 반영 지연 가능성이 있으므로 1원도 초과하지 않는 보장으로 설명하지 않는다. [설정·오류(P17)](https://developers.openai.com/api/docs/guides/spend-limits)

| 제한·오류 | 담당자의 판단 |
|---|---|
| Spend alert | 알림만 발송, 요청은 계속될 수 있음 |
| `organization_spend_limit_exceeded` / `project_spend_limit_exceeded` | 관리자가 설정한 지출 한도 차단, 자동으로 예산을 올리지 않음 |
| `organization_usage_limit_exceeded` | 공급자가 승인한 조직 사용 한도·usage tier 확인 |
| `credit_balance_exhausted` | 선불 잔액 확인, 구독 좌석 잔량과 혼동하지 않음 |
| 요청·토큰 rate limit | 단위 시간 요청량 제한, 지출 한도와 별도 |

운영 제안으로 계정 관리자가 교육 전 실제 적용값·프로젝트·키를 확인하고 결제 담당자가 예산을 승인한다. 429를 모두 일시 장애로 보고 반복 호출하지 않는다. 종료 후 키 폐기와 최종 지출을 함께 기록한다.

운영자가 해야 할 일은 다음과 같다.

- API 작업 단위별 월 예산 설정
- 알림 기준 설정
- 모델별 사용 가능 여부 제한
- rate limit 확인
- 교육 종료 후 API 작업 단위 보관 또는 키 삭제

## 교육용 API 운영 예시

### 권장 구조

```text
Organization: 회사/교육기관
└─ API 작업 단위: 2026_AI_Education_Batch_01
   ├─ Service Account: edu-demo-server
   ├─ API Key: server-side only
   ├─ Budget: 월 한도 설정
   └─ Members: 운영자 1~2명만
```

수강생에게 직접 API 키를 주기보다 실습 서버나 예제 환경을 통해 호출하게 하는 편이 안전하다.

### 직접 키 발급이 필요한 경우

수강생이 직접 API를 호출해야 하는 과정이라면 다음을 적용한다.

- 키 발급자 명단 저장
- API 작업 단위 예산 낮게 설정
- 교육 종료 시 키 삭제
- 키를 GitHub에 올리지 않도록 안내
- `.env` 사용법 안내
- 노출 사고 시 즉시 키 revoke

## ChatGPT Business와 같이 쓸 때

ChatGPT Business는 프롬프트 실습에 좋다. OpenAI API는 개발 실습에 좋다.

두 서비스를 함께 쓰면 다음 구분을 안내한다.

| 질문 | 답 |
|---|---|
| ChatGPT에서 쓴 대화가 API 사용량으로 청구되나? | 아니다 |
| API 키가 있으면 ChatGPT Business에 들어갈 수 있나? | 아니다 |
| ChatGPT Business 좌석이 있으면 API가 무료인가? | 아니다 |
| 둘 다 모델 학습 제외 기본 정책에 들어가나? | OpenAI business data 기준으로는 기본적으로 학습 제외로 안내된다 |

## 자주 헷갈리는 점

### 교육용 앱 계획은 운영 서비스인가?

F21의 OT 앱은 PPT·PDF 기반 음성 질의, Responses·Realtime, 환경 변수·Credential Manager의 키 보관을 다룬 **설계 자료**다. C21의 WordEvaluator도 실제 배포·비용 증거가 없다(U14). 채택 전에 앱별 데이터 입력 범위, 보관·삭제, 키 소유자, 비용 부담 조직·프로젝트, 호출 한도, 장애 담당자, 키 회수 결과를 [[templates/계정_운영_기록|운영 대장]]에 정한다. 소스·사용량 로그 없이 구현·운영 성공으로 기록하지 않는다.

키는 코드·공개 저장소에 넣지 않고 환경 변수나 비밀관리 수단으로 전달한다. [키 보관(P16)](https://developers.openai.com/api/docs/guides/production-best-practices)

### API 키를 수강생에게 나눠 줘도 되나?

가능은 하지만 위험하다. 키는 복사되기 쉽고, GitHub에 올라가기 쉽고, 비용 폭주가 생기기 쉽다. 실습 서버나 제한 API 작업 단위를 권장한다.

### API 작업 단위를 삭제하면 비용이 멈추나?

현재 공식 도움말은 프로젝트 삭제를 지원하지 않고 보관(archive)하며, 보관 후 복구할 수 없다고 안내한다. 필요한 리소스 삭제·인계를 먼저 확인한다. [프로젝트 관리(P50)](https://help.openai.com/en/articles/9186755-managing-your-work-in-the-api-platform-with-projects)

프로젝트 보관, 키 폐기, 저장 리소스 삭제, 이미 발생한 사용량 청구는 별개다. 키를 폐기해도 파일·벡터 저장소 등이 자동 삭제된다고 가정하지 않는다. [[compliance/데이터_리텐션_삭제|API 데이터별 보존]]을 확인하고 최종 비용과 삭제 증거를 함께 기록한다.

### Organization Owner를 여러 명 둬야 하나?

최소 2명은 두는 편이 안전하다. 단, 너무 많이 두면 결제와 권한 변경 위험이 커진다.

## 출처

- OpenAI API 작업 단위 관리: https://help.openai.com/ko-kr/articles/9186755-api-%ED%94%8C%EB%9E%AB%ED%8F%BC%EC%97%90%EC%84%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0
- OpenAI API 조직 멤버 역할: https://help.openai.com/en/articles/4936812-how-do-i-add-change-or-remove-members-on-my-openai-api-account
- OpenAI business data privacy: https://openai.com/business-data/
