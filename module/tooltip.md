---
layout: doc

title: NT Tooltip
# titleTemplate:
# description:  
lastUpdated: true
editLink: true
navbar: true
sidebar: true
aside:  true
outline: deep

---

# NT Tooltip

<BeTag class="green">VUE 3</BeTag>
<BeTag class="lightgreen">Directive</BeTag>
<BeTag class="red">NPM</BeTag>

## 소개
`vue-nt-tooltip`은 vue의 사용자 정의 지시문(directive)이다.

 directive를 이용하여 제작된 툴팁은 vue template 작성 시 엘리먼트의 디렉티브 속성으로 표현 가능하여 톨팁이 적용된 엘리먼트를 직관적으로 확인 가능합니다. 간단한 텍스트만 전달하여 표시 가능하며 좀 더 복잡한 표현을 하기위해 html을 사용 하여 많은 정보를 전달할수 있습니다. 사용자가 표시 위치를 top, bottom, left, right으로 지정 할수있으며 지정된 위치에서 start, center, end로 부모 엘리먼트 기준으로 정렬 할수있습니다.
  
  기본적으로 최상단 레이어( root(#app) 외부에 생성)에서 동작하여 다른 엘리먼트보다 높은 z-index 값을 갖게 되며 viewport에 의한 충돌을 보정하여 항상 컨텐츠가 화면상에 보이도록 합니다.

## Example

각 방향별 툴팁 표시 예제입니다. 

<div class="be-segment border">
  <div class="contents">
    <div class="be-button" v-nt-tooltip="`Tooltip Top`">up</div>
    <div class="be-button" v-nt-tooltip:bottom="`Tooltip Bottom`">bottom</div>
    <div class="be-button" v-nt-tooltip:left="`Tooltip Left`">left</div>
    <div class="be-button" v-nt-tooltip:right="`Tooltip Right`">right</div>
  </div>
</div>

## Demo

모든 옵션 및 살행 테스트 가능한 공식 페이지입니다. 

<div class="be-button" v-nt-tooltip="`Tooltip test`">
  <i class="icon left xi-link" />
  NT Tooptip
  <a class="link" href="https://noistommy.github.io/vue-nt-tooltip" target="_blank" />
</div>
Demo page

## Install

```bash 
$ npm install vue-nt-tooltip
```

## How to use

::: code-group
```js [Registration]
// main.js
// import Module & style
import NtTooltip from 'vue-nt-tooltip;
import 'vue-nt-tooltip/tooltip.css';

const defaultOptions = {
  trigger: 'hover',
  maxWidth: 200,
  size: 'normal',
  theme: 'dark',
  direction: 'top',
  alignment: 'center',
  transition: 'line',
  isUse: true
};

// global install 
app.use(NtTooltip, defaultOptions);
```
```html [example]
<!-- basic --> 
<div v-nt-tooltip="`tooltip sample`"> ... </div>

<!-- object type contents -->
<div v-nt-tooltip="{ contents: 'tooltip sample'}"> ... </div>

<!-- html contents --> 
<div v-nt-tooltip="{ contents: '<span> html contents </span>'}"> ... </div>

<!-- position -->
<div v-nt-tooltip:top="{ contents: 'create up'}"> ... </div>
<div v-nt-tooltip:bottom="{ contents: 'create down'}"> ... </div>
```

## Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| maxWidth | *number* | `200` | Setting the max width size(px) of tooltip. |
| direction | *string* | `top` | Setting the initial position of tooltip. |
| alignment | *string* | `center` | Setting the initial position of tooltip arrow. |

## 링크

<div class="be-button">
  <i class="icon left xi-github" />
  Github
  <a class="link" href="https://github.com/noistommy/vue-nt-tooltip.git" target="_blank" />
</div>
<div class="be-button">
  <i class="icon left xi-package" />
  npm
  <a class="link" href=" https://www.npmjs.com/package/vue-nt-tooltip" target="_blank" />
</div>

<!-- ## 키워드

<BeTag class="green round">VUE</BeTag>
<BeTag class="deepblue">beTag</BeTag> -->


