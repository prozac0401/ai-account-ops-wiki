# ChatGPT Business

> 상위 문서: [[../Home|AI 계정 운영]]
> 분류: ChatGPT / OpenAI / 팀 워크스페이스

[목차]

## 개요

ChatGPT Business는 조직이 함께 쓰는 ChatGPT 워크스페이스다.

예전 이름인 ChatGPT Team으로 부르는 경우가 아직 많다. 운영 문서에서는 둘을 혼동하지 않도록 “ChatGPT Business(구 Team)”처럼 적어도 된다.

## 무엇을 할 수 있나

- 수강생을 워크스페이스에 초대한다.
- 역할을 나눈다.
- 좌석을 관리한다.
- 사용 현황을 본다.
- 조직 데이터가 기본적으로 모델 학습에 쓰이지 않는 환경에서 ChatGPT를 사용한다.

OpenAI는 ChatGPT Business, Enterprise, Edu, API Platform의 입력·출력 데이터를 기본적으로 모델 학습에 사용하지 않는다고 설명한다.

## API와의 차이

ChatGPT Business와 OpenAI API는 별도다.

| 구분 | ChatGPT Business | OpenAI API Platform |
|---|---|---|
| 주 사용자 | 사람 | 애플리케이션, 개발자, 시스템 |
| 접근 방식 | ChatGPT 웹/앱 | API 키, API 작업 단위, 서비스 계정 |
| 과금 | 좌석 중심 | 사용량 중심 |
| 관리 단위 | Workspace | Organization / API 작업 단위 |
| 흔한 실수 | API도 포함된다고 생각 | API 키를 개인 계정으로 공유 |

ChatGPT Business 좌석을 샀다고 API 사용량이 포함되는 것은 아니다. API 사용량은 API Platform에서 별도로 청구된다.

## 역할

ChatGPT Business에는 역할과 좌석이 있다.

### 역할

| 역할 | 설명 |
|---|---|
| Owner | 결제, ID 관리, 워크스페이스 설정 등 전체 권한 |
| Admin | 사용자와 그룹 관리 등 일상 관리 작업 |
| Member | ChatGPT 사용, GPT 생성 가능. 관리자 권한 없음 |
| Analytics Viewer | 분석 확인용 제한 역할 |

교육 운영에서는 Owner를 최소화한다. 교육 담당자가 현장 문의를 맡더라도 Owner 권한까지 꼭 필요하지는 않다.

### 좌석

OpenAI 도움말 기준으로 ChatGPT Business는 표준 ChatGPT 좌석과 Codex 좌석을 구분한다.

| 좌석 | 용도 | 과금 방식 |
|---|---|---|
| Standard ChatGPT seat | ChatGPT 워크스페이스 사용 | 사용자당 월 고정 |
| Codex seat | Codex 중심 사용 | 사용량 기반 요소 |

표준 ChatGPT 좌석은 최소 2석 구매가 필요하다.

## 계정 초대 절차

기본 흐름은 다음과 같다.

```text
Workspace settings
→ Members
→ Invite members
→ 이메일 입력 또는 CSV(Comma-Separated Values) 업로드
→ 역할 선택
→ 좌석 유형 선택
→ 초대 발송
```

대량 교육에서는 CSV(Comma-Separated Values)를 쓰는 편이 편하다. 다만 파일을 올리기 전에 중복과 오타를 잡아야 한다.

## 수강생에게 안내할 점

- 반드시 교육 신청 때 제출한 이메일로 로그인한다.
- 개인 ChatGPT 화면과 Business 워크스페이스 화면을 구분한다.
- 워크스페이스 전환 메뉴를 확인한다.
- 실제 업무정보, 개인정보, 회사 기밀은 입력하지 않는다.
- 파일을 올릴 때도 같은 기준을 적용한다.
- 교육 종료 후 권한이 회수될 수 있다.

## 데이터 처리와 삭제

### 모델 학습

OpenAI는 business data를 기본적으로 모델 학습에 사용하지 않는다고 설명한다. 여기에는 ChatGPT Business와 API Platform의 입력·출력이 포함된다.

