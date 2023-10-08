export interface Chat {
  id: string
  name: string
  messages: Message[]
}

export interface Message {
  id: string
  text: string
  createdAt: number
}
