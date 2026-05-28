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
  prefix: {
    type: String,
    default: null,
  },
  suffix: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <div
    class="be-tag"
    :class="[
      color && `${color}${light ? `-light` : ''}`,
      type,
      { round, icon: icon, pointing },
      type === 'pointing' && pointingPos,
      type === 'kbd' && isMeta ? 'meta' : '',
      type === 'kbd' && keyType ? keyType : '',
      { prefix },
      { suffix },
    ]"
  >
    <template v-if="type === 'label' || type === 'pointing' || type === 'kbd'">
      <span v-if="prefix" class="detail">{{ prefix }}</span>
      <i
        v-if="icon && iconPos !== 'right'"
        class="icon"
        :class="[icon, iconPos]"
      ></i>
      <slot></slot>
      <i
        v-if="icon && iconPos === 'right'"
        class="icon right"
        :class="icon"
      ></i>
      <span v-if="suffix" class="detail">{{ suffix }}</span>
    </template>
  </div>
</template>
