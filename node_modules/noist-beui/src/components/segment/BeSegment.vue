<script setup>
import { ref } from 'vue'
defineProps({
  surface: {
    type: Boolean,
    default: false,
  },
  border: {
    type: Boolean,
    default: false,
  },
  float: {
    type: Boolean,
    default: false,
  },
  align: {
    type: String,
    default: 'left',
  },
  round: {
    type: String,
    default: 'l',
  },
  attached: {
    type: Array,
    default: null,
  },
  collapse: {
    type: Boolean,
    default: false,
  },
})
const showDetail = ref(false)
const toggleCollapse = () => {
  showDetail.value = !showDetail.value
}
</script>

<template>
  <div
    class="be-segment"
    :class="[
      { surface, border, float, attached: attached, collapse },
      { detail: showDetail },
      `align-${align}`,
      `round-${round}`,
    ]"
  >
    <div v-if="attached && attached.includes('header')" class="header">
      <slot name="header"></slot>
    </div>
    <div class="contents">
      <slot></slot>
    </div>
    <div v-if="attached && attached.includes('footer')" class="footer">
      <slot name="footer"></slot>
    </div>
    <div v-if="collapse" class="toggle-detail" @click="toggleCollapse"></div>
  </div>
</template>
