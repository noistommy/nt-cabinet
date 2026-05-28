<template>
  <transition name="fade">
    <div v-if="isVisible" class="nt-modal" :style="offsetStyle">
      <div class="nt-modal-background" @click="closeModalToClick" />
      <div class="nt-modal-container">
        <component :is="compContents" :modal-id="id" v-bind="props.props" @close="closeModal">
          <template #header>
            <div class="modal-header">
              <div class="title">{{ props.props.title }}</div>
              <div class="close-btn" @click="closeModal">
                <i class="xi-close"></i>
              </div>
            </div>
          </template>
        </component>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, inject, computed } from 'vue'

const modal = inject('$ntModal')
const props = defineProps({
  id: Number,
  comp: {
    type: Object,
    default: () => {
      return {}
    },
  },
  options: Object,
  props: Object,
})

const emit = defineEmits(['close'])
const isVisible = ref(false)
const compContents = ref(null)

const handleEscapeKey = (e) => {
  onEscapeKeyPress(e)
}

const offsetStyle = computed(() => {
  return { '--offset': `${(props.id % 5) * props.options.offset}px` }
})

onMounted(() => {
  compContents.value = props.comp
  nextTick(() => (isVisible.value = compContents.value))
  if (props.options.escapeToClose) {
    window.addEventListener('keydown', handleEscapeKey)
  }
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscapeKey)
})
const closeModal = () => {
  emit('close')
  modal.close(props.id)
}

const onEscapeKeyPress = (event) => {
  console.log(event)
  const keyCode = event.keyCode || event.which
  if (keyCode === 27) {
    closeModal()
  }
}
const closeModalToClick = (event) => {
  if (props.options.clickToClose && event.target.className.indexOf('background') > -1) {
    modal.close(props.id)
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 500ms;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
