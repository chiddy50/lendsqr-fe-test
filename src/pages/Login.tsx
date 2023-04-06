import logo from '../assets/img/logo.svg'
import login_img from '../assets/img/login_img.svg'

function Login(){
    return (
        <div className="min-h-full h-screen">
            <div className="grid grid-cols-2 min-h-full ">
                <div className="p-20 bg-white">
                    <div className="flex pb-20">
                        <img src={logo} alt="logo" 
                        className=''
                        />
                    </div>
                    <div>
                        <img src={login_img} alt="login img" className='' />                    
                    </div>
                </div>
                <div className='login__box'>
                    <div className="login__form">
                        <div className="mb-12">
                            <h1 className="text-4xl font-extrabold mb-3 overflow-hidden">Welcome!</h1>
                            <p className="text-sm tracking-wider">Enter details to login.</p>
                        </div>
                        <form action="">
                            <div className='mb-3'>
                                <input type="email" className='p-3 w-full outline-none border border-gray-300 text-sm rounded-md' placeholder="Email" />
                            </div>
                            <div className='flex items-center bg-white border border-gray-300 rounded-md'>
                                <input type="password" className="text-sm w-full p-3 outline-none" placeholder='Password' />
                                <p className='text-light-green text-xs h-full px-4 bg-white cursor-pointer'>SHOW</p>
                            </div>
                            <p className="text-xs my-8 text-light-green">
                                FORGOT PASSWORD?
                            </p>
                            <button className="bg-light-green text-white p-3 rounded-md w-full">
                                LOG IN
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login