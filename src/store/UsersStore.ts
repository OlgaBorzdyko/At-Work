import { create } from 'zustand'

import type { User } from '../entities/users/types'

interface ArchivedUser extends User {
  id: number
}

interface storeState {
  users: User[] | null
  archivedUsers: ArchivedUser[]
  archiveUser: (userId: number) => void
}

export const useUserStore = create<storeState>((set) => ({
  users: null,
  archivedUsers: [],

  archiveUser: (userId: number) =>
    set((state) => {
      const archivedUser = state.users?.find((user) => user.id === userId)
      console.log('Пользователь добавлен в архив', userId)

      return {
        archivedUsers: [
          ...state.archivedUsers,
          { ...archivedUser } as ArchivedUser
        ]
      }
    })
}))
