# Claude Team / Enterprise

> 상위 문서: [[Home|AI 계정 운영]]
> 분류: Claude / Anthropic / 부록
> 계정·좌석·데이터 정책 공식 재확인: 2026-09-07

[목차]

## 개요

현재 공식 조직용 플랜 이름은 Team과 Enterprise다. 과거 대화의 "Claude Business"는 이 위키에서 조직용 서비스를 가리킨 표현이며 현재 공식 플랜 이름으로 쓰지 않는다. [공식 가격(P29)](https://claude.com/pricing)

이 위키의 중심 서비스는 Google Workspace, ChatGPT, Cursor, OpenAI API 쪽이지만, 이전 질의응답에서 Claude Business Plan도 함께 검토되었으므로 부록처럼 정리한다.

## 왜 함께 다루나

운영 이슈가 ChatGPT Business와 비슷하다.

- 팀 워크스페이스가 있다.
- Owner 또는 Primary Owner가 있다.
- 조직 데이터와 사용자 데이터의 소유·관리 문제가 있다.
- 삭제와 보존 정책을 이해해야 한다.
- 국외 이전 고지와 보안 증빙이 필요할 수 있다.

## Primary Owner의 의미

기본 역할은 User, Admin, Owner, Primary Owner다. Primary Owner는 조직당 한 명이며 유료 라이선스를 사용한다. Cursor의 Unpaid Admin처럼 무료 관리 좌석이라고 가정하지 않는다. Enterprise의 Custom 역할은 그룹에 배정된 권한을 확인한다. [역할(P43)](https://support.claude.com/en/articles/9267276-roles-and-permissions)

Anthropic 도움말에 따르면 조직의 Primary Owner는 Work account와 관련 데이터를 관리한다. 데이터 export를 요청할 수 있고, export에는 사용자의 Claude 대화, 업로드 파일, 사용 패턴이 포함될 수 있다.

수강생에게 이 점은 분명히 알려야 한다.

> “조직용 Claude 계정에서 만든 대화와 파일은 개인 공간이 아니라 조직 관리 대상이 될 수 있습니다.”

## 멤버 제거와 데이터

Anthropic 도움말에 따르면 사용자가 Team 또는 Enterprise 조직에서 제거되면 남은 멤버는 그 사용자의 chats에 접근할 수 없다. 그러나 제거된 사용자의 데이터는 Primary Owner가 실행하는 data export에 포함될 수 있다고 안내된다.

즉, 멤버 제거는 완전 삭제가 아니다.

회수 전에 프로젝트를 인계한다. 비공개 프로젝트는 다른 멤버가 접근하지 못하지만, 공유 프로젝트는 기존 공유 범위·권한에 따라 남는다. 채팅 공유 스냅샷은 작성자 제거 후 접근되지 않을 수 있다. 제거 사용자의 데이터는 Primary Owner export와 Enterprise 보존 설정의 대상이며, 개인이 올린 skills도 제거만으로 삭제되지 않는다. [리소스별 회수 영향(P45)](https://support.claude.com/en/articles/12053672-what-happens-to-a-user-s-data-when-they-are-removed-from-a-team-or-enterprise-organization)

## 데이터 보존

Anthropic의 조직 데이터 보존 문서에 따르면 API 입력·출력은 기본적으로 수신 또는 생성 후 30일 내 백엔드에서 자동 삭제된다. 다만 더 긴 보존이 필요한 서비스, 별도 합의, 사용 정책 집행, 법적 준수 등 예외가 있다.

Claude for Work 제품 안의 채팅과 코딩 세션은 제품 경험 유지를 위해 보관될 수 있으며, 사용자가 삭제하면 화면에서 제거되고 백엔드에서도 30일 내 삭제되는 구조로 설명된다.

Enterprise custom retention의 최소 30일 기준은 이번에도 공식 확인했다. 미설정 시 계속 보관하며, 기간을 줄여 저장하면 새 기준을 넘긴 데이터가 즉시 삭제된다. 기간 변경 전에 인계·보존 의무를 검토한다. [보존 설정(P46)](https://support.claude.com/en/articles/10440198-configure-custom-data-retention-controls-for-enterprise-plans)

Covered Models의 안전 검토와 이용 정책 위반에는 장기 보존 예외가 있다. "모든 데이터는 30일이면 삭제"라고 안내하지 않고 [[compliance/데이터_리텐션_삭제|예외와 종료 점검]]을 함께 읽는다. [조직 데이터 정책(P44)](https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data)

## 교육 운영 시 주의

- Primary Owner를 누구로 할지 정한다.
- Owner를 최소 인원으로 둔다.
- 수강생에게 조직 데이터 export 가능성을 알린다.
- 삭제 요청과 멤버 제거를 구분한다.
- Google Workspace connectors 같은 외부 연결 기능은 별도 고지와 보안 검토를 한다.

## ChatGPT와 비교

| 항목 | ChatGPT Business | Claude Team/Enterprise |
|---|---|---|
| 조직 관리자 | Owner/Admin | Primary Owner/Owner |
| 멤버 제거 | 계정 삭제와 별개 | remaining members 접근 차단, export에는 포함 가능 |
| 데이터 보존 | 삭제 시 30일 내 삭제 예정, 예외 가능 | 삭제 시 30일 내 백엔드 삭제, 예외 가능 |
| API와의 관계 | ChatGPT와 API 별도 | Claude.ai와 Anthropic API 별도 |

## 좌석·모델 운영

멤버 제거와 구매 좌석 감소는 다르다. 기존 설명을 [[billing/Claude_과금|Claude 좌석 감소·갱신 절차]]와 연결해 비용 회수까지 확인한다.

최신 Team 좌석 관리 문서는 Owner·Primary Owner의 구매와 Admin 이상의 좌석 유형 재배정을 안내한다. 다만 2026-06-18 역할표는 신규 좌석 공급을 Primary Owner만 가능한 것으로 표시해 서로 다르다. 실제 계정의 구매 권한·화면을 확인하기 전 어느 범위도 보편 규칙으로 단정하지 않는다(U19). [상세 좌석 절차(P22)](https://support.claude.com/en/articles/12004354-purchase-and-manage-seats-on-team-plans), [역할표(P43)](https://support.claude.com/en/articles/9267276-roles-and-permissions)

2026-09-07 공식 확인 기준 Fable 5·5.1 대화에서는 플래그된 메시지 처리에 모델 전환이 적용될 수 있다. 선택한 기본 모델과 개별 응답 라벨을 구분한다. 앱의 `Settings → Capabilities → Switch models when a message is flagged` 설정을 확인하고, 끄면 해당 요청이 중단될 수 있음을 안내한다. 입력 단계 차단과 응답 중 전환은 비용 계산도 다르므로 실제 사용 내역을 대조한다. 앱 동작을 API의 자동 fallback으로 일반화하지 않는다. [모델 전환(P24)](https://support.claude.com/en/articles/15363606-why-claude-switched-models-in-your-conversation-with-fable-5-or-fable-5-1)

C20에는 전환을 의심해 토글을 끄고 Sonnet 4.5를 수동 선택했다는 대화 요약이 있다. 당시 실제 응답 모델은 라벨·시각·사용량 증거가 없어 확정하지 않는다(U13). 운영 제안으로 수업 전 모델·토글, 이상 응답의 라벨·시각, 앱/API 구분을 기록한다. 안전 필터를 우회하기 위한 재시도는 하지 않는다.

API는 자동 전환이 기본 활성화되지 않으며 fallback을 별도로 선택·설정해야 한다. HTTP 200이어도 stop reason과 실제 과업 완료를 확인한다. [API 적용 범위(P24)](https://support.claude.com/en/articles/15363606-why-claude-switched-models-in-your-conversation-with-fable-5-or-fable-5-1)

## 자주 헷갈리는 점

### Claude Business에서 대화가 개인 소유인가?

조직용 계정에서는 조직의 Primary Owner가 데이터를 관리할 수 있다. 개인용 Claude와 다르게 봐야 한다.

### 멤버를 제거하면 그 사람의 데이터가 사라지나?

아니다. 남은 멤버가 접근하지 못하게 되는 것과 조직 export 또는 retention 대상에서 사라지는 것은 다르다.

### Claude API와 Claude Business는 같은가?

아니다. API와 웹 기반 팀 서비스는 운영과 결제, 데이터 보존이 다르게 적용될 수 있다.

## 출처

- Anthropic 조직 데이터 보존: https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data
- 제거된 사용자 데이터: https://support.claude.com/en/articles/12053672-what-happens-to-a-user-s-data-when-they-are-removed-from-a-team-or-enterprise-organization
- 팀 데이터 소유·관리: https://support.claude.com/en/articles/9265372-who-owns-and-manages-the-data-of-my-team
- Enterprise custom retention: https://support.claude.com/en/articles/10440198-configure-custom-data-retention-controls-for-enterprise-plans
