import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import TodoApp from '../pages/todo/todo-app.vue'
import ChatApp from '../pages/chat/chat-app.vue'

export const routes: RouteRecordRaw[] = [
  { path: '/', alias: '/todo', name: 'Todo', component: TodoApp },
  { path: '/chat', name: 'Chat', component: ChatApp }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
