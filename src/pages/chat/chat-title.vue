<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useChatsStore } from './store'

const route = useRoute()
const chatsStore = useChatsStore()
const activeChat = computed(() => {
  return chatsStore.getChatById(route.params.id as string)
})
</script>

<template>
  <h1 class="title">
    {{ activeChat?.name }}
  </h1>
</template>
