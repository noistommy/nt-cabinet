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

 directive를 이용하여 제작된 툴팁은 vue template 작성 시 엘리먼트의 디렉티브 속성으로 표현 가능하여 톨팁이 적용된 엘리먼트를 직관적으로 확인 가능하다. 간단한 텍스트만 전달하여 표시 가능하며 좀 더 복잡한 표현을 하기위해 html을 사용 가능하다. 표시될 엘리먼트의 위치에 따라 표시 위치를 top, bottom으로 지정할수있다.



## Demo

<div class="be-button">
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

const defaultOptions = { ... };

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


