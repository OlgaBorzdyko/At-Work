const UserCard = ({users}) => {
  return (
    <>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  )
}
export default UserCard
