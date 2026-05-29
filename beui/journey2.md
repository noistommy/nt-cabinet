---
layout: doc

title: 여정에 진짜 필요한것 - 정제
description: 무겁고 복잡해진 라이브러리를 재정비하고, 리치 컴포넌트를 공용 모듈로 분리해 경량화
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

- 컴포넌트 통합 과정에서 중복된 많은 옵션을 다 포함하게 되어 컴포넌트가 복잡하고 무거워지게됨
- 리치 컴포넌트, 도메인 특화 컴포넌트와 기본 UI 컴포넌트가 하나의 라이브러리에 전부 포함되어 여러 프로젝트에 적용 시 효율적인 재사용성을 확보하기 어려움

## 목표

- 리치, 도메인 특화 컴포넌트를 기본 UI 컴포넌트와 분리하여 가벼운 라이브러리로 만들고 분리된 모듈은 필요한 프로젝트에 별도록 포함시키도록 모듈화 함
- 불필요한 옵션과 스크립트에 의존된 기능을 줄이고 기본 HTML 기능을 최대한 살려 경량화된 라이브러리로 변경

## ![nt-ui](/img/nt-ui.svg){width=22} nt-ui-component(NTUI)

<div class="main-image">

[![test](/img/nt_ui_screenshot.png)](https://noistommy.github.io/nt_ui/#/)

</div>
<div class="caption">nt-ui-component document site components page</div>

### 프로젝트 내용
- Vue3로 버전 업그레이드와 함께 새로 구현하는 과정에서 필수 옵션 기준으로 새로 정의하고 도메인 특화 옵션등을 제외 시켜 경량 컴포넌트로 재설계함
- 스타일 분리 및 html 기능을 강화하는 방식으로 스크립트 의존을 줄이고 이후 디자인 시스템 도입을 위한 구조로 구현함
- 리치 모듈을 분리하여 별도의 모듈로 관리하고 필요한 프로젝트만 선택적으로 추가하여 사용하도록 함

### 링크

| Name | URL |
| --- | --- |
| Demo | [https://noistommy.github.io/nt-ui](https://noistommy.github.io/nt-ui/#/) |
| GitHub |[https://github.com/noistommy/nt-ui-component.git](https://github.com/noistommy/nt-ui-component.git) |

## ![nt-modules](/img/nt-profile.svg){width=22} NT-Modules
- Modal, Toast, Tooltip 등의 Plugin 모듈로 각각 패키징을 함

<div class="be-grid divide-3 divide-sm-2 divide-xs-1">
  <div class="column">
    <a href="/module/modal/">
      <BeSegment round="s" surface>
        NT-Modal
        <i class="xi-arrow-right" />
        <!-- <BeButton text icon="xi-arrow-right" /> -->
      </BeSegment>
    </a>
  </div>
  <div class="column">
    <a href="/module/toast_vue/">
      <BeSegment round="s" surface>
        NT-Toast(vue)
        <i class="xi-arrow-right" />
        <!-- <BeButton text icon="xi-arrow-right" /> -->
      </BeSegment>
    </a>
  </div>
  <div class="column">
    <a href="/module/toast_react/">
      <BeSegment round="s" surface>
        NT-Toast(react)
        <i class="xi-arrow-right" />
        <!-- <BeButton text icon="xi-arrow-right" /> -->
      </BeSegment>
    </a>
  </div>
  <div class="column">
    <a href="/module/tooltip/">
      <BeSegment round="s" surface>
        NT-Tooltip
        <i class="xi-arrow-right" />
        <!-- <BeButton text icon="xi-arrow-right" /> -->
      </BeSegment>
    </a>
  </div>

</div>

## 결과
- 신규 프로젝트에 필요한 최소 컴포넌트를 빠르게 가져다 쓸 수 있고, 리치 기능은 필요에 따라 선택적 적용이 가능한 구조로 전환됨
- 하나의 라이브러리보다 별도로 분리된 모듈이 스타일 자유도와 기능 확장에 더 유리한 부분 됨

<script setup>
  const keyword = ['css', 'scss', 'gulp::build', 'components', 'vue3', 'plugins']
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