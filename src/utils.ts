import type { Todo } from "./types.js"

export function randomToken(): string {
  return Math.random().toString(36).slice(2)
}

export const todosMock: Todo[] = [
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
