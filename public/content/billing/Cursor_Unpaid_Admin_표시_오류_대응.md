# Cursor Unpaid Admin 표시 오류 대응

> 상위 문서: [[billing/Cursor_과금|Cursor 과금]]
> 분류: Cursor / 과금 / Unpaid Admin / 표시 오류

[목차]

## 상태

지난 주말(2026-04-25~2026-04-26) Cursor 팀 대시보드에서 기존 `Unpaid Admin` 계정이 `Admin` 으로 표시되고, 역할 드롭다운에서 `Unpaid Admin` 선택지가 보이지 않는 현상이 있었다.

2026-04-28 현재 `Unpaid Admin` 표기와 역할 선택지가 복구된 것을 확인했다. 본 건은 UI 표시 오류로 종결하되, 같은 현상이 다시 보이면 Billing seat count와 upcoming invoice를 함께 확인한다.

## 언제 쓰나요?

다음 상황이 보이면 이 문서를 사용한다.

- 기존에 `Unpaid Admin` 이었던 계정이 `Admin` 으로 표시된다.
- 역할 변경 메뉴에서 `Unpaid Admin` 선택지가 보이지 않는다.
- `Member` 와 `Admin` 만 선택할 수 있다.
- 관리자 계정이 과금 좌석으로 잡힌 것처럼 보인다.
- 청구 금액이나 좌석 수가 바뀐 것 같아 확인이 필요하다.

## 핵심 판단 기준

역할 이름만 보고 바로 과금 전환으로 판단하지 않는다.

| 계정 유형 | 판단 기준 |
|---|---|
| 기존에 `Unpaid Admin` 이었던 계정 | 표시만 `Admin` 으로 바뀐 것일 수 있다. |
| `Member` 에서 `Admin` 으로 직접 변경한 계정 | 실제 billable seat으로 잡힐 수 있다. |
| 새로 `Admin` 으로 추가한 계정 | 과금 좌석으로 처리될 수 있다. |

기존 `Unpaid Admin` 계정이 단순히 `Admin` 으로 보이는 경우와, 운영자가 직접 역할을 바꾼 경우는 다르게 본다.

## 1차 확인 순서

먼저 Billing 화면과 Members 화면을 확인한다.

| 확인 항목 | 확인 이유 |
|---|---|
| Billing seat count | 실제 유료 좌석 수가 늘었는지 확인 |
| Upcoming invoice | 다음 청구 금액이 바뀌었는지 확인 |
| Members 목록 | 기존 `Unpaid Admin` 계정이 어떻게 표시되는지 확인 |
| Role dropdown | `Unpaid Admin` 선택지가 남아 있는지 확인 |

가능하면 Members 화면, Billing seat count, upcoming invoice, 역할 드롭다운을 캡처한다.

## 하지 말아야 할 조작

`Unpaid Admin` 선택지가 보이지 않는 상태에서는 역할 변경 테스트를 반복하지 않는다.

특히 다음 조작은 피한다.

- `Member` 에서 `Admin` 으로 변경
- `Admin` 에서 `Member` 로 변경
- 기존 Admin 삭제 후 재초대
- 새 Admin 추가
- 기존 `Unpaid Admin` 을 다른 역할로 바꾼 뒤 다시 Admin으로 되돌리기

UI 오류 상태에서 역할을 바꾸면 실제 billable seat이 생길 수 있다.

## Cursor Support 문의 기준

Cursor Support에는 단순히 "왜 바뀌었나요?"라고 묻기보다 다음 항목을 확인받는다.

- `Unpaid Admin` 역할이 아직 존재하는지
- 현재 `Admin` 으로 보이는 기존 `Unpaid Admin` 계정이 내부적으로 unpaid 상태인지
- 과금 좌석 수에 영향이 있는지
- 역할 드롭다운에서 `Unpaid Admin` 이 보이지 않는 이유가 무엇인지
- 잘못 과금된 좌석이 있다면 credit 또는 billing correction이 가능한지

### 문의 메일 예시

```text
Hi Cursor Support,

We noticed that several accounts previously shown as "Unpaid Admin" are now displayed only as "Admin" in our team dashboard.

Our dashboard currently only shows "Member" and "Admin," and the "Unpaid Admin" option is missing from the role dropdown.

Could you please confirm the following?

1. Are users who were previously set as Unpaid Admin still treated as non-billable unpaid admins internally?
2. Is this only a dashboard display issue, or does it affect billing or permissions?
3. Why is the Unpaid Admin option missing from the role dropdown?
4. If any users were incorrectly counted as billable seats, can you issue a billing correction or credit?
5. When will the correct Unpaid Admin label and role option be restored?

This is important for our internal billing control records, so written confirmation would be appreciated.

Best,
[Name]
```

