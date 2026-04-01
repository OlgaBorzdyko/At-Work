import { useUsers } from '../entities/users/hooks'

const MainPage = () => {
  const { data: users } = useUsers(6)
  console.log(users)
  return <div>Main Page</div>
}

export default MainPage
