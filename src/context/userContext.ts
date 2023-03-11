import {createContext} from 'react';

interface UserContextType {
    userToken: string | null;
    setUserToken: (userToken: string | null) => void;
}

export const UserContext = createContext<UserContextType>({
    userToken: null,
    setUserToken: () => {
    },
});

