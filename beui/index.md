---
layout: doc

title: BEUI를 위한 여정
# description:  
lastUpdated: true
editLink: true
navbar: true
sidebar: true
aside:  false
outline: deep

---

<h1>{{ $frontmatter.title }}</h1>

## 소개

처음 큰 규모의 프로젝트를 담당했을때 프로젝트의 각 서비스마다  제각각 구현된 컴포넌트들과 외부 라이브러리에 의존한 화면들은 커스터마이징과 성능 모두에서 한계를 드러내고 있었습니다. 새로운 요구사항이 생길 때마다 비슷한 기능을 다시 만들거나, 공용으로 쓰이던 코드에 서비스별 분기가 점점 더 많이 달라붙는 상황을 여러 차례 경험했습니다. 그런 상황을 그대로 둘 수 없었습니다. 

새로운 방식이 필요했습니다.

그래서 UI 인프라를 위한 여정을 시작하기로 했습니다.  흩어진 컴포넌트를 모으는것 부터 시작하여 모듈 경량화, 디자인 시스템, 프레임워크 확장을 거쳤고, 이제는 AI 기반 스타일링을 통해 다음 단계의 UI 제작 방식을 실험하고 있습니다.  이제부터 그 여정을 소개합니다.


## 여정
<div class="be">

![test](/img/journey-flow.png)

</div>

<div id="journey">
  <div class="be-segment border round-m">
    <div class="contents">
      <a href="/beui/journey1/">
        <div class="title">여정의 시작 - 통합</div>
        흩어진 사내 컴포넌트를 하나의 공용 라이브러리로 통합
      </a>
    </div>
  </div>
  <div class="be-segment border round-m">
    <div class="contents">
      <a href="/beui/journey2/">
        <div class="title">여정에 진짜 필요한 것 - 정제</div>
        무겁고 복잡해진 라이브러리를 재정비하고, 리치 컴포넌트를 공용 모듈로 분리해 경량화
      </a>
    </div>
  </div>
  <div class="be-segment border round-m">
    <div class="contents">
      <a href="/beui/journey3/">
        <div class="title">각자 가야할 길 - 분리</div>
        스타일과 기능을 분리해 디자인 시스템과 headless UI 구조를 설계
      </a>
    </div>
  </div>
  <div class="be-segment border round-m">
    <div class="contents">
      <a href="/beui/journey4/">
        <div class="title">큰 길로 나아가기 - 확장</div>
        동일한 설계 원칙을 React 환경으로 확장
      </a>
    </div>
  </div>
</div>


<style lang="scss" scoped>
 #journey {
  color: var(--txt);
  a {
    color: inherit;
    text-decoration: none;
  }
  .title {
    font-weight: 700;
    margin-bottom: 10px;
  }
  > div:hover {
    background-color: var(--suf);
  }
 }
</style>