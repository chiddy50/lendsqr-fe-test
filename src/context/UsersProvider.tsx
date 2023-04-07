import { ReactElement, createContext, useState } from 'react'

export interface UserType {
    id: number;
    createdAt: string;
    orgName: string;
    userName: string;
    email: string;
    phoneNumber: string;
    lastActiveDate: string;
    profile: Record<string, unknown>;
    guarantor: Record<string, unknown>;
    accountBalance: string;
    accountNumber: string;
    socials: Record<string, unknown>;
    education: Record<string, unknown>;
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
