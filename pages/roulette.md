---
layout: doc

title: NT-Roulette
#titleTemplate: 
# description:  
lastUpdated: true
editLink: true
navbar: true
sidebar: false
aside:  true
outline: deep
---

# NT Roulette

<BeTag class="green">VUE</BeTag>
<BeTag class="blue">Component</BeTag>
<BeTag class="red">NPM</BeTag>
<BeTag class="brown">Game</BeTag>

## 소개

`nt-roulette`은 `SVG`를 이용하여 구현된 룰렛입니다. 디테일한 애니메이션 조정을 통해 실제 룰렛의 물리적인 움직임과 비슷하게 동작하도록 구현 되었습니다.

사용자가 2~45개의 룰렛 조각을 설정 할 수 있으며 실행 시 마다 랜덤한 결과를 만들어냅니다. 사용자가 버튼 선택 또는 룰렛 직접 클릭을 통해 애니메이션을 멈추고 결과를 보여줍니다. 또한 각 조각을 직접 선택해서 결과를 보여 줄 수도 있습니다.

설정을 통해 각 조각의 색상 패턴과 내부 텍스트를 지정 할 수 있고 룰렛의 모양, 애니메이션 스피드를 조정 할 수 있습니다.

선택이 필요한 UI에 사용하면 보다 역동적인 사이트가 되지 않을까요??


## Demo

<BeCard image>
  <template #image>
    <img src="https://github.com/user-attachments/assets/fbfe83e3-feee-4569-9332-dd9f69fc5775" alt="rouolette" />
  </template>
  <div class="be-button small">
   데모 사이트
    <a class="link" href="https://noistommy.github.io/nt-roulette" target="_blank" />
  </div>
</BeCard>

## Install

```bash
$ npm install nt-roulette
```

## How to work

```js
import NtRoulette from 'nt-roulette';

//template
//user`s source
...
<NtRoulette
  :data="[]" // default: 4
  :hole-size="0" // default: 4(rem)
  :text-info = "{
    size: 5,
    weight: 600,w
    color: #444
  }"
  :colors="['#ffffff', ...]"
  state="running"
/>
```
## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| data | *array* | `null` | data array의 크기에 따라 룰렛 조각의 수가 결정된다. |
| holeSize | *number* | `0` | 룰렛을 도넷 형태로 만들기 위한 중앙 원의 크기. |
| textInfo | *object* | `{}` | 룰렛에 표시 되는 텍스트 스타일 (font-size, font-weight, color). |
| colors | *array* | `[]` | 룰렛 조각의 배경 색상 목록 목록의 색상을 순서대로 표시하며 목록을 반복하며 색상 패턴을 만든다. |
| state | *string* | `pause` | 룰렛 실행을 위한 상태. running: 실행, pause: 정지, reset: 초기화 |

## Link

<div class="be-button">
  <i class="icon left xi-github" />
  Github
  <a class="link" href="https://github.com/noistommy/nt-roulette.git" target="_blank" />
</div>
<div class="be-button">
  <i class="icon left xi-package" />
  npm
  <a class="link" href=" https://www.npmjs.com/package/nt-roulette" target="_blank" />
</div>