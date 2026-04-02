const DropdownMenu = ({ userId, archiveUser, activateUser, hideUser }) => {
  return (
    <>
      <div>
        <button onClick={() => archiveUser(userId)}>архивировать</button>
        <button onClick={() => activateUser(userId)}>активировать</button>
        <button onClick={() => hideUser(userId)}>скрыть</button>
      </div>
    </>
  )
}
export default DropdownMenu
