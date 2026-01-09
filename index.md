---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Design System, UI/UX, Components"
  text: "Frontend Developer KIM MIN YOUNG"
  tagline: ""
  actions:
    - theme: brand
      text: Introbuce BEUI
      link: /beui/
    - theme: alt
      text: React ver
      link: /beui/react-beui
    - theme: alt
      text: Vue ver
      link: /beui/vue-beui

features:
  - title: BEUI 
    details: BEUI UI Components Library.
  - title: NT Modules
    details: Modules for Vue and React.
  - title: Other Works
    details: Roulette, Number-puzzle, scrollspy ...
---
<script setup>
  import NTThree from './components/NTThree.vue'

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
  const moduleList = [
    { name: 'modal', title: 'Modal', link: 'modal' },
    { name: 'confirm', title: 'Confirm', link: 'modal' },
    { name: 'toast', title: 'Toast', link: 'toast' },
    { name: 'tooltip', title: 'Tooltip', link: 'tooltip' },
  ]

</script>

<NTThree />
<!-- <div class="slogan huge">
  <span class="be-tag label round">
    <span class="be-high"> Be</span>tter
  </span>
  <span class="be-tag label round">
    <span class="be-high"> Be</span>autiful
  </span>
  <span class="be-tag label round">
    <span class="be-high"> Be</span>st
  </span>
  <span class="be-tag label round">
    <span class="be-high"> Be</span>livable
  </span>
</div> -->

## Components

<div class="card-wrapper">
  <template v-for="item in uiList" :key="item.name">
    <BeCard image>
      <template #image>
        <img :src="`/ui-el-img/${item.name}.svg`" />
      </template>
      <div class="title">{{ item.title }}</div>
      <a class="link" href="/"></a>
    </BeCard>
  </template>
</div>

## Modules

<div class="card-wrapper">
  <template v-for="item in moduleList" :key="item.name">
    <BeCard image>
      <template #image>
        <img :src="`/ui-el-img/${item.name}.svg`" />
      </template>
      <div class="title">{{ item.title }}</div>
      <a class="link" href="/"></a>
    </BeCard>
  </template>
</div>

<style lang="scss">
  :root {
    --vp-home-hero-name-color: transparent;
    --vp-home-hero-name-background: -webkit-linear-gradient(120deg, var(--be-deepblue-color), var(--be-lightblue-color));

    --vp-button-brand-bg: var(--be-deepblue-color);
    --vp-button-brand-hover-bg: var(--be-blue-color);
  }
  a.link {
    width: 100%;
    height: 100%;
  }
  .slogan {
    padding: 1em 0;
  }
  .be-high {
    display: inline-block;
    line-height: 1;
    /* color: var(--primary); */
    color: var(--be-blue-color);
    border-radius: .1em;
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