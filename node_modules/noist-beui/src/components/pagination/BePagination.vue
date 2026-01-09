<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'number',
    varidator: (value) => {
      return ['number', 'page'].includes(value)
    },
  },
  round: {
    type: Boolean,
    default: false,
  },
  compact: {
    type: Boolean,
    default: false,
  },
  border: {
    type: Boolean,
    default: false,
  },
  align: {
    type: String,
    default: 'left',
  },
  limits: {
    type: Number,
    default: 5,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
  pageLength: {
    type: Number,
    default: 1,
  },
  itemClass: {
    type: String,
  },
  ellipsis: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
  },
  firstText: {
    type: String,
    default: 'F',
  },
  lastText: {
    type: String,
    default: 'L',
  },
  activeType: {
    type: String,
    default: 'button', // text
  },
})
const pageEl = ref(null)
const current = defineModel()
const emit = defineEmits(['change'])
const last = ref(1)

const pageList = computed(() => {
  if (offLimits.value) {
    return new Array(props.pageLength).fill(1).map((n, i) => n + i)
  } else if (props.ellipsis) {
    let start = 2
    let half = Math.floor(props.limits / 2)
    if (isPrevPoint.value) {
      start = current.value - half
    }
    if (!isNextPoint.value && isPrevPoint.value) {
      start = last.value - props.limits
    }
    return new Array(props.limits).fill(0).map((n, i) => start + i)
  } else {
    let start = Math.min(findStart.value, props.pageLength - props.limits + 1)
    return new Array(props.limits).fill(start).map((n, i) => n + i)
  }
})
const findStart = computed(() => {
  return Math.max(current.value - Math.ceil(props.limits * 0.5) + 1, 1)
})
// const isSingle = computed(() => {
//   return props.pageLength === 1
// })
const isPrevPoint = computed(() => {
  return (
    current.value > Math.floor(props.limits / 2) + 2 &&
    props.limits < last.value
  )
})
const isNextPoint = computed(() => {
  return current.value <= last.value - props.limits && props.limits < last.value
})
const isDisabledNext = computed(() => {
  return current.value + 1 > last.value
})
const isDisabledPrev = computed(() => {
  return current.value - 1 <= 0
})
const offLimits = computed(() => {
  return props.pageLength <= props.limits || !props.limits
})

watch(props, () => {
  last.value = props.pageLength
})

onMounted(async () => {
  await nextTick()
  pageEl.value.focus()
  // current.value = props.currentPage
  last.value = props.pageLength
})

const setCurrent = (num) => {
  if (num > last.value || num <= 0) return
  current.value = num
  emit('change', num)
}
const setPrev = () => {
  if (isDisabledPrev.value) return
  setCurrent(current.value - 1)
}
const setNext = () => {
  if (isDisabledNext.value) return
  setCurrent(current.value + 1)
}
const setPrevBlock = () => {
  let prevNum =
    current.value - props.limits <= 0
      ? current.value - 1
      : current.value - props.limits
  setCurrent(prevNum)
}
const setNextBlock = () => {
  let prevNum =
    current.value + props.limits > last.value
      ? current.value + 1
      : current.value + props.limits
  setCurrent(prevNum)
}
</script>

<template>
  <div
    class="be-pagination"
    :class="[type, activeType, { round }, { compact }, `align-${align}`, color]"
    ref="pageEl"
  >
    <div
      v-if="!ellipsis && !offLimits"
      class="pagination-nav first"
      :class="[itemClass, { disabled: isDisabledPrev }]"
      @click="setCurrent(1)"
    >
      <template v-if="firstText.indexOf('xi-') > -1">
        <i :class="firstText" />
      </template>
      <template v-else>{{ firstText }}</template>
    </div>
    <div
      class="pagination-nav prev"
      :class="[itemClass, { disabled: isDisabledPrev }]"
      @click="setPrev"
    >
      <i class="xi-angle-left"></i>
    </div>
    <template v-if="ellipsis">
      <div
        class="pagination-num"
        :class="[itemClass, { active: 1 === current }]"
        @click="setCurrent(1)"
      >
        1
      </div>
      <div
        v-if="isPrevPoint"
        class="pagination-num"
        :class="[itemClass]"
        @click="setPrevBlock"
      >
        <i class="xi-ellipsis-h"></i>
      </div>
    </template>
    <div class="pagination-page-wrapper">
      <template v-if="type === 'number'">
        <div
          class="pagination-num"
          v-for="page in pageList"
          :key="page"
          :class="[itemClass, { active: page === current }]"
          @click="setCurrent(page)"
        >
          {{ page }}
        </div>
      </template>
      <template v-else>
        <div class="pagination-info">
          <div class="pagination-nav current">{{ current }}</div>
          <span class="slash">/</span>
          <div class="pagination-nav" last>{{ last }}</div>
        </div>
      </template>
    </div>
    <template v-if="ellipsis && props.limits < props.pageLength">
      <div
        v-if="isNextPoint"
        class="pagination-nav"
        :class="[itemClass]"
        @click="setNextBlock"
      >
        <i class="xi-ellipsis-h"></i>
      </div>
      <div
        class="pagination-num"
        :class="[itemClass, { active: last === current }]"
        @click="setCurrent(last)"
      >
        {{ last }}
      </div>
    </template>
    <div
      class="pagination-nav next"
      :class="[itemClass, { disabled: isDisabledNext }]"
      @click="setNext"
    >
      <i class="xi-angle-right"></i>
    </div>
    <div
      v-if="!ellipsis && !offLimits"
      class="pagination-nav last"
      :class="[itemClass, { disabled: isDisabledNext }]"
      @click="setCurrent(last)"
    >
      <template v-if="lastText.indexOf('xi-') > -1">
        <i :class="lastText" />
      </template>
      <template v-else>{{ lastText }}</template>
    </div>
  </div>
</template>
