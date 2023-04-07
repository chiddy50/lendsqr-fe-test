import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import back_arrow from '../assets/icons/back_arrow.svg'
import full_star from '../assets/icons/full_star.svg'
import empty_star from '../assets/icons/empty_star.svg'

import Loader from '../components/Loader';

import { UserType } from '../context/UsersProvider'

function UserDetails(){
    const [ loading, setLoading ] = useState<boolean>(false)
    const [ user, setUser ] = useState<UserType | null>(null);
    const { id } = useParams();
    
    const fetchUser = async () => {
        setLoading(true)
        try {
            const req = await fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`)
            const data = await req.json()
            setUser(data);            
        } catch (err) {
            if (err instanceof Error) console.log(err.message); 
        } finally {
            setLoading(false)   
        }
    }

    const formatCurrencyValues = (values: string[]): string => {
        const formatter = new Intl.NumberFormat('en-NG', {
          style: 'currency',
          currency: 'NGN',
          minimumFractionDigits: 2,
        });
        const formattedValues = values.map((value) => formatter.format(parseFloat(value)));
        return `${formattedValues[0]} - ${formattedValues[1]}`;
    }

    useEffect(() => {
        fetchUser()
    }, []);

    return (
        <>
            { loading && <Loader /> }
            { !loading &&
            <div>
                <Link to="/">
                <div className="my-8 flex items-center gap-3">
                    <img src={back_arrow} alt=''/>
                    <p>Back to Users</p>
                </div>
                </Link>


                <div className="
                mb-8 
                flex 
                items-center 
                justify-between
                xs:flex-col xs:gap-2
                sm:flex-col sm:gap-2
                md:flex-row
                lg:flex-row
                xl:flex-row
                ">
                    <h1 className="text-2xl font-bold">User Details</h1>
                    <div className='flex gap-5'>
                        <button className="border-red-500 text-xs text-red-500 font-bold border py-2.5 px-4 rounded-xl tracking-widest">
                            BLACKLIST USER
                        </button>
                        <button className="text-light-green border-light-green text-xs font-bold border py-2.5 px-4 rounded-xl tracking-widest">
                            ACTIVATE USER
                        </button>
                    </div>
                </div>

                {
                    user &&
                    <div className="mb-7 px-8 pt-8 bg-white rounded-md shadow-sm">
                        <div className="
                        flex 
                        gap-6
                        xs:flex-col
                        sm:flex-col
                        md:flex-col
                        lg:flex-row
                        xl:flex-row
                        ">
                            <div className='
                            gap-4 
                            flex
                            xs:flex-col
                            sm:flex-row
                            md:flex-row
                            lg:flex-row
                            xl:flex-row
                            '>
                                {
                                    String(user.profile.avatar) && <img src={ String(user.profile.avatar) } className='rounded-full' alt="" />}
                                {
                                    !String(user.profile.avatar) &&
                                    <div className="userdetail rounded-full bg-gray-300">
                                        <i className="bx bx-user text-dark-blue text-5xl"></i>
                                    </div>
                                }
                                <div className="
                                flex 
                                justify-center
                                flex-col 
                                ">
                                    <h3 className='text-lg font-bold'>{ String(user.profile.firstName) } { String(user.profile.lastName) }</h3>
                                    <p className='text-sm'>{ user.accountNumber }</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1 justify-center px-5 border-l border-r border-gray-300'>
                                <p>User's Tier</p>
                                <div className='flex gap-1'>
                                    <img src={full_star} alt="" />
                                    <img src={empty_star} alt="" />
                                    <img src={empty_star} alt="" />
                                </div>
                            </div>
                            <div className='flex flex-col gap-1 justify-center'>
                                <p className='font-bold text-lg'>₦{user.accountBalance}</p>
                                <p className='text-xs'>{user.accountNumber}/Providus Bank</p>
                            </div>
                        </div>

                        <div className='mt-8'>
                            <ul className='
                            flex 
                            justify-between 
                            text-sm 
                            xs:flex-col xs:gap-1
                            sm:flex-col sm:gap-1
                            md:flex-row
                            lg:flex-row
                            xl:flex-row
                            '> 
                                <li className='pb-2 cursor-pointer border-b-2 text-light-green border-light-green'>General Details</li>
                                <li className='pb-2 cursor-pointer'>Documents</li>
                                <li className='pb-2 cursor-pointer'>Bank Details</li>
                                <li className='pb-2 cursor-pointer'>Loans</li>
                                <li className='pb-2 cursor-pointer'>Saving</li>
                                <li className='pb-2 cursor-pointer'>App and System</li>
                            </ul>
                        </div>
                    </div>
                }

                {
                    user &&                
                    <div className="p-7 bg-white rounded-md shadow-sm">

                        <div className="border-b pb-8 border-b-gray-200">
                            <h3 className='text-md font-bold mb-5'>Personal Information</h3>

                            <div className="
                            grid 
                            gap-5
                            xs:grid-cols-1 
                            sm:grid-cols-2 
                            md:grid-cols-3 
                            lg:grid-cols-3 
                            xl:grid-cols-5 
                            ">
                                <div className="flex flex-col">
                                    <span className='text-xs'>FULL NAME</span>
                                    <span className='text-sm font-bold'>
                                        { String(user.profile.firstName) } { String(user.profile.lastName) }
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className='text-xs'>PHONE NUMBER</span>
                                    <span className='text-sm font-bold'>
                                        { String(user.profile.phoneNumber) }
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className='text-xs'>EMAIL ADDRESS</span>
                                    <span className='text-sm font-bold'>
                                    { String(user.email) }
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className='text-xs'>BVN</span>
                                    <span className='text-sm font-bold'>
                                    { String(user.profile.bvn) }
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className='text-xs'>GENDER</span>
                                    <span className='text-sm font-bold'>
                                    { String(user.profile.gender) }
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className='text-xs'>MARITAL STATUS</span>
                                    <span className='text-sm font-bold'>Single</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className='text-xs'>CHILDREN</span>
                                    <span className='text-sm font-bold'>None</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className='text-xs'>TYPE OF RESIDENCE</span>
                                    <span className='text-sm font-bold'>Parent's Apartment</span>
                                </div>
                            </div>
                        </div>

                        <div className="border-b py-8 border-b-gray-200">
                            <h3 className='text-md font-bold mb-5'>Education and Employment</h3>

                            <div className="
                            grid 
                            gap-5
                            xs:grid-cols-1 
                            sm:grid-cols-2 
                            md:grid-cols-3 
                            lg:grid-cols-4 
                            xl:grid-cols-4 
                            ">
                                <div className="flex flex-col">
                                    <span className='text-xs'>LEVEL OF EDUCATION</span>
                                    <span className='text-sm font-bold'>
                                        { String(user.education.level) }
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className='text-xs'>EMPLOYMENT STATUS</span>
                                    <span className='text-sm font-bold'>
                                    { String(user.education.employmentStatus) }
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className='text-xs'>SECTOR OF EMPLOYMENT</span>
                                    <span className='text-sm font-bold'>
                                    { String(user.education.sector) }
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className='text-xs'>DURATION OF EMPLOYMENT</span>
                                    <span className='text-sm font-bold'>
                                    { String(user.education.duration) }
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className='text-xs'>OFFICE EMAIL</span>
                                    <span className='text-sm font-bold'>
                                    { String(user.education.officeEmail) }
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className='text-xs'>MONTHLY INCOME</span>
                                    <span className='text-sm font-bold'>
                                        { user && formatCurrencyValues(user.education.monthlyIncome as string[])}
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className='text-xs'>LOAN REPAYMENT</span>
                                    <span className='text-sm font-bold'>
                                    ₦{String(user.education.loanRepayment)}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="border-b py-8 border-b-gray-200">
                            <h3 className='text-md font-bold mb-5'>Socials</h3>

                            <div className="
                            grid 
                            xs:grid-cols-1 xs:gap-3
                            sm:grid-cols-3
                            md:grid-cols-4
                            lg:grid-cols-4
                            xl:grid-cols-4
                            ">
                                <div className="flex flex-col">
                                    <span className='text-xs'>TWITTER</span>
                                    <span className='text-sm font-bold'>
                                        {String(user.socials.twitter)}
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className='text-xs'>FACEBOOK</span>
                                    <span className='text-sm font-bold'>
                                        {String(user.socials.facebook)}
                                    </span>                                
                                </div>
                                <div className="flex flex-col">
                                    <span className='text-xs'>INSTAGRAM</span>
                                    <span className='text-sm font-bold'>
                                        {String(user.socials.instagram)}
                                    </span>                                
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h3 className='text-md font-bold mb-5'>Guarantor</h3>

                            <div className="
                            grid 
                            xs:grid-cols-1 xs:gap-4
                            sm:grid-cols-2 sm:gap-4
                            md:grid-cols-3 md:gap-4
                            lg:grid-cols-4 
                            xl:grid-cols-4
                            ">
                                <div className="flex flex-col">
                                    <span className='text-xs'>FULL NAME</span>
                                    <span className='text-sm font-bold'>
                                        { String(user.guarantor.firstName) } { String(user.guarantor.lastName) }
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className='text-xs'>PHONE NUMBER</span>
                                    <span className='text-sm font-bold'>
                                    { String(user.guarantor.phoneNumber) }
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className='text-xs'>EMAIL ADDRESS</span>
                                    <span className='text-sm font-bold'>{ String(user.email) }</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className='text-xs'>RELATIONSHIP</span>
                                    <span className='text-sm font-bold'>Sister</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                }
            </div>
            }
        </>
    )
}

export default UserDetails