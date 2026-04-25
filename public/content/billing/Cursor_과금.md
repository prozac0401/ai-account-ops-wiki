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

Team 계정에서는 좌석 구독료와 모델 사용량을 나누어 본다. 현재 Cursor Team 문서와 가격 안내에서는 Team 좌석에 월 $20 included usage가 붙는 구조로 설명된다. 다만 금액, 지역 세금, 프로모션, 플랜명은 바뀔 수 있으므로 실제 구매 전 Billing 화면과 공식 가격 페이지를 다시 확인한다.

운영상 헷갈리기 쉬운 점은 다음과 같다.

- 월 $20 included usage는 “좌석 구독료 전액이 사용량 크레딧”이라는 뜻이 아니다.
- included usage는 보통 사용자별로 배정되는 사용량으로 보며, Team 전체 공용 풀처럼 임의로 나누어 쓰는 예산이 아니다.
- Enterprise에는 pooled usage가 별도 기능으로 안내된다. 팀 전체 공유 사용량이 필요하면 Enterprise 검토 대상이다.

## Free usage와 On-demand usage

Cursor 사용량 화면에는 included usage와 별개로 Free usage 또는 Bonus usage처럼 보이는 구간이 나타날 수 있다. 이 구간은 수강생에게 “항상 보장되는 추가 예산”처럼 안내하지 않는다. 운영 문서에는 “$20 included usage를 먼저 쓰고, 이후 무료/보너스 구간 또는 on-demand 전환 여부는 Cursor의 현재 정책과 Billing 화면을 기준으로 확인한다”라고 적는다.

On-demand usage는 포함 사용량을 넘은 뒤에도 선택 모델을 계속 쓰기 위한 사용량 기반 과금이다. Cursor 가격 페이지는 included amount가 소진된 뒤 on-demand usage가 후불 청구될 수 있다고 설명한다.

Team 계정에서 특히 중요한 점은 On-demand usage 설정과 지출 한도를 개인별로 따로 운영하는 방식이 아니라 Team 전체 단위로 관리한다는 점이다. 그래서 수강생 한 명만 많이 써도 팀 전체 on-demand 예산을 같이 소모할 수 있다.

교육 운영에서는 다음 중 하나를 미리 결정한다.

1. On-demand usage를 끄고 included/free 구간 안에서만 운영한다.
2. 팀 전체 월 한도를 낮게 걸고, 집중 실습 기간에만 한시적으로 올린다.
3. 사용량이 큰 수강생을 별도 예산 또는 별도 과정으로 분리한다.

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

1. 수강생 수를 확정한다.
2. 운영자 좌석을 1~2개 추가한다.
3. Teams 또는 Enterprise 필요 여부를 결정한다.
4. Privacy Mode를 조직 단위로 켠다.
5. 결제 카드 또는 Enterprise 견적 방식을 정한다.
6. 교육 종료일 기준 회수 작업을 예약한다.

## 비용이 예상보다 커지는 경우

- 사용량 기반 기능을 많이 사용함
- 수강생들이 개인 작업까지 열어 사용함
- On-demand usage가 켜져 있고 팀 전체 한도가 높게 잡혀 있음
- 비싼 모델이나 Max Mode를 기본처럼 사용함
- Agent/Composer 작업을 반복 실행하거나 실패한 작업을 계속 재시도함
- 큰 레포, 빌드 산출물, 로그, `node_modules` 같은 폴더가 컨텍스트에 계속 들어감
- `.cursorignore`가 없어서 민감하거나 불필요한 파일까지 인덱싱됨
- 팀 좌석을 회수하지 않음
- Enterprise가 필요한데 Teams로 시작해 운영 수작업이 늘어남
- 카드 결제 실패로 중복 결제 또는 재시도 이슈가 생김

## 사용량이 많은 수강생을 볼 때

특정 수강생 사용량이 유난히 높으면 먼저 실수인지 설정 문제인지 확인한다.

1. Billing 또는 Admin Dashboard에서 사용자별 사용량과 증가 시점을 본다.
2. Team 전체 On-demand usage와 monthly spend limit이 켜져 있는지 확인한다.
3. 수강생에게 현재 선택 모델, Agent/Composer 반복 실행 여부, Max Mode 사용 여부를 확인한다.
4. 열어 둔 워크스페이스가 실습 레포뿐인지 확인한다.
5. `.cursorignore`에 대용량 폴더, 로그, 빌드 산출물, 비밀 파일이 빠져 있지 않은지 확인한다.
6. 개인 작업, 회사 레포, 과제 외 레포를 같이 열어 사용하지 않았는지 확인한다.
7. 반복되면 on-demand 한도를 낮추거나, 실습 시간에만 한시적으로 열어 둔다.

## 자주 헷갈리는 점

### Cursor Teams는 무조건 월 40달러인가?

공식 가격은 시점과 지역, 세금, 플랜 구성에 따라 바뀔 수 있다. 위키에는 금액보다 과금 구조를 중심으로 적고, 실제 구매 전 가격 페이지를 확인한다.

### 인보이스가 필요한데 Teams로 되나?

Cursor 가격 페이지는 self-serve는 카드 결제, 인보이스/wire는 Enterprise 문의로 안내한다. 회계상 인보이스가 필수라면 처음부터 Enterprise를 검토한다.

### 수강생 개인 결제로 처리해도 되나?

가능할 수는 있지만 운영 통제가 약해진다. 교육 종료 후 회수, Privacy Mode 강제, 사용량 관리가 어렵다.

## 출처

- Cursor Pricing: https://cursor.com/pricing
- Cursor Account Pricing: https://docs.cursor.com/en/account/pricing
- Cursor Team Pricing: https://docs.cursor.com/en/account/teams/pricing
- Cursor Enterprise: https://cursor.com/enterprise
- Cursor Security: https://cursor.com/security
