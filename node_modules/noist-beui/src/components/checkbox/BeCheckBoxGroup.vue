<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({
  checkList: {
    type: Array,
    required: true,
  },
})
const uniqueId = Math.random().toString(36)

const emit = defineEmits(['result'])
const selectedValue = defineModel('result')

const checkboxList = ref(new Array(props.checkList.length).fill(false))

onMounted(() => {
  selectedValue.value.forEach((val) => {
    const idx = props.checkList.findIndex((c) => c === val)
    checkboxList.value[idx] = true
  })
})
const selectCheck = () => {
  selectedValue.value = props.checkList.filter((c, i) => checkboxList.value[i])
  emit('result', selectedValue.value)
  // emit('select-value', checkboxList.value.filter(cb => cb.value))
}
</script>

<template>
  <div class="be-checkout-group">
    <div
      v-for="(item, i) in checkList"
      :key="item"
      class="be-checkbox"
      :class="{ checked: checkboxList[i] }"
    >
      <input
        type="checkbox"
        :id="`${item}-${uniqueId}`"
        v-model="checkboxList[i]"
        @change="selectCheck"
      />
      <label :for="`${item}-${uniqueId}`">{{ item }}</label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.be-checkout-group {
  display: flex;
}
</style>
