import { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import { UsersContext } from '../context/UsersProvider'
import FilterBox from './FilterBox';
import eye_icon from '../assets/icons/eye_icon.svg'
import blacklist_icon from '../assets/icons/blacklist_icon.svg'
import activate_icon from '../assets/icons/activate_icon.svg'

function DataTable(): JSX.Element {
    const { users } = useContext(UsersContext)
    const [itemsToShow, setItemsToShow] = useState<number>(10); 
    const [showFilter, setShowFilter] = useState<boolean>(false);

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

    useEffect(() => {
        window.onclick = (event) => {
            if (
              !(event.target instanceof Element && event.target.matches('.nav__btn'))
            ) {
              resetDropdowns();
            }
        }
    }, [])

    const toggleFilter = () => setShowFilter((value) => !value);


    const toggleNavModal = (id: number) => {
        resetDropdowns();
        const modal = document.querySelector(`#modal_${id}`)
        if (modal) {            
            modal.setAttribute('style', 'display:block');
        }
    }

    const resetDropdowns = () => {
        let dropdowns = document.getElementsByClassName("userdetails__nav");
        for (const dropdown of dropdowns) {
            dropdown.setAttribute('style', 'display:none');
        }

    }

    return (
        <>
            <div className="bg-white p-6 rounded-lg overflow-x-auto shadow-sm">
                { users.length > 0 && 
                <table className='w-full data__table '>
                    <thead>
                        <tr>
                            {[
                            'ORGANIZATION', 'USERNAME', 'EMAIL', 'PHONE NUMBER', 'DATE JOINED', 'STATUS'
                            ].map((header) => (
                            <th key={header} className="p-4">
                                <span className="flex items-center gap-1">
                                <span
                                    onClick={toggleFilter}
                                    className="text-xs cursor-pointer filterModal__control"
                                >
                                    {header}
                                </span>
                                <i
                                    onClick={toggleFilter}
                                    className="bx bx-filter cursor-pointer text-xl filterModal__control"
                                ></i>
                                </span>
                            </th>
                            ))}
                            <th className="p-4"></th>
                        </tr>
                    </thead>
                    <tbody className="relative">
                        { users.slice(0, itemsToShow).map((user, index) => (  
                                
                                <tr key={index} className='text-xs relative'>
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

                                    <td className='p-4 '>
                                        <i onClick={() => toggleNavModal(user.id) } className='nav__btn bx bx-dots-vertical-rounded text-xl cursor-pointer'></i>
                                        <span id={`modal_${user.id}`} 
                                        className="
                                        absolute 
                                        block
                                        border
                                        bg-white
                                        rounded-md
                                        border-gray-1
                                        shadow-sm 
                                        userdetails__nav
                                        
                                        ">
                                            <span className="flex gap-3 items-center p-3 cursor-pointer hover:bg-gray-200">
                                                <img src={eye_icon} alt="eye icon" />
                                                {/* <Link  className="text-xs" to={`/user-details/${user.id}`}> */}
                                                {/* <span className="text-xs">View Details</span> */}
                                                {/* <Link/> */}
                                                <Link to={`/user-details/${user.id}`}>View Details</Link>
                                            </span>
                                            <span className="flex gap-3 items-center p-3 cursor-pointer hover:bg-gray-200">
                                                <img src={blacklist_icon} alt="eye icon" />                                                
                                                <span className="text-xs">Blacklist User</span>
                                            </span>
                                            <span className="flex gap-3 items-center p-3 cursor-pointer hover:bg-gray-200">
                                                <img src={activate_icon} alt="eye icon" />                                                
                                                <span className="text-xs">Activate User</span>
                                            </span>                                            
                                        </span>
                                    </td>    
                                </tr>
                            ))
                        }

                        {                      
                            showFilter && <FilterBox />                            
                        }

                        
                    </tbody>
                </table> }
            </div>
            <div className="mt-4 flex justify-between">
                <div className="flex items-center gap-4 text-xs">
                    <span>Showing</span>
                    <select className='px-2 py-1 bg-slate-300 rounded-md' 
                    onChange={(e) => setItemsToShow(parseInt(e.target.value))}>
                        <option value="5">5</option>
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

export default DataTable