import { useUserStore } from '../../store/UsersStore'

const UserCard = ({ users }) => {
  console.log(users)
  const { archiveUser } = useUserStore()
  return (
    <>
      {users.map((user: any) => (
        <div key={user.id}>
          {user.name}
          <button onClick={() => archiveUser(user.id)}>архивировать</button>
        </div>
      ))}
    </>
  )
}
export default UserCard
