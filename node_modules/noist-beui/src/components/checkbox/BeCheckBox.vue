<script setup>
defineProps({
  type: {
    type: String,
    default: 'checkbox',
    varidator: (value) => {
      return ['checkbox', 'radio'].includes(value)
    },
  },
  name: {
    type: String,
  },
  labelText: {
    type: String,
    default: null,
  },
  indeter: {
    type: Boolean,
    default: false,
  },
})

const checkedValue = defineModel()
</script>

<template>
  <label
    :for="name"
    class="be-checkbox"
    :class="[type, { checked: checkedValue }, { indeter }]"
  >
    <input type="checkbox" :name="name" v-model="checkedValue" />
    {{ labelText }}
  </label>
</template>
