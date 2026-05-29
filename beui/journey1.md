---
layout: doc

title: 여정의 시작 - 통합
# titleTemplate: 새로운 여정 - 통합
description: 흩어진 사내 컴포넌트를 하나의 공용 라이브러리로 통합
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

- 서비스마다 컴포넌트가 따로 관리 되었기 때문에, UI 패턴이 중복되고 유지보수가 어려움
- 외부 UI 컴포넌트 사용으로 발생한 스타일 커스텀의 한계와 무거운 라이브러리로 인한 성능 저하 문제 발생

## 목표

- 하나의 통합된 라이브러리로 만들어 유지 관리 비용을 줄이고 용어 명칭을 통일하여 관계부서와의 소통에 활용
- 부분적으로 사용중인 외부 라이브러리를 대체하고 내부 라이브러리로 통합하여 커스텀 자유도와 일관성 확보

## ![hw-ui](/img/hw-ui.svg){width=18} hw-ui-component(HWUI)

<div class="main-image">

[![test](/img/hw_ui_screenshot.png)](https://noistommy.github.io/hw_ui/#/)

</div>
<div class="caption">hw-ui-component document site main</div>

### 프로젝트 내용
- Vue2 기반 서비스에서 사용된 UI 컴포넌트를 모아 공용 컴포넌트 라이브러리로 통합함
- 시멘틱 네이밍을 통해 스타일 컨벤션을 정의하고 팀과 공유하기 위한 문서의 역할을 함
- 커스텀이 필요한 외부 컴포넌트를 대체 할 자체 컴포넌트를 구현함

### 링크

| Name | URL |
| --- | --- |
| Demo | [https://noistommy.github.io/hw_ui](https://noistommy.github.io/hw_ui/#/) |
| Github | [https://github.com/noistommy/dev_hw_ui.git](https://github.com/noistommy/dev_hw_ui.git) |

## 결과

- 통합 라이브러리 사용으로 신규 서비스 개발과정에서 기존 서비스의 언어(용어) 기능정의 등을 그대로 사용함으로서 일정 단축 및 개발, 유지보수 최적화를 달성함

<script setup>
  const keyword = ['css', 'scss', 'gulp::build', 'components', 'vue', 'plugins']
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