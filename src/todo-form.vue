<script setup lang="ts">
import { ref } from 'vue'
import { randomToken } from './utils.js'
import type { Todo } from './types.js'

const emit = defineEmits<{ 'add-todo': [Todo] }>()
const input = ref('')
const inputRef = ref<HTMLInputElement>()

function addTodo(): void {
  if (!input.value) return

  const todo: Todo = {
    id: randomToken(),
    text: input.value,
    completed: false,
    createdAt: new Date()
  }

  input.value = ''
  inputRef.value!.focus()

  emit('add-todo', todo)
}
</script>

<template>
  <form class="form" v-on:submit.prevent="addTodo">
    <input
      ref="inputRef"
      v-model="input"
      class="form-input"
      placeholder="Add a todo"
      type="text"
    />
    <button :disabled="!input" class="form-submit" type="submit">Add</button>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.form-input {
  width: 100%;
  padding: 0.5rem;
  border: none;
  outline: none;
  border-radius: 0.25rem;
}

.form-submit {
  width: 30%;
}

.form-submit:disabled {
  cursor: not-allowed;
}
</style>
