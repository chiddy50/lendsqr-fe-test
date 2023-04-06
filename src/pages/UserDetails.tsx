import back_arrow from '../assets/icons/back_arrow.svg'
import full_star from '../assets/icons/full_star.svg'
import empty_star from '../assets/icons/empty_star.svg'

function UserDetails(){
    return (
        <>
            <div className="my-8 flex items-center gap-3">
                <img src={back_arrow} alt=''/>
                <p>Back to Users</p>
            </div>

            <div className="mb-8 flex items-center justify-between">
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

            <div className="mb-7 px-8 pt-8 bg-white rounded-md shadow-sm">
                <div className="flex gap-6">
                    <div className='flex gap-4'>
                        <div className="userdetail rounded-full bg-gray-300">
                            <i className="bx bx-user text-dark-blue text-5xl"></i>
                        </div>
                        <div className="flex flex-col justify-center">
                            <h3 className='text-lg font-bold'>Grace Effiom</h3>
                            <p className='text-sm'>LSQFf587g90</p>
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
                        <p className='font-bold text-lg'>₦200,000.00</p>
                        <p className='text-xs'>9912345678/Providus Bank</p>
                    </div>
                </div>

                <div className='mt-8'>
                    <ul className='flex justify-between text-sm'> 
                        <li className='pb-2 cursor-pointer border-b-2 text-light-green border-light-green'>General Details</li>
                        <li className='pb-2 cursor-pointer'>Documents</li>
                        <li className='pb-2 cursor-pointer'>Bank Details</li>
                        <li className='pb-2 cursor-pointer'>Loans</li>
                        <li className='pb-2 cursor-pointer'>Saving</li>
                        <li className='pb-2 cursor-pointer'>App and System</li>
                    </ul>
                </div>
            </div>

            <div className="p-7 bg-white rounded-md shadow-sm">

                <div className="border-b pb-8 border-b-gray-200">
                    <h3 className='text-md font-bold mb-5'>Personal Information</h3>

                    <div className="grid grid-cols-5 gap-5">
                        <div className="flex flex-col">
                            <span className='text-xs'>FULL NAME</span>
                            <span className='text-sm font-bold'>Grace Effion</span>
                        </div>
                        <div className="flex flex-col">
                            <span className='text-xs'>PHONE NUMBER</span>
                            <span className='text-sm font-bold'>07060780922</span>
                        </div>
                        <div className="flex flex-col">
                            <span className='text-xs'>EMAIL ADDRESS</span>
                            <span className='text-sm font-bold'>grace@gmail.com</span>
                        </div>
                        <div className="flex flex-col">
                            <span className='text-xs'>BVN</span>
                            <span className='text-sm font-bold'>07060765434</span>
                        </div>
                        <div className="flex flex-col">
                            <span className='text-xs'>GENDER</span>
                            <span className='text-sm font-bold'>Female</span>
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
                        <div className="flex flex-col">
                            <span className='text-xs'>FULL NAME</span>
                            <span className='text-sm font-bold'>Grace Effion</span>
                        </div>
                    </div>
                </div>

                <div className="border-b py-8 border-b-gray-200">
                    <h3 className='text-md font-bold mb-5'>Education and Employment</h3>

                    <div className="grid grid-cols-4 gap-5">
                        <div className="flex flex-col">
                            <span className='text-xs'>LEVEL OF EDUCATION</span>
                            <span className='text-sm font-bold'>B.Sc</span>
                        </div>
                        <div className="flex flex-col">
                            <span className='text-xs'>EMPLOYMENT STATUS</span>
                            <span className='text-sm font-bold'>Employed</span>
                        </div>
                        <div className="flex flex-col">
                            <span className='text-xs'>SECTOR OF EMPLOYMENT</span>
                            <span className='text-sm font-bold'>FinTech</span>
                        </div>
                        <div className="flex flex-col">
                            <span className='text-xs'>DURATION OF EMPLOYMENT</span>
                            <span className='text-sm font-bold'>2 years</span>
                        </div>
                        <div className="flex flex-col">
                            <span className='text-xs'>OFFICE EMAIL</span>
                            <span className='text-sm font-bold'>grace@lendsqr.com</span>
                        </div>
                        <div className="flex flex-col">
                            <span className='text-xs'>MONTHLY INCOME</span>
                            <span className='text-sm font-bold'>₦200,000.00- ₦400,000.00</span>
                        </div>
                        <div className="flex flex-col">
                            <span className='text-xs'>LOAN REPAYMENT</span>
                            <span className='text-sm font-bold'>40,000</span>
                        </div>
                    </div>
                </div>

                <div className="border-b py-8 border-b-gray-200">
                    <h3 className='text-md font-bold mb-5'>Socials</h3>

                    <div className="grid grid-cols-4">
                        <div className="flex flex-col">
                            <span className='text-xs'>TWITTER</span>
                            <span className='text-sm font-bold'>@grace_effiom</span>
                        </div>
                        <div className="flex flex-col">
                            <span className='text-xs'>FACEBOOK</span>
                            <span className='text-sm font-bold'>Grace Effiom</span>
                        </div>
                        <div className="flex flex-col">
                            <span className='text-xs'>INSTAGRAM</span>
                            <span className='text-sm font-bold'>@grace_effiom</span>
                        </div>
                    </div>
                </div>

                <div className="pt-8">
                    <h3 className='text-md font-bold mb-5'>Guarantor</h3>

                    <div className="grid grid-cols-4">
                        <div className="flex flex-col">
                            <span className='text-xs'>FULL NAME</span>
                            <span className='text-sm font-bold'>Debby Ogana</span>
                        </div>
                        <div className="flex flex-col">
                            <span className='text-xs'>PHONE NUMBER</span>
                            <span className='text-sm font-bold'>07039422283</span>
                        </div>
                        <div className="flex flex-col">
                            <span className='text-xs'>EMAIL ADDRESS</span>
                            <span className='text-sm font-bold'>debby@gmail.com</span>
                        </div>
                        <div className="flex flex-col">
                            <span className='text-xs'>RELATIONSHIP</span>
                            <span className='text-sm font-bold'>Sister</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default UserDetails