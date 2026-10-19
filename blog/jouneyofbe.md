---
layout: doc

title: BEUI를 위한 여정
lastUpdated: true
sidebar: false
aside: false
prev: false
next: false
---

<h1>{{ $frontmatter.title }}</h1>

##

처음 큰 규모의 프로젝트를 맡았을 때, 이미 프로젝트의 일정이 한참 미뤄지고 있었습니다. 그런데 그 이유가 컴포넌트 문제였습니다. 서비스마다 제각각 구현되어 있는 중복 컴포넌트 문제와 또 외부 라이브러리에 깊이 기대고 있어서 스타일을 바꾸려면 라이브러리에 하나하나 새로운 스타일을 덮어쓰는 것도 문제였습니다. 새로운 요구사항이 생길 때마다 비슷한 기능을 처음부터 다시 만들거나, 공용 코드에 서비스별 분기를 하나둘 붙이는 일이 반복되었습니다. 분기는 쌓일수록 코드를 읽기 어렵게 만들었습니다.

이대로는 프로젝트가 끝나기 전에 내가 먼저 끝날것 같았습니다.

그렇게 UI 인프라를 만드는 긴 여정이 시작되었습니다. 흩어진 컴포넌트를 하나의 시스템으로 모으고 경량화, 디자인 시스템, 프레임워크 확장의 과정을 거쳐 지금은 AI 기반 스타일링 UI 제작 방식을 실험하고 있습니다.

이 글은 그 과정의 기록입니다.

<div class="be my-15">
<div class="be-segment border p-0">

![test](/img/journey-flow.png)

</div>
<div class="be flex center gray-txt-50 p-0">
  Journey of BEUI 
</div>
</div>

### 1. 일단 한곳에 모으자

가장 먼저 해결해야 할 문제는 중복이었습니다. 서비스마다 컴포넌트를 따로 관리하다 보니 같은 UI 패턴이 여러개 존재했고, 하나를 고치면 나머지도 일일이 찾아 고쳐야 했습니다. 외부 UI 컴포넌트(일단 가장 많은 비중을 차지하는 Element UI 라이브러리)는 스타일을 원하는 대로 바꾸기 어려웠고, 무거운 라이브러리 때문에 성능도 떨어졌습니다.

목표는 두 가지였습니다. 하나의 통합 라이브러리로 유지 관리 비용을 줄이고 용어를 통일해 기획,디자인 등 관계 부서와의 소통에도 같은 말을 쓰는 것, 그리고 부분적으로 쓰던 외부 라이브러리를 내부 라이브러리로 대체해 커스터마이징의 자유도와 일관성을 확보하는 것이었습니다.

이렇게 만든 것이 HWUI입니다. Vue2 기반 서비스들에서 쓰이던 컴포넌트를 모아 공용 라이브러리로 합쳤고, 시맨틱 네이밍으로 스타일 컨벤션을 정의해 팀이 공유하는 문서 역할도 하게 했습니다. 커스텀이 필요했던 외부 컴포넌트는 자체 컴포넌트로 바꿨습니다.

<div class="be my-15">
<div class="be-segment border p-0">

![test](/img/hw_ui_screenshot.png)

</div>
<div class="be flex center gray-txt-50 p-0 gap-2">
  <a href="https://noistommy.github.io/hw_ui" target="_blank">
  <i class="xi-link" />
  HWUI
  </a>
   Document page screenshot (vue2, 35 components)
</div>
</div>

효과는 신규 서비스를 만들 때 가장 크게 나타났습니다. 기존 서비스에서 쓰던 용어와 기능 정의를 그대로 가져다 쓸 수 있어서 개발 일정이 줄었고 유지보수도 수월해졌습니다. 이후 새로운 서비스의 배포가 이전 서비스에 비해 3개월 정도 줄어든 것도 새로운 라이브러리가 일정을 크게 줄였기 때문입니다.

### 2. 많다고 좋은것은 아니다.

통합하고 나니 새로운 문제가 생겼습니다. 중복된 컴포넌트들의 옵션을 하나도 빠뜨리지 않고 그대로 합치다 보니 복잡하고 무거워졌습니다. 리치 컴포넌트와 도메인 특화 컴포넌트, 기본 UI 컴포넌트가 한 라이브러리에 뒤섞여 있어서, 여러 프로젝트에 적용해도 라이브러리의 이점을 얻기 어려웠습니다.

