import { useQuery } from '@tanstack/react-query'

import { getUsers } from './api'
import type { User } from './types'

export const useUsers = (limit?: number) => {
  return useQuery<User[]>({
    queryKey: ['users'],
    queryFn: getUsers,
    select: (data) => (limit ? data.slice(0, limit) : data)
  })
}
