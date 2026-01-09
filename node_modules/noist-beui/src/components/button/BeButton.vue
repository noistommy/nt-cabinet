<script setup>
defineProps({
  contentText: {
    type: String,
    default: '',
  },
  brand: {
    type: String,
  },
  status: {
    type: String,
  },
  color: {
    type: String,
  },
  text: {
    type: Boolean,
  },
  border: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
  },
  fluid: {
    type: Boolean,
  },
  round: {
    type: Boolean,
  },
  compact: {
    type: Boolean,
  },
  outline: {
    type: Boolean,
  },
  icon: {
    type: Boolean,
  },
  withIcon: {
    type: String,
    default: null,
  },
  iconPos: {
    type: String,
  },
  badge: {
    type: String,
  },
  badgeOption: {
    type: String,
  },
  link: {
    type: String,
    default: null,
  },
  linkTarget: {
    type: String,
    default: null,
  },
})
const emit = defineEmits(['onClick'])
const onClick = (e) => {
  emit('onClick', e)
}
</script>

<template>
  <button
    class="be-button"
    :class="[
      brand,
      status,
      color,
      { text },
      { link },
      { border },
      { disabled },
      { fluid },
      { round },
      { compact },
      { outline },
      { icon },
      { badge: badge },
    ]"
    @click="onClick"
  >
    <slot>
      <template v-if="withIcon && (iconPos === 'left' || iconPos === 'both')">
        <i class="icon" :class="[iconPos, withIcon]"></i>
      </template>
      <template v-if="icon">
        <i class="icon" :class="icon"></i>
      </template>
      {{ contentText }}
      <template
        v-if="withIcon && (iconPos === 'right' || iconPos === 'both')"
      ></template>
      <template v-if="badge">
        <div class="in-badge" :class="badgeOption">{{ badge }}</div>
      </template>
    </slot>
    <a v-if="link" :href="link" :target="linkTarget || '_self'" />
  </button>
</template>
