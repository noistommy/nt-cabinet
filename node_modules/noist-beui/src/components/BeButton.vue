<script setup>
import { h, computed } from 'vue'

const props = defineProps({
  contentText: {
    type: String,
    default: '',
  },
  brand: String,
  status: String,
  color: String,
  text: Boolean,
  border: Boolean,
  disabled: Boolean,
  fluid: Boolean,
  round: Boolean,
  compact: Boolean,
  outline: Boolean,
  icon: String,
  withIcon: {
    type: String,
    default: null,
  },
  iconPos: String,
  badge: String,
  badgeOption: String,
})

const emit = defineEmits(['on-click'])

// 클래스 계산
const buttonClasses = computed(() => [
  'be-button',
  props.brand,
  props.status,
  props.color,
  {
    text: props.text,
    border: props.border,
    disabled: props.disabled,
    fluid: props.fluid,
    round: props.round,
    compact: props.compact,
    outline: props.outline,
    icon: props.icon,
    badge: props.badge,
  },
])

// 이벤트 핸들러
const onClick = (e) => {
  emit('on-click', e)
}

// 기본 컨텐츠 렌더링 함수
const renderDefaultContent = () => {
  const children = []

  // 왼쪽 아이콘
  if (
    props.withIcon &&
    (props.iconPos === 'left' || props.iconPos === 'both')
  ) {
    children.push(
      h('i', {
        class: ['icon', props.iconPos, props.withIcon],
      }),
    )
  }

  // 아이콘
  if (props.icon) {
    children.push(
      h('i', {
        class: ['icon', props.icon],
      }),
    )
  }

  // contentText
  if (props.contentText) {
    children.push(props.contentText)
  }

  // 오른쪽 아이콘
  if (
    props.withIcon &&
    (props.iconPos === 'right' || props.iconPos === 'both')
  ) {
    children.push(
      h('i', {
        class: ['icon', props.iconPos, props.withIcon],
      }),
    )
  }

  // 뱃지
  if (props.badge) {
    children.push(
      h(
        'span',
        {
          class: ['in-badge', props.badgeOption],
        },
        props.badge,
      ),
    )
  }

  return children
}

// 메인 렌더 함수
const render = (slots) => {
  return h(
    'button',
    {
      class: buttonClasses.value,
      onClick,
      disabled: props.disabled,
    },
    [
      slots.default?.() || renderDefaultContent(),
      // slot이 있으면 slot을, 없으면 기본 컨텐츠를 렌더링
      // h('div', {}, [slots.default?.() || renderDefaultContent()]),
    ],
  )
}
</script>

<template>
  <component :is="() => render($slots)" />
</template>
