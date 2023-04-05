function DataTable(){
    const data = [
        'Active',
        'Inactive',
        'Pending',
        'Blacklisted',
        'Active',
        'Inactive',
        'Pending',
        'Blacklisted',
        'Pending',
        'Inactive',
        'Pending',
        'Inactive',
        'Pending'
    ]

    return (
        <div className="bg-white p-6 rounded-lg overflow-x-auto shadow-sm">
            <table className='w-full data__table '>
                <thead>
                    <tr>
                    <th className='p-4'>
                        <span className='flex items-center gap-1'>                    
                            <span className='text-xs'>ORGANIZATION</span>
                            <i className='bx bx-filter text-xl'></i>
                        </span>                    
                    </th>
                    <th className='p-4'>
                        <span className='flex items-center gap-1'>                    
                            <span className='text-xs'>USERNAME</span>
                            <i className='bx bx-filter text-xl'></i>
                        </span>                    
                    </th>
                    <th className='p-4'>
                        <span className='flex items-center gap-1'>                    
                            <span className='text-xs'>EMAIL</span>
                            <i className='bx bx-filter text-xl'></i>
                        </span>                    
                    </th>
                    <th className='p-4'>
                        <span className='flex items-center gap-1'>                    
                            <span className='text-xs'>PHONE NUMBER</span>
                            <i className='bx bx-filter text-xl'></i>
                        </span>                    
                    </th>
                    <th className='p-4'>
                        <span className='flex items-center gap-1'>                    
                            <span className='text-xs'>DATE JOINED</span>
                            <i className='bx bx-filter text-xl'></i>
                        </span>                    
                    </th>
                    <th className='p-4'>
                        <span className='flex items-center gap-1'>                    
                            <span className='text-xs'>STATUS</span>
                            <i className='bx bx-filter text-xl'></i>
                        </span>                    
                    </th>
                    <th className='p-4'></th>
                    </tr>
                </thead>
                <tbody>
                    { data.map((data, index) => (  
                            
                            <tr key={index} className='text-xs'>
                                <td className='p-4'>Lendsqr</td>
                                <td className='p-4'>Adedeji</td>
                                <td className='p-4'>adedeji@lendsqr.com</td>
                                <td className='p-4'>08078903721</td>
                                <td className='p-4'>May 15, 2020 10:00 AM</td>
                                <td className='p-4'>
                                    <span className={
                                    `py-2 px-3 rounded-2xl text-uppercase                                            
                                    ${data === 'Inactive' && 'bg-gray-100 text-black'} 
                                    ${data === 'Pending' && 'bg-orange-100 text-orange-500'} 
                                    ${data === 'Blacklisted' && 'bg-red-100 text-red-600'} 
                                    ${data === 'Active' && 'bg-green-100 text-green-600'} 
                                    `}>{data}</span>
                                </td> 
                                <td className='p-4'>
                                    <i className='bx bx-dots-vertical-rounded text-xl cursor-pointer'></i>
                                </td>    
                            </tr>
                        ))
                    }
                   
                </tbody>
            </table>
        </div>
    )
}

export default DataTable