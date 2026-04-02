import { create } from 'zustand'
interface storeState {
  archivedUsers: number[]
  hiddenUsers: number[]

  archiveUser: (userId: number) => void
  activateUser: (userId: number) => void
  hideUser: (userId: number) => void
}

export const useUserStore = create<storeState>((set) => ({
  hiddenUsers: [],
  archivedUsers: [],

  archiveUser: (id) =>
    set((state) => ({
      archivedUsers: [...state.archivedUsers, id]
    })),
  activateUser: (id) =>
    set((state) => ({
      archivedUsers: state.archivedUsers.filter((i) => i !== id)
    })),
  hideUser: (id) =>
    set((state) => ({
      hiddenUsers: [...state.hiddenUsers, id]
    }))
}))
