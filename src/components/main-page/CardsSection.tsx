import { useUserStore } from '../../store/UsersStore'
import DropdownMenu from './DropdownMenu'

const CardsSection = ({ users }) => {
  const { archiveUser, activateUser, hideUser, archivedUsers } = useUserStore()
  console.log('в архиве:', archivedUsers)
  console.log(users)
  return (
    <>
      {users.map((user: any) => (
        <div key={user.id}>
          {user.name}
          <DropdownMenu
            activateUser={activateUser}
            archiveUser={archiveUser}
            hideUser={hideUser}
            userId={user.id}
          />
        </div>
      ))}
    </>
  )
}
export default CardsSection
