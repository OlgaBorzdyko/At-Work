import type { ApiData, User } from '../entities/users/types'

export const getFlatUser = (users: ApiData[]): User[] => {
  return users.map((user) => ({
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    city: user.address.city,
    phone: user.phone,
    company: user.company.name
  }))
}
