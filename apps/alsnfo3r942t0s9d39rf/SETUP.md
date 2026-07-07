# 517 EXHIBITS — React 앱 셋업 가이드

기존 정적 HTML 5개 페이지(`index / work / services / about / contact`)를
**Vite + React + React Router** 기반 SPA로 변환한 프로젝트입니다.
아래 순서대로 직접 실행하면 됩니다.

## 1. 의존성 설치

```bash
cd react-app
npm install
```

설치되는 패키지 (전부 여기 포함, 추가 설치 불필요):

| 패키지 | 용도 |
|---|---|
| react / react-dom ^18 | UI |
| react-router-dom ^6 | 페이지 라우팅 (`/`, `/work`, `/services`, `/about`, `/contact`) |
| vite + @vitejs/plugin-react (dev) | 번들러 / 개발 서버 |

## 2. 개발 서버 실행

```bash
npm run dev
```

터미널에 표시되는 주소(기본 `http://localhost:5173`)로 접속.
WSL에서 실행 후 Windows 브라우저에서 접속이 안 되면 `npm run dev -- --host`로 실행.

## 3. 배포 빌드

```bash
npm run build     # dist/ 폴더 생성
npm run preview   # 빌드 결과 로컬 확인
```

`dist/` 폴더를 그대로 정적 호스팅(Netlify, Vercel, S3, nginx 등)에 올리면 됩니다.

### SPA 라우팅 주의 (새로고침 404 방지)

BrowserRouter를 쓰므로 호스팅에서 모든 경로를 `index.html`로 리다이렉트해야 합니다.

- **Netlify**: `dist/_redirects` 파일에 `/*  /index.html  200` 한 줄 추가
- **Vercel**: 자동 처리됨 (vite 프리셋)
- **nginx**: `try_files $uri /index.html;`
- **GitHub Pages 등 서브경로 배포**: `vite.config.js`에 `base: '/저장소명/'` 추가

## 4. 프로젝트 구조

```
react-app/
├── index.html                  # Vite 진입 HTML (폰트 로드)
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                # 엔트리 (BrowserRouter)
    ├── App.jsx                 # 라우트 + 공통 레이아웃 + 페이지 전환
    ├── styles/global.css       # 5개 페이지 CSS 통합본 + 인터랙션 스타일
    ├── data/content.jsx        # 프로젝트/서비스/후기 등 모든 콘텐츠 데이터
    ├── hooks/
    │   ├── useReveal.js        # 스크롤 리빌 (공유 IntersectionObserver)
    │   ├── useMagnetic.js      # 마그네틱 버튼
    │   ├── useTilt.js          # 카드 3D 틸트 + 스포트라이트
    │   └── useCountUp.js       # 숫자 카운트업
    ├── components/             # Nav, Footer, Btn, Reveal, PageHero,
    │                           # ProjectCard, WorldMap, TestimonialCarousel,
    │                           # StatCounter, CtaBand, ScrollProgress, CustomCursor
    └── pages/                  # Home, Work, Services, About, Contact
```

## 5. 추가된 고급 인터랙션

| 인터랙션 | 위치 |
|---|---|
| 히어로 워드 스태거 (단어별 마스크 등장) | Home 히어로 h1 |
| 히어로 배경 패럴랙스 | Home 히어로 |
| 마그네틱 버튼 (커서 방향으로 끌림) | 모든 버튼 (`Btn`) |
| 3D 틸트 + 커서 스포트라이트 | 프로젝트 카드 전체 |
| 실제 작동하는 카테고리 필터 + 재진입 애니메이션 | Work 페이지 |
| 숫자 카운트업 통계 | Work / About 통계 |
| 월드맵 항로 드로잉 + 노드 펄스 | Home / About 지도 |
| 후기 캐러셀: 자동재생(호버 시 정지) + 키보드 ←→ + 터치 스와이프 | Home |
| 클라이언트 로고 무한 마퀴 (호버 시 정지) | Home |
| 스크롤 프로그레스 바 | 전 페이지 상단 |
| 커스텀 커서 링 (링크 위에서 확대, 데스크톱 전용) | 전 페이지 |
| 페이지 전환 애니메이션 + 라우트별 스크롤 복원/타이틀 | 전 페이지 |
| 문의 폼: 유효성 검사 + 전송중/완료 상태 | Contact |
| 모바일 메뉴 링크 스태거 + 바디 스크롤 락 | 모바일 |

모든 모션은 `prefers-reduced-motion: reduce` 설정 시 자동 비활성화되고,
커서/틸트/마그네틱 효과는 터치 기기에서 자동으로 꺼집니다.

## 6. 수정 포인트

- **텍스트/이미지/프로젝트 목록 변경** → `src/data/content.jsx` 한 파일만 수정
- **색상/폰트/간격** → `src/styles/global.css` 상단 `:root` 변수
- **문의 폼 실제 전송 연결** → `src/pages/Contact.jsx`의 `onSubmit` 안
  `setTimeout(...)` 부분을 실제 `fetch(...)` 호출로 교체