### 대화 삭제

OpenAI 도움말은 채팅을 삭제하면 계정 화면에서 즉시 제거되고, OpenAI 시스템에서 30일 내 영구 삭제 예정이라고 설명한다. 다만 보안 또는 법적 의무가 있으면 더 오래 보관될 수 있다.

### 계정 삭제

OpenAI 계정 삭제는 되돌릴 수 없고, 계정 삭제 시 데이터는 30일 내 삭제된다고 안내된다. 단, 법에서 허용하거나 요구하는 일부 데이터는 더 오래 보관될 수 있다.

### 멤버 제거와 계정 삭제의 차이

멤버 제거는 그 사용자를 워크스페이스에서 빼는 것이다. 사용자의 OpenAI 계정 자체를 삭제하는 것과 다르다.

교육 종료 후 “완전 삭제”를 원한다면 다음을 구분해야 한다.

- 워크스페이스 멤버 제거
- 좌석 수 조정
- 사용자가 직접 대화 삭제
- 사용자가 직접 계정 삭제
- 조직 차원의 데이터 보존 정책

## 교육 운영 시 주의할 점

### 좌석 돌려쓰기 주의

OpenAI 도움말은 초대 대상이 의도된 지속 멤버여야 하며 좌석 배정 오남용이 계정 비활성화 또는 정지로 이어질 수 있다고 안내한다.

교육 운영에서 단기간 계정을 여럿에게 돌려 쓰는 방식은 피한다. 꼭 임시 교육 방식이 필요하면 계약·약관·보안 검토를 먼저 남긴다.

### 결제 권한 주의

Owner는 결제와 설정에 접근한다. 수강생이나 일반 교육 담당자에게 Owner를 주지 않는다.

### 워크스페이스 혼동

사용자는 개인 ChatGPT와 Business 워크스페이스를 헷갈릴 수 있다. 안내문에 “왼쪽 하단 또는 프로필 메뉴에서 워크스페이스 이름 확인” 같은 문장을 넣는다.

## 자주 헷갈리는 점

### ChatGPT Business를 사면 OpenAI API도 쓸 수 있나?

아니다. ChatGPT Business와 API Platform은 별도다.

### 팀에서 사용자를 제거하면 이메일도 삭제되나?

일반적으로 멤버 제거와 계정 삭제는 다르다. 이메일 주소까지 OpenAI 시스템에서 삭제하려면 계정 삭제 절차와 정책을 별도로 봐야 한다.

### 수강생이 개인 Gmail로 들어와도 되나?

기술적으로 가능할 수 있다. 하지만 조직 SSO(Single Sign-On), DLP(Data Loss Prevention), 계정 회수 통제가 약해진다. 그래서 개인정보 동의와 수강생 안내를 더 분명히 해야 한다.

## 약어 각주

| 약어 | 전체 단어 | 설명 |
|---|---|---|
| CSV | Comma-Separated Values | 쉼표로 항목을 구분하는 표 형식 파일이다. 대량 초대 명단을 올릴 때 자주 쓴다. |
| SSO | Single Sign-On | 조직 계정 하나로 여러 서비스에 로그인하게 하는 인증 방식이다. |
| DLP | Data Loss Prevention | 민감정보가 외부로 나가지 않도록 탐지하거나 차단하는 보안 기능이다. |

## 출처

- ChatGPT Business 과금과 좌석: https://help.openai.com/en/articles/8792536-managing-billing-and-seats-in-chatgpt-business
- ChatGPT Business 멤버·역할: https://help.openai.com/en/articles/8542216-managing-members-seat-types-and-roles-in-chatgpt-business
- OpenAI Enterprise Privacy: https://openai.com/enterprise-privacy/
- OpenAI business data privacy: https://openai.com/business-data/
- OpenAI 계정 삭제: https://help.openai.com/en/articles/6378407-how-to-delete-your-account
- ChatGPT 채팅·파일 리텐션: https://help.openai.com/en/articles/8983778-chat-and-file-retention-policies-in-chatgpt
