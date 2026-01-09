<script setup>
defineProps({
  tabList: {
    type: Array,
    default: null,
  },
  vertical: {
    type: Boolean,
    default: false,
  },
  tabType: {
    type: String,
    default: null,
  },
})

const selectedTab = defineModel()
const emits = defineEmits(['remove'])

const removeTab = (tab) => {
  emits('remove', tab)
}
</script>

<template>
  <div class="be-tabs" :class="[{ vertical }, tabType]">
    <div class="tab-menu">
      <div
        class="tab-item tab"
        v-for="tab in tabList"
        :key="tab"
        :class="{ active: tab.option === selectedTab }"
        @click="selectedTab = tab.option"
      >
        <template v-if="tabType === 'browser'">
          <div class="tabText ellipsis">{{ tab.option }}</div>
          <div class="btn-close" @click="() => removeTab(tab)">
            <i class="icon xi-close" />
          </div>
        </template>
        <template v-else>
          {{ tab.option }}
        </template>
      </div>
    </div>
    <div class="tab-contents">
      <slot></slot>
    </div>
  </div>
</template>
