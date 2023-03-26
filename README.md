## ⭐️ 프로젝트 설명

-   [TheMovieDataBase API](https://developers.themoviedb.org/3/movies/get-movie-videos)를 활용한 영화 목록 및 조회 사이트입니다.

---

## 배포주소

-   [영화를 보CINEMA](https://movie-toy-project-git-main-3team-movie-trailer.vercel.app/)

---

## 프로젝트 폴더구조

```
src
├── App.js
├── index.js
│
├── Accept
│    └─ css
│        ├── font.css
│        └── reset.css
│
├── Apis
│     ├── @core.js
│     └── api.js
│
├── Config ── @queryConfig.js
│
├── Error
│   ├── error404.js
│   └── NotSearch.js
│
├── pages
│   ├── Detail ── detail.js
│   ├── infiniteList.js
│   ├── searchList.js
│   └── List
│        ├── Home ── home.js
│        ├── NowPlaying ── nowPlaying.js
│        ├── TopRated ── topRated.js
│        ├── UpComing ── upComing.js
│        └── Search ── search.js
│
├── Routes ── routing.js
│
├── Components
│   ├── Button ── SearchBtn.js
│   ├── index.js
│   └── Layout
│          └── Header ── menu.js
│
└── Skeleton
        ├── detailSkeleton.js
        └── skeleton.js
```

---

### ❗️기능구현❗️

-   react-qurey를 사용하여 데이터를 캐싱한다.
-   로딩 중에는 skelton UI를 보인다.
-   영화목록 같은 경우는 useInfinitQuery를 사용하여 무한스크롤링으로 불러온다.
-   ScrollUp button 누를 시 최상단으로 스크롤 이동
-   목록은 홈, 인기, 상영예정, 현재상영작, 검색창으로 구성

---

## 커밋 컨벤션

**Feat**: 새로운 기능을 추가할 경우

**Design**: CSS 등 사용자 UI 디자인 변경

**Comment**: 필요한 주석 추가 및 변경

**Docs**: 문서를 수정한 경우

**Rename**: 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우

**Remove**: 파일을 삭제하는 작업만 수행한 경우

---

### 팀원

| 박선영                                                                                                                     | 김태기                                                                                                                                                  |
| :------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 구현 기능                                                                                                                  | 구현 기능                                                                                                                                               |
| ▫️ 오픈 API 가져오기<br/>▫️ 전체 페이지 Routing<br/>▫️ 상세페이지<br/>▫️ 인기영화 Page<br/>▫️ 로딩 중 Skelton UI 구현<br/> | ▫️ 리액트 쿼리의 useInfinitQuery 무한 스크롤링 구현<br/>▫️ 오픈 API 가져오기<br/>▫️ 홈페이지<br/>▫️ 검색 기능 및 Search Page<br/>▫️ 상영예정작Page<br/> |

### 기술스택

|                                                             **JS**                                                              |                                                            **React**                                                            |
| :-----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
| <img  width="60" src="https://user-images.githubusercontent.com/112946860/225957694-7e3b3669-9216-4271-a7c8-555c8976368b.png"/> | <img width="60" src="https://user-images.githubusercontent.com/112946860/225957071-10a74540-d7b5-457c-821e-91547e62a429.png" /> |
