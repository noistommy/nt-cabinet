---
layout: doc

sidebar: false
title: "김민영 — 프론트엔드"
description: "효율을 셜계하는 프론트엔드 개발자"
tags: ["Frontend", "Design system", "Data Visualization", "Vue", "React", "Nuxt"]

# aside: false
outline: false
footer: false
prev: false
next: false
---

<style>
  /* header {display: none;} */
  .lead {max-width: 800px;}
  p.range-date {margin-top: 4px !important; font-weight: 600; color: #777;}
  .kicker {font-size:.9rem; letter-spacing:.08em; text-transform:uppercase; opacity:.7}
  @media(min-width:900px){ .grid.cols-2{grid-template-columns:1fr 1fr;} }
  .muted {opacity:.75}
  /* a {color: var(--info) !important;} */
</style>

# 김민영

<div className="kicker">Frontend Engineer(Developer)</div>
<div class="be-button text gray">
  <i class="icon left xi-mail-o"></i>
  noistommy@gmail.com
</div>
<div class="be-button text gray">
  <i class="icon left xi-mobile"></i>
  010-4456-9329
</div>

---

<div className="lead">
효율을 설계하는 프론트엔드 개발자 김민영입니다.

다양한 프로젝트 경험으로 프론트엔드의 전반적인 업무를 폭넓게 수행해 왔습니다. 변화하는 기술의 특성과 목적을 명확히 이해하고, 상황에 맞는 효율적인 개발 방식을 적용하는데 중점을 두고 있습니다.

기획부터 배포까지 전체 프로세스를 직접 경험하며 그 과정에서 쌓은 협업 경험들로 파트너들과 적극적으로 의사소통을 하며 문제 해결 능력과 실무 역량을 높여왔습니다.

프론트엔드 구조 설계와 UI/UX 설계를 업무 효율성의 중요한 부분으로 두고 여러 서비스에서 디자인 시스템과 공용 라이브러리를 개발하여 생산성을 높인 경험이 있고 공용 모듈 및 유틸리티 기능 개발은 서비스 전반의 재사용성과 확장성을 높여 유지보수 및 관리의 비용을 줄이는데 도움이 되도록 작업하고 있습니다.

또한 데이터 시각화의 방식으로 SVG, canvas등 다양한 인터렉션을 적극 활용하고 있으며 최근에는 3D를 이용한 인터렉션에도 크게 관심을 갖고 개발하고 있습니다.

최근 AI를 이용한 데이터 시각화 작업의 경험과 AI를 활용한 개발 등 AI 관련 기술을 활용하여 그동안의 쌓아온 역량과 결합하는 시도들을 계속해서 하고 있습니다. 

감사합니다.

</div>

## 경력

### (주) 포그리트 <span class="be-gray-text light">| Frontend Developer</span>
<p class="range-date">2023.12 – 2025.05 (1Y 6M)</p>

>**사용자 UX 데이터를 기반한 분석 데이터 시각화 구현 및 서비스 고도화를 담당**


##### SVG 기반 인터렉티브 컴포넌트 구현

기존의 시퀀스 재생 방식으로는 구현이 불가능한 복잡한 실시간 인터렉션 애니메이션 요구 사항에 대해 SVG를 코드 레벨에서 직접 구현하는 방식으로 개발하여  사용자 상호작용에 따른 동적 에니메이션 처리가 가능하도록 개발.  가속도 조정과 `requestAnimationFrame`을 통해 사실적인고 부드러운 움직임을 랜더링하여 요구된 기능을 가능하게 함.  


##### 시스템 폰트의 문제 개선 및 최적화

시스템 폰트 사용과 국제화 지원으로 인해 발생하는 폰트 FOIT, FOUT 문제와 스타일 일관성 저하를 해결하기 위해 폰트 preload, 서브셋 폰트 사용등을 적용하여 문제 해결함. 이로인해 FOIT, FOUT 문제를 완벽히 제거하고 일관된 폰트 사용으로 스타일 일관성을 보장할 수 있도록 함.


##### 재사용 공용 모듈 개발

사내 서비스들에 공통적으로 사용되는 `Tooltip`, `Modal` 기능이 각 서비스에서 개별적으로 생성하여 사용되면서 유지보수의 어려움이 발생.  이를 처리하기 위한 방식으로  컴포넌트들을 외부 모듈로 만들어서 관리하고 각 서비스로 임포트 하도록 설계함. 재사용 모듈 사용으로 유지보수 비용을 줄이고 일관된 스타일 및 기능을 제공하도록 함.

<div class="be-button compact small">
  Modal 모듈 문서
  <i class="icon right xi-link" />
  <a class="link" href="https://noistommy.github.io/vue-nt-modal" target="_blank" />
</div><br />
<div class="be-button compact small">
  Tooltip 모듈 문서
  <i class="icon right xi-link" />
  <a class="link" href="https://noistommy.github.io/vue-nt-tooltip" target="_blank" />
</div>

---

### (주) 가비아 <span class="be-gray-text light">| Frontend Developer</span>
<p class="range-date">2019.11 – 2023.02 (3Y 4M)</p>

>**신규 서비스 프레임워크 시스템 설계 및 개발과 공용 컴포넌트 라이브러리 개발 담당**


##### 디자인 시스템 기반 UI 컴포넌트 개발

서비스 마다 생성된 UI 컴포넌드와 외부 컴포넌트 라이브러리로 인해 일관되지 않은 스타일과 중복 컴포넌트등의 문제가 발생함.
자체 컴포넌트를 구현하여 외부 컴포넌트를 대체하고 중복된 컴포넌트들을 하나로 통합하여 자체 라이브러리를 생성.
디자인 시스템을 위해 컴포넌트와 스타일을 분리하고 디자인 토큰을 정의하여 자체 스타일 시스템을 만들고 빌드를 통해 정적파일(.css)로 컴파일함

자체 라이브러리를 적용하여 초기 설계 기간 50% 단축.
유료 라이브러리를 대체 하여 생산 비용 감소 (CKEDITOR 대체)


##### 하이웍스 그룹웨어 신규 서비스 개발

프레임워크(vue)로 전환 후 초기 기술 부재로 인해 발생한  시스템 설계 및 성능 문제, 개발 지연을 해결하기 위해 TF 팀에 참여 하여 기존  설계 및 코드의 50%를 재 구현하며  이후 전사  프레임워크 기술 정책에 기준을 마련함. (상태 관리, 폴더 구조, .vue 파일 작성 규칙)

신규 서비스 **그룹** 개발 시 중복 컴포넌트, 외부 컴포넌트 문제를 처리하며 공용 UI 컴포넌트 라이브러리를 개발하고 디자인, 기획 팀과의 소통을 위한 문서 사이트 제작

신규 서비스 **파일** 개발 시 공용 라이브러리 적용으로 초기 설계 일정(50%) 단축함.

<div class="be-button compact small">
  하이웍스 공용 UI 라이브러리 문서
  <i class="icon right xi-link" />
  <a class="link" href="https://noistommy.github.io/hw_ui/#/" target="_blank" />
</div>


##### 폰트 다운로드 사이트 구현

새로운 방식의 사이트 구현을 위한 TF로 참여하여 스크롤 인터렉티브 방식의 사이트 구현.

최종 결과에 대한 좋은 평가를 받아 팀 내 인터렉티브 작업의 참고 사례로 활용됨.

<div class="be-button compact small">
  가비아 폰트 다운로드 사이트
  <i class="icon right xi-link" />
  <a class="link" href="https://font.gabia.com/" target="_blank" />
</div>

---

### 엔쓰리엔(주) <span class="be-gray-text light">| Frontend Developer</span>
<p class="range-date">2017.10 – 2019.11 (2Y 1M)</p>

>**관제 솔루션 내부 데이터를 활용한 SI 개발을 담당**


##### 관제 솔루션 내부 데이터 시각화

주 프로젝트와 별개의 신규 SI 개발을 담당하며 고객사별 다양한 데이터를 상황에 맞도록 직접 기획, UI 설계를 주도적으로 함. 다양한 요구상황에 맞도록 재사용 가능한 차트 컴포넌트를 개발하여 개발 및 유지보수 생산성을 향상. 


##### 재난 대응 관리 솔루션

솔루션의 내부 기능으로 개발 이후 독립된 솔루션으로 확장 되도록 기여함. 기획, 개발, UI/UX 설계 전 과정 참여하여 직접 클라이언트와 소통하는 과정을 통해 UI/UX 설계 경험 향상

---

### SNMP(소셜 네트워크 마케팅 플랫폼) <span class="be-gray-text light">| Frontend Developer</span>
<p class="range-date">2014.08 – 2016.10 (2Y 2M)</p>

###### 모바일 기반 오픈마켓 플랫폼

- 오픈마켓 웹 및 관리자 플랫폼, 브랜드 페이지 개발
- 마케팅 페이지 개발

## 프로젝트 & 링크

<div class="be-grid">
  <div class="column span-6">

  ##### 스타일 시스템 & Headless UI 라이브러리

  </div>
  <div class="column span-6">
  
  - 디자인 시스템 기반 CSS 프레임워크: Frog UI 
  - Headless UI 라이브러리: BEUI - vue
  - Headless UI 라이브러리: BEUI - react    
  
  </div>
  <div class="column span-6">

  ##### 모듈 (React)
  >vue 전용 모듈과 동일한 기능 React용으로 porting 한 프로젝트.
  
  </div>
  <div class="column span-6">

  - Potal을 활용한 React용 모달 공용 모듈. 
  - React용 토스트 알림 공용 모듈.    
  
  </div>
</div>









 


##### 모듈 (Vue)



## 오픈 소스

###### vue-nt-modal ([`npm`](https://www.npmjs.com/package/vue-nt-modal), [`git`](https://github.com/noistommy/vue-nt-modal.git))

- Demo: [https://noistommy.github.io/vue-nt-modal](https://noistommy.github.io/vue-nt-modal)
- Teleport를 활용한 Vue 전용 모달 플러그인으로, 사내 프로젝트(포그리트, 가비아)에서 공통적으로 사용.
- 다중 모달 처리, 접근성 고려, 전역 상태 관리(이벤트 버스) 등 구현. 

###### vue-nt-toast ([`npm`](https://www.npmjs.com/package/vue-nt-toast), [`git`](https://github.com/noistommy/vue-nt-toast.git))

- Demo: [https://noistommy.github.io/vue-nt-toast](https://noistommy.github.io/vue-nt-toast) 
- Vue 전용 Toast 플러그인
- 다중 알림, 자동 삭제, 스넥바 모드 등 제공

###### react-nt-toast ([`npm`](https://www.npmjs.com/package/react-nt-toast), [`git`](https://github.com/noistommy/react-nt-toast.git))

- Demo: [https://noistommy.github.io/react-nt-toast](https://noistommy.github.io/react-nt-toast)
- React 전용 Toast 플러그인
- 다중 알림, 자동 삭제, 스넥바 모드 등 제공

###### vue-nt-tooltip ([`npm`](https://www.npmjs.com/package/vue-nt-tooltip), [`git`](https://github.com/noistommy/vue-nt-tooltip.git))

- Demo: [https://noistommy.github.io/vue-nt-tooltip](https://noistommy.github.io/vue-nt-tooltip)
- Vue 전용 Tooltip 디렉티브
- Top/Bottom/Left/Right 방향 지원 v-directive 기반 툴팁 플러그인으로, 간단한 문법으로 재사용 가능한 툴팁 제공.

## Tech Stack

- Language: TypeScript, JavaScript(ES6+)
- Framework: Vue 2/3, Nuxt.js, React
- Build & Tooling: Vite, Webpack, Gulp
- UI & Design System: 사내 UI 라이브러리(FROG UI, GAUI, BEUI, HWUI), Headless UI 패턴 설계
- Visualization & Graphics: SVG, Canvas, Charting 라이브러리, 인터랙션/애니메이션
- Infra & 기타: Git(github, gitlab), jira, slack 등 

## 학력

- **국립공주대학교** — 컴퓨터·멀티미디어공학 전공 (2008.02 졸업)


## 개인 프로젝트

[https://nt-cabinet.vercel.app/](https://nt-cabinet.vercel.app/)
- BEUI - UI 인프라를 위한 여정
- 오픈 소스 모듈들
- 기타 프로젝트


<style lang="scss" scoped>
  a {
    color: var(--gray-80);
  }
  .be-button {
    margin: 0;
    margin-bottom: 4px;
    &:hover {
      a::before {
        content: attr(href);
        width: max-content;
        position: absolute;
        padding: 4px;
        margin-left: 4px;
        border-radius: 4px;
        font-size: 0.8em;
        left: 100%;
        top: 50%;
        background-color: var(--suf);
        color: var(--txt);
        transform: translateY(-50%);
      }
    }
  }
</style>