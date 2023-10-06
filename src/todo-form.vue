<script setup lang="ts">
import { ref } from 'vue'
import { randomToken } from './utils.js'
import type { Todo } from './types.js'

const emit = defineEmits<{ 'add-todo': [Todo] }>()
const input = ref<HTMLInputElement>()

function addTodo(): void {
  if (!input.value!.value) return

  const todo: Todo = {
    id: randomToken(),
    text: input.value!.value,
    completed: false,
    createdAt: new Date()
  }

  input.value!.value = ''
  input.value!.focus()

  emit('add-todo', todo)
}
</script>

<template>
  <form v-on:submit.prevent="addTodo">
    <input type="text" ref="input" />
    <button type="submit">Add</button>
  </form>
</template>
