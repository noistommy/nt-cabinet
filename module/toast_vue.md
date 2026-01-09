---
layout: doc

title: NT Toast:vue
# titleTemplate: 
# description:  
lastUpdated: true
editLink: true
navbar: true
sidebar: true
aside:  true
outline: deep

---

# NT Toast:vue

<BeTag class="green">VUE</BeTag>
<BeTag class="red">NPM</BeTag>

## 소개

`vue-nt-toast`는 자바스크립트 알림 시스템 라이브러리 입니다. 

Vue 프로젝트 내 plugin 설치를 통해 사용 가능하도록 제작 되었습니다. 어플리케이션 외부(최상단 레이어)에서 동작하여 내부 레이어 시스템에 영향을 받지 않게 설계 되었으며 컨텐츠의 종류에 따라 “성공”, “위험”, “정보”, “주의”, “중요” 의 상태 표시를 제공하고있습니다.

테마, 위치, 스낵바 모드 등 여러 옵션을 전역에서 설정 하여 전체 시스템에 반영 하도록 할 수 있고, 사용자가 실행할 때 마다 옵션을 변경해서 적용 할 수도 있습니다.

## Demo

<div class="be-button badge">
  <i class="icon left xi-link" />
  NT Toast
  <span class="in-badge be-green">vue</span>
  <a class="link" href="https://noistommy.github.io/vue-nt-toast" target="_blank" />
</div>
Demo page

## Install

```bash 
$ npm install vue-nt-toast
```

## How to use

::: code-group
```js [Registration]
// main.js
// import Module & style
import NtToast from 'vue-nt-toast';
import 'vue-nt-toast/toast.css';

const defaultOptions = { ... };

// global install 
app.use(NtToast, defaultOptions);
```
```js [show]
import { inject } from 'vue';

const ntToast = inject('$ntToast')

// show modal
ntToast.show('success', { title: '...', description: '...' }, { ...custom options });
ntToast.show('info', ... );
ntToast.show('danger', ... );
...

```

## Prams

| Name | Description | Required |
| --- | --- | --- |
| type | State or Color | `true` |
| contents.title | Title Text |  |
| contents.description | Description Text | `true` |
| options | User Custom Options | |


## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| useTitle | *boolean* | `true` | Setting for show/hide toast title. |
| useIcon | *boolean* | `true` | Setting for show/hide toast status icon.|
| round | *boolean* | `false` | Setting for enable/disable round border.|
| closeButton | *boolean* | `true` | Setting for show/hide close button.|
| displayOnTop | *boolean* | `false` | Setting for order type when toast create.|
| snackbar | *boolean* | `false` | Setting for snackbar mode.|
| freeze | *boolean* | `false` | Setting for auto close off.|
| timeout | *number* | `5000` | Setting for delay time.|
| theme | *string* | `` | Setting for toast style. `light` `icon` `icon-bg` `line`|
| position | *string* | `top-right` | Setting for create position. v-align(top, bottom) and h-align(left, center, right) and full-width|



## Link

<div class="be-button">
  <i class="icon left xi-github" />
  Github
  <a class="link" href="https://github.com/noistommy/vue-nt-toast.git" target="_blank" />
</div>
<div class="be-button">
  <i class="icon left xi-package" />
  npm
  <a class="link" href=" https://www.npmjs.com/package/vue-nt-toast" target="_blank" />
</div>

<!-- ## 키워드

<BeTag class="green round">VUE</BeTag>
<BeTag class="blue round">plugins</BeTag>
<BeTag class="deeppurple round">npm module</BeTag>
<BeTag class="brown round">toast</BeTag> -->
