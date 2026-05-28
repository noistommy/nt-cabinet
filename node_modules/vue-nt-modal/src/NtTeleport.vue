<template>
  <teleport to="body">
    <template v-if="isModals">
      <div class="nt-modals">
        <template v-for="modal in modalRef" :key="modal.id">
          <template v-if="modal.comp === 'confirm'">
            <nt-confirm v-bind="modal" />
          </template>
          <template v-else>
            <nt-modal title="Test" v-bind="modal" />
          </template>
        </template>
      </div>
    </template>
  </teleport>
</template>

<script>
import NtModal from './NtModal.vue'
import NtConfirm from './NtConfirm.vue'
import { inject } from 'vue'

export default {
  name: 'NtTeleport',
  components: { NtModal, NtConfirm },
  props: {
    options: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      isOpen: false,
      modalRef: [],
      modalIndex: 0
    }
  },
  computed: {
    isModals() {
      return this.modalRef.length > 0
    }
  },
  mounted() {
    const modal = inject('$ntModal')
    const { emitter } = modal
    emitter.on('show-modal', modalRef => {
      modalRef.id = this.modalIndex
      modalRef.options = { ...this.options, ...modalRef.options }
      console.log(modalRef.options)
      if (modalRef.options.useStack) {
        this.modalRef.push(modalRef)
        this.modalIndex++
      } else {
        this.modalRef[0] = modalRef
        this.modalIndex = 0
      }
      document.body.style.overflow = 'hidden'
    })
    emitter.on('close-modal', modalId => {
      this.modalRef.pop()
      if (this.modalIndex > 0) this.modalIndex--
      document.body.style.overflow = ''
    })
    emitter.on('close-all-modal', () => {
      this.isOpen = false
      this.modalRef = []
      this.modalIndex = 0
      document.body.style.overflow = ''
    })
  },
  methods: {
    toggleMode() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss">

</style>
