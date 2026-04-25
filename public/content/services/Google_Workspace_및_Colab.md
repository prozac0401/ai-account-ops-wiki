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

## 현장 실제 사례

### 처음에는 2개만 구입 가능했던 상황

Colab Pro 결제 초기에 2개만 구매 가능한 것처럼 보이는 상황을 경험한 적이 있다.

다만 공식 문서에는 “필요한 수만큼 라이선스를 구매할 수 있다”는 취지의 설명이 있다. 따라서 “항상 최초 2개만 가능하다”로 적으면 안 된다. 이 사례는 결제 계정 상태, 신규 구독 제한, 지역/판매 채널, 플랜 선택, 결제 검증 상태 등과 엮인 현상으로 기록한다.

### 온라인 직접 구매 시 연간계약만 가능했던 점

Google의 Colab 설정 문서는 온라인으로 직접 구매할 경우 Annual/Fixed-Term Plan을 선택해야 한다고 안내한다. Flexible Plan이 필요하면 Google 영업 담당자 또는 Google Cloud 파트너에게 문의하는 흐름으로 보는 편이 안전하다.

### 월 구독액 절반 선결제 요구

수량을 늘리려 할 때 월 구독액의 절반을 선결제해야 하는 상황을 경험한 적이 있다.

공식 Workspace Flexible Plan 문서에는 신규 Flexible Plan 계정이 가입 후 90일 이내에는 20~50명 제한을 받을 수 있고, 더 늘리려면 목표 총 사용자 수의 50%에 해당하는 수동 결제를 해야 한다는 설명이 있다. 이 결제는 향후 인보이스에 적용되는 크레딧으로 남는다.

따라서 이 상황은 Colab만의 고정 규칙이라기보다, Google Workspace 신규 결제 계정의 수량 제한·신용 검증·수동 결제 규칙과 연결해 보는 것이 좋다.

### 로그인 챌린지가 강하게 걸렸던 상황

강의장 PC에서 관리자가 여러 수강생 계정의 최초 로그인을 일괄 진행하면 Google의 **본인 확인 요청** 또는 **본인 확인 질문**이 뜰 수 있다. 이 문단은 공식 제한값이 아니라 현장 관찰을 기록한 것이다.

현장 경험상 Google 계정은 로그인 위험 판단이 매우 보수적이었다. 특히 새 PC, 새 강의장 네트워크, 짧은 시간의 반복 로그인, 여러 계정의 재활성 작업이 겹치면 같은 사람이 여러 계정을 계속 통과시키기 어려웠다. Workspace 계정 활성화 또는 재활성 흐름에서는 1인당 1계정 정도만 안정적으로 처리되는 패턴이 있었다.

따라서 운영 문서에는 다음처럼 적는다.

- Google 로그인 챌린지는 강의장별, 네트워크별, 시간대별로 다르게 나타날 수 있다.
- 한 사람이 여러 계정을 빠르게 재활성하거나 인증하는 것을 전제로 계획하지 않는다.
- 계정별 복구 정보가 미리 준비되어 있어야 한다.
- 같은 전화번호나 같은 복구 수단을 여러 계정에 반복 사용하는 방식은 실패할 수 있다.
- 계정 인증 실패는 수강생 실수로만 보지 말고, Google 위험 기반 보안 테스트로 분류한다.

## Google 로그인 챌린지 대응

이 작업은 교육 전에 끝내야 한다. 수업 중에 여러 계정의 본인 확인 요청을 한꺼번에 풀려고 하면 강의 흐름이 멈추고, 같은 복구 수단을 반복 사용하다가 더 강한 챌린지가 걸릴 수 있다.

Google Workspace 관리자 문서의 공식 메뉴명 기준으로, 사용자 복구 정보는 다음 위치에서 확인한다.

```text
Google 관리 콘솔
→ 메뉴
→ 디렉터리
→ 사용자
→ 사용자 이름
→ 보안
→ 복구 정보
```

Google 문서는 승인되지 않은 시도가 의심되면 **본인 확인 요청**을 표시할 수 있고, 이때 복구 전화번호 또는 복구 이메일 주소로 전송되는 인증 코드를 입력해야 할 수 있다고 설명한다. 또한 복구 전화번호는 사용자마다 고유해야 하며, 여러 사용자가 같은 복구 전화번호를 쓰면 보안상 자동 차단될 수 있다고 안내한다.

### 최초 로그인 전 준비

- 수강생 계정마다 복구 이메일 주소를 준비한다.
- 가능하면 복구 이메일은 수강생 본인이 접근 가능한 주소로 둔다.
- 전화번호 인증을 기본 수단으로 계획하지 않는다.
- 강의장 PC, Windows 사용자, 수강생 계정, 로그인 시각을 기록할 표를 만든다.
- 같은 사람이 여러 계정을 연속 인증해야 하는 구조를 피한다.

### 챌린지가 안 뜨는 경우

로그인 챌린지가 없어도 마지막 확인은 반드시 한다.