## 보관할 증빙

Cursor가 display bug라고 확인하면 내부 증빙으로 저장한다.

| 자료 | 보관 이유 |
|---|---|
| Cursor Support 회신 메일 | 공식 확인 증빙 |
| Members 화면 캡처 | 표시 오류 발생 증빙 |
| Billing seat count 캡처 | 과금 영향 없음 확인 |
| Upcoming invoice 캡처 | 청구 금액 확인 |
| 복구 후 `Unpaid Admin` 화면 캡처 | 해결 확인 |

Support 회신에서는 다음 내용을 확인해 둔다.

- known display bug인지
- paid admin과 unpaid admin이 모두 `Admin` 으로 표시된 것인지
- `Unpaid Admin` 드롭다운 옵션이 누락된 것인지
- billing 또는 permissions에는 영향이 없는지
- 기존 `Unpaid Admin` 이 내부 시스템에서 unpaid로 유지되는지
- 복구 예정 또는 복구 완료 상태가 무엇인지

## 복구 후 확인

복구되면 다음을 확인한다.

- 기존 `Unpaid Admin` 계정이 다시 `Unpaid Admin` 으로 표시되는지
- 역할 드롭다운에 `Unpaid Admin` 선택지가 다시 보이는지
- Billing seat count가 예상과 일치하는지
- Upcoming invoice가 증가하지 않았는지

확인 후 내부 기록에 종결 처리한다.

## 내부 기록용 문구

아래 문구를 이슈 기록이나 위키에 붙여 넣을 수 있다.

```text
Cursor dashboard에서 기존 Unpaid Admin 계정이 Admin으로 표시되고, 역할 드롭다운에서 Unpaid Admin 선택지가 사라지는 현상이 발생했다.

Cursor Billing Support는 해당 현상이 최근 dashboard update로 인한 known display bug이며, paid admin과 unpaid admin이 모두 Admin 라벨로 표시된 것이라고 회신했다.

Cursor는 이 문제가 billing 또는 permissions에는 영향을 주지 않으며, 기존 Unpaid Admin 사용자는 내부 시스템에서 계속 unpaid로 처리되어 과금되지 않는다고 확인했다.

2026-04-28 dashboard에서 Unpaid Admin 표기와 선택지가 복구된 것을 확인했다.

본 건은 UI 표시 오류로 종결하되, 추후 동일 현상 발생 시 Billing seat count와 upcoming invoice를 함께 확인한다.
```

## 복구 확인 회신 예시

복구 확인 후 Cursor Support에는 다음과 같이 회신할 수 있다.

```text
Hi Karen,

Thank you for your support.

We have confirmed that the Unpaid Admin label and role option are now restored in our dashboard.

We also understand from your previous confirmation that this was a display-only issue and did not affect billing or permissions.

We consider this issue resolved.

Best,
[Name]
```

## 자주 헷갈리는 점

### `Admin` 으로 보이면 무조건 과금인가요?

아니다. Cursor 측 확인에 따르면 표시 오류가 발생한 동안에는 기존 `Unpaid Admin` 도 `Admin` 으로 보일 수 있다. 이 경우 내부 시스템에서는 여전히 unpaid로 처리될 수 있다.

다만 새로 `Admin` 으로 변경한 계정은 billable seat으로 잡힐 수 있으므로 주의한다.

### `Unpaid Admin` 역할이 없어진 건가요?

이번 사례에서는 아니었다. Cursor Support는 `Unpaid Admin` 역할이 사라진 것이 아니라, 대시보드 표시 오류로 인해 `Admin` 으로 보였다고 설명했다.

### 역할 드롭다운에서 `Unpaid Admin` 이 안 보이면 어떻게 하나요?

직접 역할을 바꾸지 말고 Cursor Support에 문의한다. UI 오류 상태에서 `Member` 를 `Admin` 으로 바꾸면 실제 billable seat이 생길 수 있다.

### 과금 여부는 어디서 확인하나요?

역할명보다 Billing 화면을 먼저 본다.

- Billing seat count
- Upcoming invoice
- Invoice history
- Members 목록

### 기존 `Unpaid Admin` 이었던 계정은 안전한가요?

Cursor가 서면으로 "기존 Unpaid Admin은 내부 시스템에서 계속 unpaid로 처리되며 과금되지 않는다"고 확인한 경우에는 안전하다고 볼 수 있다.

다만 실제 invoice와 seat count는 별도로 확인한다.

## 같이 보면 좋은 문서

- [[billing/Cursor_과금|Cursor 과금]]
- [[services/Cursor|Cursor]]
- [[qna/현장_실제_QA|현장 실제 Q&A]]
- [[glossary|용어 사전]]
