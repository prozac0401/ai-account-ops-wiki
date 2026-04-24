# Cursor 과금

> 상위 문서: [[../Home|AI 계정 운영]]
> 분류: Cursor / 결제 / 좌석

[목차]

## 개요

Cursor 과금은 사용자 구독과 팀 기능을 중심으로 본다.

교육용으로는 개인 Pro를 각자 결제하게 하는 방식보다, Teams 또는 Enterprise를 통해 중앙에서 관리하는 방식이 더 낫다.

## Teams 플랜

Cursor 가격 페이지 기준으로 Teams는 사용자당 월 과금이며, 다음 기능이 포함된다.

- Shared chats, commands, rules
- Centralized team billing
- Usage analytics and reporting
- Org-wide privacy mode controls
- Role-based access control
- SAML/OIDC SSO

교육 운영에서는 중앙 결제와 Privacy Mode 제어가 특히 중요하다.

## Enterprise 플랜

Enterprise는 Teams에 다음 기능이 추가되는 구조로 안내된다.

- Pooled usage
- Invoice/PO billing
- SCIM seat management
- AI code tracking API and audit logs
- Granular admin and model controls
- Priority support and account management

장기 운영이나 조직 계정 연동이 필요하면 Enterprise 검토가 필요하다.

## 결제 수단

Cursor 가격 페이지는 self-serve 플랜이 주요 신용카드와 체크카드를 지원한다고 안내한다. 인보이스 기반 결제와 wire transfer는 Enterprise 플랜 문의가 필요하다.

또한 Cursor 구독은 cursor.com에서만 직접 판매되며, 승인된 리셀러나 제3자 판매자가 없다고 안내된다.

## 교육용 결제 운영

추천 흐름은 다음과 같다.

1. 교육생 수를 확정한다.
2. 운영자 좌석을 1~2개 추가한다.
3. Teams 또는 Enterprise 필요 여부를 결정한다.
4. Privacy Mode를 조직 단위로 켠다.
5. 결제 카드 또는 Enterprise 견적 방식을 정한다.
6. 교육 종료일 기준 회수 작업을 예약한다.

## 비용이 예상보다 커지는 경우

- 사용량 기반 기능을 많이 사용함
- 학생들이 개인 프로젝트까지 열어 사용함
- 팀 좌석을 회수하지 않음
- Enterprise가 필요한데 Teams로 시작해 운영 수작업이 늘어남
- 카드 결제 실패로 중복 결제 또는 재시도 이슈가 생김

## 자주 헷갈리는 점

### Cursor Teams는 무조건 월 40달러인가?

공식 가격은 시점과 지역, 세금, 플랜 구성에 따라 바뀔 수 있다. 위키에는 금액보다 과금 구조를 중심으로 적고, 실제 구매 전 가격 페이지를 확인한다.

### 인보이스가 필요한데 Teams로 되나?

Cursor 가격 페이지는 self-serve는 카드 결제, 인보이스/wire는 Enterprise 문의로 안내한다. 회계상 인보이스가 필수라면 처음부터 Enterprise를 검토한다.

### 교육생 개인 결제로 처리해도 되나?

가능할 수는 있지만 운영 통제가 약해진다. 교육 종료 후 회수, Privacy Mode 강제, 사용량 관리가 어렵다.

## 출처

- Cursor Pricing: https://cursor.com/pricing
- Cursor Enterprise: https://cursor.com/enterprise
- Cursor Security: https://cursor.com/security
