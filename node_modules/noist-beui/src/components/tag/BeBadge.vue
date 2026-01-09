<script setup>
import { ref, onMounted } from 'vue'

const elRef = ref(null)

onMounted(() => {
  if (!elRef.value.parentNode.style.position) {
    elRef.value.parentNode.style.position = 'relative'
  }
})
defineProps({
  content: {
    type: [String, Number],
  },
  mark: {
    type: Boolean,
    default: false,
  },
  shadow: {
    type: Boolean,
    default: false,
  },
  align: {
    type: String,
    default: 'center',
  },
  color: {
    type: String,
    default: null,
  },
})
</script>
<template>
  <div
    class="be-badge"
    :class="[{ shadow, mark }, `align-${align}`, color]"
    ref="elRef"
  >
    <slot>{{ content }}</slot>
  </div>
</template>
