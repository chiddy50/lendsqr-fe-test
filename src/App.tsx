import { BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css'

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';
import Login from './pages/Login';
import { UsersProvider } from './context/UsersProvider'

function App() {

  return (
    <div className="App bg-gray-100 min-h-screen overflow-x-hidden">
      <UsersProvider>
        <BrowserRouter>
          <Routes>

            <Route path='/' element={ <MainLayout /> }>
              <Route index element={ <Home /> } />
              <Route path="/user-details" element={ <UserDetails /> } />
            </Route>

            <Route path="/login" element={ <Login /> } />
            
          </Routes>
        </BrowserRouter>
      </UsersProvider>
    </div>
  )
}

export default App
