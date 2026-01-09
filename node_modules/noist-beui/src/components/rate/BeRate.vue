<script setup>
import { ref, onMounted, computed, watch } from 'vue'

const props = defineProps({
  rateLength: {
    type: Number,
    default: 5,
  },
  useHalf: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: 'xi-star',
  },
  resultValue: {
    type: Number,
    default: 0,
  },
  size: {
    type: String,
    default: null,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: null,
  },
  border: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['select'])
const rate = ref(0)
const result = ref(0)
const isHalf = ref(false)
const isFloat = ref(0)

const setFloat = computed(() => {
  const percent = ((rate.value * 10) % 10) * 10
  if (percent === 0) return {}
  return {
    width: `${percent}%`,
    overflow: 'hidden',
  }
})

watch(
  () => props.resultValue,
  () => {
    rate.value = props.resultValue
    result.value = props.resultValue
  },
  { immediate: true },
)
onMounted(() => {
  isFloat.value = ((rate.value * 10) % 10) * 10
})
const onHover = (num) => {
  if (props.useHalf) {
    const targetPos = event.target.getBoundingClientRect()
    isHalf.value = targetPos.left + targetPos.width / 2 - event.pageX > 0
  }
  rate.value = num
}

const onMove = (num) => {
  if (!props.useHalf) return
  onHover(num)
}
const onLeave = () => {
  rate.value = result.value || 0
}

const setRate = (num) => {
  if (props.clearable) {
    result.value = Math.ceil(result.value) === num ? 0 : result.value
  }
  result.value = result.value === num ? 0 : num
  if (props.useHalf) {
    result.value = isHalf.value ? num - 0.5 : num
  }
  emit('select', result.value)
}
</script>

<template>
  <div class="be-rate" :class="[size, color, { readonly, disabled, border }]">
    <span
      v-for="item in rateLength"
      :key="item"
      class="rate-item"
      :class="[
        { check: Math.ceil(rate) >= item },
        { half: Math.ceil(rate) === item && isHalf },
      ]"
      @mouseenter="onHover(item)"
      @mouseleave="onLeave"
      @mousemove="onMove(item)"
      @click="setRate(item)"
    >
      <i class="icon" :class="`${icon}-o`"></i>
      <i
        class="icon"
        :class="icon"
        :style="Math.ceil(rate) === item ? setFloat : null"
      ></i>
    </span>
  </div>
</template>
