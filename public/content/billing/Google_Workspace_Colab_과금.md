# Google Workspace·Colab 과금

> 상위 문서: [[../Home|AI 계정 운영]]
> 분류: Google Workspace / Colab / 결제

[목차]

## 개요

Google Workspace와 Colab 과금은 “구독”, “라이선스”, “서비스 접근”, “카드 결제”가 섞여 있다.

특히 Cloud Identity Free에서 Business Starter를 붙이거나, Colab Pro/Pro+를 조직에 추가하는 과정에서는 결제 화면이 예상과 다르게 나올 수 있다.

## Cloud Identity Free에서 Business Starter로 전환

### 정확한 표현

“Cloud Identity Free를 Business Starter로 바꾼다”기보다, 같은 조직에 **Google Workspace Business Starter 구독을 추가하고 필요한 사용자에게 유료 라이선스를 할당한다**고 보는 편이 정확하다.

Cloud Identity Free 라이선스는 무료 ID 라이선스로 남을 수 있다. 사용자가 Business Starter 라이선스를 추가로 받으면 Gmail 등 Workspace 앱을 사용할 수 있다.

### 운영 순서

1. 현재 조직에 Cloud Identity Free가 있는지 확인한다.
2. 자동 Workspace 라이선스 할당이 켜져 있는지 확인한다.
3. Business Starter 구독을 추가한다.
4. 필요한 사용자에게만 Business Starter 라이선스를 준다.
5. 나머지 사용자는 Cloud Identity Free로 둔다.
6. 새 사용자 생성 테스트를 한다.
7. 의도치 않게 유료 라이선스가 붙는지 확인한다.

## 카드 결제

Google Admin console의 Billing → Payment accounts에서 결제 수단을 관리한다.

카드를 기본 결제 수단으로 등록하면 Google이 해당 카드를 승인한 뒤 자동 결제 수단으로 사용한다.

### 카드 인증

Google은 결제 정보 검증을 요구할 수 있다. 상황에 따라 작은 임시 승인 금액 또는 문서 제출 방식이 나올 수 있다.

운영 기록에는 다음을 남긴다.

- 카드 등록일
- 카드 소유 부서
- 인증 완료 여부
- 결제 계정 이름
- 백업 카드 여부
- 결제 실패 시 연락받을 이메일

## 수동 결제와 선결제

Google Workspace에서는 수동 결제 또는 조기 결제가 필요한 상황이 있다.

특히 Flexible Plan 신규 계정은 가입 후 90일 이내에 20~50명 제한이 있을 수 있고, 더 많은 사용자를 추가하려면 목표 총 사용자 수의 50%에 해당하는 수동 결제를 해야 한다는 공식 안내가 있다. 이 결제는 향후 인보이스에 적용될 크레딧으로 남는다.

### 프로젝트 실제 사례

프로젝트에서는 수량을 늘리기 위해 월 구독액의 절반을 선결제해야 하는 상황이 있었다.

운영 문서에서는 이렇게 기록한다.

> “Google Workspace 신규 Flexible Plan 제한 또는 결제 신용 확인과 관련된 선결제 요구로 보임. 공식 Flexible Plan 문서의 90일/50% 수동 결제 규칙과 연결해 관리한다. Colab 단독 정책으로 단정하지 않는다.”

## Colab Pro/Pro+ 과금

### 온라인 직접 구매

Colab Pro/Pro+는 Google Admin console의 Billing → Buy or upgrade → More products에서 추가한다.

공식 Colab 설정 문서에는 온라인 직접 구매 시 Annual/Fixed-Term Plan을 선택해야 한다고 안내되어 있다. Flexible Plan은 Google 영업 담당자나 Cloud 파트너를 통해 문의하는 방식으로 보는 것이 안전하다.

### 라이선스 수

공식 문서는 필요한 수만큼 라이선스를 구매할 수 있다는 취지로 안내한다. 하지만 실제 결제 화면에서는 신규 계정 상태, 결제 검증, 플랜 조건에 따라 제한처럼 보일 수 있다.

프로젝트의 “처음 2개밖에 구매 불가” 사례는 실제 사례로 남기되, 일반 규칙으로 쓰지 않는다.

## 인보이스와 회계 처리

인보이스는 보통 Billing → Payment accounts 쪽에서 확인한다.

운영자는 매월 다음을 확인한다.

- 청구 월
- 구독 이름
- 좌석 수
- 세금/환율
- 결제 카드
- 크레딧 적용 여부
- 선결제 잔액
- 실패한 결제 여부

## 자주 헷갈리는 점

### Cloud Identity Free 사용자는 비용이 0원인가?

Cloud Identity Free 자체는 무료 라이선스다. 하지만 같은 사용자에게 Workspace, Colab, Voice 같은 유료 라이선스가 붙으면 비용이 발생한다.

### Colab Pro를 샀는데 왜 사용자가 무료 Colab처럼 보이나?

서비스 ON, 라이선스 할당, 로그인 계정, 반영 지연을 확인한다.

### 선결제는 비용을 더 내는 것인가?

보통은 크레딧으로 남아 향후 인보이스에 적용된다. 다만 회계상 처리 방식은 내부 기준을 따라야 한다.

## 출처

- Cloud Identity 라이선스: https://docs.cloud.google.com/identity/docs/how-to/how-licensing-works-for-cloud-identity
- 자동 Google Workspace 라이선스 끄기: https://docs.cloud.google.com/identity/docs/how-to/turn-off-automatic-google-workspace-licensing-during-setup
- Colab Pro/Pro+ 설정: https://knowledge.workspace.google.com/admin/colab/set-up-colab-pro
- Colab 라이선스 할당: https://knowledge.workspace.google.com/admin/colab/assign-colab-licenses-to-users?hl=ko
- Flexible Plan 90일 제한과 50% 수동 결제: https://knowledge.workspace.google.com/admin/billing/flexible-plan
- 카드 결제: https://knowledge.workspace.google.com/admin/billing/auto-pay-with-a-credit-card
- 결제 정보 검증: https://knowledge.workspace.google.com/admin/billing/verify-your-payment-information
