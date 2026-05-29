---
layout: doc

title: 각자가 가야할 길 - 분리
description: 스타일과 기능을 분리해 디자인 시스템과 headless UI 구조를 설계
lastUpdated: true
editLink: true
navbar: true
sidebar: true
aside:  true
outline: deep

---

<h1>{{ $frontmatter.title }}</h1>
<p>{{ $frontmatter.description }}</p>


## 문제
- 기존의 스타일과 기능이 결합된 SFC(single file component) 구조를 디자인 시스템 활용을 위해 스타일, 기능을 분리할 필요가 발생
- 기존의 라이브러리는 프레임워크 의존이 강하기 때문에 다중 프레임워크 개발 환경에서 사용이 어려움

## 목표
- 디자인시스템을 적용하여 최소한의 디자인 토큰의 변화로 다양한 스타일 테마를 얻을 수 있도록 변경
- 스타일과 기능의 완전한 분리로 독립된 스타일 프레임워크를 만들고 이는 이용해 다중 프레임워크 개발 환경에서 동일한 스타일 시스템을 사용하도록 함

## ![frog-ui](/img/frog-profile.svg){width=18} Frog UI

<div class="main-image">

[![test](/img/frog-ui-main.png)](https://frog-ui-css.vercel.app/)

</div>
<div class="caption">Frog UI document site main</div>

### 프로젝트 내용
- 디자인 토큰 기반의 스타일 구조로, 컬러·타이포·스페이싱 등 **기본 스타일 요소를 토큰으로 정의**하고 이를 컴포넌트 스타일에 매핑.
- 중복 정의를 줄이고 적은 수의 토큰 조합만으로 다양한 테마를 효율적으로 구성할 수 있게 설계.
- Vue/React 등 특정 프레임워크에 종속되지 않는 **독립적인 스타일 시스템**으로 분리해, 별도의 빌드 시스템을 구축.
- 컴포넌트 라이브러리에서 떼어낸 **경량 스타일 프레임워크**로, 다양한 환경에서 재사용 가능한 디자인 시스템 기반 마련.

### 링크

| Name | URL |
| --- | --- |
| Demo | [https://frog-ui-css.vercel.app/](https://frog-ui-css.vercel.app/) |
| Github | [https://github.com/noistommy/frog-ui-css.git](https://github.com/noistommy/frog-ui-css.git) |

## ![be-ui](/img/be-ui-vue.svg){width=18} BEUI(vue) - Headless UI

<div class="main-image">

[![test](/img/beui_vue_screenshot.png)](https://beui.vercel.app/)

</div>
<div class="caption">BEUI(vue) document site main</div>

### 프로젝트 내용
- Vue3 Composition API 기반의 공용 컴포넌트 라이브러리로, 스타일은 전부 외부 CSS 시스템(Frog UI)에 위임.
- 컴포넌트는 props, slot, 상태 관리 등 기능 레이어만 제공하며, 실제 스타일 클래스는 디자인 시스템에서 공급받는 구조.
- 기존 nt-ui-component 경험을 토대로, API 단순화·필수/선택 옵션 구분 등 사용성을 개선.
- 스타일과 기능이 느슨하게 결합된 구조로, **브랜드별 테마 변경이나 리디자인** 시 로직을 건드리지 않고 대응 가능.
- Vue 환경에서 디자인 시스템과 컴포넌트 아키텍처가 결합된 첫 버전의 플랫폼을 완성.

### 링크

| Name | URL |
| --- | --- |
| Demo | [https://beui.vercel.app/](https://beui.vercel.app/) |
| Github | [https://github.com/noistommy/beui.git](https://github.com/noistommy/beui) |
| NPM | [https://www.npmjs.com/package/noist-beui](https://www.npmjs.com/package/noist-beui) |

## 결과


<script setup>
  const keyword = ['vue3', 'composition api', 'css', 'scss', 'components' ]
</script>

## Keyword


<BeButton v-for="word in keyword" :key="word" outline round compact>{{word}}</BeButton>

<style scoped>
 .main-image {
  width: 100%;
  /* border: 1px solid var(--brd); */
  margin-top: 30px;
  text-align: center;
  background-color: var(--base-color);
 }
 .main-image img {
  width: 100%;
  max-width: 500px;
  margin: 10px auto;
 }
 .caption {
  text-align: center;
  color: #aaa;
 }
 img {
  display: inline-block;
 }
 a {
  color: #a1a1a1;
 }
</style>