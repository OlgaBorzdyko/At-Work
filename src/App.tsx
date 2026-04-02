import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MainLayout from './components/layouts/MainLayout'
import EditProfilePage from './pages/EditProfilePage'
import MainPage from './pages/MainPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />} path="/">
          <Route index element={<MainPage />} />
          <Route element={<EditProfilePage />} path="/edit/:id" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
