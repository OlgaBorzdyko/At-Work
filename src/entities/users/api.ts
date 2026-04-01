import { API_BASE_URL } from '../../shared/api.config'

export const getUsers = async () => {
  const res = await fetch(`${API_BASE_URL}/users`)
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
  return res.json()
}
