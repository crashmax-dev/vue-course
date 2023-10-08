<script setup lang="ts">
import { ref } from 'vue'
import type { Todo } from './types.js'

const emit = defineEmits<{ 'add-todo': [Todo] }>()
const inputValue = ref('')
const inputElement = ref<HTMLInputElement>()

function addTodo(): void {
  if (!inputValue.value) return

  const todo: Todo = {
    id: crypto.randomUUID(),
    text: inputValue.value,
    completed: false,
    createdAt: Date.now()
  }

  inputValue.value = ''
  inputElement.value!.focus()

  emit('add-todo', todo)
}
</script>

<template>
  <form v-on:submit.prevent="addTodo">
    <input
      ref="inputElement"
      v-model="inputValue"
      placeholder="Add a todo"
      type="text"
      required
      autofocus
    />
    <button type="submit">Add</button>
  </form>
</template>
