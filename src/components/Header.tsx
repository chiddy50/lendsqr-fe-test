import logo from '../assets/img/logo.svg'

function Header(){
    return (
        <header className='grid shadow-sm bg-white grid-cols-2 px-10 py-6'>
            <div className='flex items-center justify-between '>
            <img src={logo} alt="" />

            <div className="flex rounded-lg">
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

            <div className=''>
            <div className="h-full flex items-center justify-end">
                <a href='#' className="">Docs</a>
                <span className="mx-10">
                <i className="bx bx-bell text-2xl"></i>
                </span>
                <div className="flex items-center">
                <i className="bx bxs-user mr-2"></i>

                <div className="cursor-pointer">
                    <span>Adedeji</span>
                    <i className="bx bx-caret-down"></i>
                </div>
                </div>
            </div>
            </div>
        </header>
    )
} 

export default Header