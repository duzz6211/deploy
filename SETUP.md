# duzztest — GitHub Pages 배포 가이드

`duzztest.com/<경로명>` 형태로 테스트 페이지를 배포하는 저장소입니다.

- `duzztest.com` (루트) → "테스트 페이지입니다." 안내문만 표시
- `duzztest.com/alsnfo3r942t0s9d39rf/` → `apps/alsnfo3r942t0s9d39rf`의 React 앱

## 프로젝트 구조

```
duzztest/
├── SETUP.md                     # 이 문서
├── .github/workflows/deploy.yml # 자동 빌드 + GitHub Pages 배포
├── static/                      # 사이트 루트에 그대로 올라가는 파일
│   ├── index.html               # duzztest.com 루트 페이지 ("테스트 페이지입니다.")
│   ├── 404.html                 # 없는 경로 처리 + SPA 새로고침 리다이렉트
│   └── CNAME                    # 커스텀 도메인 (duzztest.com)
└── apps/                        # 폴더 이름 = URL 경로
    └── alsnfo3r942t0s9d39rf/    # → duzztest.com/alsnfo3r942t0s9d39rf/
```

## 배포 규칙

`apps/` 아래 폴더 하나가 URL 경로 하나입니다. push하면 워크플로우가 알아서 처리합니다.

| 폴더 내용 | 처리 방식 |
|---|---|
| `package.json` 있음 (Vite 앱) | `npm ci` → `vite build --base=/<폴더명>/` → `dist/`를 `/<폴더명>/`에 배포 |
| `package.json` 없음 (정적 파일) | 폴더 내용을 그대로 `/<폴더명>/`에 복사 |

새 테스트 페이지 추가 = `apps/새경로명/` 폴더 만들고 push. 끝.

## 최초 세팅 (1회만)

### 1. GitHub 저장소 만들고 push

```bash
cd ~/project/duzztest
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/duzz6211/deploy.git
git push -u origin main
```

> 저장소가 **private**이면 GitHub Pages는 유료 플랜(Pro/Team)에서만 됩니다.
> 무료 계정이면 public 저장소로 만드세요.

### 2. GitHub Pages 활성화

저장소 → **Settings → Pages**:

1. **Source**: `GitHub Actions` 선택 (Deploy from a branch 아님!)
2. push 하면 Actions 탭에서 "Deploy to GitHub Pages" 워크플로우가 돌고,
   완료되면 먼저 `https://<계정명>.github.io/<저장소명>/` 주소로 확인 가능

### 3. 커스텀 도메인 연결 (duzztest.com)

**DNS 설정** (도메인 등록업체 관리 페이지에서):

| 타입 | 호스트 | 값 |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | `<계정명>.github.io` (www도 쓸 경우) |

**GitHub 설정**: Settings → Pages → **Custom domain**에 `duzztest.com` 입력 → Save
→ DNS 전파 후(수 분 ~ 최대 24시간) **Enforce HTTPS** 체크.

`static/CNAME` 파일이 이미 있으므로 이후 배포에서 도메인 설정이 유지됩니다.

## 로컬 개발

```bash
cd apps/alsnfo3r942t0s9d39rf
npm install
npm run dev          # http://localhost:5173 (WSL이면 npm run dev -- --host)
```

배포 결과물 로컬 확인:

```bash
npm run build -- --base=/alsnfo3r942t0s9d39rf/
npm run preview -- --base=/alsnfo3r942t0s9d39rf/
# → http://localhost:4173/alsnfo3r942t0s9d39rf/
```

## SPA 새로고침(딥링크) 동작 원리

React 앱은 BrowserRouter를 쓰므로 `duzztest.com/alsnfo3r942t0s9d39rf/work`를
새로고침하면 GitHub Pages에는 실제 파일이 없어 404가 납니다. 이를 위해:

1. 루트 `static/404.html`이 `/<앱>/work` 요청을 `/<앱>/?p=/work`로 리다이렉트
2. 앱의 `index.html`에 있는 스크립트가 `?p=` 값을 읽어 원래 URL로 복원
3. React Router는 `basename`(빌드 시 `--base` 값)을 기준으로 라우팅

새 Vite SPA 앱을 추가할 때도 같은 방식이 필요하면
`apps/alsnfo3r942t0s9d39rf/index.html`의 복원 스크립트와
`src/main.jsx`의 `basename` 처리를 참고해 동일하게 넣으면 됩니다.
(라우터 없는 단일 페이지 앱이나 정적 HTML은 신경 쓸 필요 없음)

## 자주 묻는 문제

- **CSS/JS가 404**: Vite 앱을 `--base` 없이 빌드했을 때 증상. 워크플로우를 쓰면 자동 처리되므로, 로컬 빌드 결과를 직접 올리지 말 것.
- **루트는 되는데 서브경로가 404**: Actions 배포가 아직 안 끝났거나, Settings → Pages의 Source가 `GitHub Actions`가 아닌 경우.
- **duzztest.com 접속 불가**: DNS 전파 대기 중이거나 A 레코드 오타. `dig duzztest.com +short`로 185.199.108~111.153이 나오는지 확인.
