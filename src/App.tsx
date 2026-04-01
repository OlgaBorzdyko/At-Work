import { BrowserRouter, Route, Routes } from 'react-router-dom'

import EditProfilePage from './pages/EditProfilePage'
import MainPage from './pages/MainPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<EditProfilePage />} path="/edit/:id" />
      </Routes>
    </BrowserRouter>
  )
}
export default App
