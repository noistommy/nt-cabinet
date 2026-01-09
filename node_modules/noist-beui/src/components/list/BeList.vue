<script setup>
defineProps({
  options: {
    type: Array,
    default: () => {
      return []
    },
  },
  selection: {
    type: Boolean,
    default: false,
  },
  selectedType: {
    type: String,
    default: 'bg',
  },
  icon: {
    type: Boolean,
    default: false,
  },
  image: {
    type: Boolean,
    default: false,
  },
  border: {
    type: Boolean,
    default: false,
  },
})

const selectItem = defineModel()
</script>

<template>
  <div class="be-list" :class="[{ selection }, { border }, selectedType]">
    <div
      class="item"
      v-for="opt in options"
      :key="opt.option"
      :class="{ selected: selectItem && selectItem.option === opt.option }"
      @click="selectItem = opt"
    >
      <template v-if="image">
        <div class="item-img">
          <img :src="opt.image" />
        </div>
      </template>
      <template v-else-if="icon">
        <i class="list-icon icon" :class="opt.icon" />
      </template>
      <div class="item-title">
        {{ opt.option }}
        <div class="sub-title" v-if="opt.sub">
          {{ opt.sub }}
        </div>
      </div>
      <template v-if="button">
        <div class="btn-set">
          <div class="be-button round icon">
            <i :Class="opt.icon"></i>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