좋은 점은 그냥 여러 문제를 한 군데에서 해결할 수 있다는 것 정도…

여기서 배운 것은 더하는 것만이 답이 아니고 빼는것도 필요하다는 점입니다. 더 정확히는 무엇을 남기고 무엇을 덜어낼지 정하는 일이 더 중요했습니다. 리치·도메인 특화 컴포넌트는 별도 모듈로 분리해 기본 UI만 담은 가벼운 라이브러리를 만들고, 분리한 모듈은 필요한 프로젝트에서만 추가하기로 했습니다. 불필요한 옵션과 스크립트에 의존하던 기능도 줄이고 기본 HTML이 제공하는 기능을 최대한 살리는 방향으로 바꿨습니다.

프레임워크 기반을 Vue3로 올리면서 새로 NTUI를 만들었습니다. (처음 만들떄는 GAUI 였는데 이후 이름을 변경해서...)

<div class="be my-15" >
<div class="be-segment border p-0">

![test](/img/nt_ui_screenshot.png)

</div>
<div class="be flex center gray-txt-50 p-0 gap-2">
  <a href="https://noistommy.github.io/nt-ui" target="_blank">
  <i class="xi-link" />
  NTUI
  </a>
   Document page screenshot (vue3, 20 components)
</div>
</div>

필수 옵션을 기준으로 API를 다시 정의하고 도메인 특화 옵션은 전부 제외했습니다. 스타일을 분리하고 HTML 기능을 강화해 스크립트 의존을 줄였고, 이후 디자인 시스템을 도입할 수 있는 구조로 만들었습니다. 리치 모듈은 따로 관리하되, Modal, Toast, Tooltip 같은 기능은 각각 Vue Plugin 형태의 NT-Modules로 패키징해 필요한 곳에서만 가져다 쓰게 했습니다.

‘컴포넌트 라이브러리는 가볍게, 리치 컴포넌트는 개별 모듈로 분리해서 확장성 있게’ 개발하는 방식을 기본으로 하게 되었습니다.

<div class="be-segment border">

![nt-modules-preview](/img/preview/nt-modules-preview.png)

</div>
<div class="be flex center gray-txt-50 p-0 gap-2">
  <a href="/module/modal_react" target="_blank">
  <i class="xi-link" />
  NT-Modules
  </a>
   Preview screenshot(Modal, Toast, Tooltip)
</div>

### 3. 스타일과 기능을 분리하기

이제는 본격적으로 디자인 시스템을 적용 할 준비가 되었습니다. 다만 이 시기에 여러 프레임워크를 테스트 하고 있어서 새로운 시스템은 여러 프레임워크에서 사용 할 수 있었으면 좋겠다고 생각했습니다. (이때는 Headless UI 멀티 프레임워크 개념이 등장하기 전이라 아무도 시도하지 않은 방식이였습니다.)

그런데 HWUI, NTUI는 Vue 프레임워크 기반 라이브러리입니다. 새로운 디자인 시스템은 스타일과 기능이 한 파일에 묶인 SFC(Single File Component) 구조에서 스타일을 꺼내야 했습니다. 컴포넌트가 프레임워크에 강하게 묶여 있어서 여러 프레임워크를 함께 쓰는 환경에서는 쓰기 어렵기 때문이였습니다.

그래서 스타일과 기능을 완전히 분리하기로 했습니다. 디자인 토큰을 조금만 바꿔도 다양한 테마가 나오게 하고, 분리한 스타일은 독립된 프레임워크로 만들어서 어떤 프레임워크에서든 같은 스타일 시스템을 쓰는 게 목표였습니다.

그렇게 하나의 라이브러리가 스타일링과 기능 컴포넌트로 나눠지게 되었습니다. 그 중 스타일링을 담당하는 새로운 패키징이 바로 `Frog UI`입니다.

#### Frog UI

<div class="be my-15">
<div class="be-segment border p-0">

![test](/img/preview/frogui_main.png)

</div>
<div class="be flex center gray-txt-50 p-0 gap-2">
  <a href="https://frog-ui-css.vercel.app/" target="_blank">
  <i class="xi-link" />
  Frog UI
  </a> document page (css, 20 components, dark mode)
</div>
</div>

