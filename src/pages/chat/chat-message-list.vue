<script setup lang="ts">
import { computed, ref } from 'vue'
import { useChatsStore } from './store.js'
import type { Message } from './types.js'

const props = defineProps<{
  chatId: string
}>()

const chatItemWidth = ref('auto')
const chatsStore = useChatsStore()
const chat = computed(() => chatsStore.getChatById(props.chatId))

function deleteMessage(event: Event, message: Message): void {
  const element = event.target as HTMLElement
  chatItemWidth.value = `${element.clientWidth}px`
  chatsStore.deleteMessage(props.chatId, message.id)
}
</script>

<template>
  <TransitionGroup class="message-list" name="list" tag="ul">
    <li
      v-for="message of chat!.messages"
      v-bind:key="message.id"
      v-on:click="(event) => deleteMessage(event, message)"
    >
      {{ message.text }}
    </li>
  </TransitionGroup>
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

.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
  width: v-bind(chatItemWidth);
}
</style>
