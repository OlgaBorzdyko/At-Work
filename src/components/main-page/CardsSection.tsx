import { useUserStore } from '../../store/UsersStore'

const CardsSection = ({ users }) => {
  const { archiveUser, activateUser, hideUser, archivedUsers } = useUserStore()
  console.log('в архиве:', archivedUsers)
  console.log(users)
  return (
    <>
      {users.map((user: any) => (
        <div key={user.id}>
          {user.name}
          <button onClick={() => archiveUser(user.id)}>архивировать</button>
          <button onClick={() => activateUser(user.id)}>активировать</button>
          <button onClick={() => hideUser(user.id)}>скрыть</button>
        </div>
      ))}
    </>
  )
}
export default CardsSection
