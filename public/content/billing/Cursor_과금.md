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
- SAML(Security Assertion Markup Language)<sup class="wiki-footnote-ref"><a class="wiki-footnote-link" id="abbr-ref-1" href="#abbr-note-1">[1]</a></sup>/OIDC(OpenID Connect)<sup class="wiki-footnote-ref"><a class="wiki-footnote-link" id="abbr-ref-2" href="#abbr-note-2">[2]</a></sup> 기반 SSO(Single Sign-On)<sup class="wiki-footnote-ref"><a class="wiki-footnote-link" id="abbr-ref-3" href="#abbr-note-3">[3]</a></sup>

교육 운영에서는 중앙 결제와 Privacy Mode 제어가 특히 중요하다.

2026-04-25 기준 Cursor 가격 페이지에서 Teams는 `$40/user/month`로 안내된다. 실제 금액은 세금, 지역, 프로모션, 계약 조건에 따라 달라질 수 있으므로 구매 전 Billing 화면을 다시 확인한다.

```text
52명 Cursor Teams 예시
52 seats x $40 = $2,080/month
```

Team 계정에서는 좌석 구독료와 모델 사용량을 나누어 본다. 현재 공식 가격 페이지 기준으로 `$20/month`는 개인 Pro 플랜 금액이고, Teams 좌석 가격은 `$40/user/month`로 안내된다. included usage 금액, 지역 세금, 프로모션, 플랜명은 바뀔 수 있으므로 실제 구매 전 Billing 화면과 공식 가격 페이지를 다시 확인한다.

운영상 헷갈리기 쉬운 점은 다음과 같다.

- `$20/month`는 Teams 좌석 가격이 아니라 개인 Pro 플랜 가격으로 구분한다.
- included usage는 좌석 가격과 별개로 현재 플랜에 포함된 사용량을 뜻하며, 실제 금액이나 범위는 Billing 화면에서 확인한다.
- included usage는 보통 사용자별로 배정되는 사용량으로 보며, Team 전체 공용 풀처럼 임의로 나누어 쓰는 예산으로 단정하지 않는다.
- Enterprise에는 pooled usage가 별도 기능으로 안내된다. 팀 전체 공유 사용량이 필요하면 Enterprise 검토 대상이다.

## Unpaid Admin 비용 절감 전략

Cursor Teams에는 Member, Admin, Unpaid Admin 역할이 있다. Cursor 문서 기준으로 Member와 Admin은 paid seat가 필요하지만, Unpaid Admin은 과금 대상이 아니고 Pro 기능도 제공되지 않는다. 대신 팀 관리, 멤버 제거, 역할 변경, Billing 관리, 사용량 제어 같은 관리 권한은 Admin과 같은 수준으로 볼 수 있다.

교육 운영에서는 운영자 계정을 무조건 유료 Admin으로 오래 유지하지 말고, 교육 종료 후 계속 관리만 필요한 계정은 Unpaid Admin으로 전환하는 방식을 비용 절감 전략으로 쓸 수 있다.

```text
예시: 운영자 2명을 교육 중 paid Admin으로 둔 경우
교육 중: 수강생 48 + 운영자 2 + 예비 2 = 52 paid seats
종료 후: 남겨 둘 paid member 1 + 운영자 2 unpaid admin = 1 paid seat + unpaid admins

단순 좌석료:
52 seats x $40 = $2,080/month
1 seat x $40 = $40/month
```

다만 Unpaid Admin 전환은 교육 종료 후에만 권장한다. 교육 중에는 강의장 PC 로그인 상태 확인, 사용량 대응, 현장 장애 처리가 필요할 수 있어서 운영자에게 Pro 기능이 필요할 수 있다.

전환 전에 반드시 다음 조건을 확인한다.

- 모든 수강생 좌석에서 Cursor Team 멤버 회수가 끝났는가.
- 운영자 계정이 강의장 PC의 Cursor Desktop 또는 브라우저에 로그인된 채 남아 있지 않은가.
- 강의장 PC가 수강생이나 외부인이 접근할 수 없는 상태로 시건되어 있는가.
- 다음 회차 전까지 PC 이미지 초기화, Windows 사용자 초기화, 또는 로그아웃 점검 절차가 있는가.
- 팀에 최소 1명의 paid member가 남아 있는가.
- Billing 화면에서 paid seat 수와 다음 청구 예정 금액이 줄어든 것을 확인했는가.

보안상 중요한 점은 Unpaid Admin도 관리 권한을 가진다는 것이다. Pro 기능이 없다고 해서 안전한 계정이 되는 것은 아니다. 강의장 PC에 해당 계정 세션이 남아 있으면 누군가 Billing, 멤버, 사용량 제한을 변경할 수 있다. 따라서 강의장이 잠겨 있지 않거나, 다른 사람이 로그인된 Cursor 계정에 접근할 수 있는 구조라면 Unpaid Admin 전환을 비용 절감 수단으로 쓰지 않는다.

권장 순서는 다음과 같다.

1. 교육 종료 후 수강생 멤버를 먼저 제거한다.
2. 사용량과 On-demand usage 청구 예상액을 확인한다.
3. 강의장 PC에서 운영자 계정 로그아웃과 세션 정리를 확인한다.
4. 강의장 시건 또는 PC 회수 상태를 확인한다.
5. 운영자 계정을 Admin에서 Unpaid Admin으로 변경한다.
6. Billing 화면에서 paid seat 수와 다음 invoice 예정 금액을 캡처한다.

## Free usage와 On-demand usage

Cursor 사용량 화면에는 included usage와 별개로 Free usage 또는 Bonus usage처럼 보이는 구간이 나타날 수 있다. 이 구간은 수강생에게 “항상 보장되는 추가 예산”처럼 안내하지 않는다. 운영 문서에는 “플랜에 포함된 사용량을 먼저 쓰고, 이후 무료/보너스 구간 또는 on-demand 전환 여부는 Cursor의 현재 정책과 Billing 화면을 기준으로 확인한다”라고 적는다.

On-demand usage는 포함 사용량을 넘은 뒤에도 선택 모델을 계속 쓰기 위한 사용량 기반 과금이다. Cursor 가격 페이지는 included amount가 소진된 뒤 on-demand usage가 후불 청구될 수 있다고 설명한다.

Team 계정에서 특히 중요한 점은 On-demand usage 설정과 지출 한도를 개인별로 따로 운영하는 방식이 아니라 Team 전체 단위로 관리한다는 점이다. 그래서 수강생 한 명만 많이 써도 팀 전체 on-demand 예산을 같이 소모할 수 있다.

교육 운영에서는 다음 중 하나를 미리 결정한다.

1. On-demand usage를 끄고 included/free 구간 안에서만 운영한다.
2. 팀 전체 월 한도를 낮게 걸고, 집중 실습 기간에만 한시적으로 올린다.
3. 사용량이 큰 수강생을 별도 예산 또는 별도 과정으로 분리한다.

## 사용자 추가·제거와 Prorated 청구

Cursor Teams self-serve 과금은 ChatGPT Business annual처럼 monthly true-up으로 baseline을 다시 맞추는 구조로 보지 않는다. 운영상으로는 사용자를 추가할 때 남은 기간만큼 prorated 비용이 계산되고, credit이 있으면 우선 차감되는 구조로 본다. 제거 시에는 credit을 사용하지 않은 멤버에 한해 남은 기간만큼 credit 반영이 가능하다고 구분한다.

실무적으로는 다음 흐름으로 이해한다.

1. 사용자를 추가하면 남은 결제 기간만큼 prorated 비용이 계산된다.
2. 계정에 credit이 있으면 먼저 credit에서 차감된다.
3. 차감할 비용이 남은 credit보다 크면 그 초과분에 대해 결제가 발생한다.
4. 사용자를 제거할 때는 credit을 사용하지 않은 멤버에 한해 남은 기간만큼 credit 반영이 가능하다.
5. 이미 credit을 사용한 멤버를 제거하면 해당 seat가 결제 주기 끝까지 점유된 것으로 처리될 수 있다.

