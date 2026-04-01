import { API_BASE_URL } from '../../shared/api.config'
import { getFlatUser } from '../../utils/getFlatUser'
import type { ApiData, User } from './types'

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch(`${API_BASE_URL}/users`)
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
  const usersData = ((await res.json()) ?? []) as ApiData[]
  return getFlatUser(usersData)
}
