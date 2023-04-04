// import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import DashboardStat from './components/DashboardStat';
import Sidebar from './components/Sidebar';

import icon_1 from './assets/img/icon_1.svg'
import icon_2 from './assets/img/icon_2.svg'
import icon_3 from './assets/img/icon_3.svg'
import icon_4 from './assets/img/icon_4.svg'



function App() {

  return (
    <div className="App bg-gray-100 min-h-screen">
      <Header />

      <div className="m-5 main__container">
        <Sidebar />

        <section className='p-7'>
          <h1 className="text-2xl mb-10 mt-5">Users</h1>
          <div className="
          grid 
          my-5 
          gap-6
          xs:grid-cols-1
          sm:grid-cols-1
          md:grid-cols-2
          lg:grid-cols-2 
          xl:grid-cols-4 
          ">

            <DashboardStat img={icon_1} title="USERS" value="2,453" style="bg-purple-100" />
            <DashboardStat img={icon_2} title="ACTIVE USERS" value="2,453" style="bg-indigo-100"/>
            <DashboardStat img={icon_3} title="USERS WITH LOANS" value="12,453" style="bg-orange-100"/>
            <DashboardStat img={icon_4} title="USERS WITH SAVINGS" value="102,453" style="bg-red-100"/>


          </div>
        </section>
      </div>
    </div>
  )
}

export default App
