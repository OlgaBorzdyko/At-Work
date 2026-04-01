export type User = {
  id: number
  name: string
  username: string
  email: string
  city: string
  phone: string
  company: string
}

export type ApiData = {
  id: number
  name: string
  username: string
  email: string
  address: { city: string }
  phone: string
  company: { name: string }
}
