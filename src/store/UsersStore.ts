import { create } from 'zustand'

import type { User } from '../entities/users/types'

interface ArchivedUser extends User {
  id: number
}

interface storeState {
  users: User[] | null
  archivedUsers: ArchivedUser[]
  archiveUser: (userId: number) => void
  activateUser: (userId: number) => void
}

export const useUserStore = create<storeState>((set) => ({
  users: null,
  archivedUsers: [],

  archiveUser: (userId: number) =>
    set((state) => {
      const archivedUser = state.users?.find((user) => user.id === userId)
      console.log('добавлен в архив', userId)

      return {
        users: state.users?.filter((user) => user.id !== userId),
        archivedUsers: [
          ...state.archivedUsers,
          { ...archivedUser } as ArchivedUser
        ]
      }
    }),
  activateUser: (userId: number) =>
    set((state) => {
      const activateUser = state.archivedUsers?.find(
        (user) => user.id === userId
      )
      return {
        users: [...(state.users || []), { ...activateUser }],
        archivedUsers: state.archivedUsers.filter((user) => user.id !== userId)
      }
    })
}))
