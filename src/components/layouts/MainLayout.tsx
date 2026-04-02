import { Outlet } from 'react-router-dom'

import TopBar from './TopBar'

const MainLayout = () => {
  return (
    <div>
      <div>
        <TopBar />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default MainLayout
