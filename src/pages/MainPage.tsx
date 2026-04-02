import UserCard from '../components/main-page/UserCard'
import { useUsers } from '../entities/users/hooks'

const MainPage = () => {
  const { data: users, isLoading } = useUsers(6)

  if (isLoading) {
    return <div>Пока загрузка</div>
  }
  console.log(users)
  return (
    <>
      <UserCard users={users || []} />
    </>
  )
}

export default MainPage
