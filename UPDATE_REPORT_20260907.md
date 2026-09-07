# 위키 반영 보고서

작성·정책 재확인일: 2026-09-07. 대상: `ai-account-ops-wiki-update-20260906` 자료 묶음과 현재 저장소. 최초 문서 작업에서는 지원 문의·계정/결제 변경·구독 취소·커밋·푸시·배포를 수행하지 않았다. 이후 사용자가 배포를 요청해 아래 범위로 확장했다.

## 후속 배포 요청

- 사용자 요청에 따라 검증된 문서와 탐색 변경을 기존 GitHub Pages 경로에 게시한다. 실제 AI 계정·결제 설정 변경이나 구독 취소는 여전히 제외한다.
- 배포 전 원격 main은 `67c1cd15321103192f5675126152c8fc91716947`로 재확인했다. 조사 기준 이후 변경은 자료 ZIP뿐이며 기존 원격 파일을 보존한다.
- 기존 `Deploy Wiki Page`는 main 변경을 빌드해 gh-pages에 게시하고 GitHub Pages가 서비스한다. 이번 배포 성공 여부는 해당 실행과 실제 사이트에서 별도로 판정한다.
- 기존 성공 실행은 [소스 빌드](https://github.com/prozac0401/ai-account-ops-wiki/actions/runs/34074270923)와 [Pages 게시](https://github.com/prozac0401/ai-account-ops-wiki/actions/runs/34074290925)에서 확인했다. 이것이 이번 변경의 배포 완료를 뜻하지는 않는다.
- 사이트 주소는 [AI 계정 운영 위키](https://prozac0401.github.io/ai-account-ops-wiki/)다. Azure 관련 과거 기억과 다른 환경의 접근 통제는 이 확인으로 단정하지 않는다.
- 공개 본문·탐색 코드·스타일 지침·이 보고서만 반영한다. 자료 ZIP·내부 원본·tmp·로컬 로그를 새로 업로드하지 않으며 기존 저장소의 자료 파일도 삭제하지 않는다.
- 배포 준비 검증: 게시 대상 47개 파일을 확인했고, 기준 커밋의 파일 해시가 현재 원격 트리와 일치했다. `npm run build`와 문서·탐색 정적 검증을 다시 통과했다.
- 실행 결과: GitHub 트리 생성 요청이 현재 세션의 쓰기 승인 정책으로 거부됐다. 새 트리·커밋·main 갱신·이번 변경의 배포는 완료하지 못했다. 로컬 `.git`도 읽기 전용이므로 우회하지 않았다. GitHub 쓰기가 허용된 세션 또는 저장소 관리자의 커밋·푸시가 필요하다.
- 재개 시 원격 main을 다시 비교한 뒤 변경을 게시하고, 소스 빌드와 Pages 배포 실행의 성공 및 실제 사이트의 신규 문서·검색을 확인한다. 기존 성공 실행이나 로컬 빌드만으로 이번 변경이 배포됐다고 표시하지 않는다.

## 기준 확인

| 대상 | 확인 결과 |
|---|---|
| 조사 기준·작업 시작 checkout | `a09570913697213fb34a95c62d0f0cae5864647a`, main, 작업 시작 시 변경 없음 |
| origin | 요청한 `prozac0401/ai-account-ops-wiki` 저장소와 일치 |
| 실제 GitHub main | `67c1cd15321103192f5675126152c8fc91716947`, 2026-09-07 01:49:50 UTC |
| 기준 이후 차이 | GitHub 비교 결과 자료 ZIP만 추가, 기존 문서·코드는 같음. 로컬 추적 포인터와 실제 원격을 구분 |
| 작업 방식 | 현재 파일에 통합. 체크아웃·이력 변경 없이 ZIP은 무시되는 `tmp/`에서 조사 |
| 적용 지침 | 현재 STYLE_GUIDE 확인. 저장소와 상위 경로에서 적용 AGENTS.md는 발견하지 못함 |
| 읽은 근거 | 00·01·02·09·10·12, 서비스별 03–08, 14. 13은 내부 근거로만 열람 |
| 원본 한계 | F01–F22 원본은 묶음에 미동봉. 묶음의 원본 검토 기록과 직접 확인을 구분 |
| 별도 최초 첨부 | 다운로드 폴더의 `cursor-unpaid-admin-display-bug-response-guide.md`는 읽기 권한 오류. 저장소의 기존 4월 사건과 이번 근거 묶음으로 보존·분류 확인. 첨부만의 차이가 있다면 읽을 수 있는 작업 폴더의 사본 필요 |

## 변경 요약

- 운영 시작점을 Cursor로 정정하고 업무매뉴얼·운영 백서를 연결했다.
- 4월 Unpaid Admin 표시 오류는 이슈 대응 분류와 4월 28일 해결 상태를 유지했다. 6–7월 청구·크레딧·접근 분쟁은 별도 문서로 작성하고 미확인 결과를 남겼다.
- Cursor 역할/좌석·두 풀·Router·Token Rate·변경 권한·팀 한도를 보완했다. legacy Enterprise Auto의 9월 7일 경계 시각은 확정하지 않았다.
- Google 공유 결제 프로필의 초대·수락·계정별 구매·증빙·권한 회수, CU 대장, 런타임 종료와 현장 게이트를 추가했다.
- 초기화·비밀번호 교체·다운로드·배포를 버전·삭제 범위·비밀 로그·실제 앱 확인 기준으로 구분했다.
- ChatGPT 현행 Standard·Premium 구매와 legacy 사례, Codex 크레딧·API 비용 경로, API 알림·hard limit, Claude 좌석 감소·모델 전환을 보완했다.
- RACI 최종 책임·대리자·인수인계·기록 양식·공개 원본 경계를 추가했다. 신규 역할·주기·완료 기준은 조직 채택 전 제안이다.
- 종합 가격표의 과거 기준을 보존하고 현재 서비스 문서에 연결했다. 사용월 $300, 다음 주기 기본 $325, 미청구 조정 포함 시에만 $375로 계산을 수정했다.

## G번호별 결과

최신 계정 운영 사실을 다시 조사해 달라는 후속 요청도 같은 확인일에 반영했다. 아래 G번호 상태는 유지하며, 추가 근거·수정 파일·공식 문서 차이는 다음 절의 재조사 표와 U19에 기록한다.

**반영 완료 23 / 일부 반영 16 / 근거 대기 6.** 반영 완료는 문서 통합·확인 상태 표시가 끝났다는 뜻이며 조직 승인이나 실제 운영 성공을 뜻하지 않는다. 일부 반영은 절차·정책은 반영했으나 계약·최종 결과 증거가 부족한 항목이다. 근거 대기는 질문·안전한 경계를 기록했지만 사실을 확정하지 못한 항목이다. 기존 내용 보존 확인은 다음 절의 별도 표에 둔다.

우선순위 P0의 비용·권한·회수·공개 범위부터 처리하고, P1 반복 운영과 P2 조사 후보를 연결했다. 모든 경로는 `public/content` 기준이며 공통 근거 등급은 [SOURCES](public/content/SOURCES.md), U번호별 정확한 질문은 [확인 대기 목록](public/content/operations/확인_대기_목록.md)에 있다.

| G번호·우선 | 상태 | 수정·반영 위치 | 근거·반영 내용 | 남은 U번호 |
|---|---|---|---|---|
| G01 P1 | 반영 완료 | [운영 배경](public/content/00_운영_배경.md), [백서](public/content/whitepaper/운영_연혁과_개선.md) | C01, 07: Cursor 시작 정정, 도입일 창작 금지 | U16: 전문 확보는 별도 |
| G02 P1 | 반영 완료 | [Home](public/content/Home.md), [원칙](public/content/01_운영_원칙.md), [유지보수](public/content/operations/위키_유지보수.md) | 07·14: 용도·책임·날짜·변경·승인 상태 | 없음 |
| G03 P1 | 반영 완료 | [서비스 개요](public/content/02_서비스_전체_지도.md), [생명주기](public/content/04_계정_생명주기.md) | C08·C12–C15, F02–F08: 42명·49계정·48PC 분리 | 실제 매핑은 내부 대장 |
| G04 P1 | 반영 완료 | [역할](public/content/03_역할과_책임.md), [교육 가이드](public/content/education/교육담당자_운영_가이드.md) | 07·14: 업무별 A, 외부 요청 경로·대리자·인수 증거 제안 | 조직 채택·실명 배정 필요 |
| G05 P0 | 반영 완료 | [Cursor](public/content/services/Cursor.md), [과금](public/content/billing/Cursor_과금.md) | P01–P02·P31: 역할과 좌석, 신규·기존 적용, 초대·좌석 유형 변경 시점 | 개별 계약은 실행 전 확인 |
| G06 P0 | 반영 완료 | [Cursor 과금](public/content/billing/Cursor_과금.md), [용어](public/content/glossary.md) | P02·P06: 두 풀·외부 Token Rate·BYOK | 없음 |
| G07 P0 | 반영 완료 | [Cursor 과금](public/content/billing/Cursor_과금.md), [수강생 주의](public/content/education/수강생_주의사항.md) | C15·F19–F20·P04: Cost/Hard 전후 상태, 고정·무료 아님 | U03: 효과 실측 별도 |
| G08 P0 | 반영 완료 | [Cursor 과금](public/content/billing/Cursor_과금.md) | P03: 관리자 전용·팀 차단·Enterprise 재정의·동적 한도·지연·임시 크레딧 | 없음 |
| G09 P0 | 일부 반영 | [Cursor 과금](public/content/billing/Cursor_과금.md), [비용 예시](public/content/billing/실제_비용과_True_up.md) | P04–P05: 9월 7일 재조회·Enterprise 특례 범위 확인 | U17: 종료 시각·계약 전환 |
| G10 P1 | 반영 완료 | [Cursor](public/content/services/Cursor.md), [과금](public/content/billing/Cursor_과금.md) | P05: Max Mode legacy request-based 범위 한정 | 없음 |
| G11 P1 | 반영 완료 | [Cursor 과금](public/content/billing/Cursor_과금.md) | C15·P03: 42×10=$420는 팀 예산안, 개인 상한·지출 아님 | U03: 원본 CSV |
| G12 P0 | 일부 반영 | [Cursor 분쟁](public/content/issues/Cursor_청구_크레딧_분쟁.md) | C06–C07·F09–F13·13: 비식별 원장 대조·미해결 상태 | U02·U16 |
| G13 P0 | 일부 반영 | [Cursor 분쟁](public/content/issues/Cursor_청구_크레딧_분쟁.md), [생명주기](public/content/04_계정_생명주기.md) | C07·13: 미래 해지·즉시 취소·팀 삭제·접근 상실 분리 | U02: 승인·최종 복구 |
| G14 P1 | 반영 완료 | [Cursor 과금](public/content/billing/Cursor_과금.md) | C04·P07: removed 이력과 현재 좌석, spendCents 범위 | 실제 API 호출 안 함 |
| G15 P1 | 반영 완료 | [장애 초동대응](public/content/issues/AI_서비스_장애_초동대응.md) | C16·14: 분류·제한 재시도·수업 복구·보상 보류 | 사건 원문은 U16 |
| G16 P1 | 일부 반영 | [Cursor 과금](public/content/billing/Cursor_과금.md) | R01·03: PDF 증빙과 invoice 결제 구분, 150석 일반화 제거 | U08: 견적 원문 |
| G17 P0 | 반영 완료 | [Google](public/content/services/Google_Workspace_및_Colab.md), [PAYG](public/content/billing/Colab_PAYG_결제_프로필.md) | F17–F18: Google Pay·OU·OR-AC-01 점검 | 현장 상태는 실행 전 확인 |
| G18 P0 | 일부 반영 | [PAYG](public/content/billing/Colab_PAYG_결제_프로필.md) | P08·F18·F22: 초대→수락→계정별 구매, 접수와 기술 답변 구분 | U10: 전체 구매 검수 |
| G19 P0 | 일부 반영 | [PAYG](public/content/billing/Colab_PAYG_결제_프로필.md), [생명주기](public/content/04_계정_생명주기.md) | F07·F17–F18: 구매·증빙 후 임시 권한 회수·사후 게이트 | U04·U05 |
| G20 P1 | 반영 완료 | [PAYG](public/content/billing/Colab_PAYG_결제_프로필.md), [Manager](public/content/automation/Colab_Manager_운영.md) | F07–F08·C08: 카드 저장 구안과 공유 프로필 설계 구분 | 없음 |
| G21 P1 | 반영 완료 | [CU 운영](public/content/services/Colab_CU와_런타임_운영.md), [양식](public/content/templates/계정_운영_기록.md) | F07·14: 원문·숫자·시각·이벤트·실패·전회값 | 없음 |
| G22 P0 | 근거 대기 | [CU 운영](public/content/services/Colab_CU와_런타임_운영.md), [Google 과금](public/content/billing/Google_Workspace_Colab_과금.md) | C10·P10: 라이선스 회수 후 CU를 확정하지 않고 질문·전후 검증 연결 | U04 |
| G23 P1 | 근거 대기 | [CU 운영](public/content/services/Colab_CU와_런타임_운영.md) | C11: 22일·1일·잔량 기억의 범위를 표시 | U06 |
| G24 P1 | 반영 완료 | [CU 운영](public/content/services/Colab_CU와_런타임_운영.md), [Google 과금](public/content/billing/Google_Workspace_Colab_과금.md) | P09: 개인·조직 CU 합산과 개인 구독 관리 경계 | 없음 |
| G25 P0 | 반영 완료 | [CU 운영](public/content/services/Colab_CU와_런타임_운영.md), [Manager](public/content/automation/Colab_Manager_운영.md) | F06–F07: 잔량 조회·종료 분리, 조회용 런타임 생성 금지 | 없음 |
| G26 P0 | 일부 반영 | [Manager](public/content/automation/Colab_Manager_운영.md) | F06: V2/V3 독립 N≥2→0·1개씩 감소·OFF·HOLD·저장·독립 0 | U07: 작성된 현장 검수표 |
| G27 P1 | 일부 반영 | [Manager](public/content/automation/Colab_Manager_운영.md) | F06–F07: 버전·초기 범위·283개 시험 보고·미구현 EML 분리 | U07: 실제 기능·실행 확인 |
| G28 P0 | 일부 반영 | [초기화](public/content/automation/강의장_계정_초기화.md) | F01–F03·F14–F16: 00–48 광범위·001–042 선택 정리, 권한 분리 | U11·U18 |
| G29 P0 | 반영 완료 | [초기화](public/content/automation/강의장_계정_초기화.md), [안내문](public/content/templates/수강생_안내문.md) | F02–F03·C13: 실제 앱 계정·Team 수동 확인 | 현장 결과는 U18에서 별도 |
| G30 P1 | 근거 대기 | [초기화](public/content/automation/강의장_계정_초기화.md) | C14: __AI_EDU__·W 키의 버전 대응 불명 표시 | U11 |
| G31 P0 | 일부 반영 | [비밀번호 교체](public/content/automation/비밀번호_교체.md), [정보보안](public/content/compliance/정보보안_검토.md) | F04–F05·08: with-secrets 의도·보관·폐기·새 암호 재로그인 | U18: 현장 검수·보관자 |
| G32 P1 | 반영 완료 | [배포·검증](public/content/automation/도구_배포와_검증.md) | C19·P20: 파일별 다운로드 관찰·Zone.Identifier·서명·해시 | 실제 배포는 미수행 |
| G33 P2 | 근거 대기 | [배포·검증](public/content/automation/도구_배포와_검증.md) | C12: 48PC·공유 제한·MQTT/UDP는 후보 설계 | U12 |
| G34 P1 | 근거 대기 | [초기화](public/content/automation/강의장_계정_초기화.md), [배포·검증](public/content/automation/도구_배포와_검증.md) | C14·05: startup-once·자기 삭제를 공통 기능으로 단정하지 않음 | U11 |
| G35 P1 | 일부 반영 | [ChatGPT](public/content/services/ChatGPT_Business.md) | C02–C03·P25–P26·P37–P38: 초대·pending/수락·구매 구분, SSO·개인 공간·회수 | U09: 해당 워크스페이스 원장 |
| G36 P0 | 일부 반영 | [ChatGPT·API 과금](public/content/billing/ChatGPT_OpenAI_API_과금.md) | P14·P26: 현행 좌석·legacy·크레딧·API 키 별도 경로 | U09 |
| G37 P0 | 일부 반영 | [API](public/content/services/OpenAI_API.md), [과금](public/content/billing/ChatGPT_OpenAI_API_과금.md), [정보보안](public/content/compliance/정보보안_검토.md), [삭제](public/content/compliance/데이터_리텐션_삭제.md) | P16–P17·P39–P40·P50·F21: 지출 통제·RBAC·저장 리소스·프로젝트 보관·OT 설계 | U14: 앱 운영 증거 |
| G38 P1 | 일부 반영 | [Claude 과금](public/content/billing/Claude_과금.md), [Claude](public/content/services/Claude_Business.md) | P21–P23·P29·P43–P46·C21: 좌석·권한·데이터·갱신·API 별도·평가 앱 계획 | U14·U19 |
| G39 P1 | 일부 반영 | [Claude](public/content/services/Claude_Business.md) | C20·P24: 전환 토글·응답 라벨·API fallback opt-in | U13 |
| G40 P2 | 근거 대기 | [백서](public/content/whitepaper/운영_연혁과_개선.md) | C22: 인접 도구는 실제 채택·계정·계약 확인 후보 | U15 |
| G41 P0 | 일부 반영 | [유지보수](public/content/operations/위키_유지보수.md), [정보보안](public/content/compliance/정보보안_검토.md) | R01–R04·C23·P18–P19: 저장소 설정과 실제 배포·정적 접근 구분 | U01 |
| G42 P0 | 반영 완료 | [SOURCES](public/content/SOURCES.md), [정보보안](public/content/compliance/정보보안_검토.md), [삭제](public/content/compliance/데이터_리텐션_삭제.md) | 08–09·14·P31–P50: 근거 등급·계정/보존 공식 재확인·비밀 원본 제외 | U16: 추가 대화 원문 |
| G43 P1 | 반영 완료 | [운영 기록 양식](public/content/templates/계정_운영_기록.md) | 14: 배정·비용·CU·회수·변경·검수·지원·인수인계 | 실제 채택·작성은 별도 |
| G44 P1 | 반영 완료 | [비용 예시](public/content/billing/실제_비용과_True_up.md), [ChatGPT 과금](public/content/billing/ChatGPT_OpenAI_API_과금.md) | R01·06·P26: 기본 10석 표기, $300·$325·조건부 $375 | 실제 청구 조건은 U09 |
| G45 P1 | 반영 완료 | [탐색 코드](src/main.js), [Home](public/content/Home.md), [목차](public/content/PAGE_TREE.md), [사이드바](public/content/_Sidebar.md), [SOURCES](public/content/SOURCES.md) | R02–R03·12: 13개 신규 등록, 42개 노출·검색·링크 검증 | 후속 배포 요청은 쓰기 승인 제한으로 미완료 |

## 기존 반영 확인

| 기존 내용 | 상태·보존 위치 | 보완 방식 |
|---|---|---|
| Cloud Identity·선택 라이선스·자동 할당 주의 | 기존 반영 확인: [Google](public/content/services/Google_Workspace_및_Colab.md) | 내용을 보존하고 PAYG·CU로 연결 |
| 일반 회수·삭제·결제의 차이 | 기존 반영 확인: [생명주기](public/content/04_계정_생명주기.md) | 런타임·권한·해지·인계 증거 추가 |
| 개인정보·리텐션·보안 사고 | 기존 반영 확인: [개인정보](public/content/compliance/개인정보_고지_동의.md), [삭제](public/content/compliance/데이터_리텐션_삭제.md), [사고](public/content/compliance/사고_대응.md) | 법률 해석 보존. 서비스 보존·삭제 정책은 후속 공식 조사로 보완 |
| Cursor 4월 표시 오류 해결 | 기존 반영 확인: [Unpaid Admin 이슈](public/content/issues/Cursor_Unpaid_Admin_표시_오류_대응.md) | 해결 상태 유지, 상대 날짜 정리·6–7월 별도 연결 |
| Claude 멤버 제거와 총 좌석 감소 | 기존 반영 확인: [기존 비용 문서](public/content/billing/실제_비용과_True_up.md) | 기존 설명 보존, 구체 메뉴·갱신 절차 연결 |

## 정책 재확인과 한계

P01–P14, P16–P30의 적용 범위·읽기 결과는 [SOURCES의 재확인 표](public/content/SOURCES.md)에 기록했다. P08은 이번에 본문을 확인했다. P12는 본문 추출 실패라 모든 CU의 90일 유효기간을 확정하지 않았다. P15는 참고 목록만 유지하고 이번 정책 근거로 사용하지 않았다.

Cursor의 9월 7일 특례 종료 날짜는 확인했지만 시각·시간대·해당 계약 전환 완료는 U17로 남겼다. ChatGPT는 신규 Standard·Premium 구매 즉시 일할 청구와 과거 연간 true-up을 분리했다. Google·Colab 조직 가격은 기존 수치와 같음을 재확인했다. Claude 현재 가격의 Team 규모는 2–150명이다. GPT-5.2의 과거 산식 단가는 재조회한 API 가격 본문에서 확인하지 못해 현행 견적으로 사용하지 않는다.

## 계정 정책 재조사

후속 요청에 따라 공식 웹사이트 본문을 다시 대조하고 P31–P50의 근거 20개를 추가했다. 검색 요약만으로 정책을 확정하지 않았다. 아래 조치는 문서에 반영했으며 실제 계정 접속·구매·삭제·세션 회수는 실행하지 않았다.

| 주제 | 반영·확인 결과 | 수정 파일·공식 근거 | 남은 확인 |
|---|---|---|---|
| Cursor Privacy | Enterprise 기본 ON·조직 강제·팀 설정 상속, BYOK·보존 모델·위반 조사 예외 구분 | [Cursor](public/content/services/Cursor.md), [삭제](public/content/compliance/데이터_리텐션_삭제.md), [Q&A](public/content/qna/현장_실제_QA.md), P32–P35 | 실제 조직 강제 설정 |
| Cursor 좌석·예산 | 상향 즉시·하향 갱신, 멤버 초대, 팀 한도 차단 범위·동적 한도·Enterprise 재정의 보완 | [Cursor](public/content/services/Cursor.md), [과금](public/content/billing/Cursor_과금.md), P03·P31 | 기존 U03·U17 유지 |
| ChatGPT 계정 | 4개 역할 유지 확인. 초대 제한 불가·가입 경로·200석 생성일 예외·SSO와 SCIM 범위·개인 공간 병합 불가역 | [ChatGPT](public/content/services/ChatGPT_Business.md), P25·P37–P38 | U09, 실제 tenant 관리 여부 |
| ChatGPT 삭제 | 관리형 셀프서비스 계정 삭제 미제공, 조직 요청·모바일 구독·Library 별도 삭제·Business export 미제공 | [ChatGPT](public/content/services/ChatGPT_Business.md), [삭제](public/content/compliance/데이터_리텐션_삭제.md), P36·P38·P49 | 실제 요청·종료 증거 |
| OpenAI API | Viewer·사용자 정의 역할·직접/그룹 권한 합집합, 프로젝트 보관 불가역·엔드포인트별 데이터 수명 | [API](public/content/services/OpenAI_API.md), [삭제](public/content/compliance/데이터_리텐션_삭제.md), P39–P40·P50 | U14, 실제 권한·저장 리소스 |
| Google·Colab | Cloud Identity 유지·OU 하위 미포함·최대 24시간·조직 구매 채널, 정지 후 과금·공유 접근 유지·IdP 세션/쿠키 분리 | [Google](public/content/services/Google_Workspace_및_Colab.md), P08·P10·P41–P42·P47–P48 | U04–U06·U10 유지 |
| Claude | 공식 Team/Enterprise 명칭, Primary Owner 1명·유료 좌석, 공유 프로젝트·skills 인계, 최소 30일 유지 확인·단축 시 즉시 삭제 | [Claude](public/content/services/Claude_Business.md), [과금](public/content/billing/Claude_과금.md), [삭제](public/content/compliance/데이터_리텐션_삭제.md), P22·P43–P46 | U19: 일반 Owner 구매 권한의 공식 문서 차이 |
| 공통 회수·탐색 | 데이터별 종료 체크리스트·보안 검토·생명주기 연결, Claude 표시명과 기존 ID 유지 | [생명주기](public/content/04_계정_생명주기.md), [보안](public/content/compliance/정보보안_검토.md), [서비스 개요](public/content/02_서비스_전체_지도.md), [Home](public/content/Home.md), [목차](public/content/PAGE_TREE.md), [사이드바](public/content/_Sidebar.md), [탐색 코드](src/main.js) | 조직의 절차 채택·승인 |

확인한 공식 사실, 조직 채택 전 운영 제안, 실제 계정·계약 확인 대기를 분리했다. 모든 법령·이전 참고 URL 전체를 새로 검증했다고 주장하지 않는다. 후속 변경도 같은 출처 표와 [확인 대기 목록](public/content/operations/확인_대기_목록.md)에서 추적한다.

## 수정 파일 범위

| 범위 | 파일·수정 성격 |
|---|---|
| 신규 공개 문서 13개 | 위 G표에 연결한 billing 2, services 1, issues 2, automation 4, operations 2, templates 1, whitepaper 1 |
| 기존 내용 보완 | 00–04, Home, 서비스 5개, Cursor·Google·ChatGPT·과금 개요·비용 예시, 교육 가이드·수강생 주의·안내문, Q&A·용어·정보보안·리텐션·사고·기존 4월 이슈 |
| 출처·탐색 | SOURCES, PAGE_TREE, _Sidebar, src/main.js의 docs·sections·바로가기. 검색 알고리즘·링크 파서는 변경하지 않음 |
| 기계적 정리 | 기존 `../Home`을 `Home`으로, 제목의 수동 번호 제거. 개인정보·해외 결제·동의서 등의 내용은 보존 |
| 지침 | STYLE_GUIDE의 예시 내부 링크 1곳을 실제 등록 ID로 수정 |
| 보고서 | 이 파일. 자료 ZIP·원본·시험 스크립트·화면은 public에 추가하지 않음 |

## 검증 결과

| 검사 | 결과 |
|---|---|
| `npm run build` | 성공, Vite 8.0.10. 최종 재실행으로 문서 산출물 포함 확인 |
| `node tmp/verify-wiki.cjs` | 등록 문서 42, 공개 Markdown 45, 탐색 그룹 9, 위키 링크 340, 표 76. 오류 0 |
| 등록·목차 | 모든 docs 파일 존재, sections 중복·누락·그룹 불일치 없음. 신규 13개 Home·PAGE_TREE·_Sidebar 연결 |
| 기존 링크 처리 | 코드상 trim·`.md` 제거·등록 ID/file stem 조회만 수행. `../` 정규화 없음 확인 후 원문 링크 수정 |
| 제목·산식 | 단일 H1, 수동 제목 번호·빈 제목 검사 통과. 10×25+3×25×20/30=300, 13×25=325, 미청구 50 합산 시 375 검증 |
| 실제 브라우저 | Playwright + 설치된 Edge headless. 등록 Markdown 42개 HTTP 200, 메뉴 항목 42개 확인 |
| 대표 화면 | 기존 신규 문서 4개와 Cursor·Cursor 과금·ChatGPT·API·Google·Claude·리텐션 7개, 총 11개를 1440×1000 및 390×844에서 확인. 한국어 H1·표·목차·양식 렌더링, 가로 스크롤, 전체 페이지 넘침 없음 |
| 검색·이동 | PAYG, Colab Manager, 계정 운영 기록, Unpaid, Library, Dynamic Spend Limits, 사용자 정의 역할, Claude Team 검색 후 실제 이동 8건. 본문 CU·종료 점검 링크 이동 2건 성공 |
| 스크린샷 검토 | `tmp/screens/` 22장 생성. 기존 검토에 더해 Claude 데스크톱·리텐션 모바일 직접 시각 검토. 공개 자산에 넣지 않음 |
| 브라우저 잔여 경고 | 기존 `/favicon.ico` 404만 확인. 문서 오류는 없으며 무관한 아이콘 추가는 하지 않음 |
| 민감정보 | 공개 파일의 비밀키 패턴·내부 청구/지원 식별자·원본 자료명 혼입 후보 0. 발견된 이메일 4개는 모두 example.com 합성 예시 |
| 원본 파일 | public에 EML·PDF·ZIP·EXE·CSV·NDJSON 없음. 자료 묶음·13번 원문 복제 안 함 |
| `git -c core.safecrlf=false diff --check` | 성공, 공백 오류 없음 |

검증 스크립트·결과는 로컬 무시 영역 `tmp/verify-wiki.cjs`, `tmp/browser-check.cjs`, `tmp/browser-results.json`에 있다. 런타임 종료·구매·비밀번호 교체 도구의 실제 현장 시험을 수행했다는 뜻은 아니다.

후속 브라우저 시험의 첫 실행에서는 검색 결과를 본문까지 포함한 문구로 골라 다른 항목을 클릭하는 시험 선택자 오류가 있었다. 앱 검색 코드는 변경하지 않고 등록 ID로 선택하도록 시험만 수정한 뒤 전체 재실행을 통과했다.

## 남은 확인

U01–U18은 유지하고 공식 문서 차이 U19를 추가해 필요한 증거·질문을 [확인 대기 목록](public/content/operations/확인_대기_목록.md)에 남겼다. 특히 Cursor 최종 원장·지원 합의·접근 복구(U02), Colab 회수 전후 CU·영수증(U04–U06), 49계정 운영과 버전별 현장 검수(U07·U10·U18), 실제 계약(U08·U09·U17), 실제 배포(U01)는 현재 자료만으로 확정할 수 없다.

해당 원문은 공개 저장소에 올리지 않고 내부 보관자가 확인해야 한다. 그동안 독립적으로 처리 가능한 문서·정책·탐색 보완은 완료했다. 실제 조직 승인, 지원 문의, 결제 변경, 도구 현장 실행, 배포는 후속 승인·증거가 필요한 별도 작업이다.
