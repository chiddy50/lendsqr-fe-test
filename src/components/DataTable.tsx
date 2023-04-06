import { useContext, useState } from 'react';
import { UsersContext } from '../context/UsersProvider'

function DataTable(){
    const { users } = useContext(UsersContext)
    const [itemsToShow, setItemsToShow] = useState<number>(10); // Default to 10 items at a time

    const formatDate = (value: string) => {
        const date = new Date(value);
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const amOrPm = date.getHours() < 12 ? 'AM' : 'PM';
        const hours = date.getHours() % 12 || 12;
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const month = months[date.getMonth()];
        const day = date.getDate().toString().padStart(2, '0');
        const year = date.getFullYear();
        
        return `${month} ${day}, ${year} ${hours}:${minutes} ${amOrPm}`;
    }

    return (
        <>
            <div className="bg-white p-6 rounded-lg overflow-x-auto shadow-sm">
                { users.length > 0 && 
                <table className='w-full data__table '>
                    <thead>
                        <tr>
                        <th className='p-4'>
                            <span className='flex items-center gap-1'>                    
                                <span className='text-xs'>ORGANIZATION</span>
                                <i className='bx bx-filter cursor-pointer text-xl'></i>
                            </span>                    
                        </th>
                        <th className='p-4'>
                            <span className='flex items-center gap-1'>                    
                                <span className='text-xs'>USERNAME</span>
                                <i className='bx bx-filter cursor-pointer text-xl'></i>
                            </span>                    
                        </th>
                        <th className='p-4'>
                            <span className='flex items-center gap-1'>                    
                                <span className='text-xs'>EMAIL</span>
                                <i className='bx bx-filter cursor-pointer text-xl'></i>
                            </span>                    
                        </th>
                        <th className='p-4'>
                            <span className='flex items-center gap-1'>                    
                                <span className='text-xs'>PHONE NUMBER</span>
                                <i className='bx bx-filter cursor-pointer text-xl'></i>
                            </span>                    
                        </th>
                        <th className='p-4'>
                            <span className='flex items-center gap-1'>                    
                                <span className='text-xs'>DATE JOINED</span>
                                <i className='bx bx-filter cursor-pointer text-xl'></i>
                            </span>                    
                        </th>
                        <th className='p-4'>
                            <span className='flex items-center gap-1'>                    
                                <span className='text-xs'>STATUS</span>
                                <i className='bx bx-filter cursor-pointer text-xl'></i>
                            </span>                    
                        </th>
                        <th className='p-4'></th>
                        </tr>
                    </thead>
                    <tbody>
                        { users.slice(0, itemsToShow).map((user, index) => (  
                                
                                <tr key={index} className='text-xs'>
                                    <td className='p-4'>{user.orgName}</td>
                                    <td className='p-4'>{user.userName}</td>
                                    <td className='p-4'>{user.email}</td>
                                    <td className='p-4'>{user.phoneNumber}</td>
                                    <td className='p-4'>{formatDate(user.createdAt)}</td>
                                    <td className='p-4'>
                                        <span className={
                                        `py-2 px-3 rounded-2xl text-uppercase bg-green-100 text-green-600                                           
                                        `}>Active</span>
                                    </td> 
                                    <td className='p-4'>
                                        <i className='bx bx-dots-vertical-rounded text-xl cursor-pointer'></i>
                                    </td>    
                                </tr>
                            ))
                        }
                    
                    </tbody>
                </table> }
            </div>
            <div className="mt-4 flex justify-between">
                <div className="flex items-center gap-4 text-xs">
                    <span>Showing</span>
                    <select onChange={(e) => setItemsToShow(parseInt(e.target.value))}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="100">100</option>
                    </select>
                    <span>out of 100</span>
                </div>
                
                <div className="text-xs">
                    <ul className='flex items-center gap-5'>
                        <li>
                            <i className="bx bx-chevron-left"></i>
                        </li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>...</li>
                        <li>10</li>
                        <li>11</li>
                        <li>
                            <i className="bx bx-chevron-right"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

// ${user === 'Inactive' && 'bg-gray-100 text-black'} 
// ${user === 'Pending' && 'bg-orange-100 text-orange-500'} 
// ${user === 'Blacklisted' && 'bg-red-100 text-red-600'} 
// ${user === 'Active' && 'bg-green-100 text-green-600'} 

export default DataTable