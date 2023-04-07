import { BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css'

import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import UserDetails from './pages/UserDetails';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import { UsersProvider } from './context/UsersProvider'

function App() {

  return (
    <div className="App bg-gray-100 min-h-screen overflow-x-hidden">
      <UsersProvider>
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<ErrorPage />} />

            <Route path='/' element={ <MainLayout /> }>
              <Route index element={ <Dashboard /> } />
              <Route path="/user-details/:id" element={ <UserDetails /> } />
            </Route>

            <Route path="/login" element={ <Login /> } />
            
          </Routes>
        </BrowserRouter>
      </UsersProvider>
    </div>
  )
}

export default App
