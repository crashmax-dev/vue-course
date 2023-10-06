<script setup lang="ts">
import { computed, ref } from 'vue'
import TodoForm from './todo-form.vue'
import TodoList from './todo-list.vue'
import TodoFilter from './todo-filter.vue'
import { randomToken } from './utils.js'
import type { Todo, Filter } from './types.js'

const todosMock: Todo[] = [
  {
    id: randomToken(),
    text: 'Learn Vue 2',
    completed: true,
    createdAt: new Date(7, 7, 2023)
  },
  {
    id: randomToken(),
    text: 'Learn TypeScript',
    completed: false,
    createdAt: new Date(10, 10, 2023)
  },
  {
    id: randomToken(),
    text: 'Learn Vue 3',
    completed: true,
    createdAt: new Date(8, 8, 2023)
  },
  {
    id: randomToken(),
    text: 'Learn Composition API',
    completed: false,
    createdAt: new Date(9, 9, 2023)
  }
]

const todos = ref<Todo[]>(import.meta.env.DEV ? todosMock : [])
const todoFilters = ref<Filter[]>(['all'])

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
        (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
      )
    }

    if (filter === 'desc') {
      filteredTodos = filteredTodos.sort(
        (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
      )
    }
  }

  return filteredTodos
})
</script>

<template>
  <todo-form v-on:add-todo="todos.push($event)" />
  <todo-filter
    v-bind:filters="todoFilters"
    v-on:update-filters="updateFilters"
  />
  <todo-list v-bind:todos="filteredTodos" v-on:remove-todo="remoteTodo" />
</template>

<style>
.todo-list {
  list-style-type: none;
}

input:checked + span {
  text-decoration: line-through;
}
</style>
