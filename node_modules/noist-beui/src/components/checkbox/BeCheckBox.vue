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
  <div
    class="be-checkbox"
    :class="[type, { checked: checkedValue }, { indeter }]"
    @click="checkedValue = !checkedValue"
  >
    <input type="checkbox" :name="name" v-model="checkedValue" />
    <label>
      {{ labelText }}
    </label>
  </div>
</template>
