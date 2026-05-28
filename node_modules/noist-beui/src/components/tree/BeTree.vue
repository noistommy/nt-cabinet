<script setup>
defineProps({
  treeData: {
    type: Array,
    default: () => {
      return []
    },
  },
  userClass: {
    type: String,
    default: '',
  },
  useCheck: {
    type: Boolean,
    default: false,
  },
  useMark: {
    type: Boolean,
    default: true,
  },
  files: {
    type: Boolean,
    default: false,
  },
})
</script>
<template>
  <div class="be-tree-list" :class="[userClass, { files }]">
    <be-tree-node
      v-for="(node, i) in treeData"
      :key="`level-${i + 1}`"
      :node="node"
      :level="1"
      :use-check="useCheck"
      :check="false"
      :use-mark="useMark"
      :files
    />
  </div>
</template>
