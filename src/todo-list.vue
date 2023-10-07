<script setup lang="ts">
import type { Todo } from './types.js'

defineProps<{ todos: Todo[] }>()

const emit = defineEmits<{ 'remove-todo': [Todo] }>()
</script>

<template>
  <ul class="todo-list">
    <li v-if="!todos.length" class="todo-empty">Todos are empty</li>
    <li v-for="todo in todos" v-bind:key="todo.id">
      <label class="todo-item">
        <input v-model="todo.completed" class="todo-checkbox" type="checkbox" />
        <span class="todo-text">{{ todo.text }}</span>
        <button v-on:click="emit('remove-todo', todo)">Remove</button>
      </label>
    </li>
  </ul>
</template>

<style scoped>
.todo-list {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.todo-empty {
  text-align: center;
  color: #aaa;
  font-size: 1.5rem;
}

.todo-checkbox:checked + .todo-text {
  text-decoration: line-through;
}
</style>
