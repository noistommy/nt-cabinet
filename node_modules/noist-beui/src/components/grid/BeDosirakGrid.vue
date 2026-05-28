<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  // setRows: {
  //   type: Boolean,
  //   default: false,
  // },
  inline: {
    type: Boolean,
    default: false,
  },
  autoFit: {
    type: Boolean,
    default: false,
  },
  dense: {
    type: Boolean,
    default: false,
  },
  flow: {
    type: String, // column || row
    default: '',
  },
  round: {
    type: String, // s | m | l | xl
    default: null,
  },
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
  justifyContent: {
    type: String,
    default: null,
  },
  alignContent: {
    type: String,
    default: null,
  },
  justifyItems: {
    type: String,
    default: null,
  },
  alignItems: {
    type: String,
    default: null,
  },
  dosirak: {
    type: Boolean,
    default: true,
  },
  rowHeight: {
    type: String,
    default: null,
  },
  gridGap: {
    type: Number,
    default: 10,
  },
  columnNumber: {
    type: Number,
    default: 12,
  },
  rowNumber: {
    type: Number,
    default: 12,
  },
})

const gridRef = ref(null)
const gridWidth = ref(null)

const setDivide = computed(() => {
  const divide = props.divide && `divide-column-${props.divide}`
  const divide_md = props.md && `divide-column-md-${props.md}`
  const divide_sm = props.sm && `divide-column-sm-${props.sm}`
  const divide_xs = props.xs && `divide-column-xs-${props.xs}`
  return [divide, divide_md, divide_sm, divide_xs]
})
const setAlign = computed(() => {
  const justify = props.justify && `justify-${props.justify}`
  const align = props.align && `align-${props.align}`
  return [justify, align]
})

const getColumnWidth = computed(() => {
  const columns = props.divide ? props.divide : props.columnNumber
  return (gridWidth.value - props.gridGap * (columns - 1)) / columns
})

const setAutoRows = computed(() => {
  // const divide = props.divide || 1
  return {
    '--grid-gap': props.gridGap,
    '--grid-auto-row': getColumnWidth.value,
  }
})
const setGridColNumber = computed(() => {
  if (!props.columnNumber) return
  return {
    '--grid-col-num': props.columnNumber,
  }
})
const setGridRowNumber = computed(() => {
  if (!props.rowNumber) return
  return {
    '--grid-row-num': props.rowNumber,
  }
})

const setAutoFlow = computed(() => {
  if (props.dense) return ''
  return props.flow && `flow-${props.flow}`
})
const setRows = computed(() => {
  if (!props.rowHeight) return
  return {
    '--rows-height': props.rowHeight,
  }
})

let grid_obs = new ResizeObserver((entries) => {
  for (let entry of entries) {
    gridWidth.value = entry.target.clientWidth || 0
  }
})
onMounted(() => {
  grid_obs.observe(gridRef.value)
})
</script>

<template>
  <div
    class="be-grid2"
    :class="[
      ...setDivide,
      ...setAlign,
      { inline },
      { autoFit },
      { dense },
      setAutoFlow,
      round && `round-${round}`,
      { dosirak },
      setRows && 'set-rows',
    ]"
    :style="[setAutoRows, setGridColNumber, setGridRowNumber, setRows]"
    ref="gridRef"
  >
    <slot></slot>
  </div>
</template>
