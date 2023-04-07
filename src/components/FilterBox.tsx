function FilterBox(){
    
    const countries = ['Nigeria', 'Ghana', 'Togo', 'Libya']
    const status = ['Pending', 'Active', 'Inactive', 'Blacklisted']

    return (
        <span id="table__dropdown" className="table__dropdown block bg-white border border-gray-100 p-4 shadow-sm rounded-md">
            <span className="relative block">
                <label className='text-xs' htmlFor="organization">Organization</label>
                <select id='organization' className="custom__select mt-1 text-xs border border-gray-200 p-2 rounded-lg" style={{ width: '100%', textIndent:'10px', appearance: 'none' }}>
                    <option disabled>Select</option>                                            
                    {
                        countries.map((country, index) => (
                            <option key={index} value={country}>{country}</option>                                            
                        ))
                    }
                </select>
            </span>
            
            <span className="my-3 block">
                <label className='text-xs' htmlFor="username">Username</label>
                <input type="text" id='username' placeholder="User" className="w-full border border-gray-200 rounded-lg py-2 px-4 outline-none text-xs" />
            </span>

            <span className="my-3 block">
                <label className='text-xs' htmlFor="email">Email</label>
                <input type="email" id='email' placeholder="Email" className="border border-gray-200 rounded-lg py-2 px-4 w-full outline-none text-xs" />
            </span>
            
            <span className="my-3 block">
                <label className='text-xs' htmlFor="date">Date</label>
                <div className="relative flex border border-gray-200 rounded-lg p-2">
                    <input type="date" id='date' className="w-full outline-none text-xs border-none" />
                </div>
            </span>

            <span className="my-3 block">
                <label className='text-xs' htmlFor="phone">Phone Number</label>
                <input type="text" id='phone' placeholder="Phone Number" className="border border-gray-200 rounded-lg py-2 px-4 w-full outline-none text-xs" />
            </span>

            <span className="relative my-3 block">
                <label className='text-xs' htmlFor="status">Status</label>
                <select id='status' className="custom__select mt-1 text-xs border border-gray-200 p-2 rounded-lg" style={{ width: '100%', textIndent:'10px', appearance: 'none' }}>
                    <option disabled>Select</option>                                            
                    { 
                        status.map((item, index) => <option key={index} value={item}>{item}</option> ) 
                    }
                </select>
            </span>

            <span className="grid grid-cols-2 gap-3">
                <button className="bg-white text-black cursor-pointer py-2 px-4 border border-black text-xs rounded-md">
                    Reset
                </button>
                <button className="bg-light-green text-white cursor-pointer py-2 px-4 text-xs rounded-md">
                    Filter
                </button>
            </span>
        </span>
    )
}

export default FilterBox