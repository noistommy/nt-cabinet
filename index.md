---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
---


<div class="large">

**Kim Min-young (김민영)**

</div>

**Frontend Engineer | Developer**

<section class="my-15">

#### Today

<div class="pt-8">
안녕하세요! 10년차 프론트엔드 개발자 김민영입니다 <br />
다양한 프로젝트를 경험하며 쌓인 화면 설계 및 UI/UX 기술을 바탕으로 <br />
현재는 디자인 시스템과 UI 컴포넌트를 설계하고 재사용 모듈을 만들고 있습니다. 
</div>


</section>
<section class="mb-15">

<!-- #### Career

+ **(주)포그리트** | 2024.12 - 2025.05 | DX 플래폼 팀
+ **(주) 가비아** | 2019.11 - 2024.02 | Hiworks 그룹 플랫폼 TF팀, FE팀 플랫폼 파트
+ **엔쓰리엔(주)** | 2017.10 - 2019.11 | 플랫폼 본부 프론트엔드 담당
+ **소셜네트워크마케팅플랫폼** | 2014.08- 2016.10 | 프론트엔드 개발 담당 -->

#### Projects

<div class="be-list selection my-10">
  <div class="item">
    <a href="/project/frogui" class="link"></a>
    <div class="item-title p-6" >
      Frog UI
      <span class="sub-title">디자인 시스템 기반 정적 스타일 라이브러리</span>
    </div> 
  </div>
  <div class="item">
    <a href="/project/beui" class="link"></a>
    <div class="item-title p-6">
      BEUI
      <span class="sub-title">Frog UI와 조합하기 위한 Headless UI 라이브러리</span>
    </div> 
  </div>
  <div class="item">
    <a href="/module/modal_react" class="link"></a>
    <div class="item-title p-6">
      NT Modules <span class="be-tag label round">NPM</span>
      <span class="sub-title">Javascript 기반 Vue, React용 모듈 모음 (Modal, Toast, tooltip).</span>
    </div> 
  </div>
</div>


</section>
<section class="mb-15">

#### Writing


<div class="be-list selection my-10">
  <div class="item">
    <a href="/beui" class="link"></a>
    <div class="item-title p-6" >
      BEUI를 위한 여정
      <span class="sub-title">Frog UI와 BEUI, 모듈들의 처음에 어떻게 만들어지고 분리되서 지금의 모습이 되었는지 과정에 대한 내용입니다.</span>
    </div> 
  </div>
</div>


</section>
<section class="mb-15">

#### Contact

<div class="be-list pt-8">
  <div class="item p-0">
    <button class="be-button text">
      <i class="icon left xi-mail" />
      noistommy@gmail.com
      <a href="mailto:noistommy@gmail.com" class="phone link"></a>
    </button>
  </div>
  <div class="item">
    <button class="be-button text">
      <i class="icon left xi-mobile" />
      010-4456-9329
      <a href="tel:010-4456-9329" class="phone link"></a>
    </button>
  </div>
  <div class="item">
    <button class="be-button text">
      <i class="icon left xi-linkedin" />
      Kim Min-young
      <a href="https://www.linkedin.com/in/minyoung-kim-noistommy" class="phone link"></a>
    </button>
  </div>
</div>

</section>


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

<!-- ## Components -->

<!-- <div class="card-wrapper">
  <template v-for="item in uiList" :key="item.name">
    <BeCard image>
      <template #image>
        <img :src="`/ui-el-img/${item.name}.svg`" />
      </template>
      <div class="title">{{ item.title }}</div>
      <a class="link" href="/"></a>
    </BeCard>
  </template>
</div> -->

<!-- ## Modules -->

<!-- <div class="card-wrapper">
  <template v-for="item in moduleList" :key="item.name">
    <BeCard image>
      <template #image>
        <img :src="`/ui-el-img/${item.name}.svg`" />
      </template>
      <div class="title">{{ item.title }}</div>
      <a class="link" href="/"></a>
    </BeCard>
  </template>
</div> -->

<style lang="scss" scoped>
  :root {
    --vp-home-hero-name-color: transparent;
    --vp-home-hero-name-background: -webkit-linear-gradient(120deg, var(--be-deepblue-color), var(--be-lightblue-color));

    --vp-button-brand-bg: var(--be-deepblue-color);
    --vp-button-brand-hover-bg: var(--be-blue-color);
    /* font-size: 16px !important; */
  }
  span.code {
    font-family: 'Ubuntu' !important;
  }
  p {
    margin: 0;
  }
  a.link {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  a:hover {
    background-color: transparent !important;
  }
  a.phone {
    color: var(--txt) !important;
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
        background-color: var(--suf);
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