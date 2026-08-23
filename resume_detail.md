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

<script setup>
  import {onMounted} from 'vue'

  onMounted(() => (document?.documentElement.classList.add('light')))
  
</script>

<style>
  header {display: none;}
  p.range-date {margin-top: 4px !important; font-weight: 600; color: #777;}
  .kicker {font-size:.9rem; letter-spacing:.08em; text-transform:uppercase; opacity:.7}
  .muted {opacity:.75}
  /* @media print {
    li:has([href]) {
      opacity: 0;
    }
  } */
</style>

# 김민영

<div className="kicker">Frontend Engineer(Developer)</div>

<!-- <div class="be-button text gray">
  <i class="icon left xi-mail-o"></i>
  noistommy@gmail.com
</div>
<div class="be-button text gray">
  <i class="icon left xi-mobile"></i>
  010-4456-9329
</div> -->

---

<div className="lead">

10년차 프론트엔드 개발자 김민영입니다.

<!-- 다양한 프로젝트 경험으로 프론트엔드의 전반적인 업무를 폭넓게 수행해 왔습니다. 빠르게 변화하는 프론트엔드 기술의 특성과 목적을 명확히 이해하고, 상황에 맞는 효율적인 개발 방식을 적용하는데 중점을 두고 있습니다.

기획부터 배포까지 전체 프로세스를 직접 경험하며 프로젝트 흐름을 빠르게 파악하고 그 과정에서 기획자와 디자이너, 서버 개발자 등 다양한 협업 파트너들과 적극적으로 의사소통을 하며 쌓은 협업 경험을 통해 문제 해결 능력과 실무 역량을 높여왔습니다.

효율적인 프론트엔드 구조 설계와 UI/UX를 업무의 중요한 부분으로 두고 여러 프로젝트에서 디자인 시스템과 공용 컴포넌트 라이브러리를 개발하여 생산성을 높인 경험이 있고 공용 모듈 및 유틸리티 개발은 서비스 전반의 재사용성과 확장성을 높여  유지보수 및 관리의 비용을 줄이는데 도움이 되도록 작업하고 있습니다.

또한 데이터 시각화의 방식으로 SVG, canvas등 다양한 인터렉션을 적극 활용하고 있으며 최근에는 3D를 이용한 인터렉션에도 크게 관심을 갖고 개발하고 있습니다.

추가로 AI를 이용한 데이터 시각화 작업의 경험과 AI를 활용한 개발 등 AI 관련 기술을 활용하여 그동안의 쌓아온 역량과 결합하는 시도들을 계속해서 하고 있습니다.  -->

다양한 프로젝트를 경험하며 시스템 설계와 디자인 시스템, 공용 컴포넌트들이 프로젝트의 생산성과 확장성을 높이는 중요한 요소라는 걸 체감했습니다. 이를 바탕으로 여러 서비스에서 초기 프로젝트 구조를 설계하고, 디자인 시스템과 공용 라이브러리, 모듈들을 직접 만들어 배포하며 팀의 개발 생산성을 높여왔습니다. 데이터 시각화 영역에서는 SVG나 Canvas를 코드 레벨에서 직접 개발하여 복잡하고 디테일한 인터랙션을 구현하고, 라이브러리에 의존하지 않고도 완성도 높은 콘텐츠를 만들어 왔습니다. 최근에는 그동안 Vue 중심으로 쌓아온 실무 경험을 React 기반으로 확장하며 구현하고 있습니다. 또한 기존 개발된 모듈에 AI를 활용한 사용성을 높이는 연동 문서화(llms.txt, AGENT.md) 작업들도 시도하고 있습니다. 

</div>

## 경력

### (주) 포그리트 <span class="be-gray-text light">| Frontend Developer</span>
<p class="range-date">2023.12 – 2025.05 (1Y 6M)</p>

>**사용자 UX 데이터를 기반한 분석 데이터 시각화 구현 및 서비스 고도화를 담당**

<div class="py-10">

##### [Knitlog-admin] 관리자용 모니터링 시스템 신규 개발 

  - 데이터 리스트 기반 관리자용 모니터링 시스템 구현 
  - 자체 디자인 시스템, Vue UI 컴포넌트 라이브러리 개발 및 적용
  - 개발 생산성 및 유지관리 효율 향상을 위한 초기 설계 

  기술: Vue3, html, scss, 자체 UI Component 라이브러리   

##### [Beusable] UX 분석 데이터 시각화 개발 

  - 대량의 데이터를 텍스트 스타일, 차트, SVG 등으로 시각화 구현
  - 동적 데이터 관리 및 유연한 컨텐츠 인터렉션 구현
  - 복잡한 인터렉션 요구사항을 svg + javascrip로 직접 구현
  - 신규 서비스 개발 및 기존 코드 개선 담당

  기술: Vue3 , html, scss, svg, e-chart   


##### 인하우스 사이트 (Forum, Beusable) 개선 및 유지보수 

  - 각 사이트 개발 환경에 맞춰 SSG, SSR, CSR 개발 (express, ejs, nuxt.js, vue jquery) 
  - 다국어(i18n) 및 SEO 개선

</div>


### (주) 가비아 <span class="be-gray-text light">| Frontend Developer</span>
<p class="range-date">2019.11 – 2023.02 (3Y 4M)</p>

>**신규 서비스 프레임워크 시스템 설계 및 개발과 공용 컴포넌트 라이브러리 개발 담당**

<div class="py-10">

##### 공용 스타일 라이브러리(디자인 시스템) 개발
  2023.01 - 2023.03

  - 디자인 토큰 개념을 활용한 공용 스타일 라이브러리 개발
  - Gulp 빌드 툴을 사용하여 테마별 라이브러리 생성 시스템 개발
  - 다크모드 전환 기능 개발 
  - 재사용 가능한 공용 스타일 개발로 일정한 스타일 유지 및 빠른 생산성 확보

  기술: Design token, Gulp, html, scss, javascript   

##### [클라우드 통합 관리 시스템] 관리자용 솔루션 개발
  2022.10 - 2023.01 

  - 자사 클라우드 시스템의 관리자용 솔루션 초기 설계 및 구현
  - 사용자 관리, 상품 및 결제 정보 관리 및 모니터링 기능 구현
  - 자체 UI 라이브러리 사용으로 개발 및 기능 테스트 기간을 단축

  기술: Vue2, html, scss, 자체 UI Component 라이브러리    
  참여도: 70%    

##### [cloud.gabia.com] cloud 서비스 사이트 예상 견적 계산기 개발
  2022.07 - 2022.09 

  - 서비스 페이지 내 예상 견적 계산 시스템 개발(리뉴얼) 
  - 기존 PHP+jQuery -> Vue 프레임 워크로 전환으로 컴포넌트를 활용하여 UI와 계산로직을 분리하는 방식으로 코드량을 70%이상 줄이고 효율적인 관리가 가능하도록 개발
  - 실시간 계산 결과 표시 및 excel 변환 기능 개발 

  기술: nuxt.js, html, scss   
  참여도: 100%    

##### [gCloud 관리콘솔] 클라우드 관리 솔루션 고도화 및 유지보수
  2022.04 - 2022.06

  - 자사 클라우드 관리콘솔 솔루션 고도화 및 유지보수 개발 
  - 사용성 향상을 위한 화면 기능 개선 및 기능 업데이트 대응 개발
  - 과도한 컴포넌트 사용을 줄여서 비효울적 화면 랜더링을 줄이는 설계로 변경 

  기술: nuxt.js, html, scss   
  참여도: 100%    

##### [font.gabia.com] 자사 폰트 브랜드 사이트 구현
  2022.01 - 2022.03 

  - 자사 개발 폰트 소개 및 다운로드 가능한 브랜드 사이트 구현 
  - 스크롤 애니메이션, SVG 를 활용하여 역동적인 화면 기능 구현 
  - 사용자 인터렉션 기반 동적 사이트의 배포로 이후 자체 브랜드 사이트의 방식으로 사용되었으며 현재까지 동일한 기능으로 운영중임

  기술: Vue2, html, scss, SVG animation, canvas   
  참여도: 100%    

##### [Hiworks] 그룹웨어 솔루션 '파일' 서비스 개발
  2021.08 - 2021.12

  - 자사 그룹 웨어 솔루션 내 파일 관리 및 공유 기능 구현 
  - 파일 드라이브 관리, 파일 공유, 업로드 , 다운로드, 파일 미리보기 기능 구현 
  - 데이터 설계에 참여하여 다계층구조의 파일 데이터를 효율적으로 주고 받을수 있도록 함

  기술: Vue2, html, scss, 자체 UI Components 라이브러리    
  참여도: 100%    
  
##### [Hiworks] 그룹웨어 솔루션 '토론' 서비스 개발
  2021.04 - 2021.07

  - 자사 그룹 웨어 솔루션 내 프로젝트 협업 커뮤니케이션 시스템 구현 
  - 그룹 관리, 피드 등록, 파일 등록, 웹 훅, 전용 에디터 기능 구현 
  - 자체 라이브러리 개발로 외부 UI 라이브러리 대체하여 외부 리소스의 의존도 제거하고 독장척 스타일 적용
  - 자체 라이브러리 개발로 이후 파일 서비스 개발 시 활용하여 개발 기간 단축에 기여

  기술: Vue2, html, scss, 자체 UI Component 라이브러리    
  참여도: 90%  

##### [Hiworks] 그룹웨어 솔루션 '보드' 서비스 개발
  2021.01 - 2021.03 

  - 자사 그룹 웨어 솔루션 내 일정 관리시스템 구현 
  - 일정 등록, 편집, 상태관리, 로그 표시 기능 구현 
  - 기술 부재(중첩 컴포넌트, 비효율적 상태관리, 데이터 지연 등)로 인한 일정 지연을 해결하고 프레임워크 관련 정책을 만드는 기여 

  기술: Vue 2, html, scss    
  참여도: 50%( 개발중인 프로젝트를 인계받아 개발 참여)    


</div>


### 엔쓰리엔(주) <span class="be-gray-text light">| Frontend Developer</span>
<p class="range-date">2017.10 – 2019.11 (2Y 1M)</p>

>**관제 솔루션 내부 데이터를 활용한 SI 개발**

<div class="py-10">

##### 재난 대응 관리 SOP(표준 운영 절차) 솔루션 개발 

 - 국가 기반 시설 내 재난 대응 표준 운영 절차 웹 솔루션 구현 
 - 화력 발전소(하동, 삼척), 관공서(통영 시청)에 시스템 적용 
 - 개발, 기획, UI/UX 설계 
 - 자사 솔루션 내 보조 기능에서 독립적인 플랫폼으로 확장 스마트 팩토리 정보 시각화 개발 

 기술: Vue2, html, less, pug, semantic-ui      
 참여도: 100% 

 ##### [한중 NCS] 스마트 팩토리 데이터 시각화 구현 

- MES, ERP 실시간 시각화 및 기업 BI 데이터 시각화 구현 
- chart별 공용 컴포넌트 개발 기획 및 UI 설계 참여 
- BI 데이터 시각화 첫 사례로 이후 스마트 팩토리 프로젝트에 활용 

기술:  Vue2, html, less, pug, Chart.js 
참여도: 100%

##### 해상 안전 시스템 통계 정보 시각화 개발 

- 통영 시청 상황실 각종 통계 정보 시각화 시스템 개발 및 UI 설계 
- chart 라이브러리를 활용하여 데이터 시각화 구현 

기술: Vue2, html, css, Chart.js    
참여도: 100%    

##### 전자 현수막 화면 표시 및 설정 시스템 개발 
 
- 경남 도청 119 상황실 소방 안전 시스템 
- 전자 현수막 화면 표출, 컨텐츠 에디터 시스템 구현 

기술:  Vue2, html, css   
참여도: 100%


</div>


### SNMP(소셜 네트워크 마케팅 플랫폼) <span class="be-gray-text light">| Frontend Developer</span>
<p class="range-date">2014.08 – 2016.10 (2Y 2M)</p>

<div class="py-10">

##### [From.com] 모바일 기반 오픈 마켓 플랫폼 

- 오픈 마켓 웹 플랫폼 개발 및 관리자 플랫폼 개발 
- 서비스 브랜드 웹 페이지 구현 
- 모바일 지원 서비스에서 전체 서비스 제공 플랫폼으로 확장 

기술: Django(python), CodeIgniter(PHP), html, less
참여도: 100% 

##### [Oglab] 어플리케이션 브랜드 사이트 

- 자사 모바일 어플리케이션 마케팅 브랜드 사이트 구현 

기술: jQuery, html, less, pug
참여도: 100%

</div>


## 프로젝트 & 링크

<div class="py-10">

##### Frog UI 디자인 시스템

<div class="be flex between">
  <div class="gray-txt-40">2021 - 현재</div>
  
  <div class="be-tags attached">
    <a href="https://frog-ui-css.vercel.app" target="_blank" class="be-tag label">Frog UI 문서</a>
  </div>
</div>

- 디자인 토큰을 활용한 scss기반 시멘틱 디자인 시스템
- 22개 컴포넌트 스타일, 다크모드 지원
- 빌드를 통해 정적 파일 생성
- 배포중인 모든 데모 문서에 적용
- [github](https://github.com/noistommy/frog-ui-css.git)

##### UI 컴포넌트 라이브러리

<div class="be flex between">
  <div class="gray-txt-40">2021 - 현재</div>
  
  <div class="be-tags">
    <a href="https://beui.vercel.app" target="_blank" class="be-tag label">BEUI(vue) 문서 </a>
    <a href="https://react-be-ui.vercel.app" target="_blank" class="be-tag label">BEUI(react) 문서 </a>
  </div>
</div>

- npm 설치 가능한 Headless UI 라이브러리
- React, Vue 개별 라이브러리
- 약 24개 컴포넌트 제공
- npm 누적 다운로드(최근 1년): vue용(2128회), react용(2025회)
- [github(vue)](https://github.com/noistommy/beui.git), [github(react)](https://github.com/noistommy/react-be-ui.git)


##### 모듈 (vue)

<div class="be flex between">
  <div class="gray-txt-40">2021 - 2025</div>
  
  <div class="be-tags">
    <a href="https://noistommy.github.io/vue-nt-modal" target="_blank" class="be-tag label">Modal 문서</a>
    <a href="https://noistommy.github.io/vue-nt-toast" target="_blank" class="be-tag label">Toast 문서</a>
    <a href="https://noistommy.github.io/vue-nt-tooltip" target="_blank" class="be-tag label">Tooltip 문서</a>
  </div>
</div>

- npm 설치 가능한 공용 모듈
- *Eventbus*, *Teleport*를 활용한 modal, toast, tooltip 모듈
- npm 누적 다운로드(최근 1년): modal(903회), toast(917회), tooltip(1067회)
- [github(modal)](https://github.com/noistommy/vue-nt-modal.git), [github(toast)](https://github.com/noistommy/vue-nt-toast.git), [github(tooltip)](https://github.com/noistommy/vue-nt-tooltip.git)

##### 모듈 (react)

<div class="be flex between">
  <div class="gray-txt-40">2026</div>
  
  <div class="be-tags shrink-0">
    <a href="https://noistommy.github.io/react-nt-modal" target="_blank" class="be-tag label">Modal 문서</a>
   <a href="https://noistommy.github.io/react-nt-toast" target="_blank" class="be-tag label">Toast 문서</a>
  </div>
</div>

- npm 설치 가능한 공용 모듈
- *Provider*, *Potal*를 활용한 modal, toast 모듈
- npm 누적 다운로드(최근 1년): modal(1671회), toast(534회)
- [github(modal)](https://github.com/noistommy/react-nt-modal.git), [github(toast)](https://github.com/noistommy/react-nt-toast.git)
   
</div>


## Tech Stack

- Language: TypeScript, JavaScript(ES6+)
- Framework: Vue 2/3, Nuxt.js, React, Next.js
- Build & Tooling: Vite, Webpack, Gulp
- UI & Design System: 자체 UI 라이브러리(FROG UI, BEUI, HWUI) 제작, Headless UI 패턴 설계
- Visualization & Graphics: SVG, Canvas, Charting 라이브러리, 인터랙션, 애니메이션(Transition)
- Infra & 기타: Git(github, gitlab), jira, slack, AI 연동 문서화(llms.txt, AGENT.md) 

## 학력

- **국립공주대학교** — 컴퓨터·멀티미디어공학 전공 (2008.02 졸업)



<style lang="scss" scoped>
  a {
    color: var(--gray-80);
    cursor: pointer;
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