예를 들어 월 $40 Teams 좌석을 20석 운영 중이고, 결제 주기 30일 중 10일차에 8명을 추가하면 남은 20일에 대해서만 비용을 잡는다.

```text
추가 좌석: 8 seats
남은 기간: 20/30 days
prorated 비용: 8 x $40 x 20/30 = $213.33

credit 잔액이 $100이면:
$213.33 - $100 credit = $113.33 결제 발생
```

그래서 Cursor는 “나중에 한 번에 True-up 정산된다”라고 안내하지 않는다. 교육 운영자는 Billing 화면에서 현재 paid members, credit 잔액, pending invoice, on-demand usage를 즉시 확인한다.

```text
청구 흐름
20 seats ── 10일차 8명 추가 ──> 28 seats
             │
             ├─ 남은 기간 prorated 계산
             ├─ credit에서 우선 차감
             └─ credit 초과분은 결제
   +--------------------------------
     결제 시작일                     결제 종료일
```

## Enterprise 플랜

Enterprise는 Teams에 다음 기능이 추가되는 구조로 안내된다.

- Pooled usage
- Invoice/PO(Purchase Order)<sup class="wiki-footnote-ref"><a class="wiki-footnote-link" id="abbr-ref-4" href="#abbr-note-4">[4]</a></sup> billing
- SCIM(System for Cross-domain Identity Management)<sup class="wiki-footnote-ref"><a class="wiki-footnote-link" id="abbr-ref-5" href="#abbr-note-5">[5]</a></sup> seat management
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
6. 교육 종료일 기준 회수 작업과 Unpaid Admin 전환 가능 여부를 예약한다.

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

Cursor 가격 페이지는 self-serve는 카드 결제, 인보이스/wire는 Enterprise 문의로 안내한다. 회계상 인보이스가 필수라면 처음부터 Enterprise를 검토한다. 단, Enterprise는 최소 150인 이상 가입을 요하고 연단위 결제가 필요하므로, 단기 교육 좌석만으로는 조건과 비용이 맞는지 먼저 확인한다.

### 수강생 개인 결제로 처리해도 되나?

가능할 수는 있지만 운영 통제가 약해진다. 교육 종료 후 회수, Privacy Mode 강제, 사용량 관리가 어렵다.

## 약어 각주

<div class="wiki-footnotes">
<p class="wiki-footnote" id="abbr-note-1"><a class="wiki-footnote-link" href="#abbr-ref-1">[1]</a> - SAML(Security Assertion Markup Language): 조직 계정과 외부 서비스를 연결할 때 쓰는 인증 연동 표준이다.</p>
<p class="wiki-footnote" id="abbr-note-2"><a class="wiki-footnote-link" href="#abbr-ref-2">[2]</a> - OIDC(OpenID Connect): OAuth 2.0 기반의 사용자 인증 연동 표준이다.</p>
<p class="wiki-footnote" id="abbr-note-3"><a class="wiki-footnote-link" href="#abbr-ref-3">[3]</a> - SSO(Single Sign-On): 조직 계정 하나로 여러 서비스에 로그인하게 하는 인증 방식이다.</p>
<p class="wiki-footnote" id="abbr-note-4"><a class="wiki-footnote-link" href="#abbr-ref-4">[4]</a> - PO(Purchase Order): 구매 주문서다. 기업 구매 절차에서 인보이스 결제와 함께 등장한다.</p>
<p class="wiki-footnote" id="abbr-note-5"><a class="wiki-footnote-link" href="#abbr-ref-5">[5]</a> - SCIM(System for Cross-domain Identity Management): 사용자 생성, 수정, 삭제를 자동화하는 계정 관리 표준이다.</p>
</div>

## 출처

- Cursor Pricing: https://cursor.com/pricing
- Cursor Members and Roles: https://docs.cursor.com/account/teams/members/
- Cursor Billing: https://docs.cursor.com/en/account/billing
- Cursor Account Pricing: https://docs.cursor.com/en/account/pricing
- Cursor Team Pricing: https://docs.cursor.com/en/account/teams/pricing
- Cursor Enterprise: https://cursor.com/enterprise
- Cursor Security: https://cursor.com/security
