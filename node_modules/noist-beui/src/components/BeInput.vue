<script setup>
import { h, ref, computed, watch } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'input',
    validator(value) {
      return ['input', 'textarea'].includes(value)
    },
  },
  inputType: {
    type: String,
    default: 'text',
  },
  align: {
    type: String,
    default: 'left',
    validator(value) {
      return ['left', 'center', 'right'].includes(value)
    },
  },
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
    default: '입력하세요',
  },
  readonly: Boolean,
  underline: Boolean,
  transparent: Boolean,
  compact: Boolean,
  fluid: Boolean,
  iconLeft: {
    type: String,
    default: null,
  },
  iconRight: {
    type: String,
    default: null,
  },
  clear: Boolean,
  badge: {
    type: String,
    default: null,
  },
  badgeOption: {
    type: String,
    default: null,
  },
  edit: Boolean,
  editMode: Boolean,
  unit: {
    type: String,
    default: null,
  },
  modelValue: String,
})

const inputValue = ref(props.modelValue)
const emit = defineEmits(['focus', 'update:modelValue'])

const isFocus = ref(false)

// watch(
//   () => props.modelValue,
//   (val) => {
//     inputValue.value = val
//   },
// )
// 계산된 속성들
const iconPosition = computed(() => {
  if (props.iconLeft && (props.iconRight || props.clear)) return 'both'
  return props.iconLeft
    ? 'left'
    : props.iconRight || props.clear
      ? 'right'
      : null
})

const containerClasses = computed(() => [
  'be-input',
  props.status,
  {
    readonly: props.readonly,
    underline: props.underline,
    transparent: props.transparent,
    compact: props.compact,
    fluid: props.fluid,
    edit: props.edit,
    editable: props.editMode,
    icon: props.iconLeft || props.iconRight || props.clear,
    unit: props.unit,
  },
  iconPosition.value,
  { badge: props.badge },
])

// 이벤트 핸들러
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

// 렌더 함수들
const renderLeftIcon = () => {
  if (!props.iconLeft) return null
  return h('i', {
    class: `icon xi-${props.iconLeft}`,
  })
}

const renderInput = () => {
  const inputProps = {
    type: props.type === 'input' ? props.inputType : undefined,
    value: inputValue.value,
    onInput: (e) => {
      inputValue.value = e.target.value
      // emit('update:modelValue', e.target.value)
    },
    placeholder: props.placeholder,
    class: [`aline-${props.align}`],
    onClick: checkFocus,
    onBlur: onBlur,
  }

  return props.type === 'input'
    ? h('input', inputProps)
    : h('textarea', {
        ...inputProps,
        rows: '3',
      })
}

const renderRightElement = () => {
  if (props.clear) {
    return h('i', {
      class: [
        'icon',
        'clear-btn',
        'xi-close',
        { disabled: inputValue.value === '' },
      ],
      onClick: () => (inputValue.value = ''),
    })
  } else if (props.iconRight && !props.clear) {
    return h('i', {
      class: `icon xi-${props.iconRight}`,
    })
  } else if (props.badge) {
    return h(
      'span',
      {
        class: ['be-badge', props.badgeOption],
      },
      props.badge,
    )
  }
  return null
}

// 메인 렌더 함수
const render = (slots) => {
  // const renderDefault = [renderLeftIcon(), renderInput(), renderRightElement()]
  return h(
    'div',
    {
      class: containerClasses.value,
      'data-unit': props.unit,
    },
    // [slots.default?.() || renderDefault],
    [renderLeftIcon(), renderInput(), renderRightElement()],
  )
}
</script>

<template>
  <component :is="() => render($slots)" />
</template>
