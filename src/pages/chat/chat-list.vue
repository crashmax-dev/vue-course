<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useChatsStore } from './store.js'

const router = useRouter()
const chatsStore = useChatsStore()
</script>

<template>
  <div class="chat-list">
    <div v-if="!chatsStore.chats.length" class="chat-empty">Chats are empty</div>
    <div
      v-for="chat in chatsStore.chats"
      v-bind:key="chat.id"
      class="chat-item"
      v-on:click="router.push({
        path: '/chat/:id',
        name: 'chat-with-id',
        params: { id: chat.id }
      })"
    >
      <div class="chat-name">
        {{ chat.name }}
      </div>
      <div class="chat-last-message">
        {{ chat.messages.length ? 'Messages (' + chat.messages.length + ')' : 'Chat created' }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.chat-list {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.chat-item {
  display: flex;
  flex-direction: column;
  padding: 8px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  cursor: pointer;
}

.chat-name {
  font-weight: bold;
  font-size: 1.2rem;
}

.chat-last-message {
  font-size: 0.9rem;
}

.chat-empty {
  text-align: center;
  color: var(--text-color);
  font-size: 1.5rem;
}
</style>
