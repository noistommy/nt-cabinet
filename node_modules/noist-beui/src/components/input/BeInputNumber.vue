<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({
  status: {
    type: String,
    default: null,
    validator(value) {
      return ['success', 'error', 'attention', 'info', 'importance'].includes(
        value,
      )
    },
  },
  placeholder: {
    type: String,
    default: '',
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  compact: {
    type: Boolean,
    default: false,
  },
  fluid: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  iconLeft: {
    type: String,
    default: null,
  },
  iconRight: {
    type: String,
    default: null,
  },
  step: {
    type: Number,
    default: 1,
  },
  controller: {
    type: String,
    default: 'between',
  },
  min: {
    type: Number,
  },
  max: {
    type: Number,
  },
  incIcon: {
    type: String,
    default: 'xi-plus',
  },
  decIcon: {
    type: String,
    default: 'xi-minus',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
const inputValue = defineModel()
const emit = defineEmits(['focus'])

const isFocus = ref(false)

const input = ref(null)

onMounted(() => {
  if (inputValue.value < props.min) inputValue.value = props.min
  if (inputValue.value > props.max) inputValue.value = props.max
})
const checkFocus = () => {
  if (!isFocus.value) {
    isFocus.value = true
    console.log('fucus', isFocus.value)
    emit('focus', isFocus.value)
  }
}
const onBlur = () => {
  isFocus.value = false
  emit('focus', isFocus.value)
}
const increase = () => {
  if (inputValue.value + props.step > props.max) return
  inputValue.value += props.step
}
const decrease = () => {
  if (inputValue.value - props.step < props.min) return
  inputValue.value -= props.step
}
const keyControl = (event) => {
  if (props.disabled) return
  if (event.keyCode === 38) increase()
  if (event.keyCode === 40) decrease()
}
</script>

<template>
  <div
    class="be-input button number"
    :class="[status, { readonly, compact, fluid, disabled, round }, controller]"
    tabindex="-1"
    @keydown.prevent="keyControl"
  >
    <slot>
      <input
        type="number"
        v-model="inputValue"
        ref="input"
        @click="checkFocus()"
        @blur="onBlur()"
      />
    </slot>
    <button class="be-button icon dec" :class="{ disabled }" @click="decrease">
      <i class="icon" :class="decIcon"></i>
    </button>
    <button class="be-button icon inc" :class="{ disabled }" @click="increase">
      <i class="icon" :class="incIcon"></i>
    </button>
  </div>
</template>
