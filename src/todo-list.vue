<script setup lang="ts">
import type { Todo } from './types.js'

defineProps<{ todos: Todo[] }>()

const emit = defineEmits<{ 'remove-todo': [Todo] }>()
</script>

<template>
  <ul class="todo-list">
    <li v-if="!todos.length">Todos are empty</li>
    <li v-for="todo in todos" v-bind:key="todo.id">
      <label class="todo-item">
        <input type="checkbox" v-model="todo.completed" />
        <span>{{ todo.text }}</span>
        <button v-on:click="emit('remove-todo', todo)">Remove</button>
      </label>
    </li>
  </ul>
</template>