Frog UI는 디자인 토큰 중심의 CSS 프레임워크입니다. 컬러, 타이포그래피, 스페이싱 같은 기본 요소를 토큰으로 정의하고 이를 컴포넌트 스타일에 매핑했습니다. 정의가 중복되지 않고, 토큰 몇 개만 조합해도 여러 테마를 만들 수 있게 설계했습니다. Vue나 React에 종속되지 않도록 별도 빌드 시스템을 구축해서 컴포넌트 라이브러리에서 떼어냈고, 덕분에 여러 환경에서 재사용할 수 있는 디자인 시스템의 기반이 생겼습니다.

정적파일로 빌드하며 굳어진(?) 토큰을 대신하여 CSS Variable을 사용하여 다크모드를 지원하고 사용자의 오버라이드를 허용하여 정적 스타일링의 단점을 보완했습니다.

<!-- `[토큰 → 컴포넌트 스타일 매핑 예시 코드, 테마 하나를 추가하는 데 필요한 토큰 수]` -->

그리고 기능을 담당하는 컴포넌트 라이브러리가 `BEUI`입니다.

#### BEUI (Vue)

<div class="be my-15">
<div class="be-segment border p-0">

![test](/img/preview/beui_vue_main.png)

</div>
<div class="be flex center gray-txt-50 p-0 gap-2">
  <a href="https://beui.vercel.app/" target="_blank">
  <i class="xi-link" />
  BEUI (Vue)
  </a>
   document page (vue, 20 components, dark mode)
</div>
</div>

BEUI(Vue)는 Vue3 Composition API 기반의 컴포넌트 라이브러리이고, 스타일은 전부 Frog UI에 맡깁니다. 컴포넌트는 props, slot, 상태 관리 같은 기능 레이어만 제공하고, 실제 스타일 클래스는 디자인 시스템에서 받아 쓰는 구조입니다. 이전 HWUI와 NTUI를 만들며 쌓은 경험을 바탕으로 API를 단순하게 다듬었고, 필수 옵션과 선택 옵션을 구분해서 쓰기 편하게 만들었습니다.

스타일과 기능이 느슨하게 붙어 있어서 브랜드별로 테마를 바꾸거나 리디자인을 하더라도 로직은 건드릴 필요가 없습니다. 디자인 시스템과 컴포넌트 아키텍처가 만난 첫 플랫폼이 Vue 환경에서 완성됐습니다.

<!-- `[Headless를 택하면서 감수한 점: 사용하는 쪽에서 스타일 클래스를 알아야 하는 부담 등]` -->

### 4. React로 넓히기

Vue에서 검증한 "Frog UI 스타일 시스템 + Headless UI 컴포넌트" 구조를 React로 가져가서, 프레임워크가 달라도 같은 디자인 시스템을 쓸 수 있게 하는 게 다음 목표였습니다.

BEUI(React)도 Vue 버전처럼 스타일은 Frog UI와 연동합니다. 다만 Vue에는 있는 slot이 React에는 없어서, 비슷한 유연함을 내려고 Slot Component를 도입했습니다. Tailwind나 CSS-in-JS 같은 외부 스타일 도구는 쓰지 않았고, 디자인 시스템 연동용 CSS 레이어와 기능 레이어를 나누는 원칙도 그대로 유지했습니다.

Vue 컴포넌트를 React로 옮기다 보니 두 프레임워크가 렌더링, 상태, 컴포지션을 다루는 방식이 어떻게 다른지 꽤 깊게 이해하게 됐습니다. 덕분에 프레임워크와 상관없이 통하는 디자인 시스템과 컴포넌트 설계 원칙도 정리할 수 있었습니다.

<div class="be my-15">
<div class="be-segment border p-0">

![test](/img/preview/beui_react_main.png)

</div>
<div class="be flex center gray-txt-50 p-0 gap-2">
   <a href="https://react-be-ui.vercel.app/" target="_blank">
  <i class="xi-link" />
  BEUI (React)
  </a> Document main page (React Components, 20 components, dark mode)
</div>
</div>

### 5. 그리고 AI

Frog UI와 BEUI로 스타일과 기능이 분리된 UI 인프라를 갖췄으니, 이제 그 위에 AI 스타일링 트렌드와 체계적인 문서화를 얹는 단계를 준비하고 있습니다. BEUI가 AI 코딩 도구에서 자연스럽게 추천되고, 코드가 완성되고, 리팩터링되는 라이브러리가 되는 게 목표입니다. 이를 위해 코드 구조와 메타데이터, 문서 체계를 정비하는 중입니다.

