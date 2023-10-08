import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from 'vue-router'
import TodoApp from '../pages/todo/todo-app.vue'
import ChatApp from '../pages/chat/chat-app.vue'
import ChatWithId from '../pages/chat/chat-with-id.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    alias: '/todo',
    name: 'todo',
    meta: { showInNav: true },
    component: TodoApp,
  },
  {
    path: '/chat',
    name: 'chat',
    meta: { showInNav: true },
    component: ChatApp,
  },
  {
    path: '/chat/:id',
    name: 'chat-with-id',
    component: ChatWithId,
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
