<template>
  <div class="modal">
    <template v-if="useHeader">
      <slot name="header"></slot>
    </template>
    <!-- <div class="modal-header">
      <div class="title">{{ title }} ({{ modalId }})</div>
      <div class="close-btn" @click="$emit('close')">
        <slot name="close">
          <i class="xi-close"></i>
        </slot>
      </div>
    </div> -->
    <div class="modal-contents">
      <div class="contents">
        <div>{{ description }}</div>
        <div>{{lorem_text}}</div>
      </div>
    </div>
    <div class="modal-footer">
      <!-- <div class="btn-set add">
        <button class="be-button" @click="addModal">New</button>
      </div> -->
<!--      <button class="be-button green" @click="returnTest('테스트')">테스트</button>-->
      <div class="btn-set">
        <button class="be-button text" @click="$emit('close')">{{ nText }}</button>
        <button class="be-button primary" @click="addConfirm">{{ pText }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import TestModal from './TestModal.vue'
import { ref, inject, watch } from 'vue'


const ntModal = inject('$ntModal')

const lorem_text =  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in odio quis velit vulputate luctus. Vivamus suscipit, mauris eget hendrerit tempor, dolor dolor commodo lorem, feugiat euismod tortor eros id nisl. Fusce finibus eget nisl non malesuada. Praesent dictum magna eget metus congue vehicula. Quisque quis ex ex. Pellentesque efficitur rhoncus posuere. Nulla nec rutrum enim. Nam at magna ut arcu euismod tincidunt. Morbi dapibus ultrices erat, ut venenatis magna consectetur sit amet. Donec efficitur quis erat id suscipit. Sed pellentesque nunc quis turpis euismod accumsan.'
defineOptions({
  name: 'TestModal'
})

const resultConfirm = ref(null)

const props = defineProps({
  modalId: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: '본문 작성'
  },
  pText: {
    type: String,
    default: 'Action'
  },
  nText: {
    type: String,
    default: 'Cancel'
  },
  useHeader: Boolean,
  useNew: Boolean,
  useStack: Boolean
})

watch(resultConfirm.value, () => {
  this.returnTest(resultConfirm.value)
})

const addModal = () => {
  const modalProps = {
    title: '모달 테스트',
    description: '모달 테스트 입니다.',
    pText: '저장',
    useHeader: false,
    useNew: false,
    useStack: props.useStack
  }
  ntModal.show({
    comp: TestModal,
    props: modalProps,
    options: {
      useStack: props.useStack
    }
  })
}
const addConfirm = () => {
  const modalProps = {
    title: '확인',
    description: '모달 컴펌 테스트 입니까?',
    pText: '확인',
    result: data => {
      this.returnTest(data)
    }
  }
  ntModal.show({
    comp: 'confirm',
    props: modalProps,
    options: {}
  })
}

const returnTest = (data) => {
  this.$attrs.testFunc(data)
}
</script>

<style lang="scss" scoped>
.modal {
  width: 500px;
  background-color: var(--bgc);
  color: var(--txt);
  .modal-contents {
    max-height: 500px;
    overflow-y: auto;
  }
  .modal-footer {
    display: flex;
    justify-content: end;
    .btn-set.add {
      flex-grow: 1;
    }
  }
}
</style>
