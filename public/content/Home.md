# AI 계정 운영

> 상위 문서: 없음
> 분류: AI 계정 운영 / 생성형 AI 교육 운영 / SaaS(Software as a Service) 계정 관리

[목차]

## 개요

**AI 계정 운영**은 교육이나 실습을 위해 여러 생성형 AI 서비스를 안전하게 열어 주고, 끝나면 깔끔하게 회수하는 일을 말한다.

여기서 말하는 AI 계정은 단순히 “로그인 계정”만 뜻하지 않는다. 결제 카드, 라이선스, 팀 워크스페이스, API 키, Colab 컴퓨팅 단위, 수강생 안내문, 개인정보 동의서, 사고 대응 흐름까지 한 덩어리로 봐야 한다.

이 문서는 서비스 홍보용 소개서가 아니다. 실제 운영자가 헷갈리는 지점, 결제에서 막히는 지점, 수강생에게 꼭 말해야 하는 지점, 법무·보안 검토에서 자주 나오는 질문을 기준으로 정리한다.

## 문서 성격

이 위키는 세 가지를 구분한다.

| 구분 | 뜻 | 예시 |
|---|---|---|
| 공식 기준 | 서비스 제공사가 문서로 밝힌 내용 | ChatGPT Business 최소 좌석, Cursor Privacy Mode, Colab 라이선스 할당 |
| 현장 실제 사례 | 이번 운영에서 실제로 겪었거나 문의했던 내용 | Colab Pro를 처음에는 2개만 살 수 있었던 상황, 월 구독액 절반 선결제 요구 |
| 운영 판단 | 공식 기준과 실제 사례를 섞어 만든 내부 운영 방식 | 교육 전 1명으로 테스트, 교육 종료 후 회수 로그 보관 |

공식 기준은 가능한 한 출처를 붙였다. 현장 실제 사례는 “일반 규칙”으로 단정하지 않고, 별도 표시를 붙였다.

## 다루는 서비스

| 서비스 | 이 위키에서 보는 관점 |
|---|---|
| Google Workspace | 조직 계정, 결제, Cloud Identity Free, Business Starter, 라이선스 할당 |
| Google Colab Pro / Pro+ | 교육용 컴퓨팅 리소스, 라이선스 구매·할당, 서비스 ON/OFF |
| ChatGPT Business | 팀 워크스페이스, 좌석, 멤버 초대, 데이터 처리, 수강생 사용 |
| OpenAI API Platform | 조직, API 작업 단위, API 키, 서비스 계정, 사용량 예산 |
| Cursor | AI 코드 편집기, 팀 결제, Privacy Mode, 코드/프롬프트 취급 |
| Claude Business / Team | 유사 LLM(Large Language Model) 팀 서비스, 데이터 보존, 소유자 권한, 부록 성격 |

## 빠른 이동

### 운영 전체

- [[00_운영_배경|운영 배경]]
- [[01_운영_원칙|운영 원칙]]
- [[02_서비스_전체_지도|서비스 운영 개요]]
- [[03_역할과_책임|역할과 책임]]
- [[04_계정_생명주기|계정 생명주기]]

### 서비스별

- [[services/Google_Workspace_및_Colab|Google Workspace 및 Colab]]
- [[services/ChatGPT_Business|ChatGPT Business]]
- [[services/OpenAI_API|OpenAI API Platform]]
- [[services/Cursor|Cursor]]
- [[services/Claude_Business|Claude Business]]

### 과금

- [[billing/과금_전체_지도|과금 운영 개요]]
- [[billing/Google_Workspace_Colab_과금|Google Workspace·Colab 과금]]
- [[billing/ChatGPT_OpenAI_API_과금|ChatGPT·OpenAI API 과금]]
- [[billing/Cursor_과금|Cursor 과금]]
- [[billing/해외_결제_차단_대응|해외 결제 차단 대응]]
- [[billing/실제_비용과_True_up|실제 비용과 True-up]]

### 컴플라이언스

- [[compliance/개인정보_고지_동의|개인정보 고지와 동의]]
- [[compliance/정보보안_검토|정보보안 검토]]
- [[compliance/데이터_리텐션_삭제|데이터 리텐션과 삭제]]
- [[compliance/사고_대응|사고 대응]]

### 교육 운영

- [[education/교육담당자_운영_가이드|교육 담당자 운영 가이드]]
- [[education/수강생_주의사항|수강생 주의사항]]

### 양식과 Q&A

- [[templates/수강생_안내문|수강생 안내문]]
- [[templates/개인정보_고지서_동의서|개인정보 고지서·동의서]]
- [[qna/현장_실제_QA|현장 실제 Q&A]]
- [[glossary|용어 사전]]
- [[SOURCES|출처 모음]]

## 먼저 읽으면 좋은 문서

처음 맡은 운영자라면 아래 순서가 가장 편하다.

1. [[01_운영_원칙|운영 원칙]]
2. [[03_역할과_책임|역할과 책임]]
3. [[04_계정_생명주기|계정 생명주기]]
4. [[compliance/개인정보_고지_동의|개인정보 고지와 동의]]
5. 실제로 쓰는 서비스별 문서

## 약어 각주

| 약어 | 전체 단어 | 설명 |
|---|---|---|
| SaaS | Software as a Service | 설치형 소프트웨어가 아니라 웹 서비스 형태로 구독해 쓰는 소프트웨어다. |
| LLM | Large Language Model | 대량의 텍스트를 학습해 문장을 이해하고 생성하는 대규모 언어 모델이다. |

## 한 줄 요약

초대는 쉽다. 문제는 **결제, 회수, 삭제, 증빙**이다.
