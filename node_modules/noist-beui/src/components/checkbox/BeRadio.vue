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
    <div
      v-for="item in optionList"
      :key="item"
      class="be-checkbox radio"
      :class="{ checked: item === selectedRadio }"
    >
      <input
        type="radio"
        :id="`${item}-${uniqueId}`"
        v-model="selectedRadio"
        :value="item"
        @change="selectCheck"
      />
      <label :for="`${item}-${uniqueId}`">{{ item }}</label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.be-radio {
  display: flex;
}
</style>
