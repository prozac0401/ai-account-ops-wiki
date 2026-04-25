# Claude Business / Team

> 상위 문서: [[../Home|AI 계정 운영]]
> 분류: Claude / Anthropic / 부록

[목차]

## 개요

Claude Business 또는 Claude Team은 Anthropic의 팀용 Claude 서비스다.

본 프로젝트의 중심 서비스는 Google Workspace, ChatGPT, Cursor, OpenAI API 쪽이지만, 이전 질의응답에서 Claude Business Plan도 함께 검토되었으므로 부록처럼 정리한다.

## 왜 함께 다루나

운영 이슈가 ChatGPT Business와 비슷하다.

- 팀 워크스페이스가 있다.
- Owner 또는 Primary Owner가 있다.
- 조직 데이터와 사용자 데이터의 소유·관리 문제가 있다.
- 삭제와 보존 정책을 이해해야 한다.
- 국외 이전 고지와 보안 증빙이 필요할 수 있다.

## Primary Owner의 의미

Anthropic 도움말에 따르면 조직의 Primary Owner는 Work account와 관련 데이터를 관리한다. 데이터 export를 요청할 수 있고, export에는 사용자의 Claude 대화, 업로드 파일, 사용 패턴이 포함될 수 있다.

수강생에게 이 점은 분명히 알려야 한다.

> “조직용 Claude 계정에서 만든 대화와 파일은 개인 공간이 아니라 조직 관리 대상이 될 수 있습니다.”

## 멤버 제거와 데이터

Anthropic 도움말에 따르면 사용자가 Team 또는 Enterprise 조직에서 제거되면 남은 멤버는 그 사용자의 chats에 접근할 수 없다. 그러나 제거된 사용자의 데이터는 Primary Owner가 실행하는 data export에 포함될 수 있다고 안내된다.

즉, 멤버 제거는 완전 삭제가 아니다.

## 데이터 보존

Anthropic의 조직 데이터 보존 문서에 따르면 API 입력·출력은 기본적으로 수신 또는 생성 후 30일 내 백엔드에서 자동 삭제된다. 다만 더 긴 보존이 필요한 서비스, 별도 합의, 사용 정책 집행, 법적 준수 등 예외가 있다.

Claude for Work 제품 안의 채팅과 코딩 세션은 제품 경험 유지를 위해 보관될 수 있으며, 사용자가 삭제하면 화면에서 제거되고 백엔드에서도 30일 내 삭제되는 구조로 설명된다.

Enterprise는 custom retention controls를 설정할 수 있지만, 해당 문서 기준 최소 보존 기간은 30일이다.

## 교육 운영 시 주의

- Primary Owner를 누구로 할지 정한다.
- Owner를 최소 인원으로 둔다.
- 수강생에게 조직 데이터 export 가능성을 알린다.
- 삭제 요청과 멤버 제거를 구분한다.
- Google Workspace connectors 같은 외부 연결 기능은 별도 고지와 보안 검토를 한다.

## ChatGPT와 비교

| 항목 | ChatGPT Business | Claude Business/Team |
|---|---|---|
| 조직 관리자 | Owner/Admin | Primary Owner/Owner |
| 멤버 제거 | 계정 삭제와 별개 | remaining members 접근 차단, export에는 포함 가능 |
| 데이터 보존 | 삭제 시 30일 내 삭제 예정, 예외 가능 | 삭제 시 30일 내 백엔드 삭제, 예외 가능 |
| API와의 관계 | ChatGPT와 API 별도 | Claude.ai와 Anthropic API 별도 |

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
