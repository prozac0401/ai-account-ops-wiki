# Google Workspace 및 Colab

> 상위 문서: [[../Home|AI 계정 운영]]
> 분류: Google Workspace / Colab / 라이선스 운영

[목차]

## 개요

Google Workspace는 조직 계정과 결제의 바닥이다. Colab Pro와 Pro+는 그 위에 얹는 교육용 컴퓨팅 라이선스에 가깝다.

둘을 같은 상품으로 보면 운영이 꼬인다. Workspace는 계정과 관리 콘솔이고, Colab은 노트북 실행 환경과 컴퓨팅 자원이다.

## Cloud Identity Free와 Business Starter

### 공식 기준

Cloud Identity Free와 Google Workspace는 한 조직에서 함께 쓸 수 있다. Google 문서에 따르면 Cloud Identity와 Google Workspace를 함께 가지고 있으면 모든 사용자는 무료 Cloud Identity 라이선스를 자동으로 가지며, 필요한 사용자에게만 유료 Google Workspace 라이선스를 추가로 줄 수 있다.

즉, 모든 사용자에게 Business Starter가 필요한 것은 아니다.

### 운영 해석

| 사용자 유형 | 권장 라이선스 |
|---|---|
| 로그인과 조직 관리만 필요 | Cloud Identity Free |
| Gmail, Calendar, Drive 등 Workspace 앱 필요 | Business Starter 이상 |
| Colab Pro/Pro+만 필요한지 검토 중 | Cloud Identity/Workspace 호환성과 Colab 구매 조건 확인 |

### 자동 라이선스 주의

Cloud Identity Free를 설정할 때 Google은 자동 Google Workspace 라이선스 할당을 끄는 방식을 안내한다. 그렇지 않으면 새 사용자에게 유료 Workspace 라이선스가 자동으로 붙을 수 있다.

운영 중에는 다음을 확인한다.

- 새 사용자 생성 시 Business Starter가 자동으로 붙는가.
- Cloud Identity Free만 필요한 계정에도 유료 라이선스가 붙는가.
- 자동 할당을 조직 전체에 켰는가.
- 특정 OU에만 라이선스를 주려는 구조인가.

## Colab 서비스 구조

Colab은 세 층으로 보면 이해하기 쉽다.

```text
1. Google 조직 계정
2. Colab 서비스 접근 권한
3. Colab Pro 또는 Pro+ 라이선스
```

이 셋 중 하나만 빠져도 “샀는데 안 된다”가 된다.

## Colab Pro/Pro+ 설정 순서

### 1단계: 구독 추가

Google Admin console에서 Colab Pro 또는 Pro+ 구독을 추가한다.

공식 경로는 다음과 같은 흐름이다.

```text
Admin console
→ Billing
→ Buy or upgrade
→ More products
→ Colab Pro 또는 Colab Pro+
→ Get Started
```

### 2단계: Colab 서비스 켜기

무료 Colab 서비스가 꺼져 있으면 Pro 라이선스를 줘도 사용자가 기능을 못 쓸 수 있다.

공식 문서도 Colab 서비스를 사용자에게 켜는 단계를 별도로 안내한다.

### 3단계: 라이선스 할당

사용자가 Colab Pro/Pro+를 쓰려면 해당 서비스 라이선스가 필요하다. 라이선스는 개별 사용자, CSV, OU 또는 액세스 그룹 기준으로 할당할 수 있다.

## 프로젝트 실제 사례

### 처음에는 2개만 구입 가능했던 상황

프로젝트에서는 Colab Pro 결제 초기에 2개만 구매 가능한 것처럼 보이는 상황이 있었다.

다만 공식 문서에는 “필요한 수만큼 라이선스를 구매할 수 있다”는 취지의 설명이 있다. 따라서 “항상 최초 2개만 가능하다”로 적으면 안 된다. 이 사례는 결제 계정 상태, 신규 구독 제한, 지역/판매 채널, 플랜 선택, 결제 검증 상태 등과 엮인 현상으로 기록한다.

