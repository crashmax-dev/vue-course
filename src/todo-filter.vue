<script setup lang="ts">
import { computed } from 'vue'
import { FILTERS } from './types.js'
import type { Filter } from './types.js'

const props = defineProps<{ filters: Filter[] }>()
const emit = defineEmits<{ 'update-filters': [Filter[]] }>()

const filters = computed({
  get() {
    return props.filters
  },
  set(value) {
    emit('update-filters', value.length ? value : ['all'])
  }
})
</script>

<template>
  <select v-model="filters" class="filter" multiple>
    <option v-for="filter in FILTERS" v-bind:key="filter" v-bind:value="filter">
      {{ filter.charAt(0).toUpperCase() + filter.slice(1) }}
    </option>
  </select>
</template>

<style scope>
.filter {
  width: 100%;
  margin-top: 1rem;
  outline: none;
  overflow: hidden;
}
</style>
