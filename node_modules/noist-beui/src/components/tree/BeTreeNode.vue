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
  files: {
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
    class="tree-branch"
    :class="{ show: showNode }"
    :style="{ '--level': level }"
  >
    <div class="node-title custom-node" @click="toggleNode">
      <i
        v-if="!files && useMark"
        class="icon expend-icon"
        :class="{ 'xi-caret-down-min': node.children?.length > 0 }"
      ></i>
      <i
        v-if="files"
        class="icon"
        :class="
          node.children?.length > 0
            ? showNode
              ? 'xi-folder-open'
              : 'xi-folder'
            : 'xi-file-o'
        "
      />

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
    <div v-if="showNode && node.children?.length > 0" class="node-children">
      <be-tree-node
        v-for="(child, i) in node.children"
        :key="`level-${level}-${i + 1}`"
        :node="child"
        :level="level + 1"
        :use-check="useCheck"
        :use-mark="useMark"
        :check="check"
        :files
      />
    </div>
  </div>
</template>
