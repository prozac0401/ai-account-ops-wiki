# Cursor 과금

> 상위 문서: [[Home|AI 계정 운영]]
> 분류: Cursor / 결제 / 좌석

[목차]

## 개요

> 정책 재확인: 2026-09-07 / 공식 근거: P01–P07 / 현장 기록: C04, C15, F19–F20
> 아래 점검 주기·승인·완료 기준은 조직이 채택할 운영 제안이다.

Cursor 과금은 사용자 구독과 팀 기능을 중심으로 본다.

교육용으로는 개인 Pro를 각자 결제하게 하는 방식보다, Teams 또는 Enterprise를 통해 중앙에서 관리하는 방식이 더 낫다.

## Teams 플랜

Cursor 가격 페이지 기준으로 Teams는 사용자당 월 과금이며, 다음 기능이 포함된다.

- Shared chats, commands, rules
- Centralized team billing
- Usage analytics and reporting
- Org-wide privacy mode controls
- Role-based access control
- SAML(Security Assertion Markup Language) <sup class="wiki-footnote-ref"><a class="wiki-footnote-link" id="abbr-ref-1" href="#abbr-note-1">[1]</a></sup>/OIDC(OpenID Connect) <sup class="wiki-footnote-ref"><a class="wiki-footnote-link" id="abbr-ref-2" href="#abbr-note-2">[2]</a></sup> 기반 SSO(Single Sign-On) <sup class="wiki-footnote-ref"><a class="wiki-footnote-link" id="abbr-ref-3" href="#abbr-note-3">[3]</a></sup>

교육 운영에서는 중앙 결제와 Privacy Mode 제어가 특히 중요하다.

2026-09-07 공식 확인 기준 Teams Standard는 월 결제 `$40/인`, 연 결제 월 환산 `$32/인`이고 Premium은 각각 `$120`, `$96`이다. Premium은 Standard 대비 5배 사용량으로 안내된다. 신규 고객은 6월 1일부터, 기존 고객은 7월 1일 이후 시작하는 갱신 주기부터 새 가격 구조를 적용한다고 발표했다. 실제 계약·갱신일은 Billing에서 별도로 확인한다. [가격 변경(P01)](https://cursor.com/blog/teams-pricing-june-2026)

```text
52명 Cursor Teams 예시
52 seats x $40 = $2,080/month
```

Team 계정에서는 좌석 구독료와 모델 사용량을 나누어 본다. 위 `$40` 예시는 Standard 월 결제에 한정하며 Premium·연 결제·세금·포함 사용량을 섞지 않는다. 실제 구매 전 Billing 화면과 공식 가격 페이지를 다시 확인한다.

운영상 헷갈리기 쉬운 점은 다음과 같다.

- 과거 개인 Pro의 `$20/month` 예시를 현재 Teams 좌석 가격으로 사용하지 않는다.
- included usage는 좌석 가격과 별개로 현재 플랜에 포함된 사용량을 뜻하며, 실제 금액이나 범위는 Billing 화면에서 확인한다.
- included usage는 보통 사용자별로 배정되는 사용량으로 보며, Team 전체 공용 풀처럼 임의로 나누어 쓰는 예산으로 단정하지 않는다.
- Enterprise에는 pooled usage가 별도 기능으로 안내된다. 팀 전체 공유 사용량이 필요하면 Enterprise 검토 대상이다.

## Unpaid Admin 비용 절감 전략

역할(Member, Admin, Unpaid Admin)과 좌석(Standard, Premium, Free)을 구분한다. Member·Admin에는 유료 좌석을 연결하고 Unpaid Admin에는 관리 전용 Free 좌석을 연결한다. Unpaid Admin에도 관리 권한이 있으므로 세션 회수는 그대로 필요하다. [좌석과 역할(P02)](https://cursor.com/docs/account/teams/pricing)

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

## Unpaid Admin 표시 오류 대응

지난 주말(2026-04-25~2026-04-26) Cursor 팀 대시보드에서 기존 `Unpaid Admin` 계정이 `Admin` 으로 표시되고, 역할 드롭다운에서 `Unpaid Admin` 선택지가 보이지 않는 현상이 있었다. 2026-04-28 현재 표기와 선택지가 복구된 것을 확인했다.

이런 상황에서는 역할 이름만 보고 바로 과금 전환으로 판단하지 않는다. 먼저 Billing seat count, upcoming invoice, Members 목록, 역할 드롭다운을 확인하고 화면을 캡처한다.

핵심 구분은 다음과 같다.

| 계정 유형 | 판단 기준 |
|---|---|
| 기존에 `Unpaid Admin` 이었던 계정 | 표시만 `Admin` 으로 바뀐 것일 수 있다. |
| `Member` 에서 `Admin` 으로 직접 변경한 계정 | 실제 billable seat으로 잡힐 수 있다. |
| 새로 `Admin` 으로 추가한 계정 | 과금 좌석으로 처리될 수 있다. |

`Unpaid Admin` 선택지가 보이지 않는 상태에서는 `Member` 에서 `Admin` 으로 바꾸거나, 기존 Admin을 삭제 후 재초대하거나, 기존 `Unpaid Admin` 을 다른 역할로 바꾼 뒤 되돌리는 테스트를 하지 않는다.

상세 절차, Support 문의 예시, 내부 기록용 문구는 [[issues/Cursor_Unpaid_Admin_표시_오류_대응|Cursor Unpaid Admin 표시 오류 대응]] 문서에 둔다.

## Free usage와 On-demand usage

### 두 사용량 풀

현재 Teams는 사용자별 **Cursor Models** 풀과 **Other Models** 풀을 분리한다. 풀 사이 사용량을 이전하지 않으며 결제 주기에 초기화된다. Other Models를 소진했어도 Cursor Models 잔여량을 쓸 수 있다. 소진한 풀의 모델을 계속 쓰거나 두 풀을 모두 소진하면 on-demand 허용 여부에 따라 추가 과금된다. Enterprise pooled usage와 혼동하지 않는다. [사용량 구조(P02)](https://cursor.com/docs/account/teams/pricing)

외부 모델은 공개 API 단가에 Token Rate가 더해진다. 현재 Token Rate는 입력·출력·캐시 토큰 100만 개당 `$0.25`이며 직접 선택, Auto, BYOK에도 적용된다. Cursor Models에는 이 추가 Token Rate가 없다. BYOK의 공급자 청구도 별도 확인한다. [Token Rate(P06)](https://cursor.com/help/models-and-usage/token-rate)

### Router와 Hard Auto

Cost는 비용, Balance는 성능·속도·비용 균형, Intelligence는 성능 중심의 라우팅 설정이다. Hard Auto는 Auto 사용을 강제하는 통제이지 특정 저가 모델 고정이나 무료 사용 보장이 아니다. 실제 라우팅 모델 단가와 적용되는 Token Rate를 확인한다. [Router(P04)](https://cursor.com/docs/cursor-router)

**2026-09-07 경계 주의:** 이날 재조회한 공식 문서는 legacy Enterprise Auto Cost의 특례를 여전히 "Until September 7, 2026"으로 안내한다. 특례 표는 100만 토큰당 입력·캐시 쓰기 `$1.25`, 캐시 읽기 `$0.25`, 출력 `$6`이다. 일반 Teams 전체에 적용되는 단가가 아니다. 종료 시각·시간대·당일 포함 여부·개별 계약 전환은 확인되지 않았으므로, 오늘 모든 고객의 전환이 끝났다고 단정하지 않는다(U17). 이 표로 신규 예산을 확정하지 말고 해당 계약과 Billing을 대조한다. [Router(P04)](https://cursor.com/docs/cursor-router), [모델 가격(P05)](https://cursor.com/docs/models-and-pricing)

Max Mode의 별도 과금 설명은 **legacy request-based 플랜**에 한정한다. 이 범위에서는 컨텍스트 확장과 API 단가에 20%를 더하는 설명이 적용된다. 모든 현재 좌석에 같은 규칙을 적용하지 않는다. [적용 범위(P05)](https://cursor.com/docs/models-and-pricing)

### 변경 권한과 팀 예산

Teams는 on-demand가 기본 활성화된 것으로 안내된다. 시작 전에 실제 상태를 확인한다. Spending의 Permissions에서 `Only Admins Can Edit Usage Settings`가 꺼져 있으면 멤버도 on-demand와 팀 한도를 바꿀 수 있다. 켜면 관리자만 변경하며 멤버의 Spending 조회는 유지된다. Enterprise 멤버·그룹별 재정의는 항상 관리자만 변경한다. [권한·한도(P03)](https://cursor.com/help/account-and-billing/spend-limits)

| 적용 범위 | 현재 공식 동작과 점검 |
|---|---|
| Teams 팀 한도 | 도달하면 on-demand를 쓰는 모든 멤버의 AI 기능 접근 중단. 한 명만 차단된다고 안내하지 않음 |
| Enterprise 개별 한도 | 여러 출처가 적용되면 가장 높은 적용 한도 사용. 팀 기본값을 낮춰도 기존 멤버·그룹 재정의는 남음 |
| Dynamic Spend Limits | 좌석 수에 비례해 팀 한도 변화. 고정 총예산이면 토글과 좌석 변경 후 실제 한도 재확인 |
| Enterprise pooled usage | 멤버 한도는 on-demand만이 아니라 총사용량에 적용 |

위 범위는 [공식 지출 한도(P03)](https://cursor.com/help/account-and-billing/spend-limits)에 따른다. Enterprise 사용자를 팀 기본값으로 돌리려면 남은 재정의부터 확인한다.

제안 절차는 다음과 같다.

1. 계정 관리자가 on-demand, 팀 월 한도, 관리자 전용 변경 설정을 읽고 결제 담당자의 승인값과 비교한다.
2. 설정 저장 후 다시 열어 값과 적용 대상을 확인한다. 변경 전후 화면, 시각, 승인 기록을 내부 보관한다.
3. 수업 전후 사용량을 비교하고 급증 시 새 작업을 중단한 뒤 한도·모델·반복 요청을 점검한다.
4. 설정 변경은 즉시 적용되지만 사용량 집계·차단에는 지연이 있다. 지연분 임시 크레딧은 환불이나 영구 면제가 아니며 같은 주기에 한도를 올리면 새 한도까지 재청구될 수 있음을 정산 기록에 남긴다. [한도 예외(P03)](https://cursor.com/help/account-and-billing/spend-limits)

`42명 × $10 = $420`은 C15에서 회수한 **팀 추가 사용 예산안**이다. 좌석료 포함 총액, 개인별 강제 상한 또는 실제 지출액이 아니다. F19–F20 검토 기록에는 Cost ON, Balance·Intelligence OFF 전후 화면이 있으나 저장·전파·절감 효과까지 입증하지 않는다. 실제 사용량 CSV가 없어 호출 수·토큰 수·비율은 실측 결과로 싣지 않는다(U03).

| 자료 | 관찰된 설정 | 추가 확인 |
|---|---|---|
| F19, 화면 시각 08:28 | Cost·Balance·Intelligence 선택, Auto 강제 OFF | 변경 전 선택 상태 |
| F20, 화면 시각 08:31 | Cost만 선택, Hard 선택 | 저장 후 대상 팀의 새 앱 세션과 실제 모델 라벨 확인 필요 |

사용자별 포함 사용량도 다른 사용자의 잔여량으로 이전해 배분하지 않는다. 예산 공정 배분은 교육 운영 규칙·사용량 점검·문의 경로로 별도 관리한다. 설정 화면만 저장하고 수강생 앱 적용을 보지 않은 경우에는 배포 완료로 기록하지 않는다.

Cursor 사용량 화면에는 included usage와 별개로 Free usage 또는 Bonus usage처럼 보이는 구간이 나타날 수 있다. 이 구간은 수강생에게 “항상 보장되는 추가 예산”처럼 안내하지 않는다. 운영 문서에는 “플랜에 포함된 사용량을 먼저 쓰고, 이후 무료/보너스 구간 또는 on-demand 전환 여부는 Cursor의 현재 정책과 Billing 화면을 기준으로 확인한다”라고 적는다.

On-demand usage는 포함 사용량을 넘은 뒤에도 선택 모델을 계속 쓰기 위한 사용량 기반 과금이다. Cursor 가격 페이지는 included amount가 소진된 뒤 on-demand usage가 후불 청구될 수 있다고 설명한다.

Team 계정에서 특히 중요한 점은 On-demand usage 설정과 지출 한도를 개인별로 따로 운영하는 방식이 아니라 Team 전체 단위로 관리한다는 점이다. 그래서 수강생 한 명만 많이 써도 팀 전체 on-demand 예산을 같이 소모할 수 있다.

교육 운영에서는 다음 중 하나를 미리 결정한다.

1. On-demand usage를 끄고 included/free 구간 안에서만 운영한다.
2. 팀 전체 월 한도를 낮게 걸고, 집중 실습 기간에만 한시적으로 올린다.
3. 사용량이 큰 수강생을 별도 예산 또는 별도 과정으로 분리한다.

## 사용자 추가·제거와 Prorated 청구

Cursor Teams self-serve 과금은 구독 좌석의 일할 정산과 모델 사용량을 분리한다. 사용한 멤버를 제거해도 해당 좌석이 주기 말까지 유지될 수 있고, 미사용 멤버의 제거 크레딧은 다음 인보이스 반영 여부를 확인한다. 아래 크레딧 차감 예시는 계산 설명이며 실제 정산 원장은 Billing과 대조한다. [추가·제거(P02)](https://cursor.com/docs/account/teams/pricing)

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
- Invoice/PO(Purchase Order) <sup class="wiki-footnote-ref"><a class="wiki-footnote-link" id="abbr-ref-4" href="#abbr-note-4">[4]</a></sup> billing
- SCIM(System for Cross-domain Identity Management) <sup class="wiki-footnote-ref"><a class="wiki-footnote-link" id="abbr-ref-5" href="#abbr-note-5">[5]</a></sup> seat management
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

카드 결제의 **청구서 PDF 발급**과 후불 **invoice/PO·송금 결제 계약**은 다르다. PDF 증빙만 필요하다고 Enterprise가 필수인 것은 아니다. 결제 방식과 증빙 다운로드 가능 여부를 나누어 확인한다. 과거의 "최소 150석"은 일반 공개 조건으로 확인되지 않았으므로 계약별 견적 원문이 필요하다(U08).

## 과거 사용량과 종료 증거

멤버를 제거했다고 과거 사용량 행까지 현재 좌석 수에서 빼지 않는다. C04의 제거 계정 조회 문의는 현재 유료 좌석과 과거 이용자를 구분해야 한다는 사례다. Admin API의 `isRemoved`와 기간을 확인하고, `/teams/spend`의 `spendCents`는 on-demand 지출이지 좌석료를 포함한 전체 비용이 아님을 기록한다. 소수 센트 정밀도를 유지하고 최종 합계에서 통화 단위로 변환한다. [Admin API(P07)](https://cursor.com/docs/account/teams/admin-api)

## 관련 문서

- [[issues/Cursor_Unpaid_Admin_표시_오류_대응|4월 Unpaid Admin 표시 오류: 해결 확인]]
- [[issues/Cursor_청구_크레딧_분쟁|6–7월 청구·크레딧·팀 접근: 최종 결과 미확인]]
- [[templates/계정_운영_기록|변경 승인·정산 대장]]
- [[operations/확인_대기_목록|U03·U08·U17 확인 질문]]
- [[SOURCES|근거 등급과 C/F/P 식별자]]

### 수강생 개인 결제로 처리해도 되나?

가능할 수는 있지만 운영 통제가 약해진다. 교육 종료 후 회수, Privacy Mode 강제, 사용량 관리가 어렵다.

## 출처

- Cursor Pricing: https://cursor.com/pricing
- Cursor Members and Roles: https://docs.cursor.com/account/teams/members/
- Cursor Billing: https://docs.cursor.com/en/account/billing
- Cursor Account Pricing: https://docs.cursor.com/en/account/pricing
- Cursor Team Pricing: https://docs.cursor.com/en/account/teams/pricing
- Cursor Enterprise: https://cursor.com/enterprise
- Cursor Security: https://cursor.com/security

<div class="wiki-footnotes">
<p class="wiki-footnote" id="abbr-note-1"><a class="wiki-footnote-link" href="#abbr-ref-1">[1]</a> SAML(Security Assertion Markup Language): 조직 계정과 외부 서비스를 연결할 때 쓰는 인증 연동 표준이다.</p>
<p class="wiki-footnote" id="abbr-note-2"><a class="wiki-footnote-link" href="#abbr-ref-2">[2]</a> OIDC(OpenID Connect): OAuth 2.0 기반의 사용자 인증 연동 표준이다.</p>
<p class="wiki-footnote" id="abbr-note-3"><a class="wiki-footnote-link" href="#abbr-ref-3">[3]</a> SSO(Single Sign-On): 조직 계정 하나로 여러 서비스에 로그인하게 하는 인증 방식이다.</p>
<p class="wiki-footnote" id="abbr-note-4"><a class="wiki-footnote-link" href="#abbr-ref-4">[4]</a> PO(Purchase Order): 구매 주문서다. 기업 구매 절차에서 인보이스 결제와 함께 등장한다.</p>
<p class="wiki-footnote" id="abbr-note-5"><a class="wiki-footnote-link" href="#abbr-ref-5">[5]</a> SCIM(System for Cross-domain Identity Management): 사용자 생성, 수정, 삭제를 자동화하는 계정 관리 표준이다.</p>
</div>
