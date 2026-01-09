<script setup>
defineProps({
  type: {
    type: String,
    default: 'label',
  },
  icon: {
    type: String,
    default: null,
  },
  iconPos: {
    type: String,
    default: null,
  },
  round: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: null,
  },
  light: {
    type: Boolean,
    default: false,
  },
  pointing: {
    type: Boolean,
    default: false,
  },
  pointingPos: {
    type: String,
    default: 'up',
  },
  isMeta: {
    type: Boolean,
    default: false,
  },
  keyType: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <div
    class="be-tag"
    :class="[
      color,
      { light },
      type,
      { round, icon: icon, pointing },
      type === 'pointing' && pointingPos,
      type === 'kbd' && isMeta ? 'meta' : '',
      type === 'kbd' && keyType ? keyType : '',
    ]"
  >
    <template v-if="type === 'label' || type === 'pointing' || type === 'kbd'">
      <i v-if="icon" class="icon" :class="[icon, iconPos]"></i>
      <slot></slot>
      <i
        v-if="icon && iconPos === 'right'"
        class="icon right"
        :class="icon"
      ></i>
    </template>
  </div>
</template>
