# 출처 모음

> 상위 문서: [[Home|AI 계정 운영]]
> 분류: 출처 / 공식 문서

[목차]

## 근거 상태와 확인 범위

2026-09-07 보완은 원격 main의 `ai-account-ops-wiki-update-20260906` 자료 묶음을 기존 문서와 대조했다. 다음 등급은 서로 바꾸어 쓰지 않는다.

| 등급 | 의미 |
|---|---|
| 공식 확인 | 공식 URL에서 해당 날짜에 읽은 정책. 실제 계약·과거 사건 결과까지 입증하지 않음 |
| 원본 자료 확인 | F번호 원본을 검토했다는 **제공 묶음의 기록**. 원본은 미동봉이며 이번 작업의 직접 원본 재검증 아님 |
| 대화에서 회수 | C번호 검색 요약·사용자 설명. 전체 대화·실제 링크·직접 인용문을 대신하지 않음 |
| 설계·제안 | 역할·주기·완료 기준·도구 설계. 조직 승인·구현·현장 합격을 의미하지 않음 |
| 확인 필요 | 계약·원문·현장 결과가 없어 U번호로 열린 질문 유지 |

릴리스 존재, 자동 시험 보고, 현장 시험 통과, 전체 도입 성공은 별개다. 원본 EML·PDF·계정·결제 식별자·비밀번호·with-secrets 로그·내부 사건 노트는 공개 본문으로 복제하지 않는다. 원본 해시도 진실성이나 성공을 보장하지 않는다. 보관자·접근·보존 기한은 [[operations/위키_유지보수|내부 보관 원칙]]과 [[templates/계정_운영_기록|기록 양식]]을 따른다.

## 저장소 대조