```markdown
# Frog UI Documentation

> Semantic CSS를 사용하여 일관되고 의미있게 화면을 구현합니다.

Frog UI는 `scss`기반으로 설계된 디자인 시스템이 포함된 CSS 프레임워크에 대한 공식 문서 및 핵심 가이드 라인입니다.

**Key Features**

- `Gulp`빌드를 통한 정적 css 파일 생성
- html, css 기술 중심의 구성
- 시멘틱 네이밍을 통한 직관적인 의미 전달
- 지속적인 업데이트 및 버그 수정, 새로운 기능 추가

**Technology Stack**

- builder: Gulp v4
- styling: SCSS(dart sass 기반), css
- icons: xeicon 2.3.3

## Available Platform

- **Vanilla Html**
- **Vue**
- **React**

## Summary

- **빌드:** SCSS → 단일 정적 CSS 파일 (프레임워크 종속 없음).
- **원칙:** 다양한 프레임워크에서 사용 가능 / 프로젝트별 최적화된 시스템 구축 용이 / 실사용 개발자 중심 DX.
- **토큰:** Sass 변수·맵·함수로 정의; 빌드 후 사용자가 Sass 토큰을 직접 바꿀 수 없으므로 테마·다크 모드 등은 **CSS 변수(`:root`)** 로 노출되는 값을 사용.
- **토큰 구조:** raw value → reference token → base token → component token; 테마 적용 시 component는 가능하면 CSS 변수 할당값 사용.

...
```

(_Frog UI의 llms.txt 내용 중 일부_)

```markdown
---
name: frog-usage
description: Check Frog UI CSS component usage before implementing, editing, refactoring, documenting, or recommending any Frog UI component. Use when working with component classes, Pug examples, JavaScript behavior, SCSS definitions, site docs, demos, or usage snippets in this repository.
---

# Frog Usage

## Required Workflow

Before changing or recommending a Frog UI component, inspect the existing usage source for that component. Do not infer API, class names, markup, options, or JavaScript behavior from memory.

1. Identify the component name from the user request, changed file, class name, or route.
2. Read `references/component-map.md` if the component name, pluralization, or source path is not obvious.
3. Read the component usage files in this order when they exist:
   - `site/views/components/<component>.pug` for rendered demo markup and page structure.
   - `site/codes/<component>.js` for documented code snippets shown on the site.
   - `src/definitions/components/<component>.scss` for CSS classes, variants, states, and structure.
   - `src/definitions/components/<component>.js` for runtime behavior and public initialization patterns.
   - `src/themes/components/<component>.scss` and theme files only when the task touches theme-specific behavior.
4. Summarize the usage facts that matter for the task before editing: required wrapper, key classes, variants/states, and JavaScript initialization if any.
5. Make the smallest change consistent with the observed component pattern.
6. If a usage file is missing, compare the nearest related component and state the gap instead of guessing.

## Editing Rules

- Preserve existing component naming and class conventions.
- Prefer existing snippets from `site/codes` and demos from `site/views/components` over newly invented examples.
- Keep docs, demo markup, SCSS, and JS behavior aligned when a change affects public usage.
- Check both singular and plural names. Examples: `card` SCSS maps to `cards` docs; `segment` SCSS maps to `segments` docs.
- For theme changes, inspect `src/themes/default`, `src/themes/beui`, `src/themes/gcloud`, and `src/themes/gcloud_p` only as needed.
  ...
```

(_개발자를 위한 Frog-usage SKILL.md 내용 중 일부_)

### 마치며

돌아보니 통합은 시작일 뿐이었고, 무엇을 덜어낼지 정하는 정제가 라이브러리의 품질을 갈랐습니다. 스타일과 기능을 분리하고 나니 테마 변경과 다중 프레임워크 지원이 한 구조 안에서 풀렸습니다. 그리고 프레임워크가 바뀌어도 통하는 설계 원칙이 있다는 건, 직접 옮겨 보고 나서야 보였습니다.

<style lang="scss" scoped>
 #journey {
  color: var(--txt);
  a {
    color: inherit;
    text-decoration: none;
  }
  .title {
    font-weight: 700;
    margin-bottom: 10px;
  }
  > div:hover {
    background-color: var(--suf);
  }
 }
</style>
