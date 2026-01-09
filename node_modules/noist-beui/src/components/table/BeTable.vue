<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  columns: {
    type: Array,
    default: () => {
      return []
    },
  },
  values: {
    type: Array,
    default: () => {
      return []
    },
  },
  headerAlign: {
    type: String,
    default: 'center',
  },
  useFoot: {
    type: Boolean,
    default: false,
  },
  border: {
    type: Boolean,
    default: false,
  },
  gridType: {
    type: String,
    default: null,
  },
  divideNum: {
    type: [String || Number],
    default: 3,
  },
  selection: {
    type: Boolean,
    default: false,
  },
  striped: {
    type: String,
    default: null,
  },
})
const emit = defineEmits(['select'])
const selectedRow = ref('')
const gridClass = computed(() => {
  if (props.gridType === 'divide') {
    return `divide-${props.divideNum}`
  } else {
    return props.gridType
  }
})

const setSelect = (row) => {
  if (!props.selection) return
  selectedRow.value = selectedRow.value === row ? null : row
  emit('select', props.values[selectedRow.value] || null)
}
</script>

<template>
  <table
    class="be-table"
    :class="[{ border, selection, striped }, gridClass, striped]"
  >
    <thead>
      <tr :class="`align-${headerAlign}`">
        <th
          v-for="col in columns"
          :key="col.key"
          :class="`align-${headerAlign}`"
        >
          {{ col.name }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(row, i) in values"
        :key="`row-${i}`"
        :class="{ select: selectedRow === i }"
        @click="setSelect(i)"
      >
        <td
          v-for="col in columns"
          :key="`cell-${i}-${col.key}`"
          :class="[`align-${col.align || 'center'}`, `col-${col.col}`]"
        >
          <div class="cell">
            {{ row[col.key] }}
          </div>
        </td>
      </tr>
    </tbody>
    <!-- <tfoot v-if="useFoot">
      <tr>
        <slot name="footer">
          <td :colspan="columns.length">Footer</td>
        </slot>
      </tr>
    </tfoot> -->
  </table>
</template>
