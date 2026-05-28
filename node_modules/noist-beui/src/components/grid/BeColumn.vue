<script setup>
import { computed } from 'vue'

const props = defineProps({
  span: {
    type: Number,
    default: null,
  },
  col: {
    type: Number,
    default: null,
  },
  row: {
    type: Number,
    default: null,
  },
  spanName: {
    type: String,
    default: null,
  },
  offset: {
    type: Number,
    default: null,
  },
  order: {
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
  mdOffset: {
    type: Number,
    default: null,
  },
  smOffset: {
    type: Number,
    default: null,
  },
  xsOffset: {
    type: Number,
    default: null,
  },
  justify: {
    type: String, // start | center | end | strech
    default: null,
  },
  align: {
    type: String, // start | center | end | strech
    default: null,
  },
})

const setSpan = computed(() => {
  if (!props.span) return []
  const span = props.span && `span-${props.span}`
  const span_md = props.md && `span-md-${props.md}`
  const span_sm = props.sm && `span-sm-${props.sm}`
  const span_xs = props.xs && `span-xs-${props.xs}`

  return [span, span_md, span_sm, span_xs]
})
const setSpanOffset = computed(() => {
  const offset = props.offset && `offset-${props.offset}`
  const offset_md = props.mdOffset && `offset-md-${props.mdOffset}`
  const offset_sm = props.smOffset && `offset-sm-${props.smOffset}`
  const offset_xs = props.xsOffset && `offset-xs-${props.xsOffset}`
  return [offset, offset_md, offset_sm, offset_xs]
})
const setSpanOrder = computed(() => {
  return props.order ? `order-${props.order}` : ''
})
const setColumn = computed(() => {
  if (!props.col) return []
  const col = props.col && `col-${props.col}`
  const col_md = props.md && `col-md-${props.md}`
  const col_sm = props.sm && `col-sm-${props.sm}`
  const col_xs = props.xs && `col-xs-${props.xs}`

  return [col, col_md, col_sm, col_xs]
})
const setRow = computed(() => {
  const row = props.row && `row-${props.row}`
  const row_md = props.md && `row-md-${props.md}`
  const row_sm = props.sm && `row-sm-${props.sm}`
  const row_xs = props.xs && `row-xs-${props.xs}`

  return [row, row_md, row_sm, row_xs]
})
</script>
<template>
  <div
    class="column"
    :class="[
      spanName,
      ...setSpan,
      ...setSpanOffset,
      setSpanOrder,
      ...setColumn,
      ...setRow,
    ]"
  >
    <slot></slot>
  </div>
</template>
