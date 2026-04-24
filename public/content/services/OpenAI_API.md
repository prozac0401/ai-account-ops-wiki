# OpenAI API Platform

> 상위 문서: [[../Home|AI 계정 운영]]
> 분류: OpenAI API / 프로젝트 / API 키

[목차]

## 개요

OpenAI API Platform은 개발자나 시스템이 모델을 호출하기 위한 환경이다.

ChatGPT Business가 “사람이 웹에서 쓰는 워크스페이스”라면, OpenAI API는 “시스템이 키를 들고 호출하는 통로”다. 둘은 같은 회사의 제품이지만 운영 방식과 과금 방식이 다르다.

## 핵심 구조

```text
Organization
├─ Owner / Reader
├─ Billing / Usage limits
└─ Project
   ├─ Project Owner / Member
   ├─ Service Account
   ├─ API Key
   ├─ Model usage limits
   └─ Monthly budget
```

## Organization

조직은 API Platform의 최상위 단위다.

OpenAI 도움말에 따르면 조직 Owner는 조직과 멤버를 관리하고, 결제와 rate limit를 보고 변경할 수 있다. Reader는 조직 이름으로 API를 사용할 수 있지만 결제와 rate limit를 변경하거나 Owner를 초대할 수 없다.

## Project

프로젝트는 API 사용을 나누기 위한 단위다.

프로젝트를 쓰면 다음을 분리할 수 있다.

- 교육용 프로젝트
- 실험용 프로젝트
- 운영 서비스용 프로젝트
- 특정 강의 또는 팀별 프로젝트

OpenAI API 문서에 따르면 프로젝트는 접근 권한, 한도, 서비스 계정, 사용량 추적, 예산 설정을 프로젝트 범위에서 관리하기 위한 구조다.

## 역할

| 역할 | 범위 | 할 수 있는 일 |
|---|---|---|
| Organization Owner | 조직 전체 | 프로젝트 생성, 사용자/키/예산 관리, 모든 프로젝트 확인 |
| Organization Reader | 조직 | 본인이 속한 프로젝트에서 API 사용, 일부 키 생성 |
| Project Owner | 프로젝트 | 프로젝트 설정, 예산, 멤버 관리 |
| Project Member | 프로젝트 | API 호출, 리소스 사용, 키 생성 |
| Service Account | 프로젝트 | 시스템용 pseudo-user. 프로젝트 단위 자동화에 사용 |

교육생에게 Organization Owner를 주는 일은 거의 없다. 대부분은 Project Member도 과한 경우가 있다. 실습 목적이라면 공용 샘플 앱 또는 제한된 키를 쓰는 편이 낫다.

## API 키 운영 원칙

### 개인 키 공유 금지

API 키는 비밀번호와 비슷하게 본다. 개인 키를 단톡방에 올리거나 교육생 전체에게 공유하면 안 된다.

### 프로젝트별 키 사용

교육용 프로젝트를 따로 만들고, 그 프로젝트 안에서 키를 발급한다.

### 권한 제한

OpenAI API 키는 권한 수준을 설정할 수 있다. 가능한 경우 기본 All 권한 대신 Restricted 또는 Read Only를 검토한다.

### 키 회수

교육 종료 후에는 키를 삭제한다. 멤버 제거만으로 모든 키가 정리된다고 가정하지 않는다.

## 서비스 계정

서비스 계정은 사람 계정이 아니라 시스템용 계정이다.

예를 들어 다음 경우에 쓴다.

- 교육용 대시보드가 API를 호출할 때
- 실습 서버가 대신 모델을 호출할 때
- 개인 개발자 키 대신 중앙 키를 쓸 때

서비스 계정을 만들면 시크릿 키가 생성된다. OpenAI 도움말은 시크릿 키가 다시 표시되지 않으므로 안전한 곳에 저장하라고 안내한다. 잃어버리면 새로 만들어야 한다.

## 예산과 사용량 제한

API는 사용량 기반이므로 예산 통제가 중요하다.

운영자가 해야 할 일은 다음과 같다.

- 프로젝트별 월 예산 설정
- 알림 기준 설정
- 모델별 사용 가능 여부 제한
- rate limit 확인
- 교육 종료 후 프로젝트 보관 또는 키 삭제

## 교육용 API 운영 예시

### 권장 구조

```text
Organization: 회사/교육기관
└─ Project: 2026_AI_Education_Batch_01
   ├─ Service Account: edu-demo-server
   ├─ API Key: server-side only
   ├─ Budget: 월 한도 설정
   └─ Members: 운영자 1~2명만
```

교육생에게 직접 API 키를 주기보다 실습 서버나 예제 환경을 통해 호출하게 하는 편이 안전하다.

### 직접 키 발급이 필요한 경우

교육생이 직접 API를 호출해야 하는 과정이라면 다음을 적용한다.

- 키 발급자 명단 저장
- 프로젝트 예산 낮게 설정
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

### API 키를 교육생에게 나눠 줘도 되나?

가능은 하지만 위험하다. 키는 복사되기 쉽고, GitHub에 올라가기 쉽고, 비용 폭주가 생기기 쉽다. 실습 서버나 제한 프로젝트를 권장한다.

### 프로젝트를 삭제하면 비용이 멈추나?

프로젝트 보관·삭제, 키 삭제, 사용량 청구는 구분해서 봐야 한다. 교육 종료 후에는 키와 서비스 계정을 먼저 정리한다.

### Organization Owner를 여러 명 둬야 하나?

최소 2명은 두는 편이 안전하다. 단, 너무 많이 두면 결제와 권한 변경 위험이 커진다.

## 출처

- OpenAI API 프로젝트 관리: https://help.openai.com/ko-kr/articles/9186755-api-%ED%94%8C%EB%9E%AB%ED%8F%BC%EC%97%90%EC%84%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0
- OpenAI API 조직 멤버 역할: https://help.openai.com/en/articles/4936812-how-do-i-add-change-or-remove-members-on-my-openai-api-account
- OpenAI business data privacy: https://openai.com/business-data/
