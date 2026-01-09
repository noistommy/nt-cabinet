# BeUI

Vue 3 전용 UI 라이브러리

`BeUI`는 `VUE`(vue3 composition api)전용 UI 컴포넌트 라이브러리입니다.
디자인 시스템이 적용된 [`Flog`](https://frog-ui-css.vercel.app/) CSS 라이브러리를 기반으로 최신의 `vue 3`에 사용 가능한 컴포넌트로 이루어저 있습니다.

- 총 25개 컴포넌트 구현
- FallThrough attributes(속성 상속)을 이용한 간단한 컴포넌트 적용 방식
- NPM 패키지 배포

### Document

[BeUI](https://beui.vercel.app/)

### History (이전 컴포넌트 라이브러리)

- [`NTUI`](https://noistommy.github.io/nt_ui) UI 컴포넌트 + style 라이브러리 분리 - vue 3 (optional api)
- [`HWUI`](https://noistommy.github.io/hw_ui) UI 컴포넌트 모음 - vue 2

### Update

기존 컴포넌트 라이브러리와 다른점은

- NPM 패키징
- 최신 vue (vue 3 composition api) 적용
- 디자인 토큰 업데이트
- 코드 경량화

등이 있습니다.

라이브러리 전체를 NPM 패키징 하여 최신의 사용자 프로젝트에 적용 가능합니다.
또한 컴포넌트들의 모든 스타일 클래스명은 flog와 동일하기 떄문에 정의된 스타일을 그대로 사용 하거나
작업자가 새로운 빌드를 통해 각 프로젝트에 맞도록 스타일 테마를 변경하고 적용 가능합니다.

### Install

```sh
npm install noist-beui
```

전역에서 모듈 전체를 install 하여 사용하거나 개별 컴포넌트를 임포트하여 사용 가능합니다.
(`beui.css` 스타일은 설치와 상관없이 Import 해야합니다.)

- 전역 설치

```js
// main.js
// import modules
import Beui from 'noist-beui'
// import stylesheet
import 'noist-beui/beui.css'

const app = createApp('./App.vue')

app.use(Beui)
```

### Usage

```js
import { BeComponent } from 'noist-beui'
;<BeComponent v-bind="..."></BeComponent>
```

### Story

UI 컴포넌트 라이브러리의 모듈화를 목표로 시작하게 된 프로젝트입니다. 이전까지는 각 서비스에서 개별로 사용하다보니 버전 관리가 어렵고 요구사항에 맞춰 각기 다른 코드 수정을 하게 되어 공용 라이브러리의 의미가 사라지게 되는것을 경험했습니다. 그래서 모듈화를 통해 하나의 관리 영역에서 버전을 적용한 업데이트 관리를 할 수 있는 라이브러리가 반드시 필요하다고 생각합니다.

### 감사합니다
