import { useUserStore } from '../../store/UsersStore'
import UserCard from './UserCard'

const CardsSection = ({ users }) => {
  const { archiveUser, activateUser, hideUser, archivedUsers, hiddenUsers } =
    useUserStore()
  console.log('в архиве:', archivedUsers)
  console.log(users)
  const activeUsers = users.filter(
    (user) => !archivedUsers.includes(user.id) && !hiddenUsers.includes(user.id)
  )
  const archivedUsersArr = users.filter(
    (user) => archivedUsers.includes(user.id) && !hiddenUsers.includes(user.id)
  )
  return (
    <>
      <div>Активные</div>
      {activeUsers.map((user: any) => (
        <UserCard
          activateUser={activateUser}
          archiveUser={archiveUser}
          hideUser={hideUser}
          key={user.id}
          user={user}
        />
      ))}
      <div>Архив</div>
      {archivedUsersArr.map((user: any) => (
        <UserCard
          activateUser={activateUser}
          archiveUser={archiveUser}
          hideUser={hideUser}
          key={user.id}
          user={user}
        />
      ))}
    </>
  )
}
export default CardsSection
