# Cursor

> 상위 문서: [[Home|AI 계정 운영]]
> 분류: Cursor / AI 코드 편집기 / Privacy Mode
> 계정·보안 정책 공식 재확인: 2026-09-07 / 실제 팀 설정·계약은 별도 확인

[목차]

## 개요

Cursor는 AI 기능이 들어간 코드 편집기다.

일반 챗봇보다 주의할 점이 많다. 프롬프트뿐 아니라 코드, 파일 경로, 레포 구조, 에러 로그, 주석, 터미널 출력이 함께 들어갈 수 있기 때문이다.

## 교육에서 쓰는 이유

- 코드 자동완성
- 코드 설명
- 버그 찾기
- 리팩터링
- 테스트 코드 작성
- 실습 중 오류 해결

수강생 입장에서는 편하다. 운영자 입장에서는 “무슨 코드가 어디까지 전송되는가”를 설명해야 한다.

## 플랜 구조

Cursor Teams는 사용자별 Standard·Premium 구독과 사용량을 구분한다. 공유 chats/commands/rules, 중앙 팀 결제, 사용량 분석, 조직 단위 Privacy Mode 제어, RBAC(Role-Based Access Control) <sup class="wiki-footnote-ref"><a class="wiki-footnote-link" id="abbr-ref-1" href="#abbr-note-1">[1]</a></sup>, SAML(Security Assertion Markup Language) <sup class="wiki-footnote-ref"><a class="wiki-footnote-link" id="abbr-ref-2" href="#abbr-note-2">[2]</a></sup>/OIDC(OpenID Connect) <sup class="wiki-footnote-ref"><a class="wiki-footnote-link" id="abbr-ref-3" href="#abbr-note-3">[3]</a></sup> 기반 SSO(Single Sign-On) <sup class="wiki-footnote-ref"><a class="wiki-footnote-link" id="abbr-ref-4" href="#abbr-note-4">[4]</a></sup> 등을 제공한다. 현재 가격과 신규·기존 계약 적용 시점은 [[billing/Cursor_과금|Cursor 과금]]에서 확인한다. 과거 개인 Pro 가격을 Teams 좌석 가격으로 사용하지 않는다.

Team에서 On-demand usage를 허용하면 설정과 월 한도는 팀 전체 단위로 관리한다. 수강생별로 on-demand 한도를 다르게 주는 방식으로 운영하기 어렵기 때문에, 교육 운영자는 팀 전체 한도를 낮게 두고 사용량 대시보드로 많이 쓰는 사용자를 따로 확인한다.

Enterprise는 여기에 pooled usage, invoice/PO(Purchase Order) <sup class="wiki-footnote-ref"><a class="wiki-footnote-link" id="abbr-ref-5" href="#abbr-note-5">[5]</a></sup> billing, SCIM(System for Cross-domain Identity Management) <sup class="wiki-footnote-ref"><a class="wiki-footnote-link" id="abbr-ref-6" href="#abbr-note-6">[6]</a></sup> seat management, audit logs, 더 세밀한 관리자·모델 제어 등이 추가된다. 팀 전체 공유 사용량, 세밀한 보안 통제, 감사 로그가 필요하면 Enterprise 검토 대상이다.

## 역할과 Unpaid Admin

Cursor Teams의 **역할**은 Member, Admin, Unpaid Admin이고, **좌석 유형**은 Standard, Premium, Free다. 역할과 좌석을 별도 열로 기록한다. Member와 Admin은 Standard 또는 Premium 유료 좌석을 쓰고, Unpaid Admin은 Cursor 사용 권한 없이 관리만 하는 Free 좌석이다. 과거 문서의 "Pro 기능"은 현재 Teams 좌석 이름이 아니다. 공식 확인일은 2026-09-07이다. [Teams 가격·좌석(P02)](https://cursor.com/docs/account/teams/pricing)

교육 운영에서는 수업 중에는 운영자에게 Admin이 필요할 수 있다. 하지만 과정 종료 후에는 계속 관리만 필요한 운영자 계정을 Unpaid Admin으로 바꿔 paid seat 수를 줄일 수 있다. 이때도 Unpaid Admin은 Billing, 멤버, 사용량 설정 같은 관리 권한을 갖기 때문에 보안 계정으로 취급한다.

Unpaid Admin 전환 전 확인할 것:

- 수강생 멤버 회수가 끝났는가.
- 강의장 PC의 Cursor Desktop과 브라우저에서 운영자 계정이 로그아웃되었는가.
- 강의장 PC를 외부인이 만질 수 없도록 시건했는가.
- 팀에 최소 1명의 paid member가 남아 있는가.
- Billing 화면에서 paid seat 수가 줄어든 것을 확인했는가.

강의장에 다른 사람이 로그인된 Cursor 계정에 접근할 수 있는 상태라면 Unpaid Admin 전환을 비용 절감 수단으로 쓰지 않는다.

2026-04-25~2026-04-26에는 기존 `Unpaid Admin`이 `Admin`으로 표시되고 역할 드롭다운에서 `Unpaid Admin` 선택지가 보이지 않는 오류가 있었고, 2026-04-28 복구를 확인했다. 같은 현상이 다시 보이면 역할을 임의로 바꾸지 말고 Billing seat count와 upcoming invoice를 먼저 확인한다. 이 기록은 과금 규정이 아니라 [[issues/Cursor_Unpaid_Admin_표시_오류_대응|4월 표시 오류 사건]]에 보존한다. [[issues/Cursor_청구_크레딧_분쟁|6–7월 청구·접근 분쟁]]은 별도 사건이며 최종 정산과 복구는 확인되지 않았다.

## 사용량 통제

### 초대와 좌석 변경

Member도 멤버를 초대할 수 있다. 이메일 초대 외에 초대 링크·도메인 자동 가입을 사용한다면 종료 때 잔여 초대와 가입 경로도 점검한다. 비SCIM 팀에서는 검증된 도메인 자동 가입과 검증 도메인으로만 초대하는 제한을 별도로 설정한다. 링크 소지만으로 가입 가능한 초대는 공개 배포하지 않는다. [멤버 관리(P31)](https://cursor.com/docs/account/teams/members)

Standard에서 Premium으로 올리면 즉시 적용되고 남은 주기가 일할 정산된다. Premium에서 Standard로 내리면 현재 주기까지 Premium이 유지되고 다음 갱신에 바뀐다. 팀에는 관리 역할과 유료 사용자가 각각 최소 1명 필요하다. 제거·역할 변경 뒤에는 실제 접근과 다음 청구를 따로 확인한다. [좌석 변경(P31)](https://cursor.com/docs/account/teams/members)

### 예산 확인

현재 Teams의 두 사용량 풀, Router, on-demand와 변경 권한은 [[billing/Cursor_과금|Cursor 과금]]을 기준으로 확인한다. Cost 선택이나 Hard Auto만으로 비용이 0이 되지는 않는다. Max Mode 설명은 legacy request-based 플랜 적용 범위와 함께 읽는다.

현장 설정은 조직 채택 전 운영 제안이다. 교육 전 계정 관리자가 변경 전후 화면과 저장 후 재조회 결과를 기록하고, 결제 담당자가 팀 예산을 승인한다. 수업 중 한도 변경은 승인자와 만료 시점을 남긴다.

## Privacy Mode

### 핵심

Cursor의 Privacy Mode는 운영상 매우 중요하다.

Privacy Mode를 켜면 코드가 학습에 사용되지 않도록 보호한다. Enterprise는 기본 ON이며, Teams·Enterprise 관리자는 조직 전체에 강제해 멤버가 끄지 못하게 할 수 있다. 새 팀원은 팀 설정을 상속하므로 모든 Teams가 자동으로 강제 ON이라고 가정하지 않는다. [Privacy 설정(P32)](https://cursor.com/help/security-and-privacy/privacy), [팀 설정 상속(P33)](https://cursor.com/security)

### 그래도 국외 이전 이슈는 남는다

Privacy Mode는 “아예 전송하지 않는다”는 뜻이 아니다.

AI 기능을 쓰려면 요청이 Cursor 서버와 모델 제공자 쪽으로 전송될 수 있다. 다만 저장과 학습 사용을 제한하는 구조로 이해하는 것이 안전하다.

따라서 수강생 개인정보 동의나 국외 이전 고지에서는 “Privacy Mode라서 동의 불필요”라고 단정하지 않는다.

## 데이터와 리텐션

### Privacy Mode일 때

- 모델 제공자와 무보존(ZDR) 계약을 적용하되 예외를 확인한다.
- BYOK는 해당 공급자의 데이터 정책이 적용된다. 별도 보존 모델은 기본 비활성화·관리자 승인이 필요할 수 있다.
- 위험 분류기가 이용 정책 위반 가능성을 감지하면 조사 목적으로 보존될 수 있다. Privacy Mode를 무조건적인 무저장 보장으로 안내하지 않는다.

[ZDR 예외(P32)](https://cursor.com/help/security-and-privacy/privacy), [데이터 사용 정책(P34, 2026-08-28 개정)](https://cursor.com/data-use)

### 계정 삭제

현재 계정 삭제 도움말은 활성 구독이 있으면 먼저 취소하고, 대시보드의 Advanced Account Settings에서 Delete Account를 실행하도록 안내한다. 계정·관련 데이터는 30일 내 제거한다고 설명하지만, **PC의 로컬 프로젝트 파일과 작성한 코드는 삭제하지 않는다.** 팀 멤버 제거, 구독 취소, 계정 삭제, PC 초기화를 별도 조치로 승인·기록한다. [계정 삭제(P35)](https://cursor.com/help/account-and-billing/delete-account)

### 코드베이스 인덱싱

코드베이스 인덱싱 여부와 저장 범위를 확인한다. 임시 파일 캐시도 있으므로 Privacy Mode가 로컬 처리만 한다는 뜻은 아니다. BYOK 요청도 Cursor 백엔드를 거친다. 교육 종료 후 원격 데이터와 PC 잔여 파일을 각각 [[compliance/데이터_리텐션_삭제|리텐션·삭제 점검]]에 기록한다. [데이터 흐름(P34)](https://cursor.com/data-use)

## 교육 운영 권장 설정

### 팀 운영

- 팀 플랜으로 운영한다.
- Privacy Mode를 조직 단위로 켠다.
- 가능하면 SSO(Single Sign-On)를 쓴다.
- Enterprise가 아니면 SCIM(System for Cross-domain Identity Management)·감사로그 제한을 감안한다.
- 수강생에게 개인 Cursor Pro를 쓰게 하지 않는다.

### 레포 운영

- 실습용 레포를 별도로 만든다.
- 실제 회사 코드 대신 샘플 코드를 쓴다.
- `.cursorignore`로 민감 폴더를 제외한다.
- `.env`, credential, key 파일은 레포에 넣지 않는다.
- GitHub에 API 키가 올라가지 않도록 사전 안내한다.

### 현장 확인

수강생에게 다음을 확인하게 한다.

- Cursor에 로그인한 이메일이 교육 신청 이메일과 같은가.
- 팀에 들어와 있는가.
- Privacy Mode가 켜져 있는가.
- 실습 레포만 열었는가.
- 개인 작업이나 회사 레포를 열지 않았는가.

## Cursor 로그인 챌린지 대응

이 문단은 공식 제한값이 아니라 강의장 운영 경험을 정리한 것이다.

Cursor 로그인 챌린지는 교육 전에 계정 담당자와 과정 담당자가 사전 접속 테스트로 해결해 둔다. 수업 중에는 새 로그인을 대량으로 처리하지 않고, 예외 계정만 응급 대응한다.

Cursor Desktop은 Windows 사용자 프로필의 로컬 앱 데이터 영역에 로그인 상태와 앱 데이터를 저장한다. 운영 문서에서는 정확한 내부 파일을 직접 수정하는 방식으로 안내하지 않는다. 대신 같은 Windows 사용자 계정을 여러 수강생이 돌려 쓰면 이전 로그인 상태가 남을 수 있다는 점만 운영 위험으로 기록한다.

실무적으로는 다음 구조가 안정적이었다.

1. 강의장 PC에서 Cursor Desktop을 실행한다.
2. Desktop에 로그인된 계정이 없으면 웹 로그인 화면으로 이동한다.
3. 브라우저에서 수강생 계정으로 로그인한다.
4. 웹 로그인 완료 후 Desktop으로 로그인 정보를 보내는 흐름을 따라 Cursor Desktop에 연결한다.
5. Desktop 우측 상단 계정 또는 Settings에서 로그인 계정과 Team 소속을 확인한다.
6. Privacy Mode와 실습 레포 열림 상태를 확인한다.

### 로그인 간격

Cursor는 여러 PC에서 동시에 로그인 작업을 몰아서 진행할 때 인증 요청이 발생할 수 있었다. 반대로 호스트별로 1~2분 정도 간격을 두고 하나씩 로그인하면 문제 없이 통과되는 경우가 많았다.

운영 기준은 다음과 같이 둔다.

- 48석 강의장이라도 모든 PC에서 동시에 로그인하지 않는다.
- 1대 로그인 완료 → Desktop 계정 확인 → 다음 PC로 이동하는 순서로 진행한다.
- 조교가 여러 명이어도 같은 시간에 같은 계정 묶음을 병렬로 처리하지 않는다.
- 계정, PC 번호, 로그인 시각, 인증 요청 여부를 기록한다.

### 인증 요청이 뜨는 경우

경험상 여러 곳에서 한꺼번에 로그인하면 휴대폰 번호 인증이 요구될 수 있었고, 휴대폰 번호 1개당 세 번 정도까지만 계정 인증이 가능했다. 이 관찰값을 그대로 잡으면 48석 강의장 로그인에는 최대 16개의 전화번호가 필요해질 수 있다.

그래서 휴대폰 번호 인증을 기본 운영 방식으로 잡지 않는다.

- 동시 로그인을 멈추고 1~2분 간격으로 순차 진행한다.
- 이미 사용한 전화번호를 계속 재사용하지 않는다.
- 인증 요청이 발생한 계정과 전화번호 사용 횟수를 기록한다.
- 인증 요청이 반복되는 PC는 브라우저와 Cursor Desktop을 종료한 뒤 조금 시간을 두고 다시 시도한다.
- 같은 Windows 사용자 폴더에 다른 수강생의 Cursor 로그인 상태가 남아 있지 않은지 확인한다.

### Windows 사용자와 로컬 상태

Cursor Desktop 로그인 이력은 Windows 사용자 폴더의 `%LOCALAPPDATA%` 아래 앱 데이터에 남을 수 있다. 따라서 강의장 PC를 여러 과정에서 재사용할 때는 다음을 지킨다.

- 가능하면 좌석별 Windows 사용자 또는 과정별 Windows 사용자를 분리한다.
- 이전 과정의 Cursor 계정이 남아 있으면 먼저 로그아웃한다.
- 수강생 계정으로 로그인하기 전에 현재 Desktop에 표시되는 계정 이메일을 확인한다.
- 계정 정리를 위해 로컬 앱 데이터 폴더를 임의 삭제하는 절차는 표준 운영으로 두지 않는다. 필요한 경우 PC 이미지 초기화 또는 IT 담당자 절차로 처리한다.

## 관리자가 볼 것

- 좌석 수
- 초대 수락 여부
- 사용량 대시보드
- 사용자별 사용량 급증 여부
- Team 전체 On-demand usage 설정과 monthly spend limit
- included usage와 Free/Bonus usage 소진 상태
- 운영자 계정의 Unpaid Admin 전환 가능 여부
- Privacy Mode 설정
- SSO(Single Sign-On) 설정 여부
- 결제 상태
- 교육 종료 후 멤버 제거 여부

## 사용량이 튀는 경우 확인할 설정

- 비싼 모델이나 Max Mode를 계속 쓰는지
- Agent/Composer를 반복 실행하거나 실패 작업을 계속 재시도하는지
- 실습 레포 외 개인 작업이나 회사 레포를 같이 열었는지
- 대형 레포, 빌드 산출물, 로그, `node_modules`가 컨텍스트에 들어가는지
- `.cursorignore`가 민감 파일과 대용량 폴더를 제외하고 있는지
- Team 전체 On-demand usage 한도가 너무 높게 잡혀 있는지

## 자주 헷갈리는 점

### Cursor Business를 쓰면 코드가 절대 외부로 안 나가나?

아니다. AI 기능을 쓰려면 요청이 처리 서버와 모델 제공자로 갈 수 있다. Privacy Mode는 저장과 학습 사용을 제한하는 장치로 이해한다.

### 팀에서 제거하면 계정 데이터도 모두 삭제되나?

멤버 제거와 계정 삭제는 다르다. 계정 자체 삭제는 사용자가 별도로 진행해야 할 수 있다.

### SSO가 꼭 필요한가?

SSO는 Teams에서도 제공하며 도메인 검증이 필요하다. 자동 프로비저닝인 SCIM과 같은 기능이 아니다. 개인 Gmail을 조직의 검증 도메인처럼 취급하지 말고, 조직 계정·초대 제한·Enterprise SCIM 필요성을 나누어 검토한다. [SSO 범위(P31)](https://cursor.com/docs/account/teams/members)

### Cursor는 공식 리셀러에서 살 수 있나?

Cursor 가격 페이지는 구독이 cursor.com에서만 직접 판매되며, 리셀러나 제3자 판매를 승인하지 않는다고 안내한다. 구매 경로를 확인해야 한다.

## 출처

- [[automation/강의장_계정_초기화|강의장 계정 초기화와 최종 앱 계정 확인]]
- [[issues/AI_서비스_장애_초동대응|AI 서비스 장애 초동대응]]
- [[templates/계정_운영_기록|설정·배정·회수 기록 양식]]

- Cursor Security: https://cursor.com/security
- Cursor Pricing: https://cursor.com/pricing
- Cursor Members and Roles: https://docs.cursor.com/account/teams/members/
- Cursor Account Pricing: https://docs.cursor.com/en/account/pricing
- Cursor Team Pricing: https://docs.cursor.com/en/account/teams/pricing
- Cursor Enterprise: https://cursor.com/enterprise

<div class="wiki-footnotes">
<p class="wiki-footnote" id="abbr-note-1"><a class="wiki-footnote-link" href="#abbr-ref-1">[1]</a> RBAC(Role-Based Access Control): 역할별로 접근 권한을 나누어 부여하는 권한 관리 방식이다.</p>
<p class="wiki-footnote" id="abbr-note-2"><a class="wiki-footnote-link" href="#abbr-ref-2">[2]</a> SAML(Security Assertion Markup Language): 조직 계정과 외부 서비스를 연결할 때 쓰는 인증 연동 표준이다.</p>
<p class="wiki-footnote" id="abbr-note-3"><a class="wiki-footnote-link" href="#abbr-ref-3">[3]</a> OIDC(OpenID Connect): OAuth 2.0 기반의 사용자 인증 연동 표준이다.</p>
<p class="wiki-footnote" id="abbr-note-4"><a class="wiki-footnote-link" href="#abbr-ref-4">[4]</a> SSO(Single Sign-On): 조직 계정 하나로 여러 서비스에 로그인하게 하는 인증 방식이다.</p>
<p class="wiki-footnote" id="abbr-note-5"><a class="wiki-footnote-link" href="#abbr-ref-5">[5]</a> PO(Purchase Order): 구매 주문서다. 기업 구매 절차에서 인보이스 결제와 함께 등장한다.</p>
<p class="wiki-footnote" id="abbr-note-6"><a class="wiki-footnote-link" href="#abbr-ref-6">[6]</a> SCIM(System for Cross-domain Identity Management): 사용자 생성, 수정, 삭제를 자동화하는 계정 관리 표준이다.</p>
</div>
