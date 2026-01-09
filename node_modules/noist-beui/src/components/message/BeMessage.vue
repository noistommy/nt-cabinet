<script setup>
import { computed } from 'vue'

const statusIcon = {
  success: 'xi-check-circle',
  info: 'xi-info',
  error: 'xi-emoticon-devil',
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
      return ['success', 'error', 'info', 'attention', 'importance'].includes(
        value,
      )
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
</script>

<template>
  <div
    class="be-message"
    :class="[{ icon: icon }, status, { selected, disabled }]"
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