1. 강의장 PC에서 지정된 수강생 계정으로 로그인한다.
2. Google 계정 화면에서 **보안 및 로그인**으로 이동한다.
3. **최근 보안 관련 활동** 패널에서 **보안 관련 활동 검토**를 연다.
4. 방금 강의장 PC에서 수행한 로그인이 맞으면 **예**를 선택한다.
5. **내 기기**에서 **기기 관리**를 열어 강의장 PC가 정상적으로 보이는지 확인한다.
6. 계정-좌석-강의장 매핑표에 확인 완료 시각을 남긴다.

이 확인을 해 두면 같은 강의장 또는 다음 강의장으로 이동할 때 Google이 새 로그인을 덜 의심할 수 있다. 다만 이것도 보장 규칙은 아니므로 “챌린지 방지책”이 아니라 “정상 로그인 확인 절차”로 본다.

### 챌린지가 뜨는 경우

현장에서 가장 현실적이었던 흐름은 복구 이메일 인증이었다.

1. Google 로그인 화면에서 비밀번호를 입력한다.
2. **본인 확인 요청**이 뜨면 **다른 방법 시도**를 선택한다.
3. 복구 이메일 주소를 입력하는 방법을 선택한다.
4. 복구 이메일 받은편지함에서 Google 인증 코드를 확인한다.
5. 로그인 화면에 인증 코드를 입력한다.
6. 로그인 후 **보안 및 로그인** → **최근 보안 관련 활동** → **보안 관련 활동 검토**에서 방금 로그인이 본인 작업임을 확인한다.
7. **내 기기** → **기기 관리**에서 강의장 PC를 확인한다.

실무적으로 최초 로그인 시 한 사람이 3개 이상 계정을 계속 인증하기 어려운 경우가 있었다. 그래서 “전화번호 하나로 여러 계정을 밀어붙이는 방식”보다 계정별 복구 이메일을 준비하는 방식이 더 안정적이었다.

### 여러 강의장으로 계정을 옮길 때

Workspace 계정을 여러 강의장에서 순차적으로 사용해야 하면 계정을 옮겨 로그인해야 한다.

안전한 운영 방식은 다음과 같다.

1. 이전 강의장 PC에서 수업이 끝나면 Google 서비스에서 로그아웃한다.
2. 공용 PC라면 Google 공식 안내처럼 시크릿 브라우징 창을 쓰고, 사용 후 모든 시크릿 창을 닫는다.
3. 시크릿 창을 쓸 수 없는 운영 환경이라면 로그아웃 후 브라우저 캐시와 쿠키, 방문 기록 정리를 포함해 좌석 정리 절차를 둔다.
4. 새 강의장에서는 한꺼번에 모든 PC를 로그인하지 않고 좌석 단위로 순차 로그인한다.
5. 챌린지가 없으면 **최근 보안 관련 활동**에서 **예**를 눌러 정상 로그인을 확인한다.
6. 챌린지가 있으면 복구 이메일 인증을 먼저 시도하고, 전화번호 인증을 반복 사용하지 않는다.
7. 한 계정을 두 강의장 PC에 동시에 로그인해 두지 않는다.

관리자가 일시적으로 문제를 풀어야 하는 경우, Google Workspace 문서에는 승인된 사용자가 본인 확인을 할 수 없을 때 사용자 단위로 **10분 동안 본인 확인 요청 또는 본인 확인 질문을 사용 중지**할 수 있다고 안내된다. 다만 이는 보안을 약화시키는 예외 조치이므로 최고 관리자 승인, 대상 계정, 시작 시각, 종료 시각, 사유를 기록하고 반복 사용하지 않는다.

## 운영 체크리스트

### 구독 전

- 도메인 검증이 되어 있는가.
- Google 관리 콘솔에 접근 가능한가.
- Billing 관리 권한이 있는가.
- Cloud Identity Free와 Workspace 라이선스 구조를 정했는가.
- 자동 라이선스 할당이 의도대로 되어 있는가.

### 구독 중

- Colab 서비스가 켜져 있는가.
- Pro/Pro+ 라이선스가 실제 사용자에게 할당되었는가.
- 라이선스 수와 실제 수강생 수가 맞는가.
- Google 로그인 챌린지 대응용 복구 이메일이 준비되었는가.
- 최초 로그인 후 **최근 보안 관련 활동**에서 정상 로그인을 확인했는가.
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
- 사용자의 보안 설정 관리하기: https://knowledge.workspace.google.com/admin/security/manage-a-users-security-settings?hl=ko
- 보안 테스트로 Google Workspace 계정 보호하기: https://support.google.com/a/answer/6002699?hl=ko
- 본인 소유가 아닌 기기에 로그인: https://support.google.com/accounts/answer/2917834?co=GENIE.Platform%3DDesktop&hl=ko
- 해킹되거나 도용된 Google 계정 보호: https://support.google.com/accounts/answer/6294825?hl=ko
