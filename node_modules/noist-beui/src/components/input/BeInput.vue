<script setup>
import { ref, computed } from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: 'input',
    validator(value) {
      return ['input', 'textarea'].includes(value)
    },
  },
  inputType: {
    type: String,
    default: 'text',
  },
  align: {
    type: String,
    default: 'left',
    validator(value) {
      return ['left', 'center', 'right'].includes(value)
    },
  },
  status: {
    type: String,
    default: null,
    validator(value) {
      return ['success', 'error', 'attention', 'info', 'importance'].includes(
        value,
      )
    },
  },
  placeholder: {
    type: String,
    default: '',
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  underline: {
    type: Boolean,
    default: false,
  },
  transparent: {
    type: Boolean,
    default: false,
  },
  compact: {
    type: Boolean,
    default: false,
  },
  fluid: {
    type: Boolean,
    default: false,
  },
  iconLeft: {
    type: String,
    default: null,
  },
  iconRight: {
    type: String,
    default: null,
  },
  clear: {
    type: Boolean,
    default: false,
  },
  badge: {
    type: String,
    default: null,
  },
  badgeOption: {
    type: String,
    default: null,
  },
  edit: {
    type: Boolean,
    default: false,
  },
  editMode: {
    type: Boolean,
    default: false,
  },
  unit: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  labeled: {
    type: Boolean,
    default: false,
  },
  withButton: {
    type: Boolean,
    default: false,
  },
  attachStart: {
    type: Boolean,
    default: false,
  },
  attachEnd: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: null,
  },
})
const inputValue = defineModel()
const emit = defineEmits(['focus'])

const isFocus = ref(false)

const input = ref(null)
const iconPosition = computed(() => {
  if (props.iconLeft && props.iconRight) return 'both'
  return props.iconLeft ? 'left' : props.iconRight ? 'right' : null
})

const setPlaceholder = computed(() => {
  return props.label ? ' ' : props.placeholder
})

const checkFocus = () => {
  if (!isFocus.value) {
    isFocus.value = true
    console.log('focus', isFocus.value)
    emit('focus', isFocus.value)
  }
}
const onBlur = () => {
  isFocus.value = false
  emit('focus', isFocus.value)
}
const clearValue = () => {
  console.log('value', inputValue.value)
  inputValue.value = ''
}
</script>

<template>
  <div
    class="be-input"
    :class="[
      status,
      { readonly },
      { underline },
      { round },
      { transparent },
      { compact },
      { fluid },
      { labeled },
      { left: (labeled && attachStart) || (withButton && attachStart) },
      { right: (labeled && attachEnd) || (withButton && attachEnd) },
      { withButton },
      { edit: edit },
      { editable: editMode },
      { icon: iconLeft || iconRight || clear },
      iconPosition,
      { badge: badge },
      { unit },
      { disabled },
    ]"
    :data-unit="unit"
  >
    <slot name="start"></slot>
    <slot>
      <i v-if="iconLeft" :class="`icon xi-${iconLeft}`" />
      <template v-if="type === 'input'">
        <input
          :type="inputType"
          v-model="inputValue"
          :placeholder="setPlaceholder"
          :class="[`aline-${align}`]"
          ref="input"
          :disabled="disabled"
          :readonly="readonly"
          @click="checkFocus()"
          @blur="onBlur()"
        />
      </template>
      <template v-else>
        <textarea
          v-model="inputValue"
          rows="3"
          :placeholder="placeholder"
        ></textarea>
      </template>
      <template v-if="label">
        <label class="label">{{ label }}</label>
      </template>
      <i
        v-if="clear"
        class="icon clear-btn xi-close"
        :class="{ disabled: inputValue === '' }"
        @mousedown="clearValue"
      />
      <i v-if="iconRight" :class="`icon xi-${iconRight}`" />

      <span v-else-if="badge" class="be-badge" :class="badgeOption">{{
        badge
      }}</span>
    </slot>
    <slot name="end"></slot>
  </div>
</template>
