---
layout: doc

title: Number Puzzle
#titleTemplate: 
# description:  
lastUpdated: true
editLink: true
navbar: true
sidebar: false
aside:  true
outline: deep
---

# NT Number Puzzle

<BeTag class="green">VUE</BeTag>
<BeTag class="blue">Component</BeTag>
<BeTag class="red">NPM</BeTag>
<BeTag class="brown">Game</BeTag>

## 소개

`nt-number-puzzle` is a module that implements the retro game numeric puzzle as vue (vue components). Why don't you try to provide simple entertainment for users when developing a personal project or use it for users who are bored while loading long and long data?

`nt-number-puzzle`은 레트로 게임인 숫자 퍼즐을` vue(vue components)`로 구현한 모듈입니다. 프로젝트 개발 시 사용자를 위한 간단한 즐길거리를 제공하려 하거나 길고 긴 데이터 로딩 중 심심한 사용자들을 위해 사용해 보는것은 어떨까요??


## Demo

<BeCard image>
  <template #image>
    <img src="https://github.com/noistommy/nt-number-puzzle/assets/6008185/850e8fef-71ed-4be3-a2aa-72f2271e5635" alt="rouolette" />
  </template>
  <div class="be-button">
   데모 사이트
    <a class="link" href="https://noistommy.github.io/nt-number-puzzle" target="_blank" />
  </div>
</BeCard>

## How to play

- Click the `START` button to start game.
- Click to move up, down, left, and right tiles of empty tiles.
- Place the tiles in order.
- When all the tiles are placed in order, the game ends.
- You can specify the tiles to move by pressing the `top`, `bottom`, `left`, and `right` keys on the keyboard.
- You can move an active tile by pressing the `space` key.
- Press the `ctrl` key to display the order of the tiles.
- If you click the `RETRY` button during the game, the tiles will mix and restart the game.

## Install

```bash
$ npm install nt-number-puzzle
```

## How to work

```js
import NtNumberPuzzle from 'nt-number-puzzle';
import 'nt-number-puzzle/number-puzzle.css';

//template
//user`s source
...
<NtNumberPuzzle
  :grid-size="4" // default: 4
  :cell-size="4" // default: 4(rem)
  label-text = "..."
/>
```
## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| gridSize | *number* | `4` | Set the vertical/horizontal size of tile grid. |
| cellSize | *number* | `4` | Setting the size of tiles(unit rem). |
| labelText | *string* | `` | Setting letters to display tiles. |

## Link

<div class="be-button">
  <i class="icon left xi-github" />
  Github
  <a class="link" href="https://github.com/noistommy/nt-number-puzzle.git" target="_blank" />
</div>
<div class="be-button">
  <i class="icon left xi-package" />
  npm
  <a class="link" href=" https://www.npmjs.com/package/nt-number-puzzle" target="_blank" />
</div>