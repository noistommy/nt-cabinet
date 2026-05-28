vue-nt-modal
============

![Static Badge](https://img.shields.io/badge/vue_3-only-%234FC08D?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/javascript-%23F7DF1E?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/html-%23E34F26?style=for-the-badge&logo=html)
![Static Badge](https://img.shields.io/badge/sass-%23CC6699?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/vite-bundler-%23646CFF?style=for-the-badge)
![Static Badge](https://img.shields.io/badge/vue_plugin-user_custom_with_vue_3-%234FC08D?style=for-the-badge)


 `vue-nt-modal` is a modal system module for vue, which utilizes the `teleport` feature supported by vue 3 to display user-created components (contents) outside of the application. Create outside of the application, implement it so that it doesn't affect the internal layer system, and make it work global, allowing users to display modal on the top-level layer anywhere in the application. Provides the basic structure (header, close button, default button) and the user can import only the modal content part as a component. Also, there is a component that can be comfirmed inside, so you can simply display the confirm modal.

You can specify options related to the window closing function, and depending on the options, you can close the window with the `click` or `esc` button. You can also open and close multiple modal sequentially by allowing modal calls inside the modal.

`vue-nt-modal`은 vue 용 모달 시스템 모듈입니다.  vue 3부터 지원하는 `teleport` 기능을 활용 하여 어플리케이션 외부에 사용자가 지정한 컴포넌트(컨텐츠)가 표시 되도록 합니다. 어플리케이션 외부에 생성하여 내부 레이어 시스템의 영향을 주지 않도록 구현하고 전역으로 동작하게 하여 사용자가 어플리케이션 어디에서든 최상위 레이어에 모달을 표시할 수 있도록 합니다. 기본적인 구조 (헤더, 닫기 버튼, 기본 버튼)를 제공하며 사용자는 모달 컨텐츠 부분만 component로 구현하여 import 시키면 됩니다. 또한 내부에 comfirm 처리가 가능한 component를 갖고 있어 간단하게 confirm 모달을 표시할수있도록 합니다.

창 닫는 기능 관련 옵션을 지정할 수 있으며 옵션에 따라 background(아무곳)를`click` 하거나 `esc`버튼으로 창을 닫을 수 있습니다. 또한 모달 내부에서 모달 호출이 가능하도록 하여 여러개의 모달을 순차적으로 열고 닫을 수 있습니다.

---

## Relese Note
- 2025.05.14 update vue3 composition api setup  

## Demo

[vue-nt-modal](https://noistommy.github.io/vue-nt-modal) demo page.

---

## Installation

```sh
$ npm install vue-nt-modal --save
```
---

## Usage
### Plugin registration

```javascript

import { createApp } from “vue”;
// import module
import NtModal from “vue-nt-modal”;
// import  style css or use yours
import “vue-nt-modal/nt-modal.css”;
 
const app = createApp(App)

Const defaultOptions = {
	// You can set your initial options here
};
app.use(NtModal, defaultOptions)

```
### use Ntmodal show

```javascript

// import { getCurrentInstance } from 'vue';
// const { proxy } = getCurrentInstance();
import { inject } from 'vue'

const ntModal = inject('$ntModal')
// show modal
ntModal.show(
  comp: component name or 'Confirm' // user compoenent name or 'Confirm'
  props: {
      // component props
  },
  options: {
    // This modal`s option
  }
)

```
### use NtModal close

```html

//close modal
<span @click="$emit('close')"> ... </span>

```
---

## Properties

* **clickToClose**: _boolean_ ▶︎ `true`    
Setting close by click on the background.

* **escapeToClose**: _boolean_ ▶︎ `true`   
Setting close by press the `ESC` button.
