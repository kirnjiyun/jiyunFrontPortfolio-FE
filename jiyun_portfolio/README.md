# 김지윤 포트폴리오

기존 `jiyunFrontPortfolio-FE`의 콘텐츠·이미지와 Notion의 최신 경력·경험을 바탕으로 새로 만든 Next.js 정적 포트폴리오입니다. 사용자 지정 저장소의 `jiyun_portfolio` 경로에 반영했습니다. BE 및 `jiyun-portfolio-for-lg`는 수정하지 않았습니다.

## 실행

Node.js 22 이상에서 이 폴더를 열고 실행합니다.

```sh
npm ci
npm run dev
```

개발 주소는 `http://localhost:3000`입니다.

```sh
npm test
npm run typecheck
npm run build
```

정적 배포 결과는 `out/`에 생성됩니다. Next.js 서버, Express, MongoDB, Notion API 키 없이 운영됩니다. 빌드 시에도 외부 API를 조회하지 않습니다.

## 구성

- `/`: 주요 프로젝트와 개발 방식, 경력 요약
- `/projects/`: 프로젝트 23개. 최신 콘텐츠 17개를 기본 표시하고 이전 학습 프로젝트 6개는 체크박스로 표시
- `/projects/[slug]/`: 사전 생성된 상세 페이지, 역할·구현·성과 및 기존 화면 기록
- `/about/`: 경력, 기술, 교육, 자격·어학, 출간·수상
- `/resume/`: 같은 콘텐츠를 사용하는 이력서. 브라우저 인쇄에서 PDF로 저장 가능
- `404.html`, `sitemap.xml`, `robots.txt`: 정적 생성

검색·분류는 브라우저 안에서 동작합니다. 문의는 이메일 링크로 연결합니다. DailyQ나 출석 봇의 실제 서비스를 이 사이트 안에서 실행하는 구조는 아닙니다.

## 내용 수정

- `src/data/profile.json`: 소개, 경력, 기술, 교육, 자격·수상
- `src/data/projects.json`: 프로젝트 설명, 역할, 기간, 기술, 수행 내용, 결과, 링크
- `public/images/`: 기존 프로젝트 이미지 43개
- `docs/content-sources.json`: Notion 원문과 콘텐츠의 대응 관계. 배포 콘텐츠에는 포함되지 않음
- `docs/MIGRATION.md`: 반영 범위와 원문 충돌 처리 기록

내용을 수정한 뒤 검증·빌드하고 재배포합니다. Notion 변경사항은 자동 동기화되지 않습니다.

새 프로젝트를 추가할 때는 고유한 소문자 영문 `slug`를 사용합니다. `featured`는 홈 노출 여부, `archived`는 이전 학습 프로젝트 포함 여부입니다. `source` 등 내부 출처는 공개 JSON에 넣지 않고 `docs/content-sources.json`에 기록합니다.

## Vercel 배포

1. 이 `portfolio` 폴더 내용을 새 Git 저장소에 올립니다. `node_modules`, `.next`, `out`, `.vercel`, `.env`는 올리지 않습니다.
2. Vercel에서 저장소를 가져오고 Framework Preset을 **Next.js**로 선택합니다.
3. 이 폴더 자체가 저장소 루트라면 Root Directory는 `.`입니다. 이 GitHub 저장소에서는 `jiyun_portfolio`를 지정합니다.
4. Build Command는 `npm run build`, Output Directory는 `out`입니다. `vercel.json`에 설정되어 있습니다.
5. 환경변수와 백엔드 연결은 필요하지 않습니다.
6. Preview에서 콘텐츠를 확인한 후 운영 도메인을 연결합니다. 현재 canonical·sitemap 도메인은 `https://www.kimjiyun.site`이며, 변경할 경우 `src/data/content.ts`의 `siteUrl`을 수정합니다.

기존 Vercel 프로젝트와 도메인을 자동으로 변경하거나 실제 배포하지 않았습니다. 새 프로젝트 설정만 포함되어 있습니다.

## 확인할 점

새 실무 프로젝트의 실제 화면 이미지는 원본 FE에 없어서, 홈에서는 프로젝트명과 성과를 담은 타이포그래피 카드를 사용합니다. 기존 프로젝트의 화면 기록은 원본 자산을 유지했습니다. 외부 프로젝트의 현재 운영 여부를 보증하지 않으며, 확인되지 않은 신규 서비스 URL은 만들어 넣지 않았습니다.

이력서 페이지는 인쇄용 HTML입니다. PDF 파일을 서버에서 생성하거나 다운로드하는 API는 없습니다.

## 프로젝트 모음 인터랙션

홈의 주요 프로젝트와 프로젝트 목록은 카드가 모여 있는 상태에서 시작합니다. 카드 더미 또는 펼쳐보기 버튼을 클릭하면 각 카드가 그리드 위치로 이동합니다. 다시 모아보기 버튼으로 되돌릴 수 있습니다. 검색·분류를 변경하면 결과를 바로 펼쳐 보여줍니다. 키보드 조작과 모션 감소 설정을 지원합니다.