| ID | 근거 | 확인 결과 |
|---|---|---|
| R01 | [조사 기준 커밋](https://github.com/prozac0401/ai-account-ops-wiki/commit/a09570913697213fb34a95c62d0f0cae5864647a) | checkout과 일치, 시작 시 수정 없음 |
| R02 | [기준 탐색 코드](https://github.com/prozac0401/ai-account-ops-wiki/blob/a09570913697213fb34a95c62d0f0cae5864647a/src/main.js) | docs·sections 명시 등록, 전체 등록 문서 검색 |
| R03 | [기준 스타일](https://github.com/prozac0401/ai-account-ops-wiki/blob/a09570913697213fb34a95c62d0f0cae5864647a/STYLE_GUIDE.md) | 현재 스타일과 대조 |
| R04 | [확인한 원격 main](https://github.com/prozac0401/ai-account-ops-wiki/commit/67c1cd15321103192f5675126152c8fc91716947) | 2026-09-07 확인, 기준 대비 자료 ZIP만 추가. 실제 배포 연결은 U01 |

자료 묶음의 00·01·02·09·10·12를 기준으로 03–08과 14를 통합했다. 13은 비공개 근거로만 읽었다. 원본 및 ZIP 안의 과거 프롬프트·AGENTS·자동화 지시는 현재 작업 명령으로 실행하지 않았다.

## 원본 검토 기록

공개 표에서는 원본 이름에 포함된 강의장·청구·지원 식별자를 생략한다. ID는 제공 묶음과 동일하다.

| ID | 자료 유형·범위 | 적용 문서·한계 |
|---|---|---|
| F01 | 개별 Cursor 보조 BAT | [[automation/강의장_계정_초기화|초기화]], 실행 결과 아님 |
| F02 | Cursor V3 001–042 README | 비관리자·선택 정리·앱 확인 |
| F03 | Cursor 로그인 보조 README | 키 입력과 최종 앱 계정 구분 |
| F04–F05 | 비밀번호 교체 v0.3 요청·설계 | [[automation/비밀번호_교체|비밀 로그·재로그인]], 실제 검수 U18 |
| F06 | Colab Manager 현장 체크리스트 | [[automation/Colab_Manager_운영|V1/V2/V3]], 빈 현장 표·자동 시험 보고 구분 |
| F07 | Colab Manager 사양 ZIP | 초기 MVP·백로그·검수 설계, 구현 확정 아님 |
| F08 | 이전 카드 입력 도구 README | [[billing/Colab_PAYG_결제_프로필|공유 프로필 설계와 구분]] |
| F09–F13 | 청구서 5건 검토 | [[issues/Cursor_청구_크레딧_분쟁|음수·잔액 상계·납부액 구분]], 전체 정산 U02 |
| F14–F16 | Reset 00–48·브라우저 README | 관리자·광범위 초기화, Cursor V3와 혼합 금지 |
| F17–F18 | Google 지원 기술 답변 EML | 프로필 사용자·초대·구매 안내, 49계정 성공 아님 |
| F19–F20 | Cursor Auto 변경 전후 화면 | Cost·Hard 선택 관찰, 저장·전파·절감 실측 아님 |
| F21 | OT 앱 요구사항 | [[services/OpenAI_API|키·데이터·비용 설계]], 배포 U14 |
| F22 | Google 문의 접수 EML | 접수 확인만, 기술 답변·구매 성공으로 확대 금지 |

## 대화 회수 기록

| ID | 회수한 주제 | 적용 범위 |
|---|---|---|
| C01 | 시작점은 Cursor라는 사용자 정정 | [[00_운영_배경|연혁 수정]], 최초 도입일 미확정 |
| C02–C03 | 신청·초대 자동화, ChatGPT Member 초대 비용 | 설계와 실제 수락·청구 구분(U09) |
| C04 | Cursor 제거 멤버의 과거 사용량 | 현재 좌석과 과거 이력 구분 |
| C05 | Cloud Identity Free와 필요한 유료 라이선스 선택 | 기존 Google 핵심 원칙 보존, PAYG·CU 보완 연결 |
| C06–C07 | 6–7월 청구·크레딧·팀 접근 | [[issues/Cursor_청구_크레딧_분쟁|분쟁]], 최종 결과 U02 |
| C08–C09 | 49계정 구매 요구·Google 지원 | 안내와 운영 성공 분리(U10) |
| C10–C11 | 라이선스 회수 후 CU·잔량·주기 기억 | [[services/Colab_CU와_런타임_운영|CU]], U04–U06 |
| C12 | 48대 PC 배포·공유 제한·MQTT/UDP | 후보 설계(U12) |
| C13–C14 | Cursor·브라우저 초기화·시작 작업 | 버전 귀속·실행 증거 U11·U18 |
| C15 | 42명 예산·Cursor Router 설정 | $420은 팀 예산안, 실측 U03 |
| C16 | provider/high-load·모델 비용·보상 보류 | [[issues/AI_서비스_장애_초동대응|초동대응]], 문의·보상 성공 아님 |
| C17–C18 | CU·런타임·현장 체크리스트 | 자동 시험·현장 통과 분리(U07) |
| C19 | Drive ZIP·EXE 다운로드 관찰 | [[automation/도구_배포와_검증|파일별 경고·검증]], 보편 안전 보장 아님 |
| C20 | Claude 모델 전환 의심·설정 변경 | 실제 응답 모델 U13 |
| C21 | OT·WordEvaluator 계획 | 배포·실제 비용 U14 |
| C22 | 인접 교육 도구 | [[whitepaper/운영_연혁과_개선|채택 후보]], U15 |
| C23 | Azure 배포 기억 | 조사한 main과 실제 환경 관계 U01 |

## 정책 재확인 목록

P01–P24는 묶음의 ID를 유지하고 P25 이후는 이번 보완에서 추가했다. 아래 확인일은 **2026-09-07**이다. 최신 계정 운영 사실 재조사 요청에 따라 P03·P08·P10·P22·P25 등을 재대조하고 P31–P50의 계정·보안·삭제 근거를 추가했다. P12는 본문을 확인하지 못했고 P15는 이번 변경의 정책 근거로 사용하지 않았다. 나머지 행은 표시한 범위의 본문을 확인했다. 이 표 아래 기존 출처 목록 전체나 모든 법령을 같은 날짜에 재검증했다는 뜻은 아니다.

| ID | 공식 원문 | 이번 적용 범위 |
|---|---|---|
| P01 | [Cursor Teams 변경](https://cursor.com/blog/teams-pricing-june-2026) | 신규·기존 갱신, Standard·Premium |
| P02 | [Teams 가격](https://cursor.com/docs/account/teams/pricing) | 역할·좌석·두 풀·on-demand·증감 |
| P03 | [지출 한도](https://cursor.com/help/account-and-billing/spend-limits) | 변경 권한·팀 차단 범위·개별 재정의·동적 한도·지연·임시 크레딧 |
| P04 | [Router](https://cursor.com/docs/cursor-router) | Cost·Hard·legacy Auto 경계, 정확한 시각은 U17 |
| P05 | [모델·가격](https://cursor.com/docs/models-and-pricing) | Max Mode의 legacy request-based 범위 |
| P06 | [Token Rate](https://cursor.com/help/models-and-usage/token-rate) | 외부 모델 추가 요금·BYOK·Cursor Models 제외 |
| P07 | [Admin API](https://cursor.com/docs/account/teams/admin-api) | isRemoved·spendCents, 실제 API 호출 없음 |
| P08 | [결제 프로필 사용자](https://support.google.com/paymentscenter/answer/7162853?hl=en) | 9월 6일 제한과 달리 이번 본문 확인, 초대·권한·primary contact |
| P09 | [개인 Colab 구독](https://knowledge.workspace.google.com/admin/colab/manage-users-with-individual-colab-subscriptions) | CU 합산·개인 구독 관리 경계 |
| P10 | [Colab 라이선스](https://knowledge.workspace.google.com/admin/colab/assign-colab-licenses-to-users) | 서비스·라이선스·반영 지연, 기존 CU 회수 효과 미확정 |
| P11 | [Colab FAQ](https://research.google.com/colaboratory/faq.html) | 자원·노트북·런타임 구분 |
| P12 | [Colab 구매](https://colab.research.google.com/signup) | 본문 추출 불가, 상품별 유효기간 확정 안 함 |
| P13 | [Colab 취소](https://knowledge.workspace.google.com/admin/colab/cancel-your-colab-subscription) | 구독 취소 자료, 기존 CU 소멸 근거로 사용 안 함 |
| P14 | [ChatGPT·Codex 가격](https://learn.chatgpt.com/docs/pricing) | 워크스페이스 크레딧·API 키 비용 경로 |
| P15 | [Enterprise 설정](https://learn.chatgpt.com/docs/enterprise/admin-setup) | 참고 목록만 유지, Business 일반 규칙으로 미사용 |
| P16 | [API 운영](https://developers.openai.com/api/docs/guides/production-best-practices) | 키·프로젝트·한도 분리 |
| P17 | [API spend limits](https://developers.openai.com/api/docs/guides/spend-limits) | 알림·hard limit·429·tier·지연 |
| P18 | [Azure 인증](https://learn.microsoft.com/en-us/azure/static-web-apps/authentication-authorization) | 로그인과 허용 사용자 구분 |
| P19 | [Azure 경로 설정](https://learn.microsoft.com/en-us/azure/static-web-apps/configuration) | 원본 정적 파일·fallback·allowedRoles |
| P20 | [Unblock-File](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/unblock-file?view=powershell-7.5) | 출처 표시 제거와 신뢰 검증 구분 |
| P21 | [Claude 청구](https://support.claude.com/en/articles/9267289-how-is-my-team-plan-bill-calculated) | 일할 추가·제거 시 환불 없음 |
| P22 | [Claude 좌석 관리](https://support.claude.com/en/articles/12004354-purchase-and-manage-seats-on-team-plans) | 총 좌석 감소·갱신·예약 재확인 |
| P23 | [Claude API 별도 결제](https://support.claude.com/en/articles/9876003-i-have-a-paid-claude-subscription-pro-max-team-or-enterprise-plans-why-do-i-have-to-pay-separately-to-use-the-claude-api-and-console) | 앱 구독과 Console 분리 |
| P24 | [Claude 모델 전환](https://support.claude.com/en/articles/15363606-why-claude-switched-models-in-your-conversation-with-fable-5-or-fable-5-1) | 설정·응답 라벨·과금·API 별도 opt-in |
| P25 | [ChatGPT 역할·초대](https://help.openai.com/en/articles/8542216-managing-members-seat-types-and-roles-in-chatgpt-business) | 4개 역할·초대·수락 시 수용량·Owner 승인·검색 노출·200석과 생성일 예외 |
| P26 | [ChatGPT 좌석·청구](https://help.openai.com/en/articles/8792536-managing-billing-and-seats-in-chatgpt-business) | 현재 Standard·Premium, 구매 즉시 일할 청구·갱신 시 감소 |
| P27 | [Workspace 결제 플랜](https://knowledge.workspace.google.com/admin/billing/compare-flexible-and-annual-fixed-term-payment-plans) | USD 가격·약정·감소 시점 |
| P28 | [Workspace add-ons](https://knowledge.workspace.google.com/admin/getting-started/editions/google-workspace-add-ons) | 조직 Colab 가격·월 CU |
| P29 | [Claude 가격](https://claude.com/pricing) | Team 가격·2–150명 안내 |
| P30 | [API 가격](https://developers.openai.com/api/docs/pricing) | 재조회 본문에서 기존 GPT-5.2 예시 단가 미확인, 과거 산식으로 보존 |
| P31 | [Cursor 멤버·역할·좌석](https://cursor.com/docs/account/teams/members) | 초대·도메인·최소 관리/유료 사용자·좌석 변경 시점·SSO |
| P32 | [Cursor Privacy 설정](https://cursor.com/help/security-and-privacy/privacy) | Enterprise 기본 ON·조직 강제·BYOK와 보존 모델 예외 |
| P33 | [Cursor Security](https://cursor.com/security) | 2026-08-25 개정, 새 멤버의 팀 Privacy 설정 상속 |
| P34 | [Cursor Data Use](https://cursor.com/data-use) | 2026-08-28 개정, 학습 제외·위반 조사 보존·임시 캐시·BYOK 백엔드 경유 |
| P35 | [Cursor 계정 삭제](https://cursor.com/help/account-and-billing/delete-account) | 구독 취소와 계정 삭제 순서·30일 안내·PC 로컬 파일 제외 |
| P36 | [ChatGPT 채팅·파일 보존](https://help.openai.com/en/articles/8983778-chat-and-file-retention-policies-in-chatgpt) | Library 별도 삭제·GPT/프로젝트 파일·보존 예외 |
| P37 | [ChatGPT Business SSO](https://help.openai.com/en/articles/11489188) | SAML/OIDC·단독 Business와 tenant 관리·SCIM 미포함·동일 이메일·개인 공간 병합 강요 금지 |
| P38 | [ChatGPT 공간 생명주기](https://help.openai.com/en/articles/8801890) | 개인 공간 병합 불가역·이탈 후 접근·Business export 미제공·모바일 구독 별도 |
| P39 | [OpenAI API 권한](https://developers.openai.com/api/docs/guides/rbac) | Viewer·사용자 정의 역할·직접/그룹 배정 합집합 |
| P40 | [OpenAI API 데이터 제어](https://developers.openai.com/api/docs/guides/your-data) | abuse 로그와 애플리케이션 상태·엔드포인트별 수명·ZDR 예외 |
| P41 | [Cloud Identity 라이선스](https://docs.cloud.google.com/identity/docs/how-to/how-licensing-works-for-cloud-identity) | 무료 라이선스 유지·유료 선택·자동 할당 |
| P42 | [Google 계정 정지](https://knowledge.workspace.google.com/admin/users/suspend-a-user-temporarily) | 데이터·공유 접근 유지·Annual/Flexible 정지 계정 과금 |
| P43 | [Claude 역할·권한](https://support.claude.com/en/articles/9267276-roles-and-permissions) | Primary Owner 1명·유료 라이선스·Enterprise Custom. 좌석 구매 권한은 P22와 차이(U19) |
| P44 | [Claude 조직 데이터 보존](https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data) | 일반 30일·Covered Models·위반 입력/출력 2년·분류 점수 7년 예외 |
| P45 | [Claude 제거 사용자 데이터](https://support.claude.com/en/articles/12053672-what-happens-to-a-user-s-data-when-they-are-removed-from-a-team-or-enterprise-organization) | 공유 프로젝트·채팅·skills·export·보존 구분 |
| P46 | [Claude Enterprise 보존 설정](https://support.claude.com/en/articles/10440198-configure-custom-data-retention-controls-for-enterprise-plans) | 최소 30일 유지·미설정 시 계속 보관·기간 단축 저장 시 즉시 삭제 |
| P47 | [조직 Colab 설정](https://knowledge.workspace.google.com/admin/colab/set-up-colab-pro) | 도메인·구매 권한·구매 채널·직접 온라인 연간 약정 |
| P48 | [Google 사용자 보안 설정](https://knowledge.workspace.google.com/admin/security/manage-a-users-security-settings?hl=en) | 조직 외부 복구 이메일·사용자별 전화번호·IdP 세션·쿠키·앱 권한 |
| P49 | [OpenAI 계정 삭제](https://help.openai.com/en/articles/6378407-how-to-delete-your-account) | 관리형 셀프서비스 삭제 미제공·API 접근 영향·모바일 구독·법적 예외 |
| P50 | [OpenAI API 프로젝트 관리](https://help.openai.com/en/articles/9186755-managing-your-work-in-the-api-platform-with-projects) | 프로젝트 삭제 불가·보관 불가역·키 권한. 한도는 문서가 연결하는 최신 P17 우선 |

미확인 항목의 필요한 원문과 담당 역할 제안은 [[operations/확인_대기_목록|U01–U19]]에 남긴다. U01–U18은 기존 자료 번호이며 U19는 이번 공식 문서 간 차이 확인 항목이다. 실제 계정 설정을 조회하거나 구매·회수를 실행한 검증은 아니다.

## OpenAI

- Enterprise privacy at OpenAI
  https://openai.com/enterprise-privacy/

- Business data privacy, security, and compliance
  https://openai.com/business-data/

- Managing billing and seats in ChatGPT Business
  https://help.openai.com/en/articles/8792536-managing-billing-and-seats-in-chatgpt-business

- Managing members, seat types, and roles in ChatGPT Business
  https://help.openai.com/en/articles/8542216-managing-members-seat-types-and-roles-in-chatgpt-business

- API 플랫폼의 API 작업 단위 관리
  https://help.openai.com/ko-kr/articles/9186755-api-%ED%94%8C%EB%9E%AB%ED%8F%BC%EC%97%90%EC%84%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0

- OpenAI API account members
  https://help.openai.com/en/articles/4936812-how-do-i-add-change-or-remove-members-on-my-openai-api-account

- How to delete your OpenAI account
  https://help.openai.com/en/articles/6378407-how-to-delete-your-account

- Chat and File Retention Policies in ChatGPT
  https://help.openai.com/en/articles/8983778-chat-and-file-retention-policies-in-chatgpt

## Cursor

- Cursor Security
  https://cursor.com/security

- Cursor Pricing
  https://cursor.com/pricing

- Cursor Account Pricing
  https://docs.cursor.com/en/account/pricing

- Cursor Team Pricing
  https://docs.cursor.com/en/account/teams/pricing

- Cursor Enterprise
  https://cursor.com/enterprise

## Google Workspace / Colab

- How licensing works for Cloud Identity
  https://docs.cloud.google.com/identity/docs/how-to/how-licensing-works-for-cloud-identity

- Turn off automatic Google Workspace licensing during Cloud Identity setup
  https://docs.cloud.google.com/identity/docs/how-to/turn-off-automatic-google-workspace-licensing-during-setup

- Add & set up Colab Pro or Colab Pro+
  https://knowledge.workspace.google.com/admin/colab/set-up-colab-pro

- 사용자에게 Colab 라이선스 할당하기
  https://knowledge.workspace.google.com/admin/colab/assign-colab-licenses-to-users?hl=ko

- Flexible Plan
  https://knowledge.workspace.google.com/admin/billing/flexible-plan

- Auto-pay with a credit card
  https://knowledge.workspace.google.com/admin/billing/auto-pay-with-a-credit-card

- Fix payment and billing issues
  https://support.google.com/a/answer/2523116

- Verify your payment information
  https://knowledge.workspace.google.com/admin/billing/verify-your-payment-information

- 사용자의 보안 설정 관리하기
  https://knowledge.workspace.google.com/admin/security/manage-a-users-security-settings?hl=ko

- 보안 테스트로 Google Workspace 계정 보호하기
  https://support.google.com/a/answer/6002699?hl=ko

- 본인 소유가 아닌 기기에 로그인
  https://support.google.com/accounts/answer/2917834?co=GENIE.Platform%3DDesktop&hl=ko

- 해킹되거나 도용된 Google 계정 보호
  https://support.google.com/accounts/answer/6294825?hl=ko

## Anthropic / Claude

- Paid Plan Billing FAQs
  https://support.claude.com/en/articles/8325618-paid-plan-billing-faqs

- How will I be billed for Claude API use?
  https://support.claude.com/en/articles/8114526-how-will-i-be-billed-for-claude-api-use

- How is my Team plan bill calculated?
  https://support.claude.com/en/articles/9267289-how-is-my-team-plan-bill-calculated

- Purchase and manage seats on Team plans
  https://support.claude.com/en/articles/12004354-purchase-and-manage-seats-on-team-plans

- How long do you store my organization's data?
  https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data

- What happens to a user's data when removed from Team or Enterprise
  https://support.claude.com/en/articles/12053672-what-happens-to-a-user-s-data-when-they-are-removed-from-a-team-or-enterprise-organization

- Who owns and manages the data of my team
  https://support.claude.com/en/articles/9265372-who-owns-and-manages-the-data-of-my-team

- Configure custom data retention controls for Enterprise plans
  https://support.claude.com/en/articles/10440198-configure-custom-data-retention-controls-for-enterprise-plans

## 개인정보보호

- 개인정보 국외이전 제도
  https://www.privacy.go.kr/front/contents/cntntsView.do?contsNo=367

- 개인정보의 수집·이용
  https://www.easylaw.go.kr/CSP/CnpClsMainBtr.laf?ccfNo=2&cciNo=1&cnpClsNo=1&csmSeq=1257

- 개인정보 보호법 원문
  https://www.law.go.kr/LSW//lsLawLinkInfo.do?chrClsCd=010202&lsId=011357&lsJoLnkSeq=900078586&print=print

## 내부 근거

- 2025-06-25 - 정보보안 교육 요청.md
- 2025-07-01 - 수강생 개인정보 동의 안내.md
- 2025-07-05 - 이메일 삭제 시점.md
- 2026-04-28 - Cursor Unpaid Admin 표시 오류 복구 확인
- 기존 Google Workspace/Colab 위키 묶음

## 출처 사용 원칙

- 공식 문서가 있는 내용은 공식 기준으로 적는다.
- 결제 화면에서 관찰된 내용은 현장 실제 사례로 적는다.
- 공식 문서에 없는 내용은 일반 규칙처럼 쓰지 않는다.
- 정책은 바뀔 수 있으므로 구매·배포 직전 다시 확인한다.
