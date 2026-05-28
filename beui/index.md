---
layout: doc

title: Frog UI
# titleTemplate: FROG UI
# description:  
lastUpdated: true
editLink: true
navbar: true
sidebar: true
aside:  false
outline: deep

---

# FROG UI

<div class="be-segment" :style="{marginTop: '10px'}">
  <h1 class="header h1">Test</h1>
  <button class="be-button">
    <i class="icon left xi-document" />
    Docs
    <a href="https://frog-ui-css.vercel.app/" target="_blank" class="link" alt="frog ui document" />
  </button>
  <button class="be-button">
    <i class="icon left xi-github" />
    Github
    <a href="https://github.com/noistommy/ga-ui-css.git" target="_blank" class="link" alt="frog ui github" />
  </button>
</div>

## 개요

**BEUI**는 SPA(React, Vue)로 제작된 Headless UI 컴포넌트 라이브러리로, 별도의 스타일을 각 컴포넌트 내에 포함하지 않고 있습니다. 대신 각 컴포넌트의 variants와 option는 디자인시스템을 이용하여 커스텀이 가능하도록 설계된 **CSS 프레임워크** 와 함께 사용할 수 있도록 Semantic Class Name 방식으로 개발되었습니다.

**Frog UI** BEUI Headless UI 라이브러리에 스타일을 담당하기 위한 CSS 프레임워크입니다.

## Frog UI 란?

`Frog`는 scss로 작성되며 `gulp`를 통해 빌드됩니다. 
디자인 일관성을 유지하기 위해 **디자인 토큰 기반의 스타일 구조**를 사용하고 있으며, 이를 통해 다양한 사용자 정의 테마를 효율적으로 생성 할 수 있습니다.

먼저, 기본이 되는 스타일 요소들을 **1차 토큰**으로 정의하고, 이후 이 1차 토큰을 기반으로 각 엘리먼트의 스타일 요소를 구성합니다.

이러한 방식은 **중복 정의를 줄이고**, **적은 양의 토큰만으로도 다양한 테마를 효율적으로 구성**할 수 있도록 합니다.

### 왜 Frog UI를 만들었나?
**Frog UI**는 컴포넌트 종류에 종속되지않고 독립적으로 사용 가능한 시스템 입니다. 

이전까지 프로젝트 내에서 컴포넌트 라이브러리와 같이 사용 했으나 버전 관리의 어려움이 있고 프레임워크 종속성 문제로 스타일 부분만 분리해서 독립적인 빌드 시스템으로 만들게 되었습니다.

경량 스타일 프레임워크로 vue나 react등 다양한 환경에 적용 가능하며 유지 보수와 기능 확장에 유리하도록 설계되었습니다.

## Components
<script setup>
  const uiList = [
    { name: 'button', title: 'Button', link: 'button' },
    { name: 'button_group', title: 'Button Group', link: 'button' },
    { name: 'badge', title: 'Badge', link: 'badge' },
    { name: 'calendar', title: 'Calendar', link: 'calendar' },
    { name: 'card', title: 'Card', link: 'card' },
    { name: 'checkbox', title: 'Checkbox', link: 'checkbox' },
    { name: 'checkbox_group', title: 'Card', link: 'checkbox' },
    { name: 'date_picker', title: 'Date Picker', link: 'date_picker' },
    { name: 'form', title: 'Form', link: 'form' },
    { name: 'files', title: 'Files', link: 'tree-list' },
    { name: 'grid', title: 'Grid', link: 'grid' },
    { name: 'input_number', title: 'Input Number', link: 'input-number' },
    { name: 'input', title: 'Input', link: 'input' },
    { name: 'keyboard', title: 'Kbd', link: 'tag' },
    { name: 'list', title: 'List', link: 'list' },
    { name: 'message', title: 'Message', link: 'message' },
    { name: 'pagination', title: 'Pagination', link: 'pagination' },
    { name: 'panel', title: 'Panel', link: 'panel' },
    { name: 'pointing', title: 'Pointing', link: 'tag' },
    { name: 'radio', title: 'Radio', link: 'radio' },
    { name: 'rate', title: 'Rate', link: 'rate' },
    { name: 'segment', title: 'Segment', link: 'segment' },
    { name: 'selectbox', title: 'Selectbox', link: 'selectbox' },
    { name: 'slider', title: 'Slider', link: 'slider' },
    { name: 'switch', title: 'Switch', link: 'switch' },
    { name: 'switch_button', title: 'Switch Button', link: 'switch' },
    { name: 'switch_inside', title: 'Switch Inide', link: 'switch' },
    { name: 'table', title: 'Table', link: 'table' },
    { name: 'tabs', title: 'Tabs', link: 'tabs' },
    { name: 'tag', title: 'Tag', link: 'tag' },
    { name: 'tree_list', title: 'Tree List', link: 'tree-list' },
  ]
</script>
<div class="card-wrapper">
  <template v-for="item in uiList" :key="item.name">
    <BeCard image>
      <a class="link" :href="`https://frog-ui-css.vercel.app/pages/${item.link}`" target="_blank"></a>
      <template #image>
        <img :src="`/ui-el-img/${item.name}.svg`" />
      </template>
      <div class="title">{{ item.title }}</div>
    </BeCard>
  </template>
</div>

<style scoped>
  a.link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .card-wrapper {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;

    /* background-color: var(--bgc); */
    /* justify-content: center; */
    .be-card  {
      width: 24%;
      max-width: 280px;

      flex-grow: 1;
      flex-shrink: 0;
      .image {
        background-color: #F8F8F8;
      }
      svg {
        color: #5178AF;
      }
    }
  }
  @media (max-width: 400px) {
    .card-wrapper {

      .be-card {
        min-width: 100%;
      }
    }
  }
</style>