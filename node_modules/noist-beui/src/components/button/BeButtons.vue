<script setup>
import BeButton from './BeButton.vue'

defineProps({
  buttons: {
    type: Array,
    required: true,
  },
  round: {
    type: Boolean,
    default: false,
  },
  border: {
    type: Boolean,
    default: false,
  },
})

const selectedIndex = defineModel()

const handleSelect = (idx) => {
  selectedIndex.value = idx
}
</script>

<template>
  <div class="be-buttons" :class="[{ round }, { border }]">
    <slot>
      <template v-for="(btn, i) in buttons" :key="`btn-${i}`">
        <BeButton
          v-bind="typeof btn === 'string' ? { contentText: btn } : btn"
          @click="() => handleSelect(i)"
          :class="{ selected: selectedIndex === i }"
        ></BeButton>
      </template>
    </slot>
  </div>
</template>
