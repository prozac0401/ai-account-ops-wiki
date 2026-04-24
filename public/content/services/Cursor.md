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

교육생 입장에서는 편하다. 운영자 입장에서는 “무슨 코드가 어디까지 전송되는가”를 설명해야 한다.

## 플랜 구조

Cursor 가격 페이지 기준으로 Teams 플랜은 사용자당 월 구독 형태이며, 공유 chats/commands/rules, 중앙 팀 결제, 사용량 분석, 조직 단위 Privacy Mode 제어, RBAC, SAML/OIDC SSO 등을 포함한다. Enterprise는 여기에 invoice/PO billing, SCIM seat management, audit logs, 더 세밀한 관리자·모델 제어 등이 추가된다.

## Privacy Mode

### 핵심

Cursor의 Privacy Mode는 운영상 매우 중요하다.

Cursor 보안 문서에 따르면 Privacy Mode가 켜진 경우 모델 제공자가 코드 데이터를 저장하거나 학습에 사용하지 않는다고 보증한다. 또한 팀 멤버는 기본적으로 Privacy Mode가 강제로 켜진다고 설명한다.

### 그래도 국외 이전 이슈는 남는다

Privacy Mode는 “아예 전송하지 않는다”는 뜻이 아니다.

AI 기능을 쓰려면 요청이 Cursor 서버와 모델 제공자 쪽으로 전송될 수 있다. 다만 저장과 학습 사용을 제한하는 구조로 이해하는 것이 안전하다.

따라서 교육생 개인정보 동의나 국외 이전 고지에서는 “Privacy Mode라서 동의 불필요”라고 단정하지 않는다.

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
- 교육생에게 개인 Cursor Pro를 쓰게 하지 않는다.

### 레포 운영

- 실습용 레포를 별도로 만든다.
- 실제 회사 코드 대신 샘플 코드를 쓴다.
- `.cursorignore`로 민감 폴더를 제외한다.
- `.env`, credential, key 파일은 레포에 넣지 않는다.
- GitHub에 API 키가 올라가지 않도록 사전 안내한다.

### 현장 확인

교육생에게 다음을 확인하게 한다.

- Cursor에 로그인한 이메일이 교육 신청 이메일과 같은가.
- 팀에 들어와 있는가.
- Privacy Mode가 켜져 있는가.
- 실습 레포만 열었는가.
- 개인 프로젝트나 회사 레포를 열지 않았는가.

## 관리자가 볼 것

- 좌석 수
- 초대 수락 여부
- 사용량 대시보드
- Privacy Mode 설정
- SSO 설정 여부
- 결제 상태
- 교육 종료 후 멤버 제거 여부

## 자주 헷갈리는 점

### Cursor Business를 쓰면 코드가 절대 외부로 안 나가나?

아니다. AI 기능을 쓰려면 요청이 처리 서버와 모델 제공자로 갈 수 있다. Privacy Mode는 저장과 학습 사용을 제한하는 장치로 이해한다.

### 팀에서 제거하면 계정 데이터도 모두 삭제되나?

멤버 제거와 계정 삭제는 다르다. 계정 자체 삭제는 사용자가 별도로 진행해야 할 수 있다.

### SSO가 꼭 필요한가?

교육생이 개인 Gmail을 쓰는 단기 교육이라면 SSO가 어려울 수 있다. 그러나 조직 계정으로 운영하는 장기 과정이라면 SSO/SCIM이 있는 Enterprise 쪽이 관리가 쉽다.

### Cursor는 공식 리셀러에서 살 수 있나?

Cursor 가격 페이지는 구독이 cursor.com에서만 직접 판매되며, 리셀러나 제3자 판매를 승인하지 않는다고 안내한다. 구매 경로를 확인해야 한다.

## 출처

- Cursor Security: https://cursor.com/security
- Cursor Pricing: https://cursor.com/pricing
- Cursor Enterprise: https://cursor.com/enterprise
