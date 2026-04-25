# AI 계정 운영 위키

AI 교육 계정 운영을 위한 Markdown 묶음을 브라우저에서 읽기 좋은 정적 위키 페이지로 구성한 문서입니다.

## 실행

```bash
npm install
npm run dev
```

브라우저에서 개발 서버 주소를 열면 됩니다.

## 구성

- `public/content/`: 원본 Markdown 위키 문서
- `src/main.js`: 문서 라우팅, 검색, Markdown 렌더링, 목차 생성
- `src/styles.css`: 위키 화면 스타일
- `index.html`: 앱 진입점

## 기능

- 왼쪽 섹션별 문서 내비게이션
- 문서 전체 검색
- NamuWiki/GitHub Wiki 스타일 `[[문서|라벨]]` 링크 변환
- 본문 Heading 기반 오른쪽 목차
- 서비스, 과금, 컴플라이언스, 교육 운영 빠른 이동
- 모바일 문서 메뉴와 다크 테마

## 배포

GitHub Pages 진입 URL:

https://prozac0401.github.io/ai-account-ops-wiki/

`main` 브랜치에 push되면 GitHub Actions가 `npm ci`와 `npm run build`를 실행하고, `dist/` 결과물을 `gh-pages` 브랜치에 게시합니다.

GitHub Pages가 처음이라 URL이 404로 보이면 저장소의 `Settings > Pages`에서 source를 `Deploy from a branch`, branch를 `gh-pages / root`로 한 번 지정하면 됩니다.
