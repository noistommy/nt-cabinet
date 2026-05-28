<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
const props = defineProps({
  id: [String, Number],
  trackType: {
    type: String,
    default: 'normal', // thin, normal, fat
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  unitText: [String, Object],
  showStep: {
    type: Boolean,
    default: false,
  },
  stepSize: {
    type: Number,
    default: 10,
  },
  showLabel: {
    type: Boolean,
    default: false,
  },
  showValue: {
    type: Boolean,
    default: false,
  },
  showTooltip: {
    type: Boolean,
    default: false,
  },
  titleText: {
    type: String,
    default: null,
  },
  disabled: Boolean,
  color: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['error'])
const resultValue = defineModel(0)
const result = ref(0)

const slider = ref(null)
const resultRef = ref(null)

const container = ref(500)
const initialX = ref(null)
const initialW = ref(null)
const catching = ref(false)

const startValue = ref(0)

const setResult = computed(() => ({
  width: `${result.value}px`,
  left: `${startValue.value}%`,
}))
const setPosition = computed(() => ({ left: `${result.value}px` }))

const setResultValue = computed(() => {
  return (
    Math.ceil((props.max - props.min) * (result.value / container.value)) +
    props.min
  )
})

const stepLevel = computed(() => (props.max - props.min) / props.stepSize)
const unitSize = computed(() => 100 / stepLevel.value)

const initValue = () => {
  if (resultValue.value > props.max) {
    emit('error', {
      title: 'errorMaxValue',
      message: `입력값이 ${props.max}보다 클 수 없습니다.`,
    })
    result.value = convertPixel(props.max)
  } else if (resultValue.value < props.min) {
    emit('error', {
      title: 'errorMinValue',
      message: `입력값이 ${props.max}보다 작을 수 없습니다.`,
    })
    result.value = convertPixel(props.min)
  } else {
    result.value = convertPixel(resultValue.value)
  }
}
const convertPercent = (value) => {
  return (value - props.min) / (props.max - props.min)
}
const convertPixel = (value) => {
  return container.value * convertPercent(value)
}

const updatePos = (distance) => {
  let offset = initialW.value + distance
  if (offset < 0) {
    return 0
  } else if (offset > container.value) {
    return container.value
  } else {
    return offset
  }
}

const touchMoveOptions = { passive: false }

const getPageX = (e) => {
  if (typeof e?.pageX === 'number') return e.pageX
  if (e?.touches?.length) return e.touches[0].pageX
  if (e?.changedTouches?.length) return e.changedTouches[0].pageX
  return null
}

const setStateOn = (e) => {
  const control = e.target
  const pageX = getPageX(e)
  if (pageX == null) return

  if (control.classList.contains('control-btn')) {
    initialX.value = pageX
    initialW.value = resultRef.value.offsetWidth
    catching.value = true
    window.addEventListener('mousemove', changeValue)
    window.addEventListener('mouseup', setStateOff)
    window.addEventListener('touchmove', changeValue, touchMoveOptions)
    window.addEventListener('touchend', setStateOff)
    window.addEventListener('touchcancel', setStateOff)
  } else {
    result.value = updatePos(pageX - initialX.value)
  }
}

const setStateOff = (e) => {
  const control = e.target
  const pageX = getPageX(e)

  if (control.classList.contains('control-btn')) {
    if (pageX != null) {
      result.value = updatePos(pageX - initialX.value)
    }
  }
  resultValue.value = setResultValue.value
  catching.value = false
  window.removeEventListener('mousemove', changeValue)
  window.removeEventListener('mouseup', setStateOff)
  window.removeEventListener('touchmove', changeValue, touchMoveOptions)
  window.removeEventListener('touchend', setStateOff)
  window.removeEventListener('touchcancel', setStateOff)
}

const changeValue = (e) => {
  if (e?.cancelable) e.preventDefault()
  const pageX = getPageX(e)
  if (pageX == null) return
  result.value = updatePos(pageX - initialX.value)
}

const selectStep = ({ target: step }) => {
  console.log(step)
}
watch(
  resultValue,
  () => {
    initValue()
  },
  { immediate: true },
)

onMounted(() => {
  if (slider.value) {
    const sliderInfo = slider.value.getBoundingClientRect()
    container.value = sliderInfo.width
    initialX.value = sliderInfo.left

    initValue()
    slide_obs.observe(slider.value)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', changeValue)
  window.removeEventListener('mouseup', setStateOff)
  window.removeEventListener('touchmove', changeValue, touchMoveOptions)
  window.removeEventListener('touchend', setStateOff)
  window.removeEventListener('touchcancel', setStateOff)
})

let slide_obs = new ResizeObserver((entries) => {
  for (let entry of entries) {
    const entInfo = entry.contentRect
    container.value = entInfo.width
    initValue()
  }
})
</script>

<template>
  <div
    class="be-slider"
    ref="slider"
    :class="[{ disabled }, trackType, { labeled: showLabel }]"
    @mousedown="setStateOn"
    @mouseup="setStateOff"
    @touchstart="setStateOn"
    @touchend="setStateOff"
  >
    <div
      class="result-slider primary"
      :class="`be-${color}`"
      ref="resultRef"
      :style="setResult"
    ></div>
    <template v-if="showStep">
      <div
        class="break-point"
        v-for="point in stepLevel - 1"
        :key="point"
        :style="{ left: `${point * unitSize}%` }"
        @click.stop="selectStep"
      ></div>
    </template>
    <div class="control-btn" :class="{ catching }" :style="setPosition">
      <div v-if="showTooltip" class="tooltip">
        {{ setResultValue }}{{ unitText }}
      </div>
    </div>
    <div v-if="showValue" class="label-text">
      <div class="current-label" :style="{ left: `${result}px` }">
        {{ setResultValue }}{{ unitText }}
      </div>
    </div>
    <div v-if="showLabel" class="label-text">
      <div class="start-label">{{ min }}{{ unitText }}</div>
      <div class="end-label">{{ max }}{{ unitText }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
