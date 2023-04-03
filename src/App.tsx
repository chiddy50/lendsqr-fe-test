// import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import icon_1 from './assets/img/icon_1.svg'
import icon_2 from './assets/img/icon_2.svg'
import icon_3 from './assets/img/icon_3.svg'
import icon_4 from './assets/img/icon_4.svg'

function App() {

  return (
    <div className="App bg-gray-100 min-h-screen">
      <Header />

      <div className="m-5">
        <h1 className="text-2xl">Users</h1>
        <section className="grid grid-cols-4 my-4 gap-6">
          <div className='p-4 bg-white rounded-md shadow-sm'>
            <div>
              <img src={icon_1} alt="users icon" />
            </div>
            <p>USERS</p>
            <p className="font-bold text-lg">
              2,453
            </p>
          </div>
          <div className='p-4 bg-white rounded-md'></div>
          <div className='p-4 bg-white rounded-md'></div>
          <div className='p-4 bg-white rounded-md'></div>
        </section>
      </div>
    </div>
  )
}

export default App
