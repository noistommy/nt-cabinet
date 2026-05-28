<script setup>
import BePanel from './BePanel.vue'
// import { ref } from 'vue'
// panel list
// { title: panel-header, contents: pane-contents }

defineProps({
  panelList: {
    type: Array,
    default: null,
  },
  toggleIcon: {
    type: String,
    default: 'xi-angle-down',
  },
  iconPos: {
    type: String,
    default: 'left',
  },
})
</script>

<template>
  <div class="be-accordion">
    <slot>
      <template v-for="(panel, i) in panelList" :key="`panel-${i}`">
        <BePanel
          :title="panel.title"
          :contents="panel.contents"
          :toggle-icon="toggleIcon"
          :icon-pos="iconPos"
          collapse
          :disabled="panel.disabled"
        />
      </template>
    </slot>
  </div>
</template>
