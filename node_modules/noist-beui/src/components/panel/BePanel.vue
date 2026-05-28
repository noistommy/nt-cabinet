<script setup>
import { ref, computed } from 'vue'
const props = defineProps({
  title: {
    type: String,
  },
  contents: {
    type: String,
  },
  border: {
    type: Boolean,
    default: false,
  },
  toggleIcon: {
    type: Array || String,
    default: null,
  },
  iconPos: {
    type: String,
    default: '',
  },
  open: {
    type: Boolean,
    default: false,
  },
  collapse: {
    type: Boolean,
    default: false,
  },
  maxHeight: {
    type: Number,
    default: 200,
  },
})

const emit = defineEmits(['show'])
const isOpen = ref(props.open)
const iconClass = computed(() => {
  if (!props.toggleIcon && props.collapse) return ''
  return `icon ${props.iconPos}`
})

const setHeight = computed(() => {
  if (!props.collapse) return {}
  return {
    '--max-height': `${props.maxHeight}px`,
  }
})

const showPanel = () => {
  if (!props.collapse) return
  isOpen.value = !isOpen.value
  emit('show', isOpen.value)
}
</script>
<template>
  <div
    class="be-panel"
    :class="[{ border, collapse }, iconClass, { open: isOpen }]"
  >
    <div class="panel-header" @click="showPanel">
      <div class="title">{{ title }}</div>
      <span v-if="collapse && toggleIcon" class="panel-toggle-btn">
        <template v-if="typeof toggleIcon === 'string'">
          <i class="icon" :class="`${toggleIcon}`" />
        </template>
        <template v-else>
          <i v-if="isOpen" class="icon" :class="`${toggleIcon[1]}`" />
          <i v-else class="icon" :class="`${toggleIcon[0]}`" />
        </template>
      </span>
    </div>
    <div class="panel-content" :style="setHeight">
      <div class="content-wrapper">
        <slot name="contents">
          {{ contents }}
        </slot>
      </div>
    </div>
  </div>
</template>