### 온라인 직접 구매 시 연간계약만 가능했던 점

Google의 Colab 설정 문서는 온라인으로 직접 구매할 경우 Annual/Fixed-Term Plan을 선택해야 한다고 안내한다. Flexible Plan이 필요하면 Google 영업 담당자 또는 Google Cloud 파트너에게 문의하는 흐름으로 보는 편이 안전하다.

### 월 구독액 절반 선결제 요구

프로젝트에서는 수량을 늘리려 할 때 월 구독액의 절반을 선결제해야 하는 상황이 있었다.

공식 Workspace Flexible Plan 문서에는 신규 Flexible Plan 계정이 가입 후 90일 이내에는 20~50명 제한을 받을 수 있고, 더 늘리려면 목표 총 사용자 수의 50%에 해당하는 수동 결제를 해야 한다는 설명이 있다. 이 결제는 향후 인보이스에 적용되는 크레딧으로 남는다.

따라서 이 상황은 Colab만의 고정 규칙이라기보다, Google Workspace 신규 결제 계정의 수량 제한·신용 검증·수동 결제 규칙과 연결해 보는 것이 좋다.

## 운영 체크리스트

### 구독 전

- 도메인 검증이 되어 있는가.
- Google Admin console에 접근 가능한가.
- Billing 관리 권한이 있는가.
- Cloud Identity Free와 Workspace 라이선스 구조를 정했는가.
- 자동 라이선스 할당이 의도대로 되어 있는가.

### 구독 중

- Colab 서비스가 켜져 있는가.
- Pro/Pro+ 라이선스가 실제 사용자에게 할당되었는가.
- 라이선스 수와 실제 수강생 수가 맞는가.
- 연간계약인지 Flexible인지 확인했는가.
- 결제 카드 인증이 완료되었는가.

### 교육 종료 후

- Colab 라이선스를 회수했는가.
- Business Starter가 필요 없는 계정에서 제거되었는가.
- Cloud Identity Free 계정으로 남길지 정했는가.
- 결제 예정 금액과 인보이스를 확인했는가.

## 자주 헷갈리는 점

### Cloud Identity Free면 Gmail도 쓸 수 있나?

일반적으로 Cloud Identity Free는 조직 계정과 인증 중심이다. Gmail 같은 Workspace 앱이 필요하면 Google Workspace 라이선스가 필요하다고 보는 것이 안전하다.

### Colab Pro 라이선스를 샀는데 왜 안 보이나?

다음 중 하나일 수 있다.

- Colab 서비스가 꺼져 있음
- 사용자에게 라이선스가 할당되지 않음
- 사용자가 다른 Google 계정으로 로그인함
- 라이선스 반영 지연
- 결제 또는 구독 상태 문제

### Business Starter로 바꾸면 모든 사용자가 유료가 되나?

자동 라이선스 설정에 따라 달라진다. Cloud Identity Free와 함께 운영하면서 필요한 사용자에게만 Business Starter를 주는 방식이 가능하다.

## 출처

- Cloud Identity 라이선스 구조: https://docs.cloud.google.com/identity/docs/how-to/how-licensing-works-for-cloud-identity
- Cloud Identity 설정 중 자동 Workspace 라이선스 끄기: https://docs.cloud.google.com/identity/docs/how-to/turn-off-automatic-google-workspace-licensing-during-setup
- Colab Pro/Pro+ 설정: https://knowledge.workspace.google.com/admin/colab/set-up-colab-pro
- Colab 라이선스 할당: https://knowledge.workspace.google.com/admin/colab/assign-colab-licenses-to-users?hl=ko
- Google Workspace Flexible Plan 신규 계정 제한 및 50% 수동 결제: https://knowledge.workspace.google.com/admin/billing/flexible-plan
