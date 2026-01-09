---
layout: doc

title: Test Page
titleTemplate: ABCD
description: asdfgfdsg 
lastUpdated: true
editLink: true
navbar: true
sidebar: true
aside:  true
outline: deep
---

# Test Pages


## page 1

### {{story}}



## page 2

### Title 1
### Title 2
### Title 3

## page 3

<BeTag class="blue">beTag</BeTag>

**<Badge type="tip">Level</Badge>**
*<Badge type="info">Level</Badge>*
<BeTag class="deepblue">beTag</BeTag>

`code`


<script setup>
  import { ref } from 'vue'

  const data = ref('Base')

  const story = "test story"

</script>

<button :class="$style.button_a">
  <a href="/" >{{ data }}</a> 
</button>


<button class="be-button text button_b">
   <a href="/" class="link" ></a>
   {{data}} 
</button>

<BeTag class="red">beTag</BeTag>


<style lang="scss">
  .button_b {
    color: var(--be-red-color);
    a {
      color: inherit;
      font-weight: 900;
    }
  }
</style>
<style lang="scss" module>
  .button_a {
    color: red;
    font-weight: bold;
    a {
      color: green;
    }
  }
</style>