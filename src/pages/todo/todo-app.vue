<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import TodoForm from './todo-form.vue'
import TodoList from './todo-list.vue'
import TodoFilter from './todo-filter.vue'
import { useStorage } from '@vueuse/core'
import type { Todo, Filter } from './types.js'

const todos = useStorage<Todo[]>('todo', [])
const todoFilters = ref<Filter[]>(['all'])

watch(todos.value, () => {
  localStorage.setItem('todos', JSON.stringify(todos.value))
})

function remoteTodo(todo: Todo): void {
  todos.value.splice(todos.value.indexOf(todo), 1)
}

function updateFilters(filters: Filter[]): void {
  todoFilters.value = filters
}

const filteredTodos = computed(() => {
  let filteredTodos = [...todos.value]

  for (const filter of todoFilters.value) {
    if (filter === 'all') break

    if (filter === 'completed') {
      filteredTodos = filteredTodos.filter((todo) => todo.completed)
    }

    if (filter === 'asc') {
      filteredTodos = filteredTodos.sort(
        (a, b) => a.createdAt - b.createdAt
      )
    }

    if (filter === 'desc') {
      filteredTodos = filteredTodos.sort(
        (a, b) => b.createdAt - a.createdAt
      )
    }
  }

  return filteredTodos
})
</script>

<template>
  <todo-form v-on:add-todo="todos.push($event)" />
  <todo-filter v-bind:filters="todoFilters" v-on:update-filters="updateFilters" />
  <todo-list v-bind:todos="filteredTodos" v-on:remove-todo="remoteTodo" />
</template>
