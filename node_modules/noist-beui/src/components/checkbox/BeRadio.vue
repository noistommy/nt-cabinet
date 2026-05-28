<script setup>
defineProps({
  optionList: {
    type: Array,
    required: true,
  },
  selected: {
    type: String,
    default: '',
  },
})
const uniqueId = Math.random().toString(36)

const emit = defineEmits(['result'])
const selectedRadio = defineModel('result')

const selectCheck = () => {
  emit('result', selectedRadio.value)
}
</script>

<template>
  <div class="be-radio">
    <label
      v-for="item in optionList"
      :key="item"
      class="be-checkbox radio"
      :class="{ checked: item === selectedRadio }"
      :for="`${item}-${uniqueId}`"
    >
      <input
        type="radio"
        :id="`${item}-${uniqueId}`"
        v-model="selectedRadio"
        :value="item"
        @change="selectCheck"
      />
      {{ item }}
    </label>
  </div>
</template>

<style lang="scss" scoped>
.be-radio {
  display: flex;
}
</style>
