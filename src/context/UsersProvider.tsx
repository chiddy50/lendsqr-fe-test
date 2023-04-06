import { ReactElement, createContext, useState, useEffect } from 'react'

export type UserType = {
    id: number,
    createdAt: string,
    orgName: string,
    userName: string,
    email: string,
    phoneNumber: string,
    lastActiveDate: string,
    profile: object,
    guarantor: object,
    accountBalance: string,
    accountNumber: string,
    socials: object,
    education: object
}

const initState: UserType[] = [];

export type UseUsersContextType = { 
    users: UserType[],
    setUsers: (users: UserType[]) => void
}

const initContextState: UseUsersContextType = { 
    users: [],
    setUsers: () => {}
};

export const UsersContext = createContext<UseUsersContextType> (initContextState)

type UsersProviderProps = { children?: ReactElement | ReactElement[] };  

export const UsersProvider = ({ children }: UsersProviderProps): 
ReactElement => {
    const [ users, setUsers ] = useState<UserType[]>([])

    // const fetchUsers = async () => {
    //     const data = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
    //     .then(res => res.json())
    //     .then(res => {
    //         console.log(res);
    //     })
    //     .catch(err => {
    //         if (err instanceof Error) console.log(err.message);
    //     })
    // }
    // useEffect(() => {
    //     fetchUsers()
    //     // Fetch users data here and set it with setUsers
    //     // const usersData = [];
    //     // setUsers(usersData);

    // }, []);

    const contextValue: UseUsersContextType = {
        users,
        setUsers
    };

    return (
        <UsersContext.Provider value={contextValue}>
            { children }
        </UsersContext.Provider>
    )
}

// export default UsersContext