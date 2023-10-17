<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ filters: string[] }>()
const emit = defineEmits<{ 'update:filters': [string[]] }>()

const filters = computed({
  get() {
    return props.filters
  },
  set(value) {
    emit('update:filters', value.length ? value : ['all'])
  }
})
</script>

<template>
  <div class="filters">
    <label>
      All
      <input v-model="filters" type="checkbox" value="all">
    </label>
    <label>
      Completed
      <input v-model="filters" type="checkbox" value="completed">
    </label>
    <label>
      Asc
      <input v-model="filters" type="checkbox" value="asc">
    </label>
    <label>
      Desc
      <input v-model="filters" type="checkbox" value="desc">
    </label>
  </div>
</template>

<style scoped>
.filters {
  margin-top: 1rem;
}

label {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  background-color: var(--background-color);
  color: var(--text-color);
}
</style>
