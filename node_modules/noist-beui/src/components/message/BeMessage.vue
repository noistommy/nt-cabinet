<script setup>
import { computed } from 'vue'

const statusIcon = {
  success: 'xi-check-circle',
  info: 'xi-info',
  danger: 'xi-error',
  attention: 'xi-warning',
  importance: 'xi-star',
}

const props = defineProps({
  title: {
    type: String,
  },
  contents: {
    type: String,
  },
  icon: {
    type: String,
  },
  status: {
    type: String,
    default: null,
    varidator: (value) => {
      return ['success', 'danger', 'info', 'attention', 'importance'].includes(
        value,
      )
    },
  },
  statusType: {
    type: String,
    default: null,
    varidator: (value) => {
      return ['text', 'bg', 'border'].includes(value)
    },
  },
  selected: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const iconName = computed(() => {
  if (props.status) {
    return statusIcon[props.status]
  } else {
    return props.icon
  }
})

const setStatus = computed(() => {
  return props.statusType ? `${props.status}-${props.statusType}` : props.status
})
</script>

<template>
  <div
    class="be-message"
    :class="[{ icon: icon }, setStatus, { selected, disabled }]"
  >
    <template v-if="icon">
      <i class="icon" :class="iconName" />
    </template>
    <slot>
      <div class="title">{{ title }}</div>
      <div class="contents">{{ contents }}</div>
    </slot>
  </div>
</template>
