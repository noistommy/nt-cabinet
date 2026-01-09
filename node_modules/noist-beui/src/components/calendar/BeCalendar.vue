<script setup>
import {
  setCalendar,
  getDateInfo,
  week_en_m,
  MONTH_TEXT_LIST,
} from './calendar'
import { ref, watch, computed } from 'vue'

const week = week_en_m

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

const currentDate = ref(null)
const selectDate = ref(null)
const dayList = ref([])

const cellRows = computed(() => {
  return dayList.value.length / 7
})
watch(
  () => props.selectedDate,
  (value) => {
    const newValue = typeof value === 'string' ? new Date(value) : value
    currentDate.value = getDateInfo(newValue)
    selectDate.value = getDateInfo(newValue)
    dayList.value = setCalendar(currentDate.value)
  },
  { immediate: true },
)

const setDayList = () => {
  if (currentDate.value) {
    dayList.value = setCalendar(currentDate.value)
  }
}

const prevMonth = () => {
  currentDate.value.month -= 1
  if (currentDate.value.month <= 0) {
    currentDate.value.year -= 1
    currentDate.value.month = 12
  }
  setDayList()
}
const nextMonth = () => {
  currentDate.value.month += 1
  if (currentDate.value.month > 12) {
    currentDate.value.year += 1
    currentDate.value.month = 1
  }
  setDayList()
}

const setSelectDate = (date) => {
  const { year, month } = currentDate.value
  currentDate.value.date = date
  selectDate.value = {
    year,
    month,
    date,
  }

  emits('select', new Date(year, month - 1, date))
}
const checkSelectDate = (date) =>
  currentDate.value.year === selectDate.value.year &&
  currentDate.value.month === selectDate.value.month &&
  currentDate.value.date === date

const setToday = () => {
  currentDate.value = getDateInfo()
  selectDate.value = getDateInfo()

  emits('select', new Date())
  setDayList()
}
</script>

<template>
  <div
    class="be-calendar"
    :class="{ border }"
    :style="{ '--cell-size': cellSize }"
  >
    <div class="calendar-header" :class="{ symmetry }">
      <slot name="current-date">
        <div class="current-date">
          <span class="month">{{
            MONTH_TEXT_LIST[currentDate.month - 1]
          }}</span>
          <span class="year">{{ currentDate.year }}</span>
        </div>
      </slot>
      <slot name="controller">
        <div class="prev-month be-button text icon small" @click="prevMonth">
          <i class="icon xi-angle-left" />
        </div>
        <div class="next-month be-button text icon small" @click="nextMonth">
          <i class="icon xi-angle-right" />
        </div>
      </slot>
      <div
        v-if="today"
        class="be-button small compact round outline deepblue"
        @click="setToday"
      >
        Today
      </div>
    </div>
    <div class="week-wrapper">
      <div
        class="cell week-cell"
        v-for="day in week"
        :key="day"
        :data-name="day"
      ></div>
    </div>
    <div class="cell-wrapper" :style="{ '--cell-rows': cellRows }">
      <div
        class="cell"
        v-for="day in dayList"
        :key="day"
        :data-name="day.name"
        :class="[...day.type, { selected: checkSelectDate(day.name) }]"
        :style="{ '--x': day.position.x, '--y': day.position.y }"
        @click="setSelectDate(day.name)"
      ></div>
    </div>
    <slot name="footer">
      <div class="calendar-footer"></div>
    </slot>
  </div>
</template>

<style lang="scss" scoped></style>
