export interface Todo {
  id: string
  text: string
  completed: boolean
  createdAt: number
}

export const FILTERS = ['all', 'completed', 'asc', 'desc'] as const
export type Filter = (typeof FILTERS)[number]
