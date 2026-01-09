<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useFloating, autoUpdate, offset, flip, shift } from '@floating-ui/vue'

const props = defineProps({
  selectedDate: {
    type: [String, Date],
    default: new Date(),
  },
  cellSize: {
    type: String,
    default: '37px',
  },
  border: {
    type: Boolean,
    default: false,
  },
  symmetry: {
    type: Boolean,
    default: false,
  },
  today: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits(['select'])

const el = ref(null)
const isShow = ref(false)
const date = ref(props.selectedDate)
const reference = ref(null)
const floating = ref(null)

const { floatingStyles, isPositioned } = useFloating(reference, floating, {
  placement: 'bottom-start',
  middleware: [offset(10), flip(), shift()],
  whileElementsMounted: autoUpdate,
})

const setSelectedData = (payload) => {
  date.value = payload
  emits('select', date.value)
}

const formattedDate = computed(() => {
  let dateValue = date.value
  if (typeof dateValue === 'string') dateValue = new Date(dateValue)
  const year = dateValue.getFullYear()
  const month = dateValue.getMonth() + 1
  const day = dateValue.getDate()

  return `${year}.${String(month).padStart(2, '0')}.${String(day).padStart(2, '0')}`
})

const menuStyle = ref(null)
const MAX_MENU_HEIGHT = 350

const toggleOpen = () => {
  isShow.value = !isShow.value
}

const showMenu = (value = true) => {
  if (el.value.contains(event.target) || floating.value.contains(event.target))
    return
  if (isShow.value) value = false
  isShow.value = value
}

onMounted(() => {
  document.addEventListener('click', () => showMenu(false))
})
onUnmounted(() => {
  document.removeEventListener('click', () => showMenu(false))
})
</script>

<template>
  <div class="be-date-picker" ref="el">
    <div class="default-date-text" ref="reference" @click="toggleOpen">
      <div class="be-button icon small round">
        <i class="icon xi-calendar"></i>
      </div>
      <input type="text" readonly :value="formattedDate" />
      <i class="icon xi-angle-down" :class="{ 'xi-rotate-180': isShow }"></i>
    </div>
    <Teleport to="body">
      <div class="be-popper-container" ref="floating" :style="[floatingStyles]">
        <Transition name="expend-fade">
          <div
            v-if="isShow"
            class="calender-wrapper be-popper"
            :style="menuStyle"
          >
            <BeCalendar
              :selected-date="date"
              :cell-size="cellSize"
              :border="border"
              :symmetry="symmetry"
              :today="today"
              @select="setSelectedData"
            >
              <div class="calendar-footer">
                <template slots="footer">
                  <div class="be-button">Close</div>
                </template>
              </div>
            </BeCalendar>
          </div>
        </Transition>
      </div>
    </Teleport>
  </div>
</template>

<style lang="scss" scoped>
.be-date-picker {
  position: relative;
  .default-date-text {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 6px 10px;
    border-radius: 0.25rem;
    // border: 1px solid var(--brd);
    box-shadow: 0 0 0 1px var(--brd);

    input {
      outline: 0;
      font-weight: 600;
      color: #555;
    }
  }
}
.calender-wrapper1 {
  position: absolute;
  top: 100%;
  margin-top: 10px;
  background-color: var(--bgc);
  z-index: 9999;
  box-shadow: var(--depth-bs);
  border-radius: 14px;
}
</style>
