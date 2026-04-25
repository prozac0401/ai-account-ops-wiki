# 문서 반영 도움말

이 문서는 GitHub 저장소 안에서만 보는 운영 도움말입니다. 위키 화면에 바로 보여 줄 문서가 아니라, 새 Markdown 문서를 만들고 위키 화면에 연결하는 방법을 설명합니다.

## 먼저 알아둘 구조

이 위키는 Markdown 파일과 화면 목록이 분리되어 있습니다.

| 위치 | 역할 |
|---|---|
| `public/content/` | 위키 화면에 보여 줄 Markdown 원문을 둡니다. |
| `src/main.js` | 어떤 Markdown 파일을 어떤 제목과 주소로 보여 줄지 등록합니다. |
| `README.md` | GitHub 저장소 첫 화면 안내입니다. |
| `Help.md` | 지금 읽고 있는 도움말입니다. 위키 화면에는 넣지 않습니다. |

Markdown 파일만 추가하면 GitHub에는 파일이 생기지만, 위키 화면 왼쪽 메뉴에는 자동으로 나타나지 않습니다. 화면에서 보이게 하려면 `src/main.js`에도 등록해야 합니다.

## 새 위키 문서 추가하기

예시로 `교육 운영` 섹션에 `계정 점검표` 문서를 추가한다고 가정합니다.

### 1. Markdown 파일 만들기

`public/content/education/계정_점검표.md` 파일을 만듭니다.

파일 이름은 다음처럼 정하면 다루기 쉽습니다.

- 한글 파일명은 사용할 수 있습니다.
- 띄어쓰기 대신 `_`를 씁니다.
- 같은 폴더 안에서 이름이 겹치지 않게 합니다.
- 파일 확장자는 `.md`로 끝냅니다.

처음 내용은 아래처럼 짧게 시작해도 됩니다.

```md
# 계정 점검표

> 상위 문서: [[Home|AI 계정 운영]]
> 분류: 교육 운영 / 점검표

[목차]

## 개요

교육 전에 확인할 계정 점검 항목을 정리합니다.

## 교육 전 확인

- 수강생 계정 목록을 확인한다.
- 서비스 초대 여부를 확인한다.
- 로그인 테스트 여부를 기록한다.
```

`[목차]`를 넣으면 화면에서 해당 위치에 문서 목차가 만들어집니다. `#`, `##`, `###` 제목도 오른쪽 목차에 반영됩니다.

### 2. `src/main.js`의 `docs` 목록에 등록하기

`src/main.js`에서 `const docs = [` 부분을 찾습니다.

새 문서를 아래처럼 추가합니다.

```js
{
  id: "education/계정_점검표",
  title: "계정 점검표",
  file: "education/계정_점검표.md",
  group: "교육 운영",
  summary: "교육 전 계정 준비 상태를 확인하는 점검표입니다.",
},
```

각 항목의 뜻은 다음과 같습니다.

| 항목 | 뜻 |
|---|---|
| `id` | 브라우저 주소와 위키 내부 링크에 쓰는 이름입니다. 보통 `.md`를 뺀 파일 경로와 같게 둡니다. |
| `title` | 왼쪽 메뉴와 검색 결과에 보이는 제목입니다. |
| `file` | `public/content/` 아래 실제 Markdown 파일 경로입니다. |
| `group` | 문서가 속한 큰 묶음 이름입니다. |
| `summary` | 검색 결과와 문서 안내에 보이는 짧은 설명입니다. |

### 3. 왼쪽 메뉴에 넣기

`src/main.js`에서 `const sections = [` 부분을 찾습니다.

문서를 넣을 섹션의 `docIds`에 방금 만든 `id`를 추가합니다.

```js
{
  label: "교육 운영",
  icon: "graduation-cap",
  docIds: ["education/교육담당자_운영_가이드", "education/수강생_주의사항", "education/계정_점검표"],
},
```

여기에 넣어야 왼쪽 메뉴에서 문서를 클릭할 수 있습니다.

### 4. 다른 문서에서 링크 걸기

위키 내부 문서끼리는 아래 형식을 씁니다.

```md
[[education/계정_점검표|계정 점검표]]
```

`|` 앞에는 `docs`에 등록한 `id`를 씁니다. `|` 뒤에는 화면에 보일 글자를 씁니다.

