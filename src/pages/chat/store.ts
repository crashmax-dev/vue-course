import { defineStore } from 'pinia'
import { watch } from 'vue'
import { useStorage } from '@vueuse/core'
import type { Chat } from './types.js'

export const useChatsStore = defineStore('chats', () => {
  const chats = useStorage<Chat[]>('chats', [])

  watch(chats, () => {
    localStorage.setItem('chats', JSON.stringify(chats.value))
  })

  function getChatById(chatId: string): Chat | undefined {
    return chats.value.find((chat) => chat.id === chatId)
  }

  function createChat(chatName: string): void {
    chats.value.push({
      id: crypto.randomUUID(),
      name: chatName,
      messages: []
    })
  }

  function deleteChat(chatId: string): void {
    const index = chats.value.findIndex((chat) => chat.id === chatId)
    if (index >= 0) {
      chats.value.splice(index, 1)
    }
  }

  return {
    chats,
    getChatById,
    createChat,
    deleteChat
  }
})
