import DropdownMenu from './DropdownMenu'

const UserCard = ({ user, archiveUser, activateUser, hideUser }) => {
  return (
    <>
      <div>{user.name}</div>
      <div>{user.companyName}</div>
      <div>{user.city}</div>
      <DropdownMenu
        activateUser={activateUser}
        archiveUser={archiveUser}
        hideUser={hideUser}
        userId={user.id}
      />
    </>
  )
}
export default UserCard
