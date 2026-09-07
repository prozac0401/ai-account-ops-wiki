# Claude 과금

> 상위 문서: [[Home|AI 계정 운영]]
> 분류: Claude / 좌석 / API
> 공식 확인일: 2026-09-07 / 근거: P21–P23

[목차]

## 멤버 제거와 좌석 감소

2026-09-07 가격 페이지는 Team을 2–150명용으로 안내한다. Standard는 월 결제 `$25/석`, 연 결제 월 환산 `$20/석`, Premium은 각각 `$125`, `$100`이다. 세금·지역·계약 최종 금액은 구매 화면에서 확인한다. 기존 종합 표의 5명 시작 설명은 과거 기록이다. [가격(P29)](https://claude.com/pricing)

멤버를 제거하면 빈 좌석을 재배정할 수 있지만 즉시 크레딧이나 환불이 생기는 것은 아니다. 비용을 줄이려면 구매한 총 좌석 수를 별도로 줄여야 한다. 추가·업그레이드는 남은 기간 일할 청구와 연결된다. [청구 기준(P21)](https://support.claude.com/en/articles/9267289-how-is-my-team-plan-bill-calculated)

## 감소 확인 절차

다음 기록·승인 기준은 조직 채택 전 제안이다.

1. 교육 담당자가 종료 대상과 남길 좌석을 확정한다.
2. 계정 관리자가 멤버 제거·미수락 초대를 점검한다.
3. Primary Owner 또는 Owner가 `Organization settings → Organization and access → Total seats → Manage → Add or change seats`에서 좌석 유형별 수량을 줄인다.
4. 다음 화면의 적용일·예상 금액을 읽고 확인 항목과 `Confirm & purchase`로 변경을 확정한다. 감소 작업에서도 이 버튼 이름이 쓰일 수 있다.
5. 감소는 다음 갱신부터 적용되며 연간 계약이면 연간 갱신 시점이다. 결제 담당자는 예약된 감소와 다음 청구를 대조한다.
6. 이후 좌석 추가·초대 수락 등 변경이 있으면 감소 예약이 유지되는지 다시 확인한다. 예약 화면과 실제 갱신 결과를 각각 남긴다.

[총 좌석 관리(P22)](https://support.claude.com/en/articles/12004354-purchase-and-manage-seats-on-team-plans)

구매 권한은 주의해서 확인한다. 상세 좌석 문서는 Owner·Primary Owner를 안내하지만 일반 역할표는 신규 좌석 공급을 Primary Owner만 표시한다. 이 절차는 상세 문서 기준이며 실제 계정 권한 확인은 U19로 남긴다. 승인 없는 시험 구매로 확인하지 않는다. [[services/Claude_Business|역할표 차이와 적용 범위]]를 함께 읽는다.

## 구독과 API

Claude 앱 구독(Pro·Max·Team·Enterprise)과 Claude API·Console 결제는 별개다. WordEvaluator 같은 도구가 API 키를 쓴다면 앱 좌석 예산이 아니라 해당 Console의 비용 부담 주체와 키를 확인한다. [별도 결제(P23)](https://support.claude.com/en/articles/9876003-i-have-a-paid-claude-subscription-pro-max-team-or-enterprise-plans-why-do-i-have-to-pay-separately-to-use-the-claude-api-and-console)

C21의 WordEvaluator는 설계·대화 단서이며 배포·실제 비용은 미확인이다(U14). 앱 이름만으로 API 사용이나 과금 성공을 단정하지 않는다.

## 관련 문서

- [[services/Claude_Business|Claude 데이터·권한·모델 전환]]
- [[billing/실제_비용과_True_up|과거 단가 예시와 좌석 회수 구분]]
- [[templates/계정_운영_기록|좌석 감소 예약·갱신 확인 대장]]
