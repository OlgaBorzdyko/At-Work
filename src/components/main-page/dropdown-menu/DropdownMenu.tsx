import { useState } from 'react'

const DropdownMenu = ({ userId, archiveUser, activateUser, hideUser }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div>
        <button onClick={() => setIsOpen((prev) => !prev)}>
          <img alt="dropdown" src="/dropdown.png" />
        </button>
        {isOpen && (
          <div>
            <button onClick={() => archiveUser(userId)}>архивировать</button>
            <button onClick={() => activateUser(userId)}>активировать</button>
            <button onClick={() => hideUser(userId)}>скрыть</button>
          </div>
        )}
      </div>
    </>
  )
}
export default DropdownMenu
