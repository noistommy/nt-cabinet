<script setup>
import { computed } from 'vue'

const props = defineProps({
  divide: {
    type: Number,
    default: null,
  },
  md: {
    type: Number,
    default: null,
  },
  sm: {
    type: Number,
    default: null,
  },
  xs: {
    type: Number,
    default: null,
  },
  justify: {
    type: String,
    default: null,
  },
  align: {
    type: String,
    default: null,
  },
  leftSide: {
    type: Boolean,
    default: false,
  },
  rightSide: {
    type: Boolean,
    default: false,
  },
})

const setDivide = computed(() => {
  const divide = props.divide && `divide-${props.divide}`
  const divide_md = props.md && `divide-md-${props.md}`
  const divide_sm = props.sm && `divide-sm-${props.sm}`
  const divide_xs = props.xs && `divide-xs-${props.xs}`
  return [divide, divide_md, divide_sm, divide_xs]
})
const setAlign = computed(() => {
  const justify = props.justify && `justify-${props.justify}`
  const align = props.align && `align-${props.align}`
  return [justify, align]
})
</script>

<template>
  <div
    class="be-grid"
    :class="[
      ...setDivide,
      ...setAlign,
      { 'left-side': props.leftSide },
      { 'right-side': props.rightSide },
    ]"
  >
    <slot></slot>
  </div>
</template>
