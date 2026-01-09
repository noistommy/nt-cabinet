<script setup>
defineProps({
  type: {
    type: String,
    default: 'slide',
    varidator: (value) => {
      return ['slide', 'button', 'button-slide'].includes(value)
    },
  },
  inside: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
  },
  onText: {
    type: String,
    default: 'ON',
  },
  offText: {
    type: String,
    default: 'OFF',
  },
  color: {
    type: String,
  },
})
const switchValue = defineModel()
const emit = defineEmits(['change'])

const onClick = () => {
  switchValue.value = !switchValue.value
  emit('change', switchValue.value)
}
</script>
<template>
  <div
    class="be-switch"
    :class="[type, { inside }, { round: round }, color]"
    @click="onClick"
  >
    <input type="checkbox" v-model="switchValue" />
    <template v-if="type === 'slide'">
      <div class="switch"></div>
    </template>
    <template v-else>
      <span class="on" :class="{ active: switchValue }">{{ onText }}</span>
      <span class="off" :class="{ active: !switchValue }">{{ offText }}</span>
    </template>
  </div>
</template>
