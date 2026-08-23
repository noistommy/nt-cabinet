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

# NT Tooltip (React)

<BeTag class="deepblue">React</BeTag>
<BeTag class="red">NPM</BeTag>

## 소개

  `react-nt-tooltip`은 React용 툴팁 모듈이다. `nt-tooltip` 커스텀 HTML 속성을 통해 툴팁을 적용하며, JSX 작성 시 툴팁이 적용된 엘리먼트를 직관적으로 확인할 수 있다. 간단한 텍스트는 속성 값으로, 복잡한 HTML 콘텐츠는 `nt-target` 속성을 가진 자식 엘리먼트로 전달 가능하다. 표시 위치는 `top`, `bottom`, `left`, `right` 등의 옵션으로 지정할 수 있다.(정확히 top-center, top-start, top-end, bottom-center ... 처럼 방향 정렬을 지원한다.)
  
  `react-nt-tooltip` is a lightweight tooltip module for React. Tooltips are applied via the custom `nt-tooltip` HTML attribute, allowing you to intuitively identify which element the tooltip is bound to directly in JSX. It can display simple text content or complex HTML structures via a child element with the `nt-target` attribute. The display position can be controlled with options such as `top`, `bottom`, `left`, and `right`.


## Demo

모든 옵션 및 살행 테스트 가능한 공식 페이지입니다. 

<div class="be-button" v-nt-tooltip="`Tooltip test`">
  <i class="icon left xi-link" />
  NT Tooptip
  <a class="link" href="https://noistommy.github.io/react-nt-tooltip" target="_blank" />
</div>
Demo page

## Install

```bash 
npm install react-nt-tooltip
```

## How to use

::: code-group
```tsx [Registration]
// app.tsx
import React, { useEffect } from "react";
// import Module & style
import {initTooltip, clearTooltip } from "react-nt-tooltip";
import “react-nt-tooltip/tooltip.css”;

function App() {
  useEffect(() => {
    initTooltip();
    return () => {
      clearTooltip();
    }
  }, []);
  ...
}
```
```html [example]
<!-- basic -->
<div nt-tooltip="content: tooltip content;">...</div>

<!-- content type -->
<div nt-tooltip="true">
  <div nt-target="true">Tooltip content</div>
</div>

<!-- setting options -->
<div
  nt-tooltip="content: tooltip content; pos: 'right-top'; invert: false; ..."
>
  ...
</div>
```

## Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| content | *string* | `''` | Setting content text of tooltip. |
| selector | *string* | `nt-tooltip` | Setting selector attribute name. |
| pos | *string* | `top-center` | Setting position-aligns of tooltip. |
| invert | *boolean* | `true` | Setting theme of tooltip. |
| trigger | *string* | `hover` | Setting trigger event type. `hover \| click` |
| size | *string* | `''` | Setting size of tooltip. `small \| null` |
| padding | *number* | `8` | Setting padding of tooltip. |
| maxWidth | *number* | `250` | Setting the max width size(px) of tooltip. |
| textAlign | *string* | `center` | Setting alignment of tooltip content. |
| offset | *number* | `10` | Setting distance offset between tooltip and target Element. |
| customClass | *string* | `''` | Setting user custom classname. |


## 링크

<div class="be-button">
  <i class="icon left xi-github" />
  Github
  <a class="link" href="https://github.com/noistommy/react-nt-tooltip.git" target="_blank" />
</div>
<div class="be-button">
  <i class="icon left xi-package" />
  npm
  <a class="link" href=" https://www.npmjs.com/package/react-nt-tooltip" target="_blank" />
</div>
