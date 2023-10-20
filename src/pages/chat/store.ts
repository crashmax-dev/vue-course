import { defineStore } from 'pinia'
import * as vueuse from '@vueuse/core'
import type { Chat } from './types.js'

export const useChatsStore = defineStore('chats', () => {
  const chats = vueuse.useStorage<Chat[]>('chats', [])

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

  function deleteMessage(chatId: string, messageId: string): void {
    const chat = getChatById(chatId)
    if (chat) {
      const index = chat.messages.findIndex((message) => message.id === messageId)
      if (index >= 0) {
        chat.messages.splice(index, 1)
      }
    }
  }

  return {
    chats,
    getChatById,
    createChat,
    deleteChat,
    deleteMessage
  }
})
