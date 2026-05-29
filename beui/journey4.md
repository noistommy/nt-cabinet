---
layout: doc

title: 큰 길로 나아가기 - 확장
description: 동일한 설계 원칙을 React 환경으로 확장
lastUpdated: true
editLink: true
navbar: true
sidebar: true
aside:  true
outline: deep

---

<h1>{{ $frontmatter.title }}</h1>
<p>{{ $frontmatter.description }}</p>


## 목표
- Vue에서 검증된 “Frog UI 스타일 시스템 + Headless UI 컴포넌트” 구조를 React 환경으로 확장함

## ![BEUI](/img/be-ui-react.svg){width=18} BEUI (react) - Headless UI

<div class="main-image">

[![test](/img/beui_react_screenshot.png)](https://react-be-ui.vercel.app/)

</div>
<div class="caption">BEUI(react) document site main</div>

### 프로젝트 내용
- React 기반 공용 UI 컴포넌트 라이브러리로, BEUI (vue)와 마찬가지로 스타일은 Frog UI와 연동하는 방식으로 설계.
- Vue에만 존재하던 slot 기능을 보완하기 위해, React에서 **Slot Component**를 도입해 비슷한 유연성을 확보.
- 외부 스타일 프레임워크(tailwind, css in js)에 의존하지 않고, **디자인 시스템 연동용 CSS 레이어와 기능 레이어를 분리**.
- 기존 Vue용 라이브러리 컴포넌트를 React로 옮기면서 두 프레임워크의 렌더링·상태·컴포지션 방식 차이를 깊게 이해.
- 프레임워크에 상관없이 재사용 가능한 **디자인 시스템+컴포넌트 설계 원칙**을 정리하는 계기가 됨.

### 링크

| Name | URL |
| --- | --- |
| Demo | [https://react-be-ui.vercel.app/](https://react-be-ui.vercel.app/) |
| Github | [https://github.com/noistommy/react-be-ui.git](https://github.com/noistommy/react-be-ui.git) |
| NPM |[https://www.npmjs.com/package/react-be-ui](https://www.npmjs.com/package/react-be-ui) |

## 결과
- React는 Vue와 다른 방식의 스타일 시스템이 표준으로 사용되고 있는데 BEUI가 다른 방식의 스타일 적용 모델이 될 수 있음을 확인함
- 정적 파일 스타일 적용 방식이 다른 스타일 프레임워크 보다 가볍게 동작하도록 함

<script setup>
  const keyword = ['react', 'UI/UX', 'css', 'scss', 'components' ]
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