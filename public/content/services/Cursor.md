# Cursor

> 상위 문서: [[../Home|AI 계정 운영]]
> 분류: Cursor / AI 코드 편집기 / Privacy Mode

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

Cursor 가격 페이지 기준으로 Teams 플랜은 사용자당 월 구독 형태이며, 공유 chats/commands/rules, 중앙 팀 결제, 사용량 분석, 조직 단위 Privacy Mode 제어, RBAC, SAML/OIDC SSO 등을 포함한다. 2026-04-25 기준 공식 가격 페이지에서 개인 Pro는 `$20/month`, Teams는 `$40/user/month`로 구분된다. 포함 사용량 이후에는 on-demand usage가 후불 청구될 수 있다.

Team에서 On-demand usage를 허용하면 설정과 월 한도는 팀 전체 단위로 관리한다. 수강생별로 on-demand 한도를 다르게 주는 방식으로 운영하기 어렵기 때문에, 교육 운영자는 팀 전체 한도를 낮게 두고 사용량 대시보드로 많이 쓰는 사용자를 따로 확인한다.

Enterprise는 여기에 pooled usage, invoice/PO billing, SCIM seat management, audit logs, 더 세밀한 관리자·모델 제어 등이 추가된다. 팀 전체 공유 사용량, 세밀한 보안 통제, 감사 로그가 필요하면 Enterprise 검토 대상이다.

## 역할과 Unpaid Admin

Cursor Teams의 역할은 Member, Admin, Unpaid Admin으로 구분한다. Member와 Admin은 Cursor Pro 기능을 쓰는 paid seat로 보고, Unpaid Admin은 Pro 기능 없이 팀 관리만 하는 역할로 본다.

교육 운영에서는 수업 중에는 운영자에게 Admin이 필요할 수 있다. 하지만 과정 종료 후에는 계속 관리만 필요한 운영자 계정을 Unpaid Admin으로 바꿔 paid seat 수를 줄일 수 있다. 이때도 Unpaid Admin은 Billing, 멤버, 사용량 설정 같은 관리 권한을 갖기 때문에 보안 계정으로 취급한다.

Unpaid Admin 전환 전 확인할 것:

- 수강생 멤버 회수가 끝났는가.
- 강의장 PC의 Cursor Desktop과 브라우저에서 운영자 계정이 로그아웃되었는가.
- 강의장 PC를 외부인이 만질 수 없도록 시건했는가.
- 팀에 최소 1명의 paid member가 남아 있는가.
- Billing 화면에서 paid seat 수가 줄어든 것을 확인했는가.

강의장에 다른 사람이 로그인된 Cursor 계정에 접근할 수 있는 상태라면 Unpaid Admin 전환을 비용 절감 수단으로 쓰지 않는다.

## Privacy Mode

### 핵심

Cursor의 Privacy Mode는 운영상 매우 중요하다.

Cursor 보안 문서에 따르면 Privacy Mode가 켜진 경우 모델 제공자가 코드 데이터를 저장하거나 학습에 사용하지 않는다고 보증한다. 또한 팀 멤버는 기본적으로 Privacy Mode가 강제로 켜진다고 설명한다.

### 그래도 국외 이전 이슈는 남는다

Privacy Mode는 “아예 전송하지 않는다”는 뜻이 아니다.

AI 기능을 쓰려면 요청이 Cursor 서버와 모델 제공자 쪽으로 전송될 수 있다. 다만 저장과 학습 사용을 제한하는 구조로 이해하는 것이 안전하다.

따라서 수강생 개인정보 동의나 국외 이전 고지에서는 “Privacy Mode라서 동의 불필요”라고 단정하지 않는다.

## 데이터와 리텐션

### Privacy Mode일 때

- 코드 데이터가 모델 제공자에 저장되지 않도록 하는 구조
- 모델 제공자와 zero data retention 계약을 유지한다고 설명
- 팀 멤버는 기본적으로 Privacy Mode 강제

### 계정 삭제

Cursor 보안 문서는 사용자가 Settings dashboard에서 Advanced → Delete Account를 할 수 있으며, 계정과 관련된 모든 데이터, indexed codebases를 포함해 30일 내 완전 제거를 보장한다고 설명한다.

### 코드베이스 인덱싱

Cursor는 코드베이스 인덱싱을 제공한다. 보안 문서에 따르면 인덱싱 관련 데이터는 임베딩과 난독화된 메타데이터 형태로 저장될 수 있다. 사용자는 codebase indexing을 비활성화할 수 있다.

## 교육 운영 권장 설정

### 팀 운영

- 팀 플랜으로 운영한다.
- Privacy Mode를 조직 단위로 켠다.
- 가능하면 SSO를 쓴다.
- Enterprise가 아니면 SCIM·감사로그 제한을 감안한다.
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
- SSO 설정 여부
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

수강생이 개인 Gmail을 쓰는 단기 교육이라면 SSO가 어려울 수 있다. 그러나 조직 계정으로 운영하는 장기 과정이라면 SSO/SCIM이 있는 Enterprise 쪽이 관리가 쉽다.

### Cursor는 공식 리셀러에서 살 수 있나?

Cursor 가격 페이지는 구독이 cursor.com에서만 직접 판매되며, 리셀러나 제3자 판매를 승인하지 않는다고 안내한다. 구매 경로를 확인해야 한다.

## 출처

- Cursor Security: https://cursor.com/security
- Cursor Pricing: https://cursor.com/pricing
- Cursor Members and Roles: https://docs.cursor.com/account/teams/members/
- Cursor Account Pricing: https://docs.cursor.com/en/account/pricing
- Cursor Team Pricing: https://docs.cursor.com/en/account/teams/pricing
- Cursor Enterprise: https://cursor.com/enterprise