같은 문서 안의 특정 제목으로 이동하려면 일반 Markdown 링크를 씁니다.

```md
[교육 전 확인](#교육-전-확인)
```

외부 사이트는 일반 Markdown 링크를 씁니다.

```md
[GitHub Pages](https://pages.github.com/)
```

## 기존 문서 수정하기

내용만 바꿀 때는 해당 Markdown 파일만 수정하면 됩니다.

예를 들어 Cursor 문서를 고치려면 아래 파일을 수정합니다.

```text
public/content/services/Cursor.md
```

제목, 메뉴명, 검색 결과 문구까지 바꾸려면 `src/main.js`의 `title`과 `summary`도 함께 수정합니다.

파일 이름을 바꿀 때는 다음 세 곳을 함께 확인합니다.

- 실제 Markdown 파일 이름
- `src/main.js`의 `file`
- `src/main.js`의 `id`와 내부 링크

## GitHub 웹 화면에서 수정하고 배포하기

초보자라면 GitHub 웹 화면에서 수정하는 방법이 가장 쉽습니다.

1. GitHub 저장소로 들어갑니다.
2. 고칠 파일을 클릭합니다.
3. 오른쪽 위 연필 아이콘을 누릅니다.
4. 내용을 수정합니다.
5. 아래 `Commit changes` 영역으로 내려갑니다.
6. 변경 내용을 한 줄로 적습니다.
7. `Commit directly to the main branch`를 선택합니다.
8. `Commit changes` 버튼을 누릅니다.

`main` 브랜치에 반영되면 GitHub Actions가 자동으로 위키 화면을 다시 만듭니다. 보통 1분 안팎이면 GitHub Pages 주소에 반영됩니다.

배포 상태는 저장소 상단의 `Actions` 탭에서 확인합니다.

- 초록색 체크: 배포 성공
- 노란색 원: 배포 진행 중
- 빨간색 X: 배포 실패

## 내 PC에서 수정하고 배포하기

개발 도구가 설치되어 있다면 아래 순서로 진행합니다.

### 1. 파일 수정

Markdown 파일과 `src/main.js`를 필요한 만큼 수정합니다.

### 2. 화면 확인

터미널에서 아래 명령을 실행합니다.

```bash
npm install
npm run dev
```

브라우저에서 안내된 주소를 열고 문서가 잘 보이는지 확인합니다.

### 3. 빌드 확인

배포 전에 아래 명령으로 오류가 없는지 확인합니다.

```bash
npm run build
```

### 4. GitHub에 올리기

아래 명령을 순서대로 실행합니다.

```bash
git status
git add README.md Help.md public/content src/main.js
git commit -m "Update wiki documents"
git push origin main
```

문서만 수정했다면 `public/content`만 올려도 됩니다. 새 문서를 메뉴에 추가했다면 `src/main.js`도 꼭 함께 올립니다.

## 자주 나는 실수

### Markdown 파일은 만들었는데 왼쪽 메뉴에 안 보인다

`src/main.js`의 `docs`와 `sections`에 등록했는지 확인합니다.

### 링크를 눌렀는데 문서를 못 찾는다

내부 링크의 `id`와 `src/main.js`의 `id`가 정확히 같은지 확인합니다.

```md
[[services/Cursor|Cursor]]
```

위 링크는 `docs`에 `id: "services/Cursor"`가 있어야 동작합니다.

### 파일 이름을 바꾼 뒤 404가 나온다

`src/main.js`의 `file` 값이 새 파일 이름과 같은지 확인합니다.

### 제목은 바뀌었는데 검색 결과 문구는 그대로다

`src/main.js`의 `summary`도 함께 수정합니다.

### GitHub에는 보이는데 Pages 주소에는 아직 예전 내용이 보인다

`Actions` 탭에서 배포가 끝났는지 확인합니다. 성공 후에도 브라우저 캐시 때문에 잠시 예전 화면이 보일 수 있으니 새로고침합니다.

## 빠른 체크리스트

새 문서를 위키 화면에 보여 주려면 아래 네 가지를 확인합니다.

- `public/content/` 아래에 `.md` 파일을 만들었다.
- `src/main.js`의 `docs`에 문서를 등록했다.
- `src/main.js`의 `sections`에 문서 `id`를 넣었다.
- `main` 브랜치에 올리고 `Actions` 배포 성공을 확인했다.
