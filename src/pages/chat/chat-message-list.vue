<script setup lang="ts">
import { computed } from 'vue'
import { useChatsStore } from './store.js'

const props = defineProps<{
  chatId: string
}>()

const chatsStore = useChatsStore()
const chat = computed(() => chatsStore.getChatById(props.chatId))
</script>

<template>
  <ul class="message-list">
    <li v-for="message of chat!.messages" :key="message.id">
      {{ message.text }}
    </li>
  </ul>
</template>

<style scoped>
.message-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style-type: none;
  padding: 0;
}

.message-list li {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  background-color: var(--background-color);
}
</style>
