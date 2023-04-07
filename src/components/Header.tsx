import logo from '../assets/img/logo.svg'
import user_img from '../assets/img/user_img.png'

function Header(){
    const toggleSidebar = () => {
        let sidebar = document.querySelector('#sidebar')
        sidebar?.classList.toggle('show');
    }   

    return (
        <header className='
        header
        grid 
        shadow-sm 
        bg-white 
        px-10 
        grid-cols-2
        '>
            <div className='flex items-center justify-between '>
                <i onClick={toggleSidebar} className='
                bx bx-menu-alt-left
                cursor-pointer
                text-4xl
                sidemenu__control
                hover:text-blue-500
                '></i>
                
                <img src={logo} alt="" 
                className='
                xs:hidden
                sm:hidden
                md:block
                lg:block
                xl:block'
                />

                <div className="                 
                rounded-lg
                xs:hidden
                sm:hidden
                md:hidden
                lg:flex
                xl:flex
                ">
                    <input type="text" className='rounded-l-lg border px-4 py-2 text-sm w-80 border-gray-300 outline-none' placeholder='Search for anything'/>
                    <div style={{ width: '45px'}}
                    className="
                    rounded-r-lg
                    flex 
                    items-center 
                    p-2 
                    justify-center 
                    bg-light-green">
                    <i className="bx bx-search text-white "></i>
                    </div>
                </div>
            </div>

            <div className='
                xs:hidden
                sm:hidden
                md:block
                lg:block
                xl:block
            '>
                <div className="h-full flex items-center justify-end">
                    <a href='#' className="">Docs</a>

                    <span className="mx-5">
                        <i className="bx bx-bell text-2xl"></i>
                    </span>

                    <div className="flex items-center">                
                        <img src={user_img} className='mr-2 rounded-full w-8' alt="" />
                        <div className="cursor-pointer">
                            <span className='mx-2'>Adedeji</span>
                            <i className="bx bx-caret-down"></i>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
} 

export default Header