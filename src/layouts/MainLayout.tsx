import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <div className="App bg-gray-100 min-h-screen overflow-x-hidden">
                <Header />

                <div className="m-5 main__container">
                    <Sidebar />

                    <section className='p-7 text-dark-blue'>
                        
                        <Outlet />
                    </section>
                </div>
            </div>
        </>
    )
}

export default Layout