<script setup>
import { computed } from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: 'checkbox',
    varidator: (value) => {
      return ['checkbox', 'radio'].includes(value)
    },
  },
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  labelText: {
    type: String,
    default: '',
  },
})

const checkedValue = defineModel()

const setValue = computed(() => {
  if (props.type === 'radio') {
    return checkedValue.value === props.id
  } else {
    return checkedValue.value
  }
})
</script>

<template>
  <div class="be-checkbox" :class="[type, { checked: setValue }]">
    <input
      :type="type"
      :name="name"
      :id="id"
      v-model="checkedValue"
      :value="id"
    />
    <label :for="id">
      <slot>{{ labelText }}</slot>
    </label>
  </div>
</template>
