<script setup>
defineProps({
  title: {
    type: String,
  },
  surface: {
    type: Boolean,
    default: false,
  },
  border: {
    type: Boolean,
    default: true,
  },
  float: {
    type: Boolean,
    default: false,
  },
  align: {
    type: String,
    default: 'left',
  },
  image: {
    type: [Boolean, Object],
    default: null,
  },
  attached: {
    type: Boolean,
    default: false,
  },
  extra: {
    type: Boolean,
    default: false,
  },
  round: {
    type: String,
    default: 'l',
  },
})
</script>

<template>
  <div
    class="be-card"
    :class="[
      { surface, border, float, image, attached, extra },
      `round-${round}`,
      `align-${align}`,
    ]"
  >
    <div v-if="attached" class="header">
      <slot name="header"></slot>
    </div>
    <div v-if="image" class="image">
      <slot name="image">
        <img :src="image.src" :alt="image.alt" />
      </slot>
    </div>
    <div class="contents">
      <div class="title" v-if="title">{{ title }}</div>
      <slot></slot>
    </div>
    <div v-if="extra" class="extra">
      <slot name="extra"></slot>
    </div>
    <div v-if="attached" class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
