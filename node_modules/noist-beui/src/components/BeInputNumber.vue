<script setup>
import { h, ref, computed } from 'vue'
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
  modelValue: {
    type: Number,
    default: 0,
  },
})
const emit = defineEmits(['focus', 'update:modelValue'])

const isFocus = ref(false)

const containerClasses = computed(() => [
  'be-input',
  'button',
  'number',
  props.status,
  props.controller,
  {
    readonly: props.readonly,
    compact: props.compact,
    fluid: props.fluid,
    disabled: props.disabled,
  },
])

// onMounted(() => {
//   console.log(props.modelValue)
//   // inputValue.value = props.min && props.modelValue < props.min ? props.min : props.modelValue
//   // inputValue.value = props.max && props.modelValue > props.max ? props.max : props.modelValue
// })
const checkFocus = () => {
  if (!isFocus.value) {
    isFocus.value = true
    emit('focus', isFocus.value)
  }
}
const onBlur = () => {
  isFocus.value = false
  emit('focus', isFocus.value)
}
const increase = () => {
  const newValue = props.modelValue + props.step
  if (props.max && newValue > props.max) return
  emit('update:modelValue', Number(newValue))
}
const decrease = () => {
  const newValue = props.modelValue - props.step
  if (props.min && newValue < props.min) return
  emit('update:modelValue', Number(newValue))
}
const keyControl = (event) => {
  if (props.disabled) return
  if (event.keyCode === 38) increase()
  if (event.keyCode === 40) decrease()
}

const renderInput = () => {
  const inputProps = {
    type: 'number',
    value: props.modelValue,
    onInput: (e) => {
      const newValue = Number(e.target.value || 0)
      if (newValue > props.max || newValue < props.min) return
      emit('update:modelValue', newValue)
    },
    placeholder: props.placeholder,
    disabled: props.disabled,
    readonly: props.readonly,
    onClick: checkFocus,
    onBlur: onBlur,
    onKeydown: (event) => keyControl(event),
  }

  return h('input', inputProps)
}

const renderButton = (direct) => {
  return h(
    'button',
    {
      class: ['be-button', 'icon', direct, { disabled: props.disabled }],
      onClick: direct === 'dec' ? decrease : increase,
    },
    [h('i', { class: ['icon', props[`${direct}Icon`]] })],
  )
}

const render = () => {
  return h(
    'div',
    {
      class: containerClasses.value,
    },
    [renderInput(), renderButton('dec'), renderButton('inc')],
  )
}
</script>

<template>
  <component :is="render" />
  <!-- <div
    class="be-input button number"
    :class="[status, {readonly, compact, fluid, disabled}, controller]"
    tabindex="-1" @keydown.prevent="keyControl"
  >
    <input
      type="number"
      v-model="inputValue"
      ref="input"
      @click="checkFocus()"
      @blur="onBlur()"
    />
    <button class="be-button icon dec" :class="{disabled}" @click="decrease">
      <i class="icon" :class="decIcon"></i>
    </button>
    <button class="be-button icon inc" :class="{disabled}" @click="increase">
      <i class="icon" :class="incIcon"></i>
    </button>
  </div> -->
</template>
