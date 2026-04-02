import { useUserStore } from '../../../store/UsersStore'
import UserCard from '../user-card/UserCard'
import styles from './cardSection.module.scss'

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
    <div className={styles.wrapper}>
      <div>Активные</div>
      <div className={styles.container}>
        {activeUsers.map((user: any) => (
          <UserCard
            activateUser={activateUser}
            archiveUser={archiveUser}
            hideUser={hideUser}
            key={user.id}
            user={user}
          />
        ))}
      </div>
      <div>Архив</div>
      <div className={styles.container}>
        {archivedUsersArr.map((user: any) => (
          <UserCard
            activateUser={activateUser}
            archiveUser={archiveUser}
            hideUser={hideUser}
            key={user.id}
            user={user}
          />
        ))}
      </div>
    </div>
  )
}
export default CardsSection
