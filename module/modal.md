---
layout: doc

title: NT Modal
# titleTemplate:
# description:  
lastUpdated: true
editLink: true
navbar: true
sidebar: true
aside:  true
outline: deep

---

# NT MODAL

<BeTag class="green">VUE 3</BeTag>
<BeTag class="red">NPM</BeTag>

## 소개

`vue-nt-modal`은 Vue용 모달 시스템 라이브러리입니다. Vue3부터 지원하는 `teleport` 기능을 활용하여, 어플리케이션 외부에 사용자가 지정한 컴포넌트(컨텐츠)가 표시되도록 합니다.

모달은 어플리케이션 외부에 생성되어 내부 레이어 시스템에 영향을 주지 않으며, 전역으로 동작하기 때문에 사용자는 어플리케이션 어디에서든 최상위 레이어에 모달을 표시할 수 있습니다.

기본적으로 **헤더**, **닫기 버튼**, **기본 버튼** 구조를 제공하며, 사용자는 모달의 컨텐츠 부분만 컴포넌트로 구현하여 import하면 됩니다. 또한, 내부에 **confirm 처리가 가능한 컴포넌트**가 내장되어 있어 간단하게 confirm 모달을 표시할 수 있습니다.

창 닫기 기능과 관련된 다양한 옵션을 지정할 수 있으며, 옵션에 따라 **배경 영역 클릭** 또는 **ESC 키 입력**으로 모달을 닫을 수 있습니다. 또한, **모달 내부에서 다른 모달을 호출하는 기능**도 지원하여 여러 개의 모달을 순차적으로 열고 닫을 수 있습니다.

## Demo

<div class="be-button">
  <i class="icon left xi-link" />
  NT Modal
  <a class="link" href="https://noistommy.github.io/vue-nt-modal" target="_blank" />
</div>
Demo page

## Install

```bash 
$ npm install -D vue-nt-modal 
```

## How to use

::: code-group
```js [Registration]
// main.js
// import Module & style
import NtModal from 'vue-nt-modal';
import 'vue-nt-madal/nt-modal.css';

const defaultOptions = { ... };

// global install 
app.use(NtModal, defaultOptions);
```
```js [show]
import { inject } from 'vue';

const ntModal = inject('$ntModal')

// show modal
ntModal.show(
  comp: <Component /> || 'confirm',
  props: {
    // conponent`s pros
  },
  options: {
    // custom options
  }
)
```
```html [close]
<span @click="$emit('close')">...</span>
```

## Props 

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| clickToClose | *boolean* | `true` | Setting close by click on the background. |
| escapeToClose | *boolean* | `true` | Setting close by press the ESC button. |

## 링크

<div class="be-button">
  <i class="icon left xi-github" />
  Github
  <a class="link" href="https://github.com/noistommy/vue-nt-modal.git" target="_blank" />
</div>
<div class="be-button">
  <i class="icon left xi-package" />
  npm
  <a class="link" href=" https://www.npmjs.com/package/vue-nt-modal" target="_blank" />
</div>

<!-- ## 키워드

<BeTag class="green round">VUE</BeTag>
<BeTag class="deepblue">beTag</BeTag> -->
