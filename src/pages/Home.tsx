import { useEffect, useContext, useState } from 'react';

import DataTable from '../components/DataTable';
import DashboardStat from '../components/DashboardStat';
import Loader from '../components/Loader';

import icon_1 from '../assets/img/icon_1.svg'
import icon_2 from '../assets/img/icon_2.svg'
import icon_3 from '../assets/img/icon_3.svg'
import icon_4 from '../assets/img/icon_4.svg'
import { UsersContext } from '../context/UsersProvider'

function Home(){
    const { users, setUsers } = useContext(UsersContext)
    const [ loading, setLoading ] = useState<boolean>(false)

    const fetchProducts = async () => {
        setLoading(true)
        try {
            const req = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
            const data = await req.json()
            setUsers(data);
        } catch (err) {
            if (err instanceof Error) console.log(err.message); 
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchProducts()
    }, []);

    return (
        <>
            <div>
                <h1 className="text-2xl mb-10 mt-5">Users</h1>
                <div className="
                    grid 
                    my-5 
                    gap-6
                    xs:grid-cols-1
                    sm:grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-2 
                    xl:grid-cols-4 
                ">

                    <DashboardStat img={icon_1} title="USERS" value="2,453" style="bg-purple-100" />
                    <DashboardStat img={icon_2} title="ACTIVE USERS" value="2,453" style="bg-indigo-100"/>
                    <DashboardStat img={icon_3} title="USERS WITH LOANS" value="12,453" style="bg-orange-100"/>
                    <DashboardStat img={icon_4} title="USERS WITH SAVINGS" value="102,453" style="bg-red-100"/>

                </div>
            </div>
            <div className="mt-10">
                { loading && <Loader /> }
                { !loading && <DataTable  /> }
            </div>
        </>
    )
}

export default Home