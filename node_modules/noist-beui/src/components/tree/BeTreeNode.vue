<script setup>
import { ref } from 'vue'
const props = defineProps({
  node: {
    type: Object,
    default: () => {
      return {}
    },
  },
  level: {
    type: Number,
    default: 0,
  },
  useCheck: {
    type: Boolean,
    default: false,
  },
  useMark: {
    type: Boolean,
    default: true,
  },
  check: {
    type: Boolean,
    default: false,
  },
})

const showNode = ref(false)
const checked = ref(props.check)
const toggleNode = (e) => {
  if (e.target.tagName === 'LABEL') return
  showNode.value = !showNode.value
}
</script>
<template>
  <div
    class="be-tree"
    :class="{ show: showNode }"
    :style="{ '--level': level }"
  >
    <div class="node custom-node" @click="toggleNode">
      <div class="node-title">
        <i
          v-if="useMark"
          class="icon expend-icon"
          :class="{ 'xi-caret-down-min': node.children?.length > 0 }"
        ></i>
        <div class="node-label">
          <template v-if="useCheck">
            <be-check-box v-model="checked" @update:modelValue="updateCheck" />
          </template>
          <div class="title">
            {{ node.label }}
          </div>
          <div v-if="node.sub" class="sub-title">{{ node.sub }}</div>
        </div>
      </div>
    </div>
    <div v-if="showNode && node.children?.length > 0" class="node-children">
      <be-tree-node
        v-for="(child, i) in node.children"
        :key="`level-${level}-${i + 1}`"
        :node="child"
        :level="level + 1"
        :use-check="useCheck"
        :use-mark="useMark"
        :check="check"
      />
    </div>
  </div>
</template>
