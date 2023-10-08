<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ChatTitle from './chat-title.vue'
import ChatWallpaper from './chat-wallpaper.vue'
import ChatSendMessageForm from './chat-send-message-form.vue'
import ChatMessageList from './chat-message-list.vue'
import { useChatsStore } from './store.js'

const route = useRoute()
const router = useRouter()
const chatsStore = useChatsStore()
const chat = computed(() => chatsStore.getChatById(route.params.id as string))

function deleteChat(): void {
  const isConfirmDelete = confirm('Are you sure you want to delete this chat?')
  if (!isConfirmDelete) return

  chatsStore.deleteChat(route.params.id as string)
  router.push('/chat')
}

watch(() => chat, (value) => {
  if (value) return
  router.push('/chat')
}, { immediate: true })
</script>

<template>
  <chat-title />
  <div class="chat-actions">
    <router-link to="/chat">
      <button>
        Back to chats
      </button>
    </router-link>
    <button v-on:click="deleteChat">
      Delete chat
    </button>
  </div>
  <div class="chat">
    <chat-wallpaper>
      <chat-send-message-form v-bind:chat-id="chat!.id" />
      <chat-message-list v-bind:chat-id="chat!.id" />
    </chat-wallpaper>
  </div>
</template>

<style scoped>
.chat-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat {
  margin-top: 1rem;
}
</style>
