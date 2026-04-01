import UserCard from '../components/main-page/UserCard'
import { useUsers } from '../entities/users/hooks'

const MainPage = () => {
  const { data: users } = useUsers(6)
  console.log(users)
  return (
    <>
      <UserCard users={users} />
    </>
  )
}

export default MainPage
