# ChatGPT Business

> 상위 문서: [[Home|AI 계정 운영]]
> 분류: ChatGPT / OpenAI / 팀 워크스페이스
> 계정·권한 정책 공식 재확인: 2026-09-07 / 신규·legacy 및 단독·tenant 관리 범위 구분

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
| Analytics Viewer | 분석 조회용 제한 역할. 기본 ChatGPT 사용도 가능하며 무료 관리 좌석이라는 뜻은 아님 |

네 가지 역할 모두 좌석 유형과 별개다. Admin은 자신보다 낮은 역할의 멤버를 제거할 수 있지만 다른 Admin·Owner를 제거하지 못한다. 역할·좌석 변경과 가입 요청 최종 승인은 Owner가 맡는다. [역할별 권한(P25)](https://help.openai.com/en/articles/8542216-managing-members-seat-types-and-roles-in-chatgpt-business)

교육 운영에서는 Owner를 최소화한다. 교육 담당자가 현장 문의를 맡더라도 Owner 권한까지 꼭 필요하지는 않다.

### 좌석

2026-09-07 재확인한 현재 신규 좌석은 Standard와 Premium이다. 기존 Codex 좌석은 해당 legacy 워크스페이스의 조건을 별도로 확인한다. 과거 좌석 이름을 모든 신규 구매에 적용하지 않는다.

| 좌석 | 용도 | 과금 방식 |
|---|---|---|
| Standard | 기본 업무 사용 | 고정 구독과 허용된 크레딧 사용 구분 |
| Premium | 더 높은 사용량 | 고정 구독과 허용된 크레딧 사용 구분 |
| 기존 Codex 좌석 | 해당 legacy 조건 확인 | 현재 일반 좌석 전환 가능 여부를 가정하지 않음 |

현재 최소 2석은 Standard·Premium 혼합으로 충족할 수 있다. 가격·추가 구매·감소 시점은 [[billing/ChatGPT_OpenAI_API_과금|ChatGPT·Codex·API 비용 경로]]에서 확인한다. [현재 좌석(P26)](https://help.openai.com/en/articles/8792536-managing-billing-and-seats-in-chatgpt-business)

## 계정 초대 절차

기본 흐름은 다음과 같다. 역할·좌석 선택 가능 범위는 초대자의 권한에 따라 다르다.

```text
Workspace settings
→ Members
→ Invite members
→ 이메일 입력 또는 CSV(Comma-Separated Values) 업로드
→ 역할 선택
→ 좌석 유형 선택
→ 초대 발송
```

대량 교육에서는 CSV(Comma-Separated Values) <sup class="wiki-footnote-ref"><a class="wiki-footnote-link" id="abbr-ref-1" href="#abbr-note-1">[1]</a></sup>를 쓰는 편이 편하다. 다만 파일을 올리기 전에 중복과 오타를 잡아야 한다.

2026-09-07 공식 확인 기준 Member·Admin도 기본 좌석 유형의 Member 초대가 가능하다. Owner는 역할·좌석 유형과 좌석 구매를 관리한다. 초대 발송만으로 좌석을 구매·예약하지 않으며 수락 시 수용량을 확인한다. 가입 요청은 Owner의 배정·구매·승인과 구분한다. [초대·수락(P25)](https://help.openai.com/en/articles/8542216-managing-members-seat-types-and-roles-in-chatgpt-business)

운영 제안으로 초대 발송, pending, 수락, 실제 워크스페이스 접근, 구매 좌석·청구 변화를 별도 기록한다. C03의 과거 초대 비용 질문은 당시 계약과 청구 원문이 없어 현행 정책만으로 소급 확정하지 않는다(U09).

현재 Business의 멤버 초대 기능 자체는 제한할 수 없다. 워크스페이스 검색 노출은 기본 ON이지만 자동 가입 승인과는 별도다. 종료 시 pending 초대·가입 요청·자동 가입 설정을 확인한다. 신규 워크스페이스는 Standard·Premium 합계 최대 200석이며 2026-08-24 이전 생성 워크스페이스는 이전 상한을 유지한다. [가입 경로·상한(P25)](https://help.openai.com/en/articles/8542216-managing-members-seat-types-and-roles-in-chatgpt-business)

## SSO와 개인 공간

Business는 SAML·OIDC SSO와 도메인 검증을 제공한다. 단독 Business에는 SCIM·동기화 그룹·자동 디렉터리 프로비저닝이 포함되지 않는다. 검증 도메인 로그인 후 자동 계정 생성 옵션은 SCIM과 다르며, 제거된 멤버십을 자동 복구하지 않는다. SSO 성공과 워크스페이스 초대·가용 좌석도 별도 확인한다. [SSO 범위(P37)](https://help.openai.com/en/articles/11489188)

설정이 읽기 전용이거나 Cloud Console로 연결되면 tenant의 global admin이 기존 공유 연결을 관리한다. 별도 SSO 연결을 중복 생성하지 않는다. 계정 관리자는 기존 계정과 동일한 이메일, 검증 도메인, IdP 배정, 멤버십을 점검하고 유일한 Owner가 떠나기 전에 인계를 끝낸다. 실제 절차는 승인된 운영 계획으로 수행한다. [관리 범위(P37)](https://help.openai.com/en/articles/11489188)

교육에서는 개인 워크스페이스와 Business를 분리해 유지하는 방식을 제안한다. 개인 공간 병합은 되돌릴 수 없고, Business를 떠나면 그 공간의 데이터에 접근하지 못한다. Business에는 데이터 내보내기가 제공되지 않으므로 종료 직전에 전체 export가 가능하다고 약속하지 않는다. 개인 구독을 따로 유지하면 구독도 계속되며 모바일 구독의 취소 경로는 별도다. [병합·이탈(P38)](https://help.openai.com/en/articles/8801890)

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

Library가 제공되는 계정·워크스페이스에서는 저장 파일과 채팅을 별도 관리한다. 채팅을 삭제해도 Library 파일은 삭제되지 않는다. GPT·프로젝트 첨부도 해당 GPT·프로젝트의 수명과 연결되므로 [[compliance/데이터_리텐션_삭제|종료 점검]]에서 따로 확인한다. [채팅·파일 보존(P36)](https://help.openai.com/en/articles/8983778-chat-and-file-retention-policies-in-chatgpt)

### 계정 삭제

OpenAI 계정 삭제는 되돌릴 수 없고, 계정 삭제 시 데이터는 30일 내 삭제된다고 안내된다. 단, 법에서 허용하거나 요구하는 일부 데이터는 더 오래 보관될 수 있다.

현재 Business 등 관리형 워크스페이스에는 셀프서비스 계정 삭제가 제공되지 않는다. 조직 담당자에게 요청하며 개인 계정의 삭제 메뉴와 혼동하지 않는다. 삭제가 같은 계정의 API 접근에도 영향을 준다는 점과 모바일 구독의 별도 취소 여부를 확인한다. [계정 삭제(P49)](https://help.openai.com/en/articles/6378407-how-to-delete-your-account)

### 멤버 제거와 계정 삭제의 차이

멤버 제거는 그 사용자를 워크스페이스에서 빼는 것이다. 사용자의 OpenAI 계정 자체를 삭제하는 것과 다르다.

접근은 즉시 종료되지만 구매 좌석 수는 자동으로 줄지 않는다. Owner가 Manage seats에서 감소를 예약하고 다음 갱신의 청구 수량을 확인한다. [좌석 회수(P26)](https://help.openai.com/en/articles/8792536-managing-billing-and-seats-in-chatgpt-business)

교육 종료 후 “완전 삭제”를 원한다면 다음을 구분해야 한다.

- 워크스페이스 멤버 제거
- 좌석 수 조정
- 사용자가 직접 대화 삭제
- 개인 계정 삭제 또는 관리형 계정의 조직 요청
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

외부 도메인 초대 허용과 멤버십을 확인한다. SSO(Single Sign-On) <sup class="wiki-footnote-ref"><a class="wiki-footnote-link" id="abbr-ref-2" href="#abbr-note-2">[2]</a></sup> 의무는 해당 로그인 정책의 도메인에 적용되므로 외부 도메인 사용자는 다른 허용 방식으로 로그인할 수 있다. 이를 조직 관리 계정과 동일한 통제로 보지 않는다. DLP(Data Loss Prevention) <sup class="wiki-footnote-ref"><a class="wiki-footnote-link" id="abbr-ref-3" href="#abbr-note-3">[3]</a></sup> 등 추가 기능은 해당 플랜·계약의 제공 여부를 따로 확인한다. [외부 도메인(P37)](https://help.openai.com/en/articles/11489188)

## 출처

- ChatGPT Business 과금과 좌석: https://help.openai.com/en/articles/8792536-managing-billing-and-seats-in-chatgpt-business
- ChatGPT Business 멤버·역할: https://help.openai.com/en/articles/8542216-managing-members-seat-types-and-roles-in-chatgpt-business
- OpenAI Enterprise Privacy: https://openai.com/enterprise-privacy/
- OpenAI business data privacy: https://openai.com/business-data/
- OpenAI 계정 삭제: https://help.openai.com/en/articles/6378407-how-to-delete-your-account
- ChatGPT 채팅·파일 리텐션: https://help.openai.com/en/articles/8983778-chat-and-file-retention-policies-in-chatgpt

<div class="wiki-footnotes">
<p class="wiki-footnote" id="abbr-note-1"><a class="wiki-footnote-link" href="#abbr-ref-1">[1]</a> CSV(Comma-Separated Values): 쉼표로 항목을 구분하는 표 형식 파일이다. 대량 초대 명단을 올릴 때 자주 쓴다.</p>
<p class="wiki-footnote" id="abbr-note-2"><a class="wiki-footnote-link" href="#abbr-ref-2">[2]</a> SSO(Single Sign-On): 조직 계정 하나로 여러 서비스에 로그인하게 하는 인증 방식이다.</p>
<p class="wiki-footnote" id="abbr-note-3"><a class="wiki-footnote-link" href="#abbr-ref-3">[3]</a> DLP(Data Loss Prevention): 민감정보가 외부로 나가지 않도록 탐지하거나 차단하는 보안 기능이다.</p>
</div>
