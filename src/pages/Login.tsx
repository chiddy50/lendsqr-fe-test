import React, { useState, useEffect } from 'react';

import logo from '../assets/img/logo.svg'
import login_img from '../assets/img/login_img.svg'

const Login = () => {
    const [email, setEmail] = useState('johndoe@gmail.com');
    const [password, setPassword] = useState('123456');
    const [passwordType, setPasswordType] = useState('password')
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        localStorage.removeItem('auth')
    }, [])
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!email) {
            setEmailError(true)
            return;
        }
        if (!password) {
            setPasswordError(true)
            return;
        }

        setLoading(true)
        setTimeout(() => {
            setLoading(false)

            const auth = {
                email, password
            }
            localStorage.setItem('auth', JSON.stringify(auth));
            // window.location.href = 's/';
        }, 3000);
        
    }

    const togglePasswordType = () => {
        if (passwordType === 'text') {
            setPasswordType('password')
        }else{
            setPasswordType('text')
        }
    }

    return (
        <div className="min-h-full h-screen">
            <div className="grid grid-cols-2 min-h-full login__page ">
                <div className="p-20 bg-white login__left">
                    <div className="flex pb-20">
                        <img src={logo} alt="logo" 
                        className=''
                        />
                    </div>
                    <div>
                        <img src={login_img} alt="login img" className='' />                    
                    </div>
                </div>
                <div className='login__box text-dark-blue'>
                    <div className="login__form">
                        <div className="flex justify-center mb-8 mobile__logo">
                            <img src={logo} alt="logo" 
                            className=''
                            />
                        </div>
                        <div className="mb-12">
                            <h1 className="text-4xl font-extrabold mb-3 overflow-hidden">Welcome!</h1>
                            <p className="text-sm tracking-wider">Enter details to login.</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <input 
                                type="email" 
                                className={`
                                p-3 w-full 
                                outline-none border
                                text-sm rounded-md
                                ${emailError && 'border-red-500'}
                                ${!emailError && 'border-gray-300'}
                                `}
                                placeholder="Email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>
                            <div className='flex items-center bg-white border border-gray-300 rounded-md'>
                                <input 
                                type={passwordType} 
                                className={`
                                text-sm 
                                w-full p-3 
                                outline-none
                                ${passwordError && 'border-red-500'}
                                ${!passwordError && 'border-gray-300'}
                                `} 
                                placeholder='Password'
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                />
                                <p onClick={togglePasswordType}
                                className='text-light-green text-xs h-full px-4 bg-white cursor-pointer'>
                                    SHOW
                                </p>
                            </div>
                            <p className="text-xs my-8 text-light-green">
                                FORGOT PASSWORD?
                            </p>
                            <button type="submit" disabled={loading} className="flex items-center justify-center gap-2 bg-light-green text-white p-3 rounded-md w-full">
                                <span>LOG IN</span> 
                                { loading && <i className='bx bx-loader bx-spin bx-flip-horizontal' ></i> }
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login