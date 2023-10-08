<script setup lang="ts">
import { computed, ref } from 'vue'
import { useChatsStore } from './store.js'

const props = defineProps<{
  chatId: string
}>()

const chatsStore = useChatsStore()
const inputValue = ref('')
const inputElement = ref<HTMLInputElement>()
const chat = computed(() => chatsStore.getChatById(props.chatId))

function onSubmit(): void {
  if (!inputValue.value) return

  chat.value!.messages.push({
    id: crypto.randomUUID(),
    createdAt: Date.now(),
    text: inputValue.value
  })

  inputValue.value = ''
  inputElement.value!.focus()
}
</script>

<template>
  <form v-on:submit.prevent="onSubmit">
    <input
      ref="inputElement"
      v-model="inputValue"
      placeholder="Message..."
      type="text"
      required
      autofocus
    />
    <button type="submit">Send</button>
  </form>
</template>

<style>
</style>
