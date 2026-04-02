import CardsSection from '../components/main-page/CardsSection'
import { useUsers } from '../entities/users/hooks'

const MainPage = () => {
  const { data: users, isLoading } = useUsers(6)

  if (isLoading) {
    return <div>Пока загрузка</div>
  }
  console.log(users)
  return (
    <>
      <CardsSection users={users || []} />
    </>
  )
}

export default MainPage
