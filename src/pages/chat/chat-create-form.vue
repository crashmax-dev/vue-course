<script setup lang="ts">
import { ref } from 'vue'
import { useChatsStore } from './store.js'

const chatsStore = useChatsStore()
const inputValue = ref('')

function onSubmit(): void {
  if (!inputValue.value) return
  chatsStore.createChat(inputValue.value)
  inputValue.value = ''
}
</script>

<template>
  <form v-on:submit.prevent="onSubmit">
    <input
      v-model="inputValue"
      placeholder="Create a new chat"
      type="text"
      required
      autofocus
    />
    <button type="submit">Create</button>
  </form>
</template>
