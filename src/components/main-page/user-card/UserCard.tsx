import DropdownMenu from '../dropdown-menu/DropdownMenu'
import styles from './UserCard.module.scss'

const UserCard = ({ user, archiveUser, activateUser, hideUser }) => {
  return (
    <div className="card">
      <div className={styles.container}>
        <div className={styles.avatar}>
          <img alt="avatar" src="/photo-example.png" />
        </div>
        <div className={styles.userData}>
          <div>{user.name}</div>
          <div>{user.companyName}</div>
          <div>{user.city}</div>
        </div>
        <DropdownMenu
          activateUser={activateUser}
          archiveUser={archiveUser}
          hideUser={hideUser}
          userId={user.id}
        />
      </div>
    </div>
  )
}
export default UserCard